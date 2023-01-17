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
 * DataAsset and Connection Registry Attributes
 */
export interface Type {
  /**
   * The list of attributes of the data asset.
   */
  "dataAssetAttributes": Array<model.Attribute>;
  /**
   * Mapping the connectionType as the key to the list of attributes as the value.
   */
  "connectionAttributes": { [key: string]: Array<model.Attribute> };
}

export namespace Type {
  export function getJsonObj(obj: Type): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAssetAttributes": obj.dataAssetAttributes
          ? obj.dataAssetAttributes.map(item => {
              return model.Attribute.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Type): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAssetAttributes": obj.dataAssetAttributes
          ? obj.dataAssetAttributes.map(item => {
              return model.Attribute.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
