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

/**
 * Defines the stateful subnet egress security list configuration that allowed the ingress traffic.
 *
 */
export interface StatefulEgressSecurityListConfiguration
  extends model.AllowedSecurityConfiguration {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the security
   * list that allowed the traffic.
   *
   */
  "securityListId": string;
  "securityRule": model.IngressSecurityRule;

  "type": string;
}

export namespace StatefulEgressSecurityListConfiguration {
  export function getJsonObj(
    obj: StatefulEgressSecurityListConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AllowedSecurityConfiguration.getJsonObj(
            obj
          ) as StatefulEgressSecurityListConfiguration)),
      ...{
        "securityRule": obj.securityRule
          ? model.IngressSecurityRule.getJsonObj(obj.securityRule)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "STATEFUL_EGRESS_SECURITY_LIST";
  export function getDeserializedJsonObj(
    obj: StatefulEgressSecurityListConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AllowedSecurityConfiguration.getDeserializedJsonObj(
            obj
          ) as StatefulEgressSecurityListConfiguration)),
      ...{
        "securityRule": obj.securityRule
          ? model.IngressSecurityRule.getDeserializedJsonObj(obj.securityRule)
          : undefined
      }
    };

    return jsonObj;
  }
}
