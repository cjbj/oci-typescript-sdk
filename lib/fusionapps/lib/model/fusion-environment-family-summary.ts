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
 * Summary information for a Fusion environment family.
 */
export interface FusionEnvironmentFamilySummary {
  /**
   * The unique identifier (OCID) of the environment family. Can't be changed after creation.
   */
  "id": string;
  /**
   * A friendly name for the environment family. The name must contain only letters, numbers, dashes, and underscores. Can be changed later.
   */
  "displayName": string;
  "familyMaintenancePolicy"?: model.FamilyMaintenancePolicy;
  /**
   * The OCID of the compartment where the environment family is located.
   */
  "compartmentId": string;
  /**
   * The list of the IDs of the applications subscriptions that are associated with the environment family.
   */
  "subscriptionIds": Array<string>;
  /**
   * When set to True, a subscription update is required for the environment family.
   */
  "isSubscriptionUpdateNeeded"?: boolean;
  /**
   * The time the the FusionEnvironmentFamily was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the FusionEnvironmentFamily was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the FusionEnvironmentFamily.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace FusionEnvironmentFamilySummary {
  export function getJsonObj(obj: FusionEnvironmentFamilySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyMaintenancePolicy": obj.familyMaintenancePolicy
          ? model.FamilyMaintenancePolicy.getJsonObj(obj.familyMaintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FusionEnvironmentFamilySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyMaintenancePolicy": obj.familyMaintenancePolicy
          ? model.FamilyMaintenancePolicy.getDeserializedJsonObj(obj.familyMaintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
