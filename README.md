this extension is based on makao's [PHP CS Fixer ](https://marketplace.visualstudio.com/items?itemName=makao.phpcsfixer)

# PHP CS Fixer for Visual Studio Code
This extension simply provides [PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) command.

## Instalation
Open command palette <kbd>F1</kbd> and select `Extensions: Install Extension`, then search for PHP CS Fixer.

**Note**: PHP CS Fixer must be installed.

[Installation guide](https://github.com/FriendsOfPHP/PHP-CS-Fixer#installation)

## Configuration
```JSON
{
    "php-cs-fixer.executablePath": "php-cs-fixer",
    "php-cs-fixer.onsave": false,
    "php-cs-fixer.rules": "@PSR2",
    "php-cs-fixer.config": ".php_cs"
}
```
win eg:
```
"php-cs-fixer.executablePath": "php-cs-fixer.bat"
```

## Usage
<kbd>F1</kbd> -> `php-cs-fixer: fix this file`

Additionally you can configure this extension to execute on save.
```JSON
    "php-cs-fixer.onsave": true
```
You can use config file
```JSON
    "php-cs-fixer.config: ".php_cs"
```
.php_cs can place in workspace root folder or .vscode folder.

or
```JSON
    "php-cs-fixer.config: "/full/config/file/path"
```

For more information please visit: https://github.com/FriendsOfPHP/PHP-CS-Fixer

## License
MIT