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
 * Specifies load balancer traffic shift stage.
 */
export interface UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails
  extends model.UpdateDeployStageDetails {
  "rolloutPolicy"?: model.LoadBalancerTrafficShiftRolloutPolicy;

  "deployStageType": string;
}

export namespace UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails {
  export function getJsonObj(
    obj: UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDeployStageDetails.getJsonObj(
            obj
          ) as UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.LoadBalancerTrafficShiftRolloutPolicy.getJsonObj(obj.rolloutPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT";
  export function getDeserializedJsonObj(
    obj: UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails)),
      ...{
        "rolloutPolicy": obj.rolloutPolicy
          ? model.LoadBalancerTrafficShiftRolloutPolicy.getDeserializedJsonObj(obj.rolloutPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
