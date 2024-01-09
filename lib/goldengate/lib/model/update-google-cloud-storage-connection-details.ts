/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information to update a the Google Cloud Storage Connection.
 *
 */
export interface UpdateGoogleCloudStorageConnectionDetails extends model.UpdateConnectionDetails {
  /**
   * The base64 encoded content of the service account key file containing
   * the credentials required to use Google Cloud Storage.
   *
   */
  "serviceAccountKeyFile"?: string;

  "connectionType": string;
}

export namespace UpdateGoogleCloudStorageConnectionDetails {
  export function getJsonObj(
    obj: UpdateGoogleCloudStorageConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(
            obj
          ) as UpdateGoogleCloudStorageConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GOOGLE_CLOUD_STORAGE";
  export function getDeserializedJsonObj(
    obj: UpdateGoogleCloudStorageConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateGoogleCloudStorageConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
