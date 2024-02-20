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
 * Information required to form and execute query on a data object.
 */
export interface DataObjectQuery {
  /**
   * List of bind parameters to be applied in the query.
   */
  "bindParams"?: Array<model.DataObjectBindParameter>;
  /**
   * Timeout (in seconds) to be set for the data object query execution. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryExecutionTimeoutInSeconds"?: number;

  "queryType": string;
}

export namespace DataObjectQuery {
  export function getJsonObj(obj: DataObjectQuery): object {
    const jsonObj = {
      ...obj,
      ...{
        "bindParams": obj.bindParams
          ? obj.bindParams.map(item => {
              return model.DataObjectBindParameter.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "queryType" in obj && obj.queryType) {
      switch (obj.queryType) {
        case "STANDARD_QUERY":
          return model.DataObjectStandardQuery.getJsonObj(
            <model.DataObjectStandardQuery>(<object>jsonObj),
            true
          );
        case "TEMPLATIZED_QUERY":
          return model.DataObjectTemplatizedQuery.getJsonObj(
            <model.DataObjectTemplatizedQuery>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.queryType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataObjectQuery): object {
    const jsonObj = {
      ...obj,
      ...{
        "bindParams": obj.bindParams
          ? obj.bindParams.map(item => {
              return model.DataObjectBindParameter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "queryType" in obj && obj.queryType) {
      switch (obj.queryType) {
        case "STANDARD_QUERY":
          return model.DataObjectStandardQuery.getDeserializedJsonObj(
            <model.DataObjectStandardQuery>(<object>jsonObj),
            true
          );
        case "TEMPLATIZED_QUERY":
          return model.DataObjectTemplatizedQuery.getDeserializedJsonObj(
            <model.DataObjectTemplatizedQuery>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.queryType}`);
      }
    }
    return jsonObj;
  }
}
