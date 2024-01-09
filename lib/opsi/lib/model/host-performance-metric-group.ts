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
 * Base Metric Group for Host performance metrics
 *
 */
export interface HostPerformanceMetricGroup {
  /**
   * Collection timestamp
   * Example: `\"2020-05-06T00:00:00.000Z\"`
   *
   */
  "timeCollected": Date;

  "metricName": string;
}

export namespace HostPerformanceMetricGroup {
  export function getJsonObj(obj: HostPerformanceMetricGroup): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "metricName" in obj && obj.metricName) {
      switch (obj.metricName) {
        case "HOST_MEMORY_USAGE":
          return model.HostMemoryUsage.getJsonObj(<model.HostMemoryUsage>(<object>jsonObj), true);
        case "HOST_TOP_PROCESSES":
          return model.HostTopProcesses.getJsonObj(<model.HostTopProcesses>(<object>jsonObj), true);
        case "HOST_CPU_USAGE":
          return model.HostCpuUsage.getJsonObj(<model.HostCpuUsage>(<object>jsonObj), true);
        case "HOST_FILESYSTEM_USAGE":
          return model.HostFilesystemUsage.getJsonObj(
            <model.HostFilesystemUsage>(<object>jsonObj),
            true
          );
        case "HOST_NETWORK_ACTIVITY_SUMMARY":
          return model.HostNetworkActivitySummary.getJsonObj(
            <model.HostNetworkActivitySummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.metricName}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HostPerformanceMetricGroup): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "metricName" in obj && obj.metricName) {
      switch (obj.metricName) {
        case "HOST_MEMORY_USAGE":
          return model.HostMemoryUsage.getDeserializedJsonObj(
            <model.HostMemoryUsage>(<object>jsonObj),
            true
          );
        case "HOST_TOP_PROCESSES":
          return model.HostTopProcesses.getDeserializedJsonObj(
            <model.HostTopProcesses>(<object>jsonObj),
            true
          );
        case "HOST_CPU_USAGE":
          return model.HostCpuUsage.getDeserializedJsonObj(
            <model.HostCpuUsage>(<object>jsonObj),
            true
          );
        case "HOST_FILESYSTEM_USAGE":
          return model.HostFilesystemUsage.getDeserializedJsonObj(
            <model.HostFilesystemUsage>(<object>jsonObj),
            true
          );
        case "HOST_NETWORK_ACTIVITY_SUMMARY":
          return model.HostNetworkActivitySummary.getDeserializedJsonObj(
            <model.HostNetworkActivitySummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.metricName}`);
      }
    }
    return jsonObj;
  }
}
