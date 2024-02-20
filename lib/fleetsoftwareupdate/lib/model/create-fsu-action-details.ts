/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Exadata Fleet Update Action resource details.
 *
 */
export interface CreateFsuActionDetails {
  /**
   * Exadata Fleet Update Action display name.
   *
   */
  "displayName"?: string;
  /**
   * Compartment Identifier.
   *
   */
  "compartmentId": string;
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

  "type": string;
}

export namespace CreateFsuActionDetails {
  export function getJsonObj(obj: CreateFsuActionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "APPLY":
          return model.CreateApplyActionDetails.getJsonObj(
            <model.CreateApplyActionDetails>(<object>jsonObj),
            true
          );
        case "STAGE":
          return model.CreateStageActionDetails.getJsonObj(
            <model.CreateStageActionDetails>(<object>jsonObj),
            true
          );
        case "ROLLBACK_AND_REMOVE_TARGET":
          return model.CreateRollbackActionDetails.getJsonObj(
            <model.CreateRollbackActionDetails>(<object>jsonObj),
            true
          );
        case "CLEANUP":
          return model.CreateCleanupActionDetails.getJsonObj(
            <model.CreateCleanupActionDetails>(<object>jsonObj),
            true
          );
        case "PRECHECK":
          return model.CreatePrecheckActionDetails.getJsonObj(
            <model.CreatePrecheckActionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateFsuActionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "APPLY":
          return model.CreateApplyActionDetails.getDeserializedJsonObj(
            <model.CreateApplyActionDetails>(<object>jsonObj),
            true
          );
        case "STAGE":
          return model.CreateStageActionDetails.getDeserializedJsonObj(
            <model.CreateStageActionDetails>(<object>jsonObj),
            true
          );
        case "ROLLBACK_AND_REMOVE_TARGET":
          return model.CreateRollbackActionDetails.getDeserializedJsonObj(
            <model.CreateRollbackActionDetails>(<object>jsonObj),
            true
          );
        case "CLEANUP":
          return model.CreateCleanupActionDetails.getDeserializedJsonObj(
            <model.CreateCleanupActionDetails>(<object>jsonObj),
            true
          );
        case "PRECHECK":
          return model.CreatePrecheckActionDetails.getDeserializedJsonObj(
            <model.CreatePrecheckActionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
