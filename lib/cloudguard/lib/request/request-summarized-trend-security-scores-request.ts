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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/RequestSummarizedTrendSecurityScores.ts.html |here} to see how to use RequestSummarizedTrendSecurityScoresRequest.
 */
export interface RequestSummarizedTrendSecurityScoresRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Start time for a filter. If start time is not specified, start time will be set to today's current time - 30 days.
   */
  "timeScoreComputedGreaterThanOrEqualTo"?: Date;
  /**
   * End time for a filter. If end time is not specified, end time will be set to today's current time.
   */
  "timeScoreComputedLessThanOrEqualTo"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
