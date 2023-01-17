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
 * Optional and valid only for TCP. Use to specify particular destination ports for TCP rules.
 * If you specify TCP as the protocol but omit this object, then all destination ports are allowed.
 *
 */
export interface TcpOptions {
  "destinationPortRange"?: model.PortRange;
  "sourcePortRange"?: model.PortRange;
}

export namespace TcpOptions {
  export function getJsonObj(obj: TcpOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "destinationPortRange": obj.destinationPortRange
          ? model.PortRange.getJsonObj(obj.destinationPortRange)
          : undefined,
        "sourcePortRange": obj.sourcePortRange
          ? model.PortRange.getJsonObj(obj.sourcePortRange)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TcpOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "destinationPortRange": obj.destinationPortRange
          ? model.PortRange.getDeserializedJsonObj(obj.destinationPortRange)
          : undefined,
        "sourcePortRange": obj.sourcePortRange
          ? model.PortRange.getDeserializedJsonObj(obj.sourcePortRange)
          : undefined
      }
    };

    return jsonObj;
  }
}
