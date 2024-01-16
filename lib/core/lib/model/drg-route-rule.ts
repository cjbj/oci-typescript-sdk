/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

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
 * A DRG route rule is a mapping between a destination IP address range and a DRG attachment.
 * The map is used to route matching packets. Traffic will be routed across the attachments using Equal-cost multi-path routing (ECMP)
 * if there are multiple rules with identical destinations and none of the rules conflict.
 *
 */
export interface DrgRouteRule {
  /**
    * Represents the range of IP addresses to match against when routing traffic.
* <p>
Potential values:
*   * An IP address range (IPv4 or IPv6) in CIDR notation. For example: {@code 192.168.1.0/24}
*   or {@code 2001:0db8:0123:45::/56}.
*   * When you're setting up a security rule for traffic destined for a particular {@code Service} through
*   a service gateway, this is the {@code cidrBlock} value associated with that {@link Service}. For example: {@code oci-phx-objectstorage}.
* 
    */
  "destination": string;
  /**
    * The type of destination for the rule.
* <p>
Allowed values:
* <p>
  * {@code CIDR_BLOCK}: If the rule's {@code destination} is an IP address range in CIDR notation.
*   * {@code SERVICE_CIDR_BLOCK}: If the rule's {@code destination} is the {@code cidrBlock} value for a
*     {@link Service} (the rule is for traffic destined for a
*     particular {@code Service} through a service gateway).
* 
    */
  "destinationType": DrgRouteRule.DestinationType;
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the next hop DRG attachment responsible
* for reaching the network destination.
* <p>
A value of {@code BLACKHOLE} means traffic for this route is discarded without notification.
* 
    */
  "nextHopDrgAttachmentId": string;
  /**
   * You can specify static routes for the DRG route table using the API.
   * The DRG learns dynamic routes from the DRG attachments using various routing protocols.
   *
   */
  "routeType"?: DrgRouteRule.RouteType;
  /**
   * Indicates that the route was not imported due to a conflict between route rules.
   *
   */
  "isConflict"?: boolean;
  /**
   * Indicates that if the next hop attachment does not exist, so traffic for this route is discarded without notification.
   *
   */
  "isBlackhole"?: boolean;
  /**
   * The Oracle-assigned ID of the DRG route rule.
   *
   */
  "id": string;
  /**
    * The earliest origin of a route. If a route is advertised to a DRG through an IPsec tunnel attachment,
* and is propagated to peered DRGs via RPC attachments, the route's provenance in the peered DRGs remains {@code IPSEC_TUNNEL},
* because that is the earliest origin.
* <p>
No routes with a provenance {@code IPSEC_TUNNEL} or {@code VIRTUAL_CIRCUIT} will be exported to IPsec tunnel or virtual circuit attachments,
* regardless of the attachment's export distribution.
* 
    */
  "routeProvenance": DrgRouteRule.RouteProvenance;
  /**
   * Additional properties for the route, computed by the service.
   *
   */
  "attributes"?: any;
}

export namespace DrgRouteRule {
  export enum DestinationType {
    CidrBlock = "CIDR_BLOCK",
    ServiceCidrBlock = "SERVICE_CIDR_BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RouteType {
    Static = "STATIC",
    Dynamic = "DYNAMIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RouteProvenance {
    Static = "STATIC",
    Vcn = "VCN",
    VirtualCircuit = "VIRTUAL_CIRCUIT",
    IpsecTunnel = "IPSEC_TUNNEL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DrgRouteRule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgRouteRule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
