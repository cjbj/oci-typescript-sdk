/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * DNS-based service discovery configuration for virtual deployments.
 */
export interface DnsServiceDiscoveryConfiguration extends model.ServiceDiscoveryConfiguration {
  /**
   * The hostname of the virtual deployments.
   */
  "hostname": string;

  "type": string;
}

export namespace DnsServiceDiscoveryConfiguration {
  export function getJsonObj(
    obj: DnsServiceDiscoveryConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ServiceDiscoveryConfiguration.getJsonObj(
            obj
          ) as DnsServiceDiscoveryConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DNS";
  export function getDeserializedJsonObj(
    obj: DnsServiceDiscoveryConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ServiceDiscoveryConfiguration.getDeserializedJsonObj(
            obj
          ) as DnsServiceDiscoveryConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
