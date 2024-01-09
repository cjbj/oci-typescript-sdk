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
 * The current state of the report definition.
 **/
export enum ReportDefinitionLifecycleState {
  Creating = "CREATING",
  Updating = "UPDATING",
  Active = "ACTIVE",
  Deleting = "DELETING",
  Deleted = "DELETED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ReportDefinitionLifecycleState {
  export function getJsonObj(obj: ReportDefinitionLifecycleState): ReportDefinitionLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: ReportDefinitionLifecycleState
  ): ReportDefinitionLifecycleState {
    return obj;
  }
}
