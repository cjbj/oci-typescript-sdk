/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
* An object that represents the action of removing a header from a response. This rule applies only to HTTP listeners.
* <p>
If the same header appears more than once in the response, the load balancer removes all occurances of the specified header.
* <p>
**Note:** The system does not distinquish between underscore and dash characters in headers. That is, it treats
* {@code example_header_name} and {@code example-header-name} as identical. Oracle recommends that you do not rely on underscore
* or dash characters to uniquely distinguish header names.
* 
*/
export interface RemoveHttpResponseHeaderRule extends model.Rule {
  /**
    * A header name that conforms to RFC 7230.
* <p>
Example: {@code example_header_name}
* 
    */
  "header": string;

  "action": string;
}

export namespace RemoveHttpResponseHeaderRule {
  export function getJsonObj(obj: RemoveHttpResponseHeaderRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Rule.getJsonObj(obj) as RemoveHttpResponseHeaderRule)),
      ...{}
    };

    return jsonObj;
  }
  export const action = "REMOVE_HTTP_RESPONSE_HEADER";
  export function getDeserializedJsonObj(
    obj: RemoveHttpResponseHeaderRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Rule.getDeserializedJsonObj(obj) as RemoveHttpResponseHeaderRule)),
      ...{}
    };

    return jsonObj;
  }
}
