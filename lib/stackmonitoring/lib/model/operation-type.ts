/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateResources = "CREATE_RESOURCES",
  UpdateResources = "UPDATE_RESOURCES",
  DeleteResources = "DELETE_RESOURCES",
  MoveResources = "MOVE_RESOURCES",
  EnableExternalDatabase = "ENABLE_EXTERNAL_DATABASE",
  DisableExternalDatabase = "DISABLE_EXTERNAL_DATABASE",
  AddSourcesToAgent = "ADD_SOURCES_TO_AGENT",
  EnableMetricExtension = "ENABLE_METRIC_EXTENSION",
  DisableMetricExtension = "DISABLE_METRIC_EXTENSION",
  TestMetricExtension = "TEST_METRIC_EXTENSION",
  BulkAddResources = "BULK_ADD_RESOURCES",
  BulkDeleteResources = "BULK_DELETE_RESOURCES",
  UpdateAndPropagateTags = "UPDATE_AND_PROPAGATE_TAGS",
  ImportResources = "IMPORT_RESOURCES",

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
