/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Position and SQL Type of PL/SQL OUT parameter
 */
export interface SqlOutParamDetails {
  /**
   * Position of PL/SQL procedure OUT parameter Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "outParamPosition": number;
  /**
   * SQL Type of PL/SQL procedure OUT parameter
   */
  "outParamType": model.SqlOutParamTypes;
}

export namespace SqlOutParamDetails {
  export function getJsonObj(obj: SqlOutParamDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlOutParamDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
