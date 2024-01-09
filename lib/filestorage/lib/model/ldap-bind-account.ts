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
 * Account details for the LDAP bind account used by the outbound connector.
 *
 */
export interface LdapBindAccount extends model.OutboundConnector {
  /**
   * Array of server endpoints to use when connecting with the LDAP bind account.
   *
   */
  "endpoints": Array<model.Endpoint>;
  /**
   * The LDAP Distinguished Name of the account.
   */
  "bindDistinguishedName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the password for the LDAP bind account in the Vault.
   */
  "passwordSecretId"?: string;
  /**
   * Version of the password secret in the Vault to use. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "passwordSecretVersion"?: number;

  "connectorType": string;
}

export namespace LdapBindAccount {
  export function getJsonObj(obj: LdapBindAccount, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.OutboundConnector.getJsonObj(obj) as LdapBindAccount)),
      ...{
        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.Endpoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectorType = "LDAPBIND";
  export function getDeserializedJsonObj(obj: LdapBindAccount, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OutboundConnector.getDeserializedJsonObj(obj) as LdapBindAccount)),
      ...{
        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.Endpoint.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
