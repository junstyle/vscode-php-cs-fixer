let download = require('download');
download('https://cs.sensiolabs.org/download/php-cs-fixer-v2.phar', __dirname, { 'filename': 'php-cs-fixer.phar' }).then(() => {
	console.log('download php-cs-fixer.phar successfully.');
});