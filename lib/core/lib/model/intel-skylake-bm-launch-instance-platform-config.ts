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
 * The platform configuration used when launching a bare metal instance with an Intel X7-based processor
 * (the Intel Skylake platform).
 *
 */
export interface IntelSkylakeBmLaunchInstancePlatformConfig
  extends model.LaunchInstancePlatformConfig {
  /**
   * The number of NUMA nodes per socket (NPS).
   *
   */
  "numaNodesPerSocket"?: IntelSkylakeBmLaunchInstancePlatformConfig.NumaNodesPerSocket;
  /**
    * Whether symmetric multithreading is enabled on the instance. Symmetric multithreading is also
* called simultaneous multithreading (SMT) or Intel Hyper-Threading.
* <p>
Intel and AMD processors have two hardware execution threads per core (OCPU). SMT permits multiple
* independent threads of execution, to better use the resources and increase the efficiency
* of the CPU. When multithreading is disabled, only one thread is permitted to run on each core, which
* can provide higher or more predictable performance for some workloads.
* 
    */
  "isSymmetricMultiThreadingEnabled"?: boolean;
  /**
   * Whether the input-output memory management unit is enabled.
   *
   */
  "isInputOutputMemoryManagementUnitEnabled"?: boolean;
  /**
    * The percentage of cores enabled. Value must be a multiple of 25%. If the requested percentage
* results in a fractional number of cores, the system rounds up the number of cores across processors
* and provisions an instance with a whole number of cores.
* <p>
If the applications that you run on the instance use a core-based licensing model and need fewer cores
* than the full size of the shape, you can disable cores to reduce your licensing costs. The instance
* itself is billed for the full shape, regardless of whether all cores are enabled.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "percentageOfCoresEnabled"?: number;
  /**
   * Instance Platform Configuration Configuration Map for flexible setting input.
   *
   */
  "configMap"?: { [key: string]: string };

  "type": string;
}

export namespace IntelSkylakeBmLaunchInstancePlatformConfig {
  export enum NumaNodesPerSocket {
    Nps1 = "NPS1",
    Nps2 = "NPS2"
  }

  export function getJsonObj(
    obj: IntelSkylakeBmLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchInstancePlatformConfig.getJsonObj(
            obj
          ) as IntelSkylakeBmLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "INTEL_SKYLAKE_BM";
  export function getDeserializedJsonObj(
    obj: IntelSkylakeBmLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchInstancePlatformConfig.getDeserializedJsonObj(
            obj
          ) as IntelSkylakeBmLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
}
