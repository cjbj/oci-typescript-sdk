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
 * Defines the traffic protocol parameters for the traffic in a {@code PathAnalysisResult}.
 */
export interface TrafficProtocolParameters {
  "type": string;
}

export namespace TrafficProtocolParameters {
  export function getJsonObj(obj: TrafficProtocolParameters): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ICMP":
          return model.IcmpTrafficProtocolParameters.getJsonObj(
            <model.IcmpTrafficProtocolParameters>(<object>jsonObj),
            true
          );
        case "UDP":
          return model.UdpTrafficProtocolParameters.getJsonObj(
            <model.UdpTrafficProtocolParameters>(<object>jsonObj),
            true
          );
        case "TCP":
          return model.TcpTrafficProtocolParameters.getJsonObj(
            <model.TcpTrafficProtocolParameters>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TrafficProtocolParameters): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ICMP":
          return model.IcmpTrafficProtocolParameters.getDeserializedJsonObj(
            <model.IcmpTrafficProtocolParameters>(<object>jsonObj),
            true
          );
        case "UDP":
          return model.UdpTrafficProtocolParameters.getDeserializedJsonObj(
            <model.UdpTrafficProtocolParameters>(<object>jsonObj),
            true
          );
        case "TCP":
          return model.TcpTrafficProtocolParameters.getDeserializedJsonObj(
            <model.TcpTrafficProtocolParameters>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
