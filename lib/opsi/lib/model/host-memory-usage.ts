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
 * Memory usage metric for the host
 *
 */
export interface HostMemoryUsage extends model.HostPerformanceMetricGroup {
  /**
   * Amount of physical memory used in gigabytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryUsedInGB"?: number;
  /**
   * Amount of physical memory used in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryUtilizationInPercent"?: number;
  /**
   * Load on memory in gigabytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryLoadInGB"?: number;
  /**
   * Amount of usable physical memory in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "realMemoryInKB"?: number;
  /**
   * Amount of available physical memory in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "freeMemoryInKB"?: number;
  /**
   * Memory used excluding buffers and cache in gigabytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "logicalMemoryUsedInGB"?: number;
  /**
   * Amount of logical memory used in percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "logicalMemoryUtilizationInPercent"?: number;
  /**
   * Amount of avaiable virtual memory in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "freeLogicalMemoryInKB"?: number;
  /**
   * Number of major page faults Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "majorPageFaults"?: number;
  /**
   * Amount of available swap space in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "swapFreeInKB"?: number;
  /**
   * Amount of memory used for anon huge pages in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "anonHugePagesInKB"?: number;
  /**
   * Number of available huge pages Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesFree"?: number;
  /**
   * Number of reserved huge pages Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesReserved"?: number;
  /**
   * Number of surplus huge pages Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesSurplus"?: number;

  "metricName": string;
}

export namespace HostMemoryUsage {
  export function getJsonObj(obj: HostMemoryUsage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostPerformanceMetricGroup.getJsonObj(obj) as HostMemoryUsage)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_MEMORY_USAGE";
  export function getDeserializedJsonObj(obj: HostMemoryUsage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostPerformanceMetricGroup.getDeserializedJsonObj(obj) as HostMemoryUsage)),
      ...{}
    };

    return jsonObj;
  }
}
