/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * The summary of the AWR SYSSTAT data.
 */
export interface AwrDatabaseSysstatSummary {
  /**
   * The name of the SYSSTAT.
   */
  "name": string;
  /**
   * The name of the SYSSTAT category.
   */
  "category"?: string;
  /**
   * The start time of the SYSSTAT.
   */
  "timeBegin"?: Date;
  /**
   * The end time of the SYSSTAT.
   */
  "timeEnd"?: Date;
  /**
   * The average value of the SYSSTAT. The units are stats name/val per the time period {timeBegin - timeEnd}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgValue"?: number;
  /**
   * The last value of the SYSSTAT. The units are stats name/val per the time period {timeBegin - timeEnd}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentValue"?: number;
}

export namespace AwrDatabaseSysstatSummary {
  export function getJsonObj(obj: AwrDatabaseSysstatSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDatabaseSysstatSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
