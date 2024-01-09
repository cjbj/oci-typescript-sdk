/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details used to create a new audit profile.
 */
export interface CreateAuditProfileDetails {
  /**
   * The display name of the audit profile. The name does not have to be unique, and it's changeable.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment where you want to create the audit profile.
   */
  "compartmentId": string;
  /**
   * The OCID of the Data Safe target for which the audit profile is created.
   */
  "targetId": string;
  /**
   * The description of the audit profile.
   */
  "description"?: string;
  /**
   * Indicates if you want to continue collecting audit records beyond the free limit of one million audit records per month per target database,
   * potentially incurring additional charges. The default value is inherited from the global settings.
   * You can change at the global level or at the target level.
   *
   */
  "isPaidUsageEnabled"?: boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateAuditProfileDetails {
  export function getJsonObj(obj: CreateAuditProfileDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAuditProfileDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
