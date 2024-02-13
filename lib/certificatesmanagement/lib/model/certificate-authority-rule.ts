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
 * A rule that you can apply to a certificate authority (CA) to enforce certain conditions on its usage and management.
 */
export interface CertificateAuthorityRule {
  "ruleType": string;
}

export namespace CertificateAuthorityRule {
  export function getJsonObj(obj: CertificateAuthorityRule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "ruleType" in obj && obj.ruleType) {
      switch (obj.ruleType) {
        case "CERTIFICATE_AUTHORITY_ISSUANCE_EXPIRY_RULE":
          return model.CertificateAuthorityIssuanceExpiryRule.getJsonObj(
            <model.CertificateAuthorityIssuanceExpiryRule>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.ruleType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateAuthorityRule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "ruleType" in obj && obj.ruleType) {
      switch (obj.ruleType) {
        case "CERTIFICATE_AUTHORITY_ISSUANCE_EXPIRY_RULE":
          return model.CertificateAuthorityIssuanceExpiryRule.getDeserializedJsonObj(
            <model.CertificateAuthorityIssuanceExpiryRule>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.ruleType}`);
      }
    }
    return jsonObj;
  }
}
