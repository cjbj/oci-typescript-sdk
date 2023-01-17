/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * A MediaWorkflowJob represents a run of a MediaWorkflow for a specific set of parameters and configurations.
 *
 */
export interface MediaWorkflowJob {
  /**
   * Configurations to be applied to this run of the workflow.
   */
  "mediaWorkflowConfigurationIds"?: Array<string>;
  /**
   * The workflow to execute.
   */
  "mediaWorkflowId": string;
  /**
   * Unique identifier for this run of the workflow.
   */
  "id": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Name of the Media Workflow Job. Does not have to be unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The current state of the MediaWorkflowJob.
   */
  "lifecycleState"?: MediaWorkflowJob.LifecycleState;
  /**
   * The lifecyle details.
   */
  "lifecycleDetails"?: string;
  /**
   * Status of each task.
   */
  "taskLifecycleState"?: Array<model.MediaWorkflowTaskState>;
  /**
   * Parameters that override parameters specified in MediaWorkflowTaskDeclarations, the MediaWorkflow,
   * the MediaWorkflow's MediaWorkflowConfigurations and the MediaWorkflowConfigurations of this
   * MediaWorkflowJob. The parameters are given as JSON.  The top level and 2nd level elements must be
   * JSON objects (vs arrays, scalars, etc). The top level keys refer to a task's key and the 2nd level
   * keys refer to a parameter's name.
   *
   */
  "parameters"?: { [key: string]: any };
  /**
   * Creation time of the job. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Updated time of the job. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * A JSON representation of the job as it will be run by the system. All the task declarations, configurations
   * and parameters are merged. Parameter values are all fully resolved.
   *
   */
  "runnable"?: { [key: string]: any };
  /**
   * A list of JobOutput for the workflowJob.
   */
  "outputs"?: Array<model.JobOutput>;
  /**
   * Time when the job started to execute. An RFC3339 formatted datetime string.
   */
  "timeStarted"?: Date;
  /**
   * Time when the job finished. An RFC3339 formatted datetime string.
   */
  "timeEnded"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MediaWorkflowJob {
  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Waiting = "WAITING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MediaWorkflowJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskLifecycleState": obj.taskLifecycleState
          ? obj.taskLifecycleState.map(item => {
              return model.MediaWorkflowTaskState.getJsonObj(item);
            })
          : undefined,

        "outputs": obj.outputs
          ? obj.outputs.map(item => {
              return model.JobOutput.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MediaWorkflowJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskLifecycleState": obj.taskLifecycleState
          ? obj.taskLifecycleState.map(item => {
              return model.MediaWorkflowTaskState.getDeserializedJsonObj(item);
            })
          : undefined,

        "outputs": obj.outputs
          ? obj.outputs.map(item => {
              return model.JobOutput.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
