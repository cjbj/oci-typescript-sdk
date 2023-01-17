/**
 *
 *
 * OpenAPI spec version: 20190506
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/UpdateOdaInstanceAttachment.ts.html |here} to see how to use UpdateOdaInstanceAttachmentRequest.
 */
export interface UpdateOdaInstanceAttachmentRequest extends common.BaseRequest {
  /**
   * Unique Digital Assistant instance identifier.
   */
  "odaInstanceId": string;
  /**
   * Unique Digital Assistant instance attachment identifier.
   */
  "attachmentId": string;
  /**
   * The information to be updated.
   */
  "updateOdaInstanceAttachmentDetails": model.UpdateOdaInstanceAttachmentDetails;
  /**
   * For optimistic concurrency control in a PUT or DELETE call for
   * a Digital Assistant instance, set the `if-match` query parameter
   * to the value of the `ETAG` header from a previous GET or POST
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
}
