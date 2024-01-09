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
 * The information to be updated in ResponderRecipe.
 */
export interface UpdateTargetResponderRecipeDetails {
  /**
   * Update responder rules associated with responder recipe in a target.
   */
  "responderRules": Array<model.UpdateTargetRecipeResponderRuleDetails>;
}

export namespace UpdateTargetResponderRecipeDetails {
  export function getJsonObj(obj: UpdateTargetResponderRecipeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRules": obj.responderRules
          ? obj.responderRules.map(item => {
              return model.UpdateTargetRecipeResponderRuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateTargetResponderRecipeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRules": obj.responderRules
          ? obj.responderRules.map(item => {
              return model.UpdateTargetRecipeResponderRuleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
