/**
 *
 *
 * OpenAPI spec version: 20221109
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

export interface CreateProjectResponse {
  /**
   * The full URI of the resource related to the request
   *
   */
  "contentLocation": string;
  /**
   * The full URI of the resource related to the request
   *
   */
  "location": string;
  /**
   * For optimistic concurrency control. See `if-match`.
   *
   */
  "etag": string;
  /**
   * A unique Oracle-assigned identifier for the asynchronous request. You can use this to query status of the asynchronous operation.
   *
   */
  "opcWorkRequestId": string;
  /**
   * A unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The returned model.Project instance.
   */
  "project": model.Project;
}
