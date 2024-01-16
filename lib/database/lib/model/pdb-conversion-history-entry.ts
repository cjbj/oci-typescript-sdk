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
 * Details of operations performed to convert a non-container database to pluggable database.
 *
 */
export interface PdbConversionHistoryEntry {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database conversion history.
   */
  "id": string;
  /**
   * The operations used to convert a non-container database to a pluggable database.
   * - Use {@code PRECHECK} to run a pre-check operation on non-container database prior to converting it into a pluggable database.
   * - Use {@code CONVERT} to convert a non-container database into a pluggable database.
   * - Use {@code SYNC} if the non-container database was manually converted into a pluggable database using the dbcli command-line utility. Databases may need to be converted manually if the CONVERT action fails when converting a non-container database using the API.
   * - Use {@code SYNC_ROLLBACK} if the conversion of a non-container database into a pluggable database was manually rolled back using the dbcli command line utility. Conversions may need to be manually rolled back if the CONVERT action fails when converting a non-container database using the API.
   *
   */
  "action": PdbConversionHistoryEntry.Action;
  /**
   * The target container database of the pluggable database created by the database conversion operation. Currently, the database conversion operation only supports creating the pluggable database in a new container database.
   *  - Use {@code NEW_DATABASE} to specify that the pluggable database be created within a new container database in the same database home.
   *
   */
  "target"?: PdbConversionHistoryEntry.Target;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database.
   */
  "sourceDatabaseId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database.
   */
  "targetDatabaseId"?: string;
  /**
   * The database name. The name must begin with an alphabetic character and can contain a maximum of 8 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
   */
  "cdbName": string;
  /**
   * Status of an operation performed during the conversion of a non-container database to a pluggable database.
   */
  "lifecycleState": PdbConversionHistoryEntry.LifecycleState;
  /**
   * Additional information about the current lifecycle state for the conversion operation.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time when the database conversion operation started.
   */
  "timeStarted": Date;
  /**
   * The date and time when the database conversion operation ended.
   */
  "timeEnded"?: Date;
  /**
   * Additional container database parameter.
   *
   */
  "additionalCdbParams"?: string;
}

export namespace PdbConversionHistoryEntry {
  export enum Action {
    Precheck = "PRECHECK",
    Convert = "CONVERT",
    Sync = "SYNC",
    SyncRollback = "SYNC_ROLLBACK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Target {
    NewDatabase = "NEW_DATABASE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PdbConversionHistoryEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PdbConversionHistoryEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
