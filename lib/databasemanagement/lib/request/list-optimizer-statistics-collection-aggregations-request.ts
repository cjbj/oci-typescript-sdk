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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/ListOptimizerStatisticsCollectionAggregations.ts.html |here} to see how to use ListOptimizerStatisticsCollectionAggregationsRequest.
 */
export interface ListOptimizerStatisticsCollectionAggregationsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * The optimizer statistics tasks grouped by type.
   */
  "groupType": model.OptimizerStatisticsGroupByTypes;
  /**
   * The start time of the time range to retrieve the optimizer statistics of a Managed Database
   * in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   *
   */
  "startTimeGreaterThanOrEqualTo"?: string;
  /**
   * The end time of the time range to retrieve the optimizer statistics of a Managed Database
   * in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   *
   */
  "endTimeLessThanOrEqualTo"?: string;
  /**
   * The filter types of the optimizer statistics tasks.
   */
  "taskType"?: model.OptimizerStatisticsTaskFilterTypes;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of records returned in the paginated response.
   */
  "limit"?: number;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
}
