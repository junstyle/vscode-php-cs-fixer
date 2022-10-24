const beautifyHtml = require('js-beautify').html
const phpParser = require('php-parser')
const htmlparser = require('htmlparser2')

function getFormatOption(options, key, dflt) {
  if (options && Object.prototype.hasOwnProperty.call(options, key)) {
    let value = options[key]
    if (value !== null) {
      return value
    }
  }
  return dflt
}

function getTagsFormatOption(options, key, dflt) {
  let list = getFormatOption(options, key, null)
  if (typeof list === 'string') {
    if (list.length > 0) {
      return list.split(',').map((t) => t.trim().toLowerCase())
    }
    return []
  }
  return dflt
}

function preAction(php: string): string {
  let scriptStyleRanges = getScriptStyleRanges(php)
  let strArr = []
  let tokens = new phpParser().tokenGetAll(php)
  let c = tokens.length
  let index = 0
  for (let i = 0; i < c; i++) {
    let t = tokens[i]
    if (inScriptStyleTag(scriptStyleRanges, index)) {
      if (typeof t == 'object') {
        if (t[0] == 'T_OPEN_TAG' || t[0] == 'T_OPEN_TAG_WITH_ECHO') {
          strArr.push('/*%pcs-comment-start#' + t[1])
        } else if (t[0] == 'T_CLOSE_TAG') {
          // fix new line issue
          let ms = t[1].match(/(\S+)(\s+)$/)
          if (ms) {
            strArr.push(ms[1] + '%pcs-comment-end#*/' + ms[2])
          } else {
            strArr.push(t[1] + '%pcs-comment-end#*/')
          }
        } else {
          if (t[0] == 'T_INLINE_HTML') {
            strArr.push(t[1])
          } else {
            let str = t[1].replace(/\*\//g, '*%comment-end#/').replace(/"/g, 'pcs%quote#1').replace(/'/g, 'pcs%quote~2')
            strArr.push(str)
          }
        }
        index += t[1].length
      } else {
        strArr.push(t)
        index += t.length
      }
    } else {
      if (typeof t == 'object') {
        if (t[0] == 'T_OPEN_TAG' || t[0] == 'T_OPEN_TAG_WITH_ECHO') {
          // <i></i><!-- will not make comment to a new line;
          strArr.push('<i></i><!-- %pcs-comment-start#' + t[1])
        } else if (t[0] == 'T_CLOSE_TAG') {
          // fix new line issue
          var ms = t[1].match(/(\S+)(\s+)$/)
          if (ms) {
            strArr.push(ms[1] + '%pcs-comment-end#-->' + ms[2])
          } else {
            strArr.push(t[1] + '%pcs-comment-end#-->')
          }
        } else {
          if (t[0] == 'T_INLINE_HTML') {
            strArr.push(t[1])
          } else {
            let str = t[1].replace(/-->/g, '-%comment-end#->').replace(/"/g, 'pcs%quote#1').replace(/'/g, 'pcs%quote~2')
            strArr.push(str)
          }
        }
        index += t[1].length
      } else {
        strArr.push(t)
        index += t.length
      }
    }
  }
  if (typeof tokens[c - 1] == 'object' && tokens[c - 1][0] != 'T_CLOSE_TAG' && tokens[c - 1][0] != 'T_INLINE_HTML') {
    strArr.push('?>%pcs-comment-end#-->')
  }
  return strArr.join('')
}

function afterAction(php: string): string {
  return php
    // .replace(/\?>\s*%pcs-comment-end#-->\s*$/g, '')
    .replace(/%pcs-comment-end#-->/g, '')
    .replace(/<i>\s*<\/i>\s*<!-- %pcs-comment-start#/g, '')
    .replace(/-%comment-end#->/g, '-->')
    .replace(/%pcs-comment-end#\*\//g, '')
    .replace(/\/\*%pcs-comment-start#/g, '')
    .replace(/\*%comment-end#\//g, '*/')
    .replace(/pcs%quote#1/g, '"')
    .replace(/pcs%quote~2/g, "'")
}

/**
 * get all script/style tag ranges
 * @param {php code} php
 */
function getScriptStyleRanges(php) {
  let ranges = []
  let start = 0
  let parser = new htmlparser.Parser(
    {
      onopentag: (name) => {
        if (name === 'script' || name === 'style') {
          start = parser.startIndex
        }
      },
      onclosetag: (name) => {
        if (name === 'script' || name === 'style') {
          ranges.push([start, parser.endIndex])
        }
      },
    },
    {
      decodeEntities: true,
    }
  )
  parser.write(php)
  parser.end()
  return ranges
}

function inScriptStyleTag(ranges: number[], index: number) {
  for (let i = 0, c = ranges.length; i < c; i++) {
    if (index >= ranges[i][0] && index <= ranges[i][1]) {
      return true
    }
  }
  return false
}

export function beautify(text: string, options: any): string {
  //if only php code, return text directly
  let indexOfPhp = text.indexOf('<?php')
  let indexOfEndPhp = text.indexOf('?>')
  if (indexOfPhp > -1 && indexOfPhp == text.lastIndexOf('<?php') && indexOfEndPhp == text.lastIndexOf('?>')) {
    if (indexOfEndPhp == -1 || indexOfEndPhp + 3 == text.length) {
      return text.replace(/^\s+<\?php/i, '<?php')
    }
  }
  let htmlOptions = {
    indent_size: options.insertSpaces ? options.tabSize : 1,
    indent_char: options.insertSpaces ? ' ' : '\t',
    wrap_line_length: getFormatOption(options, 'wrapLineLength', 120),
    unformatted: getTagsFormatOption(options, 'unformatted', ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr', '!doctype', '?xml', '?php', '?=', 'basefont', 'isindex']),
    content_unformatted: getTagsFormatOption(options, 'contentUnformatted', void 0),
    indent_inner_html: getFormatOption(options, 'indentInnerHtml', false),
    preserve_newlines: getFormatOption(options, 'preserveNewLines', false),
    max_preserve_newlines: getFormatOption(options, 'maxPreserveNewLines', void 0),
    indent_handlebars: getFormatOption(options, 'indentHandlebars', false),
    end_with_newline: getFormatOption(options, 'endWithNewline', false),
    extra_liners: getTagsFormatOption(options, 'extraLiners', void 0),
    wrap_attributes: getFormatOption(options, 'wrapAttributes', 'auto'),
    templating: 'php',
  }

  let php = preAction(text)
  return afterAction(beautifyHtml(php, htmlOptions))
}
