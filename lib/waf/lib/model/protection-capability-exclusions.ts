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
 * Identifies specific HTTP message parameters to exclude from inspection by a protection capability.
 *
 */
export interface ProtectionCapabilityExclusions {
  /**
   * List of HTTP request cookie values (by cookie name) to exclude from inspecting.
   * Example: If we have cookie 'cookieName=cookieValue' and requestCookies=['cookieName'], both 'cookieName' and 'cookieValue' will not be inspected.
   *
   */
  "requestCookies"?: Array<string>;
  /**
   * List of URL query parameter values from form-urlencoded XML, JSON, AMP, or POST payloads to exclude from inspecting.
   * Example: If we have query parameter 'argumentName=argumentValue' and args=['argumentName'], both 'argumentName' and 'argumentValue' will not be inspected.
   *
   */
  "args"?: Array<string>;
}

export namespace ProtectionCapabilityExclusions {
  export function getJsonObj(obj: ProtectionCapabilityExclusions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProtectionCapabilityExclusions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
