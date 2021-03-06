/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as html from "../ast/ast";
import * as i18n from "../ast/i18n_ast";
import { I18nError } from "../ast/parse_util";
import * as xml from "./xml_helper";
export interface I18nMessagesById {
    [msgId: string]: i18n.Node[];
}
export interface XmlMessagesById {
    [id: string]: xml.Node;
}
export interface IcuContent {
    cases: {
        [value: string]: html.Node[];
    };
    expression: string;
    type: string;
}
export interface IcuContentStr {
    cases: {
        [value: string]: string;
    };
    expression: string;
    type: string;
}
/**
 * A `PlaceholderMapper` converts placeholder names from internal to serialized representation and
 * back.
 *
 * It should be used for serialization format that put constraints on the placeholder names.
 */
export interface PlaceholderMapper {
    toPublicName(internalName: string): string | null;
    toInternalName(publicName: string): string | null;
}
/**
 * A simple mapper that take a function to transform an internal name to a public name
 */
export declare class SimplePlaceholderMapper extends i18n.RecurseVisitor implements PlaceholderMapper {
    private mapName;
    private internalToPublic;
    private publicToNextId;
    private publicToInternal;
    constructor(message: i18n.Message, mapName: (name: string) => string);
    toPublicName(internalName: string): string | null;
    toInternalName(publicName: string): string | null;
    visitText(text: i18n.Text, context?: any): any;
    visitTagPlaceholder(ph: i18n.TagPlaceholder, context?: any): any;
    visitPlaceholder(ph: i18n.Placeholder, context?: any): any;
    visitIcuPlaceholder(ph: i18n.IcuPlaceholder, context?: any): any;
    private visitPlaceholderName(internalName);
}
export declare function serializeNodes(nodes: html.Node[], locale: string, params: {
    [key: string]: any;
}): string[];
export declare class HtmlToXmlParser implements html.Visitor {
    private MESSAGE_TAG;
    private errors;
    private xmlMessagesById;
    constructor(MESSAGE_TAG: string);
    parse(content: string): {
        xmlMessagesById: {
            [id: string]: xml.Node;
        };
        errors: I18nError[];
    };
    visitElement(element: html.Element, context: any): any;
    visitAttribute(attribute: html.Attribute, context: any): any;
    visitText(text: html.Text, context: any): any;
    visitComment(comment: html.Comment, context: any): any;
    visitExpansion(expansion: html.Expansion, context: any): any;
    visitExpansionCase(expansionCase: html.ExpansionCase, context: any): any;
}
