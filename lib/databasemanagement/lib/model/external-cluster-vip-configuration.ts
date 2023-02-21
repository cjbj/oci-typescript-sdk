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
 * The details of the Virtual IP (VIP) address for a node in an external cluster.
 */
export interface ExternalClusterVipConfiguration {
  /**
   * The name of the node with the VIP.
   */
  "nodeName"?: string;
  /**
   * The VIP name or IP address.
   */
  "address"?: string;
  /**
   * The network number from which VIPs are obtained. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "networkNumber"?: number;
}

export namespace ExternalClusterVipConfiguration {
  export function getJsonObj(obj: ExternalClusterVipConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalClusterVipConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
