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
export interface UpdateVirtualServiceDetails {
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: {@code This is my new resource}
* 
    */
  "description"?: string;
  "defaultRoutingPolicy"?: model.DefaultVirtualServiceRoutingPolicy;
  /**
   * The DNS hostnames of the virtual service that is used by its callers.
   * Wildcard hostnames are supported in the prefix form.
   * Examples of valid hostnames are \"www.example.com\", \"*.example.com\", \"*.com\".
   * Can be omitted if the virtual service will only have TCP virtual deployments.
   *
   */
  "hosts"?: Array<string>;
  "mtls"?: model.VirtualServiceMutualTransportLayerSecurityDetails;
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

export namespace UpdateVirtualServiceDetails {
  export function getJsonObj(obj: UpdateVirtualServiceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "defaultRoutingPolicy": obj.defaultRoutingPolicy
          ? model.DefaultVirtualServiceRoutingPolicy.getJsonObj(obj.defaultRoutingPolicy)
          : undefined,

        "mtls": obj.mtls
          ? model.VirtualServiceMutualTransportLayerSecurityDetails.getJsonObj(obj.mtls)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVirtualServiceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "defaultRoutingPolicy": obj.defaultRoutingPolicy
          ? model.DefaultVirtualServiceRoutingPolicy.getDeserializedJsonObj(
              obj.defaultRoutingPolicy
            )
          : undefined,

        "mtls": obj.mtls
          ? model.VirtualServiceMutualTransportLayerSecurityDetails.getDeserializedJsonObj(obj.mtls)
          : undefined
      }
    };

    return jsonObj;
  }
}
