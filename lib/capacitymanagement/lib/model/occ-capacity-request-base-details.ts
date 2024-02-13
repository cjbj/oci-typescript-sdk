/**
 * OciControlCenterCp API
 * A description of the OciControlCenterCp API
 * OpenAPI spec version: 20231107
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
 * The details of the create capacity request. This model serves as a base for different namespaces.
 */
export interface OccCapacityRequestBaseDetails {
  /**
   * The type of the workload (Generic/ROW).
   */
  "workloadType": string;
  /**
   * The incremental quantity of resources supplied as the provisioning is underway. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "expectedHandoverQuantity"?: number;
  /**
   * The date on which the latest increment to supplied quantity of resources was delivered.
   */
  "dateExpectedHandover"?: Date;
  /**
   * The actual handed over quantity of resources at the time of request resolution. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "actualHandoverQuantity"?: number;
  /**
   * The date on which the actual handover quantity of resources is delivered.
   */
  "dateActualHandover"?: Date;

  "resourceType": string;
}

export namespace OccCapacityRequestBaseDetails {
  export function getJsonObj(obj: OccCapacityRequestBaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "resourceType" in obj && obj.resourceType) {
      switch (obj.resourceType) {
        case "SERVER_HW":
          return model.OccCapacityRequestComputeDetails.getJsonObj(
            <model.OccCapacityRequestComputeDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.resourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccCapacityRequestBaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "resourceType" in obj && obj.resourceType) {
      switch (obj.resourceType) {
        case "SERVER_HW":
          return model.OccCapacityRequestComputeDetails.getDeserializedJsonObj(
            <model.OccCapacityRequestComputeDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.resourceType}`);
      }
    }
    return jsonObj;
  }
}
