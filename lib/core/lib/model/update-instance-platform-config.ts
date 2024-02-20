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
 * The platform configuration to be updated for the instance.
 *
 */
export interface UpdateInstancePlatformConfig {
  "type": string;
}

export namespace UpdateInstancePlatformConfig {
  export function getJsonObj(obj: UpdateInstancePlatformConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AMD_VM":
          return model.AmdVmUpdateInstancePlatformConfig.getJsonObj(
            <model.AmdVmUpdateInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_VM":
          return model.IntelVmUpdateInstancePlatformConfig.getJsonObj(
            <model.IntelVmUpdateInstancePlatformConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateInstancePlatformConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AMD_VM":
          return model.AmdVmUpdateInstancePlatformConfig.getDeserializedJsonObj(
            <model.AmdVmUpdateInstancePlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_VM":
          return model.IntelVmUpdateInstancePlatformConfig.getDeserializedJsonObj(
            <model.IntelVmUpdateInstancePlatformConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
