/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The data profile response.
 */
export interface DataProfile {
  /**
   * Entity name for which profiling is requested.
   */
  "entityName": string;
  "entityProfileResult"?: model.EntityProfileResult;
  /**
   * Array of profiling results.
   */
  "attributeProfileResults"?: Array<model.AttributeProfileResult>;
}

export namespace DataProfile {
  export function getJsonObj(obj: DataProfile): object {
    const jsonObj = {
      ...obj,
      ...{
        "entityProfileResult": obj.entityProfileResult
          ? model.EntityProfileResult.getJsonObj(obj.entityProfileResult)
          : undefined,
        "attributeProfileResults": obj.attributeProfileResults
          ? obj.attributeProfileResults.map(item => {
              return model.AttributeProfileResult.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataProfile): object {
    const jsonObj = {
      ...obj,
      ...{
        "entityProfileResult": obj.entityProfileResult
          ? model.EntityProfileResult.getDeserializedJsonObj(obj.entityProfileResult)
          : undefined,
        "attributeProfileResults": obj.attributeProfileResults
          ? obj.attributeProfileResults.map(item => {
              return model.AttributeProfileResult.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
