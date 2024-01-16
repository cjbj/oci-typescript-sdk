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
* A shape is a template that determines the total pre-provisioned bandwidth (ingress plus egress) for the
* load balancer.
* <p>
Note that the pre-provisioned maximum capacity applies to aggregated connections, not to a single client
* attempting to use the full bandwidth.
* 
*/
export interface LoadBalancerShape {
  /**
    * The name of the shape.
* <p>
Example: {@code 100Mbps}
* 
    */
  "name": string;
}

export namespace LoadBalancerShape {
  export function getJsonObj(obj: LoadBalancerShape): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LoadBalancerShape): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
