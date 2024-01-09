/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * Static or dynamic date range `dateRangeType`,
 * which corresponds with type-specific characteristics.
 *
 */
export interface DateRange {
  "dateRangeType": string;
}

export namespace DateRange {
  export function getJsonObj(obj: DateRange): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dateRangeType" in obj && obj.dateRangeType) {
      switch (obj.dateRangeType) {
        case "STATIC":
          return model.StaticDateRange.getJsonObj(<model.StaticDateRange>(<object>jsonObj), true);
        case "DYNAMIC":
          return model.DynamicDateRange.getJsonObj(<model.DynamicDateRange>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dateRangeType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DateRange): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dateRangeType" in obj && obj.dateRangeType) {
      switch (obj.dateRangeType) {
        case "STATIC":
          return model.StaticDateRange.getDeserializedJsonObj(
            <model.StaticDateRange>(<object>jsonObj),
            true
          );
        case "DYNAMIC":
          return model.DynamicDateRange.getDeserializedJsonObj(
            <model.DynamicDateRange>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dateRangeType}`);
      }
    }
    return jsonObj;
  }
}
