/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmsynthetics/GetMonitorResult.ts.html |here} to see how to use GetMonitorResultRequest.
 */
export interface GetMonitorResultRequest extends common.BaseRequest {
  /**
   * The APM domain ID the request is intended for.
   *
   */
  "apmDomainId": string;
  /**
   * The OCID of the monitor.
   */
  "monitorId": string;
  /**
   * The vantagePoint name.
   *
   */
  "vantagePoint": string;
  /**
   * The result type: har, screenshot, log, or network.
   *
   */
  "resultType": string;
  /**
   * The result content type: zip or raw.
   *
   */
  "resultContentType": string;
  /**
   * The time the object was posted.
   *
   */
  "executionTime": string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}
