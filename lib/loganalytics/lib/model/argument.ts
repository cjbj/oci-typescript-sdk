/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Generic queryString argument.
 *
 */
export interface Argument {
  "type": string;
}

export namespace Argument {
  export function getJsonObj(obj: Argument): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "LITERAL":
          return model.LiteralArgument.getJsonObj(<model.LiteralArgument>(<object>jsonObj), true);
        case "FIELD":
          return model.FieldArgument.getJsonObj(<model.FieldArgument>(<object>jsonObj), true);
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Argument): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "LITERAL":
          return model.LiteralArgument.getDeserializedJsonObj(
            <model.LiteralArgument>(<object>jsonObj),
            true
          );
        case "FIELD":
          return model.FieldArgument.getDeserializedJsonObj(
            <model.FieldArgument>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
