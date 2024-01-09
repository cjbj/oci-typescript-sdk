/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
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
 * Backup performance and storage utilization metrics for the protected database.
 */
export interface Metrics {
  /**
   * Backup storage space, in gigabytes, utilized by the protected database. Oracle charges for the total storage used. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "backupSpaceUsedInGBs"?: number;
  /**
   * The estimated backup storage space, in gigabytes, required to meet the recovery window goal, including foot print and backups for the protected database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "backupSpaceEstimateInGBs"?: number;
  /**
   * This is the time window when there is data loss exposure. The point after which recovery is impossible unless additional redo is available.
   * This is the time we received the last backup or last redo-log shipped.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "unprotectedWindowInSeconds"?: number;
  /**
   * The estimated space, in gigabytes, consumed by the protected database. The database size is based on the size of the data files in the catalog, and does not include archive logs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbSizeInGBs"?: number;
  /**
   * The value TRUE indicates that the protected database is configured to use Real-time data protection, and redo-data is sent from the protected database to Recovery Service.
   * Real-time data protection substantially reduces the window of potential data loss that exists between successive archived redo log backups.
   *
   */
  "isRedoLogsEnabled"?: boolean;
  /**
   * The maximum number of days to retain backups for a protected database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionPeriodInDays"?: number;
  /**
   * Number of seconds backups are currently retained for this database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentRetentionPeriodInSeconds"?: number;
}

export namespace Metrics {
  export function getJsonObj(obj: Metrics): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Metrics): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
