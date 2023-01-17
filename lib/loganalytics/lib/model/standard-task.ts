/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Log analytics scheduled task resource.
 *
 */
export interface StandardTask extends model.ScheduledTask {
  /**
   * The most recent task execution status.
   */
  "lastExecutionStatus"?: StandardTask.LastExecutionStatus;
  /**
   * The date and time the scheduled task last executed, in the format defined by RFC3339.
   */
  "timeLastExecuted"?: Date;

  "kind": string;
}

export namespace StandardTask {
  export enum LastExecutionStatus {
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: StandardTask, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ScheduledTask.getJsonObj(obj) as StandardTask)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "STANDARD";
  export function getDeserializedJsonObj(obj: StandardTask, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ScheduledTask.getDeserializedJsonObj(obj) as StandardTask)),
      ...{}
    };

    return jsonObj;
  }
}
