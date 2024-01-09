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
 * One Trusted Platform Module (TPM) Platform Configuration Register (PCR) entry. The entry might be measured during boot,
 * or specified in a policy.
 *
 */
export interface MeasuredBootEntry {
  /**
   * The index of the policy.
   */
  "pcrIndex"?: string;
  /**
   * The hashed PCR value.
   */
  "value"?: string;
  /**
   * The type of algorithm used to calculate the hash.
   */
  "hashAlgorithm"?: string;
}

export namespace MeasuredBootEntry {
  export function getJsonObj(obj: MeasuredBootEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MeasuredBootEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
