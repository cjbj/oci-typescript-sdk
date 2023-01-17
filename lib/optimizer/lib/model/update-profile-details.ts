/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for updating a profile.
 *
 */
export interface UpdateProfileDetails {
  /**
   * Text describing the profile. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * The time period over which to collect data for the recommendations, measured in number of days. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "aggregationIntervalInDays"?: number;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Simple key-value pair applied without any predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Exists for cross-compatibility only.
* <p>
Example: `{\"bar-key\": \"value\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  "levelsConfiguration"?: model.LevelsConfiguration;
  "targetCompartments"?: model.TargetCompartments;
  "targetTags"?: model.TargetTags;
  /**
   * The name assigned to the profile. Avoid entering confidential information.
   */
  "name"?: string;
}

export namespace UpdateProfileDetails {
  export function getJsonObj(obj: UpdateProfileDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelsConfiguration": obj.levelsConfiguration
          ? model.LevelsConfiguration.getJsonObj(obj.levelsConfiguration)
          : undefined,
        "targetCompartments": obj.targetCompartments
          ? model.TargetCompartments.getJsonObj(obj.targetCompartments)
          : undefined,
        "targetTags": obj.targetTags ? model.TargetTags.getJsonObj(obj.targetTags) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateProfileDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelsConfiguration": obj.levelsConfiguration
          ? model.LevelsConfiguration.getDeserializedJsonObj(obj.levelsConfiguration)
          : undefined,
        "targetCompartments": obj.targetCompartments
          ? model.TargetCompartments.getDeserializedJsonObj(obj.targetCompartments)
          : undefined,
        "targetTags": obj.targetTags
          ? model.TargetTags.getDeserializedJsonObj(obj.targetTags)
          : undefined
      }
    };

    return jsonObj;
  }
}
