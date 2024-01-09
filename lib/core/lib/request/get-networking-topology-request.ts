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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/core/GetNetworkingTopology.ts.html |here} to see how to use GetNetworkingTopologyRequest.
 */
export interface GetNetworkingTopologyRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
 * Valid values are `ANY` and `ACCESSIBLE`. The default is `ANY`.
* Setting this to `ACCESSIBLE` returns only compartments for which a
* user has INSPECT permissions, either directly or indirectly (permissions can be on a
* resource in a subcompartment). A restricted set of fields is returned for compartments in which a user has
* indirect INSPECT permissions.
* <p>
When set to `ANY` permissions are not checked.
* 
 */
  "accessLevel"?: GetNetworkingTopologyRequest.AccessLevel;
  /**
   * When set to true, the hierarchy of compartments is traversed
   * and the specified compartment and its subcompartments are
   * inspected depending on the the setting of `accessLevel`.
   * Default is false.
   *
   */
  "queryCompartmentSubtree"?: boolean;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * For querying if there is a cached value on the server. The If-None-Match HTTP request header
   * makes the request conditional. For GET and HEAD methods, the server will send back the requested
   * resource, with a 200 status, only if it doesn't have an ETag matching the given ones.
   * For other methods, the request will be processed only if the eventually existing resource's
   * ETag doesn't match any of the values listed.
   *
   */
  "ifNoneMatch"?: string;
  /**
   * The Cache-Control HTTP header holds directives (instructions)
   * for caching in both requests and responses.
   *
   */
  "cacheControl"?: string;
}

export namespace GetNetworkingTopologyRequest {
  export enum AccessLevel {
    Any = "ANY",
    Accessible = "ACCESSIBLE"
  }
}
