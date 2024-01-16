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
 * The information to be updated.
 */
export interface UpdateDeployStageDetails {
  /**
   * Optional description about the deployment stage.
   */
  "description"?: string;
  /**
   * Deployment stage display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  "deployStagePredecessorCollection"?: model.DeployStagePredecessorCollection;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"bar-key\": \"value\"}}
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "deployStageType": string;
}

export namespace UpdateDeployStageDetails {
  export function getJsonObj(obj: UpdateDeployStageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessorCollection": obj.deployStagePredecessorCollection
          ? model.DeployStagePredecessorCollection.getJsonObj(obj.deployStagePredecessorCollection)
          : undefined
      }
    };

    if (obj && "deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "OKE_CANARY_TRAFFIC_SHIFT":
          return model.UpdateOkeCanaryTrafficShiftDeployStageDetails.getJsonObj(
            <model.UpdateOkeCanaryTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_DEPLOYMENT":
          return model.UpdateOkeCanaryDeployStageDetails.getJsonObj(
            <model.UpdateOkeCanaryDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_HELM_CHART_DEPLOYMENT":
          return model.UpdateOkeHelmChartDeployStageDetails.getJsonObj(
            <model.UpdateOkeHelmChartDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.UpdateComputeInstanceGroupDeployStageDetails.getJsonObj(
            <model.UpdateComputeInstanceGroupDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_APPROVAL":
          return model.UpdateOkeCanaryApprovalDeployStageDetails.getJsonObj(
            <model.UpdateOkeCanaryApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "SHELL":
          return model.UpdateShellDeployStageDetails.getJsonObj(
            <model.UpdateShellDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.UpdateOkeDeployStageDetails.getJsonObj(
            <model.UpdateOkeDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL":
          return model.UpdateComputeInstanceGroupCanaryApprovalDeployStageDetails.getJsonObj(
            <model.UpdateComputeInstanceGroupCanaryApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.UpdateLoadBalancerTrafficShiftDeployStageDetails.getJsonObj(
            <model.UpdateLoadBalancerTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_DEPLOYMENT":
          return model.UpdateOkeBlueGreenDeployStageDetails.getJsonObj(
            <model.UpdateOkeBlueGreenDeployStageDetails>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.UpdateWaitDeployStageDetails.getJsonObj(
            <model.UpdateWaitDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.UpdateOkeBlueGreenTrafficShiftDeployStageDetails.getJsonObj(
            <model.UpdateOkeBlueGreenTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "MANUAL_APPROVAL":
          return model.UpdateManualApprovalDeployStageDetails.getJsonObj(
            <model.UpdateManualApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT":
          return model.UpdateComputeInstanceGroupBlueGreenDeployStageDetails.getJsonObj(
            <model.UpdateComputeInstanceGroupBlueGreenDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT":
          return model.UpdateComputeInstanceGroupCanaryDeployStageDetails.getJsonObj(
            <model.UpdateComputeInstanceGroupCanaryDeployStageDetails>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.UpdateFunctionDeployStageDetails.getJsonObj(
            <model.UpdateFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.UpdateComputeInstanceGroupBlueGreenTrafficShiftDeployStageDetails.getJsonObj(
            <model.UpdateComputeInstanceGroupBlueGreenTrafficShiftDeployStageDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT":
          return model.UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails.getJsonObj(
            <model.UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.UpdateInvokeFunctionDeployStageDetails.getJsonObj(
            <model.UpdateInvokeFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.deployStageType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDeployStageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessorCollection": obj.deployStagePredecessorCollection
          ? model.DeployStagePredecessorCollection.getDeserializedJsonObj(
              obj.deployStagePredecessorCollection
            )
          : undefined
      }
    };

    if (obj && "deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "OKE_CANARY_TRAFFIC_SHIFT":
          return model.UpdateOkeCanaryTrafficShiftDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeCanaryTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_DEPLOYMENT":
          return model.UpdateOkeCanaryDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeCanaryDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_HELM_CHART_DEPLOYMENT":
          return model.UpdateOkeHelmChartDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeHelmChartDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.UpdateComputeInstanceGroupDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateComputeInstanceGroupDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_CANARY_APPROVAL":
          return model.UpdateOkeCanaryApprovalDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeCanaryApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "SHELL":
          return model.UpdateShellDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateShellDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.UpdateOkeDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL":
          return model.UpdateComputeInstanceGroupCanaryApprovalDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateComputeInstanceGroupCanaryApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.UpdateLoadBalancerTrafficShiftDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateLoadBalancerTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_DEPLOYMENT":
          return model.UpdateOkeBlueGreenDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeBlueGreenDeployStageDetails>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.UpdateWaitDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateWaitDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.UpdateOkeBlueGreenTrafficShiftDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateOkeBlueGreenTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "MANUAL_APPROVAL":
          return model.UpdateManualApprovalDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateManualApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_DEPLOYMENT":
          return model.UpdateComputeInstanceGroupBlueGreenDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateComputeInstanceGroupBlueGreenDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_DEPLOYMENT":
          return model.UpdateComputeInstanceGroupCanaryDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateComputeInstanceGroupCanaryDeployStageDetails>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.UpdateFunctionDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_BLUE_GREEN_TRAFFIC_SHIFT":
          return model.UpdateComputeInstanceGroupBlueGreenTrafficShiftDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateComputeInstanceGroupBlueGreenTrafficShiftDeployStageDetails>(
              (<object>jsonObj)
            ),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_CANARY_TRAFFIC_SHIFT":
          return model.UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateComputeInstanceGroupCanaryTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.UpdateInvokeFunctionDeployStageDetails.getDeserializedJsonObj(
            <model.UpdateInvokeFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.deployStageType}`);
      }
    }
    return jsonObj;
  }
}
