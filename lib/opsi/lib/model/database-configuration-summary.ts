/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary of a database configuration for a resource.
 */
export interface DatabaseConfigurationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database insight resource.
   */
  "databaseInsightId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The database name. The database name is unique within the tenancy.
   */
  "databaseName": string;
  /**
   * The user-friendly name for the database. The name does not have to be unique.
   */
  "databaseDisplayName": string;
  /**
   * Operations Insights internal representation of the database type.
   */
  "databaseType": string;
  /**
   * The version of the database.
   */
  "databaseVersion": string;
  /**
   * Name of the CDB.Only applies to PDB.
   */
  "cdbName": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Processor count. This is the OCPU count for Autonomous Database and CPU core count for other database types. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "processorCount"?: number;

  "entitySource": string;
}

export namespace DatabaseConfigurationSummary {
  export function getJsonObj(obj: DatabaseConfigurationSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.EmManagedExternalDatabaseConfigurationSummary.getJsonObj(
            <model.EmManagedExternalDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseConfigurationSummary.getJsonObj(
            <model.AutonomousDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.MacsManagedExternalDatabaseConfigurationSummary.getJsonObj(
            <model.MacsManagedExternalDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_DATABASE":
          return model.PeComanagedManagedExternalDatabaseConfigurationSummary.getJsonObj(
            <model.PeComanagedManagedExternalDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseConfigurationSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.EmManagedExternalDatabaseConfigurationSummary.getDeserializedJsonObj(
            <model.EmManagedExternalDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseConfigurationSummary.getDeserializedJsonObj(
            <model.AutonomousDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.MacsManagedExternalDatabaseConfigurationSummary.getDeserializedJsonObj(
            <model.MacsManagedExternalDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_DATABASE":
          return model.PeComanagedManagedExternalDatabaseConfigurationSummary.getDeserializedJsonObj(
            <model.PeComanagedManagedExternalDatabaseConfigurationSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
}
