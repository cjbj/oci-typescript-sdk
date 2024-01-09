/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/waas/ListWafLogs.ts.html |here} to see how to use ListWafLogsRequest.
 */
export interface ListWafLogsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the WAAS policy.
   */
  "waasPolicyId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated call. If unspecified, defaults to `20`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * A filter that matches log entries where the observed event occurred on or after a date and time specified in RFC 3339 format. If unspecified, defaults to two hours before receipt of the request.
   */
  "timeObservedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter that matches log entries where the observed event occurred before a date and time, specified in RFC 3339 format.
   */
  "timeObservedLessThan"?: Date;
  /**
   * A full text search for logs.
   */
  "textContains"?: string;
  /**
   * Filters logs by access rule key.
   */
  "accessRuleKey"?: Array<string>;
  /**
   * Filters logs by Web Application Firewall action.
   */
  "action"?: Array<ListWafLogsRequest.Action>;
  /**
   * Filters logs by client IP address.
   */
  "clientAddress"?: Array<string>;
  /**
   * Filters logs by country code. Country codes are in ISO 3166-1 alpha-2 format. For a list of codes, see [ISO's website](https://www.iso.org/obp/ui/#search/code/).
   */
  "countryCode"?: Array<string>;
  /**
   * Filter logs by country name.
   */
  "countryName"?: Array<string>;
  /**
   * Filter logs by device fingerprint.
   */
  "fingerprint"?: Array<string>;
  /**
   * Filter logs by HTTP method.
   */
  "httpMethod"?: Array<ListWafLogsRequest.HttpMethod>;
  /**
   * Filter logs by incident key.
   */
  "incidentKey"?: Array<string>;
  /**
   * Filter by log type. For more information about WAF logs, see [Logs](https://docs.cloud.oracle.com/iaas/Content/WAF/Tasks/logs.htm).
   */
  "logType"?: Array<ListWafLogsRequest.LogType>;
  /**
   * Filter by origin IP address.
   */
  "originAddress"?: Array<string>;
  /**
   * Filter by referrer.
   */
  "referrer"?: Array<string>;
  /**
   * Filter by request URL.
   */
  "requestUrl"?: Array<string>;
  /**
   * Filter by response code.
   */
  "responseCode"?: Array<number>;
  /**
   * Filter by threat feed key.
   */
  "threatFeedKey"?: Array<string>;
  /**
   * Filter by user agent.
   */
  "userAgent"?: Array<string>;
  /**
   * Filter by protection rule key.
   */
  "protectionRuleKey"?: Array<string>;
}

export namespace ListWafLogsRequest {
  export enum Action {
    Block = "BLOCK",
    Detect = "DETECT",
    Bypass = "BYPASS",
    Log = "LOG",
    Redirected = "REDIRECTED"
  }

  export enum HttpMethod {
    Options = "OPTIONS",
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
    Trace = "TRACE",
    Connect = "CONNECT"
  }

  export enum LogType {
    Access = "ACCESS",
    ProtectionRules = "PROTECTION_RULES",
    JsChallenge = "JS_CHALLENGE",
    Captcha = "CAPTCHA",
    AccessRules = "ACCESS_RULES",
    ThreatFeeds = "THREAT_FEEDS",
    HumanInteractionChallenge = "HUMAN_INTERACTION_CHALLENGE",
    DeviceFingerprintChallenge = "DEVICE_FINGERPRINT_CHALLENGE",
    AddressRateLimiting = "ADDRESS_RATE_LIMITING"
  }
}
