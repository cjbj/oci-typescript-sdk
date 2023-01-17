/**
 *
 *
 * OpenAPI spec version: 20210501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubsubscription/ListSubscriptions.ts.html |here} to see how to use ListSubscriptionsRequest.
 */
export interface ListSubscriptionsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The Plan Number
   */
  "planNumber"?: string;
  /**
   * Line level Subscription Id
   */
  "subscriptionId"?: string;
  /**
   * Buyer Email Id
   */
  "buyerEmail"?: string;
  /**
   * Boolean value to decide whether commitment services will be shown
   */
  "isCommitInfoRequired"?: boolean;
  /**
 * The maximum number of items to return in a paginated \"List\" call. Default: (`50`)
* <p>
Example: `500`
* 
 */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListSubscriptionsRequest.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`).
   *
   */
  "sortBy"?: ListSubscriptionsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * This header is meant to be used only for internal purposes and will be ignored on any public request. The purpose of this header is
   * to help on Gateway to API calls identification.
   *
   */
  "xOneGatewaySubscriptionId"?: string;
  /**
   * The OCI home region name in case home region is not us-ashburn-1 (IAD), e.g. ap-mumbai-1, us-phoenix-1 etc.
   *
   */
  "xOneOriginRegion"?: string;
}

export namespace ListSubscriptionsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Timestart = "TIMESTART"
  }
}
