/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/ListSqlTuningAdvisorTaskFindings.ts.html |here} to see how to use ListSqlTuningAdvisorTaskFindingsRequest.
 */
export interface ListSqlTuningAdvisorTaskFindingsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * The SQL tuning task identifier. This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "sqlTuningAdvisorTaskId": number;
  /**
   * The optional greater than or equal to filter on the execution ID related to a specific SQL Tuning Advisor task.
   */
  "beginExecId"?: number;
  /**
   * The optional less than or equal to query parameter to filter on the execution ID related to a specific SQL Tuning Advisor task.
   */
  "endExecId"?: number;
  /**
   * The search period during which the API will search for begin and end exec id, if not supplied.
   * Unused if beginExecId and endExecId optional query params are both supplied.
   *
   */
  "searchPeriod"?: ListSqlTuningAdvisorTaskFindingsRequest.SearchPeriod;
  /**
   * The filter used to display specific findings in the report.
   */
  "findingFilter"?: ListSqlTuningAdvisorTaskFindingsRequest.FindingFilter;
  /**
   * The hash value of the object for the statistic finding search.
   */
  "statsHashFilter"?: string;
  /**
   * The hash value of the index table name.
   */
  "indexHashFilter"?: string;
  /**
   * The possible sortBy values of an object's recommendations.
   */
  "sortBy"?: ListSqlTuningAdvisorTaskFindingsRequest.SortBy;
  /**
   * The option to sort information in ascending (\u2018ASC\u2019) or descending (\u2018DESC\u2019) order. Descending order is the default order.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of records returned in the paginated response.
   */
  "limit"?: number;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListSqlTuningAdvisorTaskFindingsRequest {
  export enum SearchPeriod {
    Last24Hr = "LAST_24HR",
    Last7Day = "LAST_7DAY",
    Last31Day = "LAST_31DAY",
    SinceLast = "SINCE_LAST",
    All = "ALL"
  }

  export enum FindingFilter {
    None = "none",
    Findings = "FINDINGS",
    Nofindings = "NOFINDINGS",
    Errors = "ERRORS",
    Profiles = "PROFILES",
    Indices = "INDICES",
    Stats = "STATS",
    Restructure = "RESTRUCTURE",
    Alternative = "ALTERNATIVE",
    AutoProfiles = "AUTO_PROFILES",
    OtherProfiles = "OTHER_PROFILES"
  }

  export enum SortBy {
    DbtimeBenefit = "DBTIME_BENEFIT",
    ParsingSchema = "PARSING_SCHEMA",
    SqlId = "SQL_ID",
    Stats = "STATS",
    Profiles = "PROFILES",
    SqlBenefit = "SQL_BENEFIT",
    Date = "DATE",
    Indices = "INDICES",
    Restructure = "RESTRUCTURE",
    Alternative = "ALTERNATIVE",
    Misc = "MISC",
    Error = "ERROR",
    Timeouts = "TIMEOUTS"
  }
}
