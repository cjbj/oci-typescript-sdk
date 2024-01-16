/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * The details of the Fusion environment family to be updated.
 */
export interface UpdateFusionEnvironmentFamilyDetails {
  /**
   * A friendly name for the environment family. The name must contain only letters, numbers, dashes, and underscores. Can be changed later.
   */
  "displayName"?: string;
  "familyMaintenancePolicy"?: model.UpdateFamilyMaintenancePolicyDetails;
  /**
   * The list of the IDs of the applications subscriptions that are associated with the environment family.
   */
  "subscriptionIds"?: Array<string>;
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
}

export namespace UpdateFusionEnvironmentFamilyDetails {
  export function getJsonObj(obj: UpdateFusionEnvironmentFamilyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyMaintenancePolicy": obj.familyMaintenancePolicy
          ? model.UpdateFamilyMaintenancePolicyDetails.getJsonObj(obj.familyMaintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateFusionEnvironmentFamilyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyMaintenancePolicy": obj.familyMaintenancePolicy
          ? model.UpdateFamilyMaintenancePolicyDetails.getDeserializedJsonObj(
              obj.familyMaintenancePolicy
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
