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
 * Update Exadata Fleet Update Cycle resource details.
 *
 */
export interface UpdateFsuCycleDetails {
  /**
   * Exadata Fleet Update Cycle display name.
   *
   */
  "displayName"?: string;
  "goalVersionDetails"?: model.VersionFsuTargetDetails | model.ImageIdFsuTargetDetails;
  "batchingStrategy"?:
    | model.UpdateSequentialBatchingStrategyDetails
    | model.UpdateNonRollingBatchingStrategyDetails
    | model.UpdateServiceAvailabilityFactorBatchingStrategyDetails
    | model.UpdateFiftyFiftyBatchingStrategyDetails
    | model.NoneBatchingStrategyDetails;
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

export namespace UpdateFsuCycleDetails {
  export function getJsonObj(obj: UpdateFsuCycleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "goalVersionDetails": obj.goalVersionDetails
          ? model.FsuGoalVersionDetails.getJsonObj(obj.goalVersionDetails)
          : undefined,
        "batchingStrategy": obj.batchingStrategy
          ? model.UpdateBatchingStrategyDetails.getJsonObj(obj.batchingStrategy)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PATCH":
          return model.UpdatePatchFsuCycle.getJsonObj(
            <model.UpdatePatchFsuCycle>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateFsuCycleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "goalVersionDetails": obj.goalVersionDetails
          ? model.FsuGoalVersionDetails.getDeserializedJsonObj(obj.goalVersionDetails)
          : undefined,
        "batchingStrategy": obj.batchingStrategy
          ? model.UpdateBatchingStrategyDetails.getDeserializedJsonObj(obj.batchingStrategy)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PATCH":
          return model.UpdatePatchFsuCycle.getDeserializedJsonObj(
            <model.UpdatePatchFsuCycle>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
