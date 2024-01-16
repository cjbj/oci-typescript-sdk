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
 * A summary of the IPSec tunnel security association details.
 *
 */
export interface TunnelSecurityAssociationSummary {
  /**
   * The IP address and mask of the partner subnet used in policy based VPNs or static routes.
   */
  "cpeSubnet"?: string;
  /**
   * The IP address and mask of the local subnet used in policy based VPNs or static routes.
   */
  "oracleSubnet"?: string;
  /**
   * The IPSec tunnel's phase one status.
   */
  "tunnelSaStatus"?: TunnelSecurityAssociationSummary.TunnelSaStatus;
  /**
   * Current state if the IPSec tunnel status is not {@code UP}, including phase one and phase two details and a possible reason the tunnel is not {@code UP}.
   *
   */
  "tunnelSaErrorInfo"?: string;
  /**
   * Time in the current state, in seconds.
   */
  "time"?: string;
}

export namespace TunnelSecurityAssociationSummary {
  export enum TunnelSaStatus {
    Initiating = "INITIATING",
    Listening = "LISTENING",
    Up = "UP",
    Down = "DOWN",
    Error = "ERROR",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TunnelSecurityAssociationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TunnelSecurityAssociationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
