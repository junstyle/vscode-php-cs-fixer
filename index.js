const fs = require('fs');
if (fs.existsSync(__dirname + '/extension_pack.js'))
	module.exports = require(__dirname + '/extension_pack');
else
	module.exports = require(__dirname + '/extension'); // for development