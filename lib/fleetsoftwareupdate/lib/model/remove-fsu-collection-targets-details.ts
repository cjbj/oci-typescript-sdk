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
 * Remove targets from a Exadata Fleet Update Collection.
 *
 */
export interface RemoveFsuCollectionTargetsDetails {
  "removalStrategy": string;
}

export namespace RemoveFsuCollectionTargetsDetails {
  export function getJsonObj(obj: RemoveFsuCollectionTargetsDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "removalStrategy" in obj && obj.removalStrategy) {
      switch (obj.removalStrategy) {
        case "TARGET_IDS":
          return model.TargetIdsRemoveTargetsDetails.getJsonObj(
            <model.TargetIdsRemoveTargetsDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.removalStrategy}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemoveFsuCollectionTargetsDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "removalStrategy" in obj && obj.removalStrategy) {
      switch (obj.removalStrategy) {
        case "TARGET_IDS":
          return model.TargetIdsRemoveTargetsDetails.getDeserializedJsonObj(
            <model.TargetIdsRemoveTargetsDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.removalStrategy}`);
      }
    }
    return jsonObj;
  }
}
