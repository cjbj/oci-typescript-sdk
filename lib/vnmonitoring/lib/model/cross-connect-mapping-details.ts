/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
* For use with Oracle Cloud Infrastructure FastConnect. Each
* {@link VirtualCircuit} runs on one or
* more cross-connects or cross-connect groups. A `CrossConnectMappingDetails`
* contains the properties for an individual cross-connect or cross-connect group
* associated with a given virtual circuit.
* <p>
The details includes information about the cross-connect or
* cross-connect group, the VLAN, and the BGP peering session.
* 
*/
export interface CrossConnectMappingDetails {
  /**
   * The key for BGP MD5 authentication. Only applicable if your system
   * requires MD5 authentication. If empty or not set (null), that
   * means you don't use BGP MD5 authentication.
   *
   */
  "bgpMd5AuthKey"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect or cross-connect group for this mapping.
   * Specified by the owner of the cross-connect or cross-connect group (the
   * customer if the customer is colocated with Oracle, or the provider if the
   * customer is connecting via provider).
   *
   */
  "crossConnectOrCrossConnectGroupId"?: string;
  /**
    * The BGP IPv4 address for the router on the other end of the BGP session from
* Oracle. Specified by the owner of that router. If the session goes from Oracle
* to a customer, this is the BGP IPv4 address of the customer's edge router. If the
* session goes from Oracle to a provider, this is the BGP IPv4 address of the
* provider's edge router. Must use a subnet mask from /28 to /31.
* <p>
There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses.
* <p>
Example: `10.0.0.18/31`
* 
    */
  "customerBgpPeeringIp"?: string;
  /**
    * The IPv4 address for Oracle's end of the BGP session. Must use a subnet mask from /28 to /31.
* If the session goes from Oracle to a customer's edge router,
* the customer specifies this information. If the session goes from Oracle to
* a provider's edge router, the provider specifies this.
* <p>
There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses.
* <p>
Example: `10.0.0.19/31`
* 
    */
  "oracleBgpPeeringIp"?: string;
  /**
    * The BGP IPv6 address for the router on the other end of the BGP session from
* Oracle. Specified by the owner of that router. If the session goes from Oracle
* to a customer, this is the BGP IPv6 address of the customer's edge router. If the
* session goes from Oracle to a provider, this is the BGP IPv6 address of the
* provider's edge router. Only subnet masks from /64 up to /127 are allowed.
* <p>
There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv6 addresses.
* <p>
Example: `2001:db8::1/64`
* 
    */
  "customerBgpPeeringIpv6"?: string;
  /**
    * The IPv6 address for Oracle's end of the BGP session. Only subnet masks from /64 up to /127 are allowed.
* If the session goes from Oracle to a customer's edge router,
* the customer specifies this information. If the session goes from Oracle to
* a provider's edge router, the provider specifies this.
* <p>
There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv6 addresses.
* <p>
Example: `2001:db8::2/64`
* 
    */
  "oracleBgpPeeringIpv6"?: string;
  /**
    * The number of the specific VLAN (on the cross-connect or cross-connect group)
* that is assigned to this virtual circuit. Specified by the owner of the cross-connect
* or cross-connect group (the customer if the customer is colocated with Oracle, or
* the provider if the customer is connecting via provider).
* <p>
Example: `200`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vlan"?: number;
  /**
   * The state of the Ipv4 BGP session.
   */
  "ipv4BgpStatus"?: CrossConnectMappingDetails.Ipv4BgpStatus;
  /**
   * The state of the Ipv6 BGP session.
   */
  "ipv6BgpStatus"?: CrossConnectMappingDetails.Ipv6BgpStatus;
  /**
   * The FastConnect device that terminates the logical connection.
   *
   */
  "ociLogicalDeviceName"?: string;
}

export namespace CrossConnectMappingDetails {
  export enum Ipv4BgpStatus {
    Up = "UP",
    Down = "DOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Ipv6BgpStatus {
    Up = "UP",
    Down = "DOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CrossConnectMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CrossConnectMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
