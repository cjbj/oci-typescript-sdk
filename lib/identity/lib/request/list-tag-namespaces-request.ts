/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/identity/ListTagNamespaces.ts.html |here} to see how to use ListTagNamespacesRequest.
 */
export interface ListTagNamespacesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment (remember that the tenancy is simply the root compartment).
   *
   */
  "compartmentId": string;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * An optional boolean parameter indicating whether to retrieve all tag namespaces in subcompartments. If this
   * parameter is not specified, only the tag namespaces defined in the specified compartment are retrieved.
   *
   */
  "includeSubcompartments"?: boolean;
  /**
   * A filter to only return resources that match the given lifecycle state.  The state value is case-insensitive.
   *
   */
  "lifecycleState"?: string;
}
