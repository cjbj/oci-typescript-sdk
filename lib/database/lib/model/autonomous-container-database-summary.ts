/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An Autonomous Container Database is a container database service that enables the customer to host one or more databases within the container database. A basic container database runs on a single Autonomous Exadata Infrastructure from an availability domain without the Extreme Availability features enabled.
 *
 */
export interface AutonomousContainerDatabaseSummary {
  /**
   * The OCID of the Autonomous Container Database.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-provided name for the Autonomous Container Database.
   */
  "displayName": string;
  /**
   * The `DB_UNIQUE_NAME` of the Oracle Database being backed up.
   */
  "dbUniqueName"?: string;
  /**
   * The service level agreement type of the container database. The default is STANDARD.
   */
  "serviceLevelAgreementType": AutonomousContainerDatabaseSummary.ServiceLevelAgreementType;
  /**
   * The OCID of the Autonomous Exadata Infrastructure.
   */
  "autonomousExadataInfrastructureId"?: string;
  /**
   * The OCID of the Autonomous VM Cluster.
   */
  "autonomousVmClusterId"?: string;
  /**
   * The infrastructure type this resource belongs to.
   */
  "infrastructureType"?: AutonomousContainerDatabaseSummary.InfrastructureType;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm#concepts).
   */
  "vaultId"?: string;
  /**
   * The current state of the Autonomous Container Database.
   */
  "lifecycleState": AutonomousContainerDatabaseSummary.LifecycleState;
  /**
   * Additional information about the current lifecycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the Autonomous Container Database was created.
   */
  "timeCreated"?: Date;
  /**
   * Database patch model preference.
   */
  "patchModel": AutonomousContainerDatabaseSummary.PatchModel;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last patch applied on the system.
   */
  "patchId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The scheduling detail for the quarterly maintenance window of standby Autonomous Container Database.
   * This value represents the number of days before the primary database maintenance schedule.
   *
   */
  "standbyMaintenanceBufferInDays"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The role of the Autonomous Data Guard-enabled Autonomous Container Database.
   */
  "role"?: AutonomousContainerDatabaseSummary.Role;
  /**
   * The availability domain of the Autonomous Container Database.
   */
  "availabilityDomain"?: string;
  /**
   * Oracle Database version of the Autonomous Container Database.
   */
  "dbVersion"?: string;
  "backupConfig"?: model.AutonomousContainerDatabaseBackupConfig;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the key store.
   */
  "keyStoreId"?: string;
  /**
   * The wallet name for Oracle Key Vault.
   */
  "keyStoreWalletName"?: string;
}

export namespace AutonomousContainerDatabaseSummary {
  export enum ServiceLevelAgreementType {
    Standard = "STANDARD",
    MissionCritical = "MISSION_CRITICAL",
    AutonomousDataguard = "AUTONOMOUS_DATAGUARD",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum InfrastructureType {
    Cloud = "CLOUD",
    CloudAtCustomer = "CLOUD_AT_CUSTOMER",
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
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Restoring = "RESTORING",
    RestoreFailed = "RESTORE_FAILED",
    Restarting = "RESTARTING",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    RoleChangeInProgress = "ROLE_CHANGE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PatchModel {
    ReleaseUpdates = "RELEASE_UPDATES",
    ReleaseUpdateRevisions = "RELEASE_UPDATE_REVISIONS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

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

  export function getJsonObj(obj: AutonomousContainerDatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined,

        "backupConfig": obj.backupConfig
          ? model.AutonomousContainerDatabaseBackupConfig.getJsonObj(obj.backupConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
