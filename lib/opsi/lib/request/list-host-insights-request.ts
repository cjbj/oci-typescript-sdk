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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/ListHostInsights.ts.html |here} to see how to use ListHostInsightsRequest.
 */
export interface ListHostInsightsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * Optional list of host insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id"?: Array<string>;
  /**
   * Resource Status
   */
  "status"?: Array<model.ResourceStatus>;
  /**
   * Lifecycle states
   */
  "lifecycleState"?: Array<model.LifecycleState>;
  /**
   * Filter by one or more host types.
   * Possible values are CLOUD-HOST, EXTERNAL-HOST, COMANAGED-VM-HOST, COMANAGED-BM-HOST, COMANAGED-EXACS-HOST
   *
   */
  "hostType"?: Array<string>;
  /**
   * Filter by one or more platform types.
   * Supported platformType(s) for MACS-managed external host insight: [LINUX, SOLARIS, WINDOWS].
   * Supported platformType(s) for MACS-managed cloud host insight: [LINUX].
   * Supported platformType(s) for EM-managed external host insight: [LINUX, SOLARIS, SUNOS, ZLINUX, WINDOWS, AIX, HP-UX].
   *
   */
  "platformType"?: Array<ListHostInsightsRequest.PlatformType>;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Host insight list sort options. If `fields` parameter is selected, the `sortBy` parameter must be one of the fields specified.
   *
   */
  "sortBy"?: ListHostInsightsRequest.SortBy;
  /**
   * Unique Enterprise Manager bridge identifier
   */
  "enterpriseManagerBridgeId"?: string;
  /**
   * [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of exadata insight resource.
   *
   */
  "exadataInsightId"?: string;
  /**
   * A flag to search all resources within a given compartment and all sub-compartments.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListHostInsightsRequest {
  export enum PlatformType {
    Linux = "LINUX",
    Solaris = "SOLARIS",
    Sunos = "SUNOS",
    Zlinux = "ZLINUX",
    Windows = "WINDOWS",
    Aix = "AIX",
    HpUx = "HP_UX"
  }

  export enum SortBy {
    HostName = "hostName",
    HostType = "hostType"
  }
}
