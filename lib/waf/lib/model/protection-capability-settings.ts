/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * Settings for protection capabilities
 *
 */
export interface ProtectionCapabilitySettings {
  /**
   * Maximum number of arguments allowed. Used in protection capability 920380: Number of Arguments Limits.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxNumberOfArguments"?: number;
  /**
   * Maximum allowed length of a single argument. Used in protection capability 920370: Limit argument value length.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSingleArgumentLength"?: number;
  /**
   * Maximum allowed total length of all arguments. Used in protection capability 920390: Limit arguments total length.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTotalArgumentLength"?: number;
  /**
   * Maximum number of headers allowed in an HTTP request. Used in protection capability 9200014: Limit Number of Request Headers.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxHttpRequestHeaders"?: number;
  /**
   * Maximum allowed length of headers in an HTTP request. Used in protection capability: 9200024: Limit length of request header size.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxHttpRequestHeaderLength"?: number;
  /**
   * List of allowed HTTP methods. Each value as a RFC7230 formated token string.
   * Used in protection capability 911100: Restrict HTTP Request Methods.
   *
   */
  "allowedHttpMethods"?: Array<string>;
}

export namespace ProtectionCapabilitySettings {
  export function getJsonObj(obj: ProtectionCapabilitySettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProtectionCapabilitySettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
