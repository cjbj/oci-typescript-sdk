/**
 * Data Connectivity Management API
 * Use the DCMS APIs to perform Metadata/Data operations.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Base type for the type system.
 */
export interface BaseType {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * A user defined description for the object.
   */
  "description"?: string;

  "modelType": string;
}

export namespace BaseType {
  export function getJsonObj(obj: BaseType): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "CONFIGURED_TYPE":
          return model.ConfiguredType.getJsonObj(<model.ConfiguredType>(<object>jsonObj), true);
        case "DERIVED_TYPE":
          return model.DerivedType.getJsonObj(<model.DerivedType>(<object>jsonObj), true);
        case "DATA_TYPE":
          return model.DataType.getJsonObj(<model.DataType>(<object>jsonObj), true);
        case "STRUCTURED_TYPE":
          return model.StructuredType.getJsonObj(<model.StructuredType>(<object>jsonObj), true);
        case "COMPOSITE_TYPE":
          return model.CompositeType.getJsonObj(<model.CompositeType>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BaseType): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "CONFIGURED_TYPE":
          return model.ConfiguredType.getDeserializedJsonObj(
            <model.ConfiguredType>(<object>jsonObj),
            true
          );
        case "DERIVED_TYPE":
          return model.DerivedType.getDeserializedJsonObj(
            <model.DerivedType>(<object>jsonObj),
            true
          );
        case "DATA_TYPE":
          return model.DataType.getDeserializedJsonObj(<model.DataType>(<object>jsonObj), true);
        case "STRUCTURED_TYPE":
          return model.StructuredType.getDeserializedJsonObj(
            <model.StructuredType>(<object>jsonObj),
            true
          );
        case "COMPOSITE_TYPE":
          return model.CompositeType.getDeserializedJsonObj(
            <model.CompositeType>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
