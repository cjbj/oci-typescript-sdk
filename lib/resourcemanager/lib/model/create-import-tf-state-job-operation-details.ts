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
 * Job details that are specific to import Terraform state operations.
 *
 */
export interface CreateImportTfStateJobOperationDetails extends model.CreateJobOperationDetails {
  /**
   * Base64-encoded state file
   *
   */
  "tfStateBase64Encoded": string;

  "operation": string;
}

export namespace CreateImportTfStateJobOperationDetails {
  export function getJsonObj(
    obj: CreateImportTfStateJobOperationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateJobOperationDetails.getJsonObj(
            obj
          ) as CreateImportTfStateJobOperationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "IMPORT_TF_STATE";
  export function getDeserializedJsonObj(
    obj: CreateImportTfStateJobOperationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateJobOperationDetails.getDeserializedJsonObj(
            obj
          ) as CreateImportTfStateJobOperationDetails)),
      ...{}
    };

    return jsonObj;
  }
}
