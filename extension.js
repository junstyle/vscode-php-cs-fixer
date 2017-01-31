'use strict';
var vscode = require('vscode');
var fs = require('fs');
var os = require('os');
var cp = require('child_process');
var TmpDir = os.tmpdir();
var PHPCSFixer = (function () {
    function PHPCSFixer() {
        var config = vscode.workspace.getConfiguration('php-cs-fixer');
        this.save = config.get('onsave', false);
        this.executable = config.get('executablePath', process.platform === "win32" ? "php-cs-fixer.bat" : "php-cs-fixer");
        this.rules = config.get('rules', '@PSR2');
        this.config = config.get('config', '.php_cs');
    }
    PHPCSFixer.prototype.dispose = function () {
        this.command.dispose();
        this.saveCommand.dispose();
    };

    PHPCSFixer.prototype.createRandomFile = function (content) {
        var tmpFileName = TmpDir + '/temp-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + '.php';
        fs.writeFileSync(tmpFileName, content);
        return tmpFileName;
    };

    PHPCSFixer.prototype.activate = function (context) {
        var self = this;
        if (this.save) {
            this.saveCommand = vscode.workspace.onDidSaveTextDocument(function (document) {
                self.fix(document);
            });
        }
        this.command = vscode.commands.registerTextEditorCommand('php-cs-fixer.fix', function (textEditor) {
            self.fix(textEditor.document);
        });
        context.subscriptions.push(this);
    };

    PHPCSFixer.prototype.fix = function (document) {
        if (document.languageId !== 'php') {
            return;
        }
        var fileName = this.createRandomFile(document.getText());
        var stdout = '';
        var stderr = '';
        var args = ['fix', fileName];
        var useConfig = false;
        if(this.config.length>0){
            var files = [];
            var r=vscode.workspace.rootPath;
            if(r==undefined){
                files = [this.config];
            }else{
                files = [this.config, r + '/.vscode/' + this.config, r + '/' + this.config];
            }
            for(var i=0, len=files.length; i<len; i++){
                var c = files[i];
                if(fs.existsSync(c)){
                    args.push('--config='+c);
                    useConfig = true;
                    break;
                }
            }
        }
        if (!useConfig && this.rules) {
            args.push('--rules=' + this.rules);
        }

        var exec = cp.spawn(this.executable, args);
        exec.stdout.on('data', function (buffer) {
            stdout += buffer.toString();
        });
        exec.stderr.on('data', function (buffer) {
            console.log(buffer.toString());
            stderr += buffer.toString();
        });
        exec.on('close', function (code) {
            try{
                fs.unlink(fileName);
            }catch(err){}

            if (code <= 1) {
                var doc = vscode.window.activeTextEditor.document;
                var lastLine = doc.lineAt(doc.lineCount - 1);
                var endOfLastLine = lastLine.range.end;
                var documentEndPosition = new vscode.Position(endOfLastLine.line, endOfLastLine.character);
                var editRange = new vscode.Range(new vscode.Position(0, 0), documentEndPosition);
                var fixed = fs.readFileSync(fileName, 'utf-8');
                vscode.window.activeTextEditor.edit(function(builder){
                    builder.replace(editRange, fixed);
                });

                vscode.window.setStatusBarMessage('PHP CS Fixer: ' + stdout.match(/^Fixed.*/m)[0] + '.', 4000);
                return;
            }

            console.log(stderr);

            if (code === 16) {
                vscode.window.showErrorMessage('PHP CS Fixer: Configuration error of the application.');
                return;
            }
            if (code === 32) {
                vscode.window.showErrorMessage('PHP CS Fixer: Configuration error of a Fixer.');
                return;
            }
            vscode.window.showErrorMessage('PHP CS Fixer unknown error.');
        });
    };
    return PHPCSFixer;
}());
function activate(context) {
    var phpcsfixer = new PHPCSFixer();
    phpcsfixer.activate(context);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map