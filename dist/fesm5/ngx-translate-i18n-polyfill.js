import { __spread, __extends, __read } from 'tslib';
import { I18nPluralPipe, I18nSelectPipe, NgLocaleLocalization } from '@angular/common';
import { MissingTranslationStrategy, Inject, Injectable, InjectionToken, LOCALE_ID, Optional, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Text = /** @class */ (function () {
    function Text(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Text.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitText(this, context);
    };
    return Text;
}());
var Expansion = /** @class */ (function () {
    function Expansion(switchValue, type, cases, sourceSpan, switchValueSourceSpan) {
        this.switchValue = switchValue;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
        this.switchValueSourceSpan = switchValueSourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Expansion.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitExpansion(this, context);
    };
    return Expansion;
}());
var ExpansionCase = /** @class */ (function () {
    function ExpansionCase(value, expression, sourceSpan, valueSourceSpan, expSourceSpan) {
        this.value = value;
        this.expression = expression;
        this.sourceSpan = sourceSpan;
        this.valueSourceSpan = valueSourceSpan;
        this.expSourceSpan = expSourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    ExpansionCase.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitExpansionCase(this, context);
    };
    return ExpansionCase;
}());
var Attribute = /** @class */ (function () {
    function Attribute(name, value, sourceSpan, valueSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
        this.valueSpan = valueSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Attribute.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitAttribute(this, context);
    };
    return Attribute;
}());
var Element = /** @class */ (function () {
    function Element(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
        if (startSourceSpan === void 0) { startSourceSpan = null; }
        if (endSourceSpan === void 0) { endSourceSpan = null; }
        this.name = name;
        this.attrs = attrs;
        this.children = children;
        this.sourceSpan = sourceSpan;
        this.startSourceSpan = startSourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Element.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitElement(this, context);
    };
    return Element;
}());
var Comment = /** @class */ (function () {
    function Comment(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Comment.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitComment(this, context);
    };
    return Comment;
}());
/**
 * @param {?} visitor
 * @param {?} nodes
 * @param {?=} context
 * @return {?}
 */
function visitAll(visitor, nodes, context) {
    if (context === void 0) { context = null; }
    var /** @type {?} */ result = [];
    var /** @type {?} */ visit = visitor.visit
        ? function (ast) { return ((visitor.visit))(ast, context) || ast.visit(visitor, context); }
        : function (ast) { return ast.visit(visitor, context); };
    nodes.forEach(function (ast) {
        var /** @type {?} */ astResult = visit(ast);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Message = /** @class */ (function () {
    /**
     * @param source message AST
     * @param placeholders maps placeholder names to static content
     * @param placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
     * @param meaning
     * @param description
     * @param id
     */
    function Message(nodes, placeholders, placeholderToMessage, meaning, description, id) {
        this.nodes = nodes;
        this.placeholders = placeholders;
        this.placeholderToMessage = placeholderToMessage;
        this.meaning = meaning;
        this.description = description;
        this.id = id;
        if (nodes.length) {
            this.sources = [
                {
                    filePath: nodes[0].sourceSpan.start.file.url,
                    startLine: nodes[0].sourceSpan.start.line + 1,
                    startCol: nodes[0].sourceSpan.start.col + 1,
                    endLine: nodes[nodes.length - 1].sourceSpan.end.line + 1,
                    endCol: nodes[0].sourceSpan.start.col + 1
                }
            ];
        }
        else {
            this.sources = [];
        }
    }
    return Message;
}());
var Text$1 = /** @class */ (function () {
    function Text(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Text.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitText(this, context);
    };
    return Text;
}());
var Container = /** @class */ (function () {
    function Container(children, sourceSpan) {
        this.children = children;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Container.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitContainer(this, context);
    };
    return Container;
}());
var Icu = /** @class */ (function () {
    function Icu(expression, type, cases, sourceSpan) {
        this.expression = expression;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Icu.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitIcu(this, context);
    };
    return Icu;
}());
var TagPlaceholder = /** @class */ (function () {
    function TagPlaceholder(tag, attrs, startName, closeName, children, isVoid, sourceSpan) {
        this.tag = tag;
        this.attrs = attrs;
        this.startName = startName;
        this.closeName = closeName;
        this.children = children;
        this.isVoid = isVoid;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    TagPlaceholder.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitTagPlaceholder(this, context);
    };
    return TagPlaceholder;
}());
var Placeholder = /** @class */ (function () {
    function Placeholder(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Placeholder.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitPlaceholder(this, context);
    };
    return Placeholder;
}());
var IcuPlaceholder = /** @class */ (function () {
    function IcuPlaceholder(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    IcuPlaceholder.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitIcuPlaceholder(this, context);
    };
    return IcuPlaceholder;
}());
var RecurseVisitor = /** @class */ (function () {
    function RecurseVisitor() {
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        container.children.forEach(function (child) { return child.visit(_this); });
    };
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        Object.keys(icu.cases).forEach(function (k) {
            icu.cases[k].visit(_this);
        });
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        ph.children.forEach(function (child) { return child.visit(_this); });
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) { };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) { };
    return RecurseVisitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Text$2 = /** @class */ (function () {
    function Text(value) {
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    Text.prototype.visit = /**
     * @param {?} visitor
     * @return {?}
     */
    function (visitor) {
        return visitor.visitText(this);
    };
    return Text;
}());
var CR = /** @class */ (function (_super) {
    __extends(CR, _super);
    function CR(ws) {
        if (ws === void 0) { ws = 0; }
        return _super.call(this, "\n" + new Array(ws + 1).join(" ")) || this;
    }
    return CR;
}(Text$2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
ParseLocation = /** @class */ (function () {
    function ParseLocation(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    /**
     * @return {?}
     */
    ParseLocation.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.offset != null ? this.line + ":" + this.col : "";
    };
    // Return the source around the location
    // Up to `maxChars` or `maxLines` on each side of the location
    /**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */
    ParseLocation.prototype.getContext = /**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */
    function (maxChars, maxLines) {
        var /** @type {?} */ content = this.file.content;
        var /** @type {?} */ startOffset = this.offset;
        if (startOffset != null) {
            if (startOffset > content.length - 1) {
                startOffset = content.length - 1;
            }
            var /** @type {?} */ endOffset = startOffset;
            var /** @type {?} */ ctxChars = 0;
            var /** @type {?} */ ctxLines = 0;
            while (ctxChars < maxChars && startOffset > 0) {
                startOffset--;
                ctxChars++;
                if (content[startOffset] === "\n") {
                    if (++ctxLines === maxLines) {
                        break;
                    }
                }
            }
            ctxChars = 0;
            ctxLines = 0;
            while (ctxChars < maxChars && endOffset < content.length - 1) {
                endOffset++;
                ctxChars++;
                if (content[endOffset] === "\n") {
                    if (++ctxLines === maxLines) {
                        break;
                    }
                }
            }
            return {
                before: content.substring(startOffset, this.offset),
                after: content.substring(this.offset, endOffset + 1)
            };
        }
        return null;
    };
    return ParseLocation;
}());
var ParseSourceFile = /** @class */ (function () {
    function ParseSourceFile(content, url) {
        if (url === void 0) { url = ""; }
        this.content = content;
        this.url = url;
    }
    return ParseSourceFile;
}());
var ParseSourceSpan = /** @class */ (function () {
    function ParseSourceSpan(start, end, details) {
        if (details === void 0) { details = null; }
        this.start = start;
        this.end = end;
        this.details = details;
    }
    /**
     * @return {?}
     */
    ParseSourceSpan.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    };
    return ParseSourceSpan;
}());
/** @enum {number} */
var ParseErrorLevel = {
    WARNING: 0,
    ERROR: 1,
};
ParseErrorLevel[ParseErrorLevel.WARNING] = "WARNING";
ParseErrorLevel[ParseErrorLevel.ERROR] = "ERROR";
var ParseError = /** @class */ (function () {
    function ParseError(span, msg, level) {
        if (level === void 0) { level = ParseErrorLevel.ERROR; }
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    /**
     * @return {?}
     */
    ParseError.prototype.contextualMessage = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ ctx = this.span.start.getContext(100, 3);
        return ctx ? " (\"" + ctx.before + "[" + ParseErrorLevel[this.level] + " ->]" + ctx.after + "\")" : "";
    };
    /**
     * @return {?}
     */
    ParseError.prototype.toString = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ details = this.span.details ? ", " + this.span.details : "";
        return "" + this.msg + this.contextualMessage() + ": " + this.span.start + details;
    };
    return ParseError;
}());
/**
 * An i18n error.
 */
var /**
 * An i18n error.
 */
I18nError = /** @class */ (function (_super) {
    __extends(I18nError, _super);
    function I18nError(span, msg) {
        return _super.call(this, span, msg) || this;
    }
    return I18nError;
}(ParseError));
/**
 * @param {?} s
 * @return {?}
 */
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var InterpolationConfig = /** @class */ (function () {
    function InterpolationConfig(start, end) {
        this.start = start;
        this.end = end;
    }
    return InterpolationConfig;
}());
var /** @type {?} */ DEFAULT_INTERPOLATION_CONFIG = new InterpolationConfig("{{", "}}");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var /** @type {?} */ $EOF = 0;
var /** @type {?} */ $TAB = 9;
var /** @type {?} */ $LF = 10;
var /** @type {?} */ $VTAB = 11;
var /** @type {?} */ $FF = 12;
var /** @type {?} */ $CR = 13;
var /** @type {?} */ $SPACE = 32;
var /** @type {?} */ $BANG = 33;
var /** @type {?} */ $DQ = 34;
var /** @type {?} */ $HASH = 35;
var /** @type {?} */ $$ = 36;
var /** @type {?} */ $PERCENT = 37;
var /** @type {?} */ $AMPERSAND = 38;
var /** @type {?} */ $SQ = 39;
var /** @type {?} */ $LPAREN = 40;
var /** @type {?} */ $RPAREN = 41;
var /** @type {?} */ $STAR = 42;
var /** @type {?} */ $PLUS = 43;
var /** @type {?} */ $COMMA = 44;
var /** @type {?} */ $MINUS = 45;
var /** @type {?} */ $PERIOD = 46;
var /** @type {?} */ $SLASH = 47;
var /** @type {?} */ $COLON = 58;
var /** @type {?} */ $SEMICOLON = 59;
var /** @type {?} */ $LT = 60;
var /** @type {?} */ $EQ = 61;
var /** @type {?} */ $GT = 62;
var /** @type {?} */ $QUESTION = 63;
var /** @type {?} */ $0 = 48;
var /** @type {?} */ $9 = 57;
var /** @type {?} */ $A = 65;
var /** @type {?} */ $E = 69;
var /** @type {?} */ $F = 70;
var /** @type {?} */ $X = 88;
var /** @type {?} */ $Z = 90;
var /** @type {?} */ $LBRACKET = 91;
var /** @type {?} */ $BACKSLASH = 92;
var /** @type {?} */ $RBRACKET = 93;
var /** @type {?} */ $CARET = 94;
var /** @type {?} */ $_ = 95;
var /** @type {?} */ $a = 97;
var /** @type {?} */ $e = 101;
var /** @type {?} */ $f = 102;
var /** @type {?} */ $n = 110;
var /** @type {?} */ $r = 114;
var /** @type {?} */ $t = 116;
var /** @type {?} */ $u = 117;
var /** @type {?} */ $v = 118;
var /** @type {?} */ $x = 120;
var /** @type {?} */ $z = 122;
var /** @type {?} */ $LBRACE = 123;
var /** @type {?} */ $BAR = 124;
var /** @type {?} */ $RBRACE = 125;
var /** @type {?} */ $NBSP = 160;
var /** @type {?} */ $BT = 96;
/**
 * @param {?} code
 * @return {?}
 */
function isWhitespace(code) {
    return (code >= $TAB && code <= $SPACE) || code === $NBSP;
}
/**
 * @param {?} code
 * @return {?}
 */
function isDigit(code) {
    return $0 <= code && code <= $9;
}
/**
 * @param {?} code
 * @return {?}
 */
function isAsciiLetter(code) {
    return (code >= $a && code <= $z) || (code >= $A && code <= $Z);
}
/**
 * @param {?} code
 * @return {?}
 */
function isAsciiHexDigit(code) {
    return (code >= $a && code <= $f) || (code >= $A && code <= $F) || isDigit(code);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var TagContentType = {
    RAW_TEXT: 0,
    ESCAPABLE_RAW_TEXT: 1,
    PARSABLE_DATA: 2,
};
TagContentType[TagContentType.RAW_TEXT] = "RAW_TEXT";
TagContentType[TagContentType.ESCAPABLE_RAW_TEXT] = "ESCAPABLE_RAW_TEXT";
TagContentType[TagContentType.PARSABLE_DATA] = "PARSABLE_DATA";
/**
 * @param {?} elementName
 * @return {?}
 */
function splitNsName(elementName) {
    if (elementName[0] !== ":") {
        return [null, elementName];
    }
    var /** @type {?} */ colonIndex = elementName.indexOf(":", 1);
    if (colonIndex === -1) {
        throw new Error("Unsupported format \"" + elementName + "\" expecting \":namespace:name\"");
    }
    return [elementName.slice(1, colonIndex), elementName.slice(colonIndex + 1)];
}
/**
 * @param {?} tagName
 * @return {?}
 */
function isNgContainer(tagName) {
    return splitNsName(tagName)[1] === "ng-container";
}
/**
 * @param {?} fullName
 * @return {?}
 */
function getNsPrefix(fullName) {
    return fullName === null ? null : splitNsName(fullName)[0];
}
/**
 * @param {?} prefix
 * @param {?} localName
 * @return {?}
 */
function mergeNsAndName(prefix, localName) {
    return prefix ? ":" + prefix + ":" + localName : localName;
}
// see http://www.w3.org/TR/html51/syntax.html#named-character-references
// see https://html.spec.whatwg.org/multipage/entities.json
// This list is not exhaustive to keep the compiler footprint low.
// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not
// exist.
var /** @type {?} */ NAMED_ENTITIES = {
    Aacute: "\u00C1",
    aacute: "\u00E1",
    Acirc: "\u00C2",
    acirc: "\u00E2",
    acute: "\u00B4",
    AElig: "\u00C6",
    aelig: "\u00E6",
    Agrave: "\u00C0",
    agrave: "\u00E0",
    alefsym: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    amp: "&",
    and: "\u2227",
    ang: "\u2220",
    apos: "\u0027",
    Aring: "\u00C5",
    aring: "\u00E5",
    asymp: "\u2248",
    Atilde: "\u00C3",
    atilde: "\u00E3",
    Auml: "\u00C4",
    auml: "\u00E4",
    bdquo: "\u201E",
    Beta: "\u0392",
    beta: "\u03B2",
    brvbar: "\u00A6",
    bull: "\u2022",
    cap: "\u2229",
    Ccedil: "\u00C7",
    ccedil: "\u00E7",
    cedil: "\u00B8",
    cent: "\u00A2",
    Chi: "\u03A7",
    chi: "\u03C7",
    circ: "\u02C6",
    clubs: "\u2663",
    cong: "\u2245",
    copy: "\u00A9",
    crarr: "\u21B5",
    cup: "\u222A",
    curren: "\u00A4",
    dagger: "\u2020",
    Dagger: "\u2021",
    darr: "\u2193",
    dArr: "\u21D3",
    deg: "\u00B0",
    Delta: "\u0394",
    delta: "\u03B4",
    diams: "\u2666",
    divide: "\u00F7",
    Eacute: "\u00C9",
    eacute: "\u00E9",
    Ecirc: "\u00CA",
    ecirc: "\u00EA",
    Egrave: "\u00C8",
    egrave: "\u00E8",
    empty: "\u2205",
    emsp: "\u2003",
    ensp: "\u2002",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    equiv: "\u2261",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\u00D0",
    eth: "\u00F0",
    Euml: "\u00CB",
    euml: "\u00EB",
    euro: "\u20AC",
    exist: "\u2203",
    fnof: "\u0192",
    forall: "\u2200",
    frac12: "\u00BD",
    frac14: "\u00BC",
    frac34: "\u00BE",
    frasl: "\u2044",
    Gamma: "\u0393",
    gamma: "\u03B3",
    ge: "\u2265",
    gt: ">",
    harr: "\u2194",
    hArr: "\u21D4",
    hearts: "\u2665",
    hellip: "\u2026",
    Iacute: "\u00CD",
    iacute: "\u00ED",
    Icirc: "\u00CE",
    icirc: "\u00EE",
    iexcl: "\u00A1",
    Igrave: "\u00CC",
    igrave: "\u00EC",
    image: "\u2111",
    infin: "\u221E",
    int: "\u222B",
    Iota: "\u0399",
    iota: "\u03B9",
    iquest: "\u00BF",
    isin: "\u2208",
    Iuml: "\u00CF",
    iuml: "\u00EF",
    Kappa: "\u039A",
    kappa: "\u03BA",
    Lambda: "\u039B",
    lambda: "\u03BB",
    lang: "\u27E8",
    laquo: "\u00AB",
    larr: "\u2190",
    lArr: "\u21D0",
    lceil: "\u2308",
    ldquo: "\u201C",
    le: "\u2264",
    lfloor: "\u230A",
    lowast: "\u2217",
    loz: "\u25CA",
    lrm: "\u200E",
    lsaquo: "\u2039",
    lsquo: "\u2018",
    lt: "<",
    macr: "\u00AF",
    mdash: "\u2014",
    micro: "\u00B5",
    middot: "\u00B7",
    minus: "\u2212",
    Mu: "\u039C",
    mu: "\u03BC",
    nabla: "\u2207",
    nbsp: "\u00A0",
    ndash: "\u2013",
    ne: "\u2260",
    ni: "\u220B",
    not: "\u00AC",
    notin: "\u2209",
    nsub: "\u2284",
    Ntilde: "\u00D1",
    ntilde: "\u00F1",
    Nu: "\u039D",
    nu: "\u03BD",
    Oacute: "\u00D3",
    oacute: "\u00F3",
    Ocirc: "\u00D4",
    ocirc: "\u00F4",
    OElig: "\u0152",
    oelig: "\u0153",
    Ograve: "\u00D2",
    ograve: "\u00F2",
    oline: "\u203E",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    oplus: "\u2295",
    or: "\u2228",
    ordf: "\u00AA",
    ordm: "\u00BA",
    Oslash: "\u00D8",
    oslash: "\u00F8",
    Otilde: "\u00D5",
    otilde: "\u00F5",
    otimes: "\u2297",
    Ouml: "\u00D6",
    ouml: "\u00F6",
    para: "\u00B6",
    permil: "\u2030",
    perp: "\u22A5",
    Phi: "\u03A6",
    phi: "\u03C6",
    Pi: "\u03A0",
    pi: "\u03C0",
    piv: "\u03D6",
    plusmn: "\u00B1",
    pound: "\u00A3",
    prime: "\u2032",
    Prime: "\u2033",
    prod: "\u220F",
    prop: "\u221D",
    Psi: "\u03A8",
    psi: "\u03C8",
    quot: "\u0022",
    radic: "\u221A",
    rang: "\u27E9",
    raquo: "\u00BB",
    rarr: "\u2192",
    rArr: "\u21D2",
    rceil: "\u2309",
    rdquo: "\u201D",
    real: "\u211C",
    reg: "\u00AE",
    rfloor: "\u230B",
    Rho: "\u03A1",
    rho: "\u03C1",
    rlm: "\u200F",
    rsaquo: "\u203A",
    rsquo: "\u2019",
    sbquo: "\u201A",
    Scaron: "\u0160",
    scaron: "\u0161",
    sdot: "\u22C5",
    sect: "\u00A7",
    shy: "\u00AD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sim: "\u223C",
    spades: "\u2660",
    sub: "\u2282",
    sube: "\u2286",
    sum: "\u2211",
    sup: "\u2283",
    sup1: "\u00B9",
    sup2: "\u00B2",
    sup3: "\u00B3",
    supe: "\u2287",
    szlig: "\u00DF",
    Tau: "\u03A4",
    tau: "\u03C4",
    there4: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thinsp: "\u2009",
    THORN: "\u00DE",
    thorn: "\u00FE",
    tilde: "\u02DC",
    times: "\u00D7",
    trade: "\u2122",
    Uacute: "\u00DA",
    uacute: "\u00FA",
    uarr: "\u2191",
    uArr: "\u21D1",
    Ucirc: "\u00DB",
    ucirc: "\u00FB",
    Ugrave: "\u00D9",
    ugrave: "\u00F9",
    uml: "\u00A8",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    Uuml: "\u00DC",
    uuml: "\u00FC",
    weierp: "\u2118",
    Xi: "\u039E",
    xi: "\u03BE",
    Yacute: "\u00DD",
    yacute: "\u00FD",
    yen: "\u00A5",
    yuml: "\u00FF",
    Yuml: "\u0178",
    Zeta: "\u0396",
    zeta: "\u03B6",
    zwj: "\u200D",
    zwnj: "\u200C"
};
// The &ngsp; pseudo-entity is denoting a space. see:
// https://github.com/dart-lang/angular/blob/0bb611387d29d65b5af7f9d2515ab571fd3fbee4/_tests/test/compiler/preserve_whitespace_test.dart
var /** @type {?} */ NGSP_UNICODE = "\uE500";
NAMED_ENTITIES["ngsp"] = NGSP_UNICODE;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TokenType = {
    TAG_OPEN_START: 0,
    TAG_OPEN_END: 1,
    TAG_OPEN_END_VOID: 2,
    TAG_CLOSE: 3,
    TEXT: 4,
    ESCAPABLE_RAW_TEXT: 5,
    RAW_TEXT: 6,
    COMMENT_START: 7,
    COMMENT_END: 8,
    CDATA_START: 9,
    CDATA_END: 10,
    ATTR_NAME: 11,
    ATTR_VALUE: 12,
    DOC_TYPE: 13,
    EXPANSION_FORM_START: 14,
    EXPANSION_CASE_VALUE: 15,
    EXPANSION_CASE_EXP_START: 16,
    EXPANSION_CASE_EXP_END: 17,
    EXPANSION_FORM_END: 18,
    EOF: 19,
};
TokenType[TokenType.TAG_OPEN_START] = "TAG_OPEN_START";
TokenType[TokenType.TAG_OPEN_END] = "TAG_OPEN_END";
TokenType[TokenType.TAG_OPEN_END_VOID] = "TAG_OPEN_END_VOID";
TokenType[TokenType.TAG_CLOSE] = "TAG_CLOSE";
TokenType[TokenType.TEXT] = "TEXT";
TokenType[TokenType.ESCAPABLE_RAW_TEXT] = "ESCAPABLE_RAW_TEXT";
TokenType[TokenType.RAW_TEXT] = "RAW_TEXT";
TokenType[TokenType.COMMENT_START] = "COMMENT_START";
TokenType[TokenType.COMMENT_END] = "COMMENT_END";
TokenType[TokenType.CDATA_START] = "CDATA_START";
TokenType[TokenType.CDATA_END] = "CDATA_END";
TokenType[TokenType.ATTR_NAME] = "ATTR_NAME";
TokenType[TokenType.ATTR_VALUE] = "ATTR_VALUE";
TokenType[TokenType.DOC_TYPE] = "DOC_TYPE";
TokenType[TokenType.EXPANSION_FORM_START] = "EXPANSION_FORM_START";
TokenType[TokenType.EXPANSION_CASE_VALUE] = "EXPANSION_CASE_VALUE";
TokenType[TokenType.EXPANSION_CASE_EXP_START] = "EXPANSION_CASE_EXP_START";
TokenType[TokenType.EXPANSION_CASE_EXP_END] = "EXPANSION_CASE_EXP_END";
TokenType[TokenType.EXPANSION_FORM_END] = "EXPANSION_FORM_END";
TokenType[TokenType.EOF] = "EOF";
var Token = /** @class */ (function () {
    function Token(type, parts, sourceSpan) {
        this.type = type;
        this.parts = parts;
        this.sourceSpan = sourceSpan;
    }
    return Token;
}());
var TokenError = /** @class */ (function (_super) {
    __extends(TokenError, _super);
    function TokenError(errorMsg, tokenType, span) {
        var _this = _super.call(this, span, errorMsg) || this;
        _this.tokenType = tokenType;
        return _this;
    }
    return TokenError;
}(ParseError));
var TokenizeResult = /** @class */ (function () {
    function TokenizeResult(tokens, errors) {
        this.tokens = tokens;
        this.errors = errors;
    }
    return TokenizeResult;
}());
/**
 * @param {?} source
 * @param {?} url
 * @param {?} getTagDefinition
 * @param {?=} tokenizeExpansionForms
 * @param {?=} interpolationConfig
 * @return {?}
 */
function tokenize(source, url, getTagDefinition, tokenizeExpansionForms, interpolationConfig) {
    if (tokenizeExpansionForms === void 0) { tokenizeExpansionForms = false; }
    if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
    return new Tokenizer(new ParseSourceFile(source, url), getTagDefinition, tokenizeExpansionForms, interpolationConfig).tokenize();
}
var /** @type {?} */ _CR_OR_CRLF_REGEXP = /\r\n?/g;
/**
 * @param {?} charCode
 * @return {?}
 */
function _unexpectedCharacterErrorMsg(charCode) {
    var /** @type {?} */ char = charCode === $EOF ? "EOF" : String.fromCharCode(charCode);
    return "Unexpected character \"" + char + "\"";
}
/**
 * @param {?} entitySrc
 * @return {?}
 */
function _unknownEntityErrorMsg(entitySrc) {
    return "Unknown entity \"" + entitySrc + "\" - use the \"&#<decimal>;\" or  \"&#x<hex>;\" syntax";
}
var ControlFlowError = /** @class */ (function () {
    function ControlFlowError(error) {
        this.error = error;
    }
    return ControlFlowError;
}());
var Tokenizer = /** @class */ (function () {
    /**
     * @param _file The html source
     * @param _getTagDefinition
     * @param _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
     * @param _interpolationConfig
     */
    function Tokenizer(_file, _getTagDefinition, _tokenizeIcu, _interpolationConfig) {
        if (_interpolationConfig === void 0) { _interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        this._file = _file;
        this._getTagDefinition = _getTagDefinition;
        this._tokenizeIcu = _tokenizeIcu;
        this._interpolationConfig = _interpolationConfig;
        this._peek = -1;
        this._nextPeek = -1;
        this._index = -1;
        this._line = 0;
        this._column = -1;
        this._expansionCaseStack = [];
        this._inInterpolation = false;
        this.tokens = [];
        this.errors = [];
        this._input = _file.content;
        this._length = _file.content.length;
        this._advance();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    Tokenizer.prototype._processCarriageReturns = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        // http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
        // In order to keep the original position in the source, we can not
        // pre-process it.
        // Instead CRs are processed right before instantiating the tokens.
        return content.replace(_CR_OR_CRLF_REGEXP, "\n");
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype.tokenize = /**
     * @return {?}
     */
    function () {
        while (this._peek !== $EOF) {
            var /** @type {?} */ start = this._getLocation();
            try {
                if (this._attemptCharCode($LT)) {
                    if (this._attemptCharCode($BANG)) {
                        if (this._attemptCharCode($LBRACKET)) {
                            this._consumeCdata(start);
                        }
                        else if (this._attemptCharCode($MINUS)) {
                            this._consumeComment(start);
                        }
                        else {
                            this._consumeDocType(start);
                        }
                    }
                    else if (this._attemptCharCode($SLASH)) {
                        this._consumeTagClose(start);
                    }
                    else {
                        this._consumeTagOpen(start);
                    }
                }
                else if (!(this._tokenizeIcu && this._tokenizeExpansionForm())) {
                    this._consumeText();
                }
            }
            catch (/** @type {?} */ e) {
                if (e instanceof ControlFlowError) {
                    this.errors.push(e.error);
                }
                else {
                    throw e;
                }
            }
        }
        this._beginToken(TokenType.EOF);
        this._endToken([]);
        return new TokenizeResult(mergeTextTokens(this.tokens), this.errors);
    };
    /**
     * \@internal
     * @return {?} whether an ICU token has been created
     */
    Tokenizer.prototype._tokenizeExpansionForm = /**
     * \@internal
     * @return {?} whether an ICU token has been created
     */
    function () {
        if (isExpansionFormStart(this._input, this._index, this._interpolationConfig)) {
            this._consumeExpansionFormStart();
            return true;
        }
        if (isExpansionCaseStart(this._peek) && this._isInExpansionForm()) {
            this._consumeExpansionCaseStart();
            return true;
        }
        if (this._peek === $RBRACE) {
            if (this._isInExpansionCase()) {
                this._consumeExpansionCaseEnd();
                return true;
            }
            if (this._isInExpansionForm()) {
                this._consumeExpansionFormEnd();
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._getLocation = /**
     * @return {?}
     */
    function () {
        return new ParseLocation(this._file, this._index, this._line, this._column);
    };
    /**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */
    Tokenizer.prototype._getSpan = /**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        if (start === void 0) { start = this._getLocation(); }
        if (end === void 0) { end = this._getLocation(); }
        return new ParseSourceSpan(start, end);
    };
    /**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */
    Tokenizer.prototype._beginToken = /**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */
    function (type, start) {
        if (start === void 0) { start = this._getLocation(); }
        this._currentTokenStart = start;
        this._currentTokenType = type;
    };
    /**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */
    Tokenizer.prototype._endToken = /**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */
    function (parts, end) {
        if (end === void 0) { end = this._getLocation(); }
        var /** @type {?} */ token = new Token(this._currentTokenType, parts, new ParseSourceSpan(this._currentTokenStart, end));
        this.tokens.push(token);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return token;
    };
    /**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */
    Tokenizer.prototype._createError = /**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */
    function (msg, span) {
        if (this._isInExpansionForm()) {
            msg += " (Do you have an unescaped \"{\" in your template? Use \"{{ '{' }}\") to escape it.)";
        }
        var /** @type {?} */ error = new TokenError(msg, this._currentTokenType, span);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return new ControlFlowError(error);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._advance = /**
     * @return {?}
     */
    function () {
        if (this._index >= this._length) {
            throw this._createError(_unexpectedCharacterErrorMsg($EOF), this._getSpan());
        }
        if (this._peek === $LF) {
            this._line++;
            this._column = 0;
        }
        else if (this._peek !== $LF && this._peek !== $CR) {
            this._column++;
        }
        this._index++;
        this._peek = this._index >= this._length ? $EOF : this._input.charCodeAt(this._index);
        this._nextPeek = this._index + 1 >= this._length ? $EOF : this._input.charCodeAt(this._index + 1);
    };
    /**
     * @param {?} charCode
     * @return {?}
     */
    Tokenizer.prototype._attemptCharCode = /**
     * @param {?} charCode
     * @return {?}
     */
    function (charCode) {
        if (this._peek === charCode) {
            this._advance();
            return true;
        }
        return false;
    };
    /**
     * @param {?} charCode
     * @return {?}
     */
    Tokenizer.prototype._attemptCharCodeCaseInsensitive = /**
     * @param {?} charCode
     * @return {?}
     */
    function (charCode) {
        if (compareCharCodeCaseInsensitive(this._peek, charCode)) {
            this._advance();
            return true;
        }
        return false;
    };
    /**
     * @param {?} charCode
     * @return {?}
     */
    Tokenizer.prototype._requireCharCode = /**
     * @param {?} charCode
     * @return {?}
     */
    function (charCode) {
        var /** @type {?} */ location = this._getLocation();
        if (!this._attemptCharCode(charCode)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location, location));
        }
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    Tokenizer.prototype._attemptStr = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) {
        var /** @type {?} */ len = chars.length;
        if (this._index + len > this._length) {
            return false;
        }
        var /** @type {?} */ initialPosition = this._savePosition();
        for (var /** @type {?} */ i = 0; i < len; i++) {
            if (!this._attemptCharCode(chars.charCodeAt(i))) {
                // If attempting to parse the string fails, we want to reset the parser
                // to where it was before the attempt
                this._restorePosition(initialPosition);
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    Tokenizer.prototype._attemptStrCaseInsensitive = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) {
        for (var /** @type {?} */ i = 0; i < chars.length; i++) {
            if (!this._attemptCharCodeCaseInsensitive(chars.charCodeAt(i))) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    Tokenizer.prototype._requireStr = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) {
        var /** @type {?} */ location = this._getLocation();
        if (!this._attemptStr(chars)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location));
        }
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    Tokenizer.prototype._attemptCharCodeUntilFn = /**
     * @param {?} predicate
     * @return {?}
     */
    function (predicate) {
        while (!predicate(this._peek)) {
            this._advance();
        }
    };
    /**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */
    Tokenizer.prototype._requireCharCodeUntilFn = /**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */
    function (predicate, len) {
        var /** @type {?} */ start = this._getLocation();
        this._attemptCharCodeUntilFn(predicate);
        if (this._index - start.offset < len) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(start, start));
        }
    };
    /**
     * @param {?} char
     * @return {?}
     */
    Tokenizer.prototype._attemptUntilChar = /**
     * @param {?} char
     * @return {?}
     */
    function (char) {
        while (this._peek !== char) {
            this._advance();
        }
    };
    /**
     * @param {?} decodeEntities
     * @return {?}
     */
    Tokenizer.prototype._readChar = /**
     * @param {?} decodeEntities
     * @return {?}
     */
    function (decodeEntities) {
        if (decodeEntities && this._peek === $AMPERSAND) {
            return this._decodeEntity();
        }
        else {
            var /** @type {?} */ index = this._index;
            this._advance();
            return this._input[index];
        }
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._decodeEntity = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this._getLocation();
        this._advance();
        if (this._attemptCharCode($HASH)) {
            var /** @type {?} */ isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
            var /** @type {?} */ numberStart = this._getLocation().offset;
            this._attemptCharCodeUntilFn(isDigitEntityEnd);
            if (this._peek !== $SEMICOLON) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            this._advance();
            var /** @type {?} */ strNum = this._input.substring(numberStart, this._index - 1);
            try {
                var /** @type {?} */ charCode = parseInt(strNum, isHex ? 16 : 10);
                return String.fromCharCode(charCode);
            }
            catch (/** @type {?} */ e) {
                var /** @type {?} */ entity = this._input.substring(start.offset + 1, this._index - 1);
                throw this._createError(_unknownEntityErrorMsg(entity), this._getSpan(start));
            }
        }
        else {
            var /** @type {?} */ startPosition = this._savePosition();
            this._attemptCharCodeUntilFn(isNamedEntityEnd);
            if (this._peek !== $SEMICOLON) {
                this._restorePosition(startPosition);
                return "&";
            }
            this._advance();
            var /** @type {?} */ name_1 = this._input.substring(start.offset + 1, this._index - 1);
            var /** @type {?} */ char = NAMED_ENTITIES[name_1];
            if (!char) {
                throw this._createError(_unknownEntityErrorMsg(name_1), this._getSpan(start));
            }
            return char;
        }
    };
    /**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */
    Tokenizer.prototype._consumeRawText = /**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */
    function (decodeEntities, firstCharOfEnd, attemptEndRest) {
        var /** @type {?} */ tagCloseStart;
        var /** @type {?} */ textStart = this._getLocation();
        this._beginToken(decodeEntities ? TokenType.ESCAPABLE_RAW_TEXT : TokenType.RAW_TEXT, textStart);
        var /** @type {?} */ parts = [];
        while (true) {
            tagCloseStart = this._getLocation();
            if (this._attemptCharCode(firstCharOfEnd) && attemptEndRest()) {
                break;
            }
            if (this._index > tagCloseStart.offset) {
                // add the characters consumed by the previous if statement to the output
                parts.push(this._input.substring(tagCloseStart.offset, this._index));
            }
            while (this._peek !== firstCharOfEnd) {
                parts.push(this._readChar(decodeEntities));
            }
        }
        return this._endToken([this._processCarriageReturns(parts.join(""))], tagCloseStart);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeComment = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var _this = this;
        this._beginToken(TokenType.COMMENT_START, start);
        this._requireCharCode($MINUS);
        this._endToken([]);
        var /** @type {?} */ textToken = this._consumeRawText(false, $MINUS, function () { return _this._attemptStr("->"); });
        this._beginToken(TokenType.COMMENT_END, textToken.sourceSpan.end);
        this._endToken([]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeCdata = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var _this = this;
        this._beginToken(TokenType.CDATA_START, start);
        this._requireStr("CDATA[");
        this._endToken([]);
        var /** @type {?} */ textToken = this._consumeRawText(false, $RBRACKET, function () { return _this._attemptStr("]>"); });
        this._beginToken(TokenType.CDATA_END, textToken.sourceSpan.end);
        this._endToken([]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeDocType = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this._beginToken(TokenType.DOC_TYPE, start);
        this._attemptUntilChar($GT);
        this._advance();
        this._endToken([this._input.substring(start.offset + 2, this._index - 1)]);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumePrefixAndName = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ nameOrPrefixStart = this._index;
        var /** @type {?} */ prefix = /** @type {?} */ ((null));
        while (this._peek !== $COLON && !isPrefixEnd(this._peek)) {
            this._advance();
        }
        var /** @type {?} */ nameStart;
        if (this._peek === $COLON) {
            this._advance();
            prefix = this._input.substring(nameOrPrefixStart, this._index - 1);
            nameStart = this._index;
        }
        else {
            nameStart = nameOrPrefixStart;
        }
        this._requireCharCodeUntilFn(isNameEnd, this._index === nameStart ? 1 : 0);
        var /** @type {?} */ name = this._input.substring(nameStart, this._index);
        return [prefix, name];
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeTagOpen = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var /** @type {?} */ savedPos = this._savePosition();
        var /** @type {?} */ tagName;
        var /** @type {?} */ lowercaseTagName;
        try {
            if (!isAsciiLetter(this._peek)) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            var /** @type {?} */ nameStart = this._index;
            this._consumeTagOpenStart(start);
            tagName = this._input.substring(nameStart, this._index);
            lowercaseTagName = tagName.toLowerCase();
            this._attemptCharCodeUntilFn(isNotWhitespace);
            while (this._peek !== $SLASH && this._peek !== $GT) {
                this._consumeAttributeName();
                this._attemptCharCodeUntilFn(isNotWhitespace);
                if (this._attemptCharCode($EQ)) {
                    this._attemptCharCodeUntilFn(isNotWhitespace);
                    this._consumeAttributeValue();
                }
                this._attemptCharCodeUntilFn(isNotWhitespace);
            }
            this._consumeTagOpenEnd();
        }
        catch (/** @type {?} */ e) {
            if (e instanceof ControlFlowError) {
                // When the start tag is invalid, assume we want a "<"
                this._restorePosition(savedPos);
                // Back to back text tokens are merged at the end
                this._beginToken(TokenType.TEXT, start);
                this._endToken(["<"]);
                return;
            }
            throw e;
        }
        var /** @type {?} */ contentTokenType = this._getTagDefinition(tagName).contentType;
        if (contentTokenType === TagContentType.RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, false);
        }
        else if (contentTokenType === TagContentType.ESCAPABLE_RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, true);
        }
    };
    /**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */
    Tokenizer.prototype._consumeRawTextWithTagClose = /**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */
    function (lowercaseTagName, decodeEntities) {
        var _this = this;
        var /** @type {?} */ textToken = this._consumeRawText(decodeEntities, $LT, function () {
            if (!_this._attemptCharCode($SLASH))
                return false;
            _this._attemptCharCodeUntilFn(isNotWhitespace);
            if (!_this._attemptStrCaseInsensitive(lowercaseTagName))
                return false;
            _this._attemptCharCodeUntilFn(isNotWhitespace);
            return _this._attemptCharCode($GT);
        });
        this._beginToken(TokenType.TAG_CLOSE, textToken.sourceSpan.end);
        this._endToken([/** @type {?} */ ((null)), lowercaseTagName]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeTagOpenStart = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this._beginToken(TokenType.TAG_OPEN_START, start);
        var /** @type {?} */ parts = this._consumePrefixAndName();
        this._endToken(parts);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeAttributeName = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.ATTR_NAME);
        var /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._endToken(prefixAndName);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeAttributeValue = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.ATTR_VALUE);
        var /** @type {?} */ value;
        if (this._peek === $SQ || this._peek === $DQ) {
            var /** @type {?} */ quoteChar = this._peek;
            this._advance();
            var /** @type {?} */ parts = [];
            while (this._peek !== quoteChar) {
                parts.push(this._readChar(true));
            }
            value = parts.join("");
            this._advance();
        }
        else {
            var /** @type {?} */ valueStart = this._index;
            this._requireCharCodeUntilFn(isNameEnd, 1);
            value = this._input.substring(valueStart, this._index);
        }
        this._endToken([this._processCarriageReturns(value)]);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeTagOpenEnd = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ tokenType = this._attemptCharCode($SLASH) ? TokenType.TAG_OPEN_END_VOID : TokenType.TAG_OPEN_END;
        this._beginToken(tokenType);
        this._requireCharCode($GT);
        this._endToken([]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeTagClose = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this._beginToken(TokenType.TAG_CLOSE, start);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        var /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._requireCharCode($GT);
        this._endToken(prefixAndName);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionFormStart = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_FORM_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([]);
        this._expansionCaseStack.push(TokenType.EXPANSION_FORM_START);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        var /** @type {?} */ condition = this._readUntil($COMMA);
        this._endToken([condition], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        var /** @type {?} */ type = this._readUntil($COMMA);
        this._endToken([type], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionCaseStart = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_CASE_VALUE, this._getLocation());
        var /** @type {?} */ value = this._readUntil($LBRACE).trim();
        this._endToken([value], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.EXPANSION_CASE_EXP_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.push(TokenType.EXPANSION_CASE_EXP_START);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionCaseEnd = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_CASE_EXP_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.pop();
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionFormEnd = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_FORM_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([]);
        this._expansionCaseStack.pop();
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeText = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this._getLocation();
        this._beginToken(TokenType.TEXT, start);
        var /** @type {?} */ parts = [];
        do {
            if (this._interpolationConfig && this._attemptStr(this._interpolationConfig.start)) {
                parts.push(this._interpolationConfig.start);
                this._inInterpolation = true;
            }
            else if (this._interpolationConfig &&
                this._inInterpolation &&
                this._attemptStr(this._interpolationConfig.end)) {
                parts.push(this._interpolationConfig.end);
                this._inInterpolation = false;
            }
            else {
                parts.push(this._readChar(true));
            }
        } while (!this._isTextEnd());
        this._endToken([this._processCarriageReturns(parts.join(""))]);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._isTextEnd = /**
     * @return {?}
     */
    function () {
        if (this._peek === $LT || this._peek === $EOF) {
            return true;
        }
        if (this._tokenizeIcu && !this._inInterpolation) {
            if (isExpansionFormStart(this._input, this._index, this._interpolationConfig)) {
                // start of an expansion form
                return true;
            }
            if (this._peek === $RBRACE && this._isInExpansionCase()) {
                // end of and expansion case
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._savePosition = /**
     * @return {?}
     */
    function () {
        return [this._peek, this._index, this._column, this._line, this.tokens.length];
    };
    /**
     * @param {?} char
     * @return {?}
     */
    Tokenizer.prototype._readUntil = /**
     * @param {?} char
     * @return {?}
     */
    function (char) {
        var /** @type {?} */ start = this._index;
        this._attemptUntilChar(char);
        return this._input.substring(start, this._index);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    Tokenizer.prototype._restorePosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this._peek = position[0];
        this._index = position[1];
        this._column = position[2];
        this._line = position[3];
        var /** @type {?} */ nbTokens = position[4];
        if (nbTokens < this.tokens.length) {
            // remove any extra tokens
            this.tokens = this.tokens.slice(0, nbTokens);
        }
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._isInExpansionCase = /**
     * @return {?}
     */
    function () {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_CASE_EXP_START);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._isInExpansionForm = /**
     * @return {?}
     */
    function () {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_FORM_START);
    };
    return Tokenizer;
}());
/**
 * @param {?} code
 * @return {?}
 */
function isNotWhitespace(code) {
    return !isWhitespace(code) || code === $EOF;
}
/**
 * @param {?} code
 * @return {?}
 */
function isNameEnd(code) {
    return (isWhitespace(code) ||
        code === $GT ||
        code === $SLASH ||
        code === $SQ ||
        code === $DQ ||
        code === $EQ);
}
/**
 * @param {?} code
 * @return {?}
 */
function isPrefixEnd(code) {
    return ((code < $a || $z < code) && (code < $A || $Z < code) && (code < $0 || code > $9));
}
/**
 * @param {?} code
 * @return {?}
 */
function isDigitEntityEnd(code) {
    return code === $SEMICOLON || code === $EOF || !isAsciiHexDigit(code);
}
/**
 * @param {?} code
 * @return {?}
 */
function isNamedEntityEnd(code) {
    return code === $SEMICOLON || code === $EOF || !isAsciiLetter(code);
}
/**
 * @param {?} input
 * @param {?} offset
 * @param {?} interpolationConfig
 * @return {?}
 */
function isExpansionFormStart(input, offset, interpolationConfig) {
    var /** @type {?} */ isInterpolationStart = interpolationConfig
        ? input.indexOf(interpolationConfig.start, offset) === offset
        : false;
    return input.charCodeAt(offset) === $LBRACE && !isInterpolationStart;
}
/**
 * @param {?} peek
 * @return {?}
 */
function isExpansionCaseStart(peek) {
    return peek === $EQ || isAsciiLetter(peek) || isDigit(peek);
}
/**
 * @param {?} code1
 * @param {?} code2
 * @return {?}
 */
function compareCharCodeCaseInsensitive(code1, code2) {
    return toUpperCaseCharCode(code1) === toUpperCaseCharCode(code2);
}
/**
 * @param {?} code
 * @return {?}
 */
function toUpperCaseCharCode(code) {
    return code >= $a && code <= $z ? code - $a + $A : code;
}
/**
 * @param {?} srcTokens
 * @return {?}
 */
function mergeTextTokens(srcTokens) {
    var /** @type {?} */ dstTokens = [];
    var /** @type {?} */ lastDstToken = undefined;
    for (var /** @type {?} */ i = 0; i < srcTokens.length; i++) {
        var /** @type {?} */ token = srcTokens[i];
        if (lastDstToken && lastDstToken.type === TokenType.TEXT && token.type === TokenType.TEXT) {
            lastDstToken.parts[0] += token.parts[0];
            lastDstToken.sourceSpan.end = token.sourceSpan.end;
        }
        else {
            lastDstToken = token;
            dstTokens.push(lastDstToken);
        }
    }
    return dstTokens;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeError = /** @class */ (function (_super) {
    __extends(TreeError, _super);
    function TreeError(elementName, span, msg) {
        var _this = _super.call(this, span, msg) || this;
        _this.elementName = elementName;
        return _this;
    }
    /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */
    TreeError.create = /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */
    function (elementName, span, msg) {
        return new TreeError(elementName, span, msg);
    };
    return TreeError;
}(ParseError));
var ParseTreeResult = /** @class */ (function () {
    function ParseTreeResult(rootNodes, errors) {
        this.rootNodes = rootNodes;
        this.errors = errors;
    }
    return ParseTreeResult;
}());
var Parser = /** @class */ (function () {
    function Parser(getTagDefinition) {
        this.getTagDefinition = getTagDefinition;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parse = /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (source, url, parseExpansionForms, interpolationConfig) {
        if (parseExpansionForms === void 0) { parseExpansionForms = false; }
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ tokensAndErrors = tokenize(source, url, this.getTagDefinition, parseExpansionForms, interpolationConfig);
        var /** @type {?} */ treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
        return new ParseTreeResult(treeAndErrors.rootNodes, (/** @type {?} */ (tokensAndErrors.errors)).concat(treeAndErrors.errors));
    };
    return Parser;
}());
var _TreeBuilder = /** @class */ (function () {
    function _TreeBuilder(tokens, getTagDefinition) {
        this.tokens = tokens;
        this.getTagDefinition = getTagDefinition;
        this._index = -1;
        this._rootNodes = [];
        this._errors = [];
        this._elementStack = [];
        this._advance();
    }
    /**
     * @return {?}
     */
    _TreeBuilder.prototype.build = /**
     * @return {?}
     */
    function () {
        while (this._peek.type !== TokenType.EOF) {
            if (this._peek.type === TokenType.TAG_OPEN_START) {
                this._consumeStartTag(this._advance());
            }
            else if (this._peek.type === TokenType.TAG_CLOSE) {
                this._consumeEndTag(this._advance());
            }
            else if (this._peek.type === TokenType.CDATA_START) {
                this._closeVoidElement();
                this._consumeCdata(this._advance());
            }
            else if (this._peek.type === TokenType.COMMENT_START) {
                this._closeVoidElement();
                this._consumeComment(this._advance());
            }
            else if (this._peek.type === TokenType.TEXT ||
                this._peek.type === TokenType.RAW_TEXT ||
                this._peek.type === TokenType.ESCAPABLE_RAW_TEXT) {
                this._closeVoidElement();
                this._consumeText(this._advance());
            }
            else if (this._peek.type === TokenType.EXPANSION_FORM_START) {
                this._consumeExpansion(this._advance());
            }
            else {
                // Skip all other tokens...
                this._advance();
            }
        }
        return new ParseTreeResult(this._rootNodes, this._errors);
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._advance = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ prev = this._peek;
        if (this._index < this.tokens.length - 1) {
            // Note: there is always an EOF token at the end
            this._index++;
        }
        this._peek = this.tokens[this._index];
        return prev;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    _TreeBuilder.prototype._advanceIf = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this._peek.type === type) {
            return this._advance();
        }
        return null;
    };
    /**
     * @param {?} startToken
     * @return {?}
     */
    _TreeBuilder.prototype._consumeCdata = /**
     * @param {?} startToken
     * @return {?}
     */
    function (startToken) {
        this._consumeText(this._advance());
        this._advanceIf(TokenType.CDATA_END);
    };
    /**
     * @param {?} token
     * @return {?}
     */
    _TreeBuilder.prototype._consumeComment = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var /** @type {?} */ text = this._advanceIf(TokenType.RAW_TEXT);
        this._advanceIf(TokenType.COMMENT_END);
        var /** @type {?} */ value = text !== null ? text.parts[0].trim() : null;
        this._addToParent(new Comment(value, token.sourceSpan));
    };
    /**
     * @param {?} token
     * @return {?}
     */
    _TreeBuilder.prototype._consumeExpansion = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var /** @type {?} */ switchValue = this._advance();
        var /** @type {?} */ type = this._advance();
        var /** @type {?} */ cases = [];
        // read =
        while (this._peek.type === TokenType.EXPANSION_CASE_VALUE) {
            var /** @type {?} */ expCase = this._parseExpansionCase();
            if (!expCase) {
                return;
            } // error
            cases.push(expCase);
        }
        // read the final }
        if (this._peek.type !== TokenType.EXPANSION_FORM_END) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
            return;
        }
        var /** @type {?} */ sourceSpan = new ParseSourceSpan(token.sourceSpan.start, this._peek.sourceSpan.end);
        this._addToParent(new Expansion(switchValue.parts[0], type.parts[0], cases, sourceSpan, switchValue.sourceSpan));
        this._advance();
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._parseExpansionCase = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = this._advance();
        // read {
        if (this._peek.type !== TokenType.EXPANSION_CASE_EXP_START) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'."));
            return null;
        }
        // read until }
        var /** @type {?} */ start = this._advance();
        var /** @type {?} */ exp = this._collectExpansionExpTokens(start);
        if (!exp) {
            return null;
        }
        var /** @type {?} */ end = this._advance();
        exp.push(new Token(TokenType.EOF, [], end.sourceSpan));
        // parse everything in between { and }
        var /** @type {?} */ parsedExp = new _TreeBuilder(exp, this.getTagDefinition).build();
        if (parsedExp.errors.length > 0) {
            this._errors = this._errors.concat(/** @type {?} */ (parsedExp.errors));
            return null;
        }
        var /** @type {?} */ sourceSpan = new ParseSourceSpan(value.sourceSpan.start, end.sourceSpan.end);
        var /** @type {?} */ expSourceSpan = new ParseSourceSpan(start.sourceSpan.start, end.sourceSpan.end);
        return new ExpansionCase(value.parts[0], parsedExp.rootNodes, sourceSpan, value.sourceSpan, expSourceSpan);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    _TreeBuilder.prototype._collectExpansionExpTokens = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var /** @type {?} */ exp = [];
        var /** @type {?} */ expansionFormStack = [TokenType.EXPANSION_CASE_EXP_START];
        while (true) {
            if (this._peek.type === TokenType.EXPANSION_FORM_START ||
                this._peek.type === TokenType.EXPANSION_CASE_EXP_START) {
                expansionFormStack.push(this._peek.type);
            }
            if (this._peek.type === TokenType.EXPANSION_CASE_EXP_END) {
                if (lastOnStack(expansionFormStack, TokenType.EXPANSION_CASE_EXP_START)) {
                    expansionFormStack.pop();
                    if (expansionFormStack.length === 0) {
                        return exp;
                    }
                }
                else {
                    this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EXPANSION_FORM_END) {
                if (lastOnStack(expansionFormStack, TokenType.EXPANSION_FORM_START)) {
                    expansionFormStack.pop();
                }
                else {
                    this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EOF) {
                this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                return null;
            }
            exp.push(this._advance());
        }
    };
    /**
     * @param {?} token
     * @return {?}
     */
    _TreeBuilder.prototype._consumeText = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var /** @type {?} */ text = token.parts[0];
        if (text.length > 0 && text[0] === "\n") {
            var /** @type {?} */ parent_1 = this._getParentElement();
            if (parent_1 !== null && parent_1.children.length === 0 && this.getTagDefinition(parent_1.name).ignoreFirstLf) {
                text = text.substring(1);
            }
        }
        if (text.length > 0) {
            this._addToParent(new Text(text, token.sourceSpan));
        }
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._closeVoidElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ el = this._getParentElement();
        if (el && this.getTagDefinition(el.name).isVoid) {
            this._elementStack.pop();
        }
    };
    /**
     * @param {?} startTagToken
     * @return {?}
     */
    _TreeBuilder.prototype._consumeStartTag = /**
     * @param {?} startTagToken
     * @return {?}
     */
    function (startTagToken) {
        var /** @type {?} */ prefix = startTagToken.parts[0];
        var /** @type {?} */ name = startTagToken.parts[1];
        var /** @type {?} */ attrs = [];
        while (this._peek.type === TokenType.ATTR_NAME) {
            attrs.push(this._consumeAttr(this._advance()));
        }
        var /** @type {?} */ fullName = this._getElementFullName(prefix, name, this._getParentElement());
        var /** @type {?} */ selfClosing = false;
        // Note: There could have been a tokenizer error
        // so that we don't get a token for the end tag...
        if (this._peek.type === TokenType.TAG_OPEN_END_VOID) {
            this._advance();
            selfClosing = true;
            var /** @type {?} */ tagDef = this.getTagDefinition(fullName);
            if (!(tagDef.canSelfClose || getNsPrefix(fullName) !== null || tagDef.isVoid)) {
                this._errors.push(TreeError.create(fullName, startTagToken.sourceSpan, "Only void and foreign elements can be self closed \"" + startTagToken.parts[1] + "\""));
            }
        }
        else if (this._peek.type === TokenType.TAG_OPEN_END) {
            this._advance();
            selfClosing = false;
        }
        var /** @type {?} */ end = this._peek.sourceSpan.start;
        var /** @type {?} */ span = new ParseSourceSpan(startTagToken.sourceSpan.start, end);
        var /** @type {?} */ el = new Element(fullName, attrs, [], span, span, undefined);
        this._pushElement(el);
        if (selfClosing) {
            this._popElement(fullName);
            el.endSourceSpan = span;
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    _TreeBuilder.prototype._pushElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ parentEl = this._getParentElement();
        if (parentEl && this.getTagDefinition(parentEl.name).isClosedByChild(el.name)) {
            this._elementStack.pop();
        }
        var /** @type {?} */ tagDef = this.getTagDefinition(el.name);
        var _a = this._getParentElementSkippingContainers(), parent = _a.parent, container = _a.container;
        if (parent && tagDef.requireExtraParent(parent.name)) {
            var /** @type {?} */ newParent = new Element(tagDef.parentToAdd, [], [], el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
            this._insertBeforeContainer(parent, container, newParent);
        }
        this._addToParent(el);
        this._elementStack.push(el);
    };
    /**
     * @param {?} endTagToken
     * @return {?}
     */
    _TreeBuilder.prototype._consumeEndTag = /**
     * @param {?} endTagToken
     * @return {?}
     */
    function (endTagToken) {
        var /** @type {?} */ fullName = this._getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
        if (this._getParentElement()) {
            /** @type {?} */ ((this._getParentElement())).endSourceSpan = endTagToken.sourceSpan;
        }
        if (this.getTagDefinition(fullName).isVoid) {
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, "Void elements do not have end tags \"" + endTagToken.parts[1] + "\""));
        }
        else if (!this._popElement(fullName)) {
            var /** @type {?} */ errMsg = "Unexpected closing tag \"" + fullName + "\". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags";
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, errMsg));
        }
    };
    /**
     * @param {?} fullName
     * @return {?}
     */
    _TreeBuilder.prototype._popElement = /**
     * @param {?} fullName
     * @return {?}
     */
    function (fullName) {
        for (var /** @type {?} */ stackIndex = this._elementStack.length - 1; stackIndex >= 0; stackIndex--) {
            var /** @type {?} */ el = this._elementStack[stackIndex];
            if (el.name === fullName) {
                this._elementStack.splice(stackIndex, this._elementStack.length - stackIndex);
                return true;
            }
            if (!this.getTagDefinition(el.name).closedByParent) {
                return false;
            }
        }
        return false;
    };
    /**
     * @param {?} attrName
     * @return {?}
     */
    _TreeBuilder.prototype._consumeAttr = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        var /** @type {?} */ fullName = mergeNsAndName(attrName.parts[0], attrName.parts[1]);
        var /** @type {?} */ end = attrName.sourceSpan.end;
        var /** @type {?} */ value = "";
        var /** @type {?} */ valueSpan = /** @type {?} */ ((undefined));
        if (this._peek.type === TokenType.ATTR_VALUE) {
            var /** @type {?} */ valueToken = this._advance();
            value = valueToken.parts[0];
            end = valueToken.sourceSpan.end;
            valueSpan = valueToken.sourceSpan;
        }
        return new Attribute(fullName, value, new ParseSourceSpan(attrName.sourceSpan.start, end), valueSpan);
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._getParentElement = /**
     * @return {?}
     */
    function () {
        return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
    };
    /**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */
    _TreeBuilder.prototype._getParentElementSkippingContainers = /**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = null;
        for (var /** @type {?} */ i = this._elementStack.length - 1; i >= 0; i--) {
            if (!isNgContainer(this._elementStack[i].name)) {
                return { parent: this._elementStack[i], container: container };
            }
            container = this._elementStack[i];
        }
        return { parent: null, container: container };
    };
    /**
     * @param {?} node
     * @return {?}
     */
    _TreeBuilder.prototype._addToParent = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var /** @type {?} */ parent = this._getParentElement();
        if (parent !== null) {
            parent.children.push(node);
        }
        else {
            this._rootNodes.push(node);
        }
    };
    /**
     * Insert a node between the parent and the container.
     * When no container is given, the node is appended as a child of the parent.
     * Also updates the element stack accordingly.
     *
     * \@internal
     * @param {?} parent
     * @param {?} container
     * @param {?} node
     * @return {?}
     */
    _TreeBuilder.prototype._insertBeforeContainer = /**
     * Insert a node between the parent and the container.
     * When no container is given, the node is appended as a child of the parent.
     * Also updates the element stack accordingly.
     *
     * \@internal
     * @param {?} parent
     * @param {?} container
     * @param {?} node
     * @return {?}
     */
    function (parent, container, node) {
        if (!container) {
            this._addToParent(node);
            this._elementStack.push(node);
        }
        else {
            if (parent) {
                // replace the container with the new node in the children
                var /** @type {?} */ index = parent.children.indexOf(container);
                parent.children[index] = node;
            }
            else {
                this._rootNodes.push(node);
            }
            node.children.push(container);
            this._elementStack.splice(this._elementStack.indexOf(container), 0, node);
        }
    };
    /**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */
    _TreeBuilder.prototype._getElementFullName = /**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */
    function (prefix, localName, parentElement) {
        if (prefix === null) {
            prefix = /** @type {?} */ ((this.getTagDefinition(localName).implicitNamespacePrefix));
            if (prefix === null && parentElement !== null) {
                prefix = getNsPrefix(parentElement.name);
            }
        }
        return mergeNsAndName(prefix, localName);
    };
    return _TreeBuilder;
}());
/**
 * @param {?} stack
 * @param {?} element
 * @return {?}
 */
function lastOnStack(stack, element) {
    return stack.length > 0 && stack[stack.length - 1] === element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var XmlTagDefinition = /** @class */ (function () {
    function XmlTagDefinition() {
        this.closedByParent = false;
        this.contentType = TagContentType.PARSABLE_DATA;
        this.isVoid = false;
        this.ignoreFirstLf = false;
        this.canSelfClose = true;
    }
    /**
     * @param {?} currentParent
     * @return {?}
     */
    XmlTagDefinition.prototype.requireExtraParent = /**
     * @param {?} currentParent
     * @return {?}
     */
    function (currentParent) {
        return false;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    XmlTagDefinition.prototype.isClosedByChild = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return false;
    };
    return XmlTagDefinition;
}());
var /** @type {?} */ _TAG_DEFINITION = new XmlTagDefinition();
/**
 * @param {?} tagName
 * @return {?}
 */
function getXmlTagDefinition(tagName) {
    return _TAG_DEFINITION;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HtmlTagDefinition = /** @class */ (function () {
    function HtmlTagDefinition(_a) {
        var _b = _a === void 0 ? {} : _a, closedByChildren = _b.closedByChildren, requiredParents = _b.requiredParents, implicitNamespacePrefix = _b.implicitNamespacePrefix, _c = _b.contentType, contentType = _c === void 0 ? TagContentType.PARSABLE_DATA : _c, _d = _b.closedByParent, closedByParent = _d === void 0 ? false : _d, _e = _b.isVoid, isVoid = _e === void 0 ? false : _e, _f = _b.ignoreFirstLf, ignoreFirstLf = _f === void 0 ? false : _f;
        var _this = this;
        this.closedByChildren = {};
        this.closedByParent = false;
        this.canSelfClose = false;
        if (closedByChildren && closedByChildren.length > 0) {
            closedByChildren.forEach(function (tagName) { return _this.closedByChildren[tagName] = true; });
        }
        this.isVoid = isVoid;
        this.closedByParent = closedByParent || isVoid;
        if (requiredParents && requiredParents.length > 0) {
            this.requiredParents = {};
            // The first parent is the list is automatically when none of the listed parents are present
            this.parentToAdd = requiredParents[0];
            requiredParents.forEach(function (tagName) { return _this.requiredParents[tagName] = true; });
        }
        this.implicitNamespacePrefix = implicitNamespacePrefix || null;
        this.contentType = contentType;
        this.ignoreFirstLf = ignoreFirstLf;
    }
    /**
     * @param {?} currentParent
     * @return {?}
     */
    HtmlTagDefinition.prototype.requireExtraParent = /**
     * @param {?} currentParent
     * @return {?}
     */
    function (currentParent) {
        if (!this.requiredParents) {
            return false;
        }
        if (!currentParent) {
            return true;
        }
        var /** @type {?} */ lcParent = currentParent.toLowerCase();
        var /** @type {?} */ isParentTemplate = lcParent === 'template' || currentParent === 'ng-template';
        return !isParentTemplate && this.requiredParents[lcParent] !== true;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    HtmlTagDefinition.prototype.isClosedByChild = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.isVoid || name.toLowerCase() in this.closedByChildren;
    };
    return HtmlTagDefinition;
}());
// see http://www.w3.org/TR/html51/syntax.html#optional-tags
// This implementation does not fully conform to the HTML5 spec.
var /** @type {?} */ TAG_DEFINITIONS = {
    'base': new HtmlTagDefinition({ isVoid: true }),
    'meta': new HtmlTagDefinition({ isVoid: true }),
    'area': new HtmlTagDefinition({ isVoid: true }),
    'embed': new HtmlTagDefinition({ isVoid: true }),
    'link': new HtmlTagDefinition({ isVoid: true }),
    'img': new HtmlTagDefinition({ isVoid: true }),
    'input': new HtmlTagDefinition({ isVoid: true }),
    'param': new HtmlTagDefinition({ isVoid: true }),
    'hr': new HtmlTagDefinition({ isVoid: true }),
    'br': new HtmlTagDefinition({ isVoid: true }),
    'source': new HtmlTagDefinition({ isVoid: true }),
    'track': new HtmlTagDefinition({ isVoid: true }),
    'wbr': new HtmlTagDefinition({ isVoid: true }),
    'p': new HtmlTagDefinition({
        closedByChildren: [
            'address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset', 'footer', 'form',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr',
            'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'
        ],
        closedByParent: true
    }),
    'thead': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'] }),
    'tbody': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'], closedByParent: true }),
    'tfoot': new HtmlTagDefinition({ closedByChildren: ['tbody'], closedByParent: true }),
    'tr': new HtmlTagDefinition({
        closedByChildren: ['tr'],
        requiredParents: ['tbody', 'tfoot', 'thead'],
        closedByParent: true
    }),
    'td': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
    'th': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
    'col': new HtmlTagDefinition({ requiredParents: ['colgroup'], isVoid: true }),
    'svg': new HtmlTagDefinition({ implicitNamespacePrefix: 'svg' }),
    'math': new HtmlTagDefinition({ implicitNamespacePrefix: 'math' }),
    'li': new HtmlTagDefinition({ closedByChildren: ['li'], closedByParent: true }),
    'dt': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'] }),
    'dd': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'], closedByParent: true }),
    'rb': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
    'rt': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
    'rtc': new HtmlTagDefinition({ closedByChildren: ['rb', 'rtc', 'rp'], closedByParent: true }),
    'rp': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
    'optgroup': new HtmlTagDefinition({ closedByChildren: ['optgroup'], closedByParent: true }),
    'option': new HtmlTagDefinition({ closedByChildren: ['option', 'optgroup'], closedByParent: true }),
    'pre': new HtmlTagDefinition({ ignoreFirstLf: true }),
    'listing': new HtmlTagDefinition({ ignoreFirstLf: true }),
    'style': new HtmlTagDefinition({ contentType: TagContentType.RAW_TEXT }),
    'script': new HtmlTagDefinition({ contentType: TagContentType.RAW_TEXT }),
    'title': new HtmlTagDefinition({ contentType: TagContentType.ESCAPABLE_RAW_TEXT }),
    'textarea': new HtmlTagDefinition({ contentType: TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }),
};
var /** @type {?} */ _DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
/**
 * @param {?} tagName
 * @return {?}
 */
function getHtmlTagDefinition(tagName) {
    return TAG_DEFINITIONS[tagName.toLowerCase()] || _DEFAULT_TAG_DEFINITION;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A simple mapper that take a function to transform an internal name to a public name
 */
var /**
 * A simple mapper that take a function to transform an internal name to a public name
 */
SimplePlaceholderMapper = /** @class */ (function (_super) {
    __extends(SimplePlaceholderMapper, _super);
    // create a mapping from the message
    function SimplePlaceholderMapper(message, mapName) {
        var _this = _super.call(this) || this;
        _this.mapName = mapName;
        _this.internalToPublic = {};
        _this.publicToNextId = {};
        _this.publicToInternal = {};
        message.nodes.forEach(function (node) { return node.visit(_this); });
        return _this;
    }
    /**
     * @param {?} internalName
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.toPublicName = /**
     * @param {?} internalName
     * @return {?}
     */
    function (internalName) {
        return this.internalToPublic.hasOwnProperty(internalName) ? this.internalToPublic[internalName] : null;
    };
    /**
     * @param {?} publicName
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.toInternalName = /**
     * @param {?} publicName
     * @return {?}
     */
    function (publicName) {
        return this.publicToInternal.hasOwnProperty(publicName) ? this.publicToInternal[publicName] : null;
    };
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) {
        return null;
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        this.visitPlaceholderName(ph.startName);
        _super.prototype.visitTagPlaceholder.call(this, ph, context);
        this.visitPlaceholderName(ph.closeName);
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        this.visitPlaceholderName(ph.name);
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        this.visitPlaceholderName(ph.name);
    };
    /**
     * @param {?} internalName
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitPlaceholderName = /**
     * @param {?} internalName
     * @return {?}
     */
    function (internalName) {
        if (!internalName || this.internalToPublic.hasOwnProperty(internalName)) {
            return;
        }
        var /** @type {?} */ publicName = this.mapName(internalName);
        if (this.publicToInternal.hasOwnProperty(publicName)) {
            // Create a new XMB when it has already been used
            var /** @type {?} */ nextId = this.publicToNextId[publicName];
            this.publicToNextId[publicName] = nextId + 1;
            publicName = publicName + "_" + nextId;
        }
        else {
            this.publicToNextId[publicName] = 1;
        }
        this.internalToPublic[internalName] = publicName;
        this.publicToInternal[publicName] = internalName;
    };
    return SimplePlaceholderMapper;
}(RecurseVisitor));
var /** @type {?} */ i18nSelectPipe = new I18nSelectPipe();
var SerializerVisitor = /** @class */ (function () {
    function SerializerVisitor(locale, params) {
        this.params = params;
        this.i18nPluralPipe = new I18nPluralPipe(new NgLocaleLocalization(locale));
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        if (getHtmlTagDefinition(element.name).isVoid) {
            return "<" + element.name + this.serializeNodes(element.attrs, " ") + "/>";
        }
        return "<" + element.name + this.serializeNodes(element.attrs, " ") + ">" + this.serializeNodes(element.children) + "</" + element.name + ">";
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) {
        return attribute.name + "=\"" + attribute.value + "\"";
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return text.value;
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) {
        return "<!--" + comment.value + "-->";
    };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) {
        var _this = this;
        var /** @type {?} */ cases = {};
        expansion.cases.forEach(function (c) { return (cases[c.value] = _this.serializeNodes(c.expression)); });
        switch (expansion.type) {
            case "select":
                return i18nSelectPipe.transform(this.params[expansion.switchValue] || "", cases);
            case "plural":
                return this.i18nPluralPipe.transform(this.params[expansion.switchValue], cases);
        }
        throw new Error("Unknown expansion type \"" + expansion.type + "\"");
    };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) {
        return " " + expansionCase.value + " {" + this.serializeNodes(expansionCase.expression) + "}";
    };
    /**
     * @param {?} nodes
     * @param {?=} join
     * @return {?}
     */
    SerializerVisitor.prototype.serializeNodes = /**
     * @param {?} nodes
     * @param {?=} join
     * @return {?}
     */
    function (nodes, join) {
        var _this = this;
        if (join === void 0) { join = ""; }
        if (nodes.length === 0) {
            return "";
        }
        return join + nodes.map(function (a) { return a.visit(_this, null); }).join(join);
    };
    return SerializerVisitor;
}());
/**
 * @param {?} nodes
 * @param {?} locale
 * @param {?} params
 * @return {?}
 */
function serializeNodes(nodes, locale, params) {
    return nodes.map(function (node) { return node.visit(new SerializerVisitor(locale, params), null); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} message
 * @return {?}
 */
function digest(message) {
    return message.id || sha1(serializeNodes$1(message.nodes).join("") + ("[" + message.meaning + "]"));
}
/**
 * @param {?} message
 * @return {?}
 */
function decimalDigest(message) {
    if (message.id) {
        return message.id;
    }
    var /** @type {?} */ visitor = new SerializerIgnoreIcuExpVisitor();
    var /** @type {?} */ parts = message.nodes.map(function (a) { return a.visit(visitor, null); });
    return computeMsgId(parts.join(""), message.meaning);
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */
var /**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */
SerializerVisitor$1 = /** @class */ (function () {
    function SerializerVisitor() {
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return text.value;
    };
    /**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        return "[" + container.children.map(function (child) { return child.visit(_this); }).join(", ") + "]";
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ strCases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        return "{" + icu.expression + ", " + icu.type + ", " + strCases.join(", ") + "}";
    };
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        return ph.isVoid
            ? "<ph tag name=\"" + ph.startName + "\"/>"
            : "<ph tag name=\"" + ph.startName + "\">" + ph.children.map(function (child) { return child.visit(_this); }).join(", ") + "</ph name=\"" + ph.closeName + "\">";
    };
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    function (ph, context) {
        return ph.value ? "<ph name=\"" + ph.name + "\">" + ph.value + "</ph>" : "<ph name=\"" + ph.name + "\"/>";
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        return "<ph icu name=\"" + ph.name + "\">" + ph.value.visit(this) + "</ph>";
    };
    return SerializerVisitor;
}());
var /** @type {?} */ serializerVisitor = new SerializerVisitor$1();
/**
 * @param {?} nodes
 * @return {?}
 */
function serializeNodes$1(nodes) {
    return nodes.map(function (a) { return a.visit(serializerVisitor, null); });
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */
var /**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */
SerializerIgnoreIcuExpVisitor = /** @class */ (function (_super) {
    __extends(SerializerIgnoreIcuExpVisitor, _super);
    function SerializerIgnoreIcuExpVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    SerializerIgnoreIcuExpVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ strCases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        // Do not take the expression into account
        return "{" + icu.type + ", " + strCases.join(", ") + "}";
    };
    return SerializerIgnoreIcuExpVisitor;
}(SerializerVisitor$1));
/**
 * Compute the SHA1 of the given string
 *
 * see http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *
 * WARNING: this function has not been designed not tested with security in mind.
 *          DO NOT USE IT IN A SECURITY SENSITIVE CONTEXT.
 * @param {?} str
 * @return {?}
 */
function sha1(str) {
    var /** @type {?} */ utf8 = utf8Encode(str);
    var /** @type {?} */ words32 = stringToWords32(utf8, Endian.Big);
    var /** @type {?} */ len = utf8.length * 8;
    var /** @type {?} */ w = new Array(80);
    var _a = __read([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], 5), a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4];
    words32[len >> 5] |= 0x80 << (24 - len % 32);
    words32[(((len + 64) >> 9) << 4) + 15] = len;
    for (var /** @type {?} */ i = 0; i < words32.length; i += 16) {
        var _b = __read([a, b, c, d, e], 5), h0 = _b[0], h1 = _b[1], h2 = _b[2], h3 = _b[3], h4 = _b[4];
        for (var /** @type {?} */ j = 0; j < 80; j++) {
            /* tslint:disable-next-line */
            if (j < 16) {
                w[j] = words32[i + j];
            }
            else {
                w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            var _c = __read(fk(j, b, c, d), 2), f = _c[0], k = _c[1];
            var /** @type {?} */ temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
            _d = __read([d, c, rol32(b, 30), a, temp], 5), e = _d[0], d = _d[1], c = _d[2], b = _d[3], a = _d[4];
        }
        _e = __read([add32(a, h0), add32(b, h1), add32(c, h2), add32(d, h3), add32(e, h4)], 5), a = _e[0], b = _e[1], c = _e[2], d = _e[3], e = _e[4];
    }
    return byteStringToHexString(words32ToByteString([a, b, c, d, e]));
    var _d, _e;
}
/**
 * @param {?} index
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function fk(index, b, c, d) {
    if (index < 20) {
        return [(b & c) | (~b & d), 0x5a827999];
    }
    if (index < 40) {
        return [b ^ c ^ d, 0x6ed9eba1];
    }
    if (index < 60) {
        return [(b & c) | (b & d) | (c & d), 0x8f1bbcdc];
    }
    return [b ^ c ^ d, 0xca62c1d6];
}
/**
 * Compute the fingerprint of the given string
 *
 * The output is 64 bit number encoded as a decimal string
 *
 * based on:
 * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
 * @param {?} str
 * @return {?}
 */
function fingerprint(str) {
    var /** @type {?} */ utf8 = utf8Encode(str);
    var _a = __read([hash32(utf8, 0), hash32(utf8, 102072)], 2), hi = _a[0], lo = _a[1];
    if (hi === 0 && (lo === 0 || lo === 1)) {
        hi = hi ^ 0x130f9bef;
        lo = lo ^ -0x6b5f56d8;
    }
    return [hi, lo];
}
/**
 * @param {?} msg
 * @param {?} meaning
 * @return {?}
 */
function computeMsgId(msg, meaning) {
    var _a = __read(fingerprint(msg), 2), hi = _a[0], lo = _a[1];
    if (meaning) {
        var _b = __read(fingerprint(meaning), 2), him = _b[0], lom = _b[1];
        _c = __read(add64(rol64([hi, lo], 1), [him, lom]), 2), hi = _c[0], lo = _c[1];
    }
    return byteStringToDecString(words32ToByteString([hi & 0x7fffffff, lo]));
    var _c;
}
/**
 * @param {?} str
 * @param {?} c
 * @return {?}
 */
function hash32(str, c) {
    var _a = __read([0x9e3779b9, 0x9e3779b9], 2), a = _a[0], b = _a[1];
    var /** @type {?} */ i;
    var /** @type {?} */ len = str.length;
    for (i = 0; i + 12 <= len; i += 12) {
        a = add32(a, wordAt(str, i, Endian.Little));
        b = add32(b, wordAt(str, i + 4, Endian.Little));
        c = add32(c, wordAt(str, i + 8, Endian.Little));
        _b = __read(mix([a, b, c]), 3), a = _b[0], b = _b[1], c = _b[2];
    }
    a = add32(a, wordAt(str, i, Endian.Little));
    b = add32(b, wordAt(str, i + 4, Endian.Little));
    // the first byte of c is reserved for the length
    c = add32(c, len);
    c = add32(c, wordAt(str, i + 8, Endian.Little) << 8);
    return mix([a, b, c])[2];
    var _b;
}
/**
 * @param {?} __0
 * @return {?}
 */
function mix(_a) {
    var _b = __read(_a, 3), a = _b[0], b = _b[1], c = _b[2];
    a = sub32(a, b);
    a = sub32(a, c);
    a ^= c >>> 13;
    b = sub32(b, c);
    b = sub32(b, a);
    b ^= a << 8;
    c = sub32(c, a);
    c = sub32(c, b);
    c ^= b >>> 13;
    a = sub32(a, b);
    a = sub32(a, c);
    a ^= c >>> 12;
    b = sub32(b, c);
    b = sub32(b, a);
    b ^= a << 16;
    c = sub32(c, a);
    c = sub32(c, b);
    c ^= b >>> 5;
    a = sub32(a, b);
    a = sub32(a, c);
    a ^= c >>> 3;
    b = sub32(b, c);
    b = sub32(b, a);
    b ^= a << 10;
    c = sub32(c, a);
    c = sub32(c, b);
    c ^= b >>> 15;
    return [a, b, c];
}
/** @enum {number} */
var Endian = {
    Little: 0,
    Big: 1,
};
Endian[Endian.Little] = "Little";
Endian[Endian.Big] = "Big";
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function add32(a, b) {
    return add32to64(a, b)[1];
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function add32to64(a, b) {
    var /** @type {?} */ low = (a & 0xffff) + (b & 0xffff);
    var /** @type {?} */ high = (a >>> 16) + (b >>> 16) + (low >>> 16);
    return [high >>> 16, (high << 16) | (low & 0xffff)];
}
/**
 * @param {?} __0
 * @param {?} __1
 * @return {?}
 */
function add64(_a, _b) {
    var _c = __read(_a, 2), ah = _c[0], al = _c[1];
    var _d = __read(_b, 2), bh = _d[0], bl = _d[1];
    var _e = __read(add32to64(al, bl), 2), carry = _e[0], l = _e[1];
    var /** @type {?} */ h = add32(add32(ah, bh), carry);
    return [h, l];
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sub32(a, b) {
    var /** @type {?} */ low = (a & 0xffff) - (b & 0xffff);
    var /** @type {?} */ high = (a >> 16) - (b >> 16) + (low >> 16);
    return (high << 16) | (low & 0xffff);
}
/**
 * @param {?} a
 * @param {?} count
 * @return {?}
 */
function rol32(a, count) {
    return (a << count) | (a >>> (32 - count));
}
/**
 * @param {?} __0
 * @param {?} count
 * @return {?}
 */
function rol64(_a, count) {
    var _b = __read(_a, 2), hi = _b[0], lo = _b[1];
    var /** @type {?} */ h = (hi << count) | (lo >>> (32 - count));
    var /** @type {?} */ l = (lo << count) | (hi >>> (32 - count));
    return [h, l];
}
/**
 * @param {?} str
 * @param {?} endian
 * @return {?}
 */
function stringToWords32(str, endian) {
    var /** @type {?} */ words32 = Array((str.length + 3) >>> 2);
    for (var /** @type {?} */ i = 0; i < words32.length; i++) {
        words32[i] = wordAt(str, i * 4, endian);
    }
    return words32;
}
/**
 * @param {?} str
 * @param {?} index
 * @return {?}
 */
function byteAt(str, index) {
    return index >= str.length ? 0 : str.charCodeAt(index) & 0xff;
}
/**
 * @param {?} str
 * @param {?} index
 * @param {?} endian
 * @return {?}
 */
function wordAt(str, index, endian) {
    var /** @type {?} */ word = 0;
    if (endian === Endian.Big) {
        for (var /** @type {?} */ i = 0; i < 4; i++) {
            word += byteAt(str, index + i) << (24 - 8 * i);
        }
    }
    else {
        for (var /** @type {?} */ i = 0; i < 4; i++) {
            word += byteAt(str, index + i) << (8 * i);
        }
    }
    return word;
}
/**
 * @param {?} words32
 * @return {?}
 */
function words32ToByteString(words32) {
    return words32.reduce(function (str, word) { return str + word32ToByteString(word); }, "");
}
/**
 * @param {?} word
 * @return {?}
 */
function word32ToByteString(word) {
    var /** @type {?} */ str = "";
    for (var /** @type {?} */ i = 0; i < 4; i++) {
        str += String.fromCharCode((word >>> (8 * (3 - i))) & 0xff);
    }
    return str;
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToHexString(str) {
    var /** @type {?} */ hex = "";
    for (var /** @type {?} */ i = 0; i < str.length; i++) {
        var /** @type {?} */ b = byteAt(str, i);
        hex += (b >>> 4).toString(16) + (b & 0x0f).toString(16);
    }
    return hex.toLowerCase();
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToDecString(str) {
    var /** @type {?} */ decimal = "";
    var /** @type {?} */ toThePower = "1";
    for (var /** @type {?} */ i = str.length - 1; i >= 0; i--) {
        decimal = addBigInt(decimal, numberTimesBigInt(byteAt(str, i), toThePower));
        toThePower = numberTimesBigInt(256, toThePower);
    }
    return decimal
        .split("")
        .reverse()
        .join("");
}
/**
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function addBigInt(x, y) {
    var /** @type {?} */ sum = "";
    var /** @type {?} */ len = Math.max(x.length, y.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ carry = 0; i < len || carry; i++) {
        var /** @type {?} */ tmpSum = carry + +(x[i] || 0) + +(y[i] || 0);
        if (tmpSum >= 10) {
            carry = 1;
            sum += tmpSum - 10;
        }
        else {
            carry = 0;
            sum += tmpSum;
        }
    }
    return sum;
}
/**
 * @param {?} num
 * @param {?} b
 * @return {?}
 */
function numberTimesBigInt(num, b) {
    var /** @type {?} */ product = "";
    var /** @type {?} */ bToThePower = b;
    for (; num !== 0; num = num >>> 1) {
        if (num & 1) {
            product = addBigInt(product, bToThePower);
        }
        bToThePower = addBigInt(bToThePower, bToThePower);
    }
    return product;
}
/**
 * @param {?} str
 * @return {?}
 */
function utf8Encode(str) {
    var /** @type {?} */ encoded = "";
    for (var /** @type {?} */ index = 0; index < str.length; index++) {
        var /** @type {?} */ codePoint = str.charCodeAt(index);
        // decode surrogate
        // see https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        if (codePoint >= 0xd800 && codePoint <= 0xdbff && str.length > index + 1) {
            var /** @type {?} */ low = str.charCodeAt(index + 1);
            if (low >= 0xdc00 && low <= 0xdfff) {
                index++;
                codePoint = ((codePoint - 0xd800) << 10) + low - 0xdc00 + 0x10000;
            }
        }
        if (codePoint <= 0x7f) {
            encoded += String.fromCharCode(codePoint);
        }
        else if (codePoint <= 0x7ff) {
            encoded += String.fromCharCode(((codePoint >> 6) & 0x1f) | 0xc0, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint <= 0xffff) {
            encoded += String.fromCharCode((codePoint >> 12) | 0xe0, ((codePoint >> 6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint <= 0x1fffff) {
            encoded += String.fromCharCode(((codePoint >> 18) & 0x07) | 0xf0, ((codePoint >> 12) & 0x3f) | 0x80, ((codePoint >> 6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
    }
    return encoded;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _PLACEHOLDER_TAG = "x";
var /** @type {?} */ _FILE_TAG = "file";
var /** @type {?} */ _SOURCE_TAG = "source";
var /** @type {?} */ _TARGET_TAG = "target";
var /** @type {?} */ _UNIT_TAG = "trans-unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliffLoadToI18n(content) {
    // xliff to xml nodes
    var /** @type {?} */ xliffParser = new XliffParser();
    var _a = xliffParser.parse(content), msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
    // xml nodes to i18n messages
    var /** @type {?} */ i18nMessagesById = {};
    var /** @type {?} */ converter = new XmlToI18n();
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, e = _a.errors;
        errors.push.apply(errors, __spread(e));
        i18nMessagesById[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error("xliff parse errors:\n" + errors.join("\n"));
    }
    return i18nMessagesById;
}
var /** @type {?} */ xliffDigest = digest;
var XliffParser = /** @class */ (function () {
    function XliffParser() {
    }
    /**
     * @param {?} content
     * @return {?}
     */
    XliffParser.prototype.parse = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        var /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    };
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        switch (element.name) {
            case _UNIT_TAG:
                this._unitMlString = /** @type {?} */ ((null));
                var /** @type {?} */ idAttr = element.attrs.find(function (attr) { return attr.name === "id"; });
                if (!idAttr) {
                    this._addError(element, "<" + _UNIT_TAG + "> misses the \"id\" attribute");
                }
                else {
                    var /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, "Duplicated translations for msg " + id);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, "Message " + id + " misses a translation");
                        }
                    }
                }
                break;
            case _SOURCE_TAG:
                // ignore source message
                break;
            case _TARGET_TAG:
                var /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                var /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                var /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                var /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
                this._unitMlString = innerText;
                break;
            case _FILE_TAG:
                visitAll(this, element.children, null);
                break;
            default:
                // TODO(vicb): assert file structure, xliff version
                // For now only recurse on unhandled nodes
                visitAll(this, element.children, null);
        }
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) { };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XliffParser.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XliffParser;
}());
var XmlToI18n = /** @class */ (function () {
    function XmlToI18n() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype.convert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes: i18nNodes,
            errors: this._errors
        };
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        if (el.name === _PLACEHOLDER_TAG) {
            var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "id"; });
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"id\" attribute");
        }
        else {
            this._addError(el, "Unexpected tag");
        }
        return null;
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XmlToI18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _PLACEHOLDER_TAG$1 = "ph";
var /** @type {?} */ _PLACEHOLDER_SPANNING_TAG = "pc";
var /** @type {?} */ _XLIFF_TAG = "xliff";
var /** @type {?} */ _SOURCE_TAG$1 = "source";
var /** @type {?} */ _TARGET_TAG$1 = "target";
var /** @type {?} */ _UNIT_TAG$1 = "unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliff2LoadToI18n(content) {
    // xliff to xml nodes
    var /** @type {?} */ xliff2Parser = new Xliff2Parser();
    var _a = xliff2Parser.parse(content), msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
    // xml nodes to i18n nodes
    var /** @type {?} */ i18nNodesByMsgId = {};
    var /** @type {?} */ converter = new XmlToI18n$1();
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, e = _a.errors;
        errors.push.apply(errors, __spread(e));
        i18nNodesByMsgId[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error("xliff2 parse errors:\n" + errors.join("\n"));
    }
    return i18nNodesByMsgId;
}
var /** @type {?} */ xliff2Digest = decimalDigest;
var Xliff2Parser = /** @class */ (function () {
    function Xliff2Parser() {
    }
    /**
     * @param {?} content
     * @return {?}
     */
    Xliff2Parser.prototype.parse = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        var /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    };
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        switch (element.name) {
            case _UNIT_TAG$1:
                this._unitMlString = null;
                var /** @type {?} */ idAttr = element.attrs.find(function (attr) { return attr.name === "id"; });
                if (!idAttr) {
                    this._addError(element, "<" + _UNIT_TAG$1 + "> misses the \"id\" attribute");
                }
                else {
                    var /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, "Duplicated translations for msg " + id);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, "Message " + id + " misses a translation");
                        }
                    }
                }
                break;
            case _SOURCE_TAG$1:
                // ignore source message
                break;
            case _TARGET_TAG$1:
                var /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                var /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                var /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                var /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
                this._unitMlString = innerText;
                break;
            case _XLIFF_TAG:
                var /** @type {?} */ versionAttr = element.attrs.find(function (attr) { return attr.name === "version"; });
                if (versionAttr) {
                    var /** @type {?} */ version = versionAttr.value;
                    if (version !== "2.0") {
                        this._addError(element, "The XLIFF file version " + version + " is not compatible with XLIFF 2.0 serializer");
                    }
                    else {
                        visitAll(this, element.children, null);
                    }
                }
                break;
            default:
                visitAll(this, element.children, null);
        }
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) { };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    Xliff2Parser.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    };
    return Xliff2Parser;
}());
var XmlToI18n$1 = /** @class */ (function () {
    function XmlToI18n() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype.convert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : [].concat.apply([], __spread(visitAll(this, xmlIcu.rootNodes)));
        return {
            i18nNodes: i18nNodes,
            errors: this._errors
        };
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return new Text$1(text.value, text.sourceSpan);
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        var _this = this;
        switch (el.name) {
            case _PLACEHOLDER_TAG$1:
                var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "equiv"; });
                if (nameAttr) {
                    return [new Placeholder("", nameAttr.value, el.sourceSpan)];
                }
                this._addError(el, "<" + _PLACEHOLDER_TAG$1 + "> misses the \"equiv\" attribute");
                break;
            case _PLACEHOLDER_SPANNING_TAG:
                var /** @type {?} */ startAttr = el.attrs.find(function (attr) { return attr.name === "equivStart"; });
                var /** @type {?} */ endAttr = el.attrs.find(function (attr) { return attr.name === "equivEnd"; });
                if (!startAttr) {
                    this._addError(el, "<" + _PLACEHOLDER_TAG$1 + "> misses the \"equivStart\" attribute");
                }
                else if (!endAttr) {
                    this._addError(el, "<" + _PLACEHOLDER_TAG$1 + "> misses the \"equivEnd\" attribute");
                }
                else {
                    var /** @type {?} */ startId = startAttr.value;
                    var /** @type {?} */ endId = endAttr.value;
                    var /** @type {?} */ nodes = [];
                    return nodes.concat.apply(nodes, __spread([new Placeholder("", startId, el.sourceSpan)], el.children.map(function (node) { return node.visit(_this, null); }), [new Placeholder("", endId, el.sourceSpan)]));
                }
                break;
            default:
                this._addError(el, "Unexpected tag");
        }
        return null;
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        return {
            value: icuCase.value,
            nodes: [].concat.apply([], __spread(visitAll(this, icuCase.expression)))
        };
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    };
    return XmlToI18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} message
 * @return {?}
 */
function xmbMapper(message) {
    return new SimplePlaceholderMapper(message, toPublicName);
}
/**
 * @param {?} internalName
 * @return {?}
 */
function toPublicName(internalName) {
    return internalName.toUpperCase().replace(/[^A-Z0-9_]/g, "_");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _TRANSLATIONS_TAG = "translationbundle";
var /** @type {?} */ _TRANSLATION_TAG = "translation";
var /** @type {?} */ _PLACEHOLDER_TAG$3 = "ph";
/**
 * @param {?} content
 * @return {?}
 */
function xtbLoadToI18n(content) {
    // xtb to xml nodes
    var /** @type {?} */ xtbParser = new XtbParser();
    var _a = xtbParser.parse(content), msgIdToHtml = _a.msgIdToHtml, parseErrors = _a.errors;
    if (parseErrors.length) {
        throw new Error("xtb parse errors:\n" + parseErrors.join("\n"));
    }
    // xml nodes to i18n nodes
    var /** @type {?} */ i18nNodesByMsgId = {};
    var /** @type {?} */ converter = new XmlToI18n$2();
    // Because we should be able to load xtb files that rely on features not supported by angular,
    // we need to delay the conversion of html to i18n nodes so that non angular messages are not
    // converted
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var /** @type {?} */ valueFn = function () {
            var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, errors = _a.errors;
            if (errors.length) {
                throw new Error("xtb parse errors:\n" + errors.join("\n"));
            }
            return i18nNodes;
        };
        createLazyProperty(i18nNodesByMsgId, msgId, valueFn);
    });
    return i18nNodesByMsgId;
}
var /** @type {?} */ xtbDigest = digest;
var /** @type {?} */ xtbMapper = xmbMapper;
/**
 * @param {?} messages
 * @param {?} id
 * @param {?} valueFn
 * @return {?}
 */
function createLazyProperty(messages, id, valueFn) {
    Object.defineProperty(messages, id, {
        configurable: true,
        enumerable: true,
        get: function () {
            var /** @type {?} */ value = valueFn();
            Object.defineProperty(messages, id, { enumerable: true, value: value });
            return value;
        },
        set: function (_) {
            throw new Error("Could not overwrite an XTB translation");
        }
    });
}
var XtbParser = /** @class */ (function () {
    function XtbParser() {
    }
    /**
     * @param {?} xtb
     * @return {?}
     */
    XtbParser.prototype.parse = /**
     * @param {?} xtb
     * @return {?}
     */
    function (xtb) {
        this._bundleDepth = 0;
        this._msgIdToHtml = {};
        // We can not parse the ICU messages at this point as some messages might not originate
        // from Angular that could not be lex'd.
        var /** @type {?} */ xml = new Parser(getXmlTagDefinition).parse(xtb, "", false);
        this._errors = xml.errors;
        visitAll(this, xml.rootNodes);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    };
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        switch (element.name) {
            case _TRANSLATIONS_TAG:
                this._bundleDepth++;
                if (this._bundleDepth > 1) {
                    this._addError(element, "<" + _TRANSLATIONS_TAG + "> elements can not be nested");
                }
                visitAll(this, element.children, null);
                this._bundleDepth--;
                break;
            case _TRANSLATION_TAG:
                var /** @type {?} */ idAttr = element.attrs.find(function (attr) { return attr.name === "id"; });
                if (!idAttr) {
                    this._addError(element, "<" + _TRANSLATION_TAG + "> misses the \"id\" attribute");
                }
                else {
                    var /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, "Duplicated translations for msg " + id);
                    }
                    else {
                        var /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                        var /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                        var /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                        var /** @type {?} */ innerText = content.slice(/** @type {?} */ ((innerTextStart)), /** @type {?} */ ((innerTextEnd)));
                        this._msgIdToHtml[id] = innerText;
                    }
                }
                break;
            default:
                this._addError(element, "Unexpected tag");
        }
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) { };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XtbParser.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XtbParser;
}());
var XmlToI18n$2 = /** @class */ (function () {
    function XmlToI18n() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype.convert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes: i18nNodes,
            errors: this._errors
        };
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        if (el.name === _PLACEHOLDER_TAG$3) {
            var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "name"; });
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, "<" + _PLACEHOLDER_TAG$3 + "> misses the \"name\" attribute");
        }
        else {
            this._addError(el, "Unexpected tag");
        }
        return null;
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XmlToI18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ParserError = /** @class */ (function () {
    function ParserError(message, input, errLocation, ctxLocation) {
        this.input = input;
        this.errLocation = errLocation;
        this.ctxLocation = ctxLocation;
        this.message = "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation;
    }
    return ParserError;
}());
var ParseSpan = /** @class */ (function () {
    function ParseSpan(start, end) {
        this.start = start;
        this.end = end;
    }
    return ParseSpan;
}());
var AST = /** @class */ (function () {
    function AST(span) {
        this.span = span;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    AST.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return null;
    };
    /**
     * @return {?}
     */
    AST.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "AST";
    };
    return AST;
}());
/**
 * Represents a quoted expression of the form:
 *
 * quote = prefix `:` uninterpretedExpression
 * prefix = identifier
 * uninterpretedExpression = arbitrary string
 *
 * A quoted expression is meant to be pre-processed by an AST transformer that
 * converts it into another AST that no longer contains quoted expressions.
 * It is meant to allow third-party developers to extend Angular template
 * expression language. The `uninterpretedExpression` part of the quote is
 * therefore not interpreted by the Angular's own expression parser.
 */
var /**
 * Represents a quoted expression of the form:
 *
 * quote = prefix `:` uninterpretedExpression
 * prefix = identifier
 * uninterpretedExpression = arbitrary string
 *
 * A quoted expression is meant to be pre-processed by an AST transformer that
 * converts it into another AST that no longer contains quoted expressions.
 * It is meant to allow third-party developers to extend Angular template
 * expression language. The `uninterpretedExpression` part of the quote is
 * therefore not interpreted by the Angular's own expression parser.
 */
Quote = /** @class */ (function (_super) {
    __extends(Quote, _super);
    function Quote(span, prefix, uninterpretedExpression, location) {
        var _this = _super.call(this, span) || this;
        _this.prefix = prefix;
        _this.uninterpretedExpression = uninterpretedExpression;
        _this.location = location;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Quote.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitQuote(this, context);
    };
    /**
     * @return {?}
     */
    Quote.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "Quote";
    };
    return Quote;
}(AST));
var EmptyExpr = /** @class */ (function (_super) {
    __extends(EmptyExpr, _super);
    function EmptyExpr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    EmptyExpr.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        // do nothing
    };
    return EmptyExpr;
}(AST));
var ImplicitReceiver = /** @class */ (function (_super) {
    __extends(ImplicitReceiver, _super);
    function ImplicitReceiver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    ImplicitReceiver.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitImplicitReceiver(this, context);
    };
    return ImplicitReceiver;
}(AST));
/**
 * Multiple expressions separated by a semicolon.
 */
var /**
 * Multiple expressions separated by a semicolon.
 */
Chain = /** @class */ (function (_super) {
    __extends(Chain, _super);
    function Chain(span, expressions) {
        var _this = _super.call(this, span) || this;
        _this.expressions = expressions;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Chain.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitChain(this, context);
    };
    return Chain;
}(AST));
var Conditional = /** @class */ (function (_super) {
    __extends(Conditional, _super);
    function Conditional(span, condition, trueExp, falseExp) {
        var _this = _super.call(this, span) || this;
        _this.condition = condition;
        _this.trueExp = trueExp;
        _this.falseExp = falseExp;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Conditional.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitConditional(this, context);
    };
    return Conditional;
}(AST));
var PropertyRead = /** @class */ (function (_super) {
    __extends(PropertyRead, _super);
    function PropertyRead(span, receiver, name) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    PropertyRead.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPropertyRead(this, context);
    };
    return PropertyRead;
}(AST));
var PropertyWrite = /** @class */ (function (_super) {
    __extends(PropertyWrite, _super);
    function PropertyWrite(span, receiver, name, value) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    PropertyWrite.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPropertyWrite(this, context);
    };
    return PropertyWrite;
}(AST));
var SafePropertyRead = /** @class */ (function (_super) {
    __extends(SafePropertyRead, _super);
    function SafePropertyRead(span, receiver, name) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    SafePropertyRead.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitSafePropertyRead(this, context);
    };
    return SafePropertyRead;
}(AST));
var KeyedRead = /** @class */ (function (_super) {
    __extends(KeyedRead, _super);
    function KeyedRead(span, obj, key) {
        var _this = _super.call(this, span) || this;
        _this.obj = obj;
        _this.key = key;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    KeyedRead.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitKeyedRead(this, context);
    };
    return KeyedRead;
}(AST));
var KeyedWrite = /** @class */ (function (_super) {
    __extends(KeyedWrite, _super);
    function KeyedWrite(span, obj, key, value) {
        var _this = _super.call(this, span) || this;
        _this.obj = obj;
        _this.key = key;
        _this.value = value;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    KeyedWrite.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitKeyedWrite(this, context);
    };
    return KeyedWrite;
}(AST));
var BindingPipe = /** @class */ (function (_super) {
    __extends(BindingPipe, _super);
    function BindingPipe(span, exp, name, args) {
        var _this = _super.call(this, span) || this;
        _this.exp = exp;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    BindingPipe.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPipe(this, context);
    };
    return BindingPipe;
}(AST));
var LiteralPrimitive = /** @class */ (function (_super) {
    __extends(LiteralPrimitive, _super);
    function LiteralPrimitive(span, value) {
        var _this = _super.call(this, span) || this;
        _this.value = value;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    LiteralPrimitive.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitLiteralPrimitive(this, context);
    };
    return LiteralPrimitive;
}(AST));
var LiteralArray = /** @class */ (function (_super) {
    __extends(LiteralArray, _super);
    function LiteralArray(span, expressions) {
        var _this = _super.call(this, span) || this;
        _this.expressions = expressions;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    LiteralArray.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitLiteralArray(this, context);
    };
    return LiteralArray;
}(AST));
var LiteralMap = /** @class */ (function (_super) {
    __extends(LiteralMap, _super);
    function LiteralMap(span, keys, values) {
        var _this = _super.call(this, span) || this;
        _this.keys = keys;
        _this.values = values;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    LiteralMap.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitLiteralMap(this, context);
    };
    return LiteralMap;
}(AST));
var Interpolation = /** @class */ (function (_super) {
    __extends(Interpolation, _super);
    function Interpolation(span, strings, expressions) {
        var _this = _super.call(this, span) || this;
        _this.strings = strings;
        _this.expressions = expressions;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Interpolation.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitInterpolation(this, context);
    };
    return Interpolation;
}(AST));
var Binary = /** @class */ (function (_super) {
    __extends(Binary, _super);
    function Binary(span, operation, left, right) {
        var _this = _super.call(this, span) || this;
        _this.operation = operation;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Binary.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitBinary(this, context);
    };
    return Binary;
}(AST));
var PrefixNot = /** @class */ (function (_super) {
    __extends(PrefixNot, _super);
    function PrefixNot(span, expression) {
        var _this = _super.call(this, span) || this;
        _this.expression = expression;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    PrefixNot.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPrefixNot(this, context);
    };
    return PrefixNot;
}(AST));
var NonNullAssert = /** @class */ (function (_super) {
    __extends(NonNullAssert, _super);
    function NonNullAssert(span, expression) {
        var _this = _super.call(this, span) || this;
        _this.expression = expression;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    NonNullAssert.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitNonNullAssert(this, context);
    };
    return NonNullAssert;
}(AST));
var MethodCall = /** @class */ (function (_super) {
    __extends(MethodCall, _super);
    function MethodCall(span, receiver, name, args) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    MethodCall.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitMethodCall(this, context);
    };
    return MethodCall;
}(AST));
var SafeMethodCall = /** @class */ (function (_super) {
    __extends(SafeMethodCall, _super);
    function SafeMethodCall(span, receiver, name, args) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    SafeMethodCall.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitSafeMethodCall(this, context);
    };
    return SafeMethodCall;
}(AST));
var FunctionCall = /** @class */ (function (_super) {
    __extends(FunctionCall, _super);
    function FunctionCall(span, target, args) {
        var _this = _super.call(this, span) || this;
        _this.target = target;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    FunctionCall.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitFunctionCall(this, context);
    };
    return FunctionCall;
}(AST));
var ASTWithSource = /** @class */ (function (_super) {
    __extends(ASTWithSource, _super);
    function ASTWithSource(ast, source, location, errors) {
        var _this = _super.call(this, new ParseSpan(0, source == null ? 0 : source.length)) || this;
        _this.ast = ast;
        _this.source = source;
        _this.location = location;
        _this.errors = errors;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    ASTWithSource.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return this.ast.visit(visitor, context);
    };
    /**
     * @return {?}
     */
    ASTWithSource.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.source + " in " + this.location;
    };
    return ASTWithSource;
}(AST));
var TemplateBinding = /** @class */ (function () {
    function TemplateBinding(span, key, keyIsVar, name, expression) {
        this.span = span;
        this.key = key;
        this.keyIsVar = keyIsVar;
        this.name = name;
        this.expression = expression;
    }
    return TemplateBinding;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TokenType$1 = {
    Character: 0,
    Identifier: 1,
    Keyword: 2,
    String: 3,
    Operator: 4,
    Number: 5,
    Error: 6,
};
TokenType$1[TokenType$1.Character] = "Character";
TokenType$1[TokenType$1.Identifier] = "Identifier";
TokenType$1[TokenType$1.Keyword] = "Keyword";
TokenType$1[TokenType$1.String] = "String";
TokenType$1[TokenType$1.Operator] = "Operator";
TokenType$1[TokenType$1.Number] = "Number";
TokenType$1[TokenType$1.Error] = "Error";
var /** @type {?} */ KEYWORDS = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this"];
var Lexer = /** @class */ (function () {
    function Lexer() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Lexer.prototype.tokenize = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var /** @type {?} */ scanner = new Scanner(text);
        var /** @type {?} */ tokens = [];
        var /** @type {?} */ token = scanner.scanToken();
        while (token != null) {
            tokens.push(token);
            token = scanner.scanToken();
        }
        return tokens;
    };
    return Lexer;
}());
var Token$1 = /** @class */ (function () {
    function Token(index, type, numValue, strValue) {
        this.index = index;
        this.type = type;
        this.numValue = numValue;
        this.strValue = strValue;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    Token.prototype.isCharacter = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.type === TokenType$1.Character && this.numValue === code;
    };
    /**
     * @return {?}
     */
    Token.prototype.isNumber = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Number;
    };
    /**
     * @return {?}
     */
    Token.prototype.isString = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.String;
    };
    /**
     * @param {?} operater
     * @return {?}
     */
    Token.prototype.isOperator = /**
     * @param {?} operater
     * @return {?}
     */
    function (operater) {
        return this.type === TokenType$1.Operator && this.strValue === operater;
    };
    /**
     * @return {?}
     */
    Token.prototype.isIdentifier = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Identifier;
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeyword = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword;
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordLet = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "let";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordAs = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "as";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordNull = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "null";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordUndefined = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "undefined";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordTrue = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "true";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordFalse = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "false";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordThis = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "this";
    };
    /**
     * @return {?}
     */
    Token.prototype.isError = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Error;
    };
    /**
     * @return {?}
     */
    Token.prototype.toNumber = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Number ? this.numValue : -1;
    };
    /**
     * @return {?}
     */
    Token.prototype.toString = /**
     * @return {?}
     */
    function () {
        switch (this.type) {
            case TokenType$1.Character:
            case TokenType$1.Identifier:
            case TokenType$1.Keyword:
            case TokenType$1.Operator:
            case TokenType$1.String:
            case TokenType$1.Error:
                return this.strValue;
            case TokenType$1.Number:
                return this.numValue.toString();
            default:
                return null;
        }
    };
    return Token;
}());
/**
 * @param {?} index
 * @param {?} code
 * @return {?}
 */
function newCharacterToken(index, code) {
    return new Token$1(index, TokenType$1.Character, code, String.fromCharCode(code));
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newIdentifierToken(index, text) {
    return new Token$1(index, TokenType$1.Identifier, 0, text);
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newKeywordToken(index, text) {
    return new Token$1(index, TokenType$1.Keyword, 0, text);
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newOperatorToken(index, text) {
    return new Token$1(index, TokenType$1.Operator, 0, text);
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newStringToken(index, text) {
    return new Token$1(index, TokenType$1.String, 0, text);
}
/**
 * @param {?} index
 * @param {?} n
 * @return {?}
 */
function newNumberToken(index, n) {
    return new Token$1(index, TokenType$1.Number, n, "");
}
/**
 * @param {?} index
 * @param {?} message
 * @return {?}
 */
function newErrorToken(index, message) {
    return new Token$1(index, TokenType$1.Error, 0, message);
}
var /** @type {?} */ EOF = new Token$1(-1, TokenType$1.Character, 0, "");
var Scanner = /** @class */ (function () {
    function Scanner(input) {
        this.input = input;
        this.peek = 0;
        this.index = -1;
        this.length = input.length;
        this.advance();
    }
    /**
     * @return {?}
     */
    Scanner.prototype.advance = /**
     * @return {?}
     */
    function () {
        this.peek = ++this.index >= this.length ? $EOF : this.input.charCodeAt(this.index);
    };
    /**
     * @return {?}
     */
    Scanner.prototype.scanToken = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ input = this.input;
        var /** @type {?} */ length = this.length;
        var /** @type {?} */ peek = this.peek;
        var /** @type {?} */ index = this.index;
        // Skip whitespace.
        while (peek <= $SPACE) {
            if (++index >= length) {
                peek = $EOF;
                break;
            }
            else {
                peek = input.charCodeAt(index);
            }
        }
        this.peek = peek;
        this.index = index;
        if (index >= length) {
            return null;
        }
        // Handle identifiers and numbers.
        if (isIdentifierStart(peek)) {
            return this.scanIdentifier();
        }
        if (isDigit(peek)) {
            return this.scanNumber(index);
        }
        var /** @type {?} */ start = index;
        switch (peek) {
            case $PERIOD:
                this.advance();
                return isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, $PERIOD);
            case $LPAREN:
            case $RPAREN:
            case $LBRACE:
            case $RBRACE:
            case $LBRACKET:
            case $RBRACKET:
            case $COMMA:
            case $COLON:
            case $SEMICOLON:
                return this.scanCharacter(start, peek);
            case $SQ:
            case $DQ:
                return this.scanString();
            case $HASH:
            case $PLUS:
            case $MINUS:
            case $STAR:
            case $SLASH:
            case $PERCENT:
            case $CARET:
                return this.scanOperator(start, String.fromCharCode(peek));
            case $QUESTION:
                return this.scanComplexOperator(start, "?", $PERIOD, ".");
            case $LT:
            case $GT:
                return this.scanComplexOperator(start, String.fromCharCode(peek), $EQ, "=");
            case $BANG:
            case $EQ:
                return this.scanComplexOperator(start, String.fromCharCode(peek), $EQ, "=", $EQ, "=");
            case $AMPERSAND:
                return this.scanComplexOperator(start, "&", $AMPERSAND, "&");
            case $BAR:
                return this.scanComplexOperator(start, "|", $BAR, "|");
            case $NBSP:
                while (isWhitespace(this.peek)) {
                    this.advance();
                }
                return this.scanToken();
        }
        this.advance();
        return this.error("Unexpected character [" + String.fromCharCode(peek) + "]", 0);
    };
    /**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */
    Scanner.prototype.scanCharacter = /**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */
    function (start, code) {
        this.advance();
        return newCharacterToken(start, code);
    };
    /**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */
    Scanner.prototype.scanOperator = /**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */
    function (start, str) {
        this.advance();
        return newOperatorToken(start, str);
    };
    /**
     * Tokenize a 2/3 char long operator
     *
     * @param start start index in the expression
     * @param one first symbol (always part of the operator)
     * @param twoCode code point for the second symbol
     * @param two second symbol (part of the operator when the second code point matches)
     * @param threeCode code point for the third symbol
     * @param three third symbol (part of the operator when provided and matches source expression)
     */
    /**
     * Tokenize a 2/3 char long operator
     *
     * @param {?} start start index in the expression
     * @param {?} one first symbol (always part of the operator)
     * @param {?} twoCode code point for the second symbol
     * @param {?} two second symbol (part of the operator when the second code point matches)
     * @param {?=} threeCode code point for the third symbol
     * @param {?=} three third symbol (part of the operator when provided and matches source expression)
     * @return {?}
     */
    Scanner.prototype.scanComplexOperator = /**
     * Tokenize a 2/3 char long operator
     *
     * @param {?} start start index in the expression
     * @param {?} one first symbol (always part of the operator)
     * @param {?} twoCode code point for the second symbol
     * @param {?} two second symbol (part of the operator when the second code point matches)
     * @param {?=} threeCode code point for the third symbol
     * @param {?=} three third symbol (part of the operator when provided and matches source expression)
     * @return {?}
     */
    function (start, one, twoCode, two, threeCode, three) {
        this.advance();
        var /** @type {?} */ str = one;
        if (this.peek === twoCode) {
            this.advance();
            str += two;
        }
        if (threeCode != null && this.peek === threeCode) {
            this.advance();
            str += three;
        }
        return newOperatorToken(start, str);
    };
    /**
     * @return {?}
     */
    Scanner.prototype.scanIdentifier = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.index;
        this.advance();
        while (isIdentifierPart(this.peek)) {
            this.advance();
        }
        var /** @type {?} */ str = this.input.substring(start, this.index);
        return KEYWORDS.indexOf(str) > -1 ? newKeywordToken(start, str) : newIdentifierToken(start, str);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Scanner.prototype.scanNumber = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var /** @type {?} */ simple = this.index === start;
        this.advance(); // Skip initial digit.
        while (true) {
            if (isDigit(this.peek)) ;
            else if (this.peek === $PERIOD) {
                simple = false;
            }
            else if (isExponentStart(this.peek)) {
                this.advance();
                if (isExponentSign(this.peek)) {
                    this.advance();
                }
                if (!isDigit(this.peek)) {
                    return this.error("Invalid exponent", -1);
                }
                simple = false;
            }
            else {
                break;
            }
            this.advance();
        }
        var /** @type {?} */ str = this.input.substring(start, this.index);
        var /** @type {?} */ value = simple ? parseIntAutoRadix(str) : parseFloat(str);
        return newNumberToken(start, value);
    };
    /**
     * @return {?}
     */
    Scanner.prototype.scanString = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.index;
        var /** @type {?} */ quote = this.peek;
        this.advance(); // Skip initial quote.
        var /** @type {?} */ buffer = "";
        var /** @type {?} */ marker = this.index;
        var /** @type {?} */ input = this.input;
        while (this.peek !== quote) {
            if (this.peek === $BACKSLASH) {
                buffer += input.substring(marker, this.index);
                this.advance();
                var /** @type {?} */ unescapedCode = void 0;
                // Workaround for TS2.1-introduced type strictness
                this.peek = this.peek;
                if (this.peek === $u) {
                    // 4 character hex code for unicode character.
                    var /** @type {?} */ hex = input.substring(this.index + 1, this.index + 5);
                    if (/^[0-9a-f]+$/i.test(hex)) {
                        unescapedCode = parseInt(hex, 16);
                    }
                    else {
                        return this.error("Invalid unicode escape [\\u" + hex + "]", 0);
                    }
                    for (var /** @type {?} */ i = 0; i < 5; i++) {
                        this.advance();
                    }
                }
                else {
                    unescapedCode = unescape(this.peek);
                    this.advance();
                }
                buffer += String.fromCharCode(unescapedCode);
                marker = this.index;
            }
            else if (this.peek === $EOF) {
                return this.error("Unterminated quote", 0);
            }
            else {
                this.advance();
            }
        }
        var /** @type {?} */ last = input.substring(marker, this.index);
        this.advance(); // Skip terminating quote.
        return newStringToken(start, buffer + last);
    };
    /**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */
    Scanner.prototype.error = /**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */
    function (message, offset) {
        var /** @type {?} */ position = this.index + offset;
        return newErrorToken(position, "Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
    };
    return Scanner;
}());
/**
 * @param {?} code
 * @return {?}
 */
function isIdentifierStart(code) {
    return (($a <= code && code <= $z) ||
        ($A <= code && code <= $Z) ||
        code === $_ ||
        code === $$);
}
/**
 * @param {?} input
 * @return {?}
 */
function isIdentifier(input) {
    if (input.length === 0) {
        return false;
    }
    var /** @type {?} */ scanner = new Scanner(input);
    if (!isIdentifierStart(scanner.peek)) {
        return false;
    }
    scanner.advance();
    while (scanner.peek !== $EOF) {
        if (!isIdentifierPart(scanner.peek)) {
            return false;
        }
        scanner.advance();
    }
    return true;
}
/**
 * @param {?} code
 * @return {?}
 */
function isIdentifierPart(code) {
    return isAsciiLetter(code) || isDigit(code) || code === $_ || code === $$;
}
/**
 * @param {?} code
 * @return {?}
 */
function isExponentStart(code) {
    return code === $e || code === $E;
}
/**
 * @param {?} code
 * @return {?}
 */
function isExponentSign(code) {
    return code === $MINUS || code === $PLUS;
}
/**
 * @param {?} code
 * @return {?}
 */
function isQuote(code) {
    return code === $SQ || code === $DQ || code === $BT;
}
/**
 * @param {?} code
 * @return {?}
 */
function unescape(code) {
    switch (code) {
        case $n:
            return $LF;
        case $f:
            return $FF;
        case $r:
            return $CR;
        case $t:
            return $TAB;
        case $v:
            return $VTAB;
        default:
            return code;
    }
}
/**
 * @param {?} text
 * @return {?}
 */
function parseIntAutoRadix(text) {
    var /** @type {?} */ result = parseInt(text, 10);
    if (isNaN(result)) {
        throw new Error("Invalid integer literal when parsing " + text);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SplitInterpolation = /** @class */ (function () {
    function SplitInterpolation(strings, expressions, offsets) {
        this.strings = strings;
        this.expressions = expressions;
        this.offsets = offsets;
    }
    return SplitInterpolation;
}());
var TemplateBindingParseResult = /** @class */ (function () {
    function TemplateBindingParseResult(templateBindings, warnings, errors) {
        this.templateBindings = templateBindings;
        this.warnings = warnings;
        this.errors = errors;
    }
    return TemplateBindingParseResult;
}());
/**
 * @param {?} config
 * @return {?}
 */
function _createInterpolateRegExp(config) {
    var /** @type {?} */ pattern = escapeRegExp(config.start) + "([\\s\\S]*?)" + escapeRegExp(config.end);
    return new RegExp(pattern, "g");
}
var Parser$1 = /** @class */ (function () {
    function Parser(_lexer) {
        this._lexer = _lexer;
        this.errors = [];
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseAction = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        this._checkNoInterpolation(input, location, interpolationConfig);
        var /** @type {?} */ sourceToLex = this._stripComments(input);
        var /** @type {?} */ tokens = this._lexer.tokenize(this._stripComments(input));
        var /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, true, this.errors, input.length - sourceToLex.length).parseChain();
        return new ASTWithSource(ast, input, location, this.errors);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseBinding = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        return new ASTWithSource(ast, input, location, this.errors);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseSimpleBinding = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        var /** @type {?} */ errors = SimpleExpressionChecker.check(ast);
        if (errors.length > 0) {
            this._reportError("Host binding expression cannot contain " + errors.join(" "), input, location);
        }
        return new ASTWithSource(ast, input, location, this.errors);
    };
    /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */
    Parser.prototype._reportError = /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */
    function (message, input, errLocation, ctxLocation) {
        this.errors.push(new ParserError(message, input, errLocation, ctxLocation));
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    Parser.prototype._parseBindingAst = /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        // Quotes expressions use 3rd-party expression language. We don't want to use
        // our lexer or parser for that, so we check for that ahead of time.
        var /** @type {?} */ quote = this._parseQuote(input, location);
        if (quote != null) {
            return quote;
        }
        this._checkNoInterpolation(input, location, interpolationConfig);
        var /** @type {?} */ sourceToLex = this._stripComments(input);
        var /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
        return new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, input.length - sourceToLex.length).parseChain();
    };
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    Parser.prototype._parseQuote = /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    function (input, location) {
        if (input === null) {
            return null;
        }
        var /** @type {?} */ prefixSeparatorIndex = input.indexOf(":");
        if (prefixSeparatorIndex === -1) {
            return null;
        }
        var /** @type {?} */ prefix = input.substring(0, prefixSeparatorIndex).trim();
        if (!isIdentifier(prefix)) {
            return null;
        }
        var /** @type {?} */ uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
        return new Quote(new ParseSpan(0, input.length), prefix, uninterpretedExpression, location);
    };
    /**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    Parser.prototype.parseTemplateBindings = /**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    function (prefixToken, input, location) {
        var /** @type {?} */ tokens = this._lexer.tokenize(input);
        if (prefixToken) {
            // Prefix the tokens with the tokens from prefixToken but have them take no space (0 index).
            var /** @type {?} */ prefixTokens = this._lexer.tokenize(prefixToken).map(function (t) {
                t.index = 0;
                return t;
            });
            tokens.unshift.apply(tokens, __spread(prefixTokens));
        }
        return new ParseAST(input, location, tokens, input.length, false, this.errors, 0).parseTemplateBindings();
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseInterpolation = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ split = this.splitInterpolation(input, location, interpolationConfig);
        if (split === null) {
            return null;
        }
        var /** @type {?} */ expressions = [];
        for (var /** @type {?} */ i = 0; i < split.expressions.length; ++i) {
            var /** @type {?} */ expressionText = split.expressions[i];
            var /** @type {?} */ sourceToLex = this._stripComments(expressionText);
            var /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
            var /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, split.offsets[i] + (expressionText.length - sourceToLex.length)).parseChain();
            expressions.push(ast);
        }
        return new ASTWithSource(new Interpolation(new ParseSpan(0, input === null ? 0 : input.length), split.strings, expressions), input, location, this.errors);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.splitInterpolation = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        var /** @type {?} */ parts = input.split(regexp);
        if (parts.length <= 1) {
            return null;
        }
        var /** @type {?} */ strings = [];
        var /** @type {?} */ expressions = [];
        var /** @type {?} */ offsets = [];
        var /** @type {?} */ offset = 0;
        for (var /** @type {?} */ i = 0; i < parts.length; i++) {
            var /** @type {?} */ part = parts[i];
            if (i % 2 === 0) {
                // fixed string
                strings.push(part);
                offset += part.length;
            }
            else if (part.trim().length > 0) {
                offset += interpolationConfig.start.length;
                expressions.push(part);
                offsets.push(offset);
                offset += part.length + interpolationConfig.end.length;
            }
            else {
                this._reportError("Blank expressions are not allowed in interpolated strings", input, "at column " + this._findInterpolationErrorColumn(parts, i, interpolationConfig) + " in", location);
                expressions.push("$implict");
                offsets.push(offset);
            }
        }
        return new SplitInterpolation(strings, expressions, offsets);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    Parser.prototype.wrapLiteralPrimitive = /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    function (input, location) {
        return new ASTWithSource(new LiteralPrimitive(new ParseSpan(0, input === null ? 0 : input.length), input), input, location, this.errors);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Parser.prototype._stripComments = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ i = this._commentStart(input);
        return i != null ? input.substring(0, i).trim() : input;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Parser.prototype._commentStart = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ outerQuote = null;
        for (var /** @type {?} */ i = 0; i < input.length - 1; i++) {
            var /** @type {?} */ char = input.charCodeAt(i);
            var /** @type {?} */ nextChar = input.charCodeAt(i + 1);
            if (char === $SLASH && nextChar === $SLASH && outerQuote === null) {
                return i;
            }
            if (outerQuote === char) {
                outerQuote = null;
            }
            else if (outerQuote === null && isQuote(char)) {
                outerQuote = char;
            }
        }
        return null;
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    Parser.prototype._checkNoInterpolation = /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        var /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        var /** @type {?} */ parts = input.split(regexp);
        if (parts.length > 1) {
            this._reportError("Got interpolation (" + interpolationConfig.start + interpolationConfig.end + ") where expression was expected", input, "at column " + this._findInterpolationErrorColumn(parts, 1, interpolationConfig) + " in", location);
        }
    };
    /**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */
    Parser.prototype._findInterpolationErrorColumn = /**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (parts, partInErrIdx, interpolationConfig) {
        var /** @type {?} */ errLocation = "";
        for (var /** @type {?} */ j = 0; j < partInErrIdx; j++) {
            errLocation += j % 2 === 0 ? parts[j] : "" + interpolationConfig.start + parts[j] + interpolationConfig.end;
        }
        return errLocation.length;
    };
    return Parser;
}());
var ParseAST = /** @class */ (function () {
    function ParseAST(input, location, tokens, inputLength, parseAction, errors, offset) {
        this.input = input;
        this.location = location;
        this.tokens = tokens;
        this.inputLength = inputLength;
        this.parseAction = parseAction;
        this.errors = errors;
        this.offset = offset;
        this.rparensExpected = 0;
        this.rbracketsExpected = 0;
        this.rbracesExpected = 0;
        this.index = 0;
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    ParseAST.prototype.peek = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var /** @type {?} */ i = this.index + offset;
        return i < this.tokens.length ? this.tokens[i] : EOF;
    };
    Object.defineProperty(ParseAST.prototype, "next", {
        get: /**
         * @return {?}
         */
        function () {
            return this.peek(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseAST.prototype, "inputIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index < this.tokens.length ? this.next.index + this.offset : this.inputLength + this.offset;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} start
     * @return {?}
     */
    ParseAST.prototype.span = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        return new ParseSpan(start, this.inputIndex);
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.advance = /**
     * @return {?}
     */
    function () {
        this.index++;
    };
    /**
     * @param {?} code
     * @return {?}
     */
    ParseAST.prototype.optionalCharacter = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        if (this.next.isCharacter(code)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.peekKeywordLet = /**
     * @return {?}
     */
    function () {
        return this.next.isKeywordLet();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.peekKeywordAs = /**
     * @return {?}
     */
    function () {
        return this.next.isKeywordAs();
    };
    /**
     * @param {?} code
     * @return {?}
     */
    ParseAST.prototype.expectCharacter = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        if (this.optionalCharacter(code)) {
            return;
        }
        this.error("Missing expected " + String.fromCharCode(code));
    };
    /**
     * @param {?} op
     * @return {?}
     */
    ParseAST.prototype.optionalOperator = /**
     * @param {?} op
     * @return {?}
     */
    function (op) {
        if (this.next.isOperator(op)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} operator
     * @return {?}
     */
    ParseAST.prototype.expectOperator = /**
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        if (this.optionalOperator(operator)) {
            return;
        }
        this.error("Missing expected operator " + operator);
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.expectIdentifierOrKeyword = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword()) {
            this.error("Unexpected token " + n + ", expected identifier or keyword");
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.expectIdentifierOrKeywordOrString = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
            this.error("Unexpected token " + n + ", expected identifier, keyword, or string");
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseChain = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ exprs = [];
        var /** @type {?} */ start = this.inputIndex;
        while (this.index < this.tokens.length) {
            var /** @type {?} */ expr = this.parsePipe();
            exprs.push(expr);
            if (this.optionalCharacter($SEMICOLON)) {
                if (!this.parseAction) {
                    this.error("Binding expression cannot contain chained expression");
                }
                while (this.optionalCharacter($SEMICOLON)) { } // read all semicolons
            }
            else if (this.index < this.tokens.length) {
                this.error("Unexpected token '" + this.next + "'");
            }
        }
        if (exprs.length === 0) {
            return new EmptyExpr(this.span(start));
        }
        if (exprs.length === 1) {
            return exprs[0];
        }
        return new Chain(this.span(start), exprs);
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parsePipe = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ result = this.parseExpression();
        if (this.optionalOperator("|")) {
            if (this.parseAction) {
                this.error("Cannot have a pipe in an action expression");
            }
            do {
                var /** @type {?} */ name_1 = this.expectIdentifierOrKeyword();
                var /** @type {?} */ args = [];
                while (this.optionalCharacter($COLON)) {
                    args.push(this.parseExpression());
                }
                result = new BindingPipe(this.span(result.span.start), result, name_1, args);
            } while (this.optionalOperator("|"));
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseExpression = /**
     * @return {?}
     */
    function () {
        return this.parseConditional();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseConditional = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.inputIndex;
        var /** @type {?} */ result = this.parseLogicalOr();
        if (this.optionalOperator("?")) {
            var /** @type {?} */ yes = this.parsePipe();
            var /** @type {?} */ no = void 0;
            if (!this.optionalCharacter($COLON)) {
                var /** @type {?} */ end = this.inputIndex;
                var /** @type {?} */ expression = this.input.substring(start, end);
                this.error("Conditional expression " + expression + " requires all 3 expressions");
                no = new EmptyExpr(this.span(start));
            }
            else {
                no = this.parsePipe();
            }
            return new Conditional(this.span(start), result, yes, no);
        }
        else {
            return result;
        }
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseLogicalOr = /**
     * @return {?}
     */
    function () {
        // '||'
        var /** @type {?} */ result = this.parseLogicalAnd();
        while (this.optionalOperator("||")) {
            var /** @type {?} */ right = this.parseLogicalAnd();
            result = new Binary(this.span(result.span.start), "||", result, right);
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseLogicalAnd = /**
     * @return {?}
     */
    function () {
        // '&&'
        var /** @type {?} */ result = this.parseEquality();
        while (this.optionalOperator("&&")) {
            var /** @type {?} */ right = this.parseEquality();
            result = new Binary(this.span(result.span.start), "&&", result, right);
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseEquality = /**
     * @return {?}
     */
    function () {
        // '==','!=','===','!=='
        var /** @type {?} */ result = this.parseRelational();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "==":
                case "===":
                case "!=":
                case "!==":
                    this.advance();
                    var /** @type {?} */ right = this.parseRelational();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseRelational = /**
     * @return {?}
     */
    function () {
        // '<', '>', '<=', '>='
        var /** @type {?} */ result = this.parseAdditive();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "<":
                case ">":
                case "<=":
                case ">=":
                    this.advance();
                    var /** @type {?} */ right = this.parseAdditive();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseAdditive = /**
     * @return {?}
     */
    function () {
        // '+', '-'
        var /** @type {?} */ result = this.parseMultiplicative();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "+":
                case "-":
                    this.advance();
                    var /** @type {?} */ right = this.parseMultiplicative();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseMultiplicative = /**
     * @return {?}
     */
    function () {
        // '*', '%', '/'
        var /** @type {?} */ result = this.parsePrefix();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "*":
                case "%":
                case "/":
                    this.advance();
                    var /** @type {?} */ right = this.parsePrefix();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parsePrefix = /**
     * @return {?}
     */
    function () {
        if (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ start = this.inputIndex;
            var /** @type {?} */ operator = this.next.strValue;
            var /** @type {?} */ result = void 0;
            switch (operator) {
                case "+":
                    this.advance();
                    return this.parsePrefix();
                case "-":
                    this.advance();
                    result = this.parsePrefix();
                    return new Binary(this.span(start), operator, new LiteralPrimitive(new ParseSpan(start, start), 0), result);
                case "!":
                    this.advance();
                    result = this.parsePrefix();
                    return new PrefixNot(this.span(start), result);
            }
        }
        return this.parseCallChain();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseCallChain = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ result = this.parsePrimary();
        while (true) {
            if (this.optionalCharacter($PERIOD)) {
                result = this.parseAccessMemberOrMethodCall(result, false);
            }
            else if (this.optionalOperator("?.")) {
                result = this.parseAccessMemberOrMethodCall(result, true);
            }
            else if (this.optionalCharacter($LBRACKET)) {
                this.rbracketsExpected++;
                var /** @type {?} */ key = this.parsePipe();
                this.rbracketsExpected--;
                this.expectCharacter($RBRACKET);
                if (this.optionalOperator("=")) {
                    var /** @type {?} */ value = this.parseConditional();
                    result = new KeyedWrite(this.span(result.span.start), result, key, value);
                }
                else {
                    result = new KeyedRead(this.span(result.span.start), result, key);
                }
            }
            else if (this.optionalCharacter($LPAREN)) {
                this.rparensExpected++;
                var /** @type {?} */ args = this.parseCallArguments();
                this.rparensExpected--;
                this.expectCharacter($RPAREN);
                result = new FunctionCall(this.span(result.span.start), result, args);
            }
            else if (this.optionalOperator("!")) {
                result = new NonNullAssert(this.span(result.span.start), result);
            }
            else {
                return result;
            }
        }
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parsePrimary = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.inputIndex;
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            var /** @type {?} */ result = this.parsePipe();
            this.rparensExpected--;
            this.expectCharacter($RPAREN);
            return result;
        }
        else if (this.next.isKeywordNull()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), null);
        }
        else if (this.next.isKeywordUndefined()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), void 0);
        }
        else if (this.next.isKeywordTrue()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), true);
        }
        else if (this.next.isKeywordFalse()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), false);
        }
        else if (this.next.isKeywordThis()) {
            this.advance();
            return new ImplicitReceiver(this.span(start));
        }
        else if (this.optionalCharacter($LBRACKET)) {
            this.rbracketsExpected++;
            var /** @type {?} */ elements = this.parseExpressionList($RBRACKET);
            this.rbracketsExpected--;
            this.expectCharacter($RBRACKET);
            return new LiteralArray(this.span(start), elements);
        }
        else if (this.next.isCharacter($LBRACE)) {
            return this.parseLiteralMap();
        }
        else if (this.next.isIdentifier()) {
            return this.parseAccessMemberOrMethodCall(new ImplicitReceiver(this.span(start)), false);
        }
        else if (this.next.isNumber()) {
            var /** @type {?} */ value = this.next.toNumber();
            this.advance();
            return new LiteralPrimitive(this.span(start), value);
        }
        else if (this.next.isString()) {
            var /** @type {?} */ literalValue = this.next.toString();
            this.advance();
            return new LiteralPrimitive(this.span(start), literalValue);
        }
        else if (this.index >= this.tokens.length) {
            this.error("Unexpected end of expression: " + this.input);
            return new EmptyExpr(this.span(start));
        }
        else {
            this.error("Unexpected token " + this.next);
            return new EmptyExpr(this.span(start));
        }
    };
    /**
     * @param {?} terminator
     * @return {?}
     */
    ParseAST.prototype.parseExpressionList = /**
     * @param {?} terminator
     * @return {?}
     */
    function (terminator) {
        var /** @type {?} */ result = [];
        if (!this.next.isCharacter(terminator)) {
            do {
                result.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseLiteralMap = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ keys = [];
        var /** @type {?} */ values = [];
        var /** @type {?} */ start = this.inputIndex;
        this.expectCharacter($LBRACE);
        if (!this.optionalCharacter($RBRACE)) {
            this.rbracesExpected++;
            do {
                var /** @type {?} */ quoted = this.next.isString();
                var /** @type {?} */ key = this.expectIdentifierOrKeywordOrString();
                keys.push({ key: key, quoted: quoted });
                this.expectCharacter($COLON);
                values.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
            this.rbracesExpected--;
            this.expectCharacter($RBRACE);
        }
        return new LiteralMap(this.span(start), keys, values);
    };
    /**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */
    ParseAST.prototype.parseAccessMemberOrMethodCall = /**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */
    function (receiver, isSafe) {
        if (isSafe === void 0) { isSafe = false; }
        var /** @type {?} */ start = receiver.span.start;
        var /** @type {?} */ id = this.expectIdentifierOrKeyword();
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            var /** @type {?} */ args = this.parseCallArguments();
            this.expectCharacter($RPAREN);
            this.rparensExpected--;
            var /** @type {?} */ span = this.span(start);
            return isSafe ? new SafeMethodCall(span, receiver, id, args) : new MethodCall(span, receiver, id, args);
        }
        else {
            if (isSafe) {
                if (this.optionalOperator("=")) {
                    this.error("The '?.' operator cannot be used in the assignment");
                    return new EmptyExpr(this.span(start));
                }
                else {
                    return new SafePropertyRead(this.span(start), receiver, id);
                }
            }
            else {
                if (this.optionalOperator("=")) {
                    if (!this.parseAction) {
                        this.error("Bindings cannot contain assignments");
                        return new EmptyExpr(this.span(start));
                    }
                    var /** @type {?} */ value = this.parseConditional();
                    return new PropertyWrite(this.span(start), receiver, id, value);
                }
                else {
                    return new PropertyRead(this.span(start), receiver, id);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseCallArguments = /**
     * @return {?}
     */
    function () {
        if (this.next.isCharacter($RPAREN)) {
            return [];
        }
        var /** @type {?} */ positionals = [];
        do {
            positionals.push(this.parsePipe());
        } while (this.optionalCharacter($COMMA));
        return /** @type {?} */ (positionals);
    };
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     */
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */
    ParseAST.prototype.expectTemplateBindingKey = /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */
    function () {
        var /** @type {?} */ result = "";
        var /** @type {?} */ operatorFound = false;
        do {
            result += this.expectIdentifierOrKeywordOrString();
            operatorFound = this.optionalOperator("-");
            if (operatorFound) {
                result += "-";
            }
        } while (operatorFound);
        return result.toString();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseTemplateBindings = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ bindings = [];
        var /** @type {?} */ prefix = /** @type {?} */ ((null));
        var /** @type {?} */ warnings = [];
        while (this.index < this.tokens.length) {
            var /** @type {?} */ start = this.inputIndex;
            var /** @type {?} */ keyIsVar = this.peekKeywordLet();
            if (keyIsVar) {
                this.advance();
            }
            var /** @type {?} */ rawKey = this.expectTemplateBindingKey();
            var /** @type {?} */ key = rawKey;
            if (!keyIsVar) {
                if (prefix === null) {
                    prefix = key;
                }
                else {
                    key = prefix + key[0].toUpperCase() + key.substring(1);
                }
            }
            this.optionalCharacter($COLON);
            var /** @type {?} */ name_2 = /** @type {?} */ ((null));
            var /** @type {?} */ expression = /** @type {?} */ ((null));
            if (keyIsVar) {
                if (this.optionalOperator("=")) {
                    name_2 = this.expectTemplateBindingKey();
                }
                else {
                    name_2 = "$implicit";
                }
            }
            else if (this.peekKeywordAs()) {
                var /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                name_2 = rawKey;
                key = this.expectTemplateBindingKey(); // read local var name
                keyIsVar = true;
            }
            else if (this.next !== EOF && !this.peekKeywordLet()) {
                var /** @type {?} */ st = this.inputIndex;
                var /** @type {?} */ ast = this.parsePipe();
                var /** @type {?} */ source = this.input.substring(st - this.offset, this.inputIndex - this.offset);
                expression = new ASTWithSource(ast, source, this.location, this.errors);
            }
            bindings.push(new TemplateBinding(this.span(start), key, keyIsVar, name_2, expression));
            if (this.peekKeywordAs() && !keyIsVar) {
                var /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                var /** @type {?} */ letName = this.expectTemplateBindingKey(); // read local var name
                bindings.push(new TemplateBinding(this.span(letStart), letName, true, key, /** @type {?} */ ((null))));
            }
            if (!this.optionalCharacter($SEMICOLON)) {
                this.optionalCharacter($COMMA);
            }
        }
        return new TemplateBindingParseResult(bindings, warnings, this.errors);
    };
    /**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */
    ParseAST.prototype.error = /**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */
    function (message, index) {
        if (index === void 0) { index = null; }
        this.errors.push(new ParserError(message, this.input, this.locationText(index), this.location));
        this.skip();
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    ParseAST.prototype.locationText = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = null; }
        if (index === null) {
            index = this.index;
        }
        return index < this.tokens.length ? "at column " + (this.tokens[index].index + 1) + " in" : "at the end of the expression";
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.skip = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ n = this.next;
        while (this.index < this.tokens.length &&
            !n.isCharacter($SEMICOLON) &&
            (this.rparensExpected <= 0 || !n.isCharacter($RPAREN)) &&
            (this.rbracesExpected <= 0 || !n.isCharacter($RBRACE)) &&
            (this.rbracketsExpected <= 0 || !n.isCharacter($RBRACKET))) {
            if (this.next.isError()) {
                this.errors.push(new ParserError(/** @type {?} */ ((this.next.toString())), this.input, this.locationText(), this.location));
            }
            this.advance();
            n = this.next;
        }
    };
    return ParseAST;
}());
var SimpleExpressionChecker = /** @class */ (function () {
    function SimpleExpressionChecker() {
        this.errors = [];
    }
    /**
     * @param {?} ast
     * @return {?}
     */
    SimpleExpressionChecker.check = /**
     * @param {?} ast
     * @return {?}
     */
    function (ast) {
        var /** @type {?} */ s = new SimpleExpressionChecker();
        ast.visit(s);
        return s.errors;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitImplicitReceiver = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitInterpolation = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitLiteralPrimitive = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPropertyRead = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPropertyWrite = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitSafePropertyRead = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitMethodCall = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitSafeMethodCall = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitFunctionCall = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitLiteralArray = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) {
        this.visitAll(ast.expressions);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitLiteralMap = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) {
        this.visitAll(ast.values);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitBinary = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPrefixNot = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitNonNullAssert = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitConditional = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPipe = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) {
        this.errors.push("pipes");
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitKeyedRead = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitKeyedWrite = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} asts
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitAll = /**
     * @param {?} asts
     * @return {?}
     */
    function (asts) {
        var _this = this;
        return asts.map(function (node) { return node.visit(_this); });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitChain = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitQuote = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    return SimpleExpressionChecker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var /** @type {?} */ TAG_TO_PLACEHOLDER_NAMES = {
    'A': 'LINK',
    'B': 'BOLD_TEXT',
    'BR': 'LINE_BREAK',
    'EM': 'EMPHASISED_TEXT',
    'H1': 'HEADING_LEVEL1',
    'H2': 'HEADING_LEVEL2',
    'H3': 'HEADING_LEVEL3',
    'H4': 'HEADING_LEVEL4',
    'H5': 'HEADING_LEVEL5',
    'H6': 'HEADING_LEVEL6',
    'HR': 'HORIZONTAL_RULE',
    'I': 'ITALIC_TEXT',
    'LI': 'LIST_ITEM',
    'LINK': 'MEDIA_LINK',
    'OL': 'ORDERED_LIST',
    'P': 'PARAGRAPH',
    'Q': 'QUOTATION',
    'S': 'STRIKETHROUGH_TEXT',
    'SMALL': 'SMALL_TEXT',
    'SUB': 'SUBSTRIPT',
    'SUP': 'SUPERSCRIPT',
    'TBODY': 'TABLE_BODY',
    'TD': 'TABLE_CELL',
    'TFOOT': 'TABLE_FOOTER',
    'TH': 'TABLE_HEADER_CELL',
    'THEAD': 'TABLE_HEADER',
    'TR': 'TABLE_ROW',
    'TT': 'MONOSPACED_TEXT',
    'U': 'UNDERLINED_TEXT',
    'UL': 'UNORDERED_LIST',
};
/**
 * Creates unique names for placeholder with different content.
 *
 * Returns the same placeholder name when the content is identical.
 *
 * \@internal
 */
var /**
 * Creates unique names for placeholder with different content.
 *
 * Returns the same placeholder name when the content is identical.
 *
 * \@internal
 */
PlaceholderRegistry = /** @class */ (function () {
    function PlaceholderRegistry() {
        this._placeHolderNameCounts = {};
        this._signatureToName = {};
    }
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    PlaceholderRegistry.prototype.getStartTagPlaceholderName = /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    function (tag, attrs, isVoid) {
        var /** @type {?} */ signature = this._hashTag(tag, attrs, isVoid);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        var /** @type {?} */ upperTag = tag.toUpperCase();
        var /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || "TAG_" + upperTag;
        var /** @type {?} */ name = this._generateUniqueName(isVoid ? baseName : "START_" + baseName);
        this._signatureToName[signature] = name;
        return name;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    PlaceholderRegistry.prototype.getCloseTagPlaceholderName = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        var /** @type {?} */ signature = this._hashClosingTag(tag);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        var /** @type {?} */ upperTag = tag.toUpperCase();
        var /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || "TAG_" + upperTag;
        var /** @type {?} */ name = this._generateUniqueName("CLOSE_" + baseName);
        this._signatureToName[signature] = name;
        return name;
    };
    /**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */
    PlaceholderRegistry.prototype.getPlaceholderName = /**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */
    function (name, content) {
        var /** @type {?} */ upperName = name.toUpperCase();
        var /** @type {?} */ signature = "PH: " + upperName + "=" + content;
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        var /** @type {?} */ uniqueName = this._generateUniqueName(upperName);
        this._signatureToName[signature] = uniqueName;
        return uniqueName;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    PlaceholderRegistry.prototype.getUniquePlaceholder = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._generateUniqueName(name.toUpperCase());
    };
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    PlaceholderRegistry.prototype._hashTag = /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    function (tag, attrs, isVoid) {
        var /** @type {?} */ start = "<" + tag;
        var /** @type {?} */ strAttrs = Object.keys(attrs).sort().map(function (name) { return " " + name + "=" + attrs[name]; }).join('');
        var /** @type {?} */ end = isVoid ? '/>' : "></" + tag + ">";
        return start + strAttrs + end;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    PlaceholderRegistry.prototype._hashClosingTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) { return this._hashTag("/" + tag, {}, false); };
    /**
     * @param {?} base
     * @return {?}
     */
    PlaceholderRegistry.prototype._generateUniqueName = /**
     * @param {?} base
     * @return {?}
     */
    function (base) {
        var /** @type {?} */ seen = this._placeHolderNameCounts.hasOwnProperty(base);
        if (!seen) {
            this._placeHolderNameCounts[base] = 1;
            return base;
        }
        var /** @type {?} */ id = this._placeHolderNameCounts[base];
        this._placeHolderNameCounts[base] = id + 1;
        return base + "_" + id;
    };
    return PlaceholderRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _expParser = new Parser$1(new Lexer());
/**
 * Returns a function converting html nodes to an i18n Message given an interpolationConfig
 * @param {?} interpolationConfig
 * @return {?}
 */
function createI18nMessageFactory(interpolationConfig) {
    var /** @type {?} */ visitor = new I18nVisitor(_expParser, interpolationConfig);
    return function (nodes, meaning, description, id) {
        return visitor.toI18nMessage(nodes, meaning, description, id);
    };
}
var I18nVisitor = /** @class */ (function () {
    function I18nVisitor(_expressionParser, _interpolationConfig) {
        this._expressionParser = _expressionParser;
        this._interpolationConfig = _interpolationConfig;
    }
    /**
     * @param {?} nodes
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     * @return {?}
     */
    I18nVisitor.prototype.toI18nMessage = /**
     * @param {?} nodes
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     * @return {?}
     */
    function (nodes, meaning, description, id) {
        this._isIcu = nodes.length === 1 && nodes[0] instanceof Expansion;
        this._icuDepth = 0;
        this._placeholderRegistry = new PlaceholderRegistry();
        this._placeholderToContent = {};
        this._placeholderToMessage = {};
        var /** @type {?} */ i18nodes = visitAll(this, nodes, {});
        return new Message(i18nodes, this._placeholderToContent, this._placeholderToMessage, meaning, description, id);
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        var /** @type {?} */ children = visitAll(this, el.children);
        var /** @type {?} */ attrs = {};
        el.attrs.forEach(function (attr) {
            // Do not visit the attributes, translatable ones are top-level ASTs
            attrs[attr.name] = attr.value;
        });
        var /** @type {?} */ isVoid = getHtmlTagDefinition(el.name).isVoid;
        var /** @type {?} */ startPhName = this._placeholderRegistry.getStartTagPlaceholderName(el.name, attrs, isVoid);
        this._placeholderToContent[startPhName] = el.sourceSpan ? /** @type {?} */ ((el.sourceSpan)).toString() : "";
        var /** @type {?} */ closePhName = "";
        if (!isVoid) {
            closePhName = this._placeholderRegistry.getCloseTagPlaceholderName(el.name);
            this._placeholderToContent[closePhName] = "</" + el.name + ">";
        }
        return new TagPlaceholder(el.name, attrs, startPhName, closePhName, children, isVoid, /** @type {?} */ ((el.sourceSpan)));
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) {
        return this._visitTextWithInterpolation(attribute.value, attribute.sourceSpan);
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return this._visitTextWithInterpolation(text.value, /** @type {?} */ ((text.sourceSpan)));
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) {
        return null;
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        this._icuDepth++;
        var /** @type {?} */ i18nIcuCases = {};
        var /** @type {?} */ i18nIcu = new Icu(icu.switchValue, icu.type, i18nIcuCases, icu.sourceSpan);
        icu.cases.forEach(function (caze) {
            i18nIcuCases[caze.value] = new Container(caze.expression.map(function (node) { return node.visit(_this, {}); }), caze.expSourceSpan);
        });
        this._icuDepth--;
        if (this._isIcu || this._icuDepth > 0) {
            // Returns an ICU node when:
            // - the message (vs a part of the message) is an ICU message, or
            // - the ICU message is nested.
            var /** @type {?} */ expPh = this._placeholderRegistry.getUniquePlaceholder("VAR_" + icu.type);
            i18nIcu.expressionPlaceholder = expPh;
            this._placeholderToContent[expPh] = icu.switchValue;
            return i18nIcu;
        }
        // Else returns a placeholder
        // ICU placeholders should not be replaced with their original content but with the their
        // translations. We need to create a new visitor (they are not re-entrant) to compute the
        // message id.
        // TODO(vicb): add a html.Node -> i18n.Message cache to avoid having to re-create the msg
        var /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName("ICU", icu.sourceSpan.toString());
        var /** @type {?} */ visitor = new I18nVisitor(this._expressionParser, this._interpolationConfig);
        this._placeholderToMessage[phName] = visitor.toI18nMessage([icu], "", "", "");
        return new IcuPlaceholder(i18nIcu, phName, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        throw new Error("Unreachable code");
    };
    /**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */
    I18nVisitor.prototype._visitTextWithInterpolation = /**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */
    function (text, sourceSpan) {
        var /** @type {?} */ splitInterpolation = this._expressionParser.splitInterpolation(text, sourceSpan.start.toString(), this._interpolationConfig);
        if (!splitInterpolation) {
            // No expression, return a single text
            return new Text$1(text, sourceSpan);
        }
        // Return a group of text + expressions
        var /** @type {?} */ nodes = [];
        var /** @type {?} */ container = new Container(nodes, sourceSpan);
        var _a = this._interpolationConfig, sDelimiter = _a.start, eDelimiter = _a.end;
        for (var /** @type {?} */ i = 0; i < splitInterpolation.strings.length - 1; i++) {
            var /** @type {?} */ expression = splitInterpolation.expressions[i];
            var /** @type {?} */ baseName = extractPlaceholderName(expression) || "INTERPOLATION";
            var /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName(baseName, expression);
            if (splitInterpolation.strings[i].length) {
                // No need to add empty strings
                nodes.push(new Text$1(splitInterpolation.strings[i], sourceSpan));
            }
            nodes.push(new Placeholder(expression, phName, sourceSpan));
            this._placeholderToContent[phName] = sDelimiter + expression + eDelimiter;
        }
        // The last index contains no expression
        var /** @type {?} */ lastStringIdx = splitInterpolation.strings.length - 1;
        if (splitInterpolation.strings[lastStringIdx].length) {
            nodes.push(new Text$1(splitInterpolation.strings[lastStringIdx], sourceSpan));
        }
        return container;
    };
    return I18nVisitor;
}());
var /** @type {?} */ _CUSTOM_PH_EXP = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
/**
 * @param {?} input
 * @return {?}
 */
function extractPlaceholderName(input) {
    return input.split(_CUSTOM_PH_EXP)[2];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _I18N_ATTR = "i18n";
var HtmlParser = /** @class */ (function (_super) {
    __extends(HtmlParser, _super);
    function HtmlParser(interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var _this = _super.call(this, getHtmlTagDefinition) || this;
        _this.interpolationConfig = interpolationConfig;
        return _this;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */
    HtmlParser.prototype.parse = /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */
    function (source, url, parseExpansionForms) {
        if (parseExpansionForms === void 0) { parseExpansionForms = false; }
        return _super.prototype.parse.call(this, source, url, parseExpansionForms, this.interpolationConfig);
    };
    /**
     * Extract translatable messages from an html AST
     */
    /**
     * Extract translatable messages from an html AST
     * @param {?} nodes
     * @return {?}
     */
    HtmlParser.prototype.extractMessages = /**
     * Extract translatable messages from an html AST
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var /** @type {?} */ visitor = new Visitor$4(["wrapper"]);
        // Construct a single fake root element
        var /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.extract(wrapper, this.interpolationConfig);
    };
    /**
     * @param {?} nodes
     * @param {?} translations
     * @param {?} params
     * @param {?=} metadata
     * @param {?=} implicitTags
     * @return {?}
     */
    HtmlParser.prototype.mergeTranslations = /**
     * @param {?} nodes
     * @param {?} translations
     * @param {?} params
     * @param {?=} metadata
     * @param {?=} implicitTags
     * @return {?}
     */
    function (nodes, translations, params, metadata, implicitTags) {
        if (implicitTags === void 0) { implicitTags = []; }
        var /** @type {?} */ visitor = new Visitor$4(implicitTags);
        // Construct a single fake root element
        var /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.merge(wrapper, translations, this.interpolationConfig, params, metadata);
    };
    return HtmlParser;
}(Parser));
var ExtractionResult = /** @class */ (function () {
    function ExtractionResult(messages, errors) {
        this.messages = messages;
        this.errors = errors;
    }
    return ExtractionResult;
}());
/**
 * A container for translated messages
 */
var /**
 * A container for translated messages
 */
TranslationBundle = /** @class */ (function () {
    function TranslationBundle(i18nNodesByMsgId, digest, interpolationConfig, missingTranslationStrategy, mapperFactory, console) {
        if (i18nNodesByMsgId === void 0) { i18nNodesByMsgId = {}; }
        this.i18nNodesByMsgId = i18nNodesByMsgId;
        this.digest = digest;
        this.mapperFactory = mapperFactory;
        this.i18nToHtml = new I18nToHtmlVisitor(i18nNodesByMsgId, digest, /** @type {?} */ ((mapperFactory)), missingTranslationStrategy, interpolationConfig, console);
    }
    // Creates a `TranslationBundle` by parsing the given `content` with the `serializer`.
    /**
     * @param {?} content
     * @param {?} url
     * @param {?} digest
     * @param {?} createNameMapper
     * @param {?} loadFct
     * @param {?} missingTranslationStrategy
     * @param {?=} interpolationConfig
     * @return {?}
     */
    TranslationBundle.load = /**
     * @param {?} content
     * @param {?} url
     * @param {?} digest
     * @param {?} createNameMapper
     * @param {?} loadFct
     * @param {?} missingTranslationStrategy
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (content, url, digest, createNameMapper, loadFct, missingTranslationStrategy, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ i18nNodesByMsgId = loadFct(content, url);
        var /** @type {?} */ digestFn = function (m) { return digest(m); };
        var /** @type {?} */ mapperFactory = function (m) { return ((createNameMapper(m))); };
        return new TranslationBundle(i18nNodesByMsgId, digestFn, interpolationConfig, missingTranslationStrategy, mapperFactory, console);
    };
    // Returns the translation as HTML nodes from the given source message.
    /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    TranslationBundle.prototype.get = /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    function (srcMsg, params) {
        var /** @type {?} */ htmlRes = this.i18nToHtml.convert(srcMsg, params);
        if (htmlRes.errors.length) {
            throw new Error(htmlRes.errors.join("\n"));
        }
        return htmlRes.nodes;
    };
    /**
     * @param {?} srcMsg
     * @return {?}
     */
    TranslationBundle.prototype.has = /**
     * @param {?} srcMsg
     * @return {?}
     */
    function (srcMsg) {
        return this.digest(srcMsg) in this.i18nNodesByMsgId;
    };
    return TranslationBundle;
}());
var I18nToHtmlVisitor = /** @class */ (function () {
    function I18nToHtmlVisitor(_i18nNodesByMsgId, _digest, _mapperFactory, _missingTranslationStrategy, _interpolationConfig, _console) {
        if (_i18nNodesByMsgId === void 0) { _i18nNodesByMsgId = {}; }
        this._i18nNodesByMsgId = _i18nNodesByMsgId;
        this._digest = _digest;
        this._mapperFactory = _mapperFactory;
        this._missingTranslationStrategy = _missingTranslationStrategy;
        this._interpolationConfig = _interpolationConfig;
        this._console = _console;
        this._contextStack = [];
        this._errors = [];
    }
    /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.convert = /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    function (srcMsg, params) {
        this._contextStack.length = 0;
        this._errors.length = 0;
        this._params = params;
        this._paramKeys = Object.keys(params);
        // i18n to text
        var /** @type {?} */ text = this.convertToText(srcMsg);
        // text to html
        var /** @type {?} */ url = srcMsg.nodes[0].sourceSpan.start.file.url;
        var /** @type {?} */ htmlParser = new HtmlParser().parse(text, url, true);
        return {
            nodes: htmlParser.rootNodes,
            errors: __spread(this._errors, htmlParser.errors)
        };
    };
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) {
        return text.value;
    };
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        return container.children.map(function (n) { return n.visit(_this); }).join("");
    };
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ cases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        // TODO(vicb): Once all format switch to using expression placeholders
        // we should throw when the placeholder is not in the source message
        var /** @type {?} */ exp = this._srcMsg.placeholders.hasOwnProperty(icu.expression)
            ? this._srcMsg.placeholders[icu.expression]
            : icu.expression;
        return "{" + exp + ", " + icu.type + ", " + cases.join(" ") + "}";
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var /** @type {?} */ phName = this._mapper(ph.name);
        if (this._srcMsg.placeholders.hasOwnProperty(phName)) {
            return this.convertToValue(this._srcMsg.placeholders[phName]);
        }
        if (this._srcMsg.placeholderToMessage.hasOwnProperty(phName)) {
            return this.convertToText(this._srcMsg.placeholderToMessage[phName]);
        }
        this._addError(ph, "Unknown placeholder \"" + ph.name + "\"");
        return "";
    };
    // Loaded message contains only placeholders (vs tag and icu placeholders).
    // However when a translation can not be found, we need to serialize the source message
    // which can contain tag placeholders
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        var /** @type {?} */ tag = "" + ph.tag;
        var /** @type {?} */ attrs = Object.keys(ph.attrs)
            .map(function (name) { return name + "=\"" + ph.attrs[name] + "\""; })
            .join(" ");
        if (ph.isVoid) {
            return "<" + tag + " " + attrs + "/>";
        }
        var /** @type {?} */ children = ph.children.map(function (c) { return c.visit(_this); }).join("");
        return "<" + tag + " " + attrs + ">" + children + "</" + tag + ">";
    };
    // Loaded message contains only placeholders (vs tag and icu placeholders).
    // However when a translation can not be found, we need to serialize the source message
    // which can contain tag placeholders
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        // An ICU placeholder references the source message to be serialized
        return this.convertToText(this._srcMsg.placeholderToMessage[ph.name]);
    };
    /**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.convertToText = /**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */
    function (srcMsg) {
        var _this = this;
        var /** @type {?} */ id = this._digest(srcMsg);
        var /** @type {?} */ mapper = this._mapperFactory ? this._mapperFactory(srcMsg) : null;
        var /** @type {?} */ nodes;
        this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper });
        this._srcMsg = srcMsg;
        if (this._i18nNodesByMsgId.hasOwnProperty(id)) {
            // When there is a translation use its nodes as the source
            // And create a mapper to convert serialized placeholder names to internal names
            nodes = this._i18nNodesByMsgId[id];
            this._mapper = function (name) { return (mapper ? /** @type {?} */ ((mapper.toInternalName(name))) : name); };
        }
        else {
            // When no translation has been found
            // - report an error / a warning / nothing,
            // - use the nodes from the original message
            // - placeholders are already internal and need no mapper
            if (this._missingTranslationStrategy === MissingTranslationStrategy.Error) {
                this._addError(srcMsg.nodes[0], "Missing translation for message \"" + id + "\"");
            }
            else if (this._console && this._missingTranslationStrategy === MissingTranslationStrategy.Warning) {
                this._console.warn("Missing translation for message \"" + id + "\"");
            }
            nodes = srcMsg.nodes;
            this._mapper = function (name) { return name; };
        }
        var /** @type {?} */ text = nodes.map(function (node) { return node.visit(_this); }).join("");
        var /** @type {?} */ context = /** @type {?} */ ((this._contextStack.pop()));
        this._srcMsg = context.msg;
        this._mapper = context.mapper;
        return text;
    };
    /**
     * @param {?} placeholder
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.convertToValue = /**
     * @param {?} placeholder
     * @return {?}
     */
    function (placeholder) {
        var /** @type {?} */ param = placeholder.replace(this._interpolationConfig.start, "").replace(this._interpolationConfig.end, "");
        return this._paramKeys.indexOf(param) !== -1 ? this._params[param] : placeholder;
    };
    /**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */
    I18nToHtmlVisitor.prototype._addError = /**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */
    function (el, msg) {
        this._errors.push(new I18nError(el.sourceSpan, msg));
    };
    return I18nToHtmlVisitor;
}());
/** @enum {number} */
var VisitorMode = {
    Extract: 0,
    Merge: 1,
};
VisitorMode[VisitorMode.Extract] = "Extract";
VisitorMode[VisitorMode.Merge] = "Merge";
/**
 * This Visitor is used:
 * 1. to extract all the translatable strings from an html AST (see `extract()`),
 * 2. to replace the translatable strings with the actual translations (see `merge()`)
 *
 * \@internal
 */
var /**
 * This Visitor is used:
 * 1. to extract all the translatable strings from an html AST (see `extract()`),
 * 2. to replace the translatable strings with the actual translations (see `merge()`)
 *
 * \@internal
 */
Visitor$4 = /** @class */ (function () {
    function Visitor$$1(_implicitTags) {
        if (_implicitTags === void 0) { _implicitTags = []; }
        this._implicitTags = _implicitTags;
        this.blockChildren = [];
    }
    /**
     * Extracts the messages from the tree
     */
    /**
     * Extracts the messages from the tree
     * @param {?} node
     * @param {?} interpolationConfig
     * @return {?}
     */
    Visitor$$1.prototype.extract = /**
     * Extracts the messages from the tree
     * @param {?} node
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (node, interpolationConfig) {
        this.init(VisitorMode.Extract, interpolationConfig);
        node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ExtractionResult(this.messages, this.errors);
    };
    /**
     * Returns a tree where all translatable nodes are translated
     */
    /**
     * Returns a tree where all translatable nodes are translated
     * @param {?} node
     * @param {?} translations
     * @param {?} interpolationConfig
     * @param {?} params
     * @param {?=} metadata
     * @return {?}
     */
    Visitor$$1.prototype.merge = /**
     * Returns a tree where all translatable nodes are translated
     * @param {?} node
     * @param {?} translations
     * @param {?} interpolationConfig
     * @param {?} params
     * @param {?=} metadata
     * @return {?}
     */
    function (node, translations, interpolationConfig, params, metadata) {
        if (metadata === void 0) { metadata = {}; }
        this.init(VisitorMode.Merge, interpolationConfig, params);
        this.translations = translations;
        this.metadata = metadata;
        var /** @type {?} */ translatedNode = node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ParseTreeResult(translatedNode.children, this.errors);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        // Parse cases for translatable html attributes
        var /** @type {?} */ expression = visitAll(this, icuCase.expression, context);
        if (this.mode === VisitorMode.Merge) {
            return new ExpansionCase(icuCase.value, expression, icuCase.sourceSpan, icuCase.valueSourceSpan, icuCase.expSourceSpan);
        }
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        this.mayBeAddBlockChildren(icu);
        var /** @type {?} */ wasInIcu = this.inIcu;
        if (!this.inIcu) {
            // nested ICU messages should not be extracted but top-level translated as a whole
            if (this.isInTranslatableSection) {
                this.addMessage([icu]);
            }
            this.inIcu = true;
        }
        var /** @type {?} */ cases = visitAll(this, icu.cases, context);
        if (this.mode === VisitorMode.Merge) {
            icu = new Expansion(icu.switchValue, icu.type, cases, icu.sourceSpan, icu.switchValueSourceSpan);
        }
        this.inIcu = wasInIcu;
        return icu;
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) {
        return;
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        if (this.isInTranslatableSection) {
            this.mayBeAddBlockChildren(text);
        }
        return text;
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        var _this = this;
        this.mayBeAddBlockChildren(el);
        this.depth++;
        var /** @type {?} */ wasInI18nNode = this.inI18nNode;
        var /** @type {?} */ wasInImplicitNode = this.inImplicitNode;
        var /** @type {?} */ childNodes = [];
        var /** @type {?} */ translatedChildNodes = /** @type {?} */ ((undefined));
        // Extract:
        // - top level nodes with the (implicit) "i18n" attribute if not already in a section
        // - ICU messages
        var /** @type {?} */ i18nAttr = getI18nAttr(el);
        var /** @type {?} */ isImplicit = this._implicitTags.some(function (tag) { return el.name === tag; }) && !this.inIcu && !this.isInTranslatableSection;
        var /** @type {?} */ isTopLevelImplicit = !wasInImplicitNode && isImplicit;
        this.inImplicitNode = wasInImplicitNode || isImplicit;
        if (!this.isInTranslatableSection && !this.inIcu) {
            if (i18nAttr || isTopLevelImplicit) {
                this.inI18nNode = true;
                var /** @type {?} */ message = /** @type {?} */ ((this.addMessage(el.children, this.metadata)));
                translatedChildNodes = this.translateMessage(el, message);
            }
            if (this.mode === VisitorMode.Extract) {
                var /** @type {?} */ isTranslatable = i18nAttr || isTopLevelImplicit;
                if (isTranslatable) {
                    this.openTranslatableSection(el);
                }
                visitAll(this, el.children);
                if (isTranslatable) {
                    this._closeTranslatableSection(el, el.children);
                }
            }
        }
        else {
            if (i18nAttr || isTopLevelImplicit) {
                this._reportError(el, "Could not mark an element as translatable inside a translatable section");
            }
            if (this.mode === VisitorMode.Extract) {
                // Descend into child nodes for extraction
                visitAll(this, el.children);
            }
        }
        if (this.mode === VisitorMode.Merge) {
            var /** @type {?} */ visitNodes = translatedChildNodes || el.children;
            visitNodes.forEach(function (child) {
                var /** @type {?} */ visited = child.visit(_this, context);
                if (visited && !_this.isInTranslatableSection) {
                    // Do not add the children from translatable sections (= i18n blocks here)
                    // They will be added later in this loop when the block closes (i.e. on `<!-- /i18n -->`)
                    childNodes = childNodes.concat(visited);
                }
            });
        }
        this.depth--;
        this.inI18nNode = wasInI18nNode;
        this.inImplicitNode = wasInImplicitNode;
        if (this.mode === VisitorMode.Merge) {
            return new Element(el.name, [], childNodes, el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
        }
        return null;
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) {
        throw new Error("unreachable code");
    };
    /**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @param {?=} params
     * @return {?}
     */
    Visitor$$1.prototype.init = /**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @param {?=} params
     * @return {?}
     */
    function (mode, interpolationConfig, params) {
        if (params === void 0) { params = {}; }
        this.mode = mode;
        this.inI18nBlock = false;
        this.inI18nNode = false;
        this.depth = 0;
        this.inIcu = false;
        this.msgCountAtSectionStart = undefined;
        this.errors = [];
        this.messages = [];
        this.inImplicitNode = false;
        this.createI18nMessage = createI18nMessageFactory(interpolationConfig);
        this.params = params;
    };
    /**
     * @param {?} ast
     * @param {?=} __1
     * @return {?}
     */
    Visitor$$1.prototype.addMessage = /**
     * @param {?} ast
     * @param {?=} __1
     * @return {?}
     */
    function (ast, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.meaning, meaning = _c === void 0 ? "" : _c, _d = _b.description, description = _d === void 0 ? "" : _d, _e = _b.id, id = _e === void 0 ? "" : _e;
        if (ast.length === 0 ||
            (ast.length === 1 && ast[0] instanceof Attribute && !(/** @type {?} */ (ast[0])).value)) {
            // Do not create empty messages
            return null;
        }
        var /** @type {?} */ message = this.createI18nMessage(ast, meaning, description, id);
        this.messages.push(message);
        return message;
    };
    /**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */
    Visitor$$1.prototype.translateMessage = /**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */
    function (el, message) {
        if (message && this.mode === VisitorMode.Merge) {
            var /** @type {?} */ nodes = this.translations.get(message, this.params);
            if (nodes) {
                return nodes;
            }
            this._reportError(el, "Translation unavailable for message id=\"" + this.translations.digest(message) + "\"");
        }
        return [];
    };
    /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */
    Visitor$$1.prototype.mayBeAddBlockChildren = /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.inI18nBlock && !this.inIcu && this.depth === this.blockStartDepth) {
            this.blockChildren.push(node);
        }
    };
    /**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */
    Visitor$$1.prototype.openTranslatableSection = /**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section start");
        }
        else {
            this.msgCountAtSectionStart = this.messages.length;
        }
    };
    Object.defineProperty(Visitor$$1.prototype, "isInTranslatableSection", {
        get: /**
         * A translatable section could be:
         * - the content of translatable element,
         * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
         * @return {?}
         */
        function () {
            return this.msgCountAtSectionStart !== void 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Terminates a section.
     *
     * If a section has only one significant children (comments not significant) then we should not
     * keep the message from this children:
     *
     * `<p i18n="meaning|description">{ICU message}</p>` would produce two messages:
     * - one for the <p> content with meaning and description,
     * - another one for the ICU message.
     *
     * In this case the last message is discarded as it contains less information (the AST is
     * otherwise identical).
     *
     * Note that we should still keep messages extracted from attributes inside the section (ie in the
     * ICU message here)
     * @param {?} node
     * @param {?} directChildren
     * @return {?}
     */
    Visitor$$1.prototype._closeTranslatableSection = /**
     * Terminates a section.
     *
     * If a section has only one significant children (comments not significant) then we should not
     * keep the message from this children:
     *
     * `<p i18n="meaning|description">{ICU message}</p>` would produce two messages:
     * - one for the <p> content with meaning and description,
     * - another one for the ICU message.
     *
     * In this case the last message is discarded as it contains less information (the AST is
     * otherwise identical).
     *
     * Note that we should still keep messages extracted from attributes inside the section (ie in the
     * ICU message here)
     * @param {?} node
     * @param {?} directChildren
     * @return {?}
     */
    function (node, directChildren) {
        if (!this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section end");
            return;
        }
        var /** @type {?} */ startIndex = this.msgCountAtSectionStart;
        var /** @type {?} */ significantChildren = directChildren.reduce(function (count, n) { return count + (n instanceof Comment ? 0 : 1); }, 0);
        if (significantChildren === 1) {
            for (var /** @type {?} */ i = this.messages.length - 1; i >= /** @type {?} */ ((startIndex)); i--) {
                var /** @type {?} */ ast = this.messages[i].nodes;
                if (!(ast.length === 1 && ast[0] instanceof Text$1)) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        }
        this.msgCountAtSectionStart = undefined;
    };
    /**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */
    Visitor$$1.prototype._reportError = /**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */
    function (node, msg) {
        this.errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), msg));
    };
    return Visitor$$1;
}());
/**
 * @param {?} p
 * @return {?}
 */
function getI18nAttr(p) {
    return p.attrs.find(function (attr) { return attr.name === _I18N_ATTR; }) || null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MISSING_TRANSLATION_STRATEGY = new InjectionToken("MissingTranslationStrategy");
/**
 * A speculative polyfill to use i18n code translations
 */
var I18n = /** @class */ (function () {
    function I18n(format, translations, locale, missingTranslationStrategy) {
        if (missingTranslationStrategy === void 0) { missingTranslationStrategy = MissingTranslationStrategy.Warning; }
        var /** @type {?} */ loadFct;
        var /** @type {?} */ digest;
        var /** @type {?} */ createMapper = function (message) { return null; };
        format = (format || "xlf").toLowerCase();
        switch (format) {
            case "xtb":
                loadFct = xtbLoadToI18n;
                digest = xtbDigest;
                createMapper = xtbMapper;
                break;
            case "xliff2":
            case "xlf2":
                loadFct = xliff2LoadToI18n;
                digest = xliff2Digest;
                break;
            case "xliff":
            case "xlf":
                loadFct = xliffLoadToI18n;
                digest = xliffDigest;
                break;
            default:
                throw new Error("Unknown translations format " + format);
        }
        var /** @type {?} */ htmlParser = new HtmlParser();
        var /** @type {?} */ translationsBundle = TranslationBundle.load(translations, "i18n", digest, createMapper, loadFct, missingTranslationStrategy);
        // todo use interpolation config
        return function (def, params) {
            if (params === void 0) { params = {}; }
            var /** @type {?} */ content = typeof def === "string" ? def : def.value;
            var /** @type {?} */ metadata = {};
            if (typeof def === "object") {
                metadata["id"] = def.id;
                metadata["meaning"] = def.meaning;
                metadata["description"] = def.description;
            }
            var /** @type {?} */ htmlParserResult = htmlParser.parse(content, "", true);
            if (htmlParserResult.errors.length) {
                throw htmlParserResult.errors;
            }
            var /** @type {?} */ mergedNodes = htmlParser.mergeTranslations(htmlParserResult.rootNodes, translationsBundle, params, metadata, ["wrapper"]);
            return serializeNodes(mergedNodes.rootNodes, locale, params).join("");
        };
    }
    I18n.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    I18n.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS_FORMAT,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
        { type: MissingTranslationStrategy, decorators: [{ type: Optional }, { type: Inject, args: [MISSING_TRANSLATION_STRATEGY,] },] },
    ]; };
    return I18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { I18n, MISSING_TRANSLATION_STRATEGY };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1pMThuLXBvbHlmaWxsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaTE4bl9hc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htbF9oZWxwZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9wYXJzZV91dGlsLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWcudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9jaGFycy50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3RhZ3MudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9sZXhlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3BhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3htbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaHRtbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9kaWdlc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3hsaWZmLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy94bGlmZjIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htYi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvc2VyaWFsaXplcnMveHRiLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvbGV4ZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3BhcnNlci9wYXJzZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvaTE4bi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvcGFyc2VyL2h0bWwudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2kxOG4tcG9seWZpbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzd2l0Y2hWYWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiBFeHBhbnNpb25DYXNlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwYW5zaW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25DYXNlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBOb2RlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgdmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIGV4cFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhblxuICApIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbkNhc2UodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3BhblxuICApIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyaWJ1dGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgYXR0cnM6IEF0dHJpYnV0ZVtdLFxuICAgIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHN0YXJ0U291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG4gICAgcHVibGljIGVuZFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiB8IG51bGwgPSBudWxsXG4gICkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29tbWVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2l0b3Ige1xuICAvLyBSZXR1cm5pbmcgYSB0cnV0aHkgdmFsdWUgZnJvbSBgdmlzaXQoKWAgd2lsbCBwcmV2ZW50IGB2aXNpdEFsbCgpYCBmcm9tIHRoZSBjYWxsIHRvIHRoZSB0eXBlZFxuICAvLyBtZXRob2QgYW5kIHJlc3VsdCByZXR1cm5lZCB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IGluY2x1ZGVkIGluIGB2aXNpdEFsbCgpYHMgcmVzdWx0IGFycmF5LlxuICB2aXNpdD8obm9kZTogTm9kZSwgY29udGV4dDogYW55KTogYW55O1xuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBDb21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBFeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEFsbCh2aXNpdG9yOiBWaXNpdG9yLCBub2RlczogTm9kZVtdLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG5cbiAgY29uc3QgdmlzaXQgPSB2aXNpdG9yLnZpc2l0XG4gICAgPyAoYXN0OiBOb2RlKSA9PiB2aXNpdG9yLnZpc2l0IShhc3QsIGNvbnRleHQpIHx8IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KVxuICAgIDogKGFzdDogTm9kZSkgPT4gYXN0LnZpc2l0KHZpc2l0b3IsIGNvbnRleHQpO1xuICBub2Rlcy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgY29uc3QgYXN0UmVzdWx0ID0gdmlzaXQoYXN0KTtcbiAgICBpZiAoYXN0UmVzdWx0KSB7XG4gICAgICByZXN1bHQucHVzaChhc3RSZXN1bHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZV91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgc291cmNlczogTWVzc2FnZVNwYW5bXTtcblxuICAvKipcbiAgICogQHBhcmFtIHNvdXJjZSBtZXNzYWdlIEFTVFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXJzIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gc3RhdGljIGNvbnRlbnRcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVyVG9NZXNzYWdlIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gbWVzc2FnZXMgKHVzZWQgZm9yIG5lc3RlZCBJQ1UgbWVzc2FnZXMpXG4gICAqIEBwYXJhbSBtZWFuaW5nXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBub2RlczogTm9kZVtdLFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlcnM6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlclRvTWVzc2FnZToge1twaE5hbWU6IHN0cmluZ106IE1lc3NhZ2V9LFxuICAgIHB1YmxpYyBtZWFuaW5nOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGlkOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgZmlsZVBhdGg6IG5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmwsXG4gICAgICAgICAgc3RhcnRMaW5lOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmxpbmUgKyAxLFxuICAgICAgICAgIHN0YXJ0Q29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDEsXG4gICAgICAgICAgZW5kTGluZTogbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uc291cmNlU3Bhbi5lbmQubGluZSArIDEsXG4gICAgICAgICAgZW5kQ29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDFcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW107XG4gICAgfVxuICB9XG59XG5cbi8vIGxpbmUgYW5kIGNvbHVtbnMgaW5kZXhlcyBhcmUgMSBiYXNlZFxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU3BhbiB7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIHN0YXJ0TGluZTogbnVtYmVyO1xuICBzdGFydENvbDogbnVtYmVyO1xuICBlbmRMaW5lOiBudW1iZXI7XG4gIGVuZENvbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vLyBUT0RPKHZpY2IpOiBkbyB3ZSByZWFsbHkgbmVlZCB0aGlzIG5vZGUgKHZzIGFuIGFycmF5KSA/XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29udGFpbmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJY3UgaW1wbGVtZW50cyBOb2RlIHtcbiAgcHVibGljIGV4cHJlc3Npb25QbGFjZWhvbGRlcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9LFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmcsXG4gICAgcHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sXG4gICAgcHVibGljIHN0YXJ0TmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjbG9zZU5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgaXNWb2lkOiBib29sZWFuLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnUGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljdVBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogSWN1LCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuLy8gQ2xvbmUgdGhlIEFTVFxuZXhwb3J0IGNsYXNzIENsb25lVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IFRleHQge1xuICAgIHJldHVybiBuZXcgVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBDb250YWluZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyKGNoaWxkcmVuLCBjb250YWluZXIuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IEljdSB7XG4gICAgY29uc3QgY2FzZXM6IHtbazogc3RyaW5nXTogTm9kZX0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goa2V5ID0+IChjYXNlc1trZXldID0gaWN1LmNhc2VzW2tleV0udmlzaXQodGhpcywgY29udGV4dCkpKTtcbiAgICBjb25zdCBtc2cgPSBuZXcgSWN1KGljdS5leHByZXNzaW9uLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBtc2cuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gaWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBUYWdQbGFjZWhvbGRlciB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IFRhZ1BsYWNlaG9sZGVyKHBoLnRhZywgcGguYXR0cnMsIHBoLnN0YXJ0TmFtZSwgcGguY2xvc2VOYW1lLCBjaGlsZHJlbiwgcGguaXNWb2lkLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgUGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBJY3VQbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBJY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgcGgubmFtZSwgcGguc291cmNlU3Bhbik7XG4gIH1cbn1cblxuLy8gVmlzaXQgYWxsIHRoZSBub2RlcyByZWN1cnNpdmVseVxuZXhwb3J0IGNsYXNzIFJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goayA9PiB7XG4gICAgICBpY3UuY2FzZXNba10udmlzaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcGguY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpc2l0b3Ige1xuICB2aXNpdFRhZyh0YWc6IFRhZyk6IGFueTtcbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogYW55O1xuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IERlY2xhcmF0aW9uKTogYW55O1xuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogRG9jdHlwZSk6IGFueTtcbn1cblxuY2xhc3MgVmlzaXRvciBpbXBsZW1lbnRzIElWaXNpdG9yIHtcbiAgdmlzaXRUYWcodGFnOiBUYWcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ckF0dHJzID0gdGhpcy5fc2VyaWFsaXplQXR0cmlidXRlcyh0YWcuYXR0cnMpO1xuICAgIGlmICh0YWcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYDwke3RhZy5uYW1lfSR7c3RyQXR0cnN9Lz5gO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ckNoaWxkcmVuID0gdGFnLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIHJldHVybiBgPCR7dGFnLm5hbWV9JHtzdHJBdHRyc30+JHtzdHJDaGlsZHJlbi5qb2luKFwiXCIpfTwvJHt0YWcubmFtZX0+YDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gX2VzY2FwZVhtbCh0ZXh0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBlbGVtZW50LmF0dHJzLmZvckVhY2goKGF0dHI6IG1sLkF0dHJpYnV0ZSkgPT4ge1xuICAgICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgdGFnID0gbmV3IFRhZyhlbGVtZW50Lm5hbWUsIGF0dHJzLCBlbGVtZW50LmNoaWxkcmVuIGFzIGFueSk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRUYWcodGFnKTtcbiAgfVxuXG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogRGVjbGFyYXRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBgPD94bWwke3RoaXMuX3NlcmlhbGl6ZUF0dHJpYnV0ZXMoZGVjbC5hdHRycyl9ID8+YDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlcmlhbGl6ZUF0dHJpYnV0ZXMoYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge1xuICAgIGNvbnN0IHN0ckF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpXG4gICAgICAubWFwKChuYW1lOiBzdHJpbmcpID0+IGAke25hbWV9PVwiJHtfZXNjYXBlWG1sKGF0dHJzW25hbWVdKX1cImApXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgcmV0dXJuIHN0ckF0dHJzLmxlbmd0aCA+IDAgPyBcIiBcIiArIHN0ckF0dHJzIDogXCJcIjtcbiAgfVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiBEb2N0eXBlKTogYW55IHtcbiAgICByZXR1cm4gYDwhRE9DVFlQRSAke2RvY3R5cGUucm9vdFRhZ30gW1xcbiR7ZG9jdHlwZS5kdGR9XFxuXT5gO1xuICB9XG59XG5cbmNvbnN0IF92aXNpdG9yID0gbmV3IFZpc2l0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShub2RlczogTm9kZVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5vZGVzLm1hcCgobm9kZTogTm9kZSk6IHN0cmluZyA9PiBub2RlLnZpc2l0KF92aXNpdG9yKSkuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEZWNsYXJhdGlvbiBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXREZWNsYXJhdGlvbih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdHlwZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm9vdFRhZzogc3RyaW5nLCBwdWJsaWMgZHRkOiBzdHJpbmcpIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RG9jdHlwZSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFnIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge30sIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdID0gW10pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENSIGV4dGVuZHMgVGV4dCB7XG4gIGNvbnN0cnVjdG9yKHdzID0gMCkge1xuICAgIHN1cGVyKGBcXG4ke25ldyBBcnJheSh3cyArIDEpLmpvaW4oXCIgXCIpfWApO1xuICB9XG59XG5cbmNvbnN0IF9FU0NBUEVEX0NIQVJTOiBbUmVnRXhwLCBzdHJpbmddW10gPSBbXG4gIFsvJi9nLCBcIiZhbXA7XCJdLFxuICBbL1wiL2csIFwiJnF1b3Q7XCJdLFxuICBbLycvZywgXCImYXBvcztcIl0sXG4gIFsvPC9nLCBcIiZsdDtcIl0sXG4gIFsvPi9nLCBcIiZndDtcIl1cbl07XG5cbmZ1bmN0aW9uIF9lc2NhcGVYbWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIF9FU0NBUEVEX0NIQVJTLnJlZHVjZSgoc3RyOiBzdHJpbmcsIGVudHJ5OiBbUmVnRXhwLCBzdHJpbmddKSA9PiBzdHIucmVwbGFjZShlbnRyeVswXSwgZW50cnlbMV0pLCB0ZXh0KTtcbn1cbiIsImltcG9ydCB7STE4bkRlZn0gZnJvbSBcIi4uL2kxOG4tcG9seWZpbGxcIjtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY2xhc3MgUGFyc2VMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWxlOiBQYXJzZVNvdXJjZUZpbGUsIHB1YmxpYyBvZmZzZXQ6IG51bWJlciwgcHVibGljIGxpbmU6IG51bWJlciwgcHVibGljIGNvbDogbnVtYmVyKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ICE9IG51bGwgPyBgJHt0aGlzLmxpbmV9OiR7dGhpcy5jb2x9YCA6IFwiXCI7XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHNvdXJjZSBhcm91bmQgdGhlIGxvY2F0aW9uXG4gIC8vIFVwIHRvIGBtYXhDaGFyc2Agb3IgYG1heExpbmVzYCBvbiBlYWNoIHNpZGUgb2YgdGhlIGxvY2F0aW9uXG4gIGdldENvbnRleHQobWF4Q2hhcnM6IG51bWJlciwgbWF4TGluZXM6IG51bWJlcik6IHtiZWZvcmU6IHN0cmluZzsgYWZ0ZXI6IHN0cmluZ30gfCBudWxsIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5maWxlLmNvbnRlbnQ7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoc3RhcnRPZmZzZXQgIT0gbnVsbCkge1xuICAgICAgaWYgKHN0YXJ0T2Zmc2V0ID4gY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXJ0T2Zmc2V0ID0gY29udGVudC5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgbGV0IGVuZE9mZnNldCA9IHN0YXJ0T2Zmc2V0O1xuICAgICAgbGV0IGN0eENoYXJzID0gMDtcbiAgICAgIGxldCBjdHhMaW5lcyA9IDA7XG5cbiAgICAgIHdoaWxlIChjdHhDaGFycyA8IG1heENoYXJzICYmIHN0YXJ0T2Zmc2V0ID4gMCkge1xuICAgICAgICBzdGFydE9mZnNldC0tO1xuICAgICAgICBjdHhDaGFycysrO1xuICAgICAgICBpZiAoY29udGVudFtzdGFydE9mZnNldF0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICBpZiAoKytjdHhMaW5lcyA9PT0gbWF4TGluZXMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdHhDaGFycyA9IDA7XG4gICAgICBjdHhMaW5lcyA9IDA7XG4gICAgICB3aGlsZSAoY3R4Q2hhcnMgPCBtYXhDaGFycyAmJiBlbmRPZmZzZXQgPCBjb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZW5kT2Zmc2V0Kys7XG4gICAgICAgIGN0eENoYXJzKys7XG4gICAgICAgIGlmIChjb250ZW50W2VuZE9mZnNldF0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICBpZiAoKytjdHhMaW5lcyA9PT0gbWF4TGluZXMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBiZWZvcmU6IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0LCB0aGlzLm9mZnNldCksXG4gICAgICAgIGFmdGVyOiBjb250ZW50LnN1YnN0cmluZyh0aGlzLm9mZnNldCwgZW5kT2Zmc2V0ICsgMSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyB1cmwgPSBcIlwiKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTb3VyY2VTcGFuIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBQYXJzZUxvY2F0aW9uLCBwdWJsaWMgZW5kOiBQYXJzZUxvY2F0aW9uLCBwdWJsaWMgZGV0YWlsczogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydC5maWxlLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQub2Zmc2V0LCB0aGlzLmVuZC5vZmZzZXQpO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFBhcnNlRXJyb3JMZXZlbCB7XG4gIFdBUk5JTkcsXG4gIEVSUk9SXG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZUVycm9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgbXNnOiBzdHJpbmcsXG4gICAgcHVibGljIGxldmVsOiBQYXJzZUVycm9yTGV2ZWwgPSBQYXJzZUVycm9yTGV2ZWwuRVJST1JcbiAgKSB7fVxuXG4gIGNvbnRleHR1YWxNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5zcGFuLnN0YXJ0LmdldENvbnRleHQoMTAwLCAzKTtcbiAgICByZXR1cm4gY3R4ID8gYCAoXCIke2N0eC5iZWZvcmV9WyR7UGFyc2VFcnJvckxldmVsW3RoaXMubGV2ZWxdfSAtPl0ke2N0eC5hZnRlcn1cIilgIDogXCJcIjtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuc3Bhbi5kZXRhaWxzID8gYCwgJHt0aGlzLnNwYW4uZGV0YWlsc31gIDogXCJcIjtcbiAgICByZXR1cm4gYCR7dGhpcy5tc2d9JHt0aGlzLmNvbnRleHR1YWxNZXNzYWdlKCl9OiAke3RoaXMuc3Bhbi5zdGFydH0ke2RldGFpbHN9YDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGkxOG4gZXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBJMThuRXJyb3IgZXh0ZW5kcyBQYXJzZUVycm9yIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIEludGVycG9sYXRpb25Db25maWcge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhcnQ6IHN0cmluZywgcHVibGljIGVuZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IG5ldyBJbnRlcnBvbGF0aW9uQ29uZmlnKFwie3tcIiwgXCJ9fVwiKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNvbnN0ICRFT0YgPSAwO1xuZXhwb3J0IGNvbnN0ICRUQUIgPSA5O1xuZXhwb3J0IGNvbnN0ICRMRiA9IDEwO1xuZXhwb3J0IGNvbnN0ICRWVEFCID0gMTE7XG5leHBvcnQgY29uc3QgJEZGID0gMTI7XG5leHBvcnQgY29uc3QgJENSID0gMTM7XG5leHBvcnQgY29uc3QgJFNQQUNFID0gMzI7XG5leHBvcnQgY29uc3QgJEJBTkcgPSAzMztcbmV4cG9ydCBjb25zdCAkRFEgPSAzNDtcbmV4cG9ydCBjb25zdCAkSEFTSCA9IDM1O1xuZXhwb3J0IGNvbnN0ICQkID0gMzY7XG5leHBvcnQgY29uc3QgJFBFUkNFTlQgPSAzNztcbmV4cG9ydCBjb25zdCAkQU1QRVJTQU5EID0gMzg7XG5leHBvcnQgY29uc3QgJFNRID0gMzk7XG5leHBvcnQgY29uc3QgJExQQVJFTiA9IDQwO1xuZXhwb3J0IGNvbnN0ICRSUEFSRU4gPSA0MTtcbmV4cG9ydCBjb25zdCAkU1RBUiA9IDQyO1xuZXhwb3J0IGNvbnN0ICRQTFVTID0gNDM7XG5leHBvcnQgY29uc3QgJENPTU1BID0gNDQ7XG5leHBvcnQgY29uc3QgJE1JTlVTID0gNDU7XG5leHBvcnQgY29uc3QgJFBFUklPRCA9IDQ2O1xuZXhwb3J0IGNvbnN0ICRTTEFTSCA9IDQ3O1xuZXhwb3J0IGNvbnN0ICRDT0xPTiA9IDU4O1xuZXhwb3J0IGNvbnN0ICRTRU1JQ09MT04gPSA1OTtcbmV4cG9ydCBjb25zdCAkTFQgPSA2MDtcbmV4cG9ydCBjb25zdCAkRVEgPSA2MTtcbmV4cG9ydCBjb25zdCAkR1QgPSA2MjtcbmV4cG9ydCBjb25zdCAkUVVFU1RJT04gPSA2MztcblxuZXhwb3J0IGNvbnN0ICQwID0gNDg7XG5leHBvcnQgY29uc3QgJDkgPSA1NztcblxuZXhwb3J0IGNvbnN0ICRBID0gNjU7XG5leHBvcnQgY29uc3QgJEUgPSA2OTtcbmV4cG9ydCBjb25zdCAkRiA9IDcwO1xuZXhwb3J0IGNvbnN0ICRYID0gODg7XG5leHBvcnQgY29uc3QgJFogPSA5MDtcblxuZXhwb3J0IGNvbnN0ICRMQlJBQ0tFVCA9IDkxO1xuZXhwb3J0IGNvbnN0ICRCQUNLU0xBU0ggPSA5MjtcbmV4cG9ydCBjb25zdCAkUkJSQUNLRVQgPSA5MztcbmV4cG9ydCBjb25zdCAkQ0FSRVQgPSA5NDtcbmV4cG9ydCBjb25zdCAkXyA9IDk1O1xuXG5leHBvcnQgY29uc3QgJGEgPSA5NztcbmV4cG9ydCBjb25zdCAkZSA9IDEwMTtcbmV4cG9ydCBjb25zdCAkZiA9IDEwMjtcbmV4cG9ydCBjb25zdCAkbiA9IDExMDtcbmV4cG9ydCBjb25zdCAkciA9IDExNDtcbmV4cG9ydCBjb25zdCAkdCA9IDExNjtcbmV4cG9ydCBjb25zdCAkdSA9IDExNztcbmV4cG9ydCBjb25zdCAkdiA9IDExODtcbmV4cG9ydCBjb25zdCAkeCA9IDEyMDtcbmV4cG9ydCBjb25zdCAkeiA9IDEyMjtcblxuZXhwb3J0IGNvbnN0ICRMQlJBQ0UgPSAxMjM7XG5leHBvcnQgY29uc3QgJEJBUiA9IDEyNDtcbmV4cG9ydCBjb25zdCAkUkJSQUNFID0gMTI1O1xuZXhwb3J0IGNvbnN0ICROQlNQID0gMTYwO1xuXG5leHBvcnQgY29uc3QgJFBJUEUgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFRJTERBID0gMTI2O1xuZXhwb3J0IGNvbnN0ICRBVCA9IDY0O1xuXG5leHBvcnQgY29uc3QgJEJUID0gOTY7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkVEFCICYmIGNvZGUgPD0gJFNQQUNFKSB8fCBjb2RlID09PSAkTkJTUDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlnaXQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAkMCA8PSBjb2RlICYmIGNvZGUgPD0gJDk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzY2lpTGV0dGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkeikgfHwgKGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkWik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzY2lpSGV4RGlnaXQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkYSAmJiBjb2RlIDw9ICRmKSB8fCAoY29kZSA+PSAkQSAmJiBjb2RlIDw9ICRGKSB8fCBpc0RpZ2l0KGNvZGUpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZW51bSBUYWdDb250ZW50VHlwZSB7XG4gIFJBV19URVhULFxuICBFU0NBUEFCTEVfUkFXX1RFWFQsXG4gIFBBUlNBQkxFX0RBVEFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdEZWZpbml0aW9uIHtcbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW47XG4gIHJlcXVpcmVkUGFyZW50czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59O1xuICBwYXJlbnRUb0FkZDogc3RyaW5nO1xuICBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogc3RyaW5nIHwgbnVsbDtcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbjtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbjtcblxuICBpc0Nsb3NlZEJ5Q2hpbGQobmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0TnNOYW1lKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBbc3RyaW5nIHwgbnVsbCwgc3RyaW5nXSB7XG4gIGlmIChlbGVtZW50TmFtZVswXSAhPT0gXCI6XCIpIHtcbiAgICByZXR1cm4gW251bGwsIGVsZW1lbnROYW1lXTtcbiAgfVxuXG4gIGNvbnN0IGNvbG9uSW5kZXggPSBlbGVtZW50TmFtZS5pbmRleE9mKFwiOlwiLCAxKTtcblxuICBpZiAoY29sb25JbmRleCA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGZvcm1hdCBcIiR7ZWxlbWVudE5hbWV9XCIgZXhwZWN0aW5nIFwiOm5hbWVzcGFjZTpuYW1lXCJgKTtcbiAgfVxuXG4gIHJldHVybiBbZWxlbWVudE5hbWUuc2xpY2UoMSwgY29sb25JbmRleCksIGVsZW1lbnROYW1lLnNsaWNlKGNvbG9uSW5kZXggKyAxKV07XG59XG5cbi8vIGA8bmctY29udGFpbmVyPmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdDb250YWluZXIodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gXCJuZy1jb250YWluZXJcIjtcbn1cblxuLy8gYDxuZy1jb250ZW50PmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdDb250ZW50KHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09IFwibmctY29udGVudFwiO1xufVxuXG4vLyBgPG5nLXRlbXBsYXRlPmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdUZW1wbGF0ZSh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSBcIm5nLXRlbXBsYXRlXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5zUHJlZml4KGZ1bGxOYW1lOiBudWxsKTogbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICByZXR1cm4gZnVsbE5hbWUgPT09IG51bGwgPyBudWxsIDogc3BsaXROc05hbWUoZnVsbE5hbWUpWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VOc0FuZE5hbWUocHJlZml4OiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByZWZpeCA/IGA6JHtwcmVmaXh9OiR7bG9jYWxOYW1lfWAgOiBsb2NhbE5hbWU7XG59XG5cbi8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvc3ludGF4Lmh0bWwjbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZXNcbi8vIHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbnRpdGllcy5qc29uXG4vLyBUaGlzIGxpc3QgaXMgbm90IGV4aGF1c3RpdmUgdG8ga2VlcCB0aGUgY29tcGlsZXIgZm9vdHByaW50IGxvdy5cbi8vIFRoZSBgJiMxMjM7YCAvIGAmI3gxYWI7YCBzeW50YXggc2hvdWxkIGJlIHVzZWQgd2hlbiB0aGUgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZSBkb2VzIG5vdFxuLy8gZXhpc3QuXG5cbmV4cG9ydCBjb25zdCBOQU1FRF9FTlRJVElFUzoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICBBYWN1dGU6IFwiXFx1MDBDMVwiLFxuICBhYWN1dGU6IFwiXFx1MDBFMVwiLFxuICBBY2lyYzogXCJcXHUwMEMyXCIsXG4gIGFjaXJjOiBcIlxcdTAwRTJcIixcbiAgYWN1dGU6IFwiXFx1MDBCNFwiLFxuICBBRWxpZzogXCJcXHUwMEM2XCIsXG4gIGFlbGlnOiBcIlxcdTAwRTZcIixcbiAgQWdyYXZlOiBcIlxcdTAwQzBcIixcbiAgYWdyYXZlOiBcIlxcdTAwRTBcIixcbiAgYWxlZnN5bTogXCJcXHUyMTM1XCIsXG4gIEFscGhhOiBcIlxcdTAzOTFcIixcbiAgYWxwaGE6IFwiXFx1MDNCMVwiLFxuICBhbXA6IFwiJlwiLFxuICBhbmQ6IFwiXFx1MjIyN1wiLFxuICBhbmc6IFwiXFx1MjIyMFwiLFxuICBhcG9zOiBcIlxcdTAwMjdcIixcbiAgQXJpbmc6IFwiXFx1MDBDNVwiLFxuICBhcmluZzogXCJcXHUwMEU1XCIsXG4gIGFzeW1wOiBcIlxcdTIyNDhcIixcbiAgQXRpbGRlOiBcIlxcdTAwQzNcIixcbiAgYXRpbGRlOiBcIlxcdTAwRTNcIixcbiAgQXVtbDogXCJcXHUwMEM0XCIsXG4gIGF1bWw6IFwiXFx1MDBFNFwiLFxuICBiZHF1bzogXCJcXHUyMDFFXCIsXG4gIEJldGE6IFwiXFx1MDM5MlwiLFxuICBiZXRhOiBcIlxcdTAzQjJcIixcbiAgYnJ2YmFyOiBcIlxcdTAwQTZcIixcbiAgYnVsbDogXCJcXHUyMDIyXCIsXG4gIGNhcDogXCJcXHUyMjI5XCIsXG4gIENjZWRpbDogXCJcXHUwMEM3XCIsXG4gIGNjZWRpbDogXCJcXHUwMEU3XCIsXG4gIGNlZGlsOiBcIlxcdTAwQjhcIixcbiAgY2VudDogXCJcXHUwMEEyXCIsXG4gIENoaTogXCJcXHUwM0E3XCIsXG4gIGNoaTogXCJcXHUwM0M3XCIsXG4gIGNpcmM6IFwiXFx1MDJDNlwiLFxuICBjbHViczogXCJcXHUyNjYzXCIsXG4gIGNvbmc6IFwiXFx1MjI0NVwiLFxuICBjb3B5OiBcIlxcdTAwQTlcIixcbiAgY3JhcnI6IFwiXFx1MjFCNVwiLFxuICBjdXA6IFwiXFx1MjIyQVwiLFxuICBjdXJyZW46IFwiXFx1MDBBNFwiLFxuICBkYWdnZXI6IFwiXFx1MjAyMFwiLFxuICBEYWdnZXI6IFwiXFx1MjAyMVwiLFxuICBkYXJyOiBcIlxcdTIxOTNcIixcbiAgZEFycjogXCJcXHUyMUQzXCIsXG4gIGRlZzogXCJcXHUwMEIwXCIsXG4gIERlbHRhOiBcIlxcdTAzOTRcIixcbiAgZGVsdGE6IFwiXFx1MDNCNFwiLFxuICBkaWFtczogXCJcXHUyNjY2XCIsXG4gIGRpdmlkZTogXCJcXHUwMEY3XCIsXG4gIEVhY3V0ZTogXCJcXHUwMEM5XCIsXG4gIGVhY3V0ZTogXCJcXHUwMEU5XCIsXG4gIEVjaXJjOiBcIlxcdTAwQ0FcIixcbiAgZWNpcmM6IFwiXFx1MDBFQVwiLFxuICBFZ3JhdmU6IFwiXFx1MDBDOFwiLFxuICBlZ3JhdmU6IFwiXFx1MDBFOFwiLFxuICBlbXB0eTogXCJcXHUyMjA1XCIsXG4gIGVtc3A6IFwiXFx1MjAwM1wiLFxuICBlbnNwOiBcIlxcdTIwMDJcIixcbiAgRXBzaWxvbjogXCJcXHUwMzk1XCIsXG4gIGVwc2lsb246IFwiXFx1MDNCNVwiLFxuICBlcXVpdjogXCJcXHUyMjYxXCIsXG4gIEV0YTogXCJcXHUwMzk3XCIsXG4gIGV0YTogXCJcXHUwM0I3XCIsXG4gIEVUSDogXCJcXHUwMEQwXCIsXG4gIGV0aDogXCJcXHUwMEYwXCIsXG4gIEV1bWw6IFwiXFx1MDBDQlwiLFxuICBldW1sOiBcIlxcdTAwRUJcIixcbiAgZXVybzogXCJcXHUyMEFDXCIsXG4gIGV4aXN0OiBcIlxcdTIyMDNcIixcbiAgZm5vZjogXCJcXHUwMTkyXCIsXG4gIGZvcmFsbDogXCJcXHUyMjAwXCIsXG4gIGZyYWMxMjogXCJcXHUwMEJEXCIsXG4gIGZyYWMxNDogXCJcXHUwMEJDXCIsXG4gIGZyYWMzNDogXCJcXHUwMEJFXCIsXG4gIGZyYXNsOiBcIlxcdTIwNDRcIixcbiAgR2FtbWE6IFwiXFx1MDM5M1wiLFxuICBnYW1tYTogXCJcXHUwM0IzXCIsXG4gIGdlOiBcIlxcdTIyNjVcIixcbiAgZ3Q6IFwiPlwiLFxuICBoYXJyOiBcIlxcdTIxOTRcIixcbiAgaEFycjogXCJcXHUyMUQ0XCIsXG4gIGhlYXJ0czogXCJcXHUyNjY1XCIsXG4gIGhlbGxpcDogXCJcXHUyMDI2XCIsXG4gIElhY3V0ZTogXCJcXHUwMENEXCIsXG4gIGlhY3V0ZTogXCJcXHUwMEVEXCIsXG4gIEljaXJjOiBcIlxcdTAwQ0VcIixcbiAgaWNpcmM6IFwiXFx1MDBFRVwiLFxuICBpZXhjbDogXCJcXHUwMEExXCIsXG4gIElncmF2ZTogXCJcXHUwMENDXCIsXG4gIGlncmF2ZTogXCJcXHUwMEVDXCIsXG4gIGltYWdlOiBcIlxcdTIxMTFcIixcbiAgaW5maW46IFwiXFx1MjIxRVwiLFxuICBpbnQ6IFwiXFx1MjIyQlwiLFxuICBJb3RhOiBcIlxcdTAzOTlcIixcbiAgaW90YTogXCJcXHUwM0I5XCIsXG4gIGlxdWVzdDogXCJcXHUwMEJGXCIsXG4gIGlzaW46IFwiXFx1MjIwOFwiLFxuICBJdW1sOiBcIlxcdTAwQ0ZcIixcbiAgaXVtbDogXCJcXHUwMEVGXCIsXG4gIEthcHBhOiBcIlxcdTAzOUFcIixcbiAga2FwcGE6IFwiXFx1MDNCQVwiLFxuICBMYW1iZGE6IFwiXFx1MDM5QlwiLFxuICBsYW1iZGE6IFwiXFx1MDNCQlwiLFxuICBsYW5nOiBcIlxcdTI3RThcIixcbiAgbGFxdW86IFwiXFx1MDBBQlwiLFxuICBsYXJyOiBcIlxcdTIxOTBcIixcbiAgbEFycjogXCJcXHUyMUQwXCIsXG4gIGxjZWlsOiBcIlxcdTIzMDhcIixcbiAgbGRxdW86IFwiXFx1MjAxQ1wiLFxuICBsZTogXCJcXHUyMjY0XCIsXG4gIGxmbG9vcjogXCJcXHUyMzBBXCIsXG4gIGxvd2FzdDogXCJcXHUyMjE3XCIsXG4gIGxvejogXCJcXHUyNUNBXCIsXG4gIGxybTogXCJcXHUyMDBFXCIsXG4gIGxzYXF1bzogXCJcXHUyMDM5XCIsXG4gIGxzcXVvOiBcIlxcdTIwMThcIixcbiAgbHQ6IFwiPFwiLFxuICBtYWNyOiBcIlxcdTAwQUZcIixcbiAgbWRhc2g6IFwiXFx1MjAxNFwiLFxuICBtaWNybzogXCJcXHUwMEI1XCIsXG4gIG1pZGRvdDogXCJcXHUwMEI3XCIsXG4gIG1pbnVzOiBcIlxcdTIyMTJcIixcbiAgTXU6IFwiXFx1MDM5Q1wiLFxuICBtdTogXCJcXHUwM0JDXCIsXG4gIG5hYmxhOiBcIlxcdTIyMDdcIixcbiAgbmJzcDogXCJcXHUwMEEwXCIsXG4gIG5kYXNoOiBcIlxcdTIwMTNcIixcbiAgbmU6IFwiXFx1MjI2MFwiLFxuICBuaTogXCJcXHUyMjBCXCIsXG4gIG5vdDogXCJcXHUwMEFDXCIsXG4gIG5vdGluOiBcIlxcdTIyMDlcIixcbiAgbnN1YjogXCJcXHUyMjg0XCIsXG4gIE50aWxkZTogXCJcXHUwMEQxXCIsXG4gIG50aWxkZTogXCJcXHUwMEYxXCIsXG4gIE51OiBcIlxcdTAzOURcIixcbiAgbnU6IFwiXFx1MDNCRFwiLFxuICBPYWN1dGU6IFwiXFx1MDBEM1wiLFxuICBvYWN1dGU6IFwiXFx1MDBGM1wiLFxuICBPY2lyYzogXCJcXHUwMEQ0XCIsXG4gIG9jaXJjOiBcIlxcdTAwRjRcIixcbiAgT0VsaWc6IFwiXFx1MDE1MlwiLFxuICBvZWxpZzogXCJcXHUwMTUzXCIsXG4gIE9ncmF2ZTogXCJcXHUwMEQyXCIsXG4gIG9ncmF2ZTogXCJcXHUwMEYyXCIsXG4gIG9saW5lOiBcIlxcdTIwM0VcIixcbiAgT21lZ2E6IFwiXFx1MDNBOVwiLFxuICBvbWVnYTogXCJcXHUwM0M5XCIsXG4gIE9taWNyb246IFwiXFx1MDM5RlwiLFxuICBvbWljcm9uOiBcIlxcdTAzQkZcIixcbiAgb3BsdXM6IFwiXFx1MjI5NVwiLFxuICBvcjogXCJcXHUyMjI4XCIsXG4gIG9yZGY6IFwiXFx1MDBBQVwiLFxuICBvcmRtOiBcIlxcdTAwQkFcIixcbiAgT3NsYXNoOiBcIlxcdTAwRDhcIixcbiAgb3NsYXNoOiBcIlxcdTAwRjhcIixcbiAgT3RpbGRlOiBcIlxcdTAwRDVcIixcbiAgb3RpbGRlOiBcIlxcdTAwRjVcIixcbiAgb3RpbWVzOiBcIlxcdTIyOTdcIixcbiAgT3VtbDogXCJcXHUwMEQ2XCIsXG4gIG91bWw6IFwiXFx1MDBGNlwiLFxuICBwYXJhOiBcIlxcdTAwQjZcIixcbiAgcGVybWlsOiBcIlxcdTIwMzBcIixcbiAgcGVycDogXCJcXHUyMkE1XCIsXG4gIFBoaTogXCJcXHUwM0E2XCIsXG4gIHBoaTogXCJcXHUwM0M2XCIsXG4gIFBpOiBcIlxcdTAzQTBcIixcbiAgcGk6IFwiXFx1MDNDMFwiLFxuICBwaXY6IFwiXFx1MDNENlwiLFxuICBwbHVzbW46IFwiXFx1MDBCMVwiLFxuICBwb3VuZDogXCJcXHUwMEEzXCIsXG4gIHByaW1lOiBcIlxcdTIwMzJcIixcbiAgUHJpbWU6IFwiXFx1MjAzM1wiLFxuICBwcm9kOiBcIlxcdTIyMEZcIixcbiAgcHJvcDogXCJcXHUyMjFEXCIsXG4gIFBzaTogXCJcXHUwM0E4XCIsXG4gIHBzaTogXCJcXHUwM0M4XCIsXG4gIHF1b3Q6IFwiXFx1MDAyMlwiLFxuICByYWRpYzogXCJcXHUyMjFBXCIsXG4gIHJhbmc6IFwiXFx1MjdFOVwiLFxuICByYXF1bzogXCJcXHUwMEJCXCIsXG4gIHJhcnI6IFwiXFx1MjE5MlwiLFxuICByQXJyOiBcIlxcdTIxRDJcIixcbiAgcmNlaWw6IFwiXFx1MjMwOVwiLFxuICByZHF1bzogXCJcXHUyMDFEXCIsXG4gIHJlYWw6IFwiXFx1MjExQ1wiLFxuICByZWc6IFwiXFx1MDBBRVwiLFxuICByZmxvb3I6IFwiXFx1MjMwQlwiLFxuICBSaG86IFwiXFx1MDNBMVwiLFxuICByaG86IFwiXFx1MDNDMVwiLFxuICBybG06IFwiXFx1MjAwRlwiLFxuICByc2FxdW86IFwiXFx1MjAzQVwiLFxuICByc3F1bzogXCJcXHUyMDE5XCIsXG4gIHNicXVvOiBcIlxcdTIwMUFcIixcbiAgU2Nhcm9uOiBcIlxcdTAxNjBcIixcbiAgc2Nhcm9uOiBcIlxcdTAxNjFcIixcbiAgc2RvdDogXCJcXHUyMkM1XCIsXG4gIHNlY3Q6IFwiXFx1MDBBN1wiLFxuICBzaHk6IFwiXFx1MDBBRFwiLFxuICBTaWdtYTogXCJcXHUwM0EzXCIsXG4gIHNpZ21hOiBcIlxcdTAzQzNcIixcbiAgc2lnbWFmOiBcIlxcdTAzQzJcIixcbiAgc2ltOiBcIlxcdTIyM0NcIixcbiAgc3BhZGVzOiBcIlxcdTI2NjBcIixcbiAgc3ViOiBcIlxcdTIyODJcIixcbiAgc3ViZTogXCJcXHUyMjg2XCIsXG4gIHN1bTogXCJcXHUyMjExXCIsXG4gIHN1cDogXCJcXHUyMjgzXCIsXG4gIHN1cDE6IFwiXFx1MDBCOVwiLFxuICBzdXAyOiBcIlxcdTAwQjJcIixcbiAgc3VwMzogXCJcXHUwMEIzXCIsXG4gIHN1cGU6IFwiXFx1MjI4N1wiLFxuICBzemxpZzogXCJcXHUwMERGXCIsXG4gIFRhdTogXCJcXHUwM0E0XCIsXG4gIHRhdTogXCJcXHUwM0M0XCIsXG4gIHRoZXJlNDogXCJcXHUyMjM0XCIsXG4gIFRoZXRhOiBcIlxcdTAzOThcIixcbiAgdGhldGE6IFwiXFx1MDNCOFwiLFxuICB0aGV0YXN5bTogXCJcXHUwM0QxXCIsXG4gIHRoaW5zcDogXCJcXHUyMDA5XCIsXG4gIFRIT1JOOiBcIlxcdTAwREVcIixcbiAgdGhvcm46IFwiXFx1MDBGRVwiLFxuICB0aWxkZTogXCJcXHUwMkRDXCIsXG4gIHRpbWVzOiBcIlxcdTAwRDdcIixcbiAgdHJhZGU6IFwiXFx1MjEyMlwiLFxuICBVYWN1dGU6IFwiXFx1MDBEQVwiLFxuICB1YWN1dGU6IFwiXFx1MDBGQVwiLFxuICB1YXJyOiBcIlxcdTIxOTFcIixcbiAgdUFycjogXCJcXHUyMUQxXCIsXG4gIFVjaXJjOiBcIlxcdTAwREJcIixcbiAgdWNpcmM6IFwiXFx1MDBGQlwiLFxuICBVZ3JhdmU6IFwiXFx1MDBEOVwiLFxuICB1Z3JhdmU6IFwiXFx1MDBGOVwiLFxuICB1bWw6IFwiXFx1MDBBOFwiLFxuICB1cHNpaDogXCJcXHUwM0QyXCIsXG4gIFVwc2lsb246IFwiXFx1MDNBNVwiLFxuICB1cHNpbG9uOiBcIlxcdTAzQzVcIixcbiAgVXVtbDogXCJcXHUwMERDXCIsXG4gIHV1bWw6IFwiXFx1MDBGQ1wiLFxuICB3ZWllcnA6IFwiXFx1MjExOFwiLFxuICBYaTogXCJcXHUwMzlFXCIsXG4gIHhpOiBcIlxcdTAzQkVcIixcbiAgWWFjdXRlOiBcIlxcdTAwRERcIixcbiAgeWFjdXRlOiBcIlxcdTAwRkRcIixcbiAgeWVuOiBcIlxcdTAwQTVcIixcbiAgeXVtbDogXCJcXHUwMEZGXCIsXG4gIFl1bWw6IFwiXFx1MDE3OFwiLFxuICBaZXRhOiBcIlxcdTAzOTZcIixcbiAgemV0YTogXCJcXHUwM0I2XCIsXG4gIHp3ajogXCJcXHUyMDBEXCIsXG4gIHp3bmo6IFwiXFx1MjAwQ1wiXG59O1xuXG4vLyBUaGUgJm5nc3A7IHBzZXVkby1lbnRpdHkgaXMgZGVub3RpbmcgYSBzcGFjZS4gc2VlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhcnQtbGFuZy9hbmd1bGFyL2Jsb2IvMGJiNjExMzg3ZDI5ZDY1YjVhZjdmOWQyNTE1YWI1NzFmZDNmYmVlNC9fdGVzdHMvdGVzdC9jb21waWxlci9wcmVzZXJ2ZV93aGl0ZXNwYWNlX3Rlc3QuZGFydFxuZXhwb3J0IGNvbnN0IE5HU1BfVU5JQ09ERSA9IFwiXFx1RTUwMFwiO1xuXG5OQU1FRF9FTlRJVElFU1tcIm5nc3BcIl0gPSBOR1NQX1VOSUNPREU7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyBjaGFycyBmcm9tIFwiLi9jaGFyc1wiO1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZUxvY2F0aW9uLCBQYXJzZVNvdXJjZUZpbGUsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VfdXRpbFwiO1xuXG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuL2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge05BTUVEX0VOVElUSUVTLCBUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICBUQUdfT1BFTl9TVEFSVCxcbiAgVEFHX09QRU5fRU5ELFxuICBUQUdfT1BFTl9FTkRfVk9JRCxcbiAgVEFHX0NMT1NFLFxuICBURVhULFxuICBFU0NBUEFCTEVfUkFXX1RFWFQsXG4gIFJBV19URVhULFxuICBDT01NRU5UX1NUQVJULFxuICBDT01NRU5UX0VORCxcbiAgQ0RBVEFfU1RBUlQsXG4gIENEQVRBX0VORCxcbiAgQVRUUl9OQU1FLFxuICBBVFRSX1ZBTFVFLFxuICBET0NfVFlQRSxcbiAgRVhQQU5TSU9OX0ZPUk1fU1RBUlQsXG4gIEVYUEFOU0lPTl9DQVNFX1ZBTFVFLFxuICBFWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQsXG4gIEVYUEFOU0lPTl9DQVNFX0VYUF9FTkQsXG4gIEVYUEFOU0lPTl9GT1JNX0VORCxcbiAgRU9GXG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBUb2tlblR5cGUsIHB1YmxpYyBwYXJ0czogc3RyaW5nW10sIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGVycm9yTXNnOiBzdHJpbmcsIHB1YmxpYyB0b2tlblR5cGU6IFRva2VuVHlwZSwgc3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgc3VwZXIoc3BhbiwgZXJyb3JNc2cpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnM6IFRva2VuW10sIHB1YmxpYyBlcnJvcnM6IFRva2VuRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKFxuICBzb3VyY2U6IHN0cmluZyxcbiAgdXJsOiBzdHJpbmcsXG4gIGdldFRhZ0RlZmluaXRpb246ICh0YWdOYW1lOiBzdHJpbmcpID0+IFRhZ0RlZmluaXRpb24sXG4gIHRva2VuaXplRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSxcbiAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbik6IFRva2VuaXplUmVzdWx0IHtcbiAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoXG4gICAgbmV3IFBhcnNlU291cmNlRmlsZShzb3VyY2UsIHVybCksXG4gICAgZ2V0VGFnRGVmaW5pdGlvbixcbiAgICB0b2tlbml6ZUV4cGFuc2lvbkZvcm1zLFxuICAgIGludGVycG9sYXRpb25Db25maWdcbiAgKS50b2tlbml6ZSgpO1xufVxuXG5jb25zdCBfQ1JfT1JfQ1JMRl9SRUdFWFAgPSAvXFxyXFxuPy9nO1xuXG5mdW5jdGlvbiBfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKGNoYXJDb2RlOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBjaGFyID0gY2hhckNvZGUgPT09IGNoYXJzLiRFT0YgPyBcIkVPRlwiIDogU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gIHJldHVybiBgVW5leHBlY3RlZCBjaGFyYWN0ZXIgXCIke2NoYXJ9XCJgO1xufVxuXG5mdW5jdGlvbiBfdW5rbm93bkVudGl0eUVycm9yTXNnKGVudGl0eVNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBVbmtub3duIGVudGl0eSBcIiR7ZW50aXR5U3JjfVwiIC0gdXNlIHRoZSBcIiYjPGRlY2ltYWw+O1wiIG9yICBcIiYjeDxoZXg+O1wiIHN5bnRheGA7XG59XG5cbmNsYXNzIENvbnRyb2xGbG93RXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3I6IFRva2VuRXJyb3IpIHt9XG59XG5cbi8vIFNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvc3ludGF4Lmh0bWwjd3JpdGluZ1xuY2xhc3MgVG9rZW5pemVyIHtcbiAgcHJpdmF0ZSBfaW5wdXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXI7XG4gIC8vIE5vdGU6IHRoaXMgaXMgYWx3YXlzIGxvd2VyY2FzZSFcbiAgcHJpdmF0ZSBfcGVlayA9IC0xO1xuICBwcml2YXRlIF9uZXh0UGVlayA9IC0xO1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIF9saW5lID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uID0gLTE7XG4gIHByaXZhdGUgX2N1cnJlbnRUb2tlblN0YXJ0OiBQYXJzZUxvY2F0aW9uO1xuICBwcml2YXRlIF9jdXJyZW50VG9rZW5UeXBlOiBUb2tlblR5cGU7XG4gIHByaXZhdGUgX2V4cGFuc2lvbkNhc2VTdGFjazogVG9rZW5UeXBlW10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5JbnRlcnBvbGF0aW9uID0gZmFsc2U7XG5cbiAgdG9rZW5zOiBUb2tlbltdID0gW107XG4gIGVycm9yczogVG9rZW5FcnJvcltdID0gW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBfZmlsZSBUaGUgaHRtbCBzb3VyY2VcbiAgICogQHBhcmFtIF9nZXRUYWdEZWZpbml0aW9uXG4gICAqIEBwYXJhbSBfdG9rZW5pemVJY3UgV2hldGhlciB0byB0b2tlbml6ZSBJQ1UgbWVzc2FnZXMgKGNvbnNpZGVyZWQgYXMgdGV4dCBub2RlcyB3aGVuIGZhbHNlKVxuICAgKiBAcGFyYW0gX2ludGVycG9sYXRpb25Db25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpbGU6IFBhcnNlU291cmNlRmlsZSxcbiAgICBwcml2YXRlIF9nZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uLFxuICAgIHByaXZhdGUgX3Rva2VuaXplSWN1OiBib29sZWFuLFxuICAgIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICkge1xuICAgIHRoaXMuX2lucHV0ID0gX2ZpbGUuY29udGVudDtcbiAgICB0aGlzLl9sZW5ndGggPSBfZmlsZS5jb250ZW50Lmxlbmd0aDtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjcHJlcHJvY2Vzc2luZy10aGUtaW5wdXQtc3RyZWFtXG4gICAgLy8gSW4gb3JkZXIgdG8ga2VlcCB0aGUgb3JpZ2luYWwgcG9zaXRpb24gaW4gdGhlIHNvdXJjZSwgd2UgY2FuIG5vdFxuICAgIC8vIHByZS1wcm9jZXNzIGl0LlxuICAgIC8vIEluc3RlYWQgQ1JzIGFyZSBwcm9jZXNzZWQgcmlnaHQgYmVmb3JlIGluc3RhbnRpYXRpbmcgdGhlIHRva2Vucy5cbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKF9DUl9PUl9DUkxGX1JFR0VYUCwgXCJcXG5cIik7XG4gIH1cblxuICB0b2tlbml6ZSgpOiBUb2tlbml6ZVJlc3VsdCB7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRFT0YpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJExUKSkge1xuICAgICAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEJBTkcpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZUNkYXRhKHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRNSU5VUykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZUNvbW1lbnQoc3RhcnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZURvY1R5cGUoc3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRTTEFTSCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVUYWdDbG9zZShzdGFydCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVUYWdPcGVuKHN0YXJ0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISh0aGlzLl90b2tlbml6ZUljdSAmJiB0aGlzLl90b2tlbml6ZUV4cGFuc2lvbkZvcm0oKSkpIHtcbiAgICAgICAgICB0aGlzLl9jb25zdW1lVGV4dCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgQ29udHJvbEZsb3dFcnJvcikge1xuICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FT0YpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgICByZXR1cm4gbmV3IFRva2VuaXplUmVzdWx0KG1lcmdlVGV4dFRva2Vucyh0aGlzLnRva2VucyksIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB3aGV0aGVyIGFuIElDVSB0b2tlbiBoYXMgYmVlbiBjcmVhdGVkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSBfdG9rZW5pemVFeHBhbnNpb25Gb3JtKCk6IGJvb2xlYW4ge1xuICAgIGlmIChpc0V4cGFuc2lvbkZvcm1TdGFydCh0aGlzLl9pbnB1dCwgdGhpcy5faW5kZXgsIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcpKSB7XG4gICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uRm9ybVN0YXJ0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNFeHBhbnNpb25DYXNlU3RhcnQodGhpcy5fcGVlaykgJiYgdGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkNhc2VTdGFydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRSQlJBQ0UpIHtcbiAgICAgIGlmICh0aGlzLl9pc0luRXhwYW5zaW9uQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb25DYXNlRW5kKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uRm9ybUVuZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9nZXRMb2NhdGlvbigpOiBQYXJzZUxvY2F0aW9uIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlTG9jYXRpb24odGhpcy5fZmlsZSwgdGhpcy5faW5kZXgsIHRoaXMuX2xpbmUsIHRoaXMuX2NvbHVtbik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTcGFuKFxuICAgIHN0YXJ0OiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSxcbiAgICBlbmQ6IFBhcnNlTG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpXG4gICk6IFBhcnNlU291cmNlU3BhbiB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQsIGVuZCk7XG4gIH1cblxuICBwcml2YXRlIF9iZWdpblRva2VuKHR5cGU6IFRva2VuVHlwZSwgc3RhcnQ6IFBhcnNlTG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpKSB7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gdHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgX2VuZFRva2VuKHBhcnRzOiBzdHJpbmdbXSwgZW5kOiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSk6IFRva2VuIHtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBUb2tlbih0aGlzLl9jdXJyZW50VG9rZW5UeXBlLCBwYXJ0cywgbmV3IFBhcnNlU291cmNlU3Bhbih0aGlzLl9jdXJyZW50VG9rZW5TdGFydCwgZW5kKSk7XG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBudWxsITtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gbnVsbCE7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRXJyb3IobXNnOiBzdHJpbmcsIHNwYW46IFBhcnNlU291cmNlU3Bhbik6IENvbnRyb2xGbG93RXJyb3Ige1xuICAgIGlmICh0aGlzLl9pc0luRXhwYW5zaW9uRm9ybSgpKSB7XG4gICAgICBtc2cgKz0gYCAoRG8geW91IGhhdmUgYW4gdW5lc2NhcGVkIFwie1wiIGluIHlvdXIgdGVtcGxhdGU/IFVzZSBcInt7ICd7JyB9fVwiKSB0byBlc2NhcGUgaXQuKWA7XG4gICAgfVxuICAgIGNvbnN0IGVycm9yID0gbmV3IFRva2VuRXJyb3IobXNnLCB0aGlzLl9jdXJyZW50VG9rZW5UeXBlLCBzcGFuKTtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5TdGFydCA9IG51bGwhO1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblR5cGUgPSBudWxsITtcbiAgICByZXR1cm4gbmV3IENvbnRyb2xGbG93RXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWR2YW5jZSgpIHtcbiAgICBpZiAodGhpcy5faW5kZXggPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKGNoYXJzLiRFT0YpLCB0aGlzLl9nZXRTcGFuKCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJExGKSB7XG4gICAgICB0aGlzLl9saW5lKys7XG4gICAgICB0aGlzLl9jb2x1bW4gPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlayAhPT0gY2hhcnMuJExGICYmIHRoaXMuX3BlZWsgIT09IGNoYXJzLiRDUikge1xuICAgICAgdGhpcy5fY29sdW1uKys7XG4gICAgfVxuICAgIHRoaXMuX2luZGV4Kys7XG4gICAgdGhpcy5fcGVlayA9IHRoaXMuX2luZGV4ID49IHRoaXMuX2xlbmd0aCA/IGNoYXJzLiRFT0YgOiB0aGlzLl9pbnB1dC5jaGFyQ29kZUF0KHRoaXMuX2luZGV4KTtcbiAgICB0aGlzLl9uZXh0UGVlayA9IHRoaXMuX2luZGV4ICsgMSA+PSB0aGlzLl9sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5faW5wdXQuY2hhckNvZGVBdCh0aGlzLl9pbmRleCArIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdENoYXJDb2RlKGNoYXJDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhckNvZGUpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0Q2hhckNvZGVDYXNlSW5zZW5zaXRpdmUoY2hhckNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChjb21wYXJlQ2hhckNvZGVDYXNlSW5zZW5zaXRpdmUodGhpcy5fcGVlaywgY2hhckNvZGUpKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZUNoYXJDb2RlKGNoYXJDb2RlOiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhckNvZGUpKSB7XG4gICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKHRoaXMuX3BlZWspLCB0aGlzLl9nZXRTcGFuKGxvY2F0aW9uLCBsb2NhdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRTdHIoY2hhcnM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxlbiA9IGNoYXJzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5faW5kZXggKyBsZW4gPiB0aGlzLl9sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCF0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgLy8gSWYgYXR0ZW1wdGluZyB0byBwYXJzZSB0aGUgc3RyaW5nIGZhaWxzLCB3ZSB3YW50IHRvIHJlc2V0IHRoZSBwYXJzZXJcbiAgICAgICAgLy8gdG8gd2hlcmUgaXQgd2FzIGJlZm9yZSB0aGUgYXR0ZW1wdFxuICAgICAgICB0aGlzLl9yZXN0b3JlUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRTdHJDYXNlSW5zZW5zaXRpdmUoY2hhcnM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNoYXJzLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9yZXF1aXJlU3RyKGNoYXJzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9hdHRlbXB0U3RyKGNoYXJzKSkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3Bhbihsb2NhdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4ocHJlZGljYXRlOiAoY29kZTogbnVtYmVyKSA9PiBib29sZWFuKSB7XG4gICAgd2hpbGUgKCFwcmVkaWNhdGUodGhpcy5fcGVlaykpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXF1aXJlQ2hhckNvZGVVbnRpbEZuKHByZWRpY2F0ZTogKGNvZGU6IG51bWJlcikgPT4gYm9vbGVhbiwgbGVuOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihwcmVkaWNhdGUpO1xuICAgIGlmICh0aGlzLl9pbmRleCAtIHN0YXJ0Lm9mZnNldCA8IGxlbikge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbihzdGFydCwgc3RhcnQpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0VW50aWxDaGFyKGNoYXI6IG51bWJlcikge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFyKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVhZENoYXIoZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChkZWNvZGVFbnRpdGllcyAmJiB0aGlzLl9wZWVrID09PSBjaGFycy4kQU1QRVJTQU5EKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb2RlRW50aXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faW5kZXg7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlY29kZUVudGl0eSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kSEFTSCkpIHtcbiAgICAgIGNvbnN0IGlzSGV4ID0gdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiR4KSB8fCB0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJFgpO1xuICAgICAgY29uc3QgbnVtYmVyU3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpLm9mZnNldDtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNEaWdpdEVudGl0eUVuZCk7XG4gICAgICBpZiAodGhpcy5fcGVlayAhPT0gY2hhcnMuJFNFTUlDT0xPTikge1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKHRoaXMuX3BlZWspLCB0aGlzLl9nZXRTcGFuKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3Qgc3RyTnVtID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG51bWJlclN0YXJ0LCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBwYXJzZUludChzdHJOdW0sIGlzSGV4ID8gMTYgOiAxMCk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKHN0YXJ0Lm9mZnNldCArIDEsIHRoaXMuX2luZGV4IC0gMSk7XG4gICAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmtub3duRW50aXR5RXJyb3JNc2coZW50aXR5KSwgdGhpcy5fZ2V0U3BhbihzdGFydCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTmFtZWRFbnRpdHlFbmQpO1xuICAgICAgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gXCImXCI7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKHN0YXJ0Lm9mZnNldCArIDEsIHRoaXMuX2luZGV4IC0gMSk7XG4gICAgICBjb25zdCBjaGFyID0gTkFNRURfRU5USVRJRVNbbmFtZV07XG4gICAgICBpZiAoIWNoYXIpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3Vua25vd25FbnRpdHlFcnJvck1zZyhuYW1lKSwgdGhpcy5fZ2V0U3BhbihzdGFydCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYXI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVJhd1RleHQoZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4sIGZpcnN0Q2hhck9mRW5kOiBudW1iZXIsIGF0dGVtcHRFbmRSZXN0OiAoKSA9PiBib29sZWFuKTogVG9rZW4ge1xuICAgIGxldCB0YWdDbG9zZVN0YXJ0OiBQYXJzZUxvY2F0aW9uO1xuICAgIGNvbnN0IHRleHRTdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihkZWNvZGVFbnRpdGllcyA/IFRva2VuVHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQgOiBUb2tlblR5cGUuUkFXX1RFWFQsIHRleHRTdGFydCk7XG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRhZ0Nsb3NlU3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShmaXJzdENoYXJPZkVuZCkgJiYgYXR0ZW1wdEVuZFJlc3QoKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pbmRleCA+IHRhZ0Nsb3NlU3RhcnQub2Zmc2V0KSB7XG4gICAgICAgIC8vIGFkZCB0aGUgY2hhcmFjdGVycyBjb25zdW1lZCBieSB0aGUgcHJldmlvdXMgaWYgc3RhdGVtZW50IHRvIHRoZSBvdXRwdXRcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnB1dC5zdWJzdHJpbmcodGFnQ2xvc2VTdGFydC5vZmZzZXQsIHRoaXMuX2luZGV4KSk7XG4gICAgICB9XG4gICAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gZmlyc3RDaGFyT2ZFbmQpIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9yZWFkQ2hhcihkZWNvZGVFbnRpdGllcykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZW5kVG9rZW4oW3RoaXMuX3Byb2Nlc3NDYXJyaWFnZVJldHVybnMocGFydHMuam9pbihcIlwiKSldLCB0YWdDbG9zZVN0YXJ0KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDb21tZW50KHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQ09NTUVOVF9TVEFSVCwgc3RhcnQpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kTUlOVVMpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgICBjb25zdCB0ZXh0VG9rZW4gPSB0aGlzLl9jb25zdW1lUmF3VGV4dChmYWxzZSwgY2hhcnMuJE1JTlVTLCAoKSA9PiB0aGlzLl9hdHRlbXB0U3RyKFwiLT5cIikpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlRfRU5ELCB0ZXh0VG9rZW4uc291cmNlU3Bhbi5lbmQpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDZGF0YShzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNEQVRBX1NUQVJULCBzdGFydCk7XG4gICAgdGhpcy5fcmVxdWlyZVN0cihcIkNEQVRBW1wiKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgY29uc3QgdGV4dFRva2VuID0gdGhpcy5fY29uc3VtZVJhd1RleHQoZmFsc2UsIGNoYXJzLiRSQlJBQ0tFVCwgKCkgPT4gdGhpcy5fYXR0ZW1wdFN0cihcIl0+XCIpKTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DREFUQV9FTkQsIHRleHRUb2tlbi5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZURvY1R5cGUoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5ET0NfVFlQRSwgc3RhcnQpO1xuICAgIHRoaXMuX2F0dGVtcHRVbnRpbENoYXIoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW3RoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAyLCB0aGlzLl9pbmRleCAtIDEpXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lUHJlZml4QW5kTmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbmFtZU9yUHJlZml4U3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICBsZXQgcHJlZml4OiBzdHJpbmcgPSBudWxsITtcbiAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gY2hhcnMuJENPTE9OICYmICFpc1ByZWZpeEVuZCh0aGlzLl9wZWVrKSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgICBsZXQgbmFtZVN0YXJ0OiBudW1iZXI7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRDT0xPTikge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcHJlZml4ID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVPclByZWZpeFN0YXJ0LCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgbmFtZVN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWVTdGFydCA9IG5hbWVPclByZWZpeFN0YXJ0O1xuICAgIH1cbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGVVbnRpbEZuKGlzTmFtZUVuZCwgdGhpcy5faW5kZXggPT09IG5hbWVTdGFydCA/IDEgOiAwKTtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIHJldHVybiBbcHJlZml4LCBuYW1lXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgY29uc3Qgc2F2ZWRQb3MgPSB0aGlzLl9zYXZlUG9zaXRpb24oKTtcbiAgICBsZXQgdGFnTmFtZTogc3RyaW5nO1xuICAgIGxldCBsb3dlcmNhc2VUYWdOYW1lOiBzdHJpbmc7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghY2hhcnMuaXNBc2NpaUxldHRlcih0aGlzLl9wZWVrKSkge1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKHRoaXMuX3BlZWspLCB0aGlzLl9nZXRTcGFuKCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmFtZVN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICB0aGlzLl9jb25zdW1lVGFnT3BlblN0YXJ0KHN0YXJ0KTtcbiAgICAgIHRhZ05hbWUgPSB0aGlzLl9pbnB1dC5zdWJzdHJpbmcobmFtZVN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgICBsb3dlcmNhc2VUYWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTTEFTSCAmJiB0aGlzLl9wZWVrICE9PSBjaGFycy4kR1QpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUF0dHJpYnV0ZU5hbWUoKTtcbiAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRFUSkpIHtcbiAgICAgICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29uc3VtZVRhZ09wZW5FbmQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbnRyb2xGbG93RXJyb3IpIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgc3RhcnQgdGFnIGlzIGludmFsaWQsIGFzc3VtZSB3ZSB3YW50IGEgXCI8XCJcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKHNhdmVkUG9zKTtcbiAgICAgICAgLy8gQmFjayB0byBiYWNrIHRleHQgdG9rZW5zIGFyZSBtZXJnZWQgYXQgdGhlIGVuZFxuICAgICAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5URVhULCBzdGFydCk7XG4gICAgICAgIHRoaXMuX2VuZFRva2VuKFtcIjxcIl0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudFRva2VuVHlwZSA9IHRoaXMuX2dldFRhZ0RlZmluaXRpb24odGFnTmFtZSkuY29udGVudFR5cGU7XG5cbiAgICBpZiAoY29udGVudFRva2VuVHlwZSA9PT0gVGFnQ29udGVudFR5cGUuUkFXX1RFWFQpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWUsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRUb2tlblR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVCkge1xuICAgICAgdGhpcy5fY29uc3VtZVJhd1RleHRXaXRoVGFnQ2xvc2UobG93ZXJjYXNlVGFnTmFtZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVJhd1RleHRXaXRoVGFnQ2xvc2UobG93ZXJjYXNlVGFnTmFtZTogc3RyaW5nLCBkZWNvZGVFbnRpdGllczogYm9vbGVhbikge1xuICAgIGNvbnN0IHRleHRUb2tlbiA9IHRoaXMuX2NvbnN1bWVSYXdUZXh0KGRlY29kZUVudGl0aWVzLCBjaGFycy4kTFQsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRTTEFTSCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdFN0ckNhc2VJbnNlbnNpdGl2ZShsb3dlcmNhc2VUYWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kR1QpO1xuICAgIH0pO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlRBR19DTE9TRSwgdGV4dFRva2VuLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbbnVsbCEsIGxvd2VyY2FzZVRhZ05hbWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuU3RhcnQoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfT1BFTl9TVEFSVCwgc3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5fY29uc3VtZVByZWZpeEFuZE5hbWUoKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwYXJ0cyk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQXR0cmlidXRlTmFtZSgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5BVFRSX05BTUUpO1xuICAgIGNvbnN0IHByZWZpeEFuZE5hbWUgPSB0aGlzLl9jb25zdW1lUHJlZml4QW5kTmFtZSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKHByZWZpeEFuZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHJpYnV0ZVZhbHVlKCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkFUVFJfVkFMVUUpO1xuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kU1EgfHwgdGhpcy5fcGVlayA9PT0gY2hhcnMuJERRKSB7XG4gICAgICBjb25zdCBxdW90ZUNoYXIgPSB0aGlzLl9wZWVrO1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gcXVvdGVDaGFyKSB7XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5fcmVhZENoYXIodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBwYXJ0cy5qb2luKFwiXCIpO1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZVN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGVVbnRpbEZuKGlzTmFtZUVuZCwgMSk7XG4gICAgICB2YWx1ZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyh2YWx1ZVN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgfVxuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHZhbHVlKV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRhZ09wZW5FbmQoKSB7XG4gICAgY29uc3QgdG9rZW5UeXBlID0gdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRTTEFTSCkgPyBUb2tlblR5cGUuVEFHX09QRU5fRU5EX1ZPSUQgOiBUb2tlblR5cGUuVEFHX09QRU5fRU5EO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4odG9rZW5UeXBlKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnQ2xvc2Uoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfQ0xPU0UsIHN0YXJ0KTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgY29uc3QgcHJlZml4QW5kTmFtZSA9IHRoaXMuX2NvbnN1bWVQcmVmaXhBbmROYW1lKCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kR1QpO1xuICAgIHRoaXMuX2VuZFRva2VuKHByZWZpeEFuZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkZvcm1TdGFydCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRMQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcblxuICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5wdXNoKFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCk7XG5cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5SQVdfVEVYVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5fcmVhZFVudGlsKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW2NvbmRpdGlvbl0sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlJBV19URVhULCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5fcmVhZFVudGlsKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW3R5cGVdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJENPTU1BKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRXhwYW5zaW9uQ2FzZVN0YXJ0KCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX1ZBTFVFLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kTEJSQUNFKS50cmltKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW3ZhbHVlXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuXG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJULCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJExCUkFDRSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5wdXNoKFRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkNhc2VFbmQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX0VORCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRSQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRXhwYW5zaW9uRm9ybUVuZCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kUkJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGV4dCgpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEVYVCwgc3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcgJiYgdGhpcy5fYXR0ZW1wdFN0cih0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0KSkge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuc3RhcnQpO1xuICAgICAgICB0aGlzLl9pbkludGVycG9sYXRpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZyAmJlxuICAgICAgICB0aGlzLl9pbkludGVycG9sYXRpb24gJiZcbiAgICAgICAgdGhpcy5fYXR0ZW1wdFN0cih0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZClcbiAgICAgICkge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuZW5kKTtcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX3JlYWRDaGFyKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICghdGhpcy5faXNUZXh0RW5kKCkpO1xuXG4gICAgdGhpcy5fZW5kVG9rZW4oW3RoaXMuX3Byb2Nlc3NDYXJyaWFnZVJldHVybnMocGFydHMuam9pbihcIlwiKSldKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzVGV4dEVuZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJExUIHx8IHRoaXMuX3BlZWsgPT09IGNoYXJzLiRFT0YpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90b2tlbml6ZUljdSAmJiAhdGhpcy5faW5JbnRlcnBvbGF0aW9uKSB7XG4gICAgICBpZiAoaXNFeHBhbnNpb25Gb3JtU3RhcnQodGhpcy5faW5wdXQsIHRoaXMuX2luZGV4LCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKSkge1xuICAgICAgICAvLyBzdGFydCBvZiBhbiBleHBhbnNpb24gZm9ybVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRSQlJBQ0UgJiYgdGhpcy5faXNJbkV4cGFuc2lvbkNhc2UoKSkge1xuICAgICAgICAvLyBlbmQgb2YgYW5kIGV4cGFuc2lvbiBjYXNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdmVQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICByZXR1cm4gW3RoaXMuX3BlZWssIHRoaXMuX2luZGV4LCB0aGlzLl9jb2x1bW4sIHRoaXMuX2xpbmUsIHRoaXMudG9rZW5zLmxlbmd0aF07XG4gIH1cblxuICBwcml2YXRlIF9yZWFkVW50aWwoY2hhcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIHRoaXMuX2F0dGVtcHRVbnRpbENoYXIoY2hhcik7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5faW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzdG9yZVBvc2l0aW9uKHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKTogdm9pZCB7XG4gICAgdGhpcy5fcGVlayA9IHBvc2l0aW9uWzBdO1xuICAgIHRoaXMuX2luZGV4ID0gcG9zaXRpb25bMV07XG4gICAgdGhpcy5fY29sdW1uID0gcG9zaXRpb25bMl07XG4gICAgdGhpcy5fbGluZSA9IHBvc2l0aW9uWzNdO1xuICAgIGNvbnN0IG5iVG9rZW5zID0gcG9zaXRpb25bNF07XG4gICAgaWYgKG5iVG9rZW5zIDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAvLyByZW1vdmUgYW55IGV4dHJhIHRva2Vuc1xuICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLnRva2Vucy5zbGljZSgwLCBuYlRva2Vucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNJbkV4cGFuc2lvbkNhc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2tbdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLmxlbmd0aCAtIDFdID09PSBUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5FeHBhbnNpb25Gb3JtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrW3RoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggLSAxXSA9PT0gVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc05vdFdoaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAhY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpIHx8IGNvZGUgPT09IGNoYXJzLiRFT0Y7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBjaGFycy5pc1doaXRlc3BhY2UoY29kZSkgfHxcbiAgICBjb2RlID09PSBjaGFycy4kR1QgfHxcbiAgICBjb2RlID09PSBjaGFycy4kU0xBU0ggfHxcbiAgICBjb2RlID09PSBjaGFycy4kU1EgfHxcbiAgICBjb2RlID09PSBjaGFycy4kRFEgfHxcbiAgICBjb2RlID09PSBjaGFycy4kRVFcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNQcmVmaXhFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPCBjaGFycy4kYSB8fCBjaGFycy4keiA8IGNvZGUpICYmIChjb2RlIDwgY2hhcnMuJEEgfHwgY2hhcnMuJFogPCBjb2RlKSAmJiAoY29kZSA8IGNoYXJzLiQwIHx8IGNvZGUgPiBjaGFycy4kOSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNEaWdpdEVudGl0eUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTRU1JQ09MT04gfHwgY29kZSA9PT0gY2hhcnMuJEVPRiB8fCAhY2hhcnMuaXNBc2NpaUhleERpZ2l0KGNvZGUpO1xufVxuXG5mdW5jdGlvbiBpc05hbWVkRW50aXR5RW5kKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJFNFTUlDT0xPTiB8fCBjb2RlID09PSBjaGFycy4kRU9GIHx8ICFjaGFycy5pc0FzY2lpTGV0dGVyKGNvZGUpO1xufVxuXG5mdW5jdGlvbiBpc0V4cGFuc2lvbkZvcm1TdGFydChpbnB1dDogc3RyaW5nLCBvZmZzZXQ6IG51bWJlciwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IGJvb2xlYW4ge1xuICBjb25zdCBpc0ludGVycG9sYXRpb25TdGFydCA9IGludGVycG9sYXRpb25Db25maWdcbiAgICA/IGlucHV0LmluZGV4T2YoaW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCwgb2Zmc2V0KSA9PT0gb2Zmc2V0XG4gICAgOiBmYWxzZTtcblxuICByZXR1cm4gaW5wdXQuY2hhckNvZGVBdChvZmZzZXQpID09PSBjaGFycy4kTEJSQUNFICYmICFpc0ludGVycG9sYXRpb25TdGFydDtcbn1cblxuZnVuY3Rpb24gaXNFeHBhbnNpb25DYXNlU3RhcnQocGVlazogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBwZWVrID09PSBjaGFycy4kRVEgfHwgY2hhcnMuaXNBc2NpaUxldHRlcihwZWVrKSB8fCBjaGFycy5pc0RpZ2l0KHBlZWspO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlQ2hhckNvZGVDYXNlSW5zZW5zaXRpdmUoY29kZTE6IG51bWJlciwgY29kZTI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gdG9VcHBlckNhc2VDaGFyQ29kZShjb2RlMSkgPT09IHRvVXBwZXJDYXNlQ2hhckNvZGUoY29kZTIpO1xufVxuXG5mdW5jdGlvbiB0b1VwcGVyQ2FzZUNoYXJDb2RlKGNvZGU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBjb2RlID49IGNoYXJzLiRhICYmIGNvZGUgPD0gY2hhcnMuJHogPyBjb2RlIC0gY2hhcnMuJGEgKyBjaGFycy4kQSA6IGNvZGU7XG59XG5cbmZ1bmN0aW9uIG1lcmdlVGV4dFRva2VucyhzcmNUb2tlbnM6IFRva2VuW10pOiBUb2tlbltdIHtcbiAgY29uc3QgZHN0VG9rZW5zOiBUb2tlbltdID0gW107XG4gIGxldCBsYXN0RHN0VG9rZW46IFRva2VuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY1Rva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRva2VuID0gc3JjVG9rZW5zW2ldO1xuICAgIGlmIChsYXN0RHN0VG9rZW4gJiYgbGFzdERzdFRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5URVhUICYmIHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5URVhUKSB7XG4gICAgICBsYXN0RHN0VG9rZW4ucGFydHNbMF0gKz0gdG9rZW4ucGFydHNbMF07XG4gICAgICBsYXN0RHN0VG9rZW4uc291cmNlU3Bhbi5lbmQgPSB0b2tlbi5zb3VyY2VTcGFuLmVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdERzdFRva2VuID0gdG9rZW47XG4gICAgICBkc3RUb2tlbnMucHVzaChsYXN0RHN0VG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkc3RUb2tlbnM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VfdXRpbFwiO1xuXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0ICogYXMgbGV4IGZyb20gXCIuL2xleGVyXCI7XG5pbXBvcnQge1RhZ0RlZmluaXRpb24sIGdldE5zUHJlZml4LCBpc05nQ29udGFpbmVyLCBtZXJnZU5zQW5kTmFtZX0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlZUVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudE5hbWU6IHN0cmluZyB8IG51bGwsIHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpOiBUcmVlRXJyb3Ige1xuICAgIHJldHVybiBuZXcgVHJlZUVycm9yKGVsZW1lbnROYW1lLCBzcGFuLCBtc2cpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnROYW1lOiBzdHJpbmcgfCBudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3BhbiwgbXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VUcmVlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvb3ROb2RlczogaHRtbC5Ob2RlW10sIHB1YmxpYyBlcnJvcnM6IFBhcnNlRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7fVxuXG4gIHBhcnNlKFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcnNlRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIGNvbnN0IHRva2Vuc0FuZEVycm9ycyA9IGxleC50b2tlbml6ZShzb3VyY2UsIHVybCwgdGhpcy5nZXRUYWdEZWZpbml0aW9uLCBwYXJzZUV4cGFuc2lvbkZvcm1zLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICAgIGNvbnN0IHRyZWVBbmRFcnJvcnMgPSBuZXcgX1RyZWVCdWlsZGVyKHRva2Vuc0FuZEVycm9ycy50b2tlbnMsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbikuYnVpbGQoKTtcblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KFxuICAgICAgdHJlZUFuZEVycm9ycy5yb290Tm9kZXMsXG4gICAgICAodG9rZW5zQW5kRXJyb3JzLmVycm9ycyBhcyBQYXJzZUVycm9yW10pLmNvbmNhdCh0cmVlQW5kRXJyb3JzLmVycm9ycylcbiAgICApO1xuICB9XG59XG5cbmNsYXNzIF9UcmVlQnVpbGRlciB7XG4gIHByaXZhdGUgX2luZGV4ID0gLTE7XG4gIHByaXZhdGUgX3BlZWs6IGxleC5Ub2tlbjtcblxuICBwcml2YXRlIF9yb290Tm9kZXM6IGh0bWwuTm9kZVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogVHJlZUVycm9yW10gPSBbXTtcblxuICBwcml2YXRlIF9lbGVtZW50U3RhY2s6IGh0bWwuRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2tlbnM6IGxleC5Ub2tlbltdLCBwcml2YXRlIGdldFRhZ0RlZmluaXRpb246ICh0YWdOYW1lOiBzdHJpbmcpID0+IFRhZ0RlZmluaXRpb24pIHtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBidWlsZCgpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRU9GKSB7XG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVTdGFydFRhZyh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEFHX0NMT1NFKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFbmRUYWcodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkNEQVRBX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZUNkYXRhKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5DT01NRU5UX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZUNvbW1lbnQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5URVhUIHx8XG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5SQVdfVEVYVCB8fFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VWb2lkRWxlbWVudCgpO1xuICAgICAgICB0aGlzLl9jb25zdW1lVGV4dCh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbih0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2tpcCBhbGwgb3RoZXIgdG9rZW5zLi4uXG4gICAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQYXJzZVRyZWVSZXN1bHQodGhpcy5fcm9vdE5vZGVzLCB0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWR2YW5jZSgpOiBsZXguVG9rZW4ge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLl9wZWVrO1xuICAgIGlmICh0aGlzLl9pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vIE5vdGU6IHRoZXJlIGlzIGFsd2F5cyBhbiBFT0YgdG9rZW4gYXQgdGhlIGVuZFxuICAgICAgdGhpcy5faW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5fcGVlayA9IHRoaXMudG9rZW5zW3RoaXMuX2luZGV4XTtcbiAgICByZXR1cm4gcHJldjtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2VJZih0eXBlOiBsZXguVG9rZW5UeXBlKTogbGV4LlRva2VuIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gdHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ2RhdGEoc3RhcnRUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICB0aGlzLl9hZHZhbmNlSWYobGV4LlRva2VuVHlwZS5DREFUQV9FTkQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUNvbW1lbnQodG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLl9hZHZhbmNlSWYobGV4LlRva2VuVHlwZS5SQVdfVEVYVCk7XG4gICAgdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuQ09NTUVOVF9FTkQpO1xuICAgIGNvbnN0IHZhbHVlID0gdGV4dCAhPT0gbnVsbCA/IHRleHQucGFydHNbMF0udHJpbSgpIDogbnVsbDtcbiAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5Db21tZW50KHZhbHVlLCB0b2tlbi5zb3VyY2VTcGFuKSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRXhwYW5zaW9uKHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCBzd2l0Y2hWYWx1ZSA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgY29uc3QgY2FzZXM6IGh0bWwuRXhwYW5zaW9uQ2FzZVtdID0gW107XG5cbiAgICAvLyByZWFkID1cbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX1ZBTFVFKSB7XG4gICAgICBjb25zdCBleHBDYXNlID0gdGhpcy5fcGFyc2VFeHBhbnNpb25DYXNlKCk7XG4gICAgICBpZiAoIWV4cENhc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBlcnJvclxuICAgICAgY2FzZXMucHVzaChleHBDYXNlKTtcbiAgICB9XG5cbiAgICAvLyByZWFkIHRoZSBmaW5hbCB9XG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSAhPT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VTcGFuID0gbmV3IFBhcnNlU291cmNlU3Bhbih0b2tlbi5zb3VyY2VTcGFuLnN0YXJ0LCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9hZGRUb1BhcmVudChcbiAgICAgIG5ldyBodG1sLkV4cGFuc2lvbihzd2l0Y2hWYWx1ZS5wYXJ0c1swXSwgdHlwZS5wYXJ0c1swXSwgY2FzZXMsIHNvdXJjZVNwYW4sIHN3aXRjaFZhbHVlLnNvdXJjZVNwYW4pXG4gICAgKTtcblxuICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlRXhwYW5zaW9uQ2FzZSgpOiBodG1sLkV4cGFuc2lvbkNhc2UgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIC8vIHJlYWQge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ3snLmApKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJlYWQgdW50aWwgfVxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fYWR2YW5jZSgpO1xuXG4gICAgY29uc3QgZXhwID0gdGhpcy5fY29sbGVjdEV4cGFuc2lvbkV4cFRva2VucyhzdGFydCk7XG4gICAgaWYgKCFleHApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX2FkdmFuY2UoKTtcbiAgICBleHAucHVzaChuZXcgbGV4LlRva2VuKGxleC5Ub2tlblR5cGUuRU9GLCBbXSwgZW5kLnNvdXJjZVNwYW4pKTtcblxuICAgIC8vIHBhcnNlIGV2ZXJ5dGhpbmcgaW4gYmV0d2VlbiB7IGFuZCB9XG4gICAgY29uc3QgcGFyc2VkRXhwID0gbmV3IF9UcmVlQnVpbGRlcihleHAsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbikuYnVpbGQoKTtcbiAgICBpZiAocGFyc2VkRXhwLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLl9lcnJvcnMuY29uY2F0KHBhcnNlZEV4cC5lcnJvcnMgYXMgVHJlZUVycm9yW10pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odmFsdWUuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICBjb25zdCBleHBTb3VyY2VTcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydC5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQuc291cmNlU3Bhbi5lbmQpO1xuICAgIHJldHVybiBuZXcgaHRtbC5FeHBhbnNpb25DYXNlKHZhbHVlLnBhcnRzWzBdLCBwYXJzZWRFeHAucm9vdE5vZGVzLCBzb3VyY2VTcGFuLCB2YWx1ZS5zb3VyY2VTcGFuLCBleHBTb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbGxlY3RFeHBhbnNpb25FeHBUb2tlbnMoc3RhcnQ6IGxleC5Ub2tlbik6IGxleC5Ub2tlbltdIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwOiBsZXguVG9rZW5bXSA9IFtdO1xuICAgIGNvbnN0IGV4cGFuc2lvbkZvcm1TdGFjayA9IFtsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVF07XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQgfHxcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVFxuICAgICAgKSB7XG4gICAgICAgIGV4cGFuc2lvbkZvcm1TdGFjay5wdXNoKHRoaXMuX3BlZWsudHlwZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX0VORCkge1xuICAgICAgICBpZiAobGFzdE9uU3RhY2soZXhwYW5zaW9uRm9ybVN0YWNrLCBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkpIHtcbiAgICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucG9wKCk7XG4gICAgICAgICAgaWYgKGV4cGFuc2lvbkZvcm1TdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleHA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgc3RhcnQuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX0VORCkge1xuICAgICAgICBpZiAobGFzdE9uU3RhY2soZXhwYW5zaW9uRm9ybVN0YWNrLCBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSkge1xuICAgICAgICAgIGV4cGFuc2lvbkZvcm1TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FT0YpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZXhwLnB1c2godGhpcy5fYWR2YW5jZSgpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGV4dCh0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgbGV0IHRleHQgPSB0b2tlbi5wYXJ0c1swXTtcbiAgICBpZiAodGV4dC5sZW5ndGggPiAwICYmIHRleHRbMF0gPT09IFwiXFxuXCIpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKTtcbiAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24ocGFyZW50Lm5hbWUpLmlnbm9yZUZpcnN0TGYpIHtcbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FkZFRvUGFyZW50KG5ldyBodG1sLlRleHQodGV4dCwgdG9rZW4uc291cmNlU3BhbikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlVm9pZEVsZW1lbnQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgaWYgKGVsICYmIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKS5pc1ZvaWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5wb3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lU3RhcnRUYWcoc3RhcnRUYWdUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgcHJlZml4ID0gc3RhcnRUYWdUb2tlbi5wYXJ0c1swXTtcbiAgICBjb25zdCBuYW1lID0gc3RhcnRUYWdUb2tlbi5wYXJ0c1sxXTtcbiAgICBjb25zdCBhdHRyczogaHRtbC5BdHRyaWJ1dGVbXSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQVRUUl9OQU1FKSB7XG4gICAgICBhdHRycy5wdXNoKHRoaXMuX2NvbnN1bWVBdHRyKHRoaXMuX2FkdmFuY2UoKSkpO1xuICAgIH1cbiAgICBjb25zdCBmdWxsTmFtZSA9IHRoaXMuX2dldEVsZW1lbnRGdWxsTmFtZShwcmVmaXgsIG5hbWUsIHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSk7XG4gICAgbGV0IHNlbGZDbG9zaW5nID0gZmFsc2U7XG4gICAgLy8gTm90ZTogVGhlcmUgY291bGQgaGF2ZSBiZWVuIGEgdG9rZW5pemVyIGVycm9yXG4gICAgLy8gc28gdGhhdCB3ZSBkb24ndCBnZXQgYSB0b2tlbiBmb3IgdGhlIGVuZCB0YWcuLi5cbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX0VORF9WT0lEKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICBzZWxmQ2xvc2luZyA9IHRydWU7XG4gICAgICBjb25zdCB0YWdEZWYgPSB0aGlzLmdldFRhZ0RlZmluaXRpb24oZnVsbE5hbWUpO1xuICAgICAgaWYgKCEodGFnRGVmLmNhblNlbGZDbG9zZSB8fCBnZXROc1ByZWZpeChmdWxsTmFtZSkgIT09IG51bGwgfHwgdGFnRGVmLmlzVm9pZCkpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goXG4gICAgICAgICAgVHJlZUVycm9yLmNyZWF0ZShcbiAgICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgICAgc3RhcnRUYWdUb2tlbi5zb3VyY2VTcGFuLFxuICAgICAgICAgICAgYE9ubHkgdm9pZCBhbmQgZm9yZWlnbiBlbGVtZW50cyBjYW4gYmUgc2VsZiBjbG9zZWQgXCIke3N0YXJ0VGFnVG9rZW4ucGFydHNbMV19XCJgXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX0VORCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZW5kID0gdGhpcy5fcGVlay5zb3VyY2VTcGFuLnN0YXJ0O1xuICAgIGNvbnN0IHNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0VGFnVG9rZW4uc291cmNlU3Bhbi5zdGFydCwgZW5kKTtcbiAgICBjb25zdCBlbCA9IG5ldyBodG1sLkVsZW1lbnQoZnVsbE5hbWUsIGF0dHJzLCBbXSwgc3Bhbiwgc3BhbiwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLl9wdXNoRWxlbWVudChlbCk7XG4gICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICB0aGlzLl9wb3BFbGVtZW50KGZ1bGxOYW1lKTtcbiAgICAgIGVsLmVuZFNvdXJjZVNwYW4gPSBzcGFuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3B1c2hFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKTtcblxuICAgIGlmIChwYXJlbnRFbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24ocGFyZW50RWwubmFtZSkuaXNDbG9zZWRCeUNoaWxkKGVsLm5hbWUpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFnRGVmID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpO1xuICAgIGNvbnN0IHtwYXJlbnQsIGNvbnRhaW5lcn0gPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50U2tpcHBpbmdDb250YWluZXJzKCk7XG5cbiAgICBpZiAocGFyZW50ICYmIHRhZ0RlZi5yZXF1aXJlRXh0cmFQYXJlbnQocGFyZW50Lm5hbWUpKSB7XG4gICAgICBjb25zdCBuZXdQYXJlbnQgPSBuZXcgaHRtbC5FbGVtZW50KFxuICAgICAgICB0YWdEZWYucGFyZW50VG9BZGQsXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgZWwuc291cmNlU3BhbixcbiAgICAgICAgZWwuc3RhcnRTb3VyY2VTcGFuLFxuICAgICAgICBlbC5lbmRTb3VyY2VTcGFuXG4gICAgICApO1xuICAgICAgdGhpcy5faW5zZXJ0QmVmb3JlQ29udGFpbmVyKHBhcmVudCwgY29udGFpbmVyLCBuZXdQYXJlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX2FkZFRvUGFyZW50KGVsKTtcbiAgICB0aGlzLl9lbGVtZW50U3RhY2sucHVzaChlbCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRW5kVGFnKGVuZFRhZ1Rva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCBmdWxsTmFtZSA9IHRoaXMuX2dldEVsZW1lbnRGdWxsTmFtZShlbmRUYWdUb2tlbi5wYXJ0c1swXSwgZW5kVGFnVG9rZW4ucGFydHNbMV0sIHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSk7XG5cbiAgICBpZiAodGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpKSB7XG4gICAgICB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkhLmVuZFNvdXJjZVNwYW4gPSBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldFRhZ0RlZmluaXRpb24oZnVsbE5hbWUpLmlzVm9pZCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goXG4gICAgICAgIFRyZWVFcnJvci5jcmVhdGUoXG4gICAgICAgICAgZnVsbE5hbWUsXG4gICAgICAgICAgZW5kVGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICBgVm9pZCBlbGVtZW50cyBkbyBub3QgaGF2ZSBlbmQgdGFncyBcIiR7ZW5kVGFnVG9rZW4ucGFydHNbMV19XCJgXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGBVbmV4cGVjdGVkIGNsb3NpbmcgdGFnIFwiJHtcbiAgICAgICAgZnVsbE5hbWVcbiAgICAgIH1cIi4gSXQgbWF5IGhhcHBlbiB3aGVuIHRoZSB0YWcgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnkgYW5vdGhlciB0YWcuIEZvciBtb3JlIGluZm8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNjbG9zaW5nLWVsZW1lbnRzLXRoYXQtaGF2ZS1pbXBsaWVkLWVuZC10YWdzYDtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUoZnVsbE5hbWUsIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sIGVyck1zZykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BvcEVsZW1lbnQoZnVsbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IHN0YWNrSW5kZXggPSB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gMTsgc3RhY2tJbmRleCA+PSAwOyBzdGFja0luZGV4LS0pIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFN0YWNrW3N0YWNrSW5kZXhdO1xuICAgICAgaWYgKGVsLm5hbWUgPT09IGZ1bGxOYW1lKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5zcGxpY2Uoc3RhY2tJbmRleCwgdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIHN0YWNrSW5kZXgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmdldFRhZ0RlZmluaXRpb24oZWwubmFtZSkuY2xvc2VkQnlQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQXR0cihhdHRyTmFtZTogbGV4LlRva2VuKTogaHRtbC5BdHRyaWJ1dGUge1xuICAgIGNvbnN0IGZ1bGxOYW1lID0gbWVyZ2VOc0FuZE5hbWUoYXR0ck5hbWUucGFydHNbMF0sIGF0dHJOYW1lLnBhcnRzWzFdKTtcbiAgICBsZXQgZW5kID0gYXR0ck5hbWUuc291cmNlU3Bhbi5lbmQ7XG4gICAgbGV0IHZhbHVlID0gXCJcIjtcbiAgICBsZXQgdmFsdWVTcGFuOiBQYXJzZVNvdXJjZVNwYW4gPSB1bmRlZmluZWQhO1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQVRUUl9WQUxVRSkge1xuICAgICAgY29uc3QgdmFsdWVUb2tlbiA9IHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHZhbHVlID0gdmFsdWVUb2tlbi5wYXJ0c1swXTtcbiAgICAgIGVuZCA9IHZhbHVlVG9rZW4uc291cmNlU3Bhbi5lbmQ7XG4gICAgICB2YWx1ZVNwYW4gPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW47XG4gICAgfVxuICAgIHJldHVybiBuZXcgaHRtbC5BdHRyaWJ1dGUoZnVsbE5hbWUsIHZhbHVlLCBuZXcgUGFyc2VTb3VyY2VTcGFuKGF0dHJOYW1lLnNvdXJjZVNwYW4uc3RhcnQsIGVuZCksIHZhbHVlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnRFbGVtZW50KCk6IGh0bWwuRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoID4gMCA/IHRoaXMuX2VsZW1lbnRTdGFja1t0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBpbiB0aGUgRE9NIGFuZCB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBgPG5nLWNvbnRhaW5lcj5gIGVsZW1lbnRzIGFyZSBza2lwcGVkIGFzIHRoZXkgYXJlIG5vdCByZW5kZXJlZCBhcyBET00gZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgX2dldFBhcmVudEVsZW1lbnRTa2lwcGluZ0NvbnRhaW5lcnMoKToge3BhcmVudDogaHRtbC5FbGVtZW50IHwgbnVsbDsgY29udGFpbmVyOiBodG1sLkVsZW1lbnQgfCBudWxsfSB7XG4gICAgbGV0IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoIWlzTmdDb250YWluZXIodGhpcy5fZWxlbWVudFN0YWNrW2ldLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7cGFyZW50OiB0aGlzLl9lbGVtZW50U3RhY2tbaV0sIGNvbnRhaW5lcn07XG4gICAgICB9XG4gICAgICBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50U3RhY2tbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtwYXJlbnQ6IG51bGwsIGNvbnRhaW5lcn07XG4gIH1cblxuICBwcml2YXRlIF9hZGRUb1BhcmVudChub2RlOiBodG1sLk5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jvb3ROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBub2RlIGJldHdlZW4gdGhlIHBhcmVudCBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICogV2hlbiBubyBjb250YWluZXIgaXMgZ2l2ZW4sIHRoZSBub2RlIGlzIGFwcGVuZGVkIGFzIGEgY2hpbGQgb2YgdGhlIHBhcmVudC5cbiAgICogQWxzbyB1cGRhdGVzIHRoZSBlbGVtZW50IHN0YWNrIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX2luc2VydEJlZm9yZUNvbnRhaW5lcihwYXJlbnQ6IGh0bWwuRWxlbWVudCwgY29udGFpbmVyOiBodG1sLkVsZW1lbnQgfCBudWxsLCBub2RlOiBodG1sLkVsZW1lbnQpIHtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fYWRkVG9QYXJlbnQobm9kZSk7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucHVzaChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBjb250YWluZXIgd2l0aCB0aGUgbmV3IG5vZGUgaW4gdGhlIGNoaWxkcmVuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY29udGFpbmVyKTtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChjb250YWluZXIpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnNwbGljZSh0aGlzLl9lbGVtZW50U3RhY2suaW5kZXhPZihjb250YWluZXIpLCAwLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4OiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nLCBwYXJlbnRFbGVtZW50OiBodG1sLkVsZW1lbnQgfCBudWxsKTogc3RyaW5nIHtcbiAgICBpZiAocHJlZml4ID09PSBudWxsKSB7XG4gICAgICBwcmVmaXggPSB0aGlzLmdldFRhZ0RlZmluaXRpb24obG9jYWxOYW1lKS5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCE7XG4gICAgICBpZiAocHJlZml4ID09PSBudWxsICYmIHBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJlZml4ID0gZ2V0TnNQcmVmaXgocGFyZW50RWxlbWVudC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VOc0FuZE5hbWUocHJlZml4LCBsb2NhbE5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhc3RPblN0YWNrKHN0YWNrOiBhbnlbXSwgZWxlbWVudDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBzdGFjay5sZW5ndGggPiAwICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSBlbGVtZW50O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhZ0NvbnRlbnRUeXBlLCBUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi90YWdzXCI7XG5cbmV4cG9ydCBjbGFzcyBYbWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50ID0gZmFsc2U7XG4gIHJlcXVpcmVkUGFyZW50czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59O1xuICBwYXJlbnRUb0FkZDogc3RyaW5nO1xuICBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogc3RyaW5nO1xuICBjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBO1xuICBpc1ZvaWQgPSBmYWxzZTtcbiAgaWdub3JlRmlyc3RMZiA9IGZhbHNlO1xuICBjYW5TZWxmQ2xvc2UgPSB0cnVlO1xuXG4gIHJlcXVpcmVFeHRyYVBhcmVudChjdXJyZW50UGFyZW50OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0Nsb3NlZEJ5Q2hpbGQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IF9UQUdfREVGSU5JVElPTiA9IG5ldyBYbWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYbWxUYWdEZWZpbml0aW9uKHRhZ05hbWU6IHN0cmluZyk6IFhtbFRhZ0RlZmluaXRpb24ge1xuICByZXR1cm4gX1RBR19ERUZJTklUSU9OO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQge1RhZ0NvbnRlbnRUeXBlLCBUYWdEZWZpbml0aW9ufSBmcm9tICcuL3RhZ3MnO1xuXG5leHBvcnQgY2xhc3MgSHRtbFRhZ0RlZmluaXRpb24gaW1wbGVtZW50cyBUYWdEZWZpbml0aW9uIHtcbiAgcHJpdmF0ZSBjbG9zZWRCeUNoaWxkcmVuOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcblxuICBjbG9zZWRCeVBhcmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZ3xudWxsO1xuICBjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGU7XG4gIGlzVm9pZDogYm9vbGVhbjtcbiAgaWdub3JlRmlyc3RMZjogYm9vbGVhbjtcbiAgY2FuU2VsZkNsb3NlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB7Y2xvc2VkQnlDaGlsZHJlbiwgcmVxdWlyZWRQYXJlbnRzLCBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeCxcbiAgICAgICBjb250ZW50VHlwZSA9IFRhZ0NvbnRlbnRUeXBlLlBBUlNBQkxFX0RBVEEsIGNsb3NlZEJ5UGFyZW50ID0gZmFsc2UsIGlzVm9pZCA9IGZhbHNlLFxuICAgICAgIGlnbm9yZUZpcnN0TGYgPSBmYWxzZX06IHtcbiAgICAgICAgY2xvc2VkQnlDaGlsZHJlbj86IHN0cmluZ1tdLFxuICAgICAgICBjbG9zZWRCeVBhcmVudD86IGJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkUGFyZW50cz86IHN0cmluZ1tdLFxuICAgICAgICBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeD86IHN0cmluZyxcbiAgICAgICAgY29udGVudFR5cGU/OiBUYWdDb250ZW50VHlwZSxcbiAgICAgICAgaXNWb2lkPzogYm9vbGVhbixcbiAgICAgICAgaWdub3JlRmlyc3RMZj86IGJvb2xlYW5cbiAgICAgIH0gPSB7fSkge1xuICAgIGlmIChjbG9zZWRCeUNoaWxkcmVuICYmIGNsb3NlZEJ5Q2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY2xvc2VkQnlDaGlsZHJlbi5mb3JFYWNoKHRhZ05hbWUgPT4gdGhpcy5jbG9zZWRCeUNoaWxkcmVuW3RhZ05hbWVdID0gdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuaXNWb2lkID0gaXNWb2lkO1xuICAgIHRoaXMuY2xvc2VkQnlQYXJlbnQgPSBjbG9zZWRCeVBhcmVudCB8fCBpc1ZvaWQ7XG4gICAgaWYgKHJlcXVpcmVkUGFyZW50cyAmJiByZXF1aXJlZFBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZXF1aXJlZFBhcmVudHMgPSB7fTtcbiAgICAgIC8vIFRoZSBmaXJzdCBwYXJlbnQgaXMgdGhlIGxpc3QgaXMgYXV0b21hdGljYWxseSB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlZCBwYXJlbnRzIGFyZSBwcmVzZW50XG4gICAgICB0aGlzLnBhcmVudFRvQWRkID0gcmVxdWlyZWRQYXJlbnRzWzBdO1xuICAgICAgcmVxdWlyZWRQYXJlbnRzLmZvckVhY2godGFnTmFtZSA9PiB0aGlzLnJlcXVpcmVkUGFyZW50c1t0YWdOYW1lXSA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmltcGxpY2l0TmFtZXNwYWNlUHJlZml4ID0gaW1wbGljaXROYW1lc3BhY2VQcmVmaXggfHwgbnVsbDtcbiAgICB0aGlzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGU7XG4gICAgdGhpcy5pZ25vcmVGaXJzdExmID0gaWdub3JlRmlyc3RMZjtcbiAgfVxuXG4gIHJlcXVpcmVFeHRyYVBhcmVudChjdXJyZW50UGFyZW50OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMucmVxdWlyZWRQYXJlbnRzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50UGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBsY1BhcmVudCA9IGN1cnJlbnRQYXJlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc1BhcmVudFRlbXBsYXRlID0gbGNQYXJlbnQgPT09ICd0ZW1wbGF0ZScgfHwgY3VycmVudFBhcmVudCA9PT0gJ25nLXRlbXBsYXRlJztcbiAgICByZXR1cm4gIWlzUGFyZW50VGVtcGxhdGUgJiYgdGhpcy5yZXF1aXJlZFBhcmVudHNbbGNQYXJlbnRdICE9PSB0cnVlO1xuICB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzVm9pZCB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gdGhpcy5jbG9zZWRCeUNoaWxkcmVuO1xuICB9XG59XG5cbi8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvc3ludGF4Lmh0bWwjb3B0aW9uYWwtdGFnc1xuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBmdWxseSBjb25mb3JtIHRvIHRoZSBIVE1MNSBzcGVjLlxuY29uc3QgVEFHX0RFRklOSVRJT05TOiB7W2tleTogc3RyaW5nXTogSHRtbFRhZ0RlZmluaXRpb259ID0ge1xuICAnYmFzZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdtZXRhJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2FyZWEnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnZW1iZWQnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnbGluayc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdpbWcnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaW5wdXQnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAncGFyYW0nOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaHInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnYnInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnc291cmNlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3RyYWNrJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3dicic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdwJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtcbiAgICBjbG9zZWRCeUNoaWxkcmVuOiBbXG4gICAgICAnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnZGl2JywgJ2RsJywgICAgICAnZmllbGRzZXQnLCAnZm9vdGVyJywgJ2Zvcm0nLFxuICAgICAgJ2gxJywgICAgICAnaDInLCAgICAgICdoMycsICAgICdoNCcsICAgICAgICAgJ2g1JywgICdoNicsICAgICAgJ2hlYWRlcicsICAgJ2hncm91cCcsICdocicsXG4gICAgICAnbWFpbicsICAgICduYXYnLCAgICAgJ29sJywgICAgJ3AnLCAgICAgICAgICAncHJlJywgJ3NlY3Rpb24nLCAndGFibGUnLCAgICAndWwnXG4gICAgXSxcbiAgICBjbG9zZWRCeVBhcmVudDogdHJ1ZVxuICB9KSxcbiAgJ3RoZWFkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3Rib2R5JywgJ3Rmb290J119KSxcbiAgJ3Rib2R5JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3Rib2R5JywgJ3Rmb290J10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICd0Zm9vdCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keSddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndHInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe1xuICAgIGNsb3NlZEJ5Q2hpbGRyZW46IFsndHInXSxcbiAgICByZXF1aXJlZFBhcmVudHM6IFsndGJvZHknLCAndGZvb3QnLCAndGhlYWQnXSxcbiAgICBjbG9zZWRCeVBhcmVudDogdHJ1ZVxuICB9KSxcbiAgJ3RkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3RkJywgJ3RoJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICd0aCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0ZCcsICd0aCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnY29sJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtyZXF1aXJlZFBhcmVudHM6IFsnY29sZ3JvdXAnXSwgaXNWb2lkOiB0cnVlfSksXG4gICdzdmcnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2ltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiAnc3ZnJ30pLFxuICAnbWF0aCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aW1wbGljaXROYW1lc3BhY2VQcmVmaXg6ICdtYXRoJ30pLFxuICAnbGknOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsnbGknXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ2R0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2R0JywgJ2RkJ119KSxcbiAgJ2RkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2R0JywgJ2RkJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdyYic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydCcsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3J0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0JywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncnRjJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncnAnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsncmInLCAncnQnLCAncnRjJywgJ3JwJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdvcHRncm91cCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydvcHRncm91cCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnb3B0aW9uJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ29wdGlvbicsICdvcHRncm91cCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncHJlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpZ25vcmVGaXJzdExmOiB0cnVlfSksXG4gICdsaXN0aW5nJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpZ25vcmVGaXJzdExmOiB0cnVlfSksXG4gICdzdHlsZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlLlJBV19URVhUfSksXG4gICdzY3JpcHQnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5SQVdfVEVYVH0pLFxuICAndGl0bGUnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFR9KSxcbiAgJ3RleHRhcmVhJzpcbiAgICAgIG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVCwgaWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxufTtcblxuY29uc3QgX0RFRkFVTFRfVEFHX0RFRklOSVRJT04gPSBuZXcgSHRtbFRhZ0RlZmluaXRpb24oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEh0bWxUYWdEZWZpbml0aW9uKHRhZ05hbWU6IHN0cmluZyk6IEh0bWxUYWdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIFRBR19ERUZJTklUSU9OU1t0YWdOYW1lLnRvTG93ZXJDYXNlKCldIHx8IF9ERUZBVUxUX1RBR19ERUZJTklUSU9OO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCB7Z2V0SHRtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QvaHRtbF90YWdzXCI7XG5pbXBvcnQge0kxOG5QbHVyYWxQaXBlLCBJMThuU2VsZWN0UGlwZSwgTmdMb2NhbGVMb2NhbGl6YXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5NZXNzYWdlc0J5SWQge1xuICBbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFhtbE1lc3NhZ2VzQnlJZCB7XG4gIFtpZDogc3RyaW5nXTogeG1sLk5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWN1Q29udGVudCB7XG4gIGNhc2VzOiB7W3ZhbHVlOiBzdHJpbmddOiBodG1sLk5vZGVbXX07XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljdUNvbnRlbnRTdHIge1xuICBjYXNlczoge1t2YWx1ZTogc3RyaW5nXTogc3RyaW5nfTtcbiAgZXhwcmVzc2lvbjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBgUGxhY2Vob2xkZXJNYXBwZXJgIGNvbnZlcnRzIHBsYWNlaG9sZGVyIG5hbWVzIGZyb20gaW50ZXJuYWwgdG8gc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbiBhbmRcbiAqIGJhY2suXG4gKlxuICogSXQgc2hvdWxkIGJlIHVzZWQgZm9yIHNlcmlhbGl6YXRpb24gZm9ybWF0IHRoYXQgcHV0IGNvbnN0cmFpbnRzIG9uIHRoZSBwbGFjZWhvbGRlciBuYW1lcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGFjZWhvbGRlck1hcHBlciB7XG4gIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG5cbiAgdG9JbnRlcm5hbE5hbWUocHVibGljTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBtYXBwZXIgdGhhdCB0YWtlIGEgZnVuY3Rpb24gdG8gdHJhbnNmb3JtIGFuIGludGVybmFsIG5hbWUgdG8gYSBwdWJsaWMgbmFtZVxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlUGxhY2Vob2xkZXJNYXBwZXIgZXh0ZW5kcyBpMThuLlJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgUGxhY2Vob2xkZXJNYXBwZXIge1xuICBwcml2YXRlIGludGVybmFsVG9QdWJsaWM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICBwcml2YXRlIHB1YmxpY1RvTmV4dElkOiB7W2s6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaWNUb0ludGVybmFsOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAvLyBjcmVhdGUgYSBtYXBwaW5nIGZyb20gdGhlIG1lc3NhZ2VcbiAgY29uc3RydWN0b3IobWVzc2FnZTogaTE4bi5NZXNzYWdlLCBwcml2YXRlIG1hcE5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgbWVzc2FnZS5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkgPyB0aGlzLmludGVybmFsVG9QdWJsaWNbaW50ZXJuYWxOYW1lXSA6IG51bGw7XG4gIH1cblxuICB0b0ludGVybmFsTmFtZShwdWJsaWNOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5wdWJsaWNUb0ludGVybmFsLmhhc093blByb3BlcnR5KHB1YmxpY05hbWUpID8gdGhpcy5wdWJsaWNUb0ludGVybmFsW3B1YmxpY05hbWVdIDogbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5zdGFydE5hbWUpO1xuICAgIHN1cGVyLnZpc2l0VGFnUGxhY2Vob2xkZXIocGgsIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguY2xvc2VOYW1lKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGgubmFtZSk7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgLy8gWE1CIHBsYWNlaG9sZGVycyBjb3VsZCBvbmx5IGNvbnRhaW5zIEEtWiwgMC05IGFuZCBfXG4gIHByaXZhdGUgdmlzaXRQbGFjZWhvbGRlck5hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWludGVybmFsTmFtZSB8fCB0aGlzLmludGVybmFsVG9QdWJsaWMuaGFzT3duUHJvcGVydHkoaW50ZXJuYWxOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwdWJsaWNOYW1lID0gdGhpcy5tYXBOYW1lKGludGVybmFsTmFtZSk7XG5cbiAgICBpZiAodGhpcy5wdWJsaWNUb0ludGVybmFsLmhhc093blByb3BlcnR5KHB1YmxpY05hbWUpKSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgWE1CIHdoZW4gaXQgaGFzIGFscmVhZHkgYmVlbiB1c2VkXG4gICAgICBjb25zdCBuZXh0SWQgPSB0aGlzLnB1YmxpY1RvTmV4dElkW3B1YmxpY05hbWVdO1xuICAgICAgdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXSA9IG5leHRJZCArIDE7XG4gICAgICBwdWJsaWNOYW1lID0gYCR7cHVibGljTmFtZX1fJHtuZXh0SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXSA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcm5hbFRvUHVibGljW2ludGVybmFsTmFtZV0gPSBwdWJsaWNOYW1lO1xuICAgIHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA9IGludGVybmFsTmFtZTtcbiAgfVxufVxuXG5jb25zdCBpMThuU2VsZWN0UGlwZSA9IG5ldyBJMThuU2VsZWN0UGlwZSgpO1xuY2xhc3MgU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIGkxOG5QbHVyYWxQaXBlOiBJMThuUGx1cmFsUGlwZTtcbiAgY29uc3RydWN0b3IobG9jYWxlOiBzdHJpbmcsIHByaXZhdGUgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIHRoaXMuaTE4blBsdXJhbFBpcGUgPSBuZXcgSTE4blBsdXJhbFBpcGUobmV3IE5nTG9jYWxlTG9jYWxpemF0aW9uKGxvY2FsZSkpO1xuICB9XG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKGdldEh0bWxUYWdEZWZpbml0aW9uKGVsZW1lbnQubmFtZSkuaXNWb2lkKSB7XG4gICAgICByZXR1cm4gYDwke2VsZW1lbnQubmFtZX0ke3RoaXMuc2VyaWFsaXplTm9kZXMoZWxlbWVudC5hdHRycywgXCIgXCIpfS8+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYDwke2VsZW1lbnQubmFtZX0ke3RoaXMuc2VyaWFsaXplTm9kZXMoZWxlbWVudC5hdHRycywgXCIgXCIpfT4ke3RoaXMuc2VyaWFsaXplTm9kZXMoZWxlbWVudC5jaGlsZHJlbil9PC8ke1xuICAgICAgZWxlbWVudC5uYW1lXG4gICAgfT5gO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYCR7YXR0cmlidXRlLm5hbWV9PVwiJHthdHRyaWJ1dGUudmFsdWV9XCJgO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGA8IS0tJHtjb21tZW50LnZhbHVlfS0tPmA7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNhc2VzID0ge307XG4gICAgZXhwYW5zaW9uLmNhc2VzLmZvckVhY2goYyA9PiAoY2FzZXNbYy52YWx1ZV0gPSB0aGlzLnNlcmlhbGl6ZU5vZGVzKGMuZXhwcmVzc2lvbikpKTtcblxuICAgIHN3aXRjaCAoZXhwYW5zaW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgcmV0dXJuIGkxOG5TZWxlY3RQaXBlLnRyYW5zZm9ybSh0aGlzLnBhcmFtc1tleHBhbnNpb24uc3dpdGNoVmFsdWVdIHx8IFwiXCIsIGNhc2VzKTtcbiAgICAgIGNhc2UgXCJwbHVyYWxcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4blBsdXJhbFBpcGUudHJhbnNmb3JtKHRoaXMucGFyYW1zW2V4cGFuc2lvbi5zd2l0Y2hWYWx1ZV0sIGNhc2VzKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGV4cGFuc2lvbiB0eXBlIFwiJHtleHBhbnNpb24udHlwZX1cImApO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYCAke2V4cGFuc2lvbkNhc2UudmFsdWV9IHske3RoaXMuc2VyaWFsaXplTm9kZXMoZXhwYW5zaW9uQ2FzZS5leHByZXNzaW9uKX19YDtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplTm9kZXMobm9kZXM6IGh0bWwuTm9kZVtdLCBqb2luID0gXCJcIik6IHN0cmluZyB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBqb2luICsgbm9kZXMubWFwKGEgPT4gYS52aXNpdCh0aGlzLCBudWxsKSkuam9pbihqb2luKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTm9kZXMobm9kZXM6IGh0bWwuTm9kZVtdLCBsb2NhbGU6IHN0cmluZywgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIG5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQobmV3IFNlcmlhbGl6ZXJWaXNpdG9yKGxvY2FsZSwgcGFyYW1zKSwgbnVsbCkpO1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbFRvWG1sUGFyc2VyIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBlcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIHhtbE1lc3NhZ2VzQnlJZDoge1tpZDogc3RyaW5nXTogeG1sLk5vZGV9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgTUVTU0FHRV9UQUc6IHN0cmluZykge31cblxuICBwYXJzZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnhtbE1lc3NhZ2VzQnlJZCA9IHt9O1xuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShjb250ZW50LCBcIlwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLmVycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgaHRtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICB4bWxNZXNzYWdlc0J5SWQ6IHRoaXMueG1sTWVzc2FnZXNCeUlkLFxuICAgICAgZXJyb3JzOiB0aGlzLmVycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIHRoaXMuTUVTU0FHRV9UQUc6XG4gICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICB0aGlzLnhtbE1lc3NhZ2VzQnlJZFtpZC52YWx1ZV0gPSAoZWxlbWVudCBhcyBhbnkpIGFzIHhtbC5Ob2RlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogaHRtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1lc3NhZ2UuaWQgfHwgc2hhMShzZXJpYWxpemVOb2RlcyhtZXNzYWdlLm5vZGVzKS5qb2luKFwiXCIpICsgYFske21lc3NhZ2UubWVhbmluZ31dYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNpbWFsRGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIGlmIChtZXNzYWdlLmlkKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UuaWQ7XG4gIH1cblxuICBjb25zdCB2aXNpdG9yID0gbmV3IFNlcmlhbGl6ZXJJZ25vcmVJY3VFeHBWaXNpdG9yKCk7XG4gIGNvbnN0IHBhcnRzID0gbWVzc2FnZS5ub2Rlcy5tYXAoYSA9PiBhLnZpc2l0KHZpc2l0b3IsIG51bGwpKTtcbiAgcmV0dXJuIGNvbXB1dGVNc2dJZChwYXJ0cy5qb2luKFwiXCIpLCBtZXNzYWdlLm1lYW5pbmcpO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgaTE4biBodG1sIHRvIHNvbWV0aGluZyB4bWwtbGlrZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhbiBVSUQuXG4gKlxuICogVGhlIHZpc2l0b3IgaXMgYWxzbyB1c2VkIGluIHRoZSBpMThuIHBhcnNlciB0ZXN0c1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBTZXJpYWxpemVyVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgWyR7Y29udGFpbmVyLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbihcIiwgXCIpfV1gO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHJDYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKChrOiBzdHJpbmcpID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG4gICAgcmV0dXJuIGB7JHtpY3UuZXhwcmVzc2lvbn0sICR7aWN1LnR5cGV9LCAke3N0ckNhc2VzLmpvaW4oXCIsIFwiKX19YDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHBoLmlzVm9pZFxuICAgICAgPyBgPHBoIHRhZyBuYW1lPVwiJHtwaC5zdGFydE5hbWV9XCIvPmBcbiAgICAgIDogYDxwaCB0YWcgbmFtZT1cIiR7cGguc3RhcnROYW1lfVwiPiR7cGguY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKS5qb2luKFwiLCBcIil9PC9waCBuYW1lPVwiJHtcbiAgICAgICAgICBwaC5jbG9zZU5hbWVcbiAgICAgICAgfVwiPmA7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBwaC52YWx1ZSA/IGA8cGggbmFtZT1cIiR7cGgubmFtZX1cIj4ke3BoLnZhbHVlfTwvcGg+YCA6IGA8cGggbmFtZT1cIiR7cGgubmFtZX1cIi8+YDtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgPHBoIGljdSBuYW1lPVwiJHtwaC5uYW1lfVwiPiR7cGgudmFsdWUudmlzaXQodGhpcyl9PC9waD5gO1xuICB9XG59XG5cbmNvbnN0IHNlcmlhbGl6ZXJWaXNpdG9yID0gbmV3IFNlcmlhbGl6ZXJWaXNpdG9yKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVOb2Rlcyhub2RlczogaTE4bi5Ob2RlW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBub2Rlcy5tYXAoYSA9PiBhLnZpc2l0KHNlcmlhbGl6ZXJWaXNpdG9yLCBudWxsKSk7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBpMThuIGh0bWwgdG8gc29tZXRoaW5nIHhtbC1saWtlIGluIG9yZGVyIHRvIGdlbmVyYXRlIGFuIFVJRC5cbiAqXG4gKiBJZ25vcmUgdGhlIElDVSBleHByZXNzaW9ucyBzbyB0aGF0IG1lc3NhZ2UgSURzIHN0YXlzIGlkZW50aWNhbCBpZiBvbmx5IHRoZSBleHByZXNzaW9uIGNoYW5nZXMuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIFNlcmlhbGl6ZXJJZ25vcmVJY3VFeHBWaXNpdG9yIGV4dGVuZHMgU2VyaWFsaXplclZpc2l0b3Ige1xuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHN0ckNhc2VzID0gT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoKGs6IHN0cmluZykgPT4gYCR7a30geyR7aWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpfX1gKTtcbiAgICAvLyBEbyBub3QgdGFrZSB0aGUgZXhwcmVzc2lvbiBpbnRvIGFjY291bnRcbiAgICByZXR1cm4gYHske2ljdS50eXBlfSwgJHtzdHJDYXNlcy5qb2luKFwiLCBcIil9fWA7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wdXRlIHRoZSBTSEExIG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAqXG4gKiBzZWUgaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC00L2ZpcHMtMTgwLTQucGRmXG4gKlxuICogV0FSTklORzogdGhpcyBmdW5jdGlvbiBoYXMgbm90IGJlZW4gZGVzaWduZWQgbm90IHRlc3RlZCB3aXRoIHNlY3VyaXR5IGluIG1pbmQuXG4gKiAgICAgICAgICBETyBOT1QgVVNFIElUIElOIEEgU0VDVVJJVFkgU0VOU0lUSVZFIENPTlRFWFQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGExKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdXRmOCA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgY29uc3Qgd29yZHMzMiA9IHN0cmluZ1RvV29yZHMzMih1dGY4LCBFbmRpYW4uQmlnKTtcbiAgY29uc3QgbGVuID0gdXRmOC5sZW5ndGggKiA4O1xuXG4gIGNvbnN0IHcgPSBuZXcgQXJyYXkoODApO1xuICBsZXQgW2EsIGIsIGMsIGQsIGVdOiBudW1iZXJbXSA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICB3b3JkczMyW2xlbiA+PiA1XSB8PSAweDgwIDw8ICgyNCAtIGxlbiAlIDMyKTtcbiAgd29yZHMzMlsoKChsZW4gKyA2NCkgPj4gOSkgPDwgNCkgKyAxNV0gPSBsZW47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkczMyLmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IFtoMCwgaDEsIGgyLCBoMywgaDRdOiBudW1iZXJbXSA9IFthLCBiLCBjLCBkLCBlXTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgODA7IGorKykge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAoaiA8IDE2KSB7XG4gICAgICAgIHdbal0gPSB3b3JkczMyW2kgKyBqXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdbal0gPSByb2wzMih3W2ogLSAzXSBeIHdbaiAtIDhdIF4gd1tqIC0gMTRdIF4gd1tqIC0gMTZdLCAxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2YsIGtdID0gZmsoaiwgYiwgYywgZCk7XG4gICAgICBjb25zdCB0ZW1wID0gW3JvbDMyKGEsIDUpLCBmLCBlLCBrLCB3W2pdXS5yZWR1Y2UoYWRkMzIpO1xuICAgICAgW2UsIGQsIGMsIGIsIGFdID0gW2QsIGMsIHJvbDMyKGIsIDMwKSwgYSwgdGVtcF07XG4gICAgfVxuXG4gICAgW2EsIGIsIGMsIGQsIGVdID0gW2FkZDMyKGEsIGgwKSwgYWRkMzIoYiwgaDEpLCBhZGQzMihjLCBoMiksIGFkZDMyKGQsIGgzKSwgYWRkMzIoZSwgaDQpXTtcbiAgfVxuXG4gIHJldHVybiBieXRlU3RyaW5nVG9IZXhTdHJpbmcod29yZHMzMlRvQnl0ZVN0cmluZyhbYSwgYiwgYywgZCwgZV0pKTtcbn1cblxuZnVuY3Rpb24gZmsoaW5kZXg6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xuICBpZiAoaW5kZXggPCAyMCkge1xuICAgIHJldHVybiBbKGIgJiBjKSB8ICh+YiAmIGQpLCAweDVhODI3OTk5XTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDQwKSB7XG4gICAgcmV0dXJuIFtiIF4gYyBeIGQsIDB4NmVkOWViYTFdO1xuICB9XG5cbiAgaWYgKGluZGV4IDwgNjApIHtcbiAgICByZXR1cm4gWyhiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKSwgMHg4ZjFiYmNkY107XG4gIH1cblxuICByZXR1cm4gW2IgXiBjIF4gZCwgMHhjYTYyYzFkNl07XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgZmluZ2VycHJpbnQgb2YgdGhlIGdpdmVuIHN0cmluZ1xuICpcbiAqIFRoZSBvdXRwdXQgaXMgNjQgYml0IG51bWJlciBlbmNvZGVkIGFzIGEgZGVjaW1hbCBzdHJpbmdcbiAqXG4gKiBiYXNlZCBvbjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9ibG9iL21hc3Rlci9zcmMvY29tL2dvb2dsZS9qYXZhc2NyaXB0L2pzY29tcC9Hb29nbGVKc01lc3NhZ2VJZEdlbmVyYXRvci5qYXZhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5nZXJwcmludChzdHI6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB1dGY4ID0gdXRmOEVuY29kZShzdHIpO1xuXG4gIGxldCBbaGksIGxvXSA9IFtoYXNoMzIodXRmOCwgMCksIGhhc2gzMih1dGY4LCAxMDIwNzIpXTtcblxuICBpZiAoaGkgPT09IDAgJiYgKGxvID09PSAwIHx8IGxvID09PSAxKSkge1xuICAgIGhpID0gaGkgXiAweDEzMGY5YmVmO1xuICAgIGxvID0gbG8gXiAtMHg2YjVmNTZkODtcbiAgfVxuXG4gIHJldHVybiBbaGksIGxvXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVNc2dJZChtc2c6IHN0cmluZywgbWVhbmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IFtoaSwgbG9dID0gZmluZ2VycHJpbnQobXNnKTtcblxuICBpZiAobWVhbmluZykge1xuICAgIGNvbnN0IFtoaW0sIGxvbV0gPSBmaW5nZXJwcmludChtZWFuaW5nKTtcbiAgICBbaGksIGxvXSA9IGFkZDY0KHJvbDY0KFtoaSwgbG9dLCAxKSwgW2hpbSwgbG9tXSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZVN0cmluZ1RvRGVjU3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2hpICYgMHg3ZmZmZmZmZiwgbG9dKSk7XG59XG5cbmZ1bmN0aW9uIGhhc2gzMihzdHI6IHN0cmluZywgYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IFthLCBiXSA9IFsweDllMzc3OWI5LCAweDllMzc3OWI5XTtcbiAgbGV0IGk6IG51bWJlcjtcblxuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgKyAxMiA8PSBsZW47IGkgKz0gMTIpIHtcbiAgICBhID0gYWRkMzIoYSwgd29yZEF0KHN0ciwgaSwgRW5kaWFuLkxpdHRsZSkpO1xuICAgIGIgPSBhZGQzMihiLCB3b3JkQXQoc3RyLCBpICsgNCwgRW5kaWFuLkxpdHRsZSkpO1xuICAgIGMgPSBhZGQzMihjLCB3b3JkQXQoc3RyLCBpICsgOCwgRW5kaWFuLkxpdHRsZSkpO1xuICAgIFthLCBiLCBjXSA9IG1peChbYSwgYiwgY10pO1xuICB9XG5cbiAgYSA9IGFkZDMyKGEsIHdvcmRBdChzdHIsIGksIEVuZGlhbi5MaXR0bGUpKTtcbiAgYiA9IGFkZDMyKGIsIHdvcmRBdChzdHIsIGkgKyA0LCBFbmRpYW4uTGl0dGxlKSk7XG4gIC8vIHRoZSBmaXJzdCBieXRlIG9mIGMgaXMgcmVzZXJ2ZWQgZm9yIHRoZSBsZW5ndGhcbiAgYyA9IGFkZDMyKGMsIGxlbik7XG4gIGMgPSBhZGQzMihjLCB3b3JkQXQoc3RyLCBpICsgOCwgRW5kaWFuLkxpdHRsZSkgPDwgOCk7XG5cbiAgcmV0dXJuIG1peChbYSwgYiwgY10pWzJdO1xufVxuXG4vLyBjbGFuZy1mb3JtYXQgb2ZmXG5mdW5jdGlvbiBtaXgoW2EsIGIsIGNdOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBhID0gc3ViMzIoYSwgYik7XG4gIGEgPSBzdWIzMihhLCBjKTtcbiAgYSBePSBjID4+PiAxMztcbiAgYiA9IHN1YjMyKGIsIGMpO1xuICBiID0gc3ViMzIoYiwgYSk7XG4gIGIgXj0gYSA8PCA4O1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiAxMztcbiAgYSA9IHN1YjMyKGEsIGIpO1xuICBhID0gc3ViMzIoYSwgYyk7XG4gIGEgXj0gYyA+Pj4gMTI7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgMTY7XG4gIGMgPSBzdWIzMihjLCBhKTtcbiAgYyA9IHN1YjMyKGMsIGIpO1xuICBjIF49IGIgPj4+IDU7XG4gIGEgPSBzdWIzMihhLCBiKTtcbiAgYSA9IHN1YjMyKGEsIGMpO1xuICBhIF49IGMgPj4+IDM7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgMTA7XG4gIGMgPSBzdWIzMihjLCBhKTtcbiAgYyA9IHN1YjMyKGMsIGIpO1xuICBjIF49IGIgPj4+IDE1O1xuICByZXR1cm4gW2EsIGIsIGNdO1xufVxuLy8gY2xhbmctZm9ybWF0IG9uXG5cbi8vIFV0aWxzXG5cbmVudW0gRW5kaWFuIHtcbiAgTGl0dGxlLFxuICBCaWdcbn1cblxuZnVuY3Rpb24gYWRkMzIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYWRkMzJ0bzY0KGEsIGIpWzFdO1xufVxuXG5mdW5jdGlvbiBhZGQzMnRvNjQoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpICsgKGIgJiAweGZmZmYpO1xuICBjb25zdCBoaWdoID0gKGEgPj4+IDE2KSArIChiID4+PiAxNikgKyAobG93ID4+PiAxNik7XG4gIHJldHVybiBbaGlnaCA+Pj4gMTYsIChoaWdoIDw8IDE2KSB8IChsb3cgJiAweGZmZmYpXTtcbn1cblxuZnVuY3Rpb24gYWRkNjQoW2FoLCBhbF06IFtudW1iZXIsIG51bWJlcl0sIFtiaCwgYmxdOiBbbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IFtjYXJyeSwgbF0gPSBhZGQzMnRvNjQoYWwsIGJsKTtcbiAgY29uc3QgaCA9IGFkZDMyKGFkZDMyKGFoLCBiaCksIGNhcnJ5KTtcbiAgcmV0dXJuIFtoLCBsXTtcbn1cblxuZnVuY3Rpb24gc3ViMzIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBsb3cgPSAoYSAmIDB4ZmZmZikgLSAoYiAmIDB4ZmZmZik7XG4gIGNvbnN0IGhpZ2ggPSAoYSA+PiAxNikgLSAoYiA+PiAxNikgKyAobG93ID4+IDE2KTtcbiAgcmV0dXJuIChoaWdoIDw8IDE2KSB8IChsb3cgJiAweGZmZmYpO1xufVxuXG4vLyBSb3RhdGUgYSAzMmIgbnVtYmVyIGxlZnQgYGNvdW50YCBwb3NpdGlvblxuZnVuY3Rpb24gcm9sMzIoYTogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChhIDw8IGNvdW50KSB8IChhID4+PiAoMzIgLSBjb3VudCkpO1xufVxuXG4vLyBSb3RhdGUgYSA2NGIgbnVtYmVyIGxlZnQgYGNvdW50YCBwb3NpdGlvblxuZnVuY3Rpb24gcm9sNjQoW2hpLCBsb106IFtudW1iZXIsIG51bWJlcl0sIGNvdW50OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgaCA9IChoaSA8PCBjb3VudCkgfCAobG8gPj4+ICgzMiAtIGNvdW50KSk7XG4gIGNvbnN0IGwgPSAobG8gPDwgY291bnQpIHwgKGhpID4+PiAoMzIgLSBjb3VudCkpO1xuICByZXR1cm4gW2gsIGxdO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb1dvcmRzMzIoc3RyOiBzdHJpbmcsIGVuZGlhbjogRW5kaWFuKTogbnVtYmVyW10ge1xuICBjb25zdCB3b3JkczMyID0gQXJyYXkoKHN0ci5sZW5ndGggKyAzKSA+Pj4gMik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkczMyLmxlbmd0aDsgaSsrKSB7XG4gICAgd29yZHMzMltpXSA9IHdvcmRBdChzdHIsIGkgKiA0LCBlbmRpYW4pO1xuICB9XG5cbiAgcmV0dXJuIHdvcmRzMzI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBpbmRleCA+PSBzdHIubGVuZ3RoID8gMCA6IHN0ci5jaGFyQ29kZUF0KGluZGV4KSAmIDB4ZmY7XG59XG5cbmZ1bmN0aW9uIHdvcmRBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlciwgZW5kaWFuOiBFbmRpYW4pOiBudW1iZXIge1xuICBsZXQgd29yZCA9IDA7XG4gIGlmIChlbmRpYW4gPT09IEVuZGlhbi5CaWcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgd29yZCArPSBieXRlQXQoc3RyLCBpbmRleCArIGkpIDw8ICgyNCAtIDggKiBpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHdvcmQgKz0gYnl0ZUF0KHN0ciwgaW5kZXggKyBpKSA8PCAoOCAqIGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gd29yZDtcbn1cblxuZnVuY3Rpb24gd29yZHMzMlRvQnl0ZVN0cmluZyh3b3JkczMyOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIHJldHVybiB3b3JkczMyLnJlZHVjZSgoc3RyLCB3b3JkKSA9PiBzdHIgKyB3b3JkMzJUb0J5dGVTdHJpbmcod29yZCksIFwiXCIpO1xufVxuXG5mdW5jdGlvbiB3b3JkMzJUb0J5dGVTdHJpbmcod29yZDogbnVtYmVyKTogc3RyaW5nIHtcbiAgbGV0IHN0ciA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHdvcmQgPj4+ICg4ICogKDMgLSBpKSkpICYgMHhmZik7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGhleCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYiA9IGJ5dGVBdChzdHIsIGkpO1xuICAgIGhleCArPSAoYiA+Pj4gNCkudG9TdHJpbmcoMTYpICsgKGIgJiAweDBmKS50b1N0cmluZygxNik7XG4gIH1cbiAgcmV0dXJuIGhleC50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyBiYXNlZCBvbiBodHRwOi8vd3d3LmRhbnZrLm9yZy9oZXgyZGVjLmh0bWwgKEpTIGNhbiBub3QgaGFuZGxlIG1vcmUgdGhhbiA1NmIpXG5mdW5jdGlvbiBieXRlU3RyaW5nVG9EZWNTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZGVjaW1hbCA9IFwiXCI7XG4gIGxldCB0b1RoZVBvd2VyID0gXCIxXCI7XG5cbiAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRlY2ltYWwgPSBhZGRCaWdJbnQoZGVjaW1hbCwgbnVtYmVyVGltZXNCaWdJbnQoYnl0ZUF0KHN0ciwgaSksIHRvVGhlUG93ZXIpKTtcbiAgICB0b1RoZVBvd2VyID0gbnVtYmVyVGltZXNCaWdJbnQoMjU2LCB0b1RoZVBvd2VyKTtcbiAgfVxuXG4gIHJldHVybiBkZWNpbWFsXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLnJldmVyc2UoKVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG4vLyB4IGFuZCB5IGRlY2ltYWwsIGxvd2VzdCBzaWduaWZpY2FudCBkaWdpdCBmaXJzdFxuZnVuY3Rpb24gYWRkQmlnSW50KHg6IHN0cmluZywgeTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHN1bSA9IFwiXCI7XG4gIGNvbnN0IGxlbiA9IE1hdGgubWF4KHgubGVuZ3RoLCB5Lmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwLCBjYXJyeSA9IDA7IGkgPCBsZW4gfHwgY2Fycnk7IGkrKykge1xuICAgIGNvbnN0IHRtcFN1bSA9IGNhcnJ5ICsgKyh4W2ldIHx8IDApICsgKyh5W2ldIHx8IDApO1xuICAgIGlmICh0bXBTdW0gPj0gMTApIHtcbiAgICAgIGNhcnJ5ID0gMTtcbiAgICAgIHN1bSArPSB0bXBTdW0gLSAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FycnkgPSAwO1xuICAgICAgc3VtICs9IHRtcFN1bTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VtO1xufVxuXG5mdW5jdGlvbiBudW1iZXJUaW1lc0JpZ0ludChudW06IG51bWJlciwgYjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHByb2R1Y3QgPSBcIlwiO1xuICBsZXQgYlRvVGhlUG93ZXIgPSBiO1xuICBmb3IgKDsgbnVtICE9PSAwOyBudW0gPSBudW0gPj4+IDEpIHtcbiAgICBpZiAobnVtICYgMSkge1xuICAgICAgcHJvZHVjdCA9IGFkZEJpZ0ludChwcm9kdWN0LCBiVG9UaGVQb3dlcik7XG4gICAgfVxuICAgIGJUb1RoZVBvd2VyID0gYWRkQmlnSW50KGJUb1RoZVBvd2VyLCBiVG9UaGVQb3dlcik7XG4gIH1cbiAgcmV0dXJuIHByb2R1Y3Q7XG59XG5cbmZ1bmN0aW9uIHV0ZjhFbmNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZW5jb2RlZCA9IFwiXCI7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IGNvZGVQb2ludCA9IHN0ci5jaGFyQ29kZUF0KGluZGV4KTtcblxuICAgIC8vIGRlY29kZSBzdXJyb2dhdGVcbiAgICAvLyBzZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgaWYgKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGJmZiAmJiBzdHIubGVuZ3RoID4gaW5kZXggKyAxKSB7XG4gICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpbmRleCArIDEpO1xuICAgICAgaWYgKGxvdyA+PSAweGRjMDAgJiYgbG93IDw9IDB4ZGZmZikge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb2RlUG9pbnQgPSAoKGNvZGVQb2ludCAtIDB4ZDgwMCkgPDwgMTApICsgbG93IC0gMHhkYzAwICsgMHgxMDAwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50IDw9IDB4N2YpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4N2ZmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gNikgJiAweDFmKSB8IDB4YzAsIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoY29kZVBvaW50ID4+IDEyKSB8IDB4ZTAsXG4gICAgICAgICgoY29kZVBvaW50ID4+IDYpICYgMHgzZikgfCAweDgwLFxuICAgICAgICAoY29kZVBvaW50ICYgMHgzZikgfCAweDgwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4MWZmZmZmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICgoY29kZVBvaW50ID4+IDE4KSAmIDB4MDcpIHwgMHhmMCxcbiAgICAgICAgKChjb2RlUG9pbnQgPj4gMTIpICYgMHgzZikgfCAweDgwLFxuICAgICAgICAoKGNvZGVQb2ludCA+PiA2KSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKGNvZGVQb2ludCAmIDB4M2YpIHwgMHg4MFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5jb2RlZDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgSTE4bk1lc3NhZ2VzQnlJZCwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5cbmNvbnN0IF9WRVJTSU9OID0gXCIxLjJcIjtcbmNvbnN0IF9YTUxOUyA9IFwidXJuOm9hc2lzOm5hbWVzOnRjOnhsaWZmOmRvY3VtZW50OjEuMlwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwieFwiO1xuY29uc3QgX0ZJTEVfVEFHID0gXCJmaWxlXCI7XG5jb25zdCBfU09VUkNFX1RBRyA9IFwic291cmNlXCI7XG5jb25zdCBfVEFSR0VUX1RBRyA9IFwidGFyZ2V0XCI7XG5jb25zdCBfVU5JVF9UQUcgPSBcInRyYW5zLXVuaXRcIjtcbmNvbnN0IF9DT05URVhUX0dST1VQX1RBRyA9IFwiY29udGV4dC1ncm91cFwiO1xuY29uc3QgX0NPTlRFWFRfVEFHID0gXCJjb250ZXh0XCI7XG5jb25zdCBfREVGQVVMVF9TT1VSQ0VfTEFORyA9IFwiZW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmTG9hZFRvSTE4bihjb250ZW50OiBzdHJpbmcpOiBJMThuTWVzc2FnZXNCeUlkIHtcbiAgLy8geGxpZmYgdG8geG1sIG5vZGVzXG4gIGNvbnN0IHhsaWZmUGFyc2VyID0gbmV3IFhsaWZmUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzfSA9IHhsaWZmUGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIC8vIHhtbCBub2RlcyB0byBpMThuIG1lc3NhZ2VzXG4gIGNvbnN0IGkxOG5NZXNzYWdlc0J5SWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9O1xuICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgWG1sVG9JMThuKCk7XG5cbiAgT2JqZWN0LmtleXMobXNnSWRUb0h0bWwpLmZvckVhY2gobXNnSWQgPT4ge1xuICAgIGNvbnN0IHtpMThuTm9kZXMsIGVycm9yczogZX0gPSBjb252ZXJ0ZXIuY29udmVydChtc2dJZFRvSHRtbFttc2dJZF0pO1xuICAgIGVycm9ycy5wdXNoKC4uLmUpO1xuICAgIGkxOG5NZXNzYWdlc0J5SWRbbXNnSWRdID0gaTE4bk5vZGVzO1xuICB9KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4gaTE4bk1lc3NhZ2VzQnlJZDtcbn1cblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geGxpZmZMb2FkVG9YbWwoY29udGVudDogc3RyaW5nKTogWG1sTWVzc2FnZXNCeUlkIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IEh0bWxUb1htbFBhcnNlcihfVU5JVF9UQUcpO1xuICBjb25zdCB7eG1sTWVzc2FnZXNCeUlkLCBlcnJvcnN9ID0gcGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiB4bWxNZXNzYWdlc0J5SWQ7XG59XG5cbi8vIGh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3YxLjIvb3MveGxpZmYtY29yZS5odG1sXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL3hsaWZmLXByb2ZpbGUtaHRtbC94bGlmZi1wcm9maWxlLWh0bWwtMS4yLmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzPzogeG1sLk5vZGVbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgV3JpdGVWaXNpdG9yKCk7XG4gIGNvbnN0IHRyYW5zVW5pdHM6IHhtbC5Ob2RlW10gPSBleGlzdGluZ05vZGVzICYmIGV4aXN0aW5nTm9kZXMubGVuZ3RoID8gW25ldyB4bWwuQ1IoNiksIC4uLmV4aXN0aW5nTm9kZXNdIDogW107XG5cbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICBjb25zdCBjb250ZXh0VGFnczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRHcm91cFRhZyA9IG5ldyB4bWwuVGFnKF9DT05URVhUX0dST1VQX1RBRywge3B1cnBvc2U6IFwibG9jYXRpb25cIn0pO1xuICAgICAgY29udGV4dEdyb3VwVGFnLmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoMTApLFxuICAgICAgICBuZXcgeG1sLlRhZyhfQ09OVEVYVF9UQUcsIHtcImNvbnRleHQtdHlwZVwiOiBcInNvdXJjZWZpbGVcIn0sIFtuZXcgeG1sLlRleHQoc291cmNlLmZpbGVQYXRoKV0pLFxuICAgICAgICBuZXcgeG1sLkNSKDEwKSxcbiAgICAgICAgbmV3IHhtbC5UYWcoX0NPTlRFWFRfVEFHLCB7XCJjb250ZXh0LXR5cGVcIjogXCJsaW5lbnVtYmVyXCJ9LCBbbmV3IHhtbC5UZXh0KGAke3NvdXJjZS5zdGFydExpbmV9YCldKSxcbiAgICAgICAgbmV3IHhtbC5DUig4KVxuICAgICAgKTtcbiAgICAgIGNvbnRleHRUYWdzLnB1c2gobmV3IHhtbC5DUig4KSwgY29udGV4dEdyb3VwVGFnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRyYW5zVW5pdCA9IG5ldyB4bWwuVGFnKF9VTklUX1RBRywge2lkOiBtZXNzYWdlLmlkLCBkYXRhdHlwZTogXCJodG1sXCJ9KTtcbiAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIHZpc2l0b3Iuc2VyaWFsaXplKG1lc3NhZ2Uubm9kZXMpKSxcbiAgICAgIC4uLmNvbnRleHRUYWdzXG4gICAgKTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uKSB7XG4gICAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgbmV3IHhtbC5UYWcoXCJub3RlXCIsIHtwcmlvcml0eTogXCIxXCIsIGZyb206IFwiZGVzY3JpcHRpb25cIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5kZXNjcmlwdGlvbildKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgbmV3IHhtbC5UYWcoXCJub3RlXCIsIHtwcmlvcml0eTogXCIxXCIsIGZyb206IFwibWVhbmluZ1wifSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLm1lYW5pbmcpXSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSk7XG5cbiAgICB0cmFuc1VuaXRzLnB1c2gobmV3IHhtbC5DUig2KSwgdHJhbnNVbml0KTtcbiAgfSk7XG5cbiAgY29uc3QgYm9keSA9IG5ldyB4bWwuVGFnKFwiYm9keVwiLCB7fSwgWy4uLnRyYW5zVW5pdHMsIG5ldyB4bWwuQ1IoNCldKTtcbiAgY29uc3QgZmlsZSA9IG5ldyB4bWwuVGFnKFxuICAgIFwiZmlsZVwiLFxuICAgIHtcbiAgICAgIFwic291cmNlLWxhbmd1YWdlXCI6IGxvY2FsZSB8fCBfREVGQVVMVF9TT1VSQ0VfTEFORyxcbiAgICAgIGRhdGF0eXBlOiBcInBsYWludGV4dFwiLFxuICAgICAgb3JpZ2luYWw6IFwibmcyLnRlbXBsYXRlXCJcbiAgICB9LFxuICAgIFtuZXcgeG1sLkNSKDQpLCBib2R5LCBuZXcgeG1sLkNSKDIpXVxuICApO1xuICBjb25zdCB4bGlmZiA9IG5ldyB4bWwuVGFnKFwieGxpZmZcIiwge3ZlcnNpb246IF9WRVJTSU9OLCB4bWxuczogX1hNTE5TfSwgW25ldyB4bWwuQ1IoMiksIGZpbGUsIG5ldyB4bWwuQ1IoKV0pO1xuXG4gIHJldHVybiB4bWwuc2VyaWFsaXplKFtuZXcgeG1sLkRlY2xhcmF0aW9uKHt2ZXJzaW9uOiBcIjEuMFwiLCBlbmNvZGluZzogXCJVVEYtOFwifSksIG5ldyB4bWwuQ1IoKSwgeGxpZmYsIG5ldyB4bWwuQ1IoKV0pO1xufVxuXG5leHBvcnQgY29uc3QgeGxpZmZEaWdlc3QgPSBkaWdlc3Q7XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHhsaWZmIGZpbGVcbmNsYXNzIFhsaWZmUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX3VuaXRNbFN0cmluZzogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSBfbXNnSWRUb0h0bWw6IHtbbXNnSWQ6IHN0cmluZ106IHN0cmluZ307XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gbnVsbDtcbiAgICB0aGlzLl9tc2dJZFRvSHRtbCA9IHt9O1xuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShjb250ZW50LCBcIlwiLCBmYWxzZSk7XG4gICAgdGhpcy5fZXJyb3JzID0gcGFyc2VyLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVU5JVF9UQUc6XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGwhO1xuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19VTklUX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gaWRBdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl9tc2dJZFRvSHRtbC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBEdXBsaWNhdGVkIHRyYW5zbGF0aW9ucyBmb3IgbXNnICR7aWR9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl91bml0TWxTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gdGhpcy5fdW5pdE1sU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYE1lc3NhZ2UgJHtpZH0gbWlzc2VzIGEgdHJhbnNsYXRpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1NPVVJDRV9UQUc6XG4gICAgICAgIC8vIGlnbm9yZSBzb3VyY2UgbWVzc2FnZVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVEFSR0VUX1RBRzpcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0U3RhcnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuZW5kLm9mZnNldDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuc3RhcnQuZmlsZS5jb250ZW50O1xuICAgICAgICBjb25zdCBpbm5lclRleHQgPSBjb250ZW50LnNsaWNlKGlubmVyVGV4dFN0YXJ0LCBpbm5lclRleHRFbmQpO1xuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBpbm5lclRleHQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9GSUxFX1RBRzpcbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUT0RPKHZpY2IpOiBhc3NlcnQgZmlsZSBzdHJ1Y3R1cmUsIHhsaWZmIHZlcnNpb25cbiAgICAgICAgLy8gRm9yIG5vdyBvbmx5IHJlY3Vyc2Ugb24gdW5oYW5kbGVkIG5vZGVzXG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeGxpZmYgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UobWVzc2FnZSwgXCJcIiwgdHJ1ZSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9XG4gICAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogbWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLlBsYWNlaG9sZGVyIHwgbnVsbCB7XG4gICAgaWYgKGVsLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgIGlmIChuYW1lQXR0cikge1xuICAgICAgICByZXR1cm4gbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4hKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKVxuICAgIH07XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuY2xhc3MgV3JpdGVWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgY3R5cGUgPSBnZXRDdHlwZUZvclRhZyhwaC50YWcpO1xuXG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgLy8gdm9pZCB0YWdzIGhhdmUgbm8gY2hpbGRyZW4gbm9yIGNsb3NpbmcgdGFnc1xuICAgICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7aWQ6IHBoLnN0YXJ0TmFtZSwgY3R5cGUsIFwiZXF1aXYtdGV4dFwiOiBgPCR7cGgudGFnfS8+YH0pXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwke3BoLnRhZ30+YH0pO1xuICAgIGNvbnN0IGNsb3NlVGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7aWQ6IHBoLmNsb3NlTmFtZSwgY3R5cGUsIFwiZXF1aXYtdGV4dFwiOiBgPC8ke3BoLnRhZ30+YH0pO1xuXG4gICAgcmV0dXJuIFtzdGFydFRhZ1BoLCAuLi50aGlzLnNlcmlhbGl6ZShwaC5jaGlsZHJlbiksIGNsb3NlVGFnUGhdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5uYW1lLCBcImVxdWl2LXRleHRcIjogYHt7JHtwaC52YWx1ZX19fWB9KV07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgZXF1aXZUZXh0ID0gYHske3BoLnZhbHVlLmV4cHJlc3Npb259LCAke3BoLnZhbHVlLnR5cGV9LCAke09iamVjdC5rZXlzKHBoLnZhbHVlLmNhc2VzKVxuICAgICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyBcIiB7Li4ufVwiKVxuICAgICAgLmpvaW4oXCIgXCIpfX1gO1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5uYW1lLCBcImVxdWl2LXRleHRcIjogZXF1aXZUZXh0fSldO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4ubm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN0eXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJiclwiOlxuICAgICAgcmV0dXJuIFwibGJcIjtcbiAgICBjYXNlIFwiaW1nXCI6XG4gICAgICByZXR1cm4gXCJpbWFnZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYHgtJHt0YWd9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldFhtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QveG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7SHRtbFRvWG1sUGFyc2VyLCBJMThuTWVzc2FnZXNCeUlkLCBYbWxNZXNzYWdlc0J5SWR9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7ZGVjaW1hbERpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5cbmNvbnN0IF9WRVJTSU9OID0gXCIyLjBcIjtcbmNvbnN0IF9YTUxOUyA9IFwidXJuOm9hc2lzOm5hbWVzOnRjOnhsaWZmOmRvY3VtZW50OjIuMFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRyA9IFwicGNcIjtcbmNvbnN0IF9YTElGRl9UQUcgPSBcInhsaWZmXCI7XG5jb25zdCBfU09VUkNFX1RBRyA9IFwic291cmNlXCI7XG5jb25zdCBfVEFSR0VUX1RBRyA9IFwidGFyZ2V0XCI7XG5jb25zdCBfVU5JVF9UQUcgPSBcInVuaXRcIjtcbmNvbnN0IF9OT1RFU19UQUcgPSBcIm5vdGVzXCI7XG5jb25zdCBfTk9URV9UQUcgPSBcIm5vdGVcIjtcbmNvbnN0IF9TRUdNRU5UX1RBRyA9IFwic2VnbWVudFwiO1xuY29uc3QgX0ZJTEVfVEFHID0gXCJmaWxlXCI7XG5cbi8vIGh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3hsaWZmLWNvcmUvdjIuMC9vcy94bGlmZi1jb3JlLXYyLjAtb3MuaHRtbFxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZjJQYXJzZXIgPSBuZXcgWGxpZmYyUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzfSA9IHhsaWZmMlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBub2Rlc1xuICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTm9kZXNCeU1zZ0lkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmMiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiBpMThuTm9kZXNCeU1zZ0lkO1xufVxuXG4vLyB1c2VkIHRvIG1lcmdlIHRyYW5zbGF0aW9ucyB3aGVuIGV4dHJhY3RpbmdcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9YbWwoY29udGVudDogc3RyaW5nKTogWG1sTWVzc2FnZXNCeUlkIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IEh0bWxUb1htbFBhcnNlcihfVU5JVF9UQUcpO1xuICBjb25zdCB7eG1sTWVzc2FnZXNCeUlkLCBlcnJvcnN9ID0gcGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyV3JpdGUobWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBsb2NhbGU6IHN0cmluZyB8IG51bGwsIGV4aXN0aW5nTm9kZXM/OiB4bWwuTm9kZVtdKTogc3RyaW5nIHtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBXcml0ZVZpc2l0b3IoKTtcbiAgY29uc3QgdW5pdHM6IHhtbC5Ob2RlW10gPSBleGlzdGluZ05vZGVzICYmIGV4aXN0aW5nTm9kZXMubGVuZ3RoID8gW25ldyB4bWwuQ1IoNCksIC4uLmV4aXN0aW5nTm9kZXNdIDogW107XG5cbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICBjb25zdCB1bml0ID0gbmV3IHhtbC5UYWcoX1VOSVRfVEFHLCB7aWQ6IG1lc3NhZ2UuaWR9KTtcbiAgICBjb25zdCBub3RlcyA9IG5ldyB4bWwuVGFnKF9OT1RFU19UQUcpO1xuXG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gfHwgbWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgbmV3IHhtbC5UYWcoX05PVEVfVEFHLCB7Y2F0ZWdvcnk6IFwiZGVzY3JpcHRpb25cIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5kZXNjcmlwdGlvbildKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJtZWFuaW5nXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UubWVhbmluZyldKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcImxvY2F0aW9uXCJ9LCBbXG4gICAgICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICAgICAgYCR7c291cmNlLmZpbGVQYXRofToke3NvdXJjZS5zdGFydExpbmV9JHtzb3VyY2UuZW5kTGluZSAhPT0gc291cmNlLnN0YXJ0TGluZSA/IFwiLFwiICsgc291cmNlLmVuZExpbmUgOiBcIlwifWBcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgbm90ZXMuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpKTtcbiAgICB1bml0LmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSwgbm90ZXMpO1xuXG4gICAgY29uc3Qgc2VnbWVudCA9IG5ldyB4bWwuVGFnKF9TRUdNRU5UX1RBRyk7XG5cbiAgICBzZWdtZW50LmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig4KSwgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCB2aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKSksIG5ldyB4bWwuQ1IoNikpO1xuXG4gICAgdW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNiksIHNlZ21lbnQsIG5ldyB4bWwuQ1IoNCkpO1xuXG4gICAgdW5pdHMucHVzaChuZXcgeG1sLkNSKDQpLCB1bml0KTtcbiAgfSk7XG5cbiAgY29uc3QgZmlsZSA9IG5ldyB4bWwuVGFnKF9GSUxFX1RBRywge29yaWdpbmFsOiBcIm5nLnRlbXBsYXRlXCIsIGlkOiBcIm5naTE4blwifSwgWy4uLnVuaXRzLCBuZXcgeG1sLkNSKDIpXSk7XG5cbiAgY29uc3QgeGxpZmYgPSBuZXcgeG1sLlRhZyhfWExJRkZfVEFHLCB7dmVyc2lvbjogX1ZFUlNJT04sIHhtbG5zOiBfWE1MTlMsIHNyY0xhbmc6IGxvY2FsZSB8fCBfREVGQVVMVF9TT1VSQ0VfTEFOR30sIFtcbiAgICBuZXcgeG1sLkNSKDIpLFxuICAgIGZpbGUsXG4gICAgbmV3IHhtbC5DUigpXG4gIF0pO1xuXG4gIHJldHVybiB4bWwuc2VyaWFsaXplKFtuZXcgeG1sLkRlY2xhcmF0aW9uKHt2ZXJzaW9uOiBcIjEuMFwiLCBlbmNvZGluZzogXCJVVEYtOFwifSksIG5ldyB4bWwuQ1IoKSwgeGxpZmYsIG5ldyB4bWwuQ1IoKV0pO1xufVxuXG5leHBvcnQgY29uc3QgeGxpZmYyRGlnZXN0ID0gZGVjaW1hbERpZ2VzdDtcblxuLy8gRXh0cmFjdCBtZXNzYWdlcyBhcyB4bWwgbm9kZXMgZnJvbSB0aGUgeGxpZmYgZmlsZVxuY2xhc3MgWGxpZmYyUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX3VuaXRNbFN0cmluZzogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSBfbXNnSWRUb0h0bWw6IHtbbXNnSWQ6IHN0cmluZ106IHN0cmluZ307XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gbnVsbDtcbiAgICB0aGlzLl9tc2dJZFRvSHRtbCA9IHt9O1xuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShjb250ZW50LCBcIlwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9lcnJvcnMgPSBwYXJzZXIuZXJyb3JzO1xuICAgIG1sLnZpc2l0QWxsKHRoaXMsIHBhcnNlci5yb290Tm9kZXMsIG51bGwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZ0lkVG9IdG1sOiB0aGlzLl9tc2dJZFRvSHRtbCxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIF9VTklUX1RBRzpcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gbnVsbDtcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVU5JVF9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdW5pdE1sU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IHRoaXMuX3VuaXRNbFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBNZXNzYWdlICR7aWR9IG1pc3NlcyBhIHRyYW5zbGF0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9TT1VSQ0VfVEFHOlxuICAgICAgICAvLyBpZ25vcmUgc291cmNlIG1lc3NhZ2VcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RBUkdFVF9UQUc6XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCwgaW5uZXJUZXh0RW5kKTtcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gaW5uZXJUZXh0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfWExJRkZfVEFHOlxuICAgICAgICBjb25zdCB2ZXJzaW9uQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJ2ZXJzaW9uXCIpO1xuICAgICAgICBpZiAodmVyc2lvbkF0dHIpIHtcbiAgICAgICAgICBjb25zdCB2ZXJzaW9uID0gdmVyc2lvbkF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHZlcnNpb24gIT09IFwiMi4wXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBUaGUgWExJRkYgZmlsZSB2ZXJzaW9uICR7dmVyc2lvbn0gaXMgbm90IGNvbXBhdGlibGUgd2l0aCBYTElGRiAyLjAgc2VyaWFsaXplcmApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeGxpZmYgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UobWVzc2FnZSwgXCJcIiwgdHJ1ZSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9XG4gICAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogW10uY29uY2F0KC4uLm1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpMThuTm9kZXMsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBpMThuLlRleHQodGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlW10gfCBudWxsIHtcbiAgICBzd2l0Y2ggKGVsLm5hbWUpIHtcbiAgICAgIGNhc2UgX1BMQUNFSE9MREVSX1RBRzpcbiAgICAgICAgY29uc3QgbmFtZUF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2XCIpO1xuICAgICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgICByZXR1cm4gW25ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuKV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYDwke19QTEFDRUhPTERFUl9UQUd9PiBtaXNzZXMgdGhlIFwiZXF1aXZcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUc6XG4gICAgICAgIGNvbnN0IHN0YXJ0QXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiZXF1aXZTdGFydFwiKTtcbiAgICAgICAgY29uc3QgZW5kQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiZXF1aXZFbmRcIik7XG5cbiAgICAgICAgaWYgKCFzdGFydEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYDwke19QTEFDRUhPTERFUl9UQUd9PiBtaXNzZXMgdGhlIFwiZXF1aXZTdGFydFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2UgaWYgKCFlbmRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2RW5kXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJZCA9IHN0YXJ0QXR0ci52YWx1ZTtcbiAgICAgICAgICBjb25zdCBlbmRJZCA9IGVuZEF0dHIudmFsdWU7XG5cbiAgICAgICAgICBjb25zdCBub2RlczogaTE4bi5Ob2RlW10gPSBbXTtcblxuICAgICAgICAgIHJldHVybiBub2Rlcy5jb25jYXQoXG4gICAgICAgICAgICBuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBzdGFydElkLCBlbC5zb3VyY2VTcGFuKSxcbiAgICAgICAgICAgIC4uLmVsLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcywgbnVsbCkpLFxuICAgICAgICAgICAgbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgZW5kSWQsIGVsLnNvdXJjZVNwYW4pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBjYXNlTWFwOiB7W3ZhbHVlOiBzdHJpbmddOiBpMThuLk5vZGV9ID0ge307XG5cbiAgICBtbC52aXNpdEFsbCh0aGlzLCBpY3UuY2FzZXMpLmZvckVhY2goKGM6IGFueSkgPT4ge1xuICAgICAgY2FzZU1hcFtjLnZhbHVlXSA9IG5ldyBpMThuLkNvbnRhaW5lcihjLm5vZGVzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uSWN1KGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGNhc2VNYXAsIGljdS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaWN1Q2FzZS52YWx1ZSxcbiAgICAgIG5vZGVzOiBbXS5jb25jYXQoLi4ubWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKSlcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuY2xhc3MgV3JpdGVWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfbmV4dFBsYWNlaG9sZGVySWQ6IG51bWJlcjtcblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRleHQodGV4dC52YWx1ZSldO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW107XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKG5vZGU6IGkxOG4uTm9kZSkgPT4gbm9kZXMucHVzaCguLi5ub2RlLnZpc2l0KHRoaXMpKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzID0gW25ldyB4bWwuVGV4dChgeyR7aWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcn0sICR7aWN1LnR5cGV9LCBgKV07XG5cbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goKGM6IHN0cmluZykgPT4ge1xuICAgICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYCR7Y30ge2ApLCAuLi5pY3UuY2FzZXNbY10udmlzaXQodGhpcyksIG5ldyB4bWwuVGV4dChgfSBgKSk7XG4gICAgfSk7XG5cbiAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgfWApKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCB0eXBlID0gZ2V0VHlwZUZvclRhZyhwaC50YWcpO1xuXG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgY29uc3QgdGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKSxcbiAgICAgICAgZXF1aXY6IHBoLnN0YXJ0TmFtZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGlzcDogYDwke3BoLnRhZ30vPmBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFt0YWdQaF07XG4gICAgfVxuXG4gICAgY29uc3QgdGFnUGMgPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfU1BBTk5JTkdfVEFHLCB7XG4gICAgICBpZDogKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCksXG4gICAgICBlcXVpdlN0YXJ0OiBwaC5zdGFydE5hbWUsXG4gICAgICBlcXVpdkVuZDogcGguY2xvc2VOYW1lLFxuICAgICAgdHlwZSxcbiAgICAgIGRpc3BTdGFydDogYDwke3BoLnRhZ30+YCxcbiAgICAgIGRpc3BFbmQ6IGA8LyR7cGgudGFnfT5gXG4gICAgfSk7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXS5jb25jYXQoLi4ucGguY2hpbGRyZW4ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgIG5vZGVzLmZvckVhY2goKG5vZGU6IHhtbC5Ob2RlKSA9PiB0YWdQYy5jaGlsZHJlbi5wdXNoKG5vZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnUGMuY2hpbGRyZW4ucHVzaChuZXcgeG1sLlRleHQoXCJcIikpO1xuICAgIH1cblxuICAgIHJldHVybiBbdGFnUGNdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGlkU3RyID0gKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtcbiAgICAgICAgaWQ6IGlkU3RyLFxuICAgICAgICBlcXVpdjogcGgubmFtZSxcbiAgICAgICAgZGlzcDogYHt7JHtwaC52YWx1ZX19fWBcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBjYXNlcyA9IE9iamVjdC5rZXlzKHBoLnZhbHVlLmNhc2VzKVxuICAgICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyBcIiB7Li4ufVwiKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGNvbnN0IGlkU3RyID0gKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtcbiAgICAgICAgaWQ6IGlkU3RyLFxuICAgICAgICBlcXVpdjogcGgubmFtZSxcbiAgICAgICAgZGlzcDogYHske3BoLnZhbHVlLmV4cHJlc3Npb259LCAke3BoLnZhbHVlLnR5cGV9LCAke2Nhc2VzfX1gXG4gICAgICB9KVxuICAgIF07XG4gIH1cblxuICBzZXJpYWxpemUobm9kZXM6IGkxOG4uTm9kZVtdKTogeG1sLk5vZGVbXSB7XG4gICAgdGhpcy5fbmV4dFBsYWNlaG9sZGVySWQgPSAwO1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4ubm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVGb3JUYWcodGFnOiBzdHJpbmcpOiBzdHJpbmcge1xuICBzd2l0Y2ggKHRhZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSBcImJyXCI6XG4gICAgY2FzZSBcImJcIjpcbiAgICBjYXNlIFwiaVwiOlxuICAgIGNhc2UgXCJ1XCI6XG4gICAgICByZXR1cm4gXCJmbXRcIjtcbiAgICBjYXNlIFwiaW1nXCI6XG4gICAgICByZXR1cm4gXCJpbWFnZVwiO1xuICAgIGNhc2UgXCJhXCI6XG4gICAgICByZXR1cm4gXCJsaW5rXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIm90aGVyXCI7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7ZGVjaW1hbERpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgUGxhY2Vob2xkZXJNYXBwZXIsIFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyLCBYbWxNZXNzYWdlc0J5SWR9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcblxuY29uc3QgX01FU1NBR0VTX1RBRyA9IFwibWVzc2FnZWJ1bmRsZVwiO1xuY29uc3QgX01FU1NBR0VfVEFHID0gXCJtc2dcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSBcInBoXCI7XG5jb25zdCBfRVhFTVBMRV9UQUcgPSBcImV4XCI7XG5jb25zdCBfU09VUkNFX1RBRyA9IFwic291cmNlXCI7XG5cbmNvbnN0IF9ET0NUWVBFID0gYDwhRUxFTUVOVCBtZXNzYWdlYnVuZGxlIChtc2cpKj5cbjwhQVRUTElTVCBtZXNzYWdlYnVuZGxlIGNsYXNzIENEQVRBICNJTVBMSUVEPlxuXG48IUVMRU1FTlQgbXNnICgjUENEQVRBfHBofHNvdXJjZSkqPlxuPCFBVFRMSVNUIG1zZyBpZCBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgc2VxIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBuYW1lIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBkZXNjIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBtZWFuaW5nIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBvYnNvbGV0ZSAob2Jzb2xldGUpICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyB4bWw6c3BhY2UgKGRlZmF1bHR8cHJlc2VydmUpIFwiZGVmYXVsdFwiPlxuPCFBVFRMSVNUIG1zZyBpc19oaWRkZW4gQ0RBVEEgI0lNUExJRUQ+XG5cbjwhRUxFTUVOVCBzb3VyY2UgKCNQQ0RBVEEpPlxuXG48IUVMRU1FTlQgcGggKCNQQ0RBVEF8ZXgpKj5cbjwhQVRUTElTVCBwaCBuYW1lIENEQVRBICNSRVFVSVJFRD5cblxuPCFFTEVNRU5UIGV4ICgjUENEQVRBKT5gO1xuXG4vLyB1c2VkIHRvIG1lcmdlIHRyYW5zbGF0aW9ucyB3aGVuIGV4dHJhY3RpbmdcbmV4cG9ydCBmdW5jdGlvbiB4bWJMb2FkVG9YbWwoY29udGVudDogc3RyaW5nKTogWG1sTWVzc2FnZXNCeUlkIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IEh0bWxUb1htbFBhcnNlcihfTUVTU0FHRV9UQUcpO1xuICBjb25zdCB7eG1sTWVzc2FnZXNCeUlkLCBlcnJvcnN9ID0gcGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bWIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geG1iV3JpdGUobWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBsb2NhbGU6IHN0cmluZyB8IG51bGwsIGV4aXN0aW5nTm9kZXM6IHhtbC5Ob2RlW10gPSBbXSk6IHN0cmluZyB7XG4gIGNvbnN0IGV4YW1wbGVWaXNpdG9yID0gbmV3IEV4YW1wbGVWaXNpdG9yKCk7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgVmlzaXRvcigpO1xuICBjb25zdCByb290Tm9kZSA9IG5ldyB4bWwuVGFnKF9NRVNTQUdFU19UQUcpO1xuXG4gIGV4aXN0aW5nTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICByb290Tm9kZS5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoMiksIG5vZGUpO1xuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhleGlzdGluZ05vZGVzKTtcbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICBjb25zdCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge2lkOiBtZXNzYWdlLmlkfTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uKSB7XG4gICAgICBhdHRyc1tcImRlc2NcIl0gPSBtZXNzYWdlLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm1lYW5pbmcpIHtcbiAgICAgIGF0dHJzW1wibWVhbmluZ1wiXSA9IG1lc3NhZ2UubWVhbmluZztcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VUYWdzOiB4bWwuVGFnW10gPSBbXTtcbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBzb3VyY2VUYWdzLnB1c2goXG4gICAgICAgIG5ldyB4bWwuVGFnKF9TT1VSQ0VfVEFHLCB7fSwgW1xuICAgICAgICAgIG5ldyB4bWwuVGV4dChcbiAgICAgICAgICAgIGAke3NvdXJjZS5maWxlUGF0aH06JHtzb3VyY2Uuc3RhcnRMaW5lfSR7c291cmNlLmVuZExpbmUgIT09IHNvdXJjZS5zdGFydExpbmUgPyBcIixcIiArIHNvdXJjZS5lbmRMaW5lIDogXCJcIn1gXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgeG1sLkNSKDIpLFxuICAgICAgbmV3IHhtbC5UYWcoX01FU1NBR0VfVEFHLCBhdHRycywgWy4uLnNvdXJjZVRhZ3MsIC4uLnZpc2l0b3Iuc2VyaWFsaXplKG1lc3NhZ2Uubm9kZXMpXSlcbiAgICApO1xuICB9KTtcblxuICByb290Tm9kZS5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoKSk7XG5cbiAgcmV0dXJuIHhtbC5zZXJpYWxpemUoW1xuICAgIG5ldyB4bWwuRGVjbGFyYXRpb24oe3ZlcnNpb246IFwiMS4wXCIsIGVuY29kaW5nOiBcIlVURi04XCJ9KSxcbiAgICBuZXcgeG1sLkNSKCksXG4gICAgbmV3IHhtbC5Eb2N0eXBlKF9NRVNTQUdFU19UQUcsIF9ET0NUWVBFKSxcbiAgICBuZXcgeG1sLkNSKCksXG4gICAgZXhhbXBsZVZpc2l0b3IuYWRkRGVmYXVsdEV4YW1wbGVzKHJvb3ROb2RlKSxcbiAgICBuZXcgeG1sLkNSKClcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4bWJEaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGRpZ2VzdChtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtYk1hcHBlcihtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBQbGFjZWhvbGRlck1hcHBlciB7XG4gIHJldHVybiBuZXcgU2ltcGxlUGxhY2Vob2xkZXJNYXBwZXIobWVzc2FnZSwgdG9QdWJsaWNOYW1lKTtcbn1cblxuY2xhc3MgVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgc3RhcnRFeCA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtuZXcgeG1sLlRleHQoYDwke3BoLnRhZ30+YCldKTtcbiAgICBjb25zdCBzdGFydFRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLnN0YXJ0TmFtZX0sIFtzdGFydEV4XSk7XG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgLy8gdm9pZCB0YWdzIGhhdmUgbm8gY2hpbGRyZW4gbm9yIGNsb3NpbmcgdGFnc1xuICAgICAgcmV0dXJuIFtzdGFydFRhZ1BoXTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZUV4ID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW25ldyB4bWwuVGV4dChgPC8ke3BoLnRhZ30+YCldKTtcbiAgICBjb25zdCBjbG9zZVRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLmNsb3NlTmFtZX0sIFtjbG9zZUV4XSk7XG5cbiAgICByZXR1cm4gW3N0YXJ0VGFnUGgsIC4uLnRoaXMuc2VyaWFsaXplKHBoLmNoaWxkcmVuKSwgY2xvc2VUYWdQaF07XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgZXhUYWcgPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbbmV3IHhtbC5UZXh0KGB7eyR7cGgudmFsdWV9fX1gKV0pO1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLm5hbWV9LCBbZXhUYWddKV07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgZXhUYWcgPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbXG4gICAgICBuZXcgeG1sLlRleHQoXG4gICAgICAgIGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgICAgICAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZSArIFwiIHsuLi59XCIpXG4gICAgICAgICAgLmpvaW4oXCIgXCIpfX1gXG4gICAgICApXG4gICAgXSk7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGgubmFtZX0sIFtleFRhZ10pXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBkZWNpbWFsRGlnZXN0KG1lc3NhZ2UpO1xufVxuXG4vLyBUQyByZXF1aXJlcyBhdCBsZWFzdCBvbmUgbm9uLWVtcHR5IGV4YW1wbGUgb24gcGxhY2Vob2xkZXJzXG5jbGFzcyBFeGFtcGxlVmlzaXRvciBpbXBsZW1lbnRzIHhtbC5JVmlzaXRvciB7XG4gIGFkZERlZmF1bHRFeGFtcGxlcyhub2RlOiB4bWwuTm9kZSk6IHhtbC5Ob2RlIHtcbiAgICBub2RlLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUYWcodGFnOiB4bWwuVGFnKTogdm9pZCB7XG4gICAgaWYgKHRhZy5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBpZiAoIXRhZy5jaGlsZHJlbiB8fCB0YWcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4VGV4dCA9IG5ldyB4bWwuVGV4dCh0YWcuYXR0cnNbXCJuYW1lXCJdIHx8IFwiLi4uXCIpO1xuICAgICAgICB0YWcuY2hpbGRyZW4gPSBbbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW2V4VGV4dF0pXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhZy5jaGlsZHJlbikge1xuICAgICAgdGFnLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCk6IGFueSB7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBlbGVtZW50LmF0dHJzLmZvckVhY2goKGF0dHI6IG1sLkF0dHJpYnV0ZSkgPT4ge1xuICAgICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgdGFnID0gbmV3IHhtbC5UYWcoZWxlbWVudC5uYW1lLCBhdHRycywgZWxlbWVudC5jaGlsZHJlbiBhcyBhbnkpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0VGFnKHRhZyk7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogeG1sLlRleHQpOiB2b2lkIHt9XG5cbiAgdmlzaXREZWNsYXJhdGlvbihkZWNsOiB4bWwuRGVjbGFyYXRpb24pOiB2b2lkIHt9XG5cbiAgdmlzaXREb2N0eXBlKGRvY3R5cGU6IHhtbC5Eb2N0eXBlKTogdm9pZCB7fVxufVxuXG4vLyBYTUIvWFRCIHBsYWNlaG9sZGVycyBjYW4gb25seSBjb250YWluIEEtWiwgMC05IGFuZCBfXG5leHBvcnQgZnVuY3Rpb24gdG9QdWJsaWNOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGludGVybmFsTmFtZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05X10vZywgXCJfXCIpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5pbXBvcnQge3htYk1hcHBlcn0gZnJvbSBcIi4veG1iXCI7XG5cbmNvbnN0IF9UUkFOU0xBVElPTlNfVEFHID0gXCJ0cmFuc2xhdGlvbmJ1bmRsZVwiO1xuY29uc3QgX1RSQU5TTEFUSU9OX1RBRyA9IFwidHJhbnNsYXRpb25cIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSBcInBoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4dGJMb2FkVG9JMThuKGNvbnRlbnQ6IHN0cmluZyk6IEkxOG5NZXNzYWdlc0J5SWQge1xuICAvLyB4dGIgdG8geG1sIG5vZGVzXG4gIGNvbnN0IHh0YlBhcnNlciA9IG5ldyBYdGJQYXJzZXIoKTtcbiAgY29uc3Qge21zZ0lkVG9IdG1sLCBlcnJvcnM6IHBhcnNlRXJyb3JzfSA9IHh0YlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAocGFyc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4dGIgcGFyc2UgZXJyb3JzOlxcbiR7cGFyc2VFcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIC8vIHhtbCBub2RlcyB0byBpMThuIG5vZGVzXG4gIGNvbnN0IGkxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9O1xuICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgWG1sVG9JMThuKCk7XG5cbiAgLy8gQmVjYXVzZSB3ZSBzaG91bGQgYmUgYWJsZSB0byBsb2FkIHh0YiBmaWxlcyB0aGF0IHJlbHkgb24gZmVhdHVyZXMgbm90IHN1cHBvcnRlZCBieSBhbmd1bGFyLFxuICAvLyB3ZSBuZWVkIHRvIGRlbGF5IHRoZSBjb252ZXJzaW9uIG9mIGh0bWwgdG8gaTE4biBub2RlcyBzbyB0aGF0IG5vbiBhbmd1bGFyIG1lc3NhZ2VzIGFyZSBub3RcbiAgLy8gY29udmVydGVkXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB2YWx1ZUZuID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2kxOG5Ob2RlcywgZXJyb3JzfSA9IGNvbnZlcnRlci5jb252ZXJ0KG1zZ0lkVG9IdG1sW21zZ0lkXSk7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHh0YiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpMThuTm9kZXM7XG4gICAgfTtcbiAgICBjcmVhdGVMYXp5UHJvcGVydHkoaTE4bk5vZGVzQnlNc2dJZCwgbXNnSWQsIHZhbHVlRm4pO1xuICB9KTtcblxuICByZXR1cm4gaTE4bk5vZGVzQnlNc2dJZDtcbn1cblxuZXhwb3J0IGNvbnN0IHh0YkRpZ2VzdCA9IGRpZ2VzdDtcblxuZXhwb3J0IGNvbnN0IHh0Yk1hcHBlciA9IHhtYk1hcHBlcjtcblxuZnVuY3Rpb24gY3JlYXRlTGF6eVByb3BlcnR5KG1lc3NhZ2VzOiBhbnksIGlkOiBzdHJpbmcsIHZhbHVlRm46ICgpID0+IGFueSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVzc2FnZXMsIGlkLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRm4oKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXNzYWdlcywgaWQsIHtlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZX0pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBfID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBvdmVyd3JpdGUgYW4gWFRCIHRyYW5zbGF0aW9uXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHh0YiBmaWxlXG5jbGFzcyBYdGJQYXJzZXIgaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfYnVuZGxlRGVwdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSBfbXNnSWRUb0h0bWw6IHtbbXNnSWQ6IHN0cmluZ106IHN0cmluZ307XG5cbiAgcGFyc2UoeHRiOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idW5kbGVEZXB0aCA9IDA7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIC8vIFdlIGNhbiBub3QgcGFyc2UgdGhlIElDVSBtZXNzYWdlcyBhdCB0aGlzIHBvaW50IGFzIHNvbWUgbWVzc2FnZXMgbWlnaHQgbm90IG9yaWdpbmF0ZVxuICAgIC8vIGZyb20gQW5ndWxhciB0aGF0IGNvdWxkIG5vdCBiZSBsZXgnZC5cbiAgICBjb25zdCB4bWwgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKHh0YiwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5fZXJyb3JzID0geG1sLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCB4bWwucm9vdE5vZGVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVFJBTlNMQVRJT05TX1RBRzpcbiAgICAgICAgdGhpcy5fYnVuZGxlRGVwdGgrKztcbiAgICAgICAgaWYgKHRoaXMuX2J1bmRsZURlcHRoID4gMSkge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVFJBTlNMQVRJT05TX1RBR30+IGVsZW1lbnRzIGNhbiBub3QgYmUgbmVzdGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgIHRoaXMuX2J1bmRsZURlcHRoLS07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9UUkFOU0xBVElPTl9UQUc6XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1RSQU5TTEFUSU9OX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gaWRBdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl9tc2dJZFRvSHRtbC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBEdXBsaWNhdGVkIHRyYW5zbGF0aW9ucyBmb3IgbXNnICR7aWR9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHRFbmQgPSBlbGVtZW50LmVuZFNvdXJjZVNwYW4hLnN0YXJ0Lm9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuc3RhcnQuZmlsZS5jb250ZW50O1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCEsIGlubmVyVGV4dEVuZCEpO1xuICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gaW5uZXJUZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgXCJVbmV4cGVjdGVkIHRhZ1wiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHh0YiBzeW50YXgpIHRvIGkxOG4gbm9kZXNcbmNsYXNzIFhtbFRvSTE4biBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuXG4gIGNvbnZlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeG1sSWN1ID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShtZXNzYWdlLCBcIlwiLCB0cnVlKTtcbiAgICB0aGlzLl9lcnJvcnMgPSB4bWxJY3UuZXJyb3JzO1xuXG4gICAgY29uc3QgaTE4bk5vZGVzID1cbiAgICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPiAwIHx8IHhtbEljdS5yb290Tm9kZXMubGVuZ3RoID09PSAwID8gW10gOiBtbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpMThuTm9kZXMsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBpMThuLlRleHQodGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuISk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgY2FzZU1hcFtjLnZhbHVlXSA9IG5ldyBpMThuLkNvbnRhaW5lcihjLm5vZGVzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uSWN1KGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGNhc2VNYXAsIGljdS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogaWN1Q2FzZS52YWx1ZSxcbiAgICAgIG5vZGVzOiBtbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24pXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5QbGFjZWhvbGRlciB8IG51bGwge1xuICAgIGlmIChlbC5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwibmFtZVwiKTtcbiAgICAgIGlmIChuYW1lQXR0cikge1xuICAgICAgICByZXR1cm4gbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4hKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcIm5hbWVcIiBhdHRyaWJ1dGVgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGBVbmV4cGVjdGVkIHRhZ2ApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1lc3NhZ2UpKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY2xhc3MgUGFyc2VyRXJyb3Ige1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHB1YmxpYyBpbnB1dDogc3RyaW5nLCBwdWJsaWMgZXJyTG9jYXRpb246IHN0cmluZywgcHVibGljIGN0eExvY2F0aW9uPzogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gYFBhcnNlciBFcnJvcjogJHttZXNzYWdlfSAke2VyckxvY2F0aW9ufSBbJHtpbnB1dH1dIGluICR7Y3R4TG9jYXRpb259YDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTcGFuIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBudW1iZXIsIHB1YmxpYyBlbmQ6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzcGFuOiBQYXJzZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQVNUXCI7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcXVvdGVkIGV4cHJlc3Npb24gb2YgdGhlIGZvcm06XG4gKlxuICogcXVvdGUgPSBwcmVmaXggYDpgIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uXG4gKiBwcmVmaXggPSBpZGVudGlmaWVyXG4gKiB1bmludGVycHJldGVkRXhwcmVzc2lvbiA9IGFyYml0cmFyeSBzdHJpbmdcbiAqXG4gKiBBIHF1b3RlZCBleHByZXNzaW9uIGlzIG1lYW50IHRvIGJlIHByZS1wcm9jZXNzZWQgYnkgYW4gQVNUIHRyYW5zZm9ybWVyIHRoYXRcbiAqIGNvbnZlcnRzIGl0IGludG8gYW5vdGhlciBBU1QgdGhhdCBubyBsb25nZXIgY29udGFpbnMgcXVvdGVkIGV4cHJlc3Npb25zLlxuICogSXQgaXMgbWVhbnQgdG8gYWxsb3cgdGhpcmQtcGFydHkgZGV2ZWxvcGVycyB0byBleHRlbmQgQW5ndWxhciB0ZW1wbGF0ZVxuICogZXhwcmVzc2lvbiBsYW5ndWFnZS4gVGhlIGB1bmludGVycHJldGVkRXhwcmVzc2lvbmAgcGFydCBvZiB0aGUgcXVvdGUgaXNcbiAqIHRoZXJlZm9yZSBub3QgaW50ZXJwcmV0ZWQgYnkgdGhlIEFuZ3VsYXIncyBvd24gZXhwcmVzc2lvbiBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBRdW90ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHByZWZpeDogc3RyaW5nLCBwdWJsaWMgdW5pbnRlcnByZXRlZEV4cHJlc3Npb246IHN0cmluZywgcHVibGljIGxvY2F0aW9uOiBhbnkpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFF1b3RlKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiUXVvdGVcIjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlFeHByIGV4dGVuZHMgQVNUIHtcbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1wbGljaXRSZWNlaXZlciBleHRlbmRzIEFTVCB7XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SW1wbGljaXRSZWNlaXZlcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIE11bHRpcGxlIGV4cHJlc3Npb25zIHNlcGFyYXRlZCBieSBhIHNlbWljb2xvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENoYWluIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDaGFpbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBjb25kaXRpb246IEFTVCwgcHVibGljIHRydWVFeHA6IEFTVCwgcHVibGljIGZhbHNlRXhwOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbmRpdGlvbmFsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eVJlYWQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5V3JpdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlXcml0ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZVByb3BlcnR5UmVhZCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFNhZmVQcm9wZXJ0eVJlYWQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtleWVkUmVhZCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIG9iajogQVNULCBwdWJsaWMga2V5OiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEtleWVkUmVhZCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5ZWRXcml0ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIG9iajogQVNULCBwdWJsaWMga2V5OiBBU1QsIHB1YmxpYyB2YWx1ZTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXllZFdyaXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nUGlwZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cDogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFBpcGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxQcmltaXRpdmUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyB2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsUHJpbWl0aXZlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsQXJyYXkgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxBcnJheSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpdGVyYWxNYXBLZXkge1xuICBrZXk6IHN0cmluZztcbiAgcXVvdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE1hcCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGtleXM6IExpdGVyYWxNYXBLZXlbXSwgcHVibGljIHZhbHVlczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxNYXAodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVycG9sYXRpb24gZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBzdHJpbmdzOiBhbnlbXSwgcHVibGljIGV4cHJlc3Npb25zOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SW50ZXJwb2xhdGlvbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmcsIHB1YmxpYyBsZWZ0OiBBU1QsIHB1YmxpYyByaWdodDogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCaW5hcnkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByZWZpeE5vdCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb246IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJlZml4Tm90KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb25OdWxsQXNzZXJ0IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbjogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXROb25OdWxsQXNzZXJ0KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXRob2RDYWxsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRNZXRob2RDYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlTWV0aG9kQ2FsbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2FmZU1ldGhvZENhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uQ2FsbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHRhcmdldDogQVNUIHwgbnVsbCwgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jdGlvbkNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFTVFdpdGhTb3VyY2UgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXN0OiBBU1QsIHB1YmxpYyBzb3VyY2U6IHN0cmluZyB8IG51bGwsIHB1YmxpYyBsb2NhdGlvbjogc3RyaW5nLCBwdWJsaWMgZXJyb3JzOiBQYXJzZXJFcnJvcltdKSB7XG4gICAgc3VwZXIobmV3IFBhcnNlU3BhbigwLCBzb3VyY2UgPT0gbnVsbCA/IDAgOiBzb3VyY2UubGVuZ3RoKSk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuYXN0LnZpc2l0KHZpc2l0b3IsIGNvbnRleHQpO1xuICB9XG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuc291cmNlfSBpbiAke3RoaXMubG9jYXRpb259YDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVCaW5kaW5nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNwYW46IFBhcnNlU3BhbixcbiAgICBwdWJsaWMga2V5OiBzdHJpbmcsXG4gICAgcHVibGljIGtleUlzVmFyOiBib29sZWFuLFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGV4cHJlc3Npb246IEFTVFdpdGhTb3VyY2VcbiAgKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFzdFZpc2l0b3Ige1xuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogUHJvcGVydHlXcml0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXQ/KGFzdDogQVNULCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgUmVjdXJzaXZlQXN0VmlzaXRvciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QubGVmdC52aXNpdCh0aGlzKTtcbiAgICBhc3QucmlnaHQudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5jb25kaXRpb24udmlzaXQodGhpcyk7XG4gICAgYXN0LnRydWVFeHAudmlzaXQodGhpcyk7XG4gICAgYXN0LmZhbHNlRXhwLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5leHAudmlzaXQodGhpcyk7XG4gICAgdGhpcy52aXNpdEFsbChhc3QuYXJncywgY29udGV4dCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnRhcmdldCEudmlzaXQodGhpcyk7XG4gICAgdGhpcy52aXNpdEFsbChhc3QuYXJncywgY29udGV4dCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0Lm9iai52aXNpdCh0aGlzKTtcbiAgICBhc3Qua2V5LnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0Lm9iai52aXNpdCh0aGlzKTtcbiAgICBhc3Qua2V5LnZpc2l0KHRoaXMpO1xuICAgIGFzdC52YWx1ZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuYXJncywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogUHJvcGVydHlXcml0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgYXN0LnZhbHVlLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0QWxsKGFzdHM6IEFTVFtdLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdHMuZm9yRWFjaChhc3QgPT4gYXN0LnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzdFRyYW5zZm9ybWVyIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIGFzdDtcbiAgfVxuXG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBJbnRlcnBvbGF0aW9uKGFzdC5zcGFuLCBhc3Quc3RyaW5ncywgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKGFzdC5zcGFuLCBhc3QudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVJlYWQoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogUHJvcGVydHlXcml0ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5V3JpdGUoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIGFzdC52YWx1ZS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgU2FmZVByb3BlcnR5UmVhZChhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSk7XG4gIH1cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTWV0aG9kQ2FsbChhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSwgdGhpcy52aXNpdEFsbChhc3QuYXJncykpO1xuICB9XG5cbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgU2FmZU1ldGhvZENhbGwoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb25DYWxsKGFzdC5zcGFuLCBhc3QudGFyZ2V0IS52aXNpdCh0aGlzKSwgdGhpcy52aXNpdEFsbChhc3QuYXJncykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsQXJyYXkoYXN0LnNwYW4sIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbE1hcChhc3Quc3BhbiwgYXN0LmtleXMsIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcykpO1xuICB9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCaW5hcnkoYXN0LnNwYW4sIGFzdC5vcGVyYXRpb24sIGFzdC5sZWZ0LnZpc2l0KHRoaXMpLCBhc3QucmlnaHQudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcmVmaXhOb3QoYXN0LnNwYW4sIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBOb25OdWxsQXNzZXJ0KGFzdC5zcGFuLCBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbChhc3Quc3BhbiwgYXN0LmNvbmRpdGlvbi52aXNpdCh0aGlzKSwgYXN0LnRydWVFeHAudmlzaXQodGhpcyksIGFzdC5mYWxzZUV4cC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEJpbmRpbmdQaXBlKGFzdC5zcGFuLCBhc3QuZXhwLnZpc2l0KHRoaXMpLCBhc3QubmFtZSwgdGhpcy52aXNpdEFsbChhc3QuYXJncykpO1xuICB9XG5cbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBLZXllZFJlYWQoYXN0LnNwYW4sIGFzdC5vYmoudmlzaXQodGhpcyksIGFzdC5rZXkudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEtleWVkV3JpdGUoYXN0LnNwYW4sIGFzdC5vYmoudmlzaXQodGhpcyksIGFzdC5rZXkudmlzaXQodGhpcyksIGFzdC52YWx1ZS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEFsbChhc3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICBjb25zdCByZXMgPSBuZXcgQXJyYXkoYXN0cy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgcmVzW2ldID0gYXN0c1tpXS52aXNpdCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IENoYWluKGFzdC5zcGFuLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUXVvdGUoYXN0LnNwYW4sIGFzdC5wcmVmaXgsIGFzdC51bmludGVycHJldGVkRXhwcmVzc2lvbiwgYXN0LmxvY2F0aW9uKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgKiBhcyBjaGFycyBmcm9tIFwiLi4vYXN0L2NoYXJzXCI7XG5cbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gIENoYXJhY3RlcixcbiAgSWRlbnRpZmllcixcbiAgS2V5d29yZCxcbiAgU3RyaW5nLFxuICBPcGVyYXRvcixcbiAgTnVtYmVyLFxuICBFcnJvclxufVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcInZhclwiLCBcImxldFwiLCBcImFzXCIsIFwibnVsbFwiLCBcInVuZGVmaW5lZFwiLCBcInRydWVcIiwgXCJmYWxzZVwiLCBcImlmXCIsIFwiZWxzZVwiLCBcInRoaXNcIl07XG5cbmV4cG9ydCBjbGFzcyBMZXhlciB7XG4gIHRva2VuaXplKHRleHQ6IHN0cmluZyk6IFRva2VuW10ge1xuICAgIGNvbnN0IHNjYW5uZXIgPSBuZXcgU2Nhbm5lcih0ZXh0KTtcbiAgICBjb25zdCB0b2tlbnM6IFRva2VuW10gPSBbXTtcbiAgICBsZXQgdG9rZW4gPSBzY2FubmVyLnNjYW5Ub2tlbigpO1xuICAgIHdoaWxlICh0b2tlbiAhPSBudWxsKSB7XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICB0b2tlbiA9IHNjYW5uZXIuc2NhblRva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IocHVibGljIGluZGV4OiBudW1iZXIsIHB1YmxpYyB0eXBlOiBUb2tlblR5cGUsIHB1YmxpYyBudW1WYWx1ZTogbnVtYmVyLCBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZykge31cblxuICBpc0NoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuQ2hhcmFjdGVyICYmIHRoaXMubnVtVmFsdWUgPT09IGNvZGU7XG4gIH1cblxuICBpc051bWJlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuTnVtYmVyO1xuICB9XG5cbiAgaXNTdHJpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLlN0cmluZztcbiAgfVxuXG4gIGlzT3BlcmF0b3Iob3BlcmF0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvciAmJiB0aGlzLnN0clZhbHVlID09PSBvcGVyYXRlcjtcbiAgfVxuXG4gIGlzSWRlbnRpZmllcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuSWRlbnRpZmllcjtcbiAgfVxuXG4gIGlzS2V5d29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZDtcbiAgfVxuXG4gIGlzS2V5d29yZExldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcImxldFwiO1xuICB9XG5cbiAgaXNLZXl3b3JkQXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJhc1wiO1xuICB9XG5cbiAgaXNLZXl3b3JkTnVsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcIm51bGxcIjtcbiAgfVxuXG4gIGlzS2V5d29yZFVuZGVmaW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xuICB9XG5cbiAgaXNLZXl3b3JkVHJ1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcInRydWVcIjtcbiAgfVxuXG4gIGlzS2V5d29yZEZhbHNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwiZmFsc2VcIjtcbiAgfVxuXG4gIGlzS2V5d29yZFRoaXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ0aGlzXCI7XG4gIH1cblxuICBpc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5FcnJvcjtcbiAgfVxuXG4gIHRvTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLk51bWJlciA/IHRoaXMubnVtVmFsdWUgOiAtMTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIFRva2VuVHlwZS5DaGFyYWN0ZXI6XG4gICAgICBjYXNlIFRva2VuVHlwZS5JZGVudGlmaWVyOlxuICAgICAgY2FzZSBUb2tlblR5cGUuS2V5d29yZDpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLk9wZXJhdG9yOlxuICAgICAgY2FzZSBUb2tlblR5cGUuU3RyaW5nOlxuICAgICAgY2FzZSBUb2tlblR5cGUuRXJyb3I6XG4gICAgICAgIHJldHVybiB0aGlzLnN0clZhbHVlO1xuICAgICAgY2FzZSBUb2tlblR5cGUuTnVtYmVyOlxuICAgICAgICByZXR1cm4gdGhpcy5udW1WYWx1ZS50b1N0cmluZygpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5ld0NoYXJhY3RlclRva2VuKGluZGV4OiBudW1iZXIsIGNvZGU6IG51bWJlcik6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLkNoYXJhY3RlciwgY29kZSwgU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSk7XG59XG5cbmZ1bmN0aW9uIG5ld0lkZW50aWZpZXJUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5JZGVudGlmaWVyLCAwLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gbmV3S2V5d29yZFRva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLktleXdvcmQsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdPcGVyYXRvclRva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLk9wZXJhdG9yLCAwLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gbmV3U3RyaW5nVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuU3RyaW5nLCAwLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gbmV3TnVtYmVyVG9rZW4oaW5kZXg6IG51bWJlciwgbjogbnVtYmVyKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuTnVtYmVyLCBuLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gbmV3RXJyb3JUb2tlbihpbmRleDogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5FcnJvciwgMCwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCBjb25zdCBFT0Y6IFRva2VuID0gbmV3IFRva2VuKC0xLCBUb2tlblR5cGUuQ2hhcmFjdGVyLCAwLCBcIlwiKTtcblxuY2xhc3MgU2Nhbm5lciB7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBwZWVrID0gMDtcbiAgaW5kZXggPSAtMTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQ6IHN0cmluZykge1xuICAgIHRoaXMubGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICB9XG5cbiAgYWR2YW5jZSgpIHtcbiAgICB0aGlzLnBlZWsgPSArK3RoaXMuaW5kZXggPj0gdGhpcy5sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgc2NhblRva2VuKCk6IFRva2VuIHwgbnVsbCB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0O1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIGxldCBwZWVrID0gdGhpcy5wZWVrO1xuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICAvLyBTa2lwIHdoaXRlc3BhY2UuXG4gICAgd2hpbGUgKHBlZWsgPD0gY2hhcnMuJFNQQUNFKSB7XG4gICAgICBpZiAoKytpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgcGVlayA9IGNoYXJzLiRFT0Y7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVlayA9IGlucHV0LmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGVlayA9IHBlZWs7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGlkZW50aWZpZXJzIGFuZCBudW1iZXJzLlxuICAgIGlmIChpc0lkZW50aWZpZXJTdGFydChwZWVrKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbklkZW50aWZpZXIoKTtcbiAgICB9XG4gICAgaWYgKGNoYXJzLmlzRGlnaXQocGVlaykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5OdW1iZXIoaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSBpbmRleDtcbiAgICBzd2l0Y2ggKHBlZWspIHtcbiAgICAgIGNhc2UgY2hhcnMuJFBFUklPRDpcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIHJldHVybiBjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykgPyB0aGlzLnNjYW5OdW1iZXIoc3RhcnQpIDogbmV3Q2hhcmFjdGVyVG9rZW4oc3RhcnQsIGNoYXJzLiRQRVJJT0QpO1xuICAgICAgY2FzZSBjaGFycy4kTFBBUkVOOlxuICAgICAgY2FzZSBjaGFycy4kUlBBUkVOOlxuICAgICAgY2FzZSBjaGFycy4kTEJSQUNFOlxuICAgICAgY2FzZSBjaGFycy4kUkJSQUNFOlxuICAgICAgY2FzZSBjaGFycy4kTEJSQUNLRVQ6XG4gICAgICBjYXNlIGNoYXJzLiRSQlJBQ0tFVDpcbiAgICAgIGNhc2UgY2hhcnMuJENPTU1BOlxuICAgICAgY2FzZSBjaGFycy4kQ09MT046XG4gICAgICBjYXNlIGNoYXJzLiRTRU1JQ09MT046XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5DaGFyYWN0ZXIoc3RhcnQsIHBlZWspO1xuICAgICAgY2FzZSBjaGFycy4kU1E6XG4gICAgICBjYXNlIGNoYXJzLiREUTpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhblN0cmluZygpO1xuICAgICAgY2FzZSBjaGFycy4kSEFTSDpcbiAgICAgIGNhc2UgY2hhcnMuJFBMVVM6XG4gICAgICBjYXNlIGNoYXJzLiRNSU5VUzpcbiAgICAgIGNhc2UgY2hhcnMuJFNUQVI6XG4gICAgICBjYXNlIGNoYXJzLiRTTEFTSDpcbiAgICAgIGNhc2UgY2hhcnMuJFBFUkNFTlQ6XG4gICAgICBjYXNlIGNoYXJzLiRDQVJFVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nhbk9wZXJhdG9yKHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspKTtcbiAgICAgIGNhc2UgY2hhcnMuJFFVRVNUSU9OOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBcIj9cIiwgY2hhcnMuJFBFUklPRCwgXCIuXCIpO1xuICAgICAgY2FzZSBjaGFycy4kTFQ6XG4gICAgICBjYXNlIGNoYXJzLiRHVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgU3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKSwgY2hhcnMuJEVRLCBcIj1cIik7XG4gICAgICBjYXNlIGNoYXJzLiRCQU5HOlxuICAgICAgY2FzZSBjaGFycy4kRVE6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlayksIGNoYXJzLiRFUSwgXCI9XCIsIGNoYXJzLiRFUSwgXCI9XCIpO1xuICAgICAgY2FzZSBjaGFycy4kQU1QRVJTQU5EOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBcIiZcIiwgY2hhcnMuJEFNUEVSU0FORCwgXCImXCIpO1xuICAgICAgY2FzZSBjaGFycy4kQkFSOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBcInxcIiwgY2hhcnMuJEJBUiwgXCJ8XCIpO1xuICAgICAgY2FzZSBjaGFycy4kTkJTUDpcbiAgICAgICAgd2hpbGUgKGNoYXJzLmlzV2hpdGVzcGFjZSh0aGlzLnBlZWspKSB7XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhblRva2VuKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIFske1N0cmluZy5mcm9tQ2hhckNvZGUocGVlayl9XWAsIDApO1xuICB9XG5cbiAgc2NhbkNoYXJhY3RlcihzdGFydDogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiBUb2tlbiB7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG5ld0NoYXJhY3RlclRva2VuKHN0YXJ0LCBjb2RlKTtcbiAgfVxuXG4gIHNjYW5PcGVyYXRvcihzdGFydDogbnVtYmVyLCBzdHI6IHN0cmluZyk6IFRva2VuIHtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbmV3T3BlcmF0b3JUb2tlbihzdGFydCwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2tlbml6ZSBhIDIvMyBjaGFyIGxvbmcgb3BlcmF0b3JcbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0IHN0YXJ0IGluZGV4IGluIHRoZSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSBvbmUgZmlyc3Qgc3ltYm9sIChhbHdheXMgcGFydCBvZiB0aGUgb3BlcmF0b3IpXG4gICAqIEBwYXJhbSB0d29Db2RlIGNvZGUgcG9pbnQgZm9yIHRoZSBzZWNvbmQgc3ltYm9sXG4gICAqIEBwYXJhbSB0d28gc2Vjb25kIHN5bWJvbCAocGFydCBvZiB0aGUgb3BlcmF0b3Igd2hlbiB0aGUgc2Vjb25kIGNvZGUgcG9pbnQgbWF0Y2hlcylcbiAgICogQHBhcmFtIHRocmVlQ29kZSBjb2RlIHBvaW50IGZvciB0aGUgdGhpcmQgc3ltYm9sXG4gICAqIEBwYXJhbSB0aHJlZSB0aGlyZCBzeW1ib2wgKHBhcnQgb2YgdGhlIG9wZXJhdG9yIHdoZW4gcHJvdmlkZWQgYW5kIG1hdGNoZXMgc291cmNlIGV4cHJlc3Npb24pXG4gICAqL1xuICBzY2FuQ29tcGxleE9wZXJhdG9yKFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgb25lOiBzdHJpbmcsXG4gICAgdHdvQ29kZTogbnVtYmVyLFxuICAgIHR3bzogc3RyaW5nLFxuICAgIHRocmVlQ29kZT86IG51bWJlcixcbiAgICB0aHJlZT86IHN0cmluZ1xuICApOiBUb2tlbiB7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgbGV0IHN0cjogc3RyaW5nID0gb25lO1xuICAgIGlmICh0aGlzLnBlZWsgPT09IHR3b0NvZGUpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgc3RyICs9IHR3bztcbiAgICB9XG4gICAgaWYgKHRocmVlQ29kZSAhPSBudWxsICYmIHRoaXMucGVlayA9PT0gdGhyZWVDb2RlKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHN0ciArPSB0aHJlZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld09wZXJhdG9yVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICBzY2FuSWRlbnRpZmllcigpOiBUb2tlbiB7XG4gICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgd2hpbGUgKGlzSWRlbnRpZmllclBhcnQodGhpcy5wZWVrKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0cjogc3RyaW5nID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgIHJldHVybiBLRVlXT1JEUy5pbmRleE9mKHN0cikgPiAtMSA/IG5ld0tleXdvcmRUb2tlbihzdGFydCwgc3RyKSA6IG5ld0lkZW50aWZpZXJUb2tlbihzdGFydCwgc3RyKTtcbiAgfVxuXG4gIHNjYW5OdW1iZXIoc3RhcnQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBsZXQgc2ltcGxlOiBib29sZWFuID0gdGhpcy5pbmRleCA9PT0gc3RhcnQ7XG4gICAgdGhpcy5hZHZhbmNlKCk7IC8vIFNraXAgaW5pdGlhbCBkaWdpdC5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiRQRVJJT0QpIHtcbiAgICAgICAgc2ltcGxlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGlzRXhwb25lbnRTdGFydCh0aGlzLnBlZWspKSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICBpZiAoaXNFeHBvbmVudFNpZ24odGhpcy5wZWVrKSkge1xuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBzaW1wbGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0cjogc3RyaW5nID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBzaW1wbGUgPyBwYXJzZUludEF1dG9SYWRpeChzdHIpIDogcGFyc2VGbG9hdChzdHIpO1xuICAgIHJldHVybiBuZXdOdW1iZXJUb2tlbihzdGFydCwgdmFsdWUpO1xuICB9XG5cbiAgc2NhblN0cmluZygpOiBUb2tlbiB7XG4gICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgcXVvdGU6IG51bWJlciA9IHRoaXMucGVlaztcbiAgICB0aGlzLmFkdmFuY2UoKTsgLy8gU2tpcCBpbml0aWFsIHF1b3RlLlxuXG4gICAgbGV0IGJ1ZmZlciA9IFwiXCI7XG4gICAgbGV0IG1hcmtlcjogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBpbnB1dDogc3RyaW5nID0gdGhpcy5pbnB1dDtcblxuICAgIHdoaWxlICh0aGlzLnBlZWsgIT09IHF1b3RlKSB7XG4gICAgICBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kQkFDS1NMQVNIKSB7XG4gICAgICAgIGJ1ZmZlciArPSBpbnB1dC5zdWJzdHJpbmcobWFya2VyLCB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIGxldCB1bmVzY2FwZWRDb2RlOiBudW1iZXI7XG4gICAgICAgIC8vIFdvcmthcm91bmQgZm9yIFRTMi4xLWludHJvZHVjZWQgdHlwZSBzdHJpY3RuZXNzXG4gICAgICAgIHRoaXMucGVlayA9IHRoaXMucGVlaztcbiAgICAgICAgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJHUpIHtcbiAgICAgICAgICAvLyA0IGNoYXJhY3RlciBoZXggY29kZSBmb3IgdW5pY29kZSBjaGFyYWN0ZXIuXG4gICAgICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBpbnB1dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICBpZiAoL15bMC05YS1mXSskL2kudGVzdChoZXgpKSB7XG4gICAgICAgICAgICB1bmVzY2FwZWRDb2RlID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKGBJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdSR7aGV4fV1gLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmVzY2FwZWRDb2RlID0gdW5lc2NhcGUodGhpcy5wZWVrKTtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1bmVzY2FwZWRDb2RlKTtcbiAgICAgICAgbWFya2VyID0gdGhpcy5pbmRleDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kRU9GKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yKFwiVW50ZXJtaW5hdGVkIHF1b3RlXCIsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdDogc3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKG1hcmtlciwgdGhpcy5pbmRleCk7XG4gICAgdGhpcy5hZHZhbmNlKCk7IC8vIFNraXAgdGVybWluYXRpbmcgcXVvdGUuXG5cbiAgICByZXR1cm4gbmV3U3RyaW5nVG9rZW4oc3RhcnQsIGJ1ZmZlciArIGxhc3QpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBjb25zdCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5pbmRleCArIG9mZnNldDtcbiAgICByZXR1cm4gbmV3RXJyb3JUb2tlbihwb3NpdGlvbiwgYExleGVyIEVycm9yOiAke21lc3NhZ2V9IGF0IGNvbHVtbiAke3Bvc2l0aW9ufSBpbiBleHByZXNzaW9uIFske3RoaXMuaW5wdXR9XWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSWRlbnRpZmllclN0YXJ0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIChjaGFycy4kYSA8PSBjb2RlICYmIGNvZGUgPD0gY2hhcnMuJHopIHx8XG4gICAgKGNoYXJzLiRBIDw9IGNvZGUgJiYgY29kZSA8PSBjaGFycy4kWikgfHxcbiAgICBjb2RlID09PSBjaGFycy4kXyB8fFxuICAgIGNvZGUgPT09IGNoYXJzLiQkXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXIoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHNjYW5uZXIgPSBuZXcgU2Nhbm5lcihpbnB1dCk7XG4gIGlmICghaXNJZGVudGlmaWVyU3RhcnQoc2Nhbm5lci5wZWVrKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzY2FubmVyLmFkdmFuY2UoKTtcbiAgd2hpbGUgKHNjYW5uZXIucGVlayAhPT0gY2hhcnMuJEVPRikge1xuICAgIGlmICghaXNJZGVudGlmaWVyUGFydChzY2FubmVyLnBlZWspKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNjYW5uZXIuYWR2YW5jZSgpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY2hhcnMuaXNBc2NpaUxldHRlcihjb2RlKSB8fCBjaGFycy5pc0RpZ2l0KGNvZGUpIHx8IGNvZGUgPT09IGNoYXJzLiRfIHx8IGNvZGUgPT09IGNoYXJzLiQkO1xufVxuXG5mdW5jdGlvbiBpc0V4cG9uZW50U3RhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kZSB8fCBjb2RlID09PSBjaGFycy4kRTtcbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudFNpZ24oY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kTUlOVVMgfHwgY29kZSA9PT0gY2hhcnMuJFBMVVM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1F1b3RlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJFNRIHx8IGNvZGUgPT09IGNoYXJzLiREUSB8fCBjb2RlID09PSBjaGFycy4kQlQ7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGNvZGU6IG51bWJlcik6IG51bWJlciB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgY2hhcnMuJG46XG4gICAgICByZXR1cm4gY2hhcnMuJExGO1xuICAgIGNhc2UgY2hhcnMuJGY6XG4gICAgICByZXR1cm4gY2hhcnMuJEZGO1xuICAgIGNhc2UgY2hhcnMuJHI6XG4gICAgICByZXR1cm4gY2hhcnMuJENSO1xuICAgIGNhc2UgY2hhcnMuJHQ6XG4gICAgICByZXR1cm4gY2hhcnMuJFRBQjtcbiAgICBjYXNlIGNoYXJzLiR2OlxuICAgICAgcmV0dXJuIGNoYXJzLiRWVEFCO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY29kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUludEF1dG9SYWRpeCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCByZXN1bHQ6IG51bWJlciA9IHBhcnNlSW50KHRleHQsIDEwKTtcbiAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgXCIgKyB0ZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgKiBhcyBjaGFycyBmcm9tIFwiLi4vYXN0L2NoYXJzXCI7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7ZXNjYXBlUmVnRXhwfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0IHtcbiAgQVNULFxuICBBU1RXaXRoU291cmNlLFxuICBBc3RWaXNpdG9yLFxuICBCaW5hcnksXG4gIEJpbmRpbmdQaXBlLFxuICBDaGFpbixcbiAgQ29uZGl0aW9uYWwsXG4gIEVtcHR5RXhwcixcbiAgRnVuY3Rpb25DYWxsLFxuICBJbXBsaWNpdFJlY2VpdmVyLFxuICBJbnRlcnBvbGF0aW9uLFxuICBLZXllZFJlYWQsXG4gIEtleWVkV3JpdGUsXG4gIExpdGVyYWxBcnJheSxcbiAgTGl0ZXJhbE1hcCxcbiAgTGl0ZXJhbE1hcEtleSxcbiAgTGl0ZXJhbFByaW1pdGl2ZSxcbiAgTWV0aG9kQ2FsbCxcbiAgTm9uTnVsbEFzc2VydCxcbiAgUGFyc2VTcGFuLFxuICBQYXJzZXJFcnJvcixcbiAgUHJlZml4Tm90LFxuICBQcm9wZXJ0eVJlYWQsXG4gIFByb3BlcnR5V3JpdGUsXG4gIFF1b3RlLFxuICBTYWZlTWV0aG9kQ2FsbCxcbiAgU2FmZVByb3BlcnR5UmVhZCxcbiAgVGVtcGxhdGVCaW5kaW5nXG59IGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtFT0YsIExleGVyLCBUb2tlbiwgVG9rZW5UeXBlLCBpc0lkZW50aWZpZXIsIGlzUXVvdGV9IGZyb20gXCIuL2xleGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTcGxpdEludGVycG9sYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RyaW5nczogc3RyaW5nW10sIHB1YmxpYyBleHByZXNzaW9uczogc3RyaW5nW10sIHB1YmxpYyBvZmZzZXRzOiBudW1iZXJbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlQmluZGluZ3M6IFRlbXBsYXRlQmluZGluZ1tdLCBwdWJsaWMgd2FybmluZ3M6IHN0cmluZ1tdLCBwdWJsaWMgZXJyb3JzOiBQYXJzZXJFcnJvcltdKSB7fVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoY29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogUmVnRXhwIHtcbiAgY29uc3QgcGF0dGVybiA9IGVzY2FwZVJlZ0V4cChjb25maWcuc3RhcnQpICsgXCIoW1xcXFxzXFxcXFNdKj8pXCIgKyBlc2NhcGVSZWdFeHAoY29uZmlnLmVuZCk7XG4gIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIFwiZ1wiKTtcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIHByaXZhdGUgZXJyb3JzOiBQYXJzZXJFcnJvcltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbGV4ZXI6IExleGVyKSB7fVxuXG4gIHBhcnNlQWN0aW9uKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IGFueSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHtcbiAgICB0aGlzLl9jaGVja05vSW50ZXJwb2xhdGlvbihpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHNvdXJjZVRvTGV4ID0gdGhpcy5fc3RyaXBDb21tZW50cyhpbnB1dCk7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUodGhpcy5fc3RyaXBDb21tZW50cyhpbnB1dCkpO1xuICAgIGNvbnN0IGFzdCA9IG5ldyBQYXJzZUFTVChcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0b2tlbnMsXG4gICAgICBzb3VyY2VUb0xleC5sZW5ndGgsXG4gICAgICB0cnVlLFxuICAgICAgdGhpcy5lcnJvcnMsXG4gICAgICBpbnB1dC5sZW5ndGggLSBzb3VyY2VUb0xleC5sZW5ndGhcbiAgICApLnBhcnNlQ2hhaW4oKTtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHBhcnNlQmluZGluZyhcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBhbnksXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgY29uc3QgYXN0ID0gdGhpcy5fcGFyc2VCaW5kaW5nQXN0KGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKGFzdCwgaW5wdXQsIGxvY2F0aW9uLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwYXJzZVNpbXBsZUJpbmRpbmcoXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIGNvbnN0IGFzdCA9IHRoaXMuX3BhcnNlQmluZGluZ0FzdChpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IGVycm9ycyA9IFNpbXBsZUV4cHJlc3Npb25DaGVja2VyLmNoZWNrKGFzdCk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihgSG9zdCBiaW5kaW5nIGV4cHJlc3Npb24gY2Fubm90IGNvbnRhaW4gJHtlcnJvcnMuam9pbihcIiBcIil9YCwgaW5wdXQsIGxvY2F0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKGFzdCwgaW5wdXQsIGxvY2F0aW9uLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBvcnRFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGlucHV0OiBzdHJpbmcsIGVyckxvY2F0aW9uOiBzdHJpbmcsIGN0eExvY2F0aW9uPzogYW55KSB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChuZXcgUGFyc2VyRXJyb3IobWVzc2FnZSwgaW5wdXQsIGVyckxvY2F0aW9uLCBjdHhMb2NhdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VCaW5kaW5nQXN0KGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBzdHJpbmcsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBBU1Qge1xuICAgIC8vIFF1b3RlcyBleHByZXNzaW9ucyB1c2UgM3JkLXBhcnR5IGV4cHJlc3Npb24gbGFuZ3VhZ2UuIFdlIGRvbid0IHdhbnQgdG8gdXNlXG4gICAgLy8gb3VyIGxleGVyIG9yIHBhcnNlciBmb3IgdGhhdCwgc28gd2UgY2hlY2sgZm9yIHRoYXQgYWhlYWQgb2YgdGltZS5cbiAgICBjb25zdCBxdW90ZSA9IHRoaXMuX3BhcnNlUXVvdGUoaW5wdXQsIGxvY2F0aW9uKTtcblxuICAgIGlmIChxdW90ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gcXVvdGU7XG4gICAgfVxuXG4gICAgdGhpcy5fY2hlY2tOb0ludGVycG9sYXRpb24oaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpO1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHNvdXJjZVRvTGV4KTtcbiAgICByZXR1cm4gbmV3IFBhcnNlQVNUKFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRva2VucyxcbiAgICAgIHNvdXJjZVRvTGV4Lmxlbmd0aCxcbiAgICAgIGZhbHNlLFxuICAgICAgdGhpcy5lcnJvcnMsXG4gICAgICBpbnB1dC5sZW5ndGggLSBzb3VyY2VUb0xleC5sZW5ndGhcbiAgICApLnBhcnNlQ2hhaW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlUXVvdGUoaW5wdXQ6IHN0cmluZyB8IG51bGwsIGxvY2F0aW9uOiBhbnkpOiBBU1QgfCBudWxsIHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwcmVmaXhTZXBhcmF0b3JJbmRleCA9IGlucHV0LmluZGV4T2YoXCI6XCIpO1xuICAgIGlmIChwcmVmaXhTZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBwcmVmaXggPSBpbnB1dC5zdWJzdHJpbmcoMCwgcHJlZml4U2VwYXJhdG9ySW5kZXgpLnRyaW0oKTtcbiAgICBpZiAoIWlzSWRlbnRpZmllcihwcmVmaXgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdW5pbnRlcnByZXRlZEV4cHJlc3Npb24gPSBpbnB1dC5zdWJzdHJpbmcocHJlZml4U2VwYXJhdG9ySW5kZXggKyAxKTtcbiAgICByZXR1cm4gbmV3IFF1b3RlKG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQubGVuZ3RoKSwgcHJlZml4LCB1bmludGVycHJldGVkRXhwcmVzc2lvbiwgbG9jYXRpb24pO1xuICB9XG5cbiAgcGFyc2VUZW1wbGF0ZUJpbmRpbmdzKHByZWZpeFRva2VuOiBzdHJpbmcgfCBudWxsLCBpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogYW55KTogVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKGlucHV0KTtcbiAgICBpZiAocHJlZml4VG9rZW4pIHtcbiAgICAgIC8vIFByZWZpeCB0aGUgdG9rZW5zIHdpdGggdGhlIHRva2VucyBmcm9tIHByZWZpeFRva2VuIGJ1dCBoYXZlIHRoZW0gdGFrZSBubyBzcGFjZSAoMCBpbmRleCkuXG4gICAgICBjb25zdCBwcmVmaXhUb2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShwcmVmaXhUb2tlbikubWFwKHQgPT4ge1xuICAgICAgICB0LmluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9KTtcbiAgICAgIHRva2Vucy51bnNoaWZ0KC4uLnByZWZpeFRva2Vucyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VBU1QoaW5wdXQsIGxvY2F0aW9uLCB0b2tlbnMsIGlucHV0Lmxlbmd0aCwgZmFsc2UsIHRoaXMuZXJyb3JzLCAwKS5wYXJzZVRlbXBsYXRlQmluZGluZ3MoKTtcbiAgfVxuXG4gIHBhcnNlSW50ZXJwb2xhdGlvbihcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBhbnksXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB8IG51bGwge1xuICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5zcGxpdEludGVycG9sYXRpb24oaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBpZiAoc3BsaXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cHJlc3Npb25zOiBBU1RbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5leHByZXNzaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblRleHQgPSBzcGxpdC5leHByZXNzaW9uc1tpXTtcbiAgICAgIGNvbnN0IHNvdXJjZVRvTGV4ID0gdGhpcy5fc3RyaXBDb21tZW50cyhleHByZXNzaW9uVGV4dCk7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShzb3VyY2VUb0xleCk7XG4gICAgICBjb25zdCBhc3QgPSBuZXcgUGFyc2VBU1QoXG4gICAgICAgIGlucHV0LFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgdG9rZW5zLFxuICAgICAgICBzb3VyY2VUb0xleC5sZW5ndGgsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0aGlzLmVycm9ycyxcbiAgICAgICAgc3BsaXQub2Zmc2V0c1tpXSArIChleHByZXNzaW9uVGV4dC5sZW5ndGggLSBzb3VyY2VUb0xleC5sZW5ndGgpXG4gICAgICApLnBhcnNlQ2hhaW4oKTtcbiAgICAgIGV4cHJlc3Npb25zLnB1c2goYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoXG4gICAgICBuZXcgSW50ZXJwb2xhdGlvbihuZXcgUGFyc2VTcGFuKDAsIGlucHV0ID09PSBudWxsID8gMCA6IGlucHV0Lmxlbmd0aCksIHNwbGl0LnN0cmluZ3MsIGV4cHJlc3Npb25zKSxcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aGlzLmVycm9yc1xuICAgICk7XG4gIH1cblxuICBzcGxpdEludGVycG9sYXRpb24oXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IFNwbGl0SW50ZXJwb2xhdGlvbiB8IG51bGwge1xuICAgIGNvbnN0IHJlZ2V4cCA9IF9jcmVhdGVJbnRlcnBvbGF0ZVJlZ0V4cChpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBwYXJ0cyA9IGlucHV0LnNwbGl0KHJlZ2V4cCk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5nczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBleHByZXNzaW9uczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBvZmZzZXRzOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQ6IHN0cmluZyA9IHBhcnRzW2ldO1xuICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgIC8vIGZpeGVkIHN0cmluZ1xuICAgICAgICBzdHJpbmdzLnB1c2gocGFydCk7XG4gICAgICAgIG9mZnNldCArPSBwYXJ0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAocGFydC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICBvZmZzZXQgKz0gaW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydC5sZW5ndGg7XG4gICAgICAgIGV4cHJlc3Npb25zLnB1c2gocGFydCk7XG4gICAgICAgIG9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gcGFydC5sZW5ndGggKyBpbnRlcnBvbGF0aW9uQ29uZmlnLmVuZC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBcIkJsYW5rIGV4cHJlc3Npb25zIGFyZSBub3QgYWxsb3dlZCBpbiBpbnRlcnBvbGF0ZWQgc3RyaW5nc1wiLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIGBhdCBjb2x1bW4gJHt0aGlzLl9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKHBhcnRzLCBpLCBpbnRlcnBvbGF0aW9uQ29uZmlnKX0gaW5gLFxuICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGV4cHJlc3Npb25zLnB1c2goXCIkaW1wbGljdFwiKTtcbiAgICAgICAgb2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3BsaXRJbnRlcnBvbGF0aW9uKHN0cmluZ3MsIGV4cHJlc3Npb25zLCBvZmZzZXRzKTtcbiAgfVxuXG4gIHdyYXBMaXRlcmFsUHJpbWl0aXZlKGlucHV0OiBzdHJpbmcgfCBudWxsLCBsb2NhdGlvbjogYW55KTogQVNUV2l0aFNvdXJjZSB7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKFxuICAgICAgbmV3IExpdGVyYWxQcmltaXRpdmUobmV3IFBhcnNlU3BhbigwLCBpbnB1dCA9PT0gbnVsbCA/IDAgOiBpbnB1dC5sZW5ndGgpLCBpbnB1dCksXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5lcnJvcnNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RyaXBDb21tZW50cyhpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBpID0gdGhpcy5fY29tbWVudFN0YXJ0KGlucHV0KTtcbiAgICByZXR1cm4gaSAhPSBudWxsID8gaW5wdXQuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKSA6IGlucHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWVudFN0YXJ0KGlucHV0OiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcbiAgICBsZXQgb3V0ZXJRdW90ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgICAgY29uc3QgbmV4dENoYXIgPSBpbnB1dC5jaGFyQ29kZUF0KGkgKyAxKTtcblxuICAgICAgaWYgKGNoYXIgPT09IGNoYXJzLiRTTEFTSCAmJiBuZXh0Q2hhciA9PT0gY2hhcnMuJFNMQVNIICYmIG91dGVyUXVvdGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvdXRlclF1b3RlID09PSBjaGFyKSB7XG4gICAgICAgIG91dGVyUXVvdGUgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChvdXRlclF1b3RlID09PSBudWxsICYmIGlzUXVvdGUoY2hhcikpIHtcbiAgICAgICAgb3V0ZXJRdW90ZSA9IGNoYXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tOb0ludGVycG9sYXRpb24oaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IGFueSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlZ2V4cCA9IF9jcmVhdGVJbnRlcnBvbGF0ZVJlZ0V4cChpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBwYXJ0cyA9IGlucHV0LnNwbGl0KHJlZ2V4cCk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICBgR290IGludGVycG9sYXRpb24gKCR7aW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydH0ke2ludGVycG9sYXRpb25Db25maWcuZW5kfSkgd2hlcmUgZXhwcmVzc2lvbiB3YXMgZXhwZWN0ZWRgLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYGF0IGNvbHVtbiAke3RoaXMuX2ZpbmRJbnRlcnBvbGF0aW9uRXJyb3JDb2x1bW4ocGFydHMsIDEsIGludGVycG9sYXRpb25Db25maWcpfSBpbmAsXG4gICAgICAgIGxvY2F0aW9uXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRJbnRlcnBvbGF0aW9uRXJyb3JDb2x1bW4oXG4gICAgcGFydHM6IHN0cmluZ1tdLFxuICAgIHBhcnRJbkVycklkeDogbnVtYmVyLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWdcbiAgKTogbnVtYmVyIHtcbiAgICBsZXQgZXJyTG9jYXRpb24gPSBcIlwiO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFydEluRXJySWR4OyBqKyspIHtcbiAgICAgIGVyckxvY2F0aW9uICs9IGogJSAyID09PSAwID8gcGFydHNbal0gOiBgJHtpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0fSR7cGFydHNbal19JHtpbnRlcnBvbGF0aW9uQ29uZmlnLmVuZH1gO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJMb2NhdGlvbi5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlQVNUIHtcbiAgcHJpdmF0ZSBycGFyZW5zRXhwZWN0ZWQgPSAwO1xuICBwcml2YXRlIHJicmFja2V0c0V4cGVjdGVkID0gMDtcbiAgcHJpdmF0ZSByYnJhY2VzRXhwZWN0ZWQgPSAwO1xuXG4gIGluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5wdXQ6IHN0cmluZyxcbiAgICBwdWJsaWMgbG9jYXRpb246IGFueSxcbiAgICBwdWJsaWMgdG9rZW5zOiBUb2tlbltdLFxuICAgIHB1YmxpYyBpbnB1dExlbmd0aDogbnVtYmVyLFxuICAgIHB1YmxpYyBwYXJzZUFjdGlvbjogYm9vbGVhbixcbiAgICBwcml2YXRlIGVycm9yczogUGFyc2VyRXJyb3JbXSxcbiAgICBwcml2YXRlIG9mZnNldDogbnVtYmVyXG4gICkge31cblxuICBwZWVrKG9mZnNldDogbnVtYmVyKTogVG9rZW4ge1xuICAgIGNvbnN0IGkgPSB0aGlzLmluZGV4ICsgb2Zmc2V0O1xuICAgIHJldHVybiBpIDwgdGhpcy50b2tlbnMubGVuZ3RoID8gdGhpcy50b2tlbnNbaV0gOiBFT0Y7XG4gIH1cblxuICBnZXQgbmV4dCgpOiBUb2tlbiB7XG4gICAgcmV0dXJuIHRoaXMucGVlaygwKTtcbiAgfVxuXG4gIGdldCBpbnB1dEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggPyB0aGlzLm5leHQuaW5kZXggKyB0aGlzLm9mZnNldCA6IHRoaXMuaW5wdXRMZW5ndGggKyB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIHNwYW4oc3RhcnQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUGFyc2VTcGFuKHN0YXJ0LCB0aGlzLmlucHV0SW5kZXgpO1xuICB9XG5cbiAgYWR2YW5jZSgpIHtcbiAgICB0aGlzLmluZGV4Kys7XG4gIH1cblxuICBvcHRpb25hbENoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKGNvZGUpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcGVla0tleXdvcmRMZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV4dC5pc0tleXdvcmRMZXQoKTtcbiAgfVxuICBwZWVrS2V5d29yZEFzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHQuaXNLZXl3b3JkQXMoKTtcbiAgfVxuXG4gIGV4cGVjdENoYXJhY3Rlcihjb2RlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3Rlcihjb2RlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVycm9yKGBNaXNzaW5nIGV4cGVjdGVkICR7U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKX1gKTtcbiAgfVxuXG4gIG9wdGlvbmFsT3BlcmF0b3Iob3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5leHQuaXNPcGVyYXRvcihvcCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBlY3RPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihvcGVyYXRvcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lcnJvcihgTWlzc2luZyBleHBlY3RlZCBvcGVyYXRvciAke29wZXJhdG9yfWApO1xuICB9XG5cbiAgZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IG4gPSB0aGlzLm5leHQ7XG4gICAgaWYgKCFuLmlzSWRlbnRpZmllcigpICYmICFuLmlzS2V5d29yZCgpKSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7bn0sIGV4cGVjdGVkIGlkZW50aWZpZXIgb3Iga2V5d29yZGApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuLnRvU3RyaW5nKCkgYXMgc3RyaW5nO1xuICB9XG5cbiAgZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZE9yU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbiA9IHRoaXMubmV4dDtcbiAgICBpZiAoIW4uaXNJZGVudGlmaWVyKCkgJiYgIW4uaXNLZXl3b3JkKCkgJiYgIW4uaXNTdHJpbmcoKSkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke259LCBleHBlY3RlZCBpZGVudGlmaWVyLCBrZXl3b3JkLCBvciBzdHJpbmdgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbi50b1N0cmluZygpIGFzIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlQ2hhaW4oKTogQVNUIHtcbiAgICBjb25zdCBleHByczogQVNUW10gPSBbXTtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICBleHBycy5wdXNoKGV4cHIpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSkge1xuICAgICAgICBpZiAoIXRoaXMucGFyc2VBY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmVycm9yKFwiQmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluIGNoYWluZWQgZXhwcmVzc2lvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSkge30gLy8gcmVhZCBhbGwgc2VtaWNvbG9uc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJyR7dGhpcy5uZXh0fSdgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV4cHJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfVxuICAgIGlmIChleHBycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBleHByc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDaGFpbih0aGlzLnNwYW4oc3RhcnQpLCBleHBycyk7XG4gIH1cblxuICBwYXJzZVBpcGUoKTogQVNUIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwifFwiKSkge1xuICAgICAgaWYgKHRoaXMucGFyc2VBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5lcnJvcihcIkNhbm5vdCBoYXZlIGEgcGlwZSBpbiBhbiBhY3Rpb24gZXhwcmVzc2lvblwiKTtcbiAgICAgIH1cblxuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkKCk7XG4gICAgICAgIGNvbnN0IGFyZ3M6IEFTVFtdID0gW107XG4gICAgICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT0xPTikpIHtcbiAgICAgICAgICBhcmdzLnB1c2godGhpcy5wYXJzZUV4cHJlc3Npb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmRpbmdQaXBlKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwgbmFtZSwgYXJncyk7XG4gICAgICB9IHdoaWxlICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCJ8XCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VFeHByZXNzaW9uKCk6IEFTVCB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICB9XG5cbiAgcGFyc2VDb25kaXRpb25hbCgpOiBBU1Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VMb2dpY2FsT3IoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI/XCIpKSB7XG4gICAgICBjb25zdCB5ZXMgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgbGV0IG5vOiBBU1Q7XG4gICAgICBpZiAoIXRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKSkge1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgICAgdGhpcy5lcnJvcihgQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiAke2V4cHJlc3Npb259IHJlcXVpcmVzIGFsbCAzIGV4cHJlc3Npb25zYCk7XG4gICAgICAgIG5vID0gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWwodGhpcy5zcGFuKHN0YXJ0KSwgcmVzdWx0LCB5ZXMsIG5vKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBwYXJzZUxvZ2ljYWxPcigpOiBBU1Qge1xuICAgIC8vICd8fCdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUxvZ2ljYWxBbmQoKTtcbiAgICB3aGlsZSAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwifHxcIikpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZUxvZ2ljYWxBbmQoKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgXCJ8fFwiLCByZXN1bHQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTG9naWNhbEFuZCgpOiBBU1Qge1xuICAgIC8vICcmJidcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUVxdWFsaXR5KCk7XG4gICAgd2hpbGUgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIiYmXCIpKSB7XG4gICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VFcXVhbGl0eSgpO1xuICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBcIiYmXCIsIHJlc3VsdCwgcmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VFcXVhbGl0eSgpOiBBU1Qge1xuICAgIC8vICc9PScsJyE9JywnPT09JywnIT09J1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUmVsYXRpb25hbCgpO1xuICAgIHdoaWxlICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcIj09XCI6XG4gICAgICAgIGNhc2UgXCI9PT1cIjpcbiAgICAgICAgY2FzZSBcIiE9XCI6XG4gICAgICAgIGNhc2UgXCIhPT1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VSZWxhdGlvbmFsKCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlUmVsYXRpb25hbCgpOiBBU1Qge1xuICAgIC8vICc8JywgJz4nLCAnPD0nLCAnPj0nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VBZGRpdGl2ZSgpO1xuICAgIHdoaWxlICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcIjxcIjpcbiAgICAgICAgY2FzZSBcIj5cIjpcbiAgICAgICAgY2FzZSBcIjw9XCI6XG4gICAgICAgIGNhc2UgXCI+PVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZUFkZGl0aXZlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlQWRkaXRpdmUoKTogQVNUIHtcbiAgICAvLyAnKycsICctJ1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlTXVsdGlwbGljYXRpdmUoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlTXVsdGlwbGljYXRpdmUoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VNdWx0aXBsaWNhdGl2ZSgpOiBBU1Qge1xuICAgIC8vICcqJywgJyUnLCAnLydcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgIHdoaWxlICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcIipcIjpcbiAgICAgICAgY2FzZSBcIiVcIjpcbiAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VQcmVmaXgoKTogQVNUIHtcbiAgICBpZiAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIGxldCByZXN1bHQ6IEFTVDtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEJpbmFyeSh0aGlzLnNwYW4oc3RhcnQpLCBvcGVyYXRvciwgbmV3IExpdGVyYWxQcmltaXRpdmUobmV3IFBhcnNlU3BhbihzdGFydCwgc3RhcnQpLCAwKSwgcmVzdWx0KTtcbiAgICAgICAgY2FzZSBcIiFcIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcmVmaXhOb3QodGhpcy5zcGFuKHN0YXJ0KSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFyc2VDYWxsQ2hhaW4oKTtcbiAgfVxuXG4gIHBhcnNlQ2FsbENoYWluKCk6IEFTVCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VQcmltYXJ5KCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRQRVJJT0QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwocmVzdWx0LCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj8uXCIpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwocmVzdWx0LCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTEJSQUNLRVQpKSB7XG4gICAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQrKztcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZC0tO1xuICAgICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEtleWVkV3JpdGUodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgS2V5ZWRSZWFkKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMUEFSRU4pKSB7XG4gICAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnBhcnNlQ2FsbEFyZ3VtZW50cygpO1xuICAgICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZC0tO1xuICAgICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUlBBUkVOKTtcbiAgICAgICAgcmVzdWx0ID0gbmV3IEZ1bmN0aW9uQ2FsbCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCIhXCIpKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBOb25OdWxsQXNzZXJ0KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlUHJpbWFyeSgpOiBBU1Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMUEFSRU4pKSB7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkLS07XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUlBBUkVOKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkTnVsbCgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBudWxsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmRVbmRlZmluZWQoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgdm9pZCAwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmRUcnVlKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZEZhbHNlKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmRUaGlzKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBJbXBsaWNpdFJlY2VpdmVyKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTEJSQUNLRVQpKSB7XG4gICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkKys7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMucGFyc2VFeHByZXNzaW9uTGlzdChjaGFycy4kUkJSQUNLRVQpO1xuICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbEFycmF5KHRoaXMuc3BhbihzdGFydCksIGVsZW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3RlcihjaGFycy4kTEJSQUNFKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VMaXRlcmFsTWFwKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNJZGVudGlmaWVyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKG5ldyBJbXBsaWNpdFJlY2VpdmVyKHRoaXMuc3BhbihzdGFydCkpLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNOdW1iZXIoKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm5leHQudG9OdW1iZXIoKTtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc1N0cmluZygpKSB7XG4gICAgICBjb25zdCBsaXRlcmFsVmFsdWUgPSB0aGlzLm5leHQudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIGxpdGVyYWxWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID49IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJHt0aGlzLmlucHV0fWApO1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHt0aGlzLm5leHR9YCk7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZUV4cHJlc3Npb25MaXN0KHRlcm1pbmF0b3I6IG51bWJlcik6IEFTVFtdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFTVFtdID0gW107XG4gICAgaWYgKCF0aGlzLm5leHQuaXNDaGFyYWN0ZXIodGVybWluYXRvcikpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5wYXJzZVBpcGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VMaXRlcmFsTWFwKCk6IExpdGVyYWxNYXAge1xuICAgIGNvbnN0IGtleXM6IExpdGVyYWxNYXBLZXlbXSA9IFtdO1xuICAgIGNvbnN0IHZhbHVlczogQVNUW10gPSBbXTtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kTEJSQUNFKTtcbiAgICBpZiAoIXRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDRSkpIHtcbiAgICAgIHRoaXMucmJyYWNlc0V4cGVjdGVkKys7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHF1b3RlZCA9IHRoaXMubmV4dC5pc1N0cmluZygpO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpO1xuICAgICAgICBrZXlzLnB1c2goe2tleSwgcXVvdGVkfSk7XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRDT0xPTik7XG4gICAgICAgIHZhbHVlcy5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICAgIHRoaXMucmJyYWNlc0V4cGVjdGVkLS07XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUkJSQUNFKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTWFwKHRoaXMuc3BhbihzdGFydCksIGtleXMsIHZhbHVlcyk7XG4gIH1cblxuICBwYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZWNlaXZlcjogQVNULCBpc1NhZmUgPSBmYWxzZSk6IEFTVCB7XG4gICAgY29uc3Qgc3RhcnQgPSByZWNlaXZlci5zcGFuLnN0YXJ0O1xuICAgIGNvbnN0IGlkID0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkKCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnBhcnNlQ2FsbEFyZ3VtZW50cygpO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZC0tO1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuc3BhbihzdGFydCk7XG4gICAgICByZXR1cm4gaXNTYWZlID8gbmV3IFNhZmVNZXRob2RDYWxsKHNwYW4sIHJlY2VpdmVyLCBpZCwgYXJncykgOiBuZXcgTWV0aG9kQ2FsbChzcGFuLCByZWNlaXZlciwgaWQsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNTYWZlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcIlRoZSAnPy4nIG9wZXJhdG9yIGNhbm5vdCBiZSB1c2VkIGluIHRoZSBhc3NpZ25tZW50XCIpO1xuICAgICAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgU2FmZVByb3BlcnR5UmVhZCh0aGlzLnNwYW4oc3RhcnQpLCByZWNlaXZlciwgaWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIGlmICghdGhpcy5wYXJzZUFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkJpbmRpbmdzIGNhbm5vdCBjb250YWluIGFzc2lnbm1lbnRzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5V3JpdGUodGhpcy5zcGFuKHN0YXJ0KSwgcmVjZWl2ZXIsIGlkLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVJlYWQodGhpcy5zcGFuKHN0YXJ0KSwgcmVjZWl2ZXIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlQ2FsbEFyZ3VtZW50cygpOiBCaW5kaW5nUGlwZVtdIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHBvc2l0aW9uYWxzOiBBU1RbXSA9IFtdO1xuICAgIGRvIHtcbiAgICAgIHBvc2l0aW9uYWxzLnB1c2godGhpcy5wYXJzZVBpcGUoKSk7XG4gICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICByZXR1cm4gcG9zaXRpb25hbHMgYXMgQmluZGluZ1BpcGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpZGVudGlmaWVyLCBhIGtleXdvcmQsIGEgc3RyaW5nIHdpdGggYW4gb3B0aW9uYWwgYC1gIGluYmV0d2Vlbi5cbiAgICovXG4gIGV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGxldCBvcGVyYXRvckZvdW5kID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgcmVzdWx0ICs9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZE9yU3RyaW5nKCk7XG4gICAgICBvcGVyYXRvckZvdW5kID0gdGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiLVwiKTtcbiAgICAgIGlmIChvcGVyYXRvckZvdW5kKSB7XG4gICAgICAgIHJlc3VsdCArPSBcIi1cIjtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChvcGVyYXRvckZvdW5kKTtcblxuICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHBhcnNlVGVtcGxhdGVCaW5kaW5ncygpOiBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdCB7XG4gICAgY29uc3QgYmluZGluZ3M6IFRlbXBsYXRlQmluZGluZ1tdID0gW107XG4gICAgbGV0IHByZWZpeDogc3RyaW5nID0gbnVsbCE7XG4gICAgY29uc3Qgd2FybmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgbGV0IGtleUlzVmFyOiBib29sZWFuID0gdGhpcy5wZWVrS2V5d29yZExldCgpO1xuICAgICAgaWYgKGtleUlzVmFyKSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmF3S2V5ID0gdGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTtcbiAgICAgIGxldCBrZXkgPSByYXdLZXk7XG4gICAgICBpZiAoIWtleUlzVmFyKSB7XG4gICAgICAgIGlmIChwcmVmaXggPT09IG51bGwpIHtcbiAgICAgICAgICBwcmVmaXggPSBrZXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5ID0gcHJlZml4ICsga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT0xPTik7XG4gICAgICBsZXQgbmFtZTogc3RyaW5nID0gbnVsbCE7XG4gICAgICBsZXQgZXhwcmVzc2lvbjogQVNUV2l0aFNvdXJjZSA9IG51bGwhO1xuICAgICAgaWYgKGtleUlzVmFyKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpKSB7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IFwiJGltcGxpY2l0XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrS2V5d29yZEFzKCkpIHtcbiAgICAgICAgY29uc3QgbGV0U3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBjb25zdW1lIGBhc2BcbiAgICAgICAgbmFtZSA9IHJhd0tleTtcbiAgICAgICAga2V5ID0gdGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTsgLy8gcmVhZCBsb2NhbCB2YXIgbmFtZVxuICAgICAgICBrZXlJc1ZhciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmV4dCAhPT0gRU9GICYmICF0aGlzLnBlZWtLZXl3b3JkTGV0KCkpIHtcbiAgICAgICAgY29uc3Qgc3QgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICAgIGNvbnN0IGFzdCA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0IC0gdGhpcy5vZmZzZXQsIHRoaXMuaW5wdXRJbmRleCAtIHRoaXMub2Zmc2V0KTtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBBU1RXaXRoU291cmNlKGFzdCwgc291cmNlLCB0aGlzLmxvY2F0aW9uLCB0aGlzLmVycm9ycyk7XG4gICAgICB9XG4gICAgICBiaW5kaW5ncy5wdXNoKG5ldyBUZW1wbGF0ZUJpbmRpbmcodGhpcy5zcGFuKHN0YXJ0KSwga2V5LCBrZXlJc1ZhciwgbmFtZSwgZXhwcmVzc2lvbikpO1xuICAgICAgaWYgKHRoaXMucGVla0tleXdvcmRBcygpICYmICFrZXlJc1Zhcikge1xuICAgICAgICBjb25zdCBsZXRTdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7IC8vIGNvbnN1bWUgYGFzYFxuICAgICAgICBjb25zdCBsZXROYW1lID0gdGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTsgLy8gcmVhZCBsb2NhbCB2YXIgbmFtZVxuICAgICAgICBiaW5kaW5ncy5wdXNoKG5ldyBUZW1wbGF0ZUJpbmRpbmcodGhpcy5zcGFuKGxldFN0YXJ0KSwgbGV0TmFtZSwgdHJ1ZSwga2V5LCBudWxsISkpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pKSB7XG4gICAgICAgIHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdChiaW5kaW5ncywgd2FybmluZ3MsIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsKSB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChuZXcgUGFyc2VyRXJyb3IobWVzc2FnZSwgdGhpcy5pbnB1dCwgdGhpcy5sb2NhdGlvblRleHQoaW5kZXgpLCB0aGlzLmxvY2F0aW9uKSk7XG4gICAgdGhpcy5za2lwKCk7XG4gIH1cblxuICBwcml2YXRlIGxvY2F0aW9uVGV4dChpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGwpIHtcbiAgICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoID8gYGF0IGNvbHVtbiAke3RoaXMudG9rZW5zW2luZGV4XS5pbmRleCArIDF9IGluYCA6IGBhdCB0aGUgZW5kIG9mIHRoZSBleHByZXNzaW9uYDtcbiAgfVxuXG4gIC8vIEVycm9yIHJlY292ZXJ5IHNob3VsZCBza2lwIHRva2VucyB1bnRpbCBpdCBlbmNvdW50ZXJzIGEgcmVjb3ZlcnkgcG9pbnQuIHNraXAoKSB0cmVhdHNcbiAgLy8gdGhlIGVuZCBvZiBpbnB1dCBhbmQgYSAnOycgYXMgdW5jb25kaXRpb25hbGx5IGEgcmVjb3ZlcnkgcG9pbnQuIEl0IGFsc28gdHJlYXRzICcpJyxcbiAgLy8gJ30nIGFuZCAnXScgYXMgY29uZGl0aW9uYWwgcmVjb3ZlcnkgcG9pbnRzIGlmIG9uZSBvZiBjYWxsaW5nIHByb2R1Y3Rpb25zIGlzIGV4cGVjdGluZ1xuICAvLyBvbmUgb2YgdGhlc2Ugc3ltYm9scy4gVGhpcyBhbGxvd3Mgc2tpcCgpIHRvIHJlY292ZXIgZnJvbSBlcnJvcnMgc3VjaCBhcyAnKGEuKSArIDEnIGFsbG93aW5nXG4gIC8vIG1vcmUgb2YgdGhlIEFTVCB0byBiZSByZXRhaW5lZCAoaXQgZG9lc24ndCBza2lwIGFueSB0b2tlbnMgYXMgdGhlICcpJyBpcyByZXRhaW5lZCBiZWNhdXNlXG4gIC8vIG9mIHRoZSAnKCcgYmVnaW5zIGFuICcoJyA8ZXhwcj4gJyknIHByb2R1Y3Rpb24pLiBUaGUgcmVjb3ZlcnkgcG9pbnRzIG9mIGdyb3VwaW5nIHN5bWJvbHNcbiAgLy8gbXVzdCBiZSBjb25kaXRpb25hbCBhcyB0aGV5IG11c3QgYmUgc2tpcHBlZCBpZiBub25lIG9mIHRoZSBjYWxsaW5nIHByb2R1Y3Rpb25zIGFyZSBub3RcbiAgLy8gZXhwZWN0aW5nIHRoZSBjbG9zaW5nIHRva2VuIGVsc2Ugd2Ugd2lsbCBuZXZlciBtYWtlIHByb2dyZXNzIGluIHRoZSBjYXNlIG9mIGFuXG4gIC8vIGV4dHJhbmVvdXMgZ3JvdXAgY2xvc2luZyBzeW1ib2wgKHN1Y2ggYXMgYSBzdHJheSAnKScpLiBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgJzsnIGJlY2F1c2VcbiAgLy8gcGFyc2VDaGFpbigpIGlzIGFsd2F5cyB0aGUgcm9vdCBwcm9kdWN0aW9uIGFuZCBpdCBleHBlY3RzIGEgJzsnLlxuXG4gIC8vIElmIGEgcHJvZHVjdGlvbiBleHBlY3RzIG9uZSBvZiB0aGVzZSB0b2tlbiBpdCBpbmNyZW1lbnRzIHRoZSBjb3JyZXNwb25kaW5nIG5lc3RpbmcgY291bnQsXG4gIC8vIGFuZCB0aGVuIGRlY3JlbWVudHMgaXQganVzdCBwcmlvciB0byBjaGVja2luZyBpZiB0aGUgdG9rZW4gaXMgaW4gdGhlIGlucHV0LlxuICBwcml2YXRlIHNraXAoKSB7XG4gICAgbGV0IG4gPSB0aGlzLm5leHQ7XG4gICAgd2hpbGUgKFxuICAgICAgdGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCAmJlxuICAgICAgIW4uaXNDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikgJiZcbiAgICAgICh0aGlzLnJwYXJlbnNFeHBlY3RlZCA8PSAwIHx8ICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pKSAmJlxuICAgICAgKHRoaXMucmJyYWNlc0V4cGVjdGVkIDw9IDAgfHwgIW4uaXNDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDRSkpICYmXG4gICAgICAodGhpcy5yYnJhY2tldHNFeHBlY3RlZCA8PSAwIHx8ICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCkpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5uZXh0LmlzRXJyb3IoKSkge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBQYXJzZXJFcnJvcih0aGlzLm5leHQudG9TdHJpbmcoKSEsIHRoaXMuaW5wdXQsIHRoaXMubG9jYXRpb25UZXh0KCksIHRoaXMubG9jYXRpb24pKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgbiA9IHRoaXMubmV4dDtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU2ltcGxlRXhwcmVzc2lvbkNoZWNrZXIgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgc3RhdGljIGNoZWNrKGFzdDogQVNUKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHMgPSBuZXcgU2ltcGxlRXhwcmVzc2lvbkNoZWNrZXIoKTtcbiAgICBhc3QudmlzaXQocyk7XG4gICAgcmV0dXJuIHMuZXJyb3JzO1xuICB9XG5cbiAgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogUHJvcGVydHlXcml0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy52aXNpdEFsbChhc3QudmFsdWVzKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2goXCJwaXBlc1wiKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QWxsKGFzdHM6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBhc3RzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpIHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmNvbnN0IFRBR19UT19QTEFDRUhPTERFUl9OQU1FUzoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAnQSc6ICdMSU5LJyxcbiAgJ0InOiAnQk9MRF9URVhUJyxcbiAgJ0JSJzogJ0xJTkVfQlJFQUsnLFxuICAnRU0nOiAnRU1QSEFTSVNFRF9URVhUJyxcbiAgJ0gxJzogJ0hFQURJTkdfTEVWRUwxJyxcbiAgJ0gyJzogJ0hFQURJTkdfTEVWRUwyJyxcbiAgJ0gzJzogJ0hFQURJTkdfTEVWRUwzJyxcbiAgJ0g0JzogJ0hFQURJTkdfTEVWRUw0JyxcbiAgJ0g1JzogJ0hFQURJTkdfTEVWRUw1JyxcbiAgJ0g2JzogJ0hFQURJTkdfTEVWRUw2JyxcbiAgJ0hSJzogJ0hPUklaT05UQUxfUlVMRScsXG4gICdJJzogJ0lUQUxJQ19URVhUJyxcbiAgJ0xJJzogJ0xJU1RfSVRFTScsXG4gICdMSU5LJzogJ01FRElBX0xJTksnLFxuICAnT0wnOiAnT1JERVJFRF9MSVNUJyxcbiAgJ1AnOiAnUEFSQUdSQVBIJyxcbiAgJ1EnOiAnUVVPVEFUSU9OJyxcbiAgJ1MnOiAnU1RSSUtFVEhST1VHSF9URVhUJyxcbiAgJ1NNQUxMJzogJ1NNQUxMX1RFWFQnLFxuICAnU1VCJzogJ1NVQlNUUklQVCcsXG4gICdTVVAnOiAnU1VQRVJTQ1JJUFQnLFxuICAnVEJPRFknOiAnVEFCTEVfQk9EWScsXG4gICdURCc6ICdUQUJMRV9DRUxMJyxcbiAgJ1RGT09UJzogJ1RBQkxFX0ZPT1RFUicsXG4gICdUSCc6ICdUQUJMRV9IRUFERVJfQ0VMTCcsXG4gICdUSEVBRCc6ICdUQUJMRV9IRUFERVInLFxuICAnVFInOiAnVEFCTEVfUk9XJyxcbiAgJ1RUJzogJ01PTk9TUEFDRURfVEVYVCcsXG4gICdVJzogJ1VOREVSTElORURfVEVYVCcsXG4gICdVTCc6ICdVTk9SREVSRURfTElTVCcsXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdW5pcXVlIG5hbWVzIGZvciBwbGFjZWhvbGRlciB3aXRoIGRpZmZlcmVudCBjb250ZW50LlxuICpcbiAqIFJldHVybnMgdGhlIHNhbWUgcGxhY2Vob2xkZXIgbmFtZSB3aGVuIHRoZSBjb250ZW50IGlzIGlkZW50aWNhbC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyUmVnaXN0cnkge1xuICAvLyBDb3VudCB0aGUgb2NjdXJyZW5jZSBvZiB0aGUgYmFzZSBuYW1lIHRvcCBnZW5lcmF0ZSBhIHVuaXF1ZSBuYW1lXG4gIHByaXZhdGUgX3BsYWNlSG9sZGVyTmFtZUNvdW50czoge1trOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gIC8vIE1hcHMgc2lnbmF0dXJlIHRvIHBsYWNlaG9sZGVyIG5hbWVzXG4gIHByaXZhdGUgX3NpZ25hdHVyZVRvTmFtZToge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgZ2V0U3RhcnRUYWdQbGFjZWhvbGRlck5hbWUodGFnOiBzdHJpbmcsIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sIGlzVm9pZDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5faGFzaFRhZyh0YWcsIGF0dHJzLCBpc1ZvaWQpO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyVGFnID0gdGFnLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgYmFzZU5hbWUgPSBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVNbdXBwZXJUYWddIHx8IGBUQUdfJHt1cHBlclRhZ31gO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUoaXNWb2lkID8gYmFzZU5hbWUgOiBgU1RBUlRfJHtiYXNlTmFtZX1gKTtcblxuICAgIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdID0gbmFtZTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0Q2xvc2VUYWdQbGFjZWhvbGRlck5hbWUodGFnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuX2hhc2hDbG9zaW5nVGFnKHRhZyk7XG4gICAgaWYgKHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJUYWcgPSB0YWcudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBiYXNlTmFtZSA9IFRBR19UT19QTEFDRUhPTERFUl9OQU1FU1t1cHBlclRhZ10gfHwgYFRBR18ke3VwcGVyVGFnfWA7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShgQ0xPU0VfJHtiYXNlTmFtZX1gKTtcblxuICAgIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdID0gbmFtZTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXJOYW1lKG5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB1cHBlck5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYFBIOiAke3VwcGVyTmFtZX09JHtjb250ZW50fWA7XG4gICAgaWYgKHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV07XG4gICAgfVxuXG4gICAgY29uc3QgdW5pcXVlTmFtZSA9IHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZSh1cHBlck5hbWUpO1xuICAgIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdID0gdW5pcXVlTmFtZTtcblxuICAgIHJldHVybiB1bmlxdWVOYW1lO1xuICB9XG5cbiAgZ2V0VW5pcXVlUGxhY2Vob2xkZXIobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKG5hbWUudG9VcHBlckNhc2UoKSk7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBhIGhhc2ggZm9yIGEgdGFnIC0gZG9lcyBub3QgdGFrZSBhdHRyaWJ1dGUgb3JkZXIgaW50byBhY2NvdW50XG4gIHByaXZhdGUgX2hhc2hUYWcodGFnOiBzdHJpbmcsIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sIGlzVm9pZDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSBgPCR7dGFnfWA7XG4gICAgY29uc3Qgc3RyQXR0cnMgPSBPYmplY3Qua2V5cyhhdHRycykuc29ydCgpLm1hcCgobmFtZSkgPT4gYCAke25hbWV9PSR7YXR0cnNbbmFtZV19YCkuam9pbignJyk7XG4gICAgY29uc3QgZW5kID0gaXNWb2lkID8gJy8+JyA6IGA+PC8ke3RhZ30+YDtcblxuICAgIHJldHVybiBzdGFydCArIHN0ckF0dHJzICsgZW5kO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFzaENsb3NpbmdUYWcodGFnOiBzdHJpbmcpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faGFzaFRhZyhgLyR7dGFnfWAsIHt9LCBmYWxzZSk7IH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZVVuaXF1ZU5hbWUoYmFzZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzZWVuID0gdGhpcy5fcGxhY2VIb2xkZXJOYW1lQ291bnRzLmhhc093blByb3BlcnR5KGJhc2UpO1xuICAgIGlmICghc2Vlbikge1xuICAgICAgdGhpcy5fcGxhY2VIb2xkZXJOYW1lQ291bnRzW2Jhc2VdID0gMTtcbiAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gdGhpcy5fcGxhY2VIb2xkZXJOYW1lQ291bnRzW2Jhc2VdO1xuICAgIHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXSA9IGlkICsgMTtcbiAgICByZXR1cm4gYCR7YmFzZX1fJHtpZH1gO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCB7SW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4uL2FzdC9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHtMZXhlcn0gZnJvbSBcIi4vbGV4ZXJcIjtcbmltcG9ydCB7UGxhY2Vob2xkZXJSZWdpc3RyeX0gZnJvbSBcIi4uL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyXCI7XG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L2h0bWxfdGFnc1wiO1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuXG5jb25zdCBfZXhwUGFyc2VyID0gbmV3IFBhcnNlcihuZXcgTGV4ZXIoKSk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIGNvbnZlcnRpbmcgaHRtbCBub2RlcyB0byBhbiBpMThuIE1lc3NhZ2UgZ2l2ZW4gYW4gaW50ZXJwb2xhdGlvbkNvbmZpZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5KFxuICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnXG4pOiAobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IGkxOG4uTWVzc2FnZSB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgSTE4blZpc2l0b3IoX2V4cFBhcnNlciwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgcmV0dXJuIChub2RlczogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZykgPT5cbiAgICB2aXNpdG9yLnRvSTE4bk1lc3NhZ2Uobm9kZXMsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG59XG5cbmNsYXNzIEkxOG5WaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfaXNJY3U6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ljdURlcHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyUmVnaXN0cnk6IFBsYWNlaG9sZGVyUmVnaXN0cnk7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyVG9Db250ZW50OiB7W3BoTmFtZTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJUb01lc3NhZ2U6IHtbcGhOYW1lOiBzdHJpbmddOiBpMThuLk1lc3NhZ2V9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V4cHJlc3Npb25QYXJzZXI6IFBhcnNlciwgcHJpdmF0ZSBfaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZykge31cblxuICBwdWJsaWMgdG9JMThuTWVzc2FnZShub2RlczogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZyk6IGkxOG4uTWVzc2FnZSB7XG4gICAgdGhpcy5faXNJY3UgPSBub2Rlcy5sZW5ndGggPT09IDEgJiYgbm9kZXNbMF0gaW5zdGFuY2VvZiBodG1sLkV4cGFuc2lvbjtcbiAgICB0aGlzLl9pY3VEZXB0aCA9IDA7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeSA9IG5ldyBQbGFjZWhvbGRlclJlZ2lzdHJ5KCk7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnQgPSB7fTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvTWVzc2FnZSA9IHt9O1xuXG4gICAgY29uc3QgaTE4bm9kZXM6IGkxOG4uTm9kZVtdID0gaHRtbC52aXNpdEFsbCh0aGlzLCBub2Rlcywge30pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLk1lc3NhZ2UoaTE4bm9kZXMsIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50LCB0aGlzLl9wbGFjZWhvbGRlclRvTWVzc2FnZSwgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgY29uc3QgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGVsLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAvLyBEbyBub3QgdmlzaXQgdGhlIGF0dHJpYnV0ZXMsIHRyYW5zbGF0YWJsZSBvbmVzIGFyZSB0b3AtbGV2ZWwgQVNUc1xuICAgICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpc1ZvaWQ6IGJvb2xlYW4gPSBnZXRIdG1sVGFnRGVmaW5pdGlvbihlbC5uYW1lKS5pc1ZvaWQ7XG4gICAgY29uc3Qgc3RhcnRQaE5hbWUgPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFN0YXJ0VGFnUGxhY2Vob2xkZXJOYW1lKGVsLm5hbWUsIGF0dHJzLCBpc1ZvaWQpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W3N0YXJ0UGhOYW1lXSA9IGVsLnNvdXJjZVNwYW4gPyBlbC5zb3VyY2VTcGFuIS50b1N0cmluZygpIDogXCJcIjtcblxuICAgIGxldCBjbG9zZVBoTmFtZSA9IFwiXCI7XG5cbiAgICBpZiAoIWlzVm9pZCkge1xuICAgICAgY2xvc2VQaE5hbWUgPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldENsb3NlVGFnUGxhY2Vob2xkZXJOYW1lKGVsLm5hbWUpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbY2xvc2VQaE5hbWVdID0gYDwvJHtlbC5uYW1lfT5gO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgaTE4bi5UYWdQbGFjZWhvbGRlcihlbC5uYW1lLCBhdHRycywgc3RhcnRQaE5hbWUsIGNsb3NlUGhOYW1lLCBjaGlsZHJlbiwgaXNWb2lkLCBlbC5zb3VyY2VTcGFuISk7XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIHJldHVybiB0aGlzLl92aXNpdFRleHRXaXRoSW50ZXJwb2xhdGlvbihhdHRyaWJ1dGUudmFsdWUsIGF0dHJpYnV0ZS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2l0VGV4dFdpdGhJbnRlcnBvbGF0aW9uKHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIHRoaXMuX2ljdURlcHRoKys7XG4gICAgY29uc3QgaTE4bkljdUNhc2VzOiB7W2s6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcbiAgICBjb25zdCBpMThuSWN1ID0gbmV3IGkxOG4uSWN1KGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGkxOG5JY3VDYXNlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIGljdS5jYXNlcy5mb3JFYWNoKChjYXplKTogdm9pZCA9PiB7XG4gICAgICBpMThuSWN1Q2FzZXNbY2F6ZS52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoXG4gICAgICAgIGNhemUuZXhwcmVzc2lvbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMsIHt9KSksXG4gICAgICAgIGNhemUuZXhwU291cmNlU3BhblxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLl9pY3VEZXB0aC0tO1xuXG4gICAgaWYgKHRoaXMuX2lzSWN1IHx8IHRoaXMuX2ljdURlcHRoID4gMCkge1xuICAgICAgLy8gUmV0dXJucyBhbiBJQ1Ugbm9kZSB3aGVuOlxuICAgICAgLy8gLSB0aGUgbWVzc2FnZSAodnMgYSBwYXJ0IG9mIHRoZSBtZXNzYWdlKSBpcyBhbiBJQ1UgbWVzc2FnZSwgb3JcbiAgICAgIC8vIC0gdGhlIElDVSBtZXNzYWdlIGlzIG5lc3RlZC5cbiAgICAgIGNvbnN0IGV4cFBoID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRVbmlxdWVQbGFjZWhvbGRlcihgVkFSXyR7aWN1LnR5cGV9YCk7XG4gICAgICBpMThuSWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlciA9IGV4cFBoO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbZXhwUGhdID0gaWN1LnN3aXRjaFZhbHVlO1xuXG4gICAgICByZXR1cm4gaTE4bkljdTtcbiAgICB9XG5cbiAgICAvLyBFbHNlIHJldHVybnMgYSBwbGFjZWhvbGRlclxuICAgIC8vIElDVSBwbGFjZWhvbGRlcnMgc2hvdWxkIG5vdCBiZSByZXBsYWNlZCB3aXRoIHRoZWlyIG9yaWdpbmFsIGNvbnRlbnQgYnV0IHdpdGggdGhlIHRoZWlyXG4gICAgLy8gdHJhbnNsYXRpb25zLiBXZSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyB2aXNpdG9yICh0aGV5IGFyZSBub3QgcmUtZW50cmFudCkgdG8gY29tcHV0ZSB0aGVcbiAgICAvLyBtZXNzYWdlIGlkLlxuICAgIC8vIFRPRE8odmljYik6IGFkZCBhIGh0bWwuTm9kZSAtPiBpMThuLk1lc3NhZ2UgY2FjaGUgdG8gYXZvaWQgaGF2aW5nIHRvIHJlLWNyZWF0ZSB0aGUgbXNnXG4gICAgY29uc3QgcGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRQbGFjZWhvbGRlck5hbWUoXCJJQ1VcIiwgaWN1LnNvdXJjZVNwYW4udG9TdHJpbmcoKSk7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBJMThuVmlzaXRvcih0aGlzLl9leHByZXNzaW9uUGFyc2VyLCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvTWVzc2FnZVtwaE5hbWVdID0gdmlzaXRvci50b0kxOG5NZXNzYWdlKFtpY3VdLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgICByZXR1cm4gbmV3IGkxOG4uSWN1UGxhY2Vob2xkZXIoaTE4bkljdSwgcGhOYW1lLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogaHRtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVucmVhY2hhYmxlIGNvZGVcIik7XG4gIH1cblxuICBwcml2YXRlIF92aXNpdFRleHRXaXRoSW50ZXJwb2xhdGlvbih0ZXh0OiBzdHJpbmcsIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbik6IGkxOG4uTm9kZSB7XG4gICAgY29uc3Qgc3BsaXRJbnRlcnBvbGF0aW9uID0gdGhpcy5fZXhwcmVzc2lvblBhcnNlci5zcGxpdEludGVycG9sYXRpb24oXG4gICAgICB0ZXh0LFxuICAgICAgc291cmNlU3Bhbi5zdGFydC50b1N0cmluZygpLFxuICAgICAgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZ1xuICAgICk7XG5cbiAgICBpZiAoIXNwbGl0SW50ZXJwb2xhdGlvbikge1xuICAgICAgLy8gTm8gZXhwcmVzc2lvbiwgcmV0dXJuIGEgc2luZ2xlIHRleHRcbiAgICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQsIHNvdXJjZVNwYW4pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIGdyb3VwIG9mIHRleHQgKyBleHByZXNzaW9uc1xuICAgIGNvbnN0IG5vZGVzOiBpMThuLk5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBpMThuLkNvbnRhaW5lcihub2Rlcywgc291cmNlU3Bhbik7XG4gICAgY29uc3Qge3N0YXJ0OiBzRGVsaW1pdGVyLCBlbmQ6IGVEZWxpbWl0ZXJ9ID0gdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uID0gc3BsaXRJbnRlcnBvbGF0aW9uLmV4cHJlc3Npb25zW2ldO1xuICAgICAgY29uc3QgYmFzZU5hbWUgPSBleHRyYWN0UGxhY2Vob2xkZXJOYW1lKGV4cHJlc3Npb24pIHx8IFwiSU5URVJQT0xBVElPTlwiO1xuICAgICAgY29uc3QgcGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRQbGFjZWhvbGRlck5hbWUoYmFzZU5hbWUsIGV4cHJlc3Npb24pO1xuXG4gICAgICBpZiAoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbaV0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIE5vIG5lZWQgdG8gYWRkIGVtcHR5IHN0cmluZ3NcbiAgICAgICAgbm9kZXMucHVzaChuZXcgaTE4bi5UZXh0KHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2ldLCBzb3VyY2VTcGFuKSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uUGxhY2Vob2xkZXIoZXhwcmVzc2lvbiwgcGhOYW1lLCBzb3VyY2VTcGFuKSk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtwaE5hbWVdID0gc0RlbGltaXRlciArIGV4cHJlc3Npb24gKyBlRGVsaW1pdGVyO1xuICAgIH1cblxuICAgIC8vIFRoZSBsYXN0IGluZGV4IGNvbnRhaW5zIG5vIGV4cHJlc3Npb25cbiAgICBjb25zdCBsYXN0U3RyaW5nSWR4ID0gc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBpZiAoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbbGFzdFN0cmluZ0lkeF0ubGVuZ3RoKSB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlRleHQoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbbGFzdFN0cmluZ0lkeF0sIHNvdXJjZVNwYW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuXG5jb25zdCBfQ1VTVE9NX1BIX0VYUCA9IC9cXC9cXC9bXFxzXFxTXSppMThuW1xcc1xcU10qXFwoW1xcc1xcU10qcGhbXFxzXFxTXSo9W1xcc1xcU10qKFwifCcpKFtcXHNcXFNdKj8pXFwxW1xcc1xcU10qXFwpL2c7XG5cbmZ1bmN0aW9uIGV4dHJhY3RQbGFjZWhvbGRlck5hbWUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnB1dC5zcGxpdChfQ1VTVE9NX1BIX0VYUClbMl07XG59XG4iLCJpbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4uL2FzdC9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtjcmVhdGVJMThuTWVzc2FnZUZhY3Rvcnl9IGZyb20gXCIuL2kxOG5cIjtcbmltcG9ydCB7UGFyc2VyLCBQYXJzZVRyZWVSZXN1bHR9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L2h0bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuTWVzc2FnZXNCeUlkLCBQbGFjZWhvbGRlck1hcHBlcn0gZnJvbSBcIi4uL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7TWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNvbnN0IF9JMThOX0FUVFIgPSBcImkxOG5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlTWV0YWRhdGEge1xuICBtZWFuaW5nPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRykge1xuICAgIHN1cGVyKGdldEh0bWxUYWdEZWZpbml0aW9uKTtcbiAgfVxuXG4gIHBhcnNlKHNvdXJjZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcGFyc2VFeHBhbnNpb25Gb3JtcyA9IGZhbHNlKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICByZXR1cm4gc3VwZXIucGFyc2Uoc291cmNlLCB1cmwsIHBhcnNlRXhwYW5zaW9uRm9ybXMsIHRoaXMuaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCB0cmFuc2xhdGFibGUgbWVzc2FnZXMgZnJvbSBhbiBodG1sIEFTVFxuICAgKi9cbiAgZXh0cmFjdE1lc3NhZ2VzKG5vZGVzOiBodG1sLk5vZGVbXSk6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgVmlzaXRvcihbXCJ3cmFwcGVyXCJdKTtcbiAgICAvLyBDb25zdHJ1Y3QgYSBzaW5nbGUgZmFrZSByb290IGVsZW1lbnRcbiAgICBjb25zdCB3cmFwcGVyID0gbmV3IGh0bWwuRWxlbWVudChcIndyYXBwZXJcIiwgW10sIG5vZGVzLCB1bmRlZmluZWQhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIHZpc2l0b3IuZXh0cmFjdCh3cmFwcGVyLCB0aGlzLmludGVycG9sYXRpb25Db25maWcpO1xuICB9XG5cbiAgbWVyZ2VUcmFuc2xhdGlvbnMoXG4gICAgbm9kZXM6IGh0bWwuTm9kZVtdLFxuICAgIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGUsXG4gICAgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICBtZXRhZGF0YT86IE1lc3NhZ2VNZXRhZGF0YSxcbiAgICBpbXBsaWNpdFRhZ3M6IHN0cmluZ1tdID0gW11cbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoaW1wbGljaXRUYWdzKTtcbiAgICAvLyBDb25zdHJ1Y3QgYSBzaW5nbGUgZmFrZSByb290IGVsZW1lbnRcbiAgICBjb25zdCB3cmFwcGVyID0gbmV3IGh0bWwuRWxlbWVudChcIndyYXBwZXJcIiwgW10sIG5vZGVzLCB1bmRlZmluZWQhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIHZpc2l0b3IubWVyZ2Uod3JhcHBlciwgdHJhbnNsYXRpb25zLCB0aGlzLmludGVycG9sYXRpb25Db25maWcsIHBhcmFtcywgbWV0YWRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgcHVibGljIGVycm9yczogSTE4bkVycm9yW10pIHt9XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIHRyYW5zbGF0ZWQgbWVzc2FnZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgcHJpdmF0ZSBpMThuVG9IdG1sOiBJMThuVG9IdG1sVmlzaXRvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGkxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9LFxuICAgIHB1YmxpYyBkaWdlc3Q6IChtOiBpMThuLk1lc3NhZ2UpID0+IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICBwdWJsaWMgbWFwcGVyRmFjdG9yeT86IChtOiBpMThuLk1lc3NhZ2UpID0+IFBsYWNlaG9sZGVyTWFwcGVyLFxuICAgIGNvbnNvbGU/OiBDb25zb2xlXG4gICkge1xuICAgIHRoaXMuaTE4blRvSHRtbCA9IG5ldyBJMThuVG9IdG1sVmlzaXRvcihcbiAgICAgIGkxOG5Ob2Rlc0J5TXNnSWQsXG4gICAgICBkaWdlc3QsXG4gICAgICBtYXBwZXJGYWN0b3J5ISxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICAgIGNvbnNvbGVcbiAgICApO1xuICB9XG5cbiAgLy8gQ3JlYXRlcyBhIGBUcmFuc2xhdGlvbkJ1bmRsZWAgYnkgcGFyc2luZyB0aGUgZ2l2ZW4gYGNvbnRlbnRgIHdpdGggdGhlIGBzZXJpYWxpemVyYC5cbiAgc3RhdGljIGxvYWQoXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRpZ2VzdDogKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSkgPT4gc3RyaW5nLFxuICAgIGNyZWF0ZU5hbWVNYXBwZXI6IChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpID0+IFBsYWNlaG9sZGVyTWFwcGVyIHwgbnVsbCxcbiAgICBsb2FkRmN0OiAoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4gSTE4bk1lc3NhZ2VzQnlJZCxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogVHJhbnNsYXRpb25CdW5kbGUge1xuICAgIGNvbnN0IGkxOG5Ob2Rlc0J5TXNnSWQgPSBsb2FkRmN0KGNvbnRlbnQsIHVybCk7XG4gICAgY29uc3QgZGlnZXN0Rm4gPSAobTogaTE4bi5NZXNzYWdlKSA9PiBkaWdlc3QobSk7XG4gICAgY29uc3QgbWFwcGVyRmFjdG9yeSA9IChtOiBpMThuLk1lc3NhZ2UpID0+IGNyZWF0ZU5hbWVNYXBwZXIobSkhO1xuICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25CdW5kbGUoXG4gICAgICBpMThuTm9kZXNCeU1zZ0lkLFxuICAgICAgZGlnZXN0Rm4sXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgICBtYXBwZXJGYWN0b3J5LFxuICAgICAgY29uc29sZVxuICAgICk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiBhcyBIVE1MIG5vZGVzIGZyb20gdGhlIGdpdmVuIHNvdXJjZSBtZXNzYWdlLlxuICBnZXQoc3JjTXNnOiBpMThuLk1lc3NhZ2UsIHBhcmFtcyk6IGh0bWwuTm9kZVtdIHtcbiAgICBjb25zdCBodG1sUmVzID0gdGhpcy5pMThuVG9IdG1sLmNvbnZlcnQoc3JjTXNnLCBwYXJhbXMpO1xuICAgIGlmIChodG1sUmVzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihodG1sUmVzLmVycm9ycy5qb2luKFwiXFxuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFJlcy5ub2RlcztcbiAgfVxuXG4gIGhhcyhzcmNNc2c6IGkxOG4uTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpZ2VzdChzcmNNc2cpIGluIHRoaXMuaTE4bk5vZGVzQnlNc2dJZDtcbiAgfVxufVxuXG5jbGFzcyBJMThuVG9IdG1sVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHByaXZhdGUgX3NyY01zZzogaTE4bi5NZXNzYWdlO1xuICBwcml2YXRlIF9jb250ZXh0U3RhY2s6IHttc2c6IGkxOG4uTWVzc2FnZTsgbWFwcGVyOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmd9W10gPSBbXTtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXSA9IFtdO1xuICBwcml2YXRlIF9tYXBwZXI6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgcHJpdmF0ZSBfcGFyYW1LZXlzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fSxcbiAgICBwcml2YXRlIF9kaWdlc3Q6IChtOiBpMThuLk1lc3NhZ2UpID0+IHN0cmluZyxcbiAgICBwcml2YXRlIF9tYXBwZXJGYWN0b3J5OiAobTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlcixcbiAgICBwcml2YXRlIF9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgcHJpdmF0ZSBfaW50ZXJwb2xhdGlvbkNvbmZpZz86IEludGVycG9sYXRpb25Db25maWcsXG4gICAgcHJpdmF0ZSBfY29uc29sZT86IENvbnNvbGVcbiAgKSB7fVxuXG4gIGNvbnZlcnQoc3JjTXNnOiBpMThuLk1lc3NhZ2UsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7bm9kZXM6IGh0bWwuTm9kZVtdOyBlcnJvcnM6IEkxOG5FcnJvcltdfSB7XG4gICAgdGhpcy5fY29udGV4dFN0YWNrLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX3BhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG5cbiAgICAvLyBpMThuIHRvIHRleHRcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5jb252ZXJ0VG9UZXh0KHNyY01zZyk7XG5cbiAgICAvLyB0ZXh0IHRvIGh0bWxcbiAgICBjb25zdCB1cmwgPSBzcmNNc2cubm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5maWxlLnVybDtcbiAgICBjb25zdCBodG1sUGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoKS5wYXJzZSh0ZXh0LCB1cmwsIHRydWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVzOiBodG1sUGFyc2VyLnJvb3ROb2RlcyxcbiAgICAgIGVycm9yczogWy4uLnRoaXMuX2Vycm9ycywgLi4uaHRtbFBhcnNlci5lcnJvcnNdXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB0ZXh0LnZhbHVlO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLm1hcChrID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG5cbiAgICAvLyBUT0RPKHZpY2IpOiBPbmNlIGFsbCBmb3JtYXQgc3dpdGNoIHRvIHVzaW5nIGV4cHJlc3Npb24gcGxhY2Vob2xkZXJzXG4gICAgLy8gd2Ugc2hvdWxkIHRocm93IHdoZW4gdGhlIHBsYWNlaG9sZGVyIGlzIG5vdCBpbiB0aGUgc291cmNlIG1lc3NhZ2VcbiAgICBjb25zdCBleHAgPSB0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzLmhhc093blByb3BlcnR5KGljdS5leHByZXNzaW9uKVxuICAgICAgPyB0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzW2ljdS5leHByZXNzaW9uXVxuICAgICAgOiBpY3UuZXhwcmVzc2lvbjtcblxuICAgIHJldHVybiBgeyR7ZXhwfSwgJHtpY3UudHlwZX0sICR7Y2FzZXMuam9pbihcIiBcIil9fWA7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBwaE5hbWUgPSB0aGlzLl9tYXBwZXIocGgubmFtZSk7XG4gICAgaWYgKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnMuaGFzT3duUHJvcGVydHkocGhOYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvVmFsdWUodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyc1twaE5hbWVdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyVG9NZXNzYWdlLmhhc093blByb3BlcnR5KHBoTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1RleHQodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyVG9NZXNzYWdlW3BoTmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMuX2FkZEVycm9yKHBoLCBgVW5rbm93biBwbGFjZWhvbGRlciBcIiR7cGgubmFtZX1cImApO1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgLy8gTG9hZGVkIG1lc3NhZ2UgY29udGFpbnMgb25seSBwbGFjZWhvbGRlcnMgKHZzIHRhZyBhbmQgaWN1IHBsYWNlaG9sZGVycykuXG4gIC8vIEhvd2V2ZXIgd2hlbiBhIHRyYW5zbGF0aW9uIGNhbiBub3QgYmUgZm91bmQsIHdlIG5lZWQgdG8gc2VyaWFsaXplIHRoZSBzb3VyY2UgbWVzc2FnZVxuICAvLyB3aGljaCBjYW4gY29udGFpbiB0YWcgcGxhY2Vob2xkZXJzXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRhZyA9IGAke3BoLnRhZ31gO1xuICAgIGNvbnN0IGF0dHJzID0gT2JqZWN0LmtleXMocGguYXR0cnMpXG4gICAgICAubWFwKG5hbWUgPT4gYCR7bmFtZX09XCIke3BoLmF0dHJzW25hbWVdfVwiYClcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICBpZiAocGguaXNWb2lkKSB7XG4gICAgICByZXR1cm4gYDwke3RhZ30gJHthdHRyc30vPmA7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gcGguY2hpbGRyZW4ubWFwKChjOiBpMThuLk5vZGUpID0+IGMudmlzaXQodGhpcykpLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIGA8JHt0YWd9ICR7YXR0cnN9PiR7Y2hpbGRyZW59PC8ke3RhZ30+YDtcbiAgfVxuXG4gIC8vIExvYWRlZCBtZXNzYWdlIGNvbnRhaW5zIG9ubHkgcGxhY2Vob2xkZXJzICh2cyB0YWcgYW5kIGljdSBwbGFjZWhvbGRlcnMpLlxuICAvLyBIb3dldmVyIHdoZW4gYSB0cmFuc2xhdGlvbiBjYW4gbm90IGJlIGZvdW5kLCB3ZSBuZWVkIHRvIHNlcmlhbGl6ZSB0aGUgc291cmNlIG1lc3NhZ2VcbiAgLy8gd2hpY2ggY2FuIGNvbnRhaW4gdGFnIHBsYWNlaG9sZGVyc1xuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBBbiBJQ1UgcGxhY2Vob2xkZXIgcmVmZXJlbmNlcyB0aGUgc291cmNlIG1lc3NhZ2UgdG8gYmUgc2VyaWFsaXplZFxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1RleHQodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyVG9NZXNzYWdlW3BoLm5hbWVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgc291cmNlIG1lc3NhZ2UgdG8gYSB0cmFuc2xhdGVkIHRleHQgc3RyaW5nOlxuICAgKiAtIHRleHQgbm9kZXMgYXJlIHJlcGxhY2VkIHdpdGggdGhlaXIgdHJhbnNsYXRpb24sXG4gICAqIC0gcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIGNvbnRlbnQsXG4gICAqIC0gSUNVIG5vZGVzIGFyZSBjb252ZXJ0ZWQgdG8gSUNVIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0VG9UZXh0KHNyY01zZzogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuX2RpZ2VzdChzcmNNc2cpO1xuXG4gICAgY29uc3QgbWFwcGVyID0gdGhpcy5fbWFwcGVyRmFjdG9yeSA/IHRoaXMuX21hcHBlckZhY3Rvcnkoc3JjTXNnKSA6IG51bGw7XG4gICAgbGV0IG5vZGVzOiBpMThuLk5vZGVbXTtcblxuICAgIHRoaXMuX2NvbnRleHRTdGFjay5wdXNoKHttc2c6IHRoaXMuX3NyY01zZywgbWFwcGVyOiB0aGlzLl9tYXBwZXJ9KTtcbiAgICB0aGlzLl9zcmNNc2cgPSBzcmNNc2c7XG5cbiAgICBpZiAodGhpcy5faTE4bk5vZGVzQnlNc2dJZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIC8vIFdoZW4gdGhlcmUgaXMgYSB0cmFuc2xhdGlvbiB1c2UgaXRzIG5vZGVzIGFzIHRoZSBzb3VyY2VcbiAgICAgIC8vIEFuZCBjcmVhdGUgYSBtYXBwZXIgdG8gY29udmVydCBzZXJpYWxpemVkIHBsYWNlaG9sZGVyIG5hbWVzIHRvIGludGVybmFsIG5hbWVzXG4gICAgICBub2RlcyA9IHRoaXMuX2kxOG5Ob2Rlc0J5TXNnSWRbaWRdO1xuICAgICAgdGhpcy5fbWFwcGVyID0gKG5hbWU6IHN0cmluZykgPT4gKG1hcHBlciA/IG1hcHBlci50b0ludGVybmFsTmFtZShuYW1lKSEgOiBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2hlbiBubyB0cmFuc2xhdGlvbiBoYXMgYmVlbiBmb3VuZFxuICAgICAgLy8gLSByZXBvcnQgYW4gZXJyb3IgLyBhIHdhcm5pbmcgLyBub3RoaW5nLFxuICAgICAgLy8gLSB1c2UgdGhlIG5vZGVzIGZyb20gdGhlIG9yaWdpbmFsIG1lc3NhZ2VcbiAgICAgIC8vIC0gcGxhY2Vob2xkZXJzIGFyZSBhbHJlYWR5IGludGVybmFsIGFuZCBuZWVkIG5vIG1hcHBlclxuICAgICAgaWYgKHRoaXMuX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID09PSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5FcnJvcikge1xuICAgICAgICB0aGlzLl9hZGRFcnJvcihzcmNNc2cubm9kZXNbMF0sIGBNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBtZXNzYWdlIFwiJHtpZH1cImApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25zb2xlICYmIHRoaXMuX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID09PSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nKSB7XG4gICAgICAgIHRoaXMuX2NvbnNvbGUud2FybihgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3IgbWVzc2FnZSBcIiR7aWR9XCJgKTtcbiAgICAgIH1cbiAgICAgIG5vZGVzID0gc3JjTXNnLm5vZGVzO1xuICAgICAgdGhpcy5fbWFwcGVyID0gKG5hbWU6IHN0cmluZykgPT4gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IG5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpLmpvaW4oXCJcIik7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHRTdGFjay5wb3AoKSE7XG4gICAgdGhpcy5fc3JjTXNnID0gY29udGV4dC5tc2c7XG4gICAgdGhpcy5fbWFwcGVyID0gY29udGV4dC5tYXBwZXI7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb1ZhbHVlKHBsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtID0gcGxhY2Vob2xkZXIucmVwbGFjZSh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0LCBcIlwiKS5yZXBsYWNlKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuZW5kLCBcIlwiKTtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1LZXlzLmluZGV4T2YocGFyYW0pICE9PSAtMSA/IHRoaXMuX3BhcmFtc1twYXJhbV0gOiBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKGVsOiBpMThuLk5vZGUsIG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihlbC5zb3VyY2VTcGFuLCBtc2cpKTtcbiAgfVxufVxuXG5lbnVtIFZpc2l0b3JNb2RlIHtcbiAgRXh0cmFjdCxcbiAgTWVyZ2Vcbn1cblxuLyoqXG4gKiBUaGlzIFZpc2l0b3IgaXMgdXNlZDpcbiAqIDEuIHRvIGV4dHJhY3QgYWxsIHRoZSB0cmFuc2xhdGFibGUgc3RyaW5ncyBmcm9tIGFuIGh0bWwgQVNUIChzZWUgYGV4dHJhY3QoKWApLFxuICogMi4gdG8gcmVwbGFjZSB0aGUgdHJhbnNsYXRhYmxlIHN0cmluZ3Mgd2l0aCB0aGUgYWN0dWFsIHRyYW5zbGF0aW9ucyAoc2VlIGBtZXJnZSgpYClcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgVmlzaXRvciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgZGVwdGg6IG51bWJlcjtcblxuICAvLyA8ZWwgaTE4bj4uLi48L2VsPlxuICBwcml2YXRlIGluSTE4bk5vZGU6IGJvb2xlYW47XG4gIHByaXZhdGUgaW5JbXBsaWNpdE5vZGU6IGJvb2xlYW47XG5cbiAgLy8gPCEtLWkxOG4tLT4uLi48IS0tL2kxOG4tLT5cbiAgcHJpdmF0ZSBpbkkxOG5CbG9jazogYm9vbGVhbjtcbiAgcHJpdmF0ZSBibG9ja0NoaWxkcmVuOiBodG1sLk5vZGVbXSA9IFtdO1xuICBwcml2YXRlIGJsb2NrU3RhcnREZXB0aDogbnVtYmVyO1xuXG4gIC8vIHs8aWN1IG1lc3NhZ2U+fVxuICBwcml2YXRlIGluSWN1OiBib29sZWFuO1xuXG4gIC8vIHNldCB0byB2b2lkIDAgd2hlbiBub3QgaW4gYSBzZWN0aW9uXG4gIHByaXZhdGUgbXNnQ291bnRBdFNlY3Rpb25TdGFydDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGVycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgbW9kZTogVmlzaXRvck1vZGU7XG5cbiAgLy8gVmlzaXRvck1vZGUuRXh0cmFjdCBvbmx5XG4gIHByaXZhdGUgbWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdO1xuXG4gIC8vIFZpc2l0b3JNb2RlLk1lcmdlIG9ubHlcbiAgcHJpdmF0ZSB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlO1xuICBwcml2YXRlIGNyZWF0ZUkxOG5NZXNzYWdlOiAobXNnOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiBpMThuLk1lc3NhZ2U7XG4gIHByaXZhdGUgbWV0YWRhdGE6IE1lc3NhZ2VNZXRhZGF0YTtcbiAgcHJpdmF0ZSBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ltcGxpY2l0VGFnczogc3RyaW5nW10gPSBbXSkge31cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIG1lc3NhZ2VzIGZyb20gdGhlIHRyZWVcbiAgICovXG4gIGV4dHJhY3Qobm9kZTogaHRtbC5Ob2RlLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgdGhpcy5pbml0KFZpc2l0b3JNb2RlLkV4dHJhY3QsIGludGVycG9sYXRpb25Db25maWcpO1xuXG4gICAgbm9kZS52aXNpdCh0aGlzLCBudWxsKTtcblxuICAgIGlmICh0aGlzLmluSTE4bkJsb2NrKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuY2xvc2VkIGJsb2NrXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRXh0cmFjdGlvblJlc3VsdCh0aGlzLm1lc3NhZ2VzLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHRyZWUgd2hlcmUgYWxsIHRyYW5zbGF0YWJsZSBub2RlcyBhcmUgdHJhbnNsYXRlZFxuICAgKi9cbiAgbWVyZ2UoXG4gICAgbm9kZTogaHRtbC5Ob2RlLFxuICAgIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGUsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LFxuICAgIG1ldGFkYXRhOiBNZXNzYWdlTWV0YWRhdGEgPSB7fVxuICApOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHRoaXMuaW5pdChWaXNpdG9yTW9kZS5NZXJnZSwgaW50ZXJwb2xhdGlvbkNvbmZpZywgcGFyYW1zKTtcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcbiAgICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVkTm9kZSA9IG5vZGUudmlzaXQodGhpcywgbnVsbCk7XG5cbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jaykge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZSwgXCJVbmNsb3NlZCBibG9ja1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdCh0cmFuc2xhdGVkTm9kZS5jaGlsZHJlbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAvLyBQYXJzZSBjYXNlcyBmb3IgdHJhbnNsYXRhYmxlIGh0bWwgYXR0cmlidXRlc1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBodG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgcmV0dXJuIG5ldyBodG1sLkV4cGFuc2lvbkNhc2UoXG4gICAgICAgIGljdUNhc2UudmFsdWUsXG4gICAgICAgIGV4cHJlc3Npb24sXG4gICAgICAgIGljdUNhc2Uuc291cmNlU3BhbixcbiAgICAgICAgaWN1Q2FzZS52YWx1ZVNvdXJjZVNwYW4sXG4gICAgICAgIGljdUNhc2UuZXhwU291cmNlU3BhblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBodG1sLkV4cGFuc2lvbiB7XG4gICAgdGhpcy5tYXlCZUFkZEJsb2NrQ2hpbGRyZW4oaWN1KTtcblxuICAgIGNvbnN0IHdhc0luSWN1ID0gdGhpcy5pbkljdTtcblxuICAgIGlmICghdGhpcy5pbkljdSkge1xuICAgICAgLy8gbmVzdGVkIElDVSBtZXNzYWdlcyBzaG91bGQgbm90IGJlIGV4dHJhY3RlZCBidXQgdG9wLWxldmVsIHRyYW5zbGF0ZWQgYXMgYSB3aG9sZVxuICAgICAgaWYgKHRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hZGRNZXNzYWdlKFtpY3VdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5JY3UgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhc2VzID0gaHRtbC52aXNpdEFsbCh0aGlzLCBpY3UuY2FzZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGljdSA9IG5ldyBodG1sLkV4cGFuc2lvbihpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlcywgaWN1LnNvdXJjZVNwYW4sIGljdS5zd2l0Y2hWYWx1ZVNvdXJjZVNwYW4pO1xuICAgIH1cblxuICAgIHRoaXMuaW5JY3UgPSB3YXNJbkljdTtcblxuICAgIHJldHVybiBpY3U7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGh0bWwuVGV4dCB7XG4gICAgaWYgKHRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMubWF5QmVBZGRCbG9ja0NoaWxkcmVuKHRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBodG1sLkVsZW1lbnQgfCBudWxsIHtcbiAgICB0aGlzLm1heUJlQWRkQmxvY2tDaGlsZHJlbihlbCk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIGNvbnN0IHdhc0luSTE4bk5vZGUgPSB0aGlzLmluSTE4bk5vZGU7XG4gICAgY29uc3Qgd2FzSW5JbXBsaWNpdE5vZGUgPSB0aGlzLmluSW1wbGljaXROb2RlO1xuICAgIGxldCBjaGlsZE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICAgIGxldCB0cmFuc2xhdGVkQ2hpbGROb2RlczogaHRtbC5Ob2RlW10gPSB1bmRlZmluZWQhO1xuXG4gICAgLy8gRXh0cmFjdDpcbiAgICAvLyAtIHRvcCBsZXZlbCBub2RlcyB3aXRoIHRoZSAoaW1wbGljaXQpIFwiaTE4blwiIGF0dHJpYnV0ZSBpZiBub3QgYWxyZWFkeSBpbiBhIHNlY3Rpb25cbiAgICAvLyAtIElDVSBtZXNzYWdlc1xuICAgIGNvbnN0IGkxOG5BdHRyID0gZ2V0STE4bkF0dHIoZWwpO1xuICAgIGNvbnN0IGlzSW1wbGljaXQgPSB0aGlzLl9pbXBsaWNpdFRhZ3Muc29tZSh0YWcgPT4gZWwubmFtZSA9PT0gdGFnKSAmJiAhdGhpcy5pbkljdSAmJiAhdGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbjtcbiAgICBjb25zdCBpc1RvcExldmVsSW1wbGljaXQgPSAhd2FzSW5JbXBsaWNpdE5vZGUgJiYgaXNJbXBsaWNpdDtcbiAgICB0aGlzLmluSW1wbGljaXROb2RlID0gd2FzSW5JbXBsaWNpdE5vZGUgfHwgaXNJbXBsaWNpdDtcbiAgICBpZiAoIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24gJiYgIXRoaXMuaW5JY3UpIHtcbiAgICAgIGlmIChpMThuQXR0ciB8fCBpc1RvcExldmVsSW1wbGljaXQpIHtcbiAgICAgICAgdGhpcy5pbkkxOG5Ob2RlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZShlbC5jaGlsZHJlbiwgdGhpcy5tZXRhZGF0YSkhO1xuICAgICAgICB0cmFuc2xhdGVkQ2hpbGROb2RlcyA9IHRoaXMudHJhbnNsYXRlTWVzc2FnZShlbCwgbWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLkV4dHJhY3QpIHtcbiAgICAgICAgY29uc3QgaXNUcmFuc2xhdGFibGUgPSBpMThuQXR0ciB8fCBpc1RvcExldmVsSW1wbGljaXQ7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0YWJsZSkge1xuICAgICAgICAgIHRoaXMub3BlblRyYW5zbGF0YWJsZVNlY3Rpb24oZWwpO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGFibGUpIHtcbiAgICAgICAgICB0aGlzLl9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb24oZWwsIGVsLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0KSB7XG4gICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGVsLCBcIkNvdWxkIG5vdCBtYXJrIGFuIGVsZW1lbnQgYXMgdHJhbnNsYXRhYmxlIGluc2lkZSBhIHRyYW5zbGF0YWJsZSBzZWN0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIC8vIERlc2NlbmQgaW50byBjaGlsZCBub2RlcyBmb3IgZXh0cmFjdGlvblxuICAgICAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgY29uc3QgdmlzaXROb2RlcyA9IHRyYW5zbGF0ZWRDaGlsZE5vZGVzIHx8IGVsLmNoaWxkcmVuO1xuICAgICAgdmlzaXROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IGNoaWxkLnZpc2l0KHRoaXMsIGNvbnRleHQpO1xuICAgICAgICBpZiAodmlzaXRlZCAmJiAhdGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICAgIC8vIERvIG5vdCBhZGQgdGhlIGNoaWxkcmVuIGZyb20gdHJhbnNsYXRhYmxlIHNlY3Rpb25zICg9IGkxOG4gYmxvY2tzIGhlcmUpXG4gICAgICAgICAgLy8gVGhleSB3aWxsIGJlIGFkZGVkIGxhdGVyIGluIHRoaXMgbG9vcCB3aGVuIHRoZSBibG9jayBjbG9zZXMgKGkuZS4gb24gYDwhLS0gL2kxOG4gLS0+YClcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5jb25jYXQodmlzaXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVwdGgtLTtcbiAgICB0aGlzLmluSTE4bk5vZGUgPSB3YXNJbkkxOG5Ob2RlO1xuICAgIHRoaXMuaW5JbXBsaWNpdE5vZGUgPSB3YXNJbkltcGxpY2l0Tm9kZTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICByZXR1cm4gbmV3IGh0bWwuRWxlbWVudChlbC5uYW1lLCBbXSwgY2hpbGROb2RlcywgZWwuc291cmNlU3BhbiwgZWwuc3RhcnRTb3VyY2VTcGFuLCBlbC5lbmRTb3VyY2VTcGFuKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVucmVhY2hhYmxlIGNvZGVcIik7XG4gIH1cblxuICBwcml2YXRlIGluaXQobW9kZTogVmlzaXRvck1vZGUsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgdGhpcy5pbkkxOG5CbG9jayA9IGZhbHNlO1xuICAgIHRoaXMuaW5JMThuTm9kZSA9IGZhbHNlO1xuICAgIHRoaXMuZGVwdGggPSAwO1xuICAgIHRoaXMuaW5JY3UgPSBmYWxzZTtcbiAgICB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5pbkltcGxpY2l0Tm9kZSA9IGZhbHNlO1xuICAgIHRoaXMuY3JlYXRlSTE4bk1lc3NhZ2UgPSBjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnkoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICAvLyBhZGQgYSB0cmFuc2xhdGFibGUgbWVzc2FnZVxuICBwcml2YXRlIGFkZE1lc3NhZ2UoYXN0OiBodG1sLk5vZGVbXSwge21lYW5pbmcgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGlkID0gXCJcIn0gPSB7fSk6IGkxOG4uTWVzc2FnZSB8IG51bGwge1xuICAgIGlmIChcbiAgICAgIGFzdC5sZW5ndGggPT09IDAgfHxcbiAgICAgIChhc3QubGVuZ3RoID09PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGh0bWwuQXR0cmlidXRlICYmICEoYXN0WzBdIGFzIGh0bWwuQXR0cmlidXRlKS52YWx1ZSlcbiAgICApIHtcbiAgICAgIC8vIERvIG5vdCBjcmVhdGUgZW1wdHkgbWVzc2FnZXNcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmNyZWF0ZUkxOG5NZXNzYWdlKGFzdCwgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICAvLyBUcmFuc2xhdGVzIHRoZSBnaXZlbiBtZXNzYWdlIGdpdmVuIHRoZSBgVHJhbnNsYXRpb25CdW5kbGVgXG4gIC8vIFRoaXMgaXMgdXNlZCBmb3IgdHJhbnNsYXRpbmcgZWxlbWVudHMgLyBibG9ja3MgLSBzZWUgYF90cmFuc2xhdGVBdHRyaWJ1dGVzYCBmb3IgYXR0cmlidXRlc1xuICAvLyBuby1vcCB3aGVuIGNhbGxlZCBpbiBleHRyYWN0aW9uIG1vZGUgKHJldHVybnMgW10pXG4gIHByaXZhdGUgdHJhbnNsYXRlTWVzc2FnZShlbDogaHRtbC5Ob2RlLCBtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBodG1sLk5vZGVbXSB7XG4gICAgaWYgKG1lc3NhZ2UgJiYgdGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLnRyYW5zbGF0aW9ucy5nZXQobWVzc2FnZSwgdGhpcy5wYXJhbXMpO1xuICAgICAgaWYgKG5vZGVzKSB7XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoZWwsIGBUcmFuc2xhdGlvbiB1bmF2YWlsYWJsZSBmb3IgbWVzc2FnZSBpZD1cIiR7dGhpcy50cmFuc2xhdGlvbnMuZGlnZXN0KG1lc3NhZ2UpfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgbm9kZSBhcyBhIGNoaWxkIG9mIHRoZSBibG9jayB3aGVuOlxuICAgKiAtIHdlIGFyZSBpbiBhIGJsb2NrLFxuICAgKiAtIHdlIGFyZSBub3QgaW5zaWRlIGEgSUNVIG1lc3NhZ2UgKHRob3NlIGFyZSBoYW5kbGVkIHNlcGFyYXRlbHkpLFxuICAgKiAtIHRoZSBub2RlIGlzIGEgXCJkaXJlY3QgY2hpbGRcIiBvZiB0aGUgYmxvY2tcbiAgICovXG4gIHByaXZhdGUgbWF5QmVBZGRCbG9ja0NoaWxkcmVuKG5vZGU6IGh0bWwuTm9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluSTE4bkJsb2NrICYmICF0aGlzLmluSWN1ICYmIHRoaXMuZGVwdGggPT09IHRoaXMuYmxvY2tTdGFydERlcHRoKSB7XG4gICAgICB0aGlzLmJsb2NrQ2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgdGhlIHN0YXJ0IG9mIGEgc2VjdGlvbiwgc2VlIGBfY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uYFxuICAgKi9cbiAgcHJpdmF0ZSBvcGVuVHJhbnNsYXRhYmxlU2VjdGlvbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZSwgXCJVbmV4cGVjdGVkIHNlY3Rpb24gc3RhcnRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHRoaXMubWVzc2FnZXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHRyYW5zbGF0YWJsZSBzZWN0aW9uIGNvdWxkIGJlOlxuICAgKiAtIHRoZSBjb250ZW50IG9mIHRyYW5zbGF0YWJsZSBlbGVtZW50LFxuICAgKiAtIG5vZGVzIGJldHdlZW4gYDwhLS0gaTE4biAtLT5gIGFuZCBgPCEtLSAvaTE4biAtLT5gIGNvbW1lbnRzXG4gICAqL1xuICBwcml2YXRlIGdldCBpc0luVHJhbnNsYXRhYmxlU2VjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ICE9PSB2b2lkIDA7XG4gIH1cblxuICAvKipcbiAgICogVGVybWluYXRlcyBhIHNlY3Rpb24uXG4gICAqXG4gICAqIElmIGEgc2VjdGlvbiBoYXMgb25seSBvbmUgc2lnbmlmaWNhbnQgY2hpbGRyZW4gKGNvbW1lbnRzIG5vdCBzaWduaWZpY2FudCkgdGhlbiB3ZSBzaG91bGQgbm90XG4gICAqIGtlZXAgdGhlIG1lc3NhZ2UgZnJvbSB0aGlzIGNoaWxkcmVuOlxuICAgKlxuICAgKiBgPHAgaTE4bj1cIm1lYW5pbmd8ZGVzY3JpcHRpb25cIj57SUNVIG1lc3NhZ2V9PC9wPmAgd291bGQgcHJvZHVjZSB0d28gbWVzc2FnZXM6XG4gICAqIC0gb25lIGZvciB0aGUgPHA+IGNvbnRlbnQgd2l0aCBtZWFuaW5nIGFuZCBkZXNjcmlwdGlvbixcbiAgICogLSBhbm90aGVyIG9uZSBmb3IgdGhlIElDVSBtZXNzYWdlLlxuICAgKlxuICAgKiBJbiB0aGlzIGNhc2UgdGhlIGxhc3QgbWVzc2FnZSBpcyBkaXNjYXJkZWQgYXMgaXQgY29udGFpbnMgbGVzcyBpbmZvcm1hdGlvbiAodGhlIEFTVCBpc1xuICAgKiBvdGhlcndpc2UgaWRlbnRpY2FsKS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHdlIHNob3VsZCBzdGlsbCBrZWVwIG1lc3NhZ2VzIGV4dHJhY3RlZCBmcm9tIGF0dHJpYnV0ZXMgaW5zaWRlIHRoZSBzZWN0aW9uIChpZSBpbiB0aGVcbiAgICogSUNVIG1lc3NhZ2UgaGVyZSlcbiAgICovXG4gIHByaXZhdGUgX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbihub2RlOiBodG1sLk5vZGUsIGRpcmVjdENoaWxkcmVuOiBodG1sLk5vZGVbXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZSwgXCJVbmV4cGVjdGVkIHNlY3Rpb24gZW5kXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQ7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRDaGlsZHJlbjogbnVtYmVyID0gZGlyZWN0Q2hpbGRyZW4ucmVkdWNlKFxuICAgICAgKGNvdW50OiBudW1iZXIsIG46IGh0bWwuTm9kZSk6IG51bWJlciA9PiBjb3VudCArIChuIGluc3RhbmNlb2YgaHRtbC5Db21tZW50ID8gMCA6IDEpLFxuICAgICAgMFxuICAgICk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRDaGlsZHJlbiA9PT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWVzc2FnZXMubGVuZ3RoIC0gMTsgaSA+PSBzdGFydEluZGV4ITsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGFzdCA9IHRoaXMubWVzc2FnZXNbaV0ubm9kZXM7XG4gICAgICAgIGlmICghKGFzdC5sZW5ndGggPT09IDEgJiYgYXN0WzBdIGluc3RhbmNlb2YgaTE4bi5UZXh0KSkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwb3J0RXJyb3Iobm9kZTogaHRtbC5Ob2RlLCBtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtc2cpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJMThuQXR0cihwOiBodG1sLkVsZW1lbnQpOiBodG1sLkF0dHJpYnV0ZSB8IG51bGwge1xuICByZXR1cm4gcC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBfSTE4Tl9BVFRSKSB8fCBudWxsO1xufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgTE9DQUxFX0lELFxuICBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgT3B0aW9uYWwsXG4gIFRSQU5TTEFUSU9OUyxcbiAgVFJBTlNMQVRJT05TX0ZPUk1BVFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHt4bGlmZkRpZ2VzdCwgeGxpZmZMb2FkVG9JMThufSBmcm9tIFwiLi9zZXJpYWxpemVycy94bGlmZlwiO1xuaW1wb3J0IHt4bGlmZjJEaWdlc3QsIHhsaWZmMkxvYWRUb0kxOG59IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3hsaWZmMlwiO1xuaW1wb3J0IHt4dGJEaWdlc3QsIHh0YkxvYWRUb0kxOG4sIHh0Yk1hcHBlcn0gZnJvbSBcIi4vc2VyaWFsaXplcnMveHRiXCI7XG5pbXBvcnQge0h0bWxQYXJzZXIsIFRyYW5zbGF0aW9uQnVuZGxlfSBmcm9tIFwiLi9wYXJzZXIvaHRtbFwiO1xuaW1wb3J0IHtJMThuTWVzc2FnZXNCeUlkLCBzZXJpYWxpemVOb2Rlc30gZnJvbSBcIi4vc2VyaWFsaXplcnMvc2VyaWFsaXplclwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9hc3QvaTE4bl9hc3RcIjtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEkxOG4ge1xuICAoZGVmOiBzdHJpbmcgfCBJMThuRGVmLCBwYXJhbXM/OiB7W2tleTogc3RyaW5nXTogYW55fSk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJMThuRGVmIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIG1lYW5pbmc/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTUlTU0lOR19UUkFOU0xBVElPTl9TVFJBVEVHWSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneT4oXG4gIFwiTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3lcIlxuKTtcblxuLyoqXG4gKiBBIHNwZWN1bGF0aXZlIHBvbHlmaWxsIHRvIHVzZSBpMThuIGNvZGUgdHJhbnNsYXRpb25zXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJMThuIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUUkFOU0xBVElPTlNfRk9STUFUKSBmb3JtYXQ6IHN0cmluZyxcbiAgICBASW5qZWN0KFRSQU5TTEFUSU9OUykgdHJhbnNsYXRpb25zOiBzdHJpbmcsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChNSVNTSU5HX1RSQU5TTEFUSU9OX1NUUkFURUdZKVxuICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lldhcm5pbmdcbiAgKSB7XG4gICAgbGV0IGxvYWRGY3Q6IChjb250ZW50OiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiBJMThuTWVzc2FnZXNCeUlkO1xuICAgIGxldCBkaWdlc3Q6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBzdHJpbmc7XG4gICAgbGV0IGNyZWF0ZU1hcHBlciA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBudWxsO1xuICAgIGZvcm1hdCA9IChmb3JtYXQgfHwgXCJ4bGZcIikudG9Mb3dlckNhc2UoKTtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSBcInh0YlwiOlxuICAgICAgICBsb2FkRmN0ID0geHRiTG9hZFRvSTE4bjtcbiAgICAgICAgZGlnZXN0ID0geHRiRGlnZXN0O1xuICAgICAgICBjcmVhdGVNYXBwZXIgPSB4dGJNYXBwZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInhsaWZmMlwiOlxuICAgICAgY2FzZSBcInhsZjJcIjpcbiAgICAgICAgbG9hZEZjdCA9IHhsaWZmMkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHhsaWZmMkRpZ2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwieGxpZmZcIjpcbiAgICAgIGNhc2UgXCJ4bGZcIjpcbiAgICAgICAgbG9hZEZjdCA9IHhsaWZmTG9hZFRvSTE4bjtcbiAgICAgICAgZGlnZXN0ID0geGxpZmZEaWdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHRyYW5zbGF0aW9ucyBmb3JtYXQgJHtmb3JtYXR9YCk7XG4gICAgfVxuICAgIGNvbnN0IGh0bWxQYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpO1xuXG4gICAgY29uc3QgdHJhbnNsYXRpb25zQnVuZGxlID0gVHJhbnNsYXRpb25CdW5kbGUubG9hZChcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIFwiaTE4blwiLFxuICAgICAgZGlnZXN0LFxuICAgICAgY3JlYXRlTWFwcGVyLFxuICAgICAgbG9hZEZjdCxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5XG4gICAgKTtcblxuICAgIC8vIHRvZG8gdXNlIGludGVycG9sYXRpb24gY29uZmlnXG4gICAgcmV0dXJuIChkZWY6IHN0cmluZyB8IEkxOG5EZWYsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHR5cGVvZiBkZWYgPT09IFwic3RyaW5nXCIgPyBkZWYgOiBkZWYudmFsdWU7XG4gICAgICBjb25zdCBtZXRhZGF0YSA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBkZWYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbWV0YWRhdGFbXCJpZFwiXSA9IGRlZi5pZDtcbiAgICAgICAgbWV0YWRhdGFbXCJtZWFuaW5nXCJdID0gZGVmLm1lYW5pbmc7XG4gICAgICAgIG1ldGFkYXRhW1wiZGVzY3JpcHRpb25cIl0gPSBkZWYuZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgICBjb25zdCBodG1sUGFyc2VyUmVzdWx0ID0gaHRtbFBhcnNlci5wYXJzZShjb250ZW50LCBcIlwiLCB0cnVlKTtcblxuICAgICAgaWYgKGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBodG1sUGFyc2VyUmVzdWx0LmVycm9ycztcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVyZ2VkTm9kZXMgPSBodG1sUGFyc2VyLm1lcmdlVHJhbnNsYXRpb25zKFxuICAgICAgICBodG1sUGFyc2VyUmVzdWx0LnJvb3ROb2RlcyxcbiAgICAgICAgdHJhbnNsYXRpb25zQnVuZGxlLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIG1ldGFkYXRhLFxuICAgICAgICBbXCJ3cmFwcGVyXCJdXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gc2VyaWFsaXplTm9kZXMobWVyZ2VkTm9kZXMucm9vdE5vZGVzLCBsb2NhbGUsIHBhcmFtcykuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGV4dCIsInRzbGliXzEuX19leHRlbmRzIiwiY2hhcnMuJEVPRiIsImNoYXJzLiRMVCIsImNoYXJzLiRCQU5HIiwiY2hhcnMuJExCUkFDS0VUIiwiY2hhcnMuJE1JTlVTIiwiY2hhcnMuJFNMQVNIIiwiY2hhcnMuJFJCUkFDRSIsImNoYXJzLiRMRiIsImNoYXJzLiRDUiIsImNoYXJzLiRBTVBFUlNBTkQiLCJjaGFycy4kSEFTSCIsImNoYXJzLiR4IiwiY2hhcnMuJFgiLCJjaGFycy4kU0VNSUNPTE9OIiwiY2hhcnMuJFJCUkFDS0VUIiwiY2hhcnMuJEdUIiwiY2hhcnMuJENPTE9OIiwiY2hhcnMuaXNBc2NpaUxldHRlciIsImNoYXJzLiRFUSIsImNoYXJzLiRTUSIsImNoYXJzLiREUSIsImNoYXJzLiRMQlJBQ0UiLCJjaGFycy4kQ09NTUEiLCJjaGFycy5pc1doaXRlc3BhY2UiLCJjaGFycy4kYSIsImNoYXJzLiR6IiwiY2hhcnMuJEEiLCJjaGFycy4kWiIsImNoYXJzLiQwIiwiY2hhcnMuJDkiLCJjaGFycy5pc0FzY2lpSGV4RGlnaXQiLCJjaGFycy5pc0RpZ2l0IiwibGV4LnRva2VuaXplIiwibGV4LlRva2VuVHlwZSIsImh0bWwuQ29tbWVudCIsImh0bWwuRXhwYW5zaW9uIiwibGV4LlRva2VuIiwiaHRtbC5FeHBhbnNpb25DYXNlIiwiaHRtbC5UZXh0IiwiaHRtbC5FbGVtZW50IiwiaHRtbC5BdHRyaWJ1dGUiLCJpMThuLlJlY3Vyc2VWaXNpdG9yIiwic2VyaWFsaXplTm9kZXMiLCJTZXJpYWxpemVyVmlzaXRvciIsIm1sLnZpc2l0QWxsIiwiaTE4bi5UZXh0IiwiaTE4bi5QbGFjZWhvbGRlciIsImkxOG4uQ29udGFpbmVyIiwiaTE4bi5JY3UiLCJfUExBQ0VIT0xERVJfVEFHIiwiX1NPVVJDRV9UQUciLCJfVEFSR0VUX1RBRyIsIl9VTklUX1RBRyIsIlhtbFRvSTE4biIsIlRva2VuIiwiVG9rZW5UeXBlIiwiY2hhcnMuJFNQQUNFIiwiY2hhcnMuJFBFUklPRCIsImNoYXJzLiRMUEFSRU4iLCJjaGFycy4kUlBBUkVOIiwiY2hhcnMuJFBMVVMiLCJjaGFycy4kU1RBUiIsImNoYXJzLiRQRVJDRU5UIiwiY2hhcnMuJENBUkVUIiwiY2hhcnMuJFFVRVNUSU9OIiwiY2hhcnMuJEJBUiIsImNoYXJzLiROQlNQIiwiY2hhcnMuJEJBQ0tTTEFTSCIsImNoYXJzLiR1IiwiY2hhcnMuJF8iLCJjaGFycy4kJCIsImNoYXJzLiRlIiwiY2hhcnMuJEUiLCJjaGFycy4kQlQiLCJjaGFycy4kbiIsImNoYXJzLiRmIiwiY2hhcnMuJEZGIiwiY2hhcnMuJHIiLCJjaGFycy4kdCIsImNoYXJzLiRUQUIiLCJjaGFycy4kdiIsImNoYXJzLiRWVEFCIiwiUGFyc2VyIiwiaHRtbC52aXNpdEFsbCIsImkxOG4uTWVzc2FnZSIsImkxOG4uVGFnUGxhY2Vob2xkZXIiLCJpMThuLkljdVBsYWNlaG9sZGVyIiwiVmlzaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFnQkEsSUFBQTtJQUNFLGNBQW1CLEtBQWEsRUFBUyxVQUEyQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7S0FBSTs7Ozs7O0lBQ3hFLG9CQUFLOzs7OztJQUFMLFVBQU0sT0FBZ0IsRUFBRSxPQUFZO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDekM7ZUFwQkg7SUFxQkMsQ0FBQTtBQUxELEFBT0EsSUFBQTtJQUNFLG1CQUNTLGFBQ0EsTUFDQSxPQUNBLFlBQ0E7UUFKQSxnQkFBVyxHQUFYLFdBQVc7UUFDWCxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wsZUFBVSxHQUFWLFVB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cUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN4QixBQUFPLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixBQUFPLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsQUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN4QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyxxQkFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzNCLEFBQU8scUJBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM3QixBQUFPLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLEFBQU8scUJBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUMxQixBQUFPLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsQUFBTyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLEFBQU8scUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixBQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsQUFBTyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLEFBQU8scUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixBQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsQUFBTyxxQkFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLEFBQU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUU1QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFckIsQUFBTyxxQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLEFBQU8scUJBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM3QixBQUFPLHFCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIsQUFBTyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFFdEIsQUFBTyxxQkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzNCLEFBQU8scUJBQU0sSUFBSSxHQUFHLEdBQUcsQ0FB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QUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsUUFBUTtJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLEdBQUc7SUFDUCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxRQUFRO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsUUFBUTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxHQUFHO0lBQ1AsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFFBQVE7SUFDZixPQUFPLEVBQUUsUUFBUTtJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFB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Z0IsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQztLQUNyRTs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLElBQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDbkU7NEJBcEVIO0lBcUVDLENBQUE7QUF6REQ7O0FBNkRBLHFCQUFNLGVBQWUsR0FBdUM7SUFDMUQsTUFBTSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0MsTUFBTSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0MsTUFBTSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0MsT0FBTyxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDOUMsTUFBTSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0MsS0FBSyxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDNUMsT0FBTyxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDOUMsT0FBTyxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDOUMsSUFBSSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDM0MsSUFBSSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDM0MsUUFBUSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBQyxNQUFNLEVB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QUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDYixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFD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