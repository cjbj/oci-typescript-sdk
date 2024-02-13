/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Summary information about a scheduled task.
 */
export interface ScheduledTaskSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the data plane resource.
   *
   */
  "id": string;
  /**
   * Task type.
   */
  "taskType": model.TaskType;
  /**
   * Target Service
   */
  "targetService"?: string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The date and time the schedule task was created, in the format defined by RFC3339.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the scheduled task was last updated, in the format defined by RFC3339.
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the scheduled task.
   */
  "lifecycleState": string;
  /**
   * Status of the scheduled task.
   */
  "taskStatus"?: ScheduledTaskSummary.TaskStatus;
  /**
   * reason for taskStatus PAUSED.
   */
  "pauseReason"?: string;
  /**
   * most recent Work Request Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the asynchronous request.
   */
  "workRequestId"?: string;
  /**
   * A user-friendly name that is changeable and that does not have to be unique.
   * Format: a leading alphanumeric, followed by zero or more
   * alphanumerics, underscores, spaces, backslashes, or hyphens in any order).
   * No trailing spaces allowed.
   *
   */
  "displayName": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The most recent task execution status.
   */
  "lastExecutionStatus"?: ScheduledTaskSummary.LastExecutionStatus;
  /**
   * The date and time the scheduled task last executed, in the format defined by RFC3339.
   */
  "timeLastExecuted"?: Date;
}

export namespace ScheduledTaskSummary {
  export enum TaskStatus {
    Ready = "READY",
    Paused = "PAUSED",
    Completed = "COMPLETED",
    Blocked = "BLOCKED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LastExecutionStatus {
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ScheduledTaskSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledTaskSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
