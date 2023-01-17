/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/ListExadataInsights.ts.html |here} to see how to use ListExadataInsightsRequest.
 */
export interface ListExadataInsightsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * Unique Enterprise Manager bridge identifier
   */
  "enterpriseManagerBridgeId"?: string;
  /**
   * Optional list of Exadata insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id"?: Array<string>;
  /**
   * Resource Status
   */
  "status"?: Array<model.ResourceStatus>;
  /**
   * Lifecycle states
   */
  "lifecycleState"?: Array<model.LifecycleState>;
  /**
   * Filter by one or more Exadata types.
   * Possible value are DBMACHINE, EXACS, and EXACC.
   *
   */
  "exadataType"?: Array<string>;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Exadata insight list sort options. If `fields` parameter is selected, the `sortBy` parameter must be one of the fields specified. Default order for timeCreated is descending. Default order for exadataName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListExadataInsightsRequest.SortBy;
  /**
   * A flag to search all resources within a given compartment and all sub-compartments.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListExadataInsightsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    ExadataName = "exadataName"
  }
}
