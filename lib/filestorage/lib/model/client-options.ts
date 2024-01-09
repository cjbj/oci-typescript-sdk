/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * NFS export options applied to a specified set of
 * clients. Only governs access through the associated
 * export. Access to the same file system through a different
 * export (on the same or different mount target) will be governed
 * by that export's export options.
 *
 */
export interface ClientOptions {
  /**
   * Clients these options should apply to. Must be a either
   * single IPv4 address or single IPv4 CIDR block.
   * <p>
   **Note:** Access will also be limited by any applicable VCN
   * security rules and the ability to route IP packets to the
   * mount target. Mount targets do not have Internet-routable IP addresses.
   *
   */
  "source": string;
  /**
   * If `true`, clients accessing the file system through this
   * export must connect from a privileged source port. If
   * unspecified, defaults to `true`.
   *
   */
  "requirePrivilegedSourcePort"?: boolean;
  /**
   * Type of access to grant clients using the file system
   * through this export. If unspecified defaults to `READ_WRITE`.
   *
   */
  "access"?: ClientOptions.Access;
  /**
   * Used when clients accessing the file system through this export
   * have their UID and GID remapped to 'anonymousUid' and
   * 'anonymousGid'. If `ALL`, all users and groups are remapped;
   * if `ROOT`, only the root user and group (UID/GID 0) are
   * remapped; if `NONE`, no remapping is done. If unspecified,
   * defaults to `ROOT`.
   *
   */
  "identitySquash"?: ClientOptions.IdentitySquash;
  /**
   * UID value to remap to when squashing a client UID (see
   * identitySquash for more details.) If unspecified, defaults
   * to `65534`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "anonymousUid"?: number;
  /**
   * GID value to remap to when squashing a client GID (see
   * identitySquash for more details.) If unspecified defaults
   * to `65534`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "anonymousGid"?: number;
  /**
   * Whether or not to enable anonymous access to the file system through this export in cases where a user isn't found in the LDAP server used for ID mapping.
   * If true, and the user is not found in the LDAP directory, the operation uses the Squash UID and Squash GID.
   *
   */
  "isAnonymousAccessAllowed"?: boolean;
  /**
   * Array of allowed NFS authentication types.
   */
  "allowedAuth"?: Array<ClientOptions.AllowedAuth>;
}

export namespace ClientOptions {
  export enum Access {
    ReadWrite = "READ_WRITE",
    ReadOnly = "READ_ONLY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IdentitySquash {
    None = "NONE",
    Root = "ROOT",
    All = "ALL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AllowedAuth {
    Sys = "SYS",
    Krb5 = "KRB5",
    Krb5I = "KRB5I",
    Krb5P = "KRB5P",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ClientOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ClientOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
