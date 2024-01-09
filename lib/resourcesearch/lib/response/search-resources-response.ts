/**
 *
 *
 * OpenAPI spec version: 20180409
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

export interface SearchResourcesResponse {
  /**
   * For pagination of a list of items. When paging through a list, if this header appears in the response, then there are additional items still to get. Include this value as the page parameter for the subsequent GET request. For information about pagination, see [ListPagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "opcNextPage": string;
  /**
   * For pagination of a list of items. When paging through a list, if this header appears in the response, then there are additional items in previous pages to get. Include this value as the page parameter for the subsequent GET request. The absence of this header indicates that you have reached the first page of the list. For more information, see [ListPagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "opcPreviousPage": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The returned model.ResourceSummaryCollection instance.
   */
  "resourceSummaryCollection": model.ResourceSummaryCollection;
}
