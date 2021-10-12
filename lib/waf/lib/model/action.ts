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
 * An object that represents action and its options.
 * The action can be terminating, if it stops further execution of rules and modules.
 * And non-terminating, if it does not interrupt execution flow.
 *
 */
export interface Action {
  /**
   * Action name. Can be used to reference the action.
   */
  "name": string;

  "type": string;
}

export namespace Action {
  export function getJsonObj(obj: Action): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "RETURN_HTTP_RESPONSE":
          return model.ReturnHttpResponseAction.getJsonObj(
            <model.ReturnHttpResponseAction>(<object>jsonObj),
            true
          );
        case "ALLOW":
          return model.AllowAction.getJsonObj(<model.AllowAction>(<object>jsonObj), true);
        case "CHECK":
          return model.CheckAction.getJsonObj(<model.CheckAction>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Action): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "RETURN_HTTP_RESPONSE":
          return model.ReturnHttpResponseAction.getDeserializedJsonObj(
            <model.ReturnHttpResponseAction>(<object>jsonObj),
            true
          );
        case "ALLOW":
          return model.AllowAction.getDeserializedJsonObj(
            <model.AllowAction>(<object>jsonObj),
            true
          );
        case "CHECK":
          return model.CheckAction.getDeserializedJsonObj(
            <model.CheckAction>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
