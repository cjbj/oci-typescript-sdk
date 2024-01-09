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
 * Creation details for a Bitbucket Cloud configuration source.
 *
 */
export interface CreateBitbucketCloudConfigSourceDetails extends model.CreateConfigSourceDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Bitbucket Cloud configuration source.
   *
   */
  "configurationSourceProviderId": string;
  /**
   * The URL of the Bitbucket Cloud repository for the configuration source.
   */
  "repositoryUrl": string;
  /**
   * The name of the branch in the Bitbucket Cloud repository for the configuration source.
   */
  "branchName"?: string;
  /**
   * The id of the workspace in Bitbucket Cloud for the configuration source
   */
  "workspaceId": string;

  "configSourceType": string;
}

export namespace CreateBitbucketCloudConfigSourceDetails {
  export function getJsonObj(
    obj: CreateBitbucketCloudConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getJsonObj(
            obj
          ) as CreateBitbucketCloudConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "BITBUCKET_CLOUD_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: CreateBitbucketCloudConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateBitbucketCloudConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
