/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * Summary of the Database Tools private endpoint.
 */
export interface DatabaseToolsPrivateEndpointSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the private endpoint.
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * A description of the Database Tools private endpoint.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Tools private endpoint.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Tools Endpoint Service.
   */
  "endpointServiceId": string;
  /**
   * The time the Database Tools private endpoint was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the Database Tools private endpoint was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VCN that the private endpoint belongs to.
   */
  "vcnId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet that the private endpoint belongs to.
   */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the private endpoint's VNIC.
   */
  "privateEndpointVnicId"?: string;
  /**
   * The private IP address that represents the access point for the associated endpoint service.
   */
  "privateEndpointIp"?: string;
  /**
   * Then FQDN to use for the private endpoint.
   */
  "endpointFqdn"?: string;
  /**
   * A list of additional FQDNs that can be also be used for the private endpoint.
   */
  "additionalFqdns"?: Array<string>;
  /**
   * The current state of the Database Tools private endpoint.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups
   * that the private endpoint's VNIC belongs to.  For more information about NSGs, see
   * {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  "reverseConnectionConfiguration"?: model.DatabaseToolsPrivateEndpointReverseConnectionConfiguration;
}

export namespace DatabaseToolsPrivateEndpointSummary {
  export function getJsonObj(obj: DatabaseToolsPrivateEndpointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "reverseConnectionConfiguration": obj.reverseConnectionConfiguration
          ? model.DatabaseToolsPrivateEndpointReverseConnectionConfiguration.getJsonObj(
              obj.reverseConnectionConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsPrivateEndpointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "reverseConnectionConfiguration": obj.reverseConnectionConfiguration
          ? model.DatabaseToolsPrivateEndpointReverseConnectionConfiguration.getDeserializedJsonObj(
              obj.reverseConnectionConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
