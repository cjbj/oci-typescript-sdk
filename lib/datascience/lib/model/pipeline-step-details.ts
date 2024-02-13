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
 * A step in the pipeline.
 */
export interface PipelineStepDetails {
  /**
   * The name of the step. It must be unique within the pipeline. This is used to create the pipeline DAG.
   */
  "stepName": string;
  /**
   * A short description of the step.
   */
  "description"?: string;
  /**
   * The list of step names this current step depends on for execution.
   */
  "dependsOn"?: Array<string>;
  "stepConfigurationDetails"?: model.PipelineStepConfigurationDetails;

  "stepType": string;
}

export namespace PipelineStepDetails {
  export function getJsonObj(obj: PipelineStepDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "stepConfigurationDetails": obj.stepConfigurationDetails
          ? model.PipelineStepConfigurationDetails.getJsonObj(obj.stepConfigurationDetails)
          : undefined
      }
    };

    if (obj && "stepType" in obj && obj.stepType) {
      switch (obj.stepType) {
        case "ML_JOB":
          return model.PipelineMLJobStepDetails.getJsonObj(
            <model.PipelineMLJobStepDetails>(<object>jsonObj),
            true
          );
        case "CUSTOM_SCRIPT":
          return model.PipelineCustomScriptStepDetails.getJsonObj(
            <model.PipelineCustomScriptStepDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.stepType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PipelineStepDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "stepConfigurationDetails": obj.stepConfigurationDetails
          ? model.PipelineStepConfigurationDetails.getDeserializedJsonObj(
              obj.stepConfigurationDetails
            )
          : undefined
      }
    };

    if (obj && "stepType" in obj && obj.stepType) {
      switch (obj.stepType) {
        case "ML_JOB":
          return model.PipelineMLJobStepDetails.getDeserializedJsonObj(
            <model.PipelineMLJobStepDetails>(<object>jsonObj),
            true
          );
        case "CUSTOM_SCRIPT":
          return model.PipelineCustomScriptStepDetails.getDeserializedJsonObj(
            <model.PipelineCustomScriptStepDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.stepType}`);
      }
    }
    return jsonObj;
  }
}
