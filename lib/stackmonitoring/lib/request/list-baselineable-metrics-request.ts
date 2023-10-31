/**
 *
 *
 * OpenAPI spec version: 20210330
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/stackmonitoring/ListBaselineableMetrics.ts.html |here} to see how to use ListBaselineableMetricsRequest.
 */
export interface ListBaselineableMetricsRequest extends common.BaseRequest {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Resource Group
   */
  "resourceGroup"?: string;
  /**
   * Metric Name
   */
  "name"?: string;
  /**
   * A filter to return monitored resource types that has the matching namespace.
   *
   */
  "metricNamespace"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a
   * paginated \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the
   * previous \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The ID of the compartment in which data is listed.
   */
  "compartmentId"?: string;
  /**
   * Identifier for the metric
   */
  "baselineableMetricId"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order is ascending.
   *
   */
  "sortBy"?: ListBaselineableMetricsRequest.SortBy;
}

export namespace ListBaselineableMetricsRequest {
  export enum SortBy {
    Name = "name",
    Namespace = "namespace",
    ResourceGroup = "resourceGroup"
  }
}
