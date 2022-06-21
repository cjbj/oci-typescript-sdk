/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20211001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Security Rule used in the firewall policy rules.
 * Security Rules determine whether to block or allow a session based on traffic attributes,
 * such as  the source and destination IP address, protocol/port, and the HTTP(S) target URL.
 *
 */
export interface SecurityRule {
  /**
   * Name for the Security rule, must be unique within the policy.
   */
  "name": string;
  "condition": model.SecurityRuleMatchCriteria;
  /**
   * Types of Action on the Traffic flow.
   * <p>
   * ALLOW - Allows the traffic.
   *   * DROP - Silently drops the traffic, e.g. without sending a TCP reset.
   *   * REJECT - Rejects the traffic, sending a TCP reset to client and/or server as applicable.
   *   * INSPECT - Inspects traffic for vulnerability as specified in `inspection`, which may result in rejection.
   *
   */
  "action": SecurityRule.Action;
  /**
   * Type of inspection to affect the Traffic flow. This is only applicable if action is INSPECT.
   * <p>
   * INTRUSION_DETECTION - Intrusion Detection.
   *   * INTRUSION_PREVENTION - Intrusion Detection and Prevention. Traffic classified as potentially malicious will be rejected as described in `type`.
   *
   */
  "inspection"?: SecurityRule.Inspection;
}

export namespace SecurityRule {
  export enum Action {
    Allow = "ALLOW",
    Drop = "DROP",
    Reject = "REJECT",
    Inspect = "INSPECT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Inspection {
    IntrusionDetection = "INTRUSION_DETECTION",
    IntrusionPrevention = "INTRUSION_PREVENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecurityRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.SecurityRuleMatchCriteria.getJsonObj(obj.condition)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.SecurityRuleMatchCriteria.getDeserializedJsonObj(obj.condition)
          : undefined
      }
    };

    return jsonObj;
  }
}
