/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The details for creating a connection of the type `VBS_ACCESS_TOKEN`.
 * This type corresponds to a connection in Visual Builder Studio that is authenticated with a personal access token.
 *
 */
export interface CreateVbsAccessTokenConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The OCID of personal access token saved in secret store.
   */
  "accessToken": string;
  /**
   * The Base URL of the hosted VBS server.
   */
  "baseUrl": string;

  "connectionType": string;
}

export namespace CreateVbsAccessTokenConnectionDetails {
  export function getJsonObj(
    obj: CreateVbsAccessTokenConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateVbsAccessTokenConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "VBS_ACCESS_TOKEN";
  export function getDeserializedJsonObj(
    obj: CreateVbsAccessTokenConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateVbsAccessTokenConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
