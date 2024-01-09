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
 * The details of the key that you want to create.
 */
export interface CreateKeyDetails {
  /**
   * The OCID of the compartment where you want to create the master encryption key.
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the key. It does not have to be unique, and it is changeable.
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
  "keyShape": model.KeyShape;
  /**
   * The key's protection mode indicates how the key persists and where cryptographic operations that use the key are performed.
   * A protection mode of `HSM` means that the key persists on a hardware security module (HSM) and all cryptographic operations are performed inside
   * the HSM. A protection mode of `SOFTWARE` means that the key persists on the server, protected by the vault's RSA wrapping key which persists
   * on the HSM. All cryptographic operations that use a key with a protection mode of `SOFTWARE` are performed on the server. By default,
   * a key's protection mode is set to `HSM`. You can't change a key's protection mode after the key is created or imported.
   * A protection mode of `EXTERNAL` mean that the key persists on the customer's external key manager which is hosted externally outside of oracle.
   * Oracle only hold a reference to that key.
   * All cryptographic operations that use a key with a protection mode of `EXTERNAL` are performed by external key manager.
   *
   */
  "protectionMode"?: CreateKeyDetails.ProtectionMode;
  "externalKeyReference"?: model.ExternalKeyReference;
}

export namespace CreateKeyDetails {
  export enum ProtectionMode {
    Hsm = "HSM",
    Software = "SOFTWARE",
    External = "EXTERNAL"
  }

  export function getJsonObj(obj: CreateKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getJsonObj(obj.keyShape) : undefined,

        "externalKeyReference": obj.externalKeyReference
          ? model.ExternalKeyReference.getJsonObj(obj.externalKeyReference)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getDeserializedJsonObj(obj.keyShape) : undefined,

        "externalKeyReference": obj.externalKeyReference
          ? model.ExternalKeyReference.getDeserializedJsonObj(obj.externalKeyReference)
          : undefined
      }
    };

    return jsonObj;
  }
}
