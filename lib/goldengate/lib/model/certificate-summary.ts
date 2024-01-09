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
 * Summary of the Certificates.
 */
export interface CertificateSummary {
  /**
   * The identifier key (unique name in the scope of the deployment) of the certificate being referenced.
   * It must be 1 to 32 characters long, must contain only alphanumeric characters and must start with a letter.
   *
   */
  "key": string;
  /**
   * Possible certificate lifecycle states.
   *
   */
  "lifecycleState": model.CertificateLifecycleState;
  /**
   * The Certificate subject.
   *
   */
  "subject": string;
  /**
   * Indicates if the certificate is self signed.
   *
   */
  "isSelfSigned": boolean;
  /**
   * The time the certificate is valid to. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeValidTo": Date;
  /**
   * The time the resource was created. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeCreated": Date;
}

export namespace CertificateSummary {
  export function getJsonObj(obj: CertificateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
