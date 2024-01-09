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
 * A list of devices enrolled by the user.
 * <p>
 **Added In:** 18.3.6
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [value]
 *  - multiValued: true
 *  - mutability: readOnly
 *  - required: false
 *  - returned: request
 *  - type: complex
 *  - uniqueness: none
 */
export interface UserExtDevices {
  /**
   * The user's device identifier.
   * <p>
   **Added In:** 18.3.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * The URI of the corresponding Device resource which belongs to user.
   * <p>
   **Added In:** 18.3.6
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
  /**
   * A human readable name, primarily used for display purposes. READ-ONLY.
   * <p>
   **Added In:** 18.3.6
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "display"?: string;
  /**
   * The device's status.
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "status"?: string;
  /**
   * The last sync time for device.
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "lastSyncTime"?: string;
  /**
   * The device authentication factor type.
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "factorType"?: string;
  /**
   * The device authentication factor status.
   * <p>
   **Added In:** 18.4.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "factorStatus"?: string;
  /**
   * The authentication method.
   * <p>
   **Added In:** 2009232244
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "authenticationMethod"?: string;
  /**
   * The third-party factor vendor name.
   * <p>
   **Added In:** 2009232244
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "thirdPartyVendorName"?: string;
}

export namespace UserExtDevices {
  export function getJsonObj(obj: UserExtDevices): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<UserExtDevices>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserExtDevices): object {
    const jsonObj = {
      ...obj,
      ...{
        "ref": (obj as any)["$ref"]
      }
    };

    delete (jsonObj as any)["$ref"];

    return jsonObj;
  }
}
