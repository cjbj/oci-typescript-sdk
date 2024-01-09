/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The current state of the private endpoint.
 *
 **/
export enum DataSciencePrivateEndpointLifecycleState {
  Creating = "CREATING",
  Active = "ACTIVE",
  Updating = "UPDATING",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Failed = "FAILED",
  NeedsAttention = "NEEDS_ATTENTION",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DataSciencePrivateEndpointLifecycleState {
  export function getJsonObj(
    obj: DataSciencePrivateEndpointLifecycleState
  ): DataSciencePrivateEndpointLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DataSciencePrivateEndpointLifecycleState
  ): DataSciencePrivateEndpointLifecycleState {
    return obj;
  }
}
