import { I18nPluralPipe, I18nSelectPipe, NgLocaleLocalization } from '@angular/common';
import { MissingTranslationStrategy, Inject, Injectable, InjectionToken, LOCALE_ID, Optional, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Text {
    /**
     * @param {?} value
     * @param {?} sourceSpan
     */
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitText(this, context);
    }
}
class Expansion {
    /**
     * @param {?} switchValue
     * @param {?} type
     * @param {?} cases
     * @param {?} sourceSpan
     * @param {?} switchValueSourceSpan
     */
    constructor(switchValue, type, cases, sourceSpan, switchValueSourceSpan) {
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
    visit(visitor, context) {
        return visitor.visitExpansion(this, context);
    }
}
class ExpansionCase {
    /**
     * @param {?} value
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} valueSourceSpan
     * @param {?} expSourceSpan
     */
    constructor(value, expression, sourceSpan, valueSourceSpan, expSourceSpan) {
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
    visit(visitor, context) {
        return visitor.visitExpansionCase(this, context);
    }
}
class Attribute {
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?=} valueSpan
     */
    constructor(name, value, sourceSpan, valueSpan) {
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
    visit(visitor, context) {
        return visitor.visitAttribute(this, context);
    }
}
class Element {
    /**
     * @param {?} name
     * @param {?} attrs
     * @param {?} children
     * @param {?} sourceSpan
     * @param {?=} startSourceSpan
     * @param {?=} endSourceSpan
     */
    constructor(name, attrs, children, sourceSpan, startSourceSpan = null, endSourceSpan = null) {
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
    visit(visitor, context) {
        return visitor.visitElement(this, context);
    }
}
class Comment {
    /**
     * @param {?} value
     * @param {?} sourceSpan
     */
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitComment(this, context);
    }
}
/**
 * @param {?} visitor
 * @param {?} nodes
 * @param {?=} context
 * @return {?}
 */
function visitAll(visitor, nodes, context = null) {
    const /** @type {?} */ result = [];
    const /** @type {?} */ visit = visitor.visit
        ? (ast) => /** @type {?} */ ((visitor.visit))(ast, context) || ast.visit(visitor, context)
        : (ast) => ast.visit(visitor, context);
    nodes.forEach(ast => {
        const /** @type {?} */ astResult = visit(ast);
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
class Message {
    /**
     * @param {?} nodes
     * @param {?} placeholders maps placeholder names to static content
     * @param {?} placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     */
    constructor(nodes, placeholders, placeholderToMessage, meaning, description, id) {
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
}
class Text$1 {
    /**
     * @param {?} value
     * @param {?} sourceSpan
     */
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitText(this, context);
    }
}
class Container {
    /**
     * @param {?} children
     * @param {?} sourceSpan
     */
    constructor(children, sourceSpan) {
        this.children = children;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitContainer(this, context);
    }
}
class Icu {
    /**
     * @param {?} expression
     * @param {?} type
     * @param {?} cases
     * @param {?} sourceSpan
     */
    constructor(expression, type, cases, sourceSpan) {
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
    visit(visitor, context) {
        return visitor.visitIcu(this, context);
    }
}
class TagPlaceholder {
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} startName
     * @param {?} closeName
     * @param {?} children
     * @param {?} isVoid
     * @param {?} sourceSpan
     */
    constructor(tag, attrs, startName, closeName, children, isVoid, sourceSpan) {
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
    visit(visitor, context) {
        return visitor.visitTagPlaceholder(this, context);
    }
}
class Placeholder {
    /**
     * @param {?} value
     * @param {?} name
     * @param {?} sourceSpan
     */
    constructor(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitPlaceholder(this, context);
    }
}
class IcuPlaceholder {
    /**
     * @param {?} value
     * @param {?} name
     * @param {?} sourceSpan
     */
    constructor(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitIcuPlaceholder(this, context);
    }
}
class RecurseVisitor {
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    visitContainer(container, context) {
        container.children.forEach(child => child.visit(this));
    }
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    visitIcu(icu, context) {
        Object.keys(icu.cases).forEach(k => {
            icu.cases[k].visit(this);
        });
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        ph.children.forEach(child => child.visit(this));
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitPlaceholder(ph, context) { }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

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
class ParseLocation {
    /**
     * @param {?} file
     * @param {?} offset
     * @param {?} line
     * @param {?} col
     */
    constructor(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.offset != null ? `${this.line}:${this.col}` : "";
    }
    /**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */
    getContext(maxChars, maxLines) {
        const /** @type {?} */ content = this.file.content;
        let /** @type {?} */ startOffset = this.offset;
        if (startOffset != null) {
            if (startOffset > content.length - 1) {
                startOffset = content.length - 1;
            }
            let /** @type {?} */ endOffset = startOffset;
            let /** @type {?} */ ctxChars = 0;
            let /** @type {?} */ ctxLines = 0;
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
    }
}
class ParseSourceFile {
    /**
     * @param {?} content
     * @param {?=} url
     */
    constructor(content, url = "") {
        this.content = content;
        this.url = url;
    }
}
class ParseSourceSpan {
    /**
     * @param {?} start
     * @param {?} end
     * @param {?=} details
     */
    constructor(start, end, details = null) {
        this.start = start;
        this.end = end;
        this.details = details;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
}
/** @enum {number} */
const ParseErrorLevel = {
    WARNING: 0,
    ERROR: 1,
};
ParseErrorLevel[ParseErrorLevel.WARNING] = "WARNING";
ParseErrorLevel[ParseErrorLevel.ERROR] = "ERROR";
class ParseError {
    /**
     * @param {?} span
     * @param {?} msg
     * @param {?=} level
     */
    constructor(span, msg, level = ParseErrorLevel.ERROR) {
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    /**
     * @return {?}
     */
    contextualMessage() {
        const /** @type {?} */ ctx = this.span.start.getContext(100, 3);
        return ctx ? ` ("${ctx.before}[${ParseErrorLevel[this.level]} ->]${ctx.after}")` : "";
    }
    /**
     * @return {?}
     */
    toString() {
        const /** @type {?} */ details = this.span.details ? `, ${this.span.details}` : "";
        return `${this.msg}${this.contextualMessage()}: ${this.span.start}${details}`;
    }
}
/**
 * An i18n error.
 */
class I18nError extends ParseError {
    /**
     * @param {?} span
     * @param {?} msg
     */
    constructor(span, msg) {
        super(span, msg);
    }
}
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
class InterpolationConfig {
    /**
     * @param {?} start
     * @param {?} end
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
const /** @type {?} */ DEFAULT_INTERPOLATION_CONFIG = new InterpolationConfig("{{", "}}");

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
const /** @type {?} */ $EOF = 0;
const /** @type {?} */ $TAB = 9;
const /** @type {?} */ $LF = 10;
const /** @type {?} */ $VTAB = 11;
const /** @type {?} */ $FF = 12;
const /** @type {?} */ $CR = 13;
const /** @type {?} */ $SPACE = 32;
const /** @type {?} */ $BANG = 33;
const /** @type {?} */ $DQ = 34;
const /** @type {?} */ $HASH = 35;
const /** @type {?} */ $$ = 36;
const /** @type {?} */ $PERCENT = 37;
const /** @type {?} */ $AMPERSAND = 38;
const /** @type {?} */ $SQ = 39;
const /** @type {?} */ $LPAREN = 40;
const /** @type {?} */ $RPAREN = 41;
const /** @type {?} */ $STAR = 42;
const /** @type {?} */ $PLUS = 43;
const /** @type {?} */ $COMMA = 44;
const /** @type {?} */ $MINUS = 45;
const /** @type {?} */ $PERIOD = 46;
const /** @type {?} */ $SLASH = 47;
const /** @type {?} */ $COLON = 58;
const /** @type {?} */ $SEMICOLON = 59;
const /** @type {?} */ $LT = 60;
const /** @type {?} */ $EQ = 61;
const /** @type {?} */ $GT = 62;
const /** @type {?} */ $QUESTION = 63;
const /** @type {?} */ $0 = 48;
const /** @type {?} */ $9 = 57;
const /** @type {?} */ $A = 65;
const /** @type {?} */ $E = 69;
const /** @type {?} */ $F = 70;
const /** @type {?} */ $X = 88;
const /** @type {?} */ $Z = 90;
const /** @type {?} */ $LBRACKET = 91;
const /** @type {?} */ $BACKSLASH = 92;
const /** @type {?} */ $RBRACKET = 93;
const /** @type {?} */ $CARET = 94;
const /** @type {?} */ $_ = 95;
const /** @type {?} */ $a = 97;
const /** @type {?} */ $e = 101;
const /** @type {?} */ $f = 102;
const /** @type {?} */ $n = 110;
const /** @type {?} */ $r = 114;
const /** @type {?} */ $t = 116;
const /** @type {?} */ $u = 117;
const /** @type {?} */ $v = 118;
const /** @type {?} */ $x = 120;
const /** @type {?} */ $z = 122;
const /** @type {?} */ $LBRACE = 123;
const /** @type {?} */ $BAR = 124;
const /** @type {?} */ $RBRACE = 125;
const /** @type {?} */ $NBSP = 160;
const /** @type {?} */ $BT = 96;
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
const TagContentType = {
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
    const /** @type {?} */ colonIndex = elementName.indexOf(":", 1);
    if (colonIndex === -1) {
        throw new Error(`Unsupported format "${elementName}" expecting ":namespace:name"`);
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
    return prefix ? `:${prefix}:${localName}` : localName;
}
// see http://www.w3.org/TR/html51/syntax.html#named-character-references
// see https://html.spec.whatwg.org/multipage/entities.json
// This list is not exhaustive to keep the compiler footprint low.
// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not
// exist.
const /** @type {?} */ NAMED_ENTITIES = {
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
const /** @type {?} */ NGSP_UNICODE = "\uE500";
NAMED_ENTITIES["ngsp"] = NGSP_UNICODE;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const TokenType = {
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
class Token {
    /**
     * @param {?} type
     * @param {?} parts
     * @param {?} sourceSpan
     */
    constructor(type, parts, sourceSpan) {
        this.type = type;
        this.parts = parts;
        this.sourceSpan = sourceSpan;
    }
}
class TokenError extends ParseError {
    /**
     * @param {?} errorMsg
     * @param {?} tokenType
     * @param {?} span
     */
    constructor(errorMsg, tokenType, span) {
        super(span, errorMsg);
        this.tokenType = tokenType;
    }
}
class TokenizeResult {
    /**
     * @param {?} tokens
     * @param {?} errors
     */
    constructor(tokens, errors) {
        this.tokens = tokens;
        this.errors = errors;
    }
}
/**
 * @param {?} source
 * @param {?} url
 * @param {?} getTagDefinition
 * @param {?=} tokenizeExpansionForms
 * @param {?=} interpolationConfig
 * @return {?}
 */
function tokenize(source, url, getTagDefinition, tokenizeExpansionForms = false, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
    return new Tokenizer(new ParseSourceFile(source, url), getTagDefinition, tokenizeExpansionForms, interpolationConfig).tokenize();
}
const /** @type {?} */ _CR_OR_CRLF_REGEXP = /\r\n?/g;
/**
 * @param {?} charCode
 * @return {?}
 */
function _unexpectedCharacterErrorMsg(charCode) {
    const /** @type {?} */ char = charCode === $EOF ? "EOF" : String.fromCharCode(charCode);
    return `Unexpected character "${char}"`;
}
/**
 * @param {?} entitySrc
 * @return {?}
 */
function _unknownEntityErrorMsg(entitySrc) {
    return `Unknown entity "${entitySrc}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
class ControlFlowError {
    /**
     * @param {?} error
     */
    constructor(error) {
        this.error = error;
    }
}
class Tokenizer {
    /**
     * @param {?} _file The html source
     * @param {?} _getTagDefinition
     * @param {?} _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
     * @param {?=} _interpolationConfig
     */
    constructor(_file, _getTagDefinition, _tokenizeIcu, _interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
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
    _processCarriageReturns(content) {
        // http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
        // In order to keep the original position in the source, we can not
        // pre-process it.
        // Instead CRs are processed right before instantiating the tokens.
        return content.replace(_CR_OR_CRLF_REGEXP, "\n");
    }
    /**
     * @return {?}
     */
    tokenize() {
        while (this._peek !== $EOF) {
            const /** @type {?} */ start = this._getLocation();
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
    }
    /**
     * \@internal
     * @return {?} whether an ICU token has been created
     */
    _tokenizeExpansionForm() {
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
    }
    /**
     * @return {?}
     */
    _getLocation() {
        return new ParseLocation(this._file, this._index, this._line, this._column);
    }
    /**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */
    _getSpan(start = this._getLocation(), end = this._getLocation()) {
        return new ParseSourceSpan(start, end);
    }
    /**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */
    _beginToken(type, start = this._getLocation()) {
        this._currentTokenStart = start;
        this._currentTokenType = type;
    }
    /**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */
    _endToken(parts, end = this._getLocation()) {
        const /** @type {?} */ token = new Token(this._currentTokenType, parts, new ParseSourceSpan(this._currentTokenStart, end));
        this.tokens.push(token);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return token;
    }
    /**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */
    _createError(msg, span) {
        if (this._isInExpansionForm()) {
            msg += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`;
        }
        const /** @type {?} */ error = new TokenError(msg, this._currentTokenType, span);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return new ControlFlowError(error);
    }
    /**
     * @return {?}
     */
    _advance() {
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
    }
    /**
     * @param {?} charCode
     * @return {?}
     */
    _attemptCharCode(charCode) {
        if (this._peek === charCode) {
            this._advance();
            return true;
        }
        return false;
    }
    /**
     * @param {?} charCode
     * @return {?}
     */
    _attemptCharCodeCaseInsensitive(charCode) {
        if (compareCharCodeCaseInsensitive(this._peek, charCode)) {
            this._advance();
            return true;
        }
        return false;
    }
    /**
     * @param {?} charCode
     * @return {?}
     */
    _requireCharCode(charCode) {
        const /** @type {?} */ location = this._getLocation();
        if (!this._attemptCharCode(charCode)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location, location));
        }
    }
    /**
     * @param {?} chars
     * @return {?}
     */
    _attemptStr(chars) {
        const /** @type {?} */ len = chars.length;
        if (this._index + len > this._length) {
            return false;
        }
        const /** @type {?} */ initialPosition = this._savePosition();
        for (let /** @type {?} */ i = 0; i < len; i++) {
            if (!this._attemptCharCode(chars.charCodeAt(i))) {
                // If attempting to parse the string fails, we want to reset the parser
                // to where it was before the attempt
                this._restorePosition(initialPosition);
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} chars
     * @return {?}
     */
    _attemptStrCaseInsensitive(chars) {
        for (let /** @type {?} */ i = 0; i < chars.length; i++) {
            if (!this._attemptCharCodeCaseInsensitive(chars.charCodeAt(i))) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} chars
     * @return {?}
     */
    _requireStr(chars) {
        const /** @type {?} */ location = this._getLocation();
        if (!this._attemptStr(chars)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location));
        }
    }
    /**
     * @param {?} predicate
     * @return {?}
     */
    _attemptCharCodeUntilFn(predicate) {
        while (!predicate(this._peek)) {
            this._advance();
        }
    }
    /**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */
    _requireCharCodeUntilFn(predicate, len) {
        const /** @type {?} */ start = this._getLocation();
        this._attemptCharCodeUntilFn(predicate);
        if (this._index - start.offset < len) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(start, start));
        }
    }
    /**
     * @param {?} char
     * @return {?}
     */
    _attemptUntilChar(char) {
        while (this._peek !== char) {
            this._advance();
        }
    }
    /**
     * @param {?} decodeEntities
     * @return {?}
     */
    _readChar(decodeEntities) {
        if (decodeEntities && this._peek === $AMPERSAND) {
            return this._decodeEntity();
        }
        else {
            const /** @type {?} */ index = this._index;
            this._advance();
            return this._input[index];
        }
    }
    /**
     * @return {?}
     */
    _decodeEntity() {
        const /** @type {?} */ start = this._getLocation();
        this._advance();
        if (this._attemptCharCode($HASH)) {
            const /** @type {?} */ isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
            const /** @type {?} */ numberStart = this._getLocation().offset;
            this._attemptCharCodeUntilFn(isDigitEntityEnd);
            if (this._peek !== $SEMICOLON) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            this._advance();
            const /** @type {?} */ strNum = this._input.substring(numberStart, this._index - 1);
            try {
                const /** @type {?} */ charCode = parseInt(strNum, isHex ? 16 : 10);
                return String.fromCharCode(charCode);
            }
            catch (/** @type {?} */ e) {
                const /** @type {?} */ entity = this._input.substring(start.offset + 1, this._index - 1);
                throw this._createError(_unknownEntityErrorMsg(entity), this._getSpan(start));
            }
        }
        else {
            const /** @type {?} */ startPosition = this._savePosition();
            this._attemptCharCodeUntilFn(isNamedEntityEnd);
            if (this._peek !== $SEMICOLON) {
                this._restorePosition(startPosition);
                return "&";
            }
            this._advance();
            const /** @type {?} */ name = this._input.substring(start.offset + 1, this._index - 1);
            const /** @type {?} */ char = NAMED_ENTITIES[name];
            if (!char) {
                throw this._createError(_unknownEntityErrorMsg(name), this._getSpan(start));
            }
            return char;
        }
    }
    /**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */
    _consumeRawText(decodeEntities, firstCharOfEnd, attemptEndRest) {
        let /** @type {?} */ tagCloseStart;
        const /** @type {?} */ textStart = this._getLocation();
        this._beginToken(decodeEntities ? TokenType.ESCAPABLE_RAW_TEXT : TokenType.RAW_TEXT, textStart);
        const /** @type {?} */ parts = [];
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
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeComment(start) {
        this._beginToken(TokenType.COMMENT_START, start);
        this._requireCharCode($MINUS);
        this._endToken([]);
        const /** @type {?} */ textToken = this._consumeRawText(false, $MINUS, () => this._attemptStr("->"));
        this._beginToken(TokenType.COMMENT_END, textToken.sourceSpan.end);
        this._endToken([]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeCdata(start) {
        this._beginToken(TokenType.CDATA_START, start);
        this._requireStr("CDATA[");
        this._endToken([]);
        const /** @type {?} */ textToken = this._consumeRawText(false, $RBRACKET, () => this._attemptStr("]>"));
        this._beginToken(TokenType.CDATA_END, textToken.sourceSpan.end);
        this._endToken([]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeDocType(start) {
        this._beginToken(TokenType.DOC_TYPE, start);
        this._attemptUntilChar($GT);
        this._advance();
        this._endToken([this._input.substring(start.offset + 2, this._index - 1)]);
    }
    /**
     * @return {?}
     */
    _consumePrefixAndName() {
        const /** @type {?} */ nameOrPrefixStart = this._index;
        let /** @type {?} */ prefix = /** @type {?} */ ((null));
        while (this._peek !== $COLON && !isPrefixEnd(this._peek)) {
            this._advance();
        }
        let /** @type {?} */ nameStart;
        if (this._peek === $COLON) {
            this._advance();
            prefix = this._input.substring(nameOrPrefixStart, this._index - 1);
            nameStart = this._index;
        }
        else {
            nameStart = nameOrPrefixStart;
        }
        this._requireCharCodeUntilFn(isNameEnd, this._index === nameStart ? 1 : 0);
        const /** @type {?} */ name = this._input.substring(nameStart, this._index);
        return [prefix, name];
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeTagOpen(start) {
        const /** @type {?} */ savedPos = this._savePosition();
        let /** @type {?} */ tagName;
        let /** @type {?} */ lowercaseTagName;
        try {
            if (!isAsciiLetter(this._peek)) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            const /** @type {?} */ nameStart = this._index;
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
        const /** @type {?} */ contentTokenType = this._getTagDefinition(tagName).contentType;
        if (contentTokenType === TagContentType.RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, false);
        }
        else if (contentTokenType === TagContentType.ESCAPABLE_RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, true);
        }
    }
    /**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */
    _consumeRawTextWithTagClose(lowercaseTagName, decodeEntities) {
        const /** @type {?} */ textToken = this._consumeRawText(decodeEntities, $LT, () => {
            if (!this._attemptCharCode($SLASH))
                return false;
            this._attemptCharCodeUntilFn(isNotWhitespace);
            if (!this._attemptStrCaseInsensitive(lowercaseTagName))
                return false;
            this._attemptCharCodeUntilFn(isNotWhitespace);
            return this._attemptCharCode($GT);
        });
        this._beginToken(TokenType.TAG_CLOSE, textToken.sourceSpan.end);
        this._endToken([/** @type {?} */ ((null)), lowercaseTagName]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeTagOpenStart(start) {
        this._beginToken(TokenType.TAG_OPEN_START, start);
        const /** @type {?} */ parts = this._consumePrefixAndName();
        this._endToken(parts);
    }
    /**
     * @return {?}
     */
    _consumeAttributeName() {
        this._beginToken(TokenType.ATTR_NAME);
        const /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._endToken(prefixAndName);
    }
    /**
     * @return {?}
     */
    _consumeAttributeValue() {
        this._beginToken(TokenType.ATTR_VALUE);
        let /** @type {?} */ value;
        if (this._peek === $SQ || this._peek === $DQ) {
            const /** @type {?} */ quoteChar = this._peek;
            this._advance();
            const /** @type {?} */ parts = [];
            while (this._peek !== quoteChar) {
                parts.push(this._readChar(true));
            }
            value = parts.join("");
            this._advance();
        }
        else {
            const /** @type {?} */ valueStart = this._index;
            this._requireCharCodeUntilFn(isNameEnd, 1);
            value = this._input.substring(valueStart, this._index);
        }
        this._endToken([this._processCarriageReturns(value)]);
    }
    /**
     * @return {?}
     */
    _consumeTagOpenEnd() {
        const /** @type {?} */ tokenType = this._attemptCharCode($SLASH) ? TokenType.TAG_OPEN_END_VOID : TokenType.TAG_OPEN_END;
        this._beginToken(tokenType);
        this._requireCharCode($GT);
        this._endToken([]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeTagClose(start) {
        this._beginToken(TokenType.TAG_CLOSE, start);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        const /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._requireCharCode($GT);
        this._endToken(prefixAndName);
    }
    /**
     * @return {?}
     */
    _consumeExpansionFormStart() {
        this._beginToken(TokenType.EXPANSION_FORM_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([]);
        this._expansionCaseStack.push(TokenType.EXPANSION_FORM_START);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        const /** @type {?} */ condition = this._readUntil($COMMA);
        this._endToken([condition], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        const /** @type {?} */ type = this._readUntil($COMMA);
        this._endToken([type], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
    }
    /**
     * @return {?}
     */
    _consumeExpansionCaseStart() {
        this._beginToken(TokenType.EXPANSION_CASE_VALUE, this._getLocation());
        const /** @type {?} */ value = this._readUntil($LBRACE).trim();
        this._endToken([value], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.EXPANSION_CASE_EXP_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.push(TokenType.EXPANSION_CASE_EXP_START);
    }
    /**
     * @return {?}
     */
    _consumeExpansionCaseEnd() {
        this._beginToken(TokenType.EXPANSION_CASE_EXP_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.pop();
    }
    /**
     * @return {?}
     */
    _consumeExpansionFormEnd() {
        this._beginToken(TokenType.EXPANSION_FORM_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([]);
        this._expansionCaseStack.pop();
    }
    /**
     * @return {?}
     */
    _consumeText() {
        const /** @type {?} */ start = this._getLocation();
        this._beginToken(TokenType.TEXT, start);
        const /** @type {?} */ parts = [];
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
    }
    /**
     * @return {?}
     */
    _isTextEnd() {
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
    }
    /**
     * @return {?}
     */
    _savePosition() {
        return [this._peek, this._index, this._column, this._line, this.tokens.length];
    }
    /**
     * @param {?} char
     * @return {?}
     */
    _readUntil(char) {
        const /** @type {?} */ start = this._index;
        this._attemptUntilChar(char);
        return this._input.substring(start, this._index);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    _restorePosition(position) {
        this._peek = position[0];
        this._index = position[1];
        this._column = position[2];
        this._line = position[3];
        const /** @type {?} */ nbTokens = position[4];
        if (nbTokens < this.tokens.length) {
            // remove any extra tokens
            this.tokens = this.tokens.slice(0, nbTokens);
        }
    }
    /**
     * @return {?}
     */
    _isInExpansionCase() {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_CASE_EXP_START);
    }
    /**
     * @return {?}
     */
    _isInExpansionForm() {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_FORM_START);
    }
}
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
    const /** @type {?} */ isInterpolationStart = interpolationConfig
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
    const /** @type {?} */ dstTokens = [];
    let /** @type {?} */ lastDstToken = undefined;
    for (let /** @type {?} */ i = 0; i < srcTokens.length; i++) {
        const /** @type {?} */ token = srcTokens[i];
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
class TreeError extends ParseError {
    /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     */
    constructor(elementName, span, msg) {
        super(span, msg);
        this.elementName = elementName;
    }
    /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */
    static create(elementName, span, msg) {
        return new TreeError(elementName, span, msg);
    }
}
class ParseTreeResult {
    /**
     * @param {?} rootNodes
     * @param {?} errors
     */
    constructor(rootNodes, errors) {
        this.rootNodes = rootNodes;
        this.errors = errors;
    }
}
class Parser {
    /**
     * @param {?} getTagDefinition
     */
    constructor(getTagDefinition) {
        this.getTagDefinition = getTagDefinition;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parse(source, url, parseExpansionForms = false, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ tokensAndErrors = tokenize(source, url, this.getTagDefinition, parseExpansionForms, interpolationConfig);
        const /** @type {?} */ treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
        return new ParseTreeResult(treeAndErrors.rootNodes, (/** @type {?} */ (tokensAndErrors.errors)).concat(treeAndErrors.errors));
    }
}
class _TreeBuilder {
    /**
     * @param {?} tokens
     * @param {?} getTagDefinition
     */
    constructor(tokens, getTagDefinition) {
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
    build() {
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
    }
    /**
     * @return {?}
     */
    _advance() {
        const /** @type {?} */ prev = this._peek;
        if (this._index < this.tokens.length - 1) {
            // Note: there is always an EOF token at the end
            this._index++;
        }
        this._peek = this.tokens[this._index];
        return prev;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    _advanceIf(type) {
        if (this._peek.type === type) {
            return this._advance();
        }
        return null;
    }
    /**
     * @param {?} startToken
     * @return {?}
     */
    _consumeCdata(startToken) {
        this._consumeText(this._advance());
        this._advanceIf(TokenType.CDATA_END);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    _consumeComment(token) {
        const /** @type {?} */ text = this._advanceIf(TokenType.RAW_TEXT);
        this._advanceIf(TokenType.COMMENT_END);
        const /** @type {?} */ value = text !== null ? text.parts[0].trim() : null;
        this._addToParent(new Comment(value, token.sourceSpan));
    }
    /**
     * @param {?} token
     * @return {?}
     */
    _consumeExpansion(token) {
        const /** @type {?} */ switchValue = this._advance();
        const /** @type {?} */ type = this._advance();
        const /** @type {?} */ cases = [];
        // read =
        while (this._peek.type === TokenType.EXPANSION_CASE_VALUE) {
            const /** @type {?} */ expCase = this._parseExpansionCase();
            if (!expCase) {
                return;
            } // error
            cases.push(expCase);
        }
        // read the final }
        if (this._peek.type !== TokenType.EXPANSION_FORM_END) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, `Invalid ICU message. Missing '}'.`));
            return;
        }
        const /** @type {?} */ sourceSpan = new ParseSourceSpan(token.sourceSpan.start, this._peek.sourceSpan.end);
        this._addToParent(new Expansion(switchValue.parts[0], type.parts[0], cases, sourceSpan, switchValue.sourceSpan));
        this._advance();
    }
    /**
     * @return {?}
     */
    _parseExpansionCase() {
        const /** @type {?} */ value = this._advance();
        // read {
        if (this._peek.type !== TokenType.EXPANSION_CASE_EXP_START) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, `Invalid ICU message. Missing '{'.`));
            return null;
        }
        // read until }
        const /** @type {?} */ start = this._advance();
        const /** @type {?} */ exp = this._collectExpansionExpTokens(start);
        if (!exp) {
            return null;
        }
        const /** @type {?} */ end = this._advance();
        exp.push(new Token(TokenType.EOF, [], end.sourceSpan));
        // parse everything in between { and }
        const /** @type {?} */ parsedExp = new _TreeBuilder(exp, this.getTagDefinition).build();
        if (parsedExp.errors.length > 0) {
            this._errors = this._errors.concat(/** @type {?} */ (parsedExp.errors));
            return null;
        }
        const /** @type {?} */ sourceSpan = new ParseSourceSpan(value.sourceSpan.start, end.sourceSpan.end);
        const /** @type {?} */ expSourceSpan = new ParseSourceSpan(start.sourceSpan.start, end.sourceSpan.end);
        return new ExpansionCase(value.parts[0], parsedExp.rootNodes, sourceSpan, value.sourceSpan, expSourceSpan);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _collectExpansionExpTokens(start) {
        const /** @type {?} */ exp = [];
        const /** @type {?} */ expansionFormStack = [TokenType.EXPANSION_CASE_EXP_START];
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
                    this._errors.push(TreeError.create(null, start.sourceSpan, `Invalid ICU message. Missing '}'.`));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EXPANSION_FORM_END) {
                if (lastOnStack(expansionFormStack, TokenType.EXPANSION_FORM_START)) {
                    expansionFormStack.pop();
                }
                else {
                    this._errors.push(TreeError.create(null, start.sourceSpan, `Invalid ICU message. Missing '}'.`));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EOF) {
                this._errors.push(TreeError.create(null, start.sourceSpan, `Invalid ICU message. Missing '}'.`));
                return null;
            }
            exp.push(this._advance());
        }
    }
    /**
     * @param {?} token
     * @return {?}
     */
    _consumeText(token) {
        let /** @type {?} */ text = token.parts[0];
        if (text.length > 0 && text[0] === "\n") {
            const /** @type {?} */ parent = this._getParentElement();
            if (parent !== null && parent.children.length === 0 && this.getTagDefinition(parent.name).ignoreFirstLf) {
                text = text.substring(1);
            }
        }
        if (text.length > 0) {
            this._addToParent(new Text(text, token.sourceSpan));
        }
    }
    /**
     * @return {?}
     */
    _closeVoidElement() {
        const /** @type {?} */ el = this._getParentElement();
        if (el && this.getTagDefinition(el.name).isVoid) {
            this._elementStack.pop();
        }
    }
    /**
     * @param {?} startTagToken
     * @return {?}
     */
    _consumeStartTag(startTagToken) {
        const /** @type {?} */ prefix = startTagToken.parts[0];
        const /** @type {?} */ name = startTagToken.parts[1];
        const /** @type {?} */ attrs = [];
        while (this._peek.type === TokenType.ATTR_NAME) {
            attrs.push(this._consumeAttr(this._advance()));
        }
        const /** @type {?} */ fullName = this._getElementFullName(prefix, name, this._getParentElement());
        let /** @type {?} */ selfClosing = false;
        // Note: There could have been a tokenizer error
        // so that we don't get a token for the end tag...
        if (this._peek.type === TokenType.TAG_OPEN_END_VOID) {
            this._advance();
            selfClosing = true;
            const /** @type {?} */ tagDef = this.getTagDefinition(fullName);
            if (!(tagDef.canSelfClose || getNsPrefix(fullName) !== null || tagDef.isVoid)) {
                this._errors.push(TreeError.create(fullName, startTagToken.sourceSpan, `Only void and foreign elements can be self closed "${startTagToken.parts[1]}"`));
            }
        }
        else if (this._peek.type === TokenType.TAG_OPEN_END) {
            this._advance();
            selfClosing = false;
        }
        const /** @type {?} */ end = this._peek.sourceSpan.start;
        const /** @type {?} */ span = new ParseSourceSpan(startTagToken.sourceSpan.start, end);
        const /** @type {?} */ el = new Element(fullName, attrs, [], span, span, undefined);
        this._pushElement(el);
        if (selfClosing) {
            this._popElement(fullName);
            el.endSourceSpan = span;
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    _pushElement(el) {
        const /** @type {?} */ parentEl = this._getParentElement();
        if (parentEl && this.getTagDefinition(parentEl.name).isClosedByChild(el.name)) {
            this._elementStack.pop();
        }
        const /** @type {?} */ tagDef = this.getTagDefinition(el.name);
        const { parent, container } = this._getParentElementSkippingContainers();
        if (parent && tagDef.requireExtraParent(parent.name)) {
            const /** @type {?} */ newParent = new Element(tagDef.parentToAdd, [], [], el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
            this._insertBeforeContainer(parent, container, newParent);
        }
        this._addToParent(el);
        this._elementStack.push(el);
    }
    /**
     * @param {?} endTagToken
     * @return {?}
     */
    _consumeEndTag(endTagToken) {
        const /** @type {?} */ fullName = this._getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
        if (this._getParentElement()) {
            /** @type {?} */ ((this._getParentElement())).endSourceSpan = endTagToken.sourceSpan;
        }
        if (this.getTagDefinition(fullName).isVoid) {
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, `Void elements do not have end tags "${endTagToken.parts[1]}"`));
        }
        else if (!this._popElement(fullName)) {
            const /** @type {?} */ errMsg = `Unexpected closing tag "${fullName}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, errMsg));
        }
    }
    /**
     * @param {?} fullName
     * @return {?}
     */
    _popElement(fullName) {
        for (let /** @type {?} */ stackIndex = this._elementStack.length - 1; stackIndex >= 0; stackIndex--) {
            const /** @type {?} */ el = this._elementStack[stackIndex];
            if (el.name === fullName) {
                this._elementStack.splice(stackIndex, this._elementStack.length - stackIndex);
                return true;
            }
            if (!this.getTagDefinition(el.name).closedByParent) {
                return false;
            }
        }
        return false;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    _consumeAttr(attrName) {
        const /** @type {?} */ fullName = mergeNsAndName(attrName.parts[0], attrName.parts[1]);
        let /** @type {?} */ end = attrName.sourceSpan.end;
        let /** @type {?} */ value = "";
        let /** @type {?} */ valueSpan = /** @type {?} */ ((undefined));
        if (this._peek.type === TokenType.ATTR_VALUE) {
            const /** @type {?} */ valueToken = this._advance();
            value = valueToken.parts[0];
            end = valueToken.sourceSpan.end;
            valueSpan = valueToken.sourceSpan;
        }
        return new Attribute(fullName, value, new ParseSourceSpan(attrName.sourceSpan.start, end), valueSpan);
    }
    /**
     * @return {?}
     */
    _getParentElement() {
        return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
    }
    /**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */
    _getParentElementSkippingContainers() {
        let /** @type {?} */ container = null;
        for (let /** @type {?} */ i = this._elementStack.length - 1; i >= 0; i--) {
            if (!isNgContainer(this._elementStack[i].name)) {
                return { parent: this._elementStack[i], container };
            }
            container = this._elementStack[i];
        }
        return { parent: null, container };
    }
    /**
     * @param {?} node
     * @return {?}
     */
    _addToParent(node) {
        const /** @type {?} */ parent = this._getParentElement();
        if (parent !== null) {
            parent.children.push(node);
        }
        else {
            this._rootNodes.push(node);
        }
    }
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
    _insertBeforeContainer(parent, container, node) {
        if (!container) {
            this._addToParent(node);
            this._elementStack.push(node);
        }
        else {
            if (parent) {
                // replace the container with the new node in the children
                const /** @type {?} */ index = parent.children.indexOf(container);
                parent.children[index] = node;
            }
            else {
                this._rootNodes.push(node);
            }
            node.children.push(container);
            this._elementStack.splice(this._elementStack.indexOf(container), 0, node);
        }
    }
    /**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */
    _getElementFullName(prefix, localName, parentElement) {
        if (prefix === null) {
            prefix = /** @type {?} */ ((this.getTagDefinition(localName).implicitNamespacePrefix));
            if (prefix === null && parentElement !== null) {
                prefix = getNsPrefix(parentElement.name);
            }
        }
        return mergeNsAndName(prefix, localName);
    }
}
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
class XmlTagDefinition {
    constructor() {
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
    requireExtraParent(currentParent) {
        return false;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isClosedByChild(name) {
        return false;
    }
}
const /** @type {?} */ _TAG_DEFINITION = new XmlTagDefinition();
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
class HtmlTagDefinition {
    /**
     * @param {?=} __0
     */
    constructor({ closedByChildren, requiredParents, implicitNamespacePrefix, contentType = TagContentType.PARSABLE_DATA, closedByParent = false, isVoid = false, ignoreFirstLf = false } = {}) {
        this.closedByChildren = {};
        this.closedByParent = false;
        this.canSelfClose = false;
        if (closedByChildren && closedByChildren.length > 0) {
            closedByChildren.forEach(tagName => this.closedByChildren[tagName] = true);
        }
        this.isVoid = isVoid;
        this.closedByParent = closedByParent || isVoid;
        if (requiredParents && requiredParents.length > 0) {
            this.requiredParents = {};
            // The first parent is the list is automatically when none of the listed parents are present
            this.parentToAdd = requiredParents[0];
            requiredParents.forEach(tagName => this.requiredParents[tagName] = true);
        }
        this.implicitNamespacePrefix = implicitNamespacePrefix || null;
        this.contentType = contentType;
        this.ignoreFirstLf = ignoreFirstLf;
    }
    /**
     * @param {?} currentParent
     * @return {?}
     */
    requireExtraParent(currentParent) {
        if (!this.requiredParents) {
            return false;
        }
        if (!currentParent) {
            return true;
        }
        const /** @type {?} */ lcParent = currentParent.toLowerCase();
        const /** @type {?} */ isParentTemplate = lcParent === 'template' || currentParent === 'ng-template';
        return !isParentTemplate && this.requiredParents[lcParent] !== true;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isClosedByChild(name) {
        return this.isVoid || name.toLowerCase() in this.closedByChildren;
    }
}
// see http://www.w3.org/TR/html51/syntax.html#optional-tags
// This implementation does not fully conform to the HTML5 spec.
const /** @type {?} */ TAG_DEFINITIONS = {
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
const /** @type {?} */ _DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
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
class SimplePlaceholderMapper extends RecurseVisitor {
    /**
     * @param {?} message
     * @param {?} mapName
     */
    constructor(message, mapName) {
        super();
        this.mapName = mapName;
        this.internalToPublic = {};
        this.publicToNextId = {};
        this.publicToInternal = {};
        message.nodes.forEach(node => node.visit(this));
    }
    /**
     * @param {?} internalName
     * @return {?}
     */
    toPublicName(internalName) {
        return this.internalToPublic.hasOwnProperty(internalName) ? this.internalToPublic[internalName] : null;
    }
    /**
     * @param {?} publicName
     * @return {?}
     */
    toInternalName(publicName) {
        return this.publicToInternal.hasOwnProperty(publicName) ? this.publicToInternal[publicName] : null;
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    visitText(text, context) {
        return null;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        this.visitPlaceholderName(ph.startName);
        super.visitTagPlaceholder(ph, context);
        this.visitPlaceholderName(ph.closeName);
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitPlaceholder(ph, context) {
        this.visitPlaceholderName(ph.name);
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) {
        this.visitPlaceholderName(ph.name);
    }
    /**
     * @param {?} internalName
     * @return {?}
     */
    visitPlaceholderName(internalName) {
        if (!internalName || this.internalToPublic.hasOwnProperty(internalName)) {
            return;
        }
        let /** @type {?} */ publicName = this.mapName(internalName);
        if (this.publicToInternal.hasOwnProperty(publicName)) {
            // Create a new XMB when it has already been used
            const /** @type {?} */ nextId = this.publicToNextId[publicName];
            this.publicToNextId[publicName] = nextId + 1;
            publicName = `${publicName}_${nextId}`;
        }
        else {
            this.publicToNextId[publicName] = 1;
        }
        this.internalToPublic[internalName] = publicName;
        this.publicToInternal[publicName] = internalName;
    }
}
const /** @type {?} */ i18nSelectPipe = new I18nSelectPipe();
class SerializerVisitor {
    /**
     * @param {?} locale
     * @param {?} params
     */
    constructor(locale, params) {
        this.params = params;
        this.i18nPluralPipe = new I18nPluralPipe(new NgLocaleLocalization(locale));
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        if (getHtmlTagDefinition(element.name).isVoid) {
            return `<${element.name}${this.serializeNodes(element.attrs, " ")}/>`;
        }
        return `<${element.name}${this.serializeNodes(element.attrs, " ")}>${this.serializeNodes(element.children)}</${element.name}>`;
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) {
        return `${attribute.name}="${attribute.value}"`;
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return text.value;
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) {
        return `<!--${comment.value}-->`;
    }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) {
        const /** @type {?} */ cases = {};
        expansion.cases.forEach(c => (cases[c.value] = this.serializeNodes(c.expression)));
        switch (expansion.type) {
            case "select":
                return i18nSelectPipe.transform(this.params[expansion.switchValue] || "", cases);
            case "plural":
                return this.i18nPluralPipe.transform(this.params[expansion.switchValue], cases);
        }
        throw new Error(`Unknown expansion type "${expansion.type}"`);
    }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) {
        return ` ${expansionCase.value} {${this.serializeNodes(expansionCase.expression)}}`;
    }
    /**
     * @param {?} nodes
     * @param {?=} join
     * @return {?}
     */
    serializeNodes(nodes, join = "") {
        if (nodes.length === 0) {
            return "";
        }
        return join + nodes.map(a => a.visit(this, null)).join(join);
    }
}
/**
 * @param {?} nodes
 * @param {?} locale
 * @param {?} params
 * @return {?}
 */
function serializeNodes(nodes, locale, params) {
    return nodes.map(node => node.visit(new SerializerVisitor(locale, params), null));
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
/**
 * @param {?} message
 * @return {?}
 */
function digest(message) {
    return message.id || sha1(serializeNodes$1(message.nodes).join("") + `[${message.meaning}]`);
}
/**
 * @param {?} message
 * @return {?}
 */
function decimalDigest(message) {
    if (message.id) {
        return message.id;
    }
    const /** @type {?} */ visitor = new SerializerIgnoreIcuExpVisitor();
    const /** @type {?} */ parts = message.nodes.map(a => a.visit(visitor, null));
    return computeMsgId(parts.join(""), message.meaning);
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */
class SerializerVisitor$1 {
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return text.value;
    }
    /**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */
    visitContainer(container, context) {
        return `[${container.children.map(child => child.visit(this)).join(", ")}]`;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitIcu(icu, context) {
        const /** @type {?} */ strCases = Object.keys(icu.cases).map((k) => `${k} {${icu.cases[k].visit(this)}}`);
        return `{${icu.expression}, ${icu.type}, ${strCases.join(", ")}}`;
    }
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        return ph.isVoid
            ? `<ph tag name="${ph.startName}"/>`
            : `<ph tag name="${ph.startName}">${ph.children.map(child => child.visit(this)).join(", ")}</ph name="${ph.closeName}">`;
    }
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    visitPlaceholder(ph, context) {
        return ph.value ? `<ph name="${ph.name}">${ph.value}</ph>` : `<ph name="${ph.name}"/>`;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) {
        return `<ph icu name="${ph.name}">${ph.value.visit(this)}</ph>`;
    }
}
const /** @type {?} */ serializerVisitor = new SerializerVisitor$1();
/**
 * @param {?} nodes
 * @return {?}
 */
function serializeNodes$1(nodes) {
    return nodes.map(a => a.visit(serializerVisitor, null));
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */
class SerializerIgnoreIcuExpVisitor extends SerializerVisitor$1 {
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitIcu(icu, context) {
        const /** @type {?} */ strCases = Object.keys(icu.cases).map((k) => `${k} {${icu.cases[k].visit(this)}}`);
        // Do not take the expression into account
        return `{${icu.type}, ${strCases.join(", ")}}`;
    }
}
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
    const /** @type {?} */ utf8 = utf8Encode(str);
    const /** @type {?} */ words32 = stringToWords32(utf8, Endian.Big);
    const /** @type {?} */ len = utf8.length * 8;
    const /** @type {?} */ w = new Array(80);
    let [a, b, c, d, e] = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    words32[len >> 5] |= 0x80 << (24 - len % 32);
    words32[(((len + 64) >> 9) << 4) + 15] = len;
    for (let /** @type {?} */ i = 0; i < words32.length; i += 16) {
        const [h0, h1, h2, h3, h4] = [a, b, c, d, e];
        for (let /** @type {?} */ j = 0; j < 80; j++) {
            /* tslint:disable-next-line */
            if (j < 16) {
                w[j] = words32[i + j];
            }
            else {
                w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            const [f, k] = fk(j, b, c, d);
            const /** @type {?} */ temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
            [e, d, c, b, a] = [d, c, rol32(b, 30), a, temp];
        }
        [a, b, c, d, e] = [add32(a, h0), add32(b, h1), add32(c, h2), add32(d, h3), add32(e, h4)];
    }
    return byteStringToHexString(words32ToByteString([a, b, c, d, e]));
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
    const /** @type {?} */ utf8 = utf8Encode(str);
    let [hi, lo] = [hash32(utf8, 0), hash32(utf8, 102072)];
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
    let [hi, lo] = fingerprint(msg);
    if (meaning) {
        const [him, lom] = fingerprint(meaning);
        [hi, lo] = add64(rol64([hi, lo], 1), [him, lom]);
    }
    return byteStringToDecString(words32ToByteString([hi & 0x7fffffff, lo]));
}
/**
 * @param {?} str
 * @param {?} c
 * @return {?}
 */
function hash32(str, c) {
    let [a, b] = [0x9e3779b9, 0x9e3779b9];
    let /** @type {?} */ i;
    const /** @type {?} */ len = str.length;
    for (i = 0; i + 12 <= len; i += 12) {
        a = add32(a, wordAt(str, i, Endian.Little));
        b = add32(b, wordAt(str, i + 4, Endian.Little));
        c = add32(c, wordAt(str, i + 8, Endian.Little));
        [a, b, c] = mix([a, b, c]);
    }
    a = add32(a, wordAt(str, i, Endian.Little));
    b = add32(b, wordAt(str, i + 4, Endian.Little));
    // the first byte of c is reserved for the length
    c = add32(c, len);
    c = add32(c, wordAt(str, i + 8, Endian.Little) << 8);
    return mix([a, b, c])[2];
}
/**
 * @param {?} __0
 * @return {?}
 */
function mix([a, b, c]) {
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
const Endian = {
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
    const /** @type {?} */ low = (a & 0xffff) + (b & 0xffff);
    const /** @type {?} */ high = (a >>> 16) + (b >>> 16) + (low >>> 16);
    return [high >>> 16, (high << 16) | (low & 0xffff)];
}
/**
 * @param {?} __0
 * @param {?} __1
 * @return {?}
 */
function add64([ah, al], [bh, bl]) {
    const [carry, l] = add32to64(al, bl);
    const /** @type {?} */ h = add32(add32(ah, bh), carry);
    return [h, l];
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sub32(a, b) {
    const /** @type {?} */ low = (a & 0xffff) - (b & 0xffff);
    const /** @type {?} */ high = (a >> 16) - (b >> 16) + (low >> 16);
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
function rol64([hi, lo], count) {
    const /** @type {?} */ h = (hi << count) | (lo >>> (32 - count));
    const /** @type {?} */ l = (lo << count) | (hi >>> (32 - count));
    return [h, l];
}
/**
 * @param {?} str
 * @param {?} endian
 * @return {?}
 */
function stringToWords32(str, endian) {
    const /** @type {?} */ words32 = Array((str.length + 3) >>> 2);
    for (let /** @type {?} */ i = 0; i < words32.length; i++) {
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
    let /** @type {?} */ word = 0;
    if (endian === Endian.Big) {
        for (let /** @type {?} */ i = 0; i < 4; i++) {
            word += byteAt(str, index + i) << (24 - 8 * i);
        }
    }
    else {
        for (let /** @type {?} */ i = 0; i < 4; i++) {
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
    return words32.reduce((str, word) => str + word32ToByteString(word), "");
}
/**
 * @param {?} word
 * @return {?}
 */
function word32ToByteString(word) {
    let /** @type {?} */ str = "";
    for (let /** @type {?} */ i = 0; i < 4; i++) {
        str += String.fromCharCode((word >>> (8 * (3 - i))) & 0xff);
    }
    return str;
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToHexString(str) {
    let /** @type {?} */ hex = "";
    for (let /** @type {?} */ i = 0; i < str.length; i++) {
        const /** @type {?} */ b = byteAt(str, i);
        hex += (b >>> 4).toString(16) + (b & 0x0f).toString(16);
    }
    return hex.toLowerCase();
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToDecString(str) {
    let /** @type {?} */ decimal = "";
    let /** @type {?} */ toThePower = "1";
    for (let /** @type {?} */ i = str.length - 1; i >= 0; i--) {
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
    let /** @type {?} */ sum = "";
    const /** @type {?} */ len = Math.max(x.length, y.length);
    for (let /** @type {?} */ i = 0, /** @type {?} */ carry = 0; i < len || carry; i++) {
        const /** @type {?} */ tmpSum = carry + +(x[i] || 0) + +(y[i] || 0);
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
    let /** @type {?} */ product = "";
    let /** @type {?} */ bToThePower = b;
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
    let /** @type {?} */ encoded = "";
    for (let /** @type {?} */ index = 0; index < str.length; index++) {
        let /** @type {?} */ codePoint = str.charCodeAt(index);
        // decode surrogate
        // see https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        if (codePoint >= 0xd800 && codePoint <= 0xdbff && str.length > index + 1) {
            const /** @type {?} */ low = str.charCodeAt(index + 1);
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
const /** @type {?} */ _PLACEHOLDER_TAG = "x";
const /** @type {?} */ _FILE_TAG = "file";
const /** @type {?} */ _SOURCE_TAG = "source";
const /** @type {?} */ _TARGET_TAG = "target";
const /** @type {?} */ _UNIT_TAG = "trans-unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliffLoadToI18n(content) {
    // xliff to xml nodes
    const /** @type {?} */ xliffParser = new XliffParser();
    const { msgIdToHtml, errors } = xliffParser.parse(content);
    // xml nodes to i18n messages
    const /** @type {?} */ i18nMessagesById = {};
    const /** @type {?} */ converter = new XmlToI18n();
    Object.keys(msgIdToHtml).forEach(msgId => {
        const { i18nNodes, errors: e } = converter.convert(msgIdToHtml[msgId]);
        errors.push(...e);
        i18nMessagesById[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error(`xliff parse errors:\n${errors.join("\n")}`);
    }
    return i18nMessagesById;
}
const /** @type {?} */ xliffDigest = digest;
class XliffParser {
    /**
     * @param {?} content
     * @return {?}
     */
    parse(content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        const /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        switch (element.name) {
            case _UNIT_TAG:
                this._unitMlString = /** @type {?} */ ((null));
                const /** @type {?} */ idAttr = element.attrs.find(attr => attr.name === "id");
                if (!idAttr) {
                    this._addError(element, `<${_UNIT_TAG}> misses the "id" attribute`);
                }
                else {
                    const /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, `Duplicated translations for msg ${id}`);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, `Message ${id} misses a translation`);
                        }
                    }
                }
                break;
            case _SOURCE_TAG:
                // ignore source message
                break;
            case _TARGET_TAG:
                const /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                const /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                const /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                const /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
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
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) { }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}
class XmlToI18n {
    /**
     * @param {?} message
     * @return {?}
     */
    convert(message) {
        const /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        const /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes,
            errors: this._errors
        };
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        if (el.name === _PLACEHOLDER_TAG) {
            const /** @type {?} */ nameAttr = el.attrs.find(attr => attr.name === "id");
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, `<${_PLACEHOLDER_TAG}> misses the "id" attribute`);
        }
        else {
            this._addError(el, `Unexpected tag`);
        }
        return null;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        const /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach((c) => {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _PLACEHOLDER_TAG$1 = "ph";
const /** @type {?} */ _PLACEHOLDER_SPANNING_TAG = "pc";
const /** @type {?} */ _XLIFF_TAG = "xliff";
const /** @type {?} */ _SOURCE_TAG$1 = "source";
const /** @type {?} */ _TARGET_TAG$1 = "target";
const /** @type {?} */ _UNIT_TAG$1 = "unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliff2LoadToI18n(content) {
    // xliff to xml nodes
    const /** @type {?} */ xliff2Parser = new Xliff2Parser();
    const { msgIdToHtml, errors } = xliff2Parser.parse(content);
    // xml nodes to i18n nodes
    const /** @type {?} */ i18nNodesByMsgId = {};
    const /** @type {?} */ converter = new XmlToI18n$1();
    Object.keys(msgIdToHtml).forEach(msgId => {
        const { i18nNodes, errors: e } = converter.convert(msgIdToHtml[msgId]);
        errors.push(...e);
        i18nNodesByMsgId[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error(`xliff2 parse errors:\n${errors.join("\n")}`);
    }
    return i18nNodesByMsgId;
}
const /** @type {?} */ xliff2Digest = decimalDigest;
class Xliff2Parser {
    /**
     * @param {?} content
     * @return {?}
     */
    parse(content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        const /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        switch (element.name) {
            case _UNIT_TAG$1:
                this._unitMlString = null;
                const /** @type {?} */ idAttr = element.attrs.find(attr => attr.name === "id");
                if (!idAttr) {
                    this._addError(element, `<${_UNIT_TAG$1}> misses the "id" attribute`);
                }
                else {
                    const /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, `Duplicated translations for msg ${id}`);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, `Message ${id} misses a translation`);
                        }
                    }
                }
                break;
            case _SOURCE_TAG$1:
                // ignore source message
                break;
            case _TARGET_TAG$1:
                const /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                const /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                const /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                const /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
                this._unitMlString = innerText;
                break;
            case _XLIFF_TAG:
                const /** @type {?} */ versionAttr = element.attrs.find(attr => attr.name === "version");
                if (versionAttr) {
                    const /** @type {?} */ version = versionAttr.value;
                    if (version !== "2.0") {
                        this._addError(element, `The XLIFF file version ${version} is not compatible with XLIFF 2.0 serializer`);
                    }
                    else {
                        visitAll(this, element.children, null);
                    }
                }
                break;
            default:
                visitAll(this, element.children, null);
        }
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) { }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    }
}
class XmlToI18n$1 {
    /**
     * @param {?} message
     * @return {?}
     */
    convert(message) {
        const /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        const /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : [].concat(...visitAll(this, xmlIcu.rootNodes));
        return {
            i18nNodes,
            errors: this._errors
        };
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return new Text$1(text.value, text.sourceSpan);
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        switch (el.name) {
            case _PLACEHOLDER_TAG$1:
                const /** @type {?} */ nameAttr = el.attrs.find(attr => attr.name === "equiv");
                if (nameAttr) {
                    return [new Placeholder("", nameAttr.value, el.sourceSpan)];
                }
                this._addError(el, `<${_PLACEHOLDER_TAG$1}> misses the "equiv" attribute`);
                break;
            case _PLACEHOLDER_SPANNING_TAG:
                const /** @type {?} */ startAttr = el.attrs.find(attr => attr.name === "equivStart");
                const /** @type {?} */ endAttr = el.attrs.find(attr => attr.name === "equivEnd");
                if (!startAttr) {
                    this._addError(el, `<${_PLACEHOLDER_TAG$1}> misses the "equivStart" attribute`);
                }
                else if (!endAttr) {
                    this._addError(el, `<${_PLACEHOLDER_TAG$1}> misses the "equivEnd" attribute`);
                }
                else {
                    const /** @type {?} */ startId = startAttr.value;
                    const /** @type {?} */ endId = endAttr.value;
                    const /** @type {?} */ nodes = [];
                    return nodes.concat(new Placeholder("", startId, el.sourceSpan), ...el.children.map(node => node.visit(this, null)), new Placeholder("", endId, el.sourceSpan));
                }
                break;
            default:
                this._addError(el, `Unexpected tag`);
        }
        return null;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        const /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach((c) => {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        return {
            value: icuCase.value,
            nodes: [].concat(...visitAll(this, icuCase.expression))
        };
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    }
}

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
const /** @type {?} */ _TRANSLATIONS_TAG = "translationbundle";
const /** @type {?} */ _TRANSLATION_TAG = "translation";
const /** @type {?} */ _PLACEHOLDER_TAG$3 = "ph";
/**
 * @param {?} content
 * @return {?}
 */
function xtbLoadToI18n(content) {
    // xtb to xml nodes
    const /** @type {?} */ xtbParser = new XtbParser();
    const { msgIdToHtml, errors: parseErrors } = xtbParser.parse(content);
    if (parseErrors.length) {
        throw new Error(`xtb parse errors:\n${parseErrors.join("\n")}`);
    }
    // xml nodes to i18n nodes
    const /** @type {?} */ i18nNodesByMsgId = {};
    const /** @type {?} */ converter = new XmlToI18n$2();
    // Because we should be able to load xtb files that rely on features not supported by angular,
    // we need to delay the conversion of html to i18n nodes so that non angular messages are not
    // converted
    Object.keys(msgIdToHtml).forEach(msgId => {
        const /** @type {?} */ valueFn = () => {
            const { i18nNodes, errors } = converter.convert(msgIdToHtml[msgId]);
            if (errors.length) {
                throw new Error(`xtb parse errors:\n${errors.join("\n")}`);
            }
            return i18nNodes;
        };
        createLazyProperty(i18nNodesByMsgId, msgId, valueFn);
    });
    return i18nNodesByMsgId;
}
const /** @type {?} */ xtbDigest = digest;
const /** @type {?} */ xtbMapper = xmbMapper;
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
        get: () => {
            const /** @type {?} */ value = valueFn();
            Object.defineProperty(messages, id, { enumerable: true, value });
            return value;
        },
        set: _ => {
            throw new Error("Could not overwrite an XTB translation");
        }
    });
}
class XtbParser {
    /**
     * @param {?} xtb
     * @return {?}
     */
    parse(xtb) {
        this._bundleDepth = 0;
        this._msgIdToHtml = {};
        // We can not parse the ICU messages at this point as some messages might not originate
        // from Angular that could not be lex'd.
        const /** @type {?} */ xml = new Parser(getXmlTagDefinition).parse(xtb, "", false);
        this._errors = xml.errors;
        visitAll(this, xml.rootNodes);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        switch (element.name) {
            case _TRANSLATIONS_TAG:
                this._bundleDepth++;
                if (this._bundleDepth > 1) {
                    this._addError(element, `<${_TRANSLATIONS_TAG}> elements can not be nested`);
                }
                visitAll(this, element.children, null);
                this._bundleDepth--;
                break;
            case _TRANSLATION_TAG:
                const /** @type {?} */ idAttr = element.attrs.find(attr => attr.name === "id");
                if (!idAttr) {
                    this._addError(element, `<${_TRANSLATION_TAG}> misses the "id" attribute`);
                }
                else {
                    const /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, `Duplicated translations for msg ${id}`);
                    }
                    else {
                        const /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                        const /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                        const /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                        const /** @type {?} */ innerText = content.slice(/** @type {?} */ ((innerTextStart)), /** @type {?} */ ((innerTextEnd)));
                        this._msgIdToHtml[id] = innerText;
                    }
                }
                break;
            default:
                this._addError(element, "Unexpected tag");
        }
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) { }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}
class XmlToI18n$2 {
    /**
     * @param {?} message
     * @return {?}
     */
    convert(message) {
        const /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        const /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes,
            errors: this._errors
        };
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        const /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(c => {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        if (el.name === _PLACEHOLDER_TAG$3) {
            const /** @type {?} */ nameAttr = el.attrs.find(attr => attr.name === "name");
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, `<${_PLACEHOLDER_TAG$3}> misses the "name" attribute`);
        }
        else {
            this._addError(el, `Unexpected tag`);
        }
        return null;
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
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
class ParserError {
    /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     */
    constructor(message, input, errLocation, ctxLocation) {
        this.input = input;
        this.errLocation = errLocation;
        this.ctxLocation = ctxLocation;
        this.message = `Parser Error: ${message} ${errLocation} [${input}] in ${ctxLocation}`;
    }
}
class ParseSpan {
    /**
     * @param {?} start
     * @param {?} end
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
class AST {
    /**
     * @param {?} span
     */
    constructor(span) {
        this.span = span;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return null;
    }
    /**
     * @return {?}
     */
    toString() {
        return "AST";
    }
}
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
class Quote extends AST {
    /**
     * @param {?} span
     * @param {?} prefix
     * @param {?} uninterpretedExpression
     * @param {?} location
     */
    constructor(span, prefix, uninterpretedExpression, location) {
        super(span);
        this.prefix = prefix;
        this.uninterpretedExpression = uninterpretedExpression;
        this.location = location;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitQuote(this, context);
    }
    /**
     * @return {?}
     */
    toString() {
        return "Quote";
    }
}
class EmptyExpr extends AST {
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        // do nothing
    }
}
class ImplicitReceiver extends AST {
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitImplicitReceiver(this, context);
    }
}
/**
 * Multiple expressions separated by a semicolon.
 */
class Chain extends AST {
    /**
     * @param {?} span
     * @param {?} expressions
     */
    constructor(span, expressions) {
        super(span);
        this.expressions = expressions;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitChain(this, context);
    }
}
class Conditional extends AST {
    /**
     * @param {?} span
     * @param {?} condition
     * @param {?} trueExp
     * @param {?} falseExp
     */
    constructor(span, condition, trueExp, falseExp) {
        super(span);
        this.condition = condition;
        this.trueExp = trueExp;
        this.falseExp = falseExp;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitConditional(this, context);
    }
}
class PropertyRead extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     */
    constructor(span, receiver, name) {
        super(span);
        this.receiver = receiver;
        this.name = name;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPropertyRead(this, context);
    }
}
class PropertyWrite extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} value
     */
    constructor(span, receiver, name, value) {
        super(span);
        this.receiver = receiver;
        this.name = name;
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPropertyWrite(this, context);
    }
}
class SafePropertyRead extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     */
    constructor(span, receiver, name) {
        super(span);
        this.receiver = receiver;
        this.name = name;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitSafePropertyRead(this, context);
    }
}
class KeyedRead extends AST {
    /**
     * @param {?} span
     * @param {?} obj
     * @param {?} key
     */
    constructor(span, obj, key) {
        super(span);
        this.obj = obj;
        this.key = key;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitKeyedRead(this, context);
    }
}
class KeyedWrite extends AST {
    /**
     * @param {?} span
     * @param {?} obj
     * @param {?} key
     * @param {?} value
     */
    constructor(span, obj, key, value) {
        super(span);
        this.obj = obj;
        this.key = key;
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitKeyedWrite(this, context);
    }
}
class BindingPipe extends AST {
    /**
     * @param {?} span
     * @param {?} exp
     * @param {?} name
     * @param {?} args
     */
    constructor(span, exp, name, args) {
        super(span);
        this.exp = exp;
        this.name = name;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPipe(this, context);
    }
}
class LiteralPrimitive extends AST {
    /**
     * @param {?} span
     * @param {?} value
     */
    constructor(span, value) {
        super(span);
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitLiteralPrimitive(this, context);
    }
}
class LiteralArray extends AST {
    /**
     * @param {?} span
     * @param {?} expressions
     */
    constructor(span, expressions) {
        super(span);
        this.expressions = expressions;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitLiteralArray(this, context);
    }
}
class LiteralMap extends AST {
    /**
     * @param {?} span
     * @param {?} keys
     * @param {?} values
     */
    constructor(span, keys, values) {
        super(span);
        this.keys = keys;
        this.values = values;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitLiteralMap(this, context);
    }
}
class Interpolation extends AST {
    /**
     * @param {?} span
     * @param {?} strings
     * @param {?} expressions
     */
    constructor(span, strings, expressions) {
        super(span);
        this.strings = strings;
        this.expressions = expressions;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitInterpolation(this, context);
    }
}
class Binary extends AST {
    /**
     * @param {?} span
     * @param {?} operation
     * @param {?} left
     * @param {?} right
     */
    constructor(span, operation, left, right) {
        super(span);
        this.operation = operation;
        this.left = left;
        this.right = right;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitBinary(this, context);
    }
}
class PrefixNot extends AST {
    /**
     * @param {?} span
     * @param {?} expression
     */
    constructor(span, expression) {
        super(span);
        this.expression = expression;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPrefixNot(this, context);
    }
}
class NonNullAssert extends AST {
    /**
     * @param {?} span
     * @param {?} expression
     */
    constructor(span, expression) {
        super(span);
        this.expression = expression;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitNonNullAssert(this, context);
    }
}
class MethodCall extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} args
     */
    constructor(span, receiver, name, args) {
        super(span);
        this.receiver = receiver;
        this.name = name;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitMethodCall(this, context);
    }
}
class SafeMethodCall extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} args
     */
    constructor(span, receiver, name, args) {
        super(span);
        this.receiver = receiver;
        this.name = name;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitSafeMethodCall(this, context);
    }
}
class FunctionCall extends AST {
    /**
     * @param {?} span
     * @param {?} target
     * @param {?} args
     */
    constructor(span, target, args) {
        super(span);
        this.target = target;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitFunctionCall(this, context);
    }
}
class ASTWithSource extends AST {
    /**
     * @param {?} ast
     * @param {?} source
     * @param {?} location
     * @param {?} errors
     */
    constructor(ast, source, location, errors) {
        super(new ParseSpan(0, source == null ? 0 : source.length));
        this.ast = ast;
        this.source = source;
        this.location = location;
        this.errors = errors;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return this.ast.visit(visitor, context);
    }
    /**
     * @return {?}
     */
    toString() {
        return `${this.source} in ${this.location}`;
    }
}
class TemplateBinding {
    /**
     * @param {?} span
     * @param {?} key
     * @param {?} keyIsVar
     * @param {?} name
     * @param {?} expression
     */
    constructor(span, key, keyIsVar, name, expression) {
        this.span = span;
        this.key = key;
        this.keyIsVar = keyIsVar;
        this.name = name;
        this.expression = expression;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const TokenType$1 = {
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
const /** @type {?} */ KEYWORDS = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this"];
class Lexer {
    /**
     * @param {?} text
     * @return {?}
     */
    tokenize(text) {
        const /** @type {?} */ scanner = new Scanner(text);
        const /** @type {?} */ tokens = [];
        let /** @type {?} */ token = scanner.scanToken();
        while (token != null) {
            tokens.push(token);
            token = scanner.scanToken();
        }
        return tokens;
    }
}
class Token$1 {
    /**
     * @param {?} index
     * @param {?} type
     * @param {?} numValue
     * @param {?} strValue
     */
    constructor(index, type, numValue, strValue) {
        this.index = index;
        this.type = type;
        this.numValue = numValue;
        this.strValue = strValue;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    isCharacter(code) {
        return this.type === TokenType$1.Character && this.numValue === code;
    }
    /**
     * @return {?}
     */
    isNumber() {
        return this.type === TokenType$1.Number;
    }
    /**
     * @return {?}
     */
    isString() {
        return this.type === TokenType$1.String;
    }
    /**
     * @param {?} operater
     * @return {?}
     */
    isOperator(operater) {
        return this.type === TokenType$1.Operator && this.strValue === operater;
    }
    /**
     * @return {?}
     */
    isIdentifier() {
        return this.type === TokenType$1.Identifier;
    }
    /**
     * @return {?}
     */
    isKeyword() {
        return this.type === TokenType$1.Keyword;
    }
    /**
     * @return {?}
     */
    isKeywordLet() {
        return this.type === TokenType$1.Keyword && this.strValue === "let";
    }
    /**
     * @return {?}
     */
    isKeywordAs() {
        return this.type === TokenType$1.Keyword && this.strValue === "as";
    }
    /**
     * @return {?}
     */
    isKeywordNull() {
        return this.type === TokenType$1.Keyword && this.strValue === "null";
    }
    /**
     * @return {?}
     */
    isKeywordUndefined() {
        return this.type === TokenType$1.Keyword && this.strValue === "undefined";
    }
    /**
     * @return {?}
     */
    isKeywordTrue() {
        return this.type === TokenType$1.Keyword && this.strValue === "true";
    }
    /**
     * @return {?}
     */
    isKeywordFalse() {
        return this.type === TokenType$1.Keyword && this.strValue === "false";
    }
    /**
     * @return {?}
     */
    isKeywordThis() {
        return this.type === TokenType$1.Keyword && this.strValue === "this";
    }
    /**
     * @return {?}
     */
    isError() {
        return this.type === TokenType$1.Error;
    }
    /**
     * @return {?}
     */
    toNumber() {
        return this.type === TokenType$1.Number ? this.numValue : -1;
    }
    /**
     * @return {?}
     */
    toString() {
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
    }
}
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
const /** @type {?} */ EOF = new Token$1(-1, TokenType$1.Character, 0, "");
class Scanner {
    /**
     * @param {?} input
     */
    constructor(input) {
        this.input = input;
        this.peek = 0;
        this.index = -1;
        this.length = input.length;
        this.advance();
    }
    /**
     * @return {?}
     */
    advance() {
        this.peek = ++this.index >= this.length ? $EOF : this.input.charCodeAt(this.index);
    }
    /**
     * @return {?}
     */
    scanToken() {
        const /** @type {?} */ input = this.input;
        const /** @type {?} */ length = this.length;
        let /** @type {?} */ peek = this.peek;
        let /** @type {?} */ index = this.index;
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
        const /** @type {?} */ start = index;
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
        return this.error(`Unexpected character [${String.fromCharCode(peek)}]`, 0);
    }
    /**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */
    scanCharacter(start, code) {
        this.advance();
        return newCharacterToken(start, code);
    }
    /**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */
    scanOperator(start, str) {
        this.advance();
        return newOperatorToken(start, str);
    }
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
    scanComplexOperator(start, one, twoCode, two, threeCode, three) {
        this.advance();
        let /** @type {?} */ str = one;
        if (this.peek === twoCode) {
            this.advance();
            str += two;
        }
        if (threeCode != null && this.peek === threeCode) {
            this.advance();
            str += three;
        }
        return newOperatorToken(start, str);
    }
    /**
     * @return {?}
     */
    scanIdentifier() {
        const /** @type {?} */ start = this.index;
        this.advance();
        while (isIdentifierPart(this.peek)) {
            this.advance();
        }
        const /** @type {?} */ str = this.input.substring(start, this.index);
        return KEYWORDS.indexOf(str) > -1 ? newKeywordToken(start, str) : newIdentifierToken(start, str);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    scanNumber(start) {
        let /** @type {?} */ simple = this.index === start;
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
        const /** @type {?} */ str = this.input.substring(start, this.index);
        const /** @type {?} */ value = simple ? parseIntAutoRadix(str) : parseFloat(str);
        return newNumberToken(start, value);
    }
    /**
     * @return {?}
     */
    scanString() {
        const /** @type {?} */ start = this.index;
        const /** @type {?} */ quote = this.peek;
        this.advance(); // Skip initial quote.
        let /** @type {?} */ buffer = "";
        let /** @type {?} */ marker = this.index;
        const /** @type {?} */ input = this.input;
        while (this.peek !== quote) {
            if (this.peek === $BACKSLASH) {
                buffer += input.substring(marker, this.index);
                this.advance();
                let /** @type {?} */ unescapedCode;
                // Workaround for TS2.1-introduced type strictness
                this.peek = this.peek;
                if (this.peek === $u) {
                    // 4 character hex code for unicode character.
                    const /** @type {?} */ hex = input.substring(this.index + 1, this.index + 5);
                    if (/^[0-9a-f]+$/i.test(hex)) {
                        unescapedCode = parseInt(hex, 16);
                    }
                    else {
                        return this.error(`Invalid unicode escape [\\u${hex}]`, 0);
                    }
                    for (let /** @type {?} */ i = 0; i < 5; i++) {
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
        const /** @type {?} */ last = input.substring(marker, this.index);
        this.advance(); // Skip terminating quote.
        return newStringToken(start, buffer + last);
    }
    /**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */
    error(message, offset) {
        const /** @type {?} */ position = this.index + offset;
        return newErrorToken(position, `Lexer Error: ${message} at column ${position} in expression [${this.input}]`);
    }
}
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
    const /** @type {?} */ scanner = new Scanner(input);
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
    const /** @type {?} */ result = parseInt(text, 10);
    if (isNaN(result)) {
        throw new Error("Invalid integer literal when parsing " + text);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SplitInterpolation {
    /**
     * @param {?} strings
     * @param {?} expressions
     * @param {?} offsets
     */
    constructor(strings, expressions, offsets) {
        this.strings = strings;
        this.expressions = expressions;
        this.offsets = offsets;
    }
}
class TemplateBindingParseResult {
    /**
     * @param {?} templateBindings
     * @param {?} warnings
     * @param {?} errors
     */
    constructor(templateBindings, warnings, errors) {
        this.templateBindings = templateBindings;
        this.warnings = warnings;
        this.errors = errors;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
function _createInterpolateRegExp(config) {
    const /** @type {?} */ pattern = escapeRegExp(config.start) + "([\\s\\S]*?)" + escapeRegExp(config.end);
    return new RegExp(pattern, "g");
}
class Parser$1 {
    /**
     * @param {?} _lexer
     */
    constructor(_lexer) {
        this._lexer = _lexer;
        this.errors = [];
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseAction(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        this._checkNoInterpolation(input, location, interpolationConfig);
        const /** @type {?} */ sourceToLex = this._stripComments(input);
        const /** @type {?} */ tokens = this._lexer.tokenize(this._stripComments(input));
        const /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, true, this.errors, input.length - sourceToLex.length).parseChain();
        return new ASTWithSource(ast, input, location, this.errors);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseBinding(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        return new ASTWithSource(ast, input, location, this.errors);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseSimpleBinding(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        const /** @type {?} */ errors = SimpleExpressionChecker.check(ast);
        if (errors.length > 0) {
            this._reportError(`Host binding expression cannot contain ${errors.join(" ")}`, input, location);
        }
        return new ASTWithSource(ast, input, location, this.errors);
    }
    /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */
    _reportError(message, input, errLocation, ctxLocation) {
        this.errors.push(new ParserError(message, input, errLocation, ctxLocation));
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    _parseBindingAst(input, location, interpolationConfig) {
        // Quotes expressions use 3rd-party expression language. We don't want to use
        // our lexer or parser for that, so we check for that ahead of time.
        const /** @type {?} */ quote = this._parseQuote(input, location);
        if (quote != null) {
            return quote;
        }
        this._checkNoInterpolation(input, location, interpolationConfig);
        const /** @type {?} */ sourceToLex = this._stripComments(input);
        const /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
        return new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, input.length - sourceToLex.length).parseChain();
    }
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    _parseQuote(input, location) {
        if (input === null) {
            return null;
        }
        const /** @type {?} */ prefixSeparatorIndex = input.indexOf(":");
        if (prefixSeparatorIndex === -1) {
            return null;
        }
        const /** @type {?} */ prefix = input.substring(0, prefixSeparatorIndex).trim();
        if (!isIdentifier(prefix)) {
            return null;
        }
        const /** @type {?} */ uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
        return new Quote(new ParseSpan(0, input.length), prefix, uninterpretedExpression, location);
    }
    /**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    parseTemplateBindings(prefixToken, input, location) {
        const /** @type {?} */ tokens = this._lexer.tokenize(input);
        if (prefixToken) {
            // Prefix the tokens with the tokens from prefixToken but have them take no space (0 index).
            const /** @type {?} */ prefixTokens = this._lexer.tokenize(prefixToken).map(t => {
                t.index = 0;
                return t;
            });
            tokens.unshift(...prefixTokens);
        }
        return new ParseAST(input, location, tokens, input.length, false, this.errors, 0).parseTemplateBindings();
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseInterpolation(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ split = this.splitInterpolation(input, location, interpolationConfig);
        if (split === null) {
            return null;
        }
        const /** @type {?} */ expressions = [];
        for (let /** @type {?} */ i = 0; i < split.expressions.length; ++i) {
            const /** @type {?} */ expressionText = split.expressions[i];
            const /** @type {?} */ sourceToLex = this._stripComments(expressionText);
            const /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
            const /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, split.offsets[i] + (expressionText.length - sourceToLex.length)).parseChain();
            expressions.push(ast);
        }
        return new ASTWithSource(new Interpolation(new ParseSpan(0, input === null ? 0 : input.length), split.strings, expressions), input, location, this.errors);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    splitInterpolation(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        const /** @type {?} */ parts = input.split(regexp);
        if (parts.length <= 1) {
            return null;
        }
        const /** @type {?} */ strings = [];
        const /** @type {?} */ expressions = [];
        const /** @type {?} */ offsets = [];
        let /** @type {?} */ offset = 0;
        for (let /** @type {?} */ i = 0; i < parts.length; i++) {
            const /** @type {?} */ part = parts[i];
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
                this._reportError("Blank expressions are not allowed in interpolated strings", input, `at column ${this._findInterpolationErrorColumn(parts, i, interpolationConfig)} in`, location);
                expressions.push("$implict");
                offsets.push(offset);
            }
        }
        return new SplitInterpolation(strings, expressions, offsets);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    wrapLiteralPrimitive(input, location) {
        return new ASTWithSource(new LiteralPrimitive(new ParseSpan(0, input === null ? 0 : input.length), input), input, location, this.errors);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    _stripComments(input) {
        const /** @type {?} */ i = this._commentStart(input);
        return i != null ? input.substring(0, i).trim() : input;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    _commentStart(input) {
        let /** @type {?} */ outerQuote = null;
        for (let /** @type {?} */ i = 0; i < input.length - 1; i++) {
            const /** @type {?} */ char = input.charCodeAt(i);
            const /** @type {?} */ nextChar = input.charCodeAt(i + 1);
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
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    _checkNoInterpolation(input, location, interpolationConfig) {
        const /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        const /** @type {?} */ parts = input.split(regexp);
        if (parts.length > 1) {
            this._reportError(`Got interpolation (${interpolationConfig.start}${interpolationConfig.end}) where expression was expected`, input, `at column ${this._findInterpolationErrorColumn(parts, 1, interpolationConfig)} in`, location);
        }
    }
    /**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */
    _findInterpolationErrorColumn(parts, partInErrIdx, interpolationConfig) {
        let /** @type {?} */ errLocation = "";
        for (let /** @type {?} */ j = 0; j < partInErrIdx; j++) {
            errLocation += j % 2 === 0 ? parts[j] : `${interpolationConfig.start}${parts[j]}${interpolationConfig.end}`;
        }
        return errLocation.length;
    }
}
class ParseAST {
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} tokens
     * @param {?} inputLength
     * @param {?} parseAction
     * @param {?} errors
     * @param {?} offset
     */
    constructor(input, location, tokens, inputLength, parseAction, errors, offset) {
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
    peek(offset) {
        const /** @type {?} */ i = this.index + offset;
        return i < this.tokens.length ? this.tokens[i] : EOF;
    }
    /**
     * @return {?}
     */
    get next() {
        return this.peek(0);
    }
    /**
     * @return {?}
     */
    get inputIndex() {
        return this.index < this.tokens.length ? this.next.index + this.offset : this.inputLength + this.offset;
    }
    /**
     * @param {?} start
     * @return {?}
     */
    span(start) {
        return new ParseSpan(start, this.inputIndex);
    }
    /**
     * @return {?}
     */
    advance() {
        this.index++;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    optionalCharacter(code) {
        if (this.next.isCharacter(code)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    peekKeywordLet() {
        return this.next.isKeywordLet();
    }
    /**
     * @return {?}
     */
    peekKeywordAs() {
        return this.next.isKeywordAs();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    expectCharacter(code) {
        if (this.optionalCharacter(code)) {
            return;
        }
        this.error(`Missing expected ${String.fromCharCode(code)}`);
    }
    /**
     * @param {?} op
     * @return {?}
     */
    optionalOperator(op) {
        if (this.next.isOperator(op)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} operator
     * @return {?}
     */
    expectOperator(operator) {
        if (this.optionalOperator(operator)) {
            return;
        }
        this.error(`Missing expected operator ${operator}`);
    }
    /**
     * @return {?}
     */
    expectIdentifierOrKeyword() {
        const /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword()) {
            this.error(`Unexpected token ${n}, expected identifier or keyword`);
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    }
    /**
     * @return {?}
     */
    expectIdentifierOrKeywordOrString() {
        const /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
            this.error(`Unexpected token ${n}, expected identifier, keyword, or string`);
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    }
    /**
     * @return {?}
     */
    parseChain() {
        const /** @type {?} */ exprs = [];
        const /** @type {?} */ start = this.inputIndex;
        while (this.index < this.tokens.length) {
            const /** @type {?} */ expr = this.parsePipe();
            exprs.push(expr);
            if (this.optionalCharacter($SEMICOLON)) {
                if (!this.parseAction) {
                    this.error("Binding expression cannot contain chained expression");
                }
                while (this.optionalCharacter($SEMICOLON)) { } // read all semicolons
            }
            else if (this.index < this.tokens.length) {
                this.error(`Unexpected token '${this.next}'`);
            }
        }
        if (exprs.length === 0) {
            return new EmptyExpr(this.span(start));
        }
        if (exprs.length === 1) {
            return exprs[0];
        }
        return new Chain(this.span(start), exprs);
    }
    /**
     * @return {?}
     */
    parsePipe() {
        let /** @type {?} */ result = this.parseExpression();
        if (this.optionalOperator("|")) {
            if (this.parseAction) {
                this.error("Cannot have a pipe in an action expression");
            }
            do {
                const /** @type {?} */ name = this.expectIdentifierOrKeyword();
                const /** @type {?} */ args = [];
                while (this.optionalCharacter($COLON)) {
                    args.push(this.parseExpression());
                }
                result = new BindingPipe(this.span(result.span.start), result, name, args);
            } while (this.optionalOperator("|"));
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseExpression() {
        return this.parseConditional();
    }
    /**
     * @return {?}
     */
    parseConditional() {
        const /** @type {?} */ start = this.inputIndex;
        const /** @type {?} */ result = this.parseLogicalOr();
        if (this.optionalOperator("?")) {
            const /** @type {?} */ yes = this.parsePipe();
            let /** @type {?} */ no;
            if (!this.optionalCharacter($COLON)) {
                const /** @type {?} */ end = this.inputIndex;
                const /** @type {?} */ expression = this.input.substring(start, end);
                this.error(`Conditional expression ${expression} requires all 3 expressions`);
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
    }
    /**
     * @return {?}
     */
    parseLogicalOr() {
        // '||'
        let /** @type {?} */ result = this.parseLogicalAnd();
        while (this.optionalOperator("||")) {
            const /** @type {?} */ right = this.parseLogicalAnd();
            result = new Binary(this.span(result.span.start), "||", result, right);
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseLogicalAnd() {
        // '&&'
        let /** @type {?} */ result = this.parseEquality();
        while (this.optionalOperator("&&")) {
            const /** @type {?} */ right = this.parseEquality();
            result = new Binary(this.span(result.span.start), "&&", result, right);
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseEquality() {
        // '==','!=','===','!=='
        let /** @type {?} */ result = this.parseRelational();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "==":
                case "===":
                case "!=":
                case "!==":
                    this.advance();
                    const /** @type {?} */ right = this.parseRelational();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseRelational() {
        // '<', '>', '<=', '>='
        let /** @type {?} */ result = this.parseAdditive();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "<":
                case ">":
                case "<=":
                case ">=":
                    this.advance();
                    const /** @type {?} */ right = this.parseAdditive();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseAdditive() {
        // '+', '-'
        let /** @type {?} */ result = this.parseMultiplicative();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "+":
                case "-":
                    this.advance();
                    const /** @type {?} */ right = this.parseMultiplicative();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseMultiplicative() {
        // '*', '%', '/'
        let /** @type {?} */ result = this.parsePrefix();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "*":
                case "%":
                case "/":
                    this.advance();
                    const /** @type {?} */ right = this.parsePrefix();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parsePrefix() {
        if (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ start = this.inputIndex;
            const /** @type {?} */ operator = this.next.strValue;
            let /** @type {?} */ result;
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
    }
    /**
     * @return {?}
     */
    parseCallChain() {
        let /** @type {?} */ result = this.parsePrimary();
        while (true) {
            if (this.optionalCharacter($PERIOD)) {
                result = this.parseAccessMemberOrMethodCall(result, false);
            }
            else if (this.optionalOperator("?.")) {
                result = this.parseAccessMemberOrMethodCall(result, true);
            }
            else if (this.optionalCharacter($LBRACKET)) {
                this.rbracketsExpected++;
                const /** @type {?} */ key = this.parsePipe();
                this.rbracketsExpected--;
                this.expectCharacter($RBRACKET);
                if (this.optionalOperator("=")) {
                    const /** @type {?} */ value = this.parseConditional();
                    result = new KeyedWrite(this.span(result.span.start), result, key, value);
                }
                else {
                    result = new KeyedRead(this.span(result.span.start), result, key);
                }
            }
            else if (this.optionalCharacter($LPAREN)) {
                this.rparensExpected++;
                const /** @type {?} */ args = this.parseCallArguments();
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
    }
    /**
     * @return {?}
     */
    parsePrimary() {
        const /** @type {?} */ start = this.inputIndex;
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            const /** @type {?} */ result = this.parsePipe();
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
            const /** @type {?} */ elements = this.parseExpressionList($RBRACKET);
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
            const /** @type {?} */ value = this.next.toNumber();
            this.advance();
            return new LiteralPrimitive(this.span(start), value);
        }
        else if (this.next.isString()) {
            const /** @type {?} */ literalValue = this.next.toString();
            this.advance();
            return new LiteralPrimitive(this.span(start), literalValue);
        }
        else if (this.index >= this.tokens.length) {
            this.error(`Unexpected end of expression: ${this.input}`);
            return new EmptyExpr(this.span(start));
        }
        else {
            this.error(`Unexpected token ${this.next}`);
            return new EmptyExpr(this.span(start));
        }
    }
    /**
     * @param {?} terminator
     * @return {?}
     */
    parseExpressionList(terminator) {
        const /** @type {?} */ result = [];
        if (!this.next.isCharacter(terminator)) {
            do {
                result.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseLiteralMap() {
        const /** @type {?} */ keys = [];
        const /** @type {?} */ values = [];
        const /** @type {?} */ start = this.inputIndex;
        this.expectCharacter($LBRACE);
        if (!this.optionalCharacter($RBRACE)) {
            this.rbracesExpected++;
            do {
                const /** @type {?} */ quoted = this.next.isString();
                const /** @type {?} */ key = this.expectIdentifierOrKeywordOrString();
                keys.push({ key, quoted });
                this.expectCharacter($COLON);
                values.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
            this.rbracesExpected--;
            this.expectCharacter($RBRACE);
        }
        return new LiteralMap(this.span(start), keys, values);
    }
    /**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */
    parseAccessMemberOrMethodCall(receiver, isSafe = false) {
        const /** @type {?} */ start = receiver.span.start;
        const /** @type {?} */ id = this.expectIdentifierOrKeyword();
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            const /** @type {?} */ args = this.parseCallArguments();
            this.expectCharacter($RPAREN);
            this.rparensExpected--;
            const /** @type {?} */ span = this.span(start);
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
                    const /** @type {?} */ value = this.parseConditional();
                    return new PropertyWrite(this.span(start), receiver, id, value);
                }
                else {
                    return new PropertyRead(this.span(start), receiver, id);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    parseCallArguments() {
        if (this.next.isCharacter($RPAREN)) {
            return [];
        }
        const /** @type {?} */ positionals = [];
        do {
            positionals.push(this.parsePipe());
        } while (this.optionalCharacter($COMMA));
        return /** @type {?} */ (positionals);
    }
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */
    expectTemplateBindingKey() {
        let /** @type {?} */ result = "";
        let /** @type {?} */ operatorFound = false;
        do {
            result += this.expectIdentifierOrKeywordOrString();
            operatorFound = this.optionalOperator("-");
            if (operatorFound) {
                result += "-";
            }
        } while (operatorFound);
        return result.toString();
    }
    /**
     * @return {?}
     */
    parseTemplateBindings() {
        const /** @type {?} */ bindings = [];
        let /** @type {?} */ prefix = /** @type {?} */ ((null));
        const /** @type {?} */ warnings = [];
        while (this.index < this.tokens.length) {
            const /** @type {?} */ start = this.inputIndex;
            let /** @type {?} */ keyIsVar = this.peekKeywordLet();
            if (keyIsVar) {
                this.advance();
            }
            const /** @type {?} */ rawKey = this.expectTemplateBindingKey();
            let /** @type {?} */ key = rawKey;
            if (!keyIsVar) {
                if (prefix === null) {
                    prefix = key;
                }
                else {
                    key = prefix + key[0].toUpperCase() + key.substring(1);
                }
            }
            this.optionalCharacter($COLON);
            let /** @type {?} */ name = /** @type {?} */ ((null));
            let /** @type {?} */ expression = /** @type {?} */ ((null));
            if (keyIsVar) {
                if (this.optionalOperator("=")) {
                    name = this.expectTemplateBindingKey();
                }
                else {
                    name = "$implicit";
                }
            }
            else if (this.peekKeywordAs()) {
                const /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                name = rawKey;
                key = this.expectTemplateBindingKey(); // read local var name
                keyIsVar = true;
            }
            else if (this.next !== EOF && !this.peekKeywordLet()) {
                const /** @type {?} */ st = this.inputIndex;
                const /** @type {?} */ ast = this.parsePipe();
                const /** @type {?} */ source = this.input.substring(st - this.offset, this.inputIndex - this.offset);
                expression = new ASTWithSource(ast, source, this.location, this.errors);
            }
            bindings.push(new TemplateBinding(this.span(start), key, keyIsVar, name, expression));
            if (this.peekKeywordAs() && !keyIsVar) {
                const /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                const /** @type {?} */ letName = this.expectTemplateBindingKey(); // read local var name
                bindings.push(new TemplateBinding(this.span(letStart), letName, true, key, /** @type {?} */ ((null))));
            }
            if (!this.optionalCharacter($SEMICOLON)) {
                this.optionalCharacter($COMMA);
            }
        }
        return new TemplateBindingParseResult(bindings, warnings, this.errors);
    }
    /**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */
    error(message, index = null) {
        this.errors.push(new ParserError(message, this.input, this.locationText(index), this.location));
        this.skip();
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    locationText(index = null) {
        if (index === null) {
            index = this.index;
        }
        return index < this.tokens.length ? `at column ${this.tokens[index].index + 1} in` : `at the end of the expression`;
    }
    /**
     * @return {?}
     */
    skip() {
        let /** @type {?} */ n = this.next;
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
    }
}
class SimpleExpressionChecker {
    constructor() {
        this.errors = [];
    }
    /**
     * @param {?} ast
     * @return {?}
     */
    static check(ast) {
        const /** @type {?} */ s = new SimpleExpressionChecker();
        ast.visit(s);
        return s.errors;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitImplicitReceiver(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitInterpolation(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitLiteralPrimitive(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPropertyRead(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPropertyWrite(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSafePropertyRead(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitMethodCall(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSafeMethodCall(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitFunctionCall(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitLiteralArray(ast, context) {
        this.visitAll(ast.expressions);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitLiteralMap(ast, context) {
        this.visitAll(ast.values);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitBinary(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPrefixNot(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitNonNullAssert(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitConditional(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPipe(ast, context) {
        this.errors.push("pipes");
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyedRead(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyedWrite(ast, context) { }
    /**
     * @param {?} asts
     * @return {?}
     */
    visitAll(asts) {
        return asts.map(node => node.visit(this));
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitChain(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitQuote(ast, context) { }
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
const /** @type {?} */ TAG_TO_PLACEHOLDER_NAMES = {
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
class PlaceholderRegistry {
    constructor() {
        this._placeHolderNameCounts = {};
        this._signatureToName = {};
    }
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    getStartTagPlaceholderName(tag, attrs, isVoid) {
        const /** @type {?} */ signature = this._hashTag(tag, attrs, isVoid);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const /** @type {?} */ upperTag = tag.toUpperCase();
        const /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        const /** @type {?} */ name = this._generateUniqueName(isVoid ? baseName : `START_${baseName}`);
        this._signatureToName[signature] = name;
        return name;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    getCloseTagPlaceholderName(tag) {
        const /** @type {?} */ signature = this._hashClosingTag(tag);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const /** @type {?} */ upperTag = tag.toUpperCase();
        const /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        const /** @type {?} */ name = this._generateUniqueName(`CLOSE_${baseName}`);
        this._signatureToName[signature] = name;
        return name;
    }
    /**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */
    getPlaceholderName(name, content) {
        const /** @type {?} */ upperName = name.toUpperCase();
        const /** @type {?} */ signature = `PH: ${upperName}=${content}`;
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const /** @type {?} */ uniqueName = this._generateUniqueName(upperName);
        this._signatureToName[signature] = uniqueName;
        return uniqueName;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getUniquePlaceholder(name) {
        return this._generateUniqueName(name.toUpperCase());
    }
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    _hashTag(tag, attrs, isVoid) {
        const /** @type {?} */ start = `<${tag}`;
        const /** @type {?} */ strAttrs = Object.keys(attrs).sort().map((name) => ` ${name}=${attrs[name]}`).join('');
        const /** @type {?} */ end = isVoid ? '/>' : `></${tag}>`;
        return start + strAttrs + end;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    _hashClosingTag(tag) { return this._hashTag(`/${tag}`, {}, false); }
    /**
     * @param {?} base
     * @return {?}
     */
    _generateUniqueName(base) {
        const /** @type {?} */ seen = this._placeHolderNameCounts.hasOwnProperty(base);
        if (!seen) {
            this._placeHolderNameCounts[base] = 1;
            return base;
        }
        const /** @type {?} */ id = this._placeHolderNameCounts[base];
        this._placeHolderNameCounts[base] = id + 1;
        return `${base}_${id}`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _expParser = new Parser$1(new Lexer());
/**
 * Returns a function converting html nodes to an i18n Message given an interpolationConfig
 * @param {?} interpolationConfig
 * @return {?}
 */
function createI18nMessageFactory(interpolationConfig) {
    const /** @type {?} */ visitor = new I18nVisitor(_expParser, interpolationConfig);
    return (nodes, meaning, description, id) => visitor.toI18nMessage(nodes, meaning, description, id);
}
class I18nVisitor {
    /**
     * @param {?} _expressionParser
     * @param {?} _interpolationConfig
     */
    constructor(_expressionParser, _interpolationConfig) {
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
    toI18nMessage(nodes, meaning, description, id) {
        this._isIcu = nodes.length === 1 && nodes[0] instanceof Expansion;
        this._icuDepth = 0;
        this._placeholderRegistry = new PlaceholderRegistry();
        this._placeholderToContent = {};
        this._placeholderToMessage = {};
        const /** @type {?} */ i18nodes = visitAll(this, nodes, {});
        return new Message(i18nodes, this._placeholderToContent, this._placeholderToMessage, meaning, description, id);
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        const /** @type {?} */ children = visitAll(this, el.children);
        const /** @type {?} */ attrs = {};
        el.attrs.forEach(attr => {
            // Do not visit the attributes, translatable ones are top-level ASTs
            attrs[attr.name] = attr.value;
        });
        const /** @type {?} */ isVoid = getHtmlTagDefinition(el.name).isVoid;
        const /** @type {?} */ startPhName = this._placeholderRegistry.getStartTagPlaceholderName(el.name, attrs, isVoid);
        this._placeholderToContent[startPhName] = el.sourceSpan ? /** @type {?} */ ((el.sourceSpan)).toString() : "";
        let /** @type {?} */ closePhName = "";
        if (!isVoid) {
            closePhName = this._placeholderRegistry.getCloseTagPlaceholderName(el.name);
            this._placeholderToContent[closePhName] = `</${el.name}>`;
        }
        return new TagPlaceholder(el.name, attrs, startPhName, closePhName, children, isVoid, /** @type {?} */ ((el.sourceSpan)));
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) {
        return this._visitTextWithInterpolation(attribute.value, attribute.sourceSpan);
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return this._visitTextWithInterpolation(text.value, /** @type {?} */ ((text.sourceSpan)));
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) {
        return null;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        this._icuDepth++;
        const /** @type {?} */ i18nIcuCases = {};
        const /** @type {?} */ i18nIcu = new Icu(icu.switchValue, icu.type, i18nIcuCases, icu.sourceSpan);
        icu.cases.forEach((caze) => {
            i18nIcuCases[caze.value] = new Container(caze.expression.map(node => node.visit(this, {})), caze.expSourceSpan);
        });
        this._icuDepth--;
        if (this._isIcu || this._icuDepth > 0) {
            // Returns an ICU node when:
            // - the message (vs a part of the message) is an ICU message, or
            // - the ICU message is nested.
            const /** @type {?} */ expPh = this._placeholderRegistry.getUniquePlaceholder(`VAR_${icu.type}`);
            i18nIcu.expressionPlaceholder = expPh;
            this._placeholderToContent[expPh] = icu.switchValue;
            return i18nIcu;
        }
        // Else returns a placeholder
        // ICU placeholders should not be replaced with their original content but with the their
        // translations. We need to create a new visitor (they are not re-entrant) to compute the
        // message id.
        // TODO(vicb): add a html.Node -> i18n.Message cache to avoid having to re-create the msg
        const /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName("ICU", icu.sourceSpan.toString());
        const /** @type {?} */ visitor = new I18nVisitor(this._expressionParser, this._interpolationConfig);
        this._placeholderToMessage[phName] = visitor.toI18nMessage([icu], "", "", "");
        return new IcuPlaceholder(i18nIcu, phName, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        throw new Error("Unreachable code");
    }
    /**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */
    _visitTextWithInterpolation(text, sourceSpan) {
        const /** @type {?} */ splitInterpolation = this._expressionParser.splitInterpolation(text, sourceSpan.start.toString(), this._interpolationConfig);
        if (!splitInterpolation) {
            // No expression, return a single text
            return new Text$1(text, sourceSpan);
        }
        // Return a group of text + expressions
        const /** @type {?} */ nodes = [];
        const /** @type {?} */ container = new Container(nodes, sourceSpan);
        const { start: sDelimiter, end: eDelimiter } = this._interpolationConfig;
        for (let /** @type {?} */ i = 0; i < splitInterpolation.strings.length - 1; i++) {
            const /** @type {?} */ expression = splitInterpolation.expressions[i];
            const /** @type {?} */ baseName = extractPlaceholderName(expression) || "INTERPOLATION";
            const /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName(baseName, expression);
            if (splitInterpolation.strings[i].length) {
                // No need to add empty strings
                nodes.push(new Text$1(splitInterpolation.strings[i], sourceSpan));
            }
            nodes.push(new Placeholder(expression, phName, sourceSpan));
            this._placeholderToContent[phName] = sDelimiter + expression + eDelimiter;
        }
        // The last index contains no expression
        const /** @type {?} */ lastStringIdx = splitInterpolation.strings.length - 1;
        if (splitInterpolation.strings[lastStringIdx].length) {
            nodes.push(new Text$1(splitInterpolation.strings[lastStringIdx], sourceSpan));
        }
        return container;
    }
}
const /** @type {?} */ _CUSTOM_PH_EXP = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
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
const /** @type {?} */ _I18N_ATTR = "i18n";
class HtmlParser extends Parser {
    /**
     * @param {?=} interpolationConfig
     */
    constructor(interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        super(getHtmlTagDefinition);
        this.interpolationConfig = interpolationConfig;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */
    parse(source, url, parseExpansionForms = false) {
        return super.parse(source, url, parseExpansionForms, this.interpolationConfig);
    }
    /**
     * Extract translatable messages from an html AST
     * @param {?} nodes
     * @return {?}
     */
    extractMessages(nodes) {
        const /** @type {?} */ visitor = new Visitor$4(["wrapper"]);
        // Construct a single fake root element
        const /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.extract(wrapper, this.interpolationConfig);
    }
    /**
     * @param {?} nodes
     * @param {?} translations
     * @param {?} params
     * @param {?=} metadata
     * @param {?=} implicitTags
     * @return {?}
     */
    mergeTranslations(nodes, translations, params, metadata, implicitTags = []) {
        const /** @type {?} */ visitor = new Visitor$4(implicitTags);
        // Construct a single fake root element
        const /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.merge(wrapper, translations, this.interpolationConfig, params, metadata);
    }
}
class ExtractionResult {
    /**
     * @param {?} messages
     * @param {?} errors
     */
    constructor(messages, errors) {
        this.messages = messages;
        this.errors = errors;
    }
}
/**
 * A container for translated messages
 */
class TranslationBundle {
    /**
     * @param {?=} i18nNodesByMsgId
     * @param {?=} digest
     * @param {?=} interpolationConfig
     * @param {?=} missingTranslationStrategy
     * @param {?=} mapperFactory
     * @param {?=} console
     */
    constructor(i18nNodesByMsgId = {}, digest, interpolationConfig, missingTranslationStrategy, mapperFactory, console) {
        this.i18nNodesByMsgId = i18nNodesByMsgId;
        this.digest = digest;
        this.mapperFactory = mapperFactory;
        this.i18nToHtml = new I18nToHtmlVisitor(i18nNodesByMsgId, digest, /** @type {?} */ ((mapperFactory)), missingTranslationStrategy, interpolationConfig, console);
    }
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
    static load(content, url, digest, createNameMapper, loadFct, missingTranslationStrategy, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ i18nNodesByMsgId = loadFct(content, url);
        const /** @type {?} */ digestFn = (m) => digest(m);
        const /** @type {?} */ mapperFactory = (m) => /** @type {?} */ ((createNameMapper(m)));
        return new TranslationBundle(i18nNodesByMsgId, digestFn, interpolationConfig, missingTranslationStrategy, mapperFactory, console);
    }
    /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    get(srcMsg, params) {
        const /** @type {?} */ htmlRes = this.i18nToHtml.convert(srcMsg, params);
        if (htmlRes.errors.length) {
            throw new Error(htmlRes.errors.join("\n"));
        }
        return htmlRes.nodes;
    }
    /**
     * @param {?} srcMsg
     * @return {?}
     */
    has(srcMsg) {
        return this.digest(srcMsg) in this.i18nNodesByMsgId;
    }
}
class I18nToHtmlVisitor {
    /**
     * @param {?=} _i18nNodesByMsgId
     * @param {?=} _digest
     * @param {?=} _mapperFactory
     * @param {?=} _missingTranslationStrategy
     * @param {?=} _interpolationConfig
     * @param {?=} _console
     */
    constructor(_i18nNodesByMsgId = {}, _digest, _mapperFactory, _missingTranslationStrategy, _interpolationConfig, _console) {
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
    convert(srcMsg, params) {
        this._contextStack.length = 0;
        this._errors.length = 0;
        this._params = params;
        this._paramKeys = Object.keys(params);
        // i18n to text
        const /** @type {?} */ text = this.convertToText(srcMsg);
        // text to html
        const /** @type {?} */ url = srcMsg.nodes[0].sourceSpan.start.file.url;
        const /** @type {?} */ htmlParser = new HtmlParser().parse(text, url, true);
        return {
            nodes: htmlParser.rootNodes,
            errors: [...this._errors, ...htmlParser.errors]
        };
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    visitText(text, context) {
        return text.value;
    }
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    visitContainer(container, context) {
        return container.children.map(n => n.visit(this)).join("");
    }
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    visitIcu(icu, context) {
        const /** @type {?} */ cases = Object.keys(icu.cases).map(k => `${k} {${icu.cases[k].visit(this)}}`);
        // TODO(vicb): Once all format switch to using expression placeholders
        // we should throw when the placeholder is not in the source message
        const /** @type {?} */ exp = this._srcMsg.placeholders.hasOwnProperty(icu.expression)
            ? this._srcMsg.placeholders[icu.expression]
            : icu.expression;
        return `{${exp}, ${icu.type}, ${cases.join(" ")}}`;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitPlaceholder(ph, context) {
        const /** @type {?} */ phName = this._mapper(ph.name);
        if (this._srcMsg.placeholders.hasOwnProperty(phName)) {
            return this.convertToValue(this._srcMsg.placeholders[phName]);
        }
        if (this._srcMsg.placeholderToMessage.hasOwnProperty(phName)) {
            return this.convertToText(this._srcMsg.placeholderToMessage[phName]);
        }
        this._addError(ph, `Unknown placeholder "${ph.name}"`);
        return "";
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        const /** @type {?} */ tag = `${ph.tag}`;
        const /** @type {?} */ attrs = Object.keys(ph.attrs)
            .map(name => `${name}="${ph.attrs[name]}"`)
            .join(" ");
        if (ph.isVoid) {
            return `<${tag} ${attrs}/>`;
        }
        const /** @type {?} */ children = ph.children.map((c) => c.visit(this)).join("");
        return `<${tag} ${attrs}>${children}</${tag}>`;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) {
        // An ICU placeholder references the source message to be serialized
        return this.convertToText(this._srcMsg.placeholderToMessage[ph.name]);
    }
    /**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */
    convertToText(srcMsg) {
        const /** @type {?} */ id = this._digest(srcMsg);
        const /** @type {?} */ mapper = this._mapperFactory ? this._mapperFactory(srcMsg) : null;
        let /** @type {?} */ nodes;
        this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper });
        this._srcMsg = srcMsg;
        if (this._i18nNodesByMsgId.hasOwnProperty(id)) {
            // When there is a translation use its nodes as the source
            // And create a mapper to convert serialized placeholder names to internal names
            nodes = this._i18nNodesByMsgId[id];
            this._mapper = (name) => (mapper ? /** @type {?} */ ((mapper.toInternalName(name))) : name);
        }
        else {
            // When no translation has been found
            // - report an error / a warning / nothing,
            // - use the nodes from the original message
            // - placeholders are already internal and need no mapper
            if (this._missingTranslationStrategy === MissingTranslationStrategy.Error) {
                this._addError(srcMsg.nodes[0], `Missing translation for message "${id}"`);
            }
            else if (this._console && this._missingTranslationStrategy === MissingTranslationStrategy.Warning) {
                this._console.warn(`Missing translation for message "${id}"`);
            }
            nodes = srcMsg.nodes;
            this._mapper = (name) => name;
        }
        const /** @type {?} */ text = nodes.map(node => node.visit(this)).join("");
        const /** @type {?} */ context = /** @type {?} */ ((this._contextStack.pop()));
        this._srcMsg = context.msg;
        this._mapper = context.mapper;
        return text;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    convertToValue(placeholder) {
        const /** @type {?} */ param = placeholder.replace(this._interpolationConfig.start, "").replace(this._interpolationConfig.end, "");
        return this._paramKeys.indexOf(param) !== -1 ? this._params[param] : placeholder;
    }
    /**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */
    _addError(el, msg) {
        this._errors.push(new I18nError(el.sourceSpan, msg));
    }
}
/** @enum {number} */
const VisitorMode = {
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
class Visitor$4 {
    /**
     * @param {?=} _implicitTags
     */
    constructor(_implicitTags = []) {
        this._implicitTags = _implicitTags;
        this.blockChildren = [];
    }
    /**
     * Extracts the messages from the tree
     * @param {?} node
     * @param {?} interpolationConfig
     * @return {?}
     */
    extract(node, interpolationConfig) {
        this.init(VisitorMode.Extract, interpolationConfig);
        node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ExtractionResult(this.messages, this.errors);
    }
    /**
     * Returns a tree where all translatable nodes are translated
     * @param {?} node
     * @param {?} translations
     * @param {?} interpolationConfig
     * @param {?} params
     * @param {?=} metadata
     * @return {?}
     */
    merge(node, translations, interpolationConfig, params, metadata = {}) {
        this.init(VisitorMode.Merge, interpolationConfig, params);
        this.translations = translations;
        this.metadata = metadata;
        const /** @type {?} */ translatedNode = node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ParseTreeResult(translatedNode.children, this.errors);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        // Parse cases for translatable html attributes
        const /** @type {?} */ expression = visitAll(this, icuCase.expression, context);
        if (this.mode === VisitorMode.Merge) {
            return new ExpansionCase(icuCase.value, expression, icuCase.sourceSpan, icuCase.valueSourceSpan, icuCase.expSourceSpan);
        }
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        this.mayBeAddBlockChildren(icu);
        const /** @type {?} */ wasInIcu = this.inIcu;
        if (!this.inIcu) {
            // nested ICU messages should not be extracted but top-level translated as a whole
            if (this.isInTranslatableSection) {
                this.addMessage([icu]);
            }
            this.inIcu = true;
        }
        const /** @type {?} */ cases = visitAll(this, icu.cases, context);
        if (this.mode === VisitorMode.Merge) {
            icu = new Expansion(icu.switchValue, icu.type, cases, icu.sourceSpan, icu.switchValueSourceSpan);
        }
        this.inIcu = wasInIcu;
        return icu;
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) {
        return;
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        if (this.isInTranslatableSection) {
            this.mayBeAddBlockChildren(text);
        }
        return text;
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        this.mayBeAddBlockChildren(el);
        this.depth++;
        const /** @type {?} */ wasInI18nNode = this.inI18nNode;
        const /** @type {?} */ wasInImplicitNode = this.inImplicitNode;
        let /** @type {?} */ childNodes = [];
        let /** @type {?} */ translatedChildNodes = /** @type {?} */ ((undefined));
        // Extract:
        // - top level nodes with the (implicit) "i18n" attribute if not already in a section
        // - ICU messages
        const /** @type {?} */ i18nAttr = getI18nAttr(el);
        const /** @type {?} */ isImplicit = this._implicitTags.some(tag => el.name === tag) && !this.inIcu && !this.isInTranslatableSection;
        const /** @type {?} */ isTopLevelImplicit = !wasInImplicitNode && isImplicit;
        this.inImplicitNode = wasInImplicitNode || isImplicit;
        if (!this.isInTranslatableSection && !this.inIcu) {
            if (i18nAttr || isTopLevelImplicit) {
                this.inI18nNode = true;
                const /** @type {?} */ message = /** @type {?} */ ((this.addMessage(el.children, this.metadata)));
                translatedChildNodes = this.translateMessage(el, message);
            }
            if (this.mode === VisitorMode.Extract) {
                const /** @type {?} */ isTranslatable = i18nAttr || isTopLevelImplicit;
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
            const /** @type {?} */ visitNodes = translatedChildNodes || el.children;
            visitNodes.forEach(child => {
                const /** @type {?} */ visited = child.visit(this, context);
                if (visited && !this.isInTranslatableSection) {
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
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) {
        throw new Error("unreachable code");
    }
    /**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @param {?=} params
     * @return {?}
     */
    init(mode, interpolationConfig, params = {}) {
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
    }
    /**
     * @param {?} ast
     * @param {?=} __1
     * @return {?}
     */
    addMessage(ast, { meaning = "", description = "", id = "" } = {}) {
        if (ast.length === 0 ||
            (ast.length === 1 && ast[0] instanceof Attribute && !(/** @type {?} */ (ast[0])).value)) {
            // Do not create empty messages
            return null;
        }
        const /** @type {?} */ message = this.createI18nMessage(ast, meaning, description, id);
        this.messages.push(message);
        return message;
    }
    /**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */
    translateMessage(el, message) {
        if (message && this.mode === VisitorMode.Merge) {
            const /** @type {?} */ nodes = this.translations.get(message, this.params);
            if (nodes) {
                return nodes;
            }
            this._reportError(el, `Translation unavailable for message id="${this.translations.digest(message)}"`);
        }
        return [];
    }
    /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */
    mayBeAddBlockChildren(node) {
        if (this.inI18nBlock && !this.inIcu && this.depth === this.blockStartDepth) {
            this.blockChildren.push(node);
        }
    }
    /**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */
    openTranslatableSection(node) {
        if (this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section start");
        }
        else {
            this.msgCountAtSectionStart = this.messages.length;
        }
    }
    /**
     * A translatable section could be:
     * - the content of translatable element,
     * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
     * @return {?}
     */
    get isInTranslatableSection() {
        return this.msgCountAtSectionStart !== void 0;
    }
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
    _closeTranslatableSection(node, directChildren) {
        if (!this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section end");
            return;
        }
        const /** @type {?} */ startIndex = this.msgCountAtSectionStart;
        const /** @type {?} */ significantChildren = directChildren.reduce((count, n) => count + (n instanceof Comment ? 0 : 1), 0);
        if (significantChildren === 1) {
            for (let /** @type {?} */ i = this.messages.length - 1; i >= /** @type {?} */ ((startIndex)); i--) {
                const /** @type {?} */ ast = this.messages[i].nodes;
                if (!(ast.length === 1 && ast[0] instanceof Text$1)) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        }
        this.msgCountAtSectionStart = undefined;
    }
    /**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */
    _reportError(node, msg) {
        this.errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), msg));
    }
}
/**
 * @param {?} p
 * @return {?}
 */
function getI18nAttr(p) {
    return p.attrs.find(attr => attr.name === _I18N_ATTR) || null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MISSING_TRANSLATION_STRATEGY = new InjectionToken("MissingTranslationStrategy");
/**
 * A speculative polyfill to use i18n code translations
 */
class I18n {
    /**
     * @param {?} format
     * @param {?} translations
     * @param {?} locale
     * @param {?=} missingTranslationStrategy
     */
    constructor(format, translations, locale, missingTranslationStrategy = MissingTranslationStrategy.Warning) {
        let /** @type {?} */ loadFct;
        let /** @type {?} */ digest;
        let /** @type {?} */ createMapper = (message) => null;
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
                throw new Error(`Unknown translations format ${format}`);
        }
        const /** @type {?} */ htmlParser = new HtmlParser();
        const /** @type {?} */ translationsBundle = TranslationBundle.load(translations, "i18n", digest, createMapper, loadFct, missingTranslationStrategy);
        // todo use interpolation config
        return (def, params = {}) => {
            const /** @type {?} */ content = typeof def === "string" ? def : def.value;
            const /** @type {?} */ metadata = {};
            if (typeof def === "object") {
                metadata["id"] = def.id;
                metadata["meaning"] = def.meaning;
                metadata["description"] = def.description;
            }
            const /** @type {?} */ htmlParserResult = htmlParser.parse(content, "", true);
            if (htmlParserResult.errors.length) {
                throw htmlParserResult.errors;
            }
            const /** @type {?} */ mergedNodes = htmlParser.mergeTranslations(htmlParserResult.rootNodes, translationsBundle, params, metadata, ["wrapper"]);
            return serializeNodes(mergedNodes.rootNodes, locale, params).join("");
        };
    }
}
I18n.decorators = [
    { type: Injectable },
];
/** @nocollapse */
I18n.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS_FORMAT,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
    { type: MissingTranslationStrategy, decorators: [{ type: Optional }, { type: Inject, args: [MISSING_TRANSLATION_STRATEGY,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { I18n, MISSING_TRANSLATION_STRATEGY };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1pMThuLXBvbHlmaWxsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaTE4bl9hc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9wYXJzZV91dGlsLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWcudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9jaGFycy50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3RhZ3MudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9sZXhlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3BhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3htbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaHRtbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9kaWdlc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3hsaWZmLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy94bGlmZjIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htYi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvc2VyaWFsaXplcnMveHRiLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvbGV4ZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3BhcnNlci9wYXJzZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvaTE4bi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvcGFyc2VyL2h0bWwudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2kxOG4tcG9seWZpbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzd2l0Y2hWYWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiBFeHBhbnNpb25DYXNlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwYW5zaW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25DYXNlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBOb2RlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgdmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIGV4cFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhblxuICApIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbkNhc2UodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3BhblxuICApIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyaWJ1dGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgYXR0cnM6IEF0dHJpYnV0ZVtdLFxuICAgIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHN0YXJ0U291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG4gICAgcHVibGljIGVuZFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiB8IG51bGwgPSBudWxsXG4gICkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29tbWVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2l0b3Ige1xuICAvLyBSZXR1cm5pbmcgYSB0cnV0aHkgdmFsdWUgZnJvbSBgdmlzaXQoKWAgd2lsbCBwcmV2ZW50IGB2aXNpdEFsbCgpYCBmcm9tIHRoZSBjYWxsIHRvIHRoZSB0eXBlZFxuICAvLyBtZXRob2QgYW5kIHJlc3VsdCByZXR1cm5lZCB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IGluY2x1ZGVkIGluIGB2aXNpdEFsbCgpYHMgcmVzdWx0IGFycmF5LlxuICB2aXNpdD8obm9kZTogTm9kZSwgY29udGV4dDogYW55KTogYW55O1xuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBDb21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBFeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEFsbCh2aXNpdG9yOiBWaXNpdG9yLCBub2RlczogTm9kZVtdLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG5cbiAgY29uc3QgdmlzaXQgPSB2aXNpdG9yLnZpc2l0XG4gICAgPyAoYXN0OiBOb2RlKSA9PiB2aXNpdG9yLnZpc2l0IShhc3QsIGNvbnRleHQpIHx8IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KVxuICAgIDogKGFzdDogTm9kZSkgPT4gYXN0LnZpc2l0KHZpc2l0b3IsIGNvbnRleHQpO1xuICBub2Rlcy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgY29uc3QgYXN0UmVzdWx0ID0gdmlzaXQoYXN0KTtcbiAgICBpZiAoYXN0UmVzdWx0KSB7XG4gICAgICByZXN1bHQucHVzaChhc3RSZXN1bHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZV91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgc291cmNlczogTWVzc2FnZVNwYW5bXTtcblxuICAvKipcbiAgICogQHBhcmFtIHNvdXJjZSBtZXNzYWdlIEFTVFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXJzIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gc3RhdGljIGNvbnRlbnRcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVyVG9NZXNzYWdlIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gbWVzc2FnZXMgKHVzZWQgZm9yIG5lc3RlZCBJQ1UgbWVzc2FnZXMpXG4gICAqIEBwYXJhbSBtZWFuaW5nXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBub2RlczogTm9kZVtdLFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlcnM6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlclRvTWVzc2FnZToge1twaE5hbWU6IHN0cmluZ106IE1lc3NhZ2V9LFxuICAgIHB1YmxpYyBtZWFuaW5nOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGlkOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgZmlsZVBhdGg6IG5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmwsXG4gICAgICAgICAgc3RhcnRMaW5lOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmxpbmUgKyAxLFxuICAgICAgICAgIHN0YXJ0Q29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDEsXG4gICAgICAgICAgZW5kTGluZTogbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uc291cmNlU3Bhbi5lbmQubGluZSArIDEsXG4gICAgICAgICAgZW5kQ29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDFcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW107XG4gICAgfVxuICB9XG59XG5cbi8vIGxpbmUgYW5kIGNvbHVtbnMgaW5kZXhlcyBhcmUgMSBiYXNlZFxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU3BhbiB7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIHN0YXJ0TGluZTogbnVtYmVyO1xuICBzdGFydENvbDogbnVtYmVyO1xuICBlbmRMaW5lOiBudW1iZXI7XG4gIGVuZENvbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vLyBUT0RPKHZpY2IpOiBkbyB3ZSByZWFsbHkgbmVlZCB0aGlzIG5vZGUgKHZzIGFuIGFycmF5KSA/XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29udGFpbmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJY3UgaW1wbGVtZW50cyBOb2RlIHtcbiAgcHVibGljIGV4cHJlc3Npb25QbGFjZWhvbGRlcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9LFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmcsXG4gICAgcHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sXG4gICAgcHVibGljIHN0YXJ0TmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjbG9zZU5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgaXNWb2lkOiBib29sZWFuLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnUGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljdVBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogSWN1LCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuLy8gQ2xvbmUgdGhlIEFTVFxuZXhwb3J0IGNsYXNzIENsb25lVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IFRleHQge1xuICAgIHJldHVybiBuZXcgVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBDb250YWluZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyKGNoaWxkcmVuLCBjb250YWluZXIuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IEljdSB7XG4gICAgY29uc3QgY2FzZXM6IHtbazogc3RyaW5nXTogTm9kZX0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goa2V5ID0+IChjYXNlc1trZXldID0gaWN1LmNhc2VzW2tleV0udmlzaXQodGhpcywgY29udGV4dCkpKTtcbiAgICBjb25zdCBtc2cgPSBuZXcgSWN1KGljdS5leHByZXNzaW9uLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBtc2cuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gaWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBUYWdQbGFjZWhvbGRlciB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IFRhZ1BsYWNlaG9sZGVyKHBoLnRhZywgcGguYXR0cnMsIHBoLnN0YXJ0TmFtZSwgcGguY2xvc2VOYW1lLCBjaGlsZHJlbiwgcGguaXNWb2lkLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgUGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBJY3VQbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBJY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgcGgubmFtZSwgcGguc291cmNlU3Bhbik7XG4gIH1cbn1cblxuLy8gVmlzaXQgYWxsIHRoZSBub2RlcyByZWN1cnNpdmVseVxuZXhwb3J0IGNsYXNzIFJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goayA9PiB7XG4gICAgICBpY3UuY2FzZXNba10udmlzaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcGguY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHt9XG59XG4iLCJpbXBvcnQge0kxOG5EZWZ9IGZyb20gXCIuLi9pMThuLXBvbHlmaWxsXCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZTogUGFyc2VTb3VyY2VGaWxlLCBwdWJsaWMgb2Zmc2V0OiBudW1iZXIsIHB1YmxpYyBsaW5lOiBudW1iZXIsIHB1YmxpYyBjb2w6IG51bWJlcikge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCAhPSBudWxsID8gYCR7dGhpcy5saW5lfToke3RoaXMuY29sfWAgOiBcIlwiO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBzb3VyY2UgYXJvdW5kIHRoZSBsb2NhdGlvblxuICAvLyBVcCB0byBgbWF4Q2hhcnNgIG9yIGBtYXhMaW5lc2Agb24gZWFjaCBzaWRlIG9mIHRoZSBsb2NhdGlvblxuICBnZXRDb250ZXh0KG1heENoYXJzOiBudW1iZXIsIG1heExpbmVzOiBudW1iZXIpOiB7YmVmb3JlOiBzdHJpbmc7IGFmdGVyOiBzdHJpbmd9IHwgbnVsbCB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZmlsZS5jb250ZW50O1xuICAgIGxldCBzdGFydE9mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHN0YXJ0T2Zmc2V0ICE9IG51bGwpIHtcbiAgICAgIGlmIChzdGFydE9mZnNldCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdGFydE9mZnNldCA9IGNvbnRlbnQubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBlbmRPZmZzZXQgPSBzdGFydE9mZnNldDtcbiAgICAgIGxldCBjdHhDaGFycyA9IDA7XG4gICAgICBsZXQgY3R4TGluZXMgPSAwO1xuXG4gICAgICB3aGlsZSAoY3R4Q2hhcnMgPCBtYXhDaGFycyAmJiBzdGFydE9mZnNldCA+IDApIHtcbiAgICAgICAgc3RhcnRPZmZzZXQtLTtcbiAgICAgICAgY3R4Q2hhcnMrKztcbiAgICAgICAgaWYgKGNvbnRlbnRbc3RhcnRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3R4Q2hhcnMgPSAwO1xuICAgICAgY3R4TGluZXMgPSAwO1xuICAgICAgd2hpbGUgKGN0eENoYXJzIDwgbWF4Q2hhcnMgJiYgZW5kT2Zmc2V0IDwgY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGVuZE9mZnNldCsrO1xuICAgICAgICBjdHhDaGFycysrO1xuICAgICAgICBpZiAoY29udGVudFtlbmRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVmb3JlOiBjb250ZW50LnN1YnN0cmluZyhzdGFydE9mZnNldCwgdGhpcy5vZmZzZXQpLFxuICAgICAgICBhZnRlcjogY29udGVudC5zdWJzdHJpbmcodGhpcy5vZmZzZXQsIGVuZE9mZnNldCArIDEpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVNvdXJjZUZpbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGVudDogc3RyaW5nLCBwdWJsaWMgdXJsID0gXCJcIikge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGVuZDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGRldGFpbHM6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQuZmlsZS5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0Lm9mZnNldCwgdGhpcy5lbmQub2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBQYXJzZUVycm9yTGV2ZWwge1xuICBXQVJOSU5HLFxuICBFUlJPUlxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIG1zZzogc3RyaW5nLFxuICAgIHB1YmxpYyBsZXZlbDogUGFyc2VFcnJvckxldmVsID0gUGFyc2VFcnJvckxldmVsLkVSUk9SXG4gICkge31cblxuICBjb250ZXh0dWFsTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuc3Bhbi5zdGFydC5nZXRDb250ZXh0KDEwMCwgMyk7XG4gICAgcmV0dXJuIGN0eCA/IGAgKFwiJHtjdHguYmVmb3JlfVske1BhcnNlRXJyb3JMZXZlbFt0aGlzLmxldmVsXX0gLT5dJHtjdHguYWZ0ZXJ9XCIpYCA6IFwiXCI7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLnNwYW4uZGV0YWlscyA/IGAsICR7dGhpcy5zcGFuLmRldGFpbHN9YCA6IFwiXCI7XG4gICAgcmV0dXJuIGAke3RoaXMubXNnfSR7dGhpcy5jb250ZXh0dWFsTWVzc2FnZSgpfTogJHt0aGlzLnNwYW4uc3RhcnR9JHtkZXRhaWxzfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpMThuIGVycm9yLlxuICovXG5leHBvcnQgY2xhc3MgSTE4bkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuLCBtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uQ29uZmlnIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBzdHJpbmcsIHB1YmxpYyBlbmQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc6IEludGVycG9sYXRpb25Db25maWcgPSBuZXcgSW50ZXJwb2xhdGlvbkNvbmZpZyhcInt7XCIsIFwifX1cIik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCAkRU9GID0gMDtcbmV4cG9ydCBjb25zdCAkVEFCID0gOTtcbmV4cG9ydCBjb25zdCAkTEYgPSAxMDtcbmV4cG9ydCBjb25zdCAkVlRBQiA9IDExO1xuZXhwb3J0IGNvbnN0ICRGRiA9IDEyO1xuZXhwb3J0IGNvbnN0ICRDUiA9IDEzO1xuZXhwb3J0IGNvbnN0ICRTUEFDRSA9IDMyO1xuZXhwb3J0IGNvbnN0ICRCQU5HID0gMzM7XG5leHBvcnQgY29uc3QgJERRID0gMzQ7XG5leHBvcnQgY29uc3QgJEhBU0ggPSAzNTtcbmV4cG9ydCBjb25zdCAkJCA9IDM2O1xuZXhwb3J0IGNvbnN0ICRQRVJDRU5UID0gMzc7XG5leHBvcnQgY29uc3QgJEFNUEVSU0FORCA9IDM4O1xuZXhwb3J0IGNvbnN0ICRTUSA9IDM5O1xuZXhwb3J0IGNvbnN0ICRMUEFSRU4gPSA0MDtcbmV4cG9ydCBjb25zdCAkUlBBUkVOID0gNDE7XG5leHBvcnQgY29uc3QgJFNUQVIgPSA0MjtcbmV4cG9ydCBjb25zdCAkUExVUyA9IDQzO1xuZXhwb3J0IGNvbnN0ICRDT01NQSA9IDQ0O1xuZXhwb3J0IGNvbnN0ICRNSU5VUyA9IDQ1O1xuZXhwb3J0IGNvbnN0ICRQRVJJT0QgPSA0NjtcbmV4cG9ydCBjb25zdCAkU0xBU0ggPSA0NztcbmV4cG9ydCBjb25zdCAkQ09MT04gPSA1ODtcbmV4cG9ydCBjb25zdCAkU0VNSUNPTE9OID0gNTk7XG5leHBvcnQgY29uc3QgJExUID0gNjA7XG5leHBvcnQgY29uc3QgJEVRID0gNjE7XG5leHBvcnQgY29uc3QgJEdUID0gNjI7XG5leHBvcnQgY29uc3QgJFFVRVNUSU9OID0gNjM7XG5cbmV4cG9ydCBjb25zdCAkMCA9IDQ4O1xuZXhwb3J0IGNvbnN0ICQ5ID0gNTc7XG5cbmV4cG9ydCBjb25zdCAkQSA9IDY1O1xuZXhwb3J0IGNvbnN0ICRFID0gNjk7XG5leHBvcnQgY29uc3QgJEYgPSA3MDtcbmV4cG9ydCBjb25zdCAkWCA9IDg4O1xuZXhwb3J0IGNvbnN0ICRaID0gOTA7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNLRVQgPSA5MTtcbmV4cG9ydCBjb25zdCAkQkFDS1NMQVNIID0gOTI7XG5leHBvcnQgY29uc3QgJFJCUkFDS0VUID0gOTM7XG5leHBvcnQgY29uc3QgJENBUkVUID0gOTQ7XG5leHBvcnQgY29uc3QgJF8gPSA5NTtcblxuZXhwb3J0IGNvbnN0ICRhID0gOTc7XG5leHBvcnQgY29uc3QgJGUgPSAxMDE7XG5leHBvcnQgY29uc3QgJGYgPSAxMDI7XG5leHBvcnQgY29uc3QgJG4gPSAxMTA7XG5leHBvcnQgY29uc3QgJHIgPSAxMTQ7XG5leHBvcnQgY29uc3QgJHQgPSAxMTY7XG5leHBvcnQgY29uc3QgJHUgPSAxMTc7XG5leHBvcnQgY29uc3QgJHYgPSAxMTg7XG5leHBvcnQgY29uc3QgJHggPSAxMjA7XG5leHBvcnQgY29uc3QgJHogPSAxMjI7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNFID0gMTIzO1xuZXhwb3J0IGNvbnN0ICRCQVIgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFJCUkFDRSA9IDEyNTtcbmV4cG9ydCBjb25zdCAkTkJTUCA9IDE2MDtcblxuZXhwb3J0IGNvbnN0ICRQSVBFID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRUSUxEQSA9IDEyNjtcbmV4cG9ydCBjb25zdCAkQVQgPSA2NDtcblxuZXhwb3J0IGNvbnN0ICRCVCA9IDk2O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJFRBQiAmJiBjb2RlIDw9ICRTUEFDRSkgfHwgY29kZSA9PT0gJE5CU1A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gJDAgPD0gY29kZSAmJiBjb2RlIDw9ICQ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUxldHRlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRhICYmIGNvZGUgPD0gJHopIHx8IChjb2RlID49ICRBICYmIGNvZGUgPD0gJFopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUhleERpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkZikgfHwgKGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkRikgfHwgaXNEaWdpdChjb2RlKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGVudW0gVGFnQ29udGVudFR5cGUge1xuICBSQVdfVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBQQVJTQUJMRV9EQVRBXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50OiBib29sZWFuO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZyB8IG51bGw7XG4gIGNvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZTtcbiAgaXNWb2lkOiBib29sZWFuO1xuICBpZ25vcmVGaXJzdExmOiBib29sZWFuO1xuICBjYW5TZWxmQ2xvc2U6IGJvb2xlYW47XG5cbiAgcmVxdWlyZUV4dHJhUGFyZW50KGN1cnJlbnRQYXJlbnQ6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdE5zTmFtZShlbGVtZW50TmFtZTogc3RyaW5nKTogW3N0cmluZyB8IG51bGwsIHN0cmluZ10ge1xuICBpZiAoZWxlbWVudE5hbWVbMF0gIT09IFwiOlwiKSB7XG4gICAgcmV0dXJuIFtudWxsLCBlbGVtZW50TmFtZV07XG4gIH1cblxuICBjb25zdCBjb2xvbkluZGV4ID0gZWxlbWVudE5hbWUuaW5kZXhPZihcIjpcIiwgMSk7XG5cbiAgaWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBmb3JtYXQgXCIke2VsZW1lbnROYW1lfVwiIGV4cGVjdGluZyBcIjpuYW1lc3BhY2U6bmFtZVwiYCk7XG4gIH1cblxuICByZXR1cm4gW2VsZW1lbnROYW1lLnNsaWNlKDEsIGNvbG9uSW5kZXgpLCBlbGVtZW50TmFtZS5zbGljZShjb2xvbkluZGV4ICsgMSldO1xufVxuXG4vLyBgPG5nLWNvbnRhaW5lcj5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGFpbmVyKHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09IFwibmctY29udGFpbmVyXCI7XG59XG5cbi8vIGA8bmctY29udGVudD5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGVudCh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSBcIm5nLWNvbnRlbnRcIjtcbn1cblxuLy8gYDxuZy10ZW1wbGF0ZT5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nVGVtcGxhdGUodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gXCJuZy10ZW1wbGF0ZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyk6IHN0cmluZztcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogbnVsbCk6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIGZ1bGxOYW1lID09PSBudWxsID8gbnVsbCA6IHNwbGl0TnNOYW1lKGZ1bGxOYW1lKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTnNBbmROYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwcmVmaXggPyBgOiR7cHJlZml4fToke2xvY2FsTmFtZX1gIDogbG9jYWxOYW1lO1xufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzXG4vLyBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW50aXRpZXMuanNvblxuLy8gVGhpcyBsaXN0IGlzIG5vdCBleGhhdXN0aXZlIHRvIGtlZXAgdGhlIGNvbXBpbGVyIGZvb3RwcmludCBsb3cuXG4vLyBUaGUgYCYjMTIzO2AgLyBgJiN4MWFiO2Agc3ludGF4IHNob3VsZCBiZSB1c2VkIHdoZW4gdGhlIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2UgZG9lcyBub3Rcbi8vIGV4aXN0LlxuXG5leHBvcnQgY29uc3QgTkFNRURfRU5USVRJRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgQWFjdXRlOiBcIlxcdTAwQzFcIixcbiAgYWFjdXRlOiBcIlxcdTAwRTFcIixcbiAgQWNpcmM6IFwiXFx1MDBDMlwiLFxuICBhY2lyYzogXCJcXHUwMEUyXCIsXG4gIGFjdXRlOiBcIlxcdTAwQjRcIixcbiAgQUVsaWc6IFwiXFx1MDBDNlwiLFxuICBhZWxpZzogXCJcXHUwMEU2XCIsXG4gIEFncmF2ZTogXCJcXHUwMEMwXCIsXG4gIGFncmF2ZTogXCJcXHUwMEUwXCIsXG4gIGFsZWZzeW06IFwiXFx1MjEzNVwiLFxuICBBbHBoYTogXCJcXHUwMzkxXCIsXG4gIGFscGhhOiBcIlxcdTAzQjFcIixcbiAgYW1wOiBcIiZcIixcbiAgYW5kOiBcIlxcdTIyMjdcIixcbiAgYW5nOiBcIlxcdTIyMjBcIixcbiAgYXBvczogXCJcXHUwMDI3XCIsXG4gIEFyaW5nOiBcIlxcdTAwQzVcIixcbiAgYXJpbmc6IFwiXFx1MDBFNVwiLFxuICBhc3ltcDogXCJcXHUyMjQ4XCIsXG4gIEF0aWxkZTogXCJcXHUwMEMzXCIsXG4gIGF0aWxkZTogXCJcXHUwMEUzXCIsXG4gIEF1bWw6IFwiXFx1MDBDNFwiLFxuICBhdW1sOiBcIlxcdTAwRTRcIixcbiAgYmRxdW86IFwiXFx1MjAxRVwiLFxuICBCZXRhOiBcIlxcdTAzOTJcIixcbiAgYmV0YTogXCJcXHUwM0IyXCIsXG4gIGJydmJhcjogXCJcXHUwMEE2XCIsXG4gIGJ1bGw6IFwiXFx1MjAyMlwiLFxuICBjYXA6IFwiXFx1MjIyOVwiLFxuICBDY2VkaWw6IFwiXFx1MDBDN1wiLFxuICBjY2VkaWw6IFwiXFx1MDBFN1wiLFxuICBjZWRpbDogXCJcXHUwMEI4XCIsXG4gIGNlbnQ6IFwiXFx1MDBBMlwiLFxuICBDaGk6IFwiXFx1MDNBN1wiLFxuICBjaGk6IFwiXFx1MDNDN1wiLFxuICBjaXJjOiBcIlxcdTAyQzZcIixcbiAgY2x1YnM6IFwiXFx1MjY2M1wiLFxuICBjb25nOiBcIlxcdTIyNDVcIixcbiAgY29weTogXCJcXHUwMEE5XCIsXG4gIGNyYXJyOiBcIlxcdTIxQjVcIixcbiAgY3VwOiBcIlxcdTIyMkFcIixcbiAgY3VycmVuOiBcIlxcdTAwQTRcIixcbiAgZGFnZ2VyOiBcIlxcdTIwMjBcIixcbiAgRGFnZ2VyOiBcIlxcdTIwMjFcIixcbiAgZGFycjogXCJcXHUyMTkzXCIsXG4gIGRBcnI6IFwiXFx1MjFEM1wiLFxuICBkZWc6IFwiXFx1MDBCMFwiLFxuICBEZWx0YTogXCJcXHUwMzk0XCIsXG4gIGRlbHRhOiBcIlxcdTAzQjRcIixcbiAgZGlhbXM6IFwiXFx1MjY2NlwiLFxuICBkaXZpZGU6IFwiXFx1MDBGN1wiLFxuICBFYWN1dGU6IFwiXFx1MDBDOVwiLFxuICBlYWN1dGU6IFwiXFx1MDBFOVwiLFxuICBFY2lyYzogXCJcXHUwMENBXCIsXG4gIGVjaXJjOiBcIlxcdTAwRUFcIixcbiAgRWdyYXZlOiBcIlxcdTAwQzhcIixcbiAgZWdyYXZlOiBcIlxcdTAwRThcIixcbiAgZW1wdHk6IFwiXFx1MjIwNVwiLFxuICBlbXNwOiBcIlxcdTIwMDNcIixcbiAgZW5zcDogXCJcXHUyMDAyXCIsXG4gIEVwc2lsb246IFwiXFx1MDM5NVwiLFxuICBlcHNpbG9uOiBcIlxcdTAzQjVcIixcbiAgZXF1aXY6IFwiXFx1MjI2MVwiLFxuICBFdGE6IFwiXFx1MDM5N1wiLFxuICBldGE6IFwiXFx1MDNCN1wiLFxuICBFVEg6IFwiXFx1MDBEMFwiLFxuICBldGg6IFwiXFx1MDBGMFwiLFxuICBFdW1sOiBcIlxcdTAwQ0JcIixcbiAgZXVtbDogXCJcXHUwMEVCXCIsXG4gIGV1cm86IFwiXFx1MjBBQ1wiLFxuICBleGlzdDogXCJcXHUyMjAzXCIsXG4gIGZub2Y6IFwiXFx1MDE5MlwiLFxuICBmb3JhbGw6IFwiXFx1MjIwMFwiLFxuICBmcmFjMTI6IFwiXFx1MDBCRFwiLFxuICBmcmFjMTQ6IFwiXFx1MDBCQ1wiLFxuICBmcmFjMzQ6IFwiXFx1MDBCRVwiLFxuICBmcmFzbDogXCJcXHUyMDQ0XCIsXG4gIEdhbW1hOiBcIlxcdTAzOTNcIixcbiAgZ2FtbWE6IFwiXFx1MDNCM1wiLFxuICBnZTogXCJcXHUyMjY1XCIsXG4gIGd0OiBcIj5cIixcbiAgaGFycjogXCJcXHUyMTk0XCIsXG4gIGhBcnI6IFwiXFx1MjFENFwiLFxuICBoZWFydHM6IFwiXFx1MjY2NVwiLFxuICBoZWxsaXA6IFwiXFx1MjAyNlwiLFxuICBJYWN1dGU6IFwiXFx1MDBDRFwiLFxuICBpYWN1dGU6IFwiXFx1MDBFRFwiLFxuICBJY2lyYzogXCJcXHUwMENFXCIsXG4gIGljaXJjOiBcIlxcdTAwRUVcIixcbiAgaWV4Y2w6IFwiXFx1MDBBMVwiLFxuICBJZ3JhdmU6IFwiXFx1MDBDQ1wiLFxuICBpZ3JhdmU6IFwiXFx1MDBFQ1wiLFxuICBpbWFnZTogXCJcXHUyMTExXCIsXG4gIGluZmluOiBcIlxcdTIyMUVcIixcbiAgaW50OiBcIlxcdTIyMkJcIixcbiAgSW90YTogXCJcXHUwMzk5XCIsXG4gIGlvdGE6IFwiXFx1MDNCOVwiLFxuICBpcXVlc3Q6IFwiXFx1MDBCRlwiLFxuICBpc2luOiBcIlxcdTIyMDhcIixcbiAgSXVtbDogXCJcXHUwMENGXCIsXG4gIGl1bWw6IFwiXFx1MDBFRlwiLFxuICBLYXBwYTogXCJcXHUwMzlBXCIsXG4gIGthcHBhOiBcIlxcdTAzQkFcIixcbiAgTGFtYmRhOiBcIlxcdTAzOUJcIixcbiAgbGFtYmRhOiBcIlxcdTAzQkJcIixcbiAgbGFuZzogXCJcXHUyN0U4XCIsXG4gIGxhcXVvOiBcIlxcdTAwQUJcIixcbiAgbGFycjogXCJcXHUyMTkwXCIsXG4gIGxBcnI6IFwiXFx1MjFEMFwiLFxuICBsY2VpbDogXCJcXHUyMzA4XCIsXG4gIGxkcXVvOiBcIlxcdTIwMUNcIixcbiAgbGU6IFwiXFx1MjI2NFwiLFxuICBsZmxvb3I6IFwiXFx1MjMwQVwiLFxuICBsb3dhc3Q6IFwiXFx1MjIxN1wiLFxuICBsb3o6IFwiXFx1MjVDQVwiLFxuICBscm06IFwiXFx1MjAwRVwiLFxuICBsc2FxdW86IFwiXFx1MjAzOVwiLFxuICBsc3F1bzogXCJcXHUyMDE4XCIsXG4gIGx0OiBcIjxcIixcbiAgbWFjcjogXCJcXHUwMEFGXCIsXG4gIG1kYXNoOiBcIlxcdTIwMTRcIixcbiAgbWljcm86IFwiXFx1MDBCNVwiLFxuICBtaWRkb3Q6IFwiXFx1MDBCN1wiLFxuICBtaW51czogXCJcXHUyMjEyXCIsXG4gIE11OiBcIlxcdTAzOUNcIixcbiAgbXU6IFwiXFx1MDNCQ1wiLFxuICBuYWJsYTogXCJcXHUyMjA3XCIsXG4gIG5ic3A6IFwiXFx1MDBBMFwiLFxuICBuZGFzaDogXCJcXHUyMDEzXCIsXG4gIG5lOiBcIlxcdTIyNjBcIixcbiAgbmk6IFwiXFx1MjIwQlwiLFxuICBub3Q6IFwiXFx1MDBBQ1wiLFxuICBub3RpbjogXCJcXHUyMjA5XCIsXG4gIG5zdWI6IFwiXFx1MjI4NFwiLFxuICBOdGlsZGU6IFwiXFx1MDBEMVwiLFxuICBudGlsZGU6IFwiXFx1MDBGMVwiLFxuICBOdTogXCJcXHUwMzlEXCIsXG4gIG51OiBcIlxcdTAzQkRcIixcbiAgT2FjdXRlOiBcIlxcdTAwRDNcIixcbiAgb2FjdXRlOiBcIlxcdTAwRjNcIixcbiAgT2NpcmM6IFwiXFx1MDBENFwiLFxuICBvY2lyYzogXCJcXHUwMEY0XCIsXG4gIE9FbGlnOiBcIlxcdTAxNTJcIixcbiAgb2VsaWc6IFwiXFx1MDE1M1wiLFxuICBPZ3JhdmU6IFwiXFx1MDBEMlwiLFxuICBvZ3JhdmU6IFwiXFx1MDBGMlwiLFxuICBvbGluZTogXCJcXHUyMDNFXCIsXG4gIE9tZWdhOiBcIlxcdTAzQTlcIixcbiAgb21lZ2E6IFwiXFx1MDNDOVwiLFxuICBPbWljcm9uOiBcIlxcdTAzOUZcIixcbiAgb21pY3JvbjogXCJcXHUwM0JGXCIsXG4gIG9wbHVzOiBcIlxcdTIyOTVcIixcbiAgb3I6IFwiXFx1MjIyOFwiLFxuICBvcmRmOiBcIlxcdTAwQUFcIixcbiAgb3JkbTogXCJcXHUwMEJBXCIsXG4gIE9zbGFzaDogXCJcXHUwMEQ4XCIsXG4gIG9zbGFzaDogXCJcXHUwMEY4XCIsXG4gIE90aWxkZTogXCJcXHUwMEQ1XCIsXG4gIG90aWxkZTogXCJcXHUwMEY1XCIsXG4gIG90aW1lczogXCJcXHUyMjk3XCIsXG4gIE91bWw6IFwiXFx1MDBENlwiLFxuICBvdW1sOiBcIlxcdTAwRjZcIixcbiAgcGFyYTogXCJcXHUwMEI2XCIsXG4gIHBlcm1pbDogXCJcXHUyMDMwXCIsXG4gIHBlcnA6IFwiXFx1MjJBNVwiLFxuICBQaGk6IFwiXFx1MDNBNlwiLFxuICBwaGk6IFwiXFx1MDNDNlwiLFxuICBQaTogXCJcXHUwM0EwXCIsXG4gIHBpOiBcIlxcdTAzQzBcIixcbiAgcGl2OiBcIlxcdTAzRDZcIixcbiAgcGx1c21uOiBcIlxcdTAwQjFcIixcbiAgcG91bmQ6IFwiXFx1MDBBM1wiLFxuICBwcmltZTogXCJcXHUyMDMyXCIsXG4gIFByaW1lOiBcIlxcdTIwMzNcIixcbiAgcHJvZDogXCJcXHUyMjBGXCIsXG4gIHByb3A6IFwiXFx1MjIxRFwiLFxuICBQc2k6IFwiXFx1MDNBOFwiLFxuICBwc2k6IFwiXFx1MDNDOFwiLFxuICBxdW90OiBcIlxcdTAwMjJcIixcbiAgcmFkaWM6IFwiXFx1MjIxQVwiLFxuICByYW5nOiBcIlxcdTI3RTlcIixcbiAgcmFxdW86IFwiXFx1MDBCQlwiLFxuICByYXJyOiBcIlxcdTIxOTJcIixcbiAgckFycjogXCJcXHUyMUQyXCIsXG4gIHJjZWlsOiBcIlxcdTIzMDlcIixcbiAgcmRxdW86IFwiXFx1MjAxRFwiLFxuICByZWFsOiBcIlxcdTIxMUNcIixcbiAgcmVnOiBcIlxcdTAwQUVcIixcbiAgcmZsb29yOiBcIlxcdTIzMEJcIixcbiAgUmhvOiBcIlxcdTAzQTFcIixcbiAgcmhvOiBcIlxcdTAzQzFcIixcbiAgcmxtOiBcIlxcdTIwMEZcIixcbiAgcnNhcXVvOiBcIlxcdTIwM0FcIixcbiAgcnNxdW86IFwiXFx1MjAxOVwiLFxuICBzYnF1bzogXCJcXHUyMDFBXCIsXG4gIFNjYXJvbjogXCJcXHUwMTYwXCIsXG4gIHNjYXJvbjogXCJcXHUwMTYxXCIsXG4gIHNkb3Q6IFwiXFx1MjJDNVwiLFxuICBzZWN0OiBcIlxcdTAwQTdcIixcbiAgc2h5OiBcIlxcdTAwQURcIixcbiAgU2lnbWE6IFwiXFx1MDNBM1wiLFxuICBzaWdtYTogXCJcXHUwM0MzXCIsXG4gIHNpZ21hZjogXCJcXHUwM0MyXCIsXG4gIHNpbTogXCJcXHUyMjNDXCIsXG4gIHNwYWRlczogXCJcXHUyNjYwXCIsXG4gIHN1YjogXCJcXHUyMjgyXCIsXG4gIHN1YmU6IFwiXFx1MjI4NlwiLFxuICBzdW06IFwiXFx1MjIxMVwiLFxuICBzdXA6IFwiXFx1MjI4M1wiLFxuICBzdXAxOiBcIlxcdTAwQjlcIixcbiAgc3VwMjogXCJcXHUwMEIyXCIsXG4gIHN1cDM6IFwiXFx1MDBCM1wiLFxuICBzdXBlOiBcIlxcdTIyODdcIixcbiAgc3psaWc6IFwiXFx1MDBERlwiLFxuICBUYXU6IFwiXFx1MDNBNFwiLFxuICB0YXU6IFwiXFx1MDNDNFwiLFxuICB0aGVyZTQ6IFwiXFx1MjIzNFwiLFxuICBUaGV0YTogXCJcXHUwMzk4XCIsXG4gIHRoZXRhOiBcIlxcdTAzQjhcIixcbiAgdGhldGFzeW06IFwiXFx1MDNEMVwiLFxuICB0aGluc3A6IFwiXFx1MjAwOVwiLFxuICBUSE9STjogXCJcXHUwMERFXCIsXG4gIHRob3JuOiBcIlxcdTAwRkVcIixcbiAgdGlsZGU6IFwiXFx1MDJEQ1wiLFxuICB0aW1lczogXCJcXHUwMEQ3XCIsXG4gIHRyYWRlOiBcIlxcdTIxMjJcIixcbiAgVWFjdXRlOiBcIlxcdTAwREFcIixcbiAgdWFjdXRlOiBcIlxcdTAwRkFcIixcbiAgdWFycjogXCJcXHUyMTkxXCIsXG4gIHVBcnI6IFwiXFx1MjFEMVwiLFxuICBVY2lyYzogXCJcXHUwMERCXCIsXG4gIHVjaXJjOiBcIlxcdTAwRkJcIixcbiAgVWdyYXZlOiBcIlxcdTAwRDlcIixcbiAgdWdyYXZlOiBcIlxcdTAwRjlcIixcbiAgdW1sOiBcIlxcdTAwQThcIixcbiAgdXBzaWg6IFwiXFx1MDNEMlwiLFxuICBVcHNpbG9uOiBcIlxcdTAzQTVcIixcbiAgdXBzaWxvbjogXCJcXHUwM0M1XCIsXG4gIFV1bWw6IFwiXFx1MDBEQ1wiLFxuICB1dW1sOiBcIlxcdTAwRkNcIixcbiAgd2VpZXJwOiBcIlxcdTIxMThcIixcbiAgWGk6IFwiXFx1MDM5RVwiLFxuICB4aTogXCJcXHUwM0JFXCIsXG4gIFlhY3V0ZTogXCJcXHUwMEREXCIsXG4gIHlhY3V0ZTogXCJcXHUwMEZEXCIsXG4gIHllbjogXCJcXHUwMEE1XCIsXG4gIHl1bWw6IFwiXFx1MDBGRlwiLFxuICBZdW1sOiBcIlxcdTAxNzhcIixcbiAgWmV0YTogXCJcXHUwMzk2XCIsXG4gIHpldGE6IFwiXFx1MDNCNlwiLFxuICB6d2o6IFwiXFx1MjAwRFwiLFxuICB6d25qOiBcIlxcdTIwMENcIlxufTtcblxuLy8gVGhlICZuZ3NwOyBwc2V1ZG8tZW50aXR5IGlzIGRlbm90aW5nIGEgc3BhY2UuIHNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ0LWxhbmcvYW5ndWxhci9ibG9iLzBiYjYxMTM4N2QyOWQ2NWI1YWY3ZjlkMjUxNWFiNTcxZmQzZmJlZTQvX3Rlc3RzL3Rlc3QvY29tcGlsZXIvcHJlc2VydmVfd2hpdGVzcGFjZV90ZXN0LmRhcnRcbmV4cG9ydCBjb25zdCBOR1NQX1VOSUNPREUgPSBcIlxcdUU1MDBcIjtcblxuTkFNRURfRU5USVRJRVNbXCJuZ3NwXCJdID0gTkdTUF9VTklDT0RFO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4vY2hhcnNcIjtcbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VMb2NhdGlvbiwgUGFyc2VTb3VyY2VGaWxlLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtOQU1FRF9FTlRJVElFUywgVGFnQ29udGVudFR5cGUsIFRhZ0RlZmluaXRpb259IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgVEFHX09QRU5fU1RBUlQsXG4gIFRBR19PUEVOX0VORCxcbiAgVEFHX09QRU5fRU5EX1ZPSUQsXG4gIFRBR19DTE9TRSxcbiAgVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBSQVdfVEVYVCxcbiAgQ09NTUVOVF9TVEFSVCxcbiAgQ09NTUVOVF9FTkQsXG4gIENEQVRBX1NUQVJULFxuICBDREFUQV9FTkQsXG4gIEFUVFJfTkFNRSxcbiAgQVRUUl9WQUxVRSxcbiAgRE9DX1RZUEUsXG4gIEVYUEFOU0lPTl9GT1JNX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9WQUxVRSxcbiAgRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9FWFBfRU5ELFxuICBFWFBBTlNJT05fRk9STV9FTkQsXG4gIEVPRlxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgcGFydHM6IHN0cmluZ1tdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5FcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlcnJvck1zZzogc3RyaW5nLCBwdWJsaWMgdG9rZW5UeXBlOiBUb2tlblR5cGUsIHNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIHN1cGVyKHNwYW4sIGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zOiBUb2tlbltdLCBwdWJsaWMgZXJyb3JzOiBUb2tlbkVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShcbiAgc291cmNlOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uLFxuICB0b2tlbml6ZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4pOiBUb2tlbml6ZVJlc3VsdCB7XG4gIHJldHVybiBuZXcgVG9rZW5pemVyKFxuICAgIG5ldyBQYXJzZVNvdXJjZUZpbGUoc291cmNlLCB1cmwpLFxuICAgIGdldFRhZ0RlZmluaXRpb24sXG4gICAgdG9rZW5pemVFeHBhbnNpb25Gb3JtcyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICkudG9rZW5pemUoKTtcbn1cblxuY29uc3QgX0NSX09SX0NSTEZfUkVHRVhQID0gL1xcclxcbj8vZztcblxuZnVuY3Rpb24gX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFyQ29kZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgY2hhciA9IGNoYXJDb2RlID09PSBjaGFycy4kRU9GID8gXCJFT0ZcIiA6IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpO1xuICByZXR1cm4gYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJHtjaGFyfVwiYDtcbn1cblxuZnVuY3Rpb24gX3Vua25vd25FbnRpdHlFcnJvck1zZyhlbnRpdHlTcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgVW5rbm93biBlbnRpdHkgXCIke2VudGl0eVNyY31cIiAtIHVzZSB0aGUgXCImIzxkZWNpbWFsPjtcIiBvciAgXCImI3g8aGV4PjtcIiBzeW50YXhgO1xufVxuXG5jbGFzcyBDb250cm9sRmxvd0Vycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yOiBUb2tlbkVycm9yKSB7fVxufVxuXG4vLyBTZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI3dyaXRpbmdcbmNsYXNzIFRva2VuaXplciB7XG4gIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuICAvLyBOb3RlOiB0aGlzIGlzIGFsd2F5cyBsb3dlcmNhc2UhXG4gIHByaXZhdGUgX3BlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfbmV4dFBlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfaW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfbGluZSA9IDA7XG4gIHByaXZhdGUgX2NvbHVtbiA9IC0xO1xuICBwcml2YXRlIF9jdXJyZW50VG9rZW5TdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfY3VycmVudFRva2VuVHlwZTogVG9rZW5UeXBlO1xuICBwcml2YXRlIF9leHBhbnNpb25DYXNlU3RhY2s6IFRva2VuVHlwZVtdID0gW107XG4gIHByaXZhdGUgX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuXG4gIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICBlcnJvcnM6IFRva2VuRXJyb3JbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gX2ZpbGUgVGhlIGh0bWwgc291cmNlXG4gICAqIEBwYXJhbSBfZ2V0VGFnRGVmaW5pdGlvblxuICAgKiBAcGFyYW0gX3Rva2VuaXplSWN1IFdoZXRoZXIgdG8gdG9rZW5pemUgSUNVIG1lc3NhZ2VzIChjb25zaWRlcmVkIGFzIHRleHQgbm9kZXMgd2hlbiBmYWxzZSlcbiAgICogQHBhcmFtIF9pbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWxlOiBQYXJzZVNvdXJjZUZpbGUsXG4gICAgcHJpdmF0ZSBfZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbixcbiAgICBwcml2YXRlIF90b2tlbml6ZUljdTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApIHtcbiAgICB0aGlzLl9pbnB1dCA9IF9maWxlLmNvbnRlbnQ7XG4gICAgdGhpcy5fbGVuZ3RoID0gX2ZpbGUuY29udGVudC5sZW5ndGg7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3ByZXByb2Nlc3NpbmctdGhlLWlucHV0LXN0cmVhbVxuICAgIC8vIEluIG9yZGVyIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UsIHdlIGNhbiBub3RcbiAgICAvLyBwcmUtcHJvY2VzcyBpdC5cbiAgICAvLyBJbnN0ZWFkIENScyBhcmUgcHJvY2Vzc2VkIHJpZ2h0IGJlZm9yZSBpbnN0YW50aWF0aW5nIHRoZSB0b2tlbnMuXG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShfQ1JfT1JfQ1JMRl9SRUdFWFAsIFwiXFxuXCIpO1xuICB9XG5cbiAgdG9rZW5pemUoKTogVG9rZW5pemVSZXN1bHQge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRMVCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRCQU5HKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTEJSQUNLRVQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YShzdGFydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTUlOVVMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVEb2NUeXBlKHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnQ2xvc2Uoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnT3BlbihzdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEodGhpcy5fdG9rZW5pemVJY3UgJiYgdGhpcy5fdG9rZW5pemVFeHBhbnNpb25Gb3JtKCkpKSB7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZVRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbnRyb2xGbG93RXJyb3IpIHtcbiAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRU9GKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZVJlc3VsdChtZXJnZVRleHRUb2tlbnModGhpcy50b2tlbnMpLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgd2hldGhlciBhbiBJQ1UgdG9rZW4gaGFzIGJlZW4gY3JlYXRlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX3Rva2VuaXplRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICBpZiAoaXNFeHBhbnNpb25Gb3JtU3RhcnQodGhpcy5faW5wdXQsIHRoaXMuX2luZGV4LCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKSkge1xuICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1TdGFydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHRoaXMuX3BlZWspICYmIHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb25DYXNlU3RhcnQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFKSB7XG4gICAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkNhc2UoKSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uQ2FzZUVuZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYXRpb24oKTogUGFyc2VMb2NhdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUxvY2F0aW9uKHRoaXMuX2ZpbGUsIHRoaXMuX2luZGV4LCB0aGlzLl9saW5lLCB0aGlzLl9jb2x1bW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3BhbihcbiAgICBzdGFydDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCksXG4gICAgZW5kOiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKVxuICApOiBQYXJzZVNvdXJjZVNwYW4ge1xuICAgIHJldHVybiBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmVnaW5Ub2tlbih0eXBlOiBUb2tlblR5cGUsIHN0YXJ0OiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSkge1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IHR5cGU7XG4gIH1cblxuICBwcml2YXRlIF9lbmRUb2tlbihwYXJ0czogc3RyaW5nW10sIGVuZDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCkpOiBUb2tlbiB7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgVG9rZW4odGhpcy5fY3VycmVudFRva2VuVHlwZSwgcGFydHMsIG5ldyBQYXJzZVNvdXJjZVNwYW4odGhpcy5fY3VycmVudFRva2VuU3RhcnQsIGVuZCkpO1xuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gbnVsbCE7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IG51bGwhO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVycm9yKG1zZzogc3RyaW5nLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBDb250cm9sRmxvd0Vycm9yIHtcbiAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgbXNnICs9IGAgKERvIHlvdSBoYXZlIGFuIHVuZXNjYXBlZCBcIntcIiBpbiB5b3VyIHRlbXBsYXRlPyBVc2UgXCJ7eyAneycgfX1cIikgdG8gZXNjYXBlIGl0LilgO1xuICAgIH1cbiAgICBjb25zdCBlcnJvciA9IG5ldyBUb2tlbkVycm9yKG1zZywgdGhpcy5fY3VycmVudFRva2VuVHlwZSwgc3Bhbik7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBudWxsITtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gbnVsbCE7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sRmxvd0Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luZGV4ID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFycy4kRU9GKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMRikge1xuICAgICAgdGhpcy5fbGluZSsrO1xuICAgICAgdGhpcy5fY29sdW1uID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRMRiAmJiB0aGlzLl9wZWVrICE9PSBjaGFycy4kQ1IpIHtcbiAgICAgIHRoaXMuX2NvbHVtbisrO1xuICAgIH1cbiAgICB0aGlzLl9pbmRleCsrO1xuICAgIHRoaXMuX3BlZWsgPSB0aGlzLl9pbmRleCA+PSB0aGlzLl9sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5faW5wdXQuY2hhckNvZGVBdCh0aGlzLl9pbmRleCk7XG4gICAgdGhpcy5fbmV4dFBlZWsgPSB0aGlzLl9pbmRleCArIDEgPj0gdGhpcy5fbGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuX2lucHV0LmNoYXJDb2RlQXQodGhpcy5faW5kZXggKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJDb2RlKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdENoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNoYXJDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKHRoaXMuX3BlZWssIGNoYXJDb2RlKSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVpcmVDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJDb2RlKSkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3Bhbihsb2NhdGlvbiwgbG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBsZW4gPSBjaGFycy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2luZGV4ICsgbGVuID4gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIC8vIElmIGF0dGVtcHRpbmcgdG8gcGFyc2UgdGhlIHN0cmluZyBmYWlscywgd2Ugd2FudCB0byByZXNldCB0aGUgcGFyc2VyXG4gICAgICAgIC8vIHRvIHdoZXJlIGl0IHdhcyBiZWZvcmUgdGhlIGF0dGVtcHRcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyQ2FzZUluc2Vuc2l0aXZlKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZUNhc2VJbnNlbnNpdGl2ZShjaGFycy5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZVN0cihjaGFyczogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdFN0cihjaGFycykpIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4obG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKHByZWRpY2F0ZTogKGNvZGU6IG51bWJlcikgPT4gYm9vbGVhbikge1xuICAgIHdoaWxlICghcHJlZGljYXRlKHRoaXMuX3BlZWspKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZUNoYXJDb2RlVW50aWxGbihwcmVkaWNhdGU6IChjb2RlOiBudW1iZXIpID0+IGJvb2xlYW4sIGxlbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4ocHJlZGljYXRlKTtcbiAgICBpZiAodGhpcy5faW5kZXggLSBzdGFydC5vZmZzZXQgPCBsZW4pIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4oc3RhcnQsIHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdFVudGlsQ2hhcihjaGFyOiBudW1iZXIpIHtcbiAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gY2hhcikge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlYWRDaGFyKGRlY29kZUVudGl0aWVzOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoZGVjb2RlRW50aXRpZXMgJiYgdGhpcy5fcGVlayA9PT0gY2hhcnMuJEFNUEVSU0FORCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29kZUVudGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0W2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNvZGVFbnRpdHkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEhBU0gpKSB7XG4gICAgICBjb25zdCBpc0hleCA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4keCkgfHwgdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRYKTtcbiAgICAgIGNvbnN0IG51bWJlclN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKS5vZmZzZXQ7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzRGlnaXRFbnRpdHlFbmQpO1xuICAgICAgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHN0ck51bSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhudW1iZXJTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gcGFyc2VJbnQoc3RyTnVtLCBpc0hleCA/IDE2IDogMTApO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5rbm93bkVudGl0eUVycm9yTXNnKGVudGl0eSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05hbWVkRW50aXR5RW5kKTtcbiAgICAgIGlmICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0VNSUNPTE9OKSB7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIFwiJlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgY29uc3QgY2hhciA9IE5BTUVEX0VOVElUSUVTW25hbWVdO1xuICAgICAgaWYgKCFjaGFyKSB7XG4gICAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmtub3duRW50aXR5RXJyb3JNc2cobmFtZSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFyO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0KGRlY29kZUVudGl0aWVzOiBib29sZWFuLCBmaXJzdENoYXJPZkVuZDogbnVtYmVyLCBhdHRlbXB0RW5kUmVzdDogKCkgPT4gYm9vbGVhbik6IFRva2VuIHtcbiAgICBsZXQgdGFnQ2xvc2VTdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgICBjb25zdCB0ZXh0U3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oZGVjb2RlRW50aXRpZXMgPyBUb2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUIDogVG9rZW5UeXBlLlJBV19URVhULCB0ZXh0U3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0YWdDbG9zZVN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoZmlyc3RDaGFyT2ZFbmQpICYmIGF0dGVtcHRFbmRSZXN0KCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5kZXggPiB0YWdDbG9zZVN0YXJ0Lm9mZnNldCkge1xuICAgICAgICAvLyBhZGQgdGhlIGNoYXJhY3RlcnMgY29uc3VtZWQgYnkgdGhlIHByZXZpb3VzIGlmIHN0YXRlbWVudCB0byB0aGUgb3V0cHV0XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5faW5wdXQuc3Vic3RyaW5nKHRhZ0Nsb3NlU3RhcnQub2Zmc2V0LCB0aGlzLl9pbmRleCkpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGZpcnN0Q2hhck9mRW5kKSB7XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5fcmVhZENoYXIoZGVjb2RlRW50aXRpZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSwgdGFnQ2xvc2VTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ29tbWVudChzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlRfU1RBUlQsIHN0YXJ0KTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJE1JTlVTKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgY29uc3QgdGV4dFRva2VuID0gdGhpcy5fY29uc3VtZVJhd1RleHQoZmFsc2UsIGNoYXJzLiRNSU5VUywgKCkgPT4gdGhpcy5fYXR0ZW1wdFN0cihcIi0+XCIpKTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DT01NRU5UX0VORCwgdGV4dFRva2VuLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ2RhdGEoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DREFUQV9TVEFSVCwgc3RhcnQpO1xuICAgIHRoaXMuX3JlcXVpcmVTdHIoXCJDREFUQVtcIik7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICAgIGNvbnN0IHRleHRUb2tlbiA9IHRoaXMuX2NvbnN1bWVSYXdUZXh0KGZhbHNlLCBjaGFycy4kUkJSQUNLRVQsICgpID0+IHRoaXMuX2F0dGVtcHRTdHIoXCJdPlwiKSk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQ0RBVEFfRU5ELCB0ZXh0VG9rZW4uc291cmNlU3Bhbi5lbmQpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVEb2NUeXBlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRE9DX1RZUEUsIHN0YXJ0KTtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQub2Zmc2V0ICsgMiwgdGhpcy5faW5kZXggLSAxKV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVByZWZpeEFuZE5hbWUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG5hbWVPclByZWZpeFN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgbGV0IHByZWZpeDogc3RyaW5nID0gbnVsbCE7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRDT0xPTiAmJiAhaXNQcmVmaXhFbmQodGhpcy5fcGVlaykpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gICAgbGV0IG5hbWVTdGFydDogbnVtYmVyO1xuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kQ09MT04pIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHByZWZpeCA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lT3JQcmVmaXhTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lU3RhcnQgPSBuYW1lT3JQcmVmaXhTdGFydDtcbiAgICB9XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIHRoaXMuX2luZGV4ID09PSBuYW1lU3RhcnQgPyAxIDogMCk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lU3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlbihzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIGNvbnN0IHNhdmVkUG9zID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgbGV0IHRhZ05hbWU6IHN0cmluZztcbiAgICBsZXQgbG93ZXJjYXNlVGFnTmFtZTogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWNoYXJzLmlzQXNjaWlMZXR0ZXIodGhpcy5fcGVlaykpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fY29uc3VtZVRhZ09wZW5TdGFydChzdGFydCk7XG4gICAgICB0YWdOYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgICAgbG93ZXJjYXNlVGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0xBU0ggJiYgdGhpcy5fcGVlayAhPT0gY2hhcnMuJEdUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVOYW1lKCk7XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kRVEpKSB7XG4gICAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnN1bWVUYWdPcGVuRW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBDb250cm9sRmxvd0Vycm9yKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJ0IHRhZyBpcyBpbnZhbGlkLCBhc3N1bWUgd2Ugd2FudCBhIFwiPFwiXG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzYXZlZFBvcyk7XG4gICAgICAgIC8vIEJhY2sgdG8gYmFjayB0ZXh0IHRva2VucyBhcmUgbWVyZ2VkIGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEVYVCwgc3RhcnQpO1xuICAgICAgICB0aGlzLl9lbmRUb2tlbihbXCI8XCJdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRUb2tlblR5cGUgPSB0aGlzLl9nZXRUYWdEZWZpbml0aW9uKHRhZ05hbWUpLmNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKGNvbnRlbnRUb2tlblR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLlJBV19URVhUKSB7XG4gICAgICB0aGlzLl9jb25zdW1lUmF3VGV4dFdpdGhUYWdDbG9zZShsb3dlcmNhc2VUYWdOYW1lLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50VG9rZW5UeXBlID09PSBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWU6IHN0cmluZywgZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0ZXh0VG9rZW4gPSB0aGlzLl9jb25zdW1lUmF3VGV4dChkZWNvZGVFbnRpdGllcywgY2hhcnMuJExULCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRTdHJDYXNlSW5zZW5zaXRpdmUobG93ZXJjYXNlVGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB9KTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfQ0xPU0UsIHRleHRUb2tlbi5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW251bGwhLCBsb3dlcmNhc2VUYWdOYW1lXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlblN0YXJ0KHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX09QRU5fU1RBUlQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuX2NvbnN1bWVQcmVmaXhBbmROYW1lKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4ocGFydHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQVRUUl9OQU1FKTtcbiAgICBjb25zdCBwcmVmaXhBbmROYW1lID0gdGhpcy5fY29uc3VtZVByZWZpeEFuZE5hbWUoKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5BVFRSX1ZBTFVFKTtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJFNRIHx8IHRoaXMuX3BlZWsgPT09IGNoYXJzLiREUSkge1xuICAgICAgY29uc3QgcXVvdGVDaGFyID0gdGhpcy5fcGVlaztcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IHF1b3RlQ2hhcikge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX3JlYWRDaGFyKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gcGFydHMuam9pbihcIlwiKTtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIDEpO1xuICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dC5zdWJzdHJpbmcodmFsdWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9lbmRUb2tlbihbdGhpcy5fcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyh2YWx1ZSldKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuRW5kKCkge1xuICAgIGNvbnN0IHRva2VuVHlwZSA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpID8gVG9rZW5UeXBlLlRBR19PUEVOX0VORF9WT0lEIDogVG9rZW5UeXBlLlRBR19PUEVOX0VORDtcbiAgICB0aGlzLl9iZWdpblRva2VuKHRva2VuVHlwZSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRhZ0Nsb3NlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX0NMT1NFLCBzdGFydCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgIGNvbnN0IHByZWZpeEFuZE5hbWUgPSB0aGlzLl9jb25zdW1lUHJlZml4QW5kTmFtZSgpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25Gb3JtU3RhcnQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kTEJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpO1xuXG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuUkFXX1RFWFQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtjb25kaXRpb25dLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJENPTU1BKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5SQVdfVEVYVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0eXBlXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkNhc2VTdGFydCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9yZWFkVW50aWwoY2hhcnMuJExCUkFDRSkudHJpbSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt2YWx1ZV0sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRMQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25DYXNlRW5kKCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kUkJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5ELCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJFJCUkFDRSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlRFWFQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnICYmIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCkpIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcgJiZcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uICYmXG4gICAgICAgIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQpXG4gICAgICApIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCk7XG4gICAgICAgIHRoaXMuX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9yZWFkQ2hhcih0cnVlKSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoIXRoaXMuX2lzVGV4dEVuZCgpKTtcblxuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1RleHRFbmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMVCB8fCB0aGlzLl9wZWVrID09PSBjaGFycy4kRU9GKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdG9rZW5pemVJY3UgJiYgIXRoaXMuX2luSW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKGlzRXhwYW5zaW9uRm9ybVN0YXJ0KHRoaXMuX2lucHV0LCB0aGlzLl9pbmRleCwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZykpIHtcbiAgICAgICAgLy8gc3RhcnQgb2YgYW4gZXhwYW5zaW9uIGZvcm1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFICYmIHRoaXMuX2lzSW5FeHBhbnNpb25DYXNlKCkpIHtcbiAgICAgICAgLy8gZW5kIG9mIGFuZCBleHBhbnNpb24gY2FzZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlUG9zaXRpb24oKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgcmV0dXJuIFt0aGlzLl9wZWVrLCB0aGlzLl9pbmRleCwgdGhpcy5fY29sdW1uLCB0aGlzLl9saW5lLCB0aGlzLnRva2Vucy5sZW5ndGhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVhZFVudGlsKGNoYXI6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXIpO1xuICAgIHJldHVybiB0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3RvcmVQb3NpdGlvbihwb3NpdGlvbjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIHRoaXMuX3BlZWsgPSBwb3NpdGlvblswXTtcbiAgICB0aGlzLl9pbmRleCA9IHBvc2l0aW9uWzFdO1xuICAgIHRoaXMuX2NvbHVtbiA9IHBvc2l0aW9uWzJdO1xuICAgIHRoaXMuX2xpbmUgPSBwb3NpdGlvblszXTtcbiAgICBjb25zdCBuYlRva2VucyA9IHBvc2l0aW9uWzRdO1xuICAgIGlmIChuYlRva2VucyA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgLy8gcmVtb3ZlIGFueSBleHRyYSB0b2tlbnNcbiAgICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2UoMCwgbmJUb2tlbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5FeHBhbnNpb25DYXNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrW3RoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggLSAxXSA9PT0gVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9pc0luRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFja1t0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoIC0gMV0gPT09IFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOb3RXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gIWNoYXJzLmlzV2hpdGVzcGFjZShjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kRU9GO1xufVxuXG5mdW5jdGlvbiBpc05hbWVFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEdUIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNMQVNIIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJERRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEVRXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzUHJlZml4RW5kKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIChjb2RlIDwgY2hhcnMuJGEgfHwgY2hhcnMuJHogPCBjb2RlKSAmJiAoY29kZSA8IGNoYXJzLiRBIHx8IGNoYXJzLiRaIDwgY29kZSkgJiYgKGNvZGUgPCBjaGFycy4kMCB8fCBjb2RlID4gY2hhcnMuJDkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRGlnaXRFbnRpdHlFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kU0VNSUNPTE9OIHx8IGNvZGUgPT09IGNoYXJzLiRFT0YgfHwgIWNoYXJzLmlzQXNjaWlIZXhEaWdpdChjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lZEVudGl0eUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTRU1JQ09MT04gfHwgY29kZSA9PT0gY2hhcnMuJEVPRiB8fCAhY2hhcnMuaXNBc2NpaUxldHRlcihjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBhbnNpb25Gb3JtU3RhcnQoaW5wdXQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBib29sZWFuIHtcbiAgY29uc3QgaXNJbnRlcnBvbGF0aW9uU3RhcnQgPSBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAgPyBpbnB1dC5pbmRleE9mKGludGVycG9sYXRpb25Db25maWcuc3RhcnQsIG9mZnNldCkgPT09IG9mZnNldFxuICAgIDogZmFsc2U7XG5cbiAgcmV0dXJuIGlucHV0LmNoYXJDb2RlQXQob2Zmc2V0KSA9PT0gY2hhcnMuJExCUkFDRSAmJiAhaXNJbnRlcnBvbGF0aW9uU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHBlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gcGVlayA9PT0gY2hhcnMuJEVRIHx8IGNoYXJzLmlzQXNjaWlMZXR0ZXIocGVlaykgfHwgY2hhcnMuaXNEaWdpdChwZWVrKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNvZGUxOiBudW1iZXIsIGNvZGUyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvVXBwZXJDYXNlQ2hhckNvZGUoY29kZTEpID09PSB0b1VwcGVyQ2FzZUNoYXJDb2RlKGNvZGUyKTtcbn1cblxuZnVuY3Rpb24gdG9VcHBlckNhc2VDaGFyQ29kZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gY29kZSA+PSBjaGFycy4kYSAmJiBjb2RlIDw9IGNoYXJzLiR6ID8gY29kZSAtIGNoYXJzLiRhICsgY2hhcnMuJEEgOiBjb2RlO1xufVxuXG5mdW5jdGlvbiBtZXJnZVRleHRUb2tlbnMoc3JjVG9rZW5zOiBUb2tlbltdKTogVG9rZW5bXSB7XG4gIGNvbnN0IGRzdFRva2VuczogVG9rZW5bXSA9IFtdO1xuICBsZXQgbGFzdERzdFRva2VuOiBUb2tlbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNUb2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHNyY1Rva2Vuc1tpXTtcbiAgICBpZiAobGFzdERzdFRva2VuICYmIGxhc3REc3RUb2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCkge1xuICAgICAgbGFzdERzdFRva2VuLnBhcnRzWzBdICs9IHRva2VuLnBhcnRzWzBdO1xuICAgICAgbGFzdERzdFRva2VuLnNvdXJjZVNwYW4uZW5kID0gdG9rZW4uc291cmNlU3Bhbi5lbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3REc3RUb2tlbiA9IHRva2VuO1xuICAgICAgZHN0VG9rZW5zLnB1c2gobGFzdERzdFRva2VuKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHN0VG9rZW5zO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4vaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCAqIGFzIGxleCBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHtUYWdEZWZpbml0aW9uLCBnZXROc1ByZWZpeCwgaXNOZ0NvbnRhaW5lciwgbWVyZ2VOc0FuZE5hbWV9IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWVFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnROYW1lOiBzdHJpbmcgfCBudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKTogVHJlZUVycm9yIHtcbiAgICByZXR1cm4gbmV3IFRyZWVFcnJvcihlbGVtZW50TmFtZSwgc3BhbiwgbXNnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50TmFtZTogc3RyaW5nIHwgbnVsbCwgc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlVHJlZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb290Tm9kZXM6IGh0bWwuTm9kZVtdLCBwdWJsaWMgZXJyb3JzOiBQYXJzZUVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbikge31cblxuICBwYXJzZShcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJzZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnNBbmRFcnJvcnMgPSBsZXgudG9rZW5pemUoc291cmNlLCB1cmwsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbiwgcGFyc2VFeHBhbnNpb25Gb3JtcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBjb25zdCB0cmVlQW5kRXJyb3JzID0gbmV3IF9UcmVlQnVpbGRlcih0b2tlbnNBbmRFcnJvcnMudG9rZW5zLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChcbiAgICAgIHRyZWVBbmRFcnJvcnMucm9vdE5vZGVzLFxuICAgICAgKHRva2Vuc0FuZEVycm9ycy5lcnJvcnMgYXMgUGFyc2VFcnJvcltdKS5jb25jYXQodHJlZUFuZEVycm9ycy5lcnJvcnMpXG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBfVHJlZUJ1aWxkZXIge1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIF9wZWVrOiBsZXguVG9rZW47XG5cbiAgcHJpdmF0ZSBfcm9vdE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IFRyZWVFcnJvcltdID0gW107XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFN0YWNrOiBodG1sLkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5zOiBsZXguVG9rZW5bXSwgcHJpdmF0ZSBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgYnVpbGQoKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVPRikge1xuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jb25zdW1lU3RhcnRUYWcodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19DTE9TRSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRW5kVGFnKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5DREFUQV9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YSh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQ09NTUVOVF9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEVYVCB8fFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuUkFXX1RFWFQgfHxcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb24odGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNraXAgYWxsIG90aGVyIHRva2Vucy4uLlxuICAgICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRoaXMuX3Jvb3ROb2RlcywgdGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKTogbGV4LlRva2VuIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5fcGVlaztcbiAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBOb3RlOiB0aGVyZSBpcyBhbHdheXMgYW4gRU9GIHRva2VuIGF0IHRoZSBlbmRcbiAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuX3BlZWsgPSB0aGlzLnRva2Vuc1t0aGlzLl9pbmRleF07XG4gICAgcmV0dXJuIHByZXY7XG4gIH1cblxuICBwcml2YXRlIF9hZHZhbmNlSWYodHlwZTogbGV4LlRva2VuVHlwZSk6IGxleC5Ub2tlbiB8IG51bGwge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUNkYXRhKHN0YXJ0VG9rZW46IGxleC5Ub2tlbikge1xuICAgIHRoaXMuX2NvbnN1bWVUZXh0KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuQ0RBVEFfRU5EKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDb21tZW50KHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuUkFXX1RFWFQpO1xuICAgIHRoaXMuX2FkdmFuY2VJZihsZXguVG9rZW5UeXBlLkNPTU1FTlRfRU5EKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRleHQgIT09IG51bGwgPyB0ZXh0LnBhcnRzWzBdLnRyaW0oKSA6IG51bGw7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQobmV3IGh0bWwuQ29tbWVudCh2YWx1ZSwgdG9rZW4uc291cmNlU3BhbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbih0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3Qgc3dpdGNoVmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5fYWR2YW5jZSgpO1xuICAgIGNvbnN0IGNhc2VzOiBodG1sLkV4cGFuc2lvbkNhc2VbXSA9IFtdO1xuXG4gICAgLy8gcmVhZCA9XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSkge1xuICAgICAgY29uc3QgZXhwQ2FzZSA9IHRoaXMuX3BhcnNlRXhwYW5zaW9uQ2FzZSgpO1xuICAgICAgaWYgKCFleHBDYXNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZXJyb3JcbiAgICAgIGNhc2VzLnB1c2goZXhwQ2FzZSk7XG4gICAgfVxuXG4gICAgLy8gcmVhZCB0aGUgZmluYWwgfVxuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5EKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odG9rZW4uc291cmNlU3Bhbi5zdGFydCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQoXG4gICAgICBuZXcgaHRtbC5FeHBhbnNpb24oc3dpdGNoVmFsdWUucGFydHNbMF0sIHR5cGUucGFydHNbMF0sIGNhc2VzLCBzb3VyY2VTcGFuLCBzd2l0Y2hWYWx1ZS5zb3VyY2VTcGFuKVxuICAgICk7XG5cbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUV4cGFuc2lvbkNhc2UoKTogaHRtbC5FeHBhbnNpb25DYXNlIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICAvLyByZWFkIHtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd7Jy5gKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZWFkIHVudGlsIH1cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIGNvbnN0IGV4cCA9IHRoaXMuX2NvbGxlY3RFeHBhbnNpb25FeHBUb2tlbnMoc3RhcnQpO1xuICAgIGlmICghZXhwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgZXhwLnB1c2gobmV3IGxleC5Ub2tlbihsZXguVG9rZW5UeXBlLkVPRiwgW10sIGVuZC5zb3VyY2VTcGFuKSk7XG5cbiAgICAvLyBwYXJzZSBldmVyeXRoaW5nIGluIGJldHdlZW4geyBhbmQgfVxuICAgIGNvbnN0IHBhcnNlZEV4cCA9IG5ldyBfVHJlZUJ1aWxkZXIoZXhwLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG4gICAgaWYgKHBhcnNlZEV4cC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZXJyb3JzID0gdGhpcy5fZXJyb3JzLmNvbmNhdChwYXJzZWRFeHAuZXJyb3JzIGFzIFRyZWVFcnJvcltdKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHZhbHVlLnNvdXJjZVNwYW4uc3RhcnQsIGVuZC5zb3VyY2VTcGFuLmVuZCk7XG4gICAgY29uc3QgZXhwU291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZSh2YWx1ZS5wYXJ0c1swXSwgcGFyc2VkRXhwLnJvb3ROb2Rlcywgc291cmNlU3BhbiwgdmFsdWUuc291cmNlU3BhbiwgZXhwU291cmNlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9jb2xsZWN0RXhwYW5zaW9uRXhwVG9rZW5zKHN0YXJ0OiBsZXguVG9rZW4pOiBsZXguVG9rZW5bXSB8IG51bGwge1xuICAgIGNvbnN0IGV4cDogbGV4LlRva2VuW10gPSBbXTtcbiAgICBjb25zdCBleHBhbnNpb25Gb3JtU3RhY2sgPSBbbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRdO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUIHx8XG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRcbiAgICAgICkge1xuICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucHVzaCh0aGlzLl9wZWVrLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpKSB7XG4gICAgICAgICAgZXhwYW5zaW9uRm9ybVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChleHBhbnNpb25Gb3JtU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCkpIHtcbiAgICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRU9GKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgc3RhcnQuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGV4cC5wdXNoKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQodG9rZW46IGxleC5Ub2tlbikge1xuICAgIGxldCB0ZXh0ID0gdG9rZW4ucGFydHNbMF07XG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCAmJiB0ZXh0WzBdID09PSBcIlxcblwiKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudC5uYW1lKS5pZ25vcmVGaXJzdExmKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5UZXh0KHRleHQsIHRva2VuLnNvdXJjZVNwYW4pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZVZvaWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChlbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVN0YXJ0VGFnKHN0YXJ0VGFnVG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IHByZWZpeCA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMF07XG4gICAgY29uc3QgbmFtZSA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMV07XG4gICAgY29uc3QgYXR0cnM6IGh0bWwuQXR0cmlidXRlW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfTkFNRSkge1xuICAgICAgYXR0cnMucHVzaCh0aGlzLl9jb25zdW1lQXR0cih0aGlzLl9hZHZhbmNlKCkpKTtcbiAgICB9XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4LCBuYW1lLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuICAgIGxldCBzZWxmQ2xvc2luZyA9IGZhbHNlO1xuICAgIC8vIE5vdGU6IFRoZXJlIGNvdWxkIGhhdmUgYmVlbiBhIHRva2VuaXplciBlcnJvclxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZ2V0IGEgdG9rZW4gZm9yIHRoZSBlbmQgdGFnLi4uXG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkRfVk9JRCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFnRGVmID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKTtcbiAgICAgIGlmICghKHRhZ0RlZi5jYW5TZWxmQ2xvc2UgfHwgZ2V0TnNQcmVmaXgoZnVsbE5hbWUpICE9PSBudWxsIHx8IHRhZ0RlZi5pc1ZvaWQpKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICAgIFRyZWVFcnJvci5jcmVhdGUoXG4gICAgICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgICAgIHN0YXJ0VGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICAgIGBPbmx5IHZvaWQgYW5kIGZvcmVpZ24gZWxlbWVudHMgY2FuIGJlIHNlbGYgY2xvc2VkIFwiJHtzdGFydFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkQpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHNlbGZDbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX3BlZWsuc291cmNlU3Bhbi5zdGFydDtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydFRhZ1Rva2VuLnNvdXJjZVNwYW4uc3RhcnQsIGVuZCk7XG4gICAgY29uc3QgZWwgPSBuZXcgaHRtbC5FbGVtZW50KGZ1bGxOYW1lLCBhdHRycywgW10sIHNwYW4sIHNwYW4sIHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fcHVzaEVsZW1lbnQoZWwpO1xuICAgIGlmIChzZWxmQ2xvc2luZykge1xuICAgICAgdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSk7XG4gICAgICBlbC5lbmRTb3VyY2VTcGFuID0gc3BhbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wdXNoRWxlbWVudChlbDogaHRtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG5cbiAgICBpZiAocGFyZW50RWwgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudEVsLm5hbWUpLmlzQ2xvc2VkQnlDaGlsZChlbC5uYW1lKSkge1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnBvcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ0RlZiA9IHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKTtcbiAgICBjb25zdCB7cGFyZW50LCBjb250YWluZXJ9ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudFNraXBwaW5nQ29udGFpbmVycygpO1xuXG4gICAgaWYgKHBhcmVudCAmJiB0YWdEZWYucmVxdWlyZUV4dHJhUGFyZW50KHBhcmVudC5uYW1lKSkge1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgdGFnRGVmLnBhcmVudFRvQWRkLFxuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIGVsLnNvdXJjZVNwYW4sXG4gICAgICAgIGVsLnN0YXJ0U291cmNlU3BhbixcbiAgICAgICAgZWwuZW5kU291cmNlU3BhblxuICAgICAgKTtcbiAgICAgIHRoaXMuX2luc2VydEJlZm9yZUNvbnRhaW5lcihwYXJlbnQsIGNvbnRhaW5lciwgbmV3UGFyZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRUb1BhcmVudChlbCk7XG4gICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2goZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUVuZFRhZyhlbmRUYWdUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUoZW5kVGFnVG9rZW4ucGFydHNbMF0sIGVuZFRhZ1Rva2VuLnBhcnRzWzFdLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuXG4gICAgaWYgKHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpIS5lbmRTb3VyY2VTcGFuID0gZW5kVGFnVG9rZW4uc291cmNlU3BhbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKS5pc1ZvaWQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKFxuICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sXG4gICAgICAgICAgYFZvaWQgZWxlbWVudHMgZG8gbm90IGhhdmUgZW5kIHRhZ3MgXCIke2VuZFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvcEVsZW1lbnQoZnVsbE5hbWUpKSB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBgVW5leHBlY3RlZCBjbG9zaW5nIHRhZyBcIiR7XG4gICAgICAgIGZ1bGxOYW1lXG4gICAgICB9XCIuIEl0IG1heSBoYXBwZW4gd2hlbiB0aGUgdGFnIGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ5IGFub3RoZXIgdGFnLiBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjY2xvc2luZy1lbGVtZW50cy10aGF0LWhhdmUtaW1wbGllZC1lbmQtdGFnc2A7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKGZ1bGxOYW1lLCBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuLCBlcnJNc2cpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wb3BFbGVtZW50KGZ1bGxOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBzdGFja0luZGV4ID0gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IHN0YWNrSW5kZXggPj0gMDsgc3RhY2tJbmRleC0tKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRTdGFja1tzdGFja0luZGV4XTtcbiAgICAgIGlmIChlbC5uYW1lID09PSBmdWxsTmFtZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50U3RhY2suc3BsaWNlKHN0YWNrSW5kZXgsIHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSBzdGFja0luZGV4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmNsb3NlZEJ5UGFyZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHIoYXR0ck5hbWU6IGxleC5Ub2tlbik6IGh0bWwuQXR0cmlidXRlIHtcbiAgICBjb25zdCBmdWxsTmFtZSA9IG1lcmdlTnNBbmROYW1lKGF0dHJOYW1lLnBhcnRzWzBdLCBhdHRyTmFtZS5wYXJ0c1sxXSk7XG4gICAgbGV0IGVuZCA9IGF0dHJOYW1lLnNvdXJjZVNwYW4uZW5kO1xuICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgbGV0IHZhbHVlU3BhbjogUGFyc2VTb3VyY2VTcGFuID0gdW5kZWZpbmVkITtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfVkFMVUUpIHtcbiAgICAgIGNvbnN0IHZhbHVlVG9rZW4gPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlVG9rZW4ucGFydHNbMF07XG4gICAgICBlbmQgPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgdmFsdWVTcGFuID0gdmFsdWVUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGh0bWwuQXR0cmlidXRlKGZ1bGxOYW1lLCB2YWx1ZSwgbmV3IFBhcnNlU291cmNlU3BhbihhdHRyTmFtZS5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQpLCB2YWx1ZVNwYW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50RWxlbWVudCgpOiBodG1sLkVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCA+IDAgPyB0aGlzLl9lbGVtZW50U3RhY2tbdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgaW4gdGhlIERPTSBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogYDxuZy1jb250YWluZXI+YCBlbGVtZW50cyBhcmUgc2tpcHBlZCBhcyB0aGV5IGFyZSBub3QgcmVuZGVyZWQgYXMgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9nZXRQYXJlbnRFbGVtZW50U2tpcHBpbmdDb250YWluZXJzKCk6IHtwYXJlbnQ6IGh0bWwuRWxlbWVudCB8IG51bGw7IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbH0ge1xuICAgIGxldCBjb250YWluZXI6IGh0bWwuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCFpc05nQ29udGFpbmVyKHRoaXMuX2VsZW1lbnRTdGFja1tpXS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge3BhcmVudDogdGhpcy5fZWxlbWVudFN0YWNrW2ldLCBjb250YWluZXJ9O1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFN0YWNrW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB7cGFyZW50OiBudWxsLCBjb250YWluZXJ9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9QYXJlbnQobm9kZTogaHRtbC5Ob2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGEgbm9kZSBiZXR3ZWVuIHRoZSBwYXJlbnQgYW5kIHRoZSBjb250YWluZXIuXG4gICAqIFdoZW4gbm8gY29udGFpbmVyIGlzIGdpdmVuLCB0aGUgbm9kZSBpcyBhcHBlbmRlZCBhcyBhIGNoaWxkIG9mIHRoZSBwYXJlbnQuXG4gICAqIEFsc28gdXBkYXRlcyB0aGUgZWxlbWVudCBzdGFjayBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRCZWZvcmVDb250YWluZXIocGFyZW50OiBodG1sLkVsZW1lbnQsIGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbCwgbm9kZTogaHRtbC5FbGVtZW50KSB7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2FkZFRvUGFyZW50KG5vZGUpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgY29udGFpbmVyIHdpdGggdGhlIG5ldyBub2RlIGluIHRoZSBjaGlsZHJlblxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNvbnRhaW5lcik7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcm9vdE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5zcGxpY2UodGhpcy5fZWxlbWVudFN0YWNrLmluZGV4T2YoY29udGFpbmVyKSwgMCwgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RWxlbWVudEZ1bGxOYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZywgcGFyZW50RWxlbWVudDogaHRtbC5FbGVtZW50IHwgbnVsbCk6IHN0cmluZyB7XG4gICAgaWYgKHByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgcHJlZml4ID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGxvY2FsTmFtZSkuaW1wbGljaXROYW1lc3BhY2VQcmVmaXghO1xuICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCAmJiBwYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByZWZpeCA9IGdldE5zUHJlZml4KHBhcmVudEVsZW1lbnQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlTnNBbmROYW1lKHByZWZpeCwgbG9jYWxOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXN0T25TdGFjayhzdGFjazogYW55W10sIGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gZWxlbWVudDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgY2xhc3MgWG1sVGFnRGVmaW5pdGlvbiBpbXBsZW1lbnRzIFRhZ0RlZmluaXRpb24ge1xuICBjbG9zZWRCeVBhcmVudCA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZztcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlID0gVGFnQ29udGVudFR5cGUuUEFSU0FCTEVfREFUQTtcbiAgaXNWb2lkID0gZmFsc2U7XG4gIGlnbm9yZUZpcnN0TGYgPSBmYWxzZTtcbiAgY2FuU2VsZkNsb3NlID0gdHJ1ZTtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBfVEFHX0RFRklOSVRJT04gPSBuZXcgWG1sVGFnRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBYbWxUYWdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi90YWdzJztcblxuZXhwb3J0IGNsYXNzIEh0bWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIHByaXZhdGUgY2xvc2VkQnlDaGlsZHJlbjoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVxdWlyZWRQYXJlbnRzOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn07XG4gIHBhcmVudFRvQWRkOiBzdHJpbmc7XG4gIGltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiBzdHJpbmd8bnVsbDtcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAge2Nsb3NlZEJ5Q2hpbGRyZW4sIHJlcXVpcmVkUGFyZW50cywgaW1wbGljaXROYW1lc3BhY2VQcmVmaXgsXG4gICAgICAgY29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBLCBjbG9zZWRCeVBhcmVudCA9IGZhbHNlLCBpc1ZvaWQgPSBmYWxzZSxcbiAgICAgICBpZ25vcmVGaXJzdExmID0gZmFsc2V9OiB7XG4gICAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4/OiBzdHJpbmdbXSxcbiAgICAgICAgY2xvc2VkQnlQYXJlbnQ/OiBib29sZWFuLFxuICAgICAgICByZXF1aXJlZFBhcmVudHM/OiBzdHJpbmdbXSxcbiAgICAgICAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg/OiBzdHJpbmcsXG4gICAgICAgIGNvbnRlbnRUeXBlPzogVGFnQ29udGVudFR5cGUsXG4gICAgICAgIGlzVm9pZD86IGJvb2xlYW4sXG4gICAgICAgIGlnbm9yZUZpcnN0TGY/OiBib29sZWFuXG4gICAgICB9ID0ge30pIHtcbiAgICBpZiAoY2xvc2VkQnlDaGlsZHJlbiAmJiBjbG9zZWRCeUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4uZm9yRWFjaCh0YWdOYW1lID0+IHRoaXMuY2xvc2VkQnlDaGlsZHJlblt0YWdOYW1lXSA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmlzVm9pZCA9IGlzVm9pZDtcbiAgICB0aGlzLmNsb3NlZEJ5UGFyZW50ID0gY2xvc2VkQnlQYXJlbnQgfHwgaXNWb2lkO1xuICAgIGlmIChyZXF1aXJlZFBhcmVudHMgJiYgcmVxdWlyZWRQYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucmVxdWlyZWRQYXJlbnRzID0ge307XG4gICAgICAvLyBUaGUgZmlyc3QgcGFyZW50IGlzIHRoZSBsaXN0IGlzIGF1dG9tYXRpY2FsbHkgd2hlbiBub25lIG9mIHRoZSBsaXN0ZWQgcGFyZW50cyBhcmUgcHJlc2VudFxuICAgICAgdGhpcy5wYXJlbnRUb0FkZCA9IHJlcXVpcmVkUGFyZW50c1swXTtcbiAgICAgIHJlcXVpcmVkUGFyZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4gdGhpcy5yZXF1aXJlZFBhcmVudHNbdGFnTmFtZV0gPSB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCA9IGltcGxpY2l0TmFtZXNwYWNlUHJlZml4IHx8IG51bGw7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgIHRoaXMuaWdub3JlRmlyc3RMZiA9IGlnbm9yZUZpcnN0TGY7XG4gIH1cblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlcXVpcmVkUGFyZW50cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbGNQYXJlbnQgPSBjdXJyZW50UGFyZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNQYXJlbnRUZW1wbGF0ZSA9IGxjUGFyZW50ID09PSAndGVtcGxhdGUnIHx8IGN1cnJlbnRQYXJlbnQgPT09ICduZy10ZW1wbGF0ZSc7XG4gICAgcmV0dXJuICFpc1BhcmVudFRlbXBsYXRlICYmIHRoaXMucmVxdWlyZWRQYXJlbnRzW2xjUGFyZW50XSAhPT0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZvaWQgfHwgbmFtZS50b0xvd2VyQ2FzZSgpIGluIHRoaXMuY2xvc2VkQnlDaGlsZHJlbjtcbiAgfVxufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI29wdGlvbmFsLXRhZ3Ncbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgZnVsbHkgY29uZm9ybSB0byB0aGUgSFRNTDUgc3BlYy5cbmNvbnN0IFRBR19ERUZJTklUSU9OUzoge1trZXk6IHN0cmluZ106IEh0bWxUYWdEZWZpbml0aW9ufSA9IHtcbiAgJ2Jhc2UnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnbWV0YSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdhcmVhJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2VtYmVkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2xpbmsnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaW1nJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2lucHV0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3BhcmFtJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2hyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2JyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3NvdXJjZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd0cmFjayc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd3YnInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAncCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7XG4gICAgY2xvc2VkQnlDaGlsZHJlbjogW1xuICAgICAgJ2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2RpdicsICdkbCcsICAgICAgJ2ZpZWxkc2V0JywgJ2Zvb3RlcicsICdmb3JtJyxcbiAgICAgICdoMScsICAgICAgJ2gyJywgICAgICAnaDMnLCAgICAnaDQnLCAgICAgICAgICdoNScsICAnaDYnLCAgICAgICdoZWFkZXInLCAgICdoZ3JvdXAnLCAnaHInLFxuICAgICAgJ21haW4nLCAgICAnbmF2JywgICAgICdvbCcsICAgICdwJywgICAgICAgICAgJ3ByZScsICdzZWN0aW9uJywgJ3RhYmxlJywgICAgJ3VsJ1xuICAgIF0sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0aGVhZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddfSksXG4gICd0Ym9keSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGZvb3QnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGJvZHknXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3RyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtcbiAgICBjbG9zZWRCeUNoaWxkcmVuOiBbJ3RyJ10sXG4gICAgcmVxdWlyZWRQYXJlbnRzOiBbJ3Rib2R5JywgJ3Rmb290JywgJ3RoZWFkJ10sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0ZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0ZCcsICd0aCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGQnLCAndGgnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ2NvbCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7cmVxdWlyZWRQYXJlbnRzOiBbJ2NvbGdyb3VwJ10sIGlzVm9pZDogdHJ1ZX0pLFxuICAnc3ZnJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogJ3N2Zyd9KSxcbiAgJ21hdGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2ltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiAnbWF0aCd9KSxcbiAgJ2xpJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2xpJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdkdCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddfSksXG4gICdkZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncmInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsncmInLCAncnQnLCAncnRjJywgJ3JwJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdydCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydCcsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3J0Yyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3JwJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0JywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnb3B0Z3JvdXAnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ29wdGlvbic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydvcHRpb24nLCAnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3ByZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnbGlzdGluZyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnc3R5bGUnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5SQVdfVEVYVH0pLFxuICAnc2NyaXB0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuUkFXX1RFWFR9KSxcbiAgJ3RpdGxlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuRVNDQVBBQkxFX1JBV19URVhUfSksXG4gICd0ZXh0YXJlYSc6XG4gICAgICBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQsIGlnbm9yZUZpcnN0TGY6IHRydWV9KSxcbn07XG5cbmNvbnN0IF9ERUZBVUxUX1RBR19ERUZJTklUSU9OID0gbmV3IEh0bWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBIdG1sVGFnRGVmaW5pdGlvbiB7XG4gIHJldHVybiBUQUdfREVGSU5JVElPTlNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBfREVGQVVMVF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L2h0bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuUGx1cmFsUGlwZSwgSTE4blNlbGVjdFBpcGUsIE5nTG9jYWxlTG9jYWxpemF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJMThuTWVzc2FnZXNCeUlkIHtcbiAgW21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBYbWxNZXNzYWdlc0J5SWQge1xuICBbaWQ6IHN0cmluZ106IHhtbC5Ob2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljdUNvbnRlbnQge1xuICBjYXNlczoge1t2YWx1ZTogc3RyaW5nXTogaHRtbC5Ob2RlW119O1xuICBleHByZXNzaW9uOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJY3VDb250ZW50U3RyIHtcbiAgY2FzZXM6IHtbdmFsdWU6IHN0cmluZ106IHN0cmluZ307XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgYFBsYWNlaG9sZGVyTWFwcGVyYCBjb252ZXJ0cyBwbGFjZWhvbGRlciBuYW1lcyBmcm9tIGludGVybmFsIHRvIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24gYW5kXG4gKiBiYWNrLlxuICpcbiAqIEl0IHNob3VsZCBiZSB1c2VkIGZvciBzZXJpYWxpemF0aW9uIGZvcm1hdCB0aGF0IHB1dCBjb25zdHJhaW50cyBvbiB0aGUgcGxhY2Vob2xkZXIgbmFtZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXJNYXBwZXIge1xuICB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIHRvSW50ZXJuYWxOYW1lKHB1YmxpY05hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgbWFwcGVyIHRoYXQgdGFrZSBhIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSBhbiBpbnRlcm5hbCBuYW1lIHRvIGEgcHVibGljIG5hbWVcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyIGV4dGVuZHMgaTE4bi5SZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgcHJpdmF0ZSBpbnRlcm5hbFRvUHVibGljOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaWNUb05leHRJZDoge1trOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gIHByaXZhdGUgcHVibGljVG9JbnRlcm5hbDoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgLy8gY3JlYXRlIGEgbWFwcGluZyBmcm9tIHRoZSBtZXNzYWdlXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSwgcHJpdmF0ZSBtYXBOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIG1lc3NhZ2Uubm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdG9QdWJsaWNOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxUb1B1YmxpYy5oYXNPd25Qcm9wZXJ0eShpbnRlcm5hbE5hbWUpID8gdGhpcy5pbnRlcm5hbFRvUHVibGljW2ludGVybmFsTmFtZV0gOiBudWxsO1xuICB9XG5cbiAgdG9JbnRlcm5hbE5hbWUocHVibGljTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSA/IHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA6IG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguc3RhcnROYW1lKTtcbiAgICBzdXBlci52aXNpdFRhZ1BsYWNlaG9sZGVyKHBoLCBjb250ZXh0KTtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLmNsb3NlTmFtZSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5uYW1lKTtcbiAgfVxuXG4gIC8vIFhNQiBwbGFjZWhvbGRlcnMgY291bGQgb25seSBjb250YWlucyBBLVosIDAtOSBhbmQgX1xuICBwcml2YXRlIHZpc2l0UGxhY2Vob2xkZXJOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpbnRlcm5hbE5hbWUgfHwgdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHVibGljTmFtZSA9IHRoaXMubWFwTmFtZShpbnRlcm5hbE5hbWUpO1xuXG4gICAgaWYgKHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSkge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IFhNQiB3aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXTtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSBuZXh0SWQgKyAxO1xuICAgICAgcHVibGljTmFtZSA9IGAke3B1YmxpY05hbWV9XyR7bmV4dElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSAxO1xuICAgIH1cblxuICAgIHRoaXMuaW50ZXJuYWxUb1B1YmxpY1tpbnRlcm5hbE5hbWVdID0gcHVibGljTmFtZTtcbiAgICB0aGlzLnB1YmxpY1RvSW50ZXJuYWxbcHVibGljTmFtZV0gPSBpbnRlcm5hbE5hbWU7XG4gIH1cbn1cblxuY29uc3QgaTE4blNlbGVjdFBpcGUgPSBuZXcgSTE4blNlbGVjdFBpcGUoKTtcbmNsYXNzIFNlcmlhbGl6ZXJWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBpMThuUGx1cmFsUGlwZTogSTE4blBsdXJhbFBpcGU7XG4gIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nLCBwcml2YXRlIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLmkxOG5QbHVyYWxQaXBlID0gbmV3IEkxOG5QbHVyYWxQaXBlKG5ldyBOZ0xvY2FsZUxvY2FsaXphdGlvbihsb2NhbGUpKTtcbiAgfVxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmIChnZXRIdG1sVGFnRGVmaW5pdGlvbihlbGVtZW50Lm5hbWUpLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0vPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0+JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuY2hpbGRyZW4pfTwvJHtcbiAgICAgIGVsZW1lbnQubmFtZVxuICAgIH0+YDtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAke2F0dHJpYnV0ZS5uYW1lfT1cIiR7YXR0cmlidXRlLnZhbHVlfVwiYDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgPCEtLSR7Y29tbWVudC52YWx1ZX0tLT5gO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBjYXNlcyA9IHt9O1xuICAgIGV4cGFuc2lvbi5jYXNlcy5mb3JFYWNoKGMgPT4gKGNhc2VzW2MudmFsdWVdID0gdGhpcy5zZXJpYWxpemVOb2RlcyhjLmV4cHJlc3Npb24pKSk7XG5cbiAgICBzd2l0Y2ggKGV4cGFuc2lvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgIHJldHVybiBpMThuU2VsZWN0UGlwZS50cmFuc2Zvcm0odGhpcy5wYXJhbXNbZXhwYW5zaW9uLnN3aXRjaFZhbHVlXSB8fCBcIlwiLCBjYXNlcyk7XG4gICAgICBjYXNlIFwicGx1cmFsXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5QbHVyYWxQaXBlLnRyYW5zZm9ybSh0aGlzLnBhcmFtc1tleHBhbnNpb24uc3dpdGNoVmFsdWVdLCBjYXNlcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBleHBhbnNpb24gdHlwZSBcIiR7ZXhwYW5zaW9uLnR5cGV9XCJgKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAgJHtleHBhbnNpb25DYXNlLnZhbHVlfSB7JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGV4cGFuc2lvbkNhc2UuZXhwcmVzc2lvbil9fWA7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgam9pbiA9IFwiXCIpOiBzdHJpbmcge1xuICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gam9pbiArIG5vZGVzLm1hcChhID0+IGEudmlzaXQodGhpcywgbnVsbCkpLmpvaW4oam9pbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgbG9jYWxlOiBzdHJpbmcsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KG5ldyBTZXJpYWxpemVyVmlzaXRvcihsb2NhbGUsIHBhcmFtcyksIG51bGwpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxUb1htbFBhcnNlciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSB4bWxNZXNzYWdlc0J5SWQ6IHtbaWQ6IHN0cmluZ106IHhtbC5Ob2RlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE1FU1NBR0VfVEFHOiBzdHJpbmcpIHt9XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy54bWxNZXNzYWdlc0J5SWQgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5lcnJvcnMgPSBwYXJzZXIuZXJyb3JzO1xuICAgIGh0bWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeG1sTWVzc2FnZXNCeUlkOiB0aGlzLnhtbE1lc3NhZ2VzQnlJZCxcbiAgICAgIGVycm9yczogdGhpcy5lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSB0aGlzLk1FU1NBR0VfVEFHOlxuICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdGhpcy54bWxNZXNzYWdlc0J5SWRbaWQudmFsdWVdID0gKGVsZW1lbnQgYXMgYW55KSBhcyB4bWwuTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLmlkIHx8IHNoYTEoc2VyaWFsaXplTm9kZXMobWVzc2FnZS5ub2Rlcykuam9pbihcIlwiKSArIGBbJHttZXNzYWdlLm1lYW5pbmd9XWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbERpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICBpZiAobWVzc2FnZS5pZCkge1xuICAgIHJldHVybiBtZXNzYWdlLmlkO1xuICB9XG5cbiAgY29uc3QgdmlzaXRvciA9IG5ldyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvcigpO1xuICBjb25zdCBwYXJ0cyA9IG1lc3NhZ2Uubm9kZXMubWFwKGEgPT4gYS52aXNpdCh2aXNpdG9yLCBudWxsKSk7XG4gIHJldHVybiBjb21wdXRlTXNnSWQocGFydHMuam9pbihcIlwiKSwgbWVzc2FnZS5tZWFuaW5nKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGkxOG4gaHRtbCB0byBzb21ldGhpbmcgeG1sLWxpa2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYW4gVUlELlxuICpcbiAqIFRoZSB2aXNpdG9yIGlzIGFsc28gdXNlZCBpbiB0aGUgaTE4biBwYXJzZXIgdGVzdHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0ZXh0LnZhbHVlO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYFske2NvbnRhaW5lci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oXCIsIFwiKX1dYDtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3Qgc3RyQ2FzZXMgPSBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLm1hcCgoazogc3RyaW5nKSA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuICAgIHJldHVybiBgeyR7aWN1LmV4cHJlc3Npb259LCAke2ljdS50eXBlfSwgJHtzdHJDYXNlcy5qb2luKFwiLCBcIil9fWA7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBwaC5pc1ZvaWRcbiAgICAgID8gYDxwaCB0YWcgbmFtZT1cIiR7cGguc3RhcnROYW1lfVwiLz5gXG4gICAgICA6IGA8cGggdGFnIG5hbWU9XCIke3BoLnN0YXJ0TmFtZX1cIj4ke3BoLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbihcIiwgXCIpfTwvcGggbmFtZT1cIiR7XG4gICAgICAgICAgcGguY2xvc2VOYW1lXG4gICAgICAgIH1cIj5gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gcGgudmFsdWUgPyBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCI+JHtwaC52YWx1ZX08L3BoPmAgOiBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCIvPmA7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gYDxwaCBpY3UgbmFtZT1cIiR7cGgubmFtZX1cIj4ke3BoLnZhbHVlLnZpc2l0KHRoaXMpfTwvcGg+YDtcbiAgfVxufVxuXG5jb25zdCBzZXJpYWxpemVyVmlzaXRvciA9IG5ldyBTZXJpYWxpemVyVmlzaXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTm9kZXMobm9kZXM6IGkxOG4uTm9kZVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gbm9kZXMubWFwKGEgPT4gYS52aXNpdChzZXJpYWxpemVyVmlzaXRvciwgbnVsbCkpO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgaTE4biBodG1sIHRvIHNvbWV0aGluZyB4bWwtbGlrZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhbiBVSUQuXG4gKlxuICogSWdub3JlIHRoZSBJQ1UgZXhwcmVzc2lvbnMgc28gdGhhdCBtZXNzYWdlIElEcyBzdGF5cyBpZGVudGljYWwgaWYgb25seSB0aGUgZXhwcmVzc2lvbiBjaGFuZ2VzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvciBleHRlbmRzIFNlcmlhbGl6ZXJWaXNpdG9yIHtcbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHJDYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKChrOiBzdHJpbmcpID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG4gICAgLy8gRG8gbm90IHRha2UgdGhlIGV4cHJlc3Npb24gaW50byBhY2NvdW50XG4gICAgcmV0dXJuIGB7JHtpY3UudHlwZX0sICR7c3RyQ2FzZXMuam9pbihcIiwgXCIpfX1gO1xuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgU0hBMSBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gKlxuICogc2VlIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtNC9maXBzLTE4MC00LnBkZlxuICpcbiAqIFdBUk5JTkc6IHRoaXMgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGRlc2lnbmVkIG5vdCB0ZXN0ZWQgd2l0aCBzZWN1cml0eSBpbiBtaW5kLlxuICogICAgICAgICAgRE8gTk9UIFVTRSBJVCBJTiBBIFNFQ1VSSVRZIFNFTlNJVElWRSBDT05URVhULlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhMShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHV0ZjggPSB1dGY4RW5jb2RlKHN0cik7XG4gIGNvbnN0IHdvcmRzMzIgPSBzdHJpbmdUb1dvcmRzMzIodXRmOCwgRW5kaWFuLkJpZyk7XG4gIGNvbnN0IGxlbiA9IHV0ZjgubGVuZ3RoICogODtcblxuICBjb25zdCB3ID0gbmV3IEFycmF5KDgwKTtcbiAgbGV0IFthLCBiLCBjLCBkLCBlXTogbnVtYmVyW10gPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgd29yZHMzMltsZW4gPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBsZW4gJSAzMik7XG4gIHdvcmRzMzJbKCgobGVuICsgNjQpID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBbaDAsIGgxLCBoMiwgaDMsIGg0XTogbnVtYmVyW10gPSBbYSwgYiwgYywgZCwgZV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDgwOyBqKyspIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKGogPCAxNikge1xuICAgICAgICB3W2pdID0gd29yZHMzMltpICsgal07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3W2pdID0gcm9sMzIod1tqIC0gM10gXiB3W2ogLSA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmLCBrXSA9IGZrKGosIGIsIGMsIGQpO1xuICAgICAgY29uc3QgdGVtcCA9IFtyb2wzMihhLCA1KSwgZiwgZSwgaywgd1tqXV0ucmVkdWNlKGFkZDMyKTtcbiAgICAgIFtlLCBkLCBjLCBiLCBhXSA9IFtkLCBjLCByb2wzMihiLCAzMCksIGEsIHRlbXBdO1xuICAgIH1cblxuICAgIFthLCBiLCBjLCBkLCBlXSA9IFthZGQzMihhLCBoMCksIGFkZDMyKGIsIGgxKSwgYWRkMzIoYywgaDIpLCBhZGQzMihkLCBoMyksIGFkZDMyKGUsIGg0KV07XG4gIH1cblxuICByZXR1cm4gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2EsIGIsIGMsIGQsIGVdKSk7XG59XG5cbmZ1bmN0aW9uIGZrKGluZGV4OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgaWYgKGluZGV4IDwgMjApIHtcbiAgICByZXR1cm4gWyhiICYgYykgfCAofmIgJiBkKSwgMHg1YTgyNzk5OV07XG4gIH1cblxuICBpZiAoaW5kZXggPCA0MCkge1xuICAgIHJldHVybiBbYiBeIGMgXiBkLCAweDZlZDllYmExXTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDYwKSB7XG4gICAgcmV0dXJuIFsoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCksIDB4OGYxYmJjZGNdO1xuICB9XG5cbiAgcmV0dXJuIFtiIF4gYyBeIGQsIDB4Y2E2MmMxZDZdO1xufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIGZpbmdlcnByaW50IG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIDY0IGJpdCBudW1iZXIgZW5jb2RlZCBhcyBhIGRlY2ltYWwgc3RyaW5nXG4gKlxuICogYmFzZWQgb246XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvYmxvYi9tYXN0ZXIvc3JjL2NvbS9nb29nbGUvamF2YXNjcmlwdC9qc2NvbXAvR29vZ2xlSnNNZXNzYWdlSWRHZW5lcmF0b3IuamF2YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZ2VycHJpbnQoc3RyOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdXRmOCA9IHV0ZjhFbmNvZGUoc3RyKTtcblxuICBsZXQgW2hpLCBsb10gPSBbaGFzaDMyKHV0ZjgsIDApLCBoYXNoMzIodXRmOCwgMTAyMDcyKV07XG5cbiAgaWYgKGhpID09PSAwICYmIChsbyA9PT0gMCB8fCBsbyA9PT0gMSkpIHtcbiAgICBoaSA9IGhpIF4gMHgxMzBmOWJlZjtcbiAgICBsbyA9IGxvIF4gLTB4NmI1ZjU2ZDg7XG4gIH1cblxuICByZXR1cm4gW2hpLCBsb107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTXNnSWQobXNnOiBzdHJpbmcsIG1lYW5pbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBbaGksIGxvXSA9IGZpbmdlcnByaW50KG1zZyk7XG5cbiAgaWYgKG1lYW5pbmcpIHtcbiAgICBjb25zdCBbaGltLCBsb21dID0gZmluZ2VycHJpbnQobWVhbmluZyk7XG4gICAgW2hpLCBsb10gPSBhZGQ2NChyb2w2NChbaGksIGxvXSwgMSksIFtoaW0sIGxvbV0pO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVTdHJpbmdUb0RlY1N0cmluZyh3b3JkczMyVG9CeXRlU3RyaW5nKFtoaSAmIDB4N2ZmZmZmZmYsIGxvXSkpO1xufVxuXG5mdW5jdGlvbiBoYXNoMzIoc3RyOiBzdHJpbmcsIGM6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBbYSwgYl0gPSBbMHg5ZTM3NzliOSwgMHg5ZTM3NzliOV07XG4gIGxldCBpOiBudW1iZXI7XG5cbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpICsgMTIgPD0gbGVuOyBpICs9IDEyKSB7XG4gICAgYSA9IGFkZDMyKGEsIHdvcmRBdChzdHIsIGksIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBiID0gYWRkMzIoYiwgd29yZEF0KHN0ciwgaSArIDQsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBbYSwgYiwgY10gPSBtaXgoW2EsIGIsIGNdKTtcbiAgfVxuXG4gIGEgPSBhZGQzMihhLCB3b3JkQXQoc3RyLCBpLCBFbmRpYW4uTGl0dGxlKSk7XG4gIGIgPSBhZGQzMihiLCB3b3JkQXQoc3RyLCBpICsgNCwgRW5kaWFuLkxpdHRsZSkpO1xuICAvLyB0aGUgZmlyc3QgYnl0ZSBvZiBjIGlzIHJlc2VydmVkIGZvciB0aGUgbGVuZ3RoXG4gIGMgPSBhZGQzMihjLCBsZW4pO1xuICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpIDw8IDgpO1xuXG4gIHJldHVybiBtaXgoW2EsIGIsIGNdKVsyXTtcbn1cblxuLy8gY2xhbmctZm9ybWF0IG9mZlxuZnVuY3Rpb24gbWl4KFthLCBiLCBjXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgYSA9IHN1YjMyKGEsIGIpO1xuICBhID0gc3ViMzIoYSwgYyk7XG4gIGEgXj0gYyA+Pj4gMTM7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgODtcbiAgYyA9IHN1YjMyKGMsIGEpO1xuICBjID0gc3ViMzIoYywgYik7XG4gIGMgXj0gYiA+Pj4gMTM7XG4gIGEgPSBzdWIzMihhLCBiKTtcbiAgYSA9IHN1YjMyKGEsIGMpO1xuICBhIF49IGMgPj4+IDEyO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDE2O1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiA1O1xuICBhID0gc3ViMzIoYSwgYik7XG4gIGEgPSBzdWIzMihhLCBjKTtcbiAgYSBePSBjID4+PiAzO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDEwO1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiAxNTtcbiAgcmV0dXJuIFthLCBiLCBjXTtcbn1cbi8vIGNsYW5nLWZvcm1hdCBvblxuXG4vLyBVdGlsc1xuXG5lbnVtIEVuZGlhbiB7XG4gIExpdHRsZSxcbiAgQmlnXG59XG5cbmZ1bmN0aW9uIGFkZDMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGFkZDMydG82NChhLCBiKVsxXTtcbn1cblxuZnVuY3Rpb24gYWRkMzJ0bzY0KGE6IG51bWJlciwgYjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGxvdyA9IChhICYgMHhmZmZmKSArIChiICYgMHhmZmZmKTtcbiAgY29uc3QgaGlnaCA9IChhID4+PiAxNikgKyAoYiA+Pj4gMTYpICsgKGxvdyA+Pj4gMTYpO1xuICByZXR1cm4gW2hpZ2ggPj4+IDE2LCAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKV07XG59XG5cbmZ1bmN0aW9uIGFkZDY0KFthaCwgYWxdOiBbbnVtYmVyLCBudW1iZXJdLCBbYmgsIGJsXTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBbY2FycnksIGxdID0gYWRkMzJ0bzY0KGFsLCBibCk7XG4gIGNvbnN0IGggPSBhZGQzMihhZGQzMihhaCwgYmgpLCBjYXJyeSk7XG4gIHJldHVybiBbaCwgbF07XG59XG5cbmZ1bmN0aW9uIHN1YjMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpIC0gKGIgJiAweGZmZmYpO1xuICBjb25zdCBoaWdoID0gKGEgPj4gMTYpIC0gKGIgPj4gMTYpICsgKGxvdyA+PiAxNik7XG4gIHJldHVybiAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKTtcbn1cblxuLy8gUm90YXRlIGEgMzJiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDMyKGE6IG51bWJlciwgY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoYSA8PCBjb3VudCkgfCAoYSA+Pj4gKDMyIC0gY291bnQpKTtcbn1cblxuLy8gUm90YXRlIGEgNjRiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDY0KFtoaSwgbG9dOiBbbnVtYmVyLCBudW1iZXJdLCBjb3VudDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGggPSAoaGkgPDwgY291bnQpIHwgKGxvID4+PiAoMzIgLSBjb3VudCkpO1xuICBjb25zdCBsID0gKGxvIDw8IGNvdW50KSB8IChoaSA+Pj4gKDMyIC0gY291bnQpKTtcbiAgcmV0dXJuIFtoLCBsXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nVG9Xb3JkczMyKHN0cjogc3RyaW5nLCBlbmRpYW46IEVuZGlhbik6IG51bWJlcltdIHtcbiAgY29uc3Qgd29yZHMzMiA9IEFycmF5KChzdHIubGVuZ3RoICsgMykgPj4+IDIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkrKykge1xuICAgIHdvcmRzMzJbaV0gPSB3b3JkQXQoc3RyLCBpICogNCwgZW5kaWFuKTtcbiAgfVxuXG4gIHJldHVybiB3b3JkczMyO1xufVxuXG5mdW5jdGlvbiBieXRlQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaW5kZXggPj0gc3RyLmxlbmd0aCA/IDAgOiBzdHIuY2hhckNvZGVBdChpbmRleCkgJiAweGZmO1xufVxuXG5mdW5jdGlvbiB3b3JkQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGVuZGlhbjogRW5kaWFuKTogbnVtYmVyIHtcbiAgbGV0IHdvcmQgPSAwO1xuICBpZiAoZW5kaWFuID09PSBFbmRpYW4uQmlnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHdvcmQgKz0gYnl0ZUF0KHN0ciwgaW5kZXggKyBpKSA8PCAoMjQgLSA4ICogaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB3b3JkICs9IGJ5dGVBdChzdHIsIGluZGV4ICsgaSkgPDwgKDggKiBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdvcmQ7XG59XG5cbmZ1bmN0aW9uIHdvcmRzMzJUb0J5dGVTdHJpbmcod29yZHMzMjogbnVtYmVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gd29yZHMzMi5yZWR1Y2UoKHN0ciwgd29yZCkgPT4gc3RyICsgd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQpLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQ6IG51bWJlcik6IHN0cmluZyB7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3b3JkID4+PiAoOCAqICgzIC0gaSkpKSAmIDB4ZmYpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVTdHJpbmdUb0hleFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBoZXggPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGIgPSBieXRlQXQoc3RyLCBpKTtcbiAgICBoZXggKz0gKGIgPj4+IDQpLnRvU3RyaW5nKDE2KSArIChiICYgMHgwZikudG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gYmFzZWQgb24gaHR0cDovL3d3dy5kYW52ay5vcmcvaGV4MmRlYy5odG1sIChKUyBjYW4gbm90IGhhbmRsZSBtb3JlIHRoYW4gNTZiKVxuZnVuY3Rpb24gYnl0ZVN0cmluZ1RvRGVjU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGRlY2ltYWwgPSBcIlwiO1xuICBsZXQgdG9UaGVQb3dlciA9IFwiMVwiO1xuXG4gIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkZWNpbWFsID0gYWRkQmlnSW50KGRlY2ltYWwsIG51bWJlclRpbWVzQmlnSW50KGJ5dGVBdChzdHIsIGkpLCB0b1RoZVBvd2VyKSk7XG4gICAgdG9UaGVQb3dlciA9IG51bWJlclRpbWVzQmlnSW50KDI1NiwgdG9UaGVQb3dlcik7XG4gIH1cblxuICByZXR1cm4gZGVjaW1hbFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5yZXZlcnNlKClcbiAgICAuam9pbihcIlwiKTtcbn1cblxuLy8geCBhbmQgeSBkZWNpbWFsLCBsb3dlc3Qgc2lnbmlmaWNhbnQgZGlnaXQgZmlyc3RcbmZ1bmN0aW9uIGFkZEJpZ0ludCh4OiBzdHJpbmcsIHk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBzdW0gPSBcIlwiO1xuICBjb25zdCBsZW4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMCwgY2FycnkgPSAwOyBpIDwgbGVuIHx8IGNhcnJ5OyBpKyspIHtcbiAgICBjb25zdCB0bXBTdW0gPSBjYXJyeSArICsoeFtpXSB8fCAwKSArICsoeVtpXSB8fCAwKTtcbiAgICBpZiAodG1wU3VtID49IDEwKSB7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgICBzdW0gKz0gdG1wU3VtIC0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIHN1bSArPSB0bXBTdW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyVGltZXNCaWdJbnQobnVtOiBudW1iZXIsIGI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBwcm9kdWN0ID0gXCJcIjtcbiAgbGV0IGJUb1RoZVBvd2VyID0gYjtcbiAgZm9yICg7IG51bSAhPT0gMDsgbnVtID0gbnVtID4+PiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHByb2R1Y3QgPSBhZGRCaWdJbnQocHJvZHVjdCwgYlRvVGhlUG93ZXIpO1xuICAgIH1cbiAgICBiVG9UaGVQb3dlciA9IGFkZEJpZ0ludChiVG9UaGVQb3dlciwgYlRvVGhlUG93ZXIpO1xuICB9XG4gIHJldHVybiBwcm9kdWN0O1xufVxuXG5mdW5jdGlvbiB1dGY4RW5jb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGVuY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBjb2RlUG9pbnQgPSBzdHIuY2hhckNvZGVBdChpbmRleCk7XG5cbiAgICAvLyBkZWNvZGUgc3Vycm9nYXRlXG4gICAgLy8gc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgIGlmIChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRiZmYgJiYgc3RyLmxlbmd0aCA+IGluZGV4ICsgMSkge1xuICAgICAgY29uc3QgbG93ID0gc3RyLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgIGlmIChsb3cgPj0gMHhkYzAwICYmIGxvdyA8PSAweGRmZmYpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29kZVBvaW50ID0gKChjb2RlUG9pbnQgLSAweGQ4MDApIDw8IDEwKSArIGxvdyAtIDB4ZGMwMCArIDB4MTAwMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA8PSAweDdmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDdmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxZikgfCAweGMwLCAoY29kZVBvaW50ICYgMHgzZikgfCAweDgwKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgKGNvZGVQb2ludCA+PiAxMikgfCAweGUwLFxuICAgICAgICAoKGNvZGVQb2ludCA+PiA2KSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKGNvZGVQb2ludCAmIDB4M2YpIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDFmZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4ZjAsXG4gICAgICAgICgoY29kZVBvaW50ID4+IDEyKSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKChjb2RlUG9pbnQgPj4gNikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIEkxOG5NZXNzYWdlc0J5SWQsIFhtbE1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMS4yXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoxLjJcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSBcInhcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ0cmFucy11bml0XCI7XG5jb25zdCBfQ09OVEVYVF9HUk9VUF9UQUcgPSBcImNvbnRleHQtZ3JvdXBcIjtcbmNvbnN0IF9DT05URVhUX1RBRyA9IFwiY29udGV4dFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4bGlmZkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZlBhcnNlciA9IG5ldyBYbGlmZlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBtZXNzYWdlc1xuICBjb25zdCBpMThuTWVzc2FnZXNCeUlkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTWVzc2FnZXNCeUlkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIGkxOG5NZXNzYWdlc0J5SWQ7XG59XG5cbi8vIHVzZWQgdG8gbWVyZ2UgdHJhbnNsYXRpb25zIHdoZW4gZXh0cmFjdGluZ1xuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL29zL3hsaWZmLWNvcmUuaHRtbFxuLy8gaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi94bGlmZi1wcm9maWxlLWh0bWwveGxpZmYtcHJvZmlsZS1odG1sLTEuMi5odG1sXG5leHBvcnQgZnVuY3Rpb24geGxpZmZXcml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nIHwgbnVsbCwgZXhpc3RpbmdOb2Rlcz86IHhtbC5Ob2RlW10pOiBzdHJpbmcge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFdyaXRlVmlzaXRvcigpO1xuICBjb25zdCB0cmFuc1VuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDYpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgY29udGV4dFRhZ3M6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0R3JvdXBUYWcgPSBuZXcgeG1sLlRhZyhfQ09OVEVYVF9HUk9VUF9UQUcsIHtwdXJwb3NlOiBcImxvY2F0aW9uXCJ9KTtcbiAgICAgIGNvbnRleHRHcm91cFRhZy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBuZXcgeG1sLkNSKDEwKSxcbiAgICAgICAgbmV3IHhtbC5UYWcoX0NPTlRFWFRfVEFHLCB7XCJjb250ZXh0LXR5cGVcIjogXCJzb3VyY2VmaWxlXCJ9LCBbbmV3IHhtbC5UZXh0KHNvdXJjZS5maWxlUGF0aCldKSxcbiAgICAgICAgbmV3IHhtbC5DUigxMCksXG4gICAgICAgIG5ldyB4bWwuVGFnKF9DT05URVhUX1RBRywge1wiY29udGV4dC10eXBlXCI6IFwibGluZW51bWJlclwifSwgW25ldyB4bWwuVGV4dChgJHtzb3VyY2Uuc3RhcnRMaW5lfWApXSksXG4gICAgICAgIG5ldyB4bWwuQ1IoOClcbiAgICAgICk7XG4gICAgICBjb250ZXh0VGFncy5wdXNoKG5ldyB4bWwuQ1IoOCksIGNvbnRleHRHcm91cFRhZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc1VuaXQgPSBuZXcgeG1sLlRhZyhfVU5JVF9UQUcsIHtpZDogbWVzc2FnZS5pZCwgZGF0YXR5cGU6IFwiaHRtbFwifSk7XG4gICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCB2aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKSksXG4gICAgICAuLi5jb250ZXh0VGFnc1xuICAgICk7XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcImRlc2NyaXB0aW9uXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UuZGVzY3JpcHRpb24pXSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcIm1lYW5pbmdcIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5tZWFuaW5nKV0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyYW5zVW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuXG4gICAgdHJhbnNVbml0cy5wdXNoKG5ldyB4bWwuQ1IoNiksIHRyYW5zVW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgeG1sLlRhZyhcImJvZHlcIiwge30sIFsuLi50cmFuc1VuaXRzLCBuZXcgeG1sLkNSKDQpXSk7XG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhcbiAgICBcImZpbGVcIixcbiAgICB7XG4gICAgICBcInNvdXJjZS1sYW5ndWFnZVwiOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkcsXG4gICAgICBkYXRhdHlwZTogXCJwbGFpbnRleHRcIixcbiAgICAgIG9yaWdpbmFsOiBcIm5nMi50ZW1wbGF0ZVwiXG4gICAgfSxcbiAgICBbbmV3IHhtbC5DUig0KSwgYm9keSwgbmV3IHhtbC5DUigyKV1cbiAgKTtcbiAgY29uc3QgeGxpZmYgPSBuZXcgeG1sLlRhZyhcInhsaWZmXCIsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOU30sIFtuZXcgeG1sLkNSKDIpLCBmaWxlLCBuZXcgeG1sLkNSKCldKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmRGlnZXN0ID0gZGlnZXN0O1xuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1VOSVRfVEFHOlxuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsITtcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVU5JVF9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdW5pdE1sU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IHRoaXMuX3VuaXRNbFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBNZXNzYWdlICR7aWR9IG1pc3NlcyBhIHRyYW5zbGF0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9TT1VSQ0VfVEFHOlxuICAgICAgICAvLyBpZ25vcmUgc291cmNlIG1lc3NhZ2VcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RBUkdFVF9UQUc6XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCwgaW5uZXJUZXh0RW5kKTtcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gaW5uZXJUZXh0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfRklMRV9UQUc6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETyh2aWNiKTogYXNzZXJ0IGZpbGUgc3RydWN0dXJlLCB4bGlmZiB2ZXJzaW9uXG4gICAgICAgIC8vIEZvciBub3cgb25seSByZWN1cnNlIG9uIHVuaGFuZGxlZCBub2Rlc1xuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5QbGFjZWhvbGRlciB8IG51bGwge1xuICAgIGlmIChlbC5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaCgoYzogYW55KSA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbilcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGN0eXBlID0gZ2V0Q3R5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwke3BoLnRhZ30vPmB9KV07XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGguc3RhcnROYW1lLCBjdHlwZSwgXCJlcXVpdi10ZXh0XCI6IGA8JHtwaC50YWd9PmB9KTtcbiAgICBjb25zdCBjbG9zZVRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5jbG9zZU5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwvJHtwaC50YWd9PmB9KTtcblxuICAgIHJldHVybiBbc3RhcnRUYWdQaCwgLi4udGhpcy5zZXJpYWxpemUocGguY2hpbGRyZW4pLCBjbG9zZVRhZ1BoXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGB7eyR7cGgudmFsdWV9fX1gfSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGVxdWl2VGV4dCA9IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKX19YDtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGVxdWl2VGV4dH0pXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdHlwZUZvclRhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYnJcIjpcbiAgICAgIHJldHVybiBcImxiXCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGB4LSR7dGFnfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgSTE4bk1lc3NhZ2VzQnlJZCwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMi4wXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoyLjBcIjtcbmNvbnN0IF9ERUZBVUxUX1NPVVJDRV9MQU5HID0gXCJlblwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUcgPSBcInBjXCI7XG5jb25zdCBfWExJRkZfVEFHID0gXCJ4bGlmZlwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ1bml0XCI7XG5jb25zdCBfTk9URVNfVEFHID0gXCJub3Rlc1wiO1xuY29uc3QgX05PVEVfVEFHID0gXCJub3RlXCI7XG5jb25zdCBfU0VHTUVOVF9UQUcgPSBcInNlZ21lbnRcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi94bGlmZi1jb3JlL3YyLjAvb3MveGxpZmYtY29yZS12Mi4wLW9zLmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9JMThuKGNvbnRlbnQ6IHN0cmluZyk6IEkxOG5NZXNzYWdlc0J5SWQge1xuICAvLyB4bGlmZiB0byB4bWwgbm9kZXNcbiAgY29uc3QgeGxpZmYyUGFyc2VyID0gbmV3IFhsaWZmMlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZjJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBYbWxUb0kxOG4oKTtcblxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3Qge2kxOG5Ob2RlcywgZXJyb3JzOiBlfSA9IGNvbnZlcnRlci5jb252ZXJ0KG1zZ0lkVG9IdG1sW21zZ0lkXSk7XG4gICAgZXJyb3JzLnB1c2goLi4uZSk7XG4gICAgaTE4bk5vZGVzQnlNc2dJZFttc2dJZF0gPSBpMThuTm9kZXM7XG4gIH0pO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4gaTE4bk5vZGVzQnlNc2dJZDtcbn1cblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYyIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzPzogeG1sLk5vZGVbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgV3JpdGVWaXNpdG9yKCk7XG4gIGNvbnN0IHVuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDQpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IG5ldyB4bWwuVGFnKF9VTklUX1RBRywge2lkOiBtZXNzYWdlLmlkfSk7XG4gICAgY29uc3Qgbm90ZXMgPSBuZXcgeG1sLlRhZyhfTk9URVNfVEFHKTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uIHx8IG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcImRlc2NyaXB0aW9uXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UuZGVzY3JpcHRpb24pXSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgbmV3IHhtbC5UYWcoX05PVEVfVEFHLCB7Y2F0ZWdvcnk6IFwibWVhbmluZ1wifSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLm1lYW5pbmcpXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJsb2NhdGlvblwifSwgW1xuICAgICAgICAgIG5ldyB4bWwuVGV4dChcbiAgICAgICAgICAgIGAke3NvdXJjZS5maWxlUGF0aH06JHtzb3VyY2Uuc3RhcnRMaW5lfSR7c291cmNlLmVuZExpbmUgIT09IHNvdXJjZS5zdGFydExpbmUgPyBcIixcIiArIHNvdXJjZS5lbmRMaW5lIDogXCJcIn1gXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIG5vdGVzLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSk7XG4gICAgdW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNiksIG5vdGVzKTtcblxuICAgIGNvbnN0IHNlZ21lbnQgPSBuZXcgeG1sLlRhZyhfU0VHTUVOVF9UQUcpO1xuXG4gICAgc2VnbWVudC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoOCksIG5ldyB4bWwuVGFnKF9TT1VSQ0VfVEFHLCB7fSwgdmlzaXRvci5zZXJpYWxpemUobWVzc2FnZS5ub2RlcykpLCBuZXcgeG1sLkNSKDYpKTtcblxuICAgIHVuaXQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpLCBzZWdtZW50LCBuZXcgeG1sLkNSKDQpKTtcblxuICAgIHVuaXRzLnB1c2gobmV3IHhtbC5DUig0KSwgdW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhfRklMRV9UQUcsIHtvcmlnaW5hbDogXCJuZy50ZW1wbGF0ZVwiLCBpZDogXCJuZ2kxOG5cIn0sIFsuLi51bml0cywgbmV3IHhtbC5DUigyKV0pO1xuXG4gIGNvbnN0IHhsaWZmID0gbmV3IHhtbC5UYWcoX1hMSUZGX1RBRywge3ZlcnNpb246IF9WRVJTSU9OLCB4bWxuczogX1hNTE5TLCBzcmNMYW5nOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkd9LCBbXG4gICAgbmV3IHhtbC5DUigyKSxcbiAgICBmaWxlLFxuICAgIG5ldyB4bWwuQ1IoKVxuICBdKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmMkRpZ2VzdCA9IGRlY2ltYWxEaWdlc3Q7XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHhsaWZmIGZpbGVcbmNsYXNzIFhsaWZmMlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5fZXJyb3JzID0gcGFyc2VyLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVU5JVF9UQUc6XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1VOSVRfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3VuaXRNbFN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICB0aGlzLl9tc2dJZFRvSHRtbFtpZF0gPSB0aGlzLl91bml0TWxTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgTWVzc2FnZSAke2lkfSBtaXNzZXMgYSB0cmFuc2xhdGlvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfU09VUkNFX1RBRzpcbiAgICAgICAgLy8gaWdub3JlIHNvdXJjZSBtZXNzYWdlXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9UQVJHRVRfVEFHOlxuICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICBjb25zdCBpbm5lclRleHRFbmQgPSBlbGVtZW50LmVuZFNvdXJjZVNwYW4hLnN0YXJ0Lm9mZnNldDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5maWxlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQsIGlubmVyVGV4dEVuZCk7XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IGlubmVyVGV4dDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1hMSUZGX1RBRzpcbiAgICAgICAgY29uc3QgdmVyc2lvbkF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwidmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlcnNpb25BdHRyKSB7XG4gICAgICAgICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25BdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh2ZXJzaW9uICE9PSBcIjIuMFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgVGhlIFhMSUZGIGZpbGUgdmVyc2lvbiAke3ZlcnNpb259IGlzIG5vdCBjb21wYXRpYmxlIHdpdGggWExJRkYgMi4wIHNlcmlhbGl6ZXJgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZVtdIHwgbnVsbCB7XG4gICAgc3dpdGNoIChlbC5uYW1lKSB7XG4gICAgICBjYXNlIF9QTEFDRUhPTERFUl9UQUc6XG4gICAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdlwiKTtcbiAgICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBuYW1lQXR0ci52YWx1ZSwgZWwuc291cmNlU3BhbildO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2XCIgYXR0cmlidXRlYCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBfUExBQ0VIT0xERVJfU1BBTk5JTkdfVEFHOlxuICAgICAgICBjb25zdCBzdGFydEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2U3RhcnRcIik7XG4gICAgICAgIGNvbnN0IGVuZEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2RW5kXCIpO1xuXG4gICAgICAgIGlmICghc3RhcnRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2U3RhcnRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdkVuZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SWQgPSBzdGFydEF0dHIudmFsdWU7XG4gICAgICAgICAgY29uc3QgZW5kSWQgPSBlbmRBdHRyLnZhbHVlO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXM6IGkxOG4uTm9kZVtdID0gW107XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXMuY29uY2F0KFxuICAgICAgICAgICAgbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgc3RhcnRJZCwgZWwuc291cmNlU3BhbiksXG4gICAgICAgICAgICAuLi5lbC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMsIG51bGwpKSxcbiAgICAgICAgICAgIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIGVuZElkLCBlbC5zb3VyY2VTcGFuKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogW10uY29uY2F0KC4uLm1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbikpXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHByaXZhdGUgX25leHRQbGFjZWhvbGRlcklkOiBudW1iZXI7XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIGNvbnN0IHRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCksXG4gICAgICAgIGVxdWl2OiBwaC5zdGFydE5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRpc3A6IGA8JHtwaC50YWd9Lz5gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbdGFnUGhdO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ1BjID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRywge1xuICAgICAgaWQ6ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpLFxuICAgICAgZXF1aXZTdGFydDogcGguc3RhcnROYW1lLFxuICAgICAgZXF1aXZFbmQ6IHBoLmNsb3NlTmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBkaXNwU3RhcnQ6IGA8JHtwaC50YWd9PmAsXG4gICAgICBkaXNwRW5kOiBgPC8ke3BoLnRhZ30+YFxuICAgIH0pO1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW10uY29uY2F0KC4uLnBoLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlOiB4bWwuTm9kZSkgPT4gdGFnUGMuY2hpbGRyZW4ucHVzaChub2RlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ1BjLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5UZXh0KFwiXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RhZ1BjXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7eyR7cGgudmFsdWV9fX1gXG4gICAgICB9KVxuICAgIF07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtjYXNlc319YFxuICAgICAgfSlcbiAgICBdO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHRoaXMuX25leHRQbGFjZWhvbGRlcklkID0gMDtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJiclwiOlxuICAgIGNhc2UgXCJiXCI6XG4gICAgY2FzZSBcImlcIjpcbiAgICBjYXNlIFwidVwiOlxuICAgICAgcmV0dXJuIFwiZm10XCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBjYXNlIFwiYVwiOlxuICAgICAgcmV0dXJuIFwibGlua1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJvdGhlclwiO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIFBsYWNlaG9sZGVyTWFwcGVyLCBTaW1wbGVQbGFjZWhvbGRlck1hcHBlciwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5cbmNvbnN0IF9NRVNTQUdFU19UQUcgPSBcIm1lc3NhZ2VidW5kbGVcIjtcbmNvbnN0IF9NRVNTQUdFX1RBRyA9IFwibXNnXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuY29uc3QgX0VYRU1QTEVfVEFHID0gXCJleFwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuXG5jb25zdCBfRE9DVFlQRSA9IGA8IUVMRU1FTlQgbWVzc2FnZWJ1bmRsZSAobXNnKSo+XG48IUFUVExJU1QgbWVzc2FnZWJ1bmRsZSBjbGFzcyBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIG1zZyAoI1BDREFUQXxwaHxzb3VyY2UpKj5cbjwhQVRUTElTVCBtc2cgaWQgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHNlcSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbmFtZSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgZGVzYyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbWVhbmluZyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgb2Jzb2xldGUgKG9ic29sZXRlKSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgeG1sOnNwYWNlIChkZWZhdWx0fHByZXNlcnZlKSBcImRlZmF1bHRcIj5cbjwhQVRUTElTVCBtc2cgaXNfaGlkZGVuIENEQVRBICNJTVBMSUVEPlxuXG48IUVMRU1FTlQgc291cmNlICgjUENEQVRBKT5cblxuPCFFTEVNRU5UIHBoICgjUENEQVRBfGV4KSo+XG48IUFUVExJU1QgcGggbmFtZSBDREFUQSAjUkVRVUlSRUQ+XG5cbjwhRUxFTUVOVCBleCAoI1BDREFUQSk+YDtcblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geG1iTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX01FU1NBR0VfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeG1iIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtYldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzOiB4bWwuTm9kZVtdID0gW10pOiBzdHJpbmcge1xuICBjb25zdCBleGFtcGxlVmlzaXRvciA9IG5ldyBFeGFtcGxlVmlzaXRvcigpO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoKTtcbiAgY29uc3Qgcm9vdE5vZGUgPSBuZXcgeG1sLlRhZyhfTUVTU0FHRVNfVEFHKTtcblxuICBleGlzdGluZ05vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDIpLCBub2RlKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coZXhpc3RpbmdOb2Rlcyk7XG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtpZDogbWVzc2FnZS5pZH07XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgYXR0cnNbXCJkZXNjXCJdID0gbWVzc2FnZS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICBhdHRyc1tcIm1lYW5pbmdcIl0gPSBtZXNzYWdlLm1lYW5pbmc7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVGFnczogeG1sLlRhZ1tdID0gW107XG4gICAgbWVzc2FnZS5zb3VyY2VzLmZvckVhY2goKHNvdXJjZTogaTE4bi5NZXNzYWdlU3BhbikgPT4ge1xuICAgICAgc291cmNlVGFncy5wdXNoKFxuICAgICAgICBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIFtcbiAgICAgICAgICBuZXcgeG1sLlRleHQoXG4gICAgICAgICAgICBgJHtzb3VyY2UuZmlsZVBhdGh9OiR7c291cmNlLnN0YXJ0TGluZX0ke3NvdXJjZS5lbmRMaW5lICE9PSBzb3VyY2Uuc3RhcnRMaW5lID8gXCIsXCIgKyBzb3VyY2UuZW5kTGluZSA6IFwiXCJ9YFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByb290Tm9kZS5jaGlsZHJlbi5wdXNoKFxuICAgICAgbmV3IHhtbC5DUigyKSxcbiAgICAgIG5ldyB4bWwuVGFnKF9NRVNTQUdFX1RBRywgYXR0cnMsIFsuLi5zb3VyY2VUYWdzLCAuLi52aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKV0pXG4gICAgKTtcbiAgfSk7XG5cbiAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKCkpO1xuXG4gIHJldHVybiB4bWwuc2VyaWFsaXplKFtcbiAgICBuZXcgeG1sLkRlY2xhcmF0aW9uKHt2ZXJzaW9uOiBcIjEuMFwiLCBlbmNvZGluZzogXCJVVEYtOFwifSksXG4gICAgbmV3IHhtbC5DUigpLFxuICAgIG5ldyB4bWwuRG9jdHlwZShfTUVTU0FHRVNfVEFHLCBfRE9DVFlQRSksXG4gICAgbmV3IHhtbC5DUigpLFxuICAgIGV4YW1wbGVWaXNpdG9yLmFkZERlZmF1bHRFeGFtcGxlcyhyb290Tm9kZSksXG4gICAgbmV3IHhtbC5DUigpXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geG1iRGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBkaWdlc3QobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4bWJNYXBwZXIobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogUGxhY2Vob2xkZXJNYXBwZXIge1xuICByZXR1cm4gbmV3IFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyKG1lc3NhZ2UsIHRvUHVibGljTmFtZSk7XG59XG5cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRleHQodGV4dC52YWx1ZSldO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IHN0YXJ0RXggPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbbmV3IHhtbC5UZXh0KGA8JHtwaC50YWd9PmApXSk7XG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5zdGFydE5hbWV9LCBbc3RhcnRFeF0pO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbc3RhcnRUYWdQaF07XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VFeCA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtuZXcgeG1sLlRleHQoYDwvJHtwaC50YWd9PmApXSk7XG4gICAgY29uc3QgY2xvc2VUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5jbG9zZU5hbWV9LCBbY2xvc2VFeF0pO1xuXG4gICAgcmV0dXJuIFtzdGFydFRhZ1BoLCAuLi50aGlzLnNlcmlhbGl6ZShwaC5jaGlsZHJlbiksIGNsb3NlVGFnUGhdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW25ldyB4bWwuVGV4dChge3ske3BoLnZhbHVlfX19YCldKTtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnXSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW1xuICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICBgeyR7cGgudmFsdWUuZXhwcmVzc2lvbn0sICR7cGgudmFsdWUudHlwZX0sICR7T2JqZWN0LmtleXMocGgudmFsdWUuY2FzZXMpXG4gICAgICAgICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyBcIiB7Li4ufVwiKVxuICAgICAgICAgIC5qb2luKFwiIFwiKX19YFxuICAgICAgKVxuICAgIF0pO1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLm5hbWV9LCBbZXhUYWddKV07XG4gIH1cblxuICBzZXJpYWxpemUobm9kZXM6IGkxOG4uTm9kZVtdKTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5ub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGVjaW1hbERpZ2VzdChtZXNzYWdlKTtcbn1cblxuLy8gVEMgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG5vbi1lbXB0eSBleGFtcGxlIG9uIHBsYWNlaG9sZGVyc1xuY2xhc3MgRXhhbXBsZVZpc2l0b3IgaW1wbGVtZW50cyB4bWwuSVZpc2l0b3Ige1xuICBhZGREZWZhdWx0RXhhbXBsZXMobm9kZTogeG1sLk5vZGUpOiB4bWwuTm9kZSB7XG4gICAgbm9kZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGFnKHRhZzogeG1sLlRhZyk6IHZvaWQge1xuICAgIGlmICh0YWcubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgaWYgKCF0YWcuY2hpbGRyZW4gfHwgdGFnLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleFRleHQgPSBuZXcgeG1sLlRleHQodGFnLmF0dHJzW1wibmFtZVwiXSB8fCBcIi4uLlwiKTtcbiAgICAgICAgdGFnLmNoaWxkcmVuID0gW25ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtleFRleHRdKV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YWcuY2hpbGRyZW4pIHtcbiAgICAgIHRhZy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpOiBhbnkge1xuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgZWxlbWVudC5hdHRycy5mb3JFYWNoKChhdHRyOiBtbC5BdHRyaWJ1dGUpID0+IHtcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhZyA9IG5ldyB4bWwuVGFnKGVsZW1lbnQubmFtZSwgYXR0cnMsIGVsZW1lbnQuY2hpbGRyZW4gYXMgYW55KTtcbiAgICByZXR1cm4gdGhpcy52aXNpdFRhZyh0YWcpO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IHhtbC5UZXh0KTogdm9pZCB7fVxuXG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogeG1sLkRlY2xhcmF0aW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiB4bWwuRG9jdHlwZSk6IHZvaWQge31cbn1cblxuLy8gWE1CL1hUQiBwbGFjZWhvbGRlcnMgY2FuIG9ubHkgY29udGFpbiBBLVosIDAtOSBhbmQgX1xuZXhwb3J0IGZ1bmN0aW9uIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnRlcm5hbE5hbWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV9dL2csIFwiX1wiKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldFhtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QveG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuaW1wb3J0IHt4bWJNYXBwZXJ9IGZyb20gXCIuL3htYlwiO1xuXG5jb25zdCBfVFJBTlNMQVRJT05TX1RBRyA9IFwidHJhbnNsYXRpb25idW5kbGVcIjtcbmNvbnN0IF9UUkFOU0xBVElPTl9UQUcgPSBcInRyYW5zbGF0aW9uXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRiTG9hZFRvSTE4bihjb250ZW50OiBzdHJpbmcpOiBJMThuTWVzc2FnZXNCeUlkIHtcbiAgLy8geHRiIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4dGJQYXJzZXIgPSBuZXcgWHRiUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzOiBwYXJzZUVycm9yc30gPSB4dGJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgaWYgKHBhcnNlRXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke3BhcnNlRXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBub2Rlc1xuICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIC8vIEJlY2F1c2Ugd2Ugc2hvdWxkIGJlIGFibGUgdG8gbG9hZCB4dGIgZmlsZXMgdGhhdCByZWx5IG9uIGZlYXR1cmVzIG5vdCBzdXBwb3J0ZWQgYnkgYW5ndWxhcixcbiAgLy8gd2UgbmVlZCB0byBkZWxheSB0aGUgY29udmVyc2lvbiBvZiBodG1sIHRvIGkxOG4gbm9kZXMgc28gdGhhdCBub24gYW5ndWxhciBtZXNzYWdlcyBhcmUgbm90XG4gIC8vIGNvbnZlcnRlZFxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3QgdmFsdWVGbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtpMThuTm9kZXMsIGVycm9yc30gPSBjb252ZXJ0ZXIuY29udmVydChtc2dJZFRvSHRtbFttc2dJZF0pO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB4dGIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaTE4bk5vZGVzO1xuICAgIH07XG4gICAgY3JlYXRlTGF6eVByb3BlcnR5KGkxOG5Ob2Rlc0J5TXNnSWQsIG1zZ0lkLCB2YWx1ZUZuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGkxOG5Ob2Rlc0J5TXNnSWQ7XG59XG5cbmV4cG9ydCBjb25zdCB4dGJEaWdlc3QgPSBkaWdlc3Q7XG5cbmV4cG9ydCBjb25zdCB4dGJNYXBwZXIgPSB4bWJNYXBwZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhenlQcm9wZXJ0eShtZXNzYWdlczogYW55LCBpZDogc3RyaW5nLCB2YWx1ZUZuOiAoKSA9PiBhbnkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZuKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVzc2FnZXMsIGlkLCB7ZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWV9KTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNldDogXyA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3Qgb3ZlcndyaXRlIGFuIFhUQiB0cmFuc2xhdGlvblwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4dGIgZmlsZVxuY2xhc3MgWHRiUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2J1bmRsZURlcHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKHh0Yjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVuZGxlRGVwdGggPSAwO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICAvLyBXZSBjYW4gbm90IHBhcnNlIHRoZSBJQ1UgbWVzc2FnZXMgYXQgdGhpcyBwb2ludCBhcyBzb21lIG1lc3NhZ2VzIG1pZ2h0IG5vdCBvcmlnaW5hdGVcbiAgICAvLyBmcm9tIEFuZ3VsYXIgdGhhdCBjb3VsZCBub3QgYmUgbGV4J2QuXG4gICAgY29uc3QgeG1sID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZSh4dGIsIFwiXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuX2Vycm9ycyA9IHhtbC5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgeG1sLnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1RSQU5TTEFUSU9OU19UQUc6XG4gICAgICAgIHRoaXMuX2J1bmRsZURlcHRoKys7XG4gICAgICAgIGlmICh0aGlzLl9idW5kbGVEZXB0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1RSQU5TTEFUSU9OU19UQUd9PiBlbGVtZW50cyBjYW4gbm90IGJlIG5lc3RlZGApO1xuICAgICAgICB9XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICB0aGlzLl9idW5kbGVEZXB0aC0tO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVFJBTlNMQVRJT05fVEFHOlxuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19UUkFOU0xBVElPTl9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQhLCBpbm5lclRleHRFbmQhKTtcbiAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IGlubmVyVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIFwiVW5leHBlY3RlZCB0YWdcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG1sIG5vZGVzICh4dGIgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UobWVzc2FnZSwgXCJcIiwgdHJ1ZSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9XG4gICAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogbWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaChjID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKVxuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uUGxhY2Vob2xkZXIgfCBudWxsIHtcbiAgICBpZiAoZWwubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgY29uc3QgbmFtZUF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcIm5hbWVcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJuYW1lXCIgYXR0cmlidXRlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlckVycm9yIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBwdWJsaWMgaW5wdXQ6IHN0cmluZywgcHVibGljIGVyckxvY2F0aW9uOiBzdHJpbmcsIHB1YmxpYyBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMubWVzc2FnZSA9IGBQYXJzZXIgRXJyb3I6ICR7bWVzc2FnZX0gJHtlcnJMb2NhdGlvbn0gWyR7aW5wdXR9XSBpbiAke2N0eExvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogbnVtYmVyLCBwdWJsaWMgZW5kOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3BhbjogUGFyc2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkFTVFwiO1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHF1b3RlZCBleHByZXNzaW9uIG9mIHRoZSBmb3JtOlxuICpcbiAqIHF1b3RlID0gcHJlZml4IGA6YCB1bmludGVycHJldGVkRXhwcmVzc2lvblxuICogcHJlZml4ID0gaWRlbnRpZmllclxuICogdW5pbnRlcnByZXRlZEV4cHJlc3Npb24gPSBhcmJpdHJhcnkgc3RyaW5nXG4gKlxuICogQSBxdW90ZWQgZXhwcmVzc2lvbiBpcyBtZWFudCB0byBiZSBwcmUtcHJvY2Vzc2VkIGJ5IGFuIEFTVCB0cmFuc2Zvcm1lciB0aGF0XG4gKiBjb252ZXJ0cyBpdCBpbnRvIGFub3RoZXIgQVNUIHRoYXQgbm8gbG9uZ2VyIGNvbnRhaW5zIHF1b3RlZCBleHByZXNzaW9ucy5cbiAqIEl0IGlzIG1lYW50IHRvIGFsbG93IHRoaXJkLXBhcnR5IGRldmVsb3BlcnMgdG8gZXh0ZW5kIEFuZ3VsYXIgdGVtcGxhdGVcbiAqIGV4cHJlc3Npb24gbGFuZ3VhZ2UuIFRoZSBgdW5pbnRlcnByZXRlZEV4cHJlc3Npb25gIHBhcnQgb2YgdGhlIHF1b3RlIGlzXG4gKiB0aGVyZWZvcmUgbm90IGludGVycHJldGVkIGJ5IHRoZSBBbmd1bGFyJ3Mgb3duIGV4cHJlc3Npb24gcGFyc2VyLlxuICovXG5leHBvcnQgY2xhc3MgUXVvdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBwcmVmaXg6IHN0cmluZywgcHVibGljIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uOiBzdHJpbmcsIHB1YmxpYyBsb2NhdGlvbjogYW55KSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRRdW90ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIlF1b3RlXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5RXhwciBleHRlbmRzIEFTVCB7XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcGxpY2l0UmVjZWl2ZXIgZXh0ZW5kcyBBU1Qge1xuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEltcGxpY2l0UmVjZWl2ZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBleHByZXNzaW9ucyBzZXBhcmF0ZWQgYnkgYSBzZW1pY29sb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFpbiBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb25zOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hhaW4odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgY29uZGl0aW9uOiBBU1QsIHB1YmxpYyB0cnVlRXhwOiBBU1QsIHB1YmxpYyBmYWxzZUV4cDogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDb25kaXRpb25hbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVdyaXRlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5V3JpdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVQcm9wZXJ0eVJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTYWZlUHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXllZFJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXllZFJlYWQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtleWVkV3JpdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNULCBwdWJsaWMgdmFsdWU6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5ZWRXcml0ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluZGluZ1BpcGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHA6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQaXBlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsUHJpbWl0aXZlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbFByaW1pdGl2ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEFycmF5IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsQXJyYXkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXRlcmFsTWFwS2V5IHtcbiAga2V5OiBzdHJpbmc7XG4gIHF1b3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxNYXAgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBrZXlzOiBMaXRlcmFsTWFwS2V5W10sIHB1YmxpYyB2YWx1ZXM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsTWFwKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgc3RyaW5nczogYW55W10sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEludGVycG9sYXRpb24odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nLCBwdWJsaWMgbGVmdDogQVNULCBwdWJsaWMgcmlnaHQ6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmVmaXhOb3QgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByZWZpeE5vdCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9uTnVsbEFzc2VydCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb246IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Tm9uTnVsbEFzc2VydCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kQ2FsbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TWV0aG9kQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZU1ldGhvZENhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFNhZmVNZXRob2RDYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkNhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyB0YXJnZXQ6IEFTVCB8IG51bGwsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RnVuY3Rpb25DYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RXaXRoU291cmNlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFzdDogQVNULCBwdWJsaWMgc291cmNlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgbG9jYXRpb246IHN0cmluZywgcHVibGljIGVycm9yczogUGFyc2VyRXJyb3JbXSkge1xuICAgIHN1cGVyKG5ldyBQYXJzZVNwYW4oMCwgc291cmNlID09IG51bGwgPyAwIDogc291cmNlLmxlbmd0aCkpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLnNvdXJjZX0gaW4gJHt0aGlzLmxvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQmluZGluZyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNwYW4sXG4gICAgcHVibGljIGtleTogc3RyaW5nLFxuICAgIHB1YmxpYyBrZXlJc1ZhcjogYm9vbGVhbixcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBBU1RXaXRoU291cmNlXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Pyhhc3Q6IEFTVCwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Vyc2l2ZUFzdFZpc2l0b3IgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmxlZnQudmlzaXQodGhpcyk7XG4gICAgYXN0LnJpZ2h0LnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuY29uZGl0aW9uLnZpc2l0KHRoaXMpO1xuICAgIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5mYWxzZUV4cC52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuZXhwLnZpc2l0KHRoaXMpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC50YXJnZXQhLnZpc2l0KHRoaXMpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5vYmoudmlzaXQodGhpcyk7XG4gICAgYXN0LmtleS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5vYmoudmlzaXQodGhpcyk7XG4gICAgYXN0LmtleS52aXNpdCh0aGlzKTtcbiAgICBhc3QudmFsdWUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGFzdC52YWx1ZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdEFsbChhc3RzOiBBU1RbXSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3RzLmZvckVhY2goYXN0ID0+IGFzdC52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3RUcmFuc2Zvcm1lciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgSW50ZXJwb2xhdGlvbihhc3Quc3BhbiwgYXN0LnN0cmluZ3MsIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZShhc3Quc3BhbiwgYXN0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlSZWFkKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUpO1xuICB9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IE1ldGhvZENhbGwoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVNZXRob2RDYWxsKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ2FsbChhc3Quc3BhbiwgYXN0LnRhcmdldCEudmlzaXQodGhpcyksIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbEFycmF5KGFzdC5zcGFuLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxNYXAoYXN0LnNwYW4sIGFzdC5rZXlzLCB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMpKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQmluYXJ5KGFzdC5zcGFuLCBhc3Qub3BlcmF0aW9uLCBhc3QubGVmdC52aXNpdCh0aGlzKSwgYXN0LnJpZ2h0LnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJlZml4Tm90KGFzdC5zcGFuLCBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTm9uTnVsbEFzc2VydChhc3Quc3BhbiwgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWwoYXN0LnNwYW4sIGFzdC5jb25kaXRpb24udmlzaXQodGhpcyksIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpLCBhc3QuZmFsc2VFeHAudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCaW5kaW5nUGlwZShhc3Quc3BhbiwgYXN0LmV4cC52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRSZWFkKGFzdC5zcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBLZXllZFdyaXRlKGFzdC5zcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRBbGwoYXN0czogYW55W10pOiBhbnlbXSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEFycmF5KGFzdHMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHJlc1tpXSA9IGFzdHNbaV0udmlzaXQodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBDaGFpbihhc3Quc3BhbiwgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFF1b3RlKGFzdC5zcGFuLCBhc3QucHJlZml4LCBhc3QudW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGFzdC5sb2NhdGlvbik7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4uL2FzdC9jaGFyc1wiO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICBDaGFyYWN0ZXIsXG4gIElkZW50aWZpZXIsXG4gIEtleXdvcmQsXG4gIFN0cmluZyxcbiAgT3BlcmF0b3IsXG4gIE51bWJlcixcbiAgRXJyb3Jcbn1cblxuY29uc3QgS0VZV09SRFMgPSBbXCJ2YXJcIiwgXCJsZXRcIiwgXCJhc1wiLCBcIm51bGxcIiwgXCJ1bmRlZmluZWRcIiwgXCJ0cnVlXCIsIFwiZmFsc2VcIiwgXCJpZlwiLCBcImVsc2VcIiwgXCJ0aGlzXCJdO1xuXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xuICB0b2tlbml6ZSh0ZXh0OiBzdHJpbmcpOiBUb2tlbltdIHtcbiAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIodGV4dCk7XG4gICAgY29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG4gICAgbGV0IHRva2VuID0gc2Nhbm5lci5zY2FuVG9rZW4oKTtcbiAgICB3aGlsZSAodG9rZW4gIT0gbnVsbCkge1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSBzY2FubmVyLnNjYW5Ub2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgbnVtVmFsdWU6IG51bWJlciwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcpIHt9XG5cbiAgaXNDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLkNoYXJhY3RlciAmJiB0aGlzLm51bVZhbHVlID09PSBjb2RlO1xuICB9XG5cbiAgaXNOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLk51bWJlcjtcbiAgfVxuXG4gIGlzU3RyaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5TdHJpbmc7XG4gIH1cblxuICBpc09wZXJhdG9yKG9wZXJhdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gb3BlcmF0ZXI7XG4gIH1cblxuICBpc0lkZW50aWZpZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLklkZW50aWZpZXI7XG4gIH1cblxuICBpc0tleXdvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQ7XG4gIH1cblxuICBpc0tleXdvcmRMZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJsZXRcIjtcbiAgfVxuXG4gIGlzS2V5d29yZEFzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwiYXNcIjtcbiAgfVxuXG4gIGlzS2V5d29yZE51bGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJudWxsXCI7XG4gIH1cblxuICBpc0tleXdvcmRVbmRlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgfVxuXG4gIGlzS2V5d29yZFRydWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ0cnVlXCI7XG4gIH1cblxuICBpc0tleXdvcmRGYWxzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcImZhbHNlXCI7XG4gIH1cblxuICBpc0tleXdvcmRUaGlzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidGhpc1wiO1xuICB9XG5cbiAgaXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuRXJyb3I7XG4gIH1cblxuICB0b051bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXIgPyB0aGlzLm51bVZhbHVlIDogLTE7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBUb2tlblR5cGUuQ2hhcmFjdGVyOlxuICAgICAgY2FzZSBUb2tlblR5cGUuSWRlbnRpZmllcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLktleXdvcmQ6XG4gICAgICBjYXNlIFRva2VuVHlwZS5PcGVyYXRvcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLlN0cmluZzpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLkVycm9yOlxuICAgICAgICByZXR1cm4gdGhpcy5zdHJWYWx1ZTtcbiAgICAgIGNhc2UgVG9rZW5UeXBlLk51bWJlcjpcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXdDaGFyYWN0ZXJUb2tlbihpbmRleDogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5DaGFyYWN0ZXIsIGNvZGUsIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpO1xufVxuXG5mdW5jdGlvbiBuZXdJZGVudGlmaWVyVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuSWRlbnRpZmllciwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld0tleXdvcmRUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5LZXl3b3JkLCAwLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gbmV3T3BlcmF0b3JUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5PcGVyYXRvciwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld1N0cmluZ1Rva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLlN0cmluZywgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld051bWJlclRva2VuKGluZGV4OiBudW1iZXIsIG46IG51bWJlcik6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLk51bWJlciwgbiwgXCJcIik7XG59XG5cbmZ1bmN0aW9uIG5ld0Vycm9yVG9rZW4oaW5kZXg6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuRXJyb3IsIDAsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgY29uc3QgRU9GOiBUb2tlbiA9IG5ldyBUb2tlbigtMSwgVG9rZW5UeXBlLkNoYXJhY3RlciwgMCwgXCJcIik7XG5cbmNsYXNzIFNjYW5uZXIge1xuICBsZW5ndGg6IG51bWJlcjtcbiAgcGVlayA9IDA7XG4gIGluZGV4ID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5wZWVrID0gKyt0aGlzLmluZGV4ID49IHRoaXMubGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNjYW5Ub2tlbigpOiBUb2tlbiB8IG51bGwge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dDtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICBsZXQgcGVlayA9IHRoaXMucGVlaztcbiAgICBsZXQgaW5kZXggPSB0aGlzLmluZGV4O1xuXG4gICAgLy8gU2tpcCB3aGl0ZXNwYWNlLlxuICAgIHdoaWxlIChwZWVrIDw9IGNoYXJzLiRTUEFDRSkge1xuICAgICAgaWYgKCsraW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIHBlZWsgPSBjaGFycy4kRU9GO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZWsgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBlZWsgPSBwZWVrO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBpZGVudGlmaWVycyBhbmQgbnVtYmVycy5cbiAgICBpZiAoaXNJZGVudGlmaWVyU3RhcnQocGVlaykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5JZGVudGlmaWVyKCk7XG4gICAgfVxuICAgIGlmIChjaGFycy5pc0RpZ2l0KHBlZWspKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuTnVtYmVyKGluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gaW5kZXg7XG4gICAgc3dpdGNoIChwZWVrKSB7XG4gICAgICBjYXNlIGNoYXJzLiRQRVJJT0Q6XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICByZXR1cm4gY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspID8gdGhpcy5zY2FuTnVtYmVyKHN0YXJ0KSA6IG5ld0NoYXJhY3RlclRva2VuKHN0YXJ0LCBjaGFycy4kUEVSSU9EKTtcbiAgICAgIGNhc2UgY2hhcnMuJExQQVJFTjpcbiAgICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICAgIGNhc2UgY2hhcnMuJExCUkFDRTpcbiAgICAgIGNhc2UgY2hhcnMuJFJCUkFDRTpcbiAgICAgIGNhc2UgY2hhcnMuJExCUkFDS0VUOlxuICAgICAgY2FzZSBjaGFycy4kUkJSQUNLRVQ6XG4gICAgICBjYXNlIGNoYXJzLiRDT01NQTpcbiAgICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgICAgY2FzZSBjaGFycy4kU0VNSUNPTE9OOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ2hhcmFjdGVyKHN0YXJ0LCBwZWVrKTtcbiAgICAgIGNhc2UgY2hhcnMuJFNROlxuICAgICAgY2FzZSBjaGFycy4kRFE6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5TdHJpbmcoKTtcbiAgICAgIGNhc2UgY2hhcnMuJEhBU0g6XG4gICAgICBjYXNlIGNoYXJzLiRQTFVTOlxuICAgICAgY2FzZSBjaGFycy4kTUlOVVM6XG4gICAgICBjYXNlIGNoYXJzLiRTVEFSOlxuICAgICAgY2FzZSBjaGFycy4kU0xBU0g6XG4gICAgICBjYXNlIGNoYXJzLiRQRVJDRU5UOlxuICAgICAgY2FzZSBjaGFycy4kQ0FSRVQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5PcGVyYXRvcihzdGFydCwgU3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKSk7XG4gICAgICBjYXNlIGNoYXJzLiRRVUVTVElPTjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCI/XCIsIGNoYXJzLiRQRVJJT0QsIFwiLlwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJExUOlxuICAgICAgY2FzZSBjaGFycy4kR1Q6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlayksIGNoYXJzLiRFUSwgXCI9XCIpO1xuICAgICAgY2FzZSBjaGFycy4kQkFORzpcbiAgICAgIGNhc2UgY2hhcnMuJEVROlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspLCBjaGFycy4kRVEsIFwiPVwiLCBjaGFycy4kRVEsIFwiPVwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEFNUEVSU0FORDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCImXCIsIGNoYXJzLiRBTVBFUlNBTkQsIFwiJlwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEJBUjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCJ8XCIsIGNoYXJzLiRCQVIsIFwifFwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJE5CU1A6XG4gICAgICAgIHdoaWxlIChjaGFycy5pc1doaXRlc3BhY2UodGhpcy5wZWVrKSkge1xuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Ub2tlbigpO1xuICAgIH1cblxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBbJHtTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspfV1gLCAwKTtcbiAgfVxuXG4gIHNjYW5DaGFyYWN0ZXIoc3RhcnQ6IG51bWJlciwgY29kZTogbnVtYmVyKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgY29kZSk7XG4gIH1cblxuICBzY2FuT3BlcmF0b3Ioc3RhcnQ6IG51bWJlciwgc3RyOiBzdHJpbmcpOiBUb2tlbiB7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG5ld09wZXJhdG9yVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICAvKipcbiAgICogVG9rZW5pemUgYSAyLzMgY2hhciBsb25nIG9wZXJhdG9yXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydCBzdGFydCBpbmRleCBpbiB0aGUgZXhwcmVzc2lvblxuICAgKiBAcGFyYW0gb25lIGZpcnN0IHN5bWJvbCAoYWx3YXlzIHBhcnQgb2YgdGhlIG9wZXJhdG9yKVxuICAgKiBAcGFyYW0gdHdvQ29kZSBjb2RlIHBvaW50IGZvciB0aGUgc2Vjb25kIHN5bWJvbFxuICAgKiBAcGFyYW0gdHdvIHNlY29uZCBzeW1ib2wgKHBhcnQgb2YgdGhlIG9wZXJhdG9yIHdoZW4gdGhlIHNlY29uZCBjb2RlIHBvaW50IG1hdGNoZXMpXG4gICAqIEBwYXJhbSB0aHJlZUNvZGUgY29kZSBwb2ludCBmb3IgdGhlIHRoaXJkIHN5bWJvbFxuICAgKiBAcGFyYW0gdGhyZWUgdGhpcmQgc3ltYm9sIChwYXJ0IG9mIHRoZSBvcGVyYXRvciB3aGVuIHByb3ZpZGVkIGFuZCBtYXRjaGVzIHNvdXJjZSBleHByZXNzaW9uKVxuICAgKi9cbiAgc2NhbkNvbXBsZXhPcGVyYXRvcihcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIG9uZTogc3RyaW5nLFxuICAgIHR3b0NvZGU6IG51bWJlcixcbiAgICB0d286IHN0cmluZyxcbiAgICB0aHJlZUNvZGU/OiBudW1iZXIsXG4gICAgdGhyZWU/OiBzdHJpbmdcbiAgKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIGxldCBzdHI6IHN0cmluZyA9IG9uZTtcbiAgICBpZiAodGhpcy5wZWVrID09PSB0d29Db2RlKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHN0ciArPSB0d287XG4gICAgfVxuICAgIGlmICh0aHJlZUNvZGUgIT0gbnVsbCAmJiB0aGlzLnBlZWsgPT09IHRocmVlQ29kZSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBzdHIgKz0gdGhyZWU7XG4gICAgfVxuICAgIHJldHVybiBuZXdPcGVyYXRvclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgc2NhbklkZW50aWZpZXIoKTogVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHdoaWxlIChpc0lkZW50aWZpZXJQYXJ0KHRoaXMucGVlaykpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gS0VZV09SRFMuaW5kZXhPZihzdHIpID4gLTEgPyBuZXdLZXl3b3JkVG9rZW4oc3RhcnQsIHN0cikgOiBuZXdJZGVudGlmaWVyVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICBzY2FuTnVtYmVyKHN0YXJ0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgbGV0IHNpbXBsZTogYm9vbGVhbiA9IHRoaXMuaW5kZXggPT09IHN0YXJ0O1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIGluaXRpYWwgZGlnaXQuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykpIHtcbiAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kUEVSSU9EKSB7XG4gICAgICAgIHNpbXBsZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpc0V4cG9uZW50U3RhcnQodGhpcy5wZWVrKSkge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgaWYgKGlzRXhwb25lbnRTaWduKHRoaXMucGVlaykpIHtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKFwiSW52YWxpZCBleHBvbmVudFwiLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgc2ltcGxlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gc2ltcGxlID8gcGFyc2VJbnRBdXRvUmFkaXgoc3RyKSA6IHBhcnNlRmxvYXQoc3RyKTtcbiAgICByZXR1cm4gbmV3TnVtYmVyVG9rZW4oc3RhcnQsIHZhbHVlKTtcbiAgfVxuXG4gIHNjYW5TdHJpbmcoKTogVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHF1b3RlOiBudW1iZXIgPSB0aGlzLnBlZWs7XG4gICAgdGhpcy5hZHZhbmNlKCk7IC8vIFNraXAgaW5pdGlhbCBxdW90ZS5cblxuICAgIGxldCBidWZmZXIgPSBcIlwiO1xuICAgIGxldCBtYXJrZXI6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMuaW5wdXQ7XG5cbiAgICB3aGlsZSAodGhpcy5wZWVrICE9PSBxdW90ZSkge1xuICAgICAgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJEJBQ0tTTEFTSCkge1xuICAgICAgICBidWZmZXIgKz0gaW5wdXQuc3Vic3RyaW5nKG1hcmtlciwgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICBsZXQgdW5lc2NhcGVkQ29kZTogbnVtYmVyO1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBUUzIuMS1pbnRyb2R1Y2VkIHR5cGUgc3RyaWN0bmVzc1xuICAgICAgICB0aGlzLnBlZWsgPSB0aGlzLnBlZWs7XG4gICAgICAgIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiR1KSB7XG4gICAgICAgICAgLy8gNCBjaGFyYWN0ZXIgaGV4IGNvZGUgZm9yIHVuaWNvZGUgY2hhcmFjdGVyLlxuICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgaWYgKC9eWzAtOWEtZl0rJC9pLnRlc3QoaGV4KSkge1xuICAgICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihgSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUke2hleH1dYCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHVuZXNjYXBlKHRoaXMucGVlayk7XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodW5lc2NhcGVkQ29kZSk7XG4gICAgICAgIG1hcmtlciA9IHRoaXMuaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJEVPRikge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3Q6IHN0cmluZyA9IGlucHV0LnN1YnN0cmluZyhtYXJrZXIsIHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIHRlcm1pbmF0aW5nIHF1b3RlLlxuXG4gICAgcmV0dXJuIG5ld1N0cmluZ1Rva2VuKHN0YXJ0LCBidWZmZXIgKyBsYXN0KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7XG4gICAgcmV0dXJuIG5ld0Vycm9yVG9rZW4ocG9zaXRpb24sIGBMZXhlciBFcnJvcjogJHttZXNzYWdlfSBhdCBjb2x1bW4gJHtwb3NpdGlvbn0gaW4gZXhwcmVzc2lvbiBbJHt0aGlzLmlucHV0fV1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAoY2hhcnMuJGEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiR6KSB8fFxuICAgIChjaGFycy4kQSA8PSBjb2RlICYmIGNvZGUgPD0gY2hhcnMuJFopIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJF8gfHxcbiAgICBjb2RlID09PSBjaGFycy4kJFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIoaW5wdXQpO1xuICBpZiAoIWlzSWRlbnRpZmllclN0YXJ0KHNjYW5uZXIucGVlaykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2Nhbm5lci5hZHZhbmNlKCk7XG4gIHdoaWxlIChzY2FubmVyLnBlZWsgIT09IGNoYXJzLiRFT0YpIHtcbiAgICBpZiAoIWlzSWRlbnRpZmllclBhcnQoc2Nhbm5lci5wZWVrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzY2FubmVyLmFkdmFuY2UoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyUGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoYXJzLmlzQXNjaWlMZXR0ZXIoY29kZSkgfHwgY2hhcnMuaXNEaWdpdChjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kXyB8fCBjb2RlID09PSBjaGFycy4kJDtcbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudFN0YXJ0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJGUgfHwgY29kZSA9PT0gY2hhcnMuJEU7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb25lbnRTaWduKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJE1JTlVTIHx8IGNvZGUgPT09IGNoYXJzLiRQTFVTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNRdW90ZShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTUSB8fCBjb2RlID09PSBjaGFycy4kRFEgfHwgY29kZSA9PT0gY2hhcnMuJEJUO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRuOlxuICAgICAgcmV0dXJuIGNoYXJzLiRMRjtcbiAgICBjYXNlIGNoYXJzLiRmOlxuICAgICAgcmV0dXJuIGNoYXJzLiRGRjtcbiAgICBjYXNlIGNoYXJzLiRyOlxuICAgICAgcmV0dXJuIGNoYXJzLiRDUjtcbiAgICBjYXNlIGNoYXJzLiR0OlxuICAgICAgcmV0dXJuIGNoYXJzLiRUQUI7XG4gICAgY2FzZSBjaGFycy4kdjpcbiAgICAgIHJldHVybiBjaGFycy4kVlRBQjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGNvZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRBdXRvUmFkaXgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0LCAxMCk7XG4gIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyIGxpdGVyYWwgd2hlbiBwYXJzaW5nIFwiICsgdGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4uL2FzdC9jaGFyc1wiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge2VzY2FwZVJlZ0V4cH0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5cbmltcG9ydCB7XG4gIEFTVCxcbiAgQVNUV2l0aFNvdXJjZSxcbiAgQXN0VmlzaXRvcixcbiAgQmluYXJ5LFxuICBCaW5kaW5nUGlwZSxcbiAgQ2hhaW4sXG4gIENvbmRpdGlvbmFsLFxuICBFbXB0eUV4cHIsXG4gIEZ1bmN0aW9uQ2FsbCxcbiAgSW1wbGljaXRSZWNlaXZlcixcbiAgSW50ZXJwb2xhdGlvbixcbiAgS2V5ZWRSZWFkLFxuICBLZXllZFdyaXRlLFxuICBMaXRlcmFsQXJyYXksXG4gIExpdGVyYWxNYXAsXG4gIExpdGVyYWxNYXBLZXksXG4gIExpdGVyYWxQcmltaXRpdmUsXG4gIE1ldGhvZENhbGwsXG4gIE5vbk51bGxBc3NlcnQsXG4gIFBhcnNlU3BhbixcbiAgUGFyc2VyRXJyb3IsXG4gIFByZWZpeE5vdCxcbiAgUHJvcGVydHlSZWFkLFxuICBQcm9wZXJ0eVdyaXRlLFxuICBRdW90ZSxcbiAgU2FmZU1ldGhvZENhbGwsXG4gIFNhZmVQcm9wZXJ0eVJlYWQsXG4gIFRlbXBsYXRlQmluZGluZ1xufSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7RU9GLCBMZXhlciwgVG9rZW4sIFRva2VuVHlwZSwgaXNJZGVudGlmaWVyLCBpc1F1b3RlfSBmcm9tIFwiLi9sZXhlclwiO1xuXG5leHBvcnQgY2xhc3MgU3BsaXRJbnRlcnBvbGF0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0cmluZ3M6IHN0cmluZ1tdLCBwdWJsaWMgZXhwcmVzc2lvbnM6IHN0cmluZ1tdLCBwdWJsaWMgb2Zmc2V0czogbnVtYmVyW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZUJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSwgcHVibGljIHdhcm5pbmdzOiBzdHJpbmdbXSwgcHVibGljIGVycm9yczogUGFyc2VyRXJyb3JbXSkge31cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IFJlZ0V4cCB7XG4gIGNvbnN0IHBhdHRlcm4gPSBlc2NhcGVSZWdFeHAoY29uZmlnLnN0YXJ0KSArIFwiKFtcXFxcc1xcXFxTXSo/KVwiICsgZXNjYXBlUmVnRXhwKGNvbmZpZy5lbmQpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBcImdcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBwcml2YXRlIGVycm9yczogUGFyc2VyRXJyb3JbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xleGVyOiBMZXhlcikge31cblxuICBwYXJzZUFjdGlvbihcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBhbnksXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgdGhpcy5fY2hlY2tOb0ludGVycG9sYXRpb24oaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpO1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpKTtcbiAgICBjb25zdCBhc3QgPSBuZXcgUGFyc2VBU1QoXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdG9rZW5zLFxuICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgdHJ1ZSxcbiAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoXG4gICAgKS5wYXJzZUNoYWluKCk7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKGFzdCwgaW5wdXQsIGxvY2F0aW9uLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwYXJzZUJpbmRpbmcoXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIGNvbnN0IGFzdCA9IHRoaXMuX3BhcnNlQmluZGluZ0FzdChpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcGFyc2VTaW1wbGVCaW5kaW5nKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZUJpbmRpbmdBc3QoaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBlcnJvcnMgPSBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlci5jaGVjayhhc3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoYEhvc3QgYmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluICR7ZXJyb3JzLmpvaW4oXCIgXCIpfWAsIGlucHV0LCBsb2NhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwb3J0RXJyb3IobWVzc2FnZTogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBlcnJMb2NhdGlvbjogc3RyaW5nLCBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKG1lc3NhZ2UsIGlucHV0LCBlcnJMb2NhdGlvbiwgY3R4TG9jYXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQmluZGluZ0FzdChpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogc3RyaW5nLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogQVNUIHtcbiAgICAvLyBRdW90ZXMgZXhwcmVzc2lvbnMgdXNlIDNyZC1wYXJ0eSBleHByZXNzaW9uIGxhbmd1YWdlLiBXZSBkb24ndCB3YW50IHRvIHVzZVxuICAgIC8vIG91ciBsZXhlciBvciBwYXJzZXIgZm9yIHRoYXQsIHNvIHdlIGNoZWNrIGZvciB0aGF0IGFoZWFkIG9mIHRpbWUuXG4gICAgY29uc3QgcXVvdGUgPSB0aGlzLl9wYXJzZVF1b3RlKGlucHV0LCBsb2NhdGlvbik7XG5cbiAgICBpZiAocXVvdGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHF1b3RlO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KTtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShzb3VyY2VUb0xleCk7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUFTVChcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0b2tlbnMsXG4gICAgICBzb3VyY2VUb0xleC5sZW5ndGgsXG4gICAgICBmYWxzZSxcbiAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoXG4gICAgKS5wYXJzZUNoYWluKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZVF1b3RlKGlucHV0OiBzdHJpbmcgfCBudWxsLCBsb2NhdGlvbjogYW55KTogQVNUIHwgbnVsbCB7XG4gICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4U2VwYXJhdG9ySW5kZXggPSBpbnB1dC5pbmRleE9mKFwiOlwiKTtcbiAgICBpZiAocHJlZml4U2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4ID0gaW5wdXQuc3Vic3RyaW5nKDAsIHByZWZpeFNlcGFyYXRvckluZGV4KS50cmltKCk7XG4gICAgaWYgKCFpc0lkZW50aWZpZXIocHJlZml4KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uID0gaW5wdXQuc3Vic3RyaW5nKHByZWZpeFNlcGFyYXRvckluZGV4ICsgMSk7XG4gICAgcmV0dXJuIG5ldyBRdW90ZShuZXcgUGFyc2VTcGFuKDAsIGlucHV0Lmxlbmd0aCksIHByZWZpeCwgdW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGxvY2F0aW9uKTtcbiAgfVxuXG4gIHBhcnNlVGVtcGxhdGVCaW5kaW5ncyhwcmVmaXhUb2tlbjogc3RyaW5nIHwgbnVsbCwgaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IGFueSk6IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShpbnB1dCk7XG4gICAgaWYgKHByZWZpeFRva2VuKSB7XG4gICAgICAvLyBQcmVmaXggdGhlIHRva2VucyB3aXRoIHRoZSB0b2tlbnMgZnJvbSBwcmVmaXhUb2tlbiBidXQgaGF2ZSB0aGVtIHRha2Ugbm8gc3BhY2UgKDAgaW5kZXgpLlxuICAgICAgY29uc3QgcHJlZml4VG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUocHJlZml4VG9rZW4pLm1hcCh0ID0+IHtcbiAgICAgICAgdC5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSk7XG4gICAgICB0b2tlbnMudW5zaGlmdCguLi5wcmVmaXhUb2tlbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNlQVNUKGlucHV0LCBsb2NhdGlvbiwgdG9rZW5zLCBpbnB1dC5sZW5ndGgsIGZhbHNlLCB0aGlzLmVycm9ycywgMCkucGFyc2VUZW1wbGF0ZUJpbmRpbmdzKCk7XG4gIH1cblxuICBwYXJzZUludGVycG9sYXRpb24oXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2UgfCBudWxsIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc3BsaXRJbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgaWYgKHNwbGl0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uczogQVNUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQuZXhwcmVzc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25UZXh0ID0gc3BsaXQuZXhwcmVzc2lvbnNbaV07XG4gICAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoZXhwcmVzc2lvblRleHQpO1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoc291cmNlVG9MZXgpO1xuICAgICAgY29uc3QgYXN0ID0gbmV3IFBhcnNlQVNUKFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGhpcy5lcnJvcnMsXG4gICAgICAgIHNwbGl0Lm9mZnNldHNbaV0gKyAoZXhwcmVzc2lvblRleHQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoKVxuICAgICAgKS5wYXJzZUNoYWluKCk7XG4gICAgICBleHByZXNzaW9ucy5wdXNoKGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKFxuICAgICAgbmV3IEludGVycG9sYXRpb24obmV3IFBhcnNlU3BhbigwLCBpbnB1dCA9PT0gbnVsbCA/IDAgOiBpbnB1dC5sZW5ndGgpLCBzcGxpdC5zdHJpbmdzLCBleHByZXNzaW9ucyksXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5lcnJvcnNcbiAgICApO1xuICB9XG5cbiAgc3BsaXRJbnRlcnBvbGF0aW9uKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBTcGxpdEludGVycG9sYXRpb24gfCBudWxsIHtcbiAgICBjb25zdCByZWdleHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgb2Zmc2V0czogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0OiBzdHJpbmcgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAvLyBmaXhlZCBzdHJpbmdcbiAgICAgICAgc3RyaW5ncy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXQgKz0gcGFydC5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKHBhcnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2Zmc2V0ICs9IGludGVycG9sYXRpb25Db25maWcuc3RhcnQubGVuZ3RoO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHBhcnQubGVuZ3RoICsgaW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgXCJCbGFuayBleHByZXNzaW9ucyBhcmUgbm90IGFsbG93ZWQgaW4gaW50ZXJwb2xhdGVkIHN0cmluZ3NcIixcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBgYXQgY29sdW1uICR7dGhpcy5fZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihwYXJ0cywgaSwgaW50ZXJwb2xhdGlvbkNvbmZpZyl9IGluYCxcbiAgICAgICAgICBsb2NhdGlvblxuICAgICAgICApO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKFwiJGltcGxpY3RcIik7XG4gICAgICAgIG9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFNwbGl0SW50ZXJwb2xhdGlvbihzdHJpbmdzLCBleHByZXNzaW9ucywgb2Zmc2V0cyk7XG4gIH1cblxuICB3cmFwTGl0ZXJhbFByaW1pdGl2ZShpbnB1dDogc3RyaW5nIHwgbnVsbCwgbG9jYXRpb246IGFueSk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShcbiAgICAgIG5ldyBMaXRlcmFsUHJpbWl0aXZlKG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQgPT09IG51bGwgPyAwIDogaW5wdXQubGVuZ3RoKSwgaW5wdXQpLFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuZXJyb3JzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0cmlwQ29tbWVudHMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaSA9IHRoaXMuX2NvbW1lbnRTdGFydChpbnB1dCk7XG4gICAgcmV0dXJuIGkgIT0gbnVsbCA/IGlucHV0LnN1YnN0cmluZygwLCBpKS50cmltKCkgOiBpbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1lbnRTdGFydChpbnB1dDogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgbGV0IG91dGVyUXVvdGU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gaW5wdXQuY2hhckNvZGVBdChpKTtcbiAgICAgIGNvbnN0IG5leHRDaGFyID0gaW5wdXQuY2hhckNvZGVBdChpICsgMSk7XG5cbiAgICAgIGlmIChjaGFyID09PSBjaGFycy4kU0xBU0ggJiYgbmV4dENoYXIgPT09IGNoYXJzLiRTTEFTSCAmJiBvdXRlclF1b3RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3V0ZXJRdW90ZSA9PT0gY2hhcikge1xuICAgICAgICBvdXRlclF1b3RlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAob3V0ZXJRdW90ZSA9PT0gbnVsbCAmJiBpc1F1b3RlKGNoYXIpKSB7XG4gICAgICAgIG91dGVyUXVvdGUgPSBjaGFyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBhbnksIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiB2b2lkIHtcbiAgICBjb25zdCByZWdleHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgYEdvdCBpbnRlcnBvbGF0aW9uICgke2ludGVycG9sYXRpb25Db25maWcuc3RhcnR9JHtpbnRlcnBvbGF0aW9uQ29uZmlnLmVuZH0pIHdoZXJlIGV4cHJlc3Npb24gd2FzIGV4cGVjdGVkYCxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGBhdCBjb2x1bW4gJHt0aGlzLl9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKHBhcnRzLCAxLCBpbnRlcnBvbGF0aW9uQ29uZmlnKX0gaW5gLFxuICAgICAgICBsb2NhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKFxuICAgIHBhcnRzOiBzdHJpbmdbXSxcbiAgICBwYXJ0SW5FcnJJZHg6IG51bWJlcixcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnXG4gICk6IG51bWJlciB7XG4gICAgbGV0IGVyckxvY2F0aW9uID0gXCJcIjtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcnRJbkVycklkeDsgaisrKSB7XG4gICAgICBlcnJMb2NhdGlvbiArPSBqICUgMiA9PT0gMCA/IHBhcnRzW2pdIDogYCR7aW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydH0ke3BhcnRzW2pdfSR7aW50ZXJwb2xhdGlvbkNvbmZpZy5lbmR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTG9jYXRpb24ubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZUFTVCB7XG4gIHByaXZhdGUgcnBhcmVuc0V4cGVjdGVkID0gMDtcbiAgcHJpdmF0ZSByYnJhY2tldHNFeHBlY3RlZCA9IDA7XG4gIHByaXZhdGUgcmJyYWNlc0V4cGVjdGVkID0gMDtcblxuICBpbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGlucHV0OiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2F0aW9uOiBhbnksXG4gICAgcHVibGljIHRva2VuczogVG9rZW5bXSxcbiAgICBwdWJsaWMgaW5wdXRMZW5ndGg6IG51bWJlcixcbiAgICBwdWJsaWMgcGFyc2VBY3Rpb246IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBlcnJvcnM6IFBhcnNlckVycm9yW10sXG4gICAgcHJpdmF0ZSBvZmZzZXQ6IG51bWJlclxuICApIHt9XG5cbiAgcGVlayhvZmZzZXQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBjb25zdCBpID0gdGhpcy5pbmRleCArIG9mZnNldDtcbiAgICByZXR1cm4gaSA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IHRoaXMudG9rZW5zW2ldIDogRU9GO1xuICB9XG5cbiAgZ2V0IG5leHQoKTogVG9rZW4ge1xuICAgIHJldHVybiB0aGlzLnBlZWsoMCk7XG4gIH1cblxuICBnZXQgaW5wdXRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoID8gdGhpcy5uZXh0LmluZGV4ICsgdGhpcy5vZmZzZXQgOiB0aGlzLmlucHV0TGVuZ3RoICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBzcGFuKHN0YXJ0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlU3BhbihzdGFydCwgdGhpcy5pbnB1dEluZGV4KTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5pbmRleCsrO1xuICB9XG5cbiAgb3B0aW9uYWxDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3Rlcihjb2RlKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBlZWtLZXl3b3JkTGV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHQuaXNLZXl3b3JkTGV0KCk7XG4gIH1cbiAgcGVla0tleXdvcmRBcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0LmlzS2V5d29yZEFzKCk7XG4gIH1cblxuICBleHBlY3RDaGFyYWN0ZXIoY29kZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY29kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lcnJvcihgTWlzc2luZyBleHBlY3RlZCAke1N0cmluZy5mcm9tQ2hhckNvZGUoY29kZSl9YCk7XG4gIH1cblxuICBvcHRpb25hbE9wZXJhdG9yKG9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzT3BlcmF0b3Iob3ApKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwZWN0T3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXJyb3IoYE1pc3NpbmcgZXhwZWN0ZWQgb3BlcmF0b3IgJHtvcGVyYXRvcn1gKTtcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke259LCBleHBlY3RlZCBpZGVudGlmaWVyIG9yIGtleXdvcmRgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbi50b1N0cmluZygpIGFzIHN0cmluZztcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IG4gPSB0aGlzLm5leHQ7XG4gICAgaWYgKCFuLmlzSWRlbnRpZmllcigpICYmICFuLmlzS2V5d29yZCgpICYmICFuLmlzU3RyaW5nKCkpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHtufSwgZXhwZWN0ZWQgaWRlbnRpZmllciwga2V5d29yZCwgb3Igc3RyaW5nYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG4udG9TdHJpbmcoKSBhcyBzdHJpbmc7XG4gIH1cblxuICBwYXJzZUNoYWluKCk6IEFTVCB7XG4gICAgY29uc3QgZXhwcnM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgZXhwcnMucHVzaChleHByKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcIkJpbmRpbmcgZXhwcmVzc2lvbiBjYW5ub3QgY29udGFpbiBjaGFpbmVkIGV4cHJlc3Npb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHt9IC8vIHJlYWQgYWxsIHNlbWljb2xvbnNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICcke3RoaXMubmV4dH0nYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleHBycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH1cbiAgICBpZiAoZXhwcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gZXhwcnNbMF07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2hhaW4odGhpcy5zcGFuKHN0YXJ0KSwgZXhwcnMpO1xuICB9XG5cbiAgcGFyc2VQaXBlKCk6IEFTVCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInxcIikpIHtcbiAgICAgIGlmICh0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoXCJDYW5ub3QgaGF2ZSBhIHBpcGUgaW4gYW4gYWN0aW9uIGV4cHJlc3Npb25cIik7XG4gICAgICB9XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuICAgICAgICBjb25zdCBhcmdzOiBBU1RbXSA9IFtdO1xuICAgICAgICB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHRoaXMucGFyc2VFeHByZXNzaW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IG5ldyBCaW5kaW5nUGlwZSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIG5hbWUsIGFyZ3MpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwifFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXhwcmVzc2lvbigpOiBBU1Qge1xuICAgIHJldHVybiB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgfVxuXG4gIHBhcnNlQ29uZGl0aW9uYWwoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlTG9naWNhbE9yKCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiP1wiKSkge1xuICAgICAgY29uc3QgeWVzID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIGxldCBubzogQVNUO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT0xPTikpIHtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgIHRoaXMuZXJyb3IoYENvbmRpdGlvbmFsIGV4cHJlc3Npb24gJHtleHByZXNzaW9ufSByZXF1aXJlcyBhbGwgMyBleHByZXNzaW9uc2ApO1xuICAgICAgICBubyA9IG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBubyA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsKHRoaXMuc3BhbihzdGFydCksIHJlc3VsdCwgeWVzLCBubyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VMb2dpY2FsT3IoKTogQVNUIHtcbiAgICAvLyAnfHwnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgd2hpbGUgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInx8XCIpKSB7XG4gICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIFwifHxcIiwgcmVzdWx0LCByaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUxvZ2ljYWxBbmQoKTogQVNUIHtcbiAgICAvLyAnJiYnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCImJlwiKSkge1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlRXF1YWxpdHkoKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgXCImJlwiLCByZXN1bHQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXF1YWxpdHkoKTogQVNUIHtcbiAgICAvLyAnPT0nLCchPScsJz09PScsJyE9PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVJlbGF0aW9uYWwoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCI9PVwiOlxuICAgICAgICBjYXNlIFwiPT09XCI6XG4gICAgICAgIGNhc2UgXCIhPVwiOlxuICAgICAgICBjYXNlIFwiIT09XCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUmVsYXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZVJlbGF0aW9uYWwoKTogQVNUIHtcbiAgICAvLyAnPCcsICc+JywgJzw9JywgJz49J1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlQWRkaXRpdmUoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6XG4gICAgICAgIGNhc2UgXCI+XCI6XG4gICAgICAgIGNhc2UgXCI8PVwiOlxuICAgICAgICBjYXNlIFwiPj1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VBZGRpdGl2ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUFkZGl0aXZlKCk6IEFTVCB7XG4gICAgLy8gJysnLCAnLSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTXVsdGlwbGljYXRpdmUoKTogQVNUIHtcbiAgICAvLyAnKicsICclJywgJy8nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgIGNhc2UgXCIlXCI6XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlUHJlZml4KCk6IEFTVCB7XG4gICAgaWYgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBsZXQgcmVzdWx0OiBBU1Q7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnkodGhpcy5zcGFuKHN0YXJ0KSwgb3BlcmF0b3IsIG5ldyBMaXRlcmFsUHJpbWl0aXZlKG5ldyBQYXJzZVNwYW4oc3RhcnQsIHN0YXJ0KSwgMCksIHJlc3VsdCk7XG4gICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJlZml4Tm90KHRoaXMuc3BhbihzdGFydCksIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlQ2FsbENoYWluKCk7XG4gIH1cblxuICBwYXJzZUNhbGxDaGFpbigpOiBBU1Qge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUHJpbWFyeSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kUEVSSU9EKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI/LlwiKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExCUkFDS0VUKSkge1xuICAgICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkKys7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQtLTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFdyaXRlKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEtleWVkUmVhZCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBGdW5jdGlvbkNhbGwodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiIVwiKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgTm9uTnVsbEFzc2VydCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZVByaW1hcnkoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZE51bGwoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgbnVsbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVW5kZWZpbmVkKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIHZvaWQgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVHJ1ZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmRGYWxzZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVGhpcygpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgSW1wbGljaXRSZWNlaXZlcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExCUkFDS0VUKSkge1xuICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZCsrO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbkxpc3QoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxBcnJheSh0aGlzLnNwYW4oc3RhcnQpLCBlbGVtZW50cyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlTGl0ZXJhbE1hcCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzSWRlbnRpZmllcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChuZXcgSW1wbGljaXRSZWNlaXZlcih0aGlzLnNwYW4oc3RhcnQpKSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzTnVtYmVyKCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uZXh0LnRvTnVtYmVyKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNTdHJpbmcoKSkge1xuICAgICAgY29uc3QgbGl0ZXJhbFZhbHVlID0gdGhpcy5uZXh0LnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBsaXRlcmFsVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA+PSB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICR7dGhpcy5pbnB1dH1gKTtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7dGhpcy5uZXh0fWApO1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VFeHByZXNzaW9uTGlzdCh0ZXJtaW5hdG9yOiBudW1iZXIpOiBBU1RbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBBU1RbXSA9IFtdO1xuICAgIGlmICghdGhpcy5uZXh0LmlzQ2hhcmFjdGVyKHRlcm1pbmF0b3IpKSB7XG4gICAgICBkbyB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTGl0ZXJhbE1hcCgpOiBMaXRlcmFsTWFwIHtcbiAgICBjb25zdCBrZXlzOiBMaXRlcmFsTWFwS2V5W10gPSBbXTtcbiAgICBjb25zdCB2YWx1ZXM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSk7XG4gICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpKSB7XG4gICAgICB0aGlzLnJicmFjZXNFeHBlY3RlZCsrO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBxdW90ZWQgPSB0aGlzLm5leHQuaXNTdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTtcbiAgICAgICAga2V5cy5wdXNoKHtrZXksIHF1b3RlZH0pO1xuICAgICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kQ09MT04pO1xuICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgICB0aGlzLnJicmFjZXNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDRSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTGl0ZXJhbE1hcCh0aGlzLnNwYW4oc3RhcnQpLCBrZXlzLCB2YWx1ZXMpO1xuICB9XG5cbiAgcGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwocmVjZWl2ZXI6IEFTVCwgaXNTYWZlID0gZmFsc2UpOiBBU1Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gcmVjZWl2ZXIuc3Bhbi5zdGFydDtcbiAgICBjb25zdCBpZCA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLnNwYW4oc3RhcnQpO1xuICAgICAgcmV0dXJuIGlzU2FmZSA/IG5ldyBTYWZlTWV0aG9kQ2FsbChzcGFuLCByZWNlaXZlciwgaWQsIGFyZ3MpIDogbmV3IE1ldGhvZENhbGwoc3BhbiwgcmVjZWl2ZXIsIGlkLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzU2FmZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXCJUaGUgJz8uJyBvcGVyYXRvciBjYW5ub3QgYmUgdXNlZCBpbiB0aGUgYXNzaWdubWVudFwiKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQodGhpcy5zcGFuKHN0YXJ0KSwgcmVjZWl2ZXIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBpZiAoIXRoaXMucGFyc2VBY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCaW5kaW5ncyBjYW5ub3QgY29udGFpbiBhc3NpZ25tZW50c1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlSZWFkKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZUNhbGxBcmd1bWVudHMoKTogQmluZGluZ1BpcGVbXSB7XG4gICAgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3RlcihjaGFycy4kUlBBUkVOKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbmFsczogQVNUW10gPSBbXTtcbiAgICBkbyB7XG4gICAgICBwb3NpdGlvbmFscy5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgcmV0dXJuIHBvc2l0aW9uYWxzIGFzIEJpbmRpbmdQaXBlW107XG4gIH1cblxuICAvKipcbiAgICogQW4gaWRlbnRpZmllciwgYSBrZXl3b3JkLCBhIHN0cmluZyB3aXRoIGFuIG9wdGlvbmFsIGAtYCBpbmJldHdlZW4uXG4gICAqL1xuICBleHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgb3BlcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpO1xuICAgICAgb3BlcmF0b3JGb3VuZCA9IHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIi1cIik7XG4gICAgICBpZiAob3BlcmF0b3JGb3VuZCkge1xuICAgICAgICByZXN1bHQgKz0gXCItXCI7XG4gICAgICB9XG4gICAgfSB3aGlsZSAob3BlcmF0b3JGb3VuZCk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG4gIH1cblxuICBwYXJzZVRlbXBsYXRlQmluZGluZ3MoKTogVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICAgIGNvbnN0IGJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSA9IFtdO1xuICAgIGxldCBwcmVmaXg6IHN0cmluZyA9IG51bGwhO1xuICAgIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgIGxldCBrZXlJc1ZhcjogYm9vbGVhbiA9IHRoaXMucGVla0tleXdvcmRMZXQoKTtcbiAgICAgIGlmIChrZXlJc1Zhcikge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhd0tleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgICBsZXQga2V5ID0gcmF3S2V5O1xuICAgICAgaWYgKCFrZXlJc1Zhcikge1xuICAgICAgICBpZiAocHJlZml4ID09PSBudWxsKSB7XG4gICAgICAgICAgcHJlZml4ID0ga2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleSA9IHByZWZpeCArIGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pO1xuICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IG51bGwhO1xuICAgICAgbGV0IGV4cHJlc3Npb246IEFTVFdpdGhTb3VyY2UgPSBudWxsITtcbiAgICAgIGlmIChrZXlJc1Zhcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIG5hbWUgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBcIiRpbXBsaWNpdFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVla0tleXdvcmRBcygpKSB7XG4gICAgICAgIGNvbnN0IGxldFN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgLy8gY29uc3VtZSBgYXNgXG4gICAgICAgIG5hbWUgPSByYXdLZXk7XG4gICAgICAgIGtleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7IC8vIHJlYWQgbG9jYWwgdmFyIG5hbWVcbiAgICAgICAga2V5SXNWYXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm5leHQgIT09IEVPRiAmJiAhdGhpcy5wZWVrS2V5d29yZExldCgpKSB7XG4gICAgICAgIGNvbnN0IHN0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdCAtIHRoaXMub2Zmc2V0LCB0aGlzLmlucHV0SW5kZXggLSB0aGlzLm9mZnNldCk7XG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIHNvdXJjZSwgdGhpcy5sb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICAgICAgfVxuICAgICAgYmluZGluZ3MucHVzaChuZXcgVGVtcGxhdGVCaW5kaW5nKHRoaXMuc3BhbihzdGFydCksIGtleSwga2V5SXNWYXIsIG5hbWUsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmICh0aGlzLnBlZWtLZXl3b3JkQXMoKSAmJiAha2V5SXNWYXIpIHtcbiAgICAgICAgY29uc3QgbGV0U3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBjb25zdW1lIGBhc2BcbiAgICAgICAgY29uc3QgbGV0TmFtZSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7IC8vIHJlYWQgbG9jYWwgdmFyIG5hbWVcbiAgICAgICAgYmluZGluZ3MucHVzaChuZXcgVGVtcGxhdGVCaW5kaW5nKHRoaXMuc3BhbihsZXRTdGFydCksIGxldE5hbWUsIHRydWUsIGtleSwgbnVsbCEpKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSkge1xuICAgICAgICB0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQoYmluZGluZ3MsIHdhcm5pbmdzLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKG1lc3NhZ2UsIHRoaXMuaW5wdXQsIHRoaXMubG9jYXRpb25UZXh0KGluZGV4KSwgdGhpcy5sb2NhdGlvbikpO1xuICAgIHRoaXMuc2tpcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2NhdGlvblRleHQoaW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsKSB7XG4gICAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IGBhdCBjb2x1bW4gJHt0aGlzLnRva2Vuc1tpbmRleF0uaW5kZXggKyAxfSBpbmAgOiBgYXQgdGhlIGVuZCBvZiB0aGUgZXhwcmVzc2lvbmA7XG4gIH1cblxuICAvLyBFcnJvciByZWNvdmVyeSBzaG91bGQgc2tpcCB0b2tlbnMgdW50aWwgaXQgZW5jb3VudGVycyBhIHJlY292ZXJ5IHBvaW50LiBza2lwKCkgdHJlYXRzXG4gIC8vIHRoZSBlbmQgb2YgaW5wdXQgYW5kIGEgJzsnIGFzIHVuY29uZGl0aW9uYWxseSBhIHJlY292ZXJ5IHBvaW50LiBJdCBhbHNvIHRyZWF0cyAnKScsXG4gIC8vICd9JyBhbmQgJ10nIGFzIGNvbmRpdGlvbmFsIHJlY292ZXJ5IHBvaW50cyBpZiBvbmUgb2YgY2FsbGluZyBwcm9kdWN0aW9ucyBpcyBleHBlY3RpbmdcbiAgLy8gb25lIG9mIHRoZXNlIHN5bWJvbHMuIFRoaXMgYWxsb3dzIHNraXAoKSB0byByZWNvdmVyIGZyb20gZXJyb3JzIHN1Y2ggYXMgJyhhLikgKyAxJyBhbGxvd2luZ1xuICAvLyBtb3JlIG9mIHRoZSBBU1QgdG8gYmUgcmV0YWluZWQgKGl0IGRvZXNuJ3Qgc2tpcCBhbnkgdG9rZW5zIGFzIHRoZSAnKScgaXMgcmV0YWluZWQgYmVjYXVzZVxuICAvLyBvZiB0aGUgJygnIGJlZ2lucyBhbiAnKCcgPGV4cHI+ICcpJyBwcm9kdWN0aW9uKS4gVGhlIHJlY292ZXJ5IHBvaW50cyBvZiBncm91cGluZyBzeW1ib2xzXG4gIC8vIG11c3QgYmUgY29uZGl0aW9uYWwgYXMgdGhleSBtdXN0IGJlIHNraXBwZWQgaWYgbm9uZSBvZiB0aGUgY2FsbGluZyBwcm9kdWN0aW9ucyBhcmUgbm90XG4gIC8vIGV4cGVjdGluZyB0aGUgY2xvc2luZyB0b2tlbiBlbHNlIHdlIHdpbGwgbmV2ZXIgbWFrZSBwcm9ncmVzcyBpbiB0aGUgY2FzZSBvZiBhblxuICAvLyBleHRyYW5lb3VzIGdyb3VwIGNsb3Npbmcgc3ltYm9sIChzdWNoIGFzIGEgc3RyYXkgJyknKS4gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yICc7JyBiZWNhdXNlXG4gIC8vIHBhcnNlQ2hhaW4oKSBpcyBhbHdheXMgdGhlIHJvb3QgcHJvZHVjdGlvbiBhbmQgaXQgZXhwZWN0cyBhICc7Jy5cblxuICAvLyBJZiBhIHByb2R1Y3Rpb24gZXhwZWN0cyBvbmUgb2YgdGhlc2UgdG9rZW4gaXQgaW5jcmVtZW50cyB0aGUgY29ycmVzcG9uZGluZyBuZXN0aW5nIGNvdW50LFxuICAvLyBhbmQgdGhlbiBkZWNyZW1lbnRzIGl0IGp1c3QgcHJpb3IgdG8gY2hlY2tpbmcgaWYgdGhlIHRva2VuIGlzIGluIHRoZSBpbnB1dC5cbiAgcHJpdmF0ZSBza2lwKCkge1xuICAgIGxldCBuID0gdGhpcy5uZXh0O1xuICAgIHdoaWxlIChcbiAgICAgIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggJiZcbiAgICAgICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pICYmXG4gICAgICAodGhpcy5ycGFyZW5zRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUlBBUkVOKSkgJiZcbiAgICAgICh0aGlzLnJicmFjZXNFeHBlY3RlZCA8PSAwIHx8ICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpKSAmJlxuICAgICAgKHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMubmV4dC5pc0Vycm9yKCkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgUGFyc2VyRXJyb3IodGhpcy5uZXh0LnRvU3RyaW5nKCkhLCB0aGlzLmlucHV0LCB0aGlzLmxvY2F0aW9uVGV4dCgpLCB0aGlzLmxvY2F0aW9uKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIG4gPSB0aGlzLm5leHQ7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFNpbXBsZUV4cHJlc3Npb25DaGVja2VyIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHN0YXRpYyBjaGVjayhhc3Q6IEFTVCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzID0gbmV3IFNpbXBsZUV4cHJlc3Npb25DaGVja2VyKCk7XG4gICAgYXN0LnZpc2l0KHMpO1xuICAgIHJldHVybiBzLmVycm9ycztcbiAgfVxuXG4gIGVycm9yczogc3RyaW5nW10gPSBbXTtcblxuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKFwicGlwZXNcIik7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEFsbChhc3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gYXN0cy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KSB7fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5jb25zdCBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgJ0EnOiAnTElOSycsXG4gICdCJzogJ0JPTERfVEVYVCcsXG4gICdCUic6ICdMSU5FX0JSRUFLJyxcbiAgJ0VNJzogJ0VNUEhBU0lTRURfVEVYVCcsXG4gICdIMSc6ICdIRUFESU5HX0xFVkVMMScsXG4gICdIMic6ICdIRUFESU5HX0xFVkVMMicsXG4gICdIMyc6ICdIRUFESU5HX0xFVkVMMycsXG4gICdINCc6ICdIRUFESU5HX0xFVkVMNCcsXG4gICdINSc6ICdIRUFESU5HX0xFVkVMNScsXG4gICdINic6ICdIRUFESU5HX0xFVkVMNicsXG4gICdIUic6ICdIT1JJWk9OVEFMX1JVTEUnLFxuICAnSSc6ICdJVEFMSUNfVEVYVCcsXG4gICdMSSc6ICdMSVNUX0lURU0nLFxuICAnTElOSyc6ICdNRURJQV9MSU5LJyxcbiAgJ09MJzogJ09SREVSRURfTElTVCcsXG4gICdQJzogJ1BBUkFHUkFQSCcsXG4gICdRJzogJ1FVT1RBVElPTicsXG4gICdTJzogJ1NUUklLRVRIUk9VR0hfVEVYVCcsXG4gICdTTUFMTCc6ICdTTUFMTF9URVhUJyxcbiAgJ1NVQic6ICdTVUJTVFJJUFQnLFxuICAnU1VQJzogJ1NVUEVSU0NSSVBUJyxcbiAgJ1RCT0RZJzogJ1RBQkxFX0JPRFknLFxuICAnVEQnOiAnVEFCTEVfQ0VMTCcsXG4gICdURk9PVCc6ICdUQUJMRV9GT09URVInLFxuICAnVEgnOiAnVEFCTEVfSEVBREVSX0NFTEwnLFxuICAnVEhFQUQnOiAnVEFCTEVfSEVBREVSJyxcbiAgJ1RSJzogJ1RBQkxFX1JPVycsXG4gICdUVCc6ICdNT05PU1BBQ0VEX1RFWFQnLFxuICAnVSc6ICdVTkRFUkxJTkVEX1RFWFQnLFxuICAnVUwnOiAnVU5PUkRFUkVEX0xJU1QnLFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgcGxhY2Vob2xkZXIgd2l0aCBkaWZmZXJlbnQgY29udGVudC5cbiAqXG4gKiBSZXR1cm5zIHRoZSBzYW1lIHBsYWNlaG9sZGVyIG5hbWUgd2hlbiB0aGUgY29udGVudCBpcyBpZGVudGljYWwuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlclJlZ2lzdHJ5IHtcbiAgLy8gQ291bnQgdGhlIG9jY3VycmVuY2Ugb2YgdGhlIGJhc2UgbmFtZSB0b3AgZ2VuZXJhdGUgYSB1bmlxdWUgbmFtZVxuICBwcml2YXRlIF9wbGFjZUhvbGRlck5hbWVDb3VudHM6IHtbazogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICAvLyBNYXBzIHNpZ25hdHVyZSB0byBwbGFjZWhvbGRlciBuYW1lc1xuICBwcml2YXRlIF9zaWduYXR1cmVUb05hbWU6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIGdldFN0YXJ0VGFnUGxhY2Vob2xkZXJOYW1lKHRhZzogc3RyaW5nLCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LCBpc1ZvaWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuX2hhc2hUYWcodGFnLCBhdHRycywgaXNWb2lkKTtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlclRhZyA9IHRhZy50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTW3VwcGVyVGFnXSB8fCBgVEFHXyR7dXBwZXJUYWd9YDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGlzVm9pZCA/IGJhc2VOYW1lIDogYFNUQVJUXyR7YmFzZU5hbWV9YCk7XG5cbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldENsb3NlVGFnUGxhY2Vob2xkZXJOYW1lKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLl9oYXNoQ2xvc2luZ1RhZyh0YWcpO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyVGFnID0gdGFnLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgYmFzZU5hbWUgPSBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVNbdXBwZXJUYWddIHx8IGBUQUdfJHt1cHBlclRhZ31gO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUoYENMT1NFXyR7YmFzZU5hbWV9YCk7XG5cbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyTmFtZShuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdXBwZXJOYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGBQSDogJHt1cHBlck5hbWV9PSR7Y29udGVudH1gO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaXF1ZU5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUodXBwZXJOYW1lKTtcbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IHVuaXF1ZU5hbWU7XG5cbiAgICByZXR1cm4gdW5pcXVlTmFtZTtcbiAgfVxuXG4gIGdldFVuaXF1ZVBsYWNlaG9sZGVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShuYW1lLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgYSBoYXNoIGZvciBhIHRhZyAtIGRvZXMgbm90IHRha2UgYXR0cmlidXRlIG9yZGVyIGludG8gYWNjb3VudFxuICBwcml2YXRlIF9oYXNoVGFnKHRhZzogc3RyaW5nLCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LCBpc1ZvaWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0ID0gYDwke3RhZ31gO1xuICAgIGNvbnN0IHN0ckF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IGAgJHtuYW1lfT0ke2F0dHJzW25hbWVdfWApLmpvaW4oJycpO1xuICAgIGNvbnN0IGVuZCA9IGlzVm9pZCA/ICcvPicgOiBgPjwvJHt0YWd9PmA7XG5cbiAgICByZXR1cm4gc3RhcnQgKyBzdHJBdHRycyArIGVuZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc2hDbG9zaW5nVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2hhc2hUYWcoYC8ke3RhZ31gLCB7fSwgZmFsc2UpOyB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVVbmlxdWVOYW1lKGJhc2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VlbiA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50cy5oYXNPd25Qcm9wZXJ0eShiYXNlKTtcbiAgICBpZiAoIXNlZW4pIHtcbiAgICAgIHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXSA9IDE7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXTtcbiAgICB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV0gPSBpZCArIDE7XG4gICAgcmV0dXJuIGAke2Jhc2V9XyR7aWR9YDtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0ludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7TGV4ZXJ9IGZyb20gXCIuL2xleGVyXCI7XG5pbXBvcnQge1BsYWNlaG9sZGVyUmVnaXN0cnl9IGZyb20gXCIuLi9zZXJpYWxpemVycy9wbGFjZWhvbGRlclwiO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC9odG1sX3RhZ3NcIjtcbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcblxuY29uc3QgX2V4cFBhcnNlciA9IG5ldyBQYXJzZXIobmV3IExleGVyKCkpO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBjb252ZXJ0aW5nIGh0bWwgbm9kZXMgdG8gYW4gaTE4biBNZXNzYWdlIGdpdmVuIGFuIGludGVycG9sYXRpb25Db25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeShcbiAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZ1xuKTogKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiBpMThuLk1lc3NhZ2Uge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IEkxOG5WaXNpdG9yKF9leHBQYXJzZXIsIGludGVycG9sYXRpb25Db25maWcpO1xuXG4gIHJldHVybiAobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+XG4gICAgdmlzaXRvci50b0kxOG5NZXNzYWdlKG5vZGVzLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xufVxuXG5jbGFzcyBJMThuVmlzaXRvciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2lzSWN1OiBib29sZWFuO1xuICBwcml2YXRlIF9pY3VEZXB0aDogbnVtYmVyO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclJlZ2lzdHJ5OiBQbGFjZWhvbGRlclJlZ2lzdHJ5O1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclRvQ29udGVudDoge1twaE5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyVG9NZXNzYWdlOiB7W3BoTmFtZTogc3RyaW5nXTogaTE4bi5NZXNzYWdlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHByZXNzaW9uUGFyc2VyOiBQYXJzZXIsIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpIHt9XG5cbiAgcHVibGljIHRvSTE4bk1lc3NhZ2Uobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBpMThuLk1lc3NhZ2Uge1xuICAgIHRoaXMuX2lzSWN1ID0gbm9kZXMubGVuZ3RoID09PSAxICYmIG5vZGVzWzBdIGluc3RhbmNlb2YgaHRtbC5FeHBhbnNpb247XG4gICAgdGhpcy5faWN1RGVwdGggPSAwO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkgPSBuZXcgUGxhY2Vob2xkZXJSZWdpc3RyeSgpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50ID0ge307XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2UgPSB7fTtcblxuICAgIGNvbnN0IGkxOG5vZGVzOiBpMThuLk5vZGVbXSA9IGh0bWwudmlzaXRBbGwodGhpcywgbm9kZXMsIHt9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5NZXNzYWdlKGkxOG5vZGVzLCB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudCwgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2UsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGh0bWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pO1xuICAgIGNvbnN0IGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBlbC5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgLy8gRG8gbm90IHZpc2l0IHRoZSBhdHRyaWJ1dGVzLCB0cmFuc2xhdGFibGUgb25lcyBhcmUgdG9wLWxldmVsIEFTVHNcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaXNWb2lkOiBib29sZWFuID0gZ2V0SHRtbFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkO1xuICAgIGNvbnN0IHN0YXJ0UGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRTdGFydFRhZ1BsYWNlaG9sZGVyTmFtZShlbC5uYW1lLCBhdHRycywgaXNWb2lkKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtzdGFydFBoTmFtZV0gPSBlbC5zb3VyY2VTcGFuID8gZWwuc291cmNlU3BhbiEudG9TdHJpbmcoKSA6IFwiXCI7XG5cbiAgICBsZXQgY2xvc2VQaE5hbWUgPSBcIlwiO1xuXG4gICAgaWYgKCFpc1ZvaWQpIHtcbiAgICAgIGNsb3NlUGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRDbG9zZVRhZ1BsYWNlaG9sZGVyTmFtZShlbC5uYW1lKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W2Nsb3NlUGhOYW1lXSA9IGA8LyR7ZWwubmFtZX0+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uVGFnUGxhY2Vob2xkZXIoZWwubmFtZSwgYXR0cnMsIHN0YXJ0UGhOYW1lLCBjbG9zZVBoTmFtZSwgY2hpbGRyZW4sIGlzVm9pZCwgZWwuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24oYXR0cmlidXRlLnZhbHVlLCBhdHRyaWJ1dGUuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIHJldHVybiB0aGlzLl92aXNpdFRleHRXaXRoSW50ZXJwb2xhdGlvbih0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICB0aGlzLl9pY3VEZXB0aCsrO1xuICAgIGNvbnN0IGkxOG5JY3VDYXNlczoge1trOiBzdHJpbmddOiBpMThuLk5vZGV9ID0ge307XG4gICAgY29uc3QgaTE4bkljdSA9IG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBpMThuSWN1Q2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBpY3UuY2FzZXMuZm9yRWFjaCgoY2F6ZSk6IHZvaWQgPT4ge1xuICAgICAgaTE4bkljdUNhc2VzW2NhemUudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKFxuICAgICAgICBjYXplLmV4cHJlc3Npb24ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCB7fSkpLFxuICAgICAgICBjYXplLmV4cFNvdXJjZVNwYW5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5faWN1RGVwdGgtLTtcblxuICAgIGlmICh0aGlzLl9pc0ljdSB8fCB0aGlzLl9pY3VEZXB0aCA+IDApIHtcbiAgICAgIC8vIFJldHVybnMgYW4gSUNVIG5vZGUgd2hlbjpcbiAgICAgIC8vIC0gdGhlIG1lc3NhZ2UgKHZzIGEgcGFydCBvZiB0aGUgbWVzc2FnZSkgaXMgYW4gSUNVIG1lc3NhZ2UsIG9yXG4gICAgICAvLyAtIHRoZSBJQ1UgbWVzc2FnZSBpcyBuZXN0ZWQuXG4gICAgICBjb25zdCBleHBQaCA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0VW5pcXVlUGxhY2Vob2xkZXIoYFZBUl8ke2ljdS50eXBlfWApO1xuICAgICAgaTE4bkljdS5leHByZXNzaW9uUGxhY2Vob2xkZXIgPSBleHBQaDtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W2V4cFBoXSA9IGljdS5zd2l0Y2hWYWx1ZTtcblxuICAgICAgcmV0dXJuIGkxOG5JY3U7XG4gICAgfVxuXG4gICAgLy8gRWxzZSByZXR1cm5zIGEgcGxhY2Vob2xkZXJcbiAgICAvLyBJQ1UgcGxhY2Vob2xkZXJzIHNob3VsZCBub3QgYmUgcmVwbGFjZWQgd2l0aCB0aGVpciBvcmlnaW5hbCBjb250ZW50IGJ1dCB3aXRoIHRoZSB0aGVpclxuICAgIC8vIHRyYW5zbGF0aW9ucy4gV2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgdmlzaXRvciAodGhleSBhcmUgbm90IHJlLWVudHJhbnQpIHRvIGNvbXB1dGUgdGhlXG4gICAgLy8gbWVzc2FnZSBpZC5cbiAgICAvLyBUT0RPKHZpY2IpOiBhZGQgYSBodG1sLk5vZGUgLT4gaTE4bi5NZXNzYWdlIGNhY2hlIHRvIGF2b2lkIGhhdmluZyB0byByZS1jcmVhdGUgdGhlIG1zZ1xuICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKFwiSUNVXCIsIGljdS5zb3VyY2VTcGFuLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgSTE4blZpc2l0b3IodGhpcy5fZXhwcmVzc2lvblBhcnNlciwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2VbcGhOYW1lXSA9IHZpc2l0b3IudG9JMThuTWVzc2FnZShbaWN1XSwgXCJcIiwgXCJcIiwgXCJcIik7XG4gICAgcmV0dXJuIG5ldyBpMThuLkljdVBsYWNlaG9sZGVyKGkxOG5JY3UsIHBoTmFtZSwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlYWNoYWJsZSBjb2RlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24odGV4dDogc3RyaW5nLCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBpMThuLk5vZGUge1xuICAgIGNvbnN0IHNwbGl0SW50ZXJwb2xhdGlvbiA9IHRoaXMuX2V4cHJlc3Npb25QYXJzZXIuc3BsaXRJbnRlcnBvbGF0aW9uKFxuICAgICAgdGV4dCxcbiAgICAgIHNvdXJjZVNwYW4uc3RhcnQudG9TdHJpbmcoKSxcbiAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWdcbiAgICApO1xuXG4gICAgaWYgKCFzcGxpdEludGVycG9sYXRpb24pIHtcbiAgICAgIC8vIE5vIGV4cHJlc3Npb24sIHJldHVybiBhIHNpbmdsZSB0ZXh0XG4gICAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LCBzb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBncm91cCBvZiB0ZXh0ICsgZXhwcmVzc2lvbnNcbiAgICBjb25zdCBub2RlczogaTE4bi5Ob2RlW10gPSBbXTtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgaTE4bi5Db250YWluZXIobm9kZXMsIHNvdXJjZVNwYW4pO1xuICAgIGNvbnN0IHtzdGFydDogc0RlbGltaXRlciwgZW5kOiBlRGVsaW1pdGVyfSA9IHRoaXMuX2ludGVycG9sYXRpb25Db25maWc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHNwbGl0SW50ZXJwb2xhdGlvbi5leHByZXNzaW9uc1tpXTtcbiAgICAgIGNvbnN0IGJhc2VOYW1lID0gZXh0cmFjdFBsYWNlaG9sZGVyTmFtZShleHByZXNzaW9uKSB8fCBcIklOVEVSUE9MQVRJT05cIjtcbiAgICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKGJhc2VOYW1lLCBleHByZXNzaW9uKTtcblxuICAgICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2ldLmxlbmd0aCkge1xuICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBlbXB0eSBzdHJpbmdzXG4gICAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uVGV4dChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tpXSwgc291cmNlU3BhbikpO1xuICAgICAgfVxuXG4gICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlBsYWNlaG9sZGVyKGV4cHJlc3Npb24sIHBoTmFtZSwgc291cmNlU3BhbikpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbcGhOYW1lXSA9IHNEZWxpbWl0ZXIgKyBleHByZXNzaW9uICsgZURlbGltaXRlcjtcbiAgICB9XG5cbiAgICAvLyBUaGUgbGFzdCBpbmRleCBjb250YWlucyBubyBleHByZXNzaW9uXG4gICAgY29uc3QgbGFzdFN0cmluZ0lkeCA9IHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2xhc3RTdHJpbmdJZHhdLmxlbmd0aCkge1xuICAgICAgbm9kZXMucHVzaChuZXcgaTE4bi5UZXh0KHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2xhc3RTdHJpbmdJZHhdLCBzb3VyY2VTcGFuKSk7XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cblxuY29uc3QgX0NVU1RPTV9QSF9FWFAgPSAvXFwvXFwvW1xcc1xcU10qaTE4bltcXHNcXFNdKlxcKFtcXHNcXFNdKnBoW1xcc1xcU10qPVtcXHNcXFNdKihcInwnKShbXFxzXFxTXSo/KVxcMVtcXHNcXFNdKlxcKS9nO1xuXG5mdW5jdGlvbiBleHRyYWN0UGxhY2Vob2xkZXJOYW1lKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW5wdXQuc3BsaXQoX0NVU1RPTV9QSF9FWFApWzJdO1xufVxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7Y3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5fSBmcm9tIFwiLi9pMThuXCI7XG5pbXBvcnQge1BhcnNlciwgUGFyc2VUcmVlUmVzdWx0fSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC9odG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZCwgUGxhY2Vob2xkZXJNYXBwZXJ9IGZyb20gXCIuLi9zZXJpYWxpemVycy9zZXJpYWxpemVyXCI7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jb25zdCBfSTE4Tl9BVFRSID0gXCJpMThuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZU1ldGFkYXRhIHtcbiAgbWVhbmluZz86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpIHtcbiAgICBzdXBlcihnZXRIdG1sVGFnRGVmaW5pdGlvbik7XG4gIH1cblxuICBwYXJzZShzb3VyY2U6IHN0cmluZywgdXJsOiBzdHJpbmcsIHBhcnNlRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgcmV0dXJuIHN1cGVyLnBhcnNlKHNvdXJjZSwgdXJsLCBwYXJzZUV4cGFuc2lvbkZvcm1zLCB0aGlzLmludGVycG9sYXRpb25Db25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgdHJhbnNsYXRhYmxlIG1lc3NhZ2VzIGZyb20gYW4gaHRtbCBBU1RcbiAgICovXG4gIGV4dHJhY3RNZXNzYWdlcyhub2RlczogaHRtbC5Ob2RlW10pOiBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoW1wid3JhcHBlclwiXSk7XG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoXCJ3cmFwcGVyXCIsIFtdLCBub2RlcywgdW5kZWZpbmVkISwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB2aXNpdG9yLmV4dHJhY3Qod3JhcHBlciwgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgfVxuXG4gIG1lcmdlVHJhbnNsYXRpb25zKFxuICAgIG5vZGVzOiBodG1sLk5vZGVbXSxcbiAgICB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlLFxuICAgIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgbWV0YWRhdGE/OiBNZXNzYWdlTWV0YWRhdGEsXG4gICAgaW1wbGljaXRUYWdzOiBzdHJpbmdbXSA9IFtdXG4gICk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKGltcGxpY2l0VGFncyk7XG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoXCJ3cmFwcGVyXCIsIFtdLCBub2RlcywgdW5kZWZpbmVkISwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB2aXNpdG9yLm1lcmdlKHdyYXBwZXIsIHRyYW5zbGF0aW9ucywgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXMsIG1ldGFkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIHB1YmxpYyBlcnJvcnM6IEkxOG5FcnJvcltdKSB7fVxufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciB0cmFuc2xhdGVkIG1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gIHByaXZhdGUgaTE4blRvSHRtbDogSTE4blRvSHRtbFZpc2l0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fSxcbiAgICBwdWJsaWMgZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgcHVibGljIG1hcHBlckZhY3Rvcnk/OiAobTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlcixcbiAgICBjb25zb2xlPzogQ29uc29sZVxuICApIHtcbiAgICB0aGlzLmkxOG5Ub0h0bWwgPSBuZXcgSTE4blRvSHRtbFZpc2l0b3IoXG4gICAgICBpMThuTm9kZXNCeU1zZ0lkLFxuICAgICAgZGlnZXN0LFxuICAgICAgbWFwcGVyRmFjdG9yeSEsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICAgIGludGVycG9sYXRpb25Db25maWcsXG4gICAgICBjb25zb2xlXG4gICAgKTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgYSBgVHJhbnNsYXRpb25CdW5kbGVgIGJ5IHBhcnNpbmcgdGhlIGdpdmVuIGBjb250ZW50YCB3aXRoIHRoZSBgc2VyaWFsaXplcmAuXG4gIHN0YXRpYyBsb2FkKFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkaWdlc3Q6IChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpID0+IHN0cmluZyxcbiAgICBjcmVhdGVOYW1lTWFwcGVyOiAobWVzc2FnZTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlciB8IG51bGwsXG4gICAgbG9hZEZjdDogKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IEkxOG5NZXNzYWdlc0J5SWQsXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkID0gbG9hZEZjdChjb250ZW50LCB1cmwpO1xuICAgIGNvbnN0IGRpZ2VzdEZuID0gKG06IGkxOG4uTWVzc2FnZSkgPT4gZGlnZXN0KG0pO1xuICAgIGNvbnN0IG1hcHBlckZhY3RvcnkgPSAobTogaTE4bi5NZXNzYWdlKSA9PiBjcmVhdGVOYW1lTWFwcGVyKG0pITtcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uQnVuZGxlKFxuICAgICAgaTE4bk5vZGVzQnlNc2dJZCxcbiAgICAgIGRpZ2VzdEZuLFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgICAgbWFwcGVyRmFjdG9yeSxcbiAgICAgIGNvbnNvbGVcbiAgICApO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gYXMgSFRNTCBub2RlcyBmcm9tIHRoZSBnaXZlbiBzb3VyY2UgbWVzc2FnZS5cbiAgZ2V0KHNyY01zZzogaTE4bi5NZXNzYWdlLCBwYXJhbXMpOiBodG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaHRtbFJlcyA9IHRoaXMuaTE4blRvSHRtbC5jb252ZXJ0KHNyY01zZywgcGFyYW1zKTtcbiAgICBpZiAoaHRtbFJlcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoaHRtbFJlcy5lcnJvcnMuam9pbihcIlxcblwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxSZXMubm9kZXM7XG4gIH1cblxuICBoYXMoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaWdlc3Qoc3JjTXNnKSBpbiB0aGlzLmkxOG5Ob2Rlc0J5TXNnSWQ7XG4gIH1cbn1cblxuY2xhc3MgSTE4blRvSHRtbFZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICBwcml2YXRlIF9zcmNNc2c6IGkxOG4uTWVzc2FnZTtcbiAgcHJpdmF0ZSBfY29udGV4dFN0YWNrOiB7bXNnOiBpMThuLk1lc3NhZ2U7IG1hcHBlcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nfVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW10gPSBbXTtcbiAgcHJpdmF0ZSBfbWFwcGVyOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtczoge1trZXk6IHN0cmluZ106IGFueX07XG4gIHByaXZhdGUgX3BhcmFtS2V5czogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge30sXG4gICAgcHJpdmF0ZSBfZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfbWFwcGVyRmFjdG9yeTogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgcHJpdmF0ZSBfbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc/OiBJbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgX2NvbnNvbGU/OiBDb25zb2xlXG4gICkge31cblxuICBjb252ZXJ0KHNyY01zZzogaTE4bi5NZXNzYWdlLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KToge25vZGVzOiBodG1sLk5vZGVbXTsgZXJyb3JzOiBJMThuRXJyb3JbXX0ge1xuICAgIHRoaXMuX2NvbnRleHRTdGFjay5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9wYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gICAgLy8gaTE4biB0byB0ZXh0XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuY29udmVydFRvVGV4dChzcmNNc2cpO1xuXG4gICAgLy8gdGV4dCB0byBodG1sXG4gICAgY29uc3QgdXJsID0gc3JjTXNnLm5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCkucGFyc2UodGV4dCwgdXJsLCB0cnVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBub2RlczogaHRtbFBhcnNlci5yb290Tm9kZXMsXG4gICAgICBlcnJvcnM6IFsuLi50aGlzLl9lcnJvcnMsIC4uLmh0bWxQYXJzZXIuZXJyb3JzXVxuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW4ubWFwKG4gPT4gbi52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNhc2VzID0gT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoayA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuXG4gICAgLy8gVE9ETyh2aWNiKTogT25jZSBhbGwgZm9ybWF0IHN3aXRjaCB0byB1c2luZyBleHByZXNzaW9uIHBsYWNlaG9sZGVyc1xuICAgIC8vIHdlIHNob3VsZCB0aHJvdyB3aGVuIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgaW4gdGhlIHNvdXJjZSBtZXNzYWdlXG4gICAgY29uc3QgZXhwID0gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShpY3UuZXhwcmVzc2lvbilcbiAgICAgID8gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyc1tpY3UuZXhwcmVzc2lvbl1cbiAgICAgIDogaWN1LmV4cHJlc3Npb247XG5cbiAgICByZXR1cm4gYHske2V4cH0sICR7aWN1LnR5cGV9LCAke2Nhc2VzLmpvaW4oXCIgXCIpfX1gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgcGhOYW1lID0gdGhpcy5fbWFwcGVyKHBoLm5hbWUpO1xuICAgIGlmICh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzLmhhc093blByb3BlcnR5KHBoTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1ZhbHVlKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbcGhOYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShwaE5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaE5hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRFcnJvcihwaCwgYFVua25vd24gcGxhY2Vob2xkZXIgXCIke3BoLm5hbWV9XCJgKTtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8vIExvYWRlZCBtZXNzYWdlIGNvbnRhaW5zIG9ubHkgcGxhY2Vob2xkZXJzICh2cyB0YWcgYW5kIGljdSBwbGFjZWhvbGRlcnMpLlxuICAvLyBIb3dldmVyIHdoZW4gYSB0cmFuc2xhdGlvbiBjYW4gbm90IGJlIGZvdW5kLCB3ZSBuZWVkIHRvIHNlcmlhbGl6ZSB0aGUgc291cmNlIG1lc3NhZ2VcbiAgLy8gd2hpY2ggY2FuIGNvbnRhaW4gdGFnIHBsYWNlaG9sZGVyc1xuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCB0YWcgPSBgJHtwaC50YWd9YDtcbiAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKHBoLmF0dHJzKVxuICAgICAgLm1hcChuYW1lID0+IGAke25hbWV9PVwiJHtwaC5hdHRyc1tuYW1lXX1cImApXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHt0YWd9ICR7YXR0cnN9Lz5gO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHBoLmNoaWxkcmVuLm1hcCgoYzogaTE4bi5Ob2RlKSA9PiBjLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBgPCR7dGFnfSAke2F0dHJzfT4ke2NoaWxkcmVufTwvJHt0YWd9PmA7XG4gIH1cblxuICAvLyBMb2FkZWQgbWVzc2FnZSBjb250YWlucyBvbmx5IHBsYWNlaG9sZGVycyAodnMgdGFnIGFuZCBpY3UgcGxhY2Vob2xkZXJzKS5cbiAgLy8gSG93ZXZlciB3aGVuIGEgdHJhbnNsYXRpb24gY2FuIG5vdCBiZSBmb3VuZCwgd2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIHNvdXJjZSBtZXNzYWdlXG4gIC8vIHdoaWNoIGNhbiBjb250YWluIHRhZyBwbGFjZWhvbGRlcnNcbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQW4gSUNVIHBsYWNlaG9sZGVyIHJlZmVyZW5jZXMgdGhlIHNvdXJjZSBtZXNzYWdlIHRvIGJlIHNlcmlhbGl6ZWRcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaC5uYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIHNvdXJjZSBtZXNzYWdlIHRvIGEgdHJhbnNsYXRlZCB0ZXh0IHN0cmluZzpcbiAgICogLSB0ZXh0IG5vZGVzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIHRyYW5zbGF0aW9uLFxuICAgKiAtIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciBjb250ZW50LFxuICAgKiAtIElDVSBub2RlcyBhcmUgY29udmVydGVkIHRvIElDVSBleHByZXNzaW9ucy5cbiAgICovXG4gIHByaXZhdGUgY29udmVydFRvVGV4dChzcmNNc2c6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9kaWdlc3Qoc3JjTXNnKTtcblxuICAgIGNvbnN0IG1hcHBlciA9IHRoaXMuX21hcHBlckZhY3RvcnkgPyB0aGlzLl9tYXBwZXJGYWN0b3J5KHNyY01zZykgOiBudWxsO1xuICAgIGxldCBub2RlczogaTE4bi5Ob2RlW107XG5cbiAgICB0aGlzLl9jb250ZXh0U3RhY2sucHVzaCh7bXNnOiB0aGlzLl9zcmNNc2csIG1hcHBlcjogdGhpcy5fbWFwcGVyfSk7XG4gICAgdGhpcy5fc3JjTXNnID0gc3JjTXNnO1xuXG4gICAgaWYgKHRoaXMuX2kxOG5Ob2Rlc0J5TXNnSWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAvLyBXaGVuIHRoZXJlIGlzIGEgdHJhbnNsYXRpb24gdXNlIGl0cyBub2RlcyBhcyB0aGUgc291cmNlXG4gICAgICAvLyBBbmQgY3JlYXRlIGEgbWFwcGVyIHRvIGNvbnZlcnQgc2VyaWFsaXplZCBwbGFjZWhvbGRlciBuYW1lcyB0byBpbnRlcm5hbCBuYW1lc1xuICAgICAgbm9kZXMgPSB0aGlzLl9pMThuTm9kZXNCeU1zZ0lkW2lkXTtcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IChtYXBwZXIgPyBtYXBwZXIudG9JbnRlcm5hbE5hbWUobmFtZSkhIDogbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gbm8gdHJhbnNsYXRpb24gaGFzIGJlZW4gZm91bmRcbiAgICAgIC8vIC0gcmVwb3J0IGFuIGVycm9yIC8gYSB3YXJuaW5nIC8gbm90aGluZyxcbiAgICAgIC8vIC0gdXNlIHRoZSBub2RlcyBmcm9tIHRoZSBvcmlnaW5hbCBtZXNzYWdlXG4gICAgICAvLyAtIHBsYWNlaG9sZGVycyBhcmUgYWxyZWFkeSBpbnRlcm5hbCBhbmQgbmVlZCBubyBtYXBwZXJcbiAgICAgIGlmICh0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fYWRkRXJyb3Ioc3JjTXNnLm5vZGVzWzBdLCBgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3IgbWVzc2FnZSBcIiR7aWR9XCJgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uc29sZSAmJiB0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZykge1xuICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiYCk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IHNyY01zZy5ub2RlcztcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jb250ZXh0U3RhY2sucG9wKCkhO1xuICAgIHRoaXMuX3NyY01zZyA9IGNvbnRleHQubXNnO1xuICAgIHRoaXMuX21hcHBlciA9IGNvbnRleHQubWFwcGVyO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9WYWx1ZShwbGFjZWhvbGRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbSA9IHBsYWNlaG9sZGVyLnJlcGxhY2UodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCwgXCJcIikucmVwbGFjZSh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCwgXCJcIik7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtS2V5cy5pbmRleE9mKHBhcmFtKSAhPT0gLTEgPyB0aGlzLl9wYXJhbXNbcGFyYW1dIDogcGxhY2Vob2xkZXI7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFcnJvcihlbDogaTE4bi5Ob2RlLCBtc2c6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3IoZWwuc291cmNlU3BhbiwgbXNnKSk7XG4gIH1cbn1cblxuZW51bSBWaXNpdG9yTW9kZSB7XG4gIEV4dHJhY3QsXG4gIE1lcmdlXG59XG5cbi8qKlxuICogVGhpcyBWaXNpdG9yIGlzIHVzZWQ6XG4gKiAxLiB0byBleHRyYWN0IGFsbCB0aGUgdHJhbnNsYXRhYmxlIHN0cmluZ3MgZnJvbSBhbiBodG1sIEFTVCAoc2VlIGBleHRyYWN0KClgKSxcbiAqIDIuIHRvIHJlcGxhY2UgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIHdpdGggdGhlIGFjdHVhbCB0cmFuc2xhdGlvbnMgKHNlZSBgbWVyZ2UoKWApXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIGRlcHRoOiBudW1iZXI7XG5cbiAgLy8gPGVsIGkxOG4+Li4uPC9lbD5cbiAgcHJpdmF0ZSBpbkkxOG5Ob2RlOiBib29sZWFuO1xuICBwcml2YXRlIGluSW1wbGljaXROb2RlOiBib29sZWFuO1xuXG4gIC8vIDwhLS1pMThuLS0+Li4uPCEtLS9pMThuLS0+XG4gIHByaXZhdGUgaW5JMThuQmxvY2s6IGJvb2xlYW47XG4gIHByaXZhdGUgYmxvY2tDaGlsZHJlbjogaHRtbC5Ob2RlW10gPSBbXTtcbiAgcHJpdmF0ZSBibG9ja1N0YXJ0RGVwdGg6IG51bWJlcjtcblxuICAvLyB7PGljdSBtZXNzYWdlPn1cbiAgcHJpdmF0ZSBpbkljdTogYm9vbGVhbjtcblxuICAvLyBzZXQgdG8gdm9pZCAwIHdoZW4gbm90IGluIGEgc2VjdGlvblxuICBwcml2YXRlIG1zZ0NvdW50QXRTZWN0aW9uU3RhcnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBlcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIG1vZGU6IFZpc2l0b3JNb2RlO1xuXG4gIC8vIFZpc2l0b3JNb2RlLkV4dHJhY3Qgb25seVxuICBwcml2YXRlIG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXTtcblxuICAvLyBWaXNpdG9yTW9kZS5NZXJnZSBvbmx5XG4gIHByaXZhdGUgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZTtcbiAgcHJpdmF0ZSBjcmVhdGVJMThuTWVzc2FnZTogKG1zZzogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZykgPT4gaTE4bi5NZXNzYWdlO1xuICBwcml2YXRlIG1ldGFkYXRhOiBNZXNzYWdlTWV0YWRhdGE7XG4gIHByaXZhdGUgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdID0gW10pIHt9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBtZXNzYWdlcyBmcm9tIHRoZSB0cmVlXG4gICAqL1xuICBleHRyYWN0KG5vZGU6IGh0bWwuTm9kZSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgIHRoaXMuaW5pdChWaXNpdG9yTW9kZS5FeHRyYWN0LCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICAgIG5vZGUudmlzaXQodGhpcywgbnVsbCk7XG5cbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jaykge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZSwgXCJVbmNsb3NlZCBibG9ja1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEV4dHJhY3Rpb25SZXN1bHQodGhpcy5tZXNzYWdlcywgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB0cmVlIHdoZXJlIGFsbCB0cmFuc2xhdGFibGUgbm9kZXMgYXJlIHRyYW5zbGF0ZWRcbiAgICovXG4gIG1lcmdlKFxuICAgIG5vZGU6IGh0bWwuTm9kZSxcbiAgICB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICBtZXRhZGF0YTogTWVzc2FnZU1ldGFkYXRhID0ge31cbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB0aGlzLmluaXQoVmlzaXRvck1vZGUuTWVyZ2UsIGludGVycG9sYXRpb25Db25maWcsIHBhcmFtcyk7XG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlZE5vZGUgPSBub2RlLnZpc2l0KHRoaXMsIG51bGwpO1xuXG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5jbG9zZWQgYmxvY2tcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQYXJzZVRyZWVSZXN1bHQodHJhbnNsYXRlZE5vZGUuY2hpbGRyZW4sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgLy8gUGFyc2UgY2FzZXMgZm9yIHRyYW5zbGF0YWJsZSBodG1sIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBleHByZXNzaW9uID0gaHRtbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgaHRtbC5FeHBhbnNpb25DYXNlKFxuICAgICAgICBpY3VDYXNlLnZhbHVlLFxuICAgICAgICBleHByZXNzaW9uLFxuICAgICAgICBpY3VDYXNlLnNvdXJjZVNwYW4sXG4gICAgICAgIGljdUNhc2UudmFsdWVTb3VyY2VTcGFuLFxuICAgICAgICBpY3VDYXNlLmV4cFNvdXJjZVNwYW5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaHRtbC5FeHBhbnNpb24ge1xuICAgIHRoaXMubWF5QmVBZGRCbG9ja0NoaWxkcmVuKGljdSk7XG5cbiAgICBjb25zdCB3YXNJbkljdSA9IHRoaXMuaW5JY3U7XG5cbiAgICBpZiAoIXRoaXMuaW5JY3UpIHtcbiAgICAgIC8vIG5lc3RlZCBJQ1UgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBleHRyYWN0ZWQgYnV0IHRvcC1sZXZlbCB0cmFuc2xhdGVkIGFzIGEgd2hvbGVcbiAgICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRkTWVzc2FnZShbaWN1XSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluSWN1ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXNlcyA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBpY3UgPSBuZXcgaHRtbC5FeHBhbnNpb24oaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuLCBpY3Uuc3dpdGNoVmFsdWVTb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICB0aGlzLmluSWN1ID0gd2FzSW5JY3U7XG5cbiAgICByZXR1cm4gaWN1O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBodG1sLlRleHQge1xuICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLm1heUJlQWRkQmxvY2tDaGlsZHJlbih0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaHRtbC5FbGVtZW50IHwgbnVsbCB7XG4gICAgdGhpcy5tYXlCZUFkZEJsb2NrQ2hpbGRyZW4oZWwpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBjb25zdCB3YXNJbkkxOG5Ob2RlID0gdGhpcy5pbkkxOG5Ob2RlO1xuICAgIGNvbnN0IHdhc0luSW1wbGljaXROb2RlID0gdGhpcy5pbkltcGxpY2l0Tm9kZTtcbiAgICBsZXQgY2hpbGROb2RlczogaHRtbC5Ob2RlW10gPSBbXTtcbiAgICBsZXQgdHJhbnNsYXRlZENoaWxkTm9kZXM6IGh0bWwuTm9kZVtdID0gdW5kZWZpbmVkITtcblxuICAgIC8vIEV4dHJhY3Q6XG4gICAgLy8gLSB0b3AgbGV2ZWwgbm9kZXMgd2l0aCB0aGUgKGltcGxpY2l0KSBcImkxOG5cIiBhdHRyaWJ1dGUgaWYgbm90IGFscmVhZHkgaW4gYSBzZWN0aW9uXG4gICAgLy8gLSBJQ1UgbWVzc2FnZXNcbiAgICBjb25zdCBpMThuQXR0ciA9IGdldEkxOG5BdHRyKGVsKTtcbiAgICBjb25zdCBpc0ltcGxpY2l0ID0gdGhpcy5faW1wbGljaXRUYWdzLnNvbWUodGFnID0+IGVsLm5hbWUgPT09IHRhZykgJiYgIXRoaXMuaW5JY3UgJiYgIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb247XG4gICAgY29uc3QgaXNUb3BMZXZlbEltcGxpY2l0ID0gIXdhc0luSW1wbGljaXROb2RlICYmIGlzSW1wbGljaXQ7XG4gICAgdGhpcy5pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlIHx8IGlzSW1wbGljaXQ7XG4gICAgaWYgKCF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uICYmICF0aGlzLmluSWN1KSB7XG4gICAgICBpZiAoaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0KSB7XG4gICAgICAgIHRoaXMuaW5JMThuTm9kZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2UoZWwuY2hpbGRyZW4sIHRoaXMubWV0YWRhdGEpITtcbiAgICAgICAgdHJhbnNsYXRlZENoaWxkTm9kZXMgPSB0aGlzLnRyYW5zbGF0ZU1lc3NhZ2UoZWwsIG1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIGNvbnN0IGlzVHJhbnNsYXRhYmxlID0gaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0O1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGFibGUpIHtcbiAgICAgICAgICB0aGlzLm9wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGVsLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihlbCwgXCJDb3VsZCBub3QgbWFyayBhbiBlbGVtZW50IGFzIHRyYW5zbGF0YWJsZSBpbnNpZGUgYSB0cmFuc2xhdGFibGUgc2VjdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuRXh0cmFjdCkge1xuICAgICAgICAvLyBEZXNjZW5kIGludG8gY2hpbGQgbm9kZXMgZm9yIGV4dHJhY3Rpb25cbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IHZpc2l0Tm9kZXMgPSB0cmFuc2xhdGVkQ2hpbGROb2RlcyB8fCBlbC5jaGlsZHJlbjtcbiAgICAgIHZpc2l0Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBjaGlsZC52aXNpdCh0aGlzLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHZpc2l0ZWQgJiYgIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgICAvLyBEbyBub3QgYWRkIHRoZSBjaGlsZHJlbiBmcm9tIHRyYW5zbGF0YWJsZSBzZWN0aW9ucyAoPSBpMThuIGJsb2NrcyBoZXJlKVxuICAgICAgICAgIC8vIFRoZXkgd2lsbCBiZSBhZGRlZCBsYXRlciBpbiB0aGlzIGxvb3Agd2hlbiB0aGUgYmxvY2sgY2xvc2VzIChpLmUuIG9uIGA8IS0tIC9pMThuIC0tPmApXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuY29uY2F0KHZpc2l0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcHRoLS07XG4gICAgdGhpcy5pbkkxOG5Ob2RlID0gd2FzSW5JMThuTm9kZTtcbiAgICB0aGlzLmluSW1wbGljaXROb2RlID0gd2FzSW5JbXBsaWNpdE5vZGU7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgcmV0dXJuIG5ldyBodG1sLkVsZW1lbnQoZWwubmFtZSwgW10sIGNoaWxkTm9kZXMsIGVsLnNvdXJjZVNwYW4sIGVsLnN0YXJ0U291cmNlU3BhbiwgZWwuZW5kU291cmNlU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZSBjb2RlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KG1vZGU6IFZpc2l0b3JNb2RlLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuaW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmluSTE4bk5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoID0gMDtcbiAgICB0aGlzLmluSWN1ID0gZmFsc2U7XG4gICAgdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuaW5JbXBsaWNpdE5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZUkxOG5NZXNzYWdlID0gY3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5KGludGVycG9sYXRpb25Db25maWcpO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgLy8gYWRkIGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2VcbiAgcHJpdmF0ZSBhZGRNZXNzYWdlKGFzdDogaHRtbC5Ob2RlW10sIHttZWFuaW5nID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBpZCA9IFwiXCJ9ID0ge30pOiBpMThuLk1lc3NhZ2UgfCBudWxsIHtcbiAgICBpZiAoXG4gICAgICBhc3QubGVuZ3RoID09PSAwIHx8XG4gICAgICAoYXN0Lmxlbmd0aCA9PT0gMSAmJiBhc3RbMF0gaW5zdGFuY2VvZiBodG1sLkF0dHJpYnV0ZSAmJiAhKGFzdFswXSBhcyBodG1sLkF0dHJpYnV0ZSkudmFsdWUpXG4gICAgKSB7XG4gICAgICAvLyBEbyBub3QgY3JlYXRlIGVtcHR5IG1lc3NhZ2VzXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jcmVhdGVJMThuTWVzc2FnZShhc3QsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gbWVzc2FnZSBnaXZlbiB0aGUgYFRyYW5zbGF0aW9uQnVuZGxlYFxuICAvLyBUaGlzIGlzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIGVsZW1lbnRzIC8gYmxvY2tzIC0gc2VlIGBfdHJhbnNsYXRlQXR0cmlidXRlc2AgZm9yIGF0dHJpYnV0ZXNcbiAgLy8gbm8tb3Agd2hlbiBjYWxsZWQgaW4gZXh0cmFjdGlvbiBtb2RlIChyZXR1cm5zIFtdKVxuICBwcml2YXRlIHRyYW5zbGF0ZU1lc3NhZ2UoZWw6IGh0bWwuTm9kZSwgbWVzc2FnZTogaTE4bi5NZXNzYWdlKTogaHRtbC5Ob2RlW10ge1xuICAgIGlmIChtZXNzYWdlICYmIHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy50cmFuc2xhdGlvbnMuZ2V0KG1lc3NhZ2UsIHRoaXMucGFyYW1zKTtcbiAgICAgIGlmIChub2Rlcykge1xuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGVsLCBgVHJhbnNsYXRpb24gdW5hdmFpbGFibGUgZm9yIG1lc3NhZ2UgaWQ9XCIke3RoaXMudHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG5vZGUgYXMgYSBjaGlsZCBvZiB0aGUgYmxvY2sgd2hlbjpcbiAgICogLSB3ZSBhcmUgaW4gYSBibG9jayxcbiAgICogLSB3ZSBhcmUgbm90IGluc2lkZSBhIElDVSBtZXNzYWdlICh0aG9zZSBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5KSxcbiAgICogLSB0aGUgbm9kZSBpcyBhIFwiZGlyZWN0IGNoaWxkXCIgb2YgdGhlIGJsb2NrXG4gICAqL1xuICBwcml2YXRlIG1heUJlQWRkQmxvY2tDaGlsZHJlbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jayAmJiAhdGhpcy5pbkljdSAmJiB0aGlzLmRlcHRoID09PSB0aGlzLmJsb2NrU3RhcnREZXB0aCkge1xuICAgICAgdGhpcy5ibG9ja0NoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoZSBzdGFydCBvZiBhIHNlY3Rpb24sIHNlZSBgX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbmBcbiAgICovXG4gIHByaXZhdGUgb3BlblRyYW5zbGF0YWJsZVNlY3Rpb24obm9kZTogaHRtbC5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5leHBlY3RlZCBzZWN0aW9uIHN0YXJ0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgPSB0aGlzLm1lc3NhZ2VzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB0cmFuc2xhdGFibGUgc2VjdGlvbiBjb3VsZCBiZTpcbiAgICogLSB0aGUgY29udGVudCBvZiB0cmFuc2xhdGFibGUgZWxlbWVudCxcbiAgICogLSBub2RlcyBiZXR3ZWVuIGA8IS0tIGkxOG4gLS0+YCBhbmQgYDwhLS0gL2kxOG4gLS0+YCBjb21tZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCAhPT0gdm9pZCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZXMgYSBzZWN0aW9uLlxuICAgKlxuICAgKiBJZiBhIHNlY3Rpb24gaGFzIG9ubHkgb25lIHNpZ25pZmljYW50IGNoaWxkcmVuIChjb21tZW50cyBub3Qgc2lnbmlmaWNhbnQpIHRoZW4gd2Ugc2hvdWxkIG5vdFxuICAgKiBrZWVwIHRoZSBtZXNzYWdlIGZyb20gdGhpcyBjaGlsZHJlbjpcbiAgICpcbiAgICogYDxwIGkxOG49XCJtZWFuaW5nfGRlc2NyaXB0aW9uXCI+e0lDVSBtZXNzYWdlfTwvcD5gIHdvdWxkIHByb2R1Y2UgdHdvIG1lc3NhZ2VzOlxuICAgKiAtIG9uZSBmb3IgdGhlIDxwPiBjb250ZW50IHdpdGggbWVhbmluZyBhbmQgZGVzY3JpcHRpb24sXG4gICAqIC0gYW5vdGhlciBvbmUgZm9yIHRoZSBJQ1UgbWVzc2FnZS5cbiAgICpcbiAgICogSW4gdGhpcyBjYXNlIHRoZSBsYXN0IG1lc3NhZ2UgaXMgZGlzY2FyZGVkIGFzIGl0IGNvbnRhaW5zIGxlc3MgaW5mb3JtYXRpb24gKHRoZSBBU1QgaXNcbiAgICogb3RoZXJ3aXNlIGlkZW50aWNhbCkuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB3ZSBzaG91bGQgc3RpbGwga2VlcCBtZXNzYWdlcyBleHRyYWN0ZWQgZnJvbSBhdHRyaWJ1dGVzIGluc2lkZSB0aGUgc2VjdGlvbiAoaWUgaW4gdGhlXG4gICAqIElDVSBtZXNzYWdlIGhlcmUpXG4gICAqL1xuICBwcml2YXRlIF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb24obm9kZTogaHRtbC5Ob2RlLCBkaXJlY3RDaGlsZHJlbjogaHRtbC5Ob2RlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5leHBlY3RlZCBzZWN0aW9uIGVuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0O1xuICAgIGNvbnN0IHNpZ25pZmljYW50Q2hpbGRyZW46IG51bWJlciA9IGRpcmVjdENoaWxkcmVuLnJlZHVjZShcbiAgICAgIChjb3VudDogbnVtYmVyLCBuOiBodG1sLk5vZGUpOiBudW1iZXIgPT4gY291bnQgKyAobiBpbnN0YW5jZW9mIGh0bWwuQ29tbWVudCA/IDAgOiAxKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgaWYgKHNpZ25pZmljYW50Q2hpbGRyZW4gPT09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnRJbmRleCE7IGktLSkge1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLm1lc3NhZ2VzW2ldLm5vZGVzO1xuICAgICAgICBpZiAoIShhc3QubGVuZ3RoID09PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGkxOG4uVGV4dCkpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydEVycm9yKG5vZGU6IGh0bWwuTm9kZSwgbXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbXNnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0STE4bkF0dHIocDogaHRtbC5FbGVtZW50KTogaHRtbC5BdHRyaWJ1dGUgfCBudWxsIHtcbiAgcmV0dXJuIHAuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gX0kxOE5fQVRUUikgfHwgbnVsbDtcbn1cbiIsImltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIExPQ0FMRV9JRCxcbiAgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gIE9wdGlvbmFsLFxuICBUUkFOU0xBVElPTlMsXG4gIFRSQU5TTEFUSU9OU19GT1JNQVRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7eGxpZmZEaWdlc3QsIHhsaWZmTG9hZFRvSTE4bn0gZnJvbSBcIi4vc2VyaWFsaXplcnMveGxpZmZcIjtcbmltcG9ydCB7eGxpZmYyRGlnZXN0LCB4bGlmZjJMb2FkVG9JMThufSBmcm9tIFwiLi9zZXJpYWxpemVycy94bGlmZjJcIjtcbmltcG9ydCB7eHRiRGlnZXN0LCB4dGJMb2FkVG9JMThuLCB4dGJNYXBwZXJ9IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3h0YlwiO1xuaW1wb3J0IHtIdG1sUGFyc2VyLCBUcmFuc2xhdGlvbkJ1bmRsZX0gZnJvbSBcIi4vcGFyc2VyL2h0bWxcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZCwgc2VyaWFsaXplTm9kZXN9IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vYXN0L2kxOG5fYXN0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJMThuIHtcbiAgKGRlZjogc3RyaW5nIHwgSTE4bkRlZiwgcGFyYW1zPzoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkRlZiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBtZWFuaW5nPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1JU1NJTkdfVFJBTlNMQVRJT05fU1RSQVRFR1kgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k+KFxuICBcIk1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5XCJcbik7XG5cbi8qKlxuICogQSBzcGVjdWxhdGl2ZSBwb2x5ZmlsbCB0byB1c2UgaTE4biBjb2RlIHRyYW5zbGF0aW9uc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05TX0ZPUk1BVCkgZm9ybWF0OiBzdHJpbmcsXG4gICAgQEluamVjdChUUkFOU0xBVElPTlMpIHRyYW5zbGF0aW9uczogc3RyaW5nLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUlTU0lOR19UUkFOU0xBVElPTl9TVFJBVEVHWSlcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nXG4gICkge1xuICAgIGxldCBsb2FkRmN0OiAoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4gSTE4bk1lc3NhZ2VzQnlJZDtcbiAgICBsZXQgZGlnZXN0OiAobWVzc2FnZTogTWVzc2FnZSkgPT4gc3RyaW5nO1xuICAgIGxldCBjcmVhdGVNYXBwZXIgPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gbnVsbDtcbiAgICBmb3JtYXQgPSAoZm9ybWF0IHx8IFwieGxmXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgXCJ4dGJcIjpcbiAgICAgICAgbG9hZEZjdCA9IHh0YkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHh0YkRpZ2VzdDtcbiAgICAgICAgY3JlYXRlTWFwcGVyID0geHRiTWFwcGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ4bGlmZjJcIjpcbiAgICAgIGNhc2UgXCJ4bGYyXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4bGlmZjJMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4bGlmZjJEaWdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInhsaWZmXCI6XG4gICAgICBjYXNlIFwieGxmXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4bGlmZkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHhsaWZmRGlnZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0cmFuc2xhdGlvbnMgZm9ybWF0ICR7Zm9ybWF0fWApO1xuICAgIH1cbiAgICBjb25zdCBodG1sUGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uc0J1bmRsZSA9IFRyYW5zbGF0aW9uQnVuZGxlLmxvYWQoXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBcImkxOG5cIixcbiAgICAgIGRpZ2VzdCxcbiAgICAgIGNyZWF0ZU1hcHBlcixcbiAgICAgIGxvYWRGY3QsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneVxuICAgICk7XG5cbiAgICAvLyB0b2RvIHVzZSBpbnRlcnBvbGF0aW9uIGNvbmZpZ1xuICAgIHJldHVybiAoZGVmOiBzdHJpbmcgfCBJMThuRGVmLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0eXBlb2YgZGVmID09PSBcInN0cmluZ1wiID8gZGVmIDogZGVmLnZhbHVlO1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgZGVmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1ldGFkYXRhW1wiaWRcIl0gPSBkZWYuaWQ7XG4gICAgICAgIG1ldGFkYXRhW1wibWVhbmluZ1wiXSA9IGRlZi5tZWFuaW5nO1xuICAgICAgICBtZXRhZGF0YVtcImRlc2NyaXB0aW9uXCJdID0gZGVmLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3QgaHRtbFBhcnNlclJlc3VsdCA9IGh0bWxQYXJzZXIucGFyc2UoY29udGVudCwgXCJcIiwgdHJ1ZSk7XG5cbiAgICAgIGlmIChodG1sUGFyc2VyUmVzdWx0LmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgaHRtbFBhcnNlclJlc3VsdC5lcnJvcnM7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lcmdlZE5vZGVzID0gaHRtbFBhcnNlci5tZXJnZVRyYW5zbGF0aW9ucyhcbiAgICAgICAgaHRtbFBhcnNlclJlc3VsdC5yb290Tm9kZXMsXG4gICAgICAgIHRyYW5zbGF0aW9uc0J1bmRsZSxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgW1wid3JhcHBlclwiXVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZU5vZGVzKG1lcmdlZE5vZGVzLnJvb3ROb2RlcywgbG9jYWxlLCBwYXJhbXMpLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNoYXJzLiRFT0YiLCJjaGFycy4kTFQiLCJjaGFycy4kQkFORyIsImNoYXJzLiRMQlJBQ0tFVCIsImNoYXJzLiRNSU5VUyIsImNoYXJzLiRTTEFTSCIsImNoYXJzLiRSQlJBQ0UiLCJjaGFycy4kTEYiLCJjaGFycy4kQ1IiLCJjaGFycy4kQU1QRVJTQU5EIiwiY2hhcnMuJEhBU0giLCJjaGFycy4keCIsImNoYXJzLiRYIiwiY2hhcnMuJFNFTUlDT0xPTiIsImNoYXJzLiRSQlJBQ0tFVCIsImNoYXJzLiRHVCIsImNoYXJzLiRDT0xPTiIsImNoYXJzLmlzQXNjaWlMZXR0ZXIiLCJjaGFycy4kRVEiLCJjaGFycy4kU1EiLCJjaGFycy4kRFEiLCJjaGFycy4kTEJSQUNFIiwiY2hhcnMuJENPTU1BIiwiY2hhcnMuaXNXaGl0ZXNwYWNlIiwiY2hhcnMuJGEiLCJjaGFycy4keiIsImNoYXJzLiRBIiwiY2hhcnMuJFoiLCJjaGFycy4kMCIsImNoYXJzLiQ5IiwiY2hhcnMuaXNBc2NpaUhleERpZ2l0IiwiY2hhcnMuaXNEaWdpdCIsImxleC50b2tlbml6ZSIsImxleC5Ub2tlblR5cGUiLCJodG1sLkNvbW1lbnQiLCJodG1sLkV4cGFuc2lvbiIsImxleC5Ub2tlbiIsImh0bWwuRXhwYW5zaW9uQ2FzZSIsImh0bWwuVGV4dCIsImh0bWwuRWxlbWVudCIsImh0bWwuQXR0cmlidXRlIiwiaTE4bi5SZWN1cnNlVmlzaXRvciIsInNlcmlhbGl6ZU5vZGVzIiwiU2VyaWFsaXplclZpc2l0b3IiLCJtbC52aXNpdEFsbCIsImkxOG4uVGV4dCIsImkxOG4uUGxhY2Vob2xkZXIiLCJpMThuLkNvbnRhaW5lciIsImkxOG4uSWN1IiwiX1BMQUNFSE9MREVSX1RBRyIsIl9TT1VSQ0VfVEFHIiwiX1RBUkdFVF9UQUciLCJfVU5JVF9UQUciLCJYbWxUb0kxOG4iLCJUb2tlblR5cGUiLCJUb2tlbiIsImNoYXJzLiRTUEFDRSIsImNoYXJzLiRQRVJJT0QiLCJjaGFycy4kTFBBUkVOIiwiY2hhcnMuJFJQQVJFTiIsImNoYXJzLiRQTFVTIiwiY2hhcnMuJFNUQVIiLCJjaGFycy4kUEVSQ0VOVCIsImNoYXJzLiRDQVJFVCIsImNoYXJzLiRRVUVTVElPTiIsImNoYXJzLiRCQVIiLCJjaGFycy4kTkJTUCIsImNoYXJzLiRCQUNLU0xBU0giLCJjaGFycy4kdSIsImNoYXJzLiRfIiwiY2hhcnMuJCQiLCJjaGFycy4kZSIsImNoYXJzLiRFIiwiY2hhcnMuJEJUIiwiY2hhcnMuJG4iLCJjaGFycy4kZiIsImNoYXJzLiRGRiIsImNoYXJzLiRyIiwiY2hhcnMuJHQiLCJjaGFycy4kVEFCIiwiY2hhcnMuJHYiLCJjaGFycy4kVlRBQiIsIlBhcnNlciIsImh0bWwudmlzaXRBbGwiLCJpMThuLk1lc3NhZ2UiLCJpMThuLlRhZ1BsYWNlaG9sZGVyIiwiaTE4bi5JY3VQbGFjZWhvbGRlciIsIlZpc2l0b3IiXSwibWFwcGlu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LEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEFBQU8sdUJBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM3QixBQUFPLHVCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsQUFBTyx1QkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8sdUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHVCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFNUIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixBQUFPLHVCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHVCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLEFBQU8sdUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1QixBQUFPLHVCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDN0IsQUFBTyx1QkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLEFBQU8sdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixBQUFPLHVCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFckIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHVCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHVCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsR0FBRyxD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QUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsUUFBUTtJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLEdBQUc7SUFDUCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEdBQUcsRUFBRSxRQUFRO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsUUFBUTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxHQUFHO0lBQ1AsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFFBQVE7SUFDZixP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QUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUI7SUFFRCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBRWhELENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFckQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDMUI7Ozs7O0FBR0QsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUEyQjtJQUM5QyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDYixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNiLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIs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