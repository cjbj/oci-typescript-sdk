/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details of alerts aggregation items.
 */
export interface AlertAggregationItems {
  /**
   * The name of the aggregation.
   */
  "metricName": string;
  /**
   * The time at which the aggregation started.
   */
  "timeStarted": Date;
  /**
   * The time at which the aggregation ended.
   */
  "timeEnded": Date;
  /**
   * Total count of aggregated values. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count": number;
  "dimensions"?: model.AlertsAggregationDimension;
}

export namespace AlertAggregationItems {
  export function getJsonObj(obj: AlertAggregationItems): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.AlertsAggregationDimension.getJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlertAggregationItems): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.AlertsAggregationDimension.getDeserializedJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
}
