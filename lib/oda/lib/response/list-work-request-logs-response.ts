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

export interface ListWorkRequestLogsResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * When you are paging through a list, if this header appears in the response,
   * then there might be additional items still to get. Include this value as the
   * `page` query parameter for the subsequent GET request.
   *
   */
  "opcNextPage": string;
  /**
   * The total number of results that match the query.
   *
   */
  "opcTotalItems": number;
  /**
   * A list of WorkRequestLogEntry instances.
   */
  "items": model.WorkRequestLogEntry[];
}
