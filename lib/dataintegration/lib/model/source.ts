/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the source object.
 */
export interface Source extends model.Operator {
  "entity"?:
    | model.DataEntityFromTable
    | model.DataEntityFromDataStore
    | model.DataEntityFromView
    | model.DataEntityFromSql
    | model.DataEntityFromFile
    | model.DerivedEntity;
  /**
   * Specifies the read access.
   */
  "isReadAccess"?: boolean;
  /**
   * Specifies the copy fields.
   */
  "isCopyFields"?: boolean;
  /**
   * Specifies if this uses a predefined shape.
   */
  "isPredefinedShape"?: boolean;
  "schemaDriftConfig"?: model.SchemaDriftConfig;
  "fixedDataShape"?: model.Shape;
  "readOperationConfig"?: model.ReadOperationConfig;

  "modelType": string;
}

export namespace Source {
  export function getJsonObj(obj: Source, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as Source)),
      ...{
        "entity": obj.entity ? model.DataEntity.getJsonObj(obj.entity) : undefined,

        "schemaDriftConfig": obj.schemaDriftConfig
          ? model.SchemaDriftConfig.getJsonObj(obj.schemaDriftConfig)
          : undefined,
        "fixedDataShape": obj.fixedDataShape
          ? model.Shape.getJsonObj(obj.fixedDataShape)
          : undefined,
        "readOperationConfig": obj.readOperationConfig
          ? model.ReadOperationConfig.getJsonObj(obj.readOperationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "SOURCE_OPERATOR";
  export function getDeserializedJsonObj(obj: Source, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getDeserializedJsonObj(obj) as Source)),
      ...{
        "entity": obj.entity ? model.DataEntity.getDeserializedJsonObj(obj.entity) : undefined,

        "schemaDriftConfig": obj.schemaDriftConfig
          ? model.SchemaDriftConfig.getDeserializedJsonObj(obj.schemaDriftConfig)
          : undefined,
        "fixedDataShape": obj.fixedDataShape
          ? model.Shape.getDeserializedJsonObj(obj.fixedDataShape)
          : undefined,
        "readOperationConfig": obj.readOperationConfig
          ? model.ReadOperationConfig.getDeserializedJsonObj(obj.readOperationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
