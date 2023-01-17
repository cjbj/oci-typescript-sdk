/**
 *
 *
 * OpenAPI spec version: 20190801
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagement/ListRelatedEvents.ts.html |here} to see how to use ListRelatedEventsRequest.
 */
export interface ListRelatedEventsRequest extends common.BaseRequest {
  /**
   * Event fingerprint identifier
   */
  "eventFingerprint": string;
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
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListRelatedEventsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for id is descending.
   *
   */
  "sortBy"?: ListRelatedEventsRequest.SortBy;
  /**
   * filter event occurrence. Selecting only those last occurred before given date in ISO 8601 format
   * Example: 2017-07-14T02:40:00.000Z
   *
   */
  "latestTimestampLessThan"?: Date;
  /**
   * filter event occurrence. Selecting only those last occurred on or after given date in ISO 8601 format
   * Example: 2017-07-14T02:40:00.000Z
   *
   */
  "latestTimestampGreaterThanOrEqualTo"?: Date;
}

export namespace ListRelatedEventsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    InstanceId = "instanceId",
    Id = "id",
    EventFingerprint = "eventFingerprint"
  }
}
