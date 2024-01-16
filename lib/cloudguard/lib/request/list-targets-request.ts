/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/ListTargets.ts.html |here} to see how to use ListTargetsRequest.
 */
export interface ListTargetsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * Default is false.
   * When set to true, only the targets that would be deleted as part of
   * security zone creation will be returned.
   *
   */
  "isNonSecurityZoneTargetsOnlyQuery"?: boolean;
  /**
   * The field life cycle state. Only one state can be provided. Default value for state is active. If no value is specified state is active.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed
   * and all compartments and subcompartments in the tenancy are
   * returned depending on the the setting of {@code accessLevel}.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are {@code RESTRICTED} and {@code ACCESSIBLE}. Default is {@code RESTRICTED}.
   * Setting this to {@code ACCESSIBLE} returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment).
   * When set to {@code RESTRICTED} permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListTargetsRequest.AccessLevel;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListTargetsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListTargetsRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
