/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Summary of the Generic Connection.
 *
 */
export interface GenericConnectionSummary extends model.ConnectionSummary {
  /**
   * The Generic technology type.
   */
  "technologyType": string;
  /**
    * Host and port separated by colon.
* Example: {@code \"server.example.com:1234\"}
* <p>
For multiple hosts, provide a comma separated list.
* Example: {@code \"server1.example.com:1000,server1.example.com:2000\"}
* 
    */
  "host": string;

  "connectionType": string;
}

export namespace GenericConnectionSummary {
  export function getJsonObj(obj: GenericConnectionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as GenericConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GENERIC";
  export function getDeserializedJsonObj(
    obj: GenericConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(obj) as GenericConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}
