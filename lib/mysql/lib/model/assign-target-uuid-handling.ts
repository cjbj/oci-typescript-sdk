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
 * Enables assignment of IDs on the target to anonymous transactions coming from the source. The target server UUID
 * is added as a prefix to the ID.
 *
 */
export interface AssignTargetUuidHandling extends model.AnonymousTransactionsHandling {
  /**
   * Specifies one of the coordinates (file) at which the replica should begin
   * reading the source's log. As this value specifies the point where replication
   * starts from, it is only used once, when it starts. It is never used again,
   * unless a new UpdateChannel operation modifies it.
   *
   */
  "lastConfiguredLogFilename"?: string;
  /**
   * Specifies one of the coordinates (offset) at which the replica should begin
   * reading the source's log. As this value specifies the point where replication
   * starts from, it is only used once, when it starts. It is never used again,
   * unless a new UpdateChannel operation modifies it.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lastConfiguredLogOffset"?: number;

  "policy": string;
}

export namespace AssignTargetUuidHandling {
  export function getJsonObj(obj: AssignTargetUuidHandling, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AnonymousTransactionsHandling.getJsonObj(obj) as AssignTargetUuidHandling)),
      ...{}
    };

    return jsonObj;
  }
  export const policy = "ASSIGN_TARGET_UUID";
  export function getDeserializedJsonObj(
    obj: AssignTargetUuidHandling,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AnonymousTransactionsHandling.getDeserializedJsonObj(
            obj
          ) as AssignTargetUuidHandling)),
      ...{}
    };

    return jsonObj;
  }
}
