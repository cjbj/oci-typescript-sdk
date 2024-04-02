/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
 * Configuration details to update a network load balancer.
 * <p>
 **Caution:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface UpdateNetworkLoadBalancerDetails {
  /**
    * The user-friendly display name for the network load balancer, which does not have to be unique and can be changed.
* Avoid entering confidential information.
* <p>
Example: {@code example_network_load_balancer}
* 
    */
  "displayName"?: string;
  /**
   * This parameter can be enabled only if backends are compute OCIDs. When enabled, the skipSourceDestinationCheck parameter is automatically
   * enabled on the load balancer VNIC, and packets are sent to the backend with the entire IP header intact.
   *
   */
  "isPreserveSourceDestination"?: boolean;
  /**
   * This can only be enabled when NLB is working in transparent mode with source destination header preservation enabled.
   * This removes the additional dependency from NLB backends(like Firewalls) to perform SNAT.
   *
   */
  "isSymmetricHashEnabled"?: boolean;
  /**
   * IP version associated with the NLB.
   */
  "nlbIpVersion"?: model.NlbIpVersion;
  /**
   * IPv6 subnet prefix selection. If Ipv6 subnet prefix is passed, Nlb Ipv6 Address would be assign within the cidr block. NLB has to be dual or single stack ipv6 to support this.
   */
  "subnetIpv6Cidr"?: string;
  /**
   * IPv6 address to be assigned to the network load balancer being created.
   * This IP address has to be part of one of the prefixes supported by the subnet.
   * Example: \"2607:9b80:9a0a:9a7e:abcd:ef01:2345:6789\"
   *
   */
  "assignedIpv6"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateNetworkLoadBalancerDetails {
  export function getJsonObj(obj: UpdateNetworkLoadBalancerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateNetworkLoadBalancerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
