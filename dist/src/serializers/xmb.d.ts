/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as i18n from "../ast/i18n_ast";
import * as xml from "./xml_helper";
import { PlaceholderMapper, XmlMessagesById } from "./serializer";
export declare function xmbLoadToXml(content: string): XmlMessagesById;
export declare function xmbWrite(messages: i18n.Message[], locale: string | null, existingNodes?: xml.Node[]): string;
export declare function xmbDigest(message: i18n.Message): string;
export declare function xmbMapper(message: i18n.Message): PlaceholderMapper;
export declare function digest(message: i18n.Message): string;
export declare function toPublicName(internalName: string): string;
