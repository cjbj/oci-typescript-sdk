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
 * The details of a Data Safe Alert, that shows alerts generated by a Data Safe feature.
 */
export interface Alert {
  /**
   * The OCID of the alert.
   */
  "id": string;
  /**
   * The status of the alert.
   */
  "status"?: model.AlertStatus;
  /**
   * Severity level of the alert.
   */
  "severity"?: model.AlertSeverity;
  /**
   * The display name of the alert.
   */
  "displayName": string;
  /**
   * The description of the alert.
   */
  "description"?: string;
  /**
   * Creation date and time of the operation that triggered alert, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "operationTime"?: Date;
  /**
   * The operation (event) that triggered alert.
   */
  "operation"?: string;
  /**
   * The result of the operation (event) that triggered alert.
   */
  "operationStatus"?: Alert.OperationStatus;
  /**
   * Array of OCIDs of the target database which are associated with the alert.
   */
  "targetIds"?: Array<string>;
  /**
   * Array of names of the target database.
   */
  "targetNames"?: Array<string>;
  /**
   * The OCID of the policy that triggered alert.
   */
  "policyId"?: string;
  /**
   * Type of the alert. Indicates the Data Safe feature triggering the alert.
   */
  "alertType"?: model.AlertType;
  /**
   * The resource endpoint that triggered the alert.
   */
  "resourceName"?: string;
  /**
   * Map that contains maps of values.
   *  Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "featureDetails"?: { [key: string]: { [key: string]: any } };
  /**
   * A comment for the alert. Entered by the user.
   */
  "comment"?: string;
  /**
   * The OCID of the compartment that contains the alert.
   */
  "compartmentId": string;
  /**
   * The current state of the alert.
   */
  "lifecycleState": model.AlertLifecycleState;
  /**
   * Creation date and time of the alert, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * Last date and time the alert was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Alert {
  export enum OperationStatus {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Alert): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Alert): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
