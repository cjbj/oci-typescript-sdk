/**
 *
 *
 * OpenAPI spec version: 20200407
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/goldengate/UpdateDatabaseRegistration.ts.html |here} to see how to use UpdateDatabaseRegistrationRequest.
 */
export interface UpdateDatabaseRegistrationRequest extends common.BaseRequest {
  /**
   * A unique DatabaseRegistration identifier.
   *
   */
  "databaseRegistrationId": string;
  /**
   * The new DatabaseRegistration specifications to apply.
   *
   */
  "updateDatabaseRegistrationDetails": model.UpdateDatabaseRegistrationDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the
   * `if-match` parameter to the value of the etag from a previous GET or POST response for that
   * resource.  The resource is updated or deleted only if the etag you provide matches the
   * resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
}
