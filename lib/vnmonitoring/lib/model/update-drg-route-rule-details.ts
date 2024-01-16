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
 * Details used to update a route rule in the DRG route table.
 *
 */
export interface UpdateDrgRouteRuleDetails {
  /**
   * The Oracle-assigned ID of each DRG route rule to update.
   *
   */
  "id": string;
  /**
    * The range of IP addresses used for matching when routing traffic.
* <p>
Potential values:
*   * IP address range in CIDR notation. Can be an IPv4 or IPv6 CIDR. For example: {@code 192.168.1.0/24}
*   or {@code 2001:0db8:0123:45::/56}.
* 
    */
  "destination"?: string;
  /**
   * Type of destination for the rule.
   * Allowed values:
   *   * {@code CIDR_BLOCK}: If the rule's {@code destination} is an IP address range in CIDR notation.
   *
   */
  "destinationType"?: UpdateDrgRouteRuleDetails.DestinationType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the next hop DRG attachment. The next hop DRG attachment is responsible
   * for reaching the network destination.
   *
   */
  "nextHopDrgAttachmentId"?: string;
}

export namespace UpdateDrgRouteRuleDetails {
  export enum DestinationType {
    CidrBlock = "CIDR_BLOCK"
  }

  export function getJsonObj(obj: UpdateDrgRouteRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDrgRouteRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
