/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Details of a potential match returned from the suggest operation for the given input text.
 * by the limit parameter.
 *
 */
export interface SuggestListItem {
  /**
   * Potential string match. Matching is based on the frequency of usage within the catalog.
   */
  "suggestion"?: string;
  /**
   * The number of objects which contain this suggestion. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectCount"?: number;
}

export namespace SuggestListItem {
  export function getJsonObj(obj: SuggestListItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SuggestListItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
