/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface SignedData {
  /**
   * The OCID of the key used to sign the message.
   */
  "keyId": string;
  /**
   * The OCID of the key version used to sign the message.
   */
  "keyVersionId": string;
  /**
   * The base64-encoded binary data object denoting the cryptographic signature generated for the message or message digest.
   *
   */
  "signature": string;
  /**
   * The algorithm to use to sign the message or message digest.
   * For RSA keys, supported signature schemes include PKCS #1 and RSASSA-PSS, along with
   * different hashing algorithms.
   * For ECDSA keys, ECDSA is the supported signature scheme with different hashing algorithms.
   * When you pass a message digest for signing, ensure that you specify the same hashing algorithm
   * as used when creating the message digest.
   *
   */
  "signingAlgorithm": SignedData.SigningAlgorithm;
}

export namespace SignedData {
  export enum SigningAlgorithm {
    Sha224RsaPkcsPss = "SHA_224_RSA_PKCS_PSS",
    Sha256RsaPkcsPss = "SHA_256_RSA_PKCS_PSS",
    Sha384RsaPkcsPss = "SHA_384_RSA_PKCS_PSS",
    Sha512RsaPkcsPss = "SHA_512_RSA_PKCS_PSS",
    Sha224RsaPkcs1V15 = "SHA_224_RSA_PKCS1_V1_5",
    Sha256RsaPkcs1V15 = "SHA_256_RSA_PKCS1_V1_5",
    Sha384RsaPkcs1V15 = "SHA_384_RSA_PKCS1_V1_5",
    Sha512RsaPkcs1V15 = "SHA_512_RSA_PKCS1_V1_5",
    EcdsaSha256 = "ECDSA_SHA_256",
    EcdsaSha384 = "ECDSA_SHA_384",
    EcdsaSha512 = "ECDSA_SHA_512",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SignedData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
