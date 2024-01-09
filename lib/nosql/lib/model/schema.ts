/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
 * 
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
 * The table schema information as a JSON object.
 */
export interface Schema {
  /**
   * The columns of a table.
   */
  "columns": Array<model.Column>;
  /**
   * A list of column names that make up a key.
   */
  "primaryKey": Array<string>;
  /**
   * A list of column names that make up a key.
   */
  "shardKey": Array<string>;
  /**
   * The default Time-to-Live for the table, in days. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ttl": number;
  "identity"?: model.Identity;
}

export namespace Schema {
  export function getJsonObj(obj: Schema): object {
    const jsonObj = {
      ...obj,
      ...{
        "columns": obj.columns
          ? obj.columns.map(item => {
              return model.Column.getJsonObj(item);
            })
          : undefined,

        "identity": obj.identity ? model.Identity.getJsonObj(obj.identity) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Schema): object {
    const jsonObj = {
      ...obj,
      ...{
        "columns": obj.columns
          ? obj.columns.map(item => {
              return model.Column.getDeserializedJsonObj(item);
            })
          : undefined,

        "identity": obj.identity ? model.Identity.getDeserializedJsonObj(obj.identity) : undefined
      }
    };

    return jsonObj;
  }
}
