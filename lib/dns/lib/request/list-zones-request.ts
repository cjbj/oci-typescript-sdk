/**
 *
 *
 * OpenAPI spec version: 20180115
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dns/ListZones.ts.html |here} to see how to use ListZonesRequest.
 */
export interface ListZonesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment the resource belongs to.
   */
  "compartmentId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a page of the collection.
   *
   */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * A case-sensitive filter for zone names.
   * Will match any zone with a name that equals the provided value.
   *
   */
  "name"?: string;
  /**
   * Search by zone name.
   * Will match any zone whose name (case-insensitive) contains the provided value.
   *
   */
  "nameContains"?: string;
  /**
   * Search by zone type, {@code PRIMARY} or {@code SECONDARY}.
   * Will match any zone whose type equals the provided value.
   *
   */
  "zoneType"?: ListZonesRequest.ZoneType;
  /**
   * An [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp that states
   * all returned resources were created on or after the indicated time.
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * An [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp that states
   * all returned resources were created before the indicated time.
   *
   */
  "timeCreatedLessThan"?: Date;
  /**
   * The state of a resource.
   */
  "lifecycleState"?: ListZonesRequest.LifecycleState;
  /**
   * The field by which to sort zones.
   */
  "sortBy"?: ListZonesRequest.SortBy;
  /**
   * The order to sort the resources.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Specifies to operate only on resources that have a matching DNS scope.
   *
   */
  "scope"?: model.Scope;
  /**
   * The OCID of the view the resource is associated with.
   */
  "viewId"?: string;
  /**
   * Search for zones that are associated with a TSIG key.
   *
   */
  "tsigKeyId"?: string;
}

export namespace ListZonesRequest {
  export enum ZoneType {
    Primary = "PRIMARY",
    Secondary = "SECONDARY"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Updating = "UPDATING"
  }

  export enum SortBy {
    Name = "name",
    ZoneType = "zoneType",
    TimeCreated = "timeCreated"
  }
}
