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
 * Time column returned when the shape of a queries results contsin a time series.
 *
 */
export interface TimeColumn extends model.AbstractColumn {
  /**
   * Time span between each series data point.
   *
   */
  "span"?: string;
  /**
   * List of timestamps that represent each time stamp in the entire time series even if certain intervals are filtered out of query results.
   *
   */
  "times"?: Array<number>;

  "type": string;
}

export namespace TimeColumn {
  export function getJsonObj(obj: TimeColumn, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getJsonObj(obj) as TimeColumn)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TIME_COLUMN";
  export function getDeserializedJsonObj(obj: TimeColumn, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getDeserializedJsonObj(obj) as TimeColumn)),
      ...{}
    };

    return jsonObj;
  }
}
