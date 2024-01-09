/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
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
 * The metadata associated with the strategy parameter.
 *
 */
export interface StrategyParameter {
  /**
   * The name of the strategy parameter.
   */
  "name": string;
  /**
   * The type of strategy parameter.
   */
  "type": model.StrategyParameterType;
  /**
   * Text describing the strategy parameter.
   */
  "description": string;
  /**
   * Whether this parameter is required.
   */
  "isRequired": boolean;
  /**
   * A default value used for the strategy parameter.
   */
  "defaultValue"?: any;
  /**
   * The list of possible values used for these strategy parameters.
   */
  "possibleValues"?: Array<any>;
}

export namespace StrategyParameter {
  export function getJsonObj(obj: StrategyParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StrategyParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
