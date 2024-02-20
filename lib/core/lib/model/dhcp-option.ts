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
 * A single DHCP option according to [RFC 1533](https://tools.ietf.org/html/rfc1533).
 * The two options available to use are {@link DhcpDnsOption}
 * and {@link DhcpSearchDomainOption}. For more
 * information, see [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm)
 * and [DHCP Options](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingDHCP.htm).
 *
 */
export interface DhcpOption {
  "type": string;
}

export namespace DhcpOption {
  export function getJsonObj(obj: DhcpOption): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DomainNameServer":
          return model.DhcpDnsOption.getJsonObj(<model.DhcpDnsOption>(<object>jsonObj), true);
        case "SearchDomain":
          return model.DhcpSearchDomainOption.getJsonObj(
            <model.DhcpSearchDomainOption>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DhcpOption): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DomainNameServer":
          return model.DhcpDnsOption.getDeserializedJsonObj(
            <model.DhcpDnsOption>(<object>jsonObj),
            true
          );
        case "SearchDomain":
          return model.DhcpSearchDomainOption.getDeserializedJsonObj(
            <model.DhcpSearchDomainOption>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
