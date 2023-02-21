/**
 *
 *
 * OpenAPI spec version: 20210101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aianomalydetection/CreateDetectAnomalyJob.ts.html |here} to see how to use CreateDetectAnomalyJobRequest.
 */
export interface CreateDetectAnomalyJobRequest extends common.BaseRequest {
  /**
   * The input is either:
   *   - JSON object in the request. This object is defined, and the SDK generates the
   *     object for it.
   *   - Data embedded as Base64 string in format of either:
   *     - CSV
   *     - JSON
   *     If this option is used, then you must provide the content of specified
   *     CSV or JSON in Base64 encoded string. The Embedded JSON has to be
   *     in the same format as the inline request JSON.
   *
   */
  "createDetectAnomalyJobDetails": model.CreateDetectAnomalyJobDetails;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
}
