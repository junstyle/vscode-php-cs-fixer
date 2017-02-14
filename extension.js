'use strict';
const vscode = require('vscode');
const {commands, workspace, window, languages, Range, Position} = vscode;
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
        this.save = config.get('onsave', false);
        this.autoFixByBracket = config.get('autoFixByBracket', true);
        this.autoFixBySemicolon = config.get('autoFixBySemicolon', false);
        this.executablePath = config.get('executablePath', process.platform === "win32" ? "php-cs-fixer.bat" : "php-cs-fixer");
        this.rules = config.get('rules', '@PSR2');
        this.config = config.get('config', '.php_cs');

        if (this.executablePath.endsWith(".phar")) {
            this.pharPath = this.executablePath.replace(/^php[^ ]* /i, '');
            this.executablePath = workspace.getConfiguration('php').get('php.validate.executablePath', 'php');
        }
    }

    getArgs(fileName) {
        let args = ['fix', fileName];
        if (typeof (this.pharPath) != 'undefined') {
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
                } catch (err) { }
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

    fixIt(document, originalText, editRange, dealFun) {
        if (document.languageId !== 'php') {
            return;
        }
        return this.format(originalText).then((text) => {
            return new Promise((resolve, reject) => {
                if (text != originalText) {
                    if (dealFun) text = dealFun(text);
                    window.activeTextEditor.edit((builder) => {
                        builder.replace(editRange, text);
                    }).then(() => {
                        resolve();
                    }, reject);
                } else {
                    resolve();
                }
            });
        });
    }

    fix(document) {
        autoFixing = false;
        let lastLine = document.lineAt(document.lineCount - 1);
        let editRange = new Range(new Position(0, 0), lastLine.range.end);

        return this.fixIt(document, document.getText(), editRange, false);
    }

    doAutoFixByBracket(event) {
        let pressedKey = event.contentChanges[0].text;
        // console.log(pressedKey);
        if (! /^\s*\}$/.test(pressedKey)) {
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
                };
            }

            commands.executeCommand("cursorUndo").then(() => {
                let end = editor.selection.start;
                let range = new Range(start, end);
                let text = code + document.getText(range);
                this.fixIt(document, text, range, dealFun).then(() => {
                    if (editor.selections.length > 0) {
                        commands.executeCommand("cancelSelection");
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
        let text = '<?php\n' + line.text;
        this.fixIt(editor.document, text, line.range, (fixed) => {
            return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
        }).then(() => {
            if (editor.selections.length > 0) {
                commands.executeCommand("cancelSelection");
            }
        });
    }
}

exports.activate = (context) => {
    let pcf = new PHPCSFixer();

    context.subscriptions.push(workspace.onWillSaveTextDocument((event) => {
        let document = event.document;
        if (document.languageId == 'php' && pcf.save && document == window.activeTextEditor.document) {
            event.waitUntil(pcf.fix(document));
        }
    }));

    context.subscriptions.push(commands.registerTextEditorCommand('php-cs-fixer.fix', (textEditor) => {
        pcf.fix(textEditor.document);
    }));

    context.subscriptions.push(workspace.onDidChangeTextDocument((event) => {
        if (autoFixing == false) {
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

    context.subscriptions.push(languages.registerDocumentFormattingEditProvider('php', {
        provideDocumentFormattingEdits: (document, options, token) => {
            return pcf.fix(document);
        }
    }));

    context.subscriptions.push(languages.registerDocumentRangeFormattingEditProvider('php', {
        provideDocumentRangeFormattingEdits: (document, range, options, token) => {
            let text = document.getText(range);
            let addPHPTag = false;
            if (text.search(/^\s*<\?php/i) == -1) {
                text = "<?php\n" + text;
                addPHPTag = true;
            }
            return pcf.fixIt(document, text, range, (fixed) => {
                if (addPHPTag) {
                    return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
                }
                return fixed;
            });
        }
    }));
};