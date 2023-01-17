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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Defines the details required for a VLAN-type `Endpoint`.
 */
export interface VlanEndpoint extends model.Endpoint {
  /**
   * The IPv4 address of the `Endpoint`.
   */
  "address": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VLAN containing the IP address.
   * This can be used to disambiguate which VLAN is queried, in case the endpoint IP
   * address belongs to more than one VLAN (when there are VLANs with overlapping IP ranges).
   *
   */
  "vlanId": string;

  "type": string;
}

export namespace VlanEndpoint {
  export function getJsonObj(obj: VlanEndpoint, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Endpoint.getJsonObj(obj) as VlanEndpoint)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VLAN";
  export function getDeserializedJsonObj(obj: VlanEndpoint, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Endpoint.getDeserializedJsonObj(obj) as VlanEndpoint)),
      ...{}
    };

    return jsonObj;
  }
}
