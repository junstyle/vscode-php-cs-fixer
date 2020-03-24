const { DownloaderHelper } = require('node-downloader-helper');
let dl = new DownloaderHelper('https://cs.symfony.com/download/php-cs-fixer-v2.phar', __dirname, { 'fileName': 'php-cs-fixer.phar', 'override': true });
dl.on('end', () => console.log('download php-cs-fixer.phar successfully.'));
dl.start();