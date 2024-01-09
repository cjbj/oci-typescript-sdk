/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/SummarizeAwrDatabaseMetrics.ts.html |here} to see how to use SummarizeAwrDatabaseMetricsRequest.
 */
export interface SummarizeAwrDatabaseMetricsRequest extends common.BaseRequest {
  /**
   * Unique Awr Hub identifier
   */
  "awrHubId": string;
  /**
   * The internal ID of the database. The internal ID of the database is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDatabases
   *
   */
  "awrSourceDatabaseIdentifier": string;
  /**
   * The required multiple value query parameter to filter the entity name.
   */
  "name": Array<string>;
  /**
   * The optional single value query parameter to filter by database instance number.
   */
  "instanceNumber"?: string;
  /**
   * The optional greater than or equal to filter on the snapshot ID.
   *
   */
  "beginSnapshotIdentifierGreaterThanOrEqualTo"?: number;
  /**
   * The optional less than or equal to query parameter to filter the snapshot Identifier.
   *
   */
  "endSnapshotIdentifierLessThanOrEqualTo"?: number;
  /**
   * The optional greater than or equal to query parameter to filter the timestamp. The timestamp format to be followed is: YYYY-MM-DDTHH:MM:SSZ, example 2020-12-03T19:00:53Z
   *
   */
  "timeGreaterThanOrEqualTo"?: Date;
  /**
   * The optional less than or equal to query parameter to filter the timestamp. The timestamp format to be followed is: YYYY-MM-DDTHH:MM:SSZ, example 2020-12-03T19:00:53Z
   *
   */
  "timeLessThanOrEqualTo"?: Date;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * The option to sort the AWR time series summary data.
   */
  "sortBy"?: SummarizeAwrDatabaseMetricsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace SummarizeAwrDatabaseMetricsRequest {
  export enum SortBy {
    Timestamp = "TIMESTAMP",
    Name = "NAME"
  }
}
