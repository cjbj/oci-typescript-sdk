/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/DownloadMaskingPolicy.ts.html |here} to see how to use DownloadMaskingPolicyRequest.
 */
export interface DownloadMaskingPolicyRequest extends common.BaseRequest {
  /**
   * The OCID of the masking policy.
   */
  "maskingPolicyId": string;
  /**
   * Details to download a masking policy file.
   */
  "downloadMaskingPolicyDetails": model.DownloadMaskingPolicyDetails;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}
