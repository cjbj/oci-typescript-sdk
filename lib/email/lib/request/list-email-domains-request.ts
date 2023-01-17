/**
 *
 *
 * OpenAPI spec version: 20170907
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/email/ListEmailDomains.ts.html |here} to see how to use ListEmailDomainsRequest.
 */
export interface ListEmailDomainsRequest extends common.BaseRequest {
  /**
   * The OCID for the compartment.
   */
  "compartmentId": string;
  /**
   * The request ID for tracing from the system
   */
  "opcRequestId"?: string;
  /**
   * A filter to only return resources that match the given id exactly.
   *
   */
  "id"?: string;
  /**
   * A filter to only return resources that match the given name exactly.
   *
   */
  "name"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a
   * paginated \"List\" call. `1` is the minimum, `1000` is the maximum. For important details about
   * how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the opc-next-page response header from the previous \"List\" call.
   * For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending or descending order.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Filter returned list by specified lifecycle state. This parameter is case-insensitive.
   *
   */
  "lifecycleState"?: string;
  /**
 * Specifies the attribute with which to sort the email domains.
* <p>
Default: `TIMECREATED`
* <p>
* **TIMECREATED:** Sorts by timeCreated.
* * **NAME:** Sorts by name.
* * **ID:** Sorts by id.
* 
 */
  "sortBy"?: ListEmailDomainsRequest.SortBy;
}

export namespace ListEmailDomainsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Id = "ID",
    Name = "NAME"
  }
}
