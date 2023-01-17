/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * Input to perform connector validation. Defines the data integration semantics in a data flow. It can be about reading, writing, or transforming the data.
 */
export interface CreateConnectivityValidationDetails {
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
   * Free form text without any restriction on the permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Details about the operator.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * An array of input ports.
   */
  "inputPorts"?: Array<model.InputPort>;
  /**
   * An array of output ports.
   */
  "outputPorts"?: Array<model.OutputPort>;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with an upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * An array of parameters used in the data flow.
   */
  "parameters"?: Array<model.Parameter>;
  "opConfigValues"?: model.ConfigValues;

  "modelType": string;
}

export namespace CreateConnectivityValidationDetails {
  export function getJsonObj(obj: CreateConnectivityValidationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "inputPorts": obj.inputPorts
          ? obj.inputPorts.map(item => {
              return model.InputPort.getJsonObj(item);
            })
          : undefined,
        "outputPorts": obj.outputPorts
          ? obj.outputPorts.map(item => {
              return model.OutputPort.getJsonObj(item);
            })
          : undefined,

        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getJsonObj(item);
            })
          : undefined,
        "opConfigValues": obj.opConfigValues
          ? model.ConfigValues.getJsonObj(obj.opConfigValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "TARGET_OPERATOR":
          return model.Target.getJsonObj(<model.Target>(<object>jsonObj), true);
        case "SOURCE_OPERATOR":
          return model.Source.getJsonObj(<model.Source>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectivityValidationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "inputPorts": obj.inputPorts
          ? obj.inputPorts.map(item => {
              return model.InputPort.getDeserializedJsonObj(item);
            })
          : undefined,
        "outputPorts": obj.outputPorts
          ? obj.outputPorts.map(item => {
              return model.OutputPort.getDeserializedJsonObj(item);
            })
          : undefined,

        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.Parameter.getDeserializedJsonObj(item);
            })
          : undefined,
        "opConfigValues": obj.opConfigValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.opConfigValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "TARGET_OPERATOR":
          return model.Target.getDeserializedJsonObj(<model.Target>(<object>jsonObj), true);
        case "SOURCE_OPERATOR":
          return model.Source.getDeserializedJsonObj(<model.Source>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
