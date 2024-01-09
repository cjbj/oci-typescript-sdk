/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * Request for updating UDP Service used on the firewall policy rules.
 *
 */
export interface UpdateUdpServiceDetails extends model.UpdateServiceDetails {
  /**
   * List of port-ranges to be used.
   */
  "portRanges": Array<model.PortRange>;

  "type": string;
}

export namespace UpdateUdpServiceDetails {
  export function getJsonObj(obj: UpdateUdpServiceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateServiceDetails.getJsonObj(obj) as UpdateUdpServiceDetails)),
      ...{
        "portRanges": obj.portRanges
          ? obj.portRanges.map(item => {
              return model.PortRange.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "UDP_SERVICE";
  export function getDeserializedJsonObj(
    obj: UpdateUdpServiceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateServiceDetails.getDeserializedJsonObj(obj) as UpdateUdpServiceDetails)),
      ...{
        "portRanges": obj.portRanges
          ? obj.portRanges.map(item => {
              return model.PortRange.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
