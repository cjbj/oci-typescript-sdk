/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListAlertAnalytics.ts.html |here} to see how to use ListAlertAnalyticsRequest.
 */
export interface ListAlertAnalyticsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId": string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned. Depends on the 'accessLevel' setting.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call
   * for a resource, set the if-match parameter to the value of the
   * etag from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the etag you
   * provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * An optional filter to return audit events whose creation time in the database is greater than and equal to the date-time specified,
   * in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeStarted"?: Date;
  /**
   * An optional filter to return audit events whose creation time in the database is less than and equal to the date-time specified,
   * in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeEnded"?: Date;
  /**
   * Default time zone is UTC if no time zone provided. The date-time considerations of the resource will be in accordance with the specified time zone.
   *
   */
  "queryTimeZone"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListAlertAnalyticsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListAlertAnalyticsRequest.SortBy;
  /**
   * Valid values are RESTRICTED and ACCESSIBLE. Default is RESTRICTED.
   * Setting this to ACCESSIBLE returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment). When set to RESTRICTED permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListAlertAnalyticsRequest.AccessLevel;
  /**
   * The scimQuery query parameter accepts filter expressions that use the syntax described in Section 3.2.2.2
   * of the System for Cross-Domain Identity Management (SCIM) specification, which is available
   * at [RFC3339](https://tools.ietf.org/html/draft-ietf-scim-api-12). In SCIM filtering expressions,
   * text, date, and time values must be enclosed in quotation marks, with date and time values using ISO-8601 format.
   * (Numeric and boolean values should not be quoted.)
   * <p>
   **Example:** query=(timeCreated ge '2021-06-04T01-00-26') and (targetNames eq 'target_1')
   * Supported fields:
   * severity
   * status
   * alertType
   * targetIds
   * targetNames
   * operationTime
   * lifecycleState
   * displayName
   * timeCreated
   * timeUpdated
   *
   */
  "scimQuery"?: string;
  /**
   * Specifies a subset of summarized fields to be returned in the response.
   */
  "summaryField"?: Array<ListAlertAnalyticsRequest.SummaryField>;
  /**
   * A groupBy can only be used in combination with summaryField parameter.
   * A groupBy value has to be a subset of the values mentioned in summaryField parameter.
   *
   */
  "groupBy"?: Array<ListAlertAnalyticsRequest.GroupBy>;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request might be rejected.
   *
   */
  "opcRetryToken"?: string;
}

export namespace ListAlertAnalyticsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    DisplayName = "displayName",
    TimeCreated = "timeCreated"
  }

  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SummaryField {
    AlertType = "alertType",
    TargetIds = "targetIds",
    TargetNames = "targetNames",
    AlertSeverity = "alertSeverity",
    AlertStatus = "alertStatus",
    TimeCreated = "timeCreated",
    PolicyId = "policyId",
    Open = "open",
    Closed = "closed",
    Critical = "critical",
    High = "high",
    Medium = "medium",
    Low = "low",
    Alertcount = "alertcount"
  }

  export enum GroupBy {
    AlertType = "alertType",
    TargetIds = "targetIds",
    TargetNames = "targetNames",
    AlertSeverity = "alertSeverity",
    AlertStatus = "alertStatus",
    TimeCreated = "timeCreated",
    PolicyId = "policyId"
  }
}
