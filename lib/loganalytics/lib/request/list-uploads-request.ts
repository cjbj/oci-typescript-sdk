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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListUploads.ts.html |here} to see how to use ListUploadsRequest.
 */
export interface ListUploadsRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * Name of the upload container.
   */
  "name"?: string;
  /**
   * A filter to return only uploads whose name contains the given name.
   *
   */
  "nameContains"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListUploadsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeUpdated is descending.
   * Default order for name is ascending. If no value is specified timeUpdated is default.
   *
   */
  "sortBy"?: ListUploadsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Use this for filtering uploads w.r.t warnings. Only one value is allowed. If no value is specified then ALL is taken as default,
   * which means that all the uploads with and without warnings will be returned.
   *
   */
  "warningsFilter"?: ListUploadsRequest.WarningsFilter;
}

export namespace ListUploadsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeUpdated = "timeUpdated",
    TimeCreated = "timeCreated",
    Name = "name"
  }

  export enum WarningsFilter {
    WithWarnings = "WITH_WARNINGS",
    WithoutWarnings = "WITHOUT_WARNINGS",
    All = "ALL"
  }
}
