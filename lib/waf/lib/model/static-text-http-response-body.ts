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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Allows returning static text as HTTP response body.
 * Example:
 * {
 *   \"type\": \"STATIC_TEXT\",
 *   \"text\": \"{\
 *   \\\"code\\\": 403,\
 *   \\\"message\\\":\\\"Unauthorised\\\"\
 * }\"
 * }
 *
 */
export interface StaticTextHttpResponseBody extends model.HttpResponseBody {
  /**
   * Static response body text.
   */
  "text": string;

  "type": string;
}

export namespace StaticTextHttpResponseBody {
  export function getJsonObj(obj: StaticTextHttpResponseBody, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HttpResponseBody.getJsonObj(obj) as StaticTextHttpResponseBody)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "STATIC_TEXT";
  export function getDeserializedJsonObj(
    obj: StaticTextHttpResponseBody,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HttpResponseBody.getDeserializedJsonObj(obj) as StaticTextHttpResponseBody)),
      ...{}
    };

    return jsonObj;
  }
}
