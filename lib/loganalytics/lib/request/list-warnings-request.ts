/**
 *
 *
 * OpenAPI spec version: 20200601
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListWarnings.ts.html |here} to see how to use ListWarningsRequest.
 */
export interface ListWarningsRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The warning state used for filtering.  A value of SUPPRESSED will return only
   * suppressed warnings, a value of UNSUPPRESSED will return only unsuppressed
   * warnings, and a value of ALL will return all warnings regardless of their
   * suppression state.  Default is UNSUPPRESSED.
   *
   */
  "warningState"?: ListWarningsRequest.WarningState;
  /**
   * The source name.
   */
  "sourceName"?: string;
  /**
   * The source pattern used for filtering.  Only warnings associated with a source with the
   * specified pattern will be returned.
   *
   */
  "sourcePattern"?: string;
  /**
   * warning message query parameter
   */
  "warningMessage"?: string;
  /**
   * The entity name used for filtering.  Only warnings associated with an entity with the
   * specified name will be returned.
   *
   */
  "entityName"?: string;
  /**
   * The entity type used for filtering.  Only associations on an entity with the
   * specified type will be returned.
   *
   */
  "entityType"?: string;
  /**
   * The warning type query parameter.
   */
  "warningType"?: string;
  /**
   * A flag indicating whether to filter warnings based on source display name or on warning level.
   * A value of true will filter based on warning level (rule, source, or pattern), while a
   * value of false will filter based on source display name.
   *
   */
  "isNoSource"?: boolean;
  /**
   * The warning start date query parameter.
   */
  "startTime"?: string;
  /**
   * The warning end date query parameter.
   */
  "endTime"?: string;
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
  "sortOrder"?: ListWarningsRequest.SortOrder;
  /**
   * The attribute used to sort the returned warnings
   */
  "sortBy"?: ListWarningsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListWarningsRequest {
  export enum WarningState {
    All = "ALL",
    Suppressed = "SUPPRESSED",
    Unsuppressed = "UNSUPPRESSED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    EntityType = "EntityType",
    SourceName = "SourceName",
    PatternText = "PatternText",
    FirstReported = "FirstReported",
    WarningMessage = "WarningMessage",
    Host = "Host",
    EntityName = "EntityName",
    InitialWarningDate = "InitialWarningDate"
  }
}
