/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts.
 * OpenAPI spec version: 20190111
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
 * The alert rule.
 */
export interface AlertRuleSummary {
  /**
   * The OCID of the alert rule.
   */
  "id": string;
  /**
   * The OCID of the budget.
   */
  "budgetId": string;
  /**
   * The name of the alert rule. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * ACTUAL means the alert triggers based on actual usage.
   * FORECAST means the alert triggers based on predicted usage.
   *
   */
  "type": model.AlertType;
  /**
   * The threshold for triggering the alert. If the thresholdType is PERCENTAGE, the maximum value is 10000.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "threshold": number;
  /**
   * The type of threshold.
   */
  "thresholdType": model.ThresholdType;
  /**
   * The current state of the alert rule.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The custom message that will be sent when the alert is triggered.
   */
  "message"?: string;
  /**
   * The description of the alert rule.
   */
  "description"?: string;
  /**
   * The version of the alert rule. Starts from 1 and increments by 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * The audience that receives the alert when it triggers.
   */
  "recipients": string;
  /**
   * The time when the budget was created.
   */
  "timeCreated": Date;
  /**
   * The time when the budget was updated.
   */
  "timeUpdated": Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AlertRuleSummary {
  export function getJsonObj(obj: AlertRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlertRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
