/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window.
 *
 */
export interface MaintenanceWindow {
  /**
   * The maintenance window scheduling preference.
   */
  "preference"?: MaintenanceWindow.Preference;
  /**
   * Cloud Exadata infrastructure node patching method, either \"ROLLING\" or \"NONROLLING\". Default value is ROLLING.
   * <p>
   *IMPORTANT*: Non-rolling infrastructure patching involves system down time. See [Oracle-Managed Infrastructure Maintenance Updates](https://docs.cloud.oracle.com/iaas/Content/Database/Concepts/examaintenance.htm#Oracle) for more information.
   *
   */
  "patchingMode"?: MaintenanceWindow.PatchingMode;
  /**
   * If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.
   */
  "isCustomActionTimeoutEnabled"?: boolean;
  /**
   * Determines the amount of time the system will wait before the start of each database server patching operation.
   * Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "customActionTimeoutInMins"?: number;
  /**
   * If true, enables the monthly patching option.
   */
  "isMonthlyPatchingEnabled"?: boolean;
  /**
   * Months during the year when maintenance should be performed.
   */
  "months"?: Array<model.Month>;
  /**
   * Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week.
   * For example, to allow maintenance during the 2nd week of the month (from the 8th day to the 14th day of the month), use the value 2. Maintenance cannot be scheduled for the fifth week of months that contain more than 28 days.
   * Note that this parameter works in conjunction with the  daysOfWeek and hoursOfDay parameters to allow you to specify specific days of the week and hours that maintenance will be performed.
   *
   */
  "weeksOfMonth"?: Array<number>;
  /**
   * Days during the week when maintenance should be performed.
   */
  "daysOfWeek"?: Array<model.DayOfWeek>;
  /**
   * The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are
   * - 0 - represents time slot 0:00 - 3:59 UTC - 4 - represents time slot 4:00 - 7:59 UTC - 8 - represents time slot 8:00 - 11:59 UTC - 12 - represents time slot 12:00 - 15:59 UTC - 16 - represents time slot 16:00 - 19:59 UTC - 20 - represents time slot 20:00 - 23:59 UTC
   */
  "hoursOfDay"?: Array<number>;
  /**
   * Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "leadTimeInWeeks"?: number;
  /**
   * If true, skips the release update (RU) for the quarter. You cannot skip two consecutive quarters. An RU skip request will only be honoured if the current version of the Autonomous Container Database is supported for current quarter.
   *
   */
  "skipRu"?: Array<boolean>;
}

export namespace MaintenanceWindow {
  export enum Preference {
    NoPreference = "NO_PREFERENCE",
    CustomPreference = "CUSTOM_PREFERENCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PatchingMode {
    Rolling = "ROLLING",
    Nonrolling = "NONROLLING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MaintenanceWindow): object {
    const jsonObj = {
      ...obj,
      ...{
        "months": obj.months
          ? obj.months.map(item => {
              return model.Month.getJsonObj(item);
            })
          : undefined,

        "daysOfWeek": obj.daysOfWeek
          ? obj.daysOfWeek.map(item => {
              return model.DayOfWeek.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaintenanceWindow): object {
    const jsonObj = {
      ...obj,
      ...{
        "months": obj.months
          ? obj.months.map(item => {
              return model.Month.getDeserializedJsonObj(item);
            })
          : undefined,

        "daysOfWeek": obj.daysOfWeek
          ? obj.daysOfWeek.map(item => {
              return model.DayOfWeek.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
