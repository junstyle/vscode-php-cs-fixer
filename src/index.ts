'use strict'
import anymatch from 'anymatch'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import { commands, ExtensionContext, FormattingOptions, languages, Position, Range, TextDocument, TextDocumentChangeEvent, TextEdit, Uri, window, workspace, WorkspaceFolder } from 'vscode'
import { beautify } from './beautifyHtml'
import { PHPCSFixerConfig } from './index.d'
import { clearOutput, disposeOutput, hideStatusBar, output, showOutput, statusInfo } from './output'
import { runAsync } from './runAsync'
const TmpDir = os.tmpdir()
let isRunning = false
let lastActiveEditor = null

class PHPCSFixer extends PHPCSFixerConfig {
  constructor() {
    super()
    this.loadSettings()
    this.checkUpdate()
  }

  loadSettings() {
    const config = workspace.getConfiguration('php-cs-fixer')
    this.onsave = config.get('onsave', false)
    this.autoFixByBracket = config.get('autoFixByBracket', true)
    this.autoFixBySemicolon = config.get('autoFixBySemicolon', false)
    this.executablePath = config.get('executablePath', process.platform === 'win32' ? 'php-cs-fixer.bat' : 'php-cs-fixer')
    if (process.platform == 'win32' && config.get('executablePathWindows', '').length > 0) {
      this.executablePath = config.get('executablePathWindows')
    }
    this.executablePath = this.resolveVscodeExpressions(this.executablePath)
    this.rules = config.get('rules', '@PSR12')
    if (typeof this.rules == 'object') {
      this.rules = JSON.stringify(this.rules)
    }
    this.config = config.get('config', '.php-cs-fixer.php;.php-cs-fixer.dist.php;.php_cs;.php_cs.dist')
    this.formatHtml = config.get('formatHtml', false)
    this.documentFormattingProvider = config.get('documentFormattingProvider', true)
    this.allowRisky = config.get('allowRisky', false)
    this.pathMode = config.get('pathMode', 'override')
    this.exclude = config.get('exclude', [])

    if (this.executablePath.endsWith('.phar')) {
      this.pharPath = this.executablePath.replace(/^php[^ ]* /i, '')
      this.executablePath = workspace.getConfiguration('php').get('validate.executablePath', 'php')
      if (!this.executablePath) {
        this.executablePath = 'php'
      }
    } else {
      this.pharPath = null
    }

    this.editorFormatOnSave = workspace.getConfiguration('editor').get('formatOnSave')
    // this.fileAutoSave = workspace.getConfiguration('files').get('autoSave')
    // this.fileAutoSaveDelay = workspace.getConfiguration('files').get('autoSaveDelay', 1000)
  }

  /**
   * Gets the workspace folder containing the given uri or `null` if no
   * workspace folder contains it and it cannot be reasonably inferred.
   */
  getActiveWorkspaceFolder(uri: Uri): WorkspaceFolder | undefined {
    let candidate = workspace.getWorkspaceFolder(uri)

    // Fallback to using the single root workspace's folder. Multi-root
    // workspaces should not be used because its impossible to guess which one
    // the developer intended to use.
    if (candidate === undefined && workspace.workspaceFolders?.length === 1) {
      candidate = workspace.workspaceFolders[0]
    }

    return candidate
  }

  /**
   * Resolves and interpolates vscode expressions in a given string.
   *
   * Supports the following expressions:
   * - "${workspaceFolder}" or "${workspaceRoot}" (deprecated). Resolves to the
   *   workspace folder that contains the given `context.uri`.
   * - "${extensionPath}" Resolves to the root folder of this extension.
   * - "~" Resolves to the user's home directory.
   *
   * @param context Any additional context that may be necessary to resolve
   * expressions. Expressions with missing context are left as is.
   */
  resolveVscodeExpressions(input: string, context: { uri?: Uri } = {}) {
    const pattern = /^\$\{workspace(Root|Folder)\}/
    if (pattern.test(input) && context.uri) {
      const workspaceFolder = this.getActiveWorkspaceFolder(context.uri)
      // As of time of writing only workspace folders on disk are supported
      // since the php-cs-fixer binary expects to work off local files. UNC
      // filepaths may be supported but this is untested.
      if (workspaceFolder != null && workspaceFolder.uri.scheme === 'file') {
        input = input.replace(pattern, workspaceFolder.uri.fsPath)
      }
    }

    input = input.replace('${extensionPath}', __dirname)
    input = input.replace(/^~\//, os.homedir() + '/')

    return path.normalize(input)
  }

  getRealExecutablePath(uri: Uri): string | undefined {
    return this.resolveVscodeExpressions(this.executablePath, { uri })
  }

  getArgs(uri: Uri, filePath: string = null): string[] {
    filePath = filePath || uri.fsPath

    let args = ['fix', '--using-cache=no', '--format=json']
    if (this.pharPath != null) {
      args.unshift(this.resolveVscodeExpressions(this.pharPath, { uri }))
    }
    let useConfig = false
    if (this.config.length > 0) {
      let rootUri = this.getActiveWorkspaceFolder(uri)?.uri
      let configFiles = this.config
        .split(';') // allow multiple files definitions semicolon separated values
        .filter((file) => '' !== file) // do not include empty definitions
        .map((file) => file.replace(/^~\//, os.homedir() + '/')) // replace ~/ with home dir

      // include also {workspace.rootUri}/.vscode/ & {workspace.rootUri}/
      let searchUris = []
      if (rootUri != null && rootUri.scheme === 'file') {
        searchUris = [Uri.joinPath(rootUri, '.vscode'), rootUri]
      }

      const files = []
      for (const file of configFiles) {
        if (path.isAbsolute(file)) {
          files.push(file)
        } else {
          for (const searchUri of searchUris) {
            files.push(Uri.joinPath(searchUri, file).fsPath)
          }
        }
      }

      for (let i = 0, len = files.length; i < len; i++) {
        let c = files[i]
        if (fs.existsSync(c)) {
          args.push('--config=' + c)
          useConfig = true
          break
        }
      }
    }
    if (!useConfig && this.rules) {
      args.push('--rules=' + this.rules)
    }
    if (this.allowRisky) {
      args.push('--allow-risky=yes')
    }

    if (filePath.startsWith(TmpDir)) {
      args.push('--path-mode=override')
    } else {
      args.push('--path-mode=' + this.pathMode)
    }
    args.push(filePath)

    console.log(args)
    output(JSON.stringify(args, null, 2))
    return args
  }

  format(text: string | Buffer, uri: Uri, isDiff: boolean = false, isPartial: boolean = false): Promise<string> {
    isRunning = true
    clearOutput()
    isPartial || statusInfo('formatting')

    let filePath: string
    // if interval between two operations too short, see: https://github.com/junstyle/vscode-php-cs-fixer/issues/76
    // so set different filePath for partial codes;
    if (isPartial) {
      filePath = TmpDir + '/php-cs-fixer-partial.php'
    } else {
      filePath = path.join(TmpDir, 'php-cs-fixer', 'tmp' + Math.random(), uri.fsPath.replace(/^.*[\\/]/, ''))
      fs.mkdirSync(path.dirname(filePath), { recursive: true })
    }

    fs.writeFileSync(filePath, text)

    const args = this.getArgs(uri, filePath)
    const opts: any = {}
    if (uri.scheme == 'file') {
      opts.cwd = path.dirname(uri.fsPath)
    }

    return new Promise((resolve, reject) => {
      runAsync(this.getRealExecutablePath(uri), args, opts)
        .then(({ stdout, stderr }) => {
          output(stdout)

          if (isDiff) {
            resolve(filePath)
          } else {
            let result = JSON.parse(stdout)
            if (result && result.files.length > 0) {
              resolve(fs.readFileSync(filePath, 'utf-8'))
            } else {
              let lines = stderr.split(/\r?\n/).filter(Boolean)
              if (lines.length > 1) {
                output(stderr)
                isPartial || statusInfo(lines[1])
                return reject(new Error(stderr))
              } else {
                resolve(text.toString())
              }
            }
          }
          hideStatusBar()
        })
        .catch((err) => {
          reject(err)
          output(err.stderr || JSON.stringify(err, null, 2))
          isPartial || statusInfo('failed')

          if (err.code == 'ENOENT') {
            this.errorTip()
          } else if (err.exitCode) {
            const msgs = {
              1: err.stdout || 'General error (or PHP minimal requirement not matched).',
              16: 'Configuration error of the application.', //  The path "/file/path.php" is not readable
              32: 'Configuration error of a Fixer.',
              64: 'Exception raised within the application.',
              255: err.stderr?.match(/PHP (?:Fatal|Parse) error:\s*Uncaught Error:[^\r?\n]+/)?.[0] || 'PHP Fatal error, click to show output.',
            }
            isPartial || statusInfo(msgs[err.exitCode])
          }
        })
        .finally(() => {
          isRunning = false
          if (!isDiff) {
            fs.rm(path.dirname(filePath), { recursive: true, force: true }, function (err) { err && console.error(err) })
          }
        })
    })
  }

  fix(uri: Uri) {
    isRunning = true
    clearOutput()
    statusInfo('fixing')

    const args = this.getArgs(uri)
    const opts: any = {}
    if (uri.fsPath != '') {
      opts.cwd = path.dirname(uri.fsPath)
    }

    runAsync(this.getRealExecutablePath(uri), args, opts, (data) => {
      output(data.toString())
    })
      .then(({ stdout }) => {
        hideStatusBar()
      })
      .catch((err) => {
        statusInfo('failed')
        if (err.code == 'ENOENT') {
          this.errorTip()
        }
      })
      .finally(() => {
        isRunning = false
      })
  }

  diff(uri: Uri) {
    this.format(fs.readFileSync(uri.fsPath), uri, true)
      .then((tempFilePath) => {
        commands.executeCommand('vscode.diff', uri, Uri.file(tempFilePath), 'diff')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  doAutoFixByBracket(event: TextDocumentChangeEvent) {
    if (event.contentChanges.length == 0) return
    let pressedKey = event.contentChanges[0].text
    // console.log(pressedKey);
    if (!/^\s*\}$/.test(pressedKey)) {
      return
    }

    let editor = window.activeTextEditor
    let document = editor.document
    let originalStart = editor.selection.start
    commands.executeCommand('editor.action.jumpToBracket').then(() => {
      let start = editor.selection.start
      let offsetStart0 = document.offsetAt(originalStart)
      let offsetStart1 = document.offsetAt(start)
      if (offsetStart0 == offsetStart1) {
        return
      }

      let nextChar = document.getText(new Range(start, start.translate(0, 1)))
      if (offsetStart0 - offsetStart1 < 3 || nextChar != '{') {
        // jumpToBracket to wrong match bracket, do nothing
        commands.executeCommand('cursorUndo')
        return
      }

      let line = document.lineAt(start)
      let code = '<?php\n$__pcf__spliter=0;\n'
      let dealFun = (fixed) => fixed.replace(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\r?\n/, '').replace(/\s*$/, '')
      let searchIndex = -1
      if (/^\s*\{\s*$/.test(line.text)) {
        // check previous line
        let preline = document.lineAt(line.lineNumber - 1)
        searchIndex = preline.text.search(/((if|for|foreach|while|switch|^\s*function\s+\w+|^\s*function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*$/i)
        if (searchIndex > -1) {
          line = preline
        }
      } else {
        searchIndex = line.text.search(/((if|for|foreach|while|switch|^\s*function\s+\w+|^\s*function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*\{\s*$/i)
      }

      if (searchIndex > -1) {
        start = line.range.start
      } else {
        // indent + if(1)
        code += line.text.match(/^(\s*)\S+/)[1] + 'if(1)'
        dealFun = (fixed) => {
          let match = fixed.match(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\s+?if\s*\(\s*1\s*\)\s*(\{[\s\S]+?\})\s*$/i)
          if (match != null) {
            fixed = match[1]
          } else {
            fixed = ''
          }
          return fixed
        }
      }

      commands.executeCommand('cursorUndo').then(() => {
        let end = editor.selection.start
        let range = new Range(start, end)
        let originalText = code + document.getText(range)

        this.format(originalText, document.uri, false, true)
          .then((text) => {
            text = dealFun(text)
            if (text != dealFun(originalText)) {
              editor
                .edit((builder) => {
                  builder.replace(range, text)
                })
                .then(() => {
                  if (editor.selections.length > 0) {
                    commands.executeCommand('cancelSelection')
                  }
                })
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
  }

  doAutoFixBySemicolon(event: TextDocumentChangeEvent) {
    if (event.contentChanges.length == 0) return
    let pressedKey = event.contentChanges[0].text
    // console.log(pressedKey);
    if (pressedKey != ';') {
      return
    }
    let editor = window.activeTextEditor
    let line = editor.document.lineAt(editor.selection.start)
    if (line.text.length < 5) {
      return
    }

    let dealFun = (fixed) => fixed.replace(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\r?\n/, '').replace(/\s+$/, '')
    let range = line.range
    let originalText = '<?php\n$__pcf__spliter=0;\n' + line.text

    this.format(originalText, editor.document.uri, false, true)
      .then((text) => {
        text = dealFun(text)
        if (text != dealFun(originalText)) {
          editor
            .edit((builder) => {
              builder.replace(range, text)
            })
            .then(() => {
              if (editor.selections.length > 0) {
                commands.executeCommand('cancelSelection')
              }
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  formattingProvider(document: TextDocument, options: FormattingOptions): Promise<TextEdit[]> {
    if (this.isExcluded(document)) {
      return
    }

    // only activeTextEditor, or last activeTextEditor
    // if (window.activeTextEditor == undefined
    //     || (window.activeTextEditor.document.uri.toString() != document.uri.toString() && lastActiveEditor != document.uri.toString()))
    //     return

    isRunning = false
    return new Promise((resolve, reject) => {
      let originalText = document.getText()
      let lastLine = document.lineAt(document.lineCount - 1)
      let range = new Range(new Position(0, 0), lastLine.range.end)
      let htmlOptions = Object.assign(options, workspace.getConfiguration('html').get('format'))
      let originalText2 = this.formatHtml ? beautify(originalText, htmlOptions) : originalText

      this.format(originalText2, document.uri)
        .then((text) => {
          if (text && text != originalText) {
            resolve([new TextEdit(range, text)])
          } else {
            resolve([])
          }
        })
        .catch((err) => {
          console.log(err)
          reject()
        })
    })
  }

  rangeFormattingProvider(document: TextDocument, range: Range): Promise<TextEdit[]> {
    if (this.isExcluded(document)) {
      return
    }

    // only activeTextEditor, or last activeTextEditor
    // if (window.activeTextEditor == undefined
    //     || (window.activeTextEditor.document.uri.toString() != document.uri.toString() && lastActiveEditor != document.uri.toString()))
    //     return

    isRunning = false
    return new Promise((resolve, reject) => {
      let originalText = document.getText(range)
      if (originalText.replace(/\s+/g, '').length == 0) {
        reject()
        return
      }
      let addPHPTag = false
      if (originalText.search(/^\s*<\?php/i) == -1) {
        originalText = '<?php\n' + originalText
        addPHPTag = true
      }

      this.format(originalText, document.uri)
        .then((text) => {
          if (addPHPTag) {
            text = text.replace(/^<\?php\r?\n/, '')
          }
          if (text && text != originalText) {
            resolve([new TextEdit(range, text)])
          } else {
            resolve([])
          }
        })
        .catch((err) => {
          console.log(err)
          reject()
        })
    })
  }

  isExcluded(document: TextDocument): boolean {
    if (this.exclude.length > 0 && document.uri.scheme == 'file' && !document.isUntitled) {
      return anymatch(this.exclude, document.uri.path)
    }
    return false
  }

  errorTip() {
    window.showErrorMessage('PHP CS Fixer: executablePath not found, please check your settings. It will set to built-in php-cs-fixer.phar. Try again!', 'Open Output').then((t) => {
      if (t == 'Open Output') {
        showOutput()
      }
    })
    const config = workspace.getConfiguration('php-cs-fixer')
    config.update('executablePath', '${extensionPath}/php-cs-fixer.phar', true)
  }

  checkUpdate() {
    setTimeout(() => {
      let config = workspace.getConfiguration('php-cs-fixer')
      let executablePath = config.get('executablePath', 'php-cs-fixer')
      let lastDownload = config.get('lastDownload', 1)
      if (lastDownload !== 0 && executablePath == '${extensionPath}/php-cs-fixer.phar' && lastDownload + 1000 * 3600 * 24 * 7 < new Date().getTime()) {
        console.log('php-cs-fixer: check for updating...')
        const { DownloaderHelper } = require('node-downloader-helper')
        let dl = new DownloaderHelper('https://cs.symfony.com/download/php-cs-fixer-v3.phar', __dirname, { fileName: 'php-cs-fixer.phar.tmp', override: true })
        dl.on('end', () => {
          fs.unlinkSync(path.join(__dirname, 'php-cs-fixer.phar'))
          fs.renameSync(path.join(__dirname, 'php-cs-fixer.phar.tmp'), path.join(__dirname, 'php-cs-fixer.phar'))
          config.update('lastDownload', new Date().getTime(), true)
        })
        dl.start()
      }
    }, 1000 * 60)
  }
}

exports.activate = (context: ExtensionContext) => {
  const pcf = new PHPCSFixer()

  // context.subscriptions.push(window.onDidChangeActiveTextEditor(te => {
  //     if (pcf.fileAutoSave != 'off') {
  //         setTimeout(() => lastActiveEditor = te == undefined ? undefined : te.document.uri.toString(), pcf.fileAutoSaveDelay + 100)
  //     }
  // }))

  context.subscriptions.push(
    workspace.onWillSaveTextDocument((event) => {
      if (event.document.languageId == 'php' && pcf.onsave && pcf.editorFormatOnSave == false) {
        event.waitUntil(pcf.formattingProvider(event.document, {} as any))
      }
    })
  )

  context.subscriptions.push(
    commands.registerTextEditorCommand('php-cs-fixer.fix', (textEditor) => {
      if (textEditor.document.languageId == 'php') {
        pcf.formattingProvider(textEditor.document, {} as any).then((tes) => {
          if (tes && tes.length > 0) {
            textEditor.edit((eb) => {
              eb.replace(tes[0].range, tes[0].newText)
            })
          }
        })
      }
    })
  )

  context.subscriptions.push(
    workspace.onDidChangeTextDocument((event) => {
      if (event.document.languageId == 'php' && isRunning == false) {
        if (pcf.isExcluded(event.document)) {
          return
        }

        if (pcf.autoFixByBracket) {
          pcf.doAutoFixByBracket(event)
        }
        if (pcf.autoFixBySemicolon) {
          pcf.doAutoFixBySemicolon(event)
        }
      }
    })
  )

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(() => {
      pcf.loadSettings()
    })
  )

  if (pcf.documentFormattingProvider) {
    context.subscriptions.push(
      languages.registerDocumentFormattingEditProvider('php', {
        provideDocumentFormattingEdits: (document, options, token) => {
          return pcf.formattingProvider(document, options)
        },
      })
    )

    context.subscriptions.push(
      languages.registerDocumentRangeFormattingEditProvider('php', {
        provideDocumentRangeFormattingEdits: (document, range, options, token) => {
          return pcf.rangeFormattingProvider(document, range)
        },
      })
    )
  }

  context.subscriptions.push(
    commands.registerCommand('php-cs-fixer.fix2', (f) => {
      if (f == undefined) {
        let editor = window.activeTextEditor
        if (editor != undefined && editor.document.languageId == 'php') {
          f = editor.document.uri
        }
      }
      if (f && f.scheme == 'file') {
        let stat = fs.statSync(f.fsPath)
        if (stat.isDirectory()) {
          showOutput()
        }
        if (f != undefined) {
          pcf.fix(f)
        }
      }
    })
  )

  context.subscriptions.push(
    commands.registerCommand('php-cs-fixer.diff', (f) => {
      if (f == undefined) {
        let editor = window.activeTextEditor
        if (editor != undefined && editor.document.languageId == 'php') {
          f = editor.document.uri
        }
      }
      if (f && f.scheme == 'file') {
        if (f != undefined) {
          pcf.diff(f)
        }
      }
    })
  )

  context.subscriptions.push(commands.registerCommand('php-cs-fixer.showOutput', showOutput))
}

exports.deactivate = () => {
  disposeOutput()
}
