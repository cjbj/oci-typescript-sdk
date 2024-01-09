/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Custom claims associated with the specific tenant
 */
export interface SettingsTenantCustomClaims {
  /**
   * Custom claim name
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: server
   */
  "name": string;
  /**
   * Custom claim value
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * Indicates under what scenario the custom claim will be return
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "mode": SettingsTenantCustomClaims.Mode;
  /**
   * Indicates if the custom claim is an expression
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "expression": boolean;
  /**
   * Indicates if the custom claim is associated with all scopes
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "allScopes": boolean;
  /**
   * Indicates what type of token the custom claim will be embedded
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tokenType": SettingsTenantCustomClaims.TokenType;
  /**
   * Scopes associated with a specific custom claim
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "scopes"?: Array<string>;
}

export namespace SettingsTenantCustomClaims {
  export enum Mode {
    Always = "always",
    Request = "request",
    Never = "never",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TokenType {
    At = "AT",
    It = "IT",
    Both = "BOTH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SettingsTenantCustomClaims): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SettingsTenantCustomClaims): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
