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
 * Invoke Oracle function precheck step details.
 *
 */
export interface InvokeFunctionPrecheckStep extends model.DrPlanUserDefinedStep {
  "stepType": string;
}

export namespace InvokeFunctionPrecheckStep {
  export function getJsonObj(obj: InvokeFunctionPrecheckStep, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanUserDefinedStep.getJsonObj(obj) as InvokeFunctionPrecheckStep)),
      ...{}
    };

    return jsonObj;
  }
  export const stepType = "INVOKE_FUNCTION_PRECHECK";
  export function getDeserializedJsonObj(
    obj: InvokeFunctionPrecheckStep,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanUserDefinedStep.getDeserializedJsonObj(obj) as InvokeFunctionPrecheckStep)),
      ...{}
    };

    return jsonObj;
  }
}
