/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/GetQueryResult.ts.html |here} to see how to use GetQueryResultRequest.
 */
export interface GetQueryResultRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * Work Request Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the asynchronous request.
   */
  "workRequestId": string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * Maximum number of results to return in this request.  Note a limit=-1 returns all results from pageId onwards up to maxtotalCount.
   */
  "limit"?: number;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Include columns in response
   */
  "shouldIncludeColumns"?: boolean;
  /**
   * Include fields in response
   */
  "shouldIncludeFields"?: boolean;
  /**
   * Specifies the format for the returned results.
   */
  "outputMode"?: GetQueryResultRequest.OutputMode;
}

export namespace GetQueryResultRequest {
  export enum OutputMode {
    JsonRows = "JSON_ROWS"
  }
}
