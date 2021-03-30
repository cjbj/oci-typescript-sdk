/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * ExtendedFieldsValidationResult
 */
export interface ExtendedFieldsValidationResult {
  /**
   * The regular expression evaluation result of an extended field definition.
   */
  "items"?: Array<model.EfdRegexResult>;
}

export namespace ExtendedFieldsValidationResult {
  export function getJsonObj(obj: ExtendedFieldsValidationResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.EfdRegexResult.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
