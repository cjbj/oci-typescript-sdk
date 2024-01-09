/**
 *
 *
 * OpenAPI spec version: 20180917
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcemanager/GetJobLogs.ts.html |here} to see how to use GetJobLogsRequest.
 */
export interface GetJobLogsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the job.
   */
  "jobId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter that returns only logs of a specified type.
   *
   */
  "type"?: Array<model.LogEntry.Type>;
  /**
   * A filter that returns only log entries that match a given severity level or greater.
   *
   */
  "levelGreaterThanOrEqualTo"?: string;
  /**
   * The sort order to use when sorting returned resources. Ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: GetJobLogsRequest.SortOrder;
  /**
   * The number of items returned in a paginated `List` call. For information about pagination, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the preceding `List` call.
   * For information about pagination, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * Time stamp specifying the lower time limit for which logs are returned in a query.
   * Format is defined by RFC3339.
   * Example: `2020-01-01T12:00:00.000Z`
   *
   */
  "timestampGreaterThanOrEqualTo"?: Date;
  /**
   * Time stamp specifying the upper time limit for which logs are returned in a query.
   * Format is defined by RFC3339.
   * Example: `2020-02-01T12:00:00.000Z`
   *
   */
  "timestampLessThanOrEqualTo"?: Date;
}

export namespace GetJobLogsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
