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
 * Specifies Invoke Function stage.
 */
export interface InvokeFunctionDeployStageSummary extends model.DeployStageSummary {
  /**
   * Function environment OCID.
   */
  "functionDeployEnvironmentId": string;
  /**
   * Optional artifact OCID. The artifact will be included in the body for the function invocation during the stage's execution.
   * If the DeployArtifact.argumentSubstituitionMode is set to SUBSTITUTE_PLACEHOLDERS, then the pipeline parameter values will be used to replace the placeholders in the artifact content.
   *
   */
  "deployArtifactId"?: string;
  /**
   * A boolean flag specifies whether this stage executes asynchronously.
   */
  "isAsync": boolean;
  /**
   * A boolean flag specifies whether the invoked function must be validated.
   */
  "isValidationEnabled": boolean;

  "deployStageType": string;
}

export namespace InvokeFunctionDeployStageSummary {
  export function getJsonObj(
    obj: InvokeFunctionDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getJsonObj(obj) as InvokeFunctionDeployStageSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const deployStageType = "INVOKE_FUNCTION";
  export function getDeserializedJsonObj(
    obj: InvokeFunctionDeployStageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStageSummary.getDeserializedJsonObj(
            obj
          ) as InvokeFunctionDeployStageSummary)),
      ...{}
    };

    return jsonObj;
  }
}
