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
 * Database Connection resource used for migrations.
 *
 */
export interface Connection {
  /**
   * The OCID of the resource
   *
   */
  "id": string;
  /**
   * OCID of the compartment
   *
   */
  "compartmentId": string;
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
   * True if the Autonomous Connection is dedicated. Not provided for Non-Autonomous Connections.
   *
   */
  "isDedicated"?: boolean;
  /**
   * Database Connection display name identifier.
   *
   */
  "displayName": string;
  /**
   * The OCID of the cloud database.
   *
   */
  "databaseId"?: string;
  "connectDescriptor"?: model.ConnectDescriptor;
  /**
   * OCID of the Secret in the OCI vault containing the Database Connection credentials.
   *
   */
  "credentialsSecretId"?: string;
  /**
   * This name is the distinguished name used while creating the certificate on target database.
   *
   */
  "certificateTdn"?: string;
  "sshDetails"?: model.SshDetails;
  "adminCredentials"?: model.AdminCredentials;
  "replicationCredentials"?: model.AdminCredentials;
  "privateEndpoint"?: model.PrivateEndpointDetails;
  "vaultDetails"?: model.VaultDetails;
  /**
   * The current state of the Connection resource.
   *
   */
  "lifecycleState": model.LifecycleStates;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information
   * for a resource in Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The time the Connection resource was created. An RFC3339 formatted datetime string.
   *
   */
  "timeCreated": Date;
  /**
   * The time of the last Connection resource details update. An RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of Network Security Group OCIDs used to define network access for Connections.
   *
   */
  "nsgIds"?: Array<string>;
}

export namespace Connection {
  export function getJsonObj(obj: Connection): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectDescriptor": obj.connectDescriptor
          ? model.ConnectDescriptor.getJsonObj(obj.connectDescriptor)
          : undefined,

        "sshDetails": obj.sshDetails ? model.SshDetails.getJsonObj(obj.sshDetails) : undefined,
        "adminCredentials": obj.adminCredentials
          ? model.AdminCredentials.getJsonObj(obj.adminCredentials)
          : undefined,
        "replicationCredentials": obj.replicationCredentials
          ? model.AdminCredentials.getJsonObj(obj.replicationCredentials)
          : undefined,
        "privateEndpoint": obj.privateEndpoint
          ? model.PrivateEndpointDetails.getJsonObj(obj.privateEndpoint)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.VaultDetails.getJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Connection): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectDescriptor": obj.connectDescriptor
          ? model.ConnectDescriptor.getDeserializedJsonObj(obj.connectDescriptor)
          : undefined,

        "sshDetails": obj.sshDetails
          ? model.SshDetails.getDeserializedJsonObj(obj.sshDetails)
          : undefined,
        "adminCredentials": obj.adminCredentials
          ? model.AdminCredentials.getDeserializedJsonObj(obj.adminCredentials)
          : undefined,
        "replicationCredentials": obj.replicationCredentials
          ? model.AdminCredentials.getDeserializedJsonObj(obj.replicationCredentials)
          : undefined,
        "privateEndpoint": obj.privateEndpoint
          ? model.PrivateEndpointDetails.getDeserializedJsonObj(obj.privateEndpoint)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.VaultDetails.getDeserializedJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
