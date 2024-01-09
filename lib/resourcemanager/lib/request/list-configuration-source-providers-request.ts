/**
 *
 *
 * OpenAPI spec version: 20180917
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcemanager/ListConfigurationSourceProviders.ts.html |here} to see how to use ListConfigurationSourceProvidersRequest.
 */
export interface ListConfigurationSourceProvidersRequest extends common.BaseRequest {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only resources that exist in the compartment, identified by [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId"?: string;
  /**
   * A filter to return only configuration source providers that match the provided [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "configurationSourceProviderId"?: string;
  /**
   * A filter to return only resources that match the given display name exactly.
   * Use this filter to list a resource by name.
   * Requires `sortBy` set to `DISPLAYNAME`.
   * Alternatively, when you know the resource OCID, use the related Get operation.
   *
   */
  "displayName"?: string;
  /**
   * The field to use when sorting returned resources.
   * By default, `TIMECREATED` is ordered descending.
   * By default, `DISPLAYNAME` is ordered ascending. Note that you can sort only on one field.
   *
   */
  "sortBy"?: ListConfigurationSourceProvidersRequest.SortBy;
  /**
   * The sort order to use when sorting returned resources. Ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListConfigurationSourceProvidersRequest.SortOrder;
  /**
   * The number of items returned in a paginated `List` call. For information about pagination, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the preceding `List` call.
   * For information about pagination, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * A filter to return only configuration source providers of the specified type (GitHub or GitLab).
   *
   */
  "configSourceProviderType"?: string;
}

export namespace ListConfigurationSourceProvidersRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
