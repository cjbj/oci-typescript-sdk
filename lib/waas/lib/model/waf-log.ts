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
 * A list of Web Application Firewall log entries. Each entry is a JSON object, including a timestamp property and other fields varying based on log type. Logs record what rules and countermeasures are triggered by requests and are used as a basis to move request handling into block mode. For more information about WAF logs, see [Logs](https://docs.cloud.oracle.com/iaas/Content/WAF/Tasks/logs.htm).
 */
export interface WafLog {
  /**
   * The action taken on the request, either `ALLOW`, `DETECT`, or `BLOCK`.
   */
  "action"?: string;
  /**
   * The CAPTCHA action taken on the request, `ALLOW` or `BLOCK`. For more information about
   * CAPTCHAs, see `UpdateCaptchas`.
   *
   */
  "captchaAction"?: string;
  /**
   * The CAPTCHA challenge answer that was expected.
   */
  "captchaExpected"?: string;
  /**
   * The CAPTCHA challenge answer that was received.
   */
  "captchaReceived"?: string;
  /**
   * The number of times the CAPTCHA challenge was failed.
   */
  "captchaFailCount"?: string;
  /**
   * The IPv4 address of the requesting client.
   */
  "clientAddress"?: string;
  /**
   * The name of the country where the request originated.
   */
  "countryName"?: string;
  /**
   * The value of the request's `User-Agent` header field.
   */
  "userAgent"?: string;
  /**
   * The `Host` header data of the request.
   *
   */
  "domain"?: string;
  /**
   * A map of protection rule keys to detection message details. Detections are
   * requests that matched the criteria of a protection rule but the rule's
   * action was set to `DETECT`.
   *
   */
  "protectionRuleDetections"?: { [key: string]: string };
  /**
   * The HTTP method of the request.
   */
  "httpMethod"?: string;
  /**
   * The path and query string of the request.
   */
  "requestUrl"?: string;
  /**
   * The map of the request's header names to their respective values.
   */
  "httpHeaders"?: { [key: string]: string };
  /**
   * The `Referrer` header value of the request.
   */
  "referrer"?: string;
  /**
   * The status code of the response. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "responseCode"?: number;
  /**
   * The size in bytes of the response. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "responseSize"?: number;
  /**
   * The incident key of a request. An incident key is generated for
   * each request processed by the Web Application Firewall and is used to
   * idenitfy blocked requests in applicable logs.
   *
   */
  "incidentKey"?: string;
  /**
   * The hashed signature of the device's fingerprint. For more information,
   * see `DeviceFingerPrintChallenge`.
   *
   */
  "fingerprint"?: string;
  /**
   * The type of device that the request was made from.
   */
  "device"?: string;
  /**
   * ISO 3166-1 alpha-2 code of the country from which the request originated.
   * For a list of codes, see [ISO's website](https://www.iso.org/obp/ui/#search/code/).
   *
   */
  "countryCode"?: string;
  /**
   * A map of header names to values of the request sent to the origin, including any headers
   * appended by the Web Application Firewall.
   *
   */
  "requestHeaders"?: { [key: string]: string };
  /**
   * The `ThreatFeed` key that matched the request. For more information about
   * threat feeds, see `UpdateThreatFeeds`.
   *
   */
  "threatFeedKey"?: string;
  /**
   * The `AccessRule` key that matched the request. For more information about
   * access rules, see `UpdateAccessRules`.
   *
   */
  "accessRuleKey"?: string;
  /**
   * The `AddressRateLimiting` key that matched the request. For more information
   * about address rate limiting, see `UpdateWafAddressRateLimiting`.
   *
   */
  "addressRateLimitingKey"?: string;
  /**
   * The date and time the Web Application Firewall processed the request and logged it.
   *
   */
  "timestamp"?: Date;
  /**
   * The type of log of the request. For more about log types, see [Logs](https://docs.cloud.oracle.com/iaas/Content/WAF/Tasks/logs.htm).
   *
   */
  "logType"?: string;
  /**
   * The address of the origin server where the request was sent.
   */
  "originAddress"?: string;
  /**
   * The amount of time it took the origin server to respond to the request, in seconds.
   *
   */
  "originResponseTime"?: string;
}

export namespace WafLog {
  export function getJsonObj(obj: WafLog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WafLog): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
