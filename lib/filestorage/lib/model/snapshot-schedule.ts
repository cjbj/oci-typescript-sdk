/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * The snapshot schedule is a structure within a parent file system snapshot policy. It contains data about
 * the frequency of snapshot creation and the retention time of the taken snapshots.
 *
 */
export interface SnapshotSchedule {
  /**
    * A name prefix to be applied to snapshots created by this schedule.
* <p>
Example: `compliance1`
* 
    */
  "schedulePrefix"?: string;
  /**
   * The starting point used to begin the scheduling of the snapshots based upon recurrence string
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   * If no `timeScheduleStart` is provided, the value will be set to the time when the schedule was created.
   *
   */
  "timeScheduleStart"?: Date;
  /**
   * The frequency of scheduled snapshots.
   */
  "period": SnapshotSchedule.Period;
  /**
   * The number of seconds to retain snapshots created with this schedule.
   * Snapshot expiration time will not be set if this value is empty.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionDurationInSeconds"?: number;
  /**
   * Time zone used for scheduling the snapshot.
   */
  "timeZone": SnapshotSchedule.TimeZone;
  /**
   * The hour of the day to create a DAILY, WEEKLY, MONTHLY, or YEARLY snapshot.
   * If not set, a value will be chosen at creation time.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hourOfDay"?: number;
  /**
   * The day of the week to create a scheduled snapshot.
   * Used for WEEKLY snapshot schedules.
   *
   */
  "dayOfWeek"?: SnapshotSchedule.DayOfWeek;
  /**
   * The day of the month to create a scheduled snapshot.
   * If the day does not exist for the month, snapshot creation will be skipped.
   * Used for MONTHLY and YEARLY snapshot schedules.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dayOfMonth"?: number;
  /**
   * The month to create a scheduled snapshot.
   * Used only for YEARLY snapshot schedules.
   *
   */
  "month"?: SnapshotSchedule.Month;
}

export namespace SnapshotSchedule {
  export enum Period {
    Hourly = "HOURLY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Yearly = "YEARLY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TimeZone {
    Utc = "UTC",
    RegionalDataCenterTime = "REGIONAL_DATA_CENTER_TIME",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DayOfWeek {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Month {
    January = "JANUARY",
    February = "FEBRUARY",
    March = "MARCH",
    April = "APRIL",
    May = "MAY",
    June = "JUNE",
    July = "JULY",
    August = "AUGUST",
    September = "SEPTEMBER",
    October = "OCTOBER",
    November = "NOVEMBER",
    December = "DECEMBER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SnapshotSchedule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SnapshotSchedule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
