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
 * The information about new PipelineRun.
 */
export interface CreatePipelineRunDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project to associate the pipeline run with.
   */
  "projectId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the pipeline run.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the pipeline for which pipeline run is created.
   */
  "pipelineId": string;
  /**
   * A user-friendly display name for the resource.
   */
  "displayName"?: string;
  "configurationOverrideDetails"?: model.PipelineDefaultConfigurationDetails;
  "logConfigurationOverrideDetails"?: model.PipelineLogConfigurationDetails;
  /**
   * Array of step override details. Only Step Configuration is allowed to be overridden.
   */
  "stepOverrideDetails"?: Array<model.PipelineStepOverrideDetails>;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreatePipelineRunDetails {
  export function getJsonObj(obj: CreatePipelineRunDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurationOverrideDetails": obj.configurationOverrideDetails
          ? model.PipelineConfigurationDetails.getJsonObj(obj.configurationOverrideDetails)
          : undefined,
        "logConfigurationOverrideDetails": obj.logConfigurationOverrideDetails
          ? model.PipelineLogConfigurationDetails.getJsonObj(obj.logConfigurationOverrideDetails)
          : undefined,
        "stepOverrideDetails": obj.stepOverrideDetails
          ? obj.stepOverrideDetails.map(item => {
              return model.PipelineStepOverrideDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePipelineRunDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurationOverrideDetails": obj.configurationOverrideDetails
          ? model.PipelineConfigurationDetails.getDeserializedJsonObj(
              obj.configurationOverrideDetails
            )
          : undefined,
        "logConfigurationOverrideDetails": obj.logConfigurationOverrideDetails
          ? model.PipelineLogConfigurationDetails.getDeserializedJsonObj(
              obj.logConfigurationOverrideDetails
            )
          : undefined,
        "stepOverrideDetails": obj.stepOverrideDetails
          ? obj.stepOverrideDetails.map(item => {
              return model.PipelineStepOverrideDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
