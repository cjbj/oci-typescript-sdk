/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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

export interface UpdateBootVolumeKmsKeyDetails {
  /**
   * The OCID of the new Key Management key to assign to protect the specified volume.
   * This key has to be a valid Key Management key, and policies must exist to allow the user and the Block Volume service to access this key.
   * If you specify the same OCID as the previous key's OCID, the Block Volume service will use it to regenerate a volume encryption key.
   *
   */
  "kmsKeyId"?: string;
}

export namespace UpdateBootVolumeKmsKeyDetails {
  export function getJsonObj(obj: UpdateBootVolumeKmsKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateBootVolumeKmsKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
