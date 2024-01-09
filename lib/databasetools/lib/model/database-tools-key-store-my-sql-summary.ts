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
 * The key store secrets.
 */
export interface DatabaseToolsKeyStoreMySqlSummary {
  /**
   * The key store type.
   */
  "keyStoreType"?: model.KeyStoreTypeMySql;
  "keyStoreContent"?: model.DatabaseToolsKeyStoreContentSecretIdMySqlSummary;
  "keyStorePassword"?: model.DatabaseToolsKeyStorePasswordSecretIdMySqlSummary;
}

export namespace DatabaseToolsKeyStoreMySqlSummary {
  export function getJsonObj(obj: DatabaseToolsKeyStoreMySqlSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentMySqlSummary.getJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordMySqlSummary.getJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStoreMySqlSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentMySqlSummary.getDeserializedJsonObj(
              obj.keyStoreContent
            )
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordMySqlSummary.getDeserializedJsonObj(
              obj.keyStorePassword
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
