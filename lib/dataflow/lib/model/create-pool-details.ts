/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The details required to create a pool.
 *
 */
export interface CreatePoolDetails {
  /**
   * The OCID of a compartment.
   *
   */
  "compartmentId": string;
  /**
   * A user-friendly name. It does not have to be unique. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * A user-friendly description. Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * List of PoolConfig items.
   *
   */
  "configurations": Array<model.PoolConfig>;
  /**
   * A list of schedules for pool to auto start and stop.
   *
   */
  "schedules"?: Array<model.PoolSchedule>;
  /**
   * Optional timeout value in minutes used to auto stop Pools. A Pool will be auto stopped after inactivity for this amount of time period.
   * If value not set, pool will not be auto stopped auto.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idleTimeoutInMinutes"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreatePoolDetails {
  export function getJsonObj(obj: CreatePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.PoolConfig.getJsonObj(item);
            })
          : undefined,
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.PoolSchedule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.PoolConfig.getDeserializedJsonObj(item);
            })
          : undefined,
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.PoolSchedule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
