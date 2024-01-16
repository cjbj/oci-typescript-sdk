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
 * Details for creating the outbound connector.
 */
export interface CreateOutboundConnectorDetails {
  /**
    * The availability domain the outbound connector is in. May be unset
* as a blank or NULL value.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the outbound connector.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My outbound connector}
* 
    */
  "displayName"?: string;
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

  "connectorType": string;
}

export namespace CreateOutboundConnectorDetails {
  export function getJsonObj(obj: CreateOutboundConnectorDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "LDAPBIND":
          return model.CreateLdapBindAccountDetails.getJsonObj(
            <model.CreateLdapBindAccountDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOutboundConnectorDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "LDAPBIND":
          return model.CreateLdapBindAccountDetails.getDeserializedJsonObj(
            <model.CreateLdapBindAccountDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
}
