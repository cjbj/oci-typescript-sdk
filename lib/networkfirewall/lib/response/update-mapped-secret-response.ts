/**
 *
 *
 * OpenAPI spec version: 20230501
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

export interface UpdateMappedSecretResponse {
  /**
   * For pagination of a list of items. When paging through a list, if this header appears in the response,
   * then a partial list might have been returned. This is to get the page counts overall.
   *
   */
  "opcPageCount": string;
  /**
   * For pagination of a list of items. This provides the count of total items across pages.
   *
   */
  "opcTotalItems": number;
  /**
   * For optimistic concurrency control. See {@code if-match}.
   *
   */
  "etag": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The returned model.MappedSecret instance.
   */
  "mappedSecret": model.MappedSecret;
}
