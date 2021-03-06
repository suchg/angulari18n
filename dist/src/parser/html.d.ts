import * as html from "../ast/ast";
import * as i18n from "../ast/i18n_ast";
import { I18nError } from "../ast/parse_util";
import { InterpolationConfig } from "../ast/interpolation_config";
import { Parser, ParseTreeResult } from "../ast/parser";
import { I18nMessagesById, PlaceholderMapper } from "../serializers/serializer";
import { MissingTranslationStrategy } from "@angular/core";
export interface MessageMetadata {
    meaning?: string;
    description?: string;
    id?: string;
}
export declare class HtmlParser extends Parser {
    private interpolationConfig;
    constructor(interpolationConfig?: InterpolationConfig);
    parse(source: string, url: string, parseExpansionForms?: boolean): ParseTreeResult;
    /**
     * Extract translatable messages from an html AST
     */
    extractMessages(nodes: html.Node[]): ExtractionResult;
    mergeTranslations(nodes: html.Node[], translations: TranslationBundle, params: {
        [key: string]: any;
    }, metadata?: MessageMetadata, implicitTags?: string[]): ParseTreeResult;
}
export declare class ExtractionResult {
    messages: i18n.Message[];
    errors: I18nError[];
    constructor(messages: i18n.Message[], errors: I18nError[]);
}
/**
 * A container for translated messages
 */
export declare class TranslationBundle {
    private i18nNodesByMsgId;
    digest: (m: i18n.Message) => string;
    mapperFactory: (m: i18n.Message) => PlaceholderMapper;
    private i18nToHtml;
    constructor(i18nNodesByMsgId: {
        [msgId: string]: i18n.Node[];
    }, digest: (m: i18n.Message) => string, interpolationConfig: InterpolationConfig, missingTranslationStrategy: MissingTranslationStrategy, mapperFactory?: (m: i18n.Message) => PlaceholderMapper, console?: Console);
    static load(content: string, url: string, digest: (message: i18n.Message) => string, createNameMapper: (message: i18n.Message) => PlaceholderMapper | null, loadFct: (content: string, url: string) => I18nMessagesById, missingTranslationStrategy: MissingTranslationStrategy, interpolationConfig?: InterpolationConfig): TranslationBundle;
    get(srcMsg: i18n.Message, params: any): html.Node[];
    has(srcMsg: i18n.Message): boolean;
}
