/**
 *
 *
 * OpenAPI spec version: 20220915
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/psql/UpdateDbSystemDbInstance.ts.html |here} to see how to use UpdateDbSystemDbInstanceRequest.
 */
export interface UpdateDbSystemDbInstanceRequest extends common.BaseRequest {
  /**
   * unique DbSystem identifier
   */
  "dbSystemId": string;
  /**
   * unique DbInstance identifier
   */
  "dbInstanceId": string;
  /**
   * DdInstance update parameters.
   */
  "updateDbSystemDbInstanceDetails": model.UpdateDbSystemDbInstanceDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call
   *
   */
  "ifMatch"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   *
   */
  "opcRetryToken"?: string;
}
