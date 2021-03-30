/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of vault replicas
 */
export interface VaultReplicaSummary {
  /**
   * The vault replica's crypto endpoint
   *
   */
  "cryptoEndpoint"?: string;
  /**
   * The vault replica's management endpoint
   *
   */
  "managementEndpoint"?: string;
  /**
   * Region to which vault is replicated to
   *
   */
  "region"?: string;
  "status"?: VaultReplicaSummary.Status;
}

export namespace VaultReplicaSummary {
  export enum Status {
    Creating = "CREATING",
    Created = "CREATED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VaultReplicaSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
