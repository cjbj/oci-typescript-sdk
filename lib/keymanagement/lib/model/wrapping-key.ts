/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The public RSA wrapping key associated with the vault
 */
export interface WrappingKey {
  /**
   * The OCID of the compartment that contains this key.
   */
  "compartmentId": string;
  /**
   * The OCID of the key.
   */
  "id": string;
  /**
    * The key's current lifecycle state.
* <p>
Example: {@code ENABLED}
* 
    */
  "lifecycleState": WrappingKey.LifecycleState;
  /**
   * The public key, in PEM format, to use to wrap the key material before importing it.
   *
   */
  "publicKey": string;
  /**
    * The date and time the key was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: {@code 2018-04-03T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
   * The OCID of the vault that contains this key.
   */
  "vaultId": string;
}

export namespace WrappingKey {
  export enum LifecycleState {
    Creating = "CREATING",
    Enabling = "ENABLING",
    Enabled = "ENABLED",
    Disabling = "DISABLING",
    Disabled = "DISABLED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    PendingDeletion = "PENDING_DELETION",
    SchedulingDeletion = "SCHEDULING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    Updating = "UPDATING",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Restoring = "RESTORING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WrappingKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WrappingKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
