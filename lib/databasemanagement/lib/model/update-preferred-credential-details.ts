/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details required to update the preferred credential.
 */
export interface UpdatePreferredCredentialDetails {
  "type": string;
}

export namespace UpdatePreferredCredentialDetails {
  export function getJsonObj(obj: UpdatePreferredCredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NAMED_CREDENTIAL":
          return model.UpdateNamedPreferredCredentialDetails.getJsonObj(
            <model.UpdateNamedPreferredCredentialDetails>(<object>jsonObj),
            true
          );
        case "BASIC":
          return model.UpdateBasicPreferredCredentialDetails.getJsonObj(
            <model.UpdateBasicPreferredCredentialDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdatePreferredCredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NAMED_CREDENTIAL":
          return model.UpdateNamedPreferredCredentialDetails.getDeserializedJsonObj(
            <model.UpdateNamedPreferredCredentialDetails>(<object>jsonObj),
            true
          );
        case "BASIC":
          return model.UpdateBasicPreferredCredentialDetails.getDeserializedJsonObj(
            <model.UpdateBasicPreferredCredentialDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
