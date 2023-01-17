/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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

export interface CreateIPSecConnectionDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the IPSec connection.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@link Cpe} object.
   */
  "cpeId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
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
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DRG.
   */
  "drgId": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Your identifier for your CPE device. Can be either an IP address or a hostname (specifically, the
* fully qualified domain name (FQDN)). The type of identifier you provide here must correspond
* to the value for `cpeLocalIdentifierType`.
* <p>
If you don't provide a value, the `ipAddress` attribute for the {@link Cpe}
* object specified by `cpeId` is used as the `cpeLocalIdentifier`.
* <p>
For information about why you'd provide this value, see
* [If Your CPE Is Behind a NAT Device](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/overviewIPsec.htm#nat).
* <p>
Example IP address: `10.0.3.3`
* <p>
Example hostname: `cpe.example.com`
* 
    */
  "cpeLocalIdentifier"?: string;
  /**
   * The type of identifier for your CPE device. The value you provide here must correspond to the value
   * for `cpeLocalIdentifier`.
   *
   */
  "cpeLocalIdentifierType"?: CreateIPSecConnectionDetails.CpeLocalIdentifierType;
  /**
    * Static routes to the CPE. A static route's CIDR must not be a
* multicast address or class E address.
* <p>
Used for routing a given IPSec tunnel's traffic only if the tunnel
* is using static routing. If you configure at least one tunnel to use static routing, then
* you must provide at least one valid static route. If you configure both
* tunnels to use BGP dynamic routing, you can provide an empty list for the static routes.
* For more information, see the important note in {@link IPSecConnection}.
* <p>
The CIDR can be either IPv4 or IPv6. IPv6 addressing is supported for all commercial and government regions.
* See [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `10.0.1.0/24`
* <p>
Example: `2001:db8::/32`
* 
    */
  "staticRoutes": Array<string>;
  /**
   * Information for creating the individual tunnels in the IPSec connection. You can provide a
   * maximum of 2 `tunnelConfiguration` objects in the array (one for each of the
   * two tunnels).
   *
   */
  "tunnelConfiguration"?: Array<model.CreateIPSecConnectionTunnelDetails>;
}

export namespace CreateIPSecConnectionDetails {
  export enum CpeLocalIdentifierType {
    IpAddress = "IP_ADDRESS",
    Hostname = "HOSTNAME"
  }

  export function getJsonObj(obj: CreateIPSecConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "tunnelConfiguration": obj.tunnelConfiguration
          ? obj.tunnelConfiguration.map(item => {
              return model.CreateIPSecConnectionTunnelDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateIPSecConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "tunnelConfiguration": obj.tunnelConfiguration
          ? obj.tunnelConfiguration.map(item => {
              return model.CreateIPSecConnectionTunnelDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
