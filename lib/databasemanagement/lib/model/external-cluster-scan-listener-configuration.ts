/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of a SCAN listener in an external cluster.
 */
export interface ExternalClusterScanListenerConfiguration {
  /**
   * The name of the SCAN listener.
   */
  "scanName"?: string;
  /**
   * The network number from which SCAN VIPs are obtained. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "networkNumber"?: number;
  /**
   * The port number of the SCAN listener. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanPort"?: number;
  /**
   * The protocol of the SCAN listener.
   */
  "scanProtocol"?: ExternalClusterScanListenerConfiguration.ScanProtocol;
}

export namespace ExternalClusterScanListenerConfiguration {
  export enum ScanProtocol {
    Tcp = "TCP",
    Tcps = "TCPS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalClusterScanListenerConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalClusterScanListenerConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
