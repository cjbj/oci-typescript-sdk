/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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

export interface CreatePublicIpDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the public IP. For ephemeral public IPs,
   * you must set this to the private IP's compartment [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defines when the public IP is deleted and released back to the Oracle Cloud
   * Infrastructure public IP pool. For more information, see
   * [Public IP Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingpublicIPs.htm).
   *
   */
  "lifetime": CreatePublicIpDetails.Lifetime;
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the private IP to assign the public IP to.
* <p>
Required for an ephemeral public IP because it must always be assigned to a private IP
* (specifically a *primary* private IP).
* <p>
Optional for a reserved public IP. If you don't provide it, the public IP is created but not
* assigned to a private IP. You can later assign the public IP with
* {@link #updatePublicIp(UpdatePublicIpRequest) updatePublicIp}.
* 
    */
  "privateIpId"?: string;
}

export namespace CreatePublicIpDetails {
  export enum Lifetime {
    Ephemeral = "EPHEMERAL",
    Reserved = "RESERVED"
  }

  export function getJsonObj(obj: CreatePublicIpDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePublicIpDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
