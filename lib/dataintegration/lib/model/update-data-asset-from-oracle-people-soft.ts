/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details for the Oracle PeopleSoft data asset type.
 */
export interface UpdateDataAssetFromOraclePeopleSoft extends model.UpdateDataAssetDetails {
  /**
   * The Oracle PeopleSoft hostname.
   */
  "host": string;
  /**
   * The Oracle PeopleSoft port.
   */
  "port": string;
  /**
   * The Oracle PeopleSoft service name.
   */
  "serviceName"?: string;
  /**
   * The Oracle PeopleSoft driver class.
   */
  "driverClass"?: string;
  /**
   * The Oracle PeopleSoft SID.
   */
  "sid"?: string;
  "walletSecret"?: model.SensitiveAttribute;
  "walletPasswordSecret"?: model.SensitiveAttribute;
  "defaultConnection": model.UpdateConnectionFromOraclePeopleSoft;

  "modelType": string;
}

export namespace UpdateDataAssetFromOraclePeopleSoft {
  export function getJsonObj(
    obj: UpdateDataAssetFromOraclePeopleSoft,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getJsonObj(obj) as UpdateDataAssetFromOraclePeopleSoft)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletPasswordSecret)
          : undefined,
        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromOraclePeopleSoft.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_PEOPLESOFT_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: UpdateDataAssetFromOraclePeopleSoft,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getDeserializedJsonObj(
            obj
          ) as UpdateDataAssetFromOraclePeopleSoft)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletPasswordSecret)
          : undefined,
        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromOraclePeopleSoft.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
