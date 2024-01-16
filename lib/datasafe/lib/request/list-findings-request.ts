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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListFindings.ts.html |here} to see how to use ListFindingsRequest.
 */
export interface ListFindingsRequest extends common.BaseRequest {
  /**
   * The OCID of the security assessment.
   */
  "securityAssessmentId": string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only the findings that are marked as top findings.
   */
  "isTopFinding"?: boolean;
  /**
   * A filter to return only findings of a particular risk level.
   */
  "severity"?: ListFindingsRequest.Severity;
  /**
   * A filter to return only the findings that match the specified lifecycle states.
   */
  "lifecycleState"?: model.FindingLifecycleState;
  /**
   * An optional filter to return only findings that match the specified reference.
   */
  "references"?: model.SecurityAssessmentReferences;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
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
  "accessLevel"?: ListFindingsRequest.AccessLevel;
  /**
   * Each finding in security assessment has an associated key (think of key as a finding's name).
   * For a given finding, the key will be the same across targets. The user can use these keys to filter the findings.
   *
   */
  "findingKey"?: string;
}

export namespace ListFindingsRequest {
  export enum Severity {
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Evaluate = "EVALUATE",
    Advisory = "ADVISORY",
    Pass = "PASS",
    Deferred = "DEFERRED"
  }

  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }
}
