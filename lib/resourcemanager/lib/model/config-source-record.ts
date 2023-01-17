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
 * Information about the Terraform configuration.
 *
 */
export interface ConfigSourceRecord {
  "configSourceRecordType": string;
}

export namespace ConfigSourceRecord {
  export function getJsonObj(obj: ConfigSourceRecord): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configSourceRecordType" in obj && obj.configSourceRecordType) {
      switch (obj.configSourceRecordType) {
        case "DEVOPS_CONFIG_SOURCE":
          return model.DevOpsConfigSourceRecord.getJsonObj(
            <model.DevOpsConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "GIT_CONFIG_SOURCE":
          return model.GitConfigSourceRecord.getJsonObj(
            <model.GitConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "ZIP_UPLOAD":
          return model.ZipUploadConfigSourceRecord.getJsonObj(
            <model.ZipUploadConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_CONFIG_SOURCE":
          return model.BitbucketCloudConfigSourceRecord.getJsonObj(
            <model.BitbucketCloudConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_CONFIG_SOURCE":
          return model.BitbucketServerConfigSourceRecord.getJsonObj(
            <model.BitbucketServerConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_CONFIG_SOURCE":
          return model.ObjectStorageConfigSourceRecord.getJsonObj(
            <model.ObjectStorageConfigSourceRecord>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.configSourceRecordType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigSourceRecord): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configSourceRecordType" in obj && obj.configSourceRecordType) {
      switch (obj.configSourceRecordType) {
        case "DEVOPS_CONFIG_SOURCE":
          return model.DevOpsConfigSourceRecord.getDeserializedJsonObj(
            <model.DevOpsConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "GIT_CONFIG_SOURCE":
          return model.GitConfigSourceRecord.getDeserializedJsonObj(
            <model.GitConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "ZIP_UPLOAD":
          return model.ZipUploadConfigSourceRecord.getDeserializedJsonObj(
            <model.ZipUploadConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_CONFIG_SOURCE":
          return model.BitbucketCloudConfigSourceRecord.getDeserializedJsonObj(
            <model.BitbucketCloudConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_CONFIG_SOURCE":
          return model.BitbucketServerConfigSourceRecord.getDeserializedJsonObj(
            <model.BitbucketServerConfigSourceRecord>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_CONFIG_SOURCE":
          return model.ObjectStorageConfigSourceRecord.getDeserializedJsonObj(
            <model.ObjectStorageConfigSourceRecord>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.configSourceRecordType}`);
      }
    }
    return jsonObj;
  }
}
