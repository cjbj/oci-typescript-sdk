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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of ResponderRecipe
 */
export interface TargetResponderRecipeSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Unique identifier for Responder Recipe of which this is an extension
   */
  "responderRecipeId": string;
  /**
   * ResponderRecipe Identifier Name
   */
  "displayName": string;
  /**
   * ResponderRecipe Description
   */
  "description": string;
  /**
   * Owner of ResponderRecipe
   */
  "owner": model.OwnerType;
  /**
   * The date and time the target responder recipe was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the target responder recipe was updated. Format defined by RFC3339.
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
}

export namespace TargetResponderRecipeSummary {
  export function getJsonObj(obj: TargetResponderRecipeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetResponderRecipeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
