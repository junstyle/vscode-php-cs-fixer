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
const beautifyHtml = require('./beautifyHtml');
const TmpDir = os.tmpdir();
let isRunning = false;

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
        this.executablePath = this.executablePath.replace(/^~\//, os.homedir() + '/');
        this.rules = config.get('rules', '@PSR2');
        if (typeof (this.rules) == 'object') {
            this.rules = JSON.stringify(this.rules);
        }
        this.config = config.get('config', '.php_cs');
        this.formatHtml = config.get('formatHtml', false);
        this.documentFormattingProvider = config.get('documentFormattingProvider', true);
        this.allowRisky = config.get('allowRisky', false);

        if (this.executablePath.endsWith(".phar")) {
            this.pharPath = this.executablePath.replace(/^php[^ ]* /i, '');
            this.executablePath = workspace.getConfiguration('php').get('validate.executablePath', 'php');
            if (this.executablePath == null || this.executablePath.length == 0) {
                this.executablePath = 'php';
            }
        } else {
            this.pharPath = null;
        }
    }

    getArgs(fileName) {
        let args = ['fix', '--using-cache=no', fileName];
        if (this.pharPath != null) {
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
        if (this.allowRisky) {
            args.push('--allow-risky=yes');
        }
        console.log(args);
        return args;
    }

    format(text) {
        isRunning = true;

        let fileName = TmpDir + '/temp-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + '.php';
        fs.writeFileSync(fileName, text);

        let exec = cp.spawn(this.executablePath, this.getArgs(fileName));

        let promise = new Promise((resolve, reject) => {
            exec.on("error", (err) => {
                console.log(err);
                if (err.code == 'ENOENT') {
                    reject();
                    isRunning = false;
                    window.showErrorMessage('PHP CS Fixer: ' + err.message + ". executablePath not found.");
                }
            });
            exec.on("exit", (code) => {
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

                fs.unlink(fileName, function (err) { });
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
            let code = "<?php\n";
            let dealFun = (fixed) => {
                return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
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
}

exports.activate = (context) => {
    let pcf = new PHPCSFixer();

    context.subscriptions.push(workspace.onWillSaveTextDocument((event) => {
        if (event.document.languageId == 'php' && pcf.onsave && workspace.getConfiguration('editor').get('formatOnSave') == false) {
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
                isRunning = false;
                return new Promise((resolve, reject) => {
                    let originalText = document.getText();
                    let lastLine = document.lineAt(document.lineCount - 1);
                    let range = new Range(new Position(0, 0), lastLine.range.end);
                    let htmlOptions = Object.assign(options, workspace.getConfiguration('html').get('format'));
                    let originalText2 = pcf.formatHtml ? beautifyHtml.format(originalText, htmlOptions) : originalText;
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
                    pcf.format(originalText).then((text) => {
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
        }));
    }
};