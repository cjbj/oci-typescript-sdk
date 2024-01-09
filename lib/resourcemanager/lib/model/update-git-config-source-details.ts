/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Update details for a Git configuration source.
 */
export interface UpdateGitConfigSourceDetails extends model.UpdateConfigSourceDetails {
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm))
   * for the Git configuration source.
   *
   */
  "configurationSourceProviderId": string;
  /**
   * The URL of the Git repository.
   */
  "repositoryUrl"?: string;
  /**
   * The name of the branch within the Git repository.
   */
  "branchName"?: string;

  "configSourceType": string;
}

export namespace UpdateGitConfigSourceDetails {
  export function getJsonObj(obj: UpdateGitConfigSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigSourceDetails.getJsonObj(obj) as UpdateGitConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "GIT_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: UpdateGitConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateGitConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
