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
 * A `StructuredType` object represents a data type that exists in a physical data asset object such as a table column, but is more complex. For example, an Oracle database `OBJECT` type. It can be composed of multiple `DataType` objects.
 */
export interface StructuredType extends model.BaseType {
  "schema"?:
    | model.ConfiguredType
    | model.DerivedType
    | model.DataType
    | model.StructuredType
    | model.CompositeType;

  "modelType": string;
}

export namespace StructuredType {
  export function getJsonObj(obj: StructuredType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getJsonObj(obj) as StructuredType)),
      ...{
        "schema": obj.schema ? model.BaseType.getJsonObj(obj.schema) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "STRUCTURED_TYPE";
  export function getDeserializedJsonObj(obj: StructuredType, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseType.getDeserializedJsonObj(obj) as StructuredType)),
      ...{
        "schema": obj.schema ? model.BaseType.getDeserializedJsonObj(obj.schema) : undefined
      }
    };

    return jsonObj;
  }
}
