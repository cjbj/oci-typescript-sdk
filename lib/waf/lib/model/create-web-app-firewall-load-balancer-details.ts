/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * The information about new WebAppFirewallLoadBalancer.
 */
export interface CreateWebAppFirewallLoadBalancerDetails extends model.CreateWebAppFirewallDetails {
  /**
   * LoadBalancer [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) to which the WebAppFirewallPolicy is attached to.
   */
  "loadBalancerId": string;

  "backendType": string;
}

export namespace CreateWebAppFirewallLoadBalancerDetails {
  export function getJsonObj(
    obj: CreateWebAppFirewallLoadBalancerDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateWebAppFirewallDetails.getJsonObj(
            obj
          ) as CreateWebAppFirewallLoadBalancerDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const backendType = "LOAD_BALANCER";
  export function getDeserializedJsonObj(
    obj: CreateWebAppFirewallLoadBalancerDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateWebAppFirewallDetails.getDeserializedJsonObj(
            obj
          ) as CreateWebAppFirewallLoadBalancerDetails)),
      ...{}
    };

    return jsonObj;
  }
}
