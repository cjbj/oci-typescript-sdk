/**
 *
 *
 * OpenAPI spec version: 20200129
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataflow/ListApplications.ts.html |here} to see how to use ListApplicationsRequest.
 */
export interface ListApplicationsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * Unique identifier for the request. If provided, the returned request ID will include this value.
   * Otherwise, a random request ID will be generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of results to return in a paginated `List` call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` or `opc-prev-page` response header from the last `List` call
   * to sent back to server for getting the next page of results.
   *
   */
  "page"?: string;
  /**
   * The field used to sort the results. Multiple fields are not supported.
   *
   */
  "sortBy"?: ListApplicationsRequest.SortBy;
  /**
   * The ordering of results in ascending or descending order.
   *
   */
  "sortOrder"?: ListApplicationsRequest.SortOrder;
  /**
   * The query parameter for the Spark application name.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the user who created the resource.
   *
   */
  "ownerPrincipalId"?: string;
  /**
   * The displayName prefix.
   *
   */
  "displayNameStartsWith"?: string;
  /**
   * The Spark version utilized to run the application.
   *
   */
  "sparkVersion"?: string;
}

export namespace ListApplicationsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName",
    Language = "language"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
