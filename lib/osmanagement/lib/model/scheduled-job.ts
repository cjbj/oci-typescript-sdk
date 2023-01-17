/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Detailed information about a Scheduled Job
 */
export interface ScheduledJob {
  /**
   * OCID for the Scheduled Job
   */
  "id": string;
  /**
   * OCID for the Compartment
   */
  "compartmentId"?: string;
  /**
   * Scheduled Job name
   */
  "displayName": string;
  /**
   * Details describing the Scheduled Job.
   */
  "description"?: string;
  /**
   * the type of scheduling this Scheduled Job follows
   */
  "scheduleType"?: model.ScheduleTypes;
  /**
   * the time of the next execution of this Scheduled Job
   */
  "timeNextExecution"?: Date;
  /**
   * the time of the last execution of this Scheduled Job
   */
  "timeLastExecution"?: Date;
  /**
   * the interval period for a recurring Scheduled Job (only if schedule type is RECURRING)
   */
  "intervalType"?: model.IntervalTypes;
  /**
   * the value for the interval period for a recurring Scheduled Job (only if schedule type is RECURRING)
   */
  "intervalValue"?: string;
  /**
   * the list of managed instances this scheduled job operates on (mutually exclusive with managedInstanceGroups)
   */
  "managedInstances"?: Array<model.Id>;
  /**
   * the list of managed instance groups this scheduled job operates on (mutually exclusive with managedInstances)
   */
  "managedInstanceGroups"?: Array<model.Id>;
  /**
   * the type of operation this Scheduled Job performs
   */
  "operationType"?: model.OperationTypes;
  /**
   * Type of the update (only if operation type is UPDATEALL)
   */
  "updateType"?: model.PackageUpdateTypes;
  /**
   * the names of the updates (only if operation type is INSTALL/UPDATE/REMOVE)
   */
  "packageNames"?: Array<model.PackageName>;
  /**
   * list of Work Requests associated with this Scheduled Job
   */
  "workRequests"?: Array<model.Id>;
  /**
   * The current state of the Scheduled Job.
   */
  "lifecycleState"?: model.LifecycleStates;
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
   * The unique names of the Windows Updates (only if operation type is INSTALL).
   * This is only applicable when the osFamily is for Windows managed instances.
   *
   */
  "updateNames"?: Array<string>;
  /**
   * The Operating System type of the managed instance.
   */
  "osFamily"?: model.OsFamilies;
  /**
   * true, if the schedule job has its update capabilities restricted. (Used to track Autonomous Scheduled Job)
   */
  "isRestricted"?: boolean;
}

export namespace ScheduledJob {
  export function getJsonObj(obj: ScheduledJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstances": obj.managedInstances
          ? obj.managedInstances.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,
        "managedInstanceGroups": obj.managedInstanceGroups
          ? obj.managedInstanceGroups.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,

        "packageNames": obj.packageNames
          ? obj.packageNames.map(item => {
              return model.PackageName.getJsonObj(item);
            })
          : undefined,
        "workRequests": obj.workRequests
          ? obj.workRequests.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstances": obj.managedInstances
          ? obj.managedInstances.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined,
        "managedInstanceGroups": obj.managedInstanceGroups
          ? obj.managedInstanceGroups.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined,

        "packageNames": obj.packageNames
          ? obj.packageNames.map(item => {
              return model.PackageName.getDeserializedJsonObj(item);
            })
          : undefined,
        "workRequests": obj.workRequests
          ? obj.workRequests.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
