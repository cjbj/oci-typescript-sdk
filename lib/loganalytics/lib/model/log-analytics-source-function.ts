/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LogAnalyticsSourceFunction
 */
export interface LogAnalyticsSourceFunction {
  /**
   * The function argument.
   */
  "arguments"?: Array<model.LogAnalyticsMetaFunctionArgument>;
  /**
   * A flag inidcating whether or not the source function is enabled.
   *
   */
  "isEnabled"?: boolean;
  "function"?: model.LogAnalyticsMetaFunction;
  /**
   * The source function name
   */
  "functionName"?: LogAnalyticsSourceFunction.FunctionName;
  /**
   * The source function unique identifier as a string.
   */
  "functionReference"?: string;
  /**
   * The source unique identifier as a string.
   */
  "sourceReference"?: string;
  /**
   * Features of the source function to use for enrichment.
   */
  "features"?: Array<string>;
  /**
   * The source function unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "functionId"?: number;
  /**
   * The source function order. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "order"?: number;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The lookup column.
   */
  "lookupColumn"?: string;
  /**
   * The lookup column position. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lookupColumnPosition"?: number;
  /**
   * The lookup display name.
   */
  "lookupDisplayName"?: string;
  /**
   * The lookup  mode. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lookupMode"?: number;
  /**
   * The lookup table.
   */
  "lookupTable"?: string;
  /**
   * The source unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
}

export namespace LogAnalyticsSourceFunction {
  export enum FunctionName {
    Geolocation = "GEOLOCATION",
    Lookup = "LOOKUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsSourceFunction): object {
    const jsonObj = {
      ...obj,
      ...{
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.LogAnalyticsMetaFunctionArgument.getJsonObj(item);
            })
          : undefined,

        "function": obj.function
          ? model.LogAnalyticsMetaFunction.getJsonObj(obj.function)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSourceFunction): object {
    const jsonObj = {
      ...obj,
      ...{
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.LogAnalyticsMetaFunctionArgument.getDeserializedJsonObj(item);
            })
          : undefined,

        "function": obj.function
          ? model.LogAnalyticsMetaFunction.getDeserializedJsonObj(obj.function)
          : undefined
      }
    };

    return jsonObj;
  }
}
