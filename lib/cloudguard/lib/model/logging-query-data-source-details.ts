/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * The information about new Logging Query of type DataSource.
 */
export interface LoggingQueryDataSourceDetails extends model.DataSourceDetails {
  /**
   * Logging Query regions
   */
  "regions"?: Array<string>;
  /**
   * The continuous query expression that is run periodically.
   */
  "query"?: string;
  /**
   * Interval in minutes that query is run periodically. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "intervalInMinutes"?: number;
  /**
   * The integer value that must be exceeded, fall below or equal to (depending on the operator), the query result to trigger an event. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "threshold"?: number;
  "queryStartTime"?: model.AbsoluteTimeStartPolicy | model.NoDelayStartPolicy;
  /**
   * Operator used in Data Soruce
   */
  "operator"?: model.LoggingQueryOperatorType;
  /**
   * Logging query type for data source (Sighting/Insight)
   */
  "loggingQueryType"?: model.LoggingQueryType;
  /**
   * The additional entities count used for data source query. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "additionalEntitiesCount"?: number;
  "loggingQueryDetails"?: model.InsightTypeLoggingQueryDetails;

  "dataSourceFeedProvider": string;
}

export namespace LoggingQueryDataSourceDetails {
  export function getJsonObj(
    obj: LoggingQueryDataSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSourceDetails.getJsonObj(obj) as LoggingQueryDataSourceDetails)),
      ...{
        "queryStartTime": obj.queryStartTime
          ? model.ContinuousQueryStartPolicy.getJsonObj(obj.queryStartTime)
          : undefined,

        "loggingQueryDetails": obj.loggingQueryDetails
          ? model.LoggingQueryDetails.getJsonObj(obj.loggingQueryDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const dataSourceFeedProvider = "LOGGINGQUERY";
  export function getDeserializedJsonObj(
    obj: LoggingQueryDataSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSourceDetails.getDeserializedJsonObj(obj) as LoggingQueryDataSourceDetails)),
      ...{
        "queryStartTime": obj.queryStartTime
          ? model.ContinuousQueryStartPolicy.getDeserializedJsonObj(obj.queryStartTime)
          : undefined,

        "loggingQueryDetails": obj.loggingQueryDetails
          ? model.LoggingQueryDetails.getDeserializedJsonObj(obj.loggingQueryDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
