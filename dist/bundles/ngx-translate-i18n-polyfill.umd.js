(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ngx-translate/i18n-polyfill', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-translate'] = global['ngx-translate'] || {}, global['ngx-translate']['i18n-polyfill'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Text = (function () {
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
    var Expansion = (function () {
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
    var ExpansionCase = (function () {
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
    var Attribute = (function () {
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
    var Element = (function () {
        function Element(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
            if (startSourceSpan === void 0) {
                startSourceSpan = null;
            }
            if (endSourceSpan === void 0) {
                endSourceSpan = null;
            }
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
    var Comment = (function () {
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
        if (context === void 0) {
            context = null;
        }
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
    var Message = (function () {
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
    var Text$1 = (function () {
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
    var Container = (function () {
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
    var Icu = (function () {
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
    var TagPlaceholder = (function () {
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
    var Placeholder = (function () {
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
    var IcuPlaceholder = (function () {
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
    var RecurseVisitor = (function () {
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
    var Text$2 = (function () {
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
    var CR = (function (_super) {
        __extends(CR, _super);
        function CR(ws) {
            if (ws === void 0) {
                ws = 0;
            }
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
     */ ParseLocation = (function () {
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
    var ParseSourceFile = (function () {
        function ParseSourceFile(content, url) {
            if (url === void 0) {
                url = "";
            }
            this.content = content;
            this.url = url;
        }
        return ParseSourceFile;
    }());
    var ParseSourceSpan = (function () {
        function ParseSourceSpan(start, end, details) {
            if (details === void 0) {
                details = null;
            }
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
    var ParseError = (function () {
        function ParseError(span, msg, level) {
            if (level === void 0) {
                level = ParseErrorLevel.ERROR;
            }
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
     */ I18nError = (function (_super) {
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
    var InterpolationConfig = (function () {
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
    var Token = (function () {
        function Token(type, parts, sourceSpan) {
            this.type = type;
            this.parts = parts;
            this.sourceSpan = sourceSpan;
        }
        return Token;
    }());
    var TokenError = (function (_super) {
        __extends(TokenError, _super);
        function TokenError(errorMsg, tokenType, span) {
            var _this = _super.call(this, span, errorMsg) || this;
            _this.tokenType = tokenType;
            return _this;
        }
        return TokenError;
    }(ParseError));
    var TokenizeResult = (function () {
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
        if (tokenizeExpansionForms === void 0) {
            tokenizeExpansionForms = false;
        }
        if (interpolationConfig === void 0) {
            interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
        }
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
    var ControlFlowError = (function () {
        function ControlFlowError(error) {
            this.error = error;
        }
        return ControlFlowError;
    }());
    var Tokenizer = (function () {
        /**
         * @param _file The html source
         * @param _getTagDefinition
         * @param _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
         * @param _interpolationConfig
         */
        function Tokenizer(_file, _getTagDefinition, _tokenizeIcu, _interpolationConfig) {
            if (_interpolationConfig === void 0) {
                _interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
            }
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
                    catch (e) {
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
                if (start === void 0) {
                    start = this._getLocation();
                }
                if (end === void 0) {
                    end = this._getLocation();
                }
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
                if (start === void 0) {
                    start = this._getLocation();
                }
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
                if (end === void 0) {
                    end = this._getLocation();
                }
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
                    catch (e) {
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
                var /** @type {?} */ prefix = ((null));
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
                catch (e) {
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
    var TreeError = (function (_super) {
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
    var ParseTreeResult = (function () {
        function ParseTreeResult(rootNodes, errors) {
            this.rootNodes = rootNodes;
            this.errors = errors;
        }
        return ParseTreeResult;
    }());
    var Parser = (function () {
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
                if (parseExpansionForms === void 0) {
                    parseExpansionForms = false;
                }
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
                var /** @type {?} */ tokensAndErrors = tokenize(source, url, this.getTagDefinition, parseExpansionForms, interpolationConfig);
                var /** @type {?} */ treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
                return new ParseTreeResult(treeAndErrors.rootNodes, ((tokensAndErrors.errors)).concat(treeAndErrors.errors));
            };
        return Parser;
    }());
    var _TreeBuilder = (function () {
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
                var /** @type {?} */ valueSpan = ((undefined));
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
    var XmlTagDefinition = (function () {
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
    var HtmlTagDefinition = (function () {
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
     */ SimplePlaceholderMapper = (function (_super) {
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
    var /** @type {?} */ i18nSelectPipe = new common.I18nSelectPipe();
    var SerializerVisitor = (function () {
        function SerializerVisitor(locale, params) {
            this.params = params;
            this.i18nPluralPipe = new common.I18nPluralPipe(new common.NgLocaleLocalization(locale));
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
                if (join === void 0) {
                    join = "";
                }
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
     */ SerializerVisitor$1 = (function () {
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
     */ SerializerIgnoreIcuExpVisitor = (function (_super) {
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
    var XliffParser = (function () {
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
                        var /** @type {?} */ innerTextStart = ((element.startSourceSpan)).end.offset;
                        var /** @type {?} */ innerTextEnd = ((element.endSourceSpan)).start.offset;
                        var /** @type {?} */ content = ((element.startSourceSpan)).start.file.content;
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
    var XmlToI18n = (function () {
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
    var Xliff2Parser = (function () {
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
                        var /** @type {?} */ innerTextStart = ((element.startSourceSpan)).end.offset;
                        var /** @type {?} */ innerTextEnd = ((element.endSourceSpan)).start.offset;
                        var /** @type {?} */ content = ((element.startSourceSpan)).start.file.content;
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
    var XmlToI18n$1 = (function () {
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
    var XtbParser = (function () {
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
                                var /** @type {?} */ innerTextStart = ((element.startSourceSpan)).end.offset;
                                var /** @type {?} */ innerTextEnd = ((element.endSourceSpan)).start.offset;
                                var /** @type {?} */ content = ((element.startSourceSpan)).start.file.content;
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
    var XmlToI18n$2 = (function () {
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
    var ParserError = (function () {
        function ParserError(message, input, errLocation, ctxLocation) {
            this.input = input;
            this.errLocation = errLocation;
            this.ctxLocation = ctxLocation;
            this.message = "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation;
        }
        return ParserError;
    }());
    var ParseSpan = (function () {
        function ParseSpan(start, end) {
            this.start = start;
            this.end = end;
        }
        return ParseSpan;
    }());
    var AST = (function () {
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
                if (context === void 0) {
                    context = null;
                }
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
     */ Quote = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
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
    var EmptyExpr = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                // do nothing
            };
        return EmptyExpr;
    }(AST));
    var ImplicitReceiver = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitImplicitReceiver(this, context);
            };
        return ImplicitReceiver;
    }(AST));
    /**
     * Multiple expressions separated by a semicolon.
     */
    var /**
     * Multiple expressions separated by a semicolon.
     */ Chain = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitChain(this, context);
            };
        return Chain;
    }(AST));
    var Conditional = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitConditional(this, context);
            };
        return Conditional;
    }(AST));
    var PropertyRead = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPropertyRead(this, context);
            };
        return PropertyRead;
    }(AST));
    var PropertyWrite = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPropertyWrite(this, context);
            };
        return PropertyWrite;
    }(AST));
    var SafePropertyRead = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitSafePropertyRead(this, context);
            };
        return SafePropertyRead;
    }(AST));
    var KeyedRead = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitKeyedRead(this, context);
            };
        return KeyedRead;
    }(AST));
    var KeyedWrite = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitKeyedWrite(this, context);
            };
        return KeyedWrite;
    }(AST));
    var BindingPipe = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPipe(this, context);
            };
        return BindingPipe;
    }(AST));
    var LiteralPrimitive = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitLiteralPrimitive(this, context);
            };
        return LiteralPrimitive;
    }(AST));
    var LiteralArray = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitLiteralArray(this, context);
            };
        return LiteralArray;
    }(AST));
    var LiteralMap = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitLiteralMap(this, context);
            };
        return LiteralMap;
    }(AST));
    var Interpolation = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitInterpolation(this, context);
            };
        return Interpolation;
    }(AST));
    var Binary = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitBinary(this, context);
            };
        return Binary;
    }(AST));
    var PrefixNot = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPrefixNot(this, context);
            };
        return PrefixNot;
    }(AST));
    var NonNullAssert = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitNonNullAssert(this, context);
            };
        return NonNullAssert;
    }(AST));
    var MethodCall = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitMethodCall(this, context);
            };
        return MethodCall;
    }(AST));
    var SafeMethodCall = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitSafeMethodCall(this, context);
            };
        return SafeMethodCall;
    }(AST));
    var FunctionCall = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitFunctionCall(this, context);
            };
        return FunctionCall;
    }(AST));
    var ASTWithSource = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
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
    var TemplateBinding = (function () {
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
    var Lexer = (function () {
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
    var Token$1 = (function () {
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
    var Scanner = (function () {
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
    var SplitInterpolation = (function () {
        function SplitInterpolation(strings, expressions, offsets) {
            this.strings = strings;
            this.expressions = expressions;
            this.offsets = offsets;
        }
        return SplitInterpolation;
    }());
    var TemplateBindingParseResult = (function () {
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
    var Parser$1 = (function () {
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
    var ParseAST = (function () {
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
             */ function () {
                return this.peek(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ParseAST.prototype, "inputIndex", {
            get: /**
             * @return {?}
             */ function () {
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
                if (isSafe === void 0) {
                    isSafe = false;
                }
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
                var /** @type {?} */ prefix = ((null));
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
                    var /** @type {?} */ name_2 = ((null));
                    var /** @type {?} */ expression = ((null));
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
                if (index === void 0) {
                    index = null;
                }
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
                if (index === void 0) {
                    index = null;
                }
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
    var SimpleExpressionChecker = (function () {
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
     */ PlaceholderRegistry = (function () {
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
    var I18nVisitor = (function () {
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
    var HtmlParser = (function (_super) {
        __extends(HtmlParser, _super);
        function HtmlParser(interpolationConfig) {
            if (interpolationConfig === void 0) {
                interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
            }
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
                if (parseExpansionForms === void 0) {
                    parseExpansionForms = false;
                }
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
                if (implicitTags === void 0) {
                    implicitTags = [];
                }
                var /** @type {?} */ visitor = new Visitor$4(implicitTags);
                // Construct a single fake root element
                var /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
                return visitor.merge(wrapper, translations, this.interpolationConfig, params, metadata);
            };
        return HtmlParser;
    }(Parser));
    var ExtractionResult = (function () {
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
     */ TranslationBundle = (function () {
        function TranslationBundle(i18nNodesByMsgId, digest, interpolationConfig, missingTranslationStrategy, mapperFactory, console) {
            if (i18nNodesByMsgId === void 0) {
                i18nNodesByMsgId = {};
            }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
    var I18nToHtmlVisitor = (function () {
        function I18nToHtmlVisitor(_i18nNodesByMsgId, _digest, _mapperFactory, _missingTranslationStrategy, _interpolationConfig, _console) {
            if (_i18nNodesByMsgId === void 0) {
                _i18nNodesByMsgId = {};
            }
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
                    if (this._missingTranslationStrategy === core.MissingTranslationStrategy.Error) {
                        this._addError(srcMsg.nodes[0], "Missing translation for message \"" + id + "\"");
                    }
                    else if (this._console && this._missingTranslationStrategy === core.MissingTranslationStrategy.Warning) {
                        this._console.warn("Missing translation for message \"" + id + "\"");
                    }
                    nodes = srcMsg.nodes;
                    this._mapper = function (name) { return name; };
                }
                var /** @type {?} */ text = nodes.map(function (node) { return node.visit(_this); }).join("");
                var /** @type {?} */ context = ((this._contextStack.pop()));
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
     */ Visitor$4 = (function () {
        function Visitor$$1(_implicitTags) {
            if (_implicitTags === void 0) {
                _implicitTags = [];
            }
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
                if (metadata === void 0) {
                    metadata = {};
                }
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
                var /** @type {?} */ translatedChildNodes = ((undefined));
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
                        var /** @type {?} */ message = ((this.addMessage(el.children, this.metadata)));
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
                if (params === void 0) {
                    params = {};
                }
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
                    (ast.length === 1 && ast[0] instanceof Attribute && !((ast[0])).value)) {
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
             */ function () {
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
    var /** @type {?} */ MISSING_TRANSLATION_STRATEGY = new core.InjectionToken("MissingTranslationStrategy");
    /**
     * A speculative polyfill to use i18n code translations
     */
    var I18n = (function () {
        function I18n(format, translations, locale, missingTranslationStrategy) {
            if (missingTranslationStrategy === void 0) {
                missingTranslationStrategy = core.MissingTranslationStrategy.Warning;
            }
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
                if (params === void 0) {
                    params = {};
                }
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        I18n.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [core.TRANSLATIONS_FORMAT,] },] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.TRANSLATIONS,] },] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
                { type: core.MissingTranslationStrategy, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MISSING_TRANSLATION_STRATEGY,] },] },
            ];
        };
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

    exports.I18n = I18n;
    exports.MISSING_TRANSLATION_STRATEGY = MISSING_TRANSLATION_STRATEGY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1pMThuLXBvbHlmaWxsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaTE4bl9hc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htbF9oZWxwZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9wYXJzZV91dGlsLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWcudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9jaGFycy50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3RhZ3MudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9sZXhlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3BhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3htbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaHRtbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9kaWdlc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3hsaWZmLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy94bGlmZjIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htYi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvc2VyaWFsaXplcnMveHRiLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvbGV4ZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3BhcnNlci9wYXJzZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvaTE4bi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvcGFyc2VyL2h0bWwudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2kxOG4tcG9seWZpbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZV91dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbiBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjYXNlczogRXhwYW5zaW9uQ2FzZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHN3aXRjaFZhbHVlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuXG4gICkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uQ2FzZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogTm9kZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHZhbHVlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHB1YmxpYyBleHBTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHBhbnNpb25DYXNlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXR0cmlidXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGF0dHJzOiBBdHRyaWJ1dGVbXSxcbiAgICBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHB1YmxpYyBzdGFydFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuICAgIHB1YmxpYyBlbmRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4gfCBudWxsID0gbnVsbFxuICApIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgLy8gUmV0dXJuaW5nIGEgdHJ1dGh5IHZhbHVlIGZyb20gYHZpc2l0KClgIHdpbGwgcHJldmVudCBgdmlzaXRBbGwoKWAgZnJvbSB0aGUgY2FsbCB0byB0aGUgdHlwZWRcbiAgLy8gbWV0aG9kIGFuZCByZXN1bHQgcmV0dXJuZWQgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBpbmNsdWRlZCBpbiBgdmlzaXRBbGwoKWBzIHJlc3VsdCBhcnJheS5cbiAgdmlzaXQ/KG5vZGU6IE5vZGUsIGNvbnRleHQ6IGFueSk6IGFueTtcblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IEF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENvbW1lbnQoY29tbWVudDogQ29tbWVudCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IEV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRBbGwodmlzaXRvcjogVmlzaXRvciwgbm9kZXM6IE5vZGVbXSwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueVtdIHtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0IHZpc2l0ID0gdmlzaXRvci52aXNpdFxuICAgID8gKGFzdDogTm9kZSkgPT4gdmlzaXRvci52aXNpdCEoYXN0LCBjb250ZXh0KSB8fCBhc3QudmlzaXQodmlzaXRvciwgY29udGV4dClcbiAgICA6IChhc3Q6IE5vZGUpID0+IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgbm9kZXMuZm9yRWFjaChhc3QgPT4ge1xuICAgIGNvbnN0IGFzdFJlc3VsdCA9IHZpc2l0KGFzdCk7XG4gICAgaWYgKGFzdFJlc3VsdCkge1xuICAgICAgcmVzdWx0LnB1c2goYXN0UmVzdWx0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VfdXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIHNvdXJjZXM6IE1lc3NhZ2VTcGFuW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBzb3VyY2UgbWVzc2FnZSBBU1RcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVycyBtYXBzIHBsYWNlaG9sZGVyIG5hbWVzIHRvIHN0YXRpYyBjb250ZW50XG4gICAqIEBwYXJhbSBwbGFjZWhvbGRlclRvTWVzc2FnZSBtYXBzIHBsYWNlaG9sZGVyIG5hbWVzIHRvIG1lc3NhZ2VzICh1c2VkIGZvciBuZXN0ZWQgSUNVIG1lc3NhZ2VzKVxuICAgKiBAcGFyYW0gbWVhbmluZ1xuICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIGlkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbm9kZXM6IE5vZGVbXSxcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXJzOiB7W3BoTmFtZTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXJUb01lc3NhZ2U6IHtbcGhOYW1lOiBzdHJpbmddOiBNZXNzYWdlfSxcbiAgICBwdWJsaWMgbWVhbmluZzogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBpZDogc3RyaW5nXG4gICkge1xuICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbGVQYXRoOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmZpbGUudXJsLFxuICAgICAgICAgIHN0YXJ0TGluZTogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5saW5lICsgMSxcbiAgICAgICAgICBzdGFydENvbDogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5jb2wgKyAxLFxuICAgICAgICAgIGVuZExpbmU6IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLnNvdXJjZVNwYW4uZW5kLmxpbmUgKyAxLFxuICAgICAgICAgIGVuZENvbDogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5jb2wgKyAxXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuXG4vLyBsaW5lIGFuZCBjb2x1bW5zIGluZGV4ZXMgYXJlIDEgYmFzZWRcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVNwYW4ge1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBzdGFydExpbmU6IG51bWJlcjtcbiAgc3RhcnRDb2w6IG51bWJlcjtcbiAgZW5kTGluZTogbnVtYmVyO1xuICBlbmRDb2w6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLy8gVE9ETyh2aWNiKTogZG8gd2UgcmVhbGx5IG5lZWQgdGhpcyBub2RlICh2cyBhbiBhcnJheSkgP1xuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbnRhaW5lcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWN1IGltcGxlbWVudHMgTm9kZSB7XG4gIHB1YmxpYyBleHByZXNzaW9uUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGV4cHJlc3Npb246IHN0cmluZyxcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjYXNlczoge1trOiBzdHJpbmddOiBOb2RlfSxcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuXG4gICkge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEljdSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFnUGxhY2Vob2xkZXIgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRhZzogc3RyaW5nLFxuICAgIHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHB1YmxpYyBzdGFydE5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgY2xvc2VOYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGNoaWxkcmVuOiBOb2RlW10sXG4gICAgcHVibGljIGlzVm9pZDogYm9vbGVhbixcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuXG4gICkge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRhZ1BsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFBsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJY3VQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IEljdSwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEljdVBsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IENvbnRhaW5lciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRJY3UoaWN1OiBJY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IFRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbi8vIENsb25lIHRoZSBBU1RcbmV4cG9ydCBjbGFzcyBDbG9uZVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBUZXh0IHtcbiAgICByZXR1cm4gbmV3IFRleHQodGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogQ29udGFpbmVyIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lcihjaGlsZHJlbiwgY29udGFpbmVyLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBJY3UsIGNvbnRleHQ/OiBhbnkpOiBJY3Uge1xuICAgIGNvbnN0IGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9ID0ge307XG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKGtleSA9PiAoY2FzZXNba2V5XSA9IGljdS5jYXNlc1trZXldLnZpc2l0KHRoaXMsIGNvbnRleHQpKSk7XG4gICAgY29uc3QgbXNnID0gbmV3IEljdShpY3UuZXhwcmVzc2lvbiwgaWN1LnR5cGUsIGNhc2VzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgbXNnLmV4cHJlc3Npb25QbGFjZWhvbGRlciA9IGljdS5leHByZXNzaW9uUGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIG1zZztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IFRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogVGFnUGxhY2Vob2xkZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGguY2hpbGRyZW4ubWFwKG4gPT4gbi52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG5ldyBUYWdQbGFjZWhvbGRlcihwaC50YWcsIHBoLmF0dHJzLCBwaC5zdGFydE5hbWUsIHBoLmNsb3NlTmFtZSwgY2hpbGRyZW4sIHBoLmlzVm9pZCwgcGguc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IFBsYWNlaG9sZGVyIHtcbiAgICByZXR1cm4gbmV3IFBsYWNlaG9sZGVyKHBoLnZhbHVlLCBwaC5uYW1lLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogSWN1UGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgSWN1UGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG59XG5cbi8vIFZpc2l0IGFsbCB0aGUgbm9kZXMgcmVjdXJzaXZlbHlcbmV4cG9ydCBjbGFzcyBSZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHBoLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWaXNpdG9yIHtcbiAgdmlzaXRUYWcodGFnOiBUYWcpOiBhbnk7XG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KTogYW55O1xuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IGFueTtcbiAgdmlzaXREZWNsYXJhdGlvbihkZWNsOiBEZWNsYXJhdGlvbik6IGFueTtcbiAgdmlzaXREb2N0eXBlKGRvY3R5cGU6IERvY3R5cGUpOiBhbnk7XG59XG5cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBJVmlzaXRvciB7XG4gIHZpc2l0VGFnKHRhZzogVGFnKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHJBdHRycyA9IHRoaXMuX3NlcmlhbGl6ZUF0dHJpYnV0ZXModGFnLmF0dHJzKTtcbiAgICBpZiAodGFnLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGA8JHt0YWcubmFtZX0ke3N0ckF0dHJzfS8+YDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJDaGlsZHJlbiA9IHRhZy5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgICByZXR1cm4gYDwke3RhZy5uYW1lfSR7c3RyQXR0cnN9PiR7c3RyQ2hpbGRyZW4uam9pbihcIlwiKX08LyR7dGFnLm5hbWV9PmA7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIF9lc2NhcGVYbWwodGV4dC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgZWxlbWVudC5hdHRycy5mb3JFYWNoKChhdHRyOiBtbC5BdHRyaWJ1dGUpID0+IHtcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhZyA9IG5ldyBUYWcoZWxlbWVudC5uYW1lLCBhdHRycywgZWxlbWVudC5jaGlsZHJlbiBhcyBhbnkpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0VGFnKHRhZyk7XG4gIH1cblxuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IERlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDw/eG1sJHt0aGlzLl9zZXJpYWxpemVBdHRyaWJ1dGVzKGRlY2wuYXR0cnMpfSA/PmA7XG4gIH1cblxuICBwcml2YXRlIF9zZXJpYWxpemVBdHRyaWJ1dGVzKGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30pIHtcbiAgICBjb25zdCBzdHJBdHRycyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICAgICAgLm1hcCgobmFtZTogc3RyaW5nKSA9PiBgJHtuYW1lfT1cIiR7X2VzY2FwZVhtbChhdHRyc1tuYW1lXSl9XCJgKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiBzdHJBdHRycy5sZW5ndGggPiAwID8gXCIgXCIgKyBzdHJBdHRycyA6IFwiXCI7XG4gIH1cblxuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogRG9jdHlwZSk6IGFueSB7XG4gICAgcmV0dXJuIGA8IURPQ1RZUEUgJHtkb2N0eXBlLnJvb3RUYWd9IFtcXG4ke2RvY3R5cGUuZHRkfVxcbl0+YDtcbiAgfVxufVxuXG5jb25zdCBfdmlzaXRvciA9IG5ldyBWaXNpdG9yKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUobm9kZXM6IE5vZGVbXSk6IHN0cmluZyB7XG4gIHJldHVybiBub2Rlcy5tYXAoKG5vZGU6IE5vZGUpOiBzdHJpbmcgPT4gbm9kZS52aXNpdChfdmlzaXRvcikpLmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGVjbGFyYXRpb24gaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGVjbGFyYXRpb24odGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3R5cGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvb3RUYWc6IHN0cmluZywgcHVibGljIGR0ZDogc3RyaW5nKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdERvY3R5cGUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhZyBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9LCBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSA9IFtdKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRhZyh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZykge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUZXh0KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDUiBleHRlbmRzIFRleHQge1xuICBjb25zdHJ1Y3Rvcih3cyA9IDApIHtcbiAgICBzdXBlcihgXFxuJHtuZXcgQXJyYXkod3MgKyAxKS5qb2luKFwiIFwiKX1gKTtcbiAgfVxufVxuXG5jb25zdCBfRVNDQVBFRF9DSEFSUzogW1JlZ0V4cCwgc3RyaW5nXVtdID0gW1xuICBbLyYvZywgXCImYW1wO1wiXSxcbiAgWy9cIi9nLCBcIiZxdW90O1wiXSxcbiAgWy8nL2csIFwiJmFwb3M7XCJdLFxuICBbLzwvZywgXCImbHQ7XCJdLFxuICBbLz4vZywgXCImZ3Q7XCJdXG5dO1xuXG5mdW5jdGlvbiBfZXNjYXBlWG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBfRVNDQVBFRF9DSEFSUy5yZWR1Y2UoKHN0cjogc3RyaW5nLCBlbnRyeTogW1JlZ0V4cCwgc3RyaW5nXSkgPT4gc3RyLnJlcGxhY2UoZW50cnlbMF0sIGVudHJ5WzFdKSwgdGV4dCk7XG59XG4iLCJpbXBvcnQge0kxOG5EZWZ9IGZyb20gXCIuLi9pMThuLXBvbHlmaWxsXCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZTogUGFyc2VTb3VyY2VGaWxlLCBwdWJsaWMgb2Zmc2V0OiBudW1iZXIsIHB1YmxpYyBsaW5lOiBudW1iZXIsIHB1YmxpYyBjb2w6IG51bWJlcikge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCAhPSBudWxsID8gYCR7dGhpcy5saW5lfToke3RoaXMuY29sfWAgOiBcIlwiO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBzb3VyY2UgYXJvdW5kIHRoZSBsb2NhdGlvblxuICAvLyBVcCB0byBgbWF4Q2hhcnNgIG9yIGBtYXhMaW5lc2Agb24gZWFjaCBzaWRlIG9mIHRoZSBsb2NhdGlvblxuICBnZXRDb250ZXh0KG1heENoYXJzOiBudW1iZXIsIG1heExpbmVzOiBudW1iZXIpOiB7YmVmb3JlOiBzdHJpbmc7IGFmdGVyOiBzdHJpbmd9IHwgbnVsbCB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZmlsZS5jb250ZW50O1xuICAgIGxldCBzdGFydE9mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHN0YXJ0T2Zmc2V0ICE9IG51bGwpIHtcbiAgICAgIGlmIChzdGFydE9mZnNldCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdGFydE9mZnNldCA9IGNvbnRlbnQubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBlbmRPZmZzZXQgPSBzdGFydE9mZnNldDtcbiAgICAgIGxldCBjdHhDaGFycyA9IDA7XG4gICAgICBsZXQgY3R4TGluZXMgPSAwO1xuXG4gICAgICB3aGlsZSAoY3R4Q2hhcnMgPCBtYXhDaGFycyAmJiBzdGFydE9mZnNldCA+IDApIHtcbiAgICAgICAgc3RhcnRPZmZzZXQtLTtcbiAgICAgICAgY3R4Q2hhcnMrKztcbiAgICAgICAgaWYgKGNvbnRlbnRbc3RhcnRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3R4Q2hhcnMgPSAwO1xuICAgICAgY3R4TGluZXMgPSAwO1xuICAgICAgd2hpbGUgKGN0eENoYXJzIDwgbWF4Q2hhcnMgJiYgZW5kT2Zmc2V0IDwgY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGVuZE9mZnNldCsrO1xuICAgICAgICBjdHhDaGFycysrO1xuICAgICAgICBpZiAoY29udGVudFtlbmRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVmb3JlOiBjb250ZW50LnN1YnN0cmluZyhzdGFydE9mZnNldCwgdGhpcy5vZmZzZXQpLFxuICAgICAgICBhZnRlcjogY29udGVudC5zdWJzdHJpbmcodGhpcy5vZmZzZXQsIGVuZE9mZnNldCArIDEpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVNvdXJjZUZpbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGVudDogc3RyaW5nLCBwdWJsaWMgdXJsID0gXCJcIikge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGVuZDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGRldGFpbHM6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQuZmlsZS5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0Lm9mZnNldCwgdGhpcy5lbmQub2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBQYXJzZUVycm9yTGV2ZWwge1xuICBXQVJOSU5HLFxuICBFUlJPUlxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIG1zZzogc3RyaW5nLFxuICAgIHB1YmxpYyBsZXZlbDogUGFyc2VFcnJvckxldmVsID0gUGFyc2VFcnJvckxldmVsLkVSUk9SXG4gICkge31cblxuICBjb250ZXh0dWFsTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuc3Bhbi5zdGFydC5nZXRDb250ZXh0KDEwMCwgMyk7XG4gICAgcmV0dXJuIGN0eCA/IGAgKFwiJHtjdHguYmVmb3JlfVske1BhcnNlRXJyb3JMZXZlbFt0aGlzLmxldmVsXX0gLT5dJHtjdHguYWZ0ZXJ9XCIpYCA6IFwiXCI7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLnNwYW4uZGV0YWlscyA/IGAsICR7dGhpcy5zcGFuLmRldGFpbHN9YCA6IFwiXCI7XG4gICAgcmV0dXJuIGAke3RoaXMubXNnfSR7dGhpcy5jb250ZXh0dWFsTWVzc2FnZSgpfTogJHt0aGlzLnNwYW4uc3RhcnR9JHtkZXRhaWxzfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpMThuIGVycm9yLlxuICovXG5leHBvcnQgY2xhc3MgSTE4bkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuLCBtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uQ29uZmlnIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBzdHJpbmcsIHB1YmxpYyBlbmQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc6IEludGVycG9sYXRpb25Db25maWcgPSBuZXcgSW50ZXJwb2xhdGlvbkNvbmZpZyhcInt7XCIsIFwifX1cIik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCAkRU9GID0gMDtcbmV4cG9ydCBjb25zdCAkVEFCID0gOTtcbmV4cG9ydCBjb25zdCAkTEYgPSAxMDtcbmV4cG9ydCBjb25zdCAkVlRBQiA9IDExO1xuZXhwb3J0IGNvbnN0ICRGRiA9IDEyO1xuZXhwb3J0IGNvbnN0ICRDUiA9IDEzO1xuZXhwb3J0IGNvbnN0ICRTUEFDRSA9IDMyO1xuZXhwb3J0IGNvbnN0ICRCQU5HID0gMzM7XG5leHBvcnQgY29uc3QgJERRID0gMzQ7XG5leHBvcnQgY29uc3QgJEhBU0ggPSAzNTtcbmV4cG9ydCBjb25zdCAkJCA9IDM2O1xuZXhwb3J0IGNvbnN0ICRQRVJDRU5UID0gMzc7XG5leHBvcnQgY29uc3QgJEFNUEVSU0FORCA9IDM4O1xuZXhwb3J0IGNvbnN0ICRTUSA9IDM5O1xuZXhwb3J0IGNvbnN0ICRMUEFSRU4gPSA0MDtcbmV4cG9ydCBjb25zdCAkUlBBUkVOID0gNDE7XG5leHBvcnQgY29uc3QgJFNUQVIgPSA0MjtcbmV4cG9ydCBjb25zdCAkUExVUyA9IDQzO1xuZXhwb3J0IGNvbnN0ICRDT01NQSA9IDQ0O1xuZXhwb3J0IGNvbnN0ICRNSU5VUyA9IDQ1O1xuZXhwb3J0IGNvbnN0ICRQRVJJT0QgPSA0NjtcbmV4cG9ydCBjb25zdCAkU0xBU0ggPSA0NztcbmV4cG9ydCBjb25zdCAkQ09MT04gPSA1ODtcbmV4cG9ydCBjb25zdCAkU0VNSUNPTE9OID0gNTk7XG5leHBvcnQgY29uc3QgJExUID0gNjA7XG5leHBvcnQgY29uc3QgJEVRID0gNjE7XG5leHBvcnQgY29uc3QgJEdUID0gNjI7XG5leHBvcnQgY29uc3QgJFFVRVNUSU9OID0gNjM7XG5cbmV4cG9ydCBjb25zdCAkMCA9IDQ4O1xuZXhwb3J0IGNvbnN0ICQ5ID0gNTc7XG5cbmV4cG9ydCBjb25zdCAkQSA9IDY1O1xuZXhwb3J0IGNvbnN0ICRFID0gNjk7XG5leHBvcnQgY29uc3QgJEYgPSA3MDtcbmV4cG9ydCBjb25zdCAkWCA9IDg4O1xuZXhwb3J0IGNvbnN0ICRaID0gOTA7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNLRVQgPSA5MTtcbmV4cG9ydCBjb25zdCAkQkFDS1NMQVNIID0gOTI7XG5leHBvcnQgY29uc3QgJFJCUkFDS0VUID0gOTM7XG5leHBvcnQgY29uc3QgJENBUkVUID0gOTQ7XG5leHBvcnQgY29uc3QgJF8gPSA5NTtcblxuZXhwb3J0IGNvbnN0ICRhID0gOTc7XG5leHBvcnQgY29uc3QgJGUgPSAxMDE7XG5leHBvcnQgY29uc3QgJGYgPSAxMDI7XG5leHBvcnQgY29uc3QgJG4gPSAxMTA7XG5leHBvcnQgY29uc3QgJHIgPSAxMTQ7XG5leHBvcnQgY29uc3QgJHQgPSAxMTY7XG5leHBvcnQgY29uc3QgJHUgPSAxMTc7XG5leHBvcnQgY29uc3QgJHYgPSAxMTg7XG5leHBvcnQgY29uc3QgJHggPSAxMjA7XG5leHBvcnQgY29uc3QgJHogPSAxMjI7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNFID0gMTIzO1xuZXhwb3J0IGNvbnN0ICRCQVIgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFJCUkFDRSA9IDEyNTtcbmV4cG9ydCBjb25zdCAkTkJTUCA9IDE2MDtcblxuZXhwb3J0IGNvbnN0ICRQSVBFID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRUSUxEQSA9IDEyNjtcbmV4cG9ydCBjb25zdCAkQVQgPSA2NDtcblxuZXhwb3J0IGNvbnN0ICRCVCA9IDk2O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJFRBQiAmJiBjb2RlIDw9ICRTUEFDRSkgfHwgY29kZSA9PT0gJE5CU1A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gJDAgPD0gY29kZSAmJiBjb2RlIDw9ICQ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUxldHRlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRhICYmIGNvZGUgPD0gJHopIHx8IChjb2RlID49ICRBICYmIGNvZGUgPD0gJFopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUhleERpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkZikgfHwgKGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkRikgfHwgaXNEaWdpdChjb2RlKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGVudW0gVGFnQ29udGVudFR5cGUge1xuICBSQVdfVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBQQVJTQUJMRV9EQVRBXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50OiBib29sZWFuO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZyB8IG51bGw7XG4gIGNvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZTtcbiAgaXNWb2lkOiBib29sZWFuO1xuICBpZ25vcmVGaXJzdExmOiBib29sZWFuO1xuICBjYW5TZWxmQ2xvc2U6IGJvb2xlYW47XG5cbiAgcmVxdWlyZUV4dHJhUGFyZW50KGN1cnJlbnRQYXJlbnQ6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdE5zTmFtZShlbGVtZW50TmFtZTogc3RyaW5nKTogW3N0cmluZyB8IG51bGwsIHN0cmluZ10ge1xuICBpZiAoZWxlbWVudE5hbWVbMF0gIT09IFwiOlwiKSB7XG4gICAgcmV0dXJuIFtudWxsLCBlbGVtZW50TmFtZV07XG4gIH1cblxuICBjb25zdCBjb2xvbkluZGV4ID0gZWxlbWVudE5hbWUuaW5kZXhPZihcIjpcIiwgMSk7XG5cbiAgaWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBmb3JtYXQgXCIke2VsZW1lbnROYW1lfVwiIGV4cGVjdGluZyBcIjpuYW1lc3BhY2U6bmFtZVwiYCk7XG4gIH1cblxuICByZXR1cm4gW2VsZW1lbnROYW1lLnNsaWNlKDEsIGNvbG9uSW5kZXgpLCBlbGVtZW50TmFtZS5zbGljZShjb2xvbkluZGV4ICsgMSldO1xufVxuXG4vLyBgPG5nLWNvbnRhaW5lcj5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGFpbmVyKHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09IFwibmctY29udGFpbmVyXCI7XG59XG5cbi8vIGA8bmctY29udGVudD5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGVudCh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSBcIm5nLWNvbnRlbnRcIjtcbn1cblxuLy8gYDxuZy10ZW1wbGF0ZT5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nVGVtcGxhdGUodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gXCJuZy10ZW1wbGF0ZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyk6IHN0cmluZztcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogbnVsbCk6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIGZ1bGxOYW1lID09PSBudWxsID8gbnVsbCA6IHNwbGl0TnNOYW1lKGZ1bGxOYW1lKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTnNBbmROYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwcmVmaXggPyBgOiR7cHJlZml4fToke2xvY2FsTmFtZX1gIDogbG9jYWxOYW1lO1xufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzXG4vLyBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW50aXRpZXMuanNvblxuLy8gVGhpcyBsaXN0IGlzIG5vdCBleGhhdXN0aXZlIHRvIGtlZXAgdGhlIGNvbXBpbGVyIGZvb3RwcmludCBsb3cuXG4vLyBUaGUgYCYjMTIzO2AgLyBgJiN4MWFiO2Agc3ludGF4IHNob3VsZCBiZSB1c2VkIHdoZW4gdGhlIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2UgZG9lcyBub3Rcbi8vIGV4aXN0LlxuXG5leHBvcnQgY29uc3QgTkFNRURfRU5USVRJRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgQWFjdXRlOiBcIlxcdTAwQzFcIixcbiAgYWFjdXRlOiBcIlxcdTAwRTFcIixcbiAgQWNpcmM6IFwiXFx1MDBDMlwiLFxuICBhY2lyYzogXCJcXHUwMEUyXCIsXG4gIGFjdXRlOiBcIlxcdTAwQjRcIixcbiAgQUVsaWc6IFwiXFx1MDBDNlwiLFxuICBhZWxpZzogXCJcXHUwMEU2XCIsXG4gIEFncmF2ZTogXCJcXHUwMEMwXCIsXG4gIGFncmF2ZTogXCJcXHUwMEUwXCIsXG4gIGFsZWZzeW06IFwiXFx1MjEzNVwiLFxuICBBbHBoYTogXCJcXHUwMzkxXCIsXG4gIGFscGhhOiBcIlxcdTAzQjFcIixcbiAgYW1wOiBcIiZcIixcbiAgYW5kOiBcIlxcdTIyMjdcIixcbiAgYW5nOiBcIlxcdTIyMjBcIixcbiAgYXBvczogXCJcXHUwMDI3XCIsXG4gIEFyaW5nOiBcIlxcdTAwQzVcIixcbiAgYXJpbmc6IFwiXFx1MDBFNVwiLFxuICBhc3ltcDogXCJcXHUyMjQ4XCIsXG4gIEF0aWxkZTogXCJcXHUwMEMzXCIsXG4gIGF0aWxkZTogXCJcXHUwMEUzXCIsXG4gIEF1bWw6IFwiXFx1MDBDNFwiLFxuICBhdW1sOiBcIlxcdTAwRTRcIixcbiAgYmRxdW86IFwiXFx1MjAxRVwiLFxuICBCZXRhOiBcIlxcdTAzOTJcIixcbiAgYmV0YTogXCJcXHUwM0IyXCIsXG4gIGJydmJhcjogXCJcXHUwMEE2XCIsXG4gIGJ1bGw6IFwiXFx1MjAyMlwiLFxuICBjYXA6IFwiXFx1MjIyOVwiLFxuICBDY2VkaWw6IFwiXFx1MDBDN1wiLFxuICBjY2VkaWw6IFwiXFx1MDBFN1wiLFxuICBjZWRpbDogXCJcXHUwMEI4XCIsXG4gIGNlbnQ6IFwiXFx1MDBBMlwiLFxuICBDaGk6IFwiXFx1MDNBN1wiLFxuICBjaGk6IFwiXFx1MDNDN1wiLFxuICBjaXJjOiBcIlxcdTAyQzZcIixcbiAgY2x1YnM6IFwiXFx1MjY2M1wiLFxuICBjb25nOiBcIlxcdTIyNDVcIixcbiAgY29weTogXCJcXHUwMEE5XCIsXG4gIGNyYXJyOiBcIlxcdTIxQjVcIixcbiAgY3VwOiBcIlxcdTIyMkFcIixcbiAgY3VycmVuOiBcIlxcdTAwQTRcIixcbiAgZGFnZ2VyOiBcIlxcdTIwMjBcIixcbiAgRGFnZ2VyOiBcIlxcdTIwMjFcIixcbiAgZGFycjogXCJcXHUyMTkzXCIsXG4gIGRBcnI6IFwiXFx1MjFEM1wiLFxuICBkZWc6IFwiXFx1MDBCMFwiLFxuICBEZWx0YTogXCJcXHUwMzk0XCIsXG4gIGRlbHRhOiBcIlxcdTAzQjRcIixcbiAgZGlhbXM6IFwiXFx1MjY2NlwiLFxuICBkaXZpZGU6IFwiXFx1MDBGN1wiLFxuICBFYWN1dGU6IFwiXFx1MDBDOVwiLFxuICBlYWN1dGU6IFwiXFx1MDBFOVwiLFxuICBFY2lyYzogXCJcXHUwMENBXCIsXG4gIGVjaXJjOiBcIlxcdTAwRUFcIixcbiAgRWdyYXZlOiBcIlxcdTAwQzhcIixcbiAgZWdyYXZlOiBcIlxcdTAwRThcIixcbiAgZW1wdHk6IFwiXFx1MjIwNVwiLFxuICBlbXNwOiBcIlxcdTIwMDNcIixcbiAgZW5zcDogXCJcXHUyMDAyXCIsXG4gIEVwc2lsb246IFwiXFx1MDM5NVwiLFxuICBlcHNpbG9uOiBcIlxcdTAzQjVcIixcbiAgZXF1aXY6IFwiXFx1MjI2MVwiLFxuICBFdGE6IFwiXFx1MDM5N1wiLFxuICBldGE6IFwiXFx1MDNCN1wiLFxuICBFVEg6IFwiXFx1MDBEMFwiLFxuICBldGg6IFwiXFx1MDBGMFwiLFxuICBFdW1sOiBcIlxcdTAwQ0JcIixcbiAgZXVtbDogXCJcXHUwMEVCXCIsXG4gIGV1cm86IFwiXFx1MjBBQ1wiLFxuICBleGlzdDogXCJcXHUyMjAzXCIsXG4gIGZub2Y6IFwiXFx1MDE5MlwiLFxuICBmb3JhbGw6IFwiXFx1MjIwMFwiLFxuICBmcmFjMTI6IFwiXFx1MDBCRFwiLFxuICBmcmFjMTQ6IFwiXFx1MDBCQ1wiLFxuICBmcmFjMzQ6IFwiXFx1MDBCRVwiLFxuICBmcmFzbDogXCJcXHUyMDQ0XCIsXG4gIEdhbW1hOiBcIlxcdTAzOTNcIixcbiAgZ2FtbWE6IFwiXFx1MDNCM1wiLFxuICBnZTogXCJcXHUyMjY1XCIsXG4gIGd0OiBcIj5cIixcbiAgaGFycjogXCJcXHUyMTk0XCIsXG4gIGhBcnI6IFwiXFx1MjFENFwiLFxuICBoZWFydHM6IFwiXFx1MjY2NVwiLFxuICBoZWxsaXA6IFwiXFx1MjAyNlwiLFxuICBJYWN1dGU6IFwiXFx1MDBDRFwiLFxuICBpYWN1dGU6IFwiXFx1MDBFRFwiLFxuICBJY2lyYzogXCJcXHUwMENFXCIsXG4gIGljaXJjOiBcIlxcdTAwRUVcIixcbiAgaWV4Y2w6IFwiXFx1MDBBMVwiLFxuICBJZ3JhdmU6IFwiXFx1MDBDQ1wiLFxuICBpZ3JhdmU6IFwiXFx1MDBFQ1wiLFxuICBpbWFnZTogXCJcXHUyMTExXCIsXG4gIGluZmluOiBcIlxcdTIyMUVcIixcbiAgaW50OiBcIlxcdTIyMkJcIixcbiAgSW90YTogXCJcXHUwMzk5XCIsXG4gIGlvdGE6IFwiXFx1MDNCOVwiLFxuICBpcXVlc3Q6IFwiXFx1MDBCRlwiLFxuICBpc2luOiBcIlxcdTIyMDhcIixcbiAgSXVtbDogXCJcXHUwMENGXCIsXG4gIGl1bWw6IFwiXFx1MDBFRlwiLFxuICBLYXBwYTogXCJcXHUwMzlBXCIsXG4gIGthcHBhOiBcIlxcdTAzQkFcIixcbiAgTGFtYmRhOiBcIlxcdTAzOUJcIixcbiAgbGFtYmRhOiBcIlxcdTAzQkJcIixcbiAgbGFuZzogXCJcXHUyN0U4XCIsXG4gIGxhcXVvOiBcIlxcdTAwQUJcIixcbiAgbGFycjogXCJcXHUyMTkwXCIsXG4gIGxBcnI6IFwiXFx1MjFEMFwiLFxuICBsY2VpbDogXCJcXHUyMzA4XCIsXG4gIGxkcXVvOiBcIlxcdTIwMUNcIixcbiAgbGU6IFwiXFx1MjI2NFwiLFxuICBsZmxvb3I6IFwiXFx1MjMwQVwiLFxuICBsb3dhc3Q6IFwiXFx1MjIxN1wiLFxuICBsb3o6IFwiXFx1MjVDQVwiLFxuICBscm06IFwiXFx1MjAwRVwiLFxuICBsc2FxdW86IFwiXFx1MjAzOVwiLFxuICBsc3F1bzogXCJcXHUyMDE4XCIsXG4gIGx0OiBcIjxcIixcbiAgbWFjcjogXCJcXHUwMEFGXCIsXG4gIG1kYXNoOiBcIlxcdTIwMTRcIixcbiAgbWljcm86IFwiXFx1MDBCNVwiLFxuICBtaWRkb3Q6IFwiXFx1MDBCN1wiLFxuICBtaW51czogXCJcXHUyMjEyXCIsXG4gIE11OiBcIlxcdTAzOUNcIixcbiAgbXU6IFwiXFx1MDNCQ1wiLFxuICBuYWJsYTogXCJcXHUyMjA3XCIsXG4gIG5ic3A6IFwiXFx1MDBBMFwiLFxuICBuZGFzaDogXCJcXHUyMDEzXCIsXG4gIG5lOiBcIlxcdTIyNjBcIixcbiAgbmk6IFwiXFx1MjIwQlwiLFxuICBub3Q6IFwiXFx1MDBBQ1wiLFxuICBub3RpbjogXCJcXHUyMjA5XCIsXG4gIG5zdWI6IFwiXFx1MjI4NFwiLFxuICBOdGlsZGU6IFwiXFx1MDBEMVwiLFxuICBudGlsZGU6IFwiXFx1MDBGMVwiLFxuICBOdTogXCJcXHUwMzlEXCIsXG4gIG51OiBcIlxcdTAzQkRcIixcbiAgT2FjdXRlOiBcIlxcdTAwRDNcIixcbiAgb2FjdXRlOiBcIlxcdTAwRjNcIixcbiAgT2NpcmM6IFwiXFx1MDBENFwiLFxuICBvY2lyYzogXCJcXHUwMEY0XCIsXG4gIE9FbGlnOiBcIlxcdTAxNTJcIixcbiAgb2VsaWc6IFwiXFx1MDE1M1wiLFxuICBPZ3JhdmU6IFwiXFx1MDBEMlwiLFxuICBvZ3JhdmU6IFwiXFx1MDBGMlwiLFxuICBvbGluZTogXCJcXHUyMDNFXCIsXG4gIE9tZWdhOiBcIlxcdTAzQTlcIixcbiAgb21lZ2E6IFwiXFx1MDNDOVwiLFxuICBPbWljcm9uOiBcIlxcdTAzOUZcIixcbiAgb21pY3JvbjogXCJcXHUwM0JGXCIsXG4gIG9wbHVzOiBcIlxcdTIyOTVcIixcbiAgb3I6IFwiXFx1MjIyOFwiLFxuICBvcmRmOiBcIlxcdTAwQUFcIixcbiAgb3JkbTogXCJcXHUwMEJBXCIsXG4gIE9zbGFzaDogXCJcXHUwMEQ4XCIsXG4gIG9zbGFzaDogXCJcXHUwMEY4XCIsXG4gIE90aWxkZTogXCJcXHUwMEQ1XCIsXG4gIG90aWxkZTogXCJcXHUwMEY1XCIsXG4gIG90aW1lczogXCJcXHUyMjk3XCIsXG4gIE91bWw6IFwiXFx1MDBENlwiLFxuICBvdW1sOiBcIlxcdTAwRjZcIixcbiAgcGFyYTogXCJcXHUwMEI2XCIsXG4gIHBlcm1pbDogXCJcXHUyMDMwXCIsXG4gIHBlcnA6IFwiXFx1MjJBNVwiLFxuICBQaGk6IFwiXFx1MDNBNlwiLFxuICBwaGk6IFwiXFx1MDNDNlwiLFxuICBQaTogXCJcXHUwM0EwXCIsXG4gIHBpOiBcIlxcdTAzQzBcIixcbiAgcGl2OiBcIlxcdTAzRDZcIixcbiAgcGx1c21uOiBcIlxcdTAwQjFcIixcbiAgcG91bmQ6IFwiXFx1MDBBM1wiLFxuICBwcmltZTogXCJcXHUyMDMyXCIsXG4gIFByaW1lOiBcIlxcdTIwMzNcIixcbiAgcHJvZDogXCJcXHUyMjBGXCIsXG4gIHByb3A6IFwiXFx1MjIxRFwiLFxuICBQc2k6IFwiXFx1MDNBOFwiLFxuICBwc2k6IFwiXFx1MDNDOFwiLFxuICBxdW90OiBcIlxcdTAwMjJcIixcbiAgcmFkaWM6IFwiXFx1MjIxQVwiLFxuICByYW5nOiBcIlxcdTI3RTlcIixcbiAgcmFxdW86IFwiXFx1MDBCQlwiLFxuICByYXJyOiBcIlxcdTIxOTJcIixcbiAgckFycjogXCJcXHUyMUQyXCIsXG4gIHJjZWlsOiBcIlxcdTIzMDlcIixcbiAgcmRxdW86IFwiXFx1MjAxRFwiLFxuICByZWFsOiBcIlxcdTIxMUNcIixcbiAgcmVnOiBcIlxcdTAwQUVcIixcbiAgcmZsb29yOiBcIlxcdTIzMEJcIixcbiAgUmhvOiBcIlxcdTAzQTFcIixcbiAgcmhvOiBcIlxcdTAzQzFcIixcbiAgcmxtOiBcIlxcdTIwMEZcIixcbiAgcnNhcXVvOiBcIlxcdTIwM0FcIixcbiAgcnNxdW86IFwiXFx1MjAxOVwiLFxuICBzYnF1bzogXCJcXHUyMDFBXCIsXG4gIFNjYXJvbjogXCJcXHUwMTYwXCIsXG4gIHNjYXJvbjogXCJcXHUwMTYxXCIsXG4gIHNkb3Q6IFwiXFx1MjJDNVwiLFxuICBzZWN0OiBcIlxcdTAwQTdcIixcbiAgc2h5OiBcIlxcdTAwQURcIixcbiAgU2lnbWE6IFwiXFx1MDNBM1wiLFxuICBzaWdtYTogXCJcXHUwM0MzXCIsXG4gIHNpZ21hZjogXCJcXHUwM0MyXCIsXG4gIHNpbTogXCJcXHUyMjNDXCIsXG4gIHNwYWRlczogXCJcXHUyNjYwXCIsXG4gIHN1YjogXCJcXHUyMjgyXCIsXG4gIHN1YmU6IFwiXFx1MjI4NlwiLFxuICBzdW06IFwiXFx1MjIxMVwiLFxuICBzdXA6IFwiXFx1MjI4M1wiLFxuICBzdXAxOiBcIlxcdTAwQjlcIixcbiAgc3VwMjogXCJcXHUwMEIyXCIsXG4gIHN1cDM6IFwiXFx1MDBCM1wiLFxuICBzdXBlOiBcIlxcdTIyODdcIixcbiAgc3psaWc6IFwiXFx1MDBERlwiLFxuICBUYXU6IFwiXFx1MDNBNFwiLFxuICB0YXU6IFwiXFx1MDNDNFwiLFxuICB0aGVyZTQ6IFwiXFx1MjIzNFwiLFxuICBUaGV0YTogXCJcXHUwMzk4XCIsXG4gIHRoZXRhOiBcIlxcdTAzQjhcIixcbiAgdGhldGFzeW06IFwiXFx1MDNEMVwiLFxuICB0aGluc3A6IFwiXFx1MjAwOVwiLFxuICBUSE9STjogXCJcXHUwMERFXCIsXG4gIHRob3JuOiBcIlxcdTAwRkVcIixcbiAgdGlsZGU6IFwiXFx1MDJEQ1wiLFxuICB0aW1lczogXCJcXHUwMEQ3XCIsXG4gIHRyYWRlOiBcIlxcdTIxMjJcIixcbiAgVWFjdXRlOiBcIlxcdTAwREFcIixcbiAgdWFjdXRlOiBcIlxcdTAwRkFcIixcbiAgdWFycjogXCJcXHUyMTkxXCIsXG4gIHVBcnI6IFwiXFx1MjFEMVwiLFxuICBVY2lyYzogXCJcXHUwMERCXCIsXG4gIHVjaXJjOiBcIlxcdTAwRkJcIixcbiAgVWdyYXZlOiBcIlxcdTAwRDlcIixcbiAgdWdyYXZlOiBcIlxcdTAwRjlcIixcbiAgdW1sOiBcIlxcdTAwQThcIixcbiAgdXBzaWg6IFwiXFx1MDNEMlwiLFxuICBVcHNpbG9uOiBcIlxcdTAzQTVcIixcbiAgdXBzaWxvbjogXCJcXHUwM0M1XCIsXG4gIFV1bWw6IFwiXFx1MDBEQ1wiLFxuICB1dW1sOiBcIlxcdTAwRkNcIixcbiAgd2VpZXJwOiBcIlxcdTIxMThcIixcbiAgWGk6IFwiXFx1MDM5RVwiLFxuICB4aTogXCJcXHUwM0JFXCIsXG4gIFlhY3V0ZTogXCJcXHUwMEREXCIsXG4gIHlhY3V0ZTogXCJcXHUwMEZEXCIsXG4gIHllbjogXCJcXHUwMEE1XCIsXG4gIHl1bWw6IFwiXFx1MDBGRlwiLFxuICBZdW1sOiBcIlxcdTAxNzhcIixcbiAgWmV0YTogXCJcXHUwMzk2XCIsXG4gIHpldGE6IFwiXFx1MDNCNlwiLFxuICB6d2o6IFwiXFx1MjAwRFwiLFxuICB6d25qOiBcIlxcdTIwMENcIlxufTtcblxuLy8gVGhlICZuZ3NwOyBwc2V1ZG8tZW50aXR5IGlzIGRlbm90aW5nIGEgc3BhY2UuIHNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ0LWxhbmcvYW5ndWxhci9ibG9iLzBiYjYxMTM4N2QyOWQ2NWI1YWY3ZjlkMjUxNWFiNTcxZmQzZmJlZTQvX3Rlc3RzL3Rlc3QvY29tcGlsZXIvcHJlc2VydmVfd2hpdGVzcGFjZV90ZXN0LmRhcnRcbmV4cG9ydCBjb25zdCBOR1NQX1VOSUNPREUgPSBcIlxcdUU1MDBcIjtcblxuTkFNRURfRU5USVRJRVNbXCJuZ3NwXCJdID0gTkdTUF9VTklDT0RFO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4vY2hhcnNcIjtcbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VMb2NhdGlvbiwgUGFyc2VTb3VyY2VGaWxlLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtOQU1FRF9FTlRJVElFUywgVGFnQ29udGVudFR5cGUsIFRhZ0RlZmluaXRpb259IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgVEFHX09QRU5fU1RBUlQsXG4gIFRBR19PUEVOX0VORCxcbiAgVEFHX09QRU5fRU5EX1ZPSUQsXG4gIFRBR19DTE9TRSxcbiAgVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBSQVdfVEVYVCxcbiAgQ09NTUVOVF9TVEFSVCxcbiAgQ09NTUVOVF9FTkQsXG4gIENEQVRBX1NUQVJULFxuICBDREFUQV9FTkQsXG4gIEFUVFJfTkFNRSxcbiAgQVRUUl9WQUxVRSxcbiAgRE9DX1RZUEUsXG4gIEVYUEFOU0lPTl9GT1JNX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9WQUxVRSxcbiAgRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9FWFBfRU5ELFxuICBFWFBBTlNJT05fRk9STV9FTkQsXG4gIEVPRlxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgcGFydHM6IHN0cmluZ1tdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5FcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlcnJvck1zZzogc3RyaW5nLCBwdWJsaWMgdG9rZW5UeXBlOiBUb2tlblR5cGUsIHNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIHN1cGVyKHNwYW4sIGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zOiBUb2tlbltdLCBwdWJsaWMgZXJyb3JzOiBUb2tlbkVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShcbiAgc291cmNlOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uLFxuICB0b2tlbml6ZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4pOiBUb2tlbml6ZVJlc3VsdCB7XG4gIHJldHVybiBuZXcgVG9rZW5pemVyKFxuICAgIG5ldyBQYXJzZVNvdXJjZUZpbGUoc291cmNlLCB1cmwpLFxuICAgIGdldFRhZ0RlZmluaXRpb24sXG4gICAgdG9rZW5pemVFeHBhbnNpb25Gb3JtcyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICkudG9rZW5pemUoKTtcbn1cblxuY29uc3QgX0NSX09SX0NSTEZfUkVHRVhQID0gL1xcclxcbj8vZztcblxuZnVuY3Rpb24gX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFyQ29kZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgY2hhciA9IGNoYXJDb2RlID09PSBjaGFycy4kRU9GID8gXCJFT0ZcIiA6IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpO1xuICByZXR1cm4gYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJHtjaGFyfVwiYDtcbn1cblxuZnVuY3Rpb24gX3Vua25vd25FbnRpdHlFcnJvck1zZyhlbnRpdHlTcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgVW5rbm93biBlbnRpdHkgXCIke2VudGl0eVNyY31cIiAtIHVzZSB0aGUgXCImIzxkZWNpbWFsPjtcIiBvciAgXCImI3g8aGV4PjtcIiBzeW50YXhgO1xufVxuXG5jbGFzcyBDb250cm9sRmxvd0Vycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yOiBUb2tlbkVycm9yKSB7fVxufVxuXG4vLyBTZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI3dyaXRpbmdcbmNsYXNzIFRva2VuaXplciB7XG4gIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuICAvLyBOb3RlOiB0aGlzIGlzIGFsd2F5cyBsb3dlcmNhc2UhXG4gIHByaXZhdGUgX3BlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfbmV4dFBlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfaW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfbGluZSA9IDA7XG4gIHByaXZhdGUgX2NvbHVtbiA9IC0xO1xuICBwcml2YXRlIF9jdXJyZW50VG9rZW5TdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfY3VycmVudFRva2VuVHlwZTogVG9rZW5UeXBlO1xuICBwcml2YXRlIF9leHBhbnNpb25DYXNlU3RhY2s6IFRva2VuVHlwZVtdID0gW107XG4gIHByaXZhdGUgX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuXG4gIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICBlcnJvcnM6IFRva2VuRXJyb3JbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gX2ZpbGUgVGhlIGh0bWwgc291cmNlXG4gICAqIEBwYXJhbSBfZ2V0VGFnRGVmaW5pdGlvblxuICAgKiBAcGFyYW0gX3Rva2VuaXplSWN1IFdoZXRoZXIgdG8gdG9rZW5pemUgSUNVIG1lc3NhZ2VzIChjb25zaWRlcmVkIGFzIHRleHQgbm9kZXMgd2hlbiBmYWxzZSlcbiAgICogQHBhcmFtIF9pbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWxlOiBQYXJzZVNvdXJjZUZpbGUsXG4gICAgcHJpdmF0ZSBfZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbixcbiAgICBwcml2YXRlIF90b2tlbml6ZUljdTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApIHtcbiAgICB0aGlzLl9pbnB1dCA9IF9maWxlLmNvbnRlbnQ7XG4gICAgdGhpcy5fbGVuZ3RoID0gX2ZpbGUuY29udGVudC5sZW5ndGg7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3ByZXByb2Nlc3NpbmctdGhlLWlucHV0LXN0cmVhbVxuICAgIC8vIEluIG9yZGVyIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UsIHdlIGNhbiBub3RcbiAgICAvLyBwcmUtcHJvY2VzcyBpdC5cbiAgICAvLyBJbnN0ZWFkIENScyBhcmUgcHJvY2Vzc2VkIHJpZ2h0IGJlZm9yZSBpbnN0YW50aWF0aW5nIHRoZSB0b2tlbnMuXG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShfQ1JfT1JfQ1JMRl9SRUdFWFAsIFwiXFxuXCIpO1xuICB9XG5cbiAgdG9rZW5pemUoKTogVG9rZW5pemVSZXN1bHQge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRMVCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRCQU5HKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTEJSQUNLRVQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YShzdGFydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTUlOVVMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVEb2NUeXBlKHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnQ2xvc2Uoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnT3BlbihzdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEodGhpcy5fdG9rZW5pemVJY3UgJiYgdGhpcy5fdG9rZW5pemVFeHBhbnNpb25Gb3JtKCkpKSB7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZVRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbnRyb2xGbG93RXJyb3IpIHtcbiAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRU9GKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZVJlc3VsdChtZXJnZVRleHRUb2tlbnModGhpcy50b2tlbnMpLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgd2hldGhlciBhbiBJQ1UgdG9rZW4gaGFzIGJlZW4gY3JlYXRlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX3Rva2VuaXplRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICBpZiAoaXNFeHBhbnNpb25Gb3JtU3RhcnQodGhpcy5faW5wdXQsIHRoaXMuX2luZGV4LCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKSkge1xuICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1TdGFydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHRoaXMuX3BlZWspICYmIHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb25DYXNlU3RhcnQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFKSB7XG4gICAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkNhc2UoKSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uQ2FzZUVuZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYXRpb24oKTogUGFyc2VMb2NhdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUxvY2F0aW9uKHRoaXMuX2ZpbGUsIHRoaXMuX2luZGV4LCB0aGlzLl9saW5lLCB0aGlzLl9jb2x1bW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3BhbihcbiAgICBzdGFydDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCksXG4gICAgZW5kOiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKVxuICApOiBQYXJzZVNvdXJjZVNwYW4ge1xuICAgIHJldHVybiBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmVnaW5Ub2tlbih0eXBlOiBUb2tlblR5cGUsIHN0YXJ0OiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSkge1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IHR5cGU7XG4gIH1cblxuICBwcml2YXRlIF9lbmRUb2tlbihwYXJ0czogc3RyaW5nW10sIGVuZDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCkpOiBUb2tlbiB7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgVG9rZW4odGhpcy5fY3VycmVudFRva2VuVHlwZSwgcGFydHMsIG5ldyBQYXJzZVNvdXJjZVNwYW4odGhpcy5fY3VycmVudFRva2VuU3RhcnQsIGVuZCkpO1xuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gbnVsbCE7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IG51bGwhO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVycm9yKG1zZzogc3RyaW5nLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBDb250cm9sRmxvd0Vycm9yIHtcbiAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgbXNnICs9IGAgKERvIHlvdSBoYXZlIGFuIHVuZXNjYXBlZCBcIntcIiBpbiB5b3VyIHRlbXBsYXRlPyBVc2UgXCJ7eyAneycgfX1cIikgdG8gZXNjYXBlIGl0LilgO1xuICAgIH1cbiAgICBjb25zdCBlcnJvciA9IG5ldyBUb2tlbkVycm9yKG1zZywgdGhpcy5fY3VycmVudFRva2VuVHlwZSwgc3Bhbik7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBudWxsITtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gbnVsbCE7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sRmxvd0Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luZGV4ID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFycy4kRU9GKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMRikge1xuICAgICAgdGhpcy5fbGluZSsrO1xuICAgICAgdGhpcy5fY29sdW1uID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRMRiAmJiB0aGlzLl9wZWVrICE9PSBjaGFycy4kQ1IpIHtcbiAgICAgIHRoaXMuX2NvbHVtbisrO1xuICAgIH1cbiAgICB0aGlzLl9pbmRleCsrO1xuICAgIHRoaXMuX3BlZWsgPSB0aGlzLl9pbmRleCA+PSB0aGlzLl9sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5faW5wdXQuY2hhckNvZGVBdCh0aGlzLl9pbmRleCk7XG4gICAgdGhpcy5fbmV4dFBlZWsgPSB0aGlzLl9pbmRleCArIDEgPj0gdGhpcy5fbGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuX2lucHV0LmNoYXJDb2RlQXQodGhpcy5faW5kZXggKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJDb2RlKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdENoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNoYXJDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKHRoaXMuX3BlZWssIGNoYXJDb2RlKSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVpcmVDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJDb2RlKSkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3Bhbihsb2NhdGlvbiwgbG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBsZW4gPSBjaGFycy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2luZGV4ICsgbGVuID4gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIC8vIElmIGF0dGVtcHRpbmcgdG8gcGFyc2UgdGhlIHN0cmluZyBmYWlscywgd2Ugd2FudCB0byByZXNldCB0aGUgcGFyc2VyXG4gICAgICAgIC8vIHRvIHdoZXJlIGl0IHdhcyBiZWZvcmUgdGhlIGF0dGVtcHRcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyQ2FzZUluc2Vuc2l0aXZlKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZUNhc2VJbnNlbnNpdGl2ZShjaGFycy5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZVN0cihjaGFyczogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdFN0cihjaGFycykpIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4obG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKHByZWRpY2F0ZTogKGNvZGU6IG51bWJlcikgPT4gYm9vbGVhbikge1xuICAgIHdoaWxlICghcHJlZGljYXRlKHRoaXMuX3BlZWspKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZUNoYXJDb2RlVW50aWxGbihwcmVkaWNhdGU6IChjb2RlOiBudW1iZXIpID0+IGJvb2xlYW4sIGxlbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4ocHJlZGljYXRlKTtcbiAgICBpZiAodGhpcy5faW5kZXggLSBzdGFydC5vZmZzZXQgPCBsZW4pIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4oc3RhcnQsIHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdFVudGlsQ2hhcihjaGFyOiBudW1iZXIpIHtcbiAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gY2hhcikge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlYWRDaGFyKGRlY29kZUVudGl0aWVzOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoZGVjb2RlRW50aXRpZXMgJiYgdGhpcy5fcGVlayA9PT0gY2hhcnMuJEFNUEVSU0FORCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29kZUVudGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0W2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNvZGVFbnRpdHkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEhBU0gpKSB7XG4gICAgICBjb25zdCBpc0hleCA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4keCkgfHwgdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRYKTtcbiAgICAgIGNvbnN0IG51bWJlclN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKS5vZmZzZXQ7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzRGlnaXRFbnRpdHlFbmQpO1xuICAgICAgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHN0ck51bSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhudW1iZXJTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gcGFyc2VJbnQoc3RyTnVtLCBpc0hleCA/IDE2IDogMTApO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5rbm93bkVudGl0eUVycm9yTXNnKGVudGl0eSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05hbWVkRW50aXR5RW5kKTtcbiAgICAgIGlmICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0VNSUNPTE9OKSB7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIFwiJlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgY29uc3QgY2hhciA9IE5BTUVEX0VOVElUSUVTW25hbWVdO1xuICAgICAgaWYgKCFjaGFyKSB7XG4gICAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmtub3duRW50aXR5RXJyb3JNc2cobmFtZSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFyO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0KGRlY29kZUVudGl0aWVzOiBib29sZWFuLCBmaXJzdENoYXJPZkVuZDogbnVtYmVyLCBhdHRlbXB0RW5kUmVzdDogKCkgPT4gYm9vbGVhbik6IFRva2VuIHtcbiAgICBsZXQgdGFnQ2xvc2VTdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgICBjb25zdCB0ZXh0U3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oZGVjb2RlRW50aXRpZXMgPyBUb2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUIDogVG9rZW5UeXBlLlJBV19URVhULCB0ZXh0U3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0YWdDbG9zZVN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoZmlyc3RDaGFyT2ZFbmQpICYmIGF0dGVtcHRFbmRSZXN0KCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5kZXggPiB0YWdDbG9zZVN0YXJ0Lm9mZnNldCkge1xuICAgICAgICAvLyBhZGQgdGhlIGNoYXJhY3RlcnMgY29uc3VtZWQgYnkgdGhlIHByZXZpb3VzIGlmIHN0YXRlbWVudCB0byB0aGUgb3V0cHV0XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5faW5wdXQuc3Vic3RyaW5nKHRhZ0Nsb3NlU3RhcnQub2Zmc2V0LCB0aGlzLl9pbmRleCkpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGZpcnN0Q2hhck9mRW5kKSB7XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5fcmVhZENoYXIoZGVjb2RlRW50aXRpZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSwgdGFnQ2xvc2VTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ29tbWVudChzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlRfU1RBUlQsIHN0YXJ0KTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJE1JTlVTKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgY29uc3QgdGV4dFRva2VuID0gdGhpcy5fY29uc3VtZVJhd1RleHQoZmFsc2UsIGNoYXJzLiRNSU5VUywgKCkgPT4gdGhpcy5fYXR0ZW1wdFN0cihcIi0+XCIpKTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DT01NRU5UX0VORCwgdGV4dFRva2VuLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ2RhdGEoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DREFUQV9TVEFSVCwgc3RhcnQpO1xuICAgIHRoaXMuX3JlcXVpcmVTdHIoXCJDREFUQVtcIik7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICAgIGNvbnN0IHRleHRUb2tlbiA9IHRoaXMuX2NvbnN1bWVSYXdUZXh0KGZhbHNlLCBjaGFycy4kUkJSQUNLRVQsICgpID0+IHRoaXMuX2F0dGVtcHRTdHIoXCJdPlwiKSk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQ0RBVEFfRU5ELCB0ZXh0VG9rZW4uc291cmNlU3Bhbi5lbmQpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVEb2NUeXBlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRE9DX1RZUEUsIHN0YXJ0KTtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQub2Zmc2V0ICsgMiwgdGhpcy5faW5kZXggLSAxKV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVByZWZpeEFuZE5hbWUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG5hbWVPclByZWZpeFN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgbGV0IHByZWZpeDogc3RyaW5nID0gbnVsbCE7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRDT0xPTiAmJiAhaXNQcmVmaXhFbmQodGhpcy5fcGVlaykpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gICAgbGV0IG5hbWVTdGFydDogbnVtYmVyO1xuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kQ09MT04pIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHByZWZpeCA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lT3JQcmVmaXhTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lU3RhcnQgPSBuYW1lT3JQcmVmaXhTdGFydDtcbiAgICB9XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIHRoaXMuX2luZGV4ID09PSBuYW1lU3RhcnQgPyAxIDogMCk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lU3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlbihzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIGNvbnN0IHNhdmVkUG9zID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgbGV0IHRhZ05hbWU6IHN0cmluZztcbiAgICBsZXQgbG93ZXJjYXNlVGFnTmFtZTogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWNoYXJzLmlzQXNjaWlMZXR0ZXIodGhpcy5fcGVlaykpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fY29uc3VtZVRhZ09wZW5TdGFydChzdGFydCk7XG4gICAgICB0YWdOYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgICAgbG93ZXJjYXNlVGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0xBU0ggJiYgdGhpcy5fcGVlayAhPT0gY2hhcnMuJEdUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVOYW1lKCk7XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kRVEpKSB7XG4gICAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnN1bWVUYWdPcGVuRW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBDb250cm9sRmxvd0Vycm9yKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJ0IHRhZyBpcyBpbnZhbGlkLCBhc3N1bWUgd2Ugd2FudCBhIFwiPFwiXG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzYXZlZFBvcyk7XG4gICAgICAgIC8vIEJhY2sgdG8gYmFjayB0ZXh0IHRva2VucyBhcmUgbWVyZ2VkIGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEVYVCwgc3RhcnQpO1xuICAgICAgICB0aGlzLl9lbmRUb2tlbihbXCI8XCJdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRUb2tlblR5cGUgPSB0aGlzLl9nZXRUYWdEZWZpbml0aW9uKHRhZ05hbWUpLmNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKGNvbnRlbnRUb2tlblR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLlJBV19URVhUKSB7XG4gICAgICB0aGlzLl9jb25zdW1lUmF3VGV4dFdpdGhUYWdDbG9zZShsb3dlcmNhc2VUYWdOYW1lLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50VG9rZW5UeXBlID09PSBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWU6IHN0cmluZywgZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0ZXh0VG9rZW4gPSB0aGlzLl9jb25zdW1lUmF3VGV4dChkZWNvZGVFbnRpdGllcywgY2hhcnMuJExULCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRTdHJDYXNlSW5zZW5zaXRpdmUobG93ZXJjYXNlVGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB9KTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfQ0xPU0UsIHRleHRUb2tlbi5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW251bGwhLCBsb3dlcmNhc2VUYWdOYW1lXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlblN0YXJ0KHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX09QRU5fU1RBUlQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuX2NvbnN1bWVQcmVmaXhBbmROYW1lKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4ocGFydHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQVRUUl9OQU1FKTtcbiAgICBjb25zdCBwcmVmaXhBbmROYW1lID0gdGhpcy5fY29uc3VtZVByZWZpeEFuZE5hbWUoKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5BVFRSX1ZBTFVFKTtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJFNRIHx8IHRoaXMuX3BlZWsgPT09IGNoYXJzLiREUSkge1xuICAgICAgY29uc3QgcXVvdGVDaGFyID0gdGhpcy5fcGVlaztcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IHF1b3RlQ2hhcikge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX3JlYWRDaGFyKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gcGFydHMuam9pbihcIlwiKTtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIDEpO1xuICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dC5zdWJzdHJpbmcodmFsdWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9lbmRUb2tlbihbdGhpcy5fcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyh2YWx1ZSldKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuRW5kKCkge1xuICAgIGNvbnN0IHRva2VuVHlwZSA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpID8gVG9rZW5UeXBlLlRBR19PUEVOX0VORF9WT0lEIDogVG9rZW5UeXBlLlRBR19PUEVOX0VORDtcbiAgICB0aGlzLl9iZWdpblRva2VuKHRva2VuVHlwZSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRhZ0Nsb3NlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX0NMT1NFLCBzdGFydCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgIGNvbnN0IHByZWZpeEFuZE5hbWUgPSB0aGlzLl9jb25zdW1lUHJlZml4QW5kTmFtZSgpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25Gb3JtU3RhcnQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kTEJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpO1xuXG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuUkFXX1RFWFQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtjb25kaXRpb25dLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJENPTU1BKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5SQVdfVEVYVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0eXBlXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkNhc2VTdGFydCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9yZWFkVW50aWwoY2hhcnMuJExCUkFDRSkudHJpbSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt2YWx1ZV0sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRMQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25DYXNlRW5kKCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kUkJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5ELCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJFJCUkFDRSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlRFWFQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnICYmIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCkpIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcgJiZcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uICYmXG4gICAgICAgIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQpXG4gICAgICApIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCk7XG4gICAgICAgIHRoaXMuX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9yZWFkQ2hhcih0cnVlKSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoIXRoaXMuX2lzVGV4dEVuZCgpKTtcblxuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1RleHRFbmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMVCB8fCB0aGlzLl9wZWVrID09PSBjaGFycy4kRU9GKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdG9rZW5pemVJY3UgJiYgIXRoaXMuX2luSW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKGlzRXhwYW5zaW9uRm9ybVN0YXJ0KHRoaXMuX2lucHV0LCB0aGlzLl9pbmRleCwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZykpIHtcbiAgICAgICAgLy8gc3RhcnQgb2YgYW4gZXhwYW5zaW9uIGZvcm1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFICYmIHRoaXMuX2lzSW5FeHBhbnNpb25DYXNlKCkpIHtcbiAgICAgICAgLy8gZW5kIG9mIGFuZCBleHBhbnNpb24gY2FzZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlUG9zaXRpb24oKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgcmV0dXJuIFt0aGlzLl9wZWVrLCB0aGlzLl9pbmRleCwgdGhpcy5fY29sdW1uLCB0aGlzLl9saW5lLCB0aGlzLnRva2Vucy5sZW5ndGhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVhZFVudGlsKGNoYXI6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXIpO1xuICAgIHJldHVybiB0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3RvcmVQb3NpdGlvbihwb3NpdGlvbjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIHRoaXMuX3BlZWsgPSBwb3NpdGlvblswXTtcbiAgICB0aGlzLl9pbmRleCA9IHBvc2l0aW9uWzFdO1xuICAgIHRoaXMuX2NvbHVtbiA9IHBvc2l0aW9uWzJdO1xuICAgIHRoaXMuX2xpbmUgPSBwb3NpdGlvblszXTtcbiAgICBjb25zdCBuYlRva2VucyA9IHBvc2l0aW9uWzRdO1xuICAgIGlmIChuYlRva2VucyA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgLy8gcmVtb3ZlIGFueSBleHRyYSB0b2tlbnNcbiAgICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2UoMCwgbmJUb2tlbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5FeHBhbnNpb25DYXNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrW3RoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggLSAxXSA9PT0gVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9pc0luRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFja1t0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoIC0gMV0gPT09IFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOb3RXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gIWNoYXJzLmlzV2hpdGVzcGFjZShjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kRU9GO1xufVxuXG5mdW5jdGlvbiBpc05hbWVFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEdUIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNMQVNIIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJERRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEVRXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzUHJlZml4RW5kKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIChjb2RlIDwgY2hhcnMuJGEgfHwgY2hhcnMuJHogPCBjb2RlKSAmJiAoY29kZSA8IGNoYXJzLiRBIHx8IGNoYXJzLiRaIDwgY29kZSkgJiYgKGNvZGUgPCBjaGFycy4kMCB8fCBjb2RlID4gY2hhcnMuJDkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRGlnaXRFbnRpdHlFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kU0VNSUNPTE9OIHx8IGNvZGUgPT09IGNoYXJzLiRFT0YgfHwgIWNoYXJzLmlzQXNjaWlIZXhEaWdpdChjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lZEVudGl0eUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTRU1JQ09MT04gfHwgY29kZSA9PT0gY2hhcnMuJEVPRiB8fCAhY2hhcnMuaXNBc2NpaUxldHRlcihjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBhbnNpb25Gb3JtU3RhcnQoaW5wdXQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBib29sZWFuIHtcbiAgY29uc3QgaXNJbnRlcnBvbGF0aW9uU3RhcnQgPSBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAgPyBpbnB1dC5pbmRleE9mKGludGVycG9sYXRpb25Db25maWcuc3RhcnQsIG9mZnNldCkgPT09IG9mZnNldFxuICAgIDogZmFsc2U7XG5cbiAgcmV0dXJuIGlucHV0LmNoYXJDb2RlQXQob2Zmc2V0KSA9PT0gY2hhcnMuJExCUkFDRSAmJiAhaXNJbnRlcnBvbGF0aW9uU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHBlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gcGVlayA9PT0gY2hhcnMuJEVRIHx8IGNoYXJzLmlzQXNjaWlMZXR0ZXIocGVlaykgfHwgY2hhcnMuaXNEaWdpdChwZWVrKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNvZGUxOiBudW1iZXIsIGNvZGUyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvVXBwZXJDYXNlQ2hhckNvZGUoY29kZTEpID09PSB0b1VwcGVyQ2FzZUNoYXJDb2RlKGNvZGUyKTtcbn1cblxuZnVuY3Rpb24gdG9VcHBlckNhc2VDaGFyQ29kZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gY29kZSA+PSBjaGFycy4kYSAmJiBjb2RlIDw9IGNoYXJzLiR6ID8gY29kZSAtIGNoYXJzLiRhICsgY2hhcnMuJEEgOiBjb2RlO1xufVxuXG5mdW5jdGlvbiBtZXJnZVRleHRUb2tlbnMoc3JjVG9rZW5zOiBUb2tlbltdKTogVG9rZW5bXSB7XG4gIGNvbnN0IGRzdFRva2VuczogVG9rZW5bXSA9IFtdO1xuICBsZXQgbGFzdERzdFRva2VuOiBUb2tlbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNUb2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHNyY1Rva2Vuc1tpXTtcbiAgICBpZiAobGFzdERzdFRva2VuICYmIGxhc3REc3RUb2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCkge1xuICAgICAgbGFzdERzdFRva2VuLnBhcnRzWzBdICs9IHRva2VuLnBhcnRzWzBdO1xuICAgICAgbGFzdERzdFRva2VuLnNvdXJjZVNwYW4uZW5kID0gdG9rZW4uc291cmNlU3Bhbi5lbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3REc3RUb2tlbiA9IHRva2VuO1xuICAgICAgZHN0VG9rZW5zLnB1c2gobGFzdERzdFRva2VuKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHN0VG9rZW5zO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4vaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCAqIGFzIGxleCBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHtUYWdEZWZpbml0aW9uLCBnZXROc1ByZWZpeCwgaXNOZ0NvbnRhaW5lciwgbWVyZ2VOc0FuZE5hbWV9IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWVFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnROYW1lOiBzdHJpbmcgfCBudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKTogVHJlZUVycm9yIHtcbiAgICByZXR1cm4gbmV3IFRyZWVFcnJvcihlbGVtZW50TmFtZSwgc3BhbiwgbXNnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50TmFtZTogc3RyaW5nIHwgbnVsbCwgc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlVHJlZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb290Tm9kZXM6IGh0bWwuTm9kZVtdLCBwdWJsaWMgZXJyb3JzOiBQYXJzZUVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbikge31cblxuICBwYXJzZShcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJzZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnNBbmRFcnJvcnMgPSBsZXgudG9rZW5pemUoc291cmNlLCB1cmwsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbiwgcGFyc2VFeHBhbnNpb25Gb3JtcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBjb25zdCB0cmVlQW5kRXJyb3JzID0gbmV3IF9UcmVlQnVpbGRlcih0b2tlbnNBbmRFcnJvcnMudG9rZW5zLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChcbiAgICAgIHRyZWVBbmRFcnJvcnMucm9vdE5vZGVzLFxuICAgICAgKHRva2Vuc0FuZEVycm9ycy5lcnJvcnMgYXMgUGFyc2VFcnJvcltdKS5jb25jYXQodHJlZUFuZEVycm9ycy5lcnJvcnMpXG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBfVHJlZUJ1aWxkZXIge1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIF9wZWVrOiBsZXguVG9rZW47XG5cbiAgcHJpdmF0ZSBfcm9vdE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IFRyZWVFcnJvcltdID0gW107XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFN0YWNrOiBodG1sLkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5zOiBsZXguVG9rZW5bXSwgcHJpdmF0ZSBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgYnVpbGQoKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVPRikge1xuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jb25zdW1lU3RhcnRUYWcodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19DTE9TRSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRW5kVGFnKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5DREFUQV9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YSh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQ09NTUVOVF9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEVYVCB8fFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuUkFXX1RFWFQgfHxcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb24odGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNraXAgYWxsIG90aGVyIHRva2Vucy4uLlxuICAgICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRoaXMuX3Jvb3ROb2RlcywgdGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKTogbGV4LlRva2VuIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5fcGVlaztcbiAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBOb3RlOiB0aGVyZSBpcyBhbHdheXMgYW4gRU9GIHRva2VuIGF0IHRoZSBlbmRcbiAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuX3BlZWsgPSB0aGlzLnRva2Vuc1t0aGlzLl9pbmRleF07XG4gICAgcmV0dXJuIHByZXY7XG4gIH1cblxuICBwcml2YXRlIF9hZHZhbmNlSWYodHlwZTogbGV4LlRva2VuVHlwZSk6IGxleC5Ub2tlbiB8IG51bGwge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUNkYXRhKHN0YXJ0VG9rZW46IGxleC5Ub2tlbikge1xuICAgIHRoaXMuX2NvbnN1bWVUZXh0KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuQ0RBVEFfRU5EKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDb21tZW50KHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuUkFXX1RFWFQpO1xuICAgIHRoaXMuX2FkdmFuY2VJZihsZXguVG9rZW5UeXBlLkNPTU1FTlRfRU5EKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRleHQgIT09IG51bGwgPyB0ZXh0LnBhcnRzWzBdLnRyaW0oKSA6IG51bGw7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQobmV3IGh0bWwuQ29tbWVudCh2YWx1ZSwgdG9rZW4uc291cmNlU3BhbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbih0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3Qgc3dpdGNoVmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5fYWR2YW5jZSgpO1xuICAgIGNvbnN0IGNhc2VzOiBodG1sLkV4cGFuc2lvbkNhc2VbXSA9IFtdO1xuXG4gICAgLy8gcmVhZCA9XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSkge1xuICAgICAgY29uc3QgZXhwQ2FzZSA9IHRoaXMuX3BhcnNlRXhwYW5zaW9uQ2FzZSgpO1xuICAgICAgaWYgKCFleHBDYXNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZXJyb3JcbiAgICAgIGNhc2VzLnB1c2goZXhwQ2FzZSk7XG4gICAgfVxuXG4gICAgLy8gcmVhZCB0aGUgZmluYWwgfVxuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5EKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odG9rZW4uc291cmNlU3Bhbi5zdGFydCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQoXG4gICAgICBuZXcgaHRtbC5FeHBhbnNpb24oc3dpdGNoVmFsdWUucGFydHNbMF0sIHR5cGUucGFydHNbMF0sIGNhc2VzLCBzb3VyY2VTcGFuLCBzd2l0Y2hWYWx1ZS5zb3VyY2VTcGFuKVxuICAgICk7XG5cbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUV4cGFuc2lvbkNhc2UoKTogaHRtbC5FeHBhbnNpb25DYXNlIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICAvLyByZWFkIHtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd7Jy5gKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZWFkIHVudGlsIH1cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIGNvbnN0IGV4cCA9IHRoaXMuX2NvbGxlY3RFeHBhbnNpb25FeHBUb2tlbnMoc3RhcnQpO1xuICAgIGlmICghZXhwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgZXhwLnB1c2gobmV3IGxleC5Ub2tlbihsZXguVG9rZW5UeXBlLkVPRiwgW10sIGVuZC5zb3VyY2VTcGFuKSk7XG5cbiAgICAvLyBwYXJzZSBldmVyeXRoaW5nIGluIGJldHdlZW4geyBhbmQgfVxuICAgIGNvbnN0IHBhcnNlZEV4cCA9IG5ldyBfVHJlZUJ1aWxkZXIoZXhwLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG4gICAgaWYgKHBhcnNlZEV4cC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZXJyb3JzID0gdGhpcy5fZXJyb3JzLmNvbmNhdChwYXJzZWRFeHAuZXJyb3JzIGFzIFRyZWVFcnJvcltdKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHZhbHVlLnNvdXJjZVNwYW4uc3RhcnQsIGVuZC5zb3VyY2VTcGFuLmVuZCk7XG4gICAgY29uc3QgZXhwU291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZSh2YWx1ZS5wYXJ0c1swXSwgcGFyc2VkRXhwLnJvb3ROb2Rlcywgc291cmNlU3BhbiwgdmFsdWUuc291cmNlU3BhbiwgZXhwU291cmNlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9jb2xsZWN0RXhwYW5zaW9uRXhwVG9rZW5zKHN0YXJ0OiBsZXguVG9rZW4pOiBsZXguVG9rZW5bXSB8IG51bGwge1xuICAgIGNvbnN0IGV4cDogbGV4LlRva2VuW10gPSBbXTtcbiAgICBjb25zdCBleHBhbnNpb25Gb3JtU3RhY2sgPSBbbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRdO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUIHx8XG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRcbiAgICAgICkge1xuICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucHVzaCh0aGlzLl9wZWVrLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpKSB7XG4gICAgICAgICAgZXhwYW5zaW9uRm9ybVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChleHBhbnNpb25Gb3JtU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCkpIHtcbiAgICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRU9GKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgc3RhcnQuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGV4cC5wdXNoKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQodG9rZW46IGxleC5Ub2tlbikge1xuICAgIGxldCB0ZXh0ID0gdG9rZW4ucGFydHNbMF07XG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCAmJiB0ZXh0WzBdID09PSBcIlxcblwiKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudC5uYW1lKS5pZ25vcmVGaXJzdExmKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5UZXh0KHRleHQsIHRva2VuLnNvdXJjZVNwYW4pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZVZvaWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChlbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVN0YXJ0VGFnKHN0YXJ0VGFnVG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IHByZWZpeCA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMF07XG4gICAgY29uc3QgbmFtZSA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMV07XG4gICAgY29uc3QgYXR0cnM6IGh0bWwuQXR0cmlidXRlW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfTkFNRSkge1xuICAgICAgYXR0cnMucHVzaCh0aGlzLl9jb25zdW1lQXR0cih0aGlzLl9hZHZhbmNlKCkpKTtcbiAgICB9XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4LCBuYW1lLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuICAgIGxldCBzZWxmQ2xvc2luZyA9IGZhbHNlO1xuICAgIC8vIE5vdGU6IFRoZXJlIGNvdWxkIGhhdmUgYmVlbiBhIHRva2VuaXplciBlcnJvclxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZ2V0IGEgdG9rZW4gZm9yIHRoZSBlbmQgdGFnLi4uXG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkRfVk9JRCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFnRGVmID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKTtcbiAgICAgIGlmICghKHRhZ0RlZi5jYW5TZWxmQ2xvc2UgfHwgZ2V0TnNQcmVmaXgoZnVsbE5hbWUpICE9PSBudWxsIHx8IHRhZ0RlZi5pc1ZvaWQpKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICAgIFRyZWVFcnJvci5jcmVhdGUoXG4gICAgICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgICAgIHN0YXJ0VGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICAgIGBPbmx5IHZvaWQgYW5kIGZvcmVpZ24gZWxlbWVudHMgY2FuIGJlIHNlbGYgY2xvc2VkIFwiJHtzdGFydFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkQpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHNlbGZDbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX3BlZWsuc291cmNlU3Bhbi5zdGFydDtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydFRhZ1Rva2VuLnNvdXJjZVNwYW4uc3RhcnQsIGVuZCk7XG4gICAgY29uc3QgZWwgPSBuZXcgaHRtbC5FbGVtZW50KGZ1bGxOYW1lLCBhdHRycywgW10sIHNwYW4sIHNwYW4sIHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fcHVzaEVsZW1lbnQoZWwpO1xuICAgIGlmIChzZWxmQ2xvc2luZykge1xuICAgICAgdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSk7XG4gICAgICBlbC5lbmRTb3VyY2VTcGFuID0gc3BhbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wdXNoRWxlbWVudChlbDogaHRtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG5cbiAgICBpZiAocGFyZW50RWwgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudEVsLm5hbWUpLmlzQ2xvc2VkQnlDaGlsZChlbC5uYW1lKSkge1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnBvcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ0RlZiA9IHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKTtcbiAgICBjb25zdCB7cGFyZW50LCBjb250YWluZXJ9ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudFNraXBwaW5nQ29udGFpbmVycygpO1xuXG4gICAgaWYgKHBhcmVudCAmJiB0YWdEZWYucmVxdWlyZUV4dHJhUGFyZW50KHBhcmVudC5uYW1lKSkge1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgdGFnRGVmLnBhcmVudFRvQWRkLFxuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIGVsLnNvdXJjZVNwYW4sXG4gICAgICAgIGVsLnN0YXJ0U291cmNlU3BhbixcbiAgICAgICAgZWwuZW5kU291cmNlU3BhblxuICAgICAgKTtcbiAgICAgIHRoaXMuX2luc2VydEJlZm9yZUNvbnRhaW5lcihwYXJlbnQsIGNvbnRhaW5lciwgbmV3UGFyZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRUb1BhcmVudChlbCk7XG4gICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2goZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUVuZFRhZyhlbmRUYWdUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUoZW5kVGFnVG9rZW4ucGFydHNbMF0sIGVuZFRhZ1Rva2VuLnBhcnRzWzFdLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuXG4gICAgaWYgKHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpIS5lbmRTb3VyY2VTcGFuID0gZW5kVGFnVG9rZW4uc291cmNlU3BhbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKS5pc1ZvaWQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKFxuICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sXG4gICAgICAgICAgYFZvaWQgZWxlbWVudHMgZG8gbm90IGhhdmUgZW5kIHRhZ3MgXCIke2VuZFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvcEVsZW1lbnQoZnVsbE5hbWUpKSB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBgVW5leHBlY3RlZCBjbG9zaW5nIHRhZyBcIiR7XG4gICAgICAgIGZ1bGxOYW1lXG4gICAgICB9XCIuIEl0IG1heSBoYXBwZW4gd2hlbiB0aGUgdGFnIGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ5IGFub3RoZXIgdGFnLiBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjY2xvc2luZy1lbGVtZW50cy10aGF0LWhhdmUtaW1wbGllZC1lbmQtdGFnc2A7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKGZ1bGxOYW1lLCBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuLCBlcnJNc2cpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wb3BFbGVtZW50KGZ1bGxOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBzdGFja0luZGV4ID0gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IHN0YWNrSW5kZXggPj0gMDsgc3RhY2tJbmRleC0tKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRTdGFja1tzdGFja0luZGV4XTtcbiAgICAgIGlmIChlbC5uYW1lID09PSBmdWxsTmFtZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50U3RhY2suc3BsaWNlKHN0YWNrSW5kZXgsIHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSBzdGFja0luZGV4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmNsb3NlZEJ5UGFyZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHIoYXR0ck5hbWU6IGxleC5Ub2tlbik6IGh0bWwuQXR0cmlidXRlIHtcbiAgICBjb25zdCBmdWxsTmFtZSA9IG1lcmdlTnNBbmROYW1lKGF0dHJOYW1lLnBhcnRzWzBdLCBhdHRyTmFtZS5wYXJ0c1sxXSk7XG4gICAgbGV0IGVuZCA9IGF0dHJOYW1lLnNvdXJjZVNwYW4uZW5kO1xuICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgbGV0IHZhbHVlU3BhbjogUGFyc2VTb3VyY2VTcGFuID0gdW5kZWZpbmVkITtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfVkFMVUUpIHtcbiAgICAgIGNvbnN0IHZhbHVlVG9rZW4gPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlVG9rZW4ucGFydHNbMF07XG4gICAgICBlbmQgPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgdmFsdWVTcGFuID0gdmFsdWVUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGh0bWwuQXR0cmlidXRlKGZ1bGxOYW1lLCB2YWx1ZSwgbmV3IFBhcnNlU291cmNlU3BhbihhdHRyTmFtZS5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQpLCB2YWx1ZVNwYW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50RWxlbWVudCgpOiBodG1sLkVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCA+IDAgPyB0aGlzLl9lbGVtZW50U3RhY2tbdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgaW4gdGhlIERPTSBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogYDxuZy1jb250YWluZXI+YCBlbGVtZW50cyBhcmUgc2tpcHBlZCBhcyB0aGV5IGFyZSBub3QgcmVuZGVyZWQgYXMgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9nZXRQYXJlbnRFbGVtZW50U2tpcHBpbmdDb250YWluZXJzKCk6IHtwYXJlbnQ6IGh0bWwuRWxlbWVudCB8IG51bGw7IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbH0ge1xuICAgIGxldCBjb250YWluZXI6IGh0bWwuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCFpc05nQ29udGFpbmVyKHRoaXMuX2VsZW1lbnRTdGFja1tpXS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge3BhcmVudDogdGhpcy5fZWxlbWVudFN0YWNrW2ldLCBjb250YWluZXJ9O1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFN0YWNrW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB7cGFyZW50OiBudWxsLCBjb250YWluZXJ9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9QYXJlbnQobm9kZTogaHRtbC5Ob2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGEgbm9kZSBiZXR3ZWVuIHRoZSBwYXJlbnQgYW5kIHRoZSBjb250YWluZXIuXG4gICAqIFdoZW4gbm8gY29udGFpbmVyIGlzIGdpdmVuLCB0aGUgbm9kZSBpcyBhcHBlbmRlZCBhcyBhIGNoaWxkIG9mIHRoZSBwYXJlbnQuXG4gICAqIEFsc28gdXBkYXRlcyB0aGUgZWxlbWVudCBzdGFjayBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRCZWZvcmVDb250YWluZXIocGFyZW50OiBodG1sLkVsZW1lbnQsIGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbCwgbm9kZTogaHRtbC5FbGVtZW50KSB7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2FkZFRvUGFyZW50KG5vZGUpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgY29udGFpbmVyIHdpdGggdGhlIG5ldyBub2RlIGluIHRoZSBjaGlsZHJlblxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNvbnRhaW5lcik7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcm9vdE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5zcGxpY2UodGhpcy5fZWxlbWVudFN0YWNrLmluZGV4T2YoY29udGFpbmVyKSwgMCwgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RWxlbWVudEZ1bGxOYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZywgcGFyZW50RWxlbWVudDogaHRtbC5FbGVtZW50IHwgbnVsbCk6IHN0cmluZyB7XG4gICAgaWYgKHByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgcHJlZml4ID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGxvY2FsTmFtZSkuaW1wbGljaXROYW1lc3BhY2VQcmVmaXghO1xuICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCAmJiBwYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByZWZpeCA9IGdldE5zUHJlZml4KHBhcmVudEVsZW1lbnQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlTnNBbmROYW1lKHByZWZpeCwgbG9jYWxOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXN0T25TdGFjayhzdGFjazogYW55W10sIGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gZWxlbWVudDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgY2xhc3MgWG1sVGFnRGVmaW5pdGlvbiBpbXBsZW1lbnRzIFRhZ0RlZmluaXRpb24ge1xuICBjbG9zZWRCeVBhcmVudCA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZztcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlID0gVGFnQ29udGVudFR5cGUuUEFSU0FCTEVfREFUQTtcbiAgaXNWb2lkID0gZmFsc2U7XG4gIGlnbm9yZUZpcnN0TGYgPSBmYWxzZTtcbiAgY2FuU2VsZkNsb3NlID0gdHJ1ZTtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBfVEFHX0RFRklOSVRJT04gPSBuZXcgWG1sVGFnRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBYbWxUYWdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi90YWdzJztcblxuZXhwb3J0IGNsYXNzIEh0bWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIHByaXZhdGUgY2xvc2VkQnlDaGlsZHJlbjoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVxdWlyZWRQYXJlbnRzOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn07XG4gIHBhcmVudFRvQWRkOiBzdHJpbmc7XG4gIGltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiBzdHJpbmd8bnVsbDtcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAge2Nsb3NlZEJ5Q2hpbGRyZW4sIHJlcXVpcmVkUGFyZW50cywgaW1wbGljaXROYW1lc3BhY2VQcmVmaXgsXG4gICAgICAgY29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBLCBjbG9zZWRCeVBhcmVudCA9IGZhbHNlLCBpc1ZvaWQgPSBmYWxzZSxcbiAgICAgICBpZ25vcmVGaXJzdExmID0gZmFsc2V9OiB7XG4gICAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4/OiBzdHJpbmdbXSxcbiAgICAgICAgY2xvc2VkQnlQYXJlbnQ/OiBib29sZWFuLFxuICAgICAgICByZXF1aXJlZFBhcmVudHM/OiBzdHJpbmdbXSxcbiAgICAgICAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg/OiBzdHJpbmcsXG4gICAgICAgIGNvbnRlbnRUeXBlPzogVGFnQ29udGVudFR5cGUsXG4gICAgICAgIGlzVm9pZD86IGJvb2xlYW4sXG4gICAgICAgIGlnbm9yZUZpcnN0TGY/OiBib29sZWFuXG4gICAgICB9ID0ge30pIHtcbiAgICBpZiAoY2xvc2VkQnlDaGlsZHJlbiAmJiBjbG9zZWRCeUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4uZm9yRWFjaCh0YWdOYW1lID0+IHRoaXMuY2xvc2VkQnlDaGlsZHJlblt0YWdOYW1lXSA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmlzVm9pZCA9IGlzVm9pZDtcbiAgICB0aGlzLmNsb3NlZEJ5UGFyZW50ID0gY2xvc2VkQnlQYXJlbnQgfHwgaXNWb2lkO1xuICAgIGlmIChyZXF1aXJlZFBhcmVudHMgJiYgcmVxdWlyZWRQYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucmVxdWlyZWRQYXJlbnRzID0ge307XG4gICAgICAvLyBUaGUgZmlyc3QgcGFyZW50IGlzIHRoZSBsaXN0IGlzIGF1dG9tYXRpY2FsbHkgd2hlbiBub25lIG9mIHRoZSBsaXN0ZWQgcGFyZW50cyBhcmUgcHJlc2VudFxuICAgICAgdGhpcy5wYXJlbnRUb0FkZCA9IHJlcXVpcmVkUGFyZW50c1swXTtcbiAgICAgIHJlcXVpcmVkUGFyZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4gdGhpcy5yZXF1aXJlZFBhcmVudHNbdGFnTmFtZV0gPSB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCA9IGltcGxpY2l0TmFtZXNwYWNlUHJlZml4IHx8IG51bGw7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgIHRoaXMuaWdub3JlRmlyc3RMZiA9IGlnbm9yZUZpcnN0TGY7XG4gIH1cblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlcXVpcmVkUGFyZW50cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbGNQYXJlbnQgPSBjdXJyZW50UGFyZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNQYXJlbnRUZW1wbGF0ZSA9IGxjUGFyZW50ID09PSAndGVtcGxhdGUnIHx8IGN1cnJlbnRQYXJlbnQgPT09ICduZy10ZW1wbGF0ZSc7XG4gICAgcmV0dXJuICFpc1BhcmVudFRlbXBsYXRlICYmIHRoaXMucmVxdWlyZWRQYXJlbnRzW2xjUGFyZW50XSAhPT0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZvaWQgfHwgbmFtZS50b0xvd2VyQ2FzZSgpIGluIHRoaXMuY2xvc2VkQnlDaGlsZHJlbjtcbiAgfVxufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI29wdGlvbmFsLXRhZ3Ncbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgZnVsbHkgY29uZm9ybSB0byB0aGUgSFRNTDUgc3BlYy5cbmNvbnN0IFRBR19ERUZJTklUSU9OUzoge1trZXk6IHN0cmluZ106IEh0bWxUYWdEZWZpbml0aW9ufSA9IHtcbiAgJ2Jhc2UnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnbWV0YSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdhcmVhJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2VtYmVkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2xpbmsnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaW1nJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2lucHV0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3BhcmFtJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2hyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2JyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3NvdXJjZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd0cmFjayc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd3YnInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAncCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7XG4gICAgY2xvc2VkQnlDaGlsZHJlbjogW1xuICAgICAgJ2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2RpdicsICdkbCcsICAgICAgJ2ZpZWxkc2V0JywgJ2Zvb3RlcicsICdmb3JtJyxcbiAgICAgICdoMScsICAgICAgJ2gyJywgICAgICAnaDMnLCAgICAnaDQnLCAgICAgICAgICdoNScsICAnaDYnLCAgICAgICdoZWFkZXInLCAgICdoZ3JvdXAnLCAnaHInLFxuICAgICAgJ21haW4nLCAgICAnbmF2JywgICAgICdvbCcsICAgICdwJywgICAgICAgICAgJ3ByZScsICdzZWN0aW9uJywgJ3RhYmxlJywgICAgJ3VsJ1xuICAgIF0sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0aGVhZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddfSksXG4gICd0Ym9keSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGZvb3QnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGJvZHknXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3RyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtcbiAgICBjbG9zZWRCeUNoaWxkcmVuOiBbJ3RyJ10sXG4gICAgcmVxdWlyZWRQYXJlbnRzOiBbJ3Rib2R5JywgJ3Rmb290JywgJ3RoZWFkJ10sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0ZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0ZCcsICd0aCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGQnLCAndGgnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ2NvbCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7cmVxdWlyZWRQYXJlbnRzOiBbJ2NvbGdyb3VwJ10sIGlzVm9pZDogdHJ1ZX0pLFxuICAnc3ZnJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogJ3N2Zyd9KSxcbiAgJ21hdGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2ltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiAnbWF0aCd9KSxcbiAgJ2xpJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2xpJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdkdCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddfSksXG4gICdkZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncmInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsncmInLCAncnQnLCAncnRjJywgJ3JwJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdydCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydCcsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3J0Yyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3JwJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0JywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnb3B0Z3JvdXAnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ29wdGlvbic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydvcHRpb24nLCAnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3ByZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnbGlzdGluZyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnc3R5bGUnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5SQVdfVEVYVH0pLFxuICAnc2NyaXB0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuUkFXX1RFWFR9KSxcbiAgJ3RpdGxlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuRVNDQVBBQkxFX1JBV19URVhUfSksXG4gICd0ZXh0YXJlYSc6XG4gICAgICBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQsIGlnbm9yZUZpcnN0TGY6IHRydWV9KSxcbn07XG5cbmNvbnN0IF9ERUZBVUxUX1RBR19ERUZJTklUSU9OID0gbmV3IEh0bWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBIdG1sVGFnRGVmaW5pdGlvbiB7XG4gIHJldHVybiBUQUdfREVGSU5JVElPTlNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBfREVGQVVMVF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L2h0bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuUGx1cmFsUGlwZSwgSTE4blNlbGVjdFBpcGUsIE5nTG9jYWxlTG9jYWxpemF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJMThuTWVzc2FnZXNCeUlkIHtcbiAgW21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBYbWxNZXNzYWdlc0J5SWQge1xuICBbaWQ6IHN0cmluZ106IHhtbC5Ob2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljdUNvbnRlbnQge1xuICBjYXNlczoge1t2YWx1ZTogc3RyaW5nXTogaHRtbC5Ob2RlW119O1xuICBleHByZXNzaW9uOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJY3VDb250ZW50U3RyIHtcbiAgY2FzZXM6IHtbdmFsdWU6IHN0cmluZ106IHN0cmluZ307XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgYFBsYWNlaG9sZGVyTWFwcGVyYCBjb252ZXJ0cyBwbGFjZWhvbGRlciBuYW1lcyBmcm9tIGludGVybmFsIHRvIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24gYW5kXG4gKiBiYWNrLlxuICpcbiAqIEl0IHNob3VsZCBiZSB1c2VkIGZvciBzZXJpYWxpemF0aW9uIGZvcm1hdCB0aGF0IHB1dCBjb25zdHJhaW50cyBvbiB0aGUgcGxhY2Vob2xkZXIgbmFtZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXJNYXBwZXIge1xuICB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIHRvSW50ZXJuYWxOYW1lKHB1YmxpY05hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgbWFwcGVyIHRoYXQgdGFrZSBhIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSBhbiBpbnRlcm5hbCBuYW1lIHRvIGEgcHVibGljIG5hbWVcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyIGV4dGVuZHMgaTE4bi5SZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgcHJpdmF0ZSBpbnRlcm5hbFRvUHVibGljOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaWNUb05leHRJZDoge1trOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gIHByaXZhdGUgcHVibGljVG9JbnRlcm5hbDoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgLy8gY3JlYXRlIGEgbWFwcGluZyBmcm9tIHRoZSBtZXNzYWdlXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSwgcHJpdmF0ZSBtYXBOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIG1lc3NhZ2Uubm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdG9QdWJsaWNOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxUb1B1YmxpYy5oYXNPd25Qcm9wZXJ0eShpbnRlcm5hbE5hbWUpID8gdGhpcy5pbnRlcm5hbFRvUHVibGljW2ludGVybmFsTmFtZV0gOiBudWxsO1xuICB9XG5cbiAgdG9JbnRlcm5hbE5hbWUocHVibGljTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSA/IHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA6IG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguc3RhcnROYW1lKTtcbiAgICBzdXBlci52aXNpdFRhZ1BsYWNlaG9sZGVyKHBoLCBjb250ZXh0KTtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLmNsb3NlTmFtZSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5uYW1lKTtcbiAgfVxuXG4gIC8vIFhNQiBwbGFjZWhvbGRlcnMgY291bGQgb25seSBjb250YWlucyBBLVosIDAtOSBhbmQgX1xuICBwcml2YXRlIHZpc2l0UGxhY2Vob2xkZXJOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpbnRlcm5hbE5hbWUgfHwgdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHVibGljTmFtZSA9IHRoaXMubWFwTmFtZShpbnRlcm5hbE5hbWUpO1xuXG4gICAgaWYgKHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSkge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IFhNQiB3aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXTtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSBuZXh0SWQgKyAxO1xuICAgICAgcHVibGljTmFtZSA9IGAke3B1YmxpY05hbWV9XyR7bmV4dElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSAxO1xuICAgIH1cblxuICAgIHRoaXMuaW50ZXJuYWxUb1B1YmxpY1tpbnRlcm5hbE5hbWVdID0gcHVibGljTmFtZTtcbiAgICB0aGlzLnB1YmxpY1RvSW50ZXJuYWxbcHVibGljTmFtZV0gPSBpbnRlcm5hbE5hbWU7XG4gIH1cbn1cblxuY29uc3QgaTE4blNlbGVjdFBpcGUgPSBuZXcgSTE4blNlbGVjdFBpcGUoKTtcbmNsYXNzIFNlcmlhbGl6ZXJWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBpMThuUGx1cmFsUGlwZTogSTE4blBsdXJhbFBpcGU7XG4gIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nLCBwcml2YXRlIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLmkxOG5QbHVyYWxQaXBlID0gbmV3IEkxOG5QbHVyYWxQaXBlKG5ldyBOZ0xvY2FsZUxvY2FsaXphdGlvbihsb2NhbGUpKTtcbiAgfVxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmIChnZXRIdG1sVGFnRGVmaW5pdGlvbihlbGVtZW50Lm5hbWUpLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0vPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0+JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuY2hpbGRyZW4pfTwvJHtcbiAgICAgIGVsZW1lbnQubmFtZVxuICAgIH0+YDtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAke2F0dHJpYnV0ZS5uYW1lfT1cIiR7YXR0cmlidXRlLnZhbHVlfVwiYDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgPCEtLSR7Y29tbWVudC52YWx1ZX0tLT5gO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBjYXNlcyA9IHt9O1xuICAgIGV4cGFuc2lvbi5jYXNlcy5mb3JFYWNoKGMgPT4gKGNhc2VzW2MudmFsdWVdID0gdGhpcy5zZXJpYWxpemVOb2RlcyhjLmV4cHJlc3Npb24pKSk7XG5cbiAgICBzd2l0Y2ggKGV4cGFuc2lvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgIHJldHVybiBpMThuU2VsZWN0UGlwZS50cmFuc2Zvcm0odGhpcy5wYXJhbXNbZXhwYW5zaW9uLnN3aXRjaFZhbHVlXSB8fCBcIlwiLCBjYXNlcyk7XG4gICAgICBjYXNlIFwicGx1cmFsXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5QbHVyYWxQaXBlLnRyYW5zZm9ybSh0aGlzLnBhcmFtc1tleHBhbnNpb24uc3dpdGNoVmFsdWVdLCBjYXNlcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBleHBhbnNpb24gdHlwZSBcIiR7ZXhwYW5zaW9uLnR5cGV9XCJgKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAgJHtleHBhbnNpb25DYXNlLnZhbHVlfSB7JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGV4cGFuc2lvbkNhc2UuZXhwcmVzc2lvbil9fWA7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgam9pbiA9IFwiXCIpOiBzdHJpbmcge1xuICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gam9pbiArIG5vZGVzLm1hcChhID0+IGEudmlzaXQodGhpcywgbnVsbCkpLmpvaW4oam9pbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgbG9jYWxlOiBzdHJpbmcsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KG5ldyBTZXJpYWxpemVyVmlzaXRvcihsb2NhbGUsIHBhcmFtcyksIG51bGwpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxUb1htbFBhcnNlciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSB4bWxNZXNzYWdlc0J5SWQ6IHtbaWQ6IHN0cmluZ106IHhtbC5Ob2RlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE1FU1NBR0VfVEFHOiBzdHJpbmcpIHt9XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy54bWxNZXNzYWdlc0J5SWQgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5lcnJvcnMgPSBwYXJzZXIuZXJyb3JzO1xuICAgIGh0bWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeG1sTWVzc2FnZXNCeUlkOiB0aGlzLnhtbE1lc3NhZ2VzQnlJZCxcbiAgICAgIGVycm9yczogdGhpcy5lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSB0aGlzLk1FU1NBR0VfVEFHOlxuICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdGhpcy54bWxNZXNzYWdlc0J5SWRbaWQudmFsdWVdID0gKGVsZW1lbnQgYXMgYW55KSBhcyB4bWwuTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLmlkIHx8IHNoYTEoc2VyaWFsaXplTm9kZXMobWVzc2FnZS5ub2Rlcykuam9pbihcIlwiKSArIGBbJHttZXNzYWdlLm1lYW5pbmd9XWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbERpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICBpZiAobWVzc2FnZS5pZCkge1xuICAgIHJldHVybiBtZXNzYWdlLmlkO1xuICB9XG5cbiAgY29uc3QgdmlzaXRvciA9IG5ldyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvcigpO1xuICBjb25zdCBwYXJ0cyA9IG1lc3NhZ2Uubm9kZXMubWFwKGEgPT4gYS52aXNpdCh2aXNpdG9yLCBudWxsKSk7XG4gIHJldHVybiBjb21wdXRlTXNnSWQocGFydHMuam9pbihcIlwiKSwgbWVzc2FnZS5tZWFuaW5nKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGkxOG4gaHRtbCB0byBzb21ldGhpbmcgeG1sLWxpa2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYW4gVUlELlxuICpcbiAqIFRoZSB2aXNpdG9yIGlzIGFsc28gdXNlZCBpbiB0aGUgaTE4biBwYXJzZXIgdGVzdHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0ZXh0LnZhbHVlO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYFske2NvbnRhaW5lci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oXCIsIFwiKX1dYDtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3Qgc3RyQ2FzZXMgPSBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLm1hcCgoazogc3RyaW5nKSA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuICAgIHJldHVybiBgeyR7aWN1LmV4cHJlc3Npb259LCAke2ljdS50eXBlfSwgJHtzdHJDYXNlcy5qb2luKFwiLCBcIil9fWA7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBwaC5pc1ZvaWRcbiAgICAgID8gYDxwaCB0YWcgbmFtZT1cIiR7cGguc3RhcnROYW1lfVwiLz5gXG4gICAgICA6IGA8cGggdGFnIG5hbWU9XCIke3BoLnN0YXJ0TmFtZX1cIj4ke3BoLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbihcIiwgXCIpfTwvcGggbmFtZT1cIiR7XG4gICAgICAgICAgcGguY2xvc2VOYW1lXG4gICAgICAgIH1cIj5gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gcGgudmFsdWUgPyBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCI+JHtwaC52YWx1ZX08L3BoPmAgOiBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCIvPmA7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gYDxwaCBpY3UgbmFtZT1cIiR7cGgubmFtZX1cIj4ke3BoLnZhbHVlLnZpc2l0KHRoaXMpfTwvcGg+YDtcbiAgfVxufVxuXG5jb25zdCBzZXJpYWxpemVyVmlzaXRvciA9IG5ldyBTZXJpYWxpemVyVmlzaXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTm9kZXMobm9kZXM6IGkxOG4uTm9kZVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gbm9kZXMubWFwKGEgPT4gYS52aXNpdChzZXJpYWxpemVyVmlzaXRvciwgbnVsbCkpO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgaTE4biBodG1sIHRvIHNvbWV0aGluZyB4bWwtbGlrZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhbiBVSUQuXG4gKlxuICogSWdub3JlIHRoZSBJQ1UgZXhwcmVzc2lvbnMgc28gdGhhdCBtZXNzYWdlIElEcyBzdGF5cyBpZGVudGljYWwgaWYgb25seSB0aGUgZXhwcmVzc2lvbiBjaGFuZ2VzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvciBleHRlbmRzIFNlcmlhbGl6ZXJWaXNpdG9yIHtcbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHJDYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKChrOiBzdHJpbmcpID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG4gICAgLy8gRG8gbm90IHRha2UgdGhlIGV4cHJlc3Npb24gaW50byBhY2NvdW50XG4gICAgcmV0dXJuIGB7JHtpY3UudHlwZX0sICR7c3RyQ2FzZXMuam9pbihcIiwgXCIpfX1gO1xuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgU0hBMSBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gKlxuICogc2VlIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtNC9maXBzLTE4MC00LnBkZlxuICpcbiAqIFdBUk5JTkc6IHRoaXMgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGRlc2lnbmVkIG5vdCB0ZXN0ZWQgd2l0aCBzZWN1cml0eSBpbiBtaW5kLlxuICogICAgICAgICAgRE8gTk9UIFVTRSBJVCBJTiBBIFNFQ1VSSVRZIFNFTlNJVElWRSBDT05URVhULlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhMShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHV0ZjggPSB1dGY4RW5jb2RlKHN0cik7XG4gIGNvbnN0IHdvcmRzMzIgPSBzdHJpbmdUb1dvcmRzMzIodXRmOCwgRW5kaWFuLkJpZyk7XG4gIGNvbnN0IGxlbiA9IHV0ZjgubGVuZ3RoICogODtcblxuICBjb25zdCB3ID0gbmV3IEFycmF5KDgwKTtcbiAgbGV0IFthLCBiLCBjLCBkLCBlXTogbnVtYmVyW10gPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgd29yZHMzMltsZW4gPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBsZW4gJSAzMik7XG4gIHdvcmRzMzJbKCgobGVuICsgNjQpID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBbaDAsIGgxLCBoMiwgaDMsIGg0XTogbnVtYmVyW10gPSBbYSwgYiwgYywgZCwgZV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDgwOyBqKyspIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKGogPCAxNikge1xuICAgICAgICB3W2pdID0gd29yZHMzMltpICsgal07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3W2pdID0gcm9sMzIod1tqIC0gM10gXiB3W2ogLSA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmLCBrXSA9IGZrKGosIGIsIGMsIGQpO1xuICAgICAgY29uc3QgdGVtcCA9IFtyb2wzMihhLCA1KSwgZiwgZSwgaywgd1tqXV0ucmVkdWNlKGFkZDMyKTtcbiAgICAgIFtlLCBkLCBjLCBiLCBhXSA9IFtkLCBjLCByb2wzMihiLCAzMCksIGEsIHRlbXBdO1xuICAgIH1cblxuICAgIFthLCBiLCBjLCBkLCBlXSA9IFthZGQzMihhLCBoMCksIGFkZDMyKGIsIGgxKSwgYWRkMzIoYywgaDIpLCBhZGQzMihkLCBoMyksIGFkZDMyKGUsIGg0KV07XG4gIH1cblxuICByZXR1cm4gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2EsIGIsIGMsIGQsIGVdKSk7XG59XG5cbmZ1bmN0aW9uIGZrKGluZGV4OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgaWYgKGluZGV4IDwgMjApIHtcbiAgICByZXR1cm4gWyhiICYgYykgfCAofmIgJiBkKSwgMHg1YTgyNzk5OV07XG4gIH1cblxuICBpZiAoaW5kZXggPCA0MCkge1xuICAgIHJldHVybiBbYiBeIGMgXiBkLCAweDZlZDllYmExXTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDYwKSB7XG4gICAgcmV0dXJuIFsoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCksIDB4OGYxYmJjZGNdO1xuICB9XG5cbiAgcmV0dXJuIFtiIF4gYyBeIGQsIDB4Y2E2MmMxZDZdO1xufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIGZpbmdlcnByaW50IG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIDY0IGJpdCBudW1iZXIgZW5jb2RlZCBhcyBhIGRlY2ltYWwgc3RyaW5nXG4gKlxuICogYmFzZWQgb246XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvYmxvYi9tYXN0ZXIvc3JjL2NvbS9nb29nbGUvamF2YXNjcmlwdC9qc2NvbXAvR29vZ2xlSnNNZXNzYWdlSWRHZW5lcmF0b3IuamF2YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZ2VycHJpbnQoc3RyOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdXRmOCA9IHV0ZjhFbmNvZGUoc3RyKTtcblxuICBsZXQgW2hpLCBsb10gPSBbaGFzaDMyKHV0ZjgsIDApLCBoYXNoMzIodXRmOCwgMTAyMDcyKV07XG5cbiAgaWYgKGhpID09PSAwICYmIChsbyA9PT0gMCB8fCBsbyA9PT0gMSkpIHtcbiAgICBoaSA9IGhpIF4gMHgxMzBmOWJlZjtcbiAgICBsbyA9IGxvIF4gLTB4NmI1ZjU2ZDg7XG4gIH1cblxuICByZXR1cm4gW2hpLCBsb107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTXNnSWQobXNnOiBzdHJpbmcsIG1lYW5pbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBbaGksIGxvXSA9IGZpbmdlcnByaW50KG1zZyk7XG5cbiAgaWYgKG1lYW5pbmcpIHtcbiAgICBjb25zdCBbaGltLCBsb21dID0gZmluZ2VycHJpbnQobWVhbmluZyk7XG4gICAgW2hpLCBsb10gPSBhZGQ2NChyb2w2NChbaGksIGxvXSwgMSksIFtoaW0sIGxvbV0pO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVTdHJpbmdUb0RlY1N0cmluZyh3b3JkczMyVG9CeXRlU3RyaW5nKFtoaSAmIDB4N2ZmZmZmZmYsIGxvXSkpO1xufVxuXG5mdW5jdGlvbiBoYXNoMzIoc3RyOiBzdHJpbmcsIGM6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBbYSwgYl0gPSBbMHg5ZTM3NzliOSwgMHg5ZTM3NzliOV07XG4gIGxldCBpOiBudW1iZXI7XG5cbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpICsgMTIgPD0gbGVuOyBpICs9IDEyKSB7XG4gICAgYSA9IGFkZDMyKGEsIHdvcmRBdChzdHIsIGksIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBiID0gYWRkMzIoYiwgd29yZEF0KHN0ciwgaSArIDQsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBbYSwgYiwgY10gPSBtaXgoW2EsIGIsIGNdKTtcbiAgfVxuXG4gIGEgPSBhZGQzMihhLCB3b3JkQXQoc3RyLCBpLCBFbmRpYW4uTGl0dGxlKSk7XG4gIGIgPSBhZGQzMihiLCB3b3JkQXQoc3RyLCBpICsgNCwgRW5kaWFuLkxpdHRsZSkpO1xuICAvLyB0aGUgZmlyc3QgYnl0ZSBvZiBjIGlzIHJlc2VydmVkIGZvciB0aGUgbGVuZ3RoXG4gIGMgPSBhZGQzMihjLCBsZW4pO1xuICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpIDw8IDgpO1xuXG4gIHJldHVybiBtaXgoW2EsIGIsIGNdKVsyXTtcbn1cblxuLy8gY2xhbmctZm9ybWF0IG9mZlxuZnVuY3Rpb24gbWl4KFthLCBiLCBjXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgYSA9IHN1YjMyKGEsIGIpO1xuICBhID0gc3ViMzIoYSwgYyk7XG4gIGEgXj0gYyA+Pj4gMTM7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgODtcbiAgYyA9IHN1YjMyKGMsIGEpO1xuICBjID0gc3ViMzIoYywgYik7XG4gIGMgXj0gYiA+Pj4gMTM7XG4gIGEgPSBzdWIzMihhLCBiKTtcbiAgYSA9IHN1YjMyKGEsIGMpO1xuICBhIF49IGMgPj4+IDEyO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDE2O1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiA1O1xuICBhID0gc3ViMzIoYSwgYik7XG4gIGEgPSBzdWIzMihhLCBjKTtcbiAgYSBePSBjID4+PiAzO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDEwO1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiAxNTtcbiAgcmV0dXJuIFthLCBiLCBjXTtcbn1cbi8vIGNsYW5nLWZvcm1hdCBvblxuXG4vLyBVdGlsc1xuXG5lbnVtIEVuZGlhbiB7XG4gIExpdHRsZSxcbiAgQmlnXG59XG5cbmZ1bmN0aW9uIGFkZDMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGFkZDMydG82NChhLCBiKVsxXTtcbn1cblxuZnVuY3Rpb24gYWRkMzJ0bzY0KGE6IG51bWJlciwgYjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGxvdyA9IChhICYgMHhmZmZmKSArIChiICYgMHhmZmZmKTtcbiAgY29uc3QgaGlnaCA9IChhID4+PiAxNikgKyAoYiA+Pj4gMTYpICsgKGxvdyA+Pj4gMTYpO1xuICByZXR1cm4gW2hpZ2ggPj4+IDE2LCAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKV07XG59XG5cbmZ1bmN0aW9uIGFkZDY0KFthaCwgYWxdOiBbbnVtYmVyLCBudW1iZXJdLCBbYmgsIGJsXTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBbY2FycnksIGxdID0gYWRkMzJ0bzY0KGFsLCBibCk7XG4gIGNvbnN0IGggPSBhZGQzMihhZGQzMihhaCwgYmgpLCBjYXJyeSk7XG4gIHJldHVybiBbaCwgbF07XG59XG5cbmZ1bmN0aW9uIHN1YjMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpIC0gKGIgJiAweGZmZmYpO1xuICBjb25zdCBoaWdoID0gKGEgPj4gMTYpIC0gKGIgPj4gMTYpICsgKGxvdyA+PiAxNik7XG4gIHJldHVybiAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKTtcbn1cblxuLy8gUm90YXRlIGEgMzJiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDMyKGE6IG51bWJlciwgY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoYSA8PCBjb3VudCkgfCAoYSA+Pj4gKDMyIC0gY291bnQpKTtcbn1cblxuLy8gUm90YXRlIGEgNjRiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDY0KFtoaSwgbG9dOiBbbnVtYmVyLCBudW1iZXJdLCBjb3VudDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGggPSAoaGkgPDwgY291bnQpIHwgKGxvID4+PiAoMzIgLSBjb3VudCkpO1xuICBjb25zdCBsID0gKGxvIDw8IGNvdW50KSB8IChoaSA+Pj4gKDMyIC0gY291bnQpKTtcbiAgcmV0dXJuIFtoLCBsXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nVG9Xb3JkczMyKHN0cjogc3RyaW5nLCBlbmRpYW46IEVuZGlhbik6IG51bWJlcltdIHtcbiAgY29uc3Qgd29yZHMzMiA9IEFycmF5KChzdHIubGVuZ3RoICsgMykgPj4+IDIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkrKykge1xuICAgIHdvcmRzMzJbaV0gPSB3b3JkQXQoc3RyLCBpICogNCwgZW5kaWFuKTtcbiAgfVxuXG4gIHJldHVybiB3b3JkczMyO1xufVxuXG5mdW5jdGlvbiBieXRlQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaW5kZXggPj0gc3RyLmxlbmd0aCA/IDAgOiBzdHIuY2hhckNvZGVBdChpbmRleCkgJiAweGZmO1xufVxuXG5mdW5jdGlvbiB3b3JkQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGVuZGlhbjogRW5kaWFuKTogbnVtYmVyIHtcbiAgbGV0IHdvcmQgPSAwO1xuICBpZiAoZW5kaWFuID09PSBFbmRpYW4uQmlnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHdvcmQgKz0gYnl0ZUF0KHN0ciwgaW5kZXggKyBpKSA8PCAoMjQgLSA4ICogaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB3b3JkICs9IGJ5dGVBdChzdHIsIGluZGV4ICsgaSkgPDwgKDggKiBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdvcmQ7XG59XG5cbmZ1bmN0aW9uIHdvcmRzMzJUb0J5dGVTdHJpbmcod29yZHMzMjogbnVtYmVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gd29yZHMzMi5yZWR1Y2UoKHN0ciwgd29yZCkgPT4gc3RyICsgd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQpLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQ6IG51bWJlcik6IHN0cmluZyB7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3b3JkID4+PiAoOCAqICgzIC0gaSkpKSAmIDB4ZmYpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVTdHJpbmdUb0hleFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBoZXggPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGIgPSBieXRlQXQoc3RyLCBpKTtcbiAgICBoZXggKz0gKGIgPj4+IDQpLnRvU3RyaW5nKDE2KSArIChiICYgMHgwZikudG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gYmFzZWQgb24gaHR0cDovL3d3dy5kYW52ay5vcmcvaGV4MmRlYy5odG1sIChKUyBjYW4gbm90IGhhbmRsZSBtb3JlIHRoYW4gNTZiKVxuZnVuY3Rpb24gYnl0ZVN0cmluZ1RvRGVjU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGRlY2ltYWwgPSBcIlwiO1xuICBsZXQgdG9UaGVQb3dlciA9IFwiMVwiO1xuXG4gIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkZWNpbWFsID0gYWRkQmlnSW50KGRlY2ltYWwsIG51bWJlclRpbWVzQmlnSW50KGJ5dGVBdChzdHIsIGkpLCB0b1RoZVBvd2VyKSk7XG4gICAgdG9UaGVQb3dlciA9IG51bWJlclRpbWVzQmlnSW50KDI1NiwgdG9UaGVQb3dlcik7XG4gIH1cblxuICByZXR1cm4gZGVjaW1hbFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5yZXZlcnNlKClcbiAgICAuam9pbihcIlwiKTtcbn1cblxuLy8geCBhbmQgeSBkZWNpbWFsLCBsb3dlc3Qgc2lnbmlmaWNhbnQgZGlnaXQgZmlyc3RcbmZ1bmN0aW9uIGFkZEJpZ0ludCh4OiBzdHJpbmcsIHk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBzdW0gPSBcIlwiO1xuICBjb25zdCBsZW4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMCwgY2FycnkgPSAwOyBpIDwgbGVuIHx8IGNhcnJ5OyBpKyspIHtcbiAgICBjb25zdCB0bXBTdW0gPSBjYXJyeSArICsoeFtpXSB8fCAwKSArICsoeVtpXSB8fCAwKTtcbiAgICBpZiAodG1wU3VtID49IDEwKSB7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgICBzdW0gKz0gdG1wU3VtIC0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIHN1bSArPSB0bXBTdW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyVGltZXNCaWdJbnQobnVtOiBudW1iZXIsIGI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBwcm9kdWN0ID0gXCJcIjtcbiAgbGV0IGJUb1RoZVBvd2VyID0gYjtcbiAgZm9yICg7IG51bSAhPT0gMDsgbnVtID0gbnVtID4+PiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHByb2R1Y3QgPSBhZGRCaWdJbnQocHJvZHVjdCwgYlRvVGhlUG93ZXIpO1xuICAgIH1cbiAgICBiVG9UaGVQb3dlciA9IGFkZEJpZ0ludChiVG9UaGVQb3dlciwgYlRvVGhlUG93ZXIpO1xuICB9XG4gIHJldHVybiBwcm9kdWN0O1xufVxuXG5mdW5jdGlvbiB1dGY4RW5jb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGVuY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBjb2RlUG9pbnQgPSBzdHIuY2hhckNvZGVBdChpbmRleCk7XG5cbiAgICAvLyBkZWNvZGUgc3Vycm9nYXRlXG4gICAgLy8gc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgIGlmIChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRiZmYgJiYgc3RyLmxlbmd0aCA+IGluZGV4ICsgMSkge1xuICAgICAgY29uc3QgbG93ID0gc3RyLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgIGlmIChsb3cgPj0gMHhkYzAwICYmIGxvdyA8PSAweGRmZmYpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29kZVBvaW50ID0gKChjb2RlUG9pbnQgLSAweGQ4MDApIDw8IDEwKSArIGxvdyAtIDB4ZGMwMCArIDB4MTAwMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA8PSAweDdmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDdmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxZikgfCAweGMwLCAoY29kZVBvaW50ICYgMHgzZikgfCAweDgwKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgKGNvZGVQb2ludCA+PiAxMikgfCAweGUwLFxuICAgICAgICAoKGNvZGVQb2ludCA+PiA2KSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKGNvZGVQb2ludCAmIDB4M2YpIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDFmZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4ZjAsXG4gICAgICAgICgoY29kZVBvaW50ID4+IDEyKSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKChjb2RlUG9pbnQgPj4gNikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIEkxOG5NZXNzYWdlc0J5SWQsIFhtbE1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMS4yXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoxLjJcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSBcInhcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ0cmFucy11bml0XCI7XG5jb25zdCBfQ09OVEVYVF9HUk9VUF9UQUcgPSBcImNvbnRleHQtZ3JvdXBcIjtcbmNvbnN0IF9DT05URVhUX1RBRyA9IFwiY29udGV4dFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4bGlmZkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZlBhcnNlciA9IG5ldyBYbGlmZlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBtZXNzYWdlc1xuICBjb25zdCBpMThuTWVzc2FnZXNCeUlkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTWVzc2FnZXNCeUlkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIGkxOG5NZXNzYWdlc0J5SWQ7XG59XG5cbi8vIHVzZWQgdG8gbWVyZ2UgdHJhbnNsYXRpb25zIHdoZW4gZXh0cmFjdGluZ1xuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL29zL3hsaWZmLWNvcmUuaHRtbFxuLy8gaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi94bGlmZi1wcm9maWxlLWh0bWwveGxpZmYtcHJvZmlsZS1odG1sLTEuMi5odG1sXG5leHBvcnQgZnVuY3Rpb24geGxpZmZXcml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nIHwgbnVsbCwgZXhpc3RpbmdOb2Rlcz86IHhtbC5Ob2RlW10pOiBzdHJpbmcge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFdyaXRlVmlzaXRvcigpO1xuICBjb25zdCB0cmFuc1VuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDYpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgY29udGV4dFRhZ3M6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0R3JvdXBUYWcgPSBuZXcgeG1sLlRhZyhfQ09OVEVYVF9HUk9VUF9UQUcsIHtwdXJwb3NlOiBcImxvY2F0aW9uXCJ9KTtcbiAgICAgIGNvbnRleHRHcm91cFRhZy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBuZXcgeG1sLkNSKDEwKSxcbiAgICAgICAgbmV3IHhtbC5UYWcoX0NPTlRFWFRfVEFHLCB7XCJjb250ZXh0LXR5cGVcIjogXCJzb3VyY2VmaWxlXCJ9LCBbbmV3IHhtbC5UZXh0KHNvdXJjZS5maWxlUGF0aCldKSxcbiAgICAgICAgbmV3IHhtbC5DUigxMCksXG4gICAgICAgIG5ldyB4bWwuVGFnKF9DT05URVhUX1RBRywge1wiY29udGV4dC10eXBlXCI6IFwibGluZW51bWJlclwifSwgW25ldyB4bWwuVGV4dChgJHtzb3VyY2Uuc3RhcnRMaW5lfWApXSksXG4gICAgICAgIG5ldyB4bWwuQ1IoOClcbiAgICAgICk7XG4gICAgICBjb250ZXh0VGFncy5wdXNoKG5ldyB4bWwuQ1IoOCksIGNvbnRleHRHcm91cFRhZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc1VuaXQgPSBuZXcgeG1sLlRhZyhfVU5JVF9UQUcsIHtpZDogbWVzc2FnZS5pZCwgZGF0YXR5cGU6IFwiaHRtbFwifSk7XG4gICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCB2aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKSksXG4gICAgICAuLi5jb250ZXh0VGFnc1xuICAgICk7XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcImRlc2NyaXB0aW9uXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UuZGVzY3JpcHRpb24pXSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcIm1lYW5pbmdcIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5tZWFuaW5nKV0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyYW5zVW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuXG4gICAgdHJhbnNVbml0cy5wdXNoKG5ldyB4bWwuQ1IoNiksIHRyYW5zVW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgeG1sLlRhZyhcImJvZHlcIiwge30sIFsuLi50cmFuc1VuaXRzLCBuZXcgeG1sLkNSKDQpXSk7XG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhcbiAgICBcImZpbGVcIixcbiAgICB7XG4gICAgICBcInNvdXJjZS1sYW5ndWFnZVwiOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkcsXG4gICAgICBkYXRhdHlwZTogXCJwbGFpbnRleHRcIixcbiAgICAgIG9yaWdpbmFsOiBcIm5nMi50ZW1wbGF0ZVwiXG4gICAgfSxcbiAgICBbbmV3IHhtbC5DUig0KSwgYm9keSwgbmV3IHhtbC5DUigyKV1cbiAgKTtcbiAgY29uc3QgeGxpZmYgPSBuZXcgeG1sLlRhZyhcInhsaWZmXCIsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOU30sIFtuZXcgeG1sLkNSKDIpLCBmaWxlLCBuZXcgeG1sLkNSKCldKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmRGlnZXN0ID0gZGlnZXN0O1xuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1VOSVRfVEFHOlxuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsITtcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVU5JVF9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdW5pdE1sU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IHRoaXMuX3VuaXRNbFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBNZXNzYWdlICR7aWR9IG1pc3NlcyBhIHRyYW5zbGF0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9TT1VSQ0VfVEFHOlxuICAgICAgICAvLyBpZ25vcmUgc291cmNlIG1lc3NhZ2VcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RBUkdFVF9UQUc6XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCwgaW5uZXJUZXh0RW5kKTtcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gaW5uZXJUZXh0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfRklMRV9UQUc6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETyh2aWNiKTogYXNzZXJ0IGZpbGUgc3RydWN0dXJlLCB4bGlmZiB2ZXJzaW9uXG4gICAgICAgIC8vIEZvciBub3cgb25seSByZWN1cnNlIG9uIHVuaGFuZGxlZCBub2Rlc1xuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5QbGFjZWhvbGRlciB8IG51bGwge1xuICAgIGlmIChlbC5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaCgoYzogYW55KSA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbilcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGN0eXBlID0gZ2V0Q3R5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwke3BoLnRhZ30vPmB9KV07XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGguc3RhcnROYW1lLCBjdHlwZSwgXCJlcXVpdi10ZXh0XCI6IGA8JHtwaC50YWd9PmB9KTtcbiAgICBjb25zdCBjbG9zZVRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5jbG9zZU5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwvJHtwaC50YWd9PmB9KTtcblxuICAgIHJldHVybiBbc3RhcnRUYWdQaCwgLi4udGhpcy5zZXJpYWxpemUocGguY2hpbGRyZW4pLCBjbG9zZVRhZ1BoXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGB7eyR7cGgudmFsdWV9fX1gfSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGVxdWl2VGV4dCA9IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKX19YDtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGVxdWl2VGV4dH0pXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdHlwZUZvclRhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYnJcIjpcbiAgICAgIHJldHVybiBcImxiXCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGB4LSR7dGFnfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgSTE4bk1lc3NhZ2VzQnlJZCwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMi4wXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoyLjBcIjtcbmNvbnN0IF9ERUZBVUxUX1NPVVJDRV9MQU5HID0gXCJlblwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUcgPSBcInBjXCI7XG5jb25zdCBfWExJRkZfVEFHID0gXCJ4bGlmZlwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ1bml0XCI7XG5jb25zdCBfTk9URVNfVEFHID0gXCJub3Rlc1wiO1xuY29uc3QgX05PVEVfVEFHID0gXCJub3RlXCI7XG5jb25zdCBfU0VHTUVOVF9UQUcgPSBcInNlZ21lbnRcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi94bGlmZi1jb3JlL3YyLjAvb3MveGxpZmYtY29yZS12Mi4wLW9zLmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9JMThuKGNvbnRlbnQ6IHN0cmluZyk6IEkxOG5NZXNzYWdlc0J5SWQge1xuICAvLyB4bGlmZiB0byB4bWwgbm9kZXNcbiAgY29uc3QgeGxpZmYyUGFyc2VyID0gbmV3IFhsaWZmMlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZjJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBYbWxUb0kxOG4oKTtcblxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3Qge2kxOG5Ob2RlcywgZXJyb3JzOiBlfSA9IGNvbnZlcnRlci5jb252ZXJ0KG1zZ0lkVG9IdG1sW21zZ0lkXSk7XG4gICAgZXJyb3JzLnB1c2goLi4uZSk7XG4gICAgaTE4bk5vZGVzQnlNc2dJZFttc2dJZF0gPSBpMThuTm9kZXM7XG4gIH0pO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4gaTE4bk5vZGVzQnlNc2dJZDtcbn1cblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYyIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzPzogeG1sLk5vZGVbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgV3JpdGVWaXNpdG9yKCk7XG4gIGNvbnN0IHVuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDQpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IG5ldyB4bWwuVGFnKF9VTklUX1RBRywge2lkOiBtZXNzYWdlLmlkfSk7XG4gICAgY29uc3Qgbm90ZXMgPSBuZXcgeG1sLlRhZyhfTk9URVNfVEFHKTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uIHx8IG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcImRlc2NyaXB0aW9uXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UuZGVzY3JpcHRpb24pXSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgbmV3IHhtbC5UYWcoX05PVEVfVEFHLCB7Y2F0ZWdvcnk6IFwibWVhbmluZ1wifSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLm1lYW5pbmcpXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJsb2NhdGlvblwifSwgW1xuICAgICAgICAgIG5ldyB4bWwuVGV4dChcbiAgICAgICAgICAgIGAke3NvdXJjZS5maWxlUGF0aH06JHtzb3VyY2Uuc3RhcnRMaW5lfSR7c291cmNlLmVuZExpbmUgIT09IHNvdXJjZS5zdGFydExpbmUgPyBcIixcIiArIHNvdXJjZS5lbmRMaW5lIDogXCJcIn1gXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIG5vdGVzLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSk7XG4gICAgdW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNiksIG5vdGVzKTtcblxuICAgIGNvbnN0IHNlZ21lbnQgPSBuZXcgeG1sLlRhZyhfU0VHTUVOVF9UQUcpO1xuXG4gICAgc2VnbWVudC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoOCksIG5ldyB4bWwuVGFnKF9TT1VSQ0VfVEFHLCB7fSwgdmlzaXRvci5zZXJpYWxpemUobWVzc2FnZS5ub2RlcykpLCBuZXcgeG1sLkNSKDYpKTtcblxuICAgIHVuaXQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpLCBzZWdtZW50LCBuZXcgeG1sLkNSKDQpKTtcblxuICAgIHVuaXRzLnB1c2gobmV3IHhtbC5DUig0KSwgdW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhfRklMRV9UQUcsIHtvcmlnaW5hbDogXCJuZy50ZW1wbGF0ZVwiLCBpZDogXCJuZ2kxOG5cIn0sIFsuLi51bml0cywgbmV3IHhtbC5DUigyKV0pO1xuXG4gIGNvbnN0IHhsaWZmID0gbmV3IHhtbC5UYWcoX1hMSUZGX1RBRywge3ZlcnNpb246IF9WRVJTSU9OLCB4bWxuczogX1hNTE5TLCBzcmNMYW5nOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkd9LCBbXG4gICAgbmV3IHhtbC5DUigyKSxcbiAgICBmaWxlLFxuICAgIG5ldyB4bWwuQ1IoKVxuICBdKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmMkRpZ2VzdCA9IGRlY2ltYWxEaWdlc3Q7XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHhsaWZmIGZpbGVcbmNsYXNzIFhsaWZmMlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5fZXJyb3JzID0gcGFyc2VyLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVU5JVF9UQUc6XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1VOSVRfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3VuaXRNbFN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICB0aGlzLl9tc2dJZFRvSHRtbFtpZF0gPSB0aGlzLl91bml0TWxTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgTWVzc2FnZSAke2lkfSBtaXNzZXMgYSB0cmFuc2xhdGlvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfU09VUkNFX1RBRzpcbiAgICAgICAgLy8gaWdub3JlIHNvdXJjZSBtZXNzYWdlXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9UQVJHRVRfVEFHOlxuICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICBjb25zdCBpbm5lclRleHRFbmQgPSBlbGVtZW50LmVuZFNvdXJjZVNwYW4hLnN0YXJ0Lm9mZnNldDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5maWxlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQsIGlubmVyVGV4dEVuZCk7XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IGlubmVyVGV4dDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1hMSUZGX1RBRzpcbiAgICAgICAgY29uc3QgdmVyc2lvbkF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwidmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlcnNpb25BdHRyKSB7XG4gICAgICAgICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25BdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh2ZXJzaW9uICE9PSBcIjIuMFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgVGhlIFhMSUZGIGZpbGUgdmVyc2lvbiAke3ZlcnNpb259IGlzIG5vdCBjb21wYXRpYmxlIHdpdGggWExJRkYgMi4wIHNlcmlhbGl6ZXJgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZVtdIHwgbnVsbCB7XG4gICAgc3dpdGNoIChlbC5uYW1lKSB7XG4gICAgICBjYXNlIF9QTEFDRUhPTERFUl9UQUc6XG4gICAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdlwiKTtcbiAgICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBuYW1lQXR0ci52YWx1ZSwgZWwuc291cmNlU3BhbildO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2XCIgYXR0cmlidXRlYCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBfUExBQ0VIT0xERVJfU1BBTk5JTkdfVEFHOlxuICAgICAgICBjb25zdCBzdGFydEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2U3RhcnRcIik7XG4gICAgICAgIGNvbnN0IGVuZEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2RW5kXCIpO1xuXG4gICAgICAgIGlmICghc3RhcnRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2U3RhcnRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdkVuZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SWQgPSBzdGFydEF0dHIudmFsdWU7XG4gICAgICAgICAgY29uc3QgZW5kSWQgPSBlbmRBdHRyLnZhbHVlO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXM6IGkxOG4uTm9kZVtdID0gW107XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXMuY29uY2F0KFxuICAgICAgICAgICAgbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgc3RhcnRJZCwgZWwuc291cmNlU3BhbiksXG4gICAgICAgICAgICAuLi5lbC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMsIG51bGwpKSxcbiAgICAgICAgICAgIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIGVuZElkLCBlbC5zb3VyY2VTcGFuKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogW10uY29uY2F0KC4uLm1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbikpXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHByaXZhdGUgX25leHRQbGFjZWhvbGRlcklkOiBudW1iZXI7XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIGNvbnN0IHRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCksXG4gICAgICAgIGVxdWl2OiBwaC5zdGFydE5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRpc3A6IGA8JHtwaC50YWd9Lz5gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbdGFnUGhdO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ1BjID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRywge1xuICAgICAgaWQ6ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpLFxuICAgICAgZXF1aXZTdGFydDogcGguc3RhcnROYW1lLFxuICAgICAgZXF1aXZFbmQ6IHBoLmNsb3NlTmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBkaXNwU3RhcnQ6IGA8JHtwaC50YWd9PmAsXG4gICAgICBkaXNwRW5kOiBgPC8ke3BoLnRhZ30+YFxuICAgIH0pO1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW10uY29uY2F0KC4uLnBoLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlOiB4bWwuTm9kZSkgPT4gdGFnUGMuY2hpbGRyZW4ucHVzaChub2RlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ1BjLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5UZXh0KFwiXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RhZ1BjXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7eyR7cGgudmFsdWV9fX1gXG4gICAgICB9KVxuICAgIF07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtjYXNlc319YFxuICAgICAgfSlcbiAgICBdO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHRoaXMuX25leHRQbGFjZWhvbGRlcklkID0gMDtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJiclwiOlxuICAgIGNhc2UgXCJiXCI6XG4gICAgY2FzZSBcImlcIjpcbiAgICBjYXNlIFwidVwiOlxuICAgICAgcmV0dXJuIFwiZm10XCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBjYXNlIFwiYVwiOlxuICAgICAgcmV0dXJuIFwibGlua1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJvdGhlclwiO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIFBsYWNlaG9sZGVyTWFwcGVyLCBTaW1wbGVQbGFjZWhvbGRlck1hcHBlciwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5cbmNvbnN0IF9NRVNTQUdFU19UQUcgPSBcIm1lc3NhZ2VidW5kbGVcIjtcbmNvbnN0IF9NRVNTQUdFX1RBRyA9IFwibXNnXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuY29uc3QgX0VYRU1QTEVfVEFHID0gXCJleFwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuXG5jb25zdCBfRE9DVFlQRSA9IGA8IUVMRU1FTlQgbWVzc2FnZWJ1bmRsZSAobXNnKSo+XG48IUFUVExJU1QgbWVzc2FnZWJ1bmRsZSBjbGFzcyBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIG1zZyAoI1BDREFUQXxwaHxzb3VyY2UpKj5cbjwhQVRUTElTVCBtc2cgaWQgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHNlcSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbmFtZSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgZGVzYyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbWVhbmluZyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgb2Jzb2xldGUgKG9ic29sZXRlKSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgeG1sOnNwYWNlIChkZWZhdWx0fHByZXNlcnZlKSBcImRlZmF1bHRcIj5cbjwhQVRUTElTVCBtc2cgaXNfaGlkZGVuIENEQVRBICNJTVBMSUVEPlxuXG48IUVMRU1FTlQgc291cmNlICgjUENEQVRBKT5cblxuPCFFTEVNRU5UIHBoICgjUENEQVRBfGV4KSo+XG48IUFUVExJU1QgcGggbmFtZSBDREFUQSAjUkVRVUlSRUQ+XG5cbjwhRUxFTUVOVCBleCAoI1BDREFUQSk+YDtcblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geG1iTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX01FU1NBR0VfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeG1iIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtYldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzOiB4bWwuTm9kZVtdID0gW10pOiBzdHJpbmcge1xuICBjb25zdCBleGFtcGxlVmlzaXRvciA9IG5ldyBFeGFtcGxlVmlzaXRvcigpO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoKTtcbiAgY29uc3Qgcm9vdE5vZGUgPSBuZXcgeG1sLlRhZyhfTUVTU0FHRVNfVEFHKTtcblxuICBleGlzdGluZ05vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDIpLCBub2RlKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coZXhpc3RpbmdOb2Rlcyk7XG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtpZDogbWVzc2FnZS5pZH07XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgYXR0cnNbXCJkZXNjXCJdID0gbWVzc2FnZS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICBhdHRyc1tcIm1lYW5pbmdcIl0gPSBtZXNzYWdlLm1lYW5pbmc7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVGFnczogeG1sLlRhZ1tdID0gW107XG4gICAgbWVzc2FnZS5zb3VyY2VzLmZvckVhY2goKHNvdXJjZTogaTE4bi5NZXNzYWdlU3BhbikgPT4ge1xuICAgICAgc291cmNlVGFncy5wdXNoKFxuICAgICAgICBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIFtcbiAgICAgICAgICBuZXcgeG1sLlRleHQoXG4gICAgICAgICAgICBgJHtzb3VyY2UuZmlsZVBhdGh9OiR7c291cmNlLnN0YXJ0TGluZX0ke3NvdXJjZS5lbmRMaW5lICE9PSBzb3VyY2Uuc3RhcnRMaW5lID8gXCIsXCIgKyBzb3VyY2UuZW5kTGluZSA6IFwiXCJ9YFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByb290Tm9kZS5jaGlsZHJlbi5wdXNoKFxuICAgICAgbmV3IHhtbC5DUigyKSxcbiAgICAgIG5ldyB4bWwuVGFnKF9NRVNTQUdFX1RBRywgYXR0cnMsIFsuLi5zb3VyY2VUYWdzLCAuLi52aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKV0pXG4gICAgKTtcbiAgfSk7XG5cbiAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKCkpO1xuXG4gIHJldHVybiB4bWwuc2VyaWFsaXplKFtcbiAgICBuZXcgeG1sLkRlY2xhcmF0aW9uKHt2ZXJzaW9uOiBcIjEuMFwiLCBlbmNvZGluZzogXCJVVEYtOFwifSksXG4gICAgbmV3IHhtbC5DUigpLFxuICAgIG5ldyB4bWwuRG9jdHlwZShfTUVTU0FHRVNfVEFHLCBfRE9DVFlQRSksXG4gICAgbmV3IHhtbC5DUigpLFxuICAgIGV4YW1wbGVWaXNpdG9yLmFkZERlZmF1bHRFeGFtcGxlcyhyb290Tm9kZSksXG4gICAgbmV3IHhtbC5DUigpXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geG1iRGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBkaWdlc3QobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4bWJNYXBwZXIobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogUGxhY2Vob2xkZXJNYXBwZXIge1xuICByZXR1cm4gbmV3IFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyKG1lc3NhZ2UsIHRvUHVibGljTmFtZSk7XG59XG5cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRleHQodGV4dC52YWx1ZSldO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IHN0YXJ0RXggPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbbmV3IHhtbC5UZXh0KGA8JHtwaC50YWd9PmApXSk7XG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5zdGFydE5hbWV9LCBbc3RhcnRFeF0pO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbc3RhcnRUYWdQaF07XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VFeCA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtuZXcgeG1sLlRleHQoYDwvJHtwaC50YWd9PmApXSk7XG4gICAgY29uc3QgY2xvc2VUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5jbG9zZU5hbWV9LCBbY2xvc2VFeF0pO1xuXG4gICAgcmV0dXJuIFtzdGFydFRhZ1BoLCAuLi50aGlzLnNlcmlhbGl6ZShwaC5jaGlsZHJlbiksIGNsb3NlVGFnUGhdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW25ldyB4bWwuVGV4dChge3ske3BoLnZhbHVlfX19YCldKTtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnXSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW1xuICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICBgeyR7cGgudmFsdWUuZXhwcmVzc2lvbn0sICR7cGgudmFsdWUudHlwZX0sICR7T2JqZWN0LmtleXMocGgudmFsdWUuY2FzZXMpXG4gICAgICAgICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyBcIiB7Li4ufVwiKVxuICAgICAgICAgIC5qb2luKFwiIFwiKX19YFxuICAgICAgKVxuICAgIF0pO1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLm5hbWV9LCBbZXhUYWddKV07XG4gIH1cblxuICBzZXJpYWxpemUobm9kZXM6IGkxOG4uTm9kZVtdKTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5ub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGVjaW1hbERpZ2VzdChtZXNzYWdlKTtcbn1cblxuLy8gVEMgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG5vbi1lbXB0eSBleGFtcGxlIG9uIHBsYWNlaG9sZGVyc1xuY2xhc3MgRXhhbXBsZVZpc2l0b3IgaW1wbGVtZW50cyB4bWwuSVZpc2l0b3Ige1xuICBhZGREZWZhdWx0RXhhbXBsZXMobm9kZTogeG1sLk5vZGUpOiB4bWwuTm9kZSB7XG4gICAgbm9kZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGFnKHRhZzogeG1sLlRhZyk6IHZvaWQge1xuICAgIGlmICh0YWcubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgaWYgKCF0YWcuY2hpbGRyZW4gfHwgdGFnLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleFRleHQgPSBuZXcgeG1sLlRleHQodGFnLmF0dHJzW1wibmFtZVwiXSB8fCBcIi4uLlwiKTtcbiAgICAgICAgdGFnLmNoaWxkcmVuID0gW25ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtleFRleHRdKV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YWcuY2hpbGRyZW4pIHtcbiAgICAgIHRhZy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpOiBhbnkge1xuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgZWxlbWVudC5hdHRycy5mb3JFYWNoKChhdHRyOiBtbC5BdHRyaWJ1dGUpID0+IHtcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhZyA9IG5ldyB4bWwuVGFnKGVsZW1lbnQubmFtZSwgYXR0cnMsIGVsZW1lbnQuY2hpbGRyZW4gYXMgYW55KTtcbiAgICByZXR1cm4gdGhpcy52aXNpdFRhZyh0YWcpO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IHhtbC5UZXh0KTogdm9pZCB7fVxuXG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogeG1sLkRlY2xhcmF0aW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiB4bWwuRG9jdHlwZSk6IHZvaWQge31cbn1cblxuLy8gWE1CL1hUQiBwbGFjZWhvbGRlcnMgY2FuIG9ubHkgY29udGFpbiBBLVosIDAtOSBhbmQgX1xuZXhwb3J0IGZ1bmN0aW9uIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnRlcm5hbE5hbWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV9dL2csIFwiX1wiKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldFhtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QveG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuaW1wb3J0IHt4bWJNYXBwZXJ9IGZyb20gXCIuL3htYlwiO1xuXG5jb25zdCBfVFJBTlNMQVRJT05TX1RBRyA9IFwidHJhbnNsYXRpb25idW5kbGVcIjtcbmNvbnN0IF9UUkFOU0xBVElPTl9UQUcgPSBcInRyYW5zbGF0aW9uXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRiTG9hZFRvSTE4bihjb250ZW50OiBzdHJpbmcpOiBJMThuTWVzc2FnZXNCeUlkIHtcbiAgLy8geHRiIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4dGJQYXJzZXIgPSBuZXcgWHRiUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzOiBwYXJzZUVycm9yc30gPSB4dGJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgaWYgKHBhcnNlRXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke3BhcnNlRXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBub2Rlc1xuICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIC8vIEJlY2F1c2Ugd2Ugc2hvdWxkIGJlIGFibGUgdG8gbG9hZCB4dGIgZmlsZXMgdGhhdCByZWx5IG9uIGZlYXR1cmVzIG5vdCBzdXBwb3J0ZWQgYnkgYW5ndWxhcixcbiAgLy8gd2UgbmVlZCB0byBkZWxheSB0aGUgY29udmVyc2lvbiBvZiBodG1sIHRvIGkxOG4gbm9kZXMgc28gdGhhdCBub24gYW5ndWxhciBtZXNzYWdlcyBhcmUgbm90XG4gIC8vIGNvbnZlcnRlZFxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3QgdmFsdWVGbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtpMThuTm9kZXMsIGVycm9yc30gPSBjb252ZXJ0ZXIuY29udmVydChtc2dJZFRvSHRtbFttc2dJZF0pO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB4dGIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaTE4bk5vZGVzO1xuICAgIH07XG4gICAgY3JlYXRlTGF6eVByb3BlcnR5KGkxOG5Ob2Rlc0J5TXNnSWQsIG1zZ0lkLCB2YWx1ZUZuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGkxOG5Ob2Rlc0J5TXNnSWQ7XG59XG5cbmV4cG9ydCBjb25zdCB4dGJEaWdlc3QgPSBkaWdlc3Q7XG5cbmV4cG9ydCBjb25zdCB4dGJNYXBwZXIgPSB4bWJNYXBwZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhenlQcm9wZXJ0eShtZXNzYWdlczogYW55LCBpZDogc3RyaW5nLCB2YWx1ZUZuOiAoKSA9PiBhbnkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZuKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVzc2FnZXMsIGlkLCB7ZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWV9KTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNldDogXyA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3Qgb3ZlcndyaXRlIGFuIFhUQiB0cmFuc2xhdGlvblwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4dGIgZmlsZVxuY2xhc3MgWHRiUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2J1bmRsZURlcHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKHh0Yjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVuZGxlRGVwdGggPSAwO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICAvLyBXZSBjYW4gbm90IHBhcnNlIHRoZSBJQ1UgbWVzc2FnZXMgYXQgdGhpcyBwb2ludCBhcyBzb21lIG1lc3NhZ2VzIG1pZ2h0IG5vdCBvcmlnaW5hdGVcbiAgICAvLyBmcm9tIEFuZ3VsYXIgdGhhdCBjb3VsZCBub3QgYmUgbGV4J2QuXG4gICAgY29uc3QgeG1sID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZSh4dGIsIFwiXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuX2Vycm9ycyA9IHhtbC5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgeG1sLnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1RSQU5TTEFUSU9OU19UQUc6XG4gICAgICAgIHRoaXMuX2J1bmRsZURlcHRoKys7XG4gICAgICAgIGlmICh0aGlzLl9idW5kbGVEZXB0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1RSQU5TTEFUSU9OU19UQUd9PiBlbGVtZW50cyBjYW4gbm90IGJlIG5lc3RlZGApO1xuICAgICAgICB9XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICB0aGlzLl9idW5kbGVEZXB0aC0tO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVFJBTlNMQVRJT05fVEFHOlxuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19UUkFOU0xBVElPTl9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQhLCBpbm5lclRleHRFbmQhKTtcbiAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IGlubmVyVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIFwiVW5leHBlY3RlZCB0YWdcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG1sIG5vZGVzICh4dGIgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UobWVzc2FnZSwgXCJcIiwgdHJ1ZSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9XG4gICAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogbWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaChjID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKVxuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uUGxhY2Vob2xkZXIgfCBudWxsIHtcbiAgICBpZiAoZWwubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgY29uc3QgbmFtZUF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcIm5hbWVcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJuYW1lXCIgYXR0cmlidXRlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlckVycm9yIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBwdWJsaWMgaW5wdXQ6IHN0cmluZywgcHVibGljIGVyckxvY2F0aW9uOiBzdHJpbmcsIHB1YmxpYyBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMubWVzc2FnZSA9IGBQYXJzZXIgRXJyb3I6ICR7bWVzc2FnZX0gJHtlcnJMb2NhdGlvbn0gWyR7aW5wdXR9XSBpbiAke2N0eExvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogbnVtYmVyLCBwdWJsaWMgZW5kOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3BhbjogUGFyc2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkFTVFwiO1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHF1b3RlZCBleHByZXNzaW9uIG9mIHRoZSBmb3JtOlxuICpcbiAqIHF1b3RlID0gcHJlZml4IGA6YCB1bmludGVycHJldGVkRXhwcmVzc2lvblxuICogcHJlZml4ID0gaWRlbnRpZmllclxuICogdW5pbnRlcnByZXRlZEV4cHJlc3Npb24gPSBhcmJpdHJhcnkgc3RyaW5nXG4gKlxuICogQSBxdW90ZWQgZXhwcmVzc2lvbiBpcyBtZWFudCB0byBiZSBwcmUtcHJvY2Vzc2VkIGJ5IGFuIEFTVCB0cmFuc2Zvcm1lciB0aGF0XG4gKiBjb252ZXJ0cyBpdCBpbnRvIGFub3RoZXIgQVNUIHRoYXQgbm8gbG9uZ2VyIGNvbnRhaW5zIHF1b3RlZCBleHByZXNzaW9ucy5cbiAqIEl0IGlzIG1lYW50IHRvIGFsbG93IHRoaXJkLXBhcnR5IGRldmVsb3BlcnMgdG8gZXh0ZW5kIEFuZ3VsYXIgdGVtcGxhdGVcbiAqIGV4cHJlc3Npb24gbGFuZ3VhZ2UuIFRoZSBgdW5pbnRlcnByZXRlZEV4cHJlc3Npb25gIHBhcnQgb2YgdGhlIHF1b3RlIGlzXG4gKiB0aGVyZWZvcmUgbm90IGludGVycHJldGVkIGJ5IHRoZSBBbmd1bGFyJ3Mgb3duIGV4cHJlc3Npb24gcGFyc2VyLlxuICovXG5leHBvcnQgY2xhc3MgUXVvdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBwcmVmaXg6IHN0cmluZywgcHVibGljIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uOiBzdHJpbmcsIHB1YmxpYyBsb2NhdGlvbjogYW55KSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRRdW90ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIlF1b3RlXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5RXhwciBleHRlbmRzIEFTVCB7XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcGxpY2l0UmVjZWl2ZXIgZXh0ZW5kcyBBU1Qge1xuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEltcGxpY2l0UmVjZWl2ZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBleHByZXNzaW9ucyBzZXBhcmF0ZWQgYnkgYSBzZW1pY29sb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFpbiBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb25zOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hhaW4odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgY29uZGl0aW9uOiBBU1QsIHB1YmxpYyB0cnVlRXhwOiBBU1QsIHB1YmxpYyBmYWxzZUV4cDogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDb25kaXRpb25hbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVdyaXRlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5V3JpdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVQcm9wZXJ0eVJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTYWZlUHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXllZFJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXllZFJlYWQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtleWVkV3JpdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNULCBwdWJsaWMgdmFsdWU6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5ZWRXcml0ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluZGluZ1BpcGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHA6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQaXBlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsUHJpbWl0aXZlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbFByaW1pdGl2ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEFycmF5IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsQXJyYXkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXRlcmFsTWFwS2V5IHtcbiAga2V5OiBzdHJpbmc7XG4gIHF1b3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxNYXAgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBrZXlzOiBMaXRlcmFsTWFwS2V5W10sIHB1YmxpYyB2YWx1ZXM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsTWFwKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgc3RyaW5nczogYW55W10sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEludGVycG9sYXRpb24odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nLCBwdWJsaWMgbGVmdDogQVNULCBwdWJsaWMgcmlnaHQ6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmVmaXhOb3QgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByZWZpeE5vdCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9uTnVsbEFzc2VydCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb246IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Tm9uTnVsbEFzc2VydCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kQ2FsbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TWV0aG9kQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZU1ldGhvZENhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFNhZmVNZXRob2RDYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkNhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyB0YXJnZXQ6IEFTVCB8IG51bGwsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RnVuY3Rpb25DYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RXaXRoU291cmNlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFzdDogQVNULCBwdWJsaWMgc291cmNlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgbG9jYXRpb246IHN0cmluZywgcHVibGljIGVycm9yczogUGFyc2VyRXJyb3JbXSkge1xuICAgIHN1cGVyKG5ldyBQYXJzZVNwYW4oMCwgc291cmNlID09IG51bGwgPyAwIDogc291cmNlLmxlbmd0aCkpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLnNvdXJjZX0gaW4gJHt0aGlzLmxvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQmluZGluZyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNwYW4sXG4gICAgcHVibGljIGtleTogc3RyaW5nLFxuICAgIHB1YmxpYyBrZXlJc1ZhcjogYm9vbGVhbixcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBBU1RXaXRoU291cmNlXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Pyhhc3Q6IEFTVCwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Vyc2l2ZUFzdFZpc2l0b3IgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmxlZnQudmlzaXQodGhpcyk7XG4gICAgYXN0LnJpZ2h0LnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuY29uZGl0aW9uLnZpc2l0KHRoaXMpO1xuICAgIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5mYWxzZUV4cC52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuZXhwLnZpc2l0KHRoaXMpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC50YXJnZXQhLnZpc2l0KHRoaXMpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5vYmoudmlzaXQodGhpcyk7XG4gICAgYXN0LmtleS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5vYmoudmlzaXQodGhpcyk7XG4gICAgYXN0LmtleS52aXNpdCh0aGlzKTtcbiAgICBhc3QudmFsdWUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGFzdC52YWx1ZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdEFsbChhc3RzOiBBU1RbXSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3RzLmZvckVhY2goYXN0ID0+IGFzdC52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3RUcmFuc2Zvcm1lciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgSW50ZXJwb2xhdGlvbihhc3Quc3BhbiwgYXN0LnN0cmluZ3MsIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZShhc3Quc3BhbiwgYXN0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlSZWFkKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUpO1xuICB9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IE1ldGhvZENhbGwoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVNZXRob2RDYWxsKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ2FsbChhc3Quc3BhbiwgYXN0LnRhcmdldCEudmlzaXQodGhpcyksIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbEFycmF5KGFzdC5zcGFuLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxNYXAoYXN0LnNwYW4sIGFzdC5rZXlzLCB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMpKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQmluYXJ5KGFzdC5zcGFuLCBhc3Qub3BlcmF0aW9uLCBhc3QubGVmdC52aXNpdCh0aGlzKSwgYXN0LnJpZ2h0LnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJlZml4Tm90KGFzdC5zcGFuLCBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTm9uTnVsbEFzc2VydChhc3Quc3BhbiwgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWwoYXN0LnNwYW4sIGFzdC5jb25kaXRpb24udmlzaXQodGhpcyksIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpLCBhc3QuZmFsc2VFeHAudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCaW5kaW5nUGlwZShhc3Quc3BhbiwgYXN0LmV4cC52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRSZWFkKGFzdC5zcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBLZXllZFdyaXRlKGFzdC5zcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRBbGwoYXN0czogYW55W10pOiBhbnlbXSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEFycmF5KGFzdHMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHJlc1tpXSA9IGFzdHNbaV0udmlzaXQodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBDaGFpbihhc3Quc3BhbiwgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFF1b3RlKGFzdC5zcGFuLCBhc3QucHJlZml4LCBhc3QudW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGFzdC5sb2NhdGlvbik7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4uL2FzdC9jaGFyc1wiO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICBDaGFyYWN0ZXIsXG4gIElkZW50aWZpZXIsXG4gIEtleXdvcmQsXG4gIFN0cmluZyxcbiAgT3BlcmF0b3IsXG4gIE51bWJlcixcbiAgRXJyb3Jcbn1cblxuY29uc3QgS0VZV09SRFMgPSBbXCJ2YXJcIiwgXCJsZXRcIiwgXCJhc1wiLCBcIm51bGxcIiwgXCJ1bmRlZmluZWRcIiwgXCJ0cnVlXCIsIFwiZmFsc2VcIiwgXCJpZlwiLCBcImVsc2VcIiwgXCJ0aGlzXCJdO1xuXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xuICB0b2tlbml6ZSh0ZXh0OiBzdHJpbmcpOiBUb2tlbltdIHtcbiAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIodGV4dCk7XG4gICAgY29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG4gICAgbGV0IHRva2VuID0gc2Nhbm5lci5zY2FuVG9rZW4oKTtcbiAgICB3aGlsZSAodG9rZW4gIT0gbnVsbCkge1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSBzY2FubmVyLnNjYW5Ub2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgbnVtVmFsdWU6IG51bWJlciwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcpIHt9XG5cbiAgaXNDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLkNoYXJhY3RlciAmJiB0aGlzLm51bVZhbHVlID09PSBjb2RlO1xuICB9XG5cbiAgaXNOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLk51bWJlcjtcbiAgfVxuXG4gIGlzU3RyaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5TdHJpbmc7XG4gIH1cblxuICBpc09wZXJhdG9yKG9wZXJhdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gb3BlcmF0ZXI7XG4gIH1cblxuICBpc0lkZW50aWZpZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLklkZW50aWZpZXI7XG4gIH1cblxuICBpc0tleXdvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQ7XG4gIH1cblxuICBpc0tleXdvcmRMZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJsZXRcIjtcbiAgfVxuXG4gIGlzS2V5d29yZEFzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwiYXNcIjtcbiAgfVxuXG4gIGlzS2V5d29yZE51bGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJudWxsXCI7XG4gIH1cblxuICBpc0tleXdvcmRVbmRlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgfVxuXG4gIGlzS2V5d29yZFRydWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ0cnVlXCI7XG4gIH1cblxuICBpc0tleXdvcmRGYWxzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcImZhbHNlXCI7XG4gIH1cblxuICBpc0tleXdvcmRUaGlzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidGhpc1wiO1xuICB9XG5cbiAgaXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuRXJyb3I7XG4gIH1cblxuICB0b051bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXIgPyB0aGlzLm51bVZhbHVlIDogLTE7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBUb2tlblR5cGUuQ2hhcmFjdGVyOlxuICAgICAgY2FzZSBUb2tlblR5cGUuSWRlbnRpZmllcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLktleXdvcmQ6XG4gICAgICBjYXNlIFRva2VuVHlwZS5PcGVyYXRvcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLlN0cmluZzpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLkVycm9yOlxuICAgICAgICByZXR1cm4gdGhpcy5zdHJWYWx1ZTtcbiAgICAgIGNhc2UgVG9rZW5UeXBlLk51bWJlcjpcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXdDaGFyYWN0ZXJUb2tlbihpbmRleDogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5DaGFyYWN0ZXIsIGNvZGUsIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpO1xufVxuXG5mdW5jdGlvbiBuZXdJZGVudGlmaWVyVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuSWRlbnRpZmllciwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld0tleXdvcmRUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5LZXl3b3JkLCAwLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gbmV3T3BlcmF0b3JUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5PcGVyYXRvciwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld1N0cmluZ1Rva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLlN0cmluZywgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld051bWJlclRva2VuKGluZGV4OiBudW1iZXIsIG46IG51bWJlcik6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLk51bWJlciwgbiwgXCJcIik7XG59XG5cbmZ1bmN0aW9uIG5ld0Vycm9yVG9rZW4oaW5kZXg6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuRXJyb3IsIDAsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgY29uc3QgRU9GOiBUb2tlbiA9IG5ldyBUb2tlbigtMSwgVG9rZW5UeXBlLkNoYXJhY3RlciwgMCwgXCJcIik7XG5cbmNsYXNzIFNjYW5uZXIge1xuICBsZW5ndGg6IG51bWJlcjtcbiAgcGVlayA9IDA7XG4gIGluZGV4ID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5wZWVrID0gKyt0aGlzLmluZGV4ID49IHRoaXMubGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNjYW5Ub2tlbigpOiBUb2tlbiB8IG51bGwge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dDtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICBsZXQgcGVlayA9IHRoaXMucGVlaztcbiAgICBsZXQgaW5kZXggPSB0aGlzLmluZGV4O1xuXG4gICAgLy8gU2tpcCB3aGl0ZXNwYWNlLlxuICAgIHdoaWxlIChwZWVrIDw9IGNoYXJzLiRTUEFDRSkge1xuICAgICAgaWYgKCsraW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIHBlZWsgPSBjaGFycy4kRU9GO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZWsgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBlZWsgPSBwZWVrO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBpZGVudGlmaWVycyBhbmQgbnVtYmVycy5cbiAgICBpZiAoaXNJZGVudGlmaWVyU3RhcnQocGVlaykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5JZGVudGlmaWVyKCk7XG4gICAgfVxuICAgIGlmIChjaGFycy5pc0RpZ2l0KHBlZWspKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuTnVtYmVyKGluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gaW5kZXg7XG4gICAgc3dpdGNoIChwZWVrKSB7XG4gICAgICBjYXNlIGNoYXJzLiRQRVJJT0Q6XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICByZXR1cm4gY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspID8gdGhpcy5zY2FuTnVtYmVyKHN0YXJ0KSA6IG5ld0NoYXJhY3RlclRva2VuKHN0YXJ0LCBjaGFycy4kUEVSSU9EKTtcbiAgICAgIGNhc2UgY2hhcnMuJExQQVJFTjpcbiAgICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICAgIGNhc2UgY2hhcnMuJExCUkFDRTpcbiAgICAgIGNhc2UgY2hhcnMuJFJCUkFDRTpcbiAgICAgIGNhc2UgY2hhcnMuJExCUkFDS0VUOlxuICAgICAgY2FzZSBjaGFycy4kUkJSQUNLRVQ6XG4gICAgICBjYXNlIGNoYXJzLiRDT01NQTpcbiAgICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgICAgY2FzZSBjaGFycy4kU0VNSUNPTE9OOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ2hhcmFjdGVyKHN0YXJ0LCBwZWVrKTtcbiAgICAgIGNhc2UgY2hhcnMuJFNROlxuICAgICAgY2FzZSBjaGFycy4kRFE6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5TdHJpbmcoKTtcbiAgICAgIGNhc2UgY2hhcnMuJEhBU0g6XG4gICAgICBjYXNlIGNoYXJzLiRQTFVTOlxuICAgICAgY2FzZSBjaGFycy4kTUlOVVM6XG4gICAgICBjYXNlIGNoYXJzLiRTVEFSOlxuICAgICAgY2FzZSBjaGFycy4kU0xBU0g6XG4gICAgICBjYXNlIGNoYXJzLiRQRVJDRU5UOlxuICAgICAgY2FzZSBjaGFycy4kQ0FSRVQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5PcGVyYXRvcihzdGFydCwgU3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKSk7XG4gICAgICBjYXNlIGNoYXJzLiRRVUVTVElPTjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCI/XCIsIGNoYXJzLiRQRVJJT0QsIFwiLlwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJExUOlxuICAgICAgY2FzZSBjaGFycy4kR1Q6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlayksIGNoYXJzLiRFUSwgXCI9XCIpO1xuICAgICAgY2FzZSBjaGFycy4kQkFORzpcbiAgICAgIGNhc2UgY2hhcnMuJEVROlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspLCBjaGFycy4kRVEsIFwiPVwiLCBjaGFycy4kRVEsIFwiPVwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEFNUEVSU0FORDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCImXCIsIGNoYXJzLiRBTVBFUlNBTkQsIFwiJlwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEJBUjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCJ8XCIsIGNoYXJzLiRCQVIsIFwifFwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJE5CU1A6XG4gICAgICAgIHdoaWxlIChjaGFycy5pc1doaXRlc3BhY2UodGhpcy5wZWVrKSkge1xuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Ub2tlbigpO1xuICAgIH1cblxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBbJHtTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspfV1gLCAwKTtcbiAgfVxuXG4gIHNjYW5DaGFyYWN0ZXIoc3RhcnQ6IG51bWJlciwgY29kZTogbnVtYmVyKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgY29kZSk7XG4gIH1cblxuICBzY2FuT3BlcmF0b3Ioc3RhcnQ6IG51bWJlciwgc3RyOiBzdHJpbmcpOiBUb2tlbiB7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG5ld09wZXJhdG9yVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICAvKipcbiAgICogVG9rZW5pemUgYSAyLzMgY2hhciBsb25nIG9wZXJhdG9yXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydCBzdGFydCBpbmRleCBpbiB0aGUgZXhwcmVzc2lvblxuICAgKiBAcGFyYW0gb25lIGZpcnN0IHN5bWJvbCAoYWx3YXlzIHBhcnQgb2YgdGhlIG9wZXJhdG9yKVxuICAgKiBAcGFyYW0gdHdvQ29kZSBjb2RlIHBvaW50IGZvciB0aGUgc2Vjb25kIHN5bWJvbFxuICAgKiBAcGFyYW0gdHdvIHNlY29uZCBzeW1ib2wgKHBhcnQgb2YgdGhlIG9wZXJhdG9yIHdoZW4gdGhlIHNlY29uZCBjb2RlIHBvaW50IG1hdGNoZXMpXG4gICAqIEBwYXJhbSB0aHJlZUNvZGUgY29kZSBwb2ludCBmb3IgdGhlIHRoaXJkIHN5bWJvbFxuICAgKiBAcGFyYW0gdGhyZWUgdGhpcmQgc3ltYm9sIChwYXJ0IG9mIHRoZSBvcGVyYXRvciB3aGVuIHByb3ZpZGVkIGFuZCBtYXRjaGVzIHNvdXJjZSBleHByZXNzaW9uKVxuICAgKi9cbiAgc2NhbkNvbXBsZXhPcGVyYXRvcihcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIG9uZTogc3RyaW5nLFxuICAgIHR3b0NvZGU6IG51bWJlcixcbiAgICB0d286IHN0cmluZyxcbiAgICB0aHJlZUNvZGU/OiBudW1iZXIsXG4gICAgdGhyZWU/OiBzdHJpbmdcbiAgKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIGxldCBzdHI6IHN0cmluZyA9IG9uZTtcbiAgICBpZiAodGhpcy5wZWVrID09PSB0d29Db2RlKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHN0ciArPSB0d287XG4gICAgfVxuICAgIGlmICh0aHJlZUNvZGUgIT0gbnVsbCAmJiB0aGlzLnBlZWsgPT09IHRocmVlQ29kZSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBzdHIgKz0gdGhyZWU7XG4gICAgfVxuICAgIHJldHVybiBuZXdPcGVyYXRvclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgc2NhbklkZW50aWZpZXIoKTogVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHdoaWxlIChpc0lkZW50aWZpZXJQYXJ0KHRoaXMucGVlaykpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gS0VZV09SRFMuaW5kZXhPZihzdHIpID4gLTEgPyBuZXdLZXl3b3JkVG9rZW4oc3RhcnQsIHN0cikgOiBuZXdJZGVudGlmaWVyVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICBzY2FuTnVtYmVyKHN0YXJ0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgbGV0IHNpbXBsZTogYm9vbGVhbiA9IHRoaXMuaW5kZXggPT09IHN0YXJ0O1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIGluaXRpYWwgZGlnaXQuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykpIHtcbiAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kUEVSSU9EKSB7XG4gICAgICAgIHNpbXBsZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpc0V4cG9uZW50U3RhcnQodGhpcy5wZWVrKSkge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgaWYgKGlzRXhwb25lbnRTaWduKHRoaXMucGVlaykpIHtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKFwiSW52YWxpZCBleHBvbmVudFwiLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgc2ltcGxlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gc2ltcGxlID8gcGFyc2VJbnRBdXRvUmFkaXgoc3RyKSA6IHBhcnNlRmxvYXQoc3RyKTtcbiAgICByZXR1cm4gbmV3TnVtYmVyVG9rZW4oc3RhcnQsIHZhbHVlKTtcbiAgfVxuXG4gIHNjYW5TdHJpbmcoKTogVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHF1b3RlOiBudW1iZXIgPSB0aGlzLnBlZWs7XG4gICAgdGhpcy5hZHZhbmNlKCk7IC8vIFNraXAgaW5pdGlhbCBxdW90ZS5cblxuICAgIGxldCBidWZmZXIgPSBcIlwiO1xuICAgIGxldCBtYXJrZXI6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMuaW5wdXQ7XG5cbiAgICB3aGlsZSAodGhpcy5wZWVrICE9PSBxdW90ZSkge1xuICAgICAgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJEJBQ0tTTEFTSCkge1xuICAgICAgICBidWZmZXIgKz0gaW5wdXQuc3Vic3RyaW5nKG1hcmtlciwgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICBsZXQgdW5lc2NhcGVkQ29kZTogbnVtYmVyO1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBUUzIuMS1pbnRyb2R1Y2VkIHR5cGUgc3RyaWN0bmVzc1xuICAgICAgICB0aGlzLnBlZWsgPSB0aGlzLnBlZWs7XG4gICAgICAgIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiR1KSB7XG4gICAgICAgICAgLy8gNCBjaGFyYWN0ZXIgaGV4IGNvZGUgZm9yIHVuaWNvZGUgY2hhcmFjdGVyLlxuICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgaWYgKC9eWzAtOWEtZl0rJC9pLnRlc3QoaGV4KSkge1xuICAgICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihgSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUke2hleH1dYCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHVuZXNjYXBlKHRoaXMucGVlayk7XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodW5lc2NhcGVkQ29kZSk7XG4gICAgICAgIG1hcmtlciA9IHRoaXMuaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJEVPRikge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3Q6IHN0cmluZyA9IGlucHV0LnN1YnN0cmluZyhtYXJrZXIsIHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIHRlcm1pbmF0aW5nIHF1b3RlLlxuXG4gICAgcmV0dXJuIG5ld1N0cmluZ1Rva2VuKHN0YXJ0LCBidWZmZXIgKyBsYXN0KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7XG4gICAgcmV0dXJuIG5ld0Vycm9yVG9rZW4ocG9zaXRpb24sIGBMZXhlciBFcnJvcjogJHttZXNzYWdlfSBhdCBjb2x1bW4gJHtwb3NpdGlvbn0gaW4gZXhwcmVzc2lvbiBbJHt0aGlzLmlucHV0fV1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAoY2hhcnMuJGEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiR6KSB8fFxuICAgIChjaGFycy4kQSA8PSBjb2RlICYmIGNvZGUgPD0gY2hhcnMuJFopIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJF8gfHxcbiAgICBjb2RlID09PSBjaGFycy4kJFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIoaW5wdXQpO1xuICBpZiAoIWlzSWRlbnRpZmllclN0YXJ0KHNjYW5uZXIucGVlaykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2Nhbm5lci5hZHZhbmNlKCk7XG4gIHdoaWxlIChzY2FubmVyLnBlZWsgIT09IGNoYXJzLiRFT0YpIHtcbiAgICBpZiAoIWlzSWRlbnRpZmllclBhcnQoc2Nhbm5lci5wZWVrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzY2FubmVyLmFkdmFuY2UoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyUGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoYXJzLmlzQXNjaWlMZXR0ZXIoY29kZSkgfHwgY2hhcnMuaXNEaWdpdChjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kXyB8fCBjb2RlID09PSBjaGFycy4kJDtcbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudFN0YXJ0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJGUgfHwgY29kZSA9PT0gY2hhcnMuJEU7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb25lbnRTaWduKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJE1JTlVTIHx8IGNvZGUgPT09IGNoYXJzLiRQTFVTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNRdW90ZShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTUSB8fCBjb2RlID09PSBjaGFycy4kRFEgfHwgY29kZSA9PT0gY2hhcnMuJEJUO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRuOlxuICAgICAgcmV0dXJuIGNoYXJzLiRMRjtcbiAgICBjYXNlIGNoYXJzLiRmOlxuICAgICAgcmV0dXJuIGNoYXJzLiRGRjtcbiAgICBjYXNlIGNoYXJzLiRyOlxuICAgICAgcmV0dXJuIGNoYXJzLiRDUjtcbiAgICBjYXNlIGNoYXJzLiR0OlxuICAgICAgcmV0dXJuIGNoYXJzLiRUQUI7XG4gICAgY2FzZSBjaGFycy4kdjpcbiAgICAgIHJldHVybiBjaGFycy4kVlRBQjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGNvZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRBdXRvUmFkaXgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0LCAxMCk7XG4gIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyIGxpdGVyYWwgd2hlbiBwYXJzaW5nIFwiICsgdGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4uL2FzdC9jaGFyc1wiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge2VzY2FwZVJlZ0V4cH0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5cbmltcG9ydCB7XG4gIEFTVCxcbiAgQVNUV2l0aFNvdXJjZSxcbiAgQXN0VmlzaXRvcixcbiAgQmluYXJ5LFxuICBCaW5kaW5nUGlwZSxcbiAgQ2hhaW4sXG4gIENvbmRpdGlvbmFsLFxuICBFbXB0eUV4cHIsXG4gIEZ1bmN0aW9uQ2FsbCxcbiAgSW1wbGljaXRSZWNlaXZlcixcbiAgSW50ZXJwb2xhdGlvbixcbiAgS2V5ZWRSZWFkLFxuICBLZXllZFdyaXRlLFxuICBMaXRlcmFsQXJyYXksXG4gIExpdGVyYWxNYXAsXG4gIExpdGVyYWxNYXBLZXksXG4gIExpdGVyYWxQcmltaXRpdmUsXG4gIE1ldGhvZENhbGwsXG4gIE5vbk51bGxBc3NlcnQsXG4gIFBhcnNlU3BhbixcbiAgUGFyc2VyRXJyb3IsXG4gIFByZWZpeE5vdCxcbiAgUHJvcGVydHlSZWFkLFxuICBQcm9wZXJ0eVdyaXRlLFxuICBRdW90ZSxcbiAgU2FmZU1ldGhvZENhbGwsXG4gIFNhZmVQcm9wZXJ0eVJlYWQsXG4gIFRlbXBsYXRlQmluZGluZ1xufSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7RU9GLCBMZXhlciwgVG9rZW4sIFRva2VuVHlwZSwgaXNJZGVudGlmaWVyLCBpc1F1b3RlfSBmcm9tIFwiLi9sZXhlclwiO1xuXG5leHBvcnQgY2xhc3MgU3BsaXRJbnRlcnBvbGF0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0cmluZ3M6IHN0cmluZ1tdLCBwdWJsaWMgZXhwcmVzc2lvbnM6IHN0cmluZ1tdLCBwdWJsaWMgb2Zmc2V0czogbnVtYmVyW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZUJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSwgcHVibGljIHdhcm5pbmdzOiBzdHJpbmdbXSwgcHVibGljIGVycm9yczogUGFyc2VyRXJyb3JbXSkge31cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IFJlZ0V4cCB7XG4gIGNvbnN0IHBhdHRlcm4gPSBlc2NhcGVSZWdFeHAoY29uZmlnLnN0YXJ0KSArIFwiKFtcXFxcc1xcXFxTXSo/KVwiICsgZXNjYXBlUmVnRXhwKGNvbmZpZy5lbmQpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBcImdcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBwcml2YXRlIGVycm9yczogUGFyc2VyRXJyb3JbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xleGVyOiBMZXhlcikge31cblxuICBwYXJzZUFjdGlvbihcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBhbnksXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgdGhpcy5fY2hlY2tOb0ludGVycG9sYXRpb24oaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpO1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpKTtcbiAgICBjb25zdCBhc3QgPSBuZXcgUGFyc2VBU1QoXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdG9rZW5zLFxuICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgdHJ1ZSxcbiAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoXG4gICAgKS5wYXJzZUNoYWluKCk7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKGFzdCwgaW5wdXQsIGxvY2F0aW9uLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwYXJzZUJpbmRpbmcoXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIGNvbnN0IGFzdCA9IHRoaXMuX3BhcnNlQmluZGluZ0FzdChpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcGFyc2VTaW1wbGVCaW5kaW5nKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZUJpbmRpbmdBc3QoaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBlcnJvcnMgPSBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlci5jaGVjayhhc3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoYEhvc3QgYmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluICR7ZXJyb3JzLmpvaW4oXCIgXCIpfWAsIGlucHV0LCBsb2NhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwb3J0RXJyb3IobWVzc2FnZTogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBlcnJMb2NhdGlvbjogc3RyaW5nLCBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKG1lc3NhZ2UsIGlucHV0LCBlcnJMb2NhdGlvbiwgY3R4TG9jYXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQmluZGluZ0FzdChpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogc3RyaW5nLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogQVNUIHtcbiAgICAvLyBRdW90ZXMgZXhwcmVzc2lvbnMgdXNlIDNyZC1wYXJ0eSBleHByZXNzaW9uIGxhbmd1YWdlLiBXZSBkb24ndCB3YW50IHRvIHVzZVxuICAgIC8vIG91ciBsZXhlciBvciBwYXJzZXIgZm9yIHRoYXQsIHNvIHdlIGNoZWNrIGZvciB0aGF0IGFoZWFkIG9mIHRpbWUuXG4gICAgY29uc3QgcXVvdGUgPSB0aGlzLl9wYXJzZVF1b3RlKGlucHV0LCBsb2NhdGlvbik7XG5cbiAgICBpZiAocXVvdGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHF1b3RlO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KTtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShzb3VyY2VUb0xleCk7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUFTVChcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0b2tlbnMsXG4gICAgICBzb3VyY2VUb0xleC5sZW5ndGgsXG4gICAgICBmYWxzZSxcbiAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoXG4gICAgKS5wYXJzZUNoYWluKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZVF1b3RlKGlucHV0OiBzdHJpbmcgfCBudWxsLCBsb2NhdGlvbjogYW55KTogQVNUIHwgbnVsbCB7XG4gICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4U2VwYXJhdG9ySW5kZXggPSBpbnB1dC5pbmRleE9mKFwiOlwiKTtcbiAgICBpZiAocHJlZml4U2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4ID0gaW5wdXQuc3Vic3RyaW5nKDAsIHByZWZpeFNlcGFyYXRvckluZGV4KS50cmltKCk7XG4gICAgaWYgKCFpc0lkZW50aWZpZXIocHJlZml4KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uID0gaW5wdXQuc3Vic3RyaW5nKHByZWZpeFNlcGFyYXRvckluZGV4ICsgMSk7XG4gICAgcmV0dXJuIG5ldyBRdW90ZShuZXcgUGFyc2VTcGFuKDAsIGlucHV0Lmxlbmd0aCksIHByZWZpeCwgdW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGxvY2F0aW9uKTtcbiAgfVxuXG4gIHBhcnNlVGVtcGxhdGVCaW5kaW5ncyhwcmVmaXhUb2tlbjogc3RyaW5nIHwgbnVsbCwgaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IGFueSk6IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShpbnB1dCk7XG4gICAgaWYgKHByZWZpeFRva2VuKSB7XG4gICAgICAvLyBQcmVmaXggdGhlIHRva2VucyB3aXRoIHRoZSB0b2tlbnMgZnJvbSBwcmVmaXhUb2tlbiBidXQgaGF2ZSB0aGVtIHRha2Ugbm8gc3BhY2UgKDAgaW5kZXgpLlxuICAgICAgY29uc3QgcHJlZml4VG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUocHJlZml4VG9rZW4pLm1hcCh0ID0+IHtcbiAgICAgICAgdC5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSk7XG4gICAgICB0b2tlbnMudW5zaGlmdCguLi5wcmVmaXhUb2tlbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNlQVNUKGlucHV0LCBsb2NhdGlvbiwgdG9rZW5zLCBpbnB1dC5sZW5ndGgsIGZhbHNlLCB0aGlzLmVycm9ycywgMCkucGFyc2VUZW1wbGF0ZUJpbmRpbmdzKCk7XG4gIH1cblxuICBwYXJzZUludGVycG9sYXRpb24oXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2UgfCBudWxsIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc3BsaXRJbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgaWYgKHNwbGl0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uczogQVNUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQuZXhwcmVzc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25UZXh0ID0gc3BsaXQuZXhwcmVzc2lvbnNbaV07XG4gICAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoZXhwcmVzc2lvblRleHQpO1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoc291cmNlVG9MZXgpO1xuICAgICAgY29uc3QgYXN0ID0gbmV3IFBhcnNlQVNUKFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGhpcy5lcnJvcnMsXG4gICAgICAgIHNwbGl0Lm9mZnNldHNbaV0gKyAoZXhwcmVzc2lvblRleHQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoKVxuICAgICAgKS5wYXJzZUNoYWluKCk7XG4gICAgICBleHByZXNzaW9ucy5wdXNoKGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKFxuICAgICAgbmV3IEludGVycG9sYXRpb24obmV3IFBhcnNlU3BhbigwLCBpbnB1dCA9PT0gbnVsbCA/IDAgOiBpbnB1dC5sZW5ndGgpLCBzcGxpdC5zdHJpbmdzLCBleHByZXNzaW9ucyksXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5lcnJvcnNcbiAgICApO1xuICB9XG5cbiAgc3BsaXRJbnRlcnBvbGF0aW9uKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBTcGxpdEludGVycG9sYXRpb24gfCBudWxsIHtcbiAgICBjb25zdCByZWdleHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgb2Zmc2V0czogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0OiBzdHJpbmcgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAvLyBmaXhlZCBzdHJpbmdcbiAgICAgICAgc3RyaW5ncy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXQgKz0gcGFydC5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKHBhcnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2Zmc2V0ICs9IGludGVycG9sYXRpb25Db25maWcuc3RhcnQubGVuZ3RoO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHBhcnQubGVuZ3RoICsgaW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgXCJCbGFuayBleHByZXNzaW9ucyBhcmUgbm90IGFsbG93ZWQgaW4gaW50ZXJwb2xhdGVkIHN0cmluZ3NcIixcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBgYXQgY29sdW1uICR7dGhpcy5fZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihwYXJ0cywgaSwgaW50ZXJwb2xhdGlvbkNvbmZpZyl9IGluYCxcbiAgICAgICAgICBsb2NhdGlvblxuICAgICAgICApO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKFwiJGltcGxpY3RcIik7XG4gICAgICAgIG9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFNwbGl0SW50ZXJwb2xhdGlvbihzdHJpbmdzLCBleHByZXNzaW9ucywgb2Zmc2V0cyk7XG4gIH1cblxuICB3cmFwTGl0ZXJhbFByaW1pdGl2ZShpbnB1dDogc3RyaW5nIHwgbnVsbCwgbG9jYXRpb246IGFueSk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShcbiAgICAgIG5ldyBMaXRlcmFsUHJpbWl0aXZlKG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQgPT09IG51bGwgPyAwIDogaW5wdXQubGVuZ3RoKSwgaW5wdXQpLFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuZXJyb3JzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0cmlwQ29tbWVudHMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaSA9IHRoaXMuX2NvbW1lbnRTdGFydChpbnB1dCk7XG4gICAgcmV0dXJuIGkgIT0gbnVsbCA/IGlucHV0LnN1YnN0cmluZygwLCBpKS50cmltKCkgOiBpbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1lbnRTdGFydChpbnB1dDogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgbGV0IG91dGVyUXVvdGU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gaW5wdXQuY2hhckNvZGVBdChpKTtcbiAgICAgIGNvbnN0IG5leHRDaGFyID0gaW5wdXQuY2hhckNvZGVBdChpICsgMSk7XG5cbiAgICAgIGlmIChjaGFyID09PSBjaGFycy4kU0xBU0ggJiYgbmV4dENoYXIgPT09IGNoYXJzLiRTTEFTSCAmJiBvdXRlclF1b3RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3V0ZXJRdW90ZSA9PT0gY2hhcikge1xuICAgICAgICBvdXRlclF1b3RlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAob3V0ZXJRdW90ZSA9PT0gbnVsbCAmJiBpc1F1b3RlKGNoYXIpKSB7XG4gICAgICAgIG91dGVyUXVvdGUgPSBjaGFyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBhbnksIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiB2b2lkIHtcbiAgICBjb25zdCByZWdleHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgYEdvdCBpbnRlcnBvbGF0aW9uICgke2ludGVycG9sYXRpb25Db25maWcuc3RhcnR9JHtpbnRlcnBvbGF0aW9uQ29uZmlnLmVuZH0pIHdoZXJlIGV4cHJlc3Npb24gd2FzIGV4cGVjdGVkYCxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGBhdCBjb2x1bW4gJHt0aGlzLl9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKHBhcnRzLCAxLCBpbnRlcnBvbGF0aW9uQ29uZmlnKX0gaW5gLFxuICAgICAgICBsb2NhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKFxuICAgIHBhcnRzOiBzdHJpbmdbXSxcbiAgICBwYXJ0SW5FcnJJZHg6IG51bWJlcixcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnXG4gICk6IG51bWJlciB7XG4gICAgbGV0IGVyckxvY2F0aW9uID0gXCJcIjtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcnRJbkVycklkeDsgaisrKSB7XG4gICAgICBlcnJMb2NhdGlvbiArPSBqICUgMiA9PT0gMCA/IHBhcnRzW2pdIDogYCR7aW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydH0ke3BhcnRzW2pdfSR7aW50ZXJwb2xhdGlvbkNvbmZpZy5lbmR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTG9jYXRpb24ubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZUFTVCB7XG4gIHByaXZhdGUgcnBhcmVuc0V4cGVjdGVkID0gMDtcbiAgcHJpdmF0ZSByYnJhY2tldHNFeHBlY3RlZCA9IDA7XG4gIHByaXZhdGUgcmJyYWNlc0V4cGVjdGVkID0gMDtcblxuICBpbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGlucHV0OiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2F0aW9uOiBhbnksXG4gICAgcHVibGljIHRva2VuczogVG9rZW5bXSxcbiAgICBwdWJsaWMgaW5wdXRMZW5ndGg6IG51bWJlcixcbiAgICBwdWJsaWMgcGFyc2VBY3Rpb246IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBlcnJvcnM6IFBhcnNlckVycm9yW10sXG4gICAgcHJpdmF0ZSBvZmZzZXQ6IG51bWJlclxuICApIHt9XG5cbiAgcGVlayhvZmZzZXQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBjb25zdCBpID0gdGhpcy5pbmRleCArIG9mZnNldDtcbiAgICByZXR1cm4gaSA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IHRoaXMudG9rZW5zW2ldIDogRU9GO1xuICB9XG5cbiAgZ2V0IG5leHQoKTogVG9rZW4ge1xuICAgIHJldHVybiB0aGlzLnBlZWsoMCk7XG4gIH1cblxuICBnZXQgaW5wdXRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoID8gdGhpcy5uZXh0LmluZGV4ICsgdGhpcy5vZmZzZXQgOiB0aGlzLmlucHV0TGVuZ3RoICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBzcGFuKHN0YXJ0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlU3BhbihzdGFydCwgdGhpcy5pbnB1dEluZGV4KTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5pbmRleCsrO1xuICB9XG5cbiAgb3B0aW9uYWxDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3Rlcihjb2RlKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBlZWtLZXl3b3JkTGV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHQuaXNLZXl3b3JkTGV0KCk7XG4gIH1cbiAgcGVla0tleXdvcmRBcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0LmlzS2V5d29yZEFzKCk7XG4gIH1cblxuICBleHBlY3RDaGFyYWN0ZXIoY29kZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY29kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lcnJvcihgTWlzc2luZyBleHBlY3RlZCAke1N0cmluZy5mcm9tQ2hhckNvZGUoY29kZSl9YCk7XG4gIH1cblxuICBvcHRpb25hbE9wZXJhdG9yKG9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzT3BlcmF0b3Iob3ApKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwZWN0T3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXJyb3IoYE1pc3NpbmcgZXhwZWN0ZWQgb3BlcmF0b3IgJHtvcGVyYXRvcn1gKTtcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke259LCBleHBlY3RlZCBpZGVudGlmaWVyIG9yIGtleXdvcmRgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbi50b1N0cmluZygpIGFzIHN0cmluZztcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IG4gPSB0aGlzLm5leHQ7XG4gICAgaWYgKCFuLmlzSWRlbnRpZmllcigpICYmICFuLmlzS2V5d29yZCgpICYmICFuLmlzU3RyaW5nKCkpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHtufSwgZXhwZWN0ZWQgaWRlbnRpZmllciwga2V5d29yZCwgb3Igc3RyaW5nYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG4udG9TdHJpbmcoKSBhcyBzdHJpbmc7XG4gIH1cblxuICBwYXJzZUNoYWluKCk6IEFTVCB7XG4gICAgY29uc3QgZXhwcnM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgZXhwcnMucHVzaChleHByKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcIkJpbmRpbmcgZXhwcmVzc2lvbiBjYW5ub3QgY29udGFpbiBjaGFpbmVkIGV4cHJlc3Npb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHt9IC8vIHJlYWQgYWxsIHNlbWljb2xvbnNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICcke3RoaXMubmV4dH0nYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleHBycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH1cbiAgICBpZiAoZXhwcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gZXhwcnNbMF07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2hhaW4odGhpcy5zcGFuKHN0YXJ0KSwgZXhwcnMpO1xuICB9XG5cbiAgcGFyc2VQaXBlKCk6IEFTVCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInxcIikpIHtcbiAgICAgIGlmICh0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoXCJDYW5ub3QgaGF2ZSBhIHBpcGUgaW4gYW4gYWN0aW9uIGV4cHJlc3Npb25cIik7XG4gICAgICB9XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuICAgICAgICBjb25zdCBhcmdzOiBBU1RbXSA9IFtdO1xuICAgICAgICB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHRoaXMucGFyc2VFeHByZXNzaW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IG5ldyBCaW5kaW5nUGlwZSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIG5hbWUsIGFyZ3MpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwifFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXhwcmVzc2lvbigpOiBBU1Qge1xuICAgIHJldHVybiB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgfVxuXG4gIHBhcnNlQ29uZGl0aW9uYWwoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlTG9naWNhbE9yKCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiP1wiKSkge1xuICAgICAgY29uc3QgeWVzID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIGxldCBubzogQVNUO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT0xPTikpIHtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgIHRoaXMuZXJyb3IoYENvbmRpdGlvbmFsIGV4cHJlc3Npb24gJHtleHByZXNzaW9ufSByZXF1aXJlcyBhbGwgMyBleHByZXNzaW9uc2ApO1xuICAgICAgICBubyA9IG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBubyA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsKHRoaXMuc3BhbihzdGFydCksIHJlc3VsdCwgeWVzLCBubyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VMb2dpY2FsT3IoKTogQVNUIHtcbiAgICAvLyAnfHwnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgd2hpbGUgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInx8XCIpKSB7XG4gICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIFwifHxcIiwgcmVzdWx0LCByaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUxvZ2ljYWxBbmQoKTogQVNUIHtcbiAgICAvLyAnJiYnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCImJlwiKSkge1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlRXF1YWxpdHkoKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgXCImJlwiLCByZXN1bHQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXF1YWxpdHkoKTogQVNUIHtcbiAgICAvLyAnPT0nLCchPScsJz09PScsJyE9PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVJlbGF0aW9uYWwoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCI9PVwiOlxuICAgICAgICBjYXNlIFwiPT09XCI6XG4gICAgICAgIGNhc2UgXCIhPVwiOlxuICAgICAgICBjYXNlIFwiIT09XCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUmVsYXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZVJlbGF0aW9uYWwoKTogQVNUIHtcbiAgICAvLyAnPCcsICc+JywgJzw9JywgJz49J1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlQWRkaXRpdmUoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6XG4gICAgICAgIGNhc2UgXCI+XCI6XG4gICAgICAgIGNhc2UgXCI8PVwiOlxuICAgICAgICBjYXNlIFwiPj1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VBZGRpdGl2ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUFkZGl0aXZlKCk6IEFTVCB7XG4gICAgLy8gJysnLCAnLSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTXVsdGlwbGljYXRpdmUoKTogQVNUIHtcbiAgICAvLyAnKicsICclJywgJy8nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgIGNhc2UgXCIlXCI6XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlUHJlZml4KCk6IEFTVCB7XG4gICAgaWYgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBsZXQgcmVzdWx0OiBBU1Q7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnkodGhpcy5zcGFuKHN0YXJ0KSwgb3BlcmF0b3IsIG5ldyBMaXRlcmFsUHJpbWl0aXZlKG5ldyBQYXJzZVNwYW4oc3RhcnQsIHN0YXJ0KSwgMCksIHJlc3VsdCk7XG4gICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJlZml4Tm90KHRoaXMuc3BhbihzdGFydCksIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlQ2FsbENoYWluKCk7XG4gIH1cblxuICBwYXJzZUNhbGxDaGFpbigpOiBBU1Qge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUHJpbWFyeSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kUEVSSU9EKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI/LlwiKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExCUkFDS0VUKSkge1xuICAgICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkKys7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQtLTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFdyaXRlKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEtleWVkUmVhZCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBGdW5jdGlvbkNhbGwodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiIVwiKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgTm9uTnVsbEFzc2VydCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZVByaW1hcnkoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZE51bGwoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgbnVsbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVW5kZWZpbmVkKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIHZvaWQgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVHJ1ZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmRGYWxzZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVGhpcygpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgSW1wbGljaXRSZWNlaXZlcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExCUkFDS0VUKSkge1xuICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZCsrO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbkxpc3QoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxBcnJheSh0aGlzLnNwYW4oc3RhcnQpLCBlbGVtZW50cyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlTGl0ZXJhbE1hcCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzSWRlbnRpZmllcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChuZXcgSW1wbGljaXRSZWNlaXZlcih0aGlzLnNwYW4oc3RhcnQpKSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzTnVtYmVyKCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uZXh0LnRvTnVtYmVyKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNTdHJpbmcoKSkge1xuICAgICAgY29uc3QgbGl0ZXJhbFZhbHVlID0gdGhpcy5uZXh0LnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBsaXRlcmFsVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA+PSB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICR7dGhpcy5pbnB1dH1gKTtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7dGhpcy5uZXh0fWApO1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VFeHByZXNzaW9uTGlzdCh0ZXJtaW5hdG9yOiBudW1iZXIpOiBBU1RbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBBU1RbXSA9IFtdO1xuICAgIGlmICghdGhpcy5uZXh0LmlzQ2hhcmFjdGVyKHRlcm1pbmF0b3IpKSB7XG4gICAgICBkbyB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTGl0ZXJhbE1hcCgpOiBMaXRlcmFsTWFwIHtcbiAgICBjb25zdCBrZXlzOiBMaXRlcmFsTWFwS2V5W10gPSBbXTtcbiAgICBjb25zdCB2YWx1ZXM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSk7XG4gICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpKSB7XG4gICAgICB0aGlzLnJicmFjZXNFeHBlY3RlZCsrO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBxdW90ZWQgPSB0aGlzLm5leHQuaXNTdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTtcbiAgICAgICAga2V5cy5wdXNoKHtrZXksIHF1b3RlZH0pO1xuICAgICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kQ09MT04pO1xuICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgICB0aGlzLnJicmFjZXNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDRSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTGl0ZXJhbE1hcCh0aGlzLnNwYW4oc3RhcnQpLCBrZXlzLCB2YWx1ZXMpO1xuICB9XG5cbiAgcGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwocmVjZWl2ZXI6IEFTVCwgaXNTYWZlID0gZmFsc2UpOiBBU1Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gcmVjZWl2ZXIuc3Bhbi5zdGFydDtcbiAgICBjb25zdCBpZCA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLnNwYW4oc3RhcnQpO1xuICAgICAgcmV0dXJuIGlzU2FmZSA/IG5ldyBTYWZlTWV0aG9kQ2FsbChzcGFuLCByZWNlaXZlciwgaWQsIGFyZ3MpIDogbmV3IE1ldGhvZENhbGwoc3BhbiwgcmVjZWl2ZXIsIGlkLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzU2FmZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXCJUaGUgJz8uJyBvcGVyYXRvciBjYW5ub3QgYmUgdXNlZCBpbiB0aGUgYXNzaWdubWVudFwiKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQodGhpcy5zcGFuKHN0YXJ0KSwgcmVjZWl2ZXIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBpZiAoIXRoaXMucGFyc2VBY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCaW5kaW5ncyBjYW5ub3QgY29udGFpbiBhc3NpZ25tZW50c1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlSZWFkKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZUNhbGxBcmd1bWVudHMoKTogQmluZGluZ1BpcGVbXSB7XG4gICAgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3RlcihjaGFycy4kUlBBUkVOKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbmFsczogQVNUW10gPSBbXTtcbiAgICBkbyB7XG4gICAgICBwb3NpdGlvbmFscy5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgcmV0dXJuIHBvc2l0aW9uYWxzIGFzIEJpbmRpbmdQaXBlW107XG4gIH1cblxuICAvKipcbiAgICogQW4gaWRlbnRpZmllciwgYSBrZXl3b3JkLCBhIHN0cmluZyB3aXRoIGFuIG9wdGlvbmFsIGAtYCBpbmJldHdlZW4uXG4gICAqL1xuICBleHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgb3BlcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpO1xuICAgICAgb3BlcmF0b3JGb3VuZCA9IHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIi1cIik7XG4gICAgICBpZiAob3BlcmF0b3JGb3VuZCkge1xuICAgICAgICByZXN1bHQgKz0gXCItXCI7XG4gICAgICB9XG4gICAgfSB3aGlsZSAob3BlcmF0b3JGb3VuZCk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG4gIH1cblxuICBwYXJzZVRlbXBsYXRlQmluZGluZ3MoKTogVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICAgIGNvbnN0IGJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSA9IFtdO1xuICAgIGxldCBwcmVmaXg6IHN0cmluZyA9IG51bGwhO1xuICAgIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgIGxldCBrZXlJc1ZhcjogYm9vbGVhbiA9IHRoaXMucGVla0tleXdvcmRMZXQoKTtcbiAgICAgIGlmIChrZXlJc1Zhcikge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhd0tleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgICBsZXQga2V5ID0gcmF3S2V5O1xuICAgICAgaWYgKCFrZXlJc1Zhcikge1xuICAgICAgICBpZiAocHJlZml4ID09PSBudWxsKSB7XG4gICAgICAgICAgcHJlZml4ID0ga2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleSA9IHByZWZpeCArIGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pO1xuICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IG51bGwhO1xuICAgICAgbGV0IGV4cHJlc3Npb246IEFTVFdpdGhTb3VyY2UgPSBudWxsITtcbiAgICAgIGlmIChrZXlJc1Zhcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIG5hbWUgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBcIiRpbXBsaWNpdFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVla0tleXdvcmRBcygpKSB7XG4gICAgICAgIGNvbnN0IGxldFN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgLy8gY29uc3VtZSBgYXNgXG4gICAgICAgIG5hbWUgPSByYXdLZXk7XG4gICAgICAgIGtleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7IC8vIHJlYWQgbG9jYWwgdmFyIG5hbWVcbiAgICAgICAga2V5SXNWYXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm5leHQgIT09IEVPRiAmJiAhdGhpcy5wZWVrS2V5d29yZExldCgpKSB7XG4gICAgICAgIGNvbnN0IHN0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdCAtIHRoaXMub2Zmc2V0LCB0aGlzLmlucHV0SW5kZXggLSB0aGlzLm9mZnNldCk7XG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIHNvdXJjZSwgdGhpcy5sb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICAgICAgfVxuICAgICAgYmluZGluZ3MucHVzaChuZXcgVGVtcGxhdGVCaW5kaW5nKHRoaXMuc3BhbihzdGFydCksIGtleSwga2V5SXNWYXIsIG5hbWUsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmICh0aGlzLnBlZWtLZXl3b3JkQXMoKSAmJiAha2V5SXNWYXIpIHtcbiAgICAgICAgY29uc3QgbGV0U3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBjb25zdW1lIGBhc2BcbiAgICAgICAgY29uc3QgbGV0TmFtZSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7IC8vIHJlYWQgbG9jYWwgdmFyIG5hbWVcbiAgICAgICAgYmluZGluZ3MucHVzaChuZXcgVGVtcGxhdGVCaW5kaW5nKHRoaXMuc3BhbihsZXRTdGFydCksIGxldE5hbWUsIHRydWUsIGtleSwgbnVsbCEpKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSkge1xuICAgICAgICB0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQoYmluZGluZ3MsIHdhcm5pbmdzLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKG1lc3NhZ2UsIHRoaXMuaW5wdXQsIHRoaXMubG9jYXRpb25UZXh0KGluZGV4KSwgdGhpcy5sb2NhdGlvbikpO1xuICAgIHRoaXMuc2tpcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2NhdGlvblRleHQoaW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsKSB7XG4gICAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IGBhdCBjb2x1bW4gJHt0aGlzLnRva2Vuc1tpbmRleF0uaW5kZXggKyAxfSBpbmAgOiBgYXQgdGhlIGVuZCBvZiB0aGUgZXhwcmVzc2lvbmA7XG4gIH1cblxuICAvLyBFcnJvciByZWNvdmVyeSBzaG91bGQgc2tpcCB0b2tlbnMgdW50aWwgaXQgZW5jb3VudGVycyBhIHJlY292ZXJ5IHBvaW50LiBza2lwKCkgdHJlYXRzXG4gIC8vIHRoZSBlbmQgb2YgaW5wdXQgYW5kIGEgJzsnIGFzIHVuY29uZGl0aW9uYWxseSBhIHJlY292ZXJ5IHBvaW50LiBJdCBhbHNvIHRyZWF0cyAnKScsXG4gIC8vICd9JyBhbmQgJ10nIGFzIGNvbmRpdGlvbmFsIHJlY292ZXJ5IHBvaW50cyBpZiBvbmUgb2YgY2FsbGluZyBwcm9kdWN0aW9ucyBpcyBleHBlY3RpbmdcbiAgLy8gb25lIG9mIHRoZXNlIHN5bWJvbHMuIFRoaXMgYWxsb3dzIHNraXAoKSB0byByZWNvdmVyIGZyb20gZXJyb3JzIHN1Y2ggYXMgJyhhLikgKyAxJyBhbGxvd2luZ1xuICAvLyBtb3JlIG9mIHRoZSBBU1QgdG8gYmUgcmV0YWluZWQgKGl0IGRvZXNuJ3Qgc2tpcCBhbnkgdG9rZW5zIGFzIHRoZSAnKScgaXMgcmV0YWluZWQgYmVjYXVzZVxuICAvLyBvZiB0aGUgJygnIGJlZ2lucyBhbiAnKCcgPGV4cHI+ICcpJyBwcm9kdWN0aW9uKS4gVGhlIHJlY292ZXJ5IHBvaW50cyBvZiBncm91cGluZyBzeW1ib2xzXG4gIC8vIG11c3QgYmUgY29uZGl0aW9uYWwgYXMgdGhleSBtdXN0IGJlIHNraXBwZWQgaWYgbm9uZSBvZiB0aGUgY2FsbGluZyBwcm9kdWN0aW9ucyBhcmUgbm90XG4gIC8vIGV4cGVjdGluZyB0aGUgY2xvc2luZyB0b2tlbiBlbHNlIHdlIHdpbGwgbmV2ZXIgbWFrZSBwcm9ncmVzcyBpbiB0aGUgY2FzZSBvZiBhblxuICAvLyBleHRyYW5lb3VzIGdyb3VwIGNsb3Npbmcgc3ltYm9sIChzdWNoIGFzIGEgc3RyYXkgJyknKS4gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yICc7JyBiZWNhdXNlXG4gIC8vIHBhcnNlQ2hhaW4oKSBpcyBhbHdheXMgdGhlIHJvb3QgcHJvZHVjdGlvbiBhbmQgaXQgZXhwZWN0cyBhICc7Jy5cblxuICAvLyBJZiBhIHByb2R1Y3Rpb24gZXhwZWN0cyBvbmUgb2YgdGhlc2UgdG9rZW4gaXQgaW5jcmVtZW50cyB0aGUgY29ycmVzcG9uZGluZyBuZXN0aW5nIGNvdW50LFxuICAvLyBhbmQgdGhlbiBkZWNyZW1lbnRzIGl0IGp1c3QgcHJpb3IgdG8gY2hlY2tpbmcgaWYgdGhlIHRva2VuIGlzIGluIHRoZSBpbnB1dC5cbiAgcHJpdmF0ZSBza2lwKCkge1xuICAgIGxldCBuID0gdGhpcy5uZXh0O1xuICAgIHdoaWxlIChcbiAgICAgIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggJiZcbiAgICAgICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pICYmXG4gICAgICAodGhpcy5ycGFyZW5zRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUlBBUkVOKSkgJiZcbiAgICAgICh0aGlzLnJicmFjZXNFeHBlY3RlZCA8PSAwIHx8ICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpKSAmJlxuICAgICAgKHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMubmV4dC5pc0Vycm9yKCkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgUGFyc2VyRXJyb3IodGhpcy5uZXh0LnRvU3RyaW5nKCkhLCB0aGlzLmlucHV0LCB0aGlzLmxvY2F0aW9uVGV4dCgpLCB0aGlzLmxvY2F0aW9uKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIG4gPSB0aGlzLm5leHQ7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFNpbXBsZUV4cHJlc3Npb25DaGVja2VyIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHN0YXRpYyBjaGVjayhhc3Q6IEFTVCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzID0gbmV3IFNpbXBsZUV4cHJlc3Npb25DaGVja2VyKCk7XG4gICAgYXN0LnZpc2l0KHMpO1xuICAgIHJldHVybiBzLmVycm9ycztcbiAgfVxuXG4gIGVycm9yczogc3RyaW5nW10gPSBbXTtcblxuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKFwicGlwZXNcIik7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEFsbChhc3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gYXN0cy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KSB7fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5jb25zdCBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgJ0EnOiAnTElOSycsXG4gICdCJzogJ0JPTERfVEVYVCcsXG4gICdCUic6ICdMSU5FX0JSRUFLJyxcbiAgJ0VNJzogJ0VNUEhBU0lTRURfVEVYVCcsXG4gICdIMSc6ICdIRUFESU5HX0xFVkVMMScsXG4gICdIMic6ICdIRUFESU5HX0xFVkVMMicsXG4gICdIMyc6ICdIRUFESU5HX0xFVkVMMycsXG4gICdINCc6ICdIRUFESU5HX0xFVkVMNCcsXG4gICdINSc6ICdIRUFESU5HX0xFVkVMNScsXG4gICdINic6ICdIRUFESU5HX0xFVkVMNicsXG4gICdIUic6ICdIT1JJWk9OVEFMX1JVTEUnLFxuICAnSSc6ICdJVEFMSUNfVEVYVCcsXG4gICdMSSc6ICdMSVNUX0lURU0nLFxuICAnTElOSyc6ICdNRURJQV9MSU5LJyxcbiAgJ09MJzogJ09SREVSRURfTElTVCcsXG4gICdQJzogJ1BBUkFHUkFQSCcsXG4gICdRJzogJ1FVT1RBVElPTicsXG4gICdTJzogJ1NUUklLRVRIUk9VR0hfVEVYVCcsXG4gICdTTUFMTCc6ICdTTUFMTF9URVhUJyxcbiAgJ1NVQic6ICdTVUJTVFJJUFQnLFxuICAnU1VQJzogJ1NVUEVSU0NSSVBUJyxcbiAgJ1RCT0RZJzogJ1RBQkxFX0JPRFknLFxuICAnVEQnOiAnVEFCTEVfQ0VMTCcsXG4gICdURk9PVCc6ICdUQUJMRV9GT09URVInLFxuICAnVEgnOiAnVEFCTEVfSEVBREVSX0NFTEwnLFxuICAnVEhFQUQnOiAnVEFCTEVfSEVBREVSJyxcbiAgJ1RSJzogJ1RBQkxFX1JPVycsXG4gICdUVCc6ICdNT05PU1BBQ0VEX1RFWFQnLFxuICAnVSc6ICdVTkRFUkxJTkVEX1RFWFQnLFxuICAnVUwnOiAnVU5PUkRFUkVEX0xJU1QnLFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgcGxhY2Vob2xkZXIgd2l0aCBkaWZmZXJlbnQgY29udGVudC5cbiAqXG4gKiBSZXR1cm5zIHRoZSBzYW1lIHBsYWNlaG9sZGVyIG5hbWUgd2hlbiB0aGUgY29udGVudCBpcyBpZGVudGljYWwuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlclJlZ2lzdHJ5IHtcbiAgLy8gQ291bnQgdGhlIG9jY3VycmVuY2Ugb2YgdGhlIGJhc2UgbmFtZSB0b3AgZ2VuZXJhdGUgYSB1bmlxdWUgbmFtZVxuICBwcml2YXRlIF9wbGFjZUhvbGRlck5hbWVDb3VudHM6IHtbazogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICAvLyBNYXBzIHNpZ25hdHVyZSB0byBwbGFjZWhvbGRlciBuYW1lc1xuICBwcml2YXRlIF9zaWduYXR1cmVUb05hbWU6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIGdldFN0YXJ0VGFnUGxhY2Vob2xkZXJOYW1lKHRhZzogc3RyaW5nLCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LCBpc1ZvaWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuX2hhc2hUYWcodGFnLCBhdHRycywgaXNWb2lkKTtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlclRhZyA9IHRhZy50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTW3VwcGVyVGFnXSB8fCBgVEFHXyR7dXBwZXJUYWd9YDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGlzVm9pZCA/IGJhc2VOYW1lIDogYFNUQVJUXyR7YmFzZU5hbWV9YCk7XG5cbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldENsb3NlVGFnUGxhY2Vob2xkZXJOYW1lKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLl9oYXNoQ2xvc2luZ1RhZyh0YWcpO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyVGFnID0gdGFnLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgYmFzZU5hbWUgPSBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVNbdXBwZXJUYWddIHx8IGBUQUdfJHt1cHBlclRhZ31gO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUoYENMT1NFXyR7YmFzZU5hbWV9YCk7XG5cbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyTmFtZShuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdXBwZXJOYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGBQSDogJHt1cHBlck5hbWV9PSR7Y29udGVudH1gO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaXF1ZU5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUodXBwZXJOYW1lKTtcbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IHVuaXF1ZU5hbWU7XG5cbiAgICByZXR1cm4gdW5pcXVlTmFtZTtcbiAgfVxuXG4gIGdldFVuaXF1ZVBsYWNlaG9sZGVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShuYW1lLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgYSBoYXNoIGZvciBhIHRhZyAtIGRvZXMgbm90IHRha2UgYXR0cmlidXRlIG9yZGVyIGludG8gYWNjb3VudFxuICBwcml2YXRlIF9oYXNoVGFnKHRhZzogc3RyaW5nLCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LCBpc1ZvaWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0ID0gYDwke3RhZ31gO1xuICAgIGNvbnN0IHN0ckF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IGAgJHtuYW1lfT0ke2F0dHJzW25hbWVdfWApLmpvaW4oJycpO1xuICAgIGNvbnN0IGVuZCA9IGlzVm9pZCA/ICcvPicgOiBgPjwvJHt0YWd9PmA7XG5cbiAgICByZXR1cm4gc3RhcnQgKyBzdHJBdHRycyArIGVuZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc2hDbG9zaW5nVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2hhc2hUYWcoYC8ke3RhZ31gLCB7fSwgZmFsc2UpOyB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVVbmlxdWVOYW1lKGJhc2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VlbiA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50cy5oYXNPd25Qcm9wZXJ0eShiYXNlKTtcbiAgICBpZiAoIXNlZW4pIHtcbiAgICAgIHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXSA9IDE7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXTtcbiAgICB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV0gPSBpZCArIDE7XG4gICAgcmV0dXJuIGAke2Jhc2V9XyR7aWR9YDtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0ludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7TGV4ZXJ9IGZyb20gXCIuL2xleGVyXCI7XG5pbXBvcnQge1BsYWNlaG9sZGVyUmVnaXN0cnl9IGZyb20gXCIuLi9zZXJpYWxpemVycy9wbGFjZWhvbGRlclwiO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC9odG1sX3RhZ3NcIjtcbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcblxuY29uc3QgX2V4cFBhcnNlciA9IG5ldyBQYXJzZXIobmV3IExleGVyKCkpO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBjb252ZXJ0aW5nIGh0bWwgbm9kZXMgdG8gYW4gaTE4biBNZXNzYWdlIGdpdmVuIGFuIGludGVycG9sYXRpb25Db25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeShcbiAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZ1xuKTogKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiBpMThuLk1lc3NhZ2Uge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IEkxOG5WaXNpdG9yKF9leHBQYXJzZXIsIGludGVycG9sYXRpb25Db25maWcpO1xuXG4gIHJldHVybiAobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+XG4gICAgdmlzaXRvci50b0kxOG5NZXNzYWdlKG5vZGVzLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xufVxuXG5jbGFzcyBJMThuVmlzaXRvciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2lzSWN1OiBib29sZWFuO1xuICBwcml2YXRlIF9pY3VEZXB0aDogbnVtYmVyO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclJlZ2lzdHJ5OiBQbGFjZWhvbGRlclJlZ2lzdHJ5O1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclRvQ29udGVudDoge1twaE5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyVG9NZXNzYWdlOiB7W3BoTmFtZTogc3RyaW5nXTogaTE4bi5NZXNzYWdlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHByZXNzaW9uUGFyc2VyOiBQYXJzZXIsIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpIHt9XG5cbiAgcHVibGljIHRvSTE4bk1lc3NhZ2Uobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBpMThuLk1lc3NhZ2Uge1xuICAgIHRoaXMuX2lzSWN1ID0gbm9kZXMubGVuZ3RoID09PSAxICYmIG5vZGVzWzBdIGluc3RhbmNlb2YgaHRtbC5FeHBhbnNpb247XG4gICAgdGhpcy5faWN1RGVwdGggPSAwO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkgPSBuZXcgUGxhY2Vob2xkZXJSZWdpc3RyeSgpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50ID0ge307XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2UgPSB7fTtcblxuICAgIGNvbnN0IGkxOG5vZGVzOiBpMThuLk5vZGVbXSA9IGh0bWwudmlzaXRBbGwodGhpcywgbm9kZXMsIHt9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5NZXNzYWdlKGkxOG5vZGVzLCB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudCwgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2UsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGh0bWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pO1xuICAgIGNvbnN0IGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBlbC5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgLy8gRG8gbm90IHZpc2l0IHRoZSBhdHRyaWJ1dGVzLCB0cmFuc2xhdGFibGUgb25lcyBhcmUgdG9wLWxldmVsIEFTVHNcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaXNWb2lkOiBib29sZWFuID0gZ2V0SHRtbFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkO1xuICAgIGNvbnN0IHN0YXJ0UGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRTdGFydFRhZ1BsYWNlaG9sZGVyTmFtZShlbC5uYW1lLCBhdHRycywgaXNWb2lkKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtzdGFydFBoTmFtZV0gPSBlbC5zb3VyY2VTcGFuID8gZWwuc291cmNlU3BhbiEudG9TdHJpbmcoKSA6IFwiXCI7XG5cbiAgICBsZXQgY2xvc2VQaE5hbWUgPSBcIlwiO1xuXG4gICAgaWYgKCFpc1ZvaWQpIHtcbiAgICAgIGNsb3NlUGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRDbG9zZVRhZ1BsYWNlaG9sZGVyTmFtZShlbC5uYW1lKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W2Nsb3NlUGhOYW1lXSA9IGA8LyR7ZWwubmFtZX0+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uVGFnUGxhY2Vob2xkZXIoZWwubmFtZSwgYXR0cnMsIHN0YXJ0UGhOYW1lLCBjbG9zZVBoTmFtZSwgY2hpbGRyZW4sIGlzVm9pZCwgZWwuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24oYXR0cmlidXRlLnZhbHVlLCBhdHRyaWJ1dGUuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIHJldHVybiB0aGlzLl92aXNpdFRleHRXaXRoSW50ZXJwb2xhdGlvbih0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICB0aGlzLl9pY3VEZXB0aCsrO1xuICAgIGNvbnN0IGkxOG5JY3VDYXNlczoge1trOiBzdHJpbmddOiBpMThuLk5vZGV9ID0ge307XG4gICAgY29uc3QgaTE4bkljdSA9IG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBpMThuSWN1Q2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBpY3UuY2FzZXMuZm9yRWFjaCgoY2F6ZSk6IHZvaWQgPT4ge1xuICAgICAgaTE4bkljdUNhc2VzW2NhemUudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKFxuICAgICAgICBjYXplLmV4cHJlc3Npb24ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCB7fSkpLFxuICAgICAgICBjYXplLmV4cFNvdXJjZVNwYW5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5faWN1RGVwdGgtLTtcblxuICAgIGlmICh0aGlzLl9pc0ljdSB8fCB0aGlzLl9pY3VEZXB0aCA+IDApIHtcbiAgICAgIC8vIFJldHVybnMgYW4gSUNVIG5vZGUgd2hlbjpcbiAgICAgIC8vIC0gdGhlIG1lc3NhZ2UgKHZzIGEgcGFydCBvZiB0aGUgbWVzc2FnZSkgaXMgYW4gSUNVIG1lc3NhZ2UsIG9yXG4gICAgICAvLyAtIHRoZSBJQ1UgbWVzc2FnZSBpcyBuZXN0ZWQuXG4gICAgICBjb25zdCBleHBQaCA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0VW5pcXVlUGxhY2Vob2xkZXIoYFZBUl8ke2ljdS50eXBlfWApO1xuICAgICAgaTE4bkljdS5leHByZXNzaW9uUGxhY2Vob2xkZXIgPSBleHBQaDtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W2V4cFBoXSA9IGljdS5zd2l0Y2hWYWx1ZTtcblxuICAgICAgcmV0dXJuIGkxOG5JY3U7XG4gICAgfVxuXG4gICAgLy8gRWxzZSByZXR1cm5zIGEgcGxhY2Vob2xkZXJcbiAgICAvLyBJQ1UgcGxhY2Vob2xkZXJzIHNob3VsZCBub3QgYmUgcmVwbGFjZWQgd2l0aCB0aGVpciBvcmlnaW5hbCBjb250ZW50IGJ1dCB3aXRoIHRoZSB0aGVpclxuICAgIC8vIHRyYW5zbGF0aW9ucy4gV2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgdmlzaXRvciAodGhleSBhcmUgbm90IHJlLWVudHJhbnQpIHRvIGNvbXB1dGUgdGhlXG4gICAgLy8gbWVzc2FnZSBpZC5cbiAgICAvLyBUT0RPKHZpY2IpOiBhZGQgYSBodG1sLk5vZGUgLT4gaTE4bi5NZXNzYWdlIGNhY2hlIHRvIGF2b2lkIGhhdmluZyB0byByZS1jcmVhdGUgdGhlIG1zZ1xuICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKFwiSUNVXCIsIGljdS5zb3VyY2VTcGFuLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgSTE4blZpc2l0b3IodGhpcy5fZXhwcmVzc2lvblBhcnNlciwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2VbcGhOYW1lXSA9IHZpc2l0b3IudG9JMThuTWVzc2FnZShbaWN1XSwgXCJcIiwgXCJcIiwgXCJcIik7XG4gICAgcmV0dXJuIG5ldyBpMThuLkljdVBsYWNlaG9sZGVyKGkxOG5JY3UsIHBoTmFtZSwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlYWNoYWJsZSBjb2RlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24odGV4dDogc3RyaW5nLCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBpMThuLk5vZGUge1xuICAgIGNvbnN0IHNwbGl0SW50ZXJwb2xhdGlvbiA9IHRoaXMuX2V4cHJlc3Npb25QYXJzZXIuc3BsaXRJbnRlcnBvbGF0aW9uKFxuICAgICAgdGV4dCxcbiAgICAgIHNvdXJjZVNwYW4uc3RhcnQudG9TdHJpbmcoKSxcbiAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWdcbiAgICApO1xuXG4gICAgaWYgKCFzcGxpdEludGVycG9sYXRpb24pIHtcbiAgICAgIC8vIE5vIGV4cHJlc3Npb24sIHJldHVybiBhIHNpbmdsZSB0ZXh0XG4gICAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LCBzb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBncm91cCBvZiB0ZXh0ICsgZXhwcmVzc2lvbnNcbiAgICBjb25zdCBub2RlczogaTE4bi5Ob2RlW10gPSBbXTtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgaTE4bi5Db250YWluZXIobm9kZXMsIHNvdXJjZVNwYW4pO1xuICAgIGNvbnN0IHtzdGFydDogc0RlbGltaXRlciwgZW5kOiBlRGVsaW1pdGVyfSA9IHRoaXMuX2ludGVycG9sYXRpb25Db25maWc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHNwbGl0SW50ZXJwb2xhdGlvbi5leHByZXNzaW9uc1tpXTtcbiAgICAgIGNvbnN0IGJhc2VOYW1lID0gZXh0cmFjdFBsYWNlaG9sZGVyTmFtZShleHByZXNzaW9uKSB8fCBcIklOVEVSUE9MQVRJT05cIjtcbiAgICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKGJhc2VOYW1lLCBleHByZXNzaW9uKTtcblxuICAgICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2ldLmxlbmd0aCkge1xuICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBlbXB0eSBzdHJpbmdzXG4gICAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uVGV4dChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tpXSwgc291cmNlU3BhbikpO1xuICAgICAgfVxuXG4gICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlBsYWNlaG9sZGVyKGV4cHJlc3Npb24sIHBoTmFtZSwgc291cmNlU3BhbikpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbcGhOYW1lXSA9IHNEZWxpbWl0ZXIgKyBleHByZXNzaW9uICsgZURlbGltaXRlcjtcbiAgICB9XG5cbiAgICAvLyBUaGUgbGFzdCBpbmRleCBjb250YWlucyBubyBleHByZXNzaW9uXG4gICAgY29uc3QgbGFzdFN0cmluZ0lkeCA9IHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2xhc3RTdHJpbmdJZHhdLmxlbmd0aCkge1xuICAgICAgbm9kZXMucHVzaChuZXcgaTE4bi5UZXh0KHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2xhc3RTdHJpbmdJZHhdLCBzb3VyY2VTcGFuKSk7XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cblxuY29uc3QgX0NVU1RPTV9QSF9FWFAgPSAvXFwvXFwvW1xcc1xcU10qaTE4bltcXHNcXFNdKlxcKFtcXHNcXFNdKnBoW1xcc1xcU10qPVtcXHNcXFNdKihcInwnKShbXFxzXFxTXSo/KVxcMVtcXHNcXFNdKlxcKS9nO1xuXG5mdW5jdGlvbiBleHRyYWN0UGxhY2Vob2xkZXJOYW1lKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW5wdXQuc3BsaXQoX0NVU1RPTV9QSF9FWFApWzJdO1xufVxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7Y3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5fSBmcm9tIFwiLi9pMThuXCI7XG5pbXBvcnQge1BhcnNlciwgUGFyc2VUcmVlUmVzdWx0fSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC9odG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZCwgUGxhY2Vob2xkZXJNYXBwZXJ9IGZyb20gXCIuLi9zZXJpYWxpemVycy9zZXJpYWxpemVyXCI7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jb25zdCBfSTE4Tl9BVFRSID0gXCJpMThuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZU1ldGFkYXRhIHtcbiAgbWVhbmluZz86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpIHtcbiAgICBzdXBlcihnZXRIdG1sVGFnRGVmaW5pdGlvbik7XG4gIH1cblxuICBwYXJzZShzb3VyY2U6IHN0cmluZywgdXJsOiBzdHJpbmcsIHBhcnNlRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgcmV0dXJuIHN1cGVyLnBhcnNlKHNvdXJjZSwgdXJsLCBwYXJzZUV4cGFuc2lvbkZvcm1zLCB0aGlzLmludGVycG9sYXRpb25Db25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgdHJhbnNsYXRhYmxlIG1lc3NhZ2VzIGZyb20gYW4gaHRtbCBBU1RcbiAgICovXG4gIGV4dHJhY3RNZXNzYWdlcyhub2RlczogaHRtbC5Ob2RlW10pOiBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoW1wid3JhcHBlclwiXSk7XG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoXCJ3cmFwcGVyXCIsIFtdLCBub2RlcywgdW5kZWZpbmVkISwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB2aXNpdG9yLmV4dHJhY3Qod3JhcHBlciwgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgfVxuXG4gIG1lcmdlVHJhbnNsYXRpb25zKFxuICAgIG5vZGVzOiBodG1sLk5vZGVbXSxcbiAgICB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlLFxuICAgIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgbWV0YWRhdGE/OiBNZXNzYWdlTWV0YWRhdGEsXG4gICAgaW1wbGljaXRUYWdzOiBzdHJpbmdbXSA9IFtdXG4gICk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKGltcGxpY2l0VGFncyk7XG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoXCJ3cmFwcGVyXCIsIFtdLCBub2RlcywgdW5kZWZpbmVkISwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB2aXNpdG9yLm1lcmdlKHdyYXBwZXIsIHRyYW5zbGF0aW9ucywgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXMsIG1ldGFkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIHB1YmxpYyBlcnJvcnM6IEkxOG5FcnJvcltdKSB7fVxufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciB0cmFuc2xhdGVkIG1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gIHByaXZhdGUgaTE4blRvSHRtbDogSTE4blRvSHRtbFZpc2l0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fSxcbiAgICBwdWJsaWMgZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgcHVibGljIG1hcHBlckZhY3Rvcnk/OiAobTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlcixcbiAgICBjb25zb2xlPzogQ29uc29sZVxuICApIHtcbiAgICB0aGlzLmkxOG5Ub0h0bWwgPSBuZXcgSTE4blRvSHRtbFZpc2l0b3IoXG4gICAgICBpMThuTm9kZXNCeU1zZ0lkLFxuICAgICAgZGlnZXN0LFxuICAgICAgbWFwcGVyRmFjdG9yeSEsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICAgIGludGVycG9sYXRpb25Db25maWcsXG4gICAgICBjb25zb2xlXG4gICAgKTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgYSBgVHJhbnNsYXRpb25CdW5kbGVgIGJ5IHBhcnNpbmcgdGhlIGdpdmVuIGBjb250ZW50YCB3aXRoIHRoZSBgc2VyaWFsaXplcmAuXG4gIHN0YXRpYyBsb2FkKFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkaWdlc3Q6IChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpID0+IHN0cmluZyxcbiAgICBjcmVhdGVOYW1lTWFwcGVyOiAobWVzc2FnZTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlciB8IG51bGwsXG4gICAgbG9hZEZjdDogKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IEkxOG5NZXNzYWdlc0J5SWQsXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkID0gbG9hZEZjdChjb250ZW50LCB1cmwpO1xuICAgIGNvbnN0IGRpZ2VzdEZuID0gKG06IGkxOG4uTWVzc2FnZSkgPT4gZGlnZXN0KG0pO1xuICAgIGNvbnN0IG1hcHBlckZhY3RvcnkgPSAobTogaTE4bi5NZXNzYWdlKSA9PiBjcmVhdGVOYW1lTWFwcGVyKG0pITtcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uQnVuZGxlKFxuICAgICAgaTE4bk5vZGVzQnlNc2dJZCxcbiAgICAgIGRpZ2VzdEZuLFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgICAgbWFwcGVyRmFjdG9yeSxcbiAgICAgIGNvbnNvbGVcbiAgICApO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gYXMgSFRNTCBub2RlcyBmcm9tIHRoZSBnaXZlbiBzb3VyY2UgbWVzc2FnZS5cbiAgZ2V0KHNyY01zZzogaTE4bi5NZXNzYWdlLCBwYXJhbXMpOiBodG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaHRtbFJlcyA9IHRoaXMuaTE4blRvSHRtbC5jb252ZXJ0KHNyY01zZywgcGFyYW1zKTtcbiAgICBpZiAoaHRtbFJlcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoaHRtbFJlcy5lcnJvcnMuam9pbihcIlxcblwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxSZXMubm9kZXM7XG4gIH1cblxuICBoYXMoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaWdlc3Qoc3JjTXNnKSBpbiB0aGlzLmkxOG5Ob2Rlc0J5TXNnSWQ7XG4gIH1cbn1cblxuY2xhc3MgSTE4blRvSHRtbFZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICBwcml2YXRlIF9zcmNNc2c6IGkxOG4uTWVzc2FnZTtcbiAgcHJpdmF0ZSBfY29udGV4dFN0YWNrOiB7bXNnOiBpMThuLk1lc3NhZ2U7IG1hcHBlcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nfVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW10gPSBbXTtcbiAgcHJpdmF0ZSBfbWFwcGVyOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtczoge1trZXk6IHN0cmluZ106IGFueX07XG4gIHByaXZhdGUgX3BhcmFtS2V5czogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge30sXG4gICAgcHJpdmF0ZSBfZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfbWFwcGVyRmFjdG9yeTogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgcHJpdmF0ZSBfbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc/OiBJbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgX2NvbnNvbGU/OiBDb25zb2xlXG4gICkge31cblxuICBjb252ZXJ0KHNyY01zZzogaTE4bi5NZXNzYWdlLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KToge25vZGVzOiBodG1sLk5vZGVbXTsgZXJyb3JzOiBJMThuRXJyb3JbXX0ge1xuICAgIHRoaXMuX2NvbnRleHRTdGFjay5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9wYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gICAgLy8gaTE4biB0byB0ZXh0XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuY29udmVydFRvVGV4dChzcmNNc2cpO1xuXG4gICAgLy8gdGV4dCB0byBodG1sXG4gICAgY29uc3QgdXJsID0gc3JjTXNnLm5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCkucGFyc2UodGV4dCwgdXJsLCB0cnVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBub2RlczogaHRtbFBhcnNlci5yb290Tm9kZXMsXG4gICAgICBlcnJvcnM6IFsuLi50aGlzLl9lcnJvcnMsIC4uLmh0bWxQYXJzZXIuZXJyb3JzXVxuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW4ubWFwKG4gPT4gbi52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNhc2VzID0gT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoayA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuXG4gICAgLy8gVE9ETyh2aWNiKTogT25jZSBhbGwgZm9ybWF0IHN3aXRjaCB0byB1c2luZyBleHByZXNzaW9uIHBsYWNlaG9sZGVyc1xuICAgIC8vIHdlIHNob3VsZCB0aHJvdyB3aGVuIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgaW4gdGhlIHNvdXJjZSBtZXNzYWdlXG4gICAgY29uc3QgZXhwID0gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShpY3UuZXhwcmVzc2lvbilcbiAgICAgID8gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyc1tpY3UuZXhwcmVzc2lvbl1cbiAgICAgIDogaWN1LmV4cHJlc3Npb247XG5cbiAgICByZXR1cm4gYHske2V4cH0sICR7aWN1LnR5cGV9LCAke2Nhc2VzLmpvaW4oXCIgXCIpfX1gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgcGhOYW1lID0gdGhpcy5fbWFwcGVyKHBoLm5hbWUpO1xuICAgIGlmICh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzLmhhc093blByb3BlcnR5KHBoTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1ZhbHVlKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbcGhOYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShwaE5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaE5hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRFcnJvcihwaCwgYFVua25vd24gcGxhY2Vob2xkZXIgXCIke3BoLm5hbWV9XCJgKTtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8vIExvYWRlZCBtZXNzYWdlIGNvbnRhaW5zIG9ubHkgcGxhY2Vob2xkZXJzICh2cyB0YWcgYW5kIGljdSBwbGFjZWhvbGRlcnMpLlxuICAvLyBIb3dldmVyIHdoZW4gYSB0cmFuc2xhdGlvbiBjYW4gbm90IGJlIGZvdW5kLCB3ZSBuZWVkIHRvIHNlcmlhbGl6ZSB0aGUgc291cmNlIG1lc3NhZ2VcbiAgLy8gd2hpY2ggY2FuIGNvbnRhaW4gdGFnIHBsYWNlaG9sZGVyc1xuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCB0YWcgPSBgJHtwaC50YWd9YDtcbiAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKHBoLmF0dHJzKVxuICAgICAgLm1hcChuYW1lID0+IGAke25hbWV9PVwiJHtwaC5hdHRyc1tuYW1lXX1cImApXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHt0YWd9ICR7YXR0cnN9Lz5gO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHBoLmNoaWxkcmVuLm1hcCgoYzogaTE4bi5Ob2RlKSA9PiBjLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBgPCR7dGFnfSAke2F0dHJzfT4ke2NoaWxkcmVufTwvJHt0YWd9PmA7XG4gIH1cblxuICAvLyBMb2FkZWQgbWVzc2FnZSBjb250YWlucyBvbmx5IHBsYWNlaG9sZGVycyAodnMgdGFnIGFuZCBpY3UgcGxhY2Vob2xkZXJzKS5cbiAgLy8gSG93ZXZlciB3aGVuIGEgdHJhbnNsYXRpb24gY2FuIG5vdCBiZSBmb3VuZCwgd2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIHNvdXJjZSBtZXNzYWdlXG4gIC8vIHdoaWNoIGNhbiBjb250YWluIHRhZyBwbGFjZWhvbGRlcnNcbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQW4gSUNVIHBsYWNlaG9sZGVyIHJlZmVyZW5jZXMgdGhlIHNvdXJjZSBtZXNzYWdlIHRvIGJlIHNlcmlhbGl6ZWRcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaC5uYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIHNvdXJjZSBtZXNzYWdlIHRvIGEgdHJhbnNsYXRlZCB0ZXh0IHN0cmluZzpcbiAgICogLSB0ZXh0IG5vZGVzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIHRyYW5zbGF0aW9uLFxuICAgKiAtIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciBjb250ZW50LFxuICAgKiAtIElDVSBub2RlcyBhcmUgY29udmVydGVkIHRvIElDVSBleHByZXNzaW9ucy5cbiAgICovXG4gIHByaXZhdGUgY29udmVydFRvVGV4dChzcmNNc2c6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9kaWdlc3Qoc3JjTXNnKTtcblxuICAgIGNvbnN0IG1hcHBlciA9IHRoaXMuX21hcHBlckZhY3RvcnkgPyB0aGlzLl9tYXBwZXJGYWN0b3J5KHNyY01zZykgOiBudWxsO1xuICAgIGxldCBub2RlczogaTE4bi5Ob2RlW107XG5cbiAgICB0aGlzLl9jb250ZXh0U3RhY2sucHVzaCh7bXNnOiB0aGlzLl9zcmNNc2csIG1hcHBlcjogdGhpcy5fbWFwcGVyfSk7XG4gICAgdGhpcy5fc3JjTXNnID0gc3JjTXNnO1xuXG4gICAgaWYgKHRoaXMuX2kxOG5Ob2Rlc0J5TXNnSWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAvLyBXaGVuIHRoZXJlIGlzIGEgdHJhbnNsYXRpb24gdXNlIGl0cyBub2RlcyBhcyB0aGUgc291cmNlXG4gICAgICAvLyBBbmQgY3JlYXRlIGEgbWFwcGVyIHRvIGNvbnZlcnQgc2VyaWFsaXplZCBwbGFjZWhvbGRlciBuYW1lcyB0byBpbnRlcm5hbCBuYW1lc1xuICAgICAgbm9kZXMgPSB0aGlzLl9pMThuTm9kZXNCeU1zZ0lkW2lkXTtcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IChtYXBwZXIgPyBtYXBwZXIudG9JbnRlcm5hbE5hbWUobmFtZSkhIDogbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gbm8gdHJhbnNsYXRpb24gaGFzIGJlZW4gZm91bmRcbiAgICAgIC8vIC0gcmVwb3J0IGFuIGVycm9yIC8gYSB3YXJuaW5nIC8gbm90aGluZyxcbiAgICAgIC8vIC0gdXNlIHRoZSBub2RlcyBmcm9tIHRoZSBvcmlnaW5hbCBtZXNzYWdlXG4gICAgICAvLyAtIHBsYWNlaG9sZGVycyBhcmUgYWxyZWFkeSBpbnRlcm5hbCBhbmQgbmVlZCBubyBtYXBwZXJcbiAgICAgIGlmICh0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fYWRkRXJyb3Ioc3JjTXNnLm5vZGVzWzBdLCBgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3IgbWVzc2FnZSBcIiR7aWR9XCJgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uc29sZSAmJiB0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZykge1xuICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiYCk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IHNyY01zZy5ub2RlcztcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jb250ZXh0U3RhY2sucG9wKCkhO1xuICAgIHRoaXMuX3NyY01zZyA9IGNvbnRleHQubXNnO1xuICAgIHRoaXMuX21hcHBlciA9IGNvbnRleHQubWFwcGVyO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9WYWx1ZShwbGFjZWhvbGRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbSA9IHBsYWNlaG9sZGVyLnJlcGxhY2UodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCwgXCJcIikucmVwbGFjZSh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCwgXCJcIik7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtS2V5cy5pbmRleE9mKHBhcmFtKSAhPT0gLTEgPyB0aGlzLl9wYXJhbXNbcGFyYW1dIDogcGxhY2Vob2xkZXI7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFcnJvcihlbDogaTE4bi5Ob2RlLCBtc2c6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3IoZWwuc291cmNlU3BhbiwgbXNnKSk7XG4gIH1cbn1cblxuZW51bSBWaXNpdG9yTW9kZSB7XG4gIEV4dHJhY3QsXG4gIE1lcmdlXG59XG5cbi8qKlxuICogVGhpcyBWaXNpdG9yIGlzIHVzZWQ6XG4gKiAxLiB0byBleHRyYWN0IGFsbCB0aGUgdHJhbnNsYXRhYmxlIHN0cmluZ3MgZnJvbSBhbiBodG1sIEFTVCAoc2VlIGBleHRyYWN0KClgKSxcbiAqIDIuIHRvIHJlcGxhY2UgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIHdpdGggdGhlIGFjdHVhbCB0cmFuc2xhdGlvbnMgKHNlZSBgbWVyZ2UoKWApXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIGRlcHRoOiBudW1iZXI7XG5cbiAgLy8gPGVsIGkxOG4+Li4uPC9lbD5cbiAgcHJpdmF0ZSBpbkkxOG5Ob2RlOiBib29sZWFuO1xuICBwcml2YXRlIGluSW1wbGljaXROb2RlOiBib29sZWFuO1xuXG4gIC8vIDwhLS1pMThuLS0+Li4uPCEtLS9pMThuLS0+XG4gIHByaXZhdGUgaW5JMThuQmxvY2s6IGJvb2xlYW47XG4gIHByaXZhdGUgYmxvY2tDaGlsZHJlbjogaHRtbC5Ob2RlW10gPSBbXTtcbiAgcHJpdmF0ZSBibG9ja1N0YXJ0RGVwdGg6IG51bWJlcjtcblxuICAvLyB7PGljdSBtZXNzYWdlPn1cbiAgcHJpdmF0ZSBpbkljdTogYm9vbGVhbjtcblxuICAvLyBzZXQgdG8gdm9pZCAwIHdoZW4gbm90IGluIGEgc2VjdGlvblxuICBwcml2YXRlIG1zZ0NvdW50QXRTZWN0aW9uU3RhcnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBlcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIG1vZGU6IFZpc2l0b3JNb2RlO1xuXG4gIC8vIFZpc2l0b3JNb2RlLkV4dHJhY3Qgb25seVxuICBwcml2YXRlIG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXTtcblxuICAvLyBWaXNpdG9yTW9kZS5NZXJnZSBvbmx5XG4gIHByaXZhdGUgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZTtcbiAgcHJpdmF0ZSBjcmVhdGVJMThuTWVzc2FnZTogKG1zZzogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZykgPT4gaTE4bi5NZXNzYWdlO1xuICBwcml2YXRlIG1ldGFkYXRhOiBNZXNzYWdlTWV0YWRhdGE7XG4gIHByaXZhdGUgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdID0gW10pIHt9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBtZXNzYWdlcyBmcm9tIHRoZSB0cmVlXG4gICAqL1xuICBleHRyYWN0KG5vZGU6IGh0bWwuTm9kZSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgIHRoaXMuaW5pdChWaXNpdG9yTW9kZS5FeHRyYWN0LCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICAgIG5vZGUudmlzaXQodGhpcywgbnVsbCk7XG5cbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jaykge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZSwgXCJVbmNsb3NlZCBibG9ja1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEV4dHJhY3Rpb25SZXN1bHQodGhpcy5tZXNzYWdlcywgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB0cmVlIHdoZXJlIGFsbCB0cmFuc2xhdGFibGUgbm9kZXMgYXJlIHRyYW5zbGF0ZWRcbiAgICovXG4gIG1lcmdlKFxuICAgIG5vZGU6IGh0bWwuTm9kZSxcbiAgICB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICBtZXRhZGF0YTogTWVzc2FnZU1ldGFkYXRhID0ge31cbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB0aGlzLmluaXQoVmlzaXRvck1vZGUuTWVyZ2UsIGludGVycG9sYXRpb25Db25maWcsIHBhcmFtcyk7XG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlZE5vZGUgPSBub2RlLnZpc2l0KHRoaXMsIG51bGwpO1xuXG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5jbG9zZWQgYmxvY2tcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQYXJzZVRyZWVSZXN1bHQodHJhbnNsYXRlZE5vZGUuY2hpbGRyZW4sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgLy8gUGFyc2UgY2FzZXMgZm9yIHRyYW5zbGF0YWJsZSBodG1sIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBleHByZXNzaW9uID0gaHRtbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgaHRtbC5FeHBhbnNpb25DYXNlKFxuICAgICAgICBpY3VDYXNlLnZhbHVlLFxuICAgICAgICBleHByZXNzaW9uLFxuICAgICAgICBpY3VDYXNlLnNvdXJjZVNwYW4sXG4gICAgICAgIGljdUNhc2UudmFsdWVTb3VyY2VTcGFuLFxuICAgICAgICBpY3VDYXNlLmV4cFNvdXJjZVNwYW5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaHRtbC5FeHBhbnNpb24ge1xuICAgIHRoaXMubWF5QmVBZGRCbG9ja0NoaWxkcmVuKGljdSk7XG5cbiAgICBjb25zdCB3YXNJbkljdSA9IHRoaXMuaW5JY3U7XG5cbiAgICBpZiAoIXRoaXMuaW5JY3UpIHtcbiAgICAgIC8vIG5lc3RlZCBJQ1UgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBleHRyYWN0ZWQgYnV0IHRvcC1sZXZlbCB0cmFuc2xhdGVkIGFzIGEgd2hvbGVcbiAgICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRkTWVzc2FnZShbaWN1XSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluSWN1ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXNlcyA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBpY3UgPSBuZXcgaHRtbC5FeHBhbnNpb24oaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuLCBpY3Uuc3dpdGNoVmFsdWVTb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICB0aGlzLmluSWN1ID0gd2FzSW5JY3U7XG5cbiAgICByZXR1cm4gaWN1O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBodG1sLlRleHQge1xuICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLm1heUJlQWRkQmxvY2tDaGlsZHJlbih0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaHRtbC5FbGVtZW50IHwgbnVsbCB7XG4gICAgdGhpcy5tYXlCZUFkZEJsb2NrQ2hpbGRyZW4oZWwpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBjb25zdCB3YXNJbkkxOG5Ob2RlID0gdGhpcy5pbkkxOG5Ob2RlO1xuICAgIGNvbnN0IHdhc0luSW1wbGljaXROb2RlID0gdGhpcy5pbkltcGxpY2l0Tm9kZTtcbiAgICBsZXQgY2hpbGROb2RlczogaHRtbC5Ob2RlW10gPSBbXTtcbiAgICBsZXQgdHJhbnNsYXRlZENoaWxkTm9kZXM6IGh0bWwuTm9kZVtdID0gdW5kZWZpbmVkITtcblxuICAgIC8vIEV4dHJhY3Q6XG4gICAgLy8gLSB0b3AgbGV2ZWwgbm9kZXMgd2l0aCB0aGUgKGltcGxpY2l0KSBcImkxOG5cIiBhdHRyaWJ1dGUgaWYgbm90IGFscmVhZHkgaW4gYSBzZWN0aW9uXG4gICAgLy8gLSBJQ1UgbWVzc2FnZXNcbiAgICBjb25zdCBpMThuQXR0ciA9IGdldEkxOG5BdHRyKGVsKTtcbiAgICBjb25zdCBpc0ltcGxpY2l0ID0gdGhpcy5faW1wbGljaXRUYWdzLnNvbWUodGFnID0+IGVsLm5hbWUgPT09IHRhZykgJiYgIXRoaXMuaW5JY3UgJiYgIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb247XG4gICAgY29uc3QgaXNUb3BMZXZlbEltcGxpY2l0ID0gIXdhc0luSW1wbGljaXROb2RlICYmIGlzSW1wbGljaXQ7XG4gICAgdGhpcy5pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlIHx8IGlzSW1wbGljaXQ7XG4gICAgaWYgKCF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uICYmICF0aGlzLmluSWN1KSB7XG4gICAgICBpZiAoaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0KSB7XG4gICAgICAgIHRoaXMuaW5JMThuTm9kZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2UoZWwuY2hpbGRyZW4sIHRoaXMubWV0YWRhdGEpITtcbiAgICAgICAgdHJhbnNsYXRlZENoaWxkTm9kZXMgPSB0aGlzLnRyYW5zbGF0ZU1lc3NhZ2UoZWwsIG1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIGNvbnN0IGlzVHJhbnNsYXRhYmxlID0gaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0O1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGFibGUpIHtcbiAgICAgICAgICB0aGlzLm9wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGVsLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihlbCwgXCJDb3VsZCBub3QgbWFyayBhbiBlbGVtZW50IGFzIHRyYW5zbGF0YWJsZSBpbnNpZGUgYSB0cmFuc2xhdGFibGUgc2VjdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuRXh0cmFjdCkge1xuICAgICAgICAvLyBEZXNjZW5kIGludG8gY2hpbGQgbm9kZXMgZm9yIGV4dHJhY3Rpb25cbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IHZpc2l0Tm9kZXMgPSB0cmFuc2xhdGVkQ2hpbGROb2RlcyB8fCBlbC5jaGlsZHJlbjtcbiAgICAgIHZpc2l0Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBjaGlsZC52aXNpdCh0aGlzLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHZpc2l0ZWQgJiYgIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgICAvLyBEbyBub3QgYWRkIHRoZSBjaGlsZHJlbiBmcm9tIHRyYW5zbGF0YWJsZSBzZWN0aW9ucyAoPSBpMThuIGJsb2NrcyBoZXJlKVxuICAgICAgICAgIC8vIFRoZXkgd2lsbCBiZSBhZGRlZCBsYXRlciBpbiB0aGlzIGxvb3Agd2hlbiB0aGUgYmxvY2sgY2xvc2VzIChpLmUuIG9uIGA8IS0tIC9pMThuIC0tPmApXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuY29uY2F0KHZpc2l0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcHRoLS07XG4gICAgdGhpcy5pbkkxOG5Ob2RlID0gd2FzSW5JMThuTm9kZTtcbiAgICB0aGlzLmluSW1wbGljaXROb2RlID0gd2FzSW5JbXBsaWNpdE5vZGU7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgcmV0dXJuIG5ldyBodG1sLkVsZW1lbnQoZWwubmFtZSwgW10sIGNoaWxkTm9kZXMsIGVsLnNvdXJjZVNwYW4sIGVsLnN0YXJ0U291cmNlU3BhbiwgZWwuZW5kU291cmNlU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZSBjb2RlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KG1vZGU6IFZpc2l0b3JNb2RlLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuaW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmluSTE4bk5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoID0gMDtcbiAgICB0aGlzLmluSWN1ID0gZmFsc2U7XG4gICAgdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuaW5JbXBsaWNpdE5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZUkxOG5NZXNzYWdlID0gY3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5KGludGVycG9sYXRpb25Db25maWcpO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgLy8gYWRkIGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2VcbiAgcHJpdmF0ZSBhZGRNZXNzYWdlKGFzdDogaHRtbC5Ob2RlW10sIHttZWFuaW5nID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBpZCA9IFwiXCJ9ID0ge30pOiBpMThuLk1lc3NhZ2UgfCBudWxsIHtcbiAgICBpZiAoXG4gICAgICBhc3QubGVuZ3RoID09PSAwIHx8XG4gICAgICAoYXN0Lmxlbmd0aCA9PT0gMSAmJiBhc3RbMF0gaW5zdGFuY2VvZiBodG1sLkF0dHJpYnV0ZSAmJiAhKGFzdFswXSBhcyBodG1sLkF0dHJpYnV0ZSkudmFsdWUpXG4gICAgKSB7XG4gICAgICAvLyBEbyBub3QgY3JlYXRlIGVtcHR5IG1lc3NhZ2VzXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jcmVhdGVJMThuTWVzc2FnZShhc3QsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gbWVzc2FnZSBnaXZlbiB0aGUgYFRyYW5zbGF0aW9uQnVuZGxlYFxuICAvLyBUaGlzIGlzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIGVsZW1lbnRzIC8gYmxvY2tzIC0gc2VlIGBfdHJhbnNsYXRlQXR0cmlidXRlc2AgZm9yIGF0dHJpYnV0ZXNcbiAgLy8gbm8tb3Agd2hlbiBjYWxsZWQgaW4gZXh0cmFjdGlvbiBtb2RlIChyZXR1cm5zIFtdKVxuICBwcml2YXRlIHRyYW5zbGF0ZU1lc3NhZ2UoZWw6IGh0bWwuTm9kZSwgbWVzc2FnZTogaTE4bi5NZXNzYWdlKTogaHRtbC5Ob2RlW10ge1xuICAgIGlmIChtZXNzYWdlICYmIHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy50cmFuc2xhdGlvbnMuZ2V0KG1lc3NhZ2UsIHRoaXMucGFyYW1zKTtcbiAgICAgIGlmIChub2Rlcykge1xuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGVsLCBgVHJhbnNsYXRpb24gdW5hdmFpbGFibGUgZm9yIG1lc3NhZ2UgaWQ9XCIke3RoaXMudHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG5vZGUgYXMgYSBjaGlsZCBvZiB0aGUgYmxvY2sgd2hlbjpcbiAgICogLSB3ZSBhcmUgaW4gYSBibG9jayxcbiAgICogLSB3ZSBhcmUgbm90IGluc2lkZSBhIElDVSBtZXNzYWdlICh0aG9zZSBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5KSxcbiAgICogLSB0aGUgbm9kZSBpcyBhIFwiZGlyZWN0IGNoaWxkXCIgb2YgdGhlIGJsb2NrXG4gICAqL1xuICBwcml2YXRlIG1heUJlQWRkQmxvY2tDaGlsZHJlbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jayAmJiAhdGhpcy5pbkljdSAmJiB0aGlzLmRlcHRoID09PSB0aGlzLmJsb2NrU3RhcnREZXB0aCkge1xuICAgICAgdGhpcy5ibG9ja0NoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoZSBzdGFydCBvZiBhIHNlY3Rpb24sIHNlZSBgX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbmBcbiAgICovXG4gIHByaXZhdGUgb3BlblRyYW5zbGF0YWJsZVNlY3Rpb24obm9kZTogaHRtbC5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5leHBlY3RlZCBzZWN0aW9uIHN0YXJ0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgPSB0aGlzLm1lc3NhZ2VzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB0cmFuc2xhdGFibGUgc2VjdGlvbiBjb3VsZCBiZTpcbiAgICogLSB0aGUgY29udGVudCBvZiB0cmFuc2xhdGFibGUgZWxlbWVudCxcbiAgICogLSBub2RlcyBiZXR3ZWVuIGA8IS0tIGkxOG4gLS0+YCBhbmQgYDwhLS0gL2kxOG4gLS0+YCBjb21tZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCAhPT0gdm9pZCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZXMgYSBzZWN0aW9uLlxuICAgKlxuICAgKiBJZiBhIHNlY3Rpb24gaGFzIG9ubHkgb25lIHNpZ25pZmljYW50IGNoaWxkcmVuIChjb21tZW50cyBub3Qgc2lnbmlmaWNhbnQpIHRoZW4gd2Ugc2hvdWxkIG5vdFxuICAgKiBrZWVwIHRoZSBtZXNzYWdlIGZyb20gdGhpcyBjaGlsZHJlbjpcbiAgICpcbiAgICogYDxwIGkxOG49XCJtZWFuaW5nfGRlc2NyaXB0aW9uXCI+e0lDVSBtZXNzYWdlfTwvcD5gIHdvdWxkIHByb2R1Y2UgdHdvIG1lc3NhZ2VzOlxuICAgKiAtIG9uZSBmb3IgdGhlIDxwPiBjb250ZW50IHdpdGggbWVhbmluZyBhbmQgZGVzY3JpcHRpb24sXG4gICAqIC0gYW5vdGhlciBvbmUgZm9yIHRoZSBJQ1UgbWVzc2FnZS5cbiAgICpcbiAgICogSW4gdGhpcyBjYXNlIHRoZSBsYXN0IG1lc3NhZ2UgaXMgZGlzY2FyZGVkIGFzIGl0IGNvbnRhaW5zIGxlc3MgaW5mb3JtYXRpb24gKHRoZSBBU1QgaXNcbiAgICogb3RoZXJ3aXNlIGlkZW50aWNhbCkuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB3ZSBzaG91bGQgc3RpbGwga2VlcCBtZXNzYWdlcyBleHRyYWN0ZWQgZnJvbSBhdHRyaWJ1dGVzIGluc2lkZSB0aGUgc2VjdGlvbiAoaWUgaW4gdGhlXG4gICAqIElDVSBtZXNzYWdlIGhlcmUpXG4gICAqL1xuICBwcml2YXRlIF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb24obm9kZTogaHRtbC5Ob2RlLCBkaXJlY3RDaGlsZHJlbjogaHRtbC5Ob2RlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5leHBlY3RlZCBzZWN0aW9uIGVuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0O1xuICAgIGNvbnN0IHNpZ25pZmljYW50Q2hpbGRyZW46IG51bWJlciA9IGRpcmVjdENoaWxkcmVuLnJlZHVjZShcbiAgICAgIChjb3VudDogbnVtYmVyLCBuOiBodG1sLk5vZGUpOiBudW1iZXIgPT4gY291bnQgKyAobiBpbnN0YW5jZW9mIGh0bWwuQ29tbWVudCA/IDAgOiAxKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgaWYgKHNpZ25pZmljYW50Q2hpbGRyZW4gPT09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnRJbmRleCE7IGktLSkge1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLm1lc3NhZ2VzW2ldLm5vZGVzO1xuICAgICAgICBpZiAoIShhc3QubGVuZ3RoID09PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGkxOG4uVGV4dCkpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydEVycm9yKG5vZGU6IGh0bWwuTm9kZSwgbXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbXNnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0STE4bkF0dHIocDogaHRtbC5FbGVtZW50KTogaHRtbC5BdHRyaWJ1dGUgfCBudWxsIHtcbiAgcmV0dXJuIHAuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gX0kxOE5fQVRUUikgfHwgbnVsbDtcbn1cbiIsImltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIExPQ0FMRV9JRCxcbiAgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gIE9wdGlvbmFsLFxuICBUUkFOU0xBVElPTlMsXG4gIFRSQU5TTEFUSU9OU19GT1JNQVRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7eGxpZmZEaWdlc3QsIHhsaWZmTG9hZFRvSTE4bn0gZnJvbSBcIi4vc2VyaWFsaXplcnMveGxpZmZcIjtcbmltcG9ydCB7eGxpZmYyRGlnZXN0LCB4bGlmZjJMb2FkVG9JMThufSBmcm9tIFwiLi9zZXJpYWxpemVycy94bGlmZjJcIjtcbmltcG9ydCB7eHRiRGlnZXN0LCB4dGJMb2FkVG9JMThuLCB4dGJNYXBwZXJ9IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3h0YlwiO1xuaW1wb3J0IHtIdG1sUGFyc2VyLCBUcmFuc2xhdGlvbkJ1bmRsZX0gZnJvbSBcIi4vcGFyc2VyL2h0bWxcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZCwgc2VyaWFsaXplTm9kZXN9IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vYXN0L2kxOG5fYXN0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJMThuIHtcbiAgKGRlZjogc3RyaW5nIHwgSTE4bkRlZiwgcGFyYW1zPzoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkRlZiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBtZWFuaW5nPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1JU1NJTkdfVFJBTlNMQVRJT05fU1RSQVRFR1kgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k+KFxuICBcIk1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5XCJcbik7XG5cbi8qKlxuICogQSBzcGVjdWxhdGl2ZSBwb2x5ZmlsbCB0byB1c2UgaTE4biBjb2RlIHRyYW5zbGF0aW9uc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05TX0ZPUk1BVCkgZm9ybWF0OiBzdHJpbmcsXG4gICAgQEluamVjdChUUkFOU0xBVElPTlMpIHRyYW5zbGF0aW9uczogc3RyaW5nLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUlTU0lOR19UUkFOU0xBVElPTl9TVFJBVEVHWSlcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nXG4gICkge1xuICAgIGxldCBsb2FkRmN0OiAoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4gSTE4bk1lc3NhZ2VzQnlJZDtcbiAgICBsZXQgZGlnZXN0OiAobWVzc2FnZTogTWVzc2FnZSkgPT4gc3RyaW5nO1xuICAgIGxldCBjcmVhdGVNYXBwZXIgPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gbnVsbDtcbiAgICBmb3JtYXQgPSAoZm9ybWF0IHx8IFwieGxmXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgXCJ4dGJcIjpcbiAgICAgICAgbG9hZEZjdCA9IHh0YkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHh0YkRpZ2VzdDtcbiAgICAgICAgY3JlYXRlTWFwcGVyID0geHRiTWFwcGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ4bGlmZjJcIjpcbiAgICAgIGNhc2UgXCJ4bGYyXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4bGlmZjJMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4bGlmZjJEaWdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInhsaWZmXCI6XG4gICAgICBjYXNlIFwieGxmXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4bGlmZkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHhsaWZmRGlnZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0cmFuc2xhdGlvbnMgZm9ybWF0ICR7Zm9ybWF0fWApO1xuICAgIH1cbiAgICBjb25zdCBodG1sUGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uc0J1bmRsZSA9IFRyYW5zbGF0aW9uQnVuZGxlLmxvYWQoXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBcImkxOG5cIixcbiAgICAgIGRpZ2VzdCxcbiAgICAgIGNyZWF0ZU1hcHBlcixcbiAgICAgIGxvYWRGY3QsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneVxuICAgICk7XG5cbiAgICAvLyB0b2RvIHVzZSBpbnRlcnBvbGF0aW9uIGNvbmZpZ1xuICAgIHJldHVybiAoZGVmOiBzdHJpbmcgfCBJMThuRGVmLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0eXBlb2YgZGVmID09PSBcInN0cmluZ1wiID8gZGVmIDogZGVmLnZhbHVlO1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgZGVmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1ldGFkYXRhW1wiaWRcIl0gPSBkZWYuaWQ7XG4gICAgICAgIG1ldGFkYXRhW1wibWVhbmluZ1wiXSA9IGRlZi5tZWFuaW5nO1xuICAgICAgICBtZXRhZGF0YVtcImRlc2NyaXB0aW9uXCJdID0gZGVmLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3QgaHRtbFBhcnNlclJlc3VsdCA9IGh0bWxQYXJzZXIucGFyc2UoY29udGVudCwgXCJcIiwgdHJ1ZSk7XG5cbiAgICAgIGlmIChodG1sUGFyc2VyUmVzdWx0LmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgaHRtbFBhcnNlclJlc3VsdC5lcnJvcnM7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lcmdlZE5vZGVzID0gaHRtbFBhcnNlci5tZXJnZVRyYW5zbGF0aW9ucyhcbiAgICAgICAgaHRtbFBhcnNlclJlc3VsdC5yb290Tm9kZXMsXG4gICAgICAgIHRyYW5zbGF0aW9uc0J1bmRsZSxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgW1wid3JhcHBlclwiXVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZU5vZGVzKG1lcmdlZE5vZGVzLnJvb3ROb2RlcywgbG9jYWxlLCBwYXJhbXMpLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRleHQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsImNoYXJzLiRFT0YiLCJjaGFycy4kTFQiLCJjaGFycy4kQkFORyIsImNoYXJzLiRMQlJBQ0tFVCIsImNoYXJzLiRNSU5VUyIsImNoYXJzLiRTTEFTSCIsImNoYXJzLiRSQlJBQ0UiLCJjaGFycy4kTEYiLCJjaGFycy4kQ1IiLCJjaGFycy4kQU1QRVJTQU5EIiwiY2hhcnMuJEhBU0giLCJjaGFycy4keCIsImNoYXJzLiRYIiwiY2hhcnMuJFNFTUlDT0xPTiIsImNoYXJzLiRSQlJBQ0tFVCIsImNoYXJzLiRHVCIsImNoYXJzLiRDT0xPTiIsImNoYXJzLmlzQXNjaWlMZXR0ZXIiLCJjaGFycy4kRVEiLCJjaGFycy4kU1EiLCJjaGFycy4kRFEiLCJjaGFycy4kTEJSQUNFIiwiY2hhcnMuJENPTU1BIiwiY2hhcnMuaXNXaGl0ZXNwYWNlIiwiY2hhcnMuJGEiLCJjaGFycy4keiIsImNoYXJzLiRBIiwiY2hhcnMuJFoiLCJjaGFycy4kMCIsImNoYXJzLiQ5IiwiY2hhcnMuaXNBc2NpaUhleERpZ2l0IiwiY2hhcnMuaXNEaWdpdCIsImxleC50b2tlbml6ZSIsImxleC5Ub2tlblR5cGUiLCJodG1sLkNvbW1lbnQiLCJodG1sLkV4cGFuc2lvbiIsImxleC5Ub2tlbiIsImh0bWwuRXhwYW5zaW9uQ2FzZSIsImh0bWwuVGV4dCIsImh0bWwuRWxlbWVudCIsImh0bWwuQXR0cmlidXRlIiwiaTE4bi5SZWN1cnNlVmlzaXRvciIsIkkxOG5TZWxlY3RQaXBlIiwiSTE4blBsdXJhbFBpcGUiLCJOZ0xvY2FsZUxvY2FsaXphdGlvbiIsInNlcmlhbGl6ZU5vZGVzIiwiU2VyaWFsaXplclZpc2l0b3IiLCJtbC52aXNpdEFsbCIsImkxOG4uVGV4dCIsImkxOG4uUGxhY2Vob2xkZXIiLCJpMThuLkNvbnRhaW5lciIsImkxOG4uSWN1IiwiX1BMQUNFSE9MREVSX1RBRyIsIl9TT1VSQ0VfVEFHIiwiX1RBUkdFVF9UQUciLCJfVU5JVF9UQUciLCJYbWxUb0kxOG4iLCJUb2tlbiIsIlRva2VuVHlwZSIsImNoYXJzLiRTUEFDRSIsImNoYXJzLiRQRVJJT0QiLCJjaGFycy4kTFBBUkVOIiwiY2hhcnMuJFJQQVJFTiIsImNoYXJzLiRQTFVTIiwiY2hhcnMuJFNUQVIiLCJjaGFycy4kUEVSQ0VOVCIsImNoYXJzLiRDQVJFVCIsImNoYXJzLiRRVUVTVElPTiIsImNoYXJzLiRCQVIiLCJjaGFycy4kTkJTUCIsImNoYXJzLiRCQUNLU0xBU0giLCJjaGFycy4kdSIsImNoYXJzLiRfIiwiY2hhcnMuJCQiLCJjaGFycy4kZSIsImNoYXJzLiRFIiwiY2hhcnMuJEJUIiwiY2hhcnMuJG4iLCJjaGFycy4kZiIsImNoYXJzLiRGRiIsImNoYXJzLiRyIiwiY2hhcnMuJHQiLCJjaGFycy4kVEFCIiwiY2hhcnMuJHYiLCJjaGFycy4kVlRBQiIsIlBhcnNlciIsImh0bWwudmlzaXRBbGwiLCJpMThuLk1lc3NhZ2UiLCJpMThuLlRhZ1BsYWNlaG9sZGVyIiwiaTE4bi5JY3VQbGFjZWhvbGRlciIsIlZpc2l0b3IiLCJNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSIsIkluamVjdGlvblRva2VuIiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlRSQU5TTEFUSU9OU19GT1JNQVQiLCJUUkFOU0xBVElPTlMiLCJMT0NBTEVfSUQiLCJPcHRpb25hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztTQUNwQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUUvRSx1QkFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7QUFFRCxvQkFxRnVCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUks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QU8scUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBTyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQU8scUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBTyxxQkFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLElBQU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFPLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQU8scUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUU1QixJQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsSUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLElBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsSUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFckIsSUFBTyxxQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLElBQU8scUJBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM3QixJQUFPLHFCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIsSUFBTyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixJQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsSUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixJQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixJQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixJQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFFdEIsSUFBTyxxQkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzNCLElBQU8scUJBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUN4QixJQUFPLHFCQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDM0IsSUFBTyxxQkFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBRXpCLElBSU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQzs7Ozs7QUFFdEIsMEJBQTZCLElBQVk7UUFDdkMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDO0tBQzNEOzs7OztBQUVELHFCQUF3QixJQUFZO1FBQ2xDLE9BQU8sRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0tBQ2pDOzs7OztBQUVELDJCQUE4QixJQUFZO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7S0FDakU7Ozs7O0FBRUQsNkJBQWdDLElBQVk7UUFDMUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RELHlCQUE0QixXQUFtQjtRQUM3QyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM1QjtRQUVELHFCQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvQyxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUF1QixXQUFXLHFDQUErQixDQUFDLENBQUM7U0FDcEY7UUFFRCxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5RTs7Ozs7QUFHRCwyQkFBOEIsT0FBZTtRQUMzQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFjLENBQUM7S0FDbkQ7Ozs7O0FBY0QseUJBQTRCLFFBQXVCO1FBQ2pELE9BQU8sUUFBUSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVEOzs7Ozs7QUFFRCw0QkFBK0IsTUFBYyxFQUFFLFNBQWlCO1FBQzlELE9BQU8sTUFBTSxHQUFHLE1BQUksTUFBTSxTQUFJLFNBQVcsR0FBRyxTQUFTLENBQUM7S0FDdkQ7Ozs7OztBQVFELElBQU8scUJBQU0sY0FBYyxHQUEwQjtRQUNuRCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTyxFQUFFLFFBQVE7UUFDakIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixLQUFLLEVBQUUsUUFBUTtRQUNmLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEdBQUcsRUFBRSxRQUFRO1FBQ2IsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixFQUFFLEVBQUUsUUFBUTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLFFBQVE7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEtBQUssRUFBRSxRQUFRO1FBQ2YsRUFBRSxFQUFFLFFBQVE7UUFDWixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsUUFBUTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVB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