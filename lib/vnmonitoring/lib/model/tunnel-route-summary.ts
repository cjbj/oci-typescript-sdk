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
 * A summary of the routes advertised to and received from the on-premises network.
 *
 */
export interface TunnelRouteSummary {
  /**
   * The BGP network layer reachability information.
   */
  "prefix"?: string;
  /**
   * The age of the route. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "age"?: number;
  /**
   * Indicates this is the best route.
   */
  "isBestPath"?: boolean;
  /**
   * A list of ASNs in AS_Path.
   */
  "asPath"?: Array<number>;
  /**
   * The source of the route advertisement.
   */
  "advertiser"?: TunnelRouteSummary.Advertiser;
}

export namespace TunnelRouteSummary {
  export enum Advertiser {
    Customer = "CUSTOMER",
    Oracle = "ORACLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TunnelRouteSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TunnelRouteSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
