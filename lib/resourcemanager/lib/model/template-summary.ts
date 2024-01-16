/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Summary information for a template.
 *
 */
export interface TemplateSummary {
  /**
   * Unique identifier of the specified template.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing this template.
   */
  "compartmentId"?: string;
  /**
   * Human-readable display name for the template.
   */
  "displayName"?: string;
  /**
   * Brief description of the template.
   */
  "description"?: string;
  /**
   * whether the template will work for free tier tenancy.
   */
  "isFreeTier"?: boolean;
  /**
   * The date and time at which the template was created.
   * Format is defined by RFC3339.
   * Example: {@code 2020-11-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * The current lifecycle state of the template.
   * Allowable values:
   * - ACTIVE
   *
   */
  "lifecycleState"?: string;
}

export namespace TemplateSummary {
  export function getJsonObj(obj: TemplateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TemplateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
