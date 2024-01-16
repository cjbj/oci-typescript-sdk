/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The summary of user role grant paths.
 */
export interface RoleGrantPathSummary {
  /**
   * The unique key of a role grant.
   */
  "key": string;
  /**
   * Grantee is the user who can access the table.
   */
  "grantee"?: string;
  /**
   * The name of the role.
   */
  "grantedRole"?: string;
  /**
   * The grant depth level of the indirect grant.
   * An indirectly granted role/privilege is granted to the user through another role.
   * The depth level indicates how deep a privilege is within the grant hierarchy.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "depthLevel"?: number;
}

export namespace RoleGrantPathSummary {
  export function getJsonObj(obj: RoleGrantPathSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RoleGrantPathSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
