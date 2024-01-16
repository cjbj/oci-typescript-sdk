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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListUsers.ts.html |here} to see how to use ListUsersRequest.
 */
export interface ListUsersRequest extends common.BaseRequest {
  /**
   * The OCID of the user assessment.
   */
  "userAssessmentId": string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
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
  "accessLevel"?: ListUsersRequest.AccessLevel;
  /**
   * A filter to return only items that match the specified user category.
   */
  "userCategory"?: string;
  /**
   * A filter to return only items that match the specified user role.
   */
  "userRole"?: string;
  /**
   * A filter to return only items that match the specified user profile.
   */
  "userProfile"?: string;
  /**
   * A filter to return only items that match the specified user type. The possible values can be
   *   - ADMIN_PRIVILEGED
   *   - APPLICATION
   *   - PRIVILEGED
   *   - SCHEMA
   *   - NON_PRIVILEGED
   * as specified by '#/definitions/userTypes'.
   *
   */
  "userType"?: string;
  /**
   * A filter to return only items that match the specified user key.
   */
  "userKey"?: string;
  /**
   * A filter to return only items that match the specified account status.
   */
  "accountStatus"?: string;
  /**
   * A filter to return only items that match the specified authentication type.
   */
  "authenticationType"?: string;
  /**
   * A filter to return only items that match the specified user name.
   */
  "userName"?: string;
  /**
   * A filter to return only items related to a specific target OCID.
   */
  "targetId"?: string;
  /**
   * A filter to return users whose last login time in the database is greater than or equal to the date and time specified, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeLastLoginGreaterThanOrEqualTo"?: Date;
  /**
   * A filter to return users whose last login time in the database is less than the date and time specified, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeLastLoginLessThan"?: Date;
  /**
   * A filter to return users whose creation time in the database is greater than or equal to the date and time specified, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeUserCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter to return users whose creation time in the database is less than the date and time specified, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeUserCreatedLessThan"?: Date;
  /**
   * A filter to return users whose last password change in the database is greater than or equal to the date and time specified, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timePasswordLastChangedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter to return users whose last password change in the database is less than the date and time specified, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timePasswordLastChangedLessThan"?: Date;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListUsersRequest.SortOrder;
  /**
   * The field to sort by. You can specify only one sort order (sortOrder). The default order for userName is ascending.
   *
   */
  "sortBy"?: ListUsersRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * A filter to return items that contain the specified schema list.
   */
  "schemaList"?: Array<string>;
  /**
   * A filter to return only items that match the criteria that all schemas can be accessed by a user.
   */
  "areAllSchemasAccessible"?: boolean;
}

export namespace ListUsersRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    UserName = "userName",
    UserCategory = "userCategory",
    AccountStatus = "accountStatus",
    TimeLastLogin = "timeLastLogin",
    TargetId = "targetId",
    TimeUserCreated = "timeUserCreated",
    AuthenticationType = "authenticationType",
    TimePasswordChanged = "timePasswordChanged"
  }
}
