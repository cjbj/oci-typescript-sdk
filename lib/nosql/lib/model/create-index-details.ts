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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifications for the new index.
 */
export interface CreateIndexDetails {
  /**
   * Index name.
   */
  "name": string;
  /**
   * The OCID of the table's compartment.  Required
   * if the tableNameOrId path parameter is a table name.
   * Optional if tableNameOrId is an OCID.  If tableNameOrId
   * is an OCID, and compartmentId is supplied, the latter
   * must match the identified table's compartmentId.
   *
   */
  "compartmentId"?: string;
  /**
   * A set of keys for a secondary index.
   */
  "keys": Array<model.IndexKey>;
  /**
   * If true, the operation completes successfully even when the
   * index exists.  Otherwise, an attempt to create an index
   * that already exists will return an error.
   *
   */
  "isIfNotExists"?: boolean;
}

export namespace CreateIndexDetails {
  export function getJsonObj(obj: CreateIndexDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keys": obj.keys
          ? obj.keys.map(item => {
              return model.IndexKey.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateIndexDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keys": obj.keys
          ? obj.keys.map(item => {
              return model.IndexKey.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
