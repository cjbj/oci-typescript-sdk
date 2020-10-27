/**
 * InstanceAgentService API
 * Instance Agent Service API
 * OpenAPI spec version: 20180530
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Command content via uri.
 */
export interface InstanceAgentCommandSourceViaObjectStorageUriDetails
  extends model.InstanceAgentCommandSourceDetails {
  /**
   * The Object Storage URL or PAR for the command.
   */
  "sourceUri": string;

  "sourceType": string;
}

export namespace InstanceAgentCommandSourceViaObjectStorageUriDetails {
  export function getJsonObj(
    obj: InstanceAgentCommandSourceViaObjectStorageUriDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceAgentCommandSourceDetails.getJsonObj(
            obj
          ) as InstanceAgentCommandSourceViaObjectStorageUriDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "OBJECT_STORAGE_URI";
}
