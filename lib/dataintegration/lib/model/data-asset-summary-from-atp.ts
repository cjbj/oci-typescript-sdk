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
 * Summary details for the Autonomous Transaction Processing data asset type.
 */
export interface DataAssetSummaryFromAtp extends model.DataAssetSummary {
  /**
   * The Autonomous Transaction Processing instance service name.
   */
  "serviceName"?: string;
  /**
   * Array of service names that are available for selection in the serviceName property.
   */
  "serviceNames"?: Array<string>;
  /**
   * The Autonomous Transaction Processing driver class.
   */
  "driverClass"?: string;
  "defaultConnection"?: model.ConnectionSummaryFromAtp;

  "modelType": string;
}

export namespace DataAssetSummaryFromAtp {
  export function getJsonObj(obj: DataAssetSummaryFromAtp, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAssetSummary.getJsonObj(obj) as DataAssetSummaryFromAtp)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionSummaryFromAtp.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ATP_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: DataAssetSummaryFromAtp,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAssetSummary.getDeserializedJsonObj(obj) as DataAssetSummaryFromAtp)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionSummaryFromAtp.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
