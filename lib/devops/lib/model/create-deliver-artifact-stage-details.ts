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
 * Specifies the Deliver Artifacts stage.
 */
export interface CreateDeliverArtifactStageDetails extends model.CreateBuildPipelineStageDetails {
  "deliverArtifactCollection": model.DeliverArtifactCollection;

  "buildPipelineStageType": string;
}

export namespace CreateDeliverArtifactStageDetails {
  export function getJsonObj(
    obj: CreateDeliverArtifactStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateBuildPipelineStageDetails.getJsonObj(
            obj
          ) as CreateDeliverArtifactStageDetails)),
      ...{
        "deliverArtifactCollection": obj.deliverArtifactCollection
          ? model.DeliverArtifactCollection.getJsonObj(obj.deliverArtifactCollection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "DELIVER_ARTIFACT";
  export function getDeserializedJsonObj(
    obj: CreateDeliverArtifactStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateBuildPipelineStageDetails.getDeserializedJsonObj(
            obj
          ) as CreateDeliverArtifactStageDetails)),
      ...{
        "deliverArtifactCollection": obj.deliverArtifactCollection
          ? model.DeliverArtifactCollection.getDeserializedJsonObj(obj.deliverArtifactCollection)
          : undefined
      }
    };

    return jsonObj;
  }
}
