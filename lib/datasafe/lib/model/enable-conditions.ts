/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
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
 * The details of the audit policy provisioning conditions.
 */
export interface EnableConditions {
  /**
   * The entity include or exclude selection.
   */
  "entitySelection": EnableConditions.EntitySelection;
  /**
   * The entity type that the policy must be enabled for.
   */
  "entityType": EnableConditions.EntityType;
  /**
   * The operation status that the policy must be enabled for.
   */
  "operationStatus": EnableConditions.OperationStatus;
  /**
   * List of users or roles that the policy must be enabled for.
   */
  "entityNames"?: Array<string>;
}

export namespace EnableConditions {
  export enum EntitySelection {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum EntityType {
    User = "USER",
    Role = "ROLE",
    AllUsers = "ALL_USERS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperationStatus {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Both = "BOTH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: EnableConditions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnableConditions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
