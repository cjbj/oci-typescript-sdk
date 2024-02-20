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
 * Update details for a configuration source.
 *
 */
export interface UpdateConfigSourceDetails {
  /**
   * File path to the directory to use for running Terraform.
   * If not specified, the root directory is used.
   * Required when using a zip Terraform configuration ({@code configSourceType} value of {@code ZIP_UPLOAD}) that contains folders.
   * Ignored for the {@code configSourceType} value of {@code COMPARTMENT_CONFIG_SOURCE}.
   * For more information about required and recommended file structure, see
   * [File Structure (Terraform Configurations for Resource Manager)](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/terraformconfigresourcemanager.htm#filestructure).
   *
   */
  "workingDirectory"?: string;

  "configSourceType": string;
}

export namespace UpdateConfigSourceDetails {
  export function getJsonObj(obj: UpdateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configSourceType" in obj && obj.configSourceType) {
      switch (obj.configSourceType) {
        case "BITBUCKET_CLOUD_CONFIG_SOURCE":
          return model.UpdateBitbucketCloudConfigSourceDetails.getJsonObj(
            <model.UpdateBitbucketCloudConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_CONFIG_SOURCE":
          return model.UpdateBitbucketServerConfigSourceDetails.getJsonObj(
            <model.UpdateBitbucketServerConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "GIT_CONFIG_SOURCE":
          return model.UpdateGitConfigSourceDetails.getJsonObj(
            <model.UpdateGitConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_CONFIG_SOURCE":
          return model.UpdateObjectStorageConfigSourceDetails.getJsonObj(
            <model.UpdateObjectStorageConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "ZIP_UPLOAD":
          return model.UpdateZipUploadConfigSourceDetails.getJsonObj(
            <model.UpdateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "DEVOPS_CONFIG_SOURCE":
          return model.UpdateDevOpsConfigSourceDetails.getJsonObj(
            <model.UpdateDevOpsConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.configSourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configSourceType" in obj && obj.configSourceType) {
      switch (obj.configSourceType) {
        case "BITBUCKET_CLOUD_CONFIG_SOURCE":
          return model.UpdateBitbucketCloudConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateBitbucketCloudConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_CONFIG_SOURCE":
          return model.UpdateBitbucketServerConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateBitbucketServerConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "GIT_CONFIG_SOURCE":
          return model.UpdateGitConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateGitConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_CONFIG_SOURCE":
          return model.UpdateObjectStorageConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateObjectStorageConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "ZIP_UPLOAD":
          return model.UpdateZipUploadConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "DEVOPS_CONFIG_SOURCE":
          return model.UpdateDevOpsConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateDevOpsConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.configSourceType}`);
      }
    }
    return jsonObj;
  }
}
