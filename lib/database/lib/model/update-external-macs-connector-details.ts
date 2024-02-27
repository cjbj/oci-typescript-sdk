/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for updating an external [Management Agent cloud service (MACS)](https://docs.cloud.oracle.com/iaas/management-agents/index.html)
 * database connection.
 *
 */
export interface UpdateExternalMacsConnectorDetails
  extends model.UpdateExternalDatabaseConnectorDetails {
  "connectionString"?: model.DatabaseConnectionString;
  "connectionCredentials"?:
    | model.DatabaseSslConnectionCredentials
    | model.DatabaseConnectionCredentialsByName
    | model.DatabaseConnectionCredentialsByDetails;

  "connectorType": string;
}

export namespace UpdateExternalMacsConnectorDetails {
  export function getJsonObj(
    obj: UpdateExternalMacsConnectorDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateExternalDatabaseConnectorDetails.getJsonObj(
            obj
          ) as UpdateExternalMacsConnectorDetails)),
      ...{
        "connectionString": obj.connectionString
          ? model.DatabaseConnectionString.getJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.DatabaseConnectionCredentials.getJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectorType = "MACS";
  export function getDeserializedJsonObj(
    obj: UpdateExternalMacsConnectorDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateExternalDatabaseConnectorDetails.getDeserializedJsonObj(
            obj
          ) as UpdateExternalMacsConnectorDetails)),
      ...{
        "connectionString": obj.connectionString
          ? model.DatabaseConnectionString.getDeserializedJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.DatabaseConnectionCredentials.getDeserializedJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
