/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/en-us/iaas/managed-access/overview.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
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
 * The information to be updated.
 */
export interface UpdateLockboxDetails {
  /**
   * Lockbox Identifier
   */
  "displayName"?: string;
  /**
   * Approval template ID
   */
  "approvalTemplateId"?: string;
  /**
   * The maximum amount of time operator has access to associated resources.
   */
  "maxAccessDuration"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateLockboxDetails {
  export function getJsonObj(obj: UpdateLockboxDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateLockboxDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
