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
 * The trigger for GitLab as the caller.
 */
export interface CreateGitlabServerTriggerDetails extends model.CreateTriggerDetails {
  "triggerSource": string;
}

export namespace CreateGitlabServerTriggerDetails {
  export function getJsonObj(
    obj: CreateGitlabServerTriggerDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTriggerDetails.getJsonObj(obj) as CreateGitlabServerTriggerDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const triggerSource = "GITLAB_SERVER";
  export function getDeserializedJsonObj(
    obj: CreateGitlabServerTriggerDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTriggerDetails.getDeserializedJsonObj(
            obj
          ) as CreateGitlabServerTriggerDetails)),
      ...{}
    };

    return jsonObj;
  }
}
