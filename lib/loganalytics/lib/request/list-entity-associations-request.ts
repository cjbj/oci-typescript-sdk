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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListEntityAssociations.ts.html |here} to see how to use ListEntityAssociationsRequest.
 */
export interface ListEntityAssociationsRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The log analytics entity OCID.
   *
   */
  "logAnalyticsEntityId": string;
  /**
   * Indicates whether to return direct associated entities or direct and inferred associated entities.
   *
   */
  "directOrAllAssociations"?: ListEntityAssociationsRequest.DirectOrAllAssociations;
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
  "sortOrder"?: ListEntityAssociationsRequest.SortOrder;
  /**
   * The field to sort entities by. Only one sort order may be provided. Default order for timeCreated and timeUpdated
   * is descending. Default order for entity name is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListEntityAssociationsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListEntityAssociationsRequest {
  export enum DirectOrAllAssociations {
    Direct = "DIRECT",
    All = "ALL"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    Name = "name"
  }
}
