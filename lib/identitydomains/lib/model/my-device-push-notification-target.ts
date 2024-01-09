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
 * Push Notification target. Reference to Device notification related resource
 * <p>
 **SCIM++ Properties:**
 *  - idcsSearchable: false
 *  - multiValued: false
 *  - mutability: readOnly
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface MyDevicePushNotificationTarget {
  /**
   * The identifier of the push notification target
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
   *  - idcsRequiresWriteForAccessFlows: true
   *  - idcsRequiresImmediateReadAfterWriteForAccessFlows: true
   */
  "value": string;
  /**
   * The URI that corresponds to the push notification target resource of this device
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   *  - idcsRequiresWriteForAccessFlows: true
   *  - idcsRequiresImmediateReadAfterWriteForAccessFlows: true
   */
  "ref"?: string;
}

export namespace MyDevicePushNotificationTarget {
  export function getJsonObj(obj: MyDevicePushNotificationTarget): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<MyDevicePushNotificationTarget>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MyDevicePushNotificationTarget): object {
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
