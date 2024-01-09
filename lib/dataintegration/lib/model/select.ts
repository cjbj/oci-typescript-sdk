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
 * The information about the select object.
 */
export interface Select extends model.PushDownOperation {
  /**
   * Specifies whether the object is distinct.
   */
  "isDistinct"?: boolean;
  /**
   * An array of selected columns.
   */
  "selectColumns"?: Array<model.ShapeField>;

  "modelType": string;
}

export namespace Select {
  export function getJsonObj(obj: Select, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PushDownOperation.getJsonObj(obj) as Select)),
      ...{
        "selectColumns": obj.selectColumns
          ? obj.selectColumns.map(item => {
              return model.ShapeField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "SELECT";
  export function getDeserializedJsonObj(obj: Select, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PushDownOperation.getDeserializedJsonObj(obj) as Select)),
      ...{
        "selectColumns": obj.selectColumns
          ? obj.selectColumns.map(item => {
              return model.ShapeField.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
