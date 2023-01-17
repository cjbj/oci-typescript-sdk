/**
 *
 *
 * OpenAPI spec version: 20201101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/ListAlertLogs.ts.html |here} to see how to use ListAlertLogsRequest.
 */
export interface ListAlertLogsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * The optional greater than or equal to timestamp to filter the logs.
   */
  "timeGreaterThanOrEqualTo"?: Date;
  /**
   * The optional less than or equal to timestamp to filter the logs.
   */
  "timeLessThanOrEqualTo"?: Date;
  /**
   * The optional parameter to filter the alert logs by log level.
   */
  "levelFilter"?: ListAlertLogsRequest.LevelFilter;
  /**
   * The optional parameter to filter the attention or alert logs by type.
   */
  "typeFilter"?: ListAlertLogsRequest.TypeFilter;
  /**
   * The optional query parameter to filter the attention or alert logs by search text.
   */
  "logSearchText"?: string;
  /**
   * The flag to indicate whether the search text is regular expression or not.
   */
  "isRegularExpression"?: boolean;
  /**
   * The possible sortBy values of attention logs.
   */
  "sortBy"?: ListAlertLogsRequest.SortBy;
  /**
   * The option to sort information in ascending (\u2018ASC\u2019) or descending (\u2018DESC\u2019) order. Ascending order is the default order.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of records returned in the paginated response.
   */
  "limit"?: number;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListAlertLogsRequest {
  export enum LevelFilter {
    Critical = "CRITICAL",
    Severe = "SEVERE",
    Important = "IMPORTANT",
    Normal = "NORMAL",
    All = "ALL"
  }

  export enum TypeFilter {
    Unknown = "UNKNOWN",
    IncidentError = "INCIDENT_ERROR",
    Error = "ERROR",
    Warning = "WARNING",
    Notification = "NOTIFICATION",
    Trace = "TRACE",
    All = "ALL"
  }

  export enum SortBy {
    Level = "LEVEL",
    Type = "TYPE",
    Message = "MESSAGE",
    Timestamp = "TIMESTAMP"
  }
}
