/**
 *
 *
 * OpenAPI spec version: 20190506
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/ChangeOdaPrivateEndpointCompartment.ts.html |here} to see how to use ChangeOdaPrivateEndpointCompartmentRequest.
 */
export interface ChangeOdaPrivateEndpointCompartmentRequest extends common.BaseRequest {
  /**
   * Unique ODA Private Endpoint identifier which is the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "odaPrivateEndpointId": string;
  /**
   * The compartment to which the Digital Assistant instance should be moved.
   */
  "changeOdaPrivateEndpointCompartmentDetails": model.ChangeOdaPrivateEndpointCompartmentDetails;
  /**
   * For optimistic concurrency control in a PUT or DELETE call for
   * a Digital Assistant instance, set the {@code if-match} query parameter
   * to the value of the {@code ETAG} header from a previous GET or POST
   * response for that instance. The service updates or deletes the
   * instance only if the etag that you provide matches the instance's
   * current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
  /**
 * A token that uniquely identifies a request so that you can retry the request if there's
* a timeout or server error without the risk of executing that same action again.
* <p>
Retry tokens expire after 24 hours, but they can become invalid before then if there are
* conflicting operations. For example, if an instance was deleted and purged from the system,
* then the service might reject a retry of the original creation request.
* 
 */
  "opcRetryToken"?: string;
}
