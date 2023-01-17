/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListAvailableAuditVolumes.ts.html |here} to see how to use ListAvailableAuditVolumesRequest.
 */
export interface ListAvailableAuditVolumesRequest extends common.BaseRequest {
  /**
   * The OCID of the audit.
   */
  "auditProfileId": string;
  /**
   * The OCID of the work request.
   */
  "workRequestId": string;
  /**
   * The audit trail location.
   */
  "trailLocation"?: string;
  /**
   * Specifying `monthInConsiderationGreaterThan` parameter
   * will retrieve all items for which the event month is
   * greater than the date and time specified,
   * in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * <p>
   **Example:** 2016-12-19T00:00:00.000Z
   *
   */
  "monthInConsiderationGreaterThan"?: Date;
  /**
   * Specifying `monthInConsiderationLessThan` parameter
   * will retrieve all items for which the event month is
   * less than the date and time specified,
   * in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * <p>
   **Example:** 2016-12-19T00:00:00.000Z
   *
   */
  "monthInConsiderationLessThan"?: Date;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListAvailableAuditVolumesRequest.SortOrder;
  /**
   * The field to sort by. You can specify only one sort order(sortOrder). The default order for all fields is ascending.
   *
   */
  "sortBy"?: ListAvailableAuditVolumesRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListAvailableAuditVolumesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    MonthInConsideration = "monthInConsideration",
    Volume = "volume",
    TrailLocation = "trailLocation"
  }
}
