/**
 * Process Automation
 * Process Automation helps you to rapidly design, automate, and manage business processes in the cloud. With the Process Automation design-time (Designer) and the runtime (Workspace) environments, you can easily create, develop, manage, test, and monitor process applications and their components.
 * OpenAPI spec version: 20210621
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
 * The information about new OpaInstance.
 */
export interface CreateOpaInstanceDetails {
  /**
   * OpaInstance Identifier. User-friendly name for the instance. Avoid entering confidential information. You can change this value anytime.
   */
  "displayName": string;
  /**
   * Description of the Oracle Process Automation instance.
   */
  "description"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Parameter specifying which entitlement to use for billing purposes
   */
  "consumptionModel"?: string;
  /**
   * Shape of the instance.
   */
  "shapeName": string;
  /**
   * MeteringType Identifier
   */
  "meteringType"?: string;
  /**
   * IDCS Authentication token. This is required for all realms with IDCS. This property is optional, as it is not required for non-IDCS realms.
   */
  "idcsAt"?: string;
  /**
   * indicates if breakGlass is enabled for the opa instance.
   */
  "isBreakglassEnabled"?: boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateOpaInstanceDetails {
  export function getJsonObj(obj: CreateOpaInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOpaInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
