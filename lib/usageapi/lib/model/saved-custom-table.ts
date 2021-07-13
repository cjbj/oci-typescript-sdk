/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * The custom table for Cost Analysis UI rendering.
 */
export interface SavedCustomTable {
  /**
   * The name of the custom table.
   */
  "displayName": string;
  /**
   * The row groupBy key list.
   * example:
   *   `[\"tagNamespace\", \"tagKey\", \"tagValue\", \"service\", \"skuName\", \"skuPartNumber\", \"unit\",
   *     \"compartmentName\", \"compartmentPath\", \"compartmentId\", \"platform\", \"region\", \"logicalAd\",
   *     \"resourceId\", \"tenantId\", \"tenantName\"]`
   *
   */
  "rowGroupBy"?: Array<string>;
  /**
   * The column groupBy key list.
   * example:
   *   `[\"tagNamespace\", \"tagKey\", \"tagValue\", \"service\", \"skuName\", \"skuPartNumber\", \"unit\",
   *     \"compartmentName\", \"compartmentPath\", \"compartmentId\", \"platform\", \"region\", \"logicalAd\",
   *     \"resourceId\", \"tenantId\", \"tenantName\"]`
   *
   */
  "columnGroupBy"?: Array<string>;
  /**
   * GroupBy a specific tagKey. Provide the tagNamespace and tagKey in the tag object. Only one tag in the list is supported.
   * For example:
   *   `[{\"namespace\":\"oracle\", \"key\":\"createdBy\"]`
   *
   */
  "groupByTag"?: Array<model.Tag>;
  /**
   * The compartment depth level. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "compartmentDepth"?: number;
  /**
   * The version of the custom table. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
}

export namespace SavedCustomTable {
  export function getJsonObj(obj: SavedCustomTable): object {
    const jsonObj = {
      ...obj,
      ...{
        "groupByTag": obj.groupByTag
          ? obj.groupByTag.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SavedCustomTable): object {
    const jsonObj = {
      ...obj,
      ...{
        "groupByTag": obj.groupByTag
          ? obj.groupByTag.map(item => {
              return model.Tag.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
