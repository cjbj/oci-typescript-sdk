/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Sql Stats type object.
 */
export interface SqlStats {
  /**
   * Unique SQL_ID for a SQL Statement.
   *
   */
  "sqlIdentifier": string;
  /**
   * Plan hash value for the SQL Execution Plan Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "planHashValue": number;
  /**
   * Collection timestamp
   * Example: `\"2020-03-31T00:00:00.000Z\"`
   *
   */
  "timeCollected": Date;
  /**
   * Name of Database Instance
   * Example: `\"DB10902_1\"`
   *
   */
  "instanceName": string;
  /**
   * last_active_time
   * Example: `\"0000000099CCE300\"`
   *
   */
  "lastActiveTime"?: string;
  /**
   * Total integer of parse calls
   *  Example: `60`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parseCalls"?: number;
  /**
   * Number of disk reads Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "diskReads"?: number;
  /**
   * Number of direct reads Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "directReads"?: number;
  /**
   * Number of Direct writes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "directWrites"?: number;
  /**
   * Number of Buffer Gets Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bufferGets"?: number;
  /**
   * Number of row processed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rowsProcessed"?: number;
  /**
   * Number of serializable aborts Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serializableAborts"?: number;
  /**
   * Number of fetches Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fetches"?: number;
  /**
   * Number of executions Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "executions"?: number;
  /**
   * Number of executions attempted on this object, but prevented due to the SQL statement being in quarantine Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avoidedExecutions"?: number;
  /**
   * Number of times this cursor was fully executed since the cursor was brought into the library cache Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endOfFetchCount"?: number;
  /**
   * Number of times the object was either loaded or reloaded Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "loads"?: number;
  /**
   * Number of cursors present in the cache with this SQL text and plan Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionCount"?: number;
  /**
   * Number of times this child cursor has been invalidated Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invalidations"?: number;
  /**
   * Number of times that a parent cursor became obsolete Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "obsoleteCount"?: number;
  /**
   * Total number of executions performed by parallel execution servers (0 when the statement has never been executed in parallel) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pxServersExecutions"?: number;
  /**
   * CPU time (in microseconds) used by this cursor for parsing, executing, and fetching Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuTimeInUs"?: number;
  /**
   * Elapsed time (in microseconds) used by this cursor for parsing, executing, and fetching. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "elapsedTimeInUs"?: number;
  /**
   * Average hard parse time (in microseconds) used by this cursor Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgHardParseTimeInUs"?: number;
  /**
   * Concurrency wait time (in microseconds) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "concurrencyWaitTimeInUs"?: number;
  /**
   * Application wait time (in microseconds) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "applicationWaitTimeInUs"?: number;
  /**
   * Cluster wait time (in microseconds). This value is specific to Oracle RAC Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clusterWaitTimeInUs"?: number;
  /**
   * User I/O wait time (in microseconds) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "userIoWaitTimeInUs"?: number;
  /**
   * PL/SQL execution time (in microseconds) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "plsqlExecTimeInUs"?: number;
  /**
   * Java execution time (in microseconds) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "javaExecTimeInUs"?: number;
  /**
   * Number of sorts that were done for the child cursor Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sorts"?: number;
  /**
   * Total shared memory (in bytes) currently occupied by all cursors with this SQL text and plan Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sharableMem"?: number;
  /**
   * Total shared memory (in bytes) occupied by all cursors with this SQL text and plan if they were to be fully loaded in the shared pool (that is, cursor size) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSharableMem"?: number;
  /**
   * Typecheck memory Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "typeCheckMem"?: number;
  /**
   * Number of I/O bytes which can be filtered by the Exadata storage system Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioCellOffloadEligibleBytes"?: number;
  /**
   * Number of I/O bytes exchanged between Oracle Database and the storage system. Typically used for Cache Fusion or parallel queries Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioInterconnectBytes"?: number;
  /**
   * Number of physical read I/O requests issued by the monitored SQL. The requests may not be disk reads Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "physicalReadRequests"?: number;
  /**
   * Number of bytes read from disks by the monitored SQL Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "physicalReadBytes"?: number;
  /**
   * Number of physical write I/O requests issued by the monitored SQL Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "physicalWriteRequests"?: number;
  /**
   * Number of bytes written to disks by the monitored SQL Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "physicalWriteBytes"?: number;
  /**
   * exact_matching_signature
   * Example: `\"18067345456756876713\"`
   *
   */
  "exactMatchingSignature"?: string;
  /**
   * force_matching_signature
   * Example: `\"18067345456756876713\"`
   *
   */
  "forceMatchingSignature"?: string;
  /**
   * Number of uncompressed bytes (that is, size after decompression) that are offloaded to the Exadata cells Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioCellUncompressedBytes"?: number;
  /**
   * Number of bytes that are returned by Exadata cell through the regular I/O path Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ioCellOffloadReturnedBytes"?: number;
  /**
   * Number of this child cursor Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "childNumber"?: number;
  /**
   * Oracle command type definition Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "commandType"?: number;
  /**
   * Number of users that have any of the child cursors open Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usersOpening"?: number;
  /**
   * Number of users executing the statement Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usersExecuting"?: number;
  /**
   * Cost of this query given by the optimizer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "optimizerCost"?: number;
  /**
   * Total Number of rows in SQLStats table
   */
  "fullPlanHashValue"?: string;
  /**
   * Module name
   */
  "module"?: string;
  /**
   * Service name
   */
  "service"?: string;
  /**
   * Contains the name of the action that was executing when the SQL statement was first parsed, which is set by calling DBMS_APPLICATION_INFO.SET_ACTION
   */
  "action"?: string;
  /**
   * SQL profile used for this statement, if any
   */
  "sqlProfile"?: string;
  /**
   * SQL patch used for this statement, if any
   */
  "sqlPatch"?: string;
  /**
   * SQL plan baseline used for this statement, if any
   */
  "sqlPlanBaseline"?: string;
  /**
   * Number of executions for the cursor since the last AWR snapshot Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaExecutionCount"?: number;
  /**
   * CPU time (in microseconds) for the cursor since the last AWR snapshot Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaCpuTime"?: number;
  /**
   * Number of I/O bytes exchanged between the Oracle database and the storage system for the cursor since the last AWR snapshot Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaIoBytes"?: number;
  /**
   * Rank based on CPU Consumption Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaCpuRank"?: number;
  /**
   * Rank based on number of execution Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaExecsRank"?: number;
  /**
   * Rank based on sharable memory Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sharableMemRank"?: number;
  /**
   * Rank based on I/O Consumption Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaIoRank"?: number;
  /**
   * Harmonic sum based on ranking parameters Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "harmonicSum"?: number;
  /**
   * Weight based harmonic sum of ranking parameters  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "wtHarmonicSum"?: number;
  /**
   * Total number of rows in SQLStats table Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSqlCount"?: number;
}

export namespace SqlStats {
  export function getJsonObj(obj: SqlStats): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlStats): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
