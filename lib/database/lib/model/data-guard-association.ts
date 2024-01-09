/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface DataGuardAssociation {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Data Guard association.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the reporting database.
   */
  "databaseId": string;
  /**
   * The role of the reporting database in this Data Guard association.
   */
  "role": DataGuardAssociation.Role;
  /**
   * The current state of the Data Guard association.
   */
  "lifecycleState": DataGuardAssociation.LifecycleState;
  /**
   * Additional information about the current lifecycleState, if available.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system containing the associated
   * peer database.
   *
   */
  "peerDbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Home containing the associated peer database.
   *
   */
  "peerDbHomeId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the associated peer database.
   */
  "peerDatabaseId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the peer database's Data Guard association.
   */
  "peerDataGuardAssociationId"?: string;
  /**
   * The role of the peer database in this Data Guard association.
   */
  "peerRole": DataGuardAssociation.PeerRole;
  /**
    * The lag time between updates to the primary database and application of the redo data on the standby database,
* as computed by the reporting database.
* <p>
Example: `9 seconds`
* 
    */
  "applyLag"?: string;
  /**
    * The rate at which redo logs are synced between the associated databases.
* <p>
Example: `180 Mb per second`
* 
    */
  "applyRate"?: string;
  /**
   * The protection mode of this Data Guard association. For more information, see
   * [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
   * in the Oracle Data Guard documentation.
   *
   */
  "protectionMode": DataGuardAssociation.ProtectionMode;
  /**
   * The redo transport type used by this Data Guard association.  For more information, see
   * [Redo Transport Services](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400)
   * in the Oracle Data Guard documentation.
   *
   */
  "transportType"?: DataGuardAssociation.TransportType;
  /**
   * The date and time the Data Guard association was created.
   */
  "timeCreated"?: Date;
  /**
   * True if active Data Guard is enabled.
   */
  "isActiveDataGuardEnabled"?: boolean;
}

export namespace DataGuardAssociation {
  export enum Role {
    Primary = "PRIMARY",
    Standby = "STANDBY",
    DisabledStandby = "DISABLED_STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    Upgrading = "UPGRADING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PeerRole {
    Primary = "PRIMARY",
    Standby = "STANDBY",
    DisabledStandby = "DISABLED_STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ProtectionMode {
    MaximumAvailability = "MAXIMUM_AVAILABILITY",
    MaximumPerformance = "MAXIMUM_PERFORMANCE",
    MaximumProtection = "MAXIMUM_PROTECTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TransportType {
    Sync = "SYNC",
    Async = "ASYNC",
    Fastsync = "FASTSYNC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataGuardAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataGuardAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
