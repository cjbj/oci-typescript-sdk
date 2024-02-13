/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The configuration details for creating a certificate authority (CA).
 */
export interface CreateCertificateAuthorityConfigDetails {
  /**
   * The name of the CA version. When the value is not null, a name is unique across versions of a given CA.
   *
   */
  "versionName"?: string;

  "configType": string;
}

export namespace CreateCertificateAuthorityConfigDetails {
  export function getJsonObj(obj: CreateCertificateAuthorityConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "ROOT_CA_GENERATED_INTERNALLY":
          return model.CreateRootCaByGeneratingInternallyConfigDetails.getJsonObj(
            <model.CreateRootCaByGeneratingInternallyConfigDetails>(<object>jsonObj),
            true
          );
        case "SUBORDINATE_CA_ISSUED_BY_INTERNAL_CA":
          return model.CreateSubordinateCaIssuedByInternalCaConfigDetails.getJsonObj(
            <model.CreateSubordinateCaIssuedByInternalCaConfigDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCertificateAuthorityConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "ROOT_CA_GENERATED_INTERNALLY":
          return model.CreateRootCaByGeneratingInternallyConfigDetails.getDeserializedJsonObj(
            <model.CreateRootCaByGeneratingInternallyConfigDetails>(<object>jsonObj),
            true
          );
        case "SUBORDINATE_CA_ISSUED_BY_INTERNAL_CA":
          return model.CreateSubordinateCaIssuedByInternalCaConfigDetails.getDeserializedJsonObj(
            <model.CreateSubordinateCaIssuedByInternalCaConfigDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
}
