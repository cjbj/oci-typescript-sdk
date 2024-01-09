/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The key store content.
 */
export interface DatabaseToolsKeyStoreContentSecretIdMySqlSummary
  extends model.DatabaseToolsKeyStoreContentMySqlSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the secret containing the key store.
   */
  "secretId"?: string;

  "valueType": string;
}

export namespace DatabaseToolsKeyStoreContentSecretIdMySqlSummary {
  export function getJsonObj(
    obj: DatabaseToolsKeyStoreContentSecretIdMySqlSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsKeyStoreContentMySqlSummary.getJsonObj(
            obj
          ) as DatabaseToolsKeyStoreContentSecretIdMySqlSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const valueType = "SECRETID";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsKeyStoreContentSecretIdMySqlSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsKeyStoreContentMySqlSummary.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsKeyStoreContentSecretIdMySqlSummary)),
      ...{}
    };

    return jsonObj;
  }
}
