/**
 *
 *
 * OpenAPI spec version: 20210731
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dashboardservice/ListDashboardGroups.ts.html |here} to see how to use ListDashboardGroupsRequest.
 */
export interface ListDashboardGroupsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter that returns dashboard groups that match the lifecycle state specified.
   */
  "lifecycleState"?: string;
  /**
   * A case-sensitive filter that returns resources that match the entire display name specified.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the dashboard group.
   */
  "id"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This value is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`).
   * Default order for TIMECREATED is descending.
   * Default order for DISPLAYNAME is ascending.
   * The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListDashboardGroupsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * To identify if the call is cross-regional. In CRUD calls for a resource, to
   * identify that the call originates from different region, set the
   * `CrossRegionIdentifierHeader` parameter to a region name (ex - `US-ASHBURN-1`)
   * The call will be served from a Replicated bucket.
   * For same-region calls, the value is unassigned.
   *
   */
  "opcCrossRegion"?: string;
}

export namespace ListDashboardGroupsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
