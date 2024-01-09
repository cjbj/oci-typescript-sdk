/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the Instance Group Blue-Green deployment stage.
 */
export interface UpdateComputeInstanceGroupBlueGreenDeployStageDetails
  extends model.UpdateDeployStageDetails {
  /**
   * The OCID of the artifact that contains the deployment specification.
   */
  "deploymentSpecDeployArtifactId"?: string;
  /**
   * The list of file artifact OCIDs to deploy.
   */
  "deployArtifactIds"?: Array<string>;
  "rolloutPolicy"?:
    | model.ComputeInstanceGroupLinearRolloutPolicyByPercentage
    | model.ComputeInstanceGroupLinearRolloutPolicyByCount;
  "failurePolicy"?:
    | model.ComputeInstanceGroupFailurePolicyByPercentage
    | model.ComputeInstanceGroupFailurePolicyByCount;
  "testLoadBalancerConfig"?: model.LoadBalancerConfig;

  "deployStageType": string;
}

export namespace UpdateComputeInstanceGroupBlueGreenDeployStageDetails {
  export function getJsonObj(
    obj: UpdateComputeInstanceGroupBlueGreenDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDeployStageDetails.getJsonObj(
            obj
          ) as UpdateComputeInstanceGroupBlueGreenDeployStageDetails)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.ComputeInstanceGroupRolloutPolicy.getJsonObj(obj.rolloutPolicy)
          : undefined,
        "failurePolicy": obj.failurePolicy
          ? model.ComputeInstanceGroupFailurePolicy.getJsonObj(obj.failurePolicy)
          : undefined,
        "testLoadBalancerConfig": obj.testLoadBalancerConfig
          ? model.LoadBalancerConfig.getJsonObj(obj.testLoadBalancerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: UpdateComputeInstanceGroupBlueGreenDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as UpdateComputeInstanceGroupBlueGreenDeployStageDetails)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.ComputeInstanceGroupRolloutPolicy.getDeserializedJsonObj(obj.rolloutPolicy)
          : undefined,
        "failurePolicy": obj.failurePolicy
          ? model.ComputeInstanceGroupFailurePolicy.getDeserializedJsonObj(obj.failurePolicy)
          : undefined,
        "testLoadBalancerConfig": obj.testLoadBalancerConfig
          ? model.LoadBalancerConfig.getDeserializedJsonObj(obj.testLoadBalancerConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
