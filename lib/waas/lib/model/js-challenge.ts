/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The JavaScript challenge settings. JavaScript Challenge is the function to filter abnormal or malicious bots and allow access to real clients.
 */
export interface JsChallenge {
  /**
   * Enables or disables the JavaScript challenge Web Application Firewall feature.
   */
  "isEnabled": boolean;
  /**
   * The action to take against requests from detected bots. If unspecified, defaults to `DETECT`.
   */
  "action"?: JsChallenge.Action;
  /**
   * The number of failed requests before taking action. If unspecified, defaults to `10`. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failureThreshold"?: number;
  /**
   * The number of seconds between challenges from the same IP address. If unspecified, defaults to `60`. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "actionExpirationInSeconds"?: number;
  /**
   * Adds an additional HTTP header to requests that fail the challenge before being passed to the origin. Only applicable when the `action` is set to `DETECT`.
   */
  "setHttpHeader"?: model.Header;
  "challengeSettings"?: model.BlockChallengeSettings;
  /**
   * When enabled, redirect responses from the origin will also be challenged. This will change HTTP 301/302 responses from origin to HTTP 200 with an HTML body containing JavaScript page redirection.
   */
  "areRedirectsChallenged"?: boolean;
  /**
   * When defined, the JavaScript Challenge would be applied only for the requests that matched all the listed conditions.
   */
  "criteria"?: Array<model.AccessRuleCriteria>;
  /**
   * When enabled, the user is identified not only by the IP address but also by an unique additional hash, which prevents blocking visitors with shared IP addresses.
   */
  "isNatEnabled"?: boolean;
}

export namespace JsChallenge {
  export enum Action {
    Detect = "DETECT",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JsChallenge): object {
    const jsonObj = {
      ...obj,
      ...{
        "setHttpHeader": obj.setHttpHeader ? model.Header.getJsonObj(obj.setHttpHeader) : undefined,
        "challengeSettings": obj.challengeSettings
          ? model.BlockChallengeSettings.getJsonObj(obj.challengeSettings)
          : undefined,

        "criteria": obj.criteria
          ? obj.criteria.map(item => {
              return model.AccessRuleCriteria.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JsChallenge): object {
    const jsonObj = {
      ...obj,
      ...{
        "setHttpHeader": obj.setHttpHeader
          ? model.Header.getDeserializedJsonObj(obj.setHttpHeader)
          : undefined,
        "challengeSettings": obj.challengeSettings
          ? model.BlockChallengeSettings.getDeserializedJsonObj(obj.challengeSettings)
          : undefined,

        "criteria": obj.criteria
          ? obj.criteria.map(item => {
              return model.AccessRuleCriteria.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
