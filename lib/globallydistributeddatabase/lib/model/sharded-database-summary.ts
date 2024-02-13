/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
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
 * Sharded Database resource summary.
 */
export interface ShardedDatabaseSummary {
  /**
   * Sharded Database identifier
   */
  "id": string;
  /**
   * Identifier of the compartment where sharded database exists.
   */
  "compartmentId": string;
  /**
   * Oracle sharded database display name.
   */
  "displayName": string;
  /**
   * The time the the Sharded Database was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the Sharded Database was last updated. An RFC3339 formatted datetime string
   */
  "timeUpdated": Date;
  /**
   * Lifecycle state of sharded database.
   */
  "lifecycleState": string;
  /**
   * Detailed message for the lifecycle state.
   */
  "lifecycleStateDetails": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "dbDeploymentType": string;
}

export namespace ShardedDatabaseSummary {
  export function getJsonObj(obj: ShardedDatabaseSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dbDeploymentType" in obj && obj.dbDeploymentType) {
      switch (obj.dbDeploymentType) {
        case "DEDICATED":
          return model.DedicatedShardedDatabaseSummary.getJsonObj(
            <model.DedicatedShardedDatabaseSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.dbDeploymentType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShardedDatabaseSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dbDeploymentType" in obj && obj.dbDeploymentType) {
      switch (obj.dbDeploymentType) {
        case "DEDICATED":
          return model.DedicatedShardedDatabaseSummary.getDeserializedJsonObj(
            <model.DedicatedShardedDatabaseSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.dbDeploymentType}`);
      }
    }
    return jsonObj;
  }
}
