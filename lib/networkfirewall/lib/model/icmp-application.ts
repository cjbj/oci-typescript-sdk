/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * ICMP Application used on the firewall policy rules.
 */
export interface IcmpApplication extends model.Application {
  /**
   * The value of the ICMP message Type field as defined by [RFC 792](https://www.rfc-editor.org/rfc/rfc792.html). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "icmpType": number;
  /**
   * The value of the ICMP message Code (subtype) field as defined by [RFC 792](https://www.rfc-editor.org/rfc/rfc792.html). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "icmpCode"?: number;

  "type": string;
}

export namespace IcmpApplication {
  export function getJsonObj(obj: IcmpApplication, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Application.getJsonObj(obj) as IcmpApplication)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ICMP";
  export function getDeserializedJsonObj(obj: IcmpApplication, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Application.getDeserializedJsonObj(obj) as IcmpApplication)),
      ...{}
    };

    return jsonObj;
  }
}
