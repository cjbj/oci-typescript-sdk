/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmsynthetics/ListOnPremiseVantagePoints.ts.html |here} to see how to use ListOnPremiseVantagePointsRequest.
 */
export interface ListOnPremiseVantagePointsRequest extends common.BaseRequest {
  /**
   * The APM domain ID the request is intended for.
   *
   */
  "apmDomainId": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
 * The maximum number of results per page, or items to return in a paginated
* \"List\" call. For information on how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). Default sort order is ascending.
   *
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided.
   * Default order of displayName is ascending.
   * Default order of timeCreated and timeUpdated is descending.
   * The displayName sort by is case-sensitive.
   *
   */
  "sortBy"?: ListOnPremiseVantagePointsRequest.SortBy;
  /**
   * A filter to return only the resources that match the entire display name.
   */
  "displayName"?: string;
  /**
   * A filter to return only the resources that match the entire name.
   */
  "name"?: string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListOnPremiseVantagePointsRequest {
  export enum SortBy {
    DisplayName = "displayName",
    Name = "name",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated"
  }
}
