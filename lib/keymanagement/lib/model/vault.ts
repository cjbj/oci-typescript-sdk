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
 * The logical entity where the Vault service creates and durably stores keys.
 */
export interface Vault {
  /**
   * The OCID of the compartment that contains this vault.
   */
  "compartmentId": string;
  /**
   * The service endpoint to perform cryptographic operations against. Cryptographic operations include
   * [Encrypt](https://docs.cloud.oracle.com/api/#/en/key/latest/EncryptedData/Encrypt), [Decrypt](https://docs.cloud.oracle.com/api/#/en/key/latest/DecryptedData/Decrypt),
   * and [GenerateDataEncryptionKey](https://docs.cloud.oracle.com/api/#/en/key/latest/GeneratedKey/GenerateDataEncryptionKey) operations.
   *
   */
  "cryptoEndpoint": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the vault. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the vault.
   */
  "id": string;
  /**
    * The vault's current lifecycle state.
* <p>
Example: `DELETED`
* 
    */
  "lifecycleState": Vault.LifecycleState;
  /**
   * The service endpoint to perform management operations against. Management operations include \"Create,\" \"Update,\" \"List,\" \"Get,\" and \"Delete\" operations.
   *
   */
  "managementEndpoint": string;
  /**
    * The date and time this vault was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: `2018-04-03T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * An optional property to indicate when to delete the vault, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2018-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The type of vault. Each type of vault stores the key with different
   * degrees of isolation and has different options and pricing.
   *
   */
  "vaultType": Vault.VaultType;
  /**
   * The OCID of the vault from which this vault was restored, if it was restored from a backup file.
   * If you restore a vault to the same region, the vault retains the same OCID that it had when you
   * backed up the vault.
   *
   */
  "restoredFromVaultId"?: string;
  /**
   * The OCID of the vault's wrapping key.
   */
  "wrappingkeyId": string;
  "replicaDetails"?: model.VaultReplicaDetails;
  /**
   * A Boolean value that indicates whether the Vault is primary Vault or replica Vault.
   */
  "isPrimary"?: boolean;
  "externalKeyManagerMetadataSummary"?: model.ExternalKeyManagerMetadataSummary;
}

export namespace Vault {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
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

  export enum VaultType {
    VirtualPrivate = "VIRTUAL_PRIVATE",
    Default = "DEFAULT",
    External = "EXTERNAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Vault): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicaDetails": obj.replicaDetails
          ? model.VaultReplicaDetails.getJsonObj(obj.replicaDetails)
          : undefined,

        "externalKeyManagerMetadataSummary": obj.externalKeyManagerMetadataSummary
          ? model.ExternalKeyManagerMetadataSummary.getJsonObj(
              obj.externalKeyManagerMetadataSummary
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Vault): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicaDetails": obj.replicaDetails
          ? model.VaultReplicaDetails.getDeserializedJsonObj(obj.replicaDetails)
          : undefined,

        "externalKeyManagerMetadataSummary": obj.externalKeyManagerMetadataSummary
          ? model.ExternalKeyManagerMetadataSummary.getDeserializedJsonObj(
              obj.externalKeyManagerMetadataSummary
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
