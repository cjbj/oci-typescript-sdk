/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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

export interface AddResourceLockDetails {
  /**
   * Type of the lock.
   */
  "type": AddResourceLockDetails.Type;
  /**
   * The id of the resource that is locking this resource. Indicates that deleting this resource will remove the lock.
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
}

export namespace AddResourceLockDetails {
  export enum Type {
    Full = "FULL",
    Delete = "DELETE"
  }

  export function getJsonObj(obj: AddResourceLockDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddResourceLockDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
