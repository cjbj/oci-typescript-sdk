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
 * Represents the metadata of an Oracle NoSQL Connection.
 *
 */
export interface OracleNosqlConnection extends model.Connection {
  /**
   * The Oracle NoSQL technology type.
   */
  "technologyType": OracleNosqlConnection.TechnologyType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related OCI tenancy.
   *
   */
  "tenancyId"?: string;
  /**
   * The name of the region. e.g.: us-ashburn-1
   *
   */
  "region"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the OCI user who will access the Oracle NoSQL database.
   * The user must have write access to the table they want to connect to.
   *
   */
  "userId": string;

  "connectionType": string;
}

export namespace OracleNosqlConnection {
  export enum TechnologyType {
    OracleNosql = "ORACLE_NOSQL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OracleNosqlConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as OracleNosqlConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "ORACLE_NOSQL";
  export function getDeserializedJsonObj(
    obj: OracleNosqlConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as OracleNosqlConnection)),
      ...{}
    };

    return jsonObj;
  }
}
