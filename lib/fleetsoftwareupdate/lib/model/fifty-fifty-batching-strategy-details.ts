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
 * Fifty-Fifty batching strategy details to use during PRECHECK and APPLY Cycle Actions.
 *
 */
export interface FiftyFiftyBatchingStrategyDetails extends model.BatchingStrategyDetails {
  /**
   * True to wait for customer to resume the Apply Action once the first half is done.
   * False to automatically patch the second half.
   *
   */
  "isWaitForBatchResume"?: boolean;
  /**
   * True to force rolling patching.
   *
   */
  "isForceRolling"?: boolean;

  "type": string;
}

export namespace FiftyFiftyBatchingStrategyDetails {
  export function getJsonObj(
    obj: FiftyFiftyBatchingStrategyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BatchingStrategyDetails.getJsonObj(obj) as FiftyFiftyBatchingStrategyDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "FIFTY_FIFTY";
  export function getDeserializedJsonObj(
    obj: FiftyFiftyBatchingStrategyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BatchingStrategyDetails.getDeserializedJsonObj(
            obj
          ) as FiftyFiftyBatchingStrategyDetails)),
      ...{}
    };

    return jsonObj;
  }
}
