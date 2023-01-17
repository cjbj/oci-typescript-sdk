/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/ListFleets.ts.html |here} to see how to use ListFleetsRequest.
 */
export interface ListFleetsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to list resources.
   *
   */
  "compartmentId"?: string;
  /**
   * The ID of the Fleet.
   */
  "id"?: string;
  /**
   * The state of the lifecycle.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The display name.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort Fleets. Only one sort order may be provided.
   * Default order for _timeCreated_, _approximateJreCount_, _approximateInstallationCount_,
   * _approximateApplicationCount_ and _approximateManagedInstanceCount_  is **descending**.
   * Default order for _displayName_ is **ascending**.
   * If no value is specified _timeCreated_ is default.
   *
   */
  "sortBy"?: model.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Filter the list with displayName contains the given value.
   *
   */
  "displayNameContains"?: string;
}
