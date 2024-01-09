/**
 *
 *
 * OpenAPI spec version: 20190101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datascience/GetStepArtifactContent.ts.html |here} to see how to use GetStepArtifactContentRequest.
 */
export interface GetStepArtifactContentRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the pipeline.
   */
  "pipelineId": string;
  /**
   * Unique Step identifier in a pipeline.
   */
  "stepName": string;
  /**
   * Unique Oracle assigned identifier for the request. If you need to contact Oracle about a particular request, then provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Optional byte range to fetch, as described in [RFC 7233](https://tools.ietf.org/html/rfc7232#section-2.1), section 2.1.
   * Note that only a single range of bytes is supported.
   *
   */
  "range"?: common.Range;
}
