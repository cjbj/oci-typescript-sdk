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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The document response for language detect call.
 */
export interface DominantLanguageDocumentResult {
  /**
   * Document unique identifier defined by the user.
   */
  "key": string;
  /**
   * List of detected languages with results sorted in descending order of the scores. Most likely language is on top.
   *
   */
  "languages": Array<model.DetectedLanguage>;
}

export namespace DominantLanguageDocumentResult {
  export function getJsonObj(obj: DominantLanguageDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "languages": obj.languages
          ? obj.languages.map(item => {
              return model.DetectedLanguage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DominantLanguageDocumentResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "languages": obj.languages
          ? obj.languages.map(item => {
              return model.DetectedLanguage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
