/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Details required to update a read replica.
 */
export interface UpdateReplicaDetails {
  /**
   * The user-friendly name for the read replica. It does not have to be unique.
   */
  "displayName"?: string;
  /**
   * User provided description of the read replica.
   */
  "description"?: string;
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
  /**
   * Specifies whether the read replica can be deleted. Set to true to prevent deletion, false (default) to allow.
   * Note that if a read replica is delete protected it also prevents the entire DB System from being deleted. If
   * the DB System is delete protected, read replicas can still be deleted individually if they are not delete
   * protected themselves.
   *
   */
  "isDeleteProtected"?: boolean;
}

export namespace UpdateReplicaDetails {
  export function getJsonObj(obj: UpdateReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
