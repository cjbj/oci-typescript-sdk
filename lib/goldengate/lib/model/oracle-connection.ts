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
 * Represents the metadata of an Oracle Database Connection.
 *
 */
export interface OracleConnection extends model.Connection {
  /**
   * The Oracle technology type.
   */
  "technologyType": OracleConnection.TechnologyType;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must
   * already exist and be available for use by the database.  It must conform to the security
   * requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username": string;
  /**
   * Connect descriptor or Easy Connect Naming method that Oracle GoldenGate uses to connect to a
   * database.
   *
   */
  "connectionString"?: string;
  /**
   * The mode of the database connection session to be established by the data client.
   * 'REDIRECT' - for a RAC database, 'DIRECT' - for a non-RAC database.
   * Connection to a RAC database involves a redirection received from the SCAN listeners
   * to the database node to connect to. By default the mode would be DIRECT.
   *
   */
  "sessionMode"?: OracleConnection.SessionMode;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database being referenced.
   *
   */
  "databaseId"?: string;

  "connectionType": string;
}

export namespace OracleConnection {
  export enum TechnologyType {
    AmazonRdsOracle = "AMAZON_RDS_ORACLE",
    OciAutonomousDatabase = "OCI_AUTONOMOUS_DATABASE",
    OracleDatabase = "ORACLE_DATABASE",
    OracleExadata = "ORACLE_EXADATA",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SessionMode {
    Direct = "DIRECT",
    Redirect = "REDIRECT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OracleConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as OracleConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "ORACLE";
  export function getDeserializedJsonObj(obj: OracleConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as OracleConnection)),
      ...{}
    };

    return jsonObj;
  }
}
