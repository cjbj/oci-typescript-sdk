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
 * Details for cloning an existing Exadata Fleet Update Cycle resource.
 *
 */
export interface CloneFsuCycleDetails {
  /**
   * Exadata Fleet Update Cycle display name.
   *
   */
  "displayName"?: string;
  /**
   * Compartment Identifier.
   *
   */
  "compartmentId"?: string;
  /**
   * OCID identifier for the Collection ID the Exadata Fleet Update Cycle will be assigned to.
   * If not specified, it will be assigned to the same Collection as the source Exadata Fleet Update Cycle.
   *
   */
  "fsuCollectionId"?: string;
  "goalVersionDetails": model.VersionFsuTargetDetails | model.ImageIdFsuTargetDetails;
  "batchingStrategy"?:
    | model.CreateSequentialBatchingStrategyDetails
    | model.CreateFiftyFiftyBatchingStrategyDetails
    | model.CreateServiceAvailabilityFactorBatchingStrategyDetails
    | model.CreateNonRollingBatchingStrategyDetails;
  "stageActionSchedule"?: model.CreateStartTimeScheduleDetails;
  "applyActionSchedule"?: model.CreateStartTimeScheduleDetails;
}

export namespace CloneFsuCycleDetails {
  export function getJsonObj(obj: CloneFsuCycleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "goalVersionDetails": obj.goalVersionDetails
          ? model.FsuGoalVersionDetails.getJsonObj(obj.goalVersionDetails)
          : undefined,
        "batchingStrategy": obj.batchingStrategy
          ? model.CreateBatchingStrategyDetails.getJsonObj(obj.batchingStrategy)
          : undefined,
        "stageActionSchedule": obj.stageActionSchedule
          ? model.CreateScheduleDetails.getJsonObj(obj.stageActionSchedule)
          : undefined,
        "applyActionSchedule": obj.applyActionSchedule
          ? model.CreateScheduleDetails.getJsonObj(obj.applyActionSchedule)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloneFsuCycleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "goalVersionDetails": obj.goalVersionDetails
          ? model.FsuGoalVersionDetails.getDeserializedJsonObj(obj.goalVersionDetails)
          : undefined,
        "batchingStrategy": obj.batchingStrategy
          ? model.CreateBatchingStrategyDetails.getDeserializedJsonObj(obj.batchingStrategy)
          : undefined,
        "stageActionSchedule": obj.stageActionSchedule
          ? model.CreateScheduleDetails.getDeserializedJsonObj(obj.stageActionSchedule)
          : undefined,
        "applyActionSchedule": obj.applyActionSchedule
          ? model.CreateScheduleDetails.getDeserializedJsonObj(obj.applyActionSchedule)
          : undefined
      }
    };

    return jsonObj;
  }
}
