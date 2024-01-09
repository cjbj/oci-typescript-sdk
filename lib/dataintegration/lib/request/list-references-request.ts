/**
 *
 *
 * OpenAPI spec version: 20200430
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataintegration/ListReferences.ts.html |here} to see how to use ListReferencesRequest.
 */
export interface ListReferencesRequest extends common.BaseRequest {
  /**
   * The workspace ID.
   */
  "workspaceId": string;
  /**
   * The application key.
   */
  "applicationKey": string;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Sets the maximum number of results per page, or items to return in a paginated `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The value for this parameter is the `opc-next-page` or the `opc-prev-page` response header from the previous `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * Specifies sort order to use, either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListReferencesRequest.SortOrder;
  /**
   * Specifies the field to sort by. Accepts only one field. By default, when you sort by time fields, results are shown in descending order. All other fields default to ascending order. Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListReferencesRequest.SortBy;
}

export namespace ListReferencesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "TIME_CREATED",
    DisplayName = "DISPLAY_NAME",
    TimeUpdated = "TIME_UPDATED"
  }
}
