/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * Optional. Used to specify from which subnet prefixes an IPv6 address should be allocated, or to assign valid available IPv6 addresses.
 *
 */
export interface InstancePoolPlacementIpv6AddressIpv6SubnetCidrDetails {
  /**
   * Optional. Used to disambiguate which subnet prefix should be used to create an IPv6 allocation.
   *
   */
  "ipv6SubnetCidr"?: string;
}

export namespace InstancePoolPlacementIpv6AddressIpv6SubnetCidrDetails {
  export function getJsonObj(obj: InstancePoolPlacementIpv6AddressIpv6SubnetCidrDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: InstancePoolPlacementIpv6AddressIpv6SubnetCidrDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
