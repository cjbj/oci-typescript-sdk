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
* The properties that define a network load balancer. For more information, see
* [Managing a network load balancer](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingloadbalancer.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, then  
* contact an administrator. If you are an administrator who writes policies to give users access, then see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about endpoints and signing API requests, see
* [About the API](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm). For information about available SDKs and tools, see
* [SDKS and Other Tools](https://docs.cloud.oracle.com/Content/API/Concepts/sdks.htm).
* 
*/
export interface CreateNetworkLoadBalancerDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the network load balancer.
   */
  "compartmentId": string;
  /**
   * Network load balancer identifier, which can be renamed.
   */
  "displayName": string;
  /**
   * This parameter can be enabled only if backends are compute OCIDs. When enabled, the skipSourceDestinationCheck parameter is automatically
   * enabled on the load balancer VNIC, and packets are sent to the backend with the entire IP header intact.
   *
   */
  "isPreserveSourceDestination"?: boolean;
  /**
   * An array of reserved Ips.
   *
   */
  "reservedIps"?: Array<model.ReservedIP>;
  /**
    * Whether the network load balancer has a virtual cloud network-local (private) IP address.
* <p>
If \"true\", then the service assigns a private IP address to the network load balancer.
* <p>
If \"false\", then the service assigns a public IP address to the network load balancer.
* <p>
A public network load balancer is accessible from the internet, depending on the
* [security list rules](https://docs.cloud.oracle.com/Content/network/Concepts/securitylists.htm) for your virtual cloud network. For more information about public and
* private network load balancers,
* see [How Network Load Balancing Works](https://docs.cloud.oracle.com/Content/Balance/Concepts/balanceoverview.htm#how-network-load-balancing-works).
* This value is true by default.
* <p>
Example: `true`
* 
    */
  "isPrivate"?: boolean;
  /**
   * The subnet in which the network load balancer is spawned [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "subnetId": string;
  /**
    * An array of network security groups [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with the network load
* balancer.
* <p>
During the creation of the network load balancer, the service adds the new load balancer to the specified network security groups.
* <p>
The benefits of associating the network load balancer with network security groups include:
* <p>
*  Network security groups define network security rules to govern ingress and egress traffic for the network load balancer.
* <p>
*  The network security rules of other resources can reference the network security groups associated with the network load balancer
*    to ensure access.
* <p>
Example: [\"ocid1.nsg.oc1.phx.unique_ID\"]
* 
    */
  "networkSecurityGroupIds"?: Array<string>;
  /**
   * IP version associated with the NLB.
   */
  "nlbIpVersion"?: model.NlbIpVersion;
  /**
   * Listeners associated with the network load balancer.
   */
  "listeners"?: { [key: string]: model.ListenerDetails };
  /**
   * Backend sets associated with the network load balancer.
   */
  "backendSets"?: { [key: string]: model.BackendSetDetails };
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateNetworkLoadBalancerDetails {
  export function getJsonObj(obj: CreateNetworkLoadBalancerDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "reservedIps": obj.reservedIps
          ? obj.reservedIps.map(item => {
              return model.ReservedIP.getJsonObj(item);
            })
          : undefined,

        "listeners": obj.listeners
          ? common.mapContainer(obj.listeners, model.ListenerDetails.getJsonObj)
          : undefined,
        "backendSets": obj.backendSets
          ? common.mapContainer(obj.backendSets, model.BackendSetDetails.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateNetworkLoadBalancerDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "reservedIps": obj.reservedIps
          ? obj.reservedIps.map(item => {
              return model.ReservedIP.getDeserializedJsonObj(item);
            })
          : undefined,

        "listeners": obj.listeners
          ? common.mapContainer(obj.listeners, model.ListenerDetails.getDeserializedJsonObj)
          : undefined,
        "backendSets": obj.backendSets
          ? common.mapContainer(obj.backendSets, model.BackendSetDetails.getDeserializedJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
