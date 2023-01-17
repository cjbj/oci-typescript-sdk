/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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
 * Resource locks are used to prevent certain APIs from being called for the resource.
 * A full lock prevents both updating the resource and deleting the resource. A delete
 * lock prevents deleting the resource.
 *
 */
export interface ResourceLock {
  /**
   * Type of the lock.
   */
  "type": ResourceLock.Type;
  /**
   * The ID of the resource that is locking this resource. Indicates that deleting this resource will remove the lock.
   *
   */
  "relatedResourceId"?: string;
  /**
   * A message added by the creator of the lock. This is typically used to give an
   * indication of why the resource is locked.
   *
   */
  "message"?: string;
  /**
   * When the lock was created.
   */
  "timeCreated"?: Date;
  /**
   * Indicates if the lock is active or not. For example, if there are mutliple FULL locks, the first-created FULL lock will be effective.
   */
  "isActive"?: boolean;
}

export namespace ResourceLock {
  export enum Type {
    Full = "FULL",
    Delete = "DELETE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResourceLock): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceLock): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
