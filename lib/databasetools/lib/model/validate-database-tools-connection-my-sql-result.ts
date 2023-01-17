/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * Connection validaton result for the MySQL Server.
 */
export interface ValidateDatabaseToolsConnectionMySqlResult
  extends model.ValidateDatabaseToolsConnectionResult {
  /**
   * The database name.
   */
  "databaseName"?: string;
  /**
   * The database version.
   */
  "databaseVersion"?: string;

  "type": string;
}

export namespace ValidateDatabaseToolsConnectionMySqlResult {
  export function getJsonObj(
    obj: ValidateDatabaseToolsConnectionMySqlResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ValidateDatabaseToolsConnectionResult.getJsonObj(
            obj
          ) as ValidateDatabaseToolsConnectionMySqlResult)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "MYSQL";
  export function getDeserializedJsonObj(
    obj: ValidateDatabaseToolsConnectionMySqlResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ValidateDatabaseToolsConnectionResult.getDeserializedJsonObj(
            obj
          ) as ValidateDatabaseToolsConnectionMySqlResult)),
      ...{}
    };

    return jsonObj;
  }
}
