/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The details for the new Database Tools private endpoint.
 */
export interface CreateDatabaseToolsPrivateEndpointDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the Database Tools private endpoint.
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A description of the Database Tools private endpoint.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the `DatabaseToolsEndpointService`.
   */
  "endpointServiceId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet that the private endpoint belongs to.
   */
  "subnetId": string;
  /**
   * The private IP address that represents the access point for the associated endpoint service.
   */
  "privateEndpointIp"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups
   * that the private endpoint's VNIC belongs to.  For more information about NSGs, see
   * {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
}

export namespace CreateDatabaseToolsPrivateEndpointDetails {
  export function getJsonObj(obj: CreateDatabaseToolsPrivateEndpointDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDatabaseToolsPrivateEndpointDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
