/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
 *
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
 * Possible work item types.
 **/
export enum WorkItemType {
  Lcm = "LCM",
  JfrCapture = "JFR_CAPTURE",
  JfrUpload = "JFR_UPLOAD",
  CryptoAnalysis = "CRYPTO_ANALYSIS",
  CryptoAnalysisMerge = "CRYPTO_ANALYSIS_MERGE",
  AdvancedUsageTracking = "ADVANCED_USAGE_TRACKING",
  PerformanceTuning = "PERFORMANCE_TUNING",
  JmigrateAnalysis = "JMIGRATE_ANALYSIS",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkItemType {
  export function getJsonObj(obj: WorkItemType): WorkItemType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: WorkItemType): WorkItemType {
    return obj;
  }
}
