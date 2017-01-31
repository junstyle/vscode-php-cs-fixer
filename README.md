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
    "php-cs-fixer.rules": "@PSR2"
}
```
win eg:
```
"php-cs-fixer.executablePath": "php-cs-fixer.bat"
```

## Usage
<kbd>F1</kbd> -> `php-cs-fixer: fix this file`

Additionally you can configure this extension to execute on save.

    "php-cs-fixer.onsave": true

For more information please visit: https://github.com/FriendsOfPHP/PHP-CS-Fixer

## License
MIT