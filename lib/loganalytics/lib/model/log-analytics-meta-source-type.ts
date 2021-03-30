/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LogAnalyticsMetaSourceType
 */
export interface LogAnalyticsMetaSourceType {
  /**
   * The built in parser name.
   */
  "builtInParserName"?: string;
  /**
   * The source type description.
   */
  "description"?: string;
  /**
   * The source type display name.
   */
  "displayName"?: string;
  /**
   * The entity display name.
   */
  "entityDisplayName"?: string;
  /**
   * The entity internal name.
   */
  "entityName"?: string;
  /**
   * The source type name.
   */
  "name"?: string;
  /**
   * The maximum exclude pattern. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maximumExcludePattern"?: number;
  /**
   * The maximum include pattern. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maximumIncludePattern"?: number;
}

export namespace LogAnalyticsMetaSourceType {
  export function getJsonObj(obj: LogAnalyticsMetaSourceType): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
