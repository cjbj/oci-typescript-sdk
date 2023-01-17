/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The summary of the Optimizer Statistics Advisor execution.
 */
export interface OptimizerStatisticsAdvisorExecutionSummary {
  /**
   * The name of the Optimizer Statistics Advisor task.
   */
  "taskName": string;
  /**
   * The name of the Optimizer Statistics Advisor execution.
   */
  "executionName": string;
  /**
   * The start time of the time range to retrieve the Optimizer Statistics Advisor execution of a Managed Database
   * in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   *
   */
  "timeStart": Date;
  /**
   * The end time of the time range to retrieve the Optimizer Statistics Advisor execution of a Managed Database
   * in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   *
   */
  "timeEnd": Date;
  /**
   * The status of the Optimizer Statistics Advisor execution.
   */
  "status": OptimizerStatisticsAdvisorExecutionSummary.Status;
  /**
   * The Optimizer Statistics Advisor execution status message, if any.
   */
  "statusMessage"?: string;
  /**
   * The errors in the Optimizer Statistics Advisor execution, if any.
   */
  "errorMessage"?: string;
  /**
   * The number of findings generated by the Optimizer Statistics Advisor execution. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "findings"?: number;
}

export namespace OptimizerStatisticsAdvisorExecutionSummary {
  export enum Status {
    Executing = "EXECUTING",
    Completed = "COMPLETED",
    Interrupted = "INTERRUPTED",
    Cancelled = "CANCELLED",
    FatalError = "FATAL_ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OptimizerStatisticsAdvisorExecutionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OptimizerStatisticsAdvisorExecutionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
