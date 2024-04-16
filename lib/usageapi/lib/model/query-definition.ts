/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the chosen dimension. The Usage API is used by the Cost Analysis and Carbon Emissions Analysis tools in the Console. See [Cost Analysis Overview](/Content/Billing/Concepts/costanalysisoverview.htm) and [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
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
 * The common fields for queries.
 */
export interface QueryDefinition {
  /**
   * The query display name. Avoid entering confidential information.
   */
  "displayName": string;
  "reportQuery": model.ReportQuery;
  "costAnalysisUI": model.CostAnalysisUI;
  /**
   * The saved query version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version": number;
}

export namespace QueryDefinition {
  export function getJsonObj(obj: QueryDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "reportQuery": obj.reportQuery ? model.ReportQuery.getJsonObj(obj.reportQuery) : undefined,
        "costAnalysisUI": obj.costAnalysisUI
          ? model.CostAnalysisUI.getJsonObj(obj.costAnalysisUI)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "reportQuery": obj.reportQuery
          ? model.ReportQuery.getDeserializedJsonObj(obj.reportQuery)
          : undefined,
        "costAnalysisUI": obj.costAnalysisUI
          ? model.CostAnalysisUI.getDeserializedJsonObj(obj.costAnalysisUI)
          : undefined
      }
    };

    return jsonObj;
  }
}
