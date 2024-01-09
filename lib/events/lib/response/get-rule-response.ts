/**
 *
 *
 * OpenAPI spec version: 20181201
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

export interface GetRuleResponse {
  /**
   * For optimistic concurrency control. Add this value to the `if-match` parameter
   * in a PUT or DELETE operation. The resource will be updated only if the value you
   * provide matches the `etag` on the resource.
   *
   */
  "etag": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The returned model.Rule instance.
   */
  "rule": model.Rule;
}
