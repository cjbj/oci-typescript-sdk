/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateContainerInstance = "CREATE_CONTAINER_INSTANCE",
  UpdateContainerInstance = "UPDATE_CONTAINER_INSTANCE",
  DeleteContainerInstance = "DELETE_CONTAINER_INSTANCE",
  MoveContainerInstance = "MOVE_CONTAINER_INSTANCE",
  StartContainerInstance = "START_CONTAINER_INSTANCE",
  StopContainerInstance = "STOP_CONTAINER_INSTANCE",
  RestartContainerInstance = "RESTART_CONTAINER_INSTANCE",
  UpdateContainer = "UPDATE_CONTAINER",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}
