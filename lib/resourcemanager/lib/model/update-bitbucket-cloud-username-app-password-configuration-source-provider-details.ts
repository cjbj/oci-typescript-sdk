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
 * Update details for a configuration source provider of the type `BITBUCKET_CLOUD_USERNAME_APPPASSWORD`.
 * This type corresponds to a configuration source provider in Bitbucket that is authenticated with a username and app password.
 *
 */
export interface UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails
  extends model.UpdateConfigurationSourceProviderDetails {
  /**
   * The Bitbucket service endpoint.
   * Example: `https://bitbucket.org/`
   *
   */
  "apiEndpoint"?: string;
  /**
   * The username for the user of the Bitbucket cloud repository.
   */
  "username"?: string;
  /**
   * The secret ocid which is used to authorize the user.
   *
   */
  "secretId"?: string;

  "configSourceProviderType": string;
}

export namespace UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails {
  export function getJsonObj(
    obj: UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigurationSourceProviderDetails.getJsonObj(
            obj
          ) as UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceProviderType = "BITBUCKET_CLOUD_USERNAME_APPPASSWORD";
  export function getDeserializedJsonObj(
    obj: UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigurationSourceProviderDetails.getDeserializedJsonObj(
            obj
          ) as UpdateBitbucketCloudUsernameAppPasswordConfigurationSourceProviderDetails)),
      ...{}
    };

    return jsonObj;
  }
}
