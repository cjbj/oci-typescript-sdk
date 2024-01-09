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
 * The details required to load plans from Automatic Workload Repository (AWR).
 *
 */
export interface LoadSqlPlanBaselinesFromAwrDetails {
  /**
   * The name of the database job used for loading SQL plan baselines.
   */
  "jobName": string;
  /**
   * The description of the job.
   */
  "jobDescription"?: string;
  /**
   * The begin snapshot. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "beginSnapshot": number;
  /**
   * The end snapshot. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endSnapshot": number;
  /**
   * A filter applied to AWR to select only qualifying plans to be loaded.
   * By default all plans in AWR are selected. The filter can take the form of
   * any `WHERE` clause predicate that can be specified against the column
   * `DBA_HIST_SQLTEXT.SQL_TEXT`. An example is `sql_text like 'SELECT %'`.
   *
   */
  "sqlTextFilter"?: string;
  /**
   * Indicates whether the plans are loaded as fixed plans (`true`) or non-fixed plans (`false`).
   * By default, they are loaded as non-fixed plans.
   *
   */
  "isFixed"?: boolean;
  /**
   * Indicates whether the loaded plans are enabled (`true`) or not (`false`).
   * By default, they are enabled.
   *
   */
  "isEnabled"?: boolean;
  "credentials": model.ManagedDatabasePasswordCredential | model.ManagedDatabaseSecretCredential;
}

export namespace LoadSqlPlanBaselinesFromAwrDetails {
  export function getJsonObj(obj: LoadSqlPlanBaselinesFromAwrDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LoadSqlPlanBaselinesFromAwrDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getDeserializedJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
