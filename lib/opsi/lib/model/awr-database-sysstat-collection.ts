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
 * The AWR SYSSTAT time series summary data.
 */
export interface AwrDatabaseSysstatCollection extends model.AwrQueryResult {
  /**
   * A list of AWR SYSSTAT summary data.
   */
  "items"?: Array<model.AwrDatabaseSysstatSummary>;

  "awrResultType": string;
}

export namespace AwrDatabaseSysstatCollection {
  export function getJsonObj(obj: AwrDatabaseSysstatCollection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getJsonObj(obj) as AwrDatabaseSysstatCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDatabaseSysstatSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_SYSSTAT_SET";
  export function getDeserializedJsonObj(
    obj: AwrDatabaseSysstatCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(obj) as AwrDatabaseSysstatCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDatabaseSysstatSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
