/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Attributes to the detected language. Contains Language Name , Code, and Confidence Score.
 */
export interface DetectedLanguage {
  /**
   * Full language name.
   * Example: {@code English, Hindi, and so on}
   *
   */
  "name": string;
  /**
   * Detected language code as per [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard.
   * Example: {@code en, fr, hi etc}.
   *
   */
  "code": string;
  /**
   * Score or confidence of detected language code.
   * Example: {@code 0.9999856066867399}
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "score": number;
}

export namespace DetectedLanguage {
  export function getJsonObj(obj: DetectedLanguage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetectedLanguage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
