/**
 *
 *
 * OpenAPI spec version: 20210330
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/stackmonitoring/RequestMonitoredResourcesSummarizedCount.ts.html |here} to see how to use RequestMonitoredResourcesSummarizedCountRequest.
 */
export interface RequestMonitoredResourcesSummarizedCountRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which data is listed.
   */
  "compartmentId": string;
  /**
   * The field to group by. Default group by is 'resourceType'.
   *
   */
  "groupBy"?: RequestMonitoredResourcesSummarizedCountRequest.GroupBy;
  /**
   * Filter to return resource counts that match with the given licence edition.
   *
   */
  "license"?: model.LicenseType;
  /**
   * A filter to return resource counts that match exact resource type.
   */
  "resourceType"?: string;
  /**
   * If this query parameter is specified, the result is sorted by this query parameter value.
   *
   */
  "sortBy"?: RequestMonitoredResourcesSummarizedCountRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
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
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace RequestMonitoredResourcesSummarizedCountRequest {
  export enum GroupBy {
    ResourceType = "resourceType",
    License = "license",
    ParentResourceId = "parentResourceId"
  }

  export enum SortBy {
    Count = "count"
  }
}
