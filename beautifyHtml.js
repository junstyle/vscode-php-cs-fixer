const beautify_html = require('js-beautify').html;
const phpParser = require('php-parser');

function getFormatOption(options, key, dflt) {
	if (options && Object.prototype.hasOwnProperty.call(options, key)) {
		let value = options[key];
		if (value !== null) {
			return value;
		}
	}
	return dflt;
}

function getTagsFormatOption(options, key, dflt) {
	let list = getFormatOption(options, key, null);
	if (typeof list === 'string') {
		if (list.length > 0) {
			return list.split(',').map(t => t.trim().toLowerCase());
		}
		return [];
	}
	return dflt;
}

function preAction(php) {
	let strArr = [];
	let tokens = (new phpParser()).tokenGetAll(php);
	let c = tokens.length;
	for (let i = 0; i < c; i++) {
		if (typeof (tokens[i]) == 'object') {
			if (tokens[i][0] == 'T_OPEN_TAG' || tokens[i][0] == 'T_OPEN_TAG_WITH_ECHO') {
				strArr.push('<!--!%pcs-comment-start!#' + tokens[i][1]);
			} else if (tokens[i][0] == 'T_CLOSE_TAG') {
				// fix new line issue
				var ms = tokens[i][1].match(/(\S+)(\s+)$/);
				if (ms) {
					strArr.push(ms[1] + '!%pcs-comment-end!#-->' + ms[2]);
				} else {
					strArr.push(tokens[i][1] + '!%pcs-comment-end!#-->');
				}
			} else {
				strArr.push(tokens[i][1]);
			}
		} else {
			strArr.push(tokens[i]);
		}
	}
	if (typeof (tokens[c - 1]) == 'object' && (tokens[c - 1][0] != 'T_CLOSE_TAG' && tokens[c - 1][0] != 'T_INLINE_HTML')) {
		strArr.push('?>!%pcs-comment-end!#-->');
	}
	return strArr.join('');
}

function afterAction(php) {
	return php.replace(/!%pcs-comment-end!#-->/g, '').replace(/<!--!%pcs-comment-start!#/g, '');
}

exports.format = (text, options) => {
	let htmlOptions = {
		indent_size: options.insertSpaces ? options.tabSize : 1,
		indent_char: options.insertSpaces ? ' ' : '\t',
		wrap_line_length: getFormatOption(options, 'wrapLineLength', 120),
		unformatted: getTagsFormatOption(options, 'unformatted', [
			'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
			'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
			'!doctype', '?xml',
			'?php', '?=',
			'basefont', 'isindex'
		]),
		content_unformatted: getTagsFormatOption(options, 'contentUnformatted', void 0),
		indent_inner_html: getFormatOption(options, 'indentInnerHtml', false),
		preserve_newlines: getFormatOption(options, 'preserveNewLines', false),
		max_preserve_newlines: getFormatOption(options, 'maxPreserveNewLines', void 0),
		indent_handlebars: getFormatOption(options, 'indentHandlebars', false),
		end_with_newline: getFormatOption(options, 'endWithNewline', false),
		extra_liners: getTagsFormatOption(options, 'extraLiners', void 0),
		wrap_attributes: getFormatOption(options, 'wrapAttributes', 'auto')
	};

	let php = preAction(text);
	return afterAction(beautify_html(php, htmlOptions));
};