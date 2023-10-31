/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Options for switchover execution.
 */
export interface SwitchoverExecutionOptions extends model.DrPlanExecutionOptions {
  /**
    * A flag indicating whether prechecks should be executed before the plan execution.
* <p>
Example: `false`
* 
    */
  "arePrechecksEnabled"?: boolean;
  /**
    * A flag indicating whether warnings should be ignored during the plan execution.
* <p>
Example: `true`
* 
    */
  "areWarningsIgnored"?: boolean;

  "planExecutionType": string;
}

export namespace SwitchoverExecutionOptions {
  export function getJsonObj(obj: SwitchoverExecutionOptions, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanExecutionOptions.getJsonObj(obj) as SwitchoverExecutionOptions)),
      ...{}
    };

    return jsonObj;
  }
  export const planExecutionType = "SWITCHOVER";
  export function getDeserializedJsonObj(
    obj: SwitchoverExecutionOptions,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanExecutionOptions.getDeserializedJsonObj(obj) as SwitchoverExecutionOptions)),
      ...{}
    };

    return jsonObj;
  }
}
