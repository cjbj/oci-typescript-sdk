/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Upload is a container that can be used to put all the relevant and related on-demand upload based log files together.
 *
 */
export interface Upload {
  /**
   * Unique internal identifier to refer the upload container.
   */
  "reference": string;
  /**
   * The name of the upload container.
   */
  "name": string;
  /**
   * The time when this upload container is created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The latest time when this upload container is modified. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * This time represents the earliest time of the log entry in this container. An RFC3339 formatted datetime string.
   */
  "timeEarliestLogEntry"?: Date;
  /**
   * This time represents the latest time of the log entry in this container. An RFC3339 formatted datetime string.
   */
  "timeLatestLogEntry"?: Date;
  /**
   * Number of warnings associated to the upload. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "warningsCount"?: number;
}

export namespace Upload {
  export function getJsonObj(obj: Upload): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Upload): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
