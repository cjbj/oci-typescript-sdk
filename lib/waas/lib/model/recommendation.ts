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
* A recommended protection rule for a web application. This recommendation can be accepted to apply it to the Web Application Firewall configuration for this policy.
* <p>
Use the `POST /waasPolicies/{waasPolicyId}/actions/acceptWafConfigRecommendations` method to accept recommended protection rules.
*/
export interface Recommendation {
  /**
   * The unique key for the recommended protection rule.
   */
  "key"?: string;
  /**
   * The list of the ModSecurity rule IDs associated with the protection rule.
   * For more information about ModSecurity's open source WAF rules, see [Mod Security's documentation](https://www.modsecurity.org/CRS/Documentation/index.html).
   */
  "modSecurityRuleIds"?: Array<string>;
  /**
   * The name of the recommended protection rule.
   */
  "name"?: string;
  /**
   * The description of the recommended protection rule.
   */
  "description"?: string;
  /**
   * The list of labels for the recommended protection rule.
   */
  "labels"?: Array<string>;
  /**
   * The recommended action to apply to the protection rule.
   */
  "recommendedAction"?: string;
}

export namespace Recommendation {
  export function getJsonObj(obj: Recommendation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Recommendation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
