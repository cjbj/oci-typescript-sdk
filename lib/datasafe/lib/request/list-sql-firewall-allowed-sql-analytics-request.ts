/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListSqlFirewallAllowedSqlAnalytics.ts.html |here} to see how to use ListSqlFirewallAllowedSqlAnalyticsRequest.
 */
export interface ListSqlFirewallAllowedSqlAnalyticsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId": string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned. Depends on the 'accessLevel' setting.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are RESTRICTED and ACCESSIBLE. Default is RESTRICTED.
   * Setting this to ACCESSIBLE returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment). When set to RESTRICTED permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListSqlFirewallAllowedSqlAnalyticsRequest.AccessLevel;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The scimQuery query parameter accepts filter expressions that use the syntax described in Section 3.2.2.2
   * of the System for Cross-Domain Identity Management (SCIM) specification, which is available
   * at [RFC3339](https://tools.ietf.org/html/draft-ietf-scim-api-12). In SCIM filtering expressions,
   * text, date, and time values must be enclosed in quotation marks, with date and time values using ISO-8601 format.
   * (Numeric and boolean values should not be quoted.)
   * <p>
   **Example:** query=(currentUser eq 'SCOTT') and (topLevel eq 'YES')
   *
   */
  "scimQuery"?: string;
  /**
   * The group by parameter to summarize the allowed SQL aggregation.
   */
  "groupBy"?: Array<ListSqlFirewallAllowedSqlAnalyticsRequest.GroupBy>;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListSqlFirewallAllowedSqlAnalyticsRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum GroupBy {
    DbUserName = "dbUserName",
    SqlLevel = "sqlLevel",
    SqlFirewallPolicyId = "sqlFirewallPolicyId",
    LifecycleState = "lifecycleState"
  }
}
