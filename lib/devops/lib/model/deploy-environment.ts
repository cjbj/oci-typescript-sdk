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
 * The target OCI resources, such as Compute instances, Container Engine for Kubernetes(OKE) clusters, or Function, where artifacts are deployed.
 */
export interface DeployEnvironment {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Optional description about the deployment environment.
   */
  "description"?: string;
  /**
   * Deployment environment display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * The OCID of a compartment.
   */
  "compartmentId": string;
  /**
   * Time the deployment environment was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * Time the deployment environment was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the deployment environment.
   */
  "lifecycleState"?: DeployEnvironment.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "deployEnvironmentType": string;
}

export namespace DeployEnvironment {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DeployEnvironment): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "deployEnvironmentType" in obj && obj.deployEnvironmentType) {
      switch (obj.deployEnvironmentType) {
        case "COMPUTE_INSTANCE_GROUP":
          return model.ComputeInstanceGroupDeployEnvironment.getJsonObj(
            <model.ComputeInstanceGroupDeployEnvironment>(<object>jsonObj),
            true
          );
        case "OKE_CLUSTER":
          return model.OkeClusterDeployEnvironment.getJsonObj(
            <model.OkeClusterDeployEnvironment>(<object>jsonObj),
            true
          );
        case "FUNCTION":
          return model.FunctionDeployEnvironment.getJsonObj(
            <model.FunctionDeployEnvironment>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.deployEnvironmentType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployEnvironment): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "deployEnvironmentType" in obj && obj.deployEnvironmentType) {
      switch (obj.deployEnvironmentType) {
        case "COMPUTE_INSTANCE_GROUP":
          return model.ComputeInstanceGroupDeployEnvironment.getDeserializedJsonObj(
            <model.ComputeInstanceGroupDeployEnvironment>(<object>jsonObj),
            true
          );
        case "OKE_CLUSTER":
          return model.OkeClusterDeployEnvironment.getDeserializedJsonObj(
            <model.OkeClusterDeployEnvironment>(<object>jsonObj),
            true
          );
        case "FUNCTION":
          return model.FunctionDeployEnvironment.getDeserializedJsonObj(
            <model.FunctionDeployEnvironment>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.deployEnvironmentType}`);
      }
    }
    return jsonObj;
  }
}
