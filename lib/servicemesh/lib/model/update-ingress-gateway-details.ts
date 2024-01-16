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
 * The information to be updated.
 */
export interface UpdateIngressGatewayDetails {
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: {@code This is my new resource}
* 
    */
  "description"?: string;
  /**
   * An array of hostnames and their listener configuration that this gateway will bind to.
   */
  "hosts"?: Array<model.IngressGatewayHost>;
  "accessLogging"?: model.AccessLoggingConfiguration;
  "mtls"?: model.IngressGatewayMutualTransportLayerSecurityDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateIngressGatewayDetails {
  export function getJsonObj(obj: UpdateIngressGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "hosts": obj.hosts
          ? obj.hosts.map(item => {
              return model.IngressGatewayHost.getJsonObj(item);
            })
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getJsonObj(obj.accessLogging)
          : undefined,
        "mtls": obj.mtls
          ? model.IngressGatewayMutualTransportLayerSecurityDetails.getJsonObj(obj.mtls)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateIngressGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "hosts": obj.hosts
          ? obj.hosts.map(item => {
              return model.IngressGatewayHost.getDeserializedJsonObj(item);
            })
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getDeserializedJsonObj(obj.accessLogging)
          : undefined,
        "mtls": obj.mtls
          ? model.IngressGatewayMutualTransportLayerSecurityDetails.getDeserializedJsonObj(obj.mtls)
          : undefined
      }
    };

    return jsonObj;
  }
}
