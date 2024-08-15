"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path2.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// ../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports2) {
    "use strict";
    var path2 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
    exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports2.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports2.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports2.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports2.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports2.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports2.removePrefix = (input, state = {}) => {
      let output2 = input;
      if (output2.startsWith("./")) {
        output2 = output2.slice(2);
        state.prefix = "./";
      }
      return output2;
    };
    exports2.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output2 = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output2 = `(?:^(?!${output2}).*$)`;
      }
      return output2;
    };
  }
});

// ../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// ../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports2, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output2 = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output: output2 });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output2 = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output2 = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output2 = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output: output2 });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output2 = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output2 = output2.replace(/\\/g, "");
          } else {
            output2 = output2.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output2 === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output2, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output2 = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output2 = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output2 = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output: output2 });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output2 = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output2 = "|";
          }
          push({ type: "comma", value, output: output2 });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output2 = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output2 = `\\${value}`;
            }
            push({ type: "text", value, output: output2 });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output2 = utils.removePrefix(input, state);
      let source = create(output2);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// ../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output: output2 } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output: output2, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output2 = match && format ? format(input) : input;
      if (match === false) {
        output2 = format ? format(input) : input;
        match = output2 === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output2);
        }
      }
      return { isMatch: Boolean(match), match, output: output2 };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path2.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// ../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "../node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// ../node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js
var require_normalize_path = __commonJS({
  "../node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js"(exports2, module2) {
    module2.exports = function(path2, stripTrailing) {
      if (typeof path2 !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path2 === "\\" || path2 === "/") return "/";
      var len = path2.length;
      if (len <= 1) return path2;
      var prefix = "";
      if (len > 4 && path2[3] === "\\") {
        var ch = path2[2];
        if ((ch === "?" || ch === ".") && path2.slice(0, 2) === "\\\\") {
          path2 = path2.slice(2);
          prefix = "//";
        }
      }
      var segs = path2.split(/[/\\]+/);
      if (stripTrailing !== false && segs[segs.length - 1] === "") {
        segs.pop();
      }
      return prefix + segs.join("/");
    };
  }
});

// ../node_modules/.pnpm/anymatch@3.1.2/node_modules/anymatch/index.js
var require_anymatch = __commonJS({
  "../node_modules/.pnpm/anymatch@3.1.2/node_modules/anymatch/index.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var picomatch = require_picomatch2();
    var normalizePath = require_normalize_path();
    var BANG = "!";
    var DEFAULT_OPTIONS = { returnIndex: false };
    var arrify = (item) => Array.isArray(item) ? item : [item];
    var createPattern = (matcher, options) => {
      if (typeof matcher === "function") {
        return matcher;
      }
      if (typeof matcher === "string") {
        const glob = picomatch(matcher, options);
        return (string) => matcher === string || glob(string);
      }
      if (matcher instanceof RegExp) {
        return (string) => matcher.test(string);
      }
      return (string) => false;
    };
    var matchPatterns = (patterns, negPatterns, args, returnIndex) => {
      const isList = Array.isArray(args);
      const _path = isList ? args[0] : args;
      if (!isList && typeof _path !== "string") {
        throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
      }
      const path2 = normalizePath(_path);
      for (let index = 0; index < negPatterns.length; index++) {
        const nglob = negPatterns[index];
        if (nglob(path2)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [path2].concat(args.slice(1));
      for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (isList ? pattern(...applied) : pattern(path2)) {
          return returnIndex ? index : true;
        }
      }
      return returnIndex ? -1 : false;
    };
    var anymatch2 = (matchers, testString, options = DEFAULT_OPTIONS) => {
      if (matchers == null) {
        throw new TypeError("anymatch: specify first argument");
      }
      const opts = typeof options === "boolean" ? { returnIndex: options } : options;
      const returnIndex = opts.returnIndex || false;
      const mtchers = arrify(matchers);
      const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
      const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts));
      if (testString == null) {
        return (testString2, ri = false) => {
          const returnIndex2 = typeof ri === "boolean" ? ri : false;
          return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
        };
      }
      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    };
    anymatch2.default = anymatch2;
    module2.exports = anymatch2;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/output.js
var require_output = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/output.js"(exports2, module2) {
    "use strict";
    function OutputLine(parent) {
      this.__parent = parent;
      this.__character_count = 0;
      this.__indent_count = -1;
      this.__alignment_count = 0;
      this.__wrap_point_index = 0;
      this.__wrap_point_character_count = 0;
      this.__wrap_point_indent_count = -1;
      this.__wrap_point_alignment_count = 0;
      this.__items = [];
    }
    OutputLine.prototype.clone_empty = function() {
      var line = new OutputLine(this.__parent);
      line.set_indent(this.__indent_count, this.__alignment_count);
      return line;
    };
    OutputLine.prototype.item = function(index) {
      if (index < 0) {
        return this.__items[this.__items.length + index];
      } else {
        return this.__items[index];
      }
    };
    OutputLine.prototype.has_match = function(pattern) {
      for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
        if (this.__items[lastCheckedOutput].match(pattern)) {
          return true;
        }
      }
      return false;
    };
    OutputLine.prototype.set_indent = function(indent, alignment) {
      if (this.is_empty()) {
        this.__indent_count = indent || 0;
        this.__alignment_count = alignment || 0;
        this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
      }
    };
    OutputLine.prototype._set_wrap_point = function() {
      if (this.__parent.wrap_line_length) {
        this.__wrap_point_index = this.__items.length;
        this.__wrap_point_character_count = this.__character_count;
        this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
        this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
      }
    };
    OutputLine.prototype._should_wrap = function() {
      return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
    };
    OutputLine.prototype._allow_wrap = function() {
      if (this._should_wrap()) {
        this.__parent.add_new_line();
        var next = this.__parent.current_line;
        next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
        next.__items = this.__items.slice(this.__wrap_point_index);
        this.__items = this.__items.slice(0, this.__wrap_point_index);
        next.__character_count += this.__character_count - this.__wrap_point_character_count;
        this.__character_count = this.__wrap_point_character_count;
        if (next.__items[0] === " ") {
          next.__items.splice(0, 1);
          next.__character_count -= 1;
        }
        return true;
      }
      return false;
    };
    OutputLine.prototype.is_empty = function() {
      return this.__items.length === 0;
    };
    OutputLine.prototype.last = function() {
      if (!this.is_empty()) {
        return this.__items[this.__items.length - 1];
      } else {
        return null;
      }
    };
    OutputLine.prototype.push = function(item) {
      this.__items.push(item);
      var last_newline_index = item.lastIndexOf("\n");
      if (last_newline_index !== -1) {
        this.__character_count = item.length - last_newline_index;
      } else {
        this.__character_count += item.length;
      }
    };
    OutputLine.prototype.pop = function() {
      var item = null;
      if (!this.is_empty()) {
        item = this.__items.pop();
        this.__character_count -= item.length;
      }
      return item;
    };
    OutputLine.prototype._remove_indent = function() {
      if (this.__indent_count > 0) {
        this.__indent_count -= 1;
        this.__character_count -= this.__parent.indent_size;
      }
    };
    OutputLine.prototype._remove_wrap_indent = function() {
      if (this.__wrap_point_indent_count > 0) {
        this.__wrap_point_indent_count -= 1;
      }
    };
    OutputLine.prototype.trim = function() {
      while (this.last() === " ") {
        this.__items.pop();
        this.__character_count -= 1;
      }
    };
    OutputLine.prototype.toString = function() {
      var result = "";
      if (this.is_empty()) {
        if (this.__parent.indent_empty_lines) {
          result = this.__parent.get_indent_string(this.__indent_count);
        }
      } else {
        result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
        result += this.__items.join("");
      }
      return result;
    };
    function IndentStringCache(options, baseIndentString) {
      this.__cache = [""];
      this.__indent_size = options.indent_size;
      this.__indent_string = options.indent_char;
      if (!options.indent_with_tabs) {
        this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
      }
      baseIndentString = baseIndentString || "";
      if (options.indent_level > 0) {
        baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
      }
      this.__base_string = baseIndentString;
      this.__base_string_length = baseIndentString.length;
    }
    IndentStringCache.prototype.get_indent_size = function(indent, column) {
      var result = this.__base_string_length;
      column = column || 0;
      if (indent < 0) {
        result = 0;
      }
      result += indent * this.__indent_size;
      result += column;
      return result;
    };
    IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
      var result = this.__base_string;
      column = column || 0;
      if (indent_level < 0) {
        indent_level = 0;
        result = "";
      }
      column += indent_level * this.__indent_size;
      this.__ensure_cache(column);
      result += this.__cache[column];
      return result;
    };
    IndentStringCache.prototype.__ensure_cache = function(column) {
      while (column >= this.__cache.length) {
        this.__add_column();
      }
    };
    IndentStringCache.prototype.__add_column = function() {
      var column = this.__cache.length;
      var indent = 0;
      var result = "";
      if (this.__indent_size && column >= this.__indent_size) {
        indent = Math.floor(column / this.__indent_size);
        column -= indent * this.__indent_size;
        result = new Array(indent + 1).join(this.__indent_string);
      }
      if (column) {
        result += new Array(column + 1).join(" ");
      }
      this.__cache.push(result);
    };
    function Output(options, baseIndentString) {
      this.__indent_cache = new IndentStringCache(options, baseIndentString);
      this.raw = false;
      this._end_with_newline = options.end_with_newline;
      this.indent_size = options.indent_size;
      this.wrap_line_length = options.wrap_line_length;
      this.indent_empty_lines = options.indent_empty_lines;
      this.__lines = [];
      this.previous_line = null;
      this.current_line = null;
      this.next_line = new OutputLine(this);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = false;
      this.__add_outputline();
    }
    Output.prototype.__add_outputline = function() {
      this.previous_line = this.current_line;
      this.current_line = this.next_line.clone_empty();
      this.__lines.push(this.current_line);
    };
    Output.prototype.get_line_number = function() {
      return this.__lines.length;
    };
    Output.prototype.get_indent_string = function(indent, column) {
      return this.__indent_cache.get_indent_string(indent, column);
    };
    Output.prototype.get_indent_size = function(indent, column) {
      return this.__indent_cache.get_indent_size(indent, column);
    };
    Output.prototype.is_empty = function() {
      return !this.previous_line && this.current_line.is_empty();
    };
    Output.prototype.add_new_line = function(force_newline) {
      if (this.is_empty() || !force_newline && this.just_added_newline()) {
        return false;
      }
      if (!this.raw) {
        this.__add_outputline();
      }
      return true;
    };
    Output.prototype.get_code = function(eol) {
      this.trim(true);
      var last_item = this.current_line.pop();
      if (last_item) {
        if (last_item[last_item.length - 1] === "\n") {
          last_item = last_item.replace(/\n+$/g, "");
        }
        this.current_line.push(last_item);
      }
      if (this._end_with_newline) {
        this.__add_outputline();
      }
      var sweet_code = this.__lines.join("\n");
      if (eol !== "\n") {
        sweet_code = sweet_code.replace(/[\n]/g, eol);
      }
      return sweet_code;
    };
    Output.prototype.set_wrap_point = function() {
      this.current_line._set_wrap_point();
    };
    Output.prototype.set_indent = function(indent, alignment) {
      indent = indent || 0;
      alignment = alignment || 0;
      this.next_line.set_indent(indent, alignment);
      if (this.__lines.length > 1) {
        this.current_line.set_indent(indent, alignment);
        return true;
      }
      this.current_line.set_indent();
      return false;
    };
    Output.prototype.add_raw_token = function(token) {
      for (var x = 0; x < token.newlines; x++) {
        this.__add_outputline();
      }
      this.current_line.set_indent(-1);
      this.current_line.push(token.whitespace_before);
      this.current_line.push(token.text);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = false;
    };
    Output.prototype.add_token = function(printable_token) {
      this.__add_space_before_token();
      this.current_line.push(printable_token);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = this.current_line._allow_wrap();
    };
    Output.prototype.__add_space_before_token = function() {
      if (this.space_before_token && !this.just_added_newline()) {
        if (!this.non_breaking_space) {
          this.set_wrap_point();
        }
        this.current_line.push(" ");
      }
    };
    Output.prototype.remove_indent = function(index) {
      var output_length = this.__lines.length;
      while (index < output_length) {
        this.__lines[index]._remove_indent();
        index++;
      }
      this.current_line._remove_wrap_indent();
    };
    Output.prototype.trim = function(eat_newlines) {
      eat_newlines = eat_newlines === void 0 ? false : eat_newlines;
      this.current_line.trim();
      while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
        this.__lines.pop();
        this.current_line = this.__lines[this.__lines.length - 1];
        this.current_line.trim();
      }
      this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
    };
    Output.prototype.just_added_newline = function() {
      return this.current_line.is_empty();
    };
    Output.prototype.just_added_blankline = function() {
      return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
    };
    Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
      var index = this.__lines.length - 2;
      while (index >= 0) {
        var potentialEmptyLine = this.__lines[index];
        if (potentialEmptyLine.is_empty()) {
          break;
        } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
          this.__lines.splice(index + 1, 0, new OutputLine(this));
          this.previous_line = this.__lines[this.__lines.length - 2];
          break;
        }
        index--;
      }
    };
    module2.exports.Output = Output;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/token.js
var require_token = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/token.js"(exports2, module2) {
    "use strict";
    function Token(type, text, newlines, whitespace_before) {
      this.type = type;
      this.text = text;
      this.comments_before = null;
      this.newlines = newlines || 0;
      this.whitespace_before = whitespace_before || "";
      this.parent = null;
      this.next = null;
      this.previous = null;
      this.opened = null;
      this.closed = null;
      this.directives = null;
    }
    module2.exports.Token = Token;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/acorn.js
var require_acorn = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/acorn.js"(exports2) {
    "use strict";
    var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";
    var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";
    var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
    var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
    var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
    var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
    exports2.identifier = new RegExp(identifierStart + identifierChars, "g");
    exports2.identifierStart = new RegExp(identifierStart);
    exports2.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
    exports2.newline = /[\n\r\u2028\u2029]/;
    exports2.lineBreak = new RegExp("\r\n|" + exports2.newline.source);
    exports2.allLineBreaks = new RegExp(exports2.lineBreak.source, "g");
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/options.js
var require_options = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/options.js"(exports2, module2) {
    "use strict";
    function Options(options, merge_child_field) {
      this.raw_options = _mergeOpts(options, merge_child_field);
      this.disabled = this._get_boolean("disabled");
      this.eol = this._get_characters("eol", "auto");
      this.end_with_newline = this._get_boolean("end_with_newline");
      this.indent_size = this._get_number("indent_size", 4);
      this.indent_char = this._get_characters("indent_char", " ");
      this.indent_level = this._get_number("indent_level");
      this.preserve_newlines = this._get_boolean("preserve_newlines", true);
      this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786);
      if (!this.preserve_newlines) {
        this.max_preserve_newlines = 0;
      }
      this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	");
      if (this.indent_with_tabs) {
        this.indent_char = "	";
        if (this.indent_size === 1) {
          this.indent_size = 4;
        }
      }
      this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char"));
      this.indent_empty_lines = this._get_boolean("indent_empty_lines");
      this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
    }
    Options.prototype._get_array = function(name, default_value) {
      var option_value = this.raw_options[name];
      var result = default_value || [];
      if (typeof option_value === "object") {
        if (option_value !== null && typeof option_value.concat === "function") {
          result = option_value.concat();
        }
      } else if (typeof option_value === "string") {
        result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
      }
      return result;
    };
    Options.prototype._get_boolean = function(name, default_value) {
      var option_value = this.raw_options[name];
      var result = option_value === void 0 ? !!default_value : !!option_value;
      return result;
    };
    Options.prototype._get_characters = function(name, default_value) {
      var option_value = this.raw_options[name];
      var result = default_value || "";
      if (typeof option_value === "string") {
        result = option_value.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "	");
      }
      return result;
    };
    Options.prototype._get_number = function(name, default_value) {
      var option_value = this.raw_options[name];
      default_value = parseInt(default_value, 10);
      if (isNaN(default_value)) {
        default_value = 0;
      }
      var result = parseInt(option_value, 10);
      if (isNaN(result)) {
        result = default_value;
      }
      return result;
    };
    Options.prototype._get_selection = function(name, selection_list, default_value) {
      var result = this._get_selection_list(name, selection_list, default_value);
      if (result.length !== 1) {
        throw new Error(
          "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'"
        );
      }
      return result[0];
    };
    Options.prototype._get_selection_list = function(name, selection_list, default_value) {
      if (!selection_list || selection_list.length === 0) {
        throw new Error("Selection list cannot be empty.");
      }
      default_value = default_value || [selection_list[0]];
      if (!this._is_valid_selection(default_value, selection_list)) {
        throw new Error("Invalid Default Value!");
      }
      var result = this._get_array(name, default_value);
      if (!this._is_valid_selection(result, selection_list)) {
        throw new Error(
          "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'"
        );
      }
      return result;
    };
    Options.prototype._is_valid_selection = function(result, selection_list) {
      return result.length && selection_list.length && !result.some(function(item) {
        return selection_list.indexOf(item) === -1;
      });
    };
    function _mergeOpts(allOptions, childFieldName) {
      var finalOpts = {};
      allOptions = _normalizeOpts(allOptions);
      var name;
      for (name in allOptions) {
        if (name !== childFieldName) {
          finalOpts[name] = allOptions[name];
        }
      }
      if (childFieldName && allOptions[childFieldName]) {
        for (name in allOptions[childFieldName]) {
          finalOpts[name] = allOptions[childFieldName][name];
        }
      }
      return finalOpts;
    }
    function _normalizeOpts(options) {
      var convertedOpts = {};
      var key;
      for (key in options) {
        var newKey = key.replace(/-/g, "_");
        convertedOpts[newKey] = options[key];
      }
      return convertedOpts;
    }
    module2.exports.Options = Options;
    module2.exports.normalizeOpts = _normalizeOpts;
    module2.exports.mergeOpts = _mergeOpts;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/options.js
var require_options2 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/options.js"(exports2, module2) {
    "use strict";
    var BaseOptions = require_options().Options;
    var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
    function Options(options) {
      BaseOptions.call(this, options, "js");
      var raw_brace_style = this.raw_options.brace_style || null;
      if (raw_brace_style === "expand-strict") {
        this.raw_options.brace_style = "expand";
      } else if (raw_brace_style === "collapse-preserve-inline") {
        this.raw_options.brace_style = "collapse,preserve-inline";
      } else if (this.raw_options.braces_on_own_line !== void 0) {
        this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
      }
      var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
      this.brace_preserve_inline = false;
      this.brace_style = "collapse";
      for (var bs = 0; bs < brace_style_split.length; bs++) {
        if (brace_style_split[bs] === "preserve-inline") {
          this.brace_preserve_inline = true;
        } else {
          this.brace_style = brace_style_split[bs];
        }
      }
      this.unindent_chained_methods = this._get_boolean("unindent_chained_methods");
      this.break_chained_methods = this._get_boolean("break_chained_methods");
      this.space_in_paren = this._get_boolean("space_in_paren");
      this.space_in_empty_paren = this._get_boolean("space_in_empty_paren");
      this.jslint_happy = this._get_boolean("jslint_happy");
      this.space_after_anon_function = this._get_boolean("space_after_anon_function");
      this.space_after_named_function = this._get_boolean("space_after_named_function");
      this.keep_array_indentation = this._get_boolean("keep_array_indentation");
      this.space_before_conditional = this._get_boolean("space_before_conditional", true);
      this.unescape_strings = this._get_boolean("unescape_strings");
      this.e4x = this._get_boolean("e4x");
      this.comma_first = this._get_boolean("comma_first");
      this.operator_position = this._get_selection("operator_position", validPositionValues);
      this.test_output_raw = this._get_boolean("test_output_raw");
      if (this.jslint_happy) {
        this.space_after_anon_function = true;
      }
    }
    Options.prototype = new BaseOptions();
    module2.exports.Options = Options;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/inputscanner.js
var require_inputscanner = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/inputscanner.js"(exports2, module2) {
    "use strict";
    var regexp_has_sticky = RegExp.prototype.hasOwnProperty("sticky");
    function InputScanner(input_string) {
      this.__input = input_string || "";
      this.__input_length = this.__input.length;
      this.__position = 0;
    }
    InputScanner.prototype.restart = function() {
      this.__position = 0;
    };
    InputScanner.prototype.back = function() {
      if (this.__position > 0) {
        this.__position -= 1;
      }
    };
    InputScanner.prototype.hasNext = function() {
      return this.__position < this.__input_length;
    };
    InputScanner.prototype.next = function() {
      var val = null;
      if (this.hasNext()) {
        val = this.__input.charAt(this.__position);
        this.__position += 1;
      }
      return val;
    };
    InputScanner.prototype.peek = function(index) {
      var val = null;
      index = index || 0;
      index += this.__position;
      if (index >= 0 && index < this.__input_length) {
        val = this.__input.charAt(index);
      }
      return val;
    };
    InputScanner.prototype.__match = function(pattern, index) {
      pattern.lastIndex = index;
      var pattern_match = pattern.exec(this.__input);
      if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
        if (pattern_match.index !== index) {
          pattern_match = null;
        }
      }
      return pattern_match;
    };
    InputScanner.prototype.test = function(pattern, index) {
      index = index || 0;
      index += this.__position;
      if (index >= 0 && index < this.__input_length) {
        return !!this.__match(pattern, index);
      } else {
        return false;
      }
    };
    InputScanner.prototype.testChar = function(pattern, index) {
      var val = this.peek(index);
      pattern.lastIndex = 0;
      return val !== null && pattern.test(val);
    };
    InputScanner.prototype.match = function(pattern) {
      var pattern_match = this.__match(pattern, this.__position);
      if (pattern_match) {
        this.__position += pattern_match[0].length;
      } else {
        pattern_match = null;
      }
      return pattern_match;
    };
    InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
      var val = "";
      var match;
      if (starting_pattern) {
        match = this.match(starting_pattern);
        if (match) {
          val += match[0];
        }
      }
      if (until_pattern && (match || !starting_pattern)) {
        val += this.readUntil(until_pattern, until_after);
      }
      return val;
    };
    InputScanner.prototype.readUntil = function(pattern, until_after) {
      var val = "";
      var match_index = this.__position;
      pattern.lastIndex = this.__position;
      var pattern_match = pattern.exec(this.__input);
      if (pattern_match) {
        match_index = pattern_match.index;
        if (until_after) {
          match_index += pattern_match[0].length;
        }
      } else {
        match_index = this.__input_length;
      }
      val = this.__input.substring(this.__position, match_index);
      this.__position = match_index;
      return val;
    };
    InputScanner.prototype.readUntilAfter = function(pattern) {
      return this.readUntil(pattern, true);
    };
    InputScanner.prototype.get_regexp = function(pattern, match_from) {
      var result = null;
      var flags = "g";
      if (match_from && regexp_has_sticky) {
        flags = "y";
      }
      if (typeof pattern === "string" && pattern !== "") {
        result = new RegExp(pattern, flags);
      } else if (pattern) {
        result = new RegExp(pattern.source, flags);
      }
      return result;
    };
    InputScanner.prototype.get_literal_regexp = function(literal_string) {
      return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    };
    InputScanner.prototype.peekUntilAfter = function(pattern) {
      var start = this.__position;
      var val = this.readUntilAfter(pattern);
      this.__position = start;
      return val;
    };
    InputScanner.prototype.lookBack = function(testVal) {
      var start = this.__position - 1;
      return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
    };
    module2.exports.InputScanner = InputScanner;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/tokenstream.js
var require_tokenstream = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/tokenstream.js"(exports2, module2) {
    "use strict";
    function TokenStream(parent_token) {
      this.__tokens = [];
      this.__tokens_length = this.__tokens.length;
      this.__position = 0;
      this.__parent_token = parent_token;
    }
    TokenStream.prototype.restart = function() {
      this.__position = 0;
    };
    TokenStream.prototype.isEmpty = function() {
      return this.__tokens_length === 0;
    };
    TokenStream.prototype.hasNext = function() {
      return this.__position < this.__tokens_length;
    };
    TokenStream.prototype.next = function() {
      var val = null;
      if (this.hasNext()) {
        val = this.__tokens[this.__position];
        this.__position += 1;
      }
      return val;
    };
    TokenStream.prototype.peek = function(index) {
      var val = null;
      index = index || 0;
      index += this.__position;
      if (index >= 0 && index < this.__tokens_length) {
        val = this.__tokens[index];
      }
      return val;
    };
    TokenStream.prototype.add = function(token) {
      if (this.__parent_token) {
        token.parent = this.__parent_token;
      }
      this.__tokens.push(token);
      this.__tokens_length += 1;
    };
    module2.exports.TokenStream = TokenStream;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/pattern.js
var require_pattern = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/pattern.js"(exports2, module2) {
    "use strict";
    function Pattern(input_scanner, parent) {
      this._input = input_scanner;
      this._starting_pattern = null;
      this._match_pattern = null;
      this._until_pattern = null;
      this._until_after = false;
      if (parent) {
        this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
        this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
        this._until_pattern = this._input.get_regexp(parent._until_pattern);
        this._until_after = parent._until_after;
      }
    }
    Pattern.prototype.read = function() {
      var result = this._input.read(this._starting_pattern);
      if (!this._starting_pattern || result) {
        result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
      }
      return result;
    };
    Pattern.prototype.read_match = function() {
      return this._input.match(this._match_pattern);
    };
    Pattern.prototype.until_after = function(pattern) {
      var result = this._create();
      result._until_after = true;
      result._until_pattern = this._input.get_regexp(pattern);
      result._update();
      return result;
    };
    Pattern.prototype.until = function(pattern) {
      var result = this._create();
      result._until_after = false;
      result._until_pattern = this._input.get_regexp(pattern);
      result._update();
      return result;
    };
    Pattern.prototype.starting_with = function(pattern) {
      var result = this._create();
      result._starting_pattern = this._input.get_regexp(pattern, true);
      result._update();
      return result;
    };
    Pattern.prototype.matching = function(pattern) {
      var result = this._create();
      result._match_pattern = this._input.get_regexp(pattern, true);
      result._update();
      return result;
    };
    Pattern.prototype._create = function() {
      return new Pattern(this._input, this);
    };
    Pattern.prototype._update = function() {
    };
    module2.exports.Pattern = Pattern;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/whitespacepattern.js
var require_whitespacepattern = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/whitespacepattern.js"(exports2, module2) {
    "use strict";
    var Pattern = require_pattern().Pattern;
    function WhitespacePattern(input_scanner, parent) {
      Pattern.call(this, input_scanner, parent);
      if (parent) {
        this._line_regexp = this._input.get_regexp(parent._line_regexp);
      } else {
        this.__set_whitespace_patterns("", "");
      }
      this.newline_count = 0;
      this.whitespace_before_token = "";
    }
    WhitespacePattern.prototype = new Pattern();
    WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
      whitespace_chars += "\\t ";
      newline_chars += "\\n\\r";
      this._match_pattern = this._input.get_regexp(
        "[" + whitespace_chars + newline_chars + "]+",
        true
      );
      this._newline_regexp = this._input.get_regexp(
        "\\r\\n|[" + newline_chars + "]"
      );
    };
    WhitespacePattern.prototype.read = function() {
      this.newline_count = 0;
      this.whitespace_before_token = "";
      var resulting_string = this._input.read(this._match_pattern);
      if (resulting_string === " ") {
        this.whitespace_before_token = " ";
      } else if (resulting_string) {
        var matches = this.__split(this._newline_regexp, resulting_string);
        this.newline_count = matches.length - 1;
        this.whitespace_before_token = matches[this.newline_count];
      }
      return resulting_string;
    };
    WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
      var result = this._create();
      result.__set_whitespace_patterns(whitespace_chars, newline_chars);
      result._update();
      return result;
    };
    WhitespacePattern.prototype._create = function() {
      return new WhitespacePattern(this._input, this);
    };
    WhitespacePattern.prototype.__split = function(regexp, input_string) {
      regexp.lastIndex = 0;
      var start_index = 0;
      var result = [];
      var next_match = regexp.exec(input_string);
      while (next_match) {
        result.push(input_string.substring(start_index, next_match.index));
        start_index = next_match.index + next_match[0].length;
        next_match = regexp.exec(input_string);
      }
      if (start_index < input_string.length) {
        result.push(input_string.substring(start_index, input_string.length));
      } else {
        result.push("");
      }
      return result;
    };
    module2.exports.WhitespacePattern = WhitespacePattern;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/tokenizer.js
var require_tokenizer = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/tokenizer.js"(exports2, module2) {
    "use strict";
    var InputScanner = require_inputscanner().InputScanner;
    var Token = require_token().Token;
    var TokenStream = require_tokenstream().TokenStream;
    var WhitespacePattern = require_whitespacepattern().WhitespacePattern;
    var TOKEN = {
      START: "TK_START",
      RAW: "TK_RAW",
      EOF: "TK_EOF"
    };
    var Tokenizer = function(input_string, options) {
      this._input = new InputScanner(input_string);
      this._options = options || {};
      this.__tokens = null;
      this._patterns = {};
      this._patterns.whitespace = new WhitespacePattern(this._input);
    };
    Tokenizer.prototype.tokenize = function() {
      this._input.restart();
      this.__tokens = new TokenStream();
      this._reset();
      var current;
      var previous = new Token(TOKEN.START, "");
      var open_token = null;
      var open_stack = [];
      var comments = new TokenStream();
      while (previous.type !== TOKEN.EOF) {
        current = this._get_next_token(previous, open_token);
        while (this._is_comment(current)) {
          comments.add(current);
          current = this._get_next_token(previous, open_token);
        }
        if (!comments.isEmpty()) {
          current.comments_before = comments;
          comments = new TokenStream();
        }
        current.parent = open_token;
        if (this._is_opening(current)) {
          open_stack.push(open_token);
          open_token = current;
        } else if (open_token && this._is_closing(current, open_token)) {
          current.opened = open_token;
          open_token.closed = current;
          open_token = open_stack.pop();
          current.parent = open_token;
        }
        current.previous = previous;
        previous.next = current;
        this.__tokens.add(current);
        previous = current;
      }
      return this.__tokens;
    };
    Tokenizer.prototype._is_first_token = function() {
      return this.__tokens.isEmpty();
    };
    Tokenizer.prototype._reset = function() {
    };
    Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
      this._readWhitespace();
      var resulting_string = this._input.read(/.+/g);
      if (resulting_string) {
        return this._create_token(TOKEN.RAW, resulting_string);
      } else {
        return this._create_token(TOKEN.EOF, "");
      }
    };
    Tokenizer.prototype._is_comment = function(current_token) {
      return false;
    };
    Tokenizer.prototype._is_opening = function(current_token) {
      return false;
    };
    Tokenizer.prototype._is_closing = function(current_token, open_token) {
      return false;
    };
    Tokenizer.prototype._create_token = function(type, text) {
      var token = new Token(
        type,
        text,
        this._patterns.whitespace.newline_count,
        this._patterns.whitespace.whitespace_before_token
      );
      return token;
    };
    Tokenizer.prototype._readWhitespace = function() {
      return this._patterns.whitespace.read();
    };
    module2.exports.Tokenizer = Tokenizer;
    module2.exports.TOKEN = TOKEN;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/directives.js
var require_directives = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/directives.js"(exports2, module2) {
    "use strict";
    function Directives(start_block_pattern, end_block_pattern) {
      start_block_pattern = typeof start_block_pattern === "string" ? start_block_pattern : start_block_pattern.source;
      end_block_pattern = typeof end_block_pattern === "string" ? end_block_pattern : end_block_pattern.source;
      this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, "g");
      this.__directive_pattern = / (\w+)[:](\w+)/g;
      this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, "g");
    }
    Directives.prototype.get_directives = function(text) {
      if (!text.match(this.__directives_block_pattern)) {
        return null;
      }
      var directives = {};
      this.__directive_pattern.lastIndex = 0;
      var directive_match = this.__directive_pattern.exec(text);
      while (directive_match) {
        directives[directive_match[1]] = directive_match[2];
        directive_match = this.__directive_pattern.exec(text);
      }
      return directives;
    };
    Directives.prototype.readIgnored = function(input) {
      return input.readUntilAfter(this.__directives_end_ignore_pattern);
    };
    module2.exports.Directives = Directives;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/templatablepattern.js
var require_templatablepattern = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/core/templatablepattern.js"(exports2, module2) {
    "use strict";
    var Pattern = require_pattern().Pattern;
    var template_names = {
      django: false,
      erb: false,
      handlebars: false,
      php: false,
      smarty: false
    };
    function TemplatablePattern(input_scanner, parent) {
      Pattern.call(this, input_scanner, parent);
      this.__template_pattern = null;
      this._disabled = Object.assign({}, template_names);
      this._excluded = Object.assign({}, template_names);
      if (parent) {
        this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
        this._excluded = Object.assign(this._excluded, parent._excluded);
        this._disabled = Object.assign(this._disabled, parent._disabled);
      }
      var pattern = new Pattern(input_scanner);
      this.__patterns = {
        handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
        handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
        handlebars: pattern.starting_with(/{{/).until_after(/}}/),
        php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
        erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
        // django coflicts with handlebars a bit.
        django: pattern.starting_with(/{%/).until_after(/%}/),
        django_value: pattern.starting_with(/{{/).until_after(/}}/),
        django_comment: pattern.starting_with(/{#/).until_after(/#}/),
        smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
        smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
        smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
      };
    }
    TemplatablePattern.prototype = new Pattern();
    TemplatablePattern.prototype._create = function() {
      return new TemplatablePattern(this._input, this);
    };
    TemplatablePattern.prototype._update = function() {
      this.__set_templated_pattern();
    };
    TemplatablePattern.prototype.disable = function(language) {
      var result = this._create();
      result._disabled[language] = true;
      result._update();
      return result;
    };
    TemplatablePattern.prototype.read_options = function(options) {
      var result = this._create();
      for (var language in template_names) {
        result._disabled[language] = options.templating.indexOf(language) === -1;
      }
      result._update();
      return result;
    };
    TemplatablePattern.prototype.exclude = function(language) {
      var result = this._create();
      result._excluded[language] = true;
      result._update();
      return result;
    };
    TemplatablePattern.prototype.read = function() {
      var result = "";
      if (this._match_pattern) {
        result = this._input.read(this._starting_pattern);
      } else {
        result = this._input.read(this._starting_pattern, this.__template_pattern);
      }
      var next = this._read_template();
      while (next) {
        if (this._match_pattern) {
          next += this._input.read(this._match_pattern);
        } else {
          next += this._input.readUntil(this.__template_pattern);
        }
        result += next;
        next = this._read_template();
      }
      if (this._until_after) {
        result += this._input.readUntilAfter(this._until_pattern);
      }
      return result;
    };
    TemplatablePattern.prototype.__set_templated_pattern = function() {
      var items = [];
      if (!this._disabled.php) {
        items.push(this.__patterns.php._starting_pattern.source);
      }
      if (!this._disabled.handlebars) {
        items.push(this.__patterns.handlebars._starting_pattern.source);
      }
      if (!this._disabled.erb) {
        items.push(this.__patterns.erb._starting_pattern.source);
      }
      if (!this._disabled.django) {
        items.push(this.__patterns.django._starting_pattern.source);
        items.push(this.__patterns.django_value._starting_pattern.source);
        items.push(this.__patterns.django_comment._starting_pattern.source);
      }
      if (!this._disabled.smarty) {
        items.push(this.__patterns.smarty._starting_pattern.source);
      }
      if (this._until_pattern) {
        items.push(this._until_pattern.source);
      }
      this.__template_pattern = this._input.get_regexp("(?:" + items.join("|") + ")");
    };
    TemplatablePattern.prototype._read_template = function() {
      var resulting_string = "";
      var c = this._input.peek();
      if (c === "<") {
        var peek1 = this._input.peek(1);
        if (!this._disabled.php && !this._excluded.php && peek1 === "?") {
          resulting_string = resulting_string || this.__patterns.php.read();
        }
        if (!this._disabled.erb && !this._excluded.erb && peek1 === "%") {
          resulting_string = resulting_string || this.__patterns.erb.read();
        }
      } else if (c === "{") {
        if (!this._disabled.handlebars && !this._excluded.handlebars) {
          resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
          resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
          resulting_string = resulting_string || this.__patterns.handlebars.read();
        }
        if (!this._disabled.django) {
          if (!this._excluded.django && !this._excluded.handlebars) {
            resulting_string = resulting_string || this.__patterns.django_value.read();
          }
          if (!this._excluded.django) {
            resulting_string = resulting_string || this.__patterns.django_comment.read();
            resulting_string = resulting_string || this.__patterns.django.read();
          }
        }
        if (!this._disabled.smarty) {
          if (this._disabled.django && this._disabled.handlebars) {
            resulting_string = resulting_string || this.__patterns.smarty_comment.read();
            resulting_string = resulting_string || this.__patterns.smarty_literal.read();
            resulting_string = resulting_string || this.__patterns.smarty.read();
          }
        }
      }
      return resulting_string;
    };
    module2.exports.TemplatablePattern = TemplatablePattern;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/tokenizer.js
var require_tokenizer2 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/tokenizer.js"(exports2, module2) {
    "use strict";
    var InputScanner = require_inputscanner().InputScanner;
    var BaseTokenizer = require_tokenizer().Tokenizer;
    var BASETOKEN = require_tokenizer().TOKEN;
    var Directives = require_directives().Directives;
    var acorn = require_acorn();
    var Pattern = require_pattern().Pattern;
    var TemplatablePattern = require_templatablepattern().TemplatablePattern;
    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }
    var TOKEN = {
      START_EXPR: "TK_START_EXPR",
      END_EXPR: "TK_END_EXPR",
      START_BLOCK: "TK_START_BLOCK",
      END_BLOCK: "TK_END_BLOCK",
      WORD: "TK_WORD",
      RESERVED: "TK_RESERVED",
      SEMICOLON: "TK_SEMICOLON",
      STRING: "TK_STRING",
      EQUALS: "TK_EQUALS",
      OPERATOR: "TK_OPERATOR",
      COMMA: "TK_COMMA",
      BLOCK_COMMENT: "TK_BLOCK_COMMENT",
      COMMENT: "TK_COMMENT",
      DOT: "TK_DOT",
      UNKNOWN: "TK_UNKNOWN",
      START: BASETOKEN.START,
      RAW: BASETOKEN.RAW,
      EOF: BASETOKEN.EOF
    };
    var directives_core = new Directives(/\/\*/, /\*\//);
    var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;
    var digit = /[0-9]/;
    var dot_pattern = /[^\d\.]/;
    var positionable_operators = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" ");
    var punct = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
    punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
    punct = "\\?\\.(?!\\d) " + punct;
    punct = punct.replace(/ /g, "|");
    var punct_pattern = new RegExp(punct);
    var line_starters = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
    var reserved_words = line_starters.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]);
    var reserved_word_pattern = new RegExp("^(?:" + reserved_words.join("|") + ")$");
    var in_html_comment;
    var Tokenizer = function(input_string, options) {
      BaseTokenizer.call(this, input_string, options);
      this._patterns.whitespace = this._patterns.whitespace.matching(
        /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
        /\u2028\u2029/.source
      );
      var pattern_reader = new Pattern(this._input);
      var templatable = new TemplatablePattern(this._input).read_options(this._options);
      this.__patterns = {
        template: templatable,
        identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
        number: pattern_reader.matching(number_pattern),
        punct: pattern_reader.matching(punct_pattern),
        // comment ends just before nearest linefeed or end of file
        comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        //  /* ... */ comment ends with nearest */ or end of file
        block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: pattern_reader.matching(/<!--/),
        html_comment_end: pattern_reader.matching(/-->/),
        include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
        shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
        xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
        single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
        double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
        template_text: templatable.until(/[`\\$]/),
        template_expression: templatable.until(/[`}\\]/)
      };
    };
    Tokenizer.prototype = new BaseTokenizer();
    Tokenizer.prototype._is_comment = function(current_token) {
      return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
    };
    Tokenizer.prototype._is_opening = function(current_token) {
      return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
    };
    Tokenizer.prototype._is_closing = function(current_token, open_token) {
      return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) && (open_token && (current_token.text === "]" && open_token.text === "[" || current_token.text === ")" && open_token.text === "(" || current_token.text === "}" && open_token.text === "{"));
    };
    Tokenizer.prototype._reset = function() {
      in_html_comment = false;
    };
    Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
      var token = null;
      this._readWhitespace();
      var c = this._input.peek();
      if (c === null) {
        return this._create_token(TOKEN.EOF, "");
      }
      token = token || this._read_non_javascript(c);
      token = token || this._read_string(c);
      token = token || this._read_word(previous_token);
      token = token || this._read_singles(c);
      token = token || this._read_comment(c);
      token = token || this._read_regexp(c, previous_token);
      token = token || this._read_xml(c, previous_token);
      token = token || this._read_punctuation();
      token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
      return token;
    };
    Tokenizer.prototype._read_word = function(previous_token) {
      var resulting_string;
      resulting_string = this.__patterns.identifier.read();
      if (resulting_string !== "") {
        resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
        if (!(previous_token.type === TOKEN.DOT || previous_token.type === TOKEN.RESERVED && (previous_token.text === "set" || previous_token.text === "get")) && reserved_word_pattern.test(resulting_string)) {
          if ((resulting_string === "in" || resulting_string === "of") && (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) {
            return this._create_token(TOKEN.OPERATOR, resulting_string);
          }
          return this._create_token(TOKEN.RESERVED, resulting_string);
        }
        return this._create_token(TOKEN.WORD, resulting_string);
      }
      resulting_string = this.__patterns.number.read();
      if (resulting_string !== "") {
        return this._create_token(TOKEN.WORD, resulting_string);
      }
    };
    Tokenizer.prototype._read_singles = function(c) {
      var token = null;
      if (c === "(" || c === "[") {
        token = this._create_token(TOKEN.START_EXPR, c);
      } else if (c === ")" || c === "]") {
        token = this._create_token(TOKEN.END_EXPR, c);
      } else if (c === "{") {
        token = this._create_token(TOKEN.START_BLOCK, c);
      } else if (c === "}") {
        token = this._create_token(TOKEN.END_BLOCK, c);
      } else if (c === ";") {
        token = this._create_token(TOKEN.SEMICOLON, c);
      } else if (c === "." && dot_pattern.test(this._input.peek(1))) {
        token = this._create_token(TOKEN.DOT, c);
      } else if (c === ",") {
        token = this._create_token(TOKEN.COMMA, c);
      }
      if (token) {
        this._input.next();
      }
      return token;
    };
    Tokenizer.prototype._read_punctuation = function() {
      var resulting_string = this.__patterns.punct.read();
      if (resulting_string !== "") {
        if (resulting_string === "=") {
          return this._create_token(TOKEN.EQUALS, resulting_string);
        } else if (resulting_string === "?.") {
          return this._create_token(TOKEN.DOT, resulting_string);
        } else {
          return this._create_token(TOKEN.OPERATOR, resulting_string);
        }
      }
    };
    Tokenizer.prototype._read_non_javascript = function(c) {
      var resulting_string = "";
      if (c === "#") {
        if (this._is_first_token()) {
          resulting_string = this.__patterns.shebang.read();
          if (resulting_string) {
            return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
          }
        }
        resulting_string = this.__patterns.include.read();
        if (resulting_string) {
          return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
        }
        c = this._input.next();
        var sharp = "#";
        if (this._input.hasNext() && this._input.testChar(digit)) {
          do {
            c = this._input.next();
            sharp += c;
          } while (this._input.hasNext() && c !== "#" && c !== "=");
          if (c === "#") {
          } else if (this._input.peek() === "[" && this._input.peek(1) === "]") {
            sharp += "[]";
            this._input.next();
            this._input.next();
          } else if (this._input.peek() === "{" && this._input.peek(1) === "}") {
            sharp += "{}";
            this._input.next();
            this._input.next();
          }
          return this._create_token(TOKEN.WORD, sharp);
        }
        this._input.back();
      } else if (c === "<" && this._is_first_token()) {
        resulting_string = this.__patterns.html_comment_start.read();
        if (resulting_string) {
          while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
            resulting_string += this._input.next();
          }
          in_html_comment = true;
          return this._create_token(TOKEN.COMMENT, resulting_string);
        }
      } else if (in_html_comment && c === "-") {
        resulting_string = this.__patterns.html_comment_end.read();
        if (resulting_string) {
          in_html_comment = false;
          return this._create_token(TOKEN.COMMENT, resulting_string);
        }
      }
      return null;
    };
    Tokenizer.prototype._read_comment = function(c) {
      var token = null;
      if (c === "/") {
        var comment = "";
        if (this._input.peek(1) === "*") {
          comment = this.__patterns.block_comment.read();
          var directives = directives_core.get_directives(comment);
          if (directives && directives.ignore === "start") {
            comment += directives_core.readIgnored(this._input);
          }
          comment = comment.replace(acorn.allLineBreaks, "\n");
          token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
          token.directives = directives;
        } else if (this._input.peek(1) === "/") {
          comment = this.__patterns.comment.read();
          token = this._create_token(TOKEN.COMMENT, comment);
        }
      }
      return token;
    };
    Tokenizer.prototype._read_string = function(c) {
      if (c === "`" || c === "'" || c === '"') {
        var resulting_string = this._input.next();
        this.has_char_escapes = false;
        if (c === "`") {
          resulting_string += this._read_string_recursive("`", true, "${");
        } else {
          resulting_string += this._read_string_recursive(c);
        }
        if (this.has_char_escapes && this._options.unescape_strings) {
          resulting_string = unescape_string(resulting_string);
        }
        if (this._input.peek() === c) {
          resulting_string += this._input.next();
        }
        resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
        return this._create_token(TOKEN.STRING, resulting_string);
      }
      return null;
    };
    Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
      return previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || previous_token.type === TOKEN.END_EXPR && previous_token.text === ")" && previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ["if", "while", "for"]) || in_array(previous_token.type, [
        TOKEN.COMMENT,
        TOKEN.START_EXPR,
        TOKEN.START_BLOCK,
        TOKEN.START,
        TOKEN.END_BLOCK,
        TOKEN.OPERATOR,
        TOKEN.EQUALS,
        TOKEN.EOF,
        TOKEN.SEMICOLON,
        TOKEN.COMMA
      ]);
    };
    Tokenizer.prototype._read_regexp = function(c, previous_token) {
      if (c === "/" && this._allow_regexp_or_xml(previous_token)) {
        var resulting_string = this._input.next();
        var esc = false;
        var in_char_class = false;
        while (this._input.hasNext() && ((esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn.newline))) {
          resulting_string += this._input.peek();
          if (!esc) {
            esc = this._input.peek() === "\\";
            if (this._input.peek() === "[") {
              in_char_class = true;
            } else if (this._input.peek() === "]") {
              in_char_class = false;
            }
          } else {
            esc = false;
          }
          this._input.next();
        }
        if (this._input.peek() === c) {
          resulting_string += this._input.next();
          resulting_string += this._input.read(acorn.identifier);
        }
        return this._create_token(TOKEN.STRING, resulting_string);
      }
      return null;
    };
    Tokenizer.prototype._read_xml = function(c, previous_token) {
      if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
        var xmlStr = "";
        var match = this.__patterns.xml.read_match();
        if (match) {
          var rootTag = match[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}");
          var isCurlyRoot = rootTag.indexOf("{") === 0;
          var depth = 0;
          while (match) {
            var isEndTag = !!match[1];
            var tagName = match[2];
            var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";
            if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) {
              if (isEndTag) {
                --depth;
              } else {
                ++depth;
              }
            }
            xmlStr += match[0];
            if (depth <= 0) {
              break;
            }
            match = this.__patterns.xml.read_match();
          }
          if (!match) {
            xmlStr += this._input.match(/[\s\S]*/g)[0];
          }
          xmlStr = xmlStr.replace(acorn.allLineBreaks, "\n");
          return this._create_token(TOKEN.STRING, xmlStr);
        }
      }
      return null;
    };
    function unescape_string(s) {
      var out = "", escaped = 0;
      var input_scan = new InputScanner(s);
      var matched = null;
      while (input_scan.hasNext()) {
        matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
        if (matched) {
          out += matched[0];
        }
        if (input_scan.peek() === "\\") {
          input_scan.next();
          if (input_scan.peek() === "x") {
            matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
          } else if (input_scan.peek() === "u") {
            matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
          } else {
            out += "\\";
            if (input_scan.hasNext()) {
              out += input_scan.next();
            }
            continue;
          }
          if (!matched) {
            return s;
          }
          escaped = parseInt(matched[1], 16);
          if (escaped > 126 && escaped <= 255 && matched[0].indexOf("x") === 0) {
            return s;
          } else if (escaped >= 0 && escaped < 32) {
            out += "\\" + matched[0];
            continue;
          } else if (escaped === 34 || escaped === 39 || escaped === 92) {
            out += "\\" + String.fromCharCode(escaped);
          } else {
            out += String.fromCharCode(escaped);
          }
        }
      }
      return out;
    }
    Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
      var current_char;
      var pattern;
      if (delimiter === "'") {
        pattern = this.__patterns.single_quote;
      } else if (delimiter === '"') {
        pattern = this.__patterns.double_quote;
      } else if (delimiter === "`") {
        pattern = this.__patterns.template_text;
      } else if (delimiter === "}") {
        pattern = this.__patterns.template_expression;
      }
      var resulting_string = pattern.read();
      var next = "";
      while (this._input.hasNext()) {
        next = this._input.next();
        if (next === delimiter || !allow_unescaped_newlines && acorn.newline.test(next)) {
          this._input.back();
          break;
        } else if (next === "\\" && this._input.hasNext()) {
          current_char = this._input.peek();
          if (current_char === "x" || current_char === "u") {
            this.has_char_escapes = true;
          } else if (current_char === "\r" && this._input.peek(1) === "\n") {
            this._input.next();
          }
          next += this._input.next();
        } else if (start_sub) {
          if (start_sub === "${" && next === "$" && this._input.peek() === "{") {
            next += this._input.next();
          }
          if (start_sub === next) {
            if (delimiter === "`") {
              next += this._read_string_recursive("}", allow_unescaped_newlines, "`");
            } else {
              next += this._read_string_recursive("`", allow_unescaped_newlines, "${");
            }
            if (this._input.hasNext()) {
              next += this._input.next();
            }
          }
        }
        next += pattern.read();
        resulting_string += next;
      }
      return resulting_string;
    };
    module2.exports.Tokenizer = Tokenizer;
    module2.exports.TOKEN = TOKEN;
    module2.exports.positionable_operators = positionable_operators.slice();
    module2.exports.line_starters = line_starters.slice();
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/beautifier.js
var require_beautifier = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/beautifier.js"(exports2, module2) {
    "use strict";
    var Output = require_output().Output;
    var Token = require_token().Token;
    var acorn = require_acorn();
    var Options = require_options2().Options;
    var Tokenizer = require_tokenizer2().Tokenizer;
    var line_starters = require_tokenizer2().line_starters;
    var positionable_operators = require_tokenizer2().positionable_operators;
    var TOKEN = require_tokenizer2().TOKEN;
    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }
    function ltrim(s) {
      return s.replace(/^\s+/g, "");
    }
    function generateMapFromStrings(list) {
      var result = {};
      for (var x = 0; x < list.length; x++) {
        result[list[x].replace(/-/g, "_")] = list[x];
      }
      return result;
    }
    function reserved_word(token, word) {
      return token && token.type === TOKEN.RESERVED && token.text === word;
    }
    function reserved_array(token, words) {
      return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
    }
    var special_words = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"];
    var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
    var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
    var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
    var MODE = {
      BlockStatement: "BlockStatement",
      // 'BLOCK'
      Statement: "Statement",
      // 'STATEMENT'
      ObjectLiteral: "ObjectLiteral",
      // 'OBJECT',
      ArrayLiteral: "ArrayLiteral",
      //'[EXPRESSION]',
      ForInitializer: "ForInitializer",
      //'(FOR-EXPRESSION)',
      Conditional: "Conditional",
      //'(COND-EXPRESSION)',
      Expression: "Expression"
      //'(EXPRESSION)'
    };
    function remove_redundant_indentation(output2, frame) {
      if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
        return;
      }
      output2.remove_indent(frame.start_line_index);
    }
    function split_linebreaks(s) {
      s = s.replace(acorn.allLineBreaks, "\n");
      var out = [], idx = s.indexOf("\n");
      while (idx !== -1) {
        out.push(s.substring(0, idx));
        s = s.substring(idx + 1);
        idx = s.indexOf("\n");
      }
      if (s.length) {
        out.push(s);
      }
      return out;
    }
    function is_array(mode) {
      return mode === MODE.ArrayLiteral;
    }
    function is_expression(mode) {
      return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
    }
    function all_lines_start_with(lines, c) {
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.charAt(0) !== c) {
          return false;
        }
      }
      return true;
    }
    function each_line_matches_indent(lines, indent) {
      var i = 0, len = lines.length, line;
      for (; i < len; i++) {
        line = lines[i];
        if (line && line.indexOf(indent) !== 0) {
          return false;
        }
      }
      return true;
    }
    function Beautifier(source_text, options) {
      options = options || {};
      this._source_text = source_text || "";
      this._output = null;
      this._tokens = null;
      this._last_last_text = null;
      this._flags = null;
      this._previous_flags = null;
      this._flag_store = null;
      this._options = new Options(options);
    }
    Beautifier.prototype.create_flags = function(flags_base, mode) {
      var next_indent_level = 0;
      if (flags_base) {
        next_indent_level = flags_base.indentation_level;
        if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
          next_indent_level = flags_base.line_indent_level;
        }
      }
      var next_flags = {
        mode,
        parent: flags_base,
        last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ""),
        // last token text
        last_word: flags_base ? flags_base.last_word : "",
        // last TOKEN.WORD passed
        declaration_statement: false,
        declaration_assignment: false,
        multiline_frame: false,
        inline_frame: false,
        if_block: false,
        else_block: false,
        class_start_block: false,
        // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
        do_block: false,
        do_while: false,
        import_block: false,
        in_case_statement: false,
        // switch(..){ INSIDE HERE }
        in_case: false,
        // we're on the exact line with "case 0:"
        case_body: false,
        // the indented case-action block
        case_block: false,
        // the indented case-action block is wrapped with {}
        indentation_level: next_indent_level,
        alignment: 0,
        line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
        start_line_index: this._output.get_line_number(),
        ternary_depth: 0
      };
      return next_flags;
    };
    Beautifier.prototype._reset = function(source_text) {
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      this._last_last_text = "";
      this._output = new Output(this._options, baseIndentString);
      this._output.raw = this._options.test_output_raw;
      this._flag_store = [];
      this.set_mode(MODE.BlockStatement);
      var tokenizer = new Tokenizer(source_text, this._options);
      this._tokens = tokenizer.tokenize();
      return source_text;
    };
    Beautifier.prototype.beautify = function() {
      if (this._options.disabled) {
        return this._source_text;
      }
      var sweet_code;
      var source_text = this._reset(this._source_text);
      var eol = this._options.eol;
      if (this._options.eol === "auto") {
        eol = "\n";
        if (source_text && acorn.lineBreak.test(source_text || "")) {
          eol = source_text.match(acorn.lineBreak)[0];
        }
      }
      var current_token = this._tokens.next();
      while (current_token) {
        this.handle_token(current_token);
        this._last_last_text = this._flags.last_token.text;
        this._flags.last_token = current_token;
        current_token = this._tokens.next();
      }
      sweet_code = this._output.get_code(eol);
      return sweet_code;
    };
    Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
      if (current_token.type === TOKEN.START_EXPR) {
        this.handle_start_expr(current_token);
      } else if (current_token.type === TOKEN.END_EXPR) {
        this.handle_end_expr(current_token);
      } else if (current_token.type === TOKEN.START_BLOCK) {
        this.handle_start_block(current_token);
      } else if (current_token.type === TOKEN.END_BLOCK) {
        this.handle_end_block(current_token);
      } else if (current_token.type === TOKEN.WORD) {
        this.handle_word(current_token);
      } else if (current_token.type === TOKEN.RESERVED) {
        this.handle_word(current_token);
      } else if (current_token.type === TOKEN.SEMICOLON) {
        this.handle_semicolon(current_token);
      } else if (current_token.type === TOKEN.STRING) {
        this.handle_string(current_token);
      } else if (current_token.type === TOKEN.EQUALS) {
        this.handle_equals(current_token);
      } else if (current_token.type === TOKEN.OPERATOR) {
        this.handle_operator(current_token);
      } else if (current_token.type === TOKEN.COMMA) {
        this.handle_comma(current_token);
      } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
        this.handle_block_comment(current_token, preserve_statement_flags);
      } else if (current_token.type === TOKEN.COMMENT) {
        this.handle_comment(current_token, preserve_statement_flags);
      } else if (current_token.type === TOKEN.DOT) {
        this.handle_dot(current_token);
      } else if (current_token.type === TOKEN.EOF) {
        this.handle_eof(current_token);
      } else if (current_token.type === TOKEN.UNKNOWN) {
        this.handle_unknown(current_token, preserve_statement_flags);
      } else {
        this.handle_unknown(current_token, preserve_statement_flags);
      }
    };
    Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
      var newlines = current_token.newlines;
      var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);
      if (current_token.comments_before) {
        var comment_token = current_token.comments_before.next();
        while (comment_token) {
          this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
          this.handle_token(comment_token, preserve_statement_flags);
          comment_token = current_token.comments_before.next();
        }
      }
      if (keep_whitespace) {
        for (var i = 0; i < newlines; i += 1) {
          this.print_newline(i > 0, preserve_statement_flags);
        }
      } else {
        if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
          newlines = this._options.max_preserve_newlines;
        }
        if (this._options.preserve_newlines) {
          if (newlines > 1) {
            this.print_newline(false, preserve_statement_flags);
            for (var j = 1; j < newlines; j += 1) {
              this.print_newline(true, preserve_statement_flags);
            }
          }
        }
      }
    };
    var newline_restricted_tokens = ["async", "break", "continue", "return", "throw", "yield"];
    Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
      force_linewrap = force_linewrap === void 0 ? false : force_linewrap;
      if (this._output.just_added_newline()) {
        return;
      }
      var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
      var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) || in_array(current_token.text, positionable_operators);
      if (operatorLogicApplies) {
        var shouldPrintOperatorNewline = in_array(this._flags.last_token.text, positionable_operators) && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array(current_token.text, positionable_operators);
        shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
      }
      if (shouldPreserveOrForce) {
        this.print_newline(false, true);
      } else if (this._options.wrap_line_length) {
        if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
          return;
        }
        this._output.set_wrap_point();
      }
    };
    Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
      if (!preserve_statement_flags) {
        if (this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) {
          var next_token = this._tokens.peek();
          while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
            this.restore_mode();
          }
        }
      }
      if (this._output.add_new_line(force_newline)) {
        this._flags.multiline_frame = true;
      }
    };
    Beautifier.prototype.print_token_line_indentation = function(current_token) {
      if (this._output.just_added_newline()) {
        if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === "[" || is_array(this._flags.mode))) {
          this._output.current_line.set_indent(-1);
          this._output.current_line.push(current_token.whitespace_before);
          this._output.space_before_token = false;
        } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
          this._flags.line_indent_level = this._flags.indentation_level;
        }
      }
    };
    Beautifier.prototype.print_token = function(current_token) {
      if (this._output.raw) {
        this._output.add_raw_token(current_token);
        return;
      }
      if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA && this._output.just_added_newline()) {
        if (this._output.previous_line.last() === ",") {
          var popped = this._output.previous_line.pop();
          if (this._output.previous_line.is_empty()) {
            this._output.previous_line.push(popped);
            this._output.trim(true);
            this._output.current_line.pop();
            this._output.trim();
          }
          this.print_token_line_indentation(current_token);
          this._output.add_token(",");
          this._output.space_before_token = true;
        }
      }
      this.print_token_line_indentation(current_token);
      this._output.non_breaking_space = true;
      this._output.add_token(current_token.text);
      if (this._output.previous_token_wrapped) {
        this._flags.multiline_frame = true;
      }
    };
    Beautifier.prototype.indent = function() {
      this._flags.indentation_level += 1;
      this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    Beautifier.prototype.deindent = function() {
      if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
        this._flags.indentation_level -= 1;
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      }
    };
    Beautifier.prototype.set_mode = function(mode) {
      if (this._flags) {
        this._flag_store.push(this._flags);
        this._previous_flags = this._flags;
      } else {
        this._previous_flags = this.create_flags(null, mode);
      }
      this._flags = this.create_flags(this._previous_flags, mode);
      this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    Beautifier.prototype.restore_mode = function() {
      if (this._flag_store.length > 0) {
        this._previous_flags = this._flags;
        this._flags = this._flag_store.pop();
        if (this._previous_flags.mode === MODE.Statement) {
          remove_redundant_indentation(this._output, this._previous_flags);
        }
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      }
    };
    Beautifier.prototype.start_of_object_property = function() {
      return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
    };
    Beautifier.prototype.start_of_statement = function(current_token) {
      var start = false;
      start = start || reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD;
      start = start || reserved_word(this._flags.last_token, "do");
      start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
      start = start || reserved_word(this._flags.last_token, "else") && !(reserved_word(current_token, "if") && !current_token.comments_before);
      start = start || this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
      start = start || this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === "--" || current_token.text === "++") && this._last_last_text !== "function" && current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED;
      start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
      if (start) {
        this.set_mode(MODE.Statement);
        this.indent();
        this.handle_whitespace_and_comments(current_token, true);
        if (!this.start_of_object_property()) {
          this.allow_wrap_or_preserved_newline(
            current_token,
            reserved_array(current_token, ["do", "for", "if", "while"])
          );
        }
        return true;
      }
      return false;
    };
    Beautifier.prototype.handle_start_expr = function(current_token) {
      if (!this.start_of_statement(current_token)) {
        this.handle_whitespace_and_comments(current_token);
      }
      var next_mode = MODE.Expression;
      if (current_token.text === "[") {
        if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ")") {
          if (reserved_array(this._flags.last_token, line_starters)) {
            this._output.space_before_token = true;
          }
          this.print_token(current_token);
          this.set_mode(next_mode);
          this.indent();
          if (this._options.space_in_paren) {
            this._output.space_before_token = true;
          }
          return;
        }
        next_mode = MODE.ArrayLiteral;
        if (is_array(this._flags.mode)) {
          if (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) {
            if (!this._options.keep_array_indentation) {
              this.print_newline();
            }
          }
        }
        if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
          this._output.space_before_token = true;
        }
      } else {
        if (this._flags.last_token.type === TOKEN.RESERVED) {
          if (this._flags.last_token.text === "for") {
            this._output.space_before_token = this._options.space_before_conditional;
            next_mode = MODE.ForInitializer;
          } else if (in_array(this._flags.last_token.text, ["if", "while", "switch"])) {
            this._output.space_before_token = this._options.space_before_conditional;
            next_mode = MODE.Conditional;
          } else if (in_array(this._flags.last_word, ["await", "async"])) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.text === "import" && current_token.whitespace_before === "") {
            this._output.space_before_token = false;
          } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === "catch") {
            this._output.space_before_token = true;
          }
        } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else if (this._flags.last_token.type === TOKEN.WORD) {
          this._output.space_before_token = false;
          var peek_back_two = this._tokens.peek(-3);
          if (this._options.space_after_named_function && peek_back_two) {
            var peek_back_three = this._tokens.peek(-4);
            if (reserved_array(peek_back_two, ["async", "function"]) || peek_back_two.text === "*" && reserved_array(peek_back_three, ["async", "function"])) {
              this._output.space_before_token = true;
            } else if (this._flags.mode === MODE.ObjectLiteral) {
              if (peek_back_two.text === "{" || peek_back_two.text === "," || peek_back_two.text === "*" && (peek_back_three.text === "{" || peek_back_three.text === ",")) {
                this._output.space_before_token = true;
              }
            } else if (this._flags.parent && this._flags.parent.class_start_block) {
              this._output.space_before_token = true;
            }
          }
        } else {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        if (this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
          this._output.space_before_token = this._options.space_after_anon_function;
        }
      }
      if (this._flags.last_token.text === ";" || this._flags.last_token.type === TOKEN.START_BLOCK) {
        this.print_newline();
      } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === TOKEN.COMMA) {
        this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
      }
      this.print_token(current_token);
      this.set_mode(next_mode);
      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      this.indent();
    };
    Beautifier.prototype.handle_end_expr = function(current_token) {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this.handle_whitespace_and_comments(current_token);
      if (this._flags.multiline_frame) {
        this.allow_wrap_or_preserved_newline(
          current_token,
          current_token.text === "]" && is_array(this._flags.mode) && !this._options.keep_array_indentation
        );
      }
      if (this._options.space_in_paren) {
        if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
          this._output.trim();
          this._output.space_before_token = false;
        } else {
          this._output.space_before_token = true;
        }
      }
      this.deindent();
      this.print_token(current_token);
      this.restore_mode();
      remove_redundant_indentation(this._output, this._previous_flags);
      if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
        this._previous_flags.mode = MODE.Expression;
        this._flags.do_block = false;
        this._flags.do_while = false;
      }
    };
    Beautifier.prototype.handle_start_block = function(current_token) {
      this.handle_whitespace_and_comments(current_token);
      var next_token = this._tokens.peek();
      var second_token = this._tokens.peek(1);
      if (this._flags.last_word === "switch" && this._flags.last_token.type === TOKEN.END_EXPR) {
        this.set_mode(MODE.BlockStatement);
        this._flags.in_case_statement = true;
      } else if (this._flags.case_body) {
        this.set_mode(MODE.BlockStatement);
      } else if (second_token && (in_array(second_token.text, [":", ","]) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED]) || in_array(next_token.text, ["get", "set", "..."]) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))) {
        if (in_array(this._last_last_text, ["class", "interface"]) && !in_array(second_token.text, [":", ","])) {
          this.set_mode(MODE.BlockStatement);
        } else {
          this.set_mode(MODE.ObjectLiteral);
        }
      } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === "=>") {
        this.set_mode(MODE.BlockStatement);
      } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) || reserved_array(this._flags.last_token, ["return", "throw", "import", "default"])) {
        this.set_mode(MODE.ObjectLiteral);
      } else {
        this.set_mode(MODE.BlockStatement);
      }
      if (this._flags.last_token) {
        if (reserved_array(this._flags.last_token.previous, ["class", "extends"])) {
          this._flags.class_start_block = true;
        }
      }
      var empty_braces = !next_token.comments_before && next_token.text === "}";
      var empty_anonymous_function = empty_braces && this._flags.last_word === "function" && this._flags.last_token.type === TOKEN.END_EXPR;
      if (this._options.brace_preserve_inline) {
        var index = 0;
        var check_token = null;
        this._flags.inline_frame = true;
        do {
          index += 1;
          check_token = this._tokens.peek(index - 1);
          if (check_token.newlines) {
            this._flags.inline_frame = false;
            break;
          }
        } while (check_token.type !== TOKEN.EOF && !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
      }
      if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
        if (this._flags.last_token.type !== TOKEN.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== "else")) {
          this._output.space_before_token = true;
        } else {
          this.print_newline(false, true);
        }
      } else {
        if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
          if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
            this._output.space_before_token = true;
          }
          if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame) {
            this.allow_wrap_or_preserved_newline(current_token);
            this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
            this._flags.multiline_frame = false;
          }
        }
        if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
          if (this._flags.last_token.type === TOKEN.START_BLOCK && !this._flags.inline_frame) {
            this.print_newline();
          } else {
            this._output.space_before_token = true;
          }
        }
      }
      this.print_token(current_token);
      this.indent();
      if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
        this.print_newline();
      }
    };
    Beautifier.prototype.handle_end_block = function(current_token) {
      this.handle_whitespace_and_comments(current_token);
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;
      if (this._flags.inline_frame && !empty_braces) {
        this._output.space_before_token = true;
      } else if (this._options.brace_style === "expand") {
        if (!empty_braces) {
          this.print_newline();
        }
      } else {
        if (!empty_braces) {
          if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
            this._options.keep_array_indentation = false;
            this.print_newline();
            this._options.keep_array_indentation = true;
          } else {
            this.print_newline();
          }
        }
      }
      this.restore_mode();
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_word = function(current_token) {
      if (current_token.type === TOKEN.RESERVED) {
        if (in_array(current_token.text, ["set", "get"]) && this._flags.mode !== MODE.ObjectLiteral) {
          current_token.type = TOKEN.WORD;
        } else if (current_token.text === "import" && in_array(this._tokens.peek().text, ["(", "."])) {
          current_token.type = TOKEN.WORD;
        } else if (in_array(current_token.text, ["as", "from"]) && !this._flags.import_block) {
          current_token.type = TOKEN.WORD;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          var next_token = this._tokens.peek();
          if (next_token.text === ":") {
            current_token.type = TOKEN.WORD;
          }
        }
      }
      if (this.start_of_statement(current_token)) {
        if (reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD) {
          this._flags.declaration_statement = true;
        }
      } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) && this._flags.last_token.type !== TOKEN.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ["var", "let", "const", "set", "get"]))) {
        this.handle_whitespace_and_comments(current_token);
        this.print_newline();
      } else {
        this.handle_whitespace_and_comments(current_token);
      }
      if (this._flags.do_block && !this._flags.do_while) {
        if (reserved_word(current_token, "while")) {
          this._output.space_before_token = true;
          this.print_token(current_token);
          this._output.space_before_token = true;
          this._flags.do_while = true;
          return;
        } else {
          this.print_newline();
          this._flags.do_block = false;
        }
      }
      if (this._flags.if_block) {
        if (!this._flags.else_block && reserved_word(current_token, "else")) {
          this._flags.else_block = true;
        } else {
          while (this._flags.mode === MODE.Statement) {
            this.restore_mode();
          }
          this._flags.if_block = false;
          this._flags.else_block = false;
        }
      }
      if (this._flags.in_case_statement && reserved_array(current_token, ["case", "default"])) {
        this.print_newline();
        if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
          this.deindent();
        }
        this._flags.case_body = false;
        this.print_token(current_token);
        this._flags.in_case = true;
        return;
      }
      if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
        if (!this.start_of_object_property()) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      }
      if (reserved_word(current_token, "function")) {
        if (in_array(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === TOKEN.OPERATOR)) {
          if (!this._output.just_added_blankline() && !current_token.comments_before) {
            this.print_newline();
            this.print_newline(true);
          }
        }
        if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
          if (reserved_array(this._flags.last_token, ["get", "set", "new", "export"]) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
            this._output.space_before_token = true;
          } else if (reserved_word(this._flags.last_token, "default") && this._last_last_text === "export") {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.text === "declare") {
            this._output.space_before_token = true;
          } else {
            this.print_newline();
          }
        } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === "=") {
          this._output.space_before_token = true;
        } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) {
        } else {
          this.print_newline();
        }
        this.print_token(current_token);
        this._flags.last_word = current_token.text;
        return;
      }
      var prefix = "NONE";
      if (this._flags.last_token.type === TOKEN.END_BLOCK) {
        if (this._previous_flags.inline_frame) {
          prefix = "SPACE";
        } else if (!reserved_array(current_token, ["else", "catch", "finally", "from"])) {
          prefix = "NEWLINE";
        } else {
          if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
            prefix = "NEWLINE";
          } else {
            prefix = "SPACE";
            this._output.space_before_token = true;
          }
        }
      } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
        prefix = "NEWLINE";
      } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
        prefix = "SPACE";
      } else if (this._flags.last_token.type === TOKEN.STRING) {
        prefix = "NEWLINE";
      } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
        prefix = "SPACE";
      } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
        if (this._flags.inline_frame) {
          prefix = "SPACE";
        } else {
          prefix = "NEWLINE";
        }
      } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
        this._output.space_before_token = true;
        prefix = "NEWLINE";
      }
      if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
        if (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export") {
          prefix = "SPACE";
        } else {
          prefix = "NEWLINE";
        }
      }
      if (reserved_array(current_token, ["else", "catch", "finally"])) {
        if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
          this.print_newline();
        } else {
          this._output.trim(true);
          var line = this._output.current_line;
          if (line.last() !== "}") {
            this.print_newline();
          }
          this._output.space_before_token = true;
        }
      } else if (prefix === "NEWLINE") {
        if (reserved_array(this._flags.last_token, special_words)) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.text === "declare" && reserved_array(current_token, ["var", "let", "const"])) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
          if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ["var", "let", "const"])) && this._flags.last_token.text !== ":") {
            if (reserved_word(current_token, "if") && reserved_word(current_token.previous, "else")) {
              this._output.space_before_token = true;
            } else {
              this.print_newline();
            }
          }
        } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
          this.print_newline();
        }
      } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}") {
        this.print_newline();
      } else if (prefix === "SPACE") {
        this._output.space_before_token = true;
      }
      if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
        this._output.space_before_token = true;
      }
      this.print_token(current_token);
      this._flags.last_word = current_token.text;
      if (current_token.type === TOKEN.RESERVED) {
        if (current_token.text === "do") {
          this._flags.do_block = true;
        } else if (current_token.text === "if") {
          this._flags.if_block = true;
        } else if (current_token.text === "import") {
          this._flags.import_block = true;
        } else if (this._flags.import_block && reserved_word(current_token, "from")) {
          this._flags.import_block = false;
        }
      }
    };
    Beautifier.prototype.handle_semicolon = function(current_token) {
      if (this.start_of_statement(current_token)) {
        this._output.space_before_token = false;
      } else {
        this.handle_whitespace_and_comments(current_token);
      }
      var next_token = this._tokens.peek();
      while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
        this.restore_mode();
      }
      if (this._flags.import_block) {
        this._flags.import_block = false;
      }
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_string = function(current_token) {
      if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === "" && (current_token.previous.text === ")" || this._flags.last_token.type === TOKEN.WORD)) {
      } else if (this.start_of_statement(current_token)) {
        this._output.space_before_token = true;
      } else {
        this.handle_whitespace_and_comments(current_token);
        if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else if (current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === "]" || current_token.previous.text === ")") && current_token.newlines === 0) {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_equals = function(current_token) {
      if (this.start_of_statement(current_token)) {
      } else {
        this.handle_whitespace_and_comments(current_token);
      }
      if (this._flags.declaration_statement) {
        this._flags.declaration_assignment = true;
      }
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
    };
    Beautifier.prototype.handle_comma = function(current_token) {
      this.handle_whitespace_and_comments(current_token, true);
      this.print_token(current_token);
      this._output.space_before_token = true;
      if (this._flags.declaration_statement) {
        if (is_expression(this._flags.parent.mode)) {
          this._flags.declaration_assignment = false;
        }
        if (this._flags.declaration_assignment) {
          this._flags.declaration_assignment = false;
          this.print_newline(false, true);
        } else if (this._options.comma_first) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
        if (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        if (!this._flags.inline_frame) {
          this.print_newline();
        }
      } else if (this._options.comma_first) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    };
    Beautifier.prototype.handle_operator = function(current_token) {
      var isGeneratorAsterisk = current_token.text === "*" && (reserved_array(this._flags.last_token, ["function", "yield"]) || in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]));
      var isUnary = in_array(current_token.text, ["-", "+"]) && (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) || in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === ",");
      if (this.start_of_statement(current_token)) {
      } else {
        var preserve_statement_flags = !isGeneratorAsterisk;
        this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
      }
      if (current_token.text === "*" && this._flags.last_token.type === TOKEN.DOT) {
        this.print_token(current_token);
        return;
      }
      if (current_token.text === "::") {
        this.print_token(current_token);
        return;
      }
      if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
      if (current_token.text === ":" && this._flags.in_case) {
        this.print_token(current_token);
        this._flags.in_case = false;
        this._flags.case_body = true;
        if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
          this.indent();
          this.print_newline();
          this._flags.case_block = false;
        } else {
          this._flags.case_block = true;
          this._output.space_before_token = true;
        }
        return;
      }
      var space_before = true;
      var space_after = true;
      var in_ternary = false;
      if (current_token.text === ":") {
        if (this._flags.ternary_depth === 0) {
          space_before = false;
        } else {
          this._flags.ternary_depth -= 1;
          in_ternary = true;
        }
      } else if (current_token.text === "?") {
        this._flags.ternary_depth += 1;
      }
      if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
        var isColon = current_token.text === ":";
        var isTernaryColon = isColon && in_ternary;
        var isOtherColon = isColon && !in_ternary;
        switch (this._options.operator_position) {
          case OPERATOR_POSITION.before_newline:
            this._output.space_before_token = !isOtherColon;
            this.print_token(current_token);
            if (!isColon || isTernaryColon) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
            this._output.space_before_token = true;
            return;
          case OPERATOR_POSITION.after_newline:
            this._output.space_before_token = true;
            if (!isColon || isTernaryColon) {
              if (this._tokens.peek().newlines) {
                this.print_newline(false, true);
              } else {
                this.allow_wrap_or_preserved_newline(current_token);
              }
            } else {
              this._output.space_before_token = false;
            }
            this.print_token(current_token);
            this._output.space_before_token = true;
            return;
          case OPERATOR_POSITION.preserve_newline:
            if (!isOtherColon) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
            space_before = !(this._output.just_added_newline() || isOtherColon);
            this._output.space_before_token = space_before;
            this.print_token(current_token);
            this._output.space_before_token = true;
            return;
        }
      }
      if (isGeneratorAsterisk) {
        this.allow_wrap_or_preserved_newline(current_token);
        space_before = false;
        var next_token = this._tokens.peek();
        space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
      } else if (current_token.text === "...") {
        this.allow_wrap_or_preserved_newline(current_token);
        space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
        space_after = false;
      } else if (in_array(current_token.text, ["--", "++", "!", "~"]) || isUnary) {
        if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        space_before = false;
        space_after = false;
        if (current_token.newlines && (current_token.text === "--" || current_token.text === "++" || current_token.text === "~")) {
          var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
          if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
            this.restore_mode();
          }
          this.print_newline(new_line_needed, true);
        }
        if (this._flags.last_token.text === ";" && is_expression(this._flags.mode)) {
          space_before = true;
        }
        if (this._flags.last_token.type === TOKEN.RESERVED) {
          space_before = true;
        } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
          space_before = !(this._flags.last_token.text === "]" && (current_token.text === "--" || current_token.text === "++"));
        } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
          space_before = in_array(current_token.text, ["--", "-", "++", "+"]) && in_array(this._flags.last_token.text, ["--", "-", "++", "+"]);
          if (in_array(current_token.text, ["+", "-"]) && in_array(this._flags.last_token.text, ["--", "++"])) {
            space_after = true;
          }
        }
        if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";")) {
          this.print_newline();
        }
      }
      this._output.space_before_token = this._output.space_before_token || space_before;
      this.print_token(current_token);
      this._output.space_before_token = space_after;
    };
    Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
      if (this._output.raw) {
        this._output.add_raw_token(current_token);
        if (current_token.directives && current_token.directives.preserve === "end") {
          this._output.raw = this._options.test_output_raw;
        }
        return;
      }
      if (current_token.directives) {
        this.print_newline(false, preserve_statement_flags);
        this.print_token(current_token);
        if (current_token.directives.preserve === "start") {
          this._output.raw = true;
        }
        this.print_newline(false, true);
        return;
      }
      if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
        this._output.space_before_token = true;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
      } else {
        this.print_block_commment(current_token, preserve_statement_flags);
      }
    };
    Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
      var lines = split_linebreaks(current_token.text);
      var j;
      var javadoc = false;
      var starless = false;
      var lastIndent = current_token.whitespace_before;
      var lastIndentLength = lastIndent.length;
      this.print_newline(false, preserve_statement_flags);
      this.print_token_line_indentation(current_token);
      this._output.add_token(lines[0]);
      this.print_newline(false, preserve_statement_flags);
      if (lines.length > 1) {
        lines = lines.slice(1);
        javadoc = all_lines_start_with(lines, "*");
        starless = each_line_matches_indent(lines, lastIndent);
        if (javadoc) {
          this._flags.alignment = 1;
        }
        for (j = 0; j < lines.length; j++) {
          if (javadoc) {
            this.print_token_line_indentation(current_token);
            this._output.add_token(ltrim(lines[j]));
          } else if (starless && lines[j]) {
            this.print_token_line_indentation(current_token);
            this._output.add_token(lines[j].substring(lastIndentLength));
          } else {
            this._output.current_line.set_indent(-1);
            this._output.add_token(lines[j]);
          }
          this.print_newline(false, preserve_statement_flags);
        }
        this._flags.alignment = 0;
      }
    };
    Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
      if (current_token.newlines) {
        this.print_newline(false, preserve_statement_flags);
      } else {
        this._output.trim(true);
      }
      this._output.space_before_token = true;
      this.print_token(current_token);
      this.print_newline(false, preserve_statement_flags);
    };
    Beautifier.prototype.handle_dot = function(current_token) {
      if (this.start_of_statement(current_token)) {
      } else {
        this.handle_whitespace_and_comments(current_token, true);
      }
      if (this._flags.last_token.text.match("^[0-9]+$")) {
        this._output.space_before_token = true;
      }
      if (reserved_array(this._flags.last_token, special_words)) {
        this._output.space_before_token = false;
      } else {
        this.allow_wrap_or_preserved_newline(
          current_token,
          this._flags.last_token.text === ")" && this._options.break_chained_methods
        );
      }
      if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
        this.deindent();
      }
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
      this.print_token(current_token);
      if (current_token.text[current_token.text.length - 1] === "\n") {
        this.print_newline(false, preserve_statement_flags);
      }
    };
    Beautifier.prototype.handle_eof = function(current_token) {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this.handle_whitespace_and_comments(current_token);
    };
    module2.exports.Beautifier = Beautifier;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/index.js
var require_javascript = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/javascript/index.js"(exports2, module2) {
    "use strict";
    var Beautifier = require_beautifier().Beautifier;
    var Options = require_options2().Options;
    function js_beautify(js_source_text, options) {
      var beautifier = new Beautifier(js_source_text, options);
      return beautifier.beautify();
    }
    module2.exports = js_beautify;
    module2.exports.defaultOptions = function() {
      return new Options();
    };
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/css/options.js
var require_options3 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/css/options.js"(exports2, module2) {
    "use strict";
    var BaseOptions = require_options().Options;
    function Options(options) {
      BaseOptions.call(this, options, "css");
      this.selector_separator_newline = this._get_boolean("selector_separator_newline", true);
      this.newline_between_rules = this._get_boolean("newline_between_rules", true);
      var space_around_selector_separator = this._get_boolean("space_around_selector_separator");
      this.space_around_combinator = this._get_boolean("space_around_combinator") || space_around_selector_separator;
      var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
      this.brace_style = "collapse";
      for (var bs = 0; bs < brace_style_split.length; bs++) {
        if (brace_style_split[bs] !== "expand") {
          this.brace_style = "collapse";
        } else {
          this.brace_style = brace_style_split[bs];
        }
      }
    }
    Options.prototype = new BaseOptions();
    module2.exports.Options = Options;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/css/beautifier.js
var require_beautifier2 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/css/beautifier.js"(exports2, module2) {
    "use strict";
    var Options = require_options3().Options;
    var Output = require_output().Output;
    var InputScanner = require_inputscanner().InputScanner;
    var Directives = require_directives().Directives;
    var directives_core = new Directives(/\/\*/, /\*\//);
    var lineBreak = /\r\n|[\r\n]/;
    var allLineBreaks = /\r\n|[\r\n]/g;
    var whitespaceChar = /\s/;
    var whitespacePattern = /(?:\s|\n)+/g;
    var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
    var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
    function Beautifier(source_text, options) {
      this._source_text = source_text || "";
      this._options = new Options(options);
      this._ch = null;
      this._input = null;
      this.NESTED_AT_RULE = {
        "@page": true,
        "@font-face": true,
        "@keyframes": true,
        // also in CONDITIONAL_GROUP_RULE below
        "@media": true,
        "@supports": true,
        "@document": true
      };
      this.CONDITIONAL_GROUP_RULE = {
        "@media": true,
        "@supports": true,
        "@document": true
      };
      this.NON_SEMICOLON_NEWLINE_PROPERTY = [
        "grid-template-areas",
        "grid-template"
      ];
    }
    Beautifier.prototype.eatString = function(endChars) {
      var result = "";
      this._ch = this._input.next();
      while (this._ch) {
        result += this._ch;
        if (this._ch === "\\") {
          result += this._input.next();
        } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
          break;
        }
        this._ch = this._input.next();
      }
      return result;
    };
    Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
      var result = whitespaceChar.test(this._input.peek());
      var newline_count = 0;
      while (whitespaceChar.test(this._input.peek())) {
        this._ch = this._input.next();
        if (allowAtLeastOneNewLine && this._ch === "\n") {
          if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
            newline_count++;
            this._output.add_new_line(true);
          }
        }
      }
      return result;
    };
    Beautifier.prototype.foundNestedPseudoClass = function() {
      var openParen = 0;
      var i = 1;
      var ch = this._input.peek(i);
      while (ch) {
        if (ch === "{") {
          return true;
        } else if (ch === "(") {
          openParen += 1;
        } else if (ch === ")") {
          if (openParen === 0) {
            return false;
          }
          openParen -= 1;
        } else if (ch === ";" || ch === "}") {
          return false;
        }
        i++;
        ch = this._input.peek(i);
      }
      return false;
    };
    Beautifier.prototype.print_string = function(output_string) {
      this._output.set_indent(this._indentLevel);
      this._output.non_breaking_space = true;
      this._output.add_token(output_string);
    };
    Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
      if (isAfterSpace) {
        this._output.space_before_token = true;
      }
    };
    Beautifier.prototype.indent = function() {
      this._indentLevel++;
    };
    Beautifier.prototype.outdent = function() {
      if (this._indentLevel > 0) {
        this._indentLevel--;
      }
    };
    Beautifier.prototype.beautify = function() {
      if (this._options.disabled) {
        return this._source_text;
      }
      var source_text = this._source_text;
      var eol = this._options.eol;
      if (eol === "auto") {
        eol = "\n";
        if (source_text && lineBreak.test(source_text || "")) {
          eol = source_text.match(lineBreak)[0];
        }
      }
      source_text = source_text.replace(allLineBreaks, "\n");
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      this._output = new Output(this._options, baseIndentString);
      this._input = new InputScanner(source_text);
      this._indentLevel = 0;
      this._nestedLevel = 0;
      this._ch = null;
      var parenLevel = 0;
      var insideRule = false;
      var insidePropertyValue = false;
      var enteringConditionalGroup = false;
      var insideAtExtend = false;
      var insideAtImport = false;
      var insideScssMap = false;
      var topCharacter = this._ch;
      var insideNonSemiColonValues = false;
      var whitespace;
      var isAfterSpace;
      var previous_ch;
      while (true) {
        whitespace = this._input.read(whitespacePattern);
        isAfterSpace = whitespace !== "";
        previous_ch = topCharacter;
        this._ch = this._input.next();
        if (this._ch === "\\" && this._input.hasNext()) {
          this._ch += this._input.next();
        }
        topCharacter = this._ch;
        if (!this._ch) {
          break;
        } else if (this._ch === "/" && this._input.peek() === "*") {
          this._output.add_new_line();
          this._input.back();
          var comment = this._input.read(block_comment_pattern);
          var directives = directives_core.get_directives(comment);
          if (directives && directives.ignore === "start") {
            comment += directives_core.readIgnored(this._input);
          }
          this.print_string(comment);
          this.eatWhitespace(true);
          this._output.add_new_line();
        } else if (this._ch === "/" && this._input.peek() === "/") {
          this._output.space_before_token = true;
          this._input.back();
          this.print_string(this._input.read(comment_pattern));
          this.eatWhitespace(true);
        } else if (this._ch === "@" || this._ch === "$") {
          this.preserveSingleSpace(isAfterSpace);
          if (this._input.peek() === "{") {
            this.print_string(this._ch + this.eatString("}"));
          } else {
            this.print_string(this._ch);
            var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            if (variableOrRule.match(/[ :]$/)) {
              variableOrRule = this.eatString(": ").replace(/\s$/, "");
              this.print_string(variableOrRule);
              this._output.space_before_token = true;
            }
            variableOrRule = variableOrRule.replace(/\s$/, "");
            if (variableOrRule === "extend") {
              insideAtExtend = true;
            } else if (variableOrRule === "import") {
              insideAtImport = true;
            }
            if (variableOrRule in this.NESTED_AT_RULE) {
              this._nestedLevel += 1;
              if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
                enteringConditionalGroup = true;
              }
            } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(":") !== -1) {
              insidePropertyValue = true;
              this.indent();
            }
          }
        } else if (this._ch === "#" && this._input.peek() === "{") {
          this.preserveSingleSpace(isAfterSpace);
          this.print_string(this._ch + this.eatString("}"));
        } else if (this._ch === "{") {
          if (insidePropertyValue) {
            insidePropertyValue = false;
            this.outdent();
          }
          if (enteringConditionalGroup) {
            enteringConditionalGroup = false;
            insideRule = this._indentLevel >= this._nestedLevel;
          } else {
            insideRule = this._indentLevel >= this._nestedLevel - 1;
          }
          if (this._options.newline_between_rules && insideRule) {
            if (this._output.previous_line && this._output.previous_line.item(-1) !== "{") {
              this._output.ensure_empty_line_above("/", ",");
            }
          }
          this._output.space_before_token = true;
          if (this._options.brace_style === "expand") {
            this._output.add_new_line();
            this.print_string(this._ch);
            this.indent();
            this._output.set_indent(this._indentLevel);
          } else {
            if (previous_ch === "(") {
              this._output.space_before_token = false;
            } else if (previous_ch !== ",") {
              this.indent();
            }
            this.print_string(this._ch);
          }
          this.eatWhitespace(true);
          this._output.add_new_line();
        } else if (this._ch === "}") {
          this.outdent();
          this._output.add_new_line();
          if (previous_ch === "{") {
            this._output.trim(true);
          }
          insideAtImport = false;
          insideAtExtend = false;
          if (insidePropertyValue) {
            this.outdent();
            insidePropertyValue = false;
          }
          this.print_string(this._ch);
          insideRule = false;
          if (this._nestedLevel) {
            this._nestedLevel--;
          }
          this.eatWhitespace(true);
          this._output.add_new_line();
          if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
            if (this._input.peek() !== "}") {
              this._output.add_new_line(true);
            }
          }
          if (this._input.peek() === ")") {
            this._output.trim(true);
            if (this._options.brace_style === "expand") {
              this._output.add_new_line(true);
            }
          }
        } else if (this._ch === ":") {
          for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
            if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
              insideNonSemiColonValues = true;
              break;
            }
          }
          if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
            this.print_string(":");
            if (!insidePropertyValue) {
              insidePropertyValue = true;
              this._output.space_before_token = true;
              this.eatWhitespace(true);
              this.indent();
            }
          } else {
            if (this._input.lookBack(" ")) {
              this._output.space_before_token = true;
            }
            if (this._input.peek() === ":") {
              this._ch = this._input.next();
              this.print_string("::");
            } else {
              this.print_string(":");
            }
          }
        } else if (this._ch === '"' || this._ch === "'") {
          var preserveQuoteSpace = previous_ch === '"' || previous_ch === "'";
          this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
          this.print_string(this._ch + this.eatString(this._ch));
          this.eatWhitespace(true);
        } else if (this._ch === ";") {
          insideNonSemiColonValues = false;
          if (parenLevel === 0) {
            if (insidePropertyValue) {
              this.outdent();
              insidePropertyValue = false;
            }
            insideAtExtend = false;
            insideAtImport = false;
            this.print_string(this._ch);
            this.eatWhitespace(true);
            if (this._input.peek() !== "/") {
              this._output.add_new_line();
            }
          } else {
            this.print_string(this._ch);
            this.eatWhitespace(true);
            this._output.space_before_token = true;
          }
        } else if (this._ch === "(") {
          if (this._input.lookBack("url")) {
            this.print_string(this._ch);
            this.eatWhitespace();
            parenLevel++;
            this.indent();
            this._ch = this._input.next();
            if (this._ch === ")" || this._ch === '"' || this._ch === "'") {
              this._input.back();
            } else if (this._ch) {
              this.print_string(this._ch + this.eatString(")"));
              if (parenLevel) {
                parenLevel--;
                this.outdent();
              }
            }
          } else {
            var space_needed = false;
            if (this._input.lookBack("with")) {
              space_needed = true;
            }
            this.preserveSingleSpace(isAfterSpace || space_needed);
            this.print_string(this._ch);
            if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
              this._output.add_new_line();
              insideScssMap = true;
            } else {
              this.eatWhitespace();
              parenLevel++;
              this.indent();
            }
          }
        } else if (this._ch === ")") {
          if (parenLevel) {
            parenLevel--;
            this.outdent();
          }
          if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
            insideScssMap = false;
            this.outdent();
            this._output.add_new_line();
          }
          this.print_string(this._ch);
        } else if (this._ch === ",") {
          this.print_string(this._ch);
          this.eatWhitespace(true);
          if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideAtImport && !insideAtExtend) {
            this._output.add_new_line();
          } else {
            this._output.space_before_token = true;
          }
        } else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !insidePropertyValue && parenLevel === 0) {
          if (this._options.space_around_combinator) {
            this._output.space_before_token = true;
            this.print_string(this._ch);
            this._output.space_before_token = true;
          } else {
            this.print_string(this._ch);
            this.eatWhitespace();
            if (this._ch && whitespaceChar.test(this._ch)) {
              this._ch = "";
            }
          }
        } else if (this._ch === "]") {
          this.print_string(this._ch);
        } else if (this._ch === "[") {
          this.preserveSingleSpace(isAfterSpace);
          this.print_string(this._ch);
        } else if (this._ch === "=") {
          this.eatWhitespace();
          this.print_string("=");
          if (whitespaceChar.test(this._ch)) {
            this._ch = "";
          }
        } else if (this._ch === "!" && !this._input.lookBack("\\")) {
          this._output.space_before_token = true;
          this.print_string(this._ch);
        } else {
          var preserveAfterSpace = previous_ch === '"' || previous_ch === "'";
          this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
          this.print_string(this._ch);
          if (!this._output.just_added_newline() && this._input.peek() === "\n" && insideNonSemiColonValues) {
            this._output.add_new_line();
          }
        }
      }
      var sweetCode = this._output.get_code(eol);
      return sweetCode;
    };
    module2.exports.Beautifier = Beautifier;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/css/index.js
var require_css = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/css/index.js"(exports2, module2) {
    "use strict";
    var Beautifier = require_beautifier2().Beautifier;
    var Options = require_options3().Options;
    function css_beautify(source_text, options) {
      var beautifier = new Beautifier(source_text, options);
      return beautifier.beautify();
    }
    module2.exports = css_beautify;
    module2.exports.defaultOptions = function() {
      return new Options();
    };
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/options.js
var require_options4 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/options.js"(exports2, module2) {
    "use strict";
    var BaseOptions = require_options().Options;
    function Options(options) {
      BaseOptions.call(this, options, "html");
      if (this.templating.length === 1 && this.templating[0] === "auto") {
        this.templating = ["django", "erb", "handlebars", "php"];
      }
      this.indent_inner_html = this._get_boolean("indent_inner_html");
      this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true);
      this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true);
      this.indent_handlebars = this._get_boolean("indent_handlebars", true);
      this.wrap_attributes = this._get_selection(
        "wrap_attributes",
        ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
      );
      this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size);
      this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]);
      this.inline = this._get_array("inline", [
        "a",
        "abbr",
        "area",
        "audio",
        "b",
        "bdi",
        "bdo",
        "br",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "datalist",
        "del",
        "dfn",
        "em",
        "embed",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "map",
        "mark",
        "math",
        "meter",
        "noscript",
        "object",
        "output",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        /* 'script', */
        "select",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "svg",
        "template",
        "textarea",
        "time",
        "u",
        "var",
        "video",
        "wbr",
        "text",
        // obsolete inline tags
        "acronym",
        "big",
        "strike",
        "tt"
      ]);
      this.void_elements = this._get_array("void_elements", [
        // HTLM void elements - aka self-closing tags - aka singletons
        // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
        // NOTE: Optional tags are too complex for a simple list
        // they are hard coded in _do_optional_end_element
        // Doctype and xml elements
        "!doctype",
        "?xml",
        // obsolete tags
        // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
        // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
        "basefont",
        "isindex"
      ]);
      this.unformatted = this._get_array("unformatted", []);
      this.content_unformatted = this._get_array("content_unformatted", [
        "pre",
        "textarea"
      ]);
      this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter");
      this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
    }
    Options.prototype = new BaseOptions();
    module2.exports.Options = Options;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/tokenizer.js
var require_tokenizer3 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/tokenizer.js"(exports2, module2) {
    "use strict";
    var BaseTokenizer = require_tokenizer().Tokenizer;
    var BASETOKEN = require_tokenizer().TOKEN;
    var Directives = require_directives().Directives;
    var TemplatablePattern = require_templatablepattern().TemplatablePattern;
    var Pattern = require_pattern().Pattern;
    var TOKEN = {
      TAG_OPEN: "TK_TAG_OPEN",
      TAG_CLOSE: "TK_TAG_CLOSE",
      ATTRIBUTE: "TK_ATTRIBUTE",
      EQUALS: "TK_EQUALS",
      VALUE: "TK_VALUE",
      COMMENT: "TK_COMMENT",
      TEXT: "TK_TEXT",
      UNKNOWN: "TK_UNKNOWN",
      START: BASETOKEN.START,
      RAW: BASETOKEN.RAW,
      EOF: BASETOKEN.EOF
    };
    var directives_core = new Directives(/<\!--/, /-->/);
    var Tokenizer = function(input_string, options) {
      BaseTokenizer.call(this, input_string, options);
      this._current_tag_name = "";
      var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
      var pattern_reader = new Pattern(this._input);
      this.__patterns = {
        word: templatable_reader.until(/[\n\r\t <]/),
        single_quote: templatable_reader.until_after(/'/),
        double_quote: templatable_reader.until_after(/"/),
        attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
        element_name: templatable_reader.until(/[\n\r\t >\/]/),
        handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
        handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
        handlebars_open: pattern_reader.until(/[\n\r\t }]/),
        handlebars_raw_close: pattern_reader.until(/}}/),
        comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
        cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
        // https://en.wikipedia.org/wiki/Conditional_comment
        conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
        processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
      };
      if (this._options.indent_handlebars) {
        this.__patterns.word = this.__patterns.word.exclude("handlebars");
      }
      this._unformatted_content_delimiter = null;
      if (this._options.unformatted_content_delimiter) {
        var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
        this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
      }
    };
    Tokenizer.prototype = new BaseTokenizer();
    Tokenizer.prototype._is_comment = function(current_token) {
      return false;
    };
    Tokenizer.prototype._is_opening = function(current_token) {
      return current_token.type === TOKEN.TAG_OPEN;
    };
    Tokenizer.prototype._is_closing = function(current_token, open_token) {
      return current_token.type === TOKEN.TAG_CLOSE && (open_token && ((current_token.text === ">" || current_token.text === "/>") && open_token.text[0] === "<" || current_token.text === "}}" && open_token.text[0] === "{" && open_token.text[1] === "{"));
    };
    Tokenizer.prototype._reset = function() {
      this._current_tag_name = "";
    };
    Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
      var token = null;
      this._readWhitespace();
      var c = this._input.peek();
      if (c === null) {
        return this._create_token(TOKEN.EOF, "");
      }
      token = token || this._read_open_handlebars(c, open_token);
      token = token || this._read_attribute(c, previous_token, open_token);
      token = token || this._read_close(c, open_token);
      token = token || this._read_raw_content(c, previous_token, open_token);
      token = token || this._read_content_word(c);
      token = token || this._read_comment_or_cdata(c);
      token = token || this._read_processing(c);
      token = token || this._read_open(c, open_token);
      token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
      return token;
    };
    Tokenizer.prototype._read_comment_or_cdata = function(c) {
      var token = null;
      var resulting_string = null;
      var directives = null;
      if (c === "<") {
        var peek1 = this._input.peek(1);
        if (peek1 === "!") {
          resulting_string = this.__patterns.comment.read();
          if (resulting_string) {
            directives = directives_core.get_directives(resulting_string);
            if (directives && directives.ignore === "start") {
              resulting_string += directives_core.readIgnored(this._input);
            }
          } else {
            resulting_string = this.__patterns.cdata.read();
          }
        }
        if (resulting_string) {
          token = this._create_token(TOKEN.COMMENT, resulting_string);
          token.directives = directives;
        }
      }
      return token;
    };
    Tokenizer.prototype._read_processing = function(c) {
      var token = null;
      var resulting_string = null;
      var directives = null;
      if (c === "<") {
        var peek1 = this._input.peek(1);
        if (peek1 === "!" || peek1 === "?") {
          resulting_string = this.__patterns.conditional_comment.read();
          resulting_string = resulting_string || this.__patterns.processing.read();
        }
        if (resulting_string) {
          token = this._create_token(TOKEN.COMMENT, resulting_string);
          token.directives = directives;
        }
      }
      return token;
    };
    Tokenizer.prototype._read_open = function(c, open_token) {
      var resulting_string = null;
      var token = null;
      if (!open_token) {
        if (c === "<") {
          resulting_string = this._input.next();
          if (this._input.peek() === "/") {
            resulting_string += this._input.next();
          }
          resulting_string += this.__patterns.element_name.read();
          token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
        }
      }
      return token;
    };
    Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
      var resulting_string = null;
      var token = null;
      if (!open_token) {
        if (this._options.indent_handlebars && c === "{" && this._input.peek(1) === "{") {
          if (this._input.peek(2) === "!") {
            resulting_string = this.__patterns.handlebars_comment.read();
            resulting_string = resulting_string || this.__patterns.handlebars.read();
            token = this._create_token(TOKEN.COMMENT, resulting_string);
          } else {
            resulting_string = this.__patterns.handlebars_open.read();
            token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
          }
        }
      }
      return token;
    };
    Tokenizer.prototype._read_close = function(c, open_token) {
      var resulting_string = null;
      var token = null;
      if (open_token) {
        if (open_token.text[0] === "<" && (c === ">" || c === "/" && this._input.peek(1) === ">")) {
          resulting_string = this._input.next();
          if (c === "/") {
            resulting_string += this._input.next();
          }
          token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
        } else if (open_token.text[0] === "{" && c === "}" && this._input.peek(1) === "}") {
          this._input.next();
          this._input.next();
          token = this._create_token(TOKEN.TAG_CLOSE, "}}");
        }
      }
      return token;
    };
    Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
      var token = null;
      var resulting_string = "";
      if (open_token && open_token.text[0] === "<") {
        if (c === "=") {
          token = this._create_token(TOKEN.EQUALS, this._input.next());
        } else if (c === '"' || c === "'") {
          var content = this._input.next();
          if (c === '"') {
            content += this.__patterns.double_quote.read();
          } else {
            content += this.__patterns.single_quote.read();
          }
          token = this._create_token(TOKEN.VALUE, content);
        } else {
          resulting_string = this.__patterns.attribute.read();
          if (resulting_string) {
            if (previous_token.type === TOKEN.EQUALS) {
              token = this._create_token(TOKEN.VALUE, resulting_string);
            } else {
              token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
            }
          }
        }
      }
      return token;
    };
    Tokenizer.prototype._is_content_unformatted = function(tag_name) {
      return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
    };
    Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) {
      var resulting_string = "";
      if (open_token && open_token.text[0] === "{") {
        resulting_string = this.__patterns.handlebars_raw_close.read();
      } else if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === "<" && previous_token.text[0] !== "/") {
        var tag_name = previous_token.opened.text.substr(1).toLowerCase();
        if (tag_name === "script" || tag_name === "style") {
          var token = this._read_comment_or_cdata(c);
          if (token) {
            token.type = TOKEN.TEXT;
            return token;
          }
          resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
        } else if (this._is_content_unformatted(tag_name)) {
          resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
        }
      }
      if (resulting_string) {
        return this._create_token(TOKEN.TEXT, resulting_string);
      }
      return null;
    };
    Tokenizer.prototype._read_content_word = function(c) {
      var resulting_string = "";
      if (this._options.unformatted_content_delimiter) {
        if (c === this._options.unformatted_content_delimiter[0]) {
          resulting_string = this.__patterns.unformatted_content_delimiter.read();
        }
      }
      if (!resulting_string) {
        resulting_string = this.__patterns.word.read();
      }
      if (resulting_string) {
        return this._create_token(TOKEN.TEXT, resulting_string);
      }
    };
    module2.exports.Tokenizer = Tokenizer;
    module2.exports.TOKEN = TOKEN;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/beautifier.js
var require_beautifier3 = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/beautifier.js"(exports2, module2) {
    "use strict";
    var Options = require_options4().Options;
    var Output = require_output().Output;
    var Tokenizer = require_tokenizer3().Tokenizer;
    var TOKEN = require_tokenizer3().TOKEN;
    var lineBreak = /\r\n|[\r\n]/;
    var allLineBreaks = /\r\n|[\r\n]/g;
    var Printer = function(options, base_indent_string) {
      this.indent_level = 0;
      this.alignment_size = 0;
      this.max_preserve_newlines = options.max_preserve_newlines;
      this.preserve_newlines = options.preserve_newlines;
      this._output = new Output(options, base_indent_string);
    };
    Printer.prototype.current_line_has_match = function(pattern) {
      return this._output.current_line.has_match(pattern);
    };
    Printer.prototype.set_space_before_token = function(value, non_breaking) {
      this._output.space_before_token = value;
      this._output.non_breaking_space = non_breaking;
    };
    Printer.prototype.set_wrap_point = function() {
      this._output.set_indent(this.indent_level, this.alignment_size);
      this._output.set_wrap_point();
    };
    Printer.prototype.add_raw_token = function(token) {
      this._output.add_raw_token(token);
    };
    Printer.prototype.print_preserved_newlines = function(raw_token) {
      var newlines = 0;
      if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
        newlines = raw_token.newlines ? 1 : 0;
      }
      if (this.preserve_newlines) {
        newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
      }
      for (var n = 0; n < newlines; n++) {
        this.print_newline(n > 0);
      }
      return newlines !== 0;
    };
    Printer.prototype.traverse_whitespace = function(raw_token) {
      if (raw_token.whitespace_before || raw_token.newlines) {
        if (!this.print_preserved_newlines(raw_token)) {
          this._output.space_before_token = true;
        }
        return true;
      }
      return false;
    };
    Printer.prototype.previous_token_wrapped = function() {
      return this._output.previous_token_wrapped;
    };
    Printer.prototype.print_newline = function(force) {
      this._output.add_new_line(force);
    };
    Printer.prototype.print_token = function(token) {
      if (token.text) {
        this._output.set_indent(this.indent_level, this.alignment_size);
        this._output.add_token(token.text);
      }
    };
    Printer.prototype.indent = function() {
      this.indent_level++;
    };
    Printer.prototype.get_full_indent = function(level) {
      level = this.indent_level + (level || 0);
      if (level < 1) {
        return "";
      }
      return this._output.get_indent_string(level);
    };
    var get_type_attribute = function(start_token) {
      var result = null;
      var raw_token = start_token.next;
      while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
        if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === "type") {
          if (raw_token.next && raw_token.next.type === TOKEN.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
            result = raw_token.next.next.text;
          }
          break;
        }
        raw_token = raw_token.next;
      }
      return result;
    };
    var get_custom_beautifier_name = function(tag_check, raw_token) {
      var typeAttribute = null;
      var result = null;
      if (!raw_token.closed) {
        return null;
      }
      if (tag_check === "script") {
        typeAttribute = "text/javascript";
      } else if (tag_check === "style") {
        typeAttribute = "text/css";
      }
      typeAttribute = get_type_attribute(raw_token) || typeAttribute;
      if (typeAttribute.search("text/css") > -1) {
        result = "css";
      } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
        result = "javascript";
      } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
        result = "html";
      } else if (typeAttribute.search(/test\/null/) > -1) {
        result = "null";
      }
      return result;
    };
    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }
    function TagFrame(parent, parser_token, indent_level) {
      this.parent = parent || null;
      this.tag = parser_token ? parser_token.tag_name : "";
      this.indent_level = indent_level || 0;
      this.parser_token = parser_token || null;
    }
    function TagStack(printer) {
      this._printer = printer;
      this._current_frame = null;
    }
    TagStack.prototype.get_parser_token = function() {
      return this._current_frame ? this._current_frame.parser_token : null;
    };
    TagStack.prototype.record_tag = function(parser_token) {
      var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
      this._current_frame = new_frame;
    };
    TagStack.prototype._try_pop_frame = function(frame) {
      var parser_token = null;
      if (frame) {
        parser_token = frame.parser_token;
        this._printer.indent_level = frame.indent_level;
        this._current_frame = frame.parent;
      }
      return parser_token;
    };
    TagStack.prototype._get_frame = function(tag_list, stop_list) {
      var frame = this._current_frame;
      while (frame) {
        if (tag_list.indexOf(frame.tag) !== -1) {
          break;
        } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
          frame = null;
          break;
        }
        frame = frame.parent;
      }
      return frame;
    };
    TagStack.prototype.try_pop = function(tag, stop_list) {
      var frame = this._get_frame([tag], stop_list);
      return this._try_pop_frame(frame);
    };
    TagStack.prototype.indent_to_tag = function(tag_list) {
      var frame = this._get_frame(tag_list);
      if (frame) {
        this._printer.indent_level = frame.indent_level;
      }
    };
    function Beautifier(source_text, options, js_beautify, css_beautify) {
      this._source_text = source_text || "";
      options = options || {};
      this._js_beautify = js_beautify;
      this._css_beautify = css_beautify;
      this._tag_stack = null;
      var optionHtml = new Options(options, "html");
      this._options = optionHtml;
      this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, "force".length) === "force";
      this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline";
      this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned";
      this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple";
      this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, "preserve".length) === "preserve";
      this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
    }
    Beautifier.prototype.beautify = function() {
      if (this._options.disabled) {
        return this._source_text;
      }
      var source_text = this._source_text;
      var eol = this._options.eol;
      if (this._options.eol === "auto") {
        eol = "\n";
        if (source_text && lineBreak.test(source_text)) {
          eol = source_text.match(lineBreak)[0];
        }
      }
      source_text = source_text.replace(allLineBreaks, "\n");
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      var last_token = {
        text: "",
        type: ""
      };
      var last_tag_token = new TagOpenParserToken();
      var printer = new Printer(this._options, baseIndentString);
      var tokens = new Tokenizer(source_text, this._options).tokenize();
      this._tag_stack = new TagStack(printer);
      var parser_token = null;
      var raw_token = tokens.next();
      while (raw_token.type !== TOKEN.EOF) {
        if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
          parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
          last_tag_token = parser_token;
        } else if (raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE || raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete) {
          parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
        } else if (raw_token.type === TOKEN.TAG_CLOSE) {
          parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
        } else if (raw_token.type === TOKEN.TEXT) {
          parser_token = this._handle_text(printer, raw_token, last_tag_token);
        } else {
          printer.add_raw_token(raw_token);
        }
        last_token = parser_token;
        raw_token = tokens.next();
      }
      var sweet_code = printer._output.get_code(eol);
      return sweet_code;
    };
    Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.alignment_size = 0;
      last_tag_token.tag_complete = true;
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      if (last_tag_token.is_unformatted) {
        printer.add_raw_token(raw_token);
      } else {
        if (last_tag_token.tag_start_char === "<") {
          printer.set_space_before_token(raw_token.text[0] === "/", true);
          if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
            printer.print_newline(false);
          }
        }
        printer.print_token(raw_token);
      }
      if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
        printer.indent();
        last_tag_token.indent_content = false;
      }
      if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
        printer.set_wrap_point();
      }
      return parser_token;
    };
    Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, tokens) {
      var wrapped = last_tag_token.has_wrapped_attrs;
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      if (last_tag_token.is_unformatted) {
        printer.add_raw_token(raw_token);
      } else if (last_tag_token.tag_start_char === "{" && raw_token.type === TOKEN.TEXT) {
        if (printer.print_preserved_newlines(raw_token)) {
          raw_token.newlines = 0;
          printer.add_raw_token(raw_token);
        } else {
          printer.print_token(raw_token);
        }
      } else {
        if (raw_token.type === TOKEN.ATTRIBUTE) {
          printer.set_space_before_token(true);
          last_tag_token.attr_count += 1;
        } else if (raw_token.type === TOKEN.EQUALS) {
          printer.set_space_before_token(false);
        } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) {
          printer.set_space_before_token(false);
        }
        if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === "<") {
          if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
            printer.traverse_whitespace(raw_token);
            wrapped = wrapped || raw_token.newlines !== 0;
          }
          if (this._is_wrap_attributes_force) {
            var force_attr_wrap = last_tag_token.attr_count > 1;
            if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
              var is_only_attribute = true;
              var peek_index = 0;
              var peek_token;
              do {
                peek_token = tokens.peek(peek_index);
                if (peek_token.type === TOKEN.ATTRIBUTE) {
                  is_only_attribute = false;
                  break;
                }
                peek_index += 1;
              } while (peek_index < 4 && peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
              force_attr_wrap = !is_only_attribute;
            }
            if (force_attr_wrap) {
              printer.print_newline(false);
              wrapped = true;
            }
          }
        }
        printer.print_token(raw_token);
        wrapped = wrapped || printer.previous_token_wrapped();
        last_tag_token.has_wrapped_attrs = wrapped;
      }
      return parser_token;
    };
    Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
      var parser_token = {
        text: raw_token.text,
        type: "TK_CONTENT"
      };
      if (last_tag_token.custom_beautifier_name) {
        this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
      } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
        printer.add_raw_token(raw_token);
      } else {
        printer.traverse_whitespace(raw_token);
        printer.print_token(raw_token);
      }
      return parser_token;
    };
    Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
      var local = this;
      if (raw_token.text !== "") {
        var text = raw_token.text, _beautifier, script_indent_level = 1, pre = "", post = "";
        if (last_tag_token.custom_beautifier_name === "javascript" && typeof this._js_beautify === "function") {
          _beautifier = this._js_beautify;
        } else if (last_tag_token.custom_beautifier_name === "css" && typeof this._css_beautify === "function") {
          _beautifier = this._css_beautify;
        } else if (last_tag_token.custom_beautifier_name === "html") {
          _beautifier = function(html_source, options) {
            var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
            return beautifier.beautify();
          };
        }
        if (this._options.indent_scripts === "keep") {
          script_indent_level = 0;
        } else if (this._options.indent_scripts === "separate") {
          script_indent_level = -printer.indent_level;
        }
        var indentation = printer.get_full_indent(script_indent_level);
        text = text.replace(/\n[ \t]*$/, "");
        if (last_tag_token.custom_beautifier_name !== "html" && text[0] === "<" && text.match(/^(<!--|<!\[CDATA\[)/)) {
          var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);
          if (!matched) {
            printer.add_raw_token(raw_token);
            return;
          }
          pre = indentation + matched[1] + "\n";
          text = matched[4];
          if (matched[5]) {
            post = indentation + matched[5];
          }
          text = text.replace(/\n[ \t]*$/, "");
          if (matched[2] || matched[3].indexOf("\n") !== -1) {
            matched = matched[3].match(/[ \t]+$/);
            if (matched) {
              raw_token.whitespace_before = matched[0];
            }
          }
        }
        if (text) {
          if (_beautifier) {
            var Child_options = function() {
              this.eol = "\n";
            };
            Child_options.prototype = this._options.raw_options;
            var child_options = new Child_options();
            text = _beautifier(indentation + text, child_options);
          } else {
            var white = raw_token.whitespace_before;
            if (white) {
              text = text.replace(new RegExp("\n(" + white + ")?", "g"), "\n");
            }
            text = indentation + text.replace(/\n/g, "\n" + indentation);
          }
        }
        if (pre) {
          if (!text) {
            text = pre + post;
          } else {
            text = pre + text + "\n" + post;
          }
        }
        printer.print_newline(false);
        if (text) {
          raw_token.text = text;
          raw_token.whitespace_before = "";
          raw_token.newlines = 0;
          printer.add_raw_token(raw_token);
          printer.print_newline(true);
        }
      }
    };
    Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token) {
      var parser_token = this._get_tag_open_token(raw_token);
      if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && !last_tag_token.is_empty_element && raw_token.type === TOKEN.TAG_OPEN && raw_token.text.indexOf("</") === 0) {
        printer.add_raw_token(raw_token);
        parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
      } else {
        printer.traverse_whitespace(raw_token);
        this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
        if (!parser_token.is_inline_element) {
          printer.set_wrap_point();
        }
        printer.print_token(raw_token);
      }
      if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
        parser_token.alignment_size = raw_token.text.length + 1;
      }
      if (!parser_token.tag_complete && !parser_token.is_unformatted) {
        printer.alignment_size = parser_token.alignment_size;
      }
      return parser_token;
    };
    var TagOpenParserToken = function(parent, raw_token) {
      this.parent = parent || null;
      this.text = "";
      this.type = "TK_TAG_OPEN";
      this.tag_name = "";
      this.is_inline_element = false;
      this.is_unformatted = false;
      this.is_content_unformatted = false;
      this.is_empty_element = false;
      this.is_start_tag = false;
      this.is_end_tag = false;
      this.indent_content = false;
      this.multiline_content = false;
      this.custom_beautifier_name = null;
      this.start_tag_token = null;
      this.attr_count = 0;
      this.has_wrapped_attrs = false;
      this.alignment_size = 0;
      this.tag_complete = false;
      this.tag_start_char = "";
      this.tag_check = "";
      if (!raw_token) {
        this.tag_complete = true;
      } else {
        var tag_check_match;
        this.tag_start_char = raw_token.text[0];
        this.text = raw_token.text;
        if (this.tag_start_char === "<") {
          tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
          this.tag_check = tag_check_match ? tag_check_match[1] : "";
        } else {
          tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
          this.tag_check = tag_check_match ? tag_check_match[1] : "";
          if ((raw_token.text.startsWith("{{#>") || raw_token.text.startsWith("{{~#>")) && this.tag_check[0] === ">") {
            if (this.tag_check === ">" && raw_token.next !== null) {
              this.tag_check = raw_token.next.text.split(" ")[0];
            } else {
              this.tag_check = raw_token.text.split(">")[1];
            }
          }
        }
        this.tag_check = this.tag_check.toLowerCase();
        if (raw_token.type === TOKEN.COMMENT) {
          this.tag_complete = true;
        }
        this.is_start_tag = this.tag_check.charAt(0) !== "/";
        this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
        this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === "/>";
        var handlebar_starts = 2;
        if (this.tag_start_char === "{" && this.text.length >= 3) {
          if (this.text.charAt(2) === "~") {
            handlebar_starts = 3;
          }
        }
        this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(handlebar_starts)));
      }
    };
    Beautifier.prototype._get_tag_open_token = function(raw_token) {
      var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
      parser_token.alignment_size = this._options.wrap_attributes_indent_size;
      parser_token.is_end_tag = parser_token.is_end_tag || in_array(parser_token.tag_check, this._options.void_elements);
      parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
      parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
      parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
      parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === "{";
      return parser_token;
    };
    Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {
      if (!parser_token.is_empty_element) {
        if (parser_token.is_end_tag) {
          parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
        } else {
          if (this._do_optional_end_element(parser_token)) {
            if (!parser_token.is_inline_element) {
              printer.print_newline(false);
            }
          }
          this._tag_stack.record_tag(parser_token);
          if ((parser_token.tag_name === "script" || parser_token.tag_name === "style") && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
            parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
          }
        }
      }
      if (in_array(parser_token.tag_check, this._options.extra_liners)) {
        printer.print_newline(false);
        if (!printer._output.just_added_blankline()) {
          printer.print_newline(true);
        }
      }
      if (parser_token.is_empty_element) {
        if (parser_token.tag_start_char === "{" && parser_token.tag_check === "else") {
          this._tag_stack.indent_to_tag(["if", "unless", "each"]);
          parser_token.indent_content = true;
          var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
          if (!foundIfOnCurrentLine) {
            printer.print_newline(false);
          }
        }
        if (parser_token.tag_name === "!--" && last_token.type === TOKEN.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf("\n") === -1) {
        } else {
          if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
            printer.print_newline(false);
          }
          this._calcluate_parent_multiline(printer, parser_token);
        }
      } else if (parser_token.is_end_tag) {
        var do_end_expand = false;
        do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
        do_end_expand = do_end_expand || !parser_token.is_inline_element && !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) && !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) && last_token.type !== "TK_CONTENT";
        if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
          do_end_expand = false;
        }
        if (do_end_expand) {
          printer.print_newline(false);
        }
      } else {
        parser_token.indent_content = !parser_token.custom_beautifier_name;
        if (parser_token.tag_start_char === "<") {
          if (parser_token.tag_name === "html") {
            parser_token.indent_content = this._options.indent_inner_html;
          } else if (parser_token.tag_name === "head") {
            parser_token.indent_content = this._options.indent_head_inner_html;
          } else if (parser_token.tag_name === "body") {
            parser_token.indent_content = this._options.indent_body_inner_html;
          }
        }
        if (!(parser_token.is_inline_element || parser_token.is_unformatted) && (last_token.type !== "TK_CONTENT" || parser_token.is_content_unformatted)) {
          printer.print_newline(false);
        }
        this._calcluate_parent_multiline(printer, parser_token);
      }
    };
    Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
      if (parser_token.parent && printer._output.just_added_newline() && !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
        parser_token.parent.multiline_content = true;
      }
    };
    var p_closers = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"];
    var p_parent_excludes = ["a", "audio", "del", "ins", "map", "noscript", "video"];
    Beautifier.prototype._do_optional_end_element = function(parser_token) {
      var result = null;
      if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
        return;
      }
      if (parser_token.tag_name === "body") {
        result = result || this._tag_stack.try_pop("head");
      } else if (parser_token.tag_name === "li") {
        result = result || this._tag_stack.try_pop("li", ["ol", "ul"]);
      } else if (parser_token.tag_name === "dd" || parser_token.tag_name === "dt") {
        result = result || this._tag_stack.try_pop("dt", ["dl"]);
        result = result || this._tag_stack.try_pop("dd", ["dl"]);
      } else if (parser_token.parent.tag_name === "p" && p_closers.indexOf(parser_token.tag_name) !== -1) {
        var p_parent = parser_token.parent.parent;
        if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
          result = result || this._tag_stack.try_pop("p");
        }
      } else if (parser_token.tag_name === "rp" || parser_token.tag_name === "rt") {
        result = result || this._tag_stack.try_pop("rt", ["ruby", "rtc"]);
        result = result || this._tag_stack.try_pop("rp", ["ruby", "rtc"]);
      } else if (parser_token.tag_name === "optgroup") {
        result = result || this._tag_stack.try_pop("optgroup", ["select"]);
      } else if (parser_token.tag_name === "option") {
        result = result || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]);
      } else if (parser_token.tag_name === "colgroup") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
      } else if (parser_token.tag_name === "thead") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
        result = result || this._tag_stack.try_pop("colgroup", ["table"]);
      } else if (parser_token.tag_name === "tbody" || parser_token.tag_name === "tfoot") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
        result = result || this._tag_stack.try_pop("colgroup", ["table"]);
        result = result || this._tag_stack.try_pop("thead", ["table"]);
        result = result || this._tag_stack.try_pop("tbody", ["table"]);
      } else if (parser_token.tag_name === "tr") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
        result = result || this._tag_stack.try_pop("colgroup", ["table"]);
        result = result || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]);
      } else if (parser_token.tag_name === "th" || parser_token.tag_name === "td") {
        result = result || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]);
        result = result || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]);
      }
      parser_token.parent = this._tag_stack.get_parser_token();
      return result;
    };
    module2.exports.Beautifier = Beautifier;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/index.js
var require_html = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/html/index.js"(exports2, module2) {
    "use strict";
    var Beautifier = require_beautifier3().Beautifier;
    var Options = require_options4().Options;
    function style_html(html_source, options, js_beautify, css_beautify) {
      var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
      return beautifier.beautify();
    }
    module2.exports = style_html;
    module2.exports.defaultOptions = function() {
      return new Options();
    };
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/index.js
var require_src = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/src/index.js"(exports2, module2) {
    "use strict";
    var js_beautify = require_javascript();
    var css_beautify = require_css();
    var html_beautify = require_html();
    function style_html(html_source, options, js, css) {
      js = js || js_beautify;
      css = css || css_beautify;
      return html_beautify(html_source, options, js, css);
    }
    style_html.defaultOptions = html_beautify.defaultOptions;
    module2.exports.js = js_beautify;
    module2.exports.css = css_beautify;
    module2.exports.html = style_html;
  }
});

// ../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/index.js
var require_js = __commonJS({
  "../node_modules/.pnpm/js-beautify@1.14.4/node_modules/js-beautify/js/index.js"(exports2, module2) {
    "use strict";
    function get_beautify(js_beautify, css_beautify, html_beautify) {
      var beautify2 = function(src, config) {
        return js_beautify.js_beautify(src, config);
      };
      beautify2.js = js_beautify.js_beautify;
      beautify2.css = css_beautify.css_beautify;
      beautify2.html = html_beautify.html_beautify;
      beautify2.js_beautify = js_beautify.js_beautify;
      beautify2.css_beautify = css_beautify.css_beautify;
      beautify2.html_beautify = html_beautify.html_beautify;
      return beautify2;
    }
    if (typeof define === "function" && define.amd) {
      define([
        "./lib/beautify",
        "./lib/beautify-css",
        "./lib/beautify-html"
      ], function(js_beautify, css_beautify, html_beautify) {
        return get_beautify(js_beautify, css_beautify, html_beautify);
      });
    } else {
      (function(mod) {
        var beautifier = require_src();
        beautifier.js_beautify = beautifier.js;
        beautifier.css_beautify = beautifier.css;
        beautifier.html_beautify = beautifier.html;
        mod.exports = get_beautify(beautifier, beautifier, beautifier);
      })(module2);
    }
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/comments.js
var require_comments = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/comments.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads a single line comment
       */
      T_COMMENT: function() {
        while (this.offset < this.size) {
          const ch = this.input();
          if (ch === "\n" || ch === "\r") {
            return this.tok.T_COMMENT;
          } else if (ch === "?" && !this.aspTagMode && this._input[this.offset] === ">") {
            this.unput(1);
            return this.tok.T_COMMENT;
          } else if (ch === "%" && this.aspTagMode && this._input[this.offset] === ">") {
            this.unput(1);
            return this.tok.T_COMMENT;
          }
        }
        return this.tok.T_COMMENT;
      },
      /*
       * Behaviour : https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1927
       */
      T_DOC_COMMENT: function() {
        let ch = this.input();
        let token = this.tok.T_COMMENT;
        if (ch === "*") {
          ch = this.input();
          if (this.is_WHITESPACE()) {
            token = this.tok.T_DOC_COMMENT;
          }
          if (ch === "/") {
            return token;
          } else {
            this.unput(1);
          }
        }
        while (this.offset < this.size) {
          ch = this.input();
          if (ch === "*" && this._input[this.offset] === "/") {
            this.input();
            break;
          }
        }
        return token;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/initial.js
var require_initial = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/initial.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      nextINITIAL: function() {
        if (this.conditionStack.length > 1 && this.conditionStack[this.conditionStack.length - 1] === "INITIAL") {
          this.popState();
        } else {
          this.begin("ST_IN_SCRIPTING");
        }
        return this;
      },
      matchINITIAL: function() {
        while (this.offset < this.size) {
          let ch = this.input();
          if (ch == "<") {
            ch = this.ahead(1);
            if (ch == "?") {
              if (this.tryMatch("?=")) {
                this.unput(1).appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
                break;
              } else if (this.tryMatchCaseless("?php")) {
                ch = this._input[this.offset + 4];
                if (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
                  this.unput(1).appendToken(this.tok.T_OPEN_TAG, 6).nextINITIAL();
                  break;
                }
              }
              if (this.short_tags) {
                this.unput(1).appendToken(this.tok.T_OPEN_TAG, 2).nextINITIAL();
                break;
              }
            } else if (this.asp_tags && ch == "%") {
              if (this.tryMatch("%=")) {
                this.aspTagMode = true;
                this.unput(1).appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3).nextINITIAL();
                break;
              } else {
                this.aspTagMode = true;
                this.unput(1).appendToken(this.tok.T_OPEN_TAG, 2).nextINITIAL();
                break;
              }
            }
          }
        }
        if (this.yytext.length > 0) {
          return this.tok.T_INLINE_HTML;
        } else {
          return false;
        }
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/numbers.js
var require_numbers = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/numbers.js"(exports2, module2) {
    "use strict";
    var MAX_LENGTH_OF_LONG = 10;
    var long_min_digits = "2147483648";
    if (process.arch == "x64") {
      MAX_LENGTH_OF_LONG = 19;
      long_min_digits = "9223372036854775808";
    }
    module2.exports = {
      consume_NUM: function() {
        let ch = this.yytext[0];
        let hasPoint = ch === ".";
        if (ch === "0") {
          ch = this.input();
          if (ch === "x" || ch === "X") {
            ch = this.input();
            if (ch !== "_" && this.is_HEX()) {
              return this.consume_HNUM();
            } else {
              this.unput(ch ? 2 : 1);
            }
          } else if (ch === "b" || ch === "B") {
            ch = this.input();
            if (ch !== "_" && ch === "0" || ch === "1") {
              return this.consume_BNUM();
            } else {
              this.unput(ch ? 2 : 1);
            }
          } else if (!this.is_NUM()) {
            if (ch) this.unput(1);
          }
        }
        while (this.offset < this.size) {
          const prev = ch;
          ch = this.input();
          if (ch === "_") {
            if (prev === "_") {
              this.unput(2);
              break;
            }
            if (prev === ".") {
              this.unput(1);
              break;
            }
            if (prev === "e" || prev === "E") {
              this.unput(2);
              break;
            }
          } else if (ch === ".") {
            if (hasPoint) {
              this.unput(1);
              break;
            }
            if (prev === "_") {
              this.unput(2);
              break;
            }
            hasPoint = true;
            continue;
          } else if (ch === "e" || ch === "E") {
            if (prev === "_") {
              this.unput(1);
              break;
            }
            let undo = 2;
            ch = this.input();
            if (ch === "+" || ch === "-") {
              undo = 3;
              ch = this.input();
            }
            if (this.is_NUM_START()) {
              this.consume_LNUM();
              return this.tok.T_DNUMBER;
            }
            this.unput(ch ? undo : undo - 1);
            break;
          }
          if (!this.is_NUM()) {
            if (ch) this.unput(1);
            break;
          }
        }
        if (hasPoint) {
          return this.tok.T_DNUMBER;
        } else if (this.yytext.length < MAX_LENGTH_OF_LONG - 1) {
          return this.tok.T_LNUMBER;
        } else {
          if (this.yytext.length < MAX_LENGTH_OF_LONG || this.yytext.length == MAX_LENGTH_OF_LONG && this.yytext < long_min_digits) {
            return this.tok.T_LNUMBER;
          }
          return this.tok.T_DNUMBER;
        }
      },
      // read hexa
      consume_HNUM: function() {
        while (this.offset < this.size) {
          const ch = this.input();
          if (!this.is_HEX()) {
            if (ch) this.unput(1);
            break;
          }
        }
        return this.tok.T_LNUMBER;
      },
      // read a generic number
      consume_LNUM: function() {
        while (this.offset < this.size) {
          const ch = this.input();
          if (!this.is_NUM()) {
            if (ch) this.unput(1);
            break;
          }
        }
        return this.tok.T_LNUMBER;
      },
      // read binary
      consume_BNUM: function() {
        let ch;
        while (this.offset < this.size) {
          ch = this.input();
          if (ch !== "0" && ch !== "1" && ch !== "_") {
            if (ch) this.unput(1);
            break;
          }
        }
        return this.tok.T_LNUMBER;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/property.js
var require_property = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/property.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      matchST_LOOKING_FOR_PROPERTY: function() {
        let ch = this.input();
        if (ch === "-") {
          ch = this.input();
          if (ch === ">") {
            return this.tok.T_OBJECT_OPERATOR;
          }
          if (ch) this.unput(1);
        } else if (this.is_WHITESPACE()) {
          return this.tok.T_WHITESPACE;
        } else if (this.is_LABEL_START()) {
          this.consume_LABEL();
          this.popState();
          return this.tok.T_STRING;
        }
        this.popState();
        if (ch) this.unput(1);
        return false;
      },
      matchST_LOOKING_FOR_VARNAME: function() {
        let ch = this.input();
        this.popState();
        this.begin("ST_IN_SCRIPTING");
        if (this.is_LABEL_START()) {
          this.consume_LABEL();
          ch = this.input();
          if (ch === "[" || ch === "}") {
            this.unput(1);
            return this.tok.T_STRING_VARNAME;
          } else {
            this.unput(this.yytext.length);
          }
        } else {
          if (ch) this.unput(1);
        }
        return false;
      },
      matchST_VAR_OFFSET: function() {
        const ch = this.input();
        if (this.is_NUM_START()) {
          this.consume_NUM();
          return this.tok.T_NUM_STRING;
        } else if (ch === "]") {
          this.popState();
          return "]";
        } else if (ch === "$") {
          this.input();
          if (this.is_LABEL_START()) {
            this.consume_LABEL();
            return this.tok.T_VARIABLE;
          } else {
            throw new Error("Unexpected terminal");
          }
        } else if (this.is_LABEL_START()) {
          this.consume_LABEL();
          return this.tok.T_STRING;
        } else if (this.is_WHITESPACE() || ch === "\\" || ch === "'" || ch === "#") {
          return this.tok.T_ENCAPSED_AND_WHITESPACE;
        } else if (ch === "[" || ch === "{" || ch === "}" || ch === '"' || ch === "`" || this.is_TOKEN()) {
          return ch;
        } else {
          throw new Error("Unexpected terminal");
        }
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/scripting.js
var require_scripting = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/scripting.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      matchST_IN_SCRIPTING: function() {
        let ch = this.input();
        switch (ch) {
          case " ":
          case "	":
          case "\n":
          case "\r":
          case "\r\n":
            return this.T_WHITESPACE();
          case "#":
            return this.T_COMMENT();
          case "/":
            if (this._input[this.offset] === "/") {
              return this.T_COMMENT();
            } else if (this._input[this.offset] === "*") {
              this.input();
              return this.T_DOC_COMMENT();
            }
            return this.consume_TOKEN();
          case "'":
            return this.T_CONSTANT_ENCAPSED_STRING();
          case '"':
            return this.ST_DOUBLE_QUOTES();
          case "`":
            this.begin("ST_BACKQUOTE");
            return "`";
          case "?":
            if (!this.aspTagMode && this.tryMatch(">")) {
              this.input();
              const nextCH = this._input[this.offset];
              if (nextCH === "\n" || nextCH === "\r") this.input();
              if (this.conditionStack.length > 1) {
                this.begin("INITIAL");
              }
              return this.tok.T_CLOSE_TAG;
            }
            return this.consume_TOKEN();
          case "%":
            if (this.aspTagMode && this._input[this.offset] === ">") {
              this.input();
              ch = this._input[this.offset];
              if (ch === "\n" || ch === "\r") {
                this.input();
              }
              this.aspTagMode = false;
              if (this.conditionStack.length > 1) {
                this.begin("INITIAL");
              }
              return this.tok.T_CLOSE_TAG;
            }
            return this.consume_TOKEN();
          case "{":
            this.begin("ST_IN_SCRIPTING");
            return "{";
          case "}":
            if (this.conditionStack.length > 2) {
              this.popState();
            }
            return "}";
          default:
            if (ch === ".") {
              ch = this.input();
              if (this.is_NUM_START()) {
                return this.consume_NUM();
              } else {
                if (ch) this.unput(1);
              }
            }
            if (this.is_NUM_START()) {
              return this.consume_NUM();
            } else if (this.is_LABEL_START()) {
              return this.consume_LABEL().T_STRING();
            } else if (this.is_TOKEN()) {
              return this.consume_TOKEN();
            }
        }
        throw new Error(
          'Bad terminal sequence "' + ch + '" at line ' + this.yylineno + " (offset " + this.offset + ")"
        );
      },
      T_WHITESPACE: function() {
        while (this.offset < this.size) {
          const ch = this.input();
          if (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
            continue;
          }
          if (ch) this.unput(1);
          break;
        }
        return this.tok.T_WHITESPACE;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/strings.js
var require_strings = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/strings.js"(exports2, module2) {
    "use strict";
    var newline = ["\n", "\r"];
    var valid_after_heredoc = ["\n", "\r", ";"];
    var valid_after_heredoc_73 = valid_after_heredoc.concat([
      "	",
      " ",
      ",",
      "]",
      ")",
      "/",
      "=",
      "!"
    ]);
    module2.exports = {
      T_CONSTANT_ENCAPSED_STRING: function() {
        let ch;
        while (this.offset < this.size) {
          ch = this.input();
          if (ch == "\\") {
            this.input();
          } else if (ch == "'") {
            break;
          }
        }
        return this.tok.T_CONSTANT_ENCAPSED_STRING;
      },
      // check if matching a HEREDOC state
      is_HEREDOC: function() {
        const revert = this.offset;
        if (this._input[this.offset - 1] === "<" && this._input[this.offset] === "<" && this._input[this.offset + 1] === "<") {
          this.offset += 3;
          if (this.is_TABSPACE()) {
            while (this.offset < this.size) {
              this.offset++;
              if (!this.is_TABSPACE()) {
                break;
              }
            }
          }
          let tChar = this._input[this.offset - 1];
          if (tChar === "'" || tChar === '"') {
            this.offset++;
          } else {
            tChar = null;
          }
          if (this.is_LABEL_START()) {
            let yyoffset = this.offset - 1;
            while (this.offset < this.size) {
              this.offset++;
              if (!this.is_LABEL()) {
                break;
              }
            }
            const yylabel = this._input.substring(yyoffset, this.offset - 1);
            if (!tChar || tChar === this._input[this.offset - 1]) {
              if (tChar) this.offset++;
              if (newline.includes(this._input[this.offset - 1])) {
                this.heredoc_label.label = yylabel;
                this.heredoc_label.length = yylabel.length;
                this.heredoc_label.finished = false;
                yyoffset = this.offset - revert;
                this.offset = revert;
                this.consume(yyoffset);
                if (tChar === "'") {
                  this.begin("ST_NOWDOC");
                } else {
                  this.begin("ST_HEREDOC");
                }
                this.prematch_ENDOFDOC();
                return this.tok.T_START_HEREDOC;
              }
            }
          }
        }
        this.offset = revert;
        return false;
      },
      ST_DOUBLE_QUOTES: function() {
        let ch;
        while (this.offset < this.size) {
          ch = this.input();
          if (ch == "\\") {
            this.input();
          } else if (ch == '"') {
            break;
          } else if (ch == "$") {
            ch = this.input();
            if (ch == "{" || this.is_LABEL_START()) {
              this.unput(2);
              break;
            }
            if (ch) this.unput(1);
          } else if (ch == "{") {
            ch = this.input();
            if (ch == "$") {
              this.unput(2);
              break;
            }
            if (ch) this.unput(1);
          }
        }
        if (ch == '"') {
          return this.tok.T_CONSTANT_ENCAPSED_STRING;
        } else {
          let prefix = 1;
          if (this.yytext[0] === "b" || this.yytext[0] === "B") {
            prefix = 2;
          }
          if (this.yytext.length > 2) {
            this.appendToken(
              this.tok.T_ENCAPSED_AND_WHITESPACE,
              this.yytext.length - prefix
            );
          }
          this.unput(this.yytext.length - prefix);
          this.begin("ST_DOUBLE_QUOTES");
          return this.yytext;
        }
      },
      // check if its a DOC end sequence
      isDOC_MATCH: function(offset, consumeLeadingSpaces) {
        const prev_ch = this._input[offset - 2];
        if (!newline.includes(prev_ch)) {
          return false;
        }
        let indentation_uses_spaces = false;
        let indentation_uses_tabs = false;
        let indentation = 0;
        let leading_ch = this._input[offset - 1];
        if (this.version >= 703) {
          while (leading_ch === "	" || leading_ch === " ") {
            if (leading_ch === " ") {
              indentation_uses_spaces = true;
            } else if (leading_ch === "	") {
              indentation_uses_tabs = true;
            }
            leading_ch = this._input[offset + indentation];
            indentation++;
          }
          offset = offset + indentation;
          if (newline.includes(this._input[offset - 1])) {
            return false;
          }
        }
        if (this._input.substring(
          offset - 1,
          offset - 1 + this.heredoc_label.length
        ) === this.heredoc_label.label) {
          const ch = this._input[offset - 1 + this.heredoc_label.length];
          if ((this.version >= 703 ? valid_after_heredoc_73 : valid_after_heredoc).includes(ch)) {
            if (consumeLeadingSpaces) {
              this.consume(indentation);
              if (indentation_uses_spaces && indentation_uses_tabs) {
                throw new Error(
                  "Parse error:  mixing spaces and tabs in ending marker at line " + this.yylineno + " (offset " + this.offset + ")"
                );
              }
            } else {
              this.heredoc_label.indentation = indentation;
              this.heredoc_label.indentation_uses_spaces = indentation_uses_spaces;
              this.heredoc_label.first_encaps_node = true;
            }
            return true;
          }
        }
        return false;
      },
      /*
       * Prematch the end of HEREDOC/NOWDOC end tag to preset the
       * context of this.heredoc_label
       */
      prematch_ENDOFDOC: function() {
        this.heredoc_label.indentation_uses_spaces = false;
        this.heredoc_label.indentation = 0;
        this.heredoc_label.first_encaps_node = true;
        let offset = this.offset + 1;
        while (offset < this._input.length) {
          if (this.isDOC_MATCH(offset, false)) {
            return;
          }
          if (!newline.includes(this._input[offset - 1])) {
            while (!newline.includes(this._input[offset++]) && offset < this._input.length) {
            }
          }
          offset++;
        }
      },
      matchST_NOWDOC: function() {
        if (this.isDOC_MATCH(this.offset, true)) {
          this.consume(this.heredoc_label.length);
          this.popState();
          return this.tok.T_END_HEREDOC;
        }
        let ch = this._input[this.offset - 1];
        while (this.offset < this.size) {
          if (newline.includes(ch)) {
            ch = this.input();
            if (this.isDOC_MATCH(this.offset, true)) {
              this.unput(1).popState();
              this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
              return this.tok.T_ENCAPSED_AND_WHITESPACE;
            }
          } else {
            ch = this.input();
          }
        }
        return this.tok.T_ENCAPSED_AND_WHITESPACE;
      },
      matchST_HEREDOC: function() {
        let ch = this.input();
        if (this.isDOC_MATCH(this.offset, true)) {
          this.consume(this.heredoc_label.length - 1);
          this.popState();
          return this.tok.T_END_HEREDOC;
        }
        while (this.offset < this.size) {
          if (ch === "\\") {
            ch = this.input();
            if (!newline.includes(ch)) {
              ch = this.input();
            }
          }
          if (newline.includes(ch)) {
            ch = this.input();
            if (this.isDOC_MATCH(this.offset, true)) {
              this.unput(1).popState();
              this.appendToken(this.tok.T_END_HEREDOC, this.heredoc_label.length);
              return this.tok.T_ENCAPSED_AND_WHITESPACE;
            }
          } else if (ch === "$") {
            ch = this.input();
            if (ch === "{") {
              this.begin("ST_LOOKING_FOR_VARNAME");
              if (this.yytext.length > 2) {
                this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
                this.unput(2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
              }
            } else if (this.is_LABEL_START()) {
              const yyoffset = this.offset;
              const next = this.consume_VARIABLE();
              if (this.yytext.length > this.offset - yyoffset + 2) {
                this.appendToken(next, this.offset - yyoffset + 2);
                this.unput(this.offset - yyoffset + 2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                return next;
              }
            }
          } else if (ch === "{") {
            ch = this.input();
            if (ch === "$") {
              this.begin("ST_IN_SCRIPTING");
              if (this.yytext.length > 2) {
                this.appendToken(this.tok.T_CURLY_OPEN, 1);
                this.unput(2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                this.unput(1);
                return this.tok.T_CURLY_OPEN;
              }
            }
          } else {
            ch = this.input();
          }
        }
        return this.tok.T_ENCAPSED_AND_WHITESPACE;
      },
      consume_VARIABLE: function() {
        this.consume_LABEL();
        const ch = this.input();
        if (ch == "[") {
          this.unput(1);
          this.begin("ST_VAR_OFFSET");
          return this.tok.T_VARIABLE;
        } else if (ch === "-") {
          if (this.input() === ">") {
            this.input();
            if (this.is_LABEL_START()) {
              this.begin("ST_LOOKING_FOR_PROPERTY");
            }
            this.unput(3);
            return this.tok.T_VARIABLE;
          } else {
            this.unput(2);
          }
        } else {
          if (ch) this.unput(1);
        }
        return this.tok.T_VARIABLE;
      },
      // HANDLES BACKQUOTES
      matchST_BACKQUOTE: function() {
        let ch = this.input();
        if (ch === "$") {
          ch = this.input();
          if (ch === "{") {
            this.begin("ST_LOOKING_FOR_VARNAME");
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          } else if (this.is_LABEL_START()) {
            const tok = this.consume_VARIABLE();
            return tok;
          }
        } else if (ch === "{") {
          if (this._input[this.offset] === "$") {
            this.begin("ST_IN_SCRIPTING");
            return this.tok.T_CURLY_OPEN;
          }
        } else if (ch === "`") {
          this.popState();
          return "`";
        }
        while (this.offset < this.size) {
          if (ch === "\\") {
            this.input();
          } else if (ch === "`") {
            this.unput(1);
            this.popState();
            this.appendToken("`", 1);
            break;
          } else if (ch === "$") {
            ch = this.input();
            if (ch === "{") {
              this.begin("ST_LOOKING_FOR_VARNAME");
              if (this.yytext.length > 2) {
                this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
                this.unput(2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
              }
            } else if (this.is_LABEL_START()) {
              const yyoffset = this.offset;
              const next = this.consume_VARIABLE();
              if (this.yytext.length > this.offset - yyoffset + 2) {
                this.appendToken(next, this.offset - yyoffset + 2);
                this.unput(this.offset - yyoffset + 2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                return next;
              }
            }
            continue;
          } else if (ch === "{") {
            ch = this.input();
            if (ch === "$") {
              this.begin("ST_IN_SCRIPTING");
              if (this.yytext.length > 2) {
                this.appendToken(this.tok.T_CURLY_OPEN, 1);
                this.unput(2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                this.unput(1);
                return this.tok.T_CURLY_OPEN;
              }
            }
            continue;
          }
          ch = this.input();
        }
        return this.tok.T_ENCAPSED_AND_WHITESPACE;
      },
      matchST_DOUBLE_QUOTES: function() {
        let ch = this.input();
        if (ch === "$") {
          ch = this.input();
          if (ch === "{") {
            this.begin("ST_LOOKING_FOR_VARNAME");
            return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
          } else if (this.is_LABEL_START()) {
            const tok = this.consume_VARIABLE();
            return tok;
          }
        } else if (ch === "{") {
          if (this._input[this.offset] === "$") {
            this.begin("ST_IN_SCRIPTING");
            return this.tok.T_CURLY_OPEN;
          }
        } else if (ch === '"') {
          this.popState();
          return '"';
        }
        while (this.offset < this.size) {
          if (ch === "\\") {
            this.input();
          } else if (ch === '"') {
            this.unput(1);
            this.popState();
            this.appendToken('"', 1);
            break;
          } else if (ch === "$") {
            ch = this.input();
            if (ch === "{") {
              this.begin("ST_LOOKING_FOR_VARNAME");
              if (this.yytext.length > 2) {
                this.appendToken(this.tok.T_DOLLAR_OPEN_CURLY_BRACES, 2);
                this.unput(2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                return this.tok.T_DOLLAR_OPEN_CURLY_BRACES;
              }
            } else if (this.is_LABEL_START()) {
              const yyoffset = this.offset;
              const next = this.consume_VARIABLE();
              if (this.yytext.length > this.offset - yyoffset + 2) {
                this.appendToken(next, this.offset - yyoffset + 2);
                this.unput(this.offset - yyoffset + 2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                return next;
              }
            }
            if (ch) this.unput(1);
          } else if (ch === "{") {
            ch = this.input();
            if (ch === "$") {
              this.begin("ST_IN_SCRIPTING");
              if (this.yytext.length > 2) {
                this.appendToken(this.tok.T_CURLY_OPEN, 1);
                this.unput(2);
                return this.tok.T_ENCAPSED_AND_WHITESPACE;
              } else {
                this.unput(1);
                return this.tok.T_CURLY_OPEN;
              }
            }
            if (ch) this.unput(1);
          }
          ch = this.input();
        }
        return this.tok.T_ENCAPSED_AND_WHITESPACE;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/tokens.js
var require_tokens = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/tokens.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      T_STRING: function() {
        const token = this.yytext.toLowerCase();
        let id = this.keywords[token];
        if (typeof id !== "number") {
          if (token === "yield") {
            if (this.version >= 700 && this.tryMatch(" from")) {
              this.consume(5);
              id = this.tok.T_YIELD_FROM;
            } else {
              id = this.tok.T_YIELD;
            }
          } else {
            id = this.tok.T_STRING;
            if (token === "b" || token === "B") {
              const ch = this.input(1);
              if (ch === '"') {
                return this.ST_DOUBLE_QUOTES();
              } else if (ch === "'") {
                return this.T_CONSTANT_ENCAPSED_STRING();
              } else if (ch) {
                this.unput(1);
              }
            }
          }
        }
        return id;
      },
      // reads a custom token
      consume_TOKEN: function() {
        const ch = this._input[this.offset - 1];
        const fn = this.tokenTerminals[ch];
        if (fn) {
          return fn.apply(this, []);
        } else {
          return this.yytext;
        }
      },
      // list of special char tokens
      tokenTerminals: {
        $: function() {
          this.offset++;
          if (this.is_LABEL_START()) {
            this.offset--;
            this.consume_LABEL();
            return this.tok.T_VARIABLE;
          } else {
            this.offset--;
            return "$";
          }
        },
        "-": function() {
          const nchar = this._input[this.offset];
          if (nchar === ">") {
            this.begin("ST_LOOKING_FOR_PROPERTY").input();
            return this.tok.T_OBJECT_OPERATOR;
          } else if (nchar === "-") {
            this.input();
            return this.tok.T_DEC;
          } else if (nchar === "=") {
            this.input();
            return this.tok.T_MINUS_EQUAL;
          }
          return "-";
        },
        "\\": function() {
          return this.tok.T_NS_SEPARATOR;
        },
        "/": function() {
          if (this._input[this.offset] === "=") {
            this.input();
            return this.tok.T_DIV_EQUAL;
          }
          return "/";
        },
        ":": function() {
          if (this._input[this.offset] === ":") {
            this.input();
            return this.tok.T_DOUBLE_COLON;
          } else {
            return ":";
          }
        },
        "(": function() {
          const initial = this.offset;
          this.input();
          if (this.is_TABSPACE()) {
            this.consume_TABSPACE().input();
          }
          if (this.is_LABEL_START()) {
            const yylen = this.yytext.length;
            this.consume_LABEL();
            const castToken = this.yytext.substring(yylen - 1).toLowerCase();
            const castId = this.castKeywords[castToken];
            if (typeof castId === "number") {
              this.input();
              if (this.is_TABSPACE()) {
                this.consume_TABSPACE().input();
              }
              if (this._input[this.offset - 1] === ")") {
                return castId;
              }
            }
          }
          this.unput(this.offset - initial);
          return "(";
        },
        "=": function() {
          const nchar = this._input[this.offset];
          if (nchar === ">") {
            this.input();
            return this.tok.T_DOUBLE_ARROW;
          } else if (nchar === "=") {
            if (this._input[this.offset + 1] === "=") {
              this.consume(2);
              return this.tok.T_IS_IDENTICAL;
            } else {
              this.input();
              return this.tok.T_IS_EQUAL;
            }
          }
          return "=";
        },
        "+": function() {
          const nchar = this._input[this.offset];
          if (nchar === "+") {
            this.input();
            return this.tok.T_INC;
          } else if (nchar === "=") {
            this.input();
            return this.tok.T_PLUS_EQUAL;
          }
          return "+";
        },
        "!": function() {
          if (this._input[this.offset] === "=") {
            if (this._input[this.offset + 1] === "=") {
              this.consume(2);
              return this.tok.T_IS_NOT_IDENTICAL;
            } else {
              this.input();
              return this.tok.T_IS_NOT_EQUAL;
            }
          }
          return "!";
        },
        "?": function() {
          if (this.version >= 700 && this._input[this.offset] === "?") {
            if (this.version >= 704 && this._input[this.offset + 1] === "=") {
              this.consume(2);
              return this.tok.T_COALESCE_EQUAL;
            } else {
              this.input();
              return this.tok.T_COALESCE;
            }
          }
          return "?";
        },
        "<": function() {
          let nchar = this._input[this.offset];
          if (nchar === "<") {
            nchar = this._input[this.offset + 1];
            if (nchar === "=") {
              this.consume(2);
              return this.tok.T_SL_EQUAL;
            } else if (nchar === "<") {
              if (this.is_HEREDOC()) {
                return this.tok.T_START_HEREDOC;
              }
            }
            this.input();
            return this.tok.T_SL;
          } else if (nchar === "=") {
            this.input();
            if (this.version >= 700 && this._input[this.offset] === ">") {
              this.input();
              return this.tok.T_SPACESHIP;
            } else {
              return this.tok.T_IS_SMALLER_OR_EQUAL;
            }
          } else if (nchar === ">") {
            this.input();
            return this.tok.T_IS_NOT_EQUAL;
          }
          return "<";
        },
        ">": function() {
          let nchar = this._input[this.offset];
          if (nchar === "=") {
            this.input();
            return this.tok.T_IS_GREATER_OR_EQUAL;
          } else if (nchar === ">") {
            nchar = this._input[this.offset + 1];
            if (nchar === "=") {
              this.consume(2);
              return this.tok.T_SR_EQUAL;
            } else {
              this.input();
              return this.tok.T_SR;
            }
          }
          return ">";
        },
        "*": function() {
          const nchar = this._input[this.offset];
          if (nchar === "=") {
            this.input();
            return this.tok.T_MUL_EQUAL;
          } else if (nchar === "*") {
            this.input();
            if (this._input[this.offset] === "=") {
              this.input();
              return this.tok.T_POW_EQUAL;
            } else {
              return this.tok.T_POW;
            }
          }
          return "*";
        },
        ".": function() {
          const nchar = this._input[this.offset];
          if (nchar === "=") {
            this.input();
            return this.tok.T_CONCAT_EQUAL;
          } else if (nchar === "." && this._input[this.offset + 1] === ".") {
            this.consume(2);
            return this.tok.T_ELLIPSIS;
          }
          return ".";
        },
        "%": function() {
          if (this._input[this.offset] === "=") {
            this.input();
            return this.tok.T_MOD_EQUAL;
          }
          return "%";
        },
        "&": function() {
          const nchar = this._input[this.offset];
          if (nchar === "=") {
            this.input();
            return this.tok.T_AND_EQUAL;
          } else if (nchar === "&") {
            this.input();
            return this.tok.T_BOOLEAN_AND;
          }
          return "&";
        },
        "|": function() {
          const nchar = this._input[this.offset];
          if (nchar === "=") {
            this.input();
            return this.tok.T_OR_EQUAL;
          } else if (nchar === "|") {
            this.input();
            return this.tok.T_BOOLEAN_OR;
          }
          return "|";
        },
        "^": function() {
          if (this._input[this.offset] === "=") {
            this.input();
            return this.tok.T_XOR_EQUAL;
          }
          return "^";
        }
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/utils.js
var require_utils2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer/utils.js"(exports2, module2) {
    "use strict";
    var tokens = ";:,.\\[]()|^&+-/*=%!~$<>?@";
    module2.exports = {
      // check if the char can be a numeric
      is_NUM: function() {
        const ch = this._input.charCodeAt(this.offset - 1);
        return ch > 47 && ch < 58 || ch === 95;
      },
      // check if the char can be a numeric
      is_NUM_START: function() {
        const ch = this._input.charCodeAt(this.offset - 1);
        return ch > 47 && ch < 58;
      },
      // check if current char can be a label
      is_LABEL: function() {
        const ch = this._input.charCodeAt(this.offset - 1);
        return ch > 96 && ch < 123 || ch > 64 && ch < 91 || ch === 95 || ch > 47 && ch < 58 || ch > 126;
      },
      // check if current char can be a label
      is_LABEL_START: function() {
        const ch = this._input.charCodeAt(this.offset - 1);
        if (ch > 64 && ch < 91) return true;
        if (ch > 96 && ch < 123) return true;
        if (ch === 95) return true;
        if (ch > 126) return true;
        return false;
      },
      // reads each char of the label
      consume_LABEL: function() {
        while (this.offset < this.size) {
          const ch = this.input();
          if (!this.is_LABEL()) {
            if (ch) this.unput(1);
            break;
          }
        }
        return this;
      },
      // check if current char is a token char
      is_TOKEN: function() {
        const ch = this._input[this.offset - 1];
        return tokens.indexOf(ch) !== -1;
      },
      // check if current char is a whitespace
      is_WHITESPACE: function() {
        const ch = this._input[this.offset - 1];
        return ch === " " || ch === "	" || ch === "\n" || ch === "\r";
      },
      // check if current char is a whitespace (without newlines)
      is_TABSPACE: function() {
        const ch = this._input[this.offset - 1];
        return ch === " " || ch === "	";
      },
      // consume all whitespaces (excluding newlines)
      consume_TABSPACE: function() {
        while (this.offset < this.size) {
          const ch = this.input();
          if (!this.is_TABSPACE()) {
            if (ch) this.unput(1);
            break;
          }
        }
        return this;
      },
      // check if current char can be a hexadecimal number
      is_HEX: function() {
        const ch = this._input.charCodeAt(this.offset - 1);
        if (ch > 47 && ch < 58) return true;
        if (ch > 64 && ch < 71) return true;
        if (ch > 96 && ch < 103) return true;
        if (ch === 95) return true;
        return false;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer.js
var require_lexer = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/lexer.js"(exports2, module2) {
    "use strict";
    var Lexer = function(engine) {
      this.engine = engine;
      this.tok = this.engine.tokens.names;
      this.EOF = 1;
      this.debug = false;
      this.all_tokens = true;
      this.comment_tokens = false;
      this.mode_eval = false;
      this.asp_tags = false;
      this.short_tags = false;
      this.version = 704;
      this.yyprevcol = 0;
      this.keywords = {
        __class__: this.tok.T_CLASS_C,
        __trait__: this.tok.T_TRAIT_C,
        __function__: this.tok.T_FUNC_C,
        __method__: this.tok.T_METHOD_C,
        __line__: this.tok.T_LINE,
        __file__: this.tok.T_FILE,
        __dir__: this.tok.T_DIR,
        __namespace__: this.tok.T_NS_C,
        exit: this.tok.T_EXIT,
        die: this.tok.T_EXIT,
        function: this.tok.T_FUNCTION,
        const: this.tok.T_CONST,
        return: this.tok.T_RETURN,
        try: this.tok.T_TRY,
        catch: this.tok.T_CATCH,
        finally: this.tok.T_FINALLY,
        throw: this.tok.T_THROW,
        if: this.tok.T_IF,
        elseif: this.tok.T_ELSEIF,
        endif: this.tok.T_ENDIF,
        else: this.tok.T_ELSE,
        while: this.tok.T_WHILE,
        endwhile: this.tok.T_ENDWHILE,
        do: this.tok.T_DO,
        for: this.tok.T_FOR,
        endfor: this.tok.T_ENDFOR,
        foreach: this.tok.T_FOREACH,
        endforeach: this.tok.T_ENDFOREACH,
        declare: this.tok.T_DECLARE,
        enddeclare: this.tok.T_ENDDECLARE,
        instanceof: this.tok.T_INSTANCEOF,
        as: this.tok.T_AS,
        switch: this.tok.T_SWITCH,
        endswitch: this.tok.T_ENDSWITCH,
        case: this.tok.T_CASE,
        default: this.tok.T_DEFAULT,
        break: this.tok.T_BREAK,
        continue: this.tok.T_CONTINUE,
        goto: this.tok.T_GOTO,
        echo: this.tok.T_ECHO,
        print: this.tok.T_PRINT,
        class: this.tok.T_CLASS,
        interface: this.tok.T_INTERFACE,
        trait: this.tok.T_TRAIT,
        extends: this.tok.T_EXTENDS,
        implements: this.tok.T_IMPLEMENTS,
        new: this.tok.T_NEW,
        clone: this.tok.T_CLONE,
        var: this.tok.T_VAR,
        eval: this.tok.T_EVAL,
        include: this.tok.T_INCLUDE,
        include_once: this.tok.T_INCLUDE_ONCE,
        require: this.tok.T_REQUIRE,
        require_once: this.tok.T_REQUIRE_ONCE,
        namespace: this.tok.T_NAMESPACE,
        use: this.tok.T_USE,
        insteadof: this.tok.T_INSTEADOF,
        global: this.tok.T_GLOBAL,
        isset: this.tok.T_ISSET,
        empty: this.tok.T_EMPTY,
        __halt_compiler: this.tok.T_HALT_COMPILER,
        static: this.tok.T_STATIC,
        abstract: this.tok.T_ABSTRACT,
        final: this.tok.T_FINAL,
        private: this.tok.T_PRIVATE,
        protected: this.tok.T_PROTECTED,
        public: this.tok.T_PUBLIC,
        unset: this.tok.T_UNSET,
        list: this.tok.T_LIST,
        array: this.tok.T_ARRAY,
        callable: this.tok.T_CALLABLE,
        or: this.tok.T_LOGICAL_OR,
        and: this.tok.T_LOGICAL_AND,
        xor: this.tok.T_LOGICAL_XOR
      };
      this.castKeywords = {
        int: this.tok.T_INT_CAST,
        integer: this.tok.T_INT_CAST,
        real: this.tok.T_DOUBLE_CAST,
        double: this.tok.T_DOUBLE_CAST,
        float: this.tok.T_DOUBLE_CAST,
        string: this.tok.T_STRING_CAST,
        binary: this.tok.T_STRING_CAST,
        array: this.tok.T_ARRAY_CAST,
        object: this.tok.T_OBJECT_CAST,
        bool: this.tok.T_BOOL_CAST,
        boolean: this.tok.T_BOOL_CAST,
        unset: this.tok.T_UNSET_CAST
      };
    };
    Lexer.prototype.setInput = function(input) {
      this._input = input;
      this.size = input.length;
      this.yylineno = 1;
      this.offset = 0;
      this.yyprevcol = 0;
      this.yytext = "";
      this.yylloc = {
        first_offset: 0,
        first_line: 1,
        first_column: 0,
        prev_offset: 0,
        prev_line: 1,
        prev_column: 0,
        last_line: 1,
        last_column: 0
      };
      this.tokens = [];
      if (this.version > 703) {
        this.keywords.fn = this.tok.T_FN;
      } else {
        delete this.keywords.fn;
      }
      this.done = this.offset >= this.size;
      if (!this.all_tokens && this.mode_eval) {
        this.conditionStack = ["INITIAL"];
        this.begin("ST_IN_SCRIPTING");
      } else {
        this.conditionStack = [];
        this.begin("INITIAL");
      }
      this.heredoc_label = {
        label: "",
        length: 0,
        indentation: 0,
        indentation_uses_spaces: false,
        finished: false,
        /*
         * this used for parser to detemine the if current node segment is first encaps node.
         * if ture, the indentation will remove from the begining. and if false, the prev node
         * might be a variable '}' ,and the leading spaces should not be removed util meet the
         * first \n
         */
        first_encaps_node: false,
        // for backward compatible
        toString: function() {
          this.label;
        }
      };
      return this;
    };
    Lexer.prototype.input = function() {
      const ch = this._input[this.offset];
      if (!ch) return "";
      this.yytext += ch;
      this.offset++;
      if (ch === "\r" && this._input[this.offset] === "\n") {
        this.yytext += "\n";
        this.offset++;
      }
      if (ch === "\n" || ch === "\r") {
        this.yylloc.last_line = ++this.yylineno;
        this.yyprevcol = this.yylloc.last_column;
        this.yylloc.last_column = 0;
      } else {
        this.yylloc.last_column++;
      }
      return ch;
    };
    Lexer.prototype.unput = function(size) {
      if (size === 1) {
        this.offset--;
        if (this._input[this.offset] === "\n" && this._input[this.offset - 1] === "\r") {
          this.offset--;
          size++;
        }
        if (this._input[this.offset] === "\r" || this._input[this.offset] === "\n") {
          this.yylloc.last_line--;
          this.yylineno--;
          this.yylloc.last_column = this.yyprevcol;
        } else {
          this.yylloc.last_column--;
        }
        this.yytext = this.yytext.substring(0, this.yytext.length - size);
      } else if (size > 0) {
        this.offset -= size;
        if (size < this.yytext.length) {
          this.yytext = this.yytext.substring(0, this.yytext.length - size);
          this.yylloc.last_line = this.yylloc.first_line;
          this.yylloc.last_column = this.yyprevcol = this.yylloc.first_column;
          for (let i = 0; i < this.yytext.length; i++) {
            let c = this.yytext[i];
            if (c === "\r") {
              c = this.yytext[++i];
              this.yyprevcol = this.yylloc.last_column;
              this.yylloc.last_line++;
              this.yylloc.last_column = 0;
              if (c !== "\n") {
                if (c === "\r") {
                  this.yylloc.last_line++;
                } else {
                  this.yylloc.last_column++;
                }
              }
            } else if (c === "\n") {
              this.yyprevcol = this.yylloc.last_column;
              this.yylloc.last_line++;
              this.yylloc.last_column = 0;
            } else {
              this.yylloc.last_column++;
            }
          }
          this.yylineno = this.yylloc.last_line;
        } else {
          this.yytext = "";
          this.yylloc.last_line = this.yylineno = this.yylloc.first_line;
          this.yylloc.last_column = this.yylloc.first_column;
        }
      }
      return this;
    };
    Lexer.prototype.tryMatch = function(text) {
      return text === this.ahead(text.length);
    };
    Lexer.prototype.tryMatchCaseless = function(text) {
      return text === this.ahead(text.length).toLowerCase();
    };
    Lexer.prototype.ahead = function(size) {
      let text = this._input.substring(this.offset, this.offset + size);
      if (text[text.length - 1] === "\r" && this._input[this.offset + size + 1] === "\n") {
        text += "\n";
      }
      return text;
    };
    Lexer.prototype.consume = function(size) {
      for (let i = 0; i < size; i++) {
        const ch = this._input[this.offset];
        if (!ch) break;
        this.yytext += ch;
        this.offset++;
        if (ch === "\r" && this._input[this.offset] === "\n") {
          this.yytext += "\n";
          this.offset++;
          i++;
        }
        if (ch === "\n" || ch === "\r") {
          this.yylloc.last_line = ++this.yylineno;
          this.yyprevcol = this.yylloc.last_column;
          this.yylloc.last_column = 0;
        } else {
          this.yylloc.last_column++;
        }
      }
      return this;
    };
    Lexer.prototype.getState = function() {
      return {
        yytext: this.yytext,
        offset: this.offset,
        yylineno: this.yylineno,
        yyprevcol: this.yyprevcol,
        yylloc: {
          first_offset: this.yylloc.first_offset,
          first_line: this.yylloc.first_line,
          first_column: this.yylloc.first_column,
          last_line: this.yylloc.last_line,
          last_column: this.yylloc.last_column
        },
        heredoc_label: this.heredoc_label
      };
    };
    Lexer.prototype.setState = function(state) {
      this.yytext = state.yytext;
      this.offset = state.offset;
      this.yylineno = state.yylineno;
      this.yyprevcol = state.yyprevcol;
      this.yylloc = state.yylloc;
      if (state.heredoc_label) {
        this.heredoc_label = state.heredoc_label;
      }
      return this;
    };
    Lexer.prototype.appendToken = function(value, ahead) {
      this.tokens.push([value, ahead]);
      return this;
    };
    Lexer.prototype.lex = function() {
      this.yylloc.prev_offset = this.offset;
      this.yylloc.prev_line = this.yylloc.last_line;
      this.yylloc.prev_column = this.yylloc.last_column;
      let token = this.next() || this.lex();
      if (!this.all_tokens) {
        while (token === this.tok.T_WHITESPACE || // ignore white space
        !this.comment_tokens && (token === this.tok.T_COMMENT || // ignore single lines comments
        token === this.tok.T_DOC_COMMENT) || // ignore doc comments
        // ignore open tags
        token === this.tok.T_OPEN_TAG) {
          token = this.next() || this.lex();
        }
        if (token == this.tok.T_OPEN_TAG_WITH_ECHO) {
          return this.tok.T_ECHO;
        } else if (token === this.tok.T_CLOSE_TAG) {
          return ";";
        }
      }
      if (!this.yylloc.prev_offset) {
        this.yylloc.prev_offset = this.yylloc.first_offset;
        this.yylloc.prev_line = this.yylloc.first_line;
        this.yylloc.prev_column = this.yylloc.first_column;
      }
      return token;
    };
    Lexer.prototype.begin = function(condition) {
      this.conditionStack.push(condition);
      this.curCondition = condition;
      this.stateCb = this["match" + condition];
      if (typeof this.stateCb !== "function") {
        throw new Error('Undefined condition state "' + condition + '"');
      }
      return this;
    };
    Lexer.prototype.popState = function() {
      const n = this.conditionStack.length - 1;
      const condition = n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      this.curCondition = this.conditionStack[this.conditionStack.length - 1];
      this.stateCb = this["match" + this.curCondition];
      if (typeof this.stateCb !== "function") {
        throw new Error('Undefined condition state "' + this.curCondition + '"');
      }
      return condition;
    };
    Lexer.prototype.next = function() {
      let token;
      if (!this._input) {
        this.done = true;
      }
      this.yylloc.first_offset = this.offset;
      this.yylloc.first_line = this.yylloc.last_line;
      this.yylloc.first_column = this.yylloc.last_column;
      this.yytext = "";
      if (this.done) {
        this.yylloc.prev_offset = this.yylloc.first_offset;
        this.yylloc.prev_line = this.yylloc.first_line;
        this.yylloc.prev_column = this.yylloc.first_column;
        return this.EOF;
      }
      if (this.tokens.length > 0) {
        token = this.tokens.shift();
        if (typeof token[1] === "object") {
          this.setState(token[1]);
        } else {
          this.consume(token[1]);
        }
        token = token[0];
      } else {
        token = this.stateCb.apply(this, []);
      }
      if (this.offset >= this.size && this.tokens.length === 0) {
        this.done = true;
      }
      if (this.debug) {
        let tName = token;
        if (typeof tName === "number") {
          tName = this.engine.tokens.values[tName];
        } else {
          tName = '"' + tName + '"';
        }
        const e = new Error(
          tName + "	from " + this.yylloc.first_line + "," + this.yylloc.first_column + "	 - to " + this.yylloc.last_line + "," + this.yylloc.last_column + '	"' + this.yytext + '"'
        );
        console.error(e.stack);
      }
      return token;
    };
    [
      require_comments(),
      require_initial(),
      require_numbers(),
      require_property(),
      require_scripting(),
      require_strings(),
      require_tokens(),
      require_utils2()
    ].forEach(function(ext) {
      for (const k in ext) {
        Lexer.prototype[k] = ext[k];
      }
    });
    module2.exports = Lexer;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/array.js
var require_array = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/array.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Parse an array
       * ```ebnf
       * array ::= T_ARRAY '(' array_pair_list ')' |
       *   '[' array_pair_list ']'
       * ```
       */
      read_array: function() {
        let expect = null;
        let shortForm = false;
        const result = this.node("array");
        if (this.token === this.tok.T_ARRAY) {
          this.next().expect("(");
          expect = ")";
        } else {
          shortForm = true;
          expect = "]";
        }
        let items = [];
        if (this.next().token !== expect) {
          items = this.read_array_pair_list(shortForm);
        }
        this.expect(expect);
        this.next();
        return result(shortForm, items);
      },
      /*
       * Reads an array of items
       * ```ebnf
       * array_pair_list ::= array_pair (',' array_pair?)*
       * ```
       */
      read_array_pair_list: function(shortForm) {
        const self = this;
        return this.read_list(
          function() {
            return self.read_array_pair(shortForm);
          },
          ",",
          true
        );
      },
      /*
       * Reads an entry
       * array_pair:
       *  expr T_DOUBLE_ARROW expr
       *  | expr
       *  | expr T_DOUBLE_ARROW '&' variable
       *  | '&' variable
       *  | expr T_DOUBLE_ARROW T_LIST '(' array_pair_list ')'
       *  | T_LIST '(' array_pair_list ')'
       */
      read_array_pair: function(shortForm) {
        if (!shortForm && this.token === ")" || shortForm && this.token === "]") {
          return;
        }
        if (this.token === ",") {
          return this.node("noop")();
        }
        const entry = this.node("entry");
        let key = null;
        let value = null;
        let byRef = false;
        let unpack = false;
        if (this.token === "&") {
          this.next();
          byRef = true;
          value = this.read_variable(true, false);
        } else if (this.token === this.tok.T_ELLIPSIS && this.version >= 704) {
          this.next();
          if (this.token === "&") {
            this.error();
          }
          unpack = true;
          value = this.read_expr();
        } else {
          const expr = this.read_expr();
          if (this.token === this.tok.T_DOUBLE_ARROW) {
            this.next();
            key = expr;
            if (this.token === "&") {
              this.next();
              byRef = true;
              value = this.read_variable(true, false);
            } else {
              value = this.read_expr();
            }
          } else {
            value = expr;
          }
        }
        return entry(key, value, byRef, unpack);
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/class.js
var require_class = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/class.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * reading a class
       * ```ebnf
       * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
       * ```
       */
      read_class_declaration_statement: function() {
        const result = this.node("class");
        const flag = this.read_class_modifiers();
        if (this.token !== this.tok.T_CLASS) {
          this.error(this.tok.T_CLASS);
          this.next();
          return null;
        }
        this.next().expect(this.tok.T_STRING);
        let propName = this.node("identifier");
        const name = this.text();
        this.next();
        propName = propName(name);
        const propExtends = this.read_extends_from();
        const propImplements = this.read_implements_list();
        this.expect("{");
        const body = this.next().read_class_body();
        return result(propName, propExtends, propImplements, body, flag);
      },
      read_class_modifiers: function() {
        return [0, 0, this.read_class_modifier()];
      },
      read_class_modifier: function() {
        const result = 0;
        if (this.token === this.tok.T_ABSTRACT) {
          this.next();
          return 1;
        } else if (this.token === this.tok.T_FINAL) {
          this.next();
          return 2;
        }
        return result;
      },
      /*
       * Reads a class body
       * ```ebnf
       *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
       * ```
       */
      read_class_body: function() {
        let result = [];
        while (this.token !== this.EOF && this.token !== "}") {
          if (this.token === this.tok.T_COMMENT) {
            result.push(this.read_comment());
            continue;
          }
          if (this.token === this.tok.T_DOC_COMMENT) {
            result.push(this.read_doc_comment());
            continue;
          }
          if (this.token === this.tok.T_USE) {
            result = result.concat(this.read_trait_use_statement());
            continue;
          }
          const flags = this.read_member_flags(false);
          if (this.token === this.tok.T_CONST) {
            const constants = this.read_constant_list(flags);
            if (this.expect(";")) {
              this.next();
            }
            result = result.concat(constants);
            continue;
          }
          if (this.token === this.tok.T_VAR) {
            this.next().expect(this.tok.T_VARIABLE);
            flags[0] = null;
            flags[1] = 0;
          }
          if (this.token === this.tok.T_FUNCTION) {
            result.push(this.read_function(false, flags));
          } else if (this.token === this.tok.T_VARIABLE || // support https://wiki.php.net/rfc/typed_properties_v2
          this.version >= 704 && (this.token === "?" || this.token === this.tok.T_CALLABLE || this.token === this.tok.T_ARRAY || this.token === this.tok.T_NS_SEPARATOR || this.token === this.tok.T_STRING || this.token === this.tok.T_NAMESPACE)) {
            const variables = this.read_variable_list(flags);
            this.expect(";");
            this.next();
            result = result.concat(variables);
          } else {
            this.error([
              this.tok.T_CONST,
              this.tok.T_VARIABLE,
              this.tok.T_FUNCTION
            ]);
            this.next();
          }
        }
        this.expect("}");
        this.next();
        return result;
      },
      /*
       * Reads variable list
       * ```ebnf
       *  variable_list ::= (variable_declaration ',')* variable_declaration
       * ```
       */
      read_variable_list: function(flags) {
        const result = this.node("propertystatement");
        const properties = this.read_list(
          /*
           * Reads a variable declaration
           *
           * ```ebnf
           *  variable_declaration ::= T_VARIABLE '=' scalar
           * ```
           */
          function read_variable_declaration() {
            const result2 = this.node("property");
            const [nullable, type] = this.read_optional_type();
            this.expect(this.tok.T_VARIABLE);
            let propName = this.node("identifier");
            const name = this.text().substring(1);
            this.next();
            propName = propName(name);
            if (this.token === ";" || this.token === ",") {
              return result2(propName, null, nullable, type);
            } else if (this.token === "=") {
              return result2(propName, this.next().read_expr(), nullable, type);
            } else {
              this.expect([",", ";", "="]);
              return result2(propName, null, nullable, type);
            }
          },
          ","
        );
        return result(null, properties, flags);
      },
      /*
       * Reads constant list
       * ```ebnf
       *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
       * ```
       */
      read_constant_list: function(flags) {
        if (this.expect(this.tok.T_CONST)) {
          this.next();
        }
        const result = this.node("classconstant");
        const items = this.read_list(
          /*
           * Reads a constant declaration
           *
           * ```ebnf
           *  constant_declaration ::= (T_STRING | IDENTIFIER) '=' expr
           * ```
           * @return {Constant} [:link:](AST.md#constant)
           */
          function read_constant_declaration() {
            const result2 = this.node("constant");
            let constName = null;
            let value = null;
            if (this.token === this.tok.T_STRING || this.version >= 700 && this.is("IDENTIFIER")) {
              constName = this.node("identifier");
              const name = this.text();
              this.next();
              constName = constName(name);
            } else {
              this.expect("IDENTIFIER");
            }
            if (this.expect("=")) {
              value = this.next().read_expr();
            }
            return result2(constName, value);
          },
          ","
        );
        return result(null, items, flags);
      },
      /*
       * Read member flags
       * @return array
       *  1st index : 0 => public, 1 => protected, 2 => private
       *  2nd index : 0 => instance member, 1 => static member
       *  3rd index : 0 => normal, 1 => abstract member, 2 => final member
       */
      read_member_flags: function(asInterface) {
        const result = [-1, -1, -1];
        if (this.is("T_MEMBER_FLAGS")) {
          let idx = 0, val = 0;
          do {
            switch (this.token) {
              case this.tok.T_PUBLIC:
                idx = 0;
                val = 0;
                break;
              case this.tok.T_PROTECTED:
                idx = 0;
                val = 1;
                break;
              case this.tok.T_PRIVATE:
                idx = 0;
                val = 2;
                break;
              case this.tok.T_STATIC:
                idx = 1;
                val = 1;
                break;
              case this.tok.T_ABSTRACT:
                idx = 2;
                val = 1;
                break;
              case this.tok.T_FINAL:
                idx = 2;
                val = 2;
                break;
            }
            if (asInterface) {
              if (idx == 0 && val == 2) {
                this.expect([this.tok.T_PUBLIC, this.tok.T_PROTECTED]);
                val = -1;
              } else if (idx == 2 && val == 1) {
                this.error();
                val = -1;
              }
            }
            if (result[idx] !== -1) {
              this.error();
            } else if (val !== -1) {
              result[idx] = val;
            }
          } while (this.next().is("T_MEMBER_FLAGS"));
        }
        if (result[1] == -1) result[1] = 0;
        if (result[2] == -1) result[2] = 0;
        return result;
      },
      /*
       * optional_type:
       *	  /- empty -/	{ $$ = NULL; }
       *   |	type_expr	{ $$ = $1; }
       * ;
       *
       * type_expr:
       *		type		{ $$ = $1; }
       *	|	'?' type	{ $$ = $2; $$->attr |= ZEND_TYPE_NULLABLE; }
       *	|	union_type	{ $$ = $1; }
       * ;
       *
       * type:
       * 		T_ARRAY		{ $$ = zend_ast_create_ex(ZEND_AST_TYPE, IS_ARRAY); }
       * 	|	T_CALLABLE	{ $$ = zend_ast_create_ex(ZEND_AST_TYPE, IS_CALLABLE); }
       * 	|	name		{ $$ = $1; }
       * ;
       *
       * union_type:
       * 		type '|' type       { $$ = zend_ast_create_list(2, ZEND_AST_TYPE_UNION, $1, $3); }
       * 	|	union_type '|' type { $$ = zend_ast_list_add($1, $3); }
       * ;
       */
      read_optional_type: function() {
        let nullable = false;
        if (this.token === "?") {
          nullable = true;
          this.next();
        }
        let type = this.read_type();
        if (nullable && !type) {
          this.raiseError(
            "Expecting a type definition combined with nullable operator"
          );
        }
        if (!nullable && !type) {
          return [false, null];
        }
        if (this.token === "|") {
          type = [type];
          do {
            this.next();
            const variant = this.read_type();
            if (!variant) {
              this.raiseError("Expecting a type definition");
              break;
            }
            type.push(variant);
          } while (this.token === "|");
        }
        return [nullable, type];
      },
      /*
       * reading an interface
       * ```ebnf
       * interface ::= T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
       * ```
       */
      read_interface_declaration_statement: function() {
        const result = this.node("interface");
        if (this.token !== this.tok.T_INTERFACE) {
          this.error(this.tok.T_INTERFACE);
          this.next();
          return null;
        }
        this.next().expect(this.tok.T_STRING);
        let propName = this.node("identifier");
        const name = this.text();
        this.next();
        propName = propName(name);
        const propExtends = this.read_interface_extends_list();
        this.expect("{");
        const body = this.next().read_interface_body();
        return result(propName, propExtends, body);
      },
      /*
       * Reads an interface body
       * ```ebnf
       *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
       * ```
       */
      read_interface_body: function() {
        let result = [];
        while (this.token !== this.EOF && this.token !== "}") {
          if (this.token === this.tok.T_COMMENT) {
            result.push(this.read_comment());
            continue;
          }
          if (this.token === this.tok.T_DOC_COMMENT) {
            result.push(this.read_doc_comment());
            continue;
          }
          const flags = this.read_member_flags(true);
          if (this.token == this.tok.T_CONST) {
            const constants = this.read_constant_list(flags);
            if (this.expect(";")) {
              this.next();
            }
            result = result.concat(constants);
          } else if (this.token === this.tok.T_FUNCTION) {
            const method = this.read_function_declaration(2, flags);
            method.parseFlags(flags);
            result.push(method);
            if (this.expect(";")) {
              this.next();
            }
          } else {
            this.error([this.tok.T_CONST, this.tok.T_FUNCTION]);
            this.next();
          }
        }
        if (this.expect("}")) {
          this.next();
        }
        return result;
      },
      /*
       * reading a trait
       * ```ebnf
       * trait ::= T_TRAIT T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' FUNCTION* '}'
       * ```
       */
      read_trait_declaration_statement: function() {
        const result = this.node("trait");
        if (this.token !== this.tok.T_TRAIT) {
          this.error(this.tok.T_TRAIT);
          this.next();
          return null;
        }
        this.next().expect(this.tok.T_STRING);
        let propName = this.node("identifier");
        const name = this.text();
        this.next();
        propName = propName(name);
        this.expect("{");
        const body = this.next().read_class_body();
        return result(propName, body);
      },
      /*
       * reading a use statement
       * ```ebnf
       * trait_use_statement ::= namespace_name (',' namespace_name)* ('{' trait_use_alias '}')?
       * ```
       */
      read_trait_use_statement: function() {
        const node = this.node("traituse");
        this.expect(this.tok.T_USE) && this.next();
        const traits = [this.read_namespace_name()];
        let adaptations = null;
        while (this.token === ",") {
          traits.push(this.next().read_namespace_name());
        }
        if (this.token === "{") {
          adaptations = [];
          while (this.next().token !== this.EOF) {
            if (this.token === "}") break;
            adaptations.push(this.read_trait_use_alias());
            this.expect(";");
          }
          if (this.expect("}")) {
            this.next();
          }
        } else {
          if (this.expect(";")) {
            this.next();
          }
        }
        return node(traits, adaptations);
      },
      /*
       * Reading trait alias
       * ```ebnf
       * trait_use_alias ::= namespace_name ( T_DOUBLE_COLON T_STRING )? (T_INSTEADOF namespace_name) | (T_AS member_flags? T_STRING)
       * ```
       * name list : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L303
       * trait adaptation : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L742
       */
      read_trait_use_alias: function() {
        const node = this.node();
        let trait = null;
        let method;
        if (this.is("IDENTIFIER")) {
          method = this.node("identifier");
          const methodName = this.text();
          this.next();
          method = method(methodName);
        } else {
          method = this.read_namespace_name();
          if (this.token === this.tok.T_DOUBLE_COLON) {
            this.next();
            if (this.token === this.tok.T_STRING || this.version >= 700 && this.is("IDENTIFIER")) {
              trait = method;
              method = this.node("identifier");
              const methodName = this.text();
              this.next();
              method = method(methodName);
            } else {
              this.expect(this.tok.T_STRING);
            }
          } else {
            method = method.name;
          }
        }
        if (this.token === this.tok.T_INSTEADOF) {
          return node(
            "traitprecedence",
            trait,
            method,
            this.next().read_name_list()
          );
        } else if (this.token === this.tok.T_AS) {
          let flags = null;
          let alias = null;
          if (this.next().is("T_MEMBER_FLAGS")) {
            flags = this.read_member_flags();
          }
          if (this.token === this.tok.T_STRING || this.version >= 700 && this.is("IDENTIFIER")) {
            alias = this.node("identifier");
            const name = this.text();
            this.next();
            alias = alias(name);
          } else if (flags === false) {
            this.expect(this.tok.T_STRING);
          }
          return node("traitalias", trait, method, alias, flags);
        }
        this.expect([this.tok.T_AS, this.tok.T_INSTEADOF]);
        return node("traitalias", trait, method, null, null);
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/comment.js
var require_comment = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/comment.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       *  Comments with // or # or / * ... * /
       */
      read_comment: function() {
        const text = this.text();
        let result = this.ast.prepare(
          text.substring(0, 2) === "/*" ? "commentblock" : "commentline",
          null,
          this
        );
        const offset = this.lexer.yylloc.first_offset;
        const prev = this.prev;
        this.prev = [
          this.lexer.yylloc.last_line,
          this.lexer.yylloc.last_column,
          this.lexer.offset
        ];
        this.lex();
        result = result(text);
        result.offset = offset;
        this.prev = prev;
        return result;
      },
      /*
       * Comments with / ** ... * /
       */
      read_doc_comment: function() {
        let result = this.ast.prepare("commentblock", null, this);
        const offset = this.lexer.yylloc.first_offset;
        const text = this.text();
        const prev = this.prev;
        this.prev = [
          this.lexer.yylloc.last_line,
          this.lexer.yylloc.last_column,
          this.lexer.offset
        ];
        this.lex();
        result = result(text);
        result.offset = offset;
        this.prev = prev;
        return result;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/expr.js
var require_expr = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/expr.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      read_expr: function(expr) {
        const result = this.node();
        if (this.token === "@") {
          if (!expr) {
            expr = this.next().read_expr();
          }
          return result("silent", expr);
        }
        if (!expr) {
          expr = this.read_expr_item();
        }
        if (this.token === "|")
          return result("bin", "|", expr, this.next().read_expr());
        if (this.token === "&")
          return result("bin", "&", expr, this.next().read_expr());
        if (this.token === "^")
          return result("bin", "^", expr, this.next().read_expr());
        if (this.token === ".")
          return result("bin", ".", expr, this.next().read_expr());
        if (this.token === "+")
          return result("bin", "+", expr, this.next().read_expr());
        if (this.token === "-")
          return result("bin", "-", expr, this.next().read_expr());
        if (this.token === "*")
          return result("bin", "*", expr, this.next().read_expr());
        if (this.token === "/")
          return result("bin", "/", expr, this.next().read_expr());
        if (this.token === "%")
          return result("bin", "%", expr, this.next().read_expr());
        if (this.token === this.tok.T_POW)
          return result("bin", "**", expr, this.next().read_expr());
        if (this.token === this.tok.T_SL)
          return result("bin", "<<", expr, this.next().read_expr());
        if (this.token === this.tok.T_SR)
          return result("bin", ">>", expr, this.next().read_expr());
        if (this.token === this.tok.T_BOOLEAN_OR)
          return result("bin", "||", expr, this.next().read_expr());
        if (this.token === this.tok.T_LOGICAL_OR)
          return result("bin", "or", expr, this.next().read_expr());
        if (this.token === this.tok.T_BOOLEAN_AND)
          return result("bin", "&&", expr, this.next().read_expr());
        if (this.token === this.tok.T_LOGICAL_AND)
          return result("bin", "and", expr, this.next().read_expr());
        if (this.token === this.tok.T_LOGICAL_XOR)
          return result("bin", "xor", expr, this.next().read_expr());
        if (this.token === this.tok.T_IS_IDENTICAL)
          return result("bin", "===", expr, this.next().read_expr());
        if (this.token === this.tok.T_IS_NOT_IDENTICAL)
          return result("bin", "!==", expr, this.next().read_expr());
        if (this.token === this.tok.T_IS_EQUAL)
          return result("bin", "==", expr, this.next().read_expr());
        if (this.token === this.tok.T_IS_NOT_EQUAL)
          return result("bin", "!=", expr, this.next().read_expr());
        if (this.token === "<")
          return result("bin", "<", expr, this.next().read_expr());
        if (this.token === ">")
          return result("bin", ">", expr, this.next().read_expr());
        if (this.token === this.tok.T_IS_SMALLER_OR_EQUAL)
          return result("bin", "<=", expr, this.next().read_expr());
        if (this.token === this.tok.T_IS_GREATER_OR_EQUAL)
          return result("bin", ">=", expr, this.next().read_expr());
        if (this.token === this.tok.T_SPACESHIP)
          return result("bin", "<=>", expr, this.next().read_expr());
        if (this.token === this.tok.T_INSTANCEOF) {
          expr = result(
            "bin",
            "instanceof",
            expr,
            this.next().read_class_name_reference()
          );
          if (this.token !== ";" && this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
            expr = this.read_expr(expr);
          }
        }
        if (this.token === this.tok.T_COALESCE)
          return result("bin", "??", expr, this.next().read_expr());
        if (this.token === "?") {
          let trueArg = null;
          if (this.next().token !== ":") {
            trueArg = this.read_expr();
          }
          this.expect(":") && this.next();
          return result("retif", expr, trueArg, this.read_expr());
        } else {
          result.destroy(expr);
        }
        return expr;
      },
      /*
       * Reads a cast expression
       */
      read_expr_cast: function(type) {
        return this.node("cast")(type, this.text(), this.next().read_expr());
      },
      /*
       * Read a isset variable
       */
      read_isset_variable: function() {
        return this.read_expr();
      },
      /*
       * Reads isset variables
       */
      read_isset_variables: function() {
        return this.read_function_list(this.read_isset_variable, ",");
      },
      /*
       * Reads internal PHP functions
       */
      read_internal_functions_in_yacc: function() {
        let result = null;
        switch (this.token) {
          case this.tok.T_ISSET:
            {
              result = this.node("isset");
              if (this.next().expect("(")) {
                this.next();
              }
              const variables = this.read_isset_variables();
              if (this.expect(")")) {
                this.next();
              }
              result = result(variables);
            }
            break;
          case this.tok.T_EMPTY:
            {
              result = this.node("empty");
              if (this.next().expect("(")) {
                this.next();
              }
              const expression = this.read_expr();
              if (this.expect(")")) {
                this.next();
              }
              result = result(expression);
            }
            break;
          case this.tok.T_INCLUDE:
            result = this.node("include")(false, false, this.next().read_expr());
            break;
          case this.tok.T_INCLUDE_ONCE:
            result = this.node("include")(true, false, this.next().read_expr());
            break;
          case this.tok.T_EVAL:
            {
              result = this.node("eval");
              if (this.next().expect("(")) {
                this.next();
              }
              const expr = this.read_expr();
              if (this.expect(")")) {
                this.next();
              }
              result = result(expr);
            }
            break;
          case this.tok.T_REQUIRE:
            result = this.node("include")(false, true, this.next().read_expr());
            break;
          case this.tok.T_REQUIRE_ONCE:
            result = this.node("include")(true, true, this.next().read_expr());
            break;
        }
        return result;
      },
      /*
       * Reads optional expression
       */
      read_optional_expr: function(stopToken) {
        if (this.token !== stopToken) {
          return this.read_expr();
        }
        return null;
      },
      /*
       * Reads exit expression
       */
      read_exit_expr: function() {
        let expression = null;
        if (this.token === "(") {
          this.next();
          expression = this.read_optional_expr(")");
          this.expect(")") && this.next();
        }
        return expression;
      },
      /*
       * ```ebnf
       * Reads an expression
       *  expr ::= @todo
       * ```
       */
      read_expr_item: function() {
        let result, expr;
        if (this.token === "+")
          return this.node("unary")("+", this.next().read_expr());
        if (this.token === "-")
          return this.node("unary")("-", this.next().read_expr());
        if (this.token === "!")
          return this.node("unary")("!", this.next().read_expr());
        if (this.token === "~")
          return this.node("unary")("~", this.next().read_expr());
        if (this.token === "(") {
          expr = this.next().read_expr();
          expr.parenthesizedExpression = true;
          this.expect(")") && this.next();
          return this.handleDereferencable(expr);
        }
        if (this.token === "`") {
          return this.read_encapsed_string("`");
        }
        if (this.token === this.tok.T_LIST) {
          let assign = null;
          const isInner = this.innerList;
          result = this.node("list");
          if (!isInner) {
            assign = this.node("assign");
          }
          if (this.next().expect("(")) {
            this.next();
          }
          if (!this.innerList) this.innerList = true;
          const assignList = this.read_array_pair_list(false);
          if (this.expect(")")) {
            this.next();
          }
          let hasItem = false;
          for (let i = 0; i < assignList.length; i++) {
            if (assignList[i] !== null && assignList[i].kind !== "noop") {
              hasItem = true;
              break;
            }
          }
          if (!hasItem) {
            this.raiseError(
              "Fatal Error :  Cannot use empty list on line " + this.lexer.yylloc.first_line
            );
          }
          if (!isInner) {
            this.innerList = false;
            if (this.expect("=")) {
              return assign(
                result(assignList, false),
                this.next().read_expr(),
                "="
              );
            } else {
              return result(assignList, false);
            }
          } else {
            return result(assignList, false);
          }
        }
        if (this.token === this.tok.T_CLONE)
          return this.node("clone")(this.next().read_expr());
        switch (this.token) {
          case this.tok.T_INC:
            return this.node("pre")("+", this.next().read_variable(false, false));
          case this.tok.T_DEC:
            return this.node("pre")("-", this.next().read_variable(false, false));
          case this.tok.T_NEW:
            return this.read_new_expr();
          case this.tok.T_ISSET:
          case this.tok.T_EMPTY:
          case this.tok.T_INCLUDE:
          case this.tok.T_INCLUDE_ONCE:
          case this.tok.T_EVAL:
          case this.tok.T_REQUIRE:
          case this.tok.T_REQUIRE_ONCE:
            return this.read_internal_functions_in_yacc();
          case this.tok.T_INT_CAST:
            return this.read_expr_cast("int");
          case this.tok.T_DOUBLE_CAST:
            return this.read_expr_cast("float");
          case this.tok.T_STRING_CAST:
            return this.read_expr_cast(
              this.text().indexOf("binary") !== -1 ? "binary" : "string"
            );
          case this.tok.T_ARRAY_CAST:
            return this.read_expr_cast("array");
          case this.tok.T_OBJECT_CAST:
            return this.read_expr_cast("object");
          case this.tok.T_BOOL_CAST:
            return this.read_expr_cast("bool");
          case this.tok.T_UNSET_CAST:
            return this.read_expr_cast("unset");
          case this.tok.T_EXIT: {
            const useDie = this.lexer.yytext.toLowerCase() === "die";
            result = this.node("exit");
            this.next();
            const expression = this.read_exit_expr();
            return result(expression, useDie);
          }
          case this.tok.T_PRINT:
            return this.node("print")(this.next().read_expr());
          case this.tok.T_YIELD: {
            let value = null;
            let key = null;
            result = this.node("yield");
            if (this.next().is("EXPR")) {
              value = this.read_expr();
              if (this.token === this.tok.T_DOUBLE_ARROW) {
                key = value;
                value = this.next().read_expr();
              }
            }
            return result(value, key);
          }
          case this.tok.T_YIELD_FROM:
            result = this.node("yieldfrom");
            expr = this.next().read_expr();
            return result(expr);
          case this.tok.T_FN:
          case this.tok.T_FUNCTION:
            return this.read_inline_function();
          case this.tok.T_STATIC: {
            const backup = [this.token, this.lexer.getState()];
            this.next();
            if (this.token === this.tok.T_FUNCTION || this.version >= 704 && this.token === this.tok.T_FN) {
              return this.read_inline_function([0, 1, 0]);
            } else {
              this.lexer.tokens.push(backup);
              this.next();
            }
          }
        }
        if (this.is("VARIABLE")) {
          result = this.node();
          expr = this.read_variable(false, false);
          const isConst = expr.kind === "identifier" || expr.kind === "staticlookup" && expr.offset.kind === "identifier";
          switch (this.token) {
            case "=": {
              if (isConst) this.error("VARIABLE");
              if (this.next().token == "&") {
                return this.read_assignref(result, expr);
              }
              return result("assign", expr, this.read_expr(), "=");
            }
            case this.tok.T_PLUS_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "+=");
            case this.tok.T_MINUS_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "-=");
            case this.tok.T_MUL_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "*=");
            case this.tok.T_POW_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "**=");
            case this.tok.T_DIV_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "/=");
            case this.tok.T_CONCAT_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), ".=");
            case this.tok.T_MOD_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "%=");
            case this.tok.T_AND_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "&=");
            case this.tok.T_OR_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "|=");
            case this.tok.T_XOR_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "^=");
            case this.tok.T_SL_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "<<=");
            case this.tok.T_SR_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), ">>=");
            case this.tok.T_COALESCE_EQUAL:
              if (isConst) this.error("VARIABLE");
              return result("assign", expr, this.next().read_expr(), "??=");
            case this.tok.T_INC:
              if (isConst) this.error("VARIABLE");
              this.next();
              return result("post", "+", expr);
            case this.tok.T_DEC:
              if (isConst) this.error("VARIABLE");
              this.next();
              return result("post", "-", expr);
            default:
              result.destroy(expr);
          }
        } else if (this.is("SCALAR")) {
          result = this.node();
          expr = this.read_scalar();
          if (expr.kind === "array" && expr.shortForm && this.token === "=") {
            const list = this.convertToList(expr);
            if (expr.loc) list.loc = expr.loc;
            const right = this.next().read_expr();
            return result("assign", list, right, "=");
          } else {
            result.destroy(expr);
          }
          return this.handleDereferencable(expr);
        } else {
          this.error("EXPR");
          this.next();
        }
        return expr;
      },
      /*
       * Recursively convert nested array to nested list.
       */
      convertToList: function(array) {
        const convertedItems = array.items.map((entry) => {
          if (entry.value && entry.value.kind === "array" && entry.value.shortForm) {
            entry.value = this.convertToList(entry.value);
          }
          return entry;
        });
        const node = this.node("list")(convertedItems, true);
        if (array.loc) node.loc = array.loc;
        if (array.leadingComments) node.leadingComments = array.leadingComments;
        if (array.trailingComments) node.trailingComments = array.trailingComments;
        return node;
      },
      /*
       * Reads assignment
       * @param {*} left
       */
      read_assignref: function(result, left) {
        this.next();
        let right;
        if (this.token === this.tok.T_NEW) {
          if (this.version >= 700) {
            this.error();
          }
          right = this.read_new_expr();
        } else {
          right = this.read_variable(false, false);
        }
        return result("assignref", left, right);
      },
      /*
       *
       * inline_function:
       * 		function returns_ref backup_doc_comment '(' parameter_list ')' lexical_vars return_type
       * 		backup_fn_flags '{' inner_statement_list '}' backup_fn_flags
       * 			{ $$ = zend_ast_create_decl(ZEND_AST_CLOSURE, $2 | $13, $1, $3,
       * 				  zend_string_init("{closure}", sizeof("{closure}") - 1, 0),
       * 				  $5, $7, $11, $8); CG(extra_fn_flags) = $9; }
       * 	|	fn returns_ref '(' parameter_list ')' return_type backup_doc_comment T_DOUBLE_ARROW backup_fn_flags backup_lex_pos expr backup_fn_flags
       * 			{ $$ = zend_ast_create_decl(ZEND_AST_ARROW_FUNC, $2 | $12, $1, $7,
       * 				  zend_string_init("{closure}", sizeof("{closure}") - 1, 0), $4, NULL,
       * 				  zend_ast_create(ZEND_AST_RETURN, $11), $6);
       * 				  ((zend_ast_decl *) $$)->lex_pos = $10;
       * 				  CG(extra_fn_flags) = $9; }   *
       */
      read_inline_function: function(flags) {
        if (this.token === this.tok.T_FUNCTION) {
          return this.read_function(true, flags);
        }
        if (!this.version >= 704) {
          this.raiseError("Arrow Functions are not allowed");
        }
        const node = this.node("arrowfunc");
        if (this.expect(this.tok.T_FN)) this.next();
        const isRef = this.is_reference();
        if (this.expect("(")) this.next();
        const params = this.read_parameter_list();
        if (this.expect(")")) this.next();
        let nullable = false;
        let returnType = null;
        if (this.token === ":") {
          if (this.next().token === "?") {
            nullable = true;
            this.next();
          }
          returnType = this.read_type();
        }
        if (this.expect(this.tok.T_DOUBLE_ARROW)) this.next();
        const body = this.read_expr();
        return node(
          params,
          isRef,
          body,
          returnType,
          nullable,
          flags ? true : false
        );
      },
      /*
       * ```ebnf
       *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
       * ```
       * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
       */
      read_new_expr: function() {
        const result = this.node("new");
        this.expect(this.tok.T_NEW) && this.next();
        let args = [];
        if (this.token === this.tok.T_CLASS) {
          const what = this.node("class");
          if (this.next().token === "(") {
            args = this.read_argument_list();
          }
          const propExtends = this.read_extends_from();
          const propImplements = this.read_implements_list();
          let body = null;
          if (this.expect("{")) {
            body = this.next().read_class_body();
          }
          return result(
            what(null, propExtends, propImplements, body, [0, 0, 0]),
            args
          );
        }
        const name = this.read_new_class_name();
        if (this.token === "(") {
          args = this.read_argument_list();
        }
        return result(name, args);
      },
      /*
       * Reads a class name
       * ```ebnf
       * read_new_class_name ::= namespace_name | variable
       * ```
       */
      read_new_class_name: function() {
        if (this.token === this.tok.T_NS_SEPARATOR || this.token === this.tok.T_STRING || this.token === this.tok.T_NAMESPACE) {
          let result = this.read_namespace_name(true);
          if (this.token === this.tok.T_DOUBLE_COLON) {
            result = this.read_static_getter(result);
          }
          return result;
        } else if (this.is("VARIABLE")) {
          return this.read_variable(true, false);
        } else {
          this.expect([this.tok.T_STRING, "VARIABLE"]);
        }
      },
      handleDereferencable: function(expr) {
        while (this.token !== this.EOF) {
          if (this.token === this.tok.T_OBJECT_OPERATOR || this.token === this.tok.T_DOUBLE_COLON) {
            expr = this.recursive_variable_chain_scan(expr, false, false, true);
          } else if (this.token === this.tok.T_CURLY_OPEN || this.token === "[") {
            expr = this.read_dereferencable(expr);
          } else if (this.token === "(") {
            expr = this.node("call")(expr, this.read_argument_list());
          } else {
            return expr;
          }
        }
        return expr;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/function.js
var require_function = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/function.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * checks if current token is a reference keyword
       */
      is_reference: function() {
        if (this.token == "&") {
          this.next();
          return true;
        }
        return false;
      },
      /*
       * checks if current token is a variadic keyword
       */
      is_variadic: function() {
        if (this.token === this.tok.T_ELLIPSIS) {
          this.next();
          return true;
        }
        return false;
      },
      /*
       * reading a function
       * ```ebnf
       * function ::= function_declaration code_block
       * ```
       */
      read_function: function(closure, flag) {
        const result = this.read_function_declaration(
          closure ? 1 : flag ? 2 : 0,
          flag && flag[1] === 1
        );
        if (flag && flag[2] == 1) {
          result.parseFlags(flag);
          if (this.expect(";")) {
            this.next();
          }
        } else {
          if (this.expect("{")) {
            result.body = this.read_code_block(false);
            if (result.loc && result.body.loc) {
              result.loc.end = result.body.loc.end;
            }
          }
          if (!closure && flag) {
            result.parseFlags(flag);
          }
        }
        return result;
      },
      /*
       * reads a function declaration (without his body)
       * ```ebnf
       * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
       * ```
       */
      read_function_declaration: function(type, isStatic) {
        let nodeName = "function";
        if (type === 1) {
          nodeName = "closure";
        } else if (type === 2) {
          nodeName = "method";
        }
        const result = this.node(nodeName);
        if (this.expect(this.tok.T_FUNCTION)) {
          this.next();
        }
        const isRef = this.is_reference();
        let name = false, use = [], returnType = null, nullable = false;
        if (type !== 1) {
          const nameNode = this.node("identifier");
          if (type === 2) {
            if (this.version >= 700) {
              if (this.token === this.tok.T_STRING || this.is("IDENTIFIER")) {
                name = this.text();
                this.next();
              } else if (this.version < 704) {
                this.error("IDENTIFIER");
              }
            } else if (this.token === this.tok.T_STRING) {
              name = this.text();
              this.next();
            } else {
              this.error("IDENTIFIER");
            }
          } else {
            if (this.version >= 700) {
              if (this.token === this.tok.T_STRING) {
                name = this.text();
                this.next();
              } else if (this.version >= 704) {
                if (!this.expect("(")) {
                  this.next();
                }
              } else {
                this.error(this.tok.T_STRING);
                this.next();
              }
            } else {
              if (this.expect(this.tok.T_STRING)) {
                name = this.text();
              }
              this.next();
            }
          }
          name = nameNode(name);
        }
        if (this.expect("(")) this.next();
        const params = this.read_parameter_list();
        if (this.expect(")")) this.next();
        if (type === 1) {
          use = this.read_lexical_vars();
        }
        if (this.token === ":") {
          if (this.next().token === "?") {
            nullable = true;
            this.next();
          }
          returnType = this.read_type();
        }
        if (type === 1) {
          return result(params, isRef, use, returnType, nullable, isStatic);
        }
        return result(name, params, isRef, returnType, nullable);
      },
      read_lexical_vars: function() {
        let result = [];
        if (this.token === this.tok.T_USE) {
          this.next();
          this.expect("(") && this.next();
          result = this.read_lexical_var_list();
          this.expect(")") && this.next();
        }
        return result;
      },
      read_lexical_var_list: function() {
        return this.read_list(this.read_lexical_var, ",");
      },
      /*
       * ```ebnf
       * lexical_var ::= '&'? T_VARIABLE
       * ```
       */
      read_lexical_var: function() {
        if (this.token === "&") {
          return this.read_byref(this.read_lexical_var.bind(this));
        }
        const result = this.node("variable");
        this.expect(this.tok.T_VARIABLE);
        const name = this.text().substring(1);
        this.next();
        return result(name, false);
      },
      /*
       * reads a list of parameters
       * ```ebnf
       *  parameter_list ::= (parameter ',')* parameter?
       * ```
       */
      read_parameter_list: function() {
        const result = [];
        if (this.token != ")") {
          while (this.token != this.EOF) {
            result.push(this.read_parameter());
            if (this.token == ",") {
              this.next();
            } else if (this.token == ")") {
              break;
            } else {
              this.error([",", ")"]);
              break;
            }
          }
        }
        return result;
      },
      /*
       * ```ebnf
       *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
       * ```
       * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
       */
      read_parameter: function() {
        const node = this.node("parameter");
        let parameterName = null;
        let value = null;
        let type = null;
        let nullable = false;
        if (this.token === "?") {
          this.next();
          nullable = true;
        }
        type = this.read_type();
        if (nullable && !type) {
          this.raiseError(
            "Expecting a type definition combined with nullable operator"
          );
        }
        const isRef = this.is_reference();
        const isVariadic = this.is_variadic();
        if (this.expect(this.tok.T_VARIABLE)) {
          parameterName = this.node("identifier");
          const name = this.text().substring(1);
          this.next();
          parameterName = parameterName(name);
        }
        if (this.token == "=") {
          value = this.next().read_expr();
        }
        return node(parameterName, type, value, isRef, isVariadic, nullable);
      },
      /*
       * Reads a list of arguments
       * ```ebnf
       *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
       * ```
       */
      read_argument_list: function() {
        let result = [];
        this.expect("(") && this.next();
        if (this.token !== ")") {
          result = this.read_non_empty_argument_list();
        }
        this.expect(")") && this.next();
        return result;
      },
      /*
       * Reads non empty argument list
       */
      read_non_empty_argument_list: function() {
        let wasVariadic = false;
        return this.read_function_list(
          function() {
            const argument = this.read_argument();
            if (argument) {
              if (wasVariadic) {
                this.raiseError("Unexpected argument after a variadic argument");
              }
              if (argument.kind === "variadic") {
                wasVariadic = true;
              }
            }
            return argument;
          }.bind(this),
          ","
        );
      },
      /*
       * ```ebnf
       *    argument_list ::= T_ELLIPSIS? expr
       * ```
       */
      read_argument: function() {
        if (this.token === this.tok.T_ELLIPSIS) {
          return this.node("variadic")(this.next().read_expr());
        }
        return this.read_expr();
      },
      /*
       * read type hinting
       * ```ebnf
       *  type ::= T_ARRAY | T_CALLABLE | namespace_name
       * ```
       */
      read_type: function() {
        const result = this.node();
        if (this.token === this.tok.T_ARRAY || this.token === this.tok.T_CALLABLE) {
          const type = this.text();
          this.next();
          return result("typereference", type.toLowerCase(), type);
        } else if (this.token === this.tok.T_STRING) {
          const type = this.text();
          const backup = [this.token, this.lexer.getState()];
          this.next();
          if (this.token !== this.tok.T_NS_SEPARATOR && this.ast.typereference.types.indexOf(type.toLowerCase()) > -1) {
            return result("typereference", type.toLowerCase(), type);
          } else {
            this.lexer.tokens.push(backup);
            this.next();
            result.destroy();
            return this.read_namespace_name();
          }
        } else if (this.token === this.tok.T_NAMESPACE || this.token === this.tok.T_NS_SEPARATOR) {
          result.destroy();
          return this.read_namespace_name();
        }
        result.destroy();
        return null;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/if.js
var require_if = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/if.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads an IF statement
       *
       * ```ebnf
       *  if ::= T_IF '(' expr ')' ':' ...
       * ```
       */
      read_if: function() {
        const result = this.node("if");
        const test = this.next().read_if_expr();
        let body = null;
        let alternate = null;
        let shortForm = false;
        if (this.token === ":") {
          shortForm = true;
          this.next();
          body = this.node("block");
          const items = [];
          while (this.token !== this.EOF && this.token !== this.tok.T_ENDIF) {
            if (this.token === this.tok.T_ELSEIF) {
              alternate = this.read_elseif_short();
              break;
            } else if (this.token === this.tok.T_ELSE) {
              alternate = this.read_else_short();
              break;
            }
            items.push(this.read_inner_statement());
          }
          body = body(null, items);
          this.expect(this.tok.T_ENDIF) && this.next();
          this.expectEndOfStatement();
        } else {
          body = this.read_statement();
          if (this.token === this.tok.T_ELSEIF) {
            alternate = this.read_if();
          } else if (this.token === this.tok.T_ELSE) {
            alternate = this.next().read_statement();
          }
        }
        return result(test, body, alternate, shortForm);
      },
      /*
       * reads an if expression : '(' expr ')'
       */
      read_if_expr: function() {
        this.expect("(") && this.next();
        const result = this.read_expr();
        this.expect(")") && this.next();
        return result;
      },
      /*
       * reads an elseif (expr): statements
       */
      read_elseif_short: function() {
        let alternate = null;
        const result = this.node("if");
        const test = this.next().read_if_expr();
        if (this.expect(":")) this.next();
        const body = this.node("block");
        const items = [];
        while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
          if (this.token === this.tok.T_ELSEIF) {
            alternate = this.read_elseif_short();
            break;
          } else if (this.token === this.tok.T_ELSE) {
            alternate = this.read_else_short();
            break;
          }
          items.push(this.read_inner_statement());
        }
        return result(test, body(null, items), alternate, true);
      },
      /*
       *
       */
      read_else_short: function() {
        if (this.next().expect(":")) this.next();
        const body = this.node("block");
        const items = [];
        while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
          items.push(this.read_inner_statement());
        }
        return body(null, items);
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/loops.js
var require_loops = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/loops.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads a while statement
       * ```ebnf
       * while ::= T_WHILE (statement | ':' inner_statement_list T_ENDWHILE ';')
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L587
       * @return {While}
       */
      read_while: function() {
        const result = this.node("while");
        this.expect(this.tok.T_WHILE) && this.next();
        let test = null;
        let body = null;
        let shortForm = false;
        if (this.expect("(")) this.next();
        test = this.read_expr();
        if (this.expect(")")) this.next();
        if (this.token === ":") {
          shortForm = true;
          body = this.read_short_form(this.tok.T_ENDWHILE);
        } else {
          body = this.read_statement();
        }
        return result(test, body, shortForm);
      },
      /*
       * Reads a do / while loop
       * ```ebnf
       * do ::= T_DO statement T_WHILE '(' expr ')' ';'
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L423
       * @return {Do}
       */
      read_do: function() {
        const result = this.node("do");
        this.expect(this.tok.T_DO) && this.next();
        let test = null;
        let body = null;
        body = this.read_statement();
        if (this.expect(this.tok.T_WHILE)) {
          if (this.next().expect("(")) this.next();
          test = this.read_expr();
          if (this.expect(")")) this.next();
          if (this.expect(";")) this.next();
        }
        return result(test, body);
      },
      /*
       * Read a for incremental loop
       * ```ebnf
       * for ::= T_FOR '(' for_exprs ';' for_exprs ';' for_exprs ')' for_statement
       * for_statement ::= statement | ':' inner_statement_list T_ENDFOR ';'
       * for_exprs ::= expr? (',' expr)*
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L425
       * @return {For}
       */
      read_for: function() {
        const result = this.node("for");
        this.expect(this.tok.T_FOR) && this.next();
        let init = [];
        let test = [];
        let increment = [];
        let body = null;
        let shortForm = false;
        if (this.expect("(")) this.next();
        if (this.token !== ";") {
          init = this.read_list(this.read_expr, ",");
          if (this.expect(";")) this.next();
        } else {
          this.next();
        }
        if (this.token !== ";") {
          test = this.read_list(this.read_expr, ",");
          if (this.expect(";")) this.next();
        } else {
          this.next();
        }
        if (this.token !== ")") {
          increment = this.read_list(this.read_expr, ",");
          if (this.expect(")")) this.next();
        } else {
          this.next();
        }
        if (this.token === ":") {
          shortForm = true;
          body = this.read_short_form(this.tok.T_ENDFOR);
        } else {
          body = this.read_statement();
        }
        return result(init, test, increment, body, shortForm);
      },
      /*
       * Reads a foreach loop
       * ```ebnf
       * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L438
       * @return {Foreach}
       */
      read_foreach: function() {
        const result = this.node("foreach");
        this.expect(this.tok.T_FOREACH) && this.next();
        let source = null;
        let key = null;
        let value = null;
        let body = null;
        let shortForm = false;
        if (this.expect("(")) this.next();
        source = this.read_expr();
        if (this.expect(this.tok.T_AS)) {
          this.next();
          value = this.read_foreach_variable();
          if (this.token === this.tok.T_DOUBLE_ARROW) {
            key = value;
            value = this.next().read_foreach_variable();
          }
        }
        if (key && key.kind === "list") {
          this.raiseError("Fatal Error : Cannot use list as key element");
        }
        if (this.expect(")")) this.next();
        if (this.token === ":") {
          shortForm = true;
          body = this.read_short_form(this.tok.T_ENDFOREACH);
        } else {
          body = this.read_statement();
        }
        return result(source, key, value, body, shortForm);
      },
      /*
       * Reads a foreach variable statement
       * ```ebnf
       * foreach_variable =
       *    variable |
       *    '&' variable |
       *    T_LIST '(' assignment_list ')' |
       *    '[' assignment_list ']'
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L544
       * @return {Expression}
       */
      read_foreach_variable: function() {
        if (this.token === this.tok.T_LIST || this.token === "[") {
          const isShort = this.token === "[";
          const result = this.node("list");
          this.next();
          if (!isShort && this.expect("(")) this.next();
          const assignList = this.read_array_pair_list(isShort);
          if (this.expect(isShort ? "]" : ")")) this.next();
          return result(assignList, isShort);
        } else {
          return this.read_variable(false, false);
        }
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/main.js
var require_main = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/main.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * ```ebnf
       * start ::= (namespace | top_statement)*
       * ```
       */
      read_start: function() {
        if (this.token == this.tok.T_NAMESPACE) {
          return this.read_namespace();
        } else {
          return this.read_top_statement();
        }
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/namespace.js
var require_namespace = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/namespace.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads a namespace declaration block
       * ```ebnf
       * namespace ::= T_NAMESPACE namespace_name? '{'
       *    top_statements
       * '}'
       * | T_NAMESPACE namespace_name ';' top_statements
       * ```
       * @see http://php.net/manual/en/language.namespaces.php
       * @return {Namespace}
       */
      read_namespace: function() {
        const result = this.node("namespace");
        let body;
        this.expect(this.tok.T_NAMESPACE) && this.next();
        let name;
        if (this.token == "{") {
          name = {
            name: [""]
          };
        } else {
          name = this.read_namespace_name();
        }
        this.currentNamespace = name;
        if (this.token == ";") {
          this.currentNamespace = name;
          body = this.next().read_top_statements();
          this.expect(this.EOF);
          return result(name.name, body, false);
        } else if (this.token == "{") {
          this.currentNamespace = name;
          body = this.next().read_top_statements();
          this.expect("}") && this.next();
          if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
            body.push(this.node("noop")());
          }
          return result(name.name, body, true);
        } else if (this.token === "(") {
          name.resolution = this.ast.reference.RELATIVE_NAME;
          name.name = name.name.substring(1);
          result.destroy();
          return this.node("call")(name, this.read_argument_list());
        } else {
          this.error(["{", ";"]);
          this.currentNamespace = name;
          body = this.read_top_statements();
          this.expect(this.EOF);
          return result(name, body, false);
        }
      },
      /*
       * Reads a namespace name
       * ```ebnf
       *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
       * ```
       * @see http://php.net/manual/en/language.namespaces.rules.php
       * @return {Reference}
       */
      read_namespace_name: function(resolveReference) {
        const result = this.node();
        let relative = false;
        if (this.token === this.tok.T_NAMESPACE) {
          this.next().expect(this.tok.T_NS_SEPARATOR) && this.next();
          relative = true;
        }
        const names = this.read_list(
          this.tok.T_STRING,
          this.tok.T_NS_SEPARATOR,
          true
        );
        if (!relative && names.length === 1 && (resolveReference || this.token !== "(")) {
          if (names[0].toLowerCase() === "parent") {
            return result("parentreference", names[0]);
          } else if (names[0].toLowerCase() === "self") {
            return result("selfreference", names[0]);
          }
        }
        return result("name", names, relative);
      },
      /*
       * Reads a use statement
       * ```ebnf
       * use_statement ::= T_USE
       *   use_type? use_declarations |
       *   use_type use_statement '{' use_declarations '}' |
       *   use_statement '{' use_declarations(=>typed) '}'
       * ';'
       * ```
       * @see http://php.net/manual/en/language.namespaces.importing.php
       * @return {UseGroup}
       */
      read_use_statement: function() {
        let result = this.node("usegroup");
        let items = [];
        let name = null;
        this.expect(this.tok.T_USE) && this.next();
        const type = this.read_use_type();
        items.push(this.read_use_declaration(false));
        if (this.token === ",") {
          items = items.concat(this.next().read_use_declarations(false));
        } else if (this.token === "{") {
          name = items[0].name;
          items = this.next().read_use_declarations(type === null);
          this.expect("}") && this.next();
        }
        result = result(name, type, items);
        this.expect(";") && this.next();
        return result;
      },
      /*
       *
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1045
       */
      read_class_name_reference: function() {
        return this.read_variable(true, false);
      },
      /*
       * Reads a use declaration
       * ```ebnf
       * use_declaration ::= use_type? namespace_name use_alias
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L380
       * @return {UseItem}
       */
      read_use_declaration: function(typed) {
        const result = this.node("useitem");
        let type = null;
        if (typed) type = this.read_use_type();
        const name = this.read_namespace_name();
        const alias = this.read_use_alias();
        return result(name.name, alias, type);
      },
      /*
       * Reads a list of use declarations
       * ```ebnf
       * use_declarations ::= use_declaration (',' use_declaration)*
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L380
       * @return {UseItem[]}
       */
      read_use_declarations: function(typed) {
        const result = [this.read_use_declaration(typed)];
        while (this.token === ",") {
          this.next();
          if (typed) {
            if (this.token !== this.tok.T_FUNCTION && this.token !== this.tok.T_CONST && this.token !== this.tok.T_STRING) {
              break;
            }
          } else if (this.token !== this.tok.T_STRING && this.token !== this.tok.T_NS_SEPARATOR) {
            break;
          }
          result.push(this.read_use_declaration(typed));
        }
        return result;
      },
      /*
       * Reads a use statement
       * ```ebnf
       * use_alias ::= (T_AS T_STRING)?
       * ```
       * @return {String|null}
       */
      read_use_alias: function() {
        let result = null;
        if (this.token === this.tok.T_AS) {
          if (this.next().expect(this.tok.T_STRING)) {
            const aliasName = this.node("identifier");
            const name = this.text();
            this.next();
            result = aliasName(name);
          }
        }
        return result;
      },
      /*
       * Reads the namespace type declaration
       * ```ebnf
       * use_type ::= (T_FUNCTION | T_CONST)?
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L335
       * @return {String|null} Possible values : function, const
       */
      read_use_type: function() {
        if (this.token === this.tok.T_FUNCTION) {
          this.next();
          return this.ast.useitem.TYPE_FUNCTION;
        } else if (this.token === this.tok.T_CONST) {
          this.next();
          return this.ast.useitem.TYPE_CONST;
        }
        return null;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/scalar.js
var require_scalar = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/scalar.js"(exports2, module2) {
    "use strict";
    var specialChar = {
      "\\": "\\",
      $: "$",
      n: "\n",
      r: "\r",
      t: "	",
      f: String.fromCharCode(12),
      v: String.fromCharCode(11),
      e: String.fromCharCode(27)
    };
    module2.exports = {
      /*
       * Unescape special chars
       */
      resolve_special_chars: function(text, doubleQuote) {
        if (!doubleQuote) {
          return text.replace(/\\\\/g, "\\").replace(/\\'/g, "'");
        }
        return text.replace(/\\"/, '"').replace(
          /\\([\\$nrtfve]|[xX][0-9a-fA-F]{1,2}|[0-7]{1,3}|u{([0-9a-fA-F]+)})/g,
          ($match, p1, p2) => {
            if (specialChar[p1]) {
              return specialChar[p1];
            } else if ("x" === p1[0] || "X" === p1[0]) {
              return String.fromCodePoint(parseInt(p1.substr(1), 16));
            } else if ("u" === p1[0]) {
              return String.fromCodePoint(parseInt(p2, 16));
            } else {
              return String.fromCodePoint(parseInt(p1, 8));
            }
          }
        );
      },
      /*
       * Remove all leading spaces each line for heredoc text if there is a indentation
       * @param {string} text
       * @param {number} indentation
       * @param {boolean} indentation_uses_spaces
       * @param {boolean} first_encaps_node if it is behind a variable, the first N spaces should not be removed
       */
      remove_heredoc_leading_whitespace_chars: function(text, indentation, indentation_uses_spaces, first_encaps_node) {
        if (indentation === 0) {
          return text;
        }
        this.check_heredoc_indentation_level(
          text,
          indentation,
          indentation_uses_spaces,
          first_encaps_node
        );
        const matchedChar = indentation_uses_spaces ? " " : "	";
        const removementRegExp = new RegExp(
          `\\n${matchedChar}{${indentation}}`,
          "g"
        );
        const removementFirstEncapsNodeRegExp = new RegExp(
          `^${matchedChar}{${indentation}}`
        );
        if (first_encaps_node) {
          text = text.replace(removementFirstEncapsNodeRegExp, "");
        }
        return text.replace(removementRegExp, "\n");
      },
      /*
       * Check indentation level of heredoc in text, if mismatch, raiseError
       * @param {string} text
       * @param {number} indentation
       * @param {boolean} indentation_uses_spaces
       * @param {boolean} first_encaps_node if it is behind a variable, the first N spaces should not be removed
       */
      check_heredoc_indentation_level: function(text, indentation, indentation_uses_spaces, first_encaps_node) {
        const textSize = text.length;
        let offset = 0;
        let leadingWhitespaceCharCount = 0;
        let inCoutingState = true;
        const chToCheck = indentation_uses_spaces ? " " : "	";
        let inCheckState = false;
        if (!first_encaps_node) {
          offset = text.indexOf("\n");
          if (offset === -1) {
            return;
          }
          offset++;
        }
        while (offset < textSize) {
          if (inCoutingState) {
            if (text[offset] === chToCheck) {
              leadingWhitespaceCharCount++;
            } else {
              inCheckState = true;
            }
          } else {
            inCoutingState = false;
          }
          if (text[offset] !== "\n" && inCheckState && leadingWhitespaceCharCount < indentation) {
            this.raiseError(
              `Invalid body indentation level (expecting an indentation at least ${indentation})`
            );
          } else {
            inCheckState = false;
          }
          if (text[offset] === "\n") {
            inCoutingState = true;
            leadingWhitespaceCharCount = 0;
          }
          offset++;
        }
      },
      /*
       * Reads dereferencable scalar
       */
      read_dereferencable_scalar: function() {
        let result = null;
        switch (this.token) {
          case this.tok.T_CONSTANT_ENCAPSED_STRING:
            {
              let value = this.node("string");
              const text = this.text();
              let offset = 0;
              if (text[0] === "b" || text[0] === "B") {
                offset = 1;
              }
              const isDoubleQuote = text[offset] === '"';
              this.next();
              const textValue = this.resolve_special_chars(
                text.substring(offset + 1, text.length - 1),
                isDoubleQuote
              );
              value = value(
                isDoubleQuote,
                textValue,
                offset === 1,
                // unicode flag
                text
              );
              if (this.token === this.tok.T_DOUBLE_COLON) {
                result = this.read_static_getter(value);
              } else {
                result = value;
              }
            }
            break;
          case this.tok.T_ARRAY:
            result = this.read_array();
            break;
          case "[":
            result = this.read_array();
            break;
        }
        return result;
      },
      /*
       * ```ebnf
       *  scalar ::= T_MAGIC_CONST
       *       | T_LNUMBER | T_DNUMBER
       *       | T_START_HEREDOC T_ENCAPSED_AND_WHITESPACE? T_END_HEREDOC
       *       | '"' encaps_list '"'
       *       | T_START_HEREDOC encaps_list T_END_HEREDOC
       *       | namespace_name (T_DOUBLE_COLON T_STRING)?
       * ```
       */
      read_scalar: function() {
        if (this.is("T_MAGIC_CONST")) {
          return this.get_magic_constant();
        } else {
          let value, node;
          switch (this.token) {
            case this.tok.T_LNUMBER:
            case this.tok.T_DNUMBER: {
              const result = this.node("number");
              value = this.text();
              this.next();
              return result(value, null);
            }
            case this.tok.T_START_HEREDOC:
              if (this.lexer.curCondition === "ST_NOWDOC") {
                const start = this.lexer.yylloc.first_offset;
                node = this.node("nowdoc");
                value = this.next().text();
                if (this.lexer.heredoc_label.indentation > 0) {
                  value = value.substring(
                    0,
                    value.length - this.lexer.heredoc_label.indentation
                  );
                }
                const lastCh = value[value.length - 1];
                if (lastCh === "\n") {
                  if (value[value.length - 2] === "\r") {
                    value = value.substring(0, value.length - 2);
                  } else {
                    value = value.substring(0, value.length - 1);
                  }
                } else if (lastCh === "\r") {
                  value = value.substring(0, value.length - 1);
                }
                this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE) && this.next();
                this.expect(this.tok.T_END_HEREDOC) && this.next();
                const raw = this.lexer._input.substring(
                  start,
                  this.lexer.yylloc.first_offset
                );
                node = node(
                  this.remove_heredoc_leading_whitespace_chars(
                    value,
                    this.lexer.heredoc_label.indentation,
                    this.lexer.heredoc_label.indentation_uses_spaces,
                    this.lexer.heredoc_label.first_encaps_node
                  ),
                  raw,
                  this.lexer.heredoc_label.label
                );
                return node;
              } else {
                return this.read_encapsed_string(this.tok.T_END_HEREDOC);
              }
            case '"':
              return this.read_encapsed_string('"');
            case 'b"':
            case 'B"': {
              return this.read_encapsed_string('"', true);
            }
            case this.tok.T_CONSTANT_ENCAPSED_STRING:
            case this.tok.T_ARRAY:
            case "[":
              return this.read_dereferencable_scalar();
            default: {
              const err = this.error("SCALAR");
              this.next();
              return err;
            }
          }
        }
      },
      /*
       * Handles the dereferencing
       */
      read_dereferencable: function(expr) {
        let result, offset;
        const node = this.node("offsetlookup");
        if (this.token === "[") {
          offset = this.next().read_expr();
          if (this.expect("]")) this.next();
          result = node(expr, offset);
        } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
          offset = this.read_encapsed_string_item(false);
          result = node(expr, offset);
        }
        return result;
      },
      /*
       * Reads and extracts an encapsed item
       * ```ebnf
       * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE
       *  | T_DOLLAR_OPEN_CURLY_BRACES expr '}'
       *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
       *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
       *  | T_CURLY_OPEN variable '}'
       *  | variable
       *  | variable '[' expr ']'
       *  | variable T_OBJECT_OPERATOR T_STRING
       * ```
       * @return {String|Variable|Expr|Lookup}
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1219
       */
      read_encapsed_string_item: function(isDoubleQuote) {
        const encapsedPart = this.node("encapsedpart");
        let syntax = null;
        let curly = false;
        let result = this.node(), offset, node, name;
        if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
          const text = this.text();
          this.next();
          result = result(
            "string",
            false,
            this.version >= 703 && !this.lexer.heredoc_label.finished ? this.remove_heredoc_leading_whitespace_chars(
              this.resolve_special_chars(text, isDoubleQuote),
              this.lexer.heredoc_label.indentation,
              this.lexer.heredoc_label.indentation_uses_spaces,
              this.lexer.heredoc_label.first_encaps_node
            ) : text,
            false,
            text
          );
        } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
          syntax = "simple";
          curly = true;
          name = null;
          if (this.next().token === this.tok.T_STRING_VARNAME) {
            name = this.node("variable");
            const varName = this.text();
            this.next();
            if (this.token === "[") {
              name = name(varName, false);
              node = this.node("offsetlookup");
              offset = this.next().read_expr();
              this.expect("]") && this.next();
              result = node(name, offset);
            } else {
              result = name(varName, false);
            }
          } else {
            result = result("variable", this.read_expr(), false);
          }
          this.expect("}") && this.next();
        } else if (this.token === this.tok.T_CURLY_OPEN) {
          syntax = "complex";
          result.destroy();
          result = this.next().read_variable(false, false);
          this.expect("}") && this.next();
        } else if (this.token === this.tok.T_VARIABLE) {
          syntax = "simple";
          result.destroy();
          result = this.read_simple_variable();
          if (this.token === "[") {
            node = this.node("offsetlookup");
            offset = this.next().read_encaps_var_offset();
            this.expect("]") && this.next();
            result = node(result, offset);
          }
          if (this.token === this.tok.T_OBJECT_OPERATOR) {
            node = this.node("propertylookup");
            this.next().expect(this.tok.T_STRING);
            const what = this.node("identifier");
            name = this.text();
            this.next();
            result = node(result, what(name));
          }
        } else {
          this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE);
          const value = this.text();
          this.next();
          result.destroy();
          result = result("string", false, value, false, value);
        }
        this.lexer.heredoc_label.first_encaps_node = false;
        return encapsedPart(result, syntax, curly);
      },
      /*
       * Reads an encapsed string
       */
      read_encapsed_string: function(expect, isBinary = false) {
        const labelStart = this.lexer.yylloc.first_offset;
        let node = this.node("encapsed");
        this.next();
        const start = this.lexer.yylloc.prev_offset - (isBinary ? 1 : 0);
        const value = [];
        let type = null;
        if (expect === "`") {
          type = this.ast.encapsed.TYPE_SHELL;
        } else if (expect === '"') {
          type = this.ast.encapsed.TYPE_STRING;
        } else {
          type = this.ast.encapsed.TYPE_HEREDOC;
        }
        while (this.token !== expect && this.token !== this.EOF) {
          value.push(this.read_encapsed_string_item(true));
        }
        if (value.length > 0 && value[value.length - 1].kind === "encapsedpart" && value[value.length - 1].expression.kind === "string") {
          const node2 = value[value.length - 1].expression;
          const lastCh = node2.value[node2.value.length - 1];
          if (lastCh === "\n") {
            if (node2.value[node2.value.length - 2] === "\r") {
              node2.value = node2.value.substring(0, node2.value.length - 2);
            } else {
              node2.value = node2.value.substring(0, node2.value.length - 1);
            }
          } else if (lastCh === "\r") {
            node2.value = node2.value.substring(0, node2.value.length - 1);
          }
        }
        this.expect(expect) && this.next();
        const raw = this.lexer._input.substring(
          type === "heredoc" ? labelStart : start - 1,
          this.lexer.yylloc.first_offset
        );
        node = node(value, raw, type);
        if (expect === this.tok.T_END_HEREDOC) {
          node.label = this.lexer.heredoc_label.label;
          this.lexer.heredoc_label.finished = true;
        }
        return node;
      },
      /*
       * Constant token
       */
      get_magic_constant: function() {
        const result = this.node("magic");
        const name = this.text();
        this.next();
        return result(name.toUpperCase(), name);
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/statement.js
var require_statement = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/statement.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * reading a list of top statements (helper for top_statement*)
       * ```ebnf
       *  top_statements ::= top_statement*
       * ```
       */
      read_top_statements: function() {
        let result = [];
        while (this.token !== this.EOF && this.token !== "}") {
          const statement = this.read_top_statement();
          if (statement) {
            if (Array.isArray(statement)) {
              result = result.concat(statement);
            } else {
              result.push(statement);
            }
          }
        }
        return result;
      },
      /*
       * reading a top statement
       * ```ebnf
       *  top_statement ::=
       *       namespace | function | class
       *       | interface | trait
       *       | use_statements | const_list
       *       | statement
       * ```
       */
      read_top_statement: function() {
        switch (this.token) {
          case this.tok.T_FUNCTION:
            return this.read_function(false, false);
          case this.tok.T_ABSTRACT:
          case this.tok.T_FINAL:
          case this.tok.T_CLASS:
            return this.read_class_declaration_statement();
          case this.tok.T_INTERFACE:
            return this.read_interface_declaration_statement();
          case this.tok.T_TRAIT:
            return this.read_trait_declaration_statement();
          case this.tok.T_USE:
            return this.read_use_statement();
          case this.tok.T_CONST: {
            const result = this.node("constantstatement");
            const items = this.next().read_const_list();
            this.expectEndOfStatement();
            return result(null, items);
          }
          case this.tok.T_NAMESPACE:
            return this.read_namespace();
          case this.tok.T_HALT_COMPILER: {
            const result = this.node("halt");
            if (this.next().expect("(")) this.next();
            if (this.expect(")")) this.next();
            this.expect(";");
            this.lexer.done = true;
            return result(this.lexer._input.substring(this.lexer.offset));
          }
          default:
            return this.read_statement();
        }
      },
      /*
       * reads a list of simple inner statements (helper for inner_statement*)
       * ```ebnf
       *  inner_statements ::= inner_statement*
       * ```
       */
      read_inner_statements: function() {
        let result = [];
        while (this.token != this.EOF && this.token !== "}") {
          const statement = this.read_inner_statement();
          if (statement) {
            if (Array.isArray(statement)) {
              result = result.concat(statement);
            } else {
              result.push(statement);
            }
          }
        }
        return result;
      },
      /*
       * Reads a list of constants declaration
       * ```ebnf
       *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
       * ```
       */
      read_const_list: function() {
        return this.read_list(
          function() {
            this.expect(this.tok.T_STRING);
            const result = this.node("constant");
            let constName = this.node("identifier");
            const name = this.text();
            this.next();
            constName = constName(name);
            if (this.expect("=")) {
              return result(constName, this.next().read_expr());
            } else {
              return result(constName, null);
            }
          },
          ",",
          false
        );
      },
      /*
       * Reads a list of constants declaration
       * ```ebnf
       *   declare_list ::= IDENTIFIER '=' expr (',' IDENTIFIER '=' expr)*
       * ```
       * @retrurn {Array}
       */
      read_declare_list: function() {
        const result = [];
        while (this.token != this.EOF && this.token !== ")") {
          this.expect(this.tok.T_STRING);
          const directive = this.node("declaredirective");
          let key = this.node("identifier");
          const name = this.text();
          this.next();
          key = key(name);
          let value = null;
          if (this.expect("=")) {
            value = this.next().read_expr();
          }
          result.push(directive(key, value));
          if (this.token !== ",") break;
          this.next();
        }
        return result;
      },
      /*
       * reads a simple inner statement
       * ```ebnf
       *  inner_statement ::= '{' inner_statements '}' | token
       * ```
       */
      read_inner_statement: function() {
        switch (this.token) {
          case this.tok.T_FUNCTION:
            return this.read_function(false, false);
          case this.tok.T_ABSTRACT:
          case this.tok.T_FINAL:
          case this.tok.T_CLASS:
            return this.read_class_declaration_statement();
          case this.tok.T_INTERFACE:
            return this.read_interface_declaration_statement();
          case this.tok.T_TRAIT:
            return this.read_trait_declaration_statement();
          case this.tok.T_HALT_COMPILER: {
            this.raiseError(
              "__HALT_COMPILER() can only be used from the outermost scope"
            );
            let node = this.node("halt");
            this.next().expect("(") && this.next();
            this.expect(")") && this.next();
            node = node(this.lexer._input.substring(this.lexer.offset));
            this.expect(";") && this.next();
            return node;
          }
          default:
            return this.read_statement();
        }
      },
      /*
       * Reads statements
       */
      read_statement: function() {
        switch (this.token) {
          case "{":
            return this.read_code_block(false);
          case this.tok.T_IF:
            return this.read_if();
          case this.tok.T_SWITCH:
            return this.read_switch();
          case this.tok.T_FOR:
            return this.read_for();
          case this.tok.T_FOREACH:
            return this.read_foreach();
          case this.tok.T_WHILE:
            return this.read_while();
          case this.tok.T_DO:
            return this.read_do();
          case this.tok.T_COMMENT:
            return this.read_comment();
          case this.tok.T_DOC_COMMENT:
            return this.read_doc_comment();
          case this.tok.T_RETURN: {
            const result = this.node("return");
            this.next();
            const expr = this.read_optional_expr(";");
            this.expectEndOfStatement();
            return result(expr);
          }
          case this.tok.T_BREAK:
          case this.tok.T_CONTINUE: {
            const result = this.node(
              this.token === this.tok.T_CONTINUE ? "continue" : "break"
            );
            this.next();
            const level = this.read_optional_expr(";");
            this.expectEndOfStatement();
            return result(level);
          }
          case this.tok.T_GLOBAL: {
            const result = this.node("global");
            const items = this.next().read_list(this.read_simple_variable, ",");
            this.expectEndOfStatement();
            return result(items);
          }
          case this.tok.T_STATIC: {
            const current = [this.token, this.lexer.getState()];
            const result = this.node();
            if (this.next().token === this.tok.T_DOUBLE_COLON) {
              this.lexer.tokens.push(current);
              const expr = this.next().read_expr();
              this.expectEndOfStatement(expr);
              return result("expressionstatement", expr);
            }
            if (this.token === this.tok.T_FUNCTION) {
              return this.read_function(true, [0, 1, 0]);
            }
            const items = this.read_variable_declarations();
            this.expectEndOfStatement();
            return result("static", items);
          }
          case this.tok.T_ECHO: {
            const result = this.node("echo");
            const text = this.text();
            const shortForm = text === "<?=" || text === "<%=";
            const expressions = this.next().read_function_list(this.read_expr, ",");
            this.expectEndOfStatement();
            return result(expressions, shortForm);
          }
          case this.tok.T_INLINE_HTML: {
            const value = this.text();
            let prevChar = this.lexer.yylloc.first_offset > 0 ? this.lexer._input[this.lexer.yylloc.first_offset - 1] : null;
            const fixFirstLine = prevChar === "\r" || prevChar === "\n";
            if (fixFirstLine) {
              if (prevChar === "\n" && this.lexer.yylloc.first_offset > 1 && this.lexer._input[this.lexer.yylloc.first_offset - 2] === "\r") {
                prevChar = "\r\n";
              }
            }
            const result = this.node("inline");
            this.next();
            return result(value, fixFirstLine ? prevChar + value : value);
          }
          case this.tok.T_UNSET: {
            const result = this.node("unset");
            this.next().expect("(") && this.next();
            const variables = this.read_function_list(this.read_variable, ",");
            this.expect(")") && this.next();
            this.expect(";") && this.next();
            return result(variables);
          }
          case this.tok.T_DECLARE: {
            const result = this.node("declare");
            const body = [];
            let mode;
            this.next().expect("(") && this.next();
            const directives = this.read_declare_list();
            this.expect(")") && this.next();
            if (this.token === ":") {
              this.next();
              while (this.token != this.EOF && this.token !== this.tok.T_ENDDECLARE) {
                body.push(this.read_top_statement());
              }
              if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
                body.push(this.node("noop")());
              }
              this.expect(this.tok.T_ENDDECLARE) && this.next();
              this.expectEndOfStatement();
              mode = this.ast.declare.MODE_SHORT;
            } else if (this.token === "{") {
              this.next();
              while (this.token != this.EOF && this.token !== "}") {
                body.push(this.read_top_statement());
              }
              if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
                body.push(this.node("noop")());
              }
              this.expect("}") && this.next();
              mode = this.ast.declare.MODE_BLOCK;
            } else {
              this.expect(";") && this.next();
              mode = this.ast.declare.MODE_NONE;
            }
            return result(directives, body, mode);
          }
          case this.tok.T_TRY:
            return this.read_try();
          case this.tok.T_THROW: {
            const result = this.node("throw");
            const expr = this.next().read_expr();
            this.expectEndOfStatement();
            return result(expr);
          }
          case ";": {
            this.next();
            return null;
          }
          case this.tok.T_STRING: {
            const result = this.node();
            const current = [this.token, this.lexer.getState()];
            const labelNameText = this.text();
            let labelName = this.node("identifier");
            if (this.next().token === ":") {
              labelName = labelName(labelNameText);
              this.next();
              return result("label", labelName);
            } else {
              labelName.destroy();
            }
            result.destroy();
            this.lexer.tokens.push(current);
            const statement = this.node("expressionstatement");
            const expr = this.next().read_expr();
            this.expectEndOfStatement(expr);
            return statement(expr);
          }
          case this.tok.T_GOTO: {
            const result = this.node("goto");
            let labelName = null;
            if (this.next().expect(this.tok.T_STRING)) {
              labelName = this.node("identifier");
              const name = this.text();
              this.next();
              labelName = labelName(name);
              this.expectEndOfStatement();
            }
            return result(labelName);
          }
          default: {
            const statement = this.node("expressionstatement");
            const expr = this.read_expr();
            this.expectEndOfStatement(expr);
            return statement(expr);
          }
        }
      },
      /*
       * ```ebnf
       *  code_block ::= '{' (inner_statements | top_statements) '}'
       * ```
       */
      read_code_block: function(top) {
        const result = this.node("block");
        this.expect("{") && this.next();
        const body = top ? this.read_top_statements() : this.read_inner_statements();
        if (body.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
          body.push(this.node("noop")());
        }
        this.expect("}") && this.next();
        return result(null, body);
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/switch.js
var require_switch = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/switch.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads a switch statement
       * ```ebnf
       *  switch ::= T_SWITCH '(' expr ')' switch_case_list
       * ```
       * @return {Switch}
       * @see http://php.net/manual/en/control-structures.switch.php
       */
      read_switch: function() {
        const result = this.node("switch");
        this.expect(this.tok.T_SWITCH) && this.next();
        this.expect("(") && this.next();
        const test = this.read_expr();
        this.expect(")") && this.next();
        const shortForm = this.token === ":";
        const body = this.read_switch_case_list();
        return result(test, body, shortForm);
      },
      /*
       * ```ebnf
       *  switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L566
       */
      read_switch_case_list: function() {
        let expect = null;
        const result = this.node("block");
        const items = [];
        if (this.token === "{") {
          expect = "}";
        } else if (this.token === ":") {
          expect = this.tok.T_ENDSWITCH;
        } else {
          this.expect(["{", ":"]);
        }
        this.next();
        if (this.token === ";") {
          this.next();
        }
        while (this.token !== this.EOF && this.token !== expect) {
          items.push(this.read_case_list(expect));
        }
        if (items.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
          items.push(this.node("noop")());
        }
        this.expect(expect) && this.next();
        if (expect === this.tok.T_ENDSWITCH) {
          this.expectEndOfStatement();
        }
        return result(null, items);
      },
      /*
       * ```ebnf
       *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
       * ```
       */
      read_case_list: function(stopToken) {
        const result = this.node("case");
        let test = null;
        if (this.token === this.tok.T_CASE) {
          test = this.next().read_expr();
        } else if (this.token === this.tok.T_DEFAULT) {
          this.next();
        } else {
          this.expect([this.tok.T_CASE, this.tok.T_DEFAULT]);
        }
        this.expect([":", ";"]) && this.next();
        const body = this.node("block");
        const items = [];
        while (this.token !== this.EOF && this.token !== stopToken && this.token !== this.tok.T_CASE && this.token !== this.tok.T_DEFAULT) {
          items.push(this.read_inner_statement());
        }
        return result(test, body(null, items));
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/try.js
var require_try = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/try.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * ```ebnf
       *  try ::= T_TRY '{' inner_statement* '}'
       *          (
       *              T_CATCH '(' namespace_name variable ')' '{'  inner_statement* '}'
       *          )*
       *          (T_FINALLY '{' inner_statement* '}')?
       * ```
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L448
       * @return {Try}
       */
      read_try: function() {
        this.expect(this.tok.T_TRY);
        const result = this.node("try");
        let always = null;
        const catches = [];
        const body = this.next().read_statement();
        while (this.token === this.tok.T_CATCH) {
          const item = this.node("catch");
          this.next().expect("(") && this.next();
          const what = this.read_list(this.read_namespace_name, "|", false);
          const variable = this.read_variable(true, false);
          this.expect(")");
          catches.push(item(this.next().read_statement(), what, variable));
        }
        if (this.token === this.tok.T_FINALLY) {
          always = this.next().read_statement();
        }
        return result(body, catches, always);
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/utils.js
var require_utils3 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/utils.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads a short form of tokens
       * @param {Number} token - The ending token
       * @return {Block}
       */
      read_short_form: function(token) {
        const body = this.node("block");
        const items = [];
        if (this.expect(":")) this.next();
        while (this.token != this.EOF && this.token !== token) {
          items.push(this.read_inner_statement());
        }
        if (items.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
          items.push(this.node("noop")());
        }
        if (this.expect(token)) this.next();
        this.expectEndOfStatement();
        return body(null, items);
      },
      /*
       * https://wiki.php.net/rfc/trailing-comma-function-calls
       * @param {*} item
       * @param {*} separator
       */
      read_function_list: function(item, separator) {
        const result = [];
        do {
          if (this.token == separator && this.version >= 703 && result.length > 0) {
            result.push(this.node("noop")());
            break;
          }
          result.push(item.apply(this, []));
          if (this.token != separator) {
            break;
          }
          if (this.next().token == ")" && this.version >= 703) {
            break;
          }
        } while (this.token != this.EOF);
        return result;
      },
      /*
       * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
       * ```ebnf
       * list ::= separator? ( item separator )* item
       * ```
       */
      read_list: function(item, separator, preserveFirstSeparator) {
        const result = [];
        if (this.token == separator) {
          if (preserveFirstSeparator) {
            result.push(typeof item === "function" ? this.node("noop")() : null);
          }
          this.next();
        }
        if (typeof item === "function") {
          do {
            const itemResult = item.apply(this, []);
            if (itemResult) {
              result.push(itemResult);
            }
            if (this.token != separator) {
              break;
            }
          } while (this.next().token != this.EOF);
        } else {
          if (this.expect(item)) {
            result.push(this.text());
          } else {
            return [];
          }
          while (this.next().token != this.EOF) {
            if (this.token != separator) break;
            if (this.next().token != item) break;
            result.push(this.text());
          }
        }
        return result;
      },
      /*
       * Reads a list of names separated by a comma
       *
       * ```ebnf
       * name_list ::= namespace (',' namespace)*
       * ```
       *
       * Sample code :
       * ```php
       * <?php class foo extends bar, baz { }
       * ```
       *
       * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L726
       * @return {Reference[]}
       */
      read_name_list: function() {
        return this.read_list(this.read_namespace_name, ",", false);
      },
      /*
       * Reads the byref token and assign it to the specified node
       * @param {*} cb
       */
      read_byref: function(cb) {
        let byref = this.node("byref");
        this.next();
        byref = byref(null);
        const result = cb();
        if (result) {
          this.ast.swapLocations(result, byref, result, this);
          result.byref = true;
        }
        return result;
      },
      /*
       * Reads a list of variables declarations
       *
       * ```ebnf
       * variable_declaration ::= T_VARIABLE ('=' expr)?*
       * variable_declarations ::= variable_declaration (',' variable_declaration)*
       * ```
       *
       * Sample code :
       * ```php
       * <?php static $a = 'hello', $b = 'world';
       * ```
       * @return {StaticVariable[]} Returns an array composed by a list of variables, or
       * assign values
       */
      read_variable_declarations: function() {
        return this.read_list(function() {
          const node = this.node("staticvariable");
          let variable = this.node("variable");
          if (this.expect(this.tok.T_VARIABLE)) {
            const name = this.text().substring(1);
            this.next();
            variable = variable(name, false);
          } else {
            variable = variable("#ERR", false);
          }
          if (this.token === "=") {
            return node(variable, this.next().read_expr());
          } else {
            return variable;
          }
        }, ",");
      },
      /*
       * Reads class extends
       */
      read_extends_from: function() {
        if (this.token === this.tok.T_EXTENDS) {
          return this.next().read_namespace_name();
        }
        return null;
      },
      /*
       * Reads interface extends list
       */
      read_interface_extends_list: function() {
        if (this.token === this.tok.T_EXTENDS) {
          return this.next().read_name_list();
        }
        return null;
      },
      /*
       * Reads implements list
       */
      read_implements_list: function() {
        if (this.token === this.tok.T_IMPLEMENTS) {
          return this.next().read_name_list();
        }
        return null;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/variable.js
var require_variable = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser/variable.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /*
       * Reads a variable
       *
       * ```ebnf
       *   variable ::= &? ...complex @todo
       * ```
       *
       * Some samples of parsed code :
       * ```php
       *  &$var                      // simple var
       *  $var                      // simple var
       *  classname::CONST_NAME     // dynamic class name with const retrieval
       *  foo()                     // function call
       *  $var->func()->property    // chained calls
       * ```
       */
      read_variable: function(read_only, encapsed) {
        let result;
        if (this.token === "&") {
          return this.read_byref(
            this.read_variable.bind(this, read_only, encapsed)
          );
        }
        if (this.is([this.tok.T_VARIABLE, "$"])) {
          result = this.read_reference_variable(encapsed);
        } else if (this.is([
          this.tok.T_NS_SEPARATOR,
          this.tok.T_STRING,
          this.tok.T_NAMESPACE
        ])) {
          result = this.node();
          const name = this.read_namespace_name();
          if (this.token != this.tok.T_DOUBLE_COLON && this.token != "(" && ["parentreference", "selfreference"].indexOf(name.kind) === -1) {
            const literal = name.name.toLowerCase();
            if (literal === "true") {
              result = name.destroy(result("boolean", true, name.name));
            } else if (literal === "false") {
              result = name.destroy(result("boolean", false, name.name));
            } else if (literal === "null") {
              result = name.destroy(result("nullkeyword", name.name));
            } else {
              result.destroy(name);
              result = name;
            }
          } else {
            result.destroy(name);
            result = name;
          }
        } else if (this.token === this.tok.T_STATIC) {
          result = this.node("staticreference");
          const raw = this.text();
          this.next();
          result = result(raw);
        } else {
          this.expect("VARIABLE");
        }
        if (this.token === this.tok.T_DOUBLE_COLON) {
          result = this.read_static_getter(result, encapsed);
        }
        return this.recursive_variable_chain_scan(result, read_only, encapsed);
      },
      // resolves a static call
      read_static_getter: function(what, encapsed) {
        const result = this.node("staticlookup");
        let offset, name;
        if (this.next().is([this.tok.T_VARIABLE, "$"])) {
          offset = this.read_reference_variable(encapsed);
        } else if (this.token === this.tok.T_STRING || this.token === this.tok.T_CLASS || this.version >= 700 && this.is("IDENTIFIER")) {
          offset = this.node("identifier");
          name = this.text();
          this.next();
          offset = offset(name);
        } else if (this.token === "{") {
          offset = this.node("literal");
          name = this.next().read_expr();
          this.expect("}") && this.next();
          offset = offset("literal", name, null);
          this.expect("(");
        } else {
          this.error([this.tok.T_VARIABLE, this.tok.T_STRING]);
          offset = this.node("identifier");
          name = this.text();
          this.next();
          offset = offset(name);
        }
        return result(what, offset);
      },
      read_what: function(is_static_lookup = false) {
        let what = null;
        let name = null;
        switch (this.next().token) {
          case this.tok.T_STRING:
            what = this.node("identifier");
            name = this.text();
            this.next();
            what = what(name);
            if (is_static_lookup && this.token === this.tok.T_OBJECT_OPERATOR) {
              this.error();
            }
            break;
          case this.tok.T_VARIABLE:
            what = this.node("variable");
            name = this.text().substring(1);
            this.next();
            what = what(name, false);
            break;
          case "$":
            what = this.node();
            this.next().expect(["$", "{", this.tok.T_VARIABLE]);
            if (this.token === "{") {
              name = this.next().read_expr();
              this.expect("}") && this.next();
              what = what("variable", name, true);
            } else {
              name = this.read_expr();
              what = what("variable", name, false);
            }
            break;
          case "{":
            what = this.node("encapsedpart");
            name = this.next().read_expr();
            this.expect("}") && this.next();
            what = what(name, "complex", false);
            break;
          default:
            this.error([this.tok.T_STRING, this.tok.T_VARIABLE, "$", "{"]);
            what = this.node("identifier");
            name = this.text();
            this.next();
            what = what(name);
            break;
        }
        return what;
      },
      recursive_variable_chain_scan: function(result, read_only, encapsed) {
        let node, offset;
        recursive_scan_loop: while (this.token != this.EOF) {
          switch (this.token) {
            case "(":
              if (read_only) {
                return result;
              } else {
                result = this.node("call")(result, this.read_argument_list());
              }
              break;
            case "[":
            case "{": {
              const backet = this.token;
              const isSquareBracket = backet === "[";
              node = this.node("offsetlookup");
              this.next();
              offset = false;
              if (encapsed) {
                offset = this.read_encaps_var_offset();
                this.expect(isSquareBracket ? "]" : "}") && this.next();
              } else {
                const isCallableVariable = isSquareBracket ? this.token !== "]" : this.token !== "}";
                if (isCallableVariable) {
                  offset = this.read_expr();
                  this.expect(isSquareBracket ? "]" : "}") && this.next();
                } else {
                  this.next();
                }
              }
              result = node(result, offset);
              break;
            }
            case this.tok.T_DOUBLE_COLON:
              if (result.kind === "staticlookup" && result.offset.kind === "identifier") {
                this.error();
              }
              node = this.node("staticlookup");
              result = node(result, this.read_what(true));
              break;
            case this.tok.T_OBJECT_OPERATOR: {
              node = this.node("propertylookup");
              result = node(result, this.read_what());
              break;
            }
            default:
              break recursive_scan_loop;
          }
        }
        return result;
      },
      /*
       * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
       */
      read_encaps_var_offset: function() {
        let offset = this.node();
        if (this.token === this.tok.T_STRING) {
          const text = this.text();
          this.next();
          offset = offset("identifier", text);
        } else if (this.token === this.tok.T_NUM_STRING) {
          const num = this.text();
          this.next();
          offset = offset("number", num, null);
        } else if (this.token === "-") {
          this.next();
          const num = -1 * this.text();
          this.expect(this.tok.T_NUM_STRING) && this.next();
          offset = offset("number", num, null);
        } else if (this.token === this.tok.T_VARIABLE) {
          const name = this.text().substring(1);
          this.next();
          offset = offset("variable", name, false);
        } else {
          this.expect([
            this.tok.T_STRING,
            this.tok.T_NUM_STRING,
            "-",
            this.tok.T_VARIABLE
          ]);
          const text = this.text();
          this.next();
          offset = offset("identifier", text);
        }
        return offset;
      },
      /*
       * ```ebnf
       *  reference_variable ::=  simple_variable ('[' OFFSET ']')* | '{' EXPR '}'
       * ```
       * <code>
       *  $foo[123];      // foo is an array ==> gets its entry
       *  $foo{1};        // foo is a string ==> get the 2nd char offset
       *  ${'foo'}[123];  // get the dynamic var $foo
       *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
       * </code>
       */
      read_reference_variable: function(encapsed) {
        let result = this.read_simple_variable();
        let offset;
        while (this.token != this.EOF) {
          const node = this.node();
          if (this.token == "{" && !encapsed) {
            offset = this.next().read_expr();
            this.expect("}") && this.next();
            result = node("offsetlookup", result, offset);
          } else {
            node.destroy();
            break;
          }
        }
        return result;
      },
      /*
       * ```ebnf
       *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
       * ```
       */
      read_simple_variable: function() {
        let result = this.node("variable");
        let name;
        if (this.expect([this.tok.T_VARIABLE, "$"]) && this.token === this.tok.T_VARIABLE) {
          name = this.text().substring(1);
          this.next();
          result = result(name, false);
        } else {
          if (this.token === "$") this.next();
          switch (this.token) {
            case "{": {
              const expr = this.next().read_expr();
              this.expect("}") && this.next();
              result = result(expr, true);
              break;
            }
            case "$":
              result = result(this.read_simple_variable(), false);
              break;
            case this.tok.T_VARIABLE: {
              name = this.text().substring(1);
              const node = this.node("variable");
              this.next();
              result = result(node(name, false), false);
              break;
            }
            default:
              this.error(["{", "$", this.tok.T_VARIABLE]);
              name = this.text();
              this.next();
              result = result(name, false);
          }
        }
        return result;
      }
    };
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser.js
var require_parser = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/parser.js"(exports2, module2) {
    "use strict";
    function isNumber(n) {
      return n != "." && n != "," && !isNaN(parseFloat(n)) && isFinite(n);
    }
    var Parser = function(lexer, ast) {
      this.lexer = lexer;
      this.ast = ast;
      this.tok = lexer.tok;
      this.EOF = lexer.EOF;
      this.token = null;
      this.prev = null;
      this.debug = false;
      this.version = 704;
      this.extractDoc = false;
      this.extractTokens = false;
      this.suppressErrors = false;
      const mapIt = function(item) {
        return [item, null];
      };
      this.entries = {
        // reserved_non_modifiers
        IDENTIFIER: new Map(
          [
            this.tok.T_ABSTRACT,
            this.tok.T_ARRAY,
            this.tok.T_AS,
            this.tok.T_BREAK,
            this.tok.T_CALLABLE,
            this.tok.T_CASE,
            this.tok.T_CATCH,
            this.tok.T_CLASS,
            this.tok.T_CLASS_C,
            this.tok.T_CLONE,
            this.tok.T_CONST,
            this.tok.T_CONTINUE,
            this.tok.T_DECLARE,
            this.tok.T_DEFAULT,
            this.tok.T_DIR,
            this.tok.T_DO,
            this.tok.T_ECHO,
            this.tok.T_ELSE,
            this.tok.T_ELSEIF,
            this.tok.T_EMPTY,
            this.tok.T_ENDDECLARE,
            this.tok.T_ENDFOR,
            this.tok.T_ENDFOREACH,
            this.tok.T_ENDIF,
            this.tok.T_ENDSWITCH,
            this.tok.T_ENDWHILE,
            this.tok.T_EVAL,
            this.tok.T_EXIT,
            this.tok.T_EXTENDS,
            this.tok.T_FILE,
            this.tok.T_FINAL,
            this.tok.T_FINALLY,
            this.tok.T_FN,
            this.tok.T_FOR,
            this.tok.T_FOREACH,
            this.tok.T_FUNC_C,
            this.tok.T_FUNCTION,
            this.tok.T_GLOBAL,
            this.tok.T_GOTO,
            this.tok.T_IF,
            this.tok.T_IMPLEMENTS,
            this.tok.T_INCLUDE,
            this.tok.T_INCLUDE_ONCE,
            this.tok.T_INSTANCEOF,
            this.tok.T_INSTEADOF,
            this.tok.T_INTERFACE,
            this.tok.T_ISSET,
            this.tok.T_LINE,
            this.tok.T_LIST,
            this.tok.T_LOGICAL_AND,
            this.tok.T_LOGICAL_OR,
            this.tok.T_LOGICAL_XOR,
            this.tok.T_METHOD_C,
            this.tok.T_NAMESPACE,
            this.tok.T_NEW,
            this.tok.T_NS_C,
            this.tok.T_PRINT,
            this.tok.T_PRIVATE,
            this.tok.T_PROTECTED,
            this.tok.T_PUBLIC,
            this.tok.T_REQUIRE,
            this.tok.T_REQUIRE_ONCE,
            this.tok.T_RETURN,
            this.tok.T_STATIC,
            this.tok.T_SWITCH,
            this.tok.T_THROW,
            this.tok.T_TRAIT,
            this.tok.T_TRY,
            this.tok.T_UNSET,
            this.tok.T_USE,
            this.tok.T_VAR,
            this.tok.T_WHILE,
            this.tok.T_YIELD
          ].map(mapIt)
        ),
        VARIABLE: new Map(
          [
            this.tok.T_VARIABLE,
            "$",
            "&",
            this.tok.T_NS_SEPARATOR,
            this.tok.T_STRING,
            this.tok.T_NAMESPACE,
            this.tok.T_STATIC
          ].map(mapIt)
        ),
        SCALAR: new Map(
          [
            this.tok.T_CONSTANT_ENCAPSED_STRING,
            this.tok.T_START_HEREDOC,
            this.tok.T_LNUMBER,
            this.tok.T_DNUMBER,
            this.tok.T_ARRAY,
            "[",
            this.tok.T_CLASS_C,
            this.tok.T_TRAIT_C,
            this.tok.T_FUNC_C,
            this.tok.T_METHOD_C,
            this.tok.T_LINE,
            this.tok.T_FILE,
            this.tok.T_DIR,
            this.tok.T_NS_C,
            '"',
            'b"',
            'B"',
            "-",
            this.tok.T_NS_SEPARATOR
          ].map(mapIt)
        ),
        T_MAGIC_CONST: new Map(
          [
            this.tok.T_CLASS_C,
            this.tok.T_TRAIT_C,
            this.tok.T_FUNC_C,
            this.tok.T_METHOD_C,
            this.tok.T_LINE,
            this.tok.T_FILE,
            this.tok.T_DIR,
            this.tok.T_NS_C
          ].map(mapIt)
        ),
        T_MEMBER_FLAGS: new Map(
          [
            this.tok.T_PUBLIC,
            this.tok.T_PRIVATE,
            this.tok.T_PROTECTED,
            this.tok.T_STATIC,
            this.tok.T_ABSTRACT,
            this.tok.T_FINAL
          ].map(mapIt)
        ),
        EOS: new Map([";", this.EOF, this.tok.T_INLINE_HTML].map(mapIt)),
        EXPR: new Map(
          [
            "@",
            "-",
            "+",
            "!",
            "~",
            "(",
            "`",
            this.tok.T_LIST,
            this.tok.T_CLONE,
            this.tok.T_INC,
            this.tok.T_DEC,
            this.tok.T_NEW,
            this.tok.T_ISSET,
            this.tok.T_EMPTY,
            this.tok.T_INCLUDE,
            this.tok.T_INCLUDE_ONCE,
            this.tok.T_REQUIRE,
            this.tok.T_REQUIRE_ONCE,
            this.tok.T_EVAL,
            this.tok.T_INT_CAST,
            this.tok.T_DOUBLE_CAST,
            this.tok.T_STRING_CAST,
            this.tok.T_ARRAY_CAST,
            this.tok.T_OBJECT_CAST,
            this.tok.T_BOOL_CAST,
            this.tok.T_UNSET_CAST,
            this.tok.T_EXIT,
            this.tok.T_PRINT,
            this.tok.T_YIELD,
            this.tok.T_STATIC,
            this.tok.T_FUNCTION,
            this.tok.T_FN,
            // using VARIABLES :
            this.tok.T_VARIABLE,
            "$",
            this.tok.T_NS_SEPARATOR,
            this.tok.T_STRING,
            // using SCALAR :
            this.tok.T_STRING,
            // @see variable.js line 45 > conflict with variable = shift/reduce :)
            this.tok.T_CONSTANT_ENCAPSED_STRING,
            this.tok.T_START_HEREDOC,
            this.tok.T_LNUMBER,
            this.tok.T_DNUMBER,
            this.tok.T_ARRAY,
            "[",
            this.tok.T_CLASS_C,
            this.tok.T_TRAIT_C,
            this.tok.T_FUNC_C,
            this.tok.T_METHOD_C,
            this.tok.T_LINE,
            this.tok.T_FILE,
            this.tok.T_DIR,
            this.tok.T_NS_C,
            '"',
            'b"',
            'B"',
            "-",
            this.tok.T_NS_SEPARATOR
          ].map(mapIt)
        )
      };
    };
    Parser.prototype.getTokenName = function(token) {
      if (!isNumber(token)) {
        return "'" + token + "'";
      } else {
        if (token == this.EOF) return "the end of file (EOF)";
        return this.lexer.engine.tokens.values[token];
      }
    };
    Parser.prototype.parse = function(code, filename) {
      this._errors = [];
      this.filename = filename || "eval";
      this.currentNamespace = [""];
      if (this.extractDoc) {
        this._docs = [];
      } else {
        this._docs = null;
      }
      if (this.extractTokens) {
        this._tokens = [];
      } else {
        this._tokens = null;
      }
      this._docIndex = 0;
      this._lastNode = null;
      this.lexer.setInput(code);
      this.lexer.all_tokens = this.extractTokens;
      this.lexer.comment_tokens = this.extractDoc;
      this.length = this.lexer._input.length;
      this.innerList = false;
      this.innerListForm = false;
      const program = this.node("program");
      const childs = [];
      this.next();
      while (this.token != this.EOF) {
        childs.push(this.read_start());
      }
      if (childs.length === 0 && this.extractDoc && this._docs.length > this._docIndex) {
        childs.push(this.node("noop")());
      }
      this.prev = [
        this.lexer.yylloc.last_line,
        this.lexer.yylloc.last_column,
        this.lexer.offset
      ];
      const result = program(childs, this._errors, this._docs, this._tokens);
      if (this.debug) {
        const errors = this.ast.checkNodes();
        if (errors.length > 0) {
          errors.forEach(function(error) {
            if (error.position) {
              console.log(
                "Node at line " + error.position.line + ", column " + error.position.column
              );
            }
            console.log(error.stack.join("\n"));
          });
          throw new Error("Some nodes are not closed");
        }
      }
      return result;
    };
    Parser.prototype.raiseError = function(message, msgExpect, expect, token) {
      message += " on line " + this.lexer.yylloc.first_line;
      if (!this.suppressErrors) {
        const err = new SyntaxError(
          message,
          this.filename,
          this.lexer.yylloc.first_line
        );
        err.lineNumber = this.lexer.yylloc.first_line;
        err.fileName = this.filename;
        err.columnNumber = this.lexer.yylloc.first_column;
        throw err;
      }
      const node = this.ast.prepare("error", null, this)(
        message,
        token,
        this.lexer.yylloc.first_line,
        expect
      );
      this._errors.push(node);
      return node;
    };
    Parser.prototype.error = function(expect) {
      let msg = "Parse Error : syntax error";
      let token = this.getTokenName(this.token);
      let msgExpect = "";
      if (this.token !== this.EOF) {
        if (isNumber(this.token)) {
          let symbol = this.text();
          if (symbol.length > 10) {
            symbol = symbol.substring(0, 7) + "...";
          }
          token = "'" + symbol + "' (" + token + ")";
        }
        msg += ", unexpected " + token;
      }
      if (expect && !Array.isArray(expect)) {
        if (isNumber(expect) || expect.length === 1) {
          msgExpect = ", expecting " + this.getTokenName(expect);
        }
        msg += msgExpect;
      }
      return this.raiseError(msg, msgExpect, expect, token);
    };
    Parser.prototype.node = function(name) {
      if (this.extractDoc) {
        let docs = null;
        if (this._docIndex < this._docs.length) {
          docs = this._docs.slice(this._docIndex);
          this._docIndex = this._docs.length;
          if (this.debug) {
            console.log(new Error("Append docs on " + name));
            console.log(docs);
          }
        }
        const node = this.ast.prepare(name, docs, this);
        node.postBuild = function(self) {
          if (this._docIndex < this._docs.length) {
            if (this._lastNode) {
              const offset = this.prev[2];
              let max = this._docIndex;
              for (; max < this._docs.length; max++) {
                if (this._docs[max].offset > offset) {
                  break;
                }
              }
              if (max > this._docIndex) {
                this._lastNode.setTrailingComments(
                  this._docs.slice(this._docIndex, max)
                );
                this._docIndex = max;
              }
            } else if (this.token === this.EOF) {
              self.setTrailingComments(this._docs.slice(this._docIndex));
              this._docIndex = this._docs.length;
            }
          }
          this._lastNode = self;
        }.bind(this);
        return node;
      }
      return this.ast.prepare(name, null, this);
    };
    Parser.prototype.expectEndOfStatement = function(node) {
      if (this.token === ";") {
        if (node && this.lexer.yytext === ";") {
          node.includeToken(this);
        }
      } else if (this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
        this.error(";");
        return false;
      }
      this.next();
      return true;
    };
    var ignoreStack = ["parser.next", "parser.node", "parser.showlog"];
    Parser.prototype.showlog = function() {
      const stack = new Error().stack.split("\n");
      let line;
      for (let offset = 2; offset < stack.length; offset++) {
        line = stack[offset].trim();
        let found = false;
        for (let i = 0; i < ignoreStack.length; i++) {
          if (line.substring(3, 3 + ignoreStack[i].length) === ignoreStack[i]) {
            found = true;
            break;
          }
        }
        if (!found) {
          break;
        }
      }
      console.log(
        "Line " + this.lexer.yylloc.first_line + " : " + this.getTokenName(this.token) + ">" + this.lexer.yytext + "< @-->" + line
      );
      return this;
    };
    Parser.prototype.expect = function(token) {
      if (Array.isArray(token)) {
        if (token.indexOf(this.token) === -1) {
          this.error(token);
          return false;
        }
      } else if (this.token != token) {
        this.error(token);
        return false;
      }
      return true;
    };
    Parser.prototype.text = function() {
      return this.lexer.yytext;
    };
    Parser.prototype.next = function() {
      if (this.token !== ";" || this.lexer.yytext === ";") {
        this.prev = [
          this.lexer.yylloc.last_line,
          this.lexer.yylloc.last_column,
          this.lexer.offset
        ];
      }
      this.lex();
      if (this.debug) {
        this.showlog();
      }
      if (this.extractDoc) {
        while (this.token === this.tok.T_COMMENT || this.token === this.tok.T_DOC_COMMENT) {
          if (this.token === this.tok.T_COMMENT) {
            this._docs.push(this.read_comment());
          } else {
            this._docs.push(this.read_doc_comment());
          }
        }
      }
      return this;
    };
    Parser.prototype.lex = function() {
      if (this.extractTokens) {
        do {
          this.token = this.lexer.lex() || this.EOF;
          if (this.token === this.EOF) return this;
          let entry = this.lexer.yytext;
          if (this.lexer.engine.tokens.values.hasOwnProperty(this.token)) {
            entry = [
              this.lexer.engine.tokens.values[this.token],
              entry,
              this.lexer.yylloc.first_line,
              this.lexer.yylloc.first_offset,
              this.lexer.offset
            ];
          } else {
            entry = [
              null,
              entry,
              this.lexer.yylloc.first_line,
              this.lexer.yylloc.first_offset,
              this.lexer.offset
            ];
          }
          this._tokens.push(entry);
          if (this.token === this.tok.T_CLOSE_TAG) {
            this.token = ";";
            return this;
          } else if (this.token === this.tok.T_OPEN_TAG_WITH_ECHO) {
            this.token = this.tok.T_ECHO;
            return this;
          }
        } while (this.token === this.tok.T_WHITESPACE || // ignore white space
        !this.extractDoc && (this.token === this.tok.T_COMMENT || // ignore single lines comments
        this.token === this.tok.T_DOC_COMMENT) || // ignore doc comments
        // ignore open tags
        this.token === this.tok.T_OPEN_TAG);
      } else {
        this.token = this.lexer.lex() || this.EOF;
      }
      return this;
    };
    Parser.prototype.is = function(type) {
      if (Array.isArray(type)) {
        return type.indexOf(this.token) !== -1;
      }
      return this.entries[type].has(this.token);
    };
    [
      require_array(),
      require_class(),
      require_comment(),
      require_expr(),
      require_function(),
      require_if(),
      require_loops(),
      require_main(),
      require_namespace(),
      require_scalar(),
      require_statement(),
      require_switch(),
      require_try(),
      require_utils3(),
      require_variable()
    ].forEach(function(ext) {
      for (const k in ext) {
        if (Parser.prototype.hasOwnProperty(k)) {
          throw new Error("Function " + k + " is already defined - collision");
        }
        Parser.prototype[k] = ext[k];
      }
    });
    module2.exports = Parser;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/tokens.js
var require_tokens2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/tokens.js"(exports2, module2) {
    "use strict";
    var TokenNames = {
      T_HALT_COMPILER: 101,
      T_USE: 102,
      T_ENCAPSED_AND_WHITESPACE: 103,
      T_OBJECT_OPERATOR: 104,
      T_STRING: 105,
      T_DOLLAR_OPEN_CURLY_BRACES: 106,
      T_STRING_VARNAME: 107,
      T_CURLY_OPEN: 108,
      T_NUM_STRING: 109,
      T_ISSET: 110,
      T_EMPTY: 111,
      T_INCLUDE: 112,
      T_INCLUDE_ONCE: 113,
      T_EVAL: 114,
      T_REQUIRE: 115,
      T_REQUIRE_ONCE: 116,
      T_NAMESPACE: 117,
      T_NS_SEPARATOR: 118,
      T_AS: 119,
      T_IF: 120,
      T_ENDIF: 121,
      T_WHILE: 122,
      T_DO: 123,
      T_FOR: 124,
      T_SWITCH: 125,
      T_BREAK: 126,
      T_CONTINUE: 127,
      T_RETURN: 128,
      T_GLOBAL: 129,
      T_STATIC: 130,
      T_ECHO: 131,
      T_INLINE_HTML: 132,
      T_UNSET: 133,
      T_FOREACH: 134,
      T_DECLARE: 135,
      T_TRY: 136,
      T_THROW: 137,
      T_GOTO: 138,
      T_FINALLY: 139,
      T_CATCH: 140,
      T_ENDDECLARE: 141,
      T_LIST: 142,
      T_CLONE: 143,
      T_PLUS_EQUAL: 144,
      T_MINUS_EQUAL: 145,
      T_MUL_EQUAL: 146,
      T_DIV_EQUAL: 147,
      T_CONCAT_EQUAL: 148,
      T_MOD_EQUAL: 149,
      T_AND_EQUAL: 150,
      T_OR_EQUAL: 151,
      T_XOR_EQUAL: 152,
      T_SL_EQUAL: 153,
      T_SR_EQUAL: 154,
      T_INC: 155,
      T_DEC: 156,
      T_BOOLEAN_OR: 157,
      T_BOOLEAN_AND: 158,
      T_LOGICAL_OR: 159,
      T_LOGICAL_AND: 160,
      T_LOGICAL_XOR: 161,
      T_SL: 162,
      T_SR: 163,
      T_IS_IDENTICAL: 164,
      T_IS_NOT_IDENTICAL: 165,
      T_IS_EQUAL: 166,
      T_IS_NOT_EQUAL: 167,
      T_IS_SMALLER_OR_EQUAL: 168,
      T_IS_GREATER_OR_EQUAL: 169,
      T_INSTANCEOF: 170,
      T_INT_CAST: 171,
      T_DOUBLE_CAST: 172,
      T_STRING_CAST: 173,
      T_ARRAY_CAST: 174,
      T_OBJECT_CAST: 175,
      T_BOOL_CAST: 176,
      T_UNSET_CAST: 177,
      T_EXIT: 178,
      T_PRINT: 179,
      T_YIELD: 180,
      T_YIELD_FROM: 181,
      T_FUNCTION: 182,
      T_DOUBLE_ARROW: 183,
      T_DOUBLE_COLON: 184,
      T_ARRAY: 185,
      T_CALLABLE: 186,
      T_CLASS: 187,
      T_ABSTRACT: 188,
      T_TRAIT: 189,
      T_FINAL: 190,
      T_EXTENDS: 191,
      T_INTERFACE: 192,
      T_IMPLEMENTS: 193,
      T_VAR: 194,
      T_PUBLIC: 195,
      T_PROTECTED: 196,
      T_PRIVATE: 197,
      T_CONST: 198,
      T_NEW: 199,
      T_INSTEADOF: 200,
      T_ELSEIF: 201,
      T_ELSE: 202,
      T_ENDSWITCH: 203,
      T_CASE: 204,
      T_DEFAULT: 205,
      T_ENDFOR: 206,
      T_ENDFOREACH: 207,
      T_ENDWHILE: 208,
      T_CONSTANT_ENCAPSED_STRING: 209,
      T_LNUMBER: 210,
      T_DNUMBER: 211,
      T_LINE: 212,
      T_FILE: 213,
      T_DIR: 214,
      T_TRAIT_C: 215,
      T_METHOD_C: 216,
      T_FUNC_C: 217,
      T_NS_C: 218,
      T_START_HEREDOC: 219,
      T_END_HEREDOC: 220,
      T_CLASS_C: 221,
      T_VARIABLE: 222,
      T_OPEN_TAG: 223,
      T_OPEN_TAG_WITH_ECHO: 224,
      T_CLOSE_TAG: 225,
      T_WHITESPACE: 226,
      T_COMMENT: 227,
      T_DOC_COMMENT: 228,
      T_ELLIPSIS: 229,
      T_COALESCE: 230,
      T_POW: 231,
      T_POW_EQUAL: 232,
      T_SPACESHIP: 233,
      T_COALESCE_EQUAL: 234,
      T_FN: 235
    };
    var tokens = {
      values: {
        101: "T_HALT_COMPILER",
        102: "T_USE",
        103: "T_ENCAPSED_AND_WHITESPACE",
        104: "T_OBJECT_OPERATOR",
        105: "T_STRING",
        106: "T_DOLLAR_OPEN_CURLY_BRACES",
        107: "T_STRING_VARNAME",
        108: "T_CURLY_OPEN",
        109: "T_NUM_STRING",
        110: "T_ISSET",
        111: "T_EMPTY",
        112: "T_INCLUDE",
        113: "T_INCLUDE_ONCE",
        114: "T_EVAL",
        115: "T_REQUIRE",
        116: "T_REQUIRE_ONCE",
        117: "T_NAMESPACE",
        118: "T_NS_SEPARATOR",
        119: "T_AS",
        120: "T_IF",
        121: "T_ENDIF",
        122: "T_WHILE",
        123: "T_DO",
        124: "T_FOR",
        125: "T_SWITCH",
        126: "T_BREAK",
        127: "T_CONTINUE",
        128: "T_RETURN",
        129: "T_GLOBAL",
        130: "T_STATIC",
        131: "T_ECHO",
        132: "T_INLINE_HTML",
        133: "T_UNSET",
        134: "T_FOREACH",
        135: "T_DECLARE",
        136: "T_TRY",
        137: "T_THROW",
        138: "T_GOTO",
        139: "T_FINALLY",
        140: "T_CATCH",
        141: "T_ENDDECLARE",
        142: "T_LIST",
        143: "T_CLONE",
        144: "T_PLUS_EQUAL",
        145: "T_MINUS_EQUAL",
        146: "T_MUL_EQUAL",
        147: "T_DIV_EQUAL",
        148: "T_CONCAT_EQUAL",
        149: "T_MOD_EQUAL",
        150: "T_AND_EQUAL",
        151: "T_OR_EQUAL",
        152: "T_XOR_EQUAL",
        153: "T_SL_EQUAL",
        154: "T_SR_EQUAL",
        155: "T_INC",
        156: "T_DEC",
        157: "T_BOOLEAN_OR",
        158: "T_BOOLEAN_AND",
        159: "T_LOGICAL_OR",
        160: "T_LOGICAL_AND",
        161: "T_LOGICAL_XOR",
        162: "T_SL",
        163: "T_SR",
        164: "T_IS_IDENTICAL",
        165: "T_IS_NOT_IDENTICAL",
        166: "T_IS_EQUAL",
        167: "T_IS_NOT_EQUAL",
        168: "T_IS_SMALLER_OR_EQUAL",
        169: "T_IS_GREATER_OR_EQUAL",
        170: "T_INSTANCEOF",
        171: "T_INT_CAST",
        172: "T_DOUBLE_CAST",
        173: "T_STRING_CAST",
        174: "T_ARRAY_CAST",
        175: "T_OBJECT_CAST",
        176: "T_BOOL_CAST",
        177: "T_UNSET_CAST",
        178: "T_EXIT",
        179: "T_PRINT",
        180: "T_YIELD",
        181: "T_YIELD_FROM",
        182: "T_FUNCTION",
        183: "T_DOUBLE_ARROW",
        184: "T_DOUBLE_COLON",
        185: "T_ARRAY",
        186: "T_CALLABLE",
        187: "T_CLASS",
        188: "T_ABSTRACT",
        189: "T_TRAIT",
        190: "T_FINAL",
        191: "T_EXTENDS",
        192: "T_INTERFACE",
        193: "T_IMPLEMENTS",
        194: "T_VAR",
        195: "T_PUBLIC",
        196: "T_PROTECTED",
        197: "T_PRIVATE",
        198: "T_CONST",
        199: "T_NEW",
        200: "T_INSTEADOF",
        201: "T_ELSEIF",
        202: "T_ELSE",
        203: "T_ENDSWITCH",
        204: "T_CASE",
        205: "T_DEFAULT",
        206: "T_ENDFOR",
        207: "T_ENDFOREACH",
        208: "T_ENDWHILE",
        209: "T_CONSTANT_ENCAPSED_STRING",
        210: "T_LNUMBER",
        211: "T_DNUMBER",
        212: "T_LINE",
        213: "T_FILE",
        214: "T_DIR",
        215: "T_TRAIT_C",
        216: "T_METHOD_C",
        217: "T_FUNC_C",
        218: "T_NS_C",
        219: "T_START_HEREDOC",
        220: "T_END_HEREDOC",
        221: "T_CLASS_C",
        222: "T_VARIABLE",
        223: "T_OPEN_TAG",
        224: "T_OPEN_TAG_WITH_ECHO",
        225: "T_CLOSE_TAG",
        226: "T_WHITESPACE",
        227: "T_COMMENT",
        228: "T_DOC_COMMENT",
        229: "T_ELLIPSIS",
        230: "T_COALESCE",
        231: "T_POW",
        232: "T_POW_EQUAL",
        233: "T_SPACESHIP",
        234: "T_COALESCE_EQUAL",
        235: "T_FN"
      },
      names: TokenNames
    };
    module2.exports = Object.freeze(tokens);
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/location.js
var require_location = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/location.js"(exports2, module2) {
    "use strict";
    var Location = function(source, start, end) {
      this.source = source;
      this.start = start;
      this.end = end;
    };
    module2.exports = Location;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/position.js
var require_position = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/position.js"(exports2, module2) {
    "use strict";
    var Position2 = function(line, column, offset) {
      this.line = line;
      this.column = column;
      this.offset = offset;
    };
    module2.exports = Position2;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/node.js
var require_node = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/node.js"(exports2, module2) {
    "use strict";
    var Node = function Node2(kind, docs, location) {
      this.kind = kind;
      if (docs) {
        this.leadingComments = docs;
      }
      if (location) {
        this.loc = location;
      }
    };
    Node.prototype.setTrailingComments = function(docs) {
      this.trailingComments = docs;
    };
    Node.prototype.destroy = function(node) {
      if (!node) {
        throw new Error(
          "Node already initialized, you must swap with another node"
        );
      }
      if (this.leadingComments) {
        if (node.leadingComments) {
          node.leadingComments = Array.concat(
            this.leadingComments,
            node.leadingComments
          );
        } else {
          node.leadingComments = this.leadingComments;
        }
      }
      if (this.trailingComments) {
        if (node.trailingComments) {
          node.trailingComments = Array.concat(
            this.trailingComments,
            node.trailingComments
          );
        } else {
          node.trailingComments = this.trailingComments;
        }
      }
      return node;
    };
    Node.prototype.includeToken = function(parser) {
      if (this.loc) {
        if (this.loc.end) {
          this.loc.end.line = parser.lexer.yylloc.last_line;
          this.loc.end.column = parser.lexer.yylloc.last_column;
          this.loc.end.offset = parser.lexer.offset;
        }
        if (parser.ast.withSource) {
          this.loc.source = parser.lexer._input.substring(
            this.loc.start.offset,
            parser.lexer.offset
          );
        }
      }
      return this;
    };
    Node.extends = function(type, constructor) {
      constructor.prototype = Object.create(this.prototype);
      constructor.extends = this.extends;
      constructor.prototype.constructor = constructor;
      constructor.kind = type;
      return constructor;
    };
    module2.exports = Node;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/expression.js
var require_expression = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/expression.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "expression";
    module2.exports = Node.extends(KIND, function Expression(kind, docs, location) {
      Node.apply(this, [kind || KIND, docs, location]);
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/array.js
var require_array2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/array.js"(exports2, module2) {
    "use strict";
    var Expr = require_expression();
    var KIND = "array";
    module2.exports = Expr.extends(
      KIND,
      function Array2(shortForm, items, docs, location) {
        Expr.apply(this, [KIND, docs, location]);
        this.items = items;
        this.shortForm = shortForm;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/arrowfunc.js
var require_arrowfunc = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/arrowfunc.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "arrowfunc";
    module2.exports = Expression.extends(
      KIND,
      function Closure(args, byref, body, type, nullable, isStatic, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.arguments = args;
        this.byref = byref;
        this.body = body;
        this.type = type;
        this.nullable = nullable;
        this.isStatic = isStatic || false;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/assign.js
var require_assign = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/assign.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "assign";
    module2.exports = Expression.extends(
      KIND,
      function Assign(left, right, operator, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.left = left;
        this.right = right;
        this.operator = operator;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/assignref.js
var require_assignref = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/assignref.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "assignref";
    module2.exports = Expression.extends(
      KIND,
      function AssignRef(left, right, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.left = left;
        this.right = right;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/operation.js
var require_operation = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/operation.js"(exports2, module2) {
    "use strict";
    var Expr = require_expression();
    var KIND = "operation";
    module2.exports = Expr.extends(KIND, function Operation(kind, docs, location) {
      Expr.apply(this, [kind || KIND, docs, location]);
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/bin.js
var require_bin = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/bin.js"(exports2, module2) {
    "use strict";
    var Operation = require_operation();
    var KIND = "bin";
    module2.exports = Operation.extends(
      KIND,
      function Bin(type, left, right, docs, location) {
        Operation.apply(this, [KIND, docs, location]);
        this.type = type;
        this.left = left;
        this.right = right;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/statement.js
var require_statement2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/statement.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "statement";
    module2.exports = Node.extends(KIND, function Statement(kind, docs, location) {
      Node.apply(this, [kind || KIND, docs, location]);
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/block.js
var require_block = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/block.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "block";
    module2.exports = Statement.extends(
      KIND,
      function Block(kind, children, docs, location) {
        Statement.apply(this, [kind || KIND, docs, location]);
        this.children = children.filter(Boolean);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/literal.js
var require_literal = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/literal.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "literal";
    module2.exports = Expression.extends(
      KIND,
      function Literal(kind, value, raw, docs, location) {
        Expression.apply(this, [kind || KIND, docs, location]);
        this.value = value;
        if (raw) {
          this.raw = raw;
        }
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/boolean.js
var require_boolean = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/boolean.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "boolean";
    module2.exports = Literal.extends(
      KIND,
      function Boolean2(value, raw, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/break.js
var require_break = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/break.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "break";
    module2.exports = Statement.extends(KIND, function Break(level, docs, location) {
      Statement.apply(this, [KIND, docs, location]);
      this.level = level;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/byref.js
var require_byref = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/byref.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "byref";
    module2.exports = Expression.extends(KIND, function ByRef(what, docs, location) {
      Expression.apply(this, [KIND, docs, location]);
      this.what = what;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/call.js
var require_call = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/call.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "call";
    module2.exports = Expression.extends(
      KIND,
      function Call(what, args, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.what = what;
        this.arguments = args;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/case.js
var require_case = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/case.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "case";
    module2.exports = Statement.extends(
      KIND,
      function Case(test, body, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.test = test;
        this.body = body;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/cast.js
var require_cast = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/cast.js"(exports2, module2) {
    "use strict";
    var Operation = require_operation();
    var KIND = "cast";
    module2.exports = Operation.extends(
      KIND,
      function Cast(type, raw, expr, docs, location) {
        Operation.apply(this, [KIND, docs, location]);
        this.type = type;
        this.raw = raw;
        this.expr = expr;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/catch.js
var require_catch = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/catch.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "catch";
    module2.exports = Statement.extends(
      KIND,
      function Catch(body, what, variable, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.body = body;
        this.what = what;
        this.variable = variable;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/declaration.js
var require_declaration = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/declaration.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "declaration";
    var IS_UNDEFINED = "";
    var IS_PUBLIC = "public";
    var IS_PROTECTED = "protected";
    var IS_PRIVATE = "private";
    var Declaration = Statement.extends(
      KIND,
      function Declaration2(kind, name, docs, location) {
        Statement.apply(this, [kind || KIND, docs, location]);
        this.name = name;
      }
    );
    Declaration.prototype.parseFlags = function(flags) {
      this.isAbstract = flags[2] === 1;
      this.isFinal = flags[2] === 2;
      if (this.kind !== "class") {
        if (flags[0] === -1) {
          this.visibility = IS_UNDEFINED;
        } else if (flags[0] === null) {
          this.visibility = null;
        } else if (flags[0] === 0) {
          this.visibility = IS_PUBLIC;
        } else if (flags[0] === 1) {
          this.visibility = IS_PROTECTED;
        } else if (flags[0] === 2) {
          this.visibility = IS_PRIVATE;
        }
        this.isStatic = flags[1] === 1;
      }
    };
    module2.exports = Declaration;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/class.js
var require_class2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/class.js"(exports2, module2) {
    "use strict";
    var Declaration = require_declaration();
    var KIND = "class";
    module2.exports = Declaration.extends(
      KIND,
      function Class(name, ext, impl, body, flags, docs, location) {
        Declaration.apply(this, [KIND, name, docs, location]);
        this.isAnonymous = name ? false : true;
        this.extends = ext;
        this.implements = impl;
        this.body = body;
        this.parseFlags(flags);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/constantstatement.js
var require_constantstatement = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/constantstatement.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "constantstatement";
    module2.exports = Statement.extends(
      KIND,
      function ConstantStatement(kind, constants, docs, location) {
        Statement.apply(this, [kind || KIND, docs, location]);
        this.constants = constants;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/classconstant.js
var require_classconstant = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/classconstant.js"(exports2, module2) {
    "use strict";
    var ConstantStatement = require_constantstatement();
    var KIND = "classconstant";
    var IS_UNDEFINED = "";
    var IS_PUBLIC = "public";
    var IS_PROTECTED = "protected";
    var IS_PRIVATE = "private";
    var ClassConstant = ConstantStatement.extends(
      KIND,
      function ClassConstant2(kind, constants, flags, docs, location) {
        ConstantStatement.apply(this, [kind || KIND, constants, docs, location]);
        this.parseFlags(flags);
      }
    );
    ClassConstant.prototype.parseFlags = function(flags) {
      if (flags[0] === -1) {
        this.visibility = IS_UNDEFINED;
      } else if (flags[0] === null) {
        this.visibility = null;
      } else if (flags[0] === 0) {
        this.visibility = IS_PUBLIC;
      } else if (flags[0] === 1) {
        this.visibility = IS_PROTECTED;
      } else if (flags[0] === 2) {
        this.visibility = IS_PRIVATE;
      }
    };
    module2.exports = ClassConstant;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/clone.js
var require_clone = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/clone.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "clone";
    module2.exports = Expression.extends(KIND, function Clone(what, docs, location) {
      Expression.apply(this, [KIND, docs, location]);
      this.what = what;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/closure.js
var require_closure = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/closure.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "closure";
    module2.exports = Expression.extends(
      KIND,
      function Closure(args, byref, uses, type, nullable, isStatic, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.uses = uses;
        this.arguments = args;
        this.byref = byref;
        this.type = type;
        this.nullable = nullable;
        this.isStatic = isStatic || false;
        this.body = null;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/comment.js
var require_comment2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/comment.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    module2.exports = Node.extends(
      "comment",
      function Comment(kind, value, docs, location) {
        Node.apply(this, [kind, docs, location]);
        this.value = value;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/commentblock.js
var require_commentblock = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/commentblock.js"(exports2, module2) {
    "use strict";
    var Comment = require_comment2();
    var KIND = "commentblock";
    module2.exports = Comment.extends(
      KIND,
      function CommentBlock(value, docs, location) {
        Comment.apply(this, [KIND, value, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/commentline.js
var require_commentline = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/commentline.js"(exports2, module2) {
    "use strict";
    var Comment = require_comment2();
    var KIND = "commentline";
    module2.exports = Comment.extends(
      KIND,
      function CommentLine(value, docs, location) {
        Comment.apply(this, [KIND, value, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/constant.js
var require_constant = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/constant.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "constant";
    module2.exports = Node.extends(
      KIND,
      function Constant(name, value, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.name = name;
        this.value = value;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/continue.js
var require_continue = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/continue.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "continue";
    module2.exports = Statement.extends(
      KIND,
      function Continue(level, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.level = level;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/declare.js
var require_declare = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/declare.js"(exports2, module2) {
    "use strict";
    var Block = require_block();
    var KIND = "declare";
    var Declare = Block.extends(
      KIND,
      function Declare2(directives, body, mode, docs, location) {
        Block.apply(this, [KIND, body, docs, location]);
        this.directives = directives;
        this.mode = mode;
      }
    );
    Declare.MODE_SHORT = "short";
    Declare.MODE_BLOCK = "block";
    Declare.MODE_NONE = "none";
    module2.exports = Declare;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/declaredirective.js
var require_declaredirective = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/declaredirective.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "declaredirective";
    module2.exports = Node.extends(
      KIND,
      function DeclareDirective(key, value, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.key = key;
        this.value = value;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/do.js
var require_do = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/do.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "do";
    module2.exports = Statement.extends(
      KIND,
      function Do(test, body, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.test = test;
        this.body = body;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/echo.js
var require_echo = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/echo.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "echo";
    module2.exports = Statement.extends(
      KIND,
      function Echo(expressions, shortForm, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.shortForm = shortForm;
        this.expressions = expressions;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/empty.js
var require_empty = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/empty.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "empty";
    module2.exports = Expression.extends(
      KIND,
      function Empty(expression, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.expression = expression;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/encapsed.js
var require_encapsed = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/encapsed.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "encapsed";
    var Encapsed = Literal.extends(
      KIND,
      function Encapsed2(value, raw, type, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
        this.type = type;
      }
    );
    Encapsed.TYPE_STRING = "string";
    Encapsed.TYPE_SHELL = "shell";
    Encapsed.TYPE_HEREDOC = "heredoc";
    Encapsed.TYPE_OFFSET = "offset";
    module2.exports = Encapsed;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/encapsedpart.js
var require_encapsedpart = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/encapsedpart.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "encapsedpart";
    module2.exports = Expression.extends(
      KIND,
      function EncapsedPart(expression, syntax, curly, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.expression = expression;
        this.syntax = syntax;
        this.curly = curly;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/entry.js
var require_entry = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/entry.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "entry";
    module2.exports = Expression.extends(
      KIND,
      function Entry(key, value, byRef, unpack, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.key = key;
        this.value = value;
        this.byRef = byRef;
        this.unpack = unpack;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/error.js
var require_error = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/error.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "error";
    module2.exports = Node.extends(
      KIND,
      function Error2(message, token, line, expected, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.message = message;
        this.token = token;
        this.line = line;
        this.expected = expected;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/eval.js
var require_eval = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/eval.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "eval";
    module2.exports = Expression.extends(
      KIND,
      function Eval(source, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.source = source;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/exit.js
var require_exit = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/exit.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "exit";
    module2.exports = Expression.extends(
      KIND,
      function Exit(expression, useDie, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.expression = expression;
        this.useDie = useDie;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/expressionstatement.js
var require_expressionstatement = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/expressionstatement.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "expressionstatement";
    module2.exports = Statement.extends(
      KIND,
      function ExpressionStatement(expr, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.expression = expr;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/for.js
var require_for = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/for.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "for";
    module2.exports = Statement.extends(
      KIND,
      function For(init, test, increment, body, shortForm, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.init = init;
        this.test = test;
        this.increment = increment;
        this.shortForm = shortForm;
        this.body = body;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/foreach.js
var require_foreach = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/foreach.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "foreach";
    module2.exports = Statement.extends(
      KIND,
      function Foreach(source, key, value, body, shortForm, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.source = source;
        this.key = key;
        this.value = value;
        this.shortForm = shortForm;
        this.body = body;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/function.js
var require_function2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/function.js"(exports2, module2) {
    "use strict";
    var Declaration = require_declaration();
    var KIND = "function";
    module2.exports = Declaration.extends(
      KIND,
      function _Function(name, args, byref, type, nullable, docs, location) {
        Declaration.apply(this, [KIND, name, docs, location]);
        this.arguments = args;
        this.byref = byref;
        this.type = type;
        this.nullable = nullable;
        this.body = null;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/global.js
var require_global = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/global.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "global";
    module2.exports = Statement.extends(
      KIND,
      function Global(items, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.items = items;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/goto.js
var require_goto = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/goto.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "goto";
    module2.exports = Statement.extends(KIND, function Goto(label, docs, location) {
      Statement.apply(this, [KIND, docs, location]);
      this.label = label;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/halt.js
var require_halt = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/halt.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "halt";
    module2.exports = Statement.extends(KIND, function Halt(after, docs, location) {
      Statement.apply(this, [KIND, docs, location]);
      this.after = after;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/identifier.js
var require_identifier = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/identifier.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "identifier";
    var Identifier = Node.extends(
      KIND,
      function Identifier2(name, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.name = name;
      }
    );
    module2.exports = Identifier;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/if.js
var require_if2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/if.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "if";
    module2.exports = Statement.extends(
      KIND,
      function If(test, body, alternate, shortForm, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.test = test;
        this.body = body;
        this.alternate = alternate;
        this.shortForm = shortForm;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/include.js
var require_include = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/include.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "include";
    module2.exports = Expression.extends(
      KIND,
      function Include(once, require2, target, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.once = once;
        this.require = require2;
        this.target = target;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/inline.js
var require_inline = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/inline.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "inline";
    module2.exports = Literal.extends(
      KIND,
      function Inline(value, raw, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/interface.js
var require_interface = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/interface.js"(exports2, module2) {
    "use strict";
    var Declaration = require_declaration();
    var KIND = "interface";
    module2.exports = Declaration.extends(
      KIND,
      function Interface(name, ext, body, docs, location) {
        Declaration.apply(this, [KIND, name, docs, location]);
        this.extends = ext;
        this.body = body;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/isset.js
var require_isset = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/isset.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "isset";
    module2.exports = Expression.extends(
      KIND,
      function Isset(variables, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.variables = variables;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/label.js
var require_label = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/label.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "label";
    module2.exports = Statement.extends(KIND, function Label(name, docs, location) {
      Statement.apply(this, [KIND, docs, location]);
      this.name = name;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/list.js
var require_list = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/list.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "list";
    module2.exports = Expression.extends(
      KIND,
      function List(items, shortForm, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.items = items;
        this.shortForm = shortForm;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/lookup.js
var require_lookup = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/lookup.js"(exports2, module2) {
    "use strict";
    var Expr = require_expression();
    var KIND = "lookup";
    module2.exports = Expr.extends(
      KIND,
      function Lookup(kind, what, offset, docs, location) {
        Expr.apply(this, [kind || KIND, docs, location]);
        this.what = what;
        this.offset = offset;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/magic.js
var require_magic = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/magic.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "magic";
    module2.exports = Literal.extends(
      KIND,
      function Magic(value, raw, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/method.js
var require_method = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/method.js"(exports2, module2) {
    "use strict";
    var Function_ = require_function2();
    var KIND = "method";
    module2.exports = Function_.extends(KIND, function Method() {
      Function_.apply(this, arguments);
      this.kind = KIND;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/reference.js
var require_reference = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/reference.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "reference";
    var Reference = Node.extends(KIND, function Reference2(kind, docs, location) {
      Node.apply(this, [kind || KIND, docs, location]);
    });
    module2.exports = Reference;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/name.js
var require_name = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/name.js"(exports2, module2) {
    "use strict";
    var Reference = require_reference();
    var KIND = "name";
    var Name = Reference.extends(
      KIND,
      function Name2(name, isRelative, docs, location) {
        Reference.apply(this, [KIND, docs, location]);
        if (isRelative) {
          this.resolution = Name2.RELATIVE_NAME;
        } else if (name.length === 1) {
          this.resolution = Name2.UNQUALIFIED_NAME;
        } else if (!name[0]) {
          this.resolution = Name2.FULL_QUALIFIED_NAME;
        } else {
          this.resolution = Name2.QUALIFIED_NAME;
        }
        this.name = name.join("\\");
      }
    );
    Name.UNQUALIFIED_NAME = "uqn";
    Name.QUALIFIED_NAME = "qn";
    Name.FULL_QUALIFIED_NAME = "fqn";
    Name.RELATIVE_NAME = "rn";
    module2.exports = Name;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/namespace.js
var require_namespace2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/namespace.js"(exports2, module2) {
    "use strict";
    var Block = require_block();
    var KIND = "namespace";
    module2.exports = Block.extends(
      KIND,
      function Namespace(name, children, withBrackets, docs, location) {
        Block.apply(this, [KIND, children, docs, location]);
        this.name = name;
        this.withBrackets = withBrackets || false;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/new.js
var require_new = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/new.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "new";
    module2.exports = Expression.extends(
      KIND,
      function New(what, args, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.what = what;
        this.arguments = args;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/noop.js
var require_noop = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/noop.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "noop";
    module2.exports = Node.extends(KIND, function Noop(docs, location) {
      Node.apply(this, [KIND, docs, location]);
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/nowdoc.js
var require_nowdoc = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/nowdoc.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "nowdoc";
    module2.exports = Literal.extends(
      KIND,
      function Nowdoc(value, raw, label, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
        this.label = label;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/nullkeyword.js
var require_nullkeyword = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/nullkeyword.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "nullkeyword";
    module2.exports = Node.extends(KIND, function NullKeyword(raw, docs, location) {
      Node.apply(this, [KIND, docs, location]);
      this.raw = raw;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/number.js
var require_number = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/number.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "number";
    module2.exports = Literal.extends(
      KIND,
      function Number2(value, raw, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/offsetlookup.js
var require_offsetlookup = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/offsetlookup.js"(exports2, module2) {
    "use strict";
    var Lookup = require_lookup();
    var KIND = "offsetlookup";
    module2.exports = Lookup.extends(
      KIND,
      function OffsetLookup(what, offset, docs, location) {
        Lookup.apply(this, [KIND, what, offset, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/parameter.js
var require_parameter = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/parameter.js"(exports2, module2) {
    "use strict";
    var Declaration = require_declaration();
    var KIND = "parameter";
    module2.exports = Declaration.extends(
      KIND,
      function Parameter(name, type, value, isRef, isVariadic, nullable, docs, location) {
        Declaration.apply(this, [KIND, name, docs, location]);
        this.value = value;
        this.type = type;
        this.byref = isRef;
        this.variadic = isVariadic;
        this.nullable = nullable;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/parentreference.js
var require_parentreference = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/parentreference.js"(exports2, module2) {
    "use strict";
    var Reference = require_reference();
    var KIND = "parentreference";
    var ParentReference = Reference.extends(
      KIND,
      function ParentReference2(raw, docs, location) {
        Reference.apply(this, [KIND, docs, location]);
        this.raw = raw;
      }
    );
    module2.exports = ParentReference;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/post.js
var require_post = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/post.js"(exports2, module2) {
    "use strict";
    var Operation = require_operation();
    var KIND = "post";
    module2.exports = Operation.extends(
      KIND,
      function Post(type, what, docs, location) {
        Operation.apply(this, [KIND, docs, location]);
        this.type = type;
        this.what = what;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/pre.js
var require_pre = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/pre.js"(exports2, module2) {
    "use strict";
    var Operation = require_operation();
    var KIND = "pre";
    module2.exports = Operation.extends(
      KIND,
      function Pre(type, what, docs, location) {
        Operation.apply(this, [KIND, docs, location]);
        this.type = type;
        this.what = what;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/print.js
var require_print = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/print.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "print";
    module2.exports = Expression.extends(
      KIND,
      function Print(expression, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.expression = expression;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/program.js
var require_program = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/program.js"(exports2, module2) {
    "use strict";
    var Block = require_block();
    var KIND = "program";
    module2.exports = Block.extends(
      KIND,
      function Program(children, errors, comments, tokens, docs, location) {
        Block.apply(this, [KIND, children, docs, location]);
        this.errors = errors;
        if (comments) {
          this.comments = comments;
        }
        if (tokens) {
          this.tokens = tokens;
        }
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/property.js
var require_property2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/property.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "property";
    module2.exports = Statement.extends(
      KIND,
      function Property(name, value, nullable, type, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.name = name;
        this.value = value;
        this.nullable = nullable;
        this.type = type;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/propertylookup.js
var require_propertylookup = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/propertylookup.js"(exports2, module2) {
    "use strict";
    var Lookup = require_lookup();
    var KIND = "propertylookup";
    module2.exports = Lookup.extends(
      KIND,
      function PropertyLookup(what, offset, docs, location) {
        Lookup.apply(this, [KIND, what, offset, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/propertystatement.js
var require_propertystatement = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/propertystatement.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "propertystatement";
    var IS_UNDEFINED = "";
    var IS_PUBLIC = "public";
    var IS_PROTECTED = "protected";
    var IS_PRIVATE = "private";
    var PropertyStatement = Statement.extends(
      KIND,
      function PropertyStatement2(kind, properties, flags, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.properties = properties;
        this.parseFlags(flags);
      }
    );
    PropertyStatement.prototype.parseFlags = function(flags) {
      if (flags[0] === -1) {
        this.visibility = IS_UNDEFINED;
      } else if (flags[0] === null) {
        this.visibility = null;
      } else if (flags[0] === 0) {
        this.visibility = IS_PUBLIC;
      } else if (flags[0] === 1) {
        this.visibility = IS_PROTECTED;
      } else if (flags[0] === 2) {
        this.visibility = IS_PRIVATE;
      }
      this.isStatic = flags[1] === 1;
    };
    module2.exports = PropertyStatement;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/retif.js
var require_retif = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/retif.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "retif";
    module2.exports = Expression.extends(
      KIND,
      function RetIf(test, trueExpr, falseExpr, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.test = test;
        this.trueExpr = trueExpr;
        this.falseExpr = falseExpr;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/return.js
var require_return = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/return.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "return";
    module2.exports = Statement.extends(KIND, function Return(expr, docs, location) {
      Statement.apply(this, [KIND, docs, location]);
      this.expr = expr;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/selfreference.js
var require_selfreference = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/selfreference.js"(exports2, module2) {
    "use strict";
    var Reference = require_reference();
    var KIND = "selfreference";
    var SelfReference = Reference.extends(
      KIND,
      function SelfReference2(raw, docs, location) {
        Reference.apply(this, [KIND, docs, location]);
        this.raw = raw;
      }
    );
    module2.exports = SelfReference;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/silent.js
var require_silent = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/silent.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "silent";
    module2.exports = Expression.extends(
      KIND,
      function Silent(expr, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.expr = expr;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/static.js
var require_static = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/static.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "static";
    module2.exports = Statement.extends(
      KIND,
      function Static(variables, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.variables = variables;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/staticvariable.js
var require_staticvariable = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/staticvariable.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "staticvariable";
    module2.exports = Node.extends(
      KIND,
      function StaticVariable(variable, defaultValue, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.variable = variable;
        this.defaultValue = defaultValue;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/staticlookup.js
var require_staticlookup = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/staticlookup.js"(exports2, module2) {
    "use strict";
    var Lookup = require_lookup();
    var KIND = "staticlookup";
    module2.exports = Lookup.extends(
      KIND,
      function StaticLookup(what, offset, docs, location) {
        Lookup.apply(this, [KIND, what, offset, docs, location]);
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/staticreference.js
var require_staticreference = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/staticreference.js"(exports2, module2) {
    "use strict";
    var Reference = require_reference();
    var KIND = "staticreference";
    var StaticReference = Reference.extends(
      KIND,
      function StaticReference2(raw, docs, location) {
        Reference.apply(this, [KIND, docs, location]);
        this.raw = raw;
      }
    );
    module2.exports = StaticReference;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/string.js
var require_string = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/string.js"(exports2, module2) {
    "use strict";
    var Literal = require_literal();
    var KIND = "string";
    module2.exports = Literal.extends(
      KIND,
      function String2(isDoubleQuote, value, unicode, raw, docs, location) {
        Literal.apply(this, [KIND, value, raw, docs, location]);
        this.unicode = unicode;
        this.isDoubleQuote = isDoubleQuote;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/switch.js
var require_switch2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/switch.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "switch";
    module2.exports = Statement.extends(
      KIND,
      function Switch(test, body, shortForm, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.test = test;
        this.body = body;
        this.shortForm = shortForm;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/throw.js
var require_throw = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/throw.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "throw";
    module2.exports = Statement.extends(KIND, function Throw(what, docs, location) {
      Statement.apply(this, [KIND, docs, location]);
      this.what = what;
    });
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/trait.js
var require_trait = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/trait.js"(exports2, module2) {
    "use strict";
    var Declaration = require_declaration();
    var KIND = "trait";
    module2.exports = Declaration.extends(
      KIND,
      function Trait(name, body, docs, location) {
        Declaration.apply(this, [KIND, name, docs, location]);
        this.body = body;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/traitalias.js
var require_traitalias = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/traitalias.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "traitalias";
    var IS_UNDEFINED = "";
    var IS_PUBLIC = "public";
    var IS_PROTECTED = "protected";
    var IS_PRIVATE = "private";
    module2.exports = Node.extends(
      KIND,
      function TraitAlias(trait, method, as, flags, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.trait = trait;
        this.method = method;
        this.as = as;
        this.visibility = IS_UNDEFINED;
        if (flags) {
          if (flags[0] === 0) {
            this.visibility = IS_PUBLIC;
          } else if (flags[0] === 1) {
            this.visibility = IS_PROTECTED;
          } else if (flags[0] === 2) {
            this.visibility = IS_PRIVATE;
          }
        }
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/traitprecedence.js
var require_traitprecedence = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/traitprecedence.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "traitprecedence";
    module2.exports = Node.extends(
      KIND,
      function TraitPrecedence(trait, method, instead, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.trait = trait;
        this.method = method;
        this.instead = instead;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/traituse.js
var require_traituse = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/traituse.js"(exports2, module2) {
    "use strict";
    var Node = require_node();
    var KIND = "traituse";
    module2.exports = Node.extends(
      KIND,
      function TraitUse(traits, adaptations, docs, location) {
        Node.apply(this, [KIND, docs, location]);
        this.traits = traits;
        this.adaptations = adaptations;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/try.js
var require_try2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/try.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "try";
    module2.exports = Statement.extends(
      KIND,
      function Try(body, catches, always, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.body = body;
        this.catches = catches;
        this.always = always;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/typereference.js
var require_typereference = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/typereference.js"(exports2, module2) {
    "use strict";
    var Reference = require_reference();
    var KIND = "typereference";
    var TypeReference = Reference.extends(
      KIND,
      function TypeReference2(name, raw, docs, location) {
        Reference.apply(this, [KIND, docs, location]);
        this.name = name;
        this.raw = raw;
      }
    );
    TypeReference.types = [
      "int",
      "float",
      "string",
      "bool",
      "object",
      "array",
      "callable",
      "iterable",
      "void"
    ];
    module2.exports = TypeReference;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/unary.js
var require_unary = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/unary.js"(exports2, module2) {
    "use strict";
    var Operation = require_operation();
    var KIND = "unary";
    module2.exports = Operation.extends(
      KIND,
      function Unary(type, what, docs, location) {
        Operation.apply(this, [KIND, docs, location]);
        this.type = type;
        this.what = what;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/unset.js
var require_unset = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/unset.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "unset";
    module2.exports = Statement.extends(
      KIND,
      function Unset(variables, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.variables = variables;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/usegroup.js
var require_usegroup = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/usegroup.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "usegroup";
    module2.exports = Statement.extends(
      KIND,
      function UseGroup(name, type, items, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.name = name;
        this.type = type;
        this.items = items;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/useitem.js
var require_useitem = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/useitem.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "useitem";
    var UseItem = Statement.extends(
      KIND,
      function UseItem2(name, alias, type, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.name = name;
        this.alias = alias;
        this.type = type;
      }
    );
    UseItem.TYPE_CONST = "const";
    UseItem.TYPE_FUNCTION = "function";
    module2.exports = UseItem;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/variable.js
var require_variable2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/variable.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "variable";
    module2.exports = Expression.extends(
      KIND,
      function Variable(name, curly, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.name = name;
        this.curly = curly || false;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/variadic.js
var require_variadic = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/variadic.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "variadic";
    module2.exports = Expression.extends(
      KIND,
      function variadic(what, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.what = what;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/while.js
var require_while = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/while.js"(exports2, module2) {
    "use strict";
    var Statement = require_statement2();
    var KIND = "while";
    module2.exports = Statement.extends(
      KIND,
      function While(test, body, shortForm, docs, location) {
        Statement.apply(this, [KIND, docs, location]);
        this.test = test;
        this.body = body;
        this.shortForm = shortForm;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/yield.js
var require_yield = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/yield.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "yield";
    module2.exports = Expression.extends(
      KIND,
      function Yield(value, key, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.value = value;
        this.key = key;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/yieldfrom.js
var require_yieldfrom = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast/yieldfrom.js"(exports2, module2) {
    "use strict";
    var Expression = require_expression();
    var KIND = "yieldfrom";
    module2.exports = Expression.extends(
      KIND,
      function YieldFrom(value, docs, location) {
        Expression.apply(this, [KIND, docs, location]);
        this.value = value;
      }
    );
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast.js
var require_ast = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/ast.js"(exports2, module2) {
    "use strict";
    var Location = require_location();
    var Position2 = require_position();
    var AST = function(withPositions, withSource) {
      this.withPositions = withPositions;
      this.withSource = withSource;
    };
    AST.prototype.position = function(parser) {
      return new Position2(
        parser.lexer.yylloc.first_line,
        parser.lexer.yylloc.first_column,
        parser.lexer.yylloc.first_offset
      );
    };
    AST.precedence = {};
    [
      ["or"],
      ["xor"],
      ["and"],
      ["="],
      ["?"],
      ["??"],
      ["||"],
      ["&&"],
      ["|"],
      ["^"],
      ["&"],
      [
        "==",
        "!=",
        "===",
        "!==",
        /* '<>', */
        "<=>"
      ],
      ["<", "<=", ">", ">="],
      ["<<", ">>"],
      ["+", "-", "."],
      ["*", "/", "%"],
      ["!"],
      ["instanceof"],
      ["cast", "silent"],
      ["**"]
      // TODO: [ (array)
      // TODO: clone, new
    ].forEach(function(list, index) {
      list.forEach(function(operator) {
        AST.precedence[operator] = index + 1;
      });
    });
    AST.prototype.isRightAssociative = function(operator) {
      return operator === "**" || operator === "??";
    };
    AST.prototype.swapLocations = function(target, first, last, parser) {
      if (this.withPositions) {
        target.loc.start = first.loc.start;
        target.loc.end = last.loc.end;
        if (this.withSource) {
          target.loc.source = parser.lexer._input.substring(
            target.loc.start.offset,
            target.loc.end.offset
          );
        }
      }
    };
    AST.prototype.resolveLocations = function(target, first, last, parser) {
      if (this.withPositions) {
        if (target.loc.start.offset > first.loc.start.offset) {
          target.loc.start = first.loc.start;
        }
        if (target.loc.end.offset < last.loc.end.offset) {
          target.loc.end = last.loc.end;
        }
        if (this.withSource) {
          target.loc.source = parser.lexer._input.substring(
            target.loc.start.offset,
            target.loc.end.offset
          );
        }
      }
    };
    AST.prototype.resolvePrecedence = function(result, parser) {
      let buffer, lLevel, rLevel;
      if (result.kind === "call") {
        this.resolveLocations(result, result.what, result, parser);
      } else if (result.kind === "propertylookup" || result.kind === "staticlookup" || result.kind === "offsetlookup" && result.offset) {
        this.resolveLocations(result, result.what, result.offset, parser);
      } else if (result.kind === "bin") {
        if (result.right && !result.right.parenthesizedExpression) {
          if (result.right.kind === "bin") {
            lLevel = AST.precedence[result.type];
            rLevel = AST.precedence[result.right.type];
            if (lLevel && rLevel && rLevel <= lLevel && (result.type !== result.right.type || !this.isRightAssociative(result.type))) {
              buffer = result.right;
              result.right = result.right.left;
              this.swapLocations(result, result.left, result.right, parser);
              buffer.left = this.resolvePrecedence(result, parser);
              this.swapLocations(buffer, buffer.left, buffer.right, parser);
              result = buffer;
            }
          } else if (result.right.kind === "retif") {
            lLevel = AST.precedence[result.type];
            rLevel = AST.precedence["?"];
            if (lLevel && rLevel && rLevel <= lLevel) {
              buffer = result.right;
              result.right = result.right.test;
              this.swapLocations(result, result.left, result.right, parser);
              buffer.test = this.resolvePrecedence(result, parser);
              this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
              result = buffer;
            }
          }
        }
      } else if ((result.kind === "silent" || result.kind === "cast") && result.expr && !result.expr.parenthesizedExpression) {
        if (result.expr.kind === "bin") {
          buffer = result.expr;
          result.expr = result.expr.left;
          this.swapLocations(result, result, result.expr, parser);
          buffer.left = this.resolvePrecedence(result, parser);
          this.swapLocations(buffer, buffer.left, buffer.right, parser);
          result = buffer;
        } else if (result.expr.kind === "retif") {
          buffer = result.expr;
          result.expr = result.expr.test;
          this.swapLocations(result, result, result.expr, parser);
          buffer.test = this.resolvePrecedence(result, parser);
          this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
          result = buffer;
        }
      } else if (result.kind === "unary") {
        if (result.what && !result.what.parenthesizedExpression) {
          if (result.what.kind === "bin") {
            buffer = result.what;
            result.what = result.what.left;
            this.swapLocations(result, result, result.what, parser);
            buffer.left = this.resolvePrecedence(result, parser);
            this.swapLocations(buffer, buffer.left, buffer.right, parser);
            result = buffer;
          } else if (result.what.kind === "retif") {
            buffer = result.what;
            result.what = result.what.test;
            this.swapLocations(result, result, result.what, parser);
            buffer.test = this.resolvePrecedence(result, parser);
            this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
            result = buffer;
          }
        }
      } else if (result.kind === "retif") {
        if (result.falseExpr && result.falseExpr.kind === "retif" && !result.falseExpr.parenthesizedExpression) {
          buffer = result.falseExpr;
          result.falseExpr = buffer.test;
          this.swapLocations(result, result.test, result.falseExpr, parser);
          buffer.test = this.resolvePrecedence(result, parser);
          this.swapLocations(buffer, buffer.test, buffer.falseExpr, parser);
          result = buffer;
        }
      } else if (result.kind === "assign") {
        if (result.right && result.right.kind === "bin" && !result.right.parenthesizedExpression) {
          lLevel = AST.precedence["="];
          rLevel = AST.precedence[result.right.type];
          if (lLevel && rLevel && rLevel < lLevel) {
            buffer = result.right;
            result.right = result.right.left;
            buffer.left = result;
            this.swapLocations(buffer, buffer.left, result.right, parser);
            result = buffer;
          }
        }
      } else if (result.kind === "expressionstatement") {
        this.swapLocations(result, result.expression, result, parser);
      }
      return result;
    };
    AST.prototype.prepare = function(kind, docs, parser) {
      let start = null;
      if (this.withPositions || this.withSource) {
        start = this.position(parser);
      }
      const self = this;
      const result = function() {
        let location = null;
        const args = Array.prototype.slice.call(arguments);
        args.push(docs);
        if (self.withPositions || self.withSource) {
          let src = null;
          if (self.withSource) {
            src = parser.lexer._input.substring(start.offset, parser.prev[2]);
          }
          location = new Location(
            src,
            start,
            new Position2(parser.prev[0], parser.prev[1], parser.prev[2])
          );
          args.push(location);
        }
        if (!kind) {
          kind = args.shift();
        }
        const node = self[kind];
        if (typeof node !== "function") {
          throw new Error('Undefined node "' + kind + '"');
        }
        const astNode = Object.create(node.prototype);
        node.apply(astNode, args);
        result.instance = astNode;
        if (result.trailingComments) {
          astNode.trailingComments = result.trailingComments;
        }
        if (typeof result.postBuild === "function") {
          result.postBuild(astNode);
        }
        if (parser.debug) {
          delete AST.stack[result.stackUid];
        }
        return self.resolvePrecedence(astNode, parser);
      };
      if (parser.debug) {
        if (!AST.stack) {
          AST.stack = {};
          AST.stackUid = 1;
        }
        AST.stack[++AST.stackUid] = {
          position: start,
          stack: new Error().stack.split("\n").slice(3, 5)
        };
        result.stackUid = AST.stackUid;
      }
      result.setTrailingComments = function(docs2) {
        if (result.instance) {
          result.instance.setTrailingComments(docs2);
        } else {
          result.trailingComments = docs2;
        }
      };
      result.destroy = function(target) {
        if (docs) {
          if (target) {
            if (!target.leadingComments) {
              target.leadingComments = docs;
            } else {
              target.leadingComments = docs.concat(target.leadingComments);
            }
          } else {
            parser._docIndex = parser._docs.length - docs.length;
          }
        }
        if (parser.debug) {
          delete AST.stack[result.stackUid];
        }
      };
      return result;
    };
    AST.prototype.checkNodes = function() {
      const errors = [];
      for (const k in AST.stack) {
        if (AST.stack.hasOwnProperty(k)) {
          errors.push(AST.stack[k]);
        }
      }
      AST.stack = {};
      return errors;
    };
    [
      require_array2(),
      require_arrowfunc(),
      require_assign(),
      require_assignref(),
      require_bin(),
      require_block(),
      require_boolean(),
      require_break(),
      require_byref(),
      require_call(),
      require_case(),
      require_cast(),
      require_catch(),
      require_class2(),
      require_classconstant(),
      require_clone(),
      require_closure(),
      require_comment2(),
      require_commentblock(),
      require_commentline(),
      require_constant(),
      require_constantstatement(),
      require_continue(),
      require_declaration(),
      require_declare(),
      require_declaredirective(),
      require_do(),
      require_echo(),
      require_empty(),
      require_encapsed(),
      require_encapsedpart(),
      require_entry(),
      require_error(),
      require_eval(),
      require_exit(),
      require_expression(),
      require_expressionstatement(),
      require_for(),
      require_foreach(),
      require_function2(),
      require_global(),
      require_goto(),
      require_halt(),
      require_identifier(),
      require_if2(),
      require_include(),
      require_inline(),
      require_interface(),
      require_isset(),
      require_label(),
      require_list(),
      require_literal(),
      require_lookup(),
      require_magic(),
      require_method(),
      require_name(),
      require_namespace2(),
      require_new(),
      require_node(),
      require_noop(),
      require_nowdoc(),
      require_nullkeyword(),
      require_number(),
      require_offsetlookup(),
      require_operation(),
      require_parameter(),
      require_parentreference(),
      require_post(),
      require_pre(),
      require_print(),
      require_program(),
      require_property2(),
      require_propertylookup(),
      require_propertystatement(),
      require_reference(),
      require_retif(),
      require_return(),
      require_selfreference(),
      require_silent(),
      require_statement2(),
      require_static(),
      require_staticvariable(),
      require_staticlookup(),
      require_staticreference(),
      require_string(),
      require_switch2(),
      require_throw(),
      require_trait(),
      require_traitalias(),
      require_traitprecedence(),
      require_traituse(),
      require_try2(),
      require_typereference(),
      require_unary(),
      require_unset(),
      require_usegroup(),
      require_useitem(),
      require_variable2(),
      require_variadic(),
      require_while(),
      require_yield(),
      require_yieldfrom()
    ].forEach(function(ctor) {
      AST.prototype[ctor.kind] = ctor;
    });
    module2.exports = AST;
  }
});

// ../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/index.js
var require_src2 = __commonJS({
  "../node_modules/.pnpm/php-parser@3.0.3/node_modules/php-parser/src/index.js"(exports2, module2) {
    "use strict";
    var lexer = require_lexer();
    var parser = require_parser();
    var tokens = require_tokens2();
    var AST = require_ast();
    function combine(src, to) {
      const keys = Object.keys(src);
      let i = keys.length;
      while (i--) {
        const k = keys[i];
        const val = src[k];
        if (val === null) {
          delete to[k];
        } else if (typeof val === "function") {
          to[k] = val.bind(to);
        } else if (Array.isArray(val)) {
          to[k] = Array.isArray(to[k]) ? to[k].concat(val) : val;
        } else if (typeof val === "object") {
          to[k] = typeof to[k] === "object" ? combine(val, to[k]) : val;
        } else {
          to[k] = val;
        }
      }
      return to;
    }
    var Engine = function(options) {
      if (typeof this === "function") {
        return new this(options);
      }
      this.tokens = tokens;
      this.lexer = new lexer(this);
      this.ast = new AST();
      this.parser = new parser(this.lexer, this.ast);
      if (options && typeof options === "object") {
        if (options.parser) {
          if (!options.lexer) {
            options.lexer = {};
          }
          if (options.parser.version) {
            if (typeof options.parser.version === "string") {
              let version = options.parser.version.split(".");
              version = parseInt(version[0]) * 100 + parseInt(version[1]);
              if (isNaN(version)) {
                throw new Error("Bad version number : " + options.parser.version);
              } else {
                options.parser.version = version;
              }
            } else if (typeof options.parser.version !== "number") {
              throw new Error("Expecting a number for version");
            }
            if (options.parser.version < 500 || options.parser.version > 704) {
              throw new Error("Can only handle versions between 5.x to 7.x");
            }
          }
        }
        combine(options, this);
        this.lexer.version = this.parser.version;
      }
    };
    var getStringBuffer = function(buffer) {
      return typeof buffer.write === "function" ? buffer.toString() : buffer;
    };
    Engine.create = function(options) {
      return new Engine(options);
    };
    Engine.parseEval = function(buffer, options) {
      const self = new Engine(options);
      return self.parseEval(buffer);
    };
    Engine.prototype.parseEval = function(buffer) {
      this.lexer.mode_eval = true;
      this.lexer.all_tokens = false;
      buffer = getStringBuffer(buffer);
      return this.parser.parse(buffer, "eval");
    };
    Engine.parseCode = function(buffer, filename, options) {
      if (typeof filename === "object" && !options) {
        options = filename;
        filename = "unknown";
      }
      const self = new Engine(options);
      return self.parseCode(buffer, filename);
    };
    Engine.prototype.parseCode = function(buffer, filename) {
      this.lexer.mode_eval = false;
      this.lexer.all_tokens = false;
      buffer = getStringBuffer(buffer);
      return this.parser.parse(buffer, filename);
    };
    Engine.tokenGetAll = function(buffer, options) {
      const self = new Engine(options);
      return self.tokenGetAll(buffer);
    };
    Engine.prototype.tokenGetAll = function(buffer) {
      this.lexer.mode_eval = false;
      this.lexer.all_tokens = true;
      buffer = getStringBuffer(buffer);
      const EOF = this.lexer.EOF;
      const names = this.tokens.values;
      this.lexer.setInput(buffer);
      let token = this.lexer.lex() || EOF;
      const result = [];
      while (token != EOF) {
        let entry = this.lexer.yytext;
        if (names.hasOwnProperty(token)) {
          entry = [names[token], entry, this.lexer.yylloc.first_line];
        }
        result.push(entry);
        token = this.lexer.lex() || EOF;
      }
      return result;
    };
    module2.exports = Engine;
    module2.exports.tokens = tokens;
    module2.exports.lexer = lexer;
    module2.exports.AST = AST;
    module2.exports.parser = parser;
    module2.exports.combine = combine;
    module2.exports.Engine = Engine;
    module2.exports.default = Engine;
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/decode.json
var require_decode = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/decode.json"(exports2, module2) {
    module2.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode_codepoint.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var decode_json_1 = __importDefault(require_decode());
    var fromCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.fromCodePoint || function(codePoint) {
        var output2 = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output2 += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output2 += String.fromCharCode(codePoint);
        return output2;
      }
    );
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "\uFFFD";
      }
      if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
      }
      return fromCodePoint(codePoint);
    }
    exports2.default = decodeCodePoint;
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/entities.json"(exports2, module2) {
    module2.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/legacy.json
var require_legacy = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/legacy.json"(exports2, module2) {
    module2.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/xml.json
var require_xml = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/maps/xml.json"(exports2, module2) {
    module2.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/Tokenizer.js
var require_Tokenizer = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/Tokenizer.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var decode_codepoint_1 = __importDefault(require_decode_codepoint());
    var entities_json_1 = __importDefault(require_entities());
    var legacy_json_1 = __importDefault(require_legacy());
    var xml_json_1 = __importDefault(require_xml());
    function whitespace(c) {
      return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
    }
    function ifElseState(upper, SUCCESS, FAILURE) {
      var lower = upper.toLowerCase();
      if (upper === lower) {
        return function(t, c) {
          if (c === lower) {
            t._state = SUCCESS;
          } else {
            t._state = FAILURE;
            t._index--;
          }
        };
      } else {
        return function(t, c) {
          if (c === lower || c === upper) {
            t._state = SUCCESS;
          } else {
            t._state = FAILURE;
            t._index--;
          }
        };
      }
    }
    function consumeSpecialNameChar(upper, NEXT_STATE) {
      var lower = upper.toLowerCase();
      return function(t, c) {
        if (c === lower || c === upper) {
          t._state = NEXT_STATE;
        } else {
          t._state = 3;
          t._index--;
        }
      };
    }
    var stateBeforeCdata1 = ifElseState(
      "C",
      23,
      16
      /* InDeclaration */
    );
    var stateBeforeCdata2 = ifElseState(
      "D",
      24,
      16
      /* InDeclaration */
    );
    var stateBeforeCdata3 = ifElseState(
      "A",
      25,
      16
      /* InDeclaration */
    );
    var stateBeforeCdata4 = ifElseState(
      "T",
      26,
      16
      /* InDeclaration */
    );
    var stateBeforeCdata5 = ifElseState(
      "A",
      27,
      16
      /* InDeclaration */
    );
    var stateBeforeScript1 = consumeSpecialNameChar(
      "R",
      34
      /* BeforeScript2 */
    );
    var stateBeforeScript2 = consumeSpecialNameChar(
      "I",
      35
      /* BeforeScript3 */
    );
    var stateBeforeScript3 = consumeSpecialNameChar(
      "P",
      36
      /* BeforeScript4 */
    );
    var stateBeforeScript4 = consumeSpecialNameChar(
      "T",
      37
      /* BeforeScript5 */
    );
    var stateAfterScript1 = ifElseState(
      "R",
      39,
      1
      /* Text */
    );
    var stateAfterScript2 = ifElseState(
      "I",
      40,
      1
      /* Text */
    );
    var stateAfterScript3 = ifElseState(
      "P",
      41,
      1
      /* Text */
    );
    var stateAfterScript4 = ifElseState(
      "T",
      42,
      1
      /* Text */
    );
    var stateBeforeStyle1 = consumeSpecialNameChar(
      "Y",
      44
      /* BeforeStyle2 */
    );
    var stateBeforeStyle2 = consumeSpecialNameChar(
      "L",
      45
      /* BeforeStyle3 */
    );
    var stateBeforeStyle3 = consumeSpecialNameChar(
      "E",
      46
      /* BeforeStyle4 */
    );
    var stateAfterStyle1 = ifElseState(
      "Y",
      48,
      1
      /* Text */
    );
    var stateAfterStyle2 = ifElseState(
      "L",
      49,
      1
      /* Text */
    );
    var stateAfterStyle3 = ifElseState(
      "E",
      50,
      1
      /* Text */
    );
    var stateBeforeEntity = ifElseState(
      "#",
      52,
      53
      /* InNamedEntity */
    );
    var stateBeforeNumericEntity = ifElseState(
      "X",
      55,
      54
      /* InNumericEntity */
    );
    var Tokenizer = (
      /** @class */
      function() {
        function Tokenizer2(options, cbs) {
          this._state = 1;
          this._buffer = "";
          this._sectionStart = 0;
          this._index = 0;
          this._bufferOffset = 0;
          this._baseState = 1;
          this._special = 1;
          this._running = true;
          this._ended = false;
          this._cbs = cbs;
          this._xmlMode = !!(options && options.xmlMode);
          this._decodeEntities = !!(options && options.decodeEntities);
        }
        Tokenizer2.prototype.reset = function() {
          this._state = 1;
          this._buffer = "";
          this._sectionStart = 0;
          this._index = 0;
          this._bufferOffset = 0;
          this._baseState = 1;
          this._special = 1;
          this._running = true;
          this._ended = false;
        };
        Tokenizer2.prototype._stateText = function(c) {
          if (c === "<") {
            if (this._index > this._sectionStart) {
              this._cbs.ontext(this._getSection());
            }
            this._state = 2;
            this._sectionStart = this._index;
          } else if (this._decodeEntities && this._special === 1 && c === "&") {
            if (this._index > this._sectionStart) {
              this._cbs.ontext(this._getSection());
            }
            this._baseState = 1;
            this._state = 51;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateBeforeTagName = function(c) {
          if (c === "/") {
            this._state = 5;
          } else if (c === "<") {
            this._cbs.ontext(this._getSection());
            this._sectionStart = this._index;
          } else if (c === ">" || this._special !== 1 || whitespace(c)) {
            this._state = 1;
          } else if (c === "!") {
            this._state = 15;
            this._sectionStart = this._index + 1;
          } else if (c === "?") {
            this._state = 17;
            this._sectionStart = this._index + 1;
          } else {
            this._state = !this._xmlMode && (c === "s" || c === "S") ? 31 : 3;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateInTagName = function(c) {
          if (c === "/" || c === ">" || whitespace(c)) {
            this._emitToken("onopentagname");
            this._state = 8;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateBeforeClosingTagName = function(c) {
          if (whitespace(c)) {
          } else if (c === ">") {
            this._state = 1;
          } else if (this._special !== 1) {
            if (c === "s" || c === "S") {
              this._state = 32;
            } else {
              this._state = 1;
              this._index--;
            }
          } else {
            this._state = 6;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateInClosingTagName = function(c) {
          if (c === ">" || whitespace(c)) {
            this._emitToken("onclosetag");
            this._state = 7;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateAfterClosingTagName = function(c) {
          if (c === ">") {
            this._state = 1;
            this._sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype._stateBeforeAttributeName = function(c) {
          if (c === ">") {
            this._cbs.onopentagend();
            this._state = 1;
            this._sectionStart = this._index + 1;
          } else if (c === "/") {
            this._state = 4;
          } else if (!whitespace(c)) {
            this._state = 9;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateInSelfClosingTag = function(c) {
          if (c === ">") {
            this._cbs.onselfclosingtag();
            this._state = 1;
            this._sectionStart = this._index + 1;
          } else if (!whitespace(c)) {
            this._state = 8;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateInAttributeName = function(c) {
          if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this._cbs.onattribname(this._getSection());
            this._sectionStart = -1;
            this._state = 10;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateAfterAttributeName = function(c) {
          if (c === "=") {
            this._state = 11;
          } else if (c === "/" || c === ">") {
            this._cbs.onattribend();
            this._state = 8;
            this._index--;
          } else if (!whitespace(c)) {
            this._cbs.onattribend();
            this._state = 9;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateBeforeAttributeValue = function(c) {
          if (c === '"') {
            this._state = 12;
            this._sectionStart = this._index + 1;
          } else if (c === "'") {
            this._state = 13;
            this._sectionStart = this._index + 1;
          } else if (!whitespace(c)) {
            this._state = 14;
            this._sectionStart = this._index;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateInAttributeValueDoubleQuotes = function(c) {
          if (c === '"') {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8;
          } else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 51;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateInAttributeValueSingleQuotes = function(c) {
          if (c === "'") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8;
          } else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 51;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateInAttributeValueNoQuotes = function(c) {
          if (whitespace(c) || c === ">") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8;
            this._index--;
          } else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 51;
            this._sectionStart = this._index;
          }
        };
        Tokenizer2.prototype._stateBeforeDeclaration = function(c) {
          this._state = c === "[" ? 22 : c === "-" ? 18 : 16;
        };
        Tokenizer2.prototype._stateInDeclaration = function(c) {
          if (c === ">") {
            this._cbs.ondeclaration(this._getSection());
            this._state = 1;
            this._sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype._stateInProcessingInstruction = function(c) {
          if (c === ">") {
            this._cbs.onprocessinginstruction(this._getSection());
            this._state = 1;
            this._sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype._stateBeforeComment = function(c) {
          if (c === "-") {
            this._state = 19;
            this._sectionStart = this._index + 1;
          } else {
            this._state = 16;
          }
        };
        Tokenizer2.prototype._stateInComment = function(c) {
          if (c === "-")
            this._state = 20;
        };
        Tokenizer2.prototype._stateAfterComment1 = function(c) {
          if (c === "-") {
            this._state = 21;
          } else {
            this._state = 19;
          }
        };
        Tokenizer2.prototype._stateAfterComment2 = function(c) {
          if (c === ">") {
            this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
            this._state = 1;
            this._sectionStart = this._index + 1;
          } else if (c !== "-") {
            this._state = 19;
          }
        };
        Tokenizer2.prototype._stateBeforeCdata6 = function(c) {
          if (c === "[") {
            this._state = 28;
            this._sectionStart = this._index + 1;
          } else {
            this._state = 16;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateInCdata = function(c) {
          if (c === "]")
            this._state = 29;
        };
        Tokenizer2.prototype._stateAfterCdata1 = function(c) {
          if (c === "]")
            this._state = 30;
          else
            this._state = 28;
        };
        Tokenizer2.prototype._stateAfterCdata2 = function(c) {
          if (c === ">") {
            this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
            this._state = 1;
            this._sectionStart = this._index + 1;
          } else if (c !== "]") {
            this._state = 28;
          }
        };
        Tokenizer2.prototype._stateBeforeSpecial = function(c) {
          if (c === "c" || c === "C") {
            this._state = 33;
          } else if (c === "t" || c === "T") {
            this._state = 43;
          } else {
            this._state = 3;
            this._index--;
          }
        };
        Tokenizer2.prototype._stateBeforeSpecialEnd = function(c) {
          if (this._special === 2 && (c === "c" || c === "C")) {
            this._state = 38;
          } else if (this._special === 3 && (c === "t" || c === "T")) {
            this._state = 47;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype._stateBeforeScript5 = function(c) {
          if (c === "/" || c === ">" || whitespace(c)) {
            this._special = 2;
          }
          this._state = 3;
          this._index--;
        };
        Tokenizer2.prototype._stateAfterScript5 = function(c) {
          if (c === ">" || whitespace(c)) {
            this._special = 1;
            this._state = 6;
            this._sectionStart = this._index - 6;
            this._index--;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype._stateBeforeStyle4 = function(c) {
          if (c === "/" || c === ">" || whitespace(c)) {
            this._special = 3;
          }
          this._state = 3;
          this._index--;
        };
        Tokenizer2.prototype._stateAfterStyle4 = function(c) {
          if (c === ">" || whitespace(c)) {
            this._special = 1;
            this._state = 6;
            this._sectionStart = this._index - 5;
            this._index--;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype._parseNamedEntityStrict = function() {
          if (this._sectionStart + 1 < this._index) {
            var entity = this._buffer.substring(this._sectionStart + 1, this._index), map = this._xmlMode ? xml_json_1.default : entities_json_1.default;
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
              this._emitPartial(map[entity]);
              this._sectionStart = this._index + 1;
            }
          }
        };
        Tokenizer2.prototype._parseLegacyEntity = function() {
          var start = this._sectionStart + 1;
          var limit = this._index - start;
          if (limit > 6)
            limit = 6;
          while (limit >= 2) {
            var entity = this._buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
              this._emitPartial(legacy_json_1.default[entity]);
              this._sectionStart += limit + 1;
              return;
            } else {
              limit--;
            }
          }
        };
        Tokenizer2.prototype._stateInNamedEntity = function(c) {
          if (c === ";") {
            this._parseNamedEntityStrict();
            if (this._sectionStart + 1 < this._index && !this._xmlMode) {
              this._parseLegacyEntity();
            }
            this._state = this._baseState;
          } else if ((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")) {
            if (this._xmlMode || this._sectionStart + 1 === this._index) {
            } else if (this._baseState !== 1) {
              if (c !== "=") {
                this._parseNamedEntityStrict();
              }
            } else {
              this._parseLegacyEntity();
            }
            this._state = this._baseState;
            this._index--;
          }
        };
        Tokenizer2.prototype._decodeNumericEntity = function(offset, base) {
          var sectionStart = this._sectionStart + offset;
          if (sectionStart !== this._index) {
            var entity = this._buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this._emitPartial(decode_codepoint_1.default(parsed));
            this._sectionStart = this._index;
          } else {
            this._sectionStart--;
          }
          this._state = this._baseState;
        };
        Tokenizer2.prototype._stateInNumericEntity = function(c) {
          if (c === ";") {
            this._decodeNumericEntity(2, 10);
            this._sectionStart++;
          } else if (c < "0" || c > "9") {
            if (!this._xmlMode) {
              this._decodeNumericEntity(2, 10);
            } else {
              this._state = this._baseState;
            }
            this._index--;
          }
        };
        Tokenizer2.prototype._stateInHexEntity = function(c) {
          if (c === ";") {
            this._decodeNumericEntity(3, 16);
            this._sectionStart++;
          } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
            if (!this._xmlMode) {
              this._decodeNumericEntity(3, 16);
            } else {
              this._state = this._baseState;
            }
            this._index--;
          }
        };
        Tokenizer2.prototype._cleanup = function() {
          if (this._sectionStart < 0) {
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
          } else if (this._running) {
            if (this._state === 1) {
              if (this._sectionStart !== this._index) {
                this._cbs.ontext(this._buffer.substr(this._sectionStart));
              }
              this._buffer = "";
              this._bufferOffset += this._index;
              this._index = 0;
            } else if (this._sectionStart === this._index) {
              this._buffer = "";
              this._bufferOffset += this._index;
              this._index = 0;
            } else {
              this._buffer = this._buffer.substr(this._sectionStart);
              this._index -= this._sectionStart;
              this._bufferOffset += this._sectionStart;
            }
            this._sectionStart = 0;
          }
        };
        Tokenizer2.prototype.write = function(chunk) {
          if (this._ended)
            this._cbs.onerror(Error(".write() after done!"));
          this._buffer += chunk;
          this._parse();
        };
        Tokenizer2.prototype._parse = function() {
          while (this._index < this._buffer.length && this._running) {
            var c = this._buffer.charAt(this._index);
            if (this._state === 1) {
              this._stateText(c);
            } else if (this._state === 12) {
              this._stateInAttributeValueDoubleQuotes(c);
            } else if (this._state === 9) {
              this._stateInAttributeName(c);
            } else if (this._state === 19) {
              this._stateInComment(c);
            } else if (this._state === 8) {
              this._stateBeforeAttributeName(c);
            } else if (this._state === 3) {
              this._stateInTagName(c);
            } else if (this._state === 6) {
              this._stateInClosingTagName(c);
            } else if (this._state === 2) {
              this._stateBeforeTagName(c);
            } else if (this._state === 10) {
              this._stateAfterAttributeName(c);
            } else if (this._state === 13) {
              this._stateInAttributeValueSingleQuotes(c);
            } else if (this._state === 11) {
              this._stateBeforeAttributeValue(c);
            } else if (this._state === 5) {
              this._stateBeforeClosingTagName(c);
            } else if (this._state === 7) {
              this._stateAfterClosingTagName(c);
            } else if (this._state === 31) {
              this._stateBeforeSpecial(c);
            } else if (this._state === 20) {
              this._stateAfterComment1(c);
            } else if (this._state === 14) {
              this._stateInAttributeValueNoQuotes(c);
            } else if (this._state === 4) {
              this._stateInSelfClosingTag(c);
            } else if (this._state === 16) {
              this._stateInDeclaration(c);
            } else if (this._state === 15) {
              this._stateBeforeDeclaration(c);
            } else if (this._state === 21) {
              this._stateAfterComment2(c);
            } else if (this._state === 18) {
              this._stateBeforeComment(c);
            } else if (this._state === 32) {
              this._stateBeforeSpecialEnd(c);
            } else if (this._state === 38) {
              stateAfterScript1(this, c);
            } else if (this._state === 39) {
              stateAfterScript2(this, c);
            } else if (this._state === 40) {
              stateAfterScript3(this, c);
            } else if (this._state === 33) {
              stateBeforeScript1(this, c);
            } else if (this._state === 34) {
              stateBeforeScript2(this, c);
            } else if (this._state === 35) {
              stateBeforeScript3(this, c);
            } else if (this._state === 36) {
              stateBeforeScript4(this, c);
            } else if (this._state === 37) {
              this._stateBeforeScript5(c);
            } else if (this._state === 41) {
              stateAfterScript4(this, c);
            } else if (this._state === 42) {
              this._stateAfterScript5(c);
            } else if (this._state === 43) {
              stateBeforeStyle1(this, c);
            } else if (this._state === 28) {
              this._stateInCdata(c);
            } else if (this._state === 44) {
              stateBeforeStyle2(this, c);
            } else if (this._state === 45) {
              stateBeforeStyle3(this, c);
            } else if (this._state === 46) {
              this._stateBeforeStyle4(c);
            } else if (this._state === 47) {
              stateAfterStyle1(this, c);
            } else if (this._state === 48) {
              stateAfterStyle2(this, c);
            } else if (this._state === 49) {
              stateAfterStyle3(this, c);
            } else if (this._state === 50) {
              this._stateAfterStyle4(c);
            } else if (this._state === 17) {
              this._stateInProcessingInstruction(c);
            } else if (this._state === 53) {
              this._stateInNamedEntity(c);
            } else if (this._state === 22) {
              stateBeforeCdata1(this, c);
            } else if (this._state === 51) {
              stateBeforeEntity(this, c);
            } else if (this._state === 23) {
              stateBeforeCdata2(this, c);
            } else if (this._state === 24) {
              stateBeforeCdata3(this, c);
            } else if (this._state === 29) {
              this._stateAfterCdata1(c);
            } else if (this._state === 30) {
              this._stateAfterCdata2(c);
            } else if (this._state === 25) {
              stateBeforeCdata4(this, c);
            } else if (this._state === 26) {
              stateBeforeCdata5(this, c);
            } else if (this._state === 27) {
              this._stateBeforeCdata6(c);
            } else if (this._state === 55) {
              this._stateInHexEntity(c);
            } else if (this._state === 54) {
              this._stateInNumericEntity(c);
            } else if (this._state === 52) {
              stateBeforeNumericEntity(this, c);
            } else {
              this._cbs.onerror(Error("unknown _state"), this._state);
            }
            this._index++;
          }
          this._cleanup();
        };
        Tokenizer2.prototype.pause = function() {
          this._running = false;
        };
        Tokenizer2.prototype.resume = function() {
          this._running = true;
          if (this._index < this._buffer.length) {
            this._parse();
          }
          if (this._ended) {
            this._finish();
          }
        };
        Tokenizer2.prototype.end = function(chunk) {
          if (this._ended)
            this._cbs.onerror(Error(".end() after done!"));
          if (chunk)
            this.write(chunk);
          this._ended = true;
          if (this._running)
            this._finish();
        };
        Tokenizer2.prototype._finish = function() {
          if (this._sectionStart < this._index) {
            this._handleTrailingData();
          }
          this._cbs.onend();
        };
        Tokenizer2.prototype._handleTrailingData = function() {
          var data = this._buffer.substr(this._sectionStart);
          if (this._state === 28 || this._state === 29 || this._state === 30) {
            this._cbs.oncdata(data);
          } else if (this._state === 19 || this._state === 20 || this._state === 21) {
            this._cbs.oncomment(data);
          } else if (this._state === 53 && !this._xmlMode) {
            this._parseLegacyEntity();
            if (this._sectionStart < this._index) {
              this._state = this._baseState;
              this._handleTrailingData();
            }
          } else if (this._state === 54 && !this._xmlMode) {
            this._decodeNumericEntity(2, 10);
            if (this._sectionStart < this._index) {
              this._state = this._baseState;
              this._handleTrailingData();
            }
          } else if (this._state === 55 && !this._xmlMode) {
            this._decodeNumericEntity(3, 16);
            if (this._sectionStart < this._index) {
              this._state = this._baseState;
              this._handleTrailingData();
            }
          } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
            this._cbs.ontext(data);
          }
        };
        Tokenizer2.prototype.getAbsoluteIndex = function() {
          return this._bufferOffset + this._index;
        };
        Tokenizer2.prototype._getSection = function() {
          return this._buffer.substring(this._sectionStart, this._index);
        };
        Tokenizer2.prototype._emitToken = function(name) {
          this._cbs[name](this._getSection());
          this._sectionStart = -1;
        };
        Tokenizer2.prototype._emitPartial = function(value) {
          if (this._baseState !== 1) {
            this._cbs.onattribdata(value);
          } else {
            this._cbs.ontext(value);
          }
        };
        return Tokenizer2;
      }()
    );
    exports2.default = Tokenizer;
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/Parser.js
var require_Parser = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/Parser.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Tokenizer_1 = __importDefault(require_Tokenizer());
    var events_1 = require("events");
    var formTags = /* @__PURE__ */ new Set([
      "input",
      "option",
      "optgroup",
      "select",
      "button",
      "datalist",
      "textarea"
    ]);
    var pTag = /* @__PURE__ */ new Set(["p"]);
    var openImpliesClose = {
      tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
      th: /* @__PURE__ */ new Set(["th"]),
      td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
      body: /* @__PURE__ */ new Set(["head", "link", "script"]),
      li: /* @__PURE__ */ new Set(["li"]),
      p: pTag,
      h1: pTag,
      h2: pTag,
      h3: pTag,
      h4: pTag,
      h5: pTag,
      h6: pTag,
      select: formTags,
      input: formTags,
      output: formTags,
      button: formTags,
      datalist: formTags,
      textarea: formTags,
      option: /* @__PURE__ */ new Set(["option"]),
      optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
      dd: /* @__PURE__ */ new Set(["dt", "dd"]),
      dt: /* @__PURE__ */ new Set(["dt", "dd"]),
      address: pTag,
      article: pTag,
      aside: pTag,
      blockquote: pTag,
      details: pTag,
      div: pTag,
      dl: pTag,
      fieldset: pTag,
      figcaption: pTag,
      figure: pTag,
      footer: pTag,
      form: pTag,
      header: pTag,
      hr: pTag,
      main: pTag,
      nav: pTag,
      ol: pTag,
      pre: pTag,
      section: pTag,
      table: pTag,
      ul: pTag,
      rt: /* @__PURE__ */ new Set(["rt", "rp"]),
      rp: /* @__PURE__ */ new Set(["rt", "rp"]),
      tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
      tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
    };
    var voidElements = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
    var htmlIntegrationElements = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var reNameEnd = /\s|\//;
    var Parser = (
      /** @class */
      function(_super) {
        __extends(Parser2, _super);
        function Parser2(cbs, options) {
          var _this = _super.call(this) || this;
          _this._tagname = "";
          _this._attribname = "";
          _this._attribvalue = "";
          _this._attribs = null;
          _this._stack = [];
          _this._foreignContext = [];
          _this.startIndex = 0;
          _this.endIndex = null;
          _this.parseChunk = Parser2.prototype.write;
          _this.done = Parser2.prototype.end;
          _this._options = options || {};
          _this._cbs = cbs || {};
          _this._tagname = "";
          _this._attribname = "";
          _this._attribvalue = "";
          _this._attribs = null;
          _this._stack = [];
          _this._foreignContext = [];
          _this.startIndex = 0;
          _this.endIndex = null;
          _this._lowerCaseTagNames = "lowerCaseTags" in _this._options ? !!_this._options.lowerCaseTags : !_this._options.xmlMode;
          _this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in _this._options ? !!_this._options.lowerCaseAttributeNames : !_this._options.xmlMode;
          _this._tokenizer = new (_this._options.Tokenizer || Tokenizer_1.default)(_this._options, _this);
          if (_this._cbs.onparserinit)
            _this._cbs.onparserinit(_this);
          return _this;
        }
        Parser2.prototype._updatePosition = function(initialOffset) {
          if (this.endIndex === null) {
            if (this._tokenizer._sectionStart <= initialOffset) {
              this.startIndex = 0;
            } else {
              this.startIndex = this._tokenizer._sectionStart - initialOffset;
            }
          } else
            this.startIndex = this.endIndex + 1;
          this.endIndex = this._tokenizer.getAbsoluteIndex();
        };
        Parser2.prototype.ontext = function(data) {
          this._updatePosition(1);
          this.endIndex--;
          if (this._cbs.ontext)
            this._cbs.ontext(data);
        };
        Parser2.prototype.onopentagname = function(name) {
          if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          this._tagname = name;
          if (!this._options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            for (
              var el = void 0;
              // @ts-ignore
              openImpliesClose[name].has(el = this._stack[this._stack.length - 1]);
              this.onclosetag(el)
            )
              ;
          }
          if (this._options.xmlMode || !voidElements.has(name)) {
            this._stack.push(name);
            if (foreignContextElements.has(name)) {
              this._foreignContext.push(true);
            } else if (htmlIntegrationElements.has(name)) {
              this._foreignContext.push(false);
            }
          }
          if (this._cbs.onopentagname)
            this._cbs.onopentagname(name);
          if (this._cbs.onopentag)
            this._attribs = {};
        };
        Parser2.prototype.onopentagend = function() {
          this._updatePosition(1);
          if (this._attribs) {
            if (this._cbs.onopentag) {
              this._cbs.onopentag(this._tagname, this._attribs);
            }
            this._attribs = null;
          }
          if (!this._options.xmlMode && this._cbs.onclosetag && voidElements.has(this._tagname)) {
            this._cbs.onclosetag(this._tagname);
          }
          this._tagname = "";
        };
        Parser2.prototype.onclosetag = function(name) {
          this._updatePosition(1);
          if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
            this._foreignContext.pop();
          }
          if (this._stack.length && (this._options.xmlMode || !voidElements.has(name))) {
            var pos = this._stack.lastIndexOf(name);
            if (pos !== -1) {
              if (this._cbs.onclosetag) {
                pos = this._stack.length - pos;
                while (pos--)
                  this._cbs.onclosetag(this._stack.pop());
              } else
                this._stack.length = pos;
            } else if (name === "p" && !this._options.xmlMode) {
              this.onopentagname(name);
              this._closeCurrentTag();
            }
          } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this._closeCurrentTag();
          }
        };
        Parser2.prototype.onselfclosingtag = function() {
          if (this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1]) {
            this._closeCurrentTag();
          } else {
            this.onopentagend();
          }
        };
        Parser2.prototype._closeCurrentTag = function() {
          var name = this._tagname;
          this.onopentagend();
          if (this._stack[this._stack.length - 1] === name) {
            if (this._cbs.onclosetag) {
              this._cbs.onclosetag(name);
            }
            this._stack.pop();
          }
        };
        Parser2.prototype.onattribname = function(name) {
          if (this._lowerCaseAttributeNames) {
            name = name.toLowerCase();
          }
          this._attribname = name;
        };
        Parser2.prototype.onattribdata = function(value) {
          this._attribvalue += value;
        };
        Parser2.prototype.onattribend = function() {
          if (this._cbs.onattribute)
            this._cbs.onattribute(this._attribname, this._attribvalue);
          if (this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
            this._attribs[this._attribname] = this._attribvalue;
          }
          this._attribname = "";
          this._attribvalue = "";
        };
        Parser2.prototype._getInstructionName = function(value) {
          var idx = value.search(reNameEnd);
          var name = idx < 0 ? value : value.substr(0, idx);
          if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          return name;
        };
        Parser2.prototype.ondeclaration = function(value) {
          if (this._cbs.onprocessinginstruction) {
            var name_1 = this._getInstructionName(value);
            this._cbs.onprocessinginstruction("!" + name_1, "!" + value);
          }
        };
        Parser2.prototype.onprocessinginstruction = function(value) {
          if (this._cbs.onprocessinginstruction) {
            var name_2 = this._getInstructionName(value);
            this._cbs.onprocessinginstruction("?" + name_2, "?" + value);
          }
        };
        Parser2.prototype.oncomment = function(value) {
          this._updatePosition(4);
          if (this._cbs.oncomment)
            this._cbs.oncomment(value);
          if (this._cbs.oncommentend)
            this._cbs.oncommentend();
        };
        Parser2.prototype.oncdata = function(value) {
          this._updatePosition(1);
          if (this._options.xmlMode || this._options.recognizeCDATA) {
            if (this._cbs.oncdatastart)
              this._cbs.oncdatastart();
            if (this._cbs.ontext)
              this._cbs.ontext(value);
            if (this._cbs.oncdataend)
              this._cbs.oncdataend();
          } else {
            this.oncomment("[CDATA[" + value + "]]");
          }
        };
        Parser2.prototype.onerror = function(err) {
          if (this._cbs.onerror)
            this._cbs.onerror(err);
        };
        Parser2.prototype.onend = function() {
          if (this._cbs.onclosetag) {
            for (var i = this._stack.length; i > 0; this._cbs.onclosetag(this._stack[--i]))
              ;
          }
          if (this._cbs.onend)
            this._cbs.onend();
        };
        Parser2.prototype.reset = function() {
          if (this._cbs.onreset)
            this._cbs.onreset();
          this._tokenizer.reset();
          this._tagname = "";
          this._attribname = "";
          this._attribs = null;
          this._stack = [];
          if (this._cbs.onparserinit)
            this._cbs.onparserinit(this);
        };
        Parser2.prototype.parseComplete = function(data) {
          this.reset();
          this.end(data);
        };
        Parser2.prototype.write = function(chunk) {
          this._tokenizer.write(chunk);
        };
        Parser2.prototype.end = function(chunk) {
          this._tokenizer.end(chunk);
        };
        Parser2.prototype.pause = function() {
          this._tokenizer.pause();
        };
        Parser2.prototype.resume = function() {
          this._tokenizer.resume();
        };
        return Parser2;
      }(events_1.EventEmitter)
    );
    exports2.Parser = Parser;
  }
});

// ../node_modules/.pnpm/domhandler@3.3.0/node_modules/domhandler/lib/node.js
var require_node2 = __commonJS({
  "../node_modules/.pnpm/domhandler@3.3.0/node_modules/domhandler/lib/node.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cloneNode = exports2.Element = exports2.NodeWithChildren = exports2.ProcessingInstruction = exports2.Comment = exports2.Text = exports2.DataNode = exports2.Node = void 0;
    var nodeTypes = /* @__PURE__ */ new Map([
      ["tag", 1],
      ["script", 1],
      ["style", 1],
      ["directive", 1],
      ["text", 3],
      ["cdata", 4],
      ["comment", 8]
    ]);
    var Node = (
      /** @class */
      function() {
        function Node2(type) {
          this.type = type;
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "nodeType", {
          // Read-only aliases
          get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "parentNode", {
          // Read-write aliases for properties
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      }()
    );
    exports2.Node = Node;
    var DataNode = (
      /** @class */
      function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(type, data) {
          var _this = _super.call(this, type) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node)
    );
    exports2.DataNode = DataNode;
    var Text = (
      /** @class */
      function(_super) {
        __extends(Text2, _super);
        function Text2(data) {
          return _super.call(this, "text", data) || this;
        }
        return Text2;
      }(DataNode)
    );
    exports2.Text = Text;
    var Comment = (
      /** @class */
      function(_super) {
        __extends(Comment2, _super);
        function Comment2(data) {
          return _super.call(this, "comment", data) || this;
        }
        return Comment2;
      }(DataNode)
    );
    exports2.Comment = Comment;
    var ProcessingInstruction = (
      /** @class */
      function(_super) {
        __extends(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, "directive", data) || this;
          _this.name = name;
          return _this;
        }
        return ProcessingInstruction2;
      }(DataNode)
    );
    exports2.ProcessingInstruction = ProcessingInstruction;
    var NodeWithChildren = (
      /** @class */
      function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(type, children) {
          var _this = _super.call(this, type) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          // Aliases
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node)
    );
    exports2.NodeWithChildren = NodeWithChildren;
    var Element = (
      /** @class */
      function(_super) {
        __extends(Element2, _super);
        function Element2(name, attribs, children) {
          if (children === void 0) {
            children = [];
          }
          var _this = _super.call(this, name === "script" ? "script" : name === "style" ? "style" : "tag", children) || this;
          _this.name = name;
          _this.attribs = attribs;
          _this.attribs = attribs;
          return _this;
        }
        Object.defineProperty(Element2.prototype, "tagName", {
          // DOM Level 1 aliases
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              return {
                name,
                value: _this.attribs[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element2;
      }(NodeWithChildren)
    );
    exports2.Element = Element;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      switch (node.type) {
        case "text":
          return new Text(node.data);
        case "directive": {
          var instr = node;
          return new ProcessingInstruction(instr.name, instr.data);
        }
        case "comment":
          return new Comment(node.data);
        case "tag":
        case "script":
        case "style": {
          var elem = node;
          var children = recursive ? cloneChildren(elem.children) : [];
          var clone_1 = new Element(elem.name, __assign({}, elem.attribs), children);
          children.forEach(function(child) {
            return child.parent = clone_1;
          });
          return clone_1;
        }
        case "cdata": {
          var cdata = node;
          var children = recursive ? cloneChildren(cdata.children) : [];
          var clone_2 = new NodeWithChildren("cdata", children);
          children.forEach(function(child) {
            return child.parent = clone_2;
          });
          return clone_2;
        }
        case "doctype": {
          throw new Error("Not implemented yet: ElementType.Doctype case");
        }
      }
    }
    exports2.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// ../node_modules/.pnpm/domhandler@3.3.0/node_modules/domhandler/lib/index.js
var require_lib = __commonJS({
  "../node_modules/.pnpm/domhandler@3.3.0/node_modules/domhandler/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DomHandler = void 0;
    var node_1 = require_node2();
    __exportStar(require_node2(), exports2);
    var reWhitespace = /\s+/g;
    var defaultOpts = {
      normalizeWhitespace: false,
      withStartIndices: false,
      withEndIndices: false
    };
    var DomHandler = (
      /** @class */
      function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this._done = false;
          this._tagStack = [];
          this._lastNode = null;
          this._parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this._callback = callback !== null && callback !== void 0 ? callback : null;
          this._options = options !== null && options !== void 0 ? options : defaultOpts;
          this._elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this._parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          var _a;
          this.dom = [];
          this._done = false;
          this._tagStack = [];
          this._lastNode = null;
          this._parser = (_a = this._parser) !== null && _a !== void 0 ? _a : null;
        };
        DomHandler2.prototype.onend = function() {
          if (this._done)
            return;
          this._done = true;
          this._parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this._lastNode = null;
          var elem = this._tagStack.pop();
          if (!elem || !this._parser) {
            return;
          }
          if (this._options.withEndIndices) {
            elem.endIndex = this._parser.endIndex;
          }
          if (this._elementCB)
            this._elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var element = new node_1.Element(name, attribs);
          this.addNode(element);
          this._tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var normalize2 = this._options.normalizeWhitespace;
          var _lastNode = this._lastNode;
          if (_lastNode && _lastNode.type === "text") {
            if (normalize2) {
              _lastNode.data = (_lastNode.data + data).replace(reWhitespace, " ");
            } else {
              _lastNode.data += data;
            }
          } else {
            if (normalize2) {
              data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this._lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this._lastNode && this._lastNode.type === "comment") {
            this._lastNode.data += data;
            return;
          }
          var node = new node_1.Comment(data);
          this.addNode(node);
          this._lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this._lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_1.Text("");
          var node = new node_1.NodeWithChildren("cdata", [text]);
          this.addNode(node);
          text.parent = node;
          this._lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this._lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this._callback === "function") {
            this._callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this._tagStack[this._tagStack.length - 1];
          var siblings = parent ? parent.children : this.dom;
          var previousSibling = siblings[siblings.length - 1];
          if (this._parser) {
            if (this._options.withStartIndices) {
              node.startIndex = this._parser.startIndex;
            }
            if (this._options.withEndIndices) {
              node.endIndex = this._parser.endIndex;
            }
          }
          siblings.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          if (parent) {
            node.parent = parent;
          }
          this._lastNode = null;
        };
        DomHandler2.prototype.addDataNode = function(node) {
          this.addNode(node);
          this._lastNode = node;
        };
        return DomHandler2;
      }()
    );
    exports2.DomHandler = DomHandler;
    exports2.default = DomHandler;
  }
});

// ../node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/index.js
var require_lib2 = __commonJS({
  "../node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Doctype = exports2.CDATA = exports2.Tag = exports2.Style = exports2.Script = exports2.Comment = exports2.Directive = exports2.Text = exports2.Root = exports2.isTag = exports2.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports2.ElementType || (exports2.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports2.isTag = isTag;
    exports2.Root = ElementType.Root;
    exports2.Text = ElementType.Text;
    exports2.Directive = ElementType.Directive;
    exports2.Comment = ElementType.Comment;
    exports2.Script = ElementType.Script;
    exports2.Style = ElementType.Style;
    exports2.Tag = ElementType.Tag;
    exports2.CDATA = ElementType.CDATA;
    exports2.Doctype = ElementType.Doctype;
  }
});

// ../node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/node.js
var require_node3 = __commonJS({
  "../node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/node.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cloneNode = exports2.hasChildren = exports2.isDocument = exports2.isDirective = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = exports2.Element = exports2.Document = exports2.NodeWithChildren = exports2.ProcessingInstruction = exports2.Comment = exports2.Text = exports2.DataNode = exports2.Node = void 0;
    var domelementtype_1 = require_lib2();
    var nodeTypes = /* @__PURE__ */ new Map([
      [domelementtype_1.ElementType.Tag, 1],
      [domelementtype_1.ElementType.Script, 1],
      [domelementtype_1.ElementType.Style, 1],
      [domelementtype_1.ElementType.Directive, 1],
      [domelementtype_1.ElementType.Text, 3],
      [domelementtype_1.ElementType.CDATA, 4],
      [domelementtype_1.ElementType.Comment, 8],
      [domelementtype_1.ElementType.Root, 9]
    ]);
    var Node = (
      /** @class */
      function() {
        function Node2(type) {
          this.type = type;
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "nodeType", {
          // Read-only aliases
          /**
           * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
           * node {@link type}.
           */
          get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "parentNode", {
          // Read-write aliases for properties
          /**
           * Same as {@link parent}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          /**
           * Same as {@link prev}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          /**
           * Same as {@link next}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      }()
    );
    exports2.Node = Node;
    var DataNode = (
      /** @class */
      function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(type, data) {
          var _this = _super.call(this, type) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          /**
           * Same as {@link data}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node)
    );
    exports2.DataNode = DataNode;
    var Text = (
      /** @class */
      function(_super) {
        __extends(Text2, _super);
        function Text2(data) {
          return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
        }
        return Text2;
      }(DataNode)
    );
    exports2.Text = Text;
    var Comment = (
      /** @class */
      function(_super) {
        __extends(Comment2, _super);
        function Comment2(data) {
          return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
        }
        return Comment2;
      }(DataNode)
    );
    exports2.Comment = Comment;
    var ProcessingInstruction = (
      /** @class */
      function(_super) {
        __extends(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
          _this.name = name;
          return _this;
        }
        return ProcessingInstruction2;
      }(DataNode)
    );
    exports2.ProcessingInstruction = ProcessingInstruction;
    var NodeWithChildren = (
      /** @class */
      function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(type, children) {
          var _this = _super.call(this, type) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          // Aliases
          /** First child of the node. */
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          /** Last child of the node. */
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          /**
           * Same as {@link children}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node)
    );
    exports2.NodeWithChildren = NodeWithChildren;
    var Document = (
      /** @class */
      function(_super) {
        __extends(Document2, _super);
        function Document2(children) {
          return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
        }
        return Document2;
      }(NodeWithChildren)
    );
    exports2.Document = Document;
    var Element = (
      /** @class */
      function(_super) {
        __extends(Element2, _super);
        function Element2(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, type, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          return _this;
        }
        Object.defineProperty(Element2.prototype, "tagName", {
          // DOM Level 1 aliases
          /**
           * Same as {@link name}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a, _b;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element2;
      }(NodeWithChildren)
    );
    exports2.Element = Element;
    function isTag(node) {
      return (0, domelementtype_1.isTag)(node);
    }
    exports2.isTag = isTag;
    function isCDATA(node) {
      return node.type === domelementtype_1.ElementType.CDATA;
    }
    exports2.isCDATA = isCDATA;
    function isText(node) {
      return node.type === domelementtype_1.ElementType.Text;
    }
    exports2.isText = isText;
    function isComment(node) {
      return node.type === domelementtype_1.ElementType.Comment;
    }
    exports2.isComment = isComment;
    function isDirective(node) {
      return node.type === domelementtype_1.ElementType.Directive;
    }
    exports2.isDirective = isDirective;
    function isDocument(node) {
      return node.type === domelementtype_1.ElementType.Root;
    }
    exports2.isDocument = isDocument;
    function hasChildren(node) {
      return Object.prototype.hasOwnProperty.call(node, "children");
    }
    exports2.hasChildren = hasChildren;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      var result;
      if (isText(node)) {
        result = new Text(node.data);
      } else if (isComment(node)) {
        result = new Comment(node.data);
      } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
          return child.parent = clone_1;
        });
        if (node.namespace != null) {
          clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
          clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
          clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
      } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function(child) {
          return child.parent = clone_2;
        });
        result = clone_2;
      } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
          return child.parent = clone_3;
        });
        if (node["x-mode"]) {
          clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
      } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
          instruction["x-name"] = node["x-name"];
          instruction["x-publicId"] = node["x-publicId"];
          instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
      } else {
        throw new Error("Not implemented yet: ".concat(node.type));
      }
      result.startIndex = node.startIndex;
      result.endIndex = node.endIndex;
      if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
      }
      return result;
    }
    exports2.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// ../node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/index.js
var require_lib3 = __commonJS({
  "../node_modules/.pnpm/domhandler@4.3.1/node_modules/domhandler/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DomHandler = void 0;
    var domelementtype_1 = require_lib2();
    var node_1 = require_node3();
    __exportStar(require_node3(), exports2);
    var reWhitespace = /\s+/g;
    var defaultOpts = {
      normalizeWhitespace: false,
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = (
      /** @class */
      function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var normalizeWhitespace = this.options.normalizeWhitespace;
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
              lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            } else {
              lastNode.data += data;
            }
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            if (normalizeWhitespace) {
              data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_1.Text("");
          var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }()
    );
    exports2.DomHandler = DomHandler;
    exports2.default = DomHandler;
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode.js
var require_decode2 = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/decode.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeHTML = exports2.decodeHTMLStrict = exports2.decodeXML = void 0;
    var entities_json_1 = __importDefault(require_entities());
    var legacy_json_1 = __importDefault(require_legacy());
    var xml_json_1 = __importDefault(require_xml());
    var decode_codepoint_1 = __importDefault(require_decode_codepoint());
    var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    exports2.decodeXML = getStrictDecoder(xml_json_1.default);
    exports2.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map) {
      var replace = getReplacer(map);
      return function(str) {
        return String(str).replace(strictEntityRe, replace);
      };
    }
    var sorter = function(a, b) {
      return a < b ? 1 : -1;
    };
    exports2.decodeHTML = function() {
      var legacy = Object.keys(legacy_json_1.default).sort(sorter);
      var keys = Object.keys(entities_json_1.default).sort(sorter);
      for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
          keys[i] += ";?";
          j++;
        } else {
          keys[i] += ";";
        }
      }
      var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var replace = getReplacer(entities_json_1.default);
      function replacer(str) {
        if (str.substr(-1) !== ";")
          str += ";";
        return replace(str);
      }
      return function(str) {
        return String(str).replace(re, replacer);
      };
    }();
    function getReplacer(map) {
      return function replace(str) {
        if (str.charAt(1) === "#") {
          var secondChar = str.charAt(2);
          if (secondChar === "X" || secondChar === "x") {
            return decode_codepoint_1.default(parseInt(str.substr(3), 16));
          }
          return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)] || str;
      };
    }
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/encode.js
var require_encode = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/encode.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escapeUTF8 = exports2.escape = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.encodeXML = void 0;
    var xml_json_1 = __importDefault(require_xml());
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports2.encodeXML = getASCIIEncoder(inverseXML);
    var entities_json_1 = __importDefault(require_entities());
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports2.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    exports2.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
    function getInverseObj(obj) {
      return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
      }, {});
    }
    function getInverseReplacer(inverse) {
      var single = [];
      var multiple = [];
      for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
          single.push("\\" + k);
        } else {
          multiple.push(k);
        }
      }
      single.sort();
      for (var start = 0; start < single.length - 1; start++) {
        var end = start;
        while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
          end += 1;
        }
        var count = 1 + end - start;
        if (count < 3)
          continue;
        single.splice(start, count, single[start] + "-" + single[end]);
      }
      multiple.unshift("[" + single.join("") + "]");
      return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    var getCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.prototype.codePointAt != null ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function(str) {
          return str.codePointAt(0);
        }
      ) : (
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function(c) {
          return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
        }
      )
    );
    function singleCharReplacer(c) {
      return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
      return function(data) {
        return data.replace(re, function(name) {
          return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
      };
    }
    var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
    function escape(data) {
      return data.replace(reEscapeChars, singleCharReplacer);
    }
    exports2.escape = escape;
    function escapeUTF8(data) {
      return data.replace(xmlReplacer, singleCharReplacer);
    }
    exports2.escapeUTF8 = escapeUTF8;
    function getASCIIEncoder(obj) {
      return function(data) {
        return data.replace(reEscapeChars, function(c) {
          return obj[c] || singleCharReplacer(c);
        });
      };
    }
  }
});

// ../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/index.js
var require_lib4 = __commonJS({
  "../node_modules/.pnpm/entities@2.2.0/node_modules/entities/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeXMLStrict = exports2.decodeHTML5Strict = exports2.decodeHTML4Strict = exports2.decodeHTML5 = exports2.decodeHTML4 = exports2.decodeHTMLStrict = exports2.decodeHTML = exports2.decodeXML = exports2.encodeHTML5 = exports2.encodeHTML4 = exports2.escapeUTF8 = exports2.escape = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.encodeXML = exports2.encode = exports2.decodeStrict = exports2.decode = void 0;
    var decode_1 = require_decode2();
    var encode_1 = require_encode();
    function decode(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports2.decode = decode;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports2.decodeStrict = decodeStrict;
    function encode(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports2.encode = encode;
    var encode_2 = require_encode();
    Object.defineProperty(exports2, "encodeXML", { enumerable: true, get: function() {
      return encode_2.encodeXML;
    } });
    Object.defineProperty(exports2, "encodeHTML", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
      return encode_2.escape;
    } });
    Object.defineProperty(exports2, "escapeUTF8", { enumerable: true, get: function() {
      return encode_2.escapeUTF8;
    } });
    Object.defineProperty(exports2, "encodeHTML4", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeHTML5", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    var decode_2 = require_decode2();
    Object.defineProperty(exports2, "decodeXML", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
    Object.defineProperty(exports2, "decodeHTML", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTML4", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML5", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
  }
});

// ../node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/foreignNames.js
var require_foreignNames = __commonJS({
  "../node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/foreignNames.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attributeNames = exports2.elementNames = void 0;
    exports2.elementNames = /* @__PURE__ */ new Map([
      ["altglyph", "altGlyph"],
      ["altglyphdef", "altGlyphDef"],
      ["altglyphitem", "altGlyphItem"],
      ["animatecolor", "animateColor"],
      ["animatemotion", "animateMotion"],
      ["animatetransform", "animateTransform"],
      ["clippath", "clipPath"],
      ["feblend", "feBlend"],
      ["fecolormatrix", "feColorMatrix"],
      ["fecomponenttransfer", "feComponentTransfer"],
      ["fecomposite", "feComposite"],
      ["feconvolvematrix", "feConvolveMatrix"],
      ["fediffuselighting", "feDiffuseLighting"],
      ["fedisplacementmap", "feDisplacementMap"],
      ["fedistantlight", "feDistantLight"],
      ["fedropshadow", "feDropShadow"],
      ["feflood", "feFlood"],
      ["fefunca", "feFuncA"],
      ["fefuncb", "feFuncB"],
      ["fefuncg", "feFuncG"],
      ["fefuncr", "feFuncR"],
      ["fegaussianblur", "feGaussianBlur"],
      ["feimage", "feImage"],
      ["femerge", "feMerge"],
      ["femergenode", "feMergeNode"],
      ["femorphology", "feMorphology"],
      ["feoffset", "feOffset"],
      ["fepointlight", "fePointLight"],
      ["fespecularlighting", "feSpecularLighting"],
      ["fespotlight", "feSpotLight"],
      ["fetile", "feTile"],
      ["feturbulence", "feTurbulence"],
      ["foreignobject", "foreignObject"],
      ["glyphref", "glyphRef"],
      ["lineargradient", "linearGradient"],
      ["radialgradient", "radialGradient"],
      ["textpath", "textPath"]
    ]);
    exports2.attributeNames = /* @__PURE__ */ new Map([
      ["definitionurl", "definitionURL"],
      ["attributename", "attributeName"],
      ["attributetype", "attributeType"],
      ["basefrequency", "baseFrequency"],
      ["baseprofile", "baseProfile"],
      ["calcmode", "calcMode"],
      ["clippathunits", "clipPathUnits"],
      ["diffuseconstant", "diffuseConstant"],
      ["edgemode", "edgeMode"],
      ["filterunits", "filterUnits"],
      ["glyphref", "glyphRef"],
      ["gradienttransform", "gradientTransform"],
      ["gradientunits", "gradientUnits"],
      ["kernelmatrix", "kernelMatrix"],
      ["kernelunitlength", "kernelUnitLength"],
      ["keypoints", "keyPoints"],
      ["keysplines", "keySplines"],
      ["keytimes", "keyTimes"],
      ["lengthadjust", "lengthAdjust"],
      ["limitingconeangle", "limitingConeAngle"],
      ["markerheight", "markerHeight"],
      ["markerunits", "markerUnits"],
      ["markerwidth", "markerWidth"],
      ["maskcontentunits", "maskContentUnits"],
      ["maskunits", "maskUnits"],
      ["numoctaves", "numOctaves"],
      ["pathlength", "pathLength"],
      ["patterncontentunits", "patternContentUnits"],
      ["patterntransform", "patternTransform"],
      ["patternunits", "patternUnits"],
      ["pointsatx", "pointsAtX"],
      ["pointsaty", "pointsAtY"],
      ["pointsatz", "pointsAtZ"],
      ["preservealpha", "preserveAlpha"],
      ["preserveaspectratio", "preserveAspectRatio"],
      ["primitiveunits", "primitiveUnits"],
      ["refx", "refX"],
      ["refy", "refY"],
      ["repeatcount", "repeatCount"],
      ["repeatdur", "repeatDur"],
      ["requiredextensions", "requiredExtensions"],
      ["requiredfeatures", "requiredFeatures"],
      ["specularconstant", "specularConstant"],
      ["specularexponent", "specularExponent"],
      ["spreadmethod", "spreadMethod"],
      ["startoffset", "startOffset"],
      ["stddeviation", "stdDeviation"],
      ["stitchtiles", "stitchTiles"],
      ["surfacescale", "surfaceScale"],
      ["systemlanguage", "systemLanguage"],
      ["tablevalues", "tableValues"],
      ["targetx", "targetX"],
      ["targety", "targetY"],
      ["textlength", "textLength"],
      ["viewbox", "viewBox"],
      ["viewtarget", "viewTarget"],
      ["xchannelselector", "xChannelSelector"],
      ["ychannelselector", "yChannelSelector"],
      ["zoomandpan", "zoomAndPan"]
    ]);
  }
});

// ../node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/index.js
var require_lib5 = __commonJS({
  "../node_modules/.pnpm/dom-serializer@1.4.1/node_modules/dom-serializer/lib/index.js"(exports2) {
    "use strict";
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ElementType = __importStar(require_lib2());
    var entities_1 = require_lib4();
    var foreignNames_1 = require_foreignNames();
    var unencodedElements = /* @__PURE__ */ new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    function formatAttributes(attributes, opts) {
      if (!attributes)
        return;
      return Object.keys(attributes).map(function(key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
          key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
          return key;
        }
        return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
      }).join(" ");
    }
    var singleTag = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    function render(node, options) {
      if (options === void 0) {
        options = {};
      }
      var nodes = "length" in node ? node : [node];
      var output2 = "";
      for (var i = 0; i < nodes.length; i++) {
        output2 += renderNode(nodes[i], options);
      }
      return output2;
    }
    exports2.default = render;
    function renderNode(node, options) {
      switch (node.type) {
        case ElementType.Root:
          return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
          return renderDirective(node);
        case ElementType.Comment:
          return renderComment(node);
        case ElementType.CDATA:
          return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
          return renderTag(node, options);
        case ElementType.Text:
          return renderText(node, options);
      }
    }
    var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
    function renderTag(elem, opts) {
      var _a;
      if (opts.xmlMode === "foreign") {
        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: false });
        }
      }
      if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
      }
      var tag = "<" + elem.name;
      var attribs = formatAttributes(elem.attribs, opts);
      if (attribs) {
        tag += " " + attribs;
      }
      if (elem.children.length === 0 && (opts.xmlMode ? (
        // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
        opts.selfClosingTags !== false
      ) : (
        // User explicitly asked for self-closing tags, even in HTML mode
        opts.selfClosingTags && singleTag.has(elem.name)
      ))) {
        if (!opts.xmlMode)
          tag += " ";
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children.length > 0) {
          tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
          tag += "</" + elem.name + ">";
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<" + elem.data + ">";
    }
    function renderText(elem, opts) {
      var data = elem.data || "";
      if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = entities_1.encodeXML(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[" + elem.children[0].data + "]]>";
    }
    function renderComment(elem) {
      return "<!--" + elem.data + "-->";
    }
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/stringify.js
var require_stringify = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/stringify.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.innerText = exports2.textContent = exports2.getText = exports2.getInnerHTML = exports2.getOuterHTML = void 0;
    var domhandler_1 = require_lib3();
    var dom_serializer_1 = __importDefault(require_lib5());
    var domelementtype_1 = require_lib2();
    function getOuterHTML(node, options) {
      return (0, dom_serializer_1.default)(node, options);
    }
    exports2.getOuterHTML = getOuterHTML;
    function getInnerHTML(node, options) {
      return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
        return getOuterHTML(node2, options);
      }).join("") : "";
    }
    exports2.getInnerHTML = getInnerHTML;
    function getText(node) {
      if (Array.isArray(node))
        return node.map(getText).join("");
      if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
      if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports2.getText = getText;
    function textContent(node) {
      if (Array.isArray(node))
        return node.map(textContent).join("");
      if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports2.textContent = textContent;
    function innerText(node) {
      if (Array.isArray(node))
        return node.map(innerText).join("");
      if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports2.innerText = innerText;
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/traversal.js
var require_traversal = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/traversal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.prevElementSibling = exports2.nextElementSibling = exports2.getName = exports2.hasAttrib = exports2.getAttributeValue = exports2.getSiblings = exports2.getParent = exports2.getChildren = void 0;
    var domhandler_1 = require_lib3();
    var emptyArray = [];
    function getChildren(elem) {
      var _a;
      return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
    }
    exports2.getChildren = getChildren;
    function getParent(elem) {
      return elem.parent || null;
    }
    exports2.getParent = getParent;
    function getSiblings(elem) {
      var _a, _b;
      var parent = getParent(elem);
      if (parent != null)
        return getChildren(parent);
      var siblings = [elem];
      var prev = elem.prev, next = elem.next;
      while (prev != null) {
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
      }
      while (next != null) {
        siblings.push(next);
        _b = next, next = _b.next;
      }
      return siblings;
    }
    exports2.getSiblings = getSiblings;
    function getAttributeValue(elem, name) {
      var _a;
      return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
    }
    exports2.getAttributeValue = getAttributeValue;
    function hasAttrib(elem, name) {
      return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
    }
    exports2.hasAttrib = hasAttrib;
    function getName(elem) {
      return elem.name;
    }
    exports2.getName = getName;
    function nextElementSibling(elem) {
      var _a;
      var next = elem.next;
      while (next !== null && !(0, domhandler_1.isTag)(next))
        _a = next, next = _a.next;
      return next;
    }
    exports2.nextElementSibling = nextElementSibling;
    function prevElementSibling(elem) {
      var _a;
      var prev = elem.prev;
      while (prev !== null && !(0, domhandler_1.isTag)(prev))
        _a = prev, prev = _a.prev;
      return prev;
    }
    exports2.prevElementSibling = prevElementSibling;
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/manipulation.js
var require_manipulation = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/manipulation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.prepend = exports2.prependChild = exports2.append = exports2.appendChild = exports2.replaceElement = exports2.removeElement = void 0;
    function removeElement(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
      }
    }
    exports2.removeElement = removeElement;
    function replaceElement(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
      }
    }
    exports2.replaceElement = replaceElement;
    function appendChild(elem, child) {
      removeElement(child);
      child.next = null;
      child.parent = elem;
      if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
      } else {
        child.prev = null;
      }
    }
    exports2.appendChild = appendChild;
    function append(elem, next) {
      removeElement(next);
      var parent = elem.parent;
      var currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    }
    exports2.append = append;
    function prependChild(elem, child) {
      removeElement(child);
      child.parent = elem;
      child.prev = null;
      if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
      } else {
        child.next = null;
      }
    }
    exports2.prependChild = prependChild;
    function prepend(elem, prev) {
      removeElement(prev);
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    }
    exports2.prepend = prepend;
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/querying.js
var require_querying = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/querying.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.findAll = exports2.existsOne = exports2.findOne = exports2.findOneChild = exports2.find = exports2.filter = void 0;
    var domhandler_1 = require_lib3();
    function filter(test, node, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      if (!Array.isArray(node))
        node = [node];
      return find(test, node, recurse, limit);
    }
    exports2.filter = filter;
    function find(test, nodes, recurse, limit) {
      var result = [];
      for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
          result.push(elem);
          if (--limit <= 0)
            break;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
          var children = find(test, elem.children, recurse, limit);
          result.push.apply(result, children);
          limit -= children.length;
          if (limit <= 0)
            break;
        }
      }
      return result;
    }
    exports2.find = find;
    function findOneChild(test, nodes) {
      return nodes.find(test);
    }
    exports2.findOneChild = findOneChild;
    function findOne(test, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      var elem = null;
      for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!(0, domhandler_1.isTag)(checked)) {
          continue;
        } else if (test(checked)) {
          elem = checked;
        } else if (recurse && checked.children.length > 0) {
          elem = findOne(test, checked.children);
        }
      }
      return elem;
    }
    exports2.findOne = findOne;
    function existsOne(test, nodes) {
      return nodes.some(function(checked) {
        return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
      });
    }
    exports2.existsOne = existsOne;
    function findAll(test, nodes) {
      var _a;
      var result = [];
      var stack = nodes.filter(domhandler_1.isTag);
      var elem;
      while (elem = stack.shift()) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
          stack.unshift.apply(stack, children);
        }
        if (test(elem))
          result.push(elem);
      }
      return result;
    }
    exports2.findAll = findAll;
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/legacy.js
var require_legacy2 = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/legacy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getElementsByTagType = exports2.getElementsByTagName = exports2.getElementById = exports2.getElements = exports2.testElement = void 0;
    var domhandler_1 = require_lib3();
    var querying_1 = require_querying();
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return domhandler_1.isTag;
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.name === name;
        };
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        }
        return function(elem) {
          return elem.type === type;
        };
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && data(elem.data);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isText)(elem) && elem.data === data;
        };
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
        };
      }
      return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
      };
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    function compileTest(options) {
      var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
      });
      return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
    }
    function testElement(options, node) {
      var test = compileTest(options);
      return test ? test(node) : true;
    }
    exports2.testElement = testElement;
    function getElements(options, nodes, recurse, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var test = compileTest(options);
      return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
    }
    exports2.getElements = getElements;
    function getElementById(id, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (!Array.isArray(nodes))
        nodes = [nodes];
      return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
    }
    exports2.getElementById = getElementById;
    function getElementsByTagName(tagName, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
    }
    exports2.getElementsByTagName = getElementsByTagName;
    function getElementsByTagType(type, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
    }
    exports2.getElementsByTagType = getElementsByTagType;
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/helpers.js
var require_helpers = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uniqueSort = exports2.compareDocumentPosition = exports2.removeSubsets = void 0;
    var domhandler_1 = require_lib3();
    function removeSubsets(nodes) {
      var idx = nodes.length;
      while (--idx >= 0) {
        var node = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
          nodes.splice(idx, 1);
          continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
          }
        }
      }
      return nodes;
    }
    exports2.removeSubsets = removeSubsets;
    function compareDocumentPosition(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      if (nodeA === nodeB) {
        return 0;
      }
      var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      var maxIdx = Math.min(aParents.length, bParents.length);
      var idx = 0;
      while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return 1;
      }
      var sharedParent = aParents[idx - 1];
      var siblings = sharedParent.children;
      var aSibling = aParents[idx];
      var bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return 4 | 16;
        }
        return 4;
      }
      if (sharedParent === nodeA) {
        return 2 | 8;
      }
      return 2;
    }
    exports2.compareDocumentPosition = compareDocumentPosition;
    function uniqueSort(nodes) {
      nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
      });
      nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2) {
          return -1;
        } else if (relative & 4) {
          return 1;
        }
        return 0;
      });
      return nodes;
    }
    exports2.uniqueSort = uniqueSort;
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/feeds.js
var require_feeds = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/feeds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getFeed = void 0;
    var stringify_1 = require_stringify();
    var legacy_1 = require_legacy2();
    function getFeed(doc) {
      var feedRoot = getOneElement(isValidFeed, doc);
      return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
    }
    exports2.getFeed = getFeed;
    function getAtomFeed(feedRoot) {
      var _a;
      var childs = feedRoot.children;
      var feed = {
        type: "atom",
        items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
          var _a2;
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "id", children);
          addConditionally(entry, "title", "title", children);
          var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
          if (href2) {
            entry.link = href2;
          }
          var description = fetch("summary", children) || fetch("content", children);
          if (description) {
            entry.description = description;
          }
          var pubDate = fetch("updated", children);
          if (pubDate) {
            entry.pubDate = new Date(pubDate);
          }
          return entry;
        })
      };
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      return feed;
    }
    function getRssFeed(feedRoot) {
      var _a, _b;
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "guid", children);
          addConditionally(entry, "title", "title", children);
          addConditionally(entry, "link", "link", children);
          addConditionally(entry, "description", "description", children);
          var pubDate = fetch("pubDate", children);
          if (pubDate)
            entry.pubDate = new Date(pubDate);
          return entry;
        })
      };
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      return feed;
    }
    var MEDIA_KEYS_STRING = ["url", "type", "lang"];
    var MEDIA_KEYS_INT = [
      "fileSize",
      "bitrate",
      "framerate",
      "samplingrate",
      "channels",
      "duration",
      "height",
      "width"
    ];
    function getMediaElements(where) {
      return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
        var attribs = elem.attribs;
        var media = {
          medium: attribs.medium,
          isDefault: !!attribs.isDefault
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
          var attrib = MEDIA_KEYS_STRING_1[_i];
          if (attribs[attrib]) {
            media[attrib] = attribs[attrib];
          }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
          var attrib = MEDIA_KEYS_INT_1[_a];
          if (attribs[attrib]) {
            media[attrib] = parseInt(attribs[attrib], 10);
          }
        }
        if (attribs.expression) {
          media.expression = attribs.expression;
        }
        return media;
      });
    }
    function getOneElement(tagName, node) {
      return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
    }
    function fetch(tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
    }
    function addConditionally(obj, prop, tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      var val = fetch(tagName, where, recurse);
      if (val)
        obj[prop] = val;
    }
    function isValidFeed(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    }
  }
});

// ../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/index.js
var require_lib6 = __commonJS({
  "../node_modules/.pnpm/domutils@2.8.0/node_modules/domutils/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasChildren = exports2.isDocument = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = void 0;
    __exportStar(require_stringify(), exports2);
    __exportStar(require_traversal(), exports2);
    __exportStar(require_manipulation(), exports2);
    __exportStar(require_querying(), exports2);
    __exportStar(require_legacy2(), exports2);
    __exportStar(require_helpers(), exports2);
    __exportStar(require_feeds(), exports2);
    var domhandler_1 = require_lib3();
    Object.defineProperty(exports2, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports2, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports2, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports2, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports2, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports2, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/FeedHandler.js
var require_FeedHandler = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/FeedHandler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var domhandler_1 = __importDefault(require_lib());
    var DomUtils = __importStar(require_lib6());
    var Parser_1 = require_Parser();
    var FeedHandler = (
      /** @class */
      function(_super) {
        __extends(FeedHandler2, _super);
        function FeedHandler2(callback, options) {
          var _this = this;
          if (typeof callback === "object" && callback !== null) {
            callback = void 0;
            options = callback;
          }
          _this = _super.call(this, callback, options) || this;
          return _this;
        }
        FeedHandler2.prototype.onend = function() {
          var feed = {};
          var feedRoot = getOneElement(isValidFeed, this.dom);
          if (feedRoot) {
            if (feedRoot.name === "feed") {
              var childs = feedRoot.children;
              feed.type = "atom";
              addConditionally(feed, "id", "id", childs);
              addConditionally(feed, "title", "title", childs);
              var href = getAttribute("href", getOneElement("link", childs));
              if (href) {
                feed.link = href;
              }
              addConditionally(feed, "description", "subtitle", childs);
              var updated = fetch("updated", childs);
              if (updated) {
                feed.updated = new Date(updated);
              }
              addConditionally(feed, "author", "email", childs, true);
              feed.items = getElements("entry", childs).map(function(item) {
                var entry = {};
                var children = item.children;
                addConditionally(entry, "id", "id", children);
                addConditionally(entry, "title", "title", children);
                var href2 = getAttribute("href", getOneElement("link", children));
                if (href2) {
                  entry.link = href2;
                }
                var description = fetch("summary", children) || fetch("content", children);
                if (description) {
                  entry.description = description;
                }
                var pubDate = fetch("updated", children);
                if (pubDate) {
                  entry.pubDate = new Date(pubDate);
                }
                return entry;
              });
            } else {
              var childs = getOneElement("channel", feedRoot.children).children;
              feed.type = feedRoot.name.substr(0, 3);
              feed.id = "";
              addConditionally(feed, "title", "title", childs);
              addConditionally(feed, "link", "link", childs);
              addConditionally(feed, "description", "description", childs);
              var updated = fetch("lastBuildDate", childs);
              if (updated) {
                feed.updated = new Date(updated);
              }
              addConditionally(feed, "author", "managingEditor", childs, true);
              feed.items = getElements("item", feedRoot.children).map(function(item) {
                var entry = {};
                var children = item.children;
                addConditionally(entry, "id", "guid", children);
                addConditionally(entry, "title", "title", children);
                addConditionally(entry, "link", "link", children);
                addConditionally(entry, "description", "description", children);
                var pubDate = fetch("pubDate", children);
                if (pubDate)
                  entry.pubDate = new Date(pubDate);
                return entry;
              });
            }
          }
          this.feed = feed;
          this.handleCallback(feedRoot ? null : Error("couldn't find root of feed"));
        };
        return FeedHandler2;
      }(domhandler_1.default)
    );
    exports2.FeedHandler = FeedHandler;
    function getElements(what, where) {
      return DomUtils.getElementsByTagName(what, where, true);
    }
    function getOneElement(what, where) {
      return DomUtils.getElementsByTagName(what, where, true, 1)[0];
    }
    function fetch(what, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      return DomUtils.getText(DomUtils.getElementsByTagName(what, where, recurse, 1)).trim();
    }
    function getAttribute(name, elem) {
      if (!elem) {
        return null;
      }
      var attribs = elem.attribs;
      return attribs[name];
    }
    function addConditionally(obj, prop, what, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      var tmp = fetch(what, where, recurse);
      if (tmp)
        obj[prop] = tmp;
    }
    function isValidFeed(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    }
    var defaultOptions = { xmlMode: true };
    function parseFeed(feed, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var handler = new FeedHandler(options);
      new Parser_1.Parser(handler, options).end(feed);
      return handler.feed;
    }
    exports2.parseFeed = parseFeed;
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/WritableStream.js
var require_WritableStream = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/WritableStream.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Parser_1 = require_Parser();
    var stream_1 = require("stream");
    var string_decoder_1 = require("string_decoder");
    function isBuffer(_chunk, encoding) {
      return encoding === "buffer";
    }
    var WritableStream = (
      /** @class */
      function(_super) {
        __extends(WritableStream2, _super);
        function WritableStream2(cbs, options) {
          var _this = _super.call(this, { decodeStrings: false }) || this;
          _this._decoder = new string_decoder_1.StringDecoder();
          _this._parser = new Parser_1.Parser(cbs, options);
          return _this;
        }
        WritableStream2.prototype._write = function(chunk, encoding, cb) {
          if (isBuffer(chunk, encoding))
            chunk = this._decoder.write(chunk);
          this._parser.write(chunk);
          cb();
        };
        WritableStream2.prototype._final = function(cb) {
          this._parser.end(this._decoder.end());
          cb();
        };
        return WritableStream2;
      }(stream_1.Writable)
    );
    exports2.WritableStream = WritableStream;
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/MultiplexHandler.js
var require_MultiplexHandler = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/MultiplexHandler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var MultiplexHandler = (
      /** @class */
      function() {
        function MultiplexHandler2(func) {
          this._func = func;
        }
        MultiplexHandler2.prototype.onattribute = function(name, value) {
          this._func("onattribute", name, value);
        };
        MultiplexHandler2.prototype.oncdatastart = function() {
          this._func("oncdatastart");
        };
        MultiplexHandler2.prototype.oncdataend = function() {
          this._func("oncdataend");
        };
        MultiplexHandler2.prototype.ontext = function(text) {
          this._func("ontext", text);
        };
        MultiplexHandler2.prototype.onprocessinginstruction = function(name, value) {
          this._func("onprocessinginstruction", name, value);
        };
        MultiplexHandler2.prototype.oncomment = function(comment) {
          this._func("oncomment", comment);
        };
        MultiplexHandler2.prototype.oncommentend = function() {
          this._func("oncommentend");
        };
        MultiplexHandler2.prototype.onclosetag = function(name) {
          this._func("onclosetag", name);
        };
        MultiplexHandler2.prototype.onopentag = function(name, attribs) {
          this._func("onopentag", name, attribs);
        };
        MultiplexHandler2.prototype.onopentagname = function(name) {
          this._func("onopentagname", name);
        };
        MultiplexHandler2.prototype.onerror = function(error) {
          this._func("onerror", error);
        };
        MultiplexHandler2.prototype.onend = function() {
          this._func("onend");
        };
        MultiplexHandler2.prototype.onparserinit = function(parser) {
          this._func("onparserinit", parser);
        };
        MultiplexHandler2.prototype.onreset = function() {
          this._func("onreset");
        };
        return MultiplexHandler2;
      }()
    );
    exports2.default = MultiplexHandler;
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/CollectingHandler.js
var require_CollectingHandler = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/CollectingHandler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var MultiplexHandler_1 = __importDefault(require_MultiplexHandler());
    var CollectingHandler = (
      /** @class */
      function(_super) {
        __extends(CollectingHandler2, _super);
        function CollectingHandler2(cbs) {
          if (cbs === void 0) {
            cbs = {};
          }
          var _this = _super.call(this, function(name) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
            }
            _this.events.push([name].concat(args));
            if (_this._cbs[name])
              (_a = _this._cbs)[name].apply(_a, args);
          }) || this;
          _this._cbs = cbs;
          _this.events = [];
          return _this;
        }
        CollectingHandler2.prototype.onreset = function() {
          this.events = [];
          if (this._cbs.onreset)
            this._cbs.onreset();
        };
        CollectingHandler2.prototype.restart = function() {
          var _a;
          if (this._cbs.onreset)
            this._cbs.onreset();
          for (var i = 0; i < this.events.length; i++) {
            var _b = this.events[i], name_1 = _b[0], args = _b.slice(1);
            if (!this._cbs[name_1]) {
              continue;
            }
            (_a = this._cbs)[name_1].apply(_a, args);
          }
        };
        return CollectingHandler2;
      }(MultiplexHandler_1.default)
    );
    exports2.CollectingHandler = CollectingHandler;
  }
});

// ../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/index.js
var require_lib7 = __commonJS({
  "../node_modules/.pnpm/htmlparser2@4.1.0/node_modules/htmlparser2/lib/index.js"(exports2) {
    "use strict";
    function __export(m) {
      for (var p in m) if (!exports2.hasOwnProperty(p)) exports2[p] = m[p];
    }
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Parser_1 = require_Parser();
    exports2.Parser = Parser_1.Parser;
    var domhandler_1 = require_lib();
    exports2.DomHandler = domhandler_1.DomHandler;
    exports2.DefaultHandler = domhandler_1.DomHandler;
    function parseDOM(data, options) {
      var handler = new domhandler_1.DomHandler(void 0, options);
      new Parser_1.Parser(handler, options).end(data);
      return handler.dom;
    }
    exports2.parseDOM = parseDOM;
    function createDomStream(cb, options, elementCb) {
      var handler = new domhandler_1.DomHandler(cb, options, elementCb);
      return new Parser_1.Parser(handler, options);
    }
    exports2.createDomStream = createDomStream;
    var Tokenizer_1 = require_Tokenizer();
    exports2.Tokenizer = Tokenizer_1.default;
    var ElementType = __importStar(require_lib2());
    exports2.ElementType = ElementType;
    exports2.EVENTS = {
      attribute: 2,
      cdatastart: 0,
      cdataend: 0,
      text: 1,
      processinginstruction: 2,
      comment: 1,
      commentend: 0,
      closetag: 1,
      opentag: 2,
      opentagname: 1,
      error: 1,
      end: 0
    };
    __export(require_FeedHandler());
    __export(require_WritableStream());
    __export(require_CollectingHandler());
    var DomUtils = __importStar(require_lib6());
    exports2.DomUtils = DomUtils;
    var FeedHandler_1 = require_FeedHandler();
    exports2.RssHandler = FeedHandler_1.FeedHandler;
  }
});

// ../node_modules/.pnpm/node-downloader-helper@1.0.19/node_modules/node-downloader-helper/dist/index.js
var require_dist = __commonJS({
  "../node_modules/.pnpm/node-downloader-helper@1.0.19/node_modules/node-downloader-helper/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true }), exports2.DownloaderHelper = exports2.DH_STATES = void 0;
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
      return typeof a;
    } : function(a) {
      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    };
    var _createClass = /* @__PURE__ */ function() {
      function a(a2, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(a2, c.key, c);
      }
      return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    }();
    var _fs = require("fs");
    var fs2 = _interopRequireWildcard(_fs);
    var _url = require("url");
    var URL = _interopRequireWildcard(_url);
    var _path = require("path");
    var path2 = _interopRequireWildcard(_path);
    var _http = require("http");
    var http = _interopRequireWildcard(_http);
    var _https = require("https");
    var https = _interopRequireWildcard(_https);
    var _events = require("events");
    function _interopRequireWildcard(a) {
      if (a && a.__esModule) return a;
      var b = {};
      if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
      return b.default = a, b;
    }
    function _classCallCheck(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(a, b) {
      if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return b && ("object" == typeof b || "function" == typeof b) ? b : a;
    }
    function _inherits(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
    }
    var DH_STATES = exports2.DH_STATES = { IDLE: "IDLE", SKIPPED: "SKIPPED", STARTED: "STARTED", DOWNLOADING: "DOWNLOADING", RETRY: "RETRY", PAUSED: "PAUSED", RESUMED: "RESUMED", STOPPED: "STOPPED", FINISHED: "FINISHED", FAILED: "FAILED" };
    var DownloaderHelper = exports2.DownloaderHelper = function(a) {
      function b(a2, c) {
        var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        _classCallCheck(this, b);
        var e = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
        return e.__validate(a2, c) ? (e.url = e.requestURL = a2, e.state = DH_STATES.IDLE, e.__defaultOpts = { retry: false, method: "GET", headers: {}, fileName: "", override: false, forceResume: false, removeOnStop: true, removeOnFail: true, progressThrottle: 1e3, httpRequestOptions: {}, httpsRequestOptions: {} }, e.__opts = Object.assign({}, e.__defaultOpts), e.__pipes = [], e.__total = 0, e.__downloaded = 0, e.__progress = 0, e.__retryCount = 0, e.__states = DH_STATES, e.__promise = null, e.__request = null, e.__response = null, e.__isResumed = false, e.__isResumable = false, e.__isRedirected = false, e.__destFolder = c, e.__statsEstimate = { time: 0, bytes: 0, prevBytes: 0, throttleTime: 0 }, e.__fileName = "", e.__filePath = "", e.updateOptions(d), e) : _possibleConstructorReturn(e);
      }
      return _inherits(b, a), _createClass(b, [{ key: "start", value: function b2() {
        var a2 = this;
        return new Promise(function(b3, c) {
          a2.__promise = { resolve: b3, reject: c }, a2.__start();
        });
      } }, { key: "pause", value: function b2() {
        var a2 = this;
        return this.__requestAbort(), this.__response && (this.__response.unpipe(), this.__pipes.forEach(function(a3) {
          return a3.stream.unpipe();
        })), this.__fileStream && this.__fileStream.removeAllListeners(), this.__closeFileStream().then(function() {
          return a2.__setState(a2.__states.PAUSED), a2.emit("pause"), true;
        });
      } }, { key: "resume", value: function a2() {
        return this.__setState(this.__states.RESUMED), this.__isResumable && (this.__isResumed = true, this.__options.headers.range = "bytes=" + this.__downloaded + "-"), this.emit("resume", this.__isResumed), this.__start();
      } }, { key: "stop", value: function d() {
        var a2 = this, b2 = function() {
          a2.__resolvePending(), a2.__setState(a2.__states.STOPPED), a2.emit("stop");
        }, c = function() {
          return new Promise(function(c2, d2) {
            fs2.access(a2.__filePath, function(e) {
              return e ? (b2(), c2(true)) : void fs2.unlink(a2.__filePath, function(e2) {
                return e2 ? (a2.__setState(a2.__states.FAILED), a2.emit("error", e2), d2(e2)) : void (b2(), c2(true));
              });
            });
          });
        };
        return this.__requestAbort(), this.__closeFileStream().then(function() {
          return a2.__opts.removeOnStop ? c() : (b2(), Promise.resolve(true));
        });
      } }, { key: "pipe", value: function c(a2) {
        var b2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        return this.__pipes.push({ stream: a2, options: b2 }), a2;
      } }, { key: "unpipe", value: function d() {
        var a2 = this, b2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, c = function(b3) {
          return a2.__response ? a2.__response.unpipe(b3) : b3.unpipe();
        };
        if (b2) {
          var e = this.__pipes.find(function(a3) {
            return a3.stream === b2;
          });
          return void (e && (c(b2), this.__pipes = this.__pipes.filter(function(a3) {
            return a3.stream !== b2;
          })));
        }
        this.__pipes.forEach(function(a3) {
          return c(a3.stream);
        }), this.__pipes = [];
      } }, { key: "getDownloadPath", value: function a2() {
        return this.__filePath;
      } }, { key: "isResumable", value: function a2() {
        return this.__isResumable;
      } }, { key: "updateOptions", value: function b2(a2) {
        this.__opts = Object.assign({}, this.__opts, a2), this.__headers = this.__opts.headers, ("number" != typeof this.__opts.progressThrottle || 0 > this.__opts.progressThrottle) && (this.__opts.progressThrottle = this.__defaultOpts.progressThrottle), this.__options = this.__getOptions(this.__opts.method, this.url, this.__opts.headers), this.__initProtocol(this.url);
      } }, { key: "getStats", value: function a2() {
        return { total: this.__total, name: this.__fileName, downloaded: this.__downloaded, progress: this.__progress, speed: this.__statsEstimate.bytes };
      } }, { key: "getTotalSize", value: function c() {
        var a2 = this, b2 = this.__getOptions("HEAD", this.url, this.__headers);
        return new Promise(function(c2, d) {
          var e = a2.__protocol.request(b2, function(b3) {
            if (a2.__isRequireRedirect(b3)) {
              var e2 = URL.resolve(a2.url, b3.headers.location), f = a2.__getOptions("HEAD", e2, a2.__headers), g = a2.__protocol.request(f, function(b4) {
                200 !== b4.statusCode && d(new Error("Response status was " + b4.statusCode)), c2({ name: a2.__getFileNameFromHeaders(b4.headers, b4), total: parseInt(b4.headers["content-length"] || 0) });
              });
              return void g.end();
            }
            200 !== b3.statusCode && d(new Error("Response status was " + b3.statusCode)), c2({ name: a2.__getFileNameFromHeaders(b3.headers, b3), total: parseInt(b3.headers["content-length"] || 0) });
          });
          e.end();
        });
      } }, { key: "__start", value: function a2() {
        this.__isRedirected || this.state === this.__states.RESUMED || (this.emit("start"), this.__setState(this.__states.STARTED)), this.__response = null, this.__request = this.__downloadRequest(this.__promise.resolve, this.__promise.reject), this.__request.on("error", this.__onError(this.__promise.resolve, this.__promise.reject)), this.__request.on("timeout", this.__onTimeout(this.__promise.resolve, this.__promise.reject)), this.__request.on("uncaughtException", this.__onError(this.__promise.resolve, this.__promise.reject, true)), this.__request.end();
      } }, { key: "__resolvePending", value: function b2() {
        if (this.__promise) {
          var a2 = this.__promise.resolve;
          return this.__promise = null, a2(true);
        }
      } }, { key: "__downloadRequest", value: function d(a2, b2) {
        var c = this;
        return this.__protocol.request(this.__options, function(d2) {
          if (c.__response = d2, c.__isResumed || (c.__total = parseInt(d2.headers["content-length"]), c.__resetStats()), c.__isRequireRedirect(d2)) {
            var e = URL.resolve(c.url, d2.headers.location);
            return c.__isRedirected = true, c.__initProtocol(e), c.__start();
          }
          if (200 !== d2.statusCode && 206 !== d2.statusCode) {
            var f = new Error("Response status was " + d2.statusCode);
            return f.status = d2.statusCode || 0, f.body = d2.body || "", c.__setState(c.__states.FAILED), c.emit("error", f), b2(f);
          }
          c.__opts.forceResume ? c.__isResumable = true : d2.headers.hasOwnProperty("accept-ranges") && "none" !== d2.headers["accept-ranges"] && (c.__isResumable = true), c.__startDownload(d2, a2, b2);
        });
      } }, { key: "__startDownload", value: function f(a2, b2, c) {
        var d = this, e = a2;
        if (!this.__isResumed) {
          var g = this.__getFileNameFromHeaders(a2.headers);
          if (this.__filePath = this.__getFilePath(g), this.__fileName = this.__filePath.split(path2.sep).pop(), fs2.existsSync(this.__filePath)) {
            var h = this.__getFilesizeInBytes(this.__filePath);
            if ("object" === _typeof(this.__opts.override) && this.__opts.override.skip && (this.__opts.override.skipSmaller || h >= this.__total)) return this.emit("skip", { totalSize: this.__total, fileName: this.__fileName, filePath: this.__filePath, downloadedSize: h }), this.__setState(this.__states.SKIPPED), b2(true);
          }
          this.__fileStream = fs2.createWriteStream(this.__filePath, {});
        } else this.__fileStream = fs2.createWriteStream(this.__filePath, { flags: "a" });
        this.emit("download", { fileName: this.__fileName, filePath: this.__filePath, totalSize: this.__total, isResumed: this.__isResumed, downloadedSize: this.__downloaded }), this.__retryCount = 0, this.__isResumed = false, this.__isRedirected = false, this.__setState(this.__states.DOWNLOADING), this.__statsEstimate.time = /* @__PURE__ */ new Date(), this.__statsEstimate.throttleTime = /* @__PURE__ */ new Date(), e.on("data", function(a3) {
          return d.__calculateStats(a3.length);
        }), this.__pipes.forEach(function(a3) {
          e.pipe(a3.stream, a3.options), e = a3.stream;
        }), e.pipe(this.__fileStream), e.on("error", this.__onError(b2, c)), this.__fileStream.on("finish", this.__onFinished(b2, c)), this.__fileStream.on("error", this.__onError(b2, c));
      } }, { key: "__hasFinished", value: function a2() {
        return this.state !== this.__states.PAUSED && this.state !== this.__states.STOPPED && this.state !== this.__states.RETRY && this.state !== this.__states.FAILED;
      } }, { key: "__isRequireRedirect", value: function b2(a2) {
        return 300 < a2.statusCode && 400 > a2.statusCode && a2.headers.hasOwnProperty("location") && a2.headers.location;
      } }, { key: "__onFinished", value: function d(a2, b2) {
        var c = this;
        return function() {
          c.__fileStream.close(function(d2) {
            return d2 ? b2(d2) : (c.__hasFinished() && (c.__setState(c.__states.FINISHED), c.__pipes = [], c.emit("end", { fileName: c.__fileName, filePath: c.__filePath, totalSize: c.__total, incomplete: c.__downloaded !== c.__total, onDiskSize: c.__getFilesizeInBytes(c.__filePath), downloadedSize: c.__downloaded })), a2(c.__downloaded === c.__total));
          });
        };
      } }, { key: "__closeFileStream", value: function b2() {
        var a2 = this;
        return this.__fileStream ? new Promise(function(b3, c) {
          a2.__fileStream.close(function(a3) {
            return a3 ? c(a3) : b3(true);
          });
        }) : Promise.resolve(true);
      } }, { key: "__onError", value: function e(a2, b2) {
        var c = this, d = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
        return function(a3) {
          return c.__pipes = [], d && c.__requestAbort(), c.state === c.__states.STOPPED || c.state === c.__states.FAILED ? void 0 : c.__opts.retry ? c.__retry(a3).catch(function(d2) {
            c.__removeFile().then(function() {
              c.__setState(c.__states.FAILED), c.emit("error", d2 ? d2 : a3), b2(d2 ? d2 : a3);
            });
          }) : c.__removeFile().then(function() {
            c.__setState(c.__states.FAILED), c.emit("error", a3), b2(a3);
          });
        };
      } }, { key: "__retry", value: function c() {
        var a2 = this, b2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
        return this.__opts.retry ? "object" === _typeof(this.__opts.retry) && this.__opts.retry.hasOwnProperty("maxRetries") && this.__opts.retry.hasOwnProperty("delay") ? this.__retryCount >= this.__opts.retry.maxRetries ? Promise.reject(b2 ? b2 : new Error("reached the maximum retries")) : (this.__retryCount++, this.__setState(this.__states.RETRY), this.emit("retry", this.__retryCount, this.__opts.retry, b2), new Promise(function(b3) {
          return setTimeout(function() {
            return b3(0 < a2.__downloaded ? a2.resume() : a2.__start());
          }, a2.__opts.retry.delay);
        })) : Promise.reject(new Error("wrong retry options")) : Promise.reject(b2);
      } }, { key: "__onTimeout", value: function d(a2, b2) {
        var c = this;
        return function() {
          return c.__requestAbort(), c.__opts.retry ? c.__retry(new Error("timeout")).catch(function(a3) {
            c.__removeFile().then(function() {
              c.__setState(c.__states.FAILED), a3 ? b2(a3) : (c.emit("timeout"), b2(new Error("timeout")));
            });
          }) : c.__removeFile().then(function() {
            c.__setState(c.__states.FAILED), c.emit("timeout"), b2(new Error("timeout"));
          });
        };
      } }, { key: "__resetStats", value: function a2() {
        this.__retryCount = 0, this.__downloaded = 0, this.__progress = 0, this.__statsEstimate = { time: 0, bytes: 0, prevBytes: 0 };
      } }, { key: "__getFileNameFromHeaders", value: function d(a2, b2) {
        var c = "";
        return a2.hasOwnProperty("content-disposition") && -1 < a2["content-disposition"].indexOf("filename=") ? (c = a2["content-disposition"], c = c.trim(), c = c.substr(c.indexOf("filename=") + 9), c = c.replace(/"/g, ""), c = c.replace(/[/\\]/g, "")) : 0 < path2.basename(URL.parse(this.requestURL).pathname).length ? c = path2.basename(URL.parse(this.requestURL).pathname) : c = URL.parse(this.requestURL).hostname + ".html", this.__opts.fileName ? this.__getFileNameFromOpts(c, b2) : c.replace(/\.*$/, "");
      } }, { key: "__getFilePath", value: function d(a2) {
        var b2 = path2.join(this.__destFolder, a2), c = b2;
        return this.__opts.override || this.state === this.__states.RESUMED || (c = this.__uniqFileNameSync(c), b2 !== c && this.emit("renamed", { path: c, fileName: c.split(path2.sep).pop(), prevPath: b2, prevFileName: b2.split(path2.sep).pop() })), c;
      } }, { key: "__getFileNameFromOpts", value: function g(a2, b2) {
        if (!this.__opts.fileName) return a2;
        if ("string" == typeof this.__opts.fileName) return this.__opts.fileName;
        if ("function" == typeof this.__opts.fileName) {
          var h = path2.join(this.__destFolder, a2);
          return b2 && b2.headers || this.__response && this.__response.headers ? this.__opts.fileName(a2, h, (b2 ? b2 : this.__response).headers["content-type"]) : this.__opts.fileName(a2, h);
        }
        if ("object" === _typeof(this.__opts.fileName)) {
          var c = this.__opts.fileName, d = c.name, e = !!c.hasOwnProperty("ext") && c.ext;
          if ("string" == typeof e) return d + "." + e;
          if ("boolean" == typeof e) {
            if (e) return d;
            var f = a2.includes(".") ? a2.split(".").pop() : "";
            return "" === f ? d : d + "." + f;
          }
        }
        return a2;
      } }, { key: "__calculateStats", value: function e(a2) {
        var b2 = /* @__PURE__ */ new Date(), c = b2 - this.__statsEstimate.time, d = b2 - this.__statsEstimate.throttleTime;
        a2 && (this.__downloaded += a2, this.__progress = 100 * (this.__downloaded / this.__total), (this.__downloaded === this.__total || 1e3 < c) && (this.__statsEstimate.time = b2, this.__statsEstimate.bytes = this.__downloaded - this.__statsEstimate.prevBytes, this.__statsEstimate.prevBytes = this.__downloaded), (this.__downloaded === this.__total || d > this.__opts.progressThrottle) && (this.__statsEstimate.throttleTime = b2, this.emit("progress.throttled", this.getStats())), this.emit("progress", this.getStats()));
      } }, { key: "__setState", value: function b2(a2) {
        this.state = a2, this.emit("stateChanged", this.state);
      } }, { key: "__getOptions", value: function f(a2, b2) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, d = URL.parse(b2), e = { protocol: d.protocol, host: d.hostname, port: d.port, path: d.path, method: a2 };
        return c && (e.headers = c), e;
      } }, { key: "__getFilesizeInBytes", value: function d(a2) {
        var b2 = fs2.statSync(a2, false), c = b2.size || 0;
        return c;
      } }, { key: "__validate", value: function d(a2, b2) {
        if ("string" != typeof a2) throw new Error("URL should be an string");
        if (!a2) throw new Error("URL couldn't be empty");
        if ("string" != typeof b2) throw new Error("Destination Folder should be an string");
        if (!b2) throw new Error("Destination Folder couldn't be empty");
        if (!fs2.existsSync(b2)) throw new Error("Destination Folder must exist");
        var c = fs2.statSync(b2);
        if (!c.isDirectory()) throw new Error("Destination Folder must be a directory");
        try {
          fs2.accessSync(b2, fs2.constants.W_OK);
        } catch (a3) {
          throw new Error("Destination Folder must be writable");
        }
        return true;
      } }, { key: "__initProtocol", value: function c(a2) {
        var b2 = this.__getOptions(this.__opts.method, a2, this.__headers);
        this.requestURL = a2, -1 < a2.indexOf("https://") ? (this.__protocol = https, this.__options = Object.assign({}, b2, this.__opts.httpsRequestOptions)) : (this.__protocol = http, this.__options = Object.assign({}, b2, this.__opts.httpRequestOptions));
      } }, { key: "__uniqFileNameSync", value: function f(a2) {
        if ("string" != typeof a2 || "" === a2) return a2;
        try {
          fs2.accessSync(a2, fs2.F_OK);
          var b2 = a2.match(/(.*)(\([0-9]+\))(\..*)$/), c = b2 ? b2[1].trim() : a2, d = b2 ? parseInt(b2[2].replace(/\(|\)/, "")) : 0, e = a2.split(".").pop();
          return e !== a2 && 0 < e.length ? (e = "." + e, c = c.replace(e, "")) : e = "", this.__uniqFileNameSync(c + " (" + ++d + ")" + e);
        } catch (b3) {
          return a2;
        }
      } }, { key: "__removeFile", value: function b2() {
        var a2 = this;
        return new Promise(function(b3) {
          return a2.__fileStream ? void a2.__fileStream.close(function() {
            return a2.__opts.removeOnFail ? fs2.unlink(a2.__filePath, function() {
              return b3();
            }) : void b3();
          }) : b3();
        });
      } }, { key: "__requestAbort", value: function a2() {
        this.__response && this.__response.destroy(), this.__request && (this.__request.destroy ? this.__request.destroy() : this.__request.abort());
      } }]), b;
    }(_events.EventEmitter);
  }
});

// src/index.ts
var import_anymatch = __toESM(require_anymatch());
var fs = __toESM(require("fs"));
var os = __toESM(require("os"));
var path = __toESM(require("path"));
var import_vscode2 = require("vscode");

// src/beautifyHtml.ts
var beautifyHtml = require_js().html;
var phpParser = require_src2();
var htmlparser = require_lib7();
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
  if (typeof list === "string") {
    if (list.length > 0) {
      return list.split(",").map((t) => t.trim().toLowerCase());
    }
    return [];
  }
  return dflt;
}
function preAction(php) {
  let scriptStyleRanges = getScriptStyleRanges(php);
  let strArr = [];
  let tokens = new phpParser().tokenGetAll(php);
  let c = tokens.length;
  let index = 0;
  for (let i = 0; i < c; i++) {
    let t = tokens[i];
    if (inScriptStyleTag(scriptStyleRanges, index)) {
      if (typeof t == "object") {
        if (t[0] == "T_OPEN_TAG" || t[0] == "T_OPEN_TAG_WITH_ECHO") {
          strArr.push("/*%pcs-comment-start#" + t[1]);
        } else if (t[0] == "T_CLOSE_TAG") {
          let ms2 = t[1].match(/(\S+)(\s+)$/);
          if (ms2) {
            strArr.push(ms2[1] + "%pcs-comment-end#*/" + ms2[2]);
          } else {
            strArr.push(t[1] + "%pcs-comment-end#*/");
          }
        } else {
          if (t[0] == "T_INLINE_HTML") {
            strArr.push(t[1]);
          } else {
            let str = t[1].replace(/\*\//g, "*%comment-end#/").replace(/"/g, "pcs%quote#1").replace(/'/g, "pcs%quote~2");
            strArr.push(str);
          }
        }
        index += t[1].length;
      } else {
        strArr.push(t);
        index += t.length;
      }
    } else {
      if (typeof t == "object") {
        if (t[0] == "T_OPEN_TAG" || t[0] == "T_OPEN_TAG_WITH_ECHO") {
          strArr.push("<i></i><!-- %pcs-comment-start#" + t[1]);
        } else if (t[0] == "T_CLOSE_TAG") {
          var ms = t[1].match(/(\S+)(\s+)$/);
          if (ms) {
            strArr.push(ms[1] + "%pcs-comment-end#-->" + ms[2]);
          } else {
            strArr.push(t[1] + "%pcs-comment-end#-->");
          }
        } else {
          if (t[0] == "T_INLINE_HTML") {
            strArr.push(t[1]);
          } else {
            let str = t[1].replace(/-->/g, "-%comment-end#->").replace(/"/g, "pcs%quote#1").replace(/'/g, "pcs%quote~2");
            strArr.push(str);
          }
        }
        index += t[1].length;
      } else {
        strArr.push(t);
        index += t.length;
      }
    }
  }
  if (typeof tokens[c - 1] == "object" && tokens[c - 1][0] != "T_CLOSE_TAG" && tokens[c - 1][0] != "T_INLINE_HTML") {
    strArr.push("?>%pcs-comment-end#-->");
  }
  return strArr.join("");
}
function afterAction(php) {
  return php.replace(/%pcs-comment-end#-->/g, "").replace(/<i>\s*<\/i>\s*<!-- %pcs-comment-start#/g, "").replace(/-%comment-end#->/g, "-->").replace(/%pcs-comment-end#\*\//g, "").replace(/\/\*%pcs-comment-start#/g, "").replace(/\*%comment-end#\//g, "*/").replace(/pcs%quote#1/g, '"').replace(/pcs%quote~2/g, "'");
}
function getScriptStyleRanges(php) {
  let ranges = [];
  let start = 0;
  let parser = new htmlparser.Parser(
    {
      onopentag: (name) => {
        if (name === "script" || name === "style") {
          start = parser.startIndex;
        }
      },
      onclosetag: (name) => {
        if (name === "script" || name === "style") {
          ranges.push([start, parser.endIndex]);
        }
      }
    },
    {
      decodeEntities: true
    }
  );
  parser.write(php);
  parser.end();
  return ranges;
}
function inScriptStyleTag(ranges, index) {
  for (let i = 0, c = ranges.length; i < c; i++) {
    if (index >= ranges[i][0] && index <= ranges[i][1]) {
      return true;
    }
  }
  return false;
}
function beautify(text, options) {
  let indexOfPhp = text.indexOf("<?php");
  let indexOfEndPhp = text.indexOf("?>");
  if (indexOfPhp > -1 && indexOfPhp == text.lastIndexOf("<?php") && indexOfEndPhp == text.lastIndexOf("?>")) {
    if (indexOfEndPhp == -1 || indexOfEndPhp + 3 == text.length) {
      return text.replace(/^\s+<\?php/i, "<?php");
    }
  }
  let htmlOptions = {
    indent_size: options.insertSpaces ? options.tabSize : 1,
    indent_char: options.insertSpaces ? " " : "	",
    wrap_line_length: getFormatOption(options, "wrapLineLength", 120),
    unformatted: getTagsFormatOption(options, "unformatted", ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "?php", "?=", "basefont", "isindex"]),
    content_unformatted: getTagsFormatOption(options, "contentUnformatted", void 0),
    indent_inner_html: getFormatOption(options, "indentInnerHtml", false),
    preserve_newlines: getFormatOption(options, "preserveNewLines", false),
    max_preserve_newlines: getFormatOption(options, "maxPreserveNewLines", void 0),
    indent_handlebars: getFormatOption(options, "indentHandlebars", false),
    end_with_newline: getFormatOption(options, "endWithNewline", false),
    extra_liners: getTagsFormatOption(options, "extraLiners", void 0),
    wrap_attributes: getFormatOption(options, "wrapAttributes", "auto"),
    templating: "php"
  };
  let php = preAction(text);
  return afterAction(beautifyHtml(php, htmlOptions));
}

// src/index.d.ts
var PHPCSFixerConfig = class {
};

// src/output.ts
var import_vscode = require("vscode");
var outputChannel = null;
var statusBarItem = null;
function createOutput() {
  if (outputChannel == null) {
    outputChannel = import_vscode.window.createOutputChannel("php-cs-fixer");
  }
}
function output(str) {
  createOutput();
  outputChannel.appendLine(str);
}
function showOutput() {
  createOutput();
  outputChannel.show(true);
}
function clearOutput() {
  outputChannel?.clear();
}
function statusInfo(str) {
  if (statusBarItem == null) {
    statusBarItem = import_vscode.window.createStatusBarItem(import_vscode.StatusBarAlignment.Left, -1e7);
    statusBarItem.command = "php-cs-fixer.showOutput";
    statusBarItem.tooltip = "php-cs-fixer: show output";
  }
  statusBarItem.show();
  statusBarItem.text = "php-cs-fixer: " + str;
}
function hideStatusBar() {
  statusBarItem?.hide();
}
function disposeOutput() {
  if (outputChannel) {
    outputChannel.clear();
    outputChannel.dispose();
  }
  if (statusBarItem) {
    statusBarItem.hide();
    statusBarItem.dispose();
  }
  outputChannel = null;
  statusBarItem = null;
}

// src/runAsync.ts
var import_child_process = require("child_process");
function runAsync(command, args, options, onData = null) {
  const cpOptions = Object.assign({}, options, { shell: process.platform == "win32" });
  let cp;
  try {
    if (process.platform == "win32") {
      if (command.includes(" ") && command[0] != '"') {
        command = '"' + command + '"';
      }
    }
    output("runAsync: spawn " + command);
    output(JSON.stringify(args, null, 2));
    output(JSON.stringify(cpOptions, null, 2));
    cp = (0, import_child_process.spawn)(command, args, cpOptions);
  } catch (err) {
    const promise2 = new Promise((resolve, reject) => {
      output("runAsync: error");
      output(JSON.stringify(err, null, 2));
      output("runAsync: reject promise");
      reject(err);
    });
    promise2.cp = cp;
    return promise2;
  }
  const promise = new Promise((resolve, reject) => {
    let stdout = null;
    let stderr = null;
    cp.stdout && cp.stdout.on("data", (data) => {
      stdout = stdout || Buffer.from("");
      stdout = Buffer.concat([stdout, data]);
      onData && onData(data);
    });
    cp.stderr && cp.stderr.on("data", (data) => {
      stderr = stderr || Buffer.from("");
      stderr = Buffer.concat([stderr, data]);
      onData && onData(data);
    });
    const cleanupListeners = () => {
      cp.removeListener("error", onError);
      cp.removeListener("close", onClose);
    };
    const onError = (err) => {
      cleanupListeners();
      output("runAsync: error");
      output(JSON.stringify(err, null, 2));
      output("runAsync: reject promise");
      reject(err);
    };
    const onClose = (code) => {
      cleanupListeners();
      const resolved = resolveRun(code, stdout, stderr);
      if (resolved instanceof Error) {
        output("runAsync: error");
        output(JSON.stringify(resolved, null, 2));
        output("runAsync: reject promise");
        reject(resolved);
      } else {
        output("runAsync: success");
        output(JSON.stringify(resolved, null, 2));
        output("runAsync: resolve promise");
        resolve(resolved);
      }
    };
    cp.on("error", onError).on("close", onClose);
  });
  promise.cp = cp;
  return promise;
}
function resolveRun(exitCode, stdout, stderr) {
  stdout = stdout && stdout.toString();
  stderr = stderr && stderr.toString();
  if (exitCode !== 0) {
    return Object.assign(new Error(`Command failed, exited with code #${exitCode}`), {
      exitCode,
      stdout,
      stderr
    });
  }
  return {
    stdout,
    stderr
  };
}

// src/index.ts
var TmpDir = os.tmpdir();
var HomeDir = os.homedir();
var isRunning = false;
var PHPCSFixer = class extends PHPCSFixerConfig {
  constructor() {
    super();
    this.loadSettings();
    this.checkUpdate();
  }
  loadSettings() {
    const config = import_vscode2.workspace.getConfiguration("php-cs-fixer");
    this.onsave = config.get("onsave", false);
    this.autoFixByBracket = config.get("autoFixByBracket", true);
    this.autoFixBySemicolon = config.get("autoFixBySemicolon", false);
    this.executablePath = config.get("executablePath", process.platform === "win32" ? "php-cs-fixer.bat" : "php-cs-fixer");
    if (process.platform == "win32" && config.get("executablePathWindows", "").length > 0) {
      this.executablePath = config.get("executablePathWindows");
    }
    this.executablePath = this.resolveVscodeExpressions(this.executablePath);
    this.rules = config.get("rules", "@PSR12");
    if (typeof this.rules == "object") {
      this.rules = JSON.stringify(this.rules);
    }
    this.config = config.get("config", ".php-cs-fixer.php;.php-cs-fixer.dist.php;.php_cs;.php_cs.dist");
    this.formatHtml = config.get("formatHtml", false);
    this.documentFormattingProvider = config.get("documentFormattingProvider", true);
    this.allowRisky = config.get("allowRisky", false);
    this.pathMode = config.get("pathMode", "override");
    this.ignorePHPVersion = config.get("ignorePHPVersion", false);
    this.exclude = config.get("exclude", []);
    this.tmpDir = config.get("tmpDir", "");
    if (this.executablePath.endsWith(".phar")) {
      this.pharPath = this.executablePath.replace(/^php[^ ]* /i, "");
      this.executablePath = import_vscode2.workspace.getConfiguration("php").get("validate.executablePath", "php");
      if (!this.executablePath) {
        this.executablePath = "php";
      }
    } else {
      this.pharPath = null;
    }
    this.editorFormatOnSave = import_vscode2.workspace.getConfiguration("editor").get("formatOnSave");
  }
  /**
   * Gets the workspace folder containing the given uri or `null` if no
   * workspace folder contains it and it cannot be reasonably inferred.
   */
  getActiveWorkspaceFolder(uri) {
    let candidate = import_vscode2.workspace.getWorkspaceFolder(uri);
    if (candidate === void 0 && import_vscode2.workspace.workspaceFolders?.length === 1) {
      candidate = import_vscode2.workspace.workspaceFolders[0];
    }
    return candidate;
  }
  /**
   * Resolves and interpolates vscode expressions in a given string.
   *
   * Supports the following expressions:
   * - "${workspaceFolder}" or "${workspaceRoot}" (deprecated). Resolves to the
   *   workspace folder that contains the given `context.uri`.
   * - "${extensionPath}" Resolves to the root folder of this extension.
   * - "~" Resolves to the user's home directory.
   *
   * @param context Any additional context that may be necessary to resolve
   * expressions. Expressions with missing context are left as is.
   */
  resolveVscodeExpressions(input, context = {}) {
    const pattern = /^\$\{workspace(Root|Folder)\}/;
    if (pattern.test(input) && context.uri) {
      const workspaceFolder = this.getActiveWorkspaceFolder(context.uri);
      if (workspaceFolder != null && workspaceFolder.uri.scheme === "file") {
        input = input.replace(pattern, workspaceFolder.uri.fsPath);
      }
    }
    input = input.replace("${extensionPath}", __dirname);
    input = input.replace(/^~\//, os.homedir() + "/");
    return path.normalize(input);
  }
  getRealExecutablePath(uri) {
    return this.resolveVscodeExpressions(this.executablePath, { uri });
  }
  getArgs(uri, filePath = null) {
    filePath = filePath || uri.fsPath;
    let args = ["fix", "--using-cache=no", "--format=json"];
    if (this.pharPath != null) {
      args.unshift(this.resolveVscodeExpressions(this.pharPath, { uri }));
    }
    let useConfig = false;
    if (this.config.length > 0) {
      let rootUri = this.getActiveWorkspaceFolder(uri)?.uri;
      let configFiles = this.config.split(";").filter((file) => "" !== file).map((file) => file.replace(/^~\//, os.homedir() + "/"));
      let searchUris = [];
      if (rootUri != null && rootUri.scheme === "file") {
        searchUris = [import_vscode2.Uri.joinPath(rootUri, ".vscode"), rootUri];
      }
      const files = [];
      for (const file of configFiles) {
        if (path.isAbsolute(file)) {
          files.push(file);
        } else {
          for (const searchUri of searchUris) {
            files.push(import_vscode2.Uri.joinPath(searchUri, file).fsPath);
          }
        }
      }
      for (let i = 0, len = files.length; i < len; i++) {
        let c = files[i];
        if (fs.existsSync(c)) {
          args.push("--config=" + c);
          useConfig = true;
          break;
        }
      }
    }
    if (!useConfig && this.rules) {
      let rules = this.rules;
      if (process.platform === "win32") {
        rules = '"' + rules.replace(/"/g, '\\"') + '"';
      } else {
        rules = rules.replace(/\s+/g, "");
        statusInfo("rules can't contain whitespaces on linux os!");
      }
      args.push("--rules=" + rules);
    }
    if (this.allowRisky) {
      args.push("--allow-risky=yes");
    }
    if (filePath.startsWith(TmpDir)) {
      args.push("--path-mode=override");
    } else {
      args.push("--path-mode=" + this.pathMode);
    }
    args.push(filePath);
    return args;
  }
  format(text, uri, isDiff = false, isPartial = false) {
    isRunning = true;
    clearOutput();
    isPartial || statusInfo("formatting");
    let filePath;
    if (isPartial) {
      filePath = TmpDir + "/php-cs-fixer-partial.php";
    } else {
      let tmpDirs = [this.tmpDir, TmpDir, HomeDir].filter(Boolean);
      for (let i = 0; i < tmpDirs.length; i++) {
        filePath = path.join(tmpDirs[i], "pcf-tmp" + Math.random(), uri.fsPath.replace(/^.*[\\/]/, ""));
        try {
          fs.mkdirSync(path.dirname(filePath), { recursive: true });
          this.tmpDir = tmpDirs[i];
          break;
        } catch (err) {
          console.error(err);
          filePath = "";
        }
      }
      if (!filePath) {
        statusInfo("can't make tmp dir, please check the php-cs-fixer settings, set a writable dir to tmpDir.");
        return Promise.reject();
      }
    }
    fs.writeFileSync(filePath, text);
    const args = this.getArgs(uri, filePath);
    const opts = {};
    if (uri.scheme == "file") {
      opts.cwd = path.dirname(uri.fsPath);
    }
    if (this.ignorePHPVersion) {
      opts.env = Object.create(process.env);
      opts.env.PHP_CS_FIXER_IGNORE_ENV = "1";
    }
    return new Promise((resolve, reject) => {
      runAsync(this.getRealExecutablePath(uri), args, opts).then(({ stdout, stderr }) => {
        output(stdout);
        if (isDiff) {
          resolve(filePath);
        } else {
          let result = JSON.parse(stdout);
          if (result && result.files.length > 0) {
            resolve(fs.readFileSync(filePath, "utf-8"));
          } else {
            let lines = stderr.split(/\r?\n/).filter(Boolean);
            if (lines.length > 1) {
              output(stderr);
              isPartial || statusInfo(lines[1]);
              return reject(new Error(stderr));
            } else {
              resolve(text.toString());
            }
          }
        }
        hideStatusBar();
      }).catch((err) => {
        reject(err);
        output(err.stderr || JSON.stringify(err, null, 2));
        isPartial || statusInfo("failed");
        if (err.code == "ENOENT") {
          this.errorTip();
        } else if (err.exitCode) {
          const msgs = {
            1: err.stdout || "General error (or PHP minimal requirement not matched).",
            16: "Configuration error of the application.",
            //  The path "/file/path.php" is not readable
            32: "Configuration error of a Fixer.",
            64: "Exception raised within the application.",
            255: err.stderr?.match(/PHP (?:Fatal|Parse) error:\s*Uncaught Error:[^\r?\n]+/)?.[0] || "PHP Fatal error, click to show output."
          };
          isPartial || statusInfo(msgs[err.exitCode]);
        }
      }).finally(() => {
        isRunning = false;
        if (!isDiff && !isPartial) {
          fs.rm(path.dirname(filePath), { recursive: true, force: true }, function(err) {
            err && console.error(err);
          });
        }
      });
    });
  }
  fix(uri) {
    isRunning = true;
    clearOutput();
    statusInfo("fixing");
    const args = this.getArgs(uri);
    const opts = {};
    if (uri.fsPath != "") {
      opts.cwd = path.dirname(uri.fsPath);
    }
    if (this.ignorePHPVersion) {
      opts.env = Object.create(process.env);
      opts.env.PHP_CS_FIXER_IGNORE_ENV = "1";
    }
    runAsync(this.getRealExecutablePath(uri), args, opts, (data) => {
      output(data.toString());
    }).then(({ stdout }) => {
      hideStatusBar();
    }).catch((err) => {
      statusInfo("failed");
      if (err.code == "ENOENT") {
        this.errorTip();
      }
    }).finally(() => {
      isRunning = false;
    });
  }
  diff(uri) {
    this.format(fs.readFileSync(uri.fsPath), uri, true).then((tempFilePath) => {
      import_vscode2.commands.executeCommand("vscode.diff", uri, import_vscode2.Uri.file(tempFilePath), "diff");
    }).catch((err) => {
      console.error(err);
    });
  }
  doAutoFixByBracket(event) {
    if (event.contentChanges.length == 0) return;
    let pressedKey = event.contentChanges[0].text;
    if (!/^\s*\}$/.test(pressedKey)) {
      return;
    }
    let editor = import_vscode2.window.activeTextEditor;
    let document = editor.document;
    let originalStart = editor.selection.start;
    import_vscode2.commands.executeCommand("editor.action.jumpToBracket").then(() => {
      let start = editor.selection.start;
      let offsetStart0 = document.offsetAt(originalStart);
      let offsetStart1 = document.offsetAt(start);
      if (offsetStart0 == offsetStart1) {
        return;
      }
      let nextChar = document.getText(new import_vscode2.Range(start, start.translate(0, 1)));
      if (offsetStart0 - offsetStart1 < 3 || nextChar != "{") {
        import_vscode2.commands.executeCommand("cursorUndo");
        return;
      }
      let line = document.lineAt(start);
      let code = "<?php\n$__pcf__spliter=0;\n";
      let dealFun = (fixed) => fixed.replace(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\r?\n/, "").replace(/\s*$/, "");
      let searchIndex = -1;
      if (/^\s*\{\s*$/.test(line.text)) {
        let preline = document.lineAt(line.lineNumber - 1);
        searchIndex = preline.text.search(/((if|for|foreach|while|switch|^\s*function\s+\w+|^\s*function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*$/i);
        if (searchIndex > -1) {
          line = preline;
        }
      } else {
        searchIndex = line.text.search(/((if|for|foreach|while|switch|^\s*function\s+\w+|^\s*function\s*)\s*\(.+?\)|(class|trait|interface)\s+[\w ]+|do|try)\s*\{\s*$/i);
      }
      if (searchIndex > -1) {
        start = line.range.start;
      } else {
        code += line.text.match(/^(\s*)\S+/)[1] + "if(1)";
        dealFun = (fixed) => {
          let match = fixed.match(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\s+?if\s*\(\s*1\s*\)\s*(\{[\s\S]+?\})\s*$/i);
          if (match != null) {
            fixed = match[1];
          } else {
            fixed = "";
          }
          return fixed;
        };
      }
      import_vscode2.commands.executeCommand("cursorUndo").then(() => {
        let end = editor.selection.start;
        let range = new import_vscode2.Range(start, end);
        let originalText = code + document.getText(range);
        this.format(originalText, document.uri, false, true).then((text) => {
          text = dealFun(text);
          if (text != dealFun(originalText)) {
            editor.edit((builder) => {
              builder.replace(range, text);
            }).then(() => {
              if (editor.selections.length > 0) {
                import_vscode2.commands.executeCommand("cancelSelection");
              }
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      });
    });
  }
  doAutoFixBySemicolon(event) {
    if (event.contentChanges.length == 0) return;
    let pressedKey = event.contentChanges[0].text;
    if (pressedKey != ";") {
      return;
    }
    let editor = import_vscode2.window.activeTextEditor;
    let line = editor.document.lineAt(editor.selection.start);
    if (line.text.length < 5) {
      return;
    }
    if (line.range.end.character != editor.selection.end.character + 1) {
      return;
    }
    let indent = line.text.match(/^(\s*)/)[1];
    let dealFun = (fixed) => fixed.replace(/^<\?php[\s\S]+?\$__pcf__spliter\s*=\s*0;\r?\n/, "").replace(/\s+$/, "");
    let range = line.range;
    let originalText = "<?php\n$__pcf__spliter=0;\n" + line.text;
    this.format(originalText, editor.document.uri, false, true).then((text) => {
      text = dealFun(text);
      if (text != dealFun(originalText)) {
        text = indent + text;
        editor.edit((builder) => {
          builder.replace(range, text);
        }).then(() => {
          if (editor.selections.length > 0) {
            import_vscode2.commands.executeCommand("cancelSelection");
          }
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  formattingProvider(document, options) {
    if (this.isExcluded(document)) {
      return;
    }
    isRunning = false;
    return new Promise((resolve, reject) => {
      let originalText = document.getText();
      let lastLine = document.lineAt(document.lineCount - 1);
      let range = new import_vscode2.Range(new import_vscode2.Position(0, 0), lastLine.range.end);
      let htmlOptions = Object.assign(options, import_vscode2.workspace.getConfiguration("html").get("format"));
      let originalText2 = this.formatHtml ? beautify(originalText, htmlOptions) : originalText;
      this.format(originalText2, document.uri).then((text) => {
        if (text && text != originalText) {
          resolve([new import_vscode2.TextEdit(range, text)]);
        } else {
          resolve([]);
        }
      }).catch((err) => {
        console.log(err);
        reject();
      });
    });
  }
  rangeFormattingProvider(document, range) {
    if (this.isExcluded(document)) {
      return;
    }
    isRunning = false;
    return new Promise((resolve, reject) => {
      let originalText = document.getText(range);
      if (originalText.replace(/\s+/g, "").length == 0) {
        reject();
        return;
      }
      let addPHPTag = false;
      if (originalText.search(/^\s*<\?php/i) == -1) {
        originalText = "<?php\n" + originalText;
        addPHPTag = true;
      }
      this.format(originalText, document.uri).then((text) => {
        if (addPHPTag) {
          text = text.replace(/^<\?php\r?\n/, "");
        }
        if (text && text != originalText) {
          resolve([new import_vscode2.TextEdit(range, text)]);
        } else {
          resolve([]);
        }
      }).catch((err) => {
        console.log(err);
        reject();
      });
    });
  }
  isExcluded(document) {
    if (this.exclude.length > 0 && document.uri.scheme == "file" && !document.isUntitled) {
      return (0, import_anymatch.default)(this.exclude, document.uri.path);
    }
    return false;
  }
  errorTip() {
    import_vscode2.window.showErrorMessage('PHP CS Fixer: executablePath not found. Try setting `"php-cs-fixer.executablePath": "${extensionPath}/php-cs-fixer.phar"` and try again.', "Open Output").then((t) => {
      if (t == "Open Output") {
        showOutput();
      }
    });
  }
  checkUpdate() {
    setTimeout(() => {
      let config = import_vscode2.workspace.getConfiguration("php-cs-fixer");
      let executablePath = config.get("executablePath", "php-cs-fixer");
      let lastDownload = config.get("lastDownload", 1);
      if (lastDownload !== 0 && executablePath == "${extensionPath}/php-cs-fixer.phar" && lastDownload + 1e3 * 3600 * 24 * 7 < (/* @__PURE__ */ new Date()).getTime()) {
        console.log("php-cs-fixer: check for updating...");
        const { DownloaderHelper } = require_dist();
        let dl = new DownloaderHelper("https://cs.symfony.com/download/php-cs-fixer-v3.phar", __dirname, { fileName: "php-cs-fixer.phar.tmp", override: true });
        dl.on("end", () => {
          fs.unlinkSync(path.join(__dirname, "php-cs-fixer.phar"));
          fs.renameSync(path.join(__dirname, "php-cs-fixer.phar.tmp"), path.join(__dirname, "php-cs-fixer.phar"));
          config.update("lastDownload", (/* @__PURE__ */ new Date()).getTime(), true);
        });
        dl.start();
      }
    }, 1e3 * 60);
  }
};
exports.activate = (context) => {
  const pcf = new PHPCSFixer();
  context.subscriptions.push(
    import_vscode2.workspace.onWillSaveTextDocument((event) => {
      if (event.document.languageId == "php" && pcf.onsave && pcf.editorFormatOnSave == false) {
        event.waitUntil(pcf.formattingProvider(event.document, {}));
      }
    })
  );
  context.subscriptions.push(
    import_vscode2.commands.registerTextEditorCommand("php-cs-fixer.fix", (textEditor) => {
      if (textEditor.document.languageId == "php") {
        pcf.formattingProvider(textEditor.document, {}).then((tes) => {
          if (tes && tes.length > 0) {
            textEditor.edit((eb) => {
              eb.replace(tes[0].range, tes[0].newText);
            });
          }
        });
      }
    })
  );
  context.subscriptions.push(
    import_vscode2.workspace.onDidChangeTextDocument((event) => {
      if (event.document.languageId == "php" && isRunning == false) {
        if (pcf.isExcluded(event.document)) {
          return;
        }
        if (pcf.autoFixByBracket) {
          pcf.doAutoFixByBracket(event);
        }
        if (pcf.autoFixBySemicolon) {
          pcf.doAutoFixBySemicolon(event);
        }
      }
    })
  );
  context.subscriptions.push(
    import_vscode2.workspace.onDidChangeConfiguration(() => {
      pcf.loadSettings();
    })
  );
  if (pcf.documentFormattingProvider) {
    context.subscriptions.push(
      import_vscode2.languages.registerDocumentFormattingEditProvider("php", {
        provideDocumentFormattingEdits: (document, options, token) => {
          return pcf.formattingProvider(document, options);
        }
      })
    );
    context.subscriptions.push(
      import_vscode2.languages.registerDocumentRangeFormattingEditProvider("php", {
        provideDocumentRangeFormattingEdits: (document, range, options, token) => {
          return pcf.rangeFormattingProvider(document, range);
        }
      })
    );
  }
  context.subscriptions.push(
    import_vscode2.commands.registerCommand("php-cs-fixer.fix2", (f) => {
      if (f == void 0) {
        let editor = import_vscode2.window.activeTextEditor;
        if (editor != void 0 && editor.document.languageId == "php") {
          f = editor.document.uri;
        }
      }
      if (f && f.scheme == "file") {
        let stat = fs.statSync(f.fsPath);
        if (stat.isDirectory()) {
          showOutput();
        }
        if (f != void 0) {
          pcf.fix(f);
        }
      }
    })
  );
  context.subscriptions.push(
    import_vscode2.commands.registerCommand("php-cs-fixer.diff", (f) => {
      if (f == void 0) {
        let editor = import_vscode2.window.activeTextEditor;
        if (editor != void 0 && editor.document.languageId == "php") {
          f = editor.document.uri;
        }
      }
      if (f && f.scheme == "file") {
        if (f != void 0) {
          pcf.diff(f);
        }
      }
    })
  );
  context.subscriptions.push(import_vscode2.commands.registerCommand("php-cs-fixer.showOutput", showOutput));
};
exports.deactivate = () => {
  disposeOutput();
};
/*! Bundled license information:

normalize-path/index.js:
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=index.js.map
