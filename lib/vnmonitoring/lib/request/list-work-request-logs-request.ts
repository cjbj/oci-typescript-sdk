/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/vnmonitoring/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogsRequest.
 */
export interface ListWorkRequestLogsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   */
  "workRequestId": string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 50}
* 
 */
  "limit"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListWorkRequestLogsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. The default order for {@code timeCreated} is descending.
   *
   */
  "sortBy"?: ListWorkRequestLogsRequest.SortBy;
}

export namespace ListWorkRequestLogsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated"
  }
}
