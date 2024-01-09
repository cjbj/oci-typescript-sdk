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
 * In a successful authentication response, Oracle Identity Cloud Service will pass user's group information restricted to groups persisted in this attribute, in the specified RADIUS attribute.
 * <p>
 **Added In:** 20.1.3
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [value]
 *  - idcsSearchable: true
 *  - multiValued: true
 *  - mutability: readWrite
 *  - required: false
 *  - returned: request
 *  - type: complex
 *  - uniqueness: none
 */
export interface AppGroupMembershipToReturn {
  /**
   * The identifier of the User's group.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * The URI of the corresponding Group resource to which the user belongs
   * <p>
   **Added In:** 20.1.3
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
   **Added In:** 20.1.3
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
}

export namespace AppGroupMembershipToReturn {
  export function getJsonObj(obj: AppGroupMembershipToReturn): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<AppGroupMembershipToReturn>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppGroupMembershipToReturn): object {
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
