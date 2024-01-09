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
 * Rollback Exadata Fleet Update Action creation details. This action will attempt to rollback the
 * specified Targets according to strategy to the source target version prior to patching in this
 * Exadata Fleet Update Cycle and remove them from the Collection.
 *
 */
export interface CreateRollbackActionDetails extends model.CreateFsuActionDetails {
  /**
   * OCID identifier for the Exadata Fleet Update Cycle the Action will be part of.
   *
   */
  "fsuCycleId": string;
  "details": model.ListOfTargetsRollbackDetails | model.FailedJobsRollbackDetails;
  "scheduleDetails"?: model.CreateStartTimeScheduleDetails;

  "type": string;
}

export namespace CreateRollbackActionDetails {
  export function getJsonObj(obj: CreateRollbackActionDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateFsuActionDetails.getJsonObj(obj) as CreateRollbackActionDetails)),
      ...{
        "details": obj.details ? model.RollbackDetails.getJsonObj(obj.details) : undefined,
        "scheduleDetails": obj.scheduleDetails
          ? model.CreateScheduleDetails.getJsonObj(obj.scheduleDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "ROLLBACK_AND_REMOVE_TARGET";
  export function getDeserializedJsonObj(
    obj: CreateRollbackActionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateFsuActionDetails.getDeserializedJsonObj(
            obj
          ) as CreateRollbackActionDetails)),
      ...{
        "details": obj.details
          ? model.RollbackDetails.getDeserializedJsonObj(obj.details)
          : undefined,
        "scheduleDetails": obj.scheduleDetails
          ? model.CreateScheduleDetails.getDeserializedJsonObj(obj.scheduleDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
