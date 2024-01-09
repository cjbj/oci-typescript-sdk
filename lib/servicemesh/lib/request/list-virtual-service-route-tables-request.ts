/**
 *
 *
 * OpenAPI spec version: 20220615
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/servicemesh/ListVirtualServiceRouteTables.ts.html |here} to see how to use ListVirtualServiceRouteTablesRequest.
 */
export interface ListVirtualServiceRouteTablesRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources that match the entire name given.
   */
  "name"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for 'timeCreated' is descending. Default order for 'name' is ascending.
   *
   */
  "sortBy"?: ListVirtualServiceRouteTablesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Unique VirtualService identifier.
   */
  "virtualServiceId"?: string;
  /**
   * Unique VirtualServiceRouteTable identifier.
   */
  "id"?: string;
  /**
   * A filter to return only resources that match the life cycle state given.
   */
  "lifecycleState"?: string;
}

export namespace ListVirtualServiceRouteTablesRequest {
  export enum SortBy {
    Id = "id",
    TimeCreated = "timeCreated",
    Name = "name"
  }
}
