/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of a capture filter used to include or exclude SQL statements
 * in the initial automatic plan capture.
 *
 */
export interface AutomaticCaptureFilterDetails {
  /**
    * The name of the automatic capture filter.
* <p>
- AUTO_CAPTURE_SQL_TEXT: Search pattern to apply to SQL text.
* - AUTO_CAPTURE_PARSING_SCHEMA_NAME: Parsing schema to include or exclude for SQL plan management auto capture.
* - AUTO_CAPTURE_MODULE: Module to include or exclude for SQL plan management auto capture.
* - AUTO_CAPTURE_ACTION: Action to include or exclude for SQL plan management automatic capture.
* 
    */
  "name": AutomaticCaptureFilterDetails.Name;
  /**
   * A list of filter values to include.
   */
  "valuesToInclude"?: Array<string>;
  /**
   * A list of filter values to exclude.
   */
  "valuesToExclude"?: Array<string>;
}

export namespace AutomaticCaptureFilterDetails {
  export enum Name {
    AutoCaptureSqlText = "AUTO_CAPTURE_SQL_TEXT",
    AutoCaptureParsingSchemaName = "AUTO_CAPTURE_PARSING_SCHEMA_NAME",
    AutoCaptureModule = "AUTO_CAPTURE_MODULE",
    AutoCaptureAction = "AUTO_CAPTURE_ACTION"
  }

  export function getJsonObj(obj: AutomaticCaptureFilterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutomaticCaptureFilterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
