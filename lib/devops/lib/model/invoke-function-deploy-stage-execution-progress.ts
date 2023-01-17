/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the Invoke Function stage specific execution details.
 */
export interface InvokeFunctionDeployStageExecutionProgress
  extends model.DeployStageExecutionProgress {
  "deployStageType": string;
}

export namespace InvokeFunctionDeployStageExecutionProgress {
  export function getJsonObj(
    obj: InvokeFunctionDeployStageExecutionProgress,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageExecutionProgress.getJsonObj(
            obj
          ) as InvokeFunctionDeployStageExecutionProgress)),
      ...{}
    };

    return jsonObj;
  }
  export const deployStageType = "INVOKE_FUNCTION";
  export function getDeserializedJsonObj(
    obj: InvokeFunctionDeployStageExecutionProgress,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageExecutionProgress.getDeserializedJsonObj(
            obj
          ) as InvokeFunctionDeployStageExecutionProgress)),
      ...{}
    };

    return jsonObj;
  }
}
