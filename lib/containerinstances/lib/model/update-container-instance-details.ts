/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * The information to be updated.
 */
export interface UpdateContainerInstanceDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateContainerInstanceDetails {
  export function getJsonObj(obj: UpdateContainerInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateContainerInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
