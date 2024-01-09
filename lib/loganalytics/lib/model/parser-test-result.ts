/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * ParserTestResult
 */
export interface ParserTestResult {
  /**
   * Additional information for the test result.
   */
  "additionalInfo"?: { [key: string]: string };
  /**
   * The test result log entries.
   */
  "entries"?: Array<model.AbstractParserTestResultLogEntry>;
  /**
   * The example content.
   */
  "exampleContent"?: string;
  /**
   * The test result log lines.
   */
  "lines"?: Array<model.AbstractParserTestResultLogLine>;
  /**
   * The named capture groups.
   */
  "namedCaptureGroups"?: Array<string>;
}

export namespace ParserTestResult {
  export function getJsonObj(obj: ParserTestResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entries": obj.entries
          ? obj.entries.map(item => {
              return model.AbstractParserTestResultLogEntry.getJsonObj(item);
            })
          : undefined,

        "lines": obj.lines
          ? obj.lines.map(item => {
              return model.AbstractParserTestResultLogLine.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ParserTestResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "entries": obj.entries
          ? obj.entries.map(item => {
              return model.AbstractParserTestResultLogEntry.getDeserializedJsonObj(item);
            })
          : undefined,

        "lines": obj.lines
          ? obj.lines.map(item => {
              return model.AbstractParserTestResultLogLine.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
