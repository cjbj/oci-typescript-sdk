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
 * The details for creating a private subordinate certificate authority (CA) which is issued by a private CA.
 */
export interface CreateSubordinateCaIssuedByInternalCaConfigDetails
  extends model.CreateCertificateAuthorityConfigDetails {
  /**
   * The OCID of the private CA.
   */
  "issuerCertificateAuthorityId": string;
  "validity"?: model.Validity;
  /**
   * The algorithm used to sign public key certificates that the CA issues.
   */
  "signingAlgorithm"?: model.SignatureAlgorithm;
  "subject": model.CertificateSubject;

  "configType": string;
}

export namespace CreateSubordinateCaIssuedByInternalCaConfigDetails {
  export function getJsonObj(
    obj: CreateSubordinateCaIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateCertificateAuthorityConfigDetails.getJsonObj(
            obj
          ) as CreateSubordinateCaIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getJsonObj(obj.validity) : undefined,

        "subject": obj.subject ? model.CertificateSubject.getJsonObj(obj.subject) : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "SUBORDINATE_CA_ISSUED_BY_INTERNAL_CA";
  export function getDeserializedJsonObj(
    obj: CreateSubordinateCaIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateCertificateAuthorityConfigDetails.getDeserializedJsonObj(
            obj
          ) as CreateSubordinateCaIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getDeserializedJsonObj(obj.validity) : undefined,

        "subject": obj.subject
          ? model.CertificateSubject.getDeserializedJsonObj(obj.subject)
          : undefined
      }
    };

    return jsonObj;
  }
}
