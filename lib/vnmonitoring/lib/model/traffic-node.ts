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
 * Defines the configuration of the OCI entity that represents a traffic node in {@code PathAnalysisResult}.
 *
 */
export interface TrafficNode {
  "egressTraffic"?: model.EgressTrafficSpec;
  "nextHopRoutingAction"?:
    | model.NoRouteRoutingAction
    | model.IndeterminateRoutingAction
    | model.ForwardedRoutingAction;
  "egressSecurityAction"?: model.AllowedSecurityAction | model.DeniedSecurityAction;
  "ingressSecurityAction"?: model.AllowedSecurityAction | model.DeniedSecurityAction;

  "type": string;
}

export namespace TrafficNode {
  export function getJsonObj(obj: TrafficNode): object {
    const jsonObj = {
      ...obj,
      ...{
        "egressTraffic": obj.egressTraffic
          ? model.EgressTrafficSpec.getJsonObj(obj.egressTraffic)
          : undefined,
        "nextHopRoutingAction": obj.nextHopRoutingAction
          ? model.RoutingAction.getJsonObj(obj.nextHopRoutingAction)
          : undefined,
        "egressSecurityAction": obj.egressSecurityAction
          ? model.SecurityAction.getJsonObj(obj.egressSecurityAction)
          : undefined,
        "ingressSecurityAction": obj.ingressSecurityAction
          ? model.SecurityAction.getJsonObj(obj.ingressSecurityAction)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VISIBLE":
          return model.VisibleTrafficNode.getJsonObj(
            <model.VisibleTrafficNode>(<object>jsonObj),
            true
          );
        case "ACCESS_DENIED":
          return model.AccessDeniedTrafficNode.getJsonObj(
            <model.AccessDeniedTrafficNode>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TrafficNode): object {
    const jsonObj = {
      ...obj,
      ...{
        "egressTraffic": obj.egressTraffic
          ? model.EgressTrafficSpec.getDeserializedJsonObj(obj.egressTraffic)
          : undefined,
        "nextHopRoutingAction": obj.nextHopRoutingAction
          ? model.RoutingAction.getDeserializedJsonObj(obj.nextHopRoutingAction)
          : undefined,
        "egressSecurityAction": obj.egressSecurityAction
          ? model.SecurityAction.getDeserializedJsonObj(obj.egressSecurityAction)
          : undefined,
        "ingressSecurityAction": obj.ingressSecurityAction
          ? model.SecurityAction.getDeserializedJsonObj(obj.ingressSecurityAction)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "VISIBLE":
          return model.VisibleTrafficNode.getDeserializedJsonObj(
            <model.VisibleTrafficNode>(<object>jsonObj),
            true
          );
        case "ACCESS_DENIED":
          return model.AccessDeniedTrafficNode.getDeserializedJsonObj(
            <model.AccessDeniedTrafficNode>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
