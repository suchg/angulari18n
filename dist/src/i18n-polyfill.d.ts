import { InjectionToken, MissingTranslationStrategy } from "@angular/core";
export interface I18n {
    (def: string | I18nDef, params?: {
        [key: string]: any;
    }): string;
}
export interface I18nDef {
    value: string;
    id?: string;
    meaning?: string;
    description?: string;
}
export declare const MISSING_TRANSLATION_STRATEGY: InjectionToken<MissingTranslationStrategy>;
/**
 * A speculative polyfill to use i18n code translations
 */
export declare class I18n {
    constructor(format: string, translations: string, locale: string, missingTranslationStrategy?: MissingTranslationStrategy);
}
