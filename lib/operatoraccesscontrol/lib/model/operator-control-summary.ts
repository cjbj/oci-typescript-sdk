/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
 * Summary of the OperatorControl.
 */
export interface OperatorControlSummary {
  /**
   * The OCID of the operator control.
   */
  "id": string;
  /**
   * Name of the operator control.
   */
  "operatorControlName": string;
  /**
   * The OCID of the compartment that contains the operator control.
   */
  "compartmentId"?: string;
  /**
   * Whether all operator actions are pre-approved. If yes, an access request associated with a resource governed by the operator control will be automatically approved by the system.
   */
  "isFullyPreApproved"?: boolean;
  /**
   * resourceType for which the OperatorControl is applicable
   */
  "resourceType"?: model.ResourceTypes;
  /**
   * Time when the operator control was created, expressed in [RFC 3339] (https://tools.ietf.org/html/rfc3339) timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfCreation"?: Date;
  /**
   * Time when the operator control was last modified, expressed in [RFC 3339] (https://tools.ietf.org/html/rfc3339) timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfModification"?: Date;
  /**
   * Time when the operator control was deleted, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The current lifecycle state of the operator control.
   */
  "lifecycleState"?: model.OperatorControlLifecycleStates;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OperatorControlSummary {
  export function getJsonObj(obj: OperatorControlSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperatorControlSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
