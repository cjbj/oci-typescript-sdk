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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of the job schedule.
 */
export interface JobScheduleDetails {
  /**
   * The start time of the scheduled job in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   */
  "startTime"?: string;
  /**
   * The end time of the scheduled job in UTC in ISO-8601 format, which is \"yyyy-MM-dd'T'hh:mm:ss.sss'Z'\".
   */
  "endTime"?: string;
  /**
   * The interval type for a recurring scheduled job. For a non-recurring (one time) job, NEVER must be specified as the interval type.
   */
  "intervalType"?: JobScheduleDetails.IntervalType;
  /**
   * The value for the interval period for a recurring scheduled job.
   */
  "intervalValue"?: string;
}

export namespace JobScheduleDetails {
  export enum IntervalType {
    Daily = "DAILY",
    Hourly = "HOURLY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Never = "NEVER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JobScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
