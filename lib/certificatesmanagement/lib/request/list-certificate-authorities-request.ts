/**
 *
 *
 * OpenAPI spec version: 20210224
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificatesmanagement/ListCertificateAuthorities.ts.html |here} to see how to use ListCertificateAuthoritiesRequest.
 */
export interface ListCertificateAuthoritiesRequest extends common.BaseRequest {
  /**
   * Unique Oracle-assigned identifier for the request. If provided, the returned request ID
   * will include this value. Otherwise, a random request ID will be
   * generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter that returns only resources that match the given compartment OCID.
   */
  "compartmentId"?: string;
  /**
   * A filter that returns only resources that match the given lifecycle state. The state value is case-insensitive.
   */
  "lifecycleState"?: ListCertificateAuthoritiesRequest.LifecycleState;
  /**
   * A filter that returns only resources that match the specified name.
   */
  "name"?: string;
  /**
   * The OCID of the certificate authority (CA). If the parameter is set to null, the service lists all CAs.
   */
  "issuerCertificateAuthorityId"?: string;
  /**
   * The OCID of the certificate authority (CA). If the parameter is set to null, the service lists all CAs.
   */
  "certificateAuthorityId"?: string;
  /**
   * The field to sort by. You can specify only one sort order. The default
   * order for `EXPIRATIONDATE` and 'TIMECREATED' is descending. The default order for `NAME`
   * is ascending.
   *
   */
  "sortBy"?: ListCertificateAuthoritiesRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListCertificateAuthoritiesRequest.SortOrder;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header
   * from the previous \"List\" call.
   *
   */
  "page"?: string;
}

export namespace ListCertificateAuthoritiesRequest {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    SchedulingDeletion = "SCHEDULING_DELETION",
    PendingDeletion = "PENDING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    Failed = "FAILED"
  }

  export enum SortBy {
    Name = "NAME",
    Expirationdate = "EXPIRATIONDATE",
    Timecreated = "TIMECREATED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
