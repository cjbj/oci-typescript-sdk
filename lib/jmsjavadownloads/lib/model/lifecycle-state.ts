/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
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
 * Possible lifecycle states.
 **/
export enum LifecycleState {
  Active = "ACTIVE",
  Creating = "CREATING",
  Deleted = "DELETED",
  Deleting = "DELETING",
  Failed = "FAILED",
  NeedsAttention = "NEEDS_ATTENTION",
  Updating = "UPDATING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LifecycleState {
  export function getJsonObj(obj: LifecycleState): LifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LifecycleState): LifecycleState {
    return obj;
  }
}
