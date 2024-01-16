/**
 *
 *
 * OpenAPI spec version: 20220528
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fleetsoftwareupdate/ListFsuJobs.ts.html |here} to see how to use ListFsuJobsRequest.
 */
export interface ListFsuJobsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "fsuActionId": string;
  /**
   * A filter to return only resources whose lifecycleState matches the given lifecycleState.
   *
   */
  "lifecycleState"?: model.JobLifecycleStates;
  /**
   * A filter to return only resources that match the entire display name given.
   *
   */
  "displayName"?: string;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending.
   *
   */
  "sortBy"?: ListFsuJobsRequest.SortBy;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results.
   * This must come from the {@code opc-next-page} header field of a previous response.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListFsuJobsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
