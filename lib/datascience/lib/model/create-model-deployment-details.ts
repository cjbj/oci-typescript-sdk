/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Parameters needed to create a new model deployment. Model deployments are used by data scientists to perform predictions from the model hosted on an HTTP server.
 *
 */
export interface CreateModelDeploymentDetails {
  /**
   * A user-friendly display name for the resource. Does not have to be unique, and can be modified. Avoid entering confidential information.
   * Example: {@code My ModelDeployment}
   *
   */
  "displayName"?: string;
  /**
   * A short description of the model deployment.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project to associate with the model deployment.
   */
  "projectId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the model deployment.
   */
  "compartmentId": string;
  "modelDeploymentConfigurationDetails": model.SingleModelDeploymentConfigurationDetails;
  "categoryLogDetails"?: model.CategoryLogDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateModelDeploymentDetails {
  export function getJsonObj(obj: CreateModelDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDeploymentConfigurationDetails": obj.modelDeploymentConfigurationDetails
          ? model.ModelDeploymentConfigurationDetails.getJsonObj(
              obj.modelDeploymentConfigurationDetails
            )
          : undefined,
        "categoryLogDetails": obj.categoryLogDetails
          ? model.CategoryLogDetails.getJsonObj(obj.categoryLogDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateModelDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDeploymentConfigurationDetails": obj.modelDeploymentConfigurationDetails
          ? model.ModelDeploymentConfigurationDetails.getDeserializedJsonObj(
              obj.modelDeploymentConfigurationDetails
            )
          : undefined,
        "categoryLogDetails": obj.categoryLogDetails
          ? model.CategoryLogDetails.getDeserializedJsonObj(obj.categoryLogDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
