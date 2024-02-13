/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Supported configuration metric groups for database capacity planning service.
 *
 */
export interface DatabaseConfigurationMetricGroup {
  /**
   * Collection timestamp
   * Example: {@code \"2020-05-06T00:00:00.000Z\"}
   *
   */
  "timeCollected"?: Date;

  "metricName": string;
}

export namespace DatabaseConfigurationMetricGroup {
  export function getJsonObj(obj: DatabaseConfigurationMetricGroup): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "metricName" in obj && obj.metricName) {
      switch (obj.metricName) {
        case "DB_OS_CONFIG_INSTANCE":
          return model.DBOSConfigInstance.getJsonObj(
            <model.DBOSConfigInstance>(<object>jsonObj),
            true
          );
        case "DB_EXTERNAL_INSTANCE":
          return model.DBExternalInstance.getJsonObj(
            <model.DBExternalInstance>(<object>jsonObj),
            true
          );
        case "DB_PARAMETERS":
          return model.DBParameters.getJsonObj(<model.DBParameters>(<object>jsonObj), true);
        case "DB_EXTERNAL_PROPERTIES":
          return model.DBExternalProperties.getJsonObj(
            <model.DBExternalProperties>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.metricName}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseConfigurationMetricGroup): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "metricName" in obj && obj.metricName) {
      switch (obj.metricName) {
        case "DB_OS_CONFIG_INSTANCE":
          return model.DBOSConfigInstance.getDeserializedJsonObj(
            <model.DBOSConfigInstance>(<object>jsonObj),
            true
          );
        case "DB_EXTERNAL_INSTANCE":
          return model.DBExternalInstance.getDeserializedJsonObj(
            <model.DBExternalInstance>(<object>jsonObj),
            true
          );
        case "DB_PARAMETERS":
          return model.DBParameters.getDeserializedJsonObj(
            <model.DBParameters>(<object>jsonObj),
            true
          );
        case "DB_EXTERNAL_PROPERTIES":
          return model.DBExternalProperties.getDeserializedJsonObj(
            <model.DBExternalProperties>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.metricName}`);
      }
    }
    return jsonObj;
  }
}
