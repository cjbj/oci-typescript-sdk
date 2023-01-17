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
 * Specifies the Container Engine for Kubernetes (OKE) cluster Blue-Green deployment stage.
 */
export interface OkeBlueGreenDeployStage extends model.DeployStage {
  /**
   * Kubernetes cluster environment OCID for deployment.
   */
  "okeClusterDeployEnvironmentId": string;
  /**
   * List of Kubernetes manifest artifact OCIDs
   */
  "kubernetesManifestDeployArtifactIds": Array<string>;
  "blueGreenStrategy": model.NginxBlueGreenStrategy;

  "deployStageType": string;
}

export namespace OkeBlueGreenDeployStage {
  export function getJsonObj(obj: OkeBlueGreenDeployStage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DeployStage.getJsonObj(obj) as OkeBlueGreenDeployStage)),
      ...{
        "blueGreenStrategy": obj.blueGreenStrategy
          ? model.OkeBlueGreenStrategy.getJsonObj(obj.blueGreenStrategy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "OKE_BLUE_GREEN_DEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: OkeBlueGreenDeployStage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStage.getDeserializedJsonObj(obj) as OkeBlueGreenDeployStage)),
      ...{
        "blueGreenStrategy": obj.blueGreenStrategy
          ? model.OkeBlueGreenStrategy.getDeserializedJsonObj(obj.blueGreenStrategy)
          : undefined
      }
    };

    return jsonObj;
  }
}
