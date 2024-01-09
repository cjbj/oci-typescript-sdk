/**
 *
 *
 * OpenAPI spec version: 20190501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apigateway/ChangeApiCompartment.ts.html |here} to see how to use ChangeApiCompartmentRequest.
 */
export interface ChangeApiCompartmentRequest extends common.BaseRequest {
  /**
   * The ocid of the API.
   */
  "apiId": string;
  /**
   * Details of the target compartment.
   */
  "changeApiCompartmentDetails": model.ChangeApiCompartmentDetails;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call
   * for a resource, set the `if-match` parameter to the value of the
   * etag from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the etag you
   * provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The client request id for tracing.
   */
  "opcRequestId"?: string;
}
