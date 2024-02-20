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
 * The platform configuration used when launching a virtual machine instance with the Intel platform.
 *
 */
export interface IntelVmLaunchInstancePlatformConfig extends model.LaunchInstancePlatformConfig {
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

  "type": string;
}

export namespace IntelVmLaunchInstancePlatformConfig {
  export function getJsonObj(
    obj: IntelVmLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchInstancePlatformConfig.getJsonObj(
            obj
          ) as IntelVmLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "INTEL_VM";
  export function getDeserializedJsonObj(
    obj: IntelVmLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchInstancePlatformConfig.getDeserializedJsonObj(
            obj
          ) as IntelVmLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
}
