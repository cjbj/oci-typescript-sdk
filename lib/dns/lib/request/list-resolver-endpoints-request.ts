/**
 *
 *
 * OpenAPI spec version: 20180115
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dns/ListResolverEndpoints.ts.html |here} to see how to use ListResolverEndpointsRequest.
 */
export interface ListResolverEndpointsRequest extends common.BaseRequest {
  /**
   * The OCID of the target resolver.
   */
  "resolverId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The name of a resource.
   */
  "name"?: string;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a page of the collection.
   *
   */
  "limit"?: number;
  /**
   * The order to sort the resources.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field by which to sort resolver endpoints.
   */
  "sortBy"?: ListResolverEndpointsRequest.SortBy;
  /**
   * The state of a resource.
   */
  "lifecycleState"?: string;
  /**
   * Specifies to operate only on resources that have a matching DNS scope.
   *
   */
  "scope"?: model.Scope;
}

export namespace ListResolverEndpointsRequest {
  export enum SortBy {
    Name = "name",
    TimeCreated = "timeCreated"
  }
}
