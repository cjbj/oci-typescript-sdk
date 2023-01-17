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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Metadata about the Bitbucket Cloud configuration source.
 *
 */
export interface BitbucketCloudConfigSourceRecord extends model.ConfigSourceRecord {
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm))
   * for the Bitbucket Cloud configuration source.
   *
   */
  "configurationSourceProviderId": string;
  /**
   * The URL of the Bitbucket Cloud repository.
   */
  "repositoryUrl": string;
  /**
   * The name of the branch within the Bitbucket Cloud repository.
   */
  "branchName"?: string;
  /**
   * The id of the workspace in Bitbucket Cloud for the configuration source.
   */
  "workspaceId": string;
  /**
   * The unique identifier (SHA-1 hash) of the individual change to the Bitbucket Cloud repository.
   */
  "commitId"?: string;

  "configSourceRecordType": string;
}

export namespace BitbucketCloudConfigSourceRecord {
  export function getJsonObj(
    obj: BitbucketCloudConfigSourceRecord,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSourceRecord.getJsonObj(obj) as BitbucketCloudConfigSourceRecord)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceRecordType = "BITBUCKET_CLOUD_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: BitbucketCloudConfigSourceRecord,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSourceRecord.getDeserializedJsonObj(
            obj
          ) as BitbucketCloudConfigSourceRecord)),
      ...{}
    };

    return jsonObj;
  }
}
