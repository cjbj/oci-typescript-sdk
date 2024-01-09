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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details used when adding a ULA or private IPv6 prefix or an IPv6 GUA assigned by Oracle or a BYOIPv6 prefix. You can add only one of these per request.
 */
export interface AddVcnIpv6CidrDetails {
  /**
    * This field is not required and should only be specified if a ULA or private IPv6 prefix is desired for VCN's private IP address space.
* See[IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `2001:0db8:0123::/48` or `fd00:1000:0:1::/64`
* 
    */
  "ipv6PrivateCidrBlock"?: string;
  /**
   * Indicates whether Oracle will allocate an IPv6 GUA. Only one prefix of /56 size can be allocated by Oracle as a GUA.
   *
   */
  "isOracleGuaAllocationEnabled"?: boolean;
  "byoipv6CidrDetail"?: model.Byoipv6CidrDetails;
}

export namespace AddVcnIpv6CidrDetails {
  export function getJsonObj(obj: AddVcnIpv6CidrDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "byoipv6CidrDetail": obj.byoipv6CidrDetail
          ? model.Byoipv6CidrDetails.getJsonObj(obj.byoipv6CidrDetail)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddVcnIpv6CidrDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "byoipv6CidrDetail": obj.byoipv6CidrDetail
          ? model.Byoipv6CidrDetails.getDeserializedJsonObj(obj.byoipv6CidrDetail)
          : undefined
      }
    };

    return jsonObj;
  }
}
