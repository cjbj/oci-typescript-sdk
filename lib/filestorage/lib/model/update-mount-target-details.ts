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
 * Details for updating the mount target.
 */
export interface UpdateMountTargetDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My mount target`
* 
    */
  "displayName"?: string;
  /**
   * The method used to map a Unix UID to secondary groups, if any.
   */
  "idmapType"?: string;
  "ldapIdmap"?: model.UpdateLdapIdmapDetails;
  /**
   * A list of Network Security Group [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with this mount target.
   * A maximum of 5 is allowed.
   * Setting this to an empty array after the list is created removes the mount target from all NSGs.
   * For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   *
   */
  "nsgIds"?: Array<string>;
  "kerberos"?: model.UpdateKerberosDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateMountTargetDetails {
  export function getJsonObj(obj: UpdateMountTargetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "ldapIdmap": obj.ldapIdmap
          ? model.UpdateLdapIdmapDetails.getJsonObj(obj.ldapIdmap)
          : undefined,

        "kerberos": obj.kerberos ? model.UpdateKerberosDetails.getJsonObj(obj.kerberos) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMountTargetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "ldapIdmap": obj.ldapIdmap
          ? model.UpdateLdapIdmapDetails.getDeserializedJsonObj(obj.ldapIdmap)
          : undefined,

        "kerberos": obj.kerberos
          ? model.UpdateKerberosDetails.getDeserializedJsonObj(obj.kerberos)
          : undefined
      }
    };

    return jsonObj;
  }
}
