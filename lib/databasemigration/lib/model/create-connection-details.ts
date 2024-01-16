/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Details to create a Database Connection resource.
 *
 */
export interface CreateConnectionDetails {
  /**
   * OCID of the compartment
   *
   */
  "compartmentId": string;
  /**
   * Database Connection display name identifier.
   *
   */
  "displayName"?: string;
  /**
   * Database connection type.
   *
   */
  "databaseType": model.DatabaseConnectionTypes;
  /**
   * Database manual connection subtype. This value can only be specified for manual connections.
   *
   */
  "manualDatabaseSubType"?: model.DatabaseManualConnectionSubTypes;
  /**
   * The OCID of the cloud database. Required if the database connection type is Autonomous.
   *
   */
  "databaseId"?: string;
  "connectDescriptor"?: model.CreateConnectDescriptor;
  /**
   * This name is the distinguished name used while creating the certificate on target database. Requires a TLS wallet to be specified.
   * Not required for source container database connections.
   *
   */
  "certificateTdn"?: string;
  /**
   * cwallet.sso containing containing the TCPS/SSL certificate; base64 encoded String. Not required for source container database connections.
   *
   */
  "tlsWallet"?: string;
  /**
   * keystore.jks file contents; base64 encoded String. Requires a TLS wallet to be specified. Not required for source container database connections.
   *
   */
  "tlsKeystore"?: string;
  "sshDetails"?: model.CreateSshDetails;
  "adminCredentials": model.CreateAdminCredentials;
  "replicationCredentials"?: model.CreateAdminCredentials;
  "privateEndpoint"?: model.CreatePrivateEndpoint;
  "vaultDetails": model.CreateVaultDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of Network Security Group OCIDs used to define network access for Connections.
   *
   */
  "nsgIds"?: Array<string>;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectDescriptor": obj.connectDescriptor
          ? model.CreateConnectDescriptor.getJsonObj(obj.connectDescriptor)
          : undefined,

        "sshDetails": obj.sshDetails
          ? model.CreateSshDetails.getJsonObj(obj.sshDetails)
          : undefined,
        "adminCredentials": obj.adminCredentials
          ? model.CreateAdminCredentials.getJsonObj(obj.adminCredentials)
          : undefined,
        "replicationCredentials": obj.replicationCredentials
          ? model.CreateAdminCredentials.getJsonObj(obj.replicationCredentials)
          : undefined,
        "privateEndpoint": obj.privateEndpoint
          ? model.CreatePrivateEndpoint.getJsonObj(obj.privateEndpoint)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.CreateVaultDetails.getJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectDescriptor": obj.connectDescriptor
          ? model.CreateConnectDescriptor.getDeserializedJsonObj(obj.connectDescriptor)
          : undefined,

        "sshDetails": obj.sshDetails
          ? model.CreateSshDetails.getDeserializedJsonObj(obj.sshDetails)
          : undefined,
        "adminCredentials": obj.adminCredentials
          ? model.CreateAdminCredentials.getDeserializedJsonObj(obj.adminCredentials)
          : undefined,
        "replicationCredentials": obj.replicationCredentials
          ? model.CreateAdminCredentials.getDeserializedJsonObj(obj.replicationCredentials)
          : undefined,
        "privateEndpoint": obj.privateEndpoint
          ? model.CreatePrivateEndpoint.getDeserializedJsonObj(obj.privateEndpoint)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.CreateVaultDetails.getDeserializedJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
