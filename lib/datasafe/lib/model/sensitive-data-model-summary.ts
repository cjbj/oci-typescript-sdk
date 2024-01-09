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
 * Summary of a sensitive data model.
 */
export interface SensitiveDataModelSummary {
  /**
   * The OCID of the sensitive data model.
   */
  "id": string;
  /**
   * The display name of the sensitive data model.
   */
  "displayName": string;
  /**
   * The OCID of the compartment that contains the sensitive data model.
   */
  "compartmentId": string;
  /**
   * The OCID of the reference target database associated with the sensitive data model. All operations such as
   * performing data discovery and adding columns manually are done in the context of the associated target database.
   *
   */
  "targetId": string;
  /**
   * The date and time the sensitive data model was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the sensitive data model was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The current state of the sensitive data model.
   */
  "lifecycleState": model.DiscoveryLifecycleState;
  /**
   * The application suite name identifying a collection of applications. The default value is GENERIC. It's useful
   * only if maintaining a sensitive data model for a suite of applications.
   *
   */
  "appSuiteName": string;
  /**
   * The description of the sensitive data model.
   */
  "description"?: string;
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

export namespace SensitiveDataModelSummary {
  export function getJsonObj(obj: SensitiveDataModelSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveDataModelSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
