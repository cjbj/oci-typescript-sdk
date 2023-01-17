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
 * The table entity data entity.
 */
export interface DataEntityFromTable extends model.DataEntity {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The model version of the object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on the permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description of the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The external key of the object.
   */
  "externalKey"?: string;
  "shape"?: model.Shape;
  /**
   * The shape ID.
   */
  "shapeId"?: string;
  /**
   * The entity type.
   */
  "entityType"?: DataEntityFromTable.EntityType;
  /**
   * Specifies other type label.
   */
  "otherTypeLabel"?: string;
  /**
   * An array of unique keys.
   */
  "uniqueKeys"?: Array<model.UniqueKey>;
  /**
   * An array of foreign keys.
   */
  "foreignKeys"?: Array<model.ForeignKey>;
  /**
   * The resource name.
   */
  "resourceName"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with an upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;

  "modelType": string;
}

export namespace DataEntityFromTable {
  export enum EntityType {
    Table = "TABLE",
    View = "VIEW",
    File = "FILE",
    Sql = "SQL",
    DataStore = "DATA_STORE",
    Message = "MESSAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataEntityFromTable, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DataEntity.getJsonObj(obj) as DataEntityFromTable)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "shape": obj.shape ? model.Shape.getJsonObj(obj.shape) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "TABLE_ENTITY";
  export function getDeserializedJsonObj(
    obj: DataEntityFromTable,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataEntity.getDeserializedJsonObj(obj) as DataEntityFromTable)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "shape": obj.shape ? model.Shape.getDeserializedJsonObj(obj.shape) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getDeserializedJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
