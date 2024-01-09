/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * CA Bundle from OCI Certificates service.
 */
export interface OciCaBundle extends model.CaBundle {
  /**
   * The OCID of the CA Bundle resource.
   */
  "caBundleId"?: string;

  "type": string;
}

export namespace OciCaBundle {
  export function getJsonObj(obj: OciCaBundle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.CaBundle.getJsonObj(obj) as OciCaBundle)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OCI_CERTIFICATES";
  export function getDeserializedJsonObj(obj: OciCaBundle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.CaBundle.getDeserializedJsonObj(obj) as OciCaBundle)),
      ...{}
    };

    return jsonObj;
  }
}
