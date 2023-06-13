/**
 * OCI Control Center API
 * OCI Control Center (OCC) service enables you to monitor the region-level cloud consumption and provides the region-level capacity data, in realms where OCC is available. Use the OCI Control Center (OCC) API to explore region-level capacity and utilization information about core services. For more information, see [OCI Control Center](/iaas/Content/control-center/home.htm).

 * OpenAPI spec version: 20230515
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
 * A list of aggregated metric data objects with properties.
 *
 */
export interface SummarizedMetricDataCollection {
  /**
   * An array of SummarizedMetricData items.
   *
   */
  "items": Array<model.SummarizedMetricData>;
}

export namespace SummarizedMetricDataCollection {
  export function getJsonObj(obj: SummarizedMetricDataCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.SummarizedMetricData.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SummarizedMetricDataCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.SummarizedMetricData.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
