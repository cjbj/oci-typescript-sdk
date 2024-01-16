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
 * Summary of the ResponderRecipe.
 */
export interface ResponderRecipeSummary {
  /**
   * Identifier for ResponderRecipe.
   */
  "id": string;
  /**
   * ResponderRecipe display name.
   */
  "displayName"?: string;
  /**
   * ResponderRecipe description.
   */
  "description"?: string;
  /**
   * Owner of ResponderRecipe
   */
  "owner"?: model.OwnerType;
  /**
   * List of responder rules associated with the recipe
   */
  "responderRules"?: Array<model.ResponderRecipeResponderRule>;
  /**
   * The id of the source responder recipe.
   */
  "sourceResponderRecipeId"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * The date and time the responder recipe was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the responder recipe was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Example.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* Example: {@code {\"bar-key\": \"value\"}}
* <p>
Avoid entering confidential information.
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ResponderRecipeSummary {
  export function getJsonObj(obj: ResponderRecipeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRules": obj.responderRules
          ? obj.responderRules.map(item => {
              return model.ResponderRecipeResponderRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponderRecipeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRules": obj.responderRules
          ? obj.responderRules.map(item => {
              return model.ResponderRecipeResponderRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
