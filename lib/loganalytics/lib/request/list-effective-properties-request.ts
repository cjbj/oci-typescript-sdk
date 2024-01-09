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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListEffectiveProperties.ts.html |here} to see how to use ListEffectivePropertiesRequest.
 */
export interface ListEffectivePropertiesRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The agent ocid.
   *
   */
  "agentId"?: string;
  /**
   * The source name.
   */
  "sourceName"?: string;
  /**
   * The include pattern flag.
   *
   */
  "isIncludePatterns"?: boolean;
  /**
   * The entity ocid.
   *
   */
  "entityId"?: string;
  /**
   * The pattern id.
   *
   */
  "patternId"?: number;
  /**
   * The property name used for filtering.
   *
   */
  "name"?: string;
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
  "sortOrder"?: ListEffectivePropertiesRequest.SortOrder;
  /**
   * The attribute used to sort the returned properties
   */
  "sortBy"?: ListEffectivePropertiesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListEffectivePropertiesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "name",
    DisplayName = "displayName"
  }
}
