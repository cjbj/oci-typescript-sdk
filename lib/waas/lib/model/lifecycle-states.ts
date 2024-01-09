/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The current status of the specified WAAS policy.
 **/
export enum LifecycleStates {
  Creating = "CREATING",
  Active = "ACTIVE",
  Failed = "FAILED",
  Updating = "UPDATING",
  Deleting = "DELETING",
  Deleted = "DELETED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LifecycleStates {
  export function getJsonObj(obj: LifecycleStates): LifecycleStates {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LifecycleStates): LifecycleStates {
    return obj;
  }
}
