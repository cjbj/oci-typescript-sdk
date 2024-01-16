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
 * Properties that are required to create a Skill.
 */
export interface CreateSkillDetails {
  /**
   * The resource's category.  This is used to group resource's together.
   */
  "category"?: string;
  /**
   * A short description of the resource.
   */
  "description"?: string;
  /**
   * The ODA Platform Version for this resource.
   */
  "platformVersion"?: string;
  /**
   * The multilingual mode for the resource.
   */
  "multilingualMode"?: model.BotMultilingualMode;
  /**
   * The primary language for the resource.
   */
  "primaryLanguageTag"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "kind": string;
}

export namespace CreateSkillDetails {
  export function getJsonObj(obj: CreateSkillDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "CLONE":
          return model.CloneSkillDetails.getJsonObj(
            <model.CloneSkillDetails>(<object>jsonObj),
            true
          );
        case "NEW":
          return model.CreateNewSkillDetails.getJsonObj(
            <model.CreateNewSkillDetails>(<object>jsonObj),
            true
          );
        case "VERSION":
          return model.CreateSkillVersionDetails.getJsonObj(
            <model.CreateSkillVersionDetails>(<object>jsonObj),
            true
          );
        case "EXTEND":
          return model.ExtendSkillDetails.getJsonObj(
            <model.ExtendSkillDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSkillDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "CLONE":
          return model.CloneSkillDetails.getDeserializedJsonObj(
            <model.CloneSkillDetails>(<object>jsonObj),
            true
          );
        case "NEW":
          return model.CreateNewSkillDetails.getDeserializedJsonObj(
            <model.CreateNewSkillDetails>(<object>jsonObj),
            true
          );
        case "VERSION":
          return model.CreateSkillVersionDetails.getDeserializedJsonObj(
            <model.CreateSkillVersionDetails>(<object>jsonObj),
            true
          );
        case "EXTEND":
          return model.ExtendSkillDetails.getDeserializedJsonObj(
            <model.ExtendSkillDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}
