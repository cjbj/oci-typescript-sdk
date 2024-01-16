/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListUserAssessments.ts.html |here} to see how to use ListUserAssessmentsRequest.
 */
export interface ListUserAssessmentsRequest extends common.BaseRequest {
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
   * Valid values are RESTRICTED and ACCESSIBLE. Default is RESTRICTED.
   * Setting this to ACCESSIBLE returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment). When set to RESTRICTED permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListUserAssessmentsRequest.AccessLevel;
  /**
   * A filter to return only resources that match the specified display name.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the user assessment of type SAVE_SCHEDULE.
   */
  "scheduleUserAssessmentId"?: string;
  /**
   * A filter to return only user assessments of type SAVE_SCHEDULE.
   *
   */
  "isScheduleAssessment"?: boolean;
  /**
   * A filter to return only user assessments that are set as baseline.
   */
  "isBaseline"?: boolean;
  /**
   * A filter to return only items related to a specific target OCID.
   */
  "targetId"?: string;
  /**
   * A filter to return only items that match the specified assessment type.
   */
  "type"?: ListUserAssessmentsRequest.Type;
  /**
   * A filter to return user assessments that were created by either the system or by a user only.
   */
  "triggeredBy"?: ListUserAssessmentsRequest.TriggeredBy;
  /**
   * A filter to return only user assessments that were created after the specified date and time, as defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Using timeCreatedGreaterThanOrEqualTo parameter retrieves all assessments created after that date.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * Search for resources that were created before a specific date.
   * Specifying this parameter corresponding {@code timeCreatedLessThan}
   * parameter will retrieve all resources created before the
   * specified created date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as
   * defined by RFC 3339.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeCreatedLessThan"?: Date;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The current state of the user assessment.
   */
  "lifecycleState"?: model.UserAssessmentLifecycleState;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListUserAssessmentsRequest.SortOrder;
  /**
   * The field to sort by. You can specify only one sort order (sortOrder). The default order for timeCreated is descending.
   *
   */
  "sortBy"?: ListUserAssessmentsRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListUserAssessmentsRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum Type {
    Latest = "LATEST",
    Saved = "SAVED",
    Compartment = "COMPARTMENT",
    SaveSchedule = "SAVE_SCHEDULE"
  }

  export enum TriggeredBy {
    User = "USER",
    System = "SYSTEM"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
