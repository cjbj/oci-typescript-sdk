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
 * Patch Exadata Fleet Update Cycle resource details.
 *
 */
export interface PatchFsuCycle extends model.FsuCycle {
  /**
   * Ignore all patches between the source and target homes during patching.
   *
   */
  "isIgnorePatches"?: boolean;
  /**
   * List of bug numbers to ignore.
   *
   */
  "isIgnoreMissingPatches"?: Array<string>;
  /**
   * Service drain timeout specified in seconds.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDrainTimeoutInSeconds"?: number;
  /**
   * Ensure that services of administrator-managed Oracle RAC or Oracle RAC One databases are running on the same
   * instances before and after the move operation.
   *
   */
  "isKeepPlacement"?: boolean;

  "type": string;
}

export namespace PatchFsuCycle {
  export function getJsonObj(obj: PatchFsuCycle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuCycle.getJsonObj(obj) as PatchFsuCycle)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "PATCH";
  export function getDeserializedJsonObj(obj: PatchFsuCycle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuCycle.getDeserializedJsonObj(obj) as PatchFsuCycle)),
      ...{}
    };

    return jsonObj;
  }
}
