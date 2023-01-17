/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * Possible execution statuses for a DR Plan Step.
 * - QUEUED - DR Plan Step execution has been queued.
 * - DISABLED - DR Plan Step execution has been disabled.
 * - IN_PROGRESS - DR Plan Step execution is in progress.
 * - SUCCEEDED - DR Plan Step execution has succeeded.
 * - FAILED - DR Plan Step execution has failed.
 * - FAILED_IGNORED - DR Plan Step execution has failed, but was ignored.
 * - TIMED_OUT - DR Plan Step execution has timed out.
 * - TIMED_OUT_IGNORED - DR Plan Step execution has timed out, but was ignored.
 * - PAUSED - DR Plan Step execution has paused.
 * - CANCELED - DR Plan Step execution has been canceled.
 *
 **/
export enum DrPlanStepExecutionStatus {
  Queued = "QUEUED",
  Disabled = "DISABLED",
  InProgress = "IN_PROGRESS",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
  FailedIgnored = "FAILED_IGNORED",
  TimedOut = "TIMED_OUT",
  TimedOutIgnored = "TIMED_OUT_IGNORED",
  Paused = "PAUSED",
  Canceled = "CANCELED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrPlanStepExecutionStatus {
  export function getJsonObj(obj: DrPlanStepExecutionStatus): DrPlanStepExecutionStatus {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DrPlanStepExecutionStatus
  ): DrPlanStepExecutionStatus {
    return obj;
  }
}
