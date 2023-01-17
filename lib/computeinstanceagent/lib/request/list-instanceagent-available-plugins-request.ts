/**
 *
 *
 * OpenAPI spec version: 20180530
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/computeinstanceagent/ListInstanceagentAvailablePlugins.ts.html |here} to see how to use ListInstanceagentAvailablePluginsRequest.
 */
export interface ListInstanceagentAvailablePluginsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The OS for which the plugin is supported.
   * Examples of OperatingSystemQueryParam:OperatingSystemVersionQueryParam are as follows:
   * 'CentOS' '6.10' , 'CentOS Linux' '7', 'CentOS Linux' '8',
   * 'Oracle Linux Server' '6.10', 'Oracle Linux Server' '8.0',
   * 'Red Hat Enterprise Linux Server' '7.8',
   * 'Windows' '10', 'Windows' '2008ServerR2', 'Windows' '2012ServerR2', 'Windows' '7', 'Windows' '8.1'
   *
   */
  "osName": string;
  /**
   * The OS version for which the plugin is supported.
   */
  "osVersion": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a paginated
   * \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`). Default order for
   * `TIMECREATED` is descending.
   * <p>
   **Note:** In general, some \"List\" operations (for example, `ListInstances`) let you
   * optionally filter by availability domain if the scope of the resource type is within a
   * single availability domain. If you call one of these \"List\" operations without specifying
   * an availability domain, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListInstanceagentAvailablePluginsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). The `DISPLAYNAME` sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListInstanceagentAvailablePluginsRequest.SortOrder;
  /**
   * The plugin name
   */
  "name"?: string;
}

export namespace ListInstanceagentAvailablePluginsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
