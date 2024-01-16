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
 * Certificate data.
 */
export interface Certificate {
  /**
   * The identifier key (unique name in the scope of the deployment) of the certificate being referenced.
   * It must be 1 to 32 characters long, must contain only alphanumeric characters and must start with a letter.
   *
   */
  "key": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the deployment being referenced.
   *
   */
  "deploymentId": string;
  /**
   * A PEM-encoded SSL certificate.
   *
   */
  "certificateContent": string;
  /**
   * The Certificate issuer.
   *
   */
  "issuer": string;
  /**
   * Indicates if the certificate is self signed.
   *
   */
  "isSelfSigned": boolean;
  /**
   * The Certificate md5Hash.
   *
   */
  "md5Hash": string;
  /**
   * The Certificate public key.
   *
   */
  "publicKey": string;
  /**
   * The Certificate public key algorithm.
   *
   */
  "publicKeyAlgorithm": string;
  /**
   * The Certificate public key size.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "publicKeySize": number;
  /**
   * The Certificate serial.
   *
   */
  "serial": string;
  /**
   * The Certificate subject.
   *
   */
  "subject": string;
  /**
   * The time the certificate is valid from. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeValidFrom": Date;
  /**
   * The time the certificate is valid to. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeValidTo": Date;
  /**
   * The Certificate version.
   *
   */
  "version": string;
  /**
   * The Certificate sha1 hash.
   *
   */
  "sha1Hash": string;
  /**
   * The Certificate authority key id.
   *
   */
  "authorityKeyId": string;
  /**
   * Indicates if the certificate is ca.
   *
   */
  "isCa": boolean;
  /**
   * The Certificate subject key id.
   *
   */
  "subjectKeyId": string;
  /**
   * Possible certificate lifecycle states.
   *
   */
  "lifecycleState": model.CertificateLifecycleState;
  /**
   * The time the resource was created. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeCreated": Date;
}

export namespace Certificate {
  export function getJsonObj(obj: Certificate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Certificate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
