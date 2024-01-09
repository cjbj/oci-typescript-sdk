/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListScheduledTasks.ts.html |here} to see how to use ListScheduledTasksRequest.
 */
export interface ListScheduledTasksRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * Required parameter to specify schedule task type.
   */
  "taskType": model.TaskType;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * A filter to return only resources that match the given display name exactly.
   *
   */
  "displayName"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListScheduledTasksRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListScheduledTasksRequest.SortBy;
  /**
   * A filter to return only scheduled tasks whose stream action savedSearchId matches the given
   * ManagementSavedSearch id [OCID] exactly.
   *
   */
  "savedSearchId"?: string;
  /**
   * A filter to return only resources whose display name contains the substring.
   *
   */
  "displayNameContains"?: string;
}

export namespace ListScheduledTasksRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    DisplayName = "displayName"
  }
}
