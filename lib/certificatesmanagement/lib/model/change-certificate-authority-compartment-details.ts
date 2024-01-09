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
 * The details of the request to change compartments for the certificate authority (CA).
 */
export interface ChangeCertificateAuthorityCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
   * into which the CA should move.
   *
   */
  "compartmentId": string;
}

export namespace ChangeCertificateAuthorityCompartmentDetails {
  export function getJsonObj(obj: ChangeCertificateAuthorityCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ChangeCertificateAuthorityCompartmentDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
