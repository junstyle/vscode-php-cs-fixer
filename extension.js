'use strict';
var vscode = require('vscode');
var fs = require('fs');
var os = require('os');
var cp = require('child_process');
var TmpDir = os.tmpdir();
var autoFixing = false;

var PHPCSFixer = (function () {
    function PHPCSFixer() {
        this.loadSettings();
    }

    PHPCSFixer.prototype.loadSettings = function () {
        var config = vscode.workspace.getConfiguration('php-cs-fixer');
        this.save = config.get('onsave', false);
        this.autoFixByBracket = config.get('autoFixByBracket', true);
        this.autoFixBySemicolon = config.get('autoFixBySemicolon', false);
        this.executablePath = config.get('executablePath', process.platform === "win32" ? "php-cs-fixer.bat" : "php-cs-fixer");
        this.rules = config.get('rules', '@PSR2');
        this.config = config.get('config', '.php_cs');
    };

    PHPCSFixer.prototype.dispose = function () {
        this.command.dispose();
        this.saveCommand.dispose();
        this.autoFixCommand.dispose();
        this.reloadSettingsCommand.dispose();
    };

    PHPCSFixer.prototype.activate = function (context) {
        var self = this;
        this.saveCommand = vscode.workspace.onDidSaveTextDocument(function (document) {
            if (self.save && document.fileName == vscode.window.activeTextEditor.document.fileName) {
                self.fix(document);
            }
        });

        this.command = vscode.commands.registerTextEditorCommand('php-cs-fixer.fix', function (textEditor) {
            self.fix(textEditor.document);
        });

        this.autoFixCommand = vscode.workspace.onDidChangeTextDocument(function (event) {
            if (autoFixing == false) {
                if (self.autoFixByBracket) {
                    self.doAutoFixByBracket(event.contentChanges, event.document);
                }
                if (self.autoFixBySemicolon) {
                    self.doAutoFixBySemicolon(event.contentChanges, event.document);
                }
            }
        });

        this.reloadSettingsCommand = vscode.workspace.onDidChangeConfiguration(() => {
            self.loadSettings();
        });

        context.subscriptions.push(this);
    };

    PHPCSFixer.prototype.getArgs = function (fileName) {
        var args = ['fix', fileName];
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
    };

    PHPCSFixer.prototype.fixIt = function (document, text, editRange, resultType, cb) {
        if (document.languageId !== 'php') {
            return;
        }

        var fileName = TmpDir + '/temp-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + '.php';
        fs.writeFileSync(fileName, text);
        var stdout = '';

        var exec = cp.spawn(this.executablePath, this.getArgs(fileName));
        exec.stdout.on('data', function (buffer) {
            stdout += buffer.toString();
        });
        exec.stderr.on('data', function (buffer) {
            console.log(buffer.toString());
        });
        exec.on('close', function (code) {
            switch (code) {
                case 0:
                    var fixed = fs.readFileSync(fileName, 'utf-8');
                    if (resultType == 1) {
                        fixed = fixed.replace(/^<\?php\r?\n/, '').replace(/\s*$/, '');
                    } else if (resultType == 2) {
                        var match = fixed.match(/^<\?php\s+?if\s*\(\s*1\s*\)\s*(\{[\s\S]+?\})\s*$/i);
                        if (match != null) {
                            fixed = match[1];
                        } else {
                            fixed = '';
                        }
                    }

                    if (fixed.length > 0) {
                        vscode.window.activeTextEditor.edit(function (builder) {
                            builder.replace(editRange, fixed);
                        }).then(function () {
                            cb && cb();
                            autoFixing = false;
                        });
                    } else {
                        autoFixing = false;
                    }

                    // vscode.window.setStatusBarMessage('PHP CS Fixer: ' + stdout.match(/^Fixed.*/m)[0] + '.', 4000);
                    break;
                case 1:
                    vscode.window.showErrorMessage('PHP CS Fixer: php general error.');
                    break;
                case 16:
                    vscode.window.showErrorMessage('PHP CS Fixer: Configuration error of the application.');
                    break;
                case 32:
                    vscode.window.showErrorMessage('PHP CS Fixer: Configuration error of a Fixer.');
                    break;
                default:
                    vscode.window.showErrorMessage('PHP CS Fixer unknown error.');
                    break;
            }

            if (code != 0) {
                autoFixing = false;
            }

            try {
                fs.unlink(fileName);
            } catch (err) { }
        });
    };

    PHPCSFixer.prototype.fix = function (document) {
        var lastLine = document.lineAt(document.lineCount - 1);
        var endOfLastLine = lastLine.range.end;
        var documentEndPosition = new vscode.Position(endOfLastLine.line, endOfLastLine.character);
        var editRange = new vscode.Range(new vscode.Position(0, 0), documentEndPosition);

        this.fixIt(document, document.getText(), editRange, false);
        autoFixing = false;
    };

    PHPCSFixer.prototype.doAutoFixByBracket = function (contentChanges, document) {
        var pressedKey = contentChanges[0].text;
        // console.log(pressedKey);
        if (! /^\s*\}$/.test(pressedKey)) {
            return;
        }
        autoFixing = true;
        var self = this;
        var editor = vscode.window.activeTextEditor;
        vscode.commands.executeCommand("editor.action.jumpToBracket").then(function () {
            var offsetStart = document.offsetAt(editor.selection.start);
            var cursorAfter = document.getText(new vscode.Range(document.positionAt(offsetStart), document.positionAt(offsetStart+1)));
            if(cursorAfter != '{'){
                // jumpToBracket to wrong match bracket, do nothing
                vscode.commands.executeCommand("cursorUndo").then(function(){
                    autoFixing = false;
                });
                return;
            }
            var line = document.lineAt(document.positionAt(offsetStart));
            var code = "<?php\n";
            var resultType = 1;
            var searchIndex = -1;
            if (/^\s*\{\s*$/.test(line.text)) {
                // check previous line
                var preline = document.lineAt(new vscode.Position(line.lineNumber - 1, 0));
                searchIndex = preline.text.search(/((if|for|foreach|while|switch|function\s+\w+|function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*$/i);
                if (searchIndex > -1) {
                    line = preline;
                }
            } else {
                searchIndex = line.text.search(/((if|for|foreach|while|switch|function\s+\w+|function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*\{\s*$/i);
            }

            if (searchIndex > -1) {
                offsetStart = document.offsetAt(line.range.start);
            } else {
                // indent + if(1)
                code += line.text.match(/^(\s*)\S+/)[1] + "if(1)";
                resultType = 2;
            }

            vscode.commands.executeCommand("cursorUndo").then(function () {
                var offsetEnd = document.offsetAt(editor.selection.start);
                if (offsetStart + 3 < offsetEnd) {
                    var range = new vscode.Range(document.positionAt(offsetStart), document.positionAt(offsetEnd));
                    var text = code + document.getText(range);
                    self.fixIt(document, text, range, resultType, function () {
                        if (editor.selections.length > 0) {
                            vscode.commands.executeCommand("cancelSelection");
                        }
                    });
                } else {
                    console.log("no match bracket");
                    autoFixing = false;
                }
            });
        });
    };

    PHPCSFixer.prototype.doAutoFixBySemicolon = function (contentChanges, document) {
        var pressedKey = contentChanges[0].text;
        // console.log(pressedKey);
        if (pressedKey != ';') {
            return;
        }
        autoFixing = true;
        var editor = vscode.window.activeTextEditor;
        var line = document.lineAt(editor.selection.start);
        var text = '<?php\n' + line.text;
        this.fixIt(document, text, line.range, 1);
    };

    return PHPCSFixer;
}());

function activate(context) {
    var phpcsfixer = new PHPCSFixer();
    phpcsfixer.activate(context);
}

exports.activate = activate;