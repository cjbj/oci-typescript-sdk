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
 * Module that allows inspection of HTTP request properties and to return a defined HTTP response.
 * In this module, rules with the name 'Default Action' are not allowed, since this name is reserved for default action logs.
 *
 */
export interface RequestAccessControl {
  /**
   * References an default Action to take if no AccessControlRule was matched. Allowed action types:
   * <p>
   * **ALLOW** continues execution of other modules and their rules.
   * <p>
   * **RETURN_HTTP_RESPONSE** terminates further execution of modules and rules and returns defined HTTP response.
   *
   */
  "defaultActionName": string;
  /**
   * Ordered list of AccessControlRules. Rules are executed in order of appearance in this array.
   */
  "rules"?: Array<model.AccessControlRule>;
}

export namespace RequestAccessControl {
  export function getJsonObj(obj: RequestAccessControl): object {
    const jsonObj = {
      ...obj,
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.AccessControlRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RequestAccessControl): object {
    const jsonObj = {
      ...obj,
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.AccessControlRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
