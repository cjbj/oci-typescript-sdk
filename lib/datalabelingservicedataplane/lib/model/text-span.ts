/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A wrapper class for offset and length, which together, represent a span of text in a text document.
 */
export interface TextSpan {
  /**
   * The offset of the selected text within the entire text. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "offset"?: number;
  /**
   * The length of the selected text. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length"?: number;
}

export namespace TextSpan {
  export function getJsonObj(obj: TextSpan): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TextSpan): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
