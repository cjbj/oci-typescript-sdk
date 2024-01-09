/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about the rollback of an upgrade.
 */
export interface RollbackDeploymentUpgradeDetails {
  "type": string;
}

export namespace RollbackDeploymentUpgradeDetails {
  export function getJsonObj(obj: RollbackDeploymentUpgradeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DEFAULT":
          return model.DefaultRollbackDeploymentUpgradeDetails.getJsonObj(
            <model.DefaultRollbackDeploymentUpgradeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RollbackDeploymentUpgradeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DEFAULT":
          return model.DefaultRollbackDeploymentUpgradeDetails.getDeserializedJsonObj(
            <model.DefaultRollbackDeploymentUpgradeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
