/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new GoldenGate Connection.
 *
 */
export interface CreateGoldenGateConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The GoldenGate technology type.
   */
  "technologyType": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the deployment being referenced.
   *
   */
  "deploymentId"?: string;
  /**
   * The name or address of a host.
   *
   */
  "host"?: string;
  /**
   * The port of an endpoint usually specified for a connection.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;

  "connectionType": string;
}

export namespace CreateGoldenGateConnectionDetails {
  export function getJsonObj(
    obj: CreateGoldenGateConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateGoldenGateConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GOLDENGATE";
  export function getDeserializedJsonObj(
    obj: CreateGoldenGateConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateGoldenGateConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
