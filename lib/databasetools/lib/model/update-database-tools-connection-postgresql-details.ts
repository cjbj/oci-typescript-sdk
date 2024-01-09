/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The update details for a Database Tools PostgreSQL Server connection.
 */
export interface UpdateDatabaseToolsConnectionPostgresqlDetails
  extends model.UpdateDatabaseToolsConnectionDetails {
  "relatedResource"?: model.UpdateDatabaseToolsRelatedResourcePostgresqlDetails;
  /**
   * The connection string used to connect to the PostgreSQL Server.
   */
  "connectionString"?: string;
  /**
   * The user name.
   */
  "userName"?: string;
  "userPassword"?: model.DatabaseToolsUserPasswordSecretIdDetails;
  /**
   * The advanced connection properties key-value pair (e.g., `sslMode`).
   */
  "advancedProperties"?: { [key: string]: string };
  /**
   * The CA certificate to verify the server's certificate and
   * the client private key and associated certificate required for client authentication.
   *
   */
  "keyStores"?: Array<model.DatabaseToolsKeyStorePostgresqlDetails>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DatabaseToolsPrivateEndpoint used to access the database in the Customer VCN.
   */
  "privateEndpointId"?: string;

  "type": string;
}

export namespace UpdateDatabaseToolsConnectionPostgresqlDetails {
  export function getJsonObj(
    obj: UpdateDatabaseToolsConnectionPostgresqlDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDatabaseToolsConnectionDetails.getJsonObj(
            obj
          ) as UpdateDatabaseToolsConnectionPostgresqlDetails)),
      ...{
        "relatedResource": obj.relatedResource
          ? model.UpdateDatabaseToolsRelatedResourcePostgresqlDetails.getJsonObj(
              obj.relatedResource
            )
          : undefined,

        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordDetails.getJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStorePostgresqlDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "POSTGRESQL";
  export function getDeserializedJsonObj(
    obj: UpdateDatabaseToolsConnectionPostgresqlDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDatabaseToolsConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateDatabaseToolsConnectionPostgresqlDetails)),
      ...{
        "relatedResource": obj.relatedResource
          ? model.UpdateDatabaseToolsRelatedResourcePostgresqlDetails.getDeserializedJsonObj(
              obj.relatedResource
            )
          : undefined,

        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordDetails.getDeserializedJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStorePostgresqlDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
