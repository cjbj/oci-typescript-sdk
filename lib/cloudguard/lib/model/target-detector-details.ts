/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Overriden settings of a Detector Rule applied on target
 */
export interface TargetDetectorDetails {
  /**
   * Enables the control
   */
  "isEnabled": boolean;
  /**
   * The Risk Level
   */
  "riskLevel"?: model.RiskLevel;
  /**
   * Configuration details
   */
  "configurations"?: Array<model.DetectorConfiguration>;
  /**
   * Condition group corresponding to each compartment
   */
  "conditionGroups"?: Array<model.ConditionGroup>;
  /**
   * user defined labels for a detector rule
   */
  "labels"?: Array<string>;
  /**
   * configuration allowed or not
   */
  "isConfigurationAllowed"?: boolean;
  /**
   * Cutover point for an elevated resource Risk Score to create a Problem Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "problemThreshold"?: number;
  /**
   * List of target types for which the detector rule is applicable
   */
  "targetTypes"?: Array<string>;
  /**
   * List of sighting types
   */
  "sightingTypes"?: Array<model.SightingType>;
}

export namespace TargetDetectorDetails {
  export function getJsonObj(obj: TargetDetectorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getJsonObj(item);
            })
          : undefined,
        "conditionGroups": obj.conditionGroups
          ? obj.conditionGroups.map(item => {
              return model.ConditionGroup.getJsonObj(item);
            })
          : undefined,

        "sightingTypes": obj.sightingTypes
          ? obj.sightingTypes.map(item => {
              return model.SightingType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetDetectorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "conditionGroups": obj.conditionGroups
          ? obj.conditionGroups.map(item => {
              return model.ConditionGroup.getDeserializedJsonObj(item);
            })
          : undefined,

        "sightingTypes": obj.sightingTypes
          ? obj.sightingTypes.map(item => {
              return model.SightingType.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
