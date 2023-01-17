/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Resource representing the TLS configuration used for validating client certificates.
 *
 */
export interface IngressListenerClientValidationConfig {
  "trustedCaBundle"?: model.LocalFileCaBundle | model.OciCaBundle;
  /**
   * A list of alternate names to verify the subject identity in the certificate presented by the client.
   *
   */
  "subjectAlternateNames"?: Array<string>;
}

export namespace IngressListenerClientValidationConfig {
  export function getJsonObj(obj: IngressListenerClientValidationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "trustedCaBundle": obj.trustedCaBundle
          ? model.CaBundle.getJsonObj(obj.trustedCaBundle)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngressListenerClientValidationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "trustedCaBundle": obj.trustedCaBundle
          ? model.CaBundle.getDeserializedJsonObj(obj.trustedCaBundle)
          : undefined
      }
    };

    return jsonObj;
  }
}
