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
 * Provides access to a collection of file systems through one or more VNICs on a
 * specified subnet. The set of file systems is controlled through the
 * referenced export set.
 *
 */
export interface MountTarget {
  /**
    * The availability domain the mount target is in. May be unset
* as a blank or NULL value.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the mount target.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My mount target}
* 
    */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the associated export set. Controls what file
   * systems will be exported through Network File System (NFS) protocol on this
   * mount target.
   *
   */
  "exportSetId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the mount target.
   */
  "id": string;
  /**
   * Additional information about the current 'lifecycleState'.
   */
  "lifecycleDetails": string;
  /**
   * The current state of the mount target.
   */
  "lifecycleState": MountTarget.LifecycleState;
  /**
   * The OCIDs of the private IP addresses associated with this mount target.
   */
  "privateIpIds": Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the mount target is in.
   */
  "subnetId": string;
  /**
   * The method used to map a Unix UID to secondary groups. If NONE, the mount target will not use the Unix UID for ID mapping.
   */
  "idmapType"?: MountTarget.IdmapType;
  "ldapIdmap"?: model.LdapIdmap;
  /**
   * A list of Network Security Group [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with this mount target.
   * A maximum of 5 is allowed.
   * Setting this to an empty array after the list is created removes the mount target from all NSGs.
   * For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   *
   */
  "nsgIds"?: Array<string>;
  "kerberos"?: model.Kerberos;
  /**
    * The date and time the mount target was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MountTarget {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IdmapType {
    Ldap = "LDAP",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MountTarget): object {
    const jsonObj = {
      ...obj,
      ...{
        "ldapIdmap": obj.ldapIdmap ? model.LdapIdmap.getJsonObj(obj.ldapIdmap) : undefined,

        "kerberos": obj.kerberos ? model.Kerberos.getJsonObj(obj.kerberos) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MountTarget): object {
    const jsonObj = {
      ...obj,
      ...{
        "ldapIdmap": obj.ldapIdmap
          ? model.LdapIdmap.getDeserializedJsonObj(obj.ldapIdmap)
          : undefined,

        "kerberos": obj.kerberos ? model.Kerberos.getDeserializedJsonObj(obj.kerberos) : undefined
      }
    };

    return jsonObj;
  }
}
