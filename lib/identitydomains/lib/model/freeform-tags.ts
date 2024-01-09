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
 * OCI Freeform Tags
 * <p>
 **Added In:** 2011192329
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [key, value]
 *  - idcsSearchable: true
 *  - type: complex
 *  - required: false
 *  - mutability: readWrite
 *  - returned: default
 *  - multiValued: true
 */
export interface FreeformTags {
  /**
   * OCI Tag key
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - type: string
   *  - required: true
   *  - mutability: readWrite
   *  - returned: default
   *  - idcsSearchable: true
   *  - uniqueness: none
   */
  "key": string;
  /**
   * OCI Tag value
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - required: true
   *  - idcsReturnEmptyWhenNull: true
   *  - mutability: readWrite
   *  - returned: default
   *  - type: string
   *  - idcsSearchable: true
   *  - uniqueness: none
   */
  "value": string;
}

export namespace FreeformTags {
  export function getJsonObj(obj: FreeformTags): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FreeformTags): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
