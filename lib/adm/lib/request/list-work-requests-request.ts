/**
 *
 *
 * OpenAPI spec version: 20220421
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/adm/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that belong to the specified compartment identifier.
   */
  "compartmentId"?: string;
  /**
   * The identifier of the asynchronous work request.
   */
  "workRequestId"?: string;
  /**
   * A filter to return only resources that match the specified OperationStatus.
   */
  "status"?: model.OperationStatus;
  /**
   * The Oracle Cloud Identifier ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the resource affected by the work request.
   */
  "resourceId"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field used to sort WorkRequests. Only one sort order is allowed. Default order for _timeAccepted_ is **descending**.
   *
   */
  "sortBy"?: ListWorkRequestsRequest.SortBy;
}

export namespace ListWorkRequestsRequest {
  export enum SortBy {
    TimeAccepted = "timeAccepted"
  }
}
