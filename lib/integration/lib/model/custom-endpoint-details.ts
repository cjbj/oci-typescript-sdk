/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * Details for a custom endpoint for the integration instance.
 */
export interface CustomEndpointDetails {
  /**
   * A custom hostname to be used for the integration instance URL, in FQDN format.
   */
  "hostname": string;
  /**
   * Optional OCID of a vault/secret containing a private SSL certificate bundle to be used for the custom hostname.
   *
   */
  "certificateSecretId"?: string;
  /**
   * The secret version used for the certificate-secret-id (if certificate-secret-id is specified).
   *
   */
  "certificateSecretVersion"?: number;
}

export namespace CustomEndpointDetails {
  export function getJsonObj(obj: CustomEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
