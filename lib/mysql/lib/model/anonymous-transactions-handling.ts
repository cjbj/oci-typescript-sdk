/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Specifies how the replication channel handles replicated transactions without an identifier, enabling replication
 * from a source that does not use transaction-id-based replication to a replica that does.
 *
 */
export interface AnonymousTransactionsHandling {
  "policy": string;
}

export namespace AnonymousTransactionsHandling {
  export function getJsonObj(obj: AnonymousTransactionsHandling): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "policy" in obj && obj.policy) {
      switch (obj.policy) {
        case "ERROR_ON_ANONYMOUS":
          return model.ErrorOnAnonymousHandling.getJsonObj(
            <model.ErrorOnAnonymousHandling>(<object>jsonObj),
            true
          );
        case "ASSIGN_MANUAL_UUID":
          return model.AssignManualUuidHandling.getJsonObj(
            <model.AssignManualUuidHandling>(<object>jsonObj),
            true
          );
        case "ASSIGN_TARGET_UUID":
          return model.AssignTargetUuidHandling.getJsonObj(
            <model.AssignTargetUuidHandling>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.policy}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnonymousTransactionsHandling): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "policy" in obj && obj.policy) {
      switch (obj.policy) {
        case "ERROR_ON_ANONYMOUS":
          return model.ErrorOnAnonymousHandling.getDeserializedJsonObj(
            <model.ErrorOnAnonymousHandling>(<object>jsonObj),
            true
          );
        case "ASSIGN_MANUAL_UUID":
          return model.AssignManualUuidHandling.getDeserializedJsonObj(
            <model.AssignManualUuidHandling>(<object>jsonObj),
            true
          );
        case "ASSIGN_TARGET_UUID":
          return model.AssignTargetUuidHandling.getDeserializedJsonObj(
            <model.AssignTargetUuidHandling>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.policy}`);
      }
    }
    return jsonObj;
  }
}
