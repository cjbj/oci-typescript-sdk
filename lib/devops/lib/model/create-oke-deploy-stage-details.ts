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
 * Specifies the Container Engine for Kubernetes (OKE) cluster deployment stage.
 */
export interface CreateOkeDeployStageDetails extends model.CreateDeployStageDetails {
  /**
   * Kubernetes cluster environment OCID for deployment.
   */
  "okeClusterDeployEnvironmentId": string;
  /**
   * List of Kubernetes manifest artifact OCIDs.
   */
  "kubernetesManifestDeployArtifactIds": Array<string>;
  /**
   * Default namespace to be used for Kubernetes deployment when not specified in the manifest.
   */
  "namespace"?: string;
  "rollbackPolicy"?: model.NoDeployStageRollbackPolicy | model.AutomatedDeployStageRollbackPolicy;

  "deployStageType": string;
}

export namespace CreateOkeDeployStageDetails {
  export function getJsonObj(obj: CreateOkeDeployStageDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getJsonObj(obj) as CreateOkeDeployStageDetails)),
      ...{
        "rollbackPolicy": obj.rollbackPolicy
          ? model.DeployStageRollbackPolicy.getJsonObj(obj.rollbackPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "OKE_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: CreateOkeDeployStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDeployStageDetails.getDeserializedJsonObj(
            obj
          ) as CreateOkeDeployStageDetails)),
      ...{
        "rollbackPolicy": obj.rollbackPolicy
          ? model.DeployStageRollbackPolicy.getDeserializedJsonObj(obj.rollbackPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
