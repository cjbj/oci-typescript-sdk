/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The lifecycle state of a model version set.
 **/
export enum ModelVersionSetLifecycleState {
  Active = "ACTIVE",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ModelVersionSetLifecycleState {
  export function getJsonObj(obj: ModelVersionSetLifecycleState): ModelVersionSetLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: ModelVersionSetLifecycleState
  ): ModelVersionSetLifecycleState {
    return obj;
  }
}
