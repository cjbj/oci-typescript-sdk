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

export interface FailureDetails {
  /**
   * Job failure reason.
   */
  "code": FailureDetails.Code;
  /**
   * A human-readable error string.
   */
  "message": string;
}

export namespace FailureDetails {
  export enum Code {
    InternalServiceError = "INTERNAL_SERVICE_ERROR",
    TerraformExecutionError = "TERRAFORM_EXECUTION_ERROR",
    TerraformConfigUnzipFailed = "TERRAFORM_CONFIG_UNZIP_FAILED",
    InvalidWorkingDirectory = "INVALID_WORKING_DIRECTORY",
    JobTimeout = "JOB_TIMEOUT",
    TerraformConfigVirusFound = "TERRAFORM_CONFIG_VIRUS_FOUND",
    TerraformGitCloneFailure = "TERRAFORM_GIT_CLONE_FAILURE",
    TerraformGitCheckoutFailure = "TERRAFORM_GIT_CHECKOUT_FAILURE",
    TerraformObjectStorageConfigSourceEmptyBucket = "TERRAFORM_OBJECT_STORAGE_CONFIG_SOURCE_EMPTY_BUCKET",
    TerraformObjectStorageConfigSourceNoTfFilePresent = "TERRAFORM_OBJECT_STORAGE_CONFIG_SOURCE_NO_TF_FILE_PRESENT",
    TerraformObjectStorageConfigSourceUnsupportedObjectSize = "TERRAFORM_OBJECT_STORAGE_CONFIG_SOURCE_UNSUPPORTED_OBJECT_SIZE",
    CustomTerraformProviderBucketNotFound = "CUSTOM_TERRAFORM_PROVIDER_BUCKET_NOT_FOUND",
    CustomTerraformProviderUnsupportedObjectSize = "CUSTOM_TERRAFORM_PROVIDER_UNSUPPORTED_OBJECT_SIZE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FailureDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FailureDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
