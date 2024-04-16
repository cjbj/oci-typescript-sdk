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

export interface AutonomousContainerDatabase {
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
   * **Deprecated.** The {@code DB_UNIQUE_NAME} value is set by Oracle Cloud Infrastructure.  Do not specify a value for this parameter. Specifying a value for this field will cause Terraform operations to fail.
   *
   */
  "dbUniqueName"?: string;
  /**
   * The Database name for the Autonomous Container Database. The name must be unique within the Cloud Autonomous VM Cluster, starting with an alphabetic character, followed by 1 to 7 alphanumeric characters.
   */
  "dbName"?: string;
  /**
   * The service level agreement type of the container database. The default is STANDARD.
   */
  "serviceLevelAgreementType": AutonomousContainerDatabase.ServiceLevelAgreementType;
  /**
   * **No longer used.** For Autonomous Database on dedicated Exadata infrastructure, the container database is created within a specified {@code cloudAutonomousVmCluster}.
   *
   */
  "autonomousExadataInfrastructureId"?: string;
  /**
   * The OCID of the Autonomous VM Cluster.
   */
  "autonomousVmClusterId"?: string;
  /**
   * The infrastructure type this resource belongs to.
   */
  "infrastructureType"?: AutonomousContainerDatabase.InfrastructureType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Autonomous Exadata VM Cluster.
   */
  "cloudAutonomousVmClusterId"?: string;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and {@code secretId} are required for Customer Managed Keys.
   */
  "vaultId"?: string;
  /**
   * The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous Database Serverless does not use key versions, hence is not applicable for Autonomous Database Serverless instances.
   *
   */
  "kmsKeyVersionId"?: string;
  /**
   * Key History Entry.
   */
  "keyHistoryEntry"?: Array<model.AutonomousDatabaseKeyHistoryEntry>;
  /**
   * The current state of the Autonomous Container Database.
   */
  "lifecycleState": AutonomousContainerDatabase.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the Autonomous Container Database was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the Autonomous Container Database will be reverted to Standby from Snapshot Standby.
   */
  "timeSnapshotStandbyRevert"?: Date;
  /**
   * Database patch model preference.
   */
  "patchModel": AutonomousContainerDatabase.PatchModel;
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
   * The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database.
   * This value represents the number of days before scheduled maintenance of the primary database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "standbyMaintenanceBufferInDays"?: number;
  /**
   * The next maintenance version preference.
   *
   */
  "versionPreference"?: AutonomousContainerDatabase.VersionPreference;
  /**
   * Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.
   */
  "isDstFileUpdateEnabled"?: boolean;
  /**
   * DST Time-zone File version of the Autonomous Container Database.
   */
  "dstFileVersion"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
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
   * The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled.
   *
   */
  "role"?: AutonomousContainerDatabase.Role;
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
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the key store of Oracle Vault.
   */
  "keyStoreId"?: string;
  /**
   * The wallet name for Oracle Key Vault.
   */
  "keyStoreWalletName"?: string;
  /**
   * The amount of memory (in GBs) enabled per ECPU or OCPU in the Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryPerOracleComputeUnitInGBs"?: number;
  /**
   * Sum of CPUs available on the Autonomous VM Cluster + Sum of reclaimable CPUs available in the Autonomous Container Database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * The number of CPUs allocated to the Autonomous VM cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCpus"?: number;
  /**
   * CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * An array of CPU values that can be used to successfully provision a single Autonomous Database.
   *
   */
  "provisionableCpus"?: Array<number>;
  /**
   * List of One-Off patches that has been successfully applied to Autonomous Container Database
   */
  "listOneOffPatches"?: Array<string>;
  /**
   * The compute model of the Autonomous Container Database. For Autonomous Database on Dedicated Exadata Infrastructure, the CPU type (ECPUs or OCPUs) is determined by the parent Autonomous Exadata VM Cluster's compute model. ECPU compute model is the recommended model and OCPU compute model is legacy. See [Compute Models in Autonomous Database on Dedicated Exadata Infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.
   *
   */
  "computeModel"?: AutonomousContainerDatabase.ComputeModel;
  /**
   * The number of CPUs provisioned in an Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedCpus"?: number;
  /**
   * The number of CPUs reserved in an Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCpus"?: number;
  /**
   * The largest Autonomous Database (CPU) that can be created in a new Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "largestProvisionableAutonomousDatabaseInCpus"?: number;
  /**
   * The timestamp of last successful backup. Here NULL value represents either there are no successful backups or backups are not configured for this Autonomous Container Database.
   */
  "timeOfLastBackup"?: Date;
  /**
   * The value above which an Autonomous Database will be split across multiple nodes. This value defaults to 16 when the \"CPU per VM\" value on the Autonomous VM Cluster is greater than 16. Otherwise, it defaults to the \"CPU per VM\" value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbSplitThreshold"?: number;
  /**
   * The percentage of CPUs to reserve for a single node Autonomous Database, in increments of 25. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vmFailoverReservation"?: number;
  /**
   * This option determines whether to open an Autonomous Database across the maximum number of nodes or the least number of nodes. The default will be for the minimum number of VMs.
   */
  "distributionAffinity"?: AutonomousContainerDatabase.DistributionAffinity;
  /**
   * Enabling SHARED server architecture enables a database server to allow many client processes to share very few server processes, thereby increasing the number of supported users.
   */
  "netServicesArchitecture"?: AutonomousContainerDatabase.NetServicesArchitecture;
}

export namespace AutonomousContainerDatabase {
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
    EnablingAutonomousDataGuard = "ENABLING_AUTONOMOUS_DATA_GUARD",
    Unavailable = "UNAVAILABLE",
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

  export enum VersionPreference {
    NextReleaseUpdate = "NEXT_RELEASE_UPDATE",
    LatestReleaseUpdate = "LATEST_RELEASE_UPDATE",
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
    BackupCopy = "BACKUP_COPY",
    SnapshotStandby = "SNAPSHOT_STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ComputeModel {
    Ecpu = "ECPU",
    Ocpu = "OCPU",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DistributionAffinity {
    MinimumDistribution = "MINIMUM_DISTRIBUTION",
    MaximumDistribution = "MAXIMUM_DISTRIBUTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum NetServicesArchitecture {
    Dedicated = "DEDICATED",
    Shared = "SHARED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousContainerDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyHistoryEntry": obj.keyHistoryEntry
          ? obj.keyHistoryEntry.map(item => {
              return model.AutonomousDatabaseKeyHistoryEntry.getJsonObj(item);
            })
          : undefined,

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
  export function getDeserializedJsonObj(obj: AutonomousContainerDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyHistoryEntry": obj.keyHistoryEntry
          ? obj.keyHistoryEntry.map(item => {
              return model.AutonomousDatabaseKeyHistoryEntry.getDeserializedJsonObj(item);
            })
          : undefined,

        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined,

        "backupConfig": obj.backupConfig
          ? model.AutonomousContainerDatabaseBackupConfig.getDeserializedJsonObj(obj.backupConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
