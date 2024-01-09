/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * An object containing the endpoint proxy details.
 */
export interface EndpointProxy {
  /**
   * The proxy URL.
   */
  "url": string;
  /**
   * The named credential name on the management agent, containing the proxy credentials.
   */
  "credentialName"?: string;
  /**
   * The credential type. NONE indicates credentials are not needed to access the proxy.
   * BASIC_AUTH represents a username and password based model. TOKEN represents a token based model.
   *
   */
  "credentialType"?: EndpointProxy.CredentialType;
}

export namespace EndpointProxy {
  export enum CredentialType {
    None = "NONE",
    BasicAuth = "BASIC_AUTH",
    Token = "TOKEN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: EndpointProxy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EndpointProxy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
