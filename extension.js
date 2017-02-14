'use strict';
var vscode = require('vscode');
var fs = require('fs');
var os = require('os');
var cp = require('child_process');
var TmpDir = os.tmpdir();
var autoFixing = false;

class PHPCSFixer {
    constructor() {
        this.loadSettings();
    }

    loadSettings() {
        var config = vscode.workspace.getConfiguration('php-cs-fixer');
        this.save = config.get('onsave', false);
        this.autoFixByBracket = config.get('autoFixByBracket', true);
        this.autoFixBySemicolon = config.get('autoFixBySemicolon', false);
        this.executablePath = config.get('executablePath', process.platform === "win32" ? "php-cs-fixer.bat" : "php-cs-fixer");
        this.rules = config.get('rules', '@PSR2');
        this.config = config.get('config', '.php_cs');

        if (this.executablePath.endsWith(".phar")) {
            this.pharPath = this.executablePath.replace(/^php[^ ]* /i, '');
            this.executablePath = vscode.workspace.getConfiguration('php').get('php.validate.executablePath', 'php');
        }
    }

    getArgs(fileName) {
        var args = ['fix', fileName];
        if (typeof (this.pharPath) != 'undefined') {
            args.unshift(this.pharPath);
        }
        var useConfig = false;
        if (this.config.length > 0) {
            var files = [];
            var r = vscode.workspace.rootPath;
            if (r == undefined) {
                files = [this.config];
            } else {
                files = [this.config, r + '/.vscode/' + this.config, r + '/' + this.config];
            }
            for (var i = 0, len = files.length; i < len; i++) {
                var c = files[i];
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

        var fileName = TmpDir + '/temp-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + '.php';
        fs.writeFileSync(fileName, text);

        var exec = cp.spawn(this.executablePath, this.getArgs(fileName));

        var promise = new Promise((resolve, reject) => {
            exec.addListener("error", () => {
                reject();
                autoFixing = false;
            });
            exec.addListener("exit", (code) => {
                if (code == 0) {
                    var fixed = fs.readFileSync(fileName, 'utf-8');
                    if (fixed.length > 0) {
                        resolve(fixed);
                    } else {
                        reject();
                    }
                } else {
                    var msgs = {
                        1: 'PHP CS Fixer: php general error.',
                        16: 'PHP CS Fixer: Configuration error of the application.',
                        32: 'PHP CS Fixer: Configuration error of a Fixer.',
                        64: 'PHP CS Fixer: Exception raised within the application.'
                    };
                    vscode.window.showErrorMessage(msgs[code]);
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
                    vscode.window.activeTextEditor.edit((builder) => {
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
        var lastLine = document.lineAt(document.lineCount - 1);
        var editRange = new vscode.Range(new vscode.Position(0, 0), lastLine.range.end);

        return this.fixIt(document, document.getText(), editRange, false);
    }

    doAutoFixByBracket(event) {
        var pressedKey = event.contentChanges[0].text;
        // console.log(pressedKey);
        if (! /^\s*\}$/.test(pressedKey)) {
            return;
        }
        var self = this;
        var editor = vscode.window.activeTextEditor;
        var document = editor.document;
        var originalStart = editor.selection.start;
        vscode.commands.executeCommand("editor.action.jumpToBracket").then(() => {
            var start = editor.selection.start;
            var offsetStart0 = document.offsetAt(originalStart);
            var offsetStart1 = document.offsetAt(start);
            if (offsetStart0 == offsetStart1) {
                return;
            }

            if (offsetStart0 - offsetStart1 < 3) {
                // jumpToBracket to wrong match bracket, do nothing
                vscode.commands.executeCommand("cursorUndo");
                return;
            }

            var nextChar = document.getText(new vscode.Range(start, start.translate(0, 1)));
            if (nextChar != '{') {
                // jumpToBracket to wrong match bracket, do nothing
                vscode.commands.executeCommand("cursorUndo");
                return;
            }

            var line = document.lineAt(start);
            var code = "<?php\n";
            var dealFun = (fixed) => {
                return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
            };
            var searchIndex = -1;
            if (/^\s*\{\s*$/.test(line.text)) {
                // check previous line
                var preline = document.lineAt(line.lineNumber - 1);
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
                    var match = fixed.match(/^<\?php\s+?if\s*\(\s*1\s*\)\s*(\{[\s\S]+?\})\s*$/i);
                    if (match != null) {
                        fixed = match[1];
                    } else {
                        fixed = '';
                    }
                };
            }

            vscode.commands.executeCommand("cursorUndo").then(() => {
                var end = editor.selection.start;
                var range = new vscode.Range(start, end);
                var text = code + document.getText(range);
                self.fixIt(document, text, range, dealFun).then(() => {
                    if (editor.selections.length > 0) {
                        vscode.commands.executeCommand("cancelSelection");
                    }
                });
            });
        });
    }

    doAutoFixBySemicolon(event) {
        var pressedKey = event.contentChanges[0].text;
        // console.log(pressedKey);
        if (pressedKey != ';') {
            return;
        }
        var editor = vscode.window.activeTextEditor;
        var line = editor.document.lineAt(editor.selection.start);
        if (line.text.length < 5) {
            return;
        }
        var text = '<?php\n' + line.text;
        this.fixIt(editor.document, text, line.range, (fixed) => {
            return fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
        }).then(() => {
            if (editor.selections.length > 0) {
                vscode.commands.executeCommand("cancelSelection");
            }
        });
    }
}

exports.activate = (context) => {
    var pcf = new PHPCSFixer();

    context.subscriptions.push(vscode.workspace.onWillSaveTextDocument((event) => {
        var document = event.document;
        if (document.languageId == 'php' && pcf.save && document == vscode.window.activeTextEditor.document) {
            event.waitUntil(pcf.fix(document));
        }
    }));

    context.subscriptions.push(vscode.commands.registerTextEditorCommand('php-cs-fixer.fix', (textEditor) => {
        pcf.fix(textEditor.document);
    }));

    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((event) => {
        if (autoFixing == false) {
            if (pcf.autoFixByBracket) {
                pcf.doAutoFixByBracket(event);
            }
            if (pcf.autoFixBySemicolon) {
                pcf.doAutoFixBySemicolon(event);
            }
        }
    }));

    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
        pcf.loadSettings();
    }));

    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('php', {
        provideDocumentFormattingEdits: (document, options, token) => {
            return pcf.fix(document);
        }
    }));

    context.subscriptions.push(vscode.languages.registerDocumentRangeFormattingEditProvider('php', {
        provideDocumentRangeFormattingEdits: (document, range, options, token) => {
            var text = document.getText(range);
            var addPHPTag = false;
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