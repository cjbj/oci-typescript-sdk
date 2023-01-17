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
 * MacroPivotField is used for the PivotField with macro expressions. It can contain the rules according to the macro pattern/attribute added and create new fields according to the PivotKeyValues
 */
export interface MacroPivotField {
  /**
   * Specifies whether the type of macro fields is inferred from an expression or useType (false) or the source field (true).
   */
  "isUseSourceType"?: boolean;
  "expr"?: model.Expression;
  "useType"?: model.ConfiguredType;
  "type"?:
    | model.ArrayType
    | model.ConfiguredType
    | model.JavaType
    | model.DynamicType
    | model.DerivedType
    | model.DataType
    | model.MaterializedCompositeType
    | model.MapType
    | model.CompositeType;
  /**
   * column name pattern can be used to generate the name structure of the generated columns. By default column names are of %PIVOT_KEY_VALUE% or %MACRO_INPUT%_%PIVOT_KEY_VALUE%, but we can change it something by passing something like MY_PREFIX%PIVOT_KEY_VALUE%MY_SUFFIX or MY_PREFIX%MACRO_INPUT%_%PIVOT_KEY_VALUE%MY_SUFFIX which will add custom prefix and suffix to the column name.
   */
  "columnNamePattern"?: string;
}

export namespace MacroPivotField {
  export function getJsonObj(obj: MacroPivotField): object {
    const jsonObj = {
      ...obj,
      ...{
        "expr": obj.expr ? model.Expression.getJsonObj(obj.expr) : undefined,
        "useType": obj.useType ? model.ConfiguredType.getJsonObj(obj.useType) : undefined,
        "type": obj.type ? model.BaseType.getJsonObj(obj.type) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MacroPivotField): object {
    const jsonObj = {
      ...obj,
      ...{
        "expr": obj.expr ? model.Expression.getDeserializedJsonObj(obj.expr) : undefined,
        "useType": obj.useType
          ? model.ConfiguredType.getDeserializedJsonObj(obj.useType)
          : undefined,
        "type": obj.type ? model.BaseType.getDeserializedJsonObj(obj.type) : undefined
      }
    };

    return jsonObj;
  }
}
