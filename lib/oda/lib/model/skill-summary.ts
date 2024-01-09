/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Summary of a Skill.
 */
export interface SkillSummary {
  /**
   * Unique immutable identifier that was assigned when the resource was created.
   */
  "id": string;
  /**
   * The reource's name. The name can contain only letters, numbers, periods, and underscores. The name must begin with a letter.
   *
   */
  "name": string;
  /**
   * The resource's version. The version can only contain numbers, letters, periods, underscores, dashes or spaces.  The version must begin with a letter or a number.
   *
   */
  "version": string;
  /**
   * The resource's display name.
   *
   */
  "displayName": string;
  /**
   * The resource's namespace.
   */
  "namespace": string;
  /**
   * The resource's category.  This is used to group resource's together.
   */
  "category": string;
  /**
   * The resource's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The resource's publish state.
   */
  "lifecycleDetails": model.BotPublishState;
  /**
   * The ODA Platform Version for this resource.
   */
  "platformVersion": string;
  /**
   * When the resource was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated": Date;
  /**
   * When the resource was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SkillSummary {
  export function getJsonObj(obj: SkillSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SkillSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
