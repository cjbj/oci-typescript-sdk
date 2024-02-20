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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The connection details required to connect to an external DB system component.
 */
export interface ExternalDbSystemConnectionInfo {
  "componentType": string;
}

export namespace ExternalDbSystemConnectionInfo {
  export function getJsonObj(obj: ExternalDbSystemConnectionInfo): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "componentType" in obj && obj.componentType) {
      switch (obj.componentType) {
        case "ASM":
          return model.ExternalAsmConnectionInfo.getJsonObj(
            <model.ExternalAsmConnectionInfo>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.ExternalDatabaseConnectionInfo.getJsonObj(
            <model.ExternalDatabaseConnectionInfo>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.componentType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalDbSystemConnectionInfo): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "componentType" in obj && obj.componentType) {
      switch (obj.componentType) {
        case "ASM":
          return model.ExternalAsmConnectionInfo.getDeserializedJsonObj(
            <model.ExternalAsmConnectionInfo>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.ExternalDatabaseConnectionInfo.getDeserializedJsonObj(
            <model.ExternalDatabaseConnectionInfo>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.componentType}`);
      }
    }
    return jsonObj;
  }
}
