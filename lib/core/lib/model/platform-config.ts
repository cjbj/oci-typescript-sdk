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
 * The platform configuration for the instance.
 *
 */
export interface PlatformConfig {
  /**
   * Whether Secure Boot is enabled on the instance.
   *
   */
  "isSecureBootEnabled"?: boolean;
  /**
   * Whether the Trusted Platform Module (TPM) is enabled on the instance.
   *
   */
  "isTrustedPlatformModuleEnabled"?: boolean;
  /**
   * Whether the Measured Boot feature is enabled on the instance.
   *
   */
  "isMeasuredBootEnabled"?: boolean;
  /**
   * Whether the instance is a confidential instance. If this value is {@code true}, the instance is a confidential instance. The default value is {@code false}.
   *
   */
  "isMemoryEncryptionEnabled"?: boolean;

  "type": string;
}

export namespace PlatformConfig {
  export function getJsonObj(obj: PlatformConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AMD_MILAN_BM":
          return model.AmdMilanBmPlatformConfig.getJsonObj(
            <model.AmdMilanBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_ROME_BM":
          return model.AmdRomeBmPlatformConfig.getJsonObj(
            <model.AmdRomeBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_SKYLAKE_BM":
          return model.IntelSkylakeBmPlatformConfig.getJsonObj(
            <model.IntelSkylakeBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_ROME_BM_GPU":
          return model.AmdRomeBmGpuPlatformConfig.getJsonObj(
            <model.AmdRomeBmGpuPlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_ICELAKE_BM":
          return model.IntelIcelakeBmPlatformConfig.getJsonObj(
            <model.IntelIcelakeBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_VM":
          return model.AmdVmPlatformConfig.getJsonObj(
            <model.AmdVmPlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_VM":
          return model.IntelVmPlatformConfig.getJsonObj(
            <model.IntelVmPlatformConfig>(<object>jsonObj),
            true
          );
        case "GENERIC_BM":
          return model.GenericBmPlatformConfig.getJsonObj(
            <model.GenericBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_MILAN_BM_GPU":
          return model.AmdMilanBmGpuPlatformConfig.getJsonObj(
            <model.AmdMilanBmGpuPlatformConfig>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PlatformConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AMD_MILAN_BM":
          return model.AmdMilanBmPlatformConfig.getDeserializedJsonObj(
            <model.AmdMilanBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_ROME_BM":
          return model.AmdRomeBmPlatformConfig.getDeserializedJsonObj(
            <model.AmdRomeBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_SKYLAKE_BM":
          return model.IntelSkylakeBmPlatformConfig.getDeserializedJsonObj(
            <model.IntelSkylakeBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_ROME_BM_GPU":
          return model.AmdRomeBmGpuPlatformConfig.getDeserializedJsonObj(
            <model.AmdRomeBmGpuPlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_ICELAKE_BM":
          return model.IntelIcelakeBmPlatformConfig.getDeserializedJsonObj(
            <model.IntelIcelakeBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_VM":
          return model.AmdVmPlatformConfig.getDeserializedJsonObj(
            <model.AmdVmPlatformConfig>(<object>jsonObj),
            true
          );
        case "INTEL_VM":
          return model.IntelVmPlatformConfig.getDeserializedJsonObj(
            <model.IntelVmPlatformConfig>(<object>jsonObj),
            true
          );
        case "GENERIC_BM":
          return model.GenericBmPlatformConfig.getDeserializedJsonObj(
            <model.GenericBmPlatformConfig>(<object>jsonObj),
            true
          );
        case "AMD_MILAN_BM_GPU":
          return model.AmdMilanBmGpuPlatformConfig.getDeserializedJsonObj(
            <model.AmdMilanBmGpuPlatformConfig>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
