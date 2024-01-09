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
 * Default column object representing querylanguage result columns.
 *
 */
export interface Column extends model.AbstractColumn {
  "type": string;
}

export namespace Column {
  export function getJsonObj(obj: Column, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getJsonObj(obj) as Column)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "COLUMN";
  export function getDeserializedJsonObj(obj: Column, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getDeserializedJsonObj(obj) as Column)),
      ...{}
    };

    return jsonObj;
  }
}
