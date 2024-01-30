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
 * The details required to enable automatic initial plan capture.
 * It takes either credentials or databaseCredential. It's recommended to provide databaseCredential
 *
 */
export interface EnableAutomaticInitialPlanCaptureDetails {
  "credentials"?: model.ManagedDatabasePasswordCredential | model.ManagedDatabaseSecretCredential;
  "databaseCredential"?:
    | model.DatabaseSecretCredentialDetails
    | model.DatabaseNamedCredentialDetails
    | model.DatabasePasswordCredentialDetails;
}

export namespace EnableAutomaticInitialPlanCaptureDetails {
  export function getJsonObj(obj: EnableAutomaticInitialPlanCaptureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getJsonObj(obj.credentials)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getJsonObj(obj.databaseCredential)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnableAutomaticInitialPlanCaptureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getDeserializedJsonObj(obj.databaseCredential)
          : undefined
      }
    };

    return jsonObj;
  }
}
