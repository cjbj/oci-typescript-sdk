/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The settings of the threat intelligence feed. You can block requests from IP addresses based on their reputations with various commercial and open source threat feeds.
 */
export interface ThreatFeed {
  /**
   * The unique key of the threat intelligence feed.
   */
  "key"?: string;
  /**
   * The name of the threat intelligence feed.
   */
  "name"?: string;
  /**
   * The action to take when traffic is flagged as malicious by data from the threat intelligence feed. If unspecified, defaults to `OFF`.
   */
  "action"?: ThreatFeed.Action;
  /**
   * The description of the threat intelligence feed.
   */
  "description"?: string;
}

export namespace ThreatFeed {
  export enum Action {
    Off = "OFF",
    Detect = "DETECT",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ThreatFeed): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ThreatFeed): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
