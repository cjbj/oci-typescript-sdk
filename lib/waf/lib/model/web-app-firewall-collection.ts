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
 * Result of a WebAppFirewall list operation.
 */
export interface WebAppFirewallCollection {
  /**
   * List of WebAppFirewalls.
   */
  "items": Array<model.WebAppFirewallSummary>;
}

export namespace WebAppFirewallCollection {
  export function getJsonObj(obj: WebAppFirewallCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WebAppFirewallSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WebAppFirewallCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WebAppFirewallSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
