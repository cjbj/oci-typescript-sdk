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
 * Definition of the additional attributes for default deployment upgrade cancel.
 */
export interface RescheduleDeploymentUpgradeToDateDetails
  extends model.RescheduleDeploymentUpgradeDetails {
  /**
   * The time of upgrade schedule. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeSchedule": Date;

  "type": string;
}

export namespace RescheduleDeploymentUpgradeToDateDetails {
  export function getJsonObj(
    obj: RescheduleDeploymentUpgradeToDateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RescheduleDeploymentUpgradeDetails.getJsonObj(
            obj
          ) as RescheduleDeploymentUpgradeToDateDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "RESCHEDULE_TO_DATE";
  export function getDeserializedJsonObj(
    obj: RescheduleDeploymentUpgradeToDateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RescheduleDeploymentUpgradeDetails.getDeserializedJsonObj(
            obj
          ) as RescheduleDeploymentUpgradeToDateDetails)),
      ...{}
    };

    return jsonObj;
  }
}
