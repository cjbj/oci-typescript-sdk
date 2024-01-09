/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Default values for parameters required to import a package
 */
export interface DefaultParameterValues {
  /**
   * A list of resource type specific default parameter values, one set for each resource type listed in the package definition.
   */
  "resourceTypesDefaultParameterValues"?: Array<model.ResourceTypeDefaultParameterValues>;
}

export namespace DefaultParameterValues {
  export function getJsonObj(obj: DefaultParameterValues): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceTypesDefaultParameterValues": obj.resourceTypesDefaultParameterValues
          ? obj.resourceTypesDefaultParameterValues.map(item => {
              return model.ResourceTypeDefaultParameterValues.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DefaultParameterValues): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceTypesDefaultParameterValues": obj.resourceTypesDefaultParameterValues
          ? obj.resourceTypesDefaultParameterValues.map(item => {
              return model.ResourceTypeDefaultParameterValues.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
