'use strict';
const vscode = require('vscode');
const {
    commands,
    workspace,
    window,
    languages,
    Range,
    Position
} = vscode;
const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const path = require('path');
const beautifyHtml = require('./beautifyHtml');
const anymatch = require('anymatch');
const TmpDir = os.tmpdir();
let isRunning = false;
let outputChannel;

class PHPCSFixer {
    constructor() {
        this.loadSettings();
        this.checkUpdate();
    }

    loadSettings() {
        let config = workspace.getConfiguration('php-cs-fixer');
        this.onsave = config.get('onsave', false);
        this.autoFixByBracket = config.get('autoFixByBracket', true);
        this.autoFixBySemicolon = config.get('autoFixBySemicolon', false);
        this.executablePath = config.get('executablePath', process.platform === "win32" ? 'php-cs-fixer.bat' : 'php-cs-fixer');
        if (process.platform == "win32" && config.has('executablePathWindows') && config.get('executablePathWindows').length > 0) {
            this.executablePath = config.get('executablePathWindows');
        }
        if (workspace.workspaceFolders != undefined) {
            this.executablePath = this.executablePath.replace('${workspaceRoot}', workspace.workspaceFolders[0].uri.fsPath);
        }
        this.executablePath = this.executablePath.replace('${extensionPath}', __dirname);
        this.executablePath = this.executablePath.replace(/^~\//, os.homedir() + '/');
        this.rules = config.get('rules', '@PSR2');
        if (typeof (this.rules) == 'object') {
            this.rules = JSON.stringify(this.rules);
        }
        this.config = config.get('config', '.php_cs;.php_cs.dist');
        this.formatHtml = config.get('formatHtml', false);
        this.documentFormattingProvider = config.get('documentFormattingProvider', true);
        this.allowRisky = config.get('allowRisky', false);
        this.pathMode = config.get('pathMode', 'override');
        this.exclude = config.get('exclude', []);

        if (this.executablePath.endsWith(".phar")) {
            this.pharPath = this.executablePath.replace(/^php[^ ]* /i, '');
            this.executablePath = workspace.getConfiguration('php').get('validate.executablePath', 'php');
            if (this.executablePath == null || this.executablePath.length == 0) {
                this.executablePath = 'php';
            }
        } else {
            this.pharPath = null;
        }

        //if editor.formatOnSave=true, change timeout to 5000
        var editorConfig = workspace.getConfiguration('editor', null);
        this.editorFormatOnSave = editorConfig.get('formatOnSave');
        if (this.editorFormatOnSave) {
            let timeout = editorConfig.get('formatOnSaveTimeout');
            if (timeout == 750 || timeout == 1250) {
                editorConfig.update('formatOnSaveTimeout', 5000, true);
            }
        }
    }

    getActiveWorkspacePath() {
        let folder = workspace.getWorkspaceFolder(window.activeTextEditor.document.uri);
        if (folder != undefined) {
            return folder.uri.fsPath;
        }
        return undefined;
    }

    getArgs(fileName) {
        let args = ['fix', '--using-cache=no', fileName];
        if (this.pharPath != null) {
            args.unshift(this.pharPath);
        }
        let useConfig = false;
        if (this.config.length > 0) {
            let rootPath = this.getActiveWorkspacePath();
            let configFiles = this.config.split(';') // allow multiple files definitions semicolon separated values
                .filter(file => '' !== file) // do not include empty definitions
                .map(file => file.replace(/^~\//, os.homedir() + '/')); // replace ~/ with home dir

            // include also {workspace.rootPath}/.vscode/ & {workspace.rootPath}/
            let searchPaths = []
            if (rootPath !== undefined) {
                searchPaths = [
                    rootPath + '/.vscode/',
                    rootPath + '/',
                ]
            }

            const files = [];
            for (const file of configFiles) {
                if (path.isAbsolute(file)) {
                    files.push(file)
                } else {
                    for (const searchPath of searchPaths) {
                        files.push(searchPath + file);
                    }
                }
            };

            for (let i = 0, len = files.length; i < len; i++) {
                let c = files[i];
                if (fs.existsSync(c)) {
                    args.push('--config=' + c);
                    useConfig = true;
                    break;
                }
            }
        }
        if (!useConfig && this.rules) {
            args.push('--rules=' + this.rules);
        }
        if (this.allowRisky) {
            args.push('--allow-risky=yes');
        }
        if (fileName.startsWith(TmpDir + '/temp-')) {
            args.push('--path-mode=override');
        } else {
            args.push('--path-mode=' + this.pathMode);
        }

        console.log(args);
        return args;
    }

    format(text, isDiff, workingDirectory = null, isPartial = false) {
        isDiff = !!isDiff ? true : false;
        isRunning = true;

        let fileName = TmpDir + window.activeTextEditor.document.uri.fsPath.replace(/^.*[\\\/]/, '/');
        // if interval between two operations too short, see: https://github.com/junstyle/vscode-php-cs-fixer/issues/76
        // so set different filename for partial codes;
        if (isPartial) {
            fileName = TmpDir + "/php-cs-fixer-partial.php";
        }

        fs.writeFileSync(fileName, text);

        const opts = {};
        if (workingDirectory !== null) {
            opts.cwd = workingDirectory;
        }

        let exec = cp.spawn(this.executablePath, this.getArgs(fileName), opts);

        let promise = new Promise((resolve, reject) => {
            exec.on("error", (err) => {
                console.log(err);
                if (err.code == 'ENOENT') {
                    reject();
                    isRunning = false;
                    this.errorTip();
                }
            });
            exec.on("exit", (code) => {
                if (code == 0) {
                    if (isDiff) {
                        resolve(fileName);
                    } else {
                        let fixed = fs.readFileSync(fileName, 'utf-8');
                        if (fixed.length > 0) {
                            resolve(fixed);
                        } else {
                            reject();
                        }
                    }
                } else {
                    let msgs = {
                        1: 'PHP CS Fixer: php general error.',
                        16: 'PHP CS Fixer: Configuration error of the application.',
                        32: 'PHP CS Fixer: Configuration error of a Fixer.',
                        64: 'PHP CS Fixer: Exception raised within the application.'
                    };
                    window.showErrorMessage(msgs[code]);
                    reject();
                }

                if (!isDiff) {
                    fs.unlink(fileName, function (err) {});
                }
                isRunning = false;
            });
        });

        exec.stdout.on('data', (buffer) => {
            console.log(buffer.toString());
        });
        exec.stderr.on('data', (buffer) => {
            console.log(buffer.toString());
        });
        exec.on('close', (code) => {
            // console.log(code);
        });

        return promise;
    }

    fix(filePath) {
        isRunning = true;

        if (outputChannel == null) {
            outputChannel = window.createOutputChannel('php-cs-fixer');
        }
        outputChannel.clear();
        outputChannel.show(true);

        const opts = {}

        if (filePath != '') {
            opts.cwd = path.dirname(filePath);
        }

        let exec = cp.spawn(this.executablePath, this.getArgs(filePath), opts);

        exec.on("error", (err) => {
            outputChannel.appendLine(err);
            if (err.code == 'ENOENT') {
                isRunning = false;
                this.errorTip();
            }
        });
        exec.on("exit", (code) => {
            isRunning = false;
        });

        exec.stdout.on('data', (buffer) => {
            outputChannel.appendLine(buffer.toString());
        });
        exec.stderr.on('data', (buffer) => {
            outputChannel.appendLine(buffer.toString());
        });
        exec.on('close', (code) => {
            // console.log(code);
        });
    }

    diff(filePath) {
        this.format(fs.readFileSync(filePath), true, path.dirname(filePath)).then((tempFilePath) => {
            commands.executeCommand('vscode.diff', vscode.Uri.file(filePath), vscode.Uri.file(tempFilePath), 'diff');
        });
    }

    doAutoFixByBracket(event) {
        if (event.contentChanges.length == 0) return;
        let pressedKey = event.contentChanges[0].text;
        // console.log(pressedKey);
        if (!/^\s*\}$/.test(pressedKey)) {
            return;
        }

        let editor = window.activeTextEditor;
        let document = editor.document;
        let originalStart = editor.selection.start;
        commands.executeCommand("editor.action.jumpToBracket").then(() => {
            let start = editor.selection.start;
            let offsetStart0 = document.offsetAt(originalStart);
            let offsetStart1 = document.offsetAt(start);
            if (offsetStart0 == offsetStart1) {
                return;
            }

            let nextChar = document.getText(new Range(start, start.translate(0, 1)));
            if (offsetStart0 - offsetStart1 < 3 || nextChar != '{') {
                // jumpToBracket to wrong match bracket, do nothing
                commands.executeCommand("cursorUndo");
                return;
            }

            let line = document.lineAt(start);
            let code = "<?php\n$__pcf__spliter=0;\n";
            let dealFun = (fixed) => {
                return fixed.replace(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\r?\n/, '').replace(/\s*$/, '');
            };
            let searchIndex = -1;
            if (/^\s*\{\s*$/.test(line.text)) {
                // check previous line
                let preline = document.lineAt(line.lineNumber - 1);
                searchIndex = preline.text.search(/((if|for|foreach|while|switch|^\s*function\s+\w+|^\s*function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*$/i);
                if (searchIndex > -1) {
                    line = preline;
                }
            } else {
                searchIndex = line.text.search(/((if|for|foreach|while|switch|^\s*function\s+\w+|^\s*function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*\{\s*$/i);
            }

            if (searchIndex > -1) {
                start = line.range.start;
            } else {
                // indent + if(1)
                code += line.text.match(/^(\s*)\S+/)[1] + "if(1)";
                dealFun = (fixed) => {
                    let match = fixed.match(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\s+?if\s*\(\s*1\s*\)\s*(\{[\s\S]+?\})\s*$/i);
                    if (match != null) {
                        fixed = match[1];
                    } else {
                        fixed = '';
                    }
                    return fixed;
                };
            }

            commands.executeCommand("cursorUndo").then(() => {
                let end = editor.selection.start;
                let range = new Range(start, end);
                let originalText = code + document.getText(range);

                let workingDirectory = null;
                if (document.uri.scheme == 'file') {
                    workingDirectory = path.dirname(document.uri.fsPath)
                }
                this.format(originalText, false, workingDirectory, true).then((text) => {
                    if (text != originalText) {
                        if (dealFun) text = dealFun(text);
                        editor.edit((builder) => {
                            builder.replace(range, text);
                        }).then(() => {
                            if (editor.selections.length > 0) {
                                commands.executeCommand("cancelSelection");
                            }
                        });
                    }
                });
            });
        });
    }

    doAutoFixBySemicolon(event) {
        if (event.contentChanges.length == 0) return;
        let pressedKey = event.contentChanges[0].text;
        // console.log(pressedKey);
        if (pressedKey != ';') {
            return;
        }
        let editor = window.activeTextEditor;
        let line = editor.document.lineAt(editor.selection.start);
        if (line.text.length < 5) {
            return;
        }

        let dealFun = (fixed) => {
            return fixed.replace(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\r?\n/, '').replace(/\s*$/, '');
        };

        let range = line.range;
        let originalText = '<?php\n$__pcf__spliter=0;\n' + line.text;

        let workingDirectory = null;
        if (editor.document.uri.scheme == 'file') {
            workingDirectory = path.dirname(editor.document.uri.fsPath)
        }
        this.format(originalText, false, workingDirectory, true).then((text) => {
            if (text != originalText) {
                if (dealFun) text = dealFun(text);
                editor.edit((builder) => {
                    builder.replace(range, text);
                }).then(() => {
                    if (editor.selections.length > 0) {
                        commands.executeCommand("cancelSelection");
                    }
                });
            }
        });
    }

    registerDocumentProvider(document, options) {
        if (this.isExcluded(document)) {
            return;
        }

        isRunning = false;
        return new Promise((resolve, reject) => {
            let originalText = document.getText();
            let lastLine = document.lineAt(document.lineCount - 1);
            let range = new Range(new Position(0, 0), lastLine.range.end);
            let htmlOptions = Object.assign(options, workspace.getConfiguration('html').get('format'));
            let originalText2 = this.formatHtml ? beautifyHtml.format(originalText, htmlOptions) : originalText;

            let workingDirectory = null;
            if (document.uri.scheme == 'file') {
                workingDirectory = path.dirname(document.uri.fsPath)
            }
            this.format(originalText2, false, workingDirectory).then((text) => {
                if (text != originalText) {
                    resolve([new vscode.TextEdit(range, text)]);
                } else {
                    reject();
                }
            }).catch(err => {
                reject();
            });
        });
    }

    registerDocumentRangeProvider(document, range) {
        if (this.isExcluded(document)) {
            return;
        }

        isRunning = false;
        return new Promise((resolve, reject) => {
            let originalText = document.getText(range);
            if (originalText.replace(/\s+/g, '').length == 0) {
                reject();
                return;
            }
            let addPHPTag = false;
            if (originalText.search(/^\s*<\?php/i) == -1) {
                originalText = "<?php\n" + originalText;
                addPHPTag = true;
            }

            let workingDirectory = null;
            if (document.uri.scheme == 'file') {
                workingDirectory = path.dirname(document.uri.fsPath)
            }
            this.format(originalText, false, workingDirectory).then((text) => {
                if (addPHPTag) {
                    text = text.replace(/^<\?php\r?\n/, '');
                }
                if (text != originalText) {
                    resolve([new vscode.TextEdit(range, text)]);
                } else {
                    reject();
                }
            }).catch(err => {
                reject();
            });
        });
    }

    isExcluded(document) {
        if (this.exclude.length > 0 && document.uri.scheme == 'file' && !document.isUntitled) {
            return anymatch(this.exclude, document.uri.path);
        }
        return false;
    }

    errorTip() {
        // window.showErrorMessage('PHP CS Fixer: ' + err.message + ". executablePath not found. ");
        window.showErrorMessage('PHP CS Fixer: executablePath not found, please check your settings. It will set to built-in php-cs-fixer.phar. Try again!', 'OK');
        let config = workspace.getConfiguration('php-cs-fixer');
        config.update('executablePath', '${extensionPath}' + path.sep + 'php-cs-fixer.phar', true);
    }

    checkUpdate() {
        setTimeout(() => {
            let config = workspace.getConfiguration('php-cs-fixer');
            let executablePath = config.get('executablePath', 'php-cs-fixer');
            let lastDownload = config.get('lastDownload', 1);
            if (lastDownload !== 0 && executablePath == '${extensionPath}' + path.sep + 'php-cs-fixer.phar' && lastDownload + 1000 * 3600 * 24 * 10 < (new Date()).getTime()) {
                console.log('php-cs-fixer: check for updating...');
                let download = require('download');
                download('https://cs.sensiolabs.org/download/php-cs-fixer-v2.phar', __dirname, {
                    'filename': 'php-cs-fixer.phar'
                }).then(() => {
                    config.update('lastDownload', (new Date()).getTime(), true);
                });
            }
        }, 1000 * 60);
    }
}

exports.activate = (context) => {
    let pcf = new PHPCSFixer();

    context.subscriptions.push(workspace.onWillSaveTextDocument((event) => {
        if (event.document.languageId == 'php' && pcf.onsave && pcf.editorFormatOnSave == false) {
            event.waitUntil(commands.executeCommand("editor.action.formatDocument"));
        }
    }));

    context.subscriptions.push(commands.registerTextEditorCommand('php-cs-fixer.fix', (textEditor) => {
        if (textEditor.document.languageId == 'php') {
            commands.executeCommand("editor.action.formatDocument");
        }
    }));

    context.subscriptions.push(workspace.onDidChangeTextDocument((event) => {
        if (event.document.languageId == 'php' && isRunning == false) {
            if (pcf.isExcluded(event.document)) {
                return;
            }

            if (pcf.autoFixByBracket) {
                pcf.doAutoFixByBracket(event);
            }
            if (pcf.autoFixBySemicolon) {
                pcf.doAutoFixBySemicolon(event);
            }
        }
    }));

    context.subscriptions.push(workspace.onDidChangeConfiguration(() => {
        pcf.loadSettings();
    }));

    if (pcf.documentFormattingProvider) {
        context.subscriptions.push(languages.registerDocumentFormattingEditProvider('php', {
            provideDocumentFormattingEdits: (document, options, token) => {
                return pcf.registerDocumentProvider(document, options);
            }
        }));

        context.subscriptions.push(languages.registerDocumentRangeFormattingEditProvider('php', {
            provideDocumentRangeFormattingEdits: (document, range, options, token) => {
                return pcf.registerDocumentRangeProvider(document, range);
            }
        }));
    }

    context.subscriptions.push(commands.registerCommand('php-cs-fixer.fix2', (f) => {
        if (f == undefined) {
            let editor = window.activeTextEditor;
            if (editor != undefined && editor.document.languageId == 'php') {
                f = editor.document.uri;
            }
        }
        if (f != undefined) {
            pcf.fix(f.fsPath);
        } else {
            // only run fix command, not provide file path
            pcf.fix('');
        }
    }));

    context.subscriptions.push(commands.registerCommand('php-cs-fixer.diff', (f) => {
        if (f == undefined) {
            let editor = window.activeTextEditor;
            if (editor != undefined && editor.document.languageId == 'php') {
                f = editor.document.uri;
            }
        }
        if (f != undefined) {
            pcf.diff(f.fsPath);
        }
    }));

};