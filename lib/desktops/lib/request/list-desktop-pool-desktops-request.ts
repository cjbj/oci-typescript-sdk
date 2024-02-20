/**
 *
 *
 * OpenAPI spec version: 20220618
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/desktops/ListDesktopPoolDesktops.ts.html |here} to see how to use ListDesktopPoolDesktopsRequest.
 */
export interface ListDesktopPoolDesktopsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment of the desktop pool.
   */
  "compartmentId": string;
  /**
   * The OCID of the desktop pool.
   */
  "desktopPoolId": string;
  /**
   * The name of the availability domain.
   */
  "availabilityDomain"?: string;
  /**
   * A filter to return only results with the given displayName.
   */
  "displayName"?: string;
  /**
   * A filter to return only results with the given OCID.
   */
  "id"?: string;
  /**
   * A filter to return only results with the given lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * The maximum number of results to return.
   */
  "limit"?: number;
  /**
   * A field to sort by.
   */
  "sortBy"?: ListDesktopPoolDesktopsRequest.SortBy;
  /**
   * A field to indicate the sort order.
   */
  "sortOrder"?: ListDesktopPoolDesktopsRequest.SortOrder;
  /**
   * The unique identifier of the request.
   */
  "opcRequestId"?: string;
  /**
   * For list pagination.
   */
  "page"?: string;
}

export namespace ListDesktopPoolDesktopsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
