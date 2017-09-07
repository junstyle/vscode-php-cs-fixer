'use strict';
const { html_beautify } = require('./js-beautify/beautify-html');
const vscode = require('vscode');
const { commands, workspace, window, languages, Range, Position } = vscode;
const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const TmpDir = os.tmpdir();
let autoFixing = false;

class PHPCSFixer {
    constructor() {
        this.loadSettings();
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
        if (workspace.rootPath != undefined) {
            this.executablePath = this.executablePath.replace('${workspaceRoot}', workspace.rootPath);
        }
        this.rules = config.get('rules', '@PSR2');
        this.config = config.get('config', '.php_cs');
        this.formatHtml = config.get('formatHtml', false);
        this.documentFormattingProvider = config.get('documentFormattingProvider', true);

        if (this.executablePath.endsWith(".phar")) {
            this.pharPath = this.executablePath.replace(/^php[^ ]* /i, '');
            this.executablePath = workspace.getConfiguration('php').get('php.validate.executablePath', 'php');
        }
    }

    getArgs(fileName) {
        let args = ['fix', '--using-cache=no', fileName];
        if (typeof(this.pharPath) != 'undefined') {
            args.unshift(this.pharPath);
        }
        let useConfig = false;
        if (this.config.length > 0) {
            let files = [];
            let r = workspace.rootPath;
            if (r == undefined) {
                files = [this.config];
            } else {
                files = [this.config, r + '/.vscode/' + this.config, r + '/' + this.config];
            }
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
        return args;
    }

    format(text) {
        autoFixing = true;

        let fileName = TmpDir + '/temp-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + '.php';
        fs.writeFileSync(fileName, text);

        let exec = cp.spawn(this.executablePath, this.getArgs(fileName));

        let promise = new Promise((resolve, reject) => {
            exec.addListener("error", () => {
                reject();
                autoFixing = false;
            });
            exec.addListener("exit", (code) => {
                if (code == 0) {
                    let fixed = fs.readFileSync(fileName, 'utf-8');
                    if (fixed.length > 0) {
                        resolve(fixed);
                    } else {
                        reject();
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

                try {
                    fs.unlink(fileName);
                } catch (err) {}
                autoFixing = false;
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

    doAutoFixByBracket(event) {
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

            if (offsetStart0 - offsetStart1 < 3) {
                // jumpToBracket to wrong match bracket, do nothing
                commands.executeCommand("cursorUndo");
                return;
            }

            let nextChar = document.getText(new Range(start, start.translate(0, 1)));
            if (nextChar != '{') {
                // jumpToBracket to wrong match bracket, do nothing
                commands.executeCommand("cursorUndo");
                return;
            }

            let line = document.lineAt(start);
            let code = "<?php\n";
            let dealFun = (fixed) => {
                return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
            };
            let searchIndex = -1;
            if (/^\s*\{\s*$/.test(line.text)) {
                // check previous line
                let preline = document.lineAt(line.lineNumber - 1);
                searchIndex = preline.text.search(/((if|for|foreach|while|switch|function\s+\w+|function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*$/i);
                if (searchIndex > -1) {
                    line = preline;
                }
            } else {
                searchIndex = line.text.search(/((if|for|foreach|while|switch|function\s+\w+|function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*\{\s*$/i);
            }

            if (searchIndex > -1) {
                start = line.range.start;
            } else {
                // indent + if(1)
                code += line.text.match(/^(\s*)\S+/)[1] + "if(1)";
                dealFun = (fixed) => {
                    let match = fixed.match(/^<\?php\s+?if\s*\(\s*1\s*\)\s*(\{[\s\S]+?\})\s*$/i);
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

                this.format(originalText).then((text) => {
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
            return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
        };

        let range = line.range;
        let originalText = '<?php\n' + line.text;
        this.format(originalText).then((text) => {
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

    beautifyHtml(text, options) {
        if (this.formatHtml) {
            function getFormatOption(options, key, dflt) {
                if (options && Object.prototype.hasOwnProperty.call(options, key)) {
                    let value = options[key];
                    if (value !== null) {
                        return value;
                    }
                }
                return dflt;
            }

            function getTagsFormatOption(options, key, dflt) {
                let list = getFormatOption(options, key, null);
                if (typeof list === 'string') {
                    if (list.length > 0) {
                        return list.split(',').map(t => t.trim().toLowerCase());
                    }
                    return [];
                }
                return dflt;
            }

            let htmlOptions = {
                indent_size: options.insertSpaces ? options.tabSize : 1,
                indent_char: options.insertSpaces ? ' ' : '\t',
                wrap_line_length: getFormatOption(options, 'wrapLineLength', 120),
                unformatted: getTagsFormatOption(options, 'unformatted', void 0),
                content_unformatted: getTagsFormatOption(options, 'contentUnformatted', void 0),
                indent_inner_html: getFormatOption(options, 'indentInnerHtml', false),
                preserve_newlines: getFormatOption(options, 'preserveNewLines', false),
                max_preserve_newlines: getFormatOption(options, 'maxPreserveNewLines', void 0),
                indent_handlebars: getFormatOption(options, 'indentHandlebars', false),
                end_with_newline: getFormatOption(options, 'endWithNewline', false),
                extra_liners: getTagsFormatOption(options, 'extraLiners', void 0),
                wrap_attributes: getFormatOption(options, 'wrapAttributes', 'auto'),
            };

            return html_beautify(text, htmlOptions);
        } else {
            return text;
        }
    }
}

exports.activate = (context) => {
    let pcf = new PHPCSFixer();

    context.subscriptions.push(workspace.onWillSaveTextDocument((event) => {
        if (event.document.languageId == 'php' && pcf.onsave) {
            autoFixing = false;
            event.waitUntil(commands.executeCommand("editor.action.formatDocument"));
        }
    }));

    context.subscriptions.push(commands.registerTextEditorCommand('php-cs-fixer.fix', (textEditor) => {
        if (textEditor.document.languageId == 'php') {
            autoFixing = false;
            commands.executeCommand("editor.action.formatDocument");
        }
    }));

    context.subscriptions.push(workspace.onDidChangeTextDocument((event) => {
        if (event.document.languageId == 'php' && autoFixing == false) {
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
                autoFixing = false;
                return new Promise((resolve, reject) => {
                    let originalText = document.getText();
                    let lastLine = document.lineAt(document.lineCount - 1);
                    let range = new Range(new Position(0, 0), lastLine.range.end);
                    let originalText2 = pcf.beautifyHtml(originalText, workspace.getConfiguration('html').get('format', options));
                    pcf.format(originalText2).then((text) => {
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
        }));

        context.subscriptions.push(languages.registerDocumentRangeFormattingEditProvider('php', {
            provideDocumentRangeFormattingEdits: (document, range, options, token) => {
                autoFixing = false;
                return new Promise((resolve, reject) => {
                    let originalText = document.getText(range);
                    let addPHPTag = false;
                    if (originalText.search(/^\s*<\?php/i) == -1) {
                        originalText = "<?php\n" + originalText;
                        addPHPTag = true;
                    }
                    pcf.format(originalText).then((text) => {
                        if (addPHPTag) {
                            text = text.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
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
        }));
    }
};