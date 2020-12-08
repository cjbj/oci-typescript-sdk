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
 * Describes the required parameters for the creation of an Autonomous Container Database.
 *
 */
export interface CreateAutonomousContainerDatabaseDetails {
  /**
   * The display name for the Autonomous Container Database.
   */
  "displayName": string;
  /**
   * The `DB_UNIQUE_NAME` of the Oracle Database being backed up.
   */
  "dbUniqueName"?: string;
  /**
   * The service level agreement type of the Autonomous Container Database. The default is STANDARD. For an autonomous dataguard Autonomous Container Database, the specified Autonomous Exadata Infrastructure must be associated with a remote Autonomous Exadata Infrastructure.
   */
  "serviceLevelAgreementType"?: CreateAutonomousContainerDatabaseDetails.ServiceLevelAgreementType;
  /**
   * The OCID of the Autonomous Exadata Infrastructure.
   */
  "autonomousExadataInfrastructureId"?: string;
  /**
   * The OCID of the peer Autonomous Exadata Infrastructure for Autonomous Data Guard.
   */
  "peerAutonomousExadataInfrastructureId"?: string;
  /**
   * The display name for the peer Autonomous Container Database.
   */
  "peerAutonomousContainerDatabaseDisplayName"?: string;
  /**
   * The protection mode of this Autonomous Data Guard association. For more information, see
   * [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
   * in the Oracle Data Guard documentation.
   *
   */
  "protectionMode"?: CreateAutonomousContainerDatabaseDetails.ProtectionMode;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the peer Autonomous VM cluster for Autonomous Data Guard. Required to enable Data Guard.
   *
   */
  "peerAutonomousVmClusterId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment where the standby Autonomous Container Database
   * will be created.
   *
   */
  "peerAutonomousContainerDatabaseCompartmentId"?: string;
  "peerAutonomousContainerDatabaseBackupConfig"?: model.PeerAutonomousContainerDatabaseBackupConfig;
  /**
   * The OCID of the Autonomous VM Cluster.
   */
  "autonomousVmClusterId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the Autonomous Container Database.
   */
  "compartmentId"?: string;
  /**
   * Database Patch model preference.
   */
  "patchModel": CreateAutonomousContainerDatabaseDetails.PatchModel;
  "maintenanceWindowDetails"?: model.MaintenanceWindow;
  /**
   * The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database.
   * This value represents the number of days before scheduled maintenance of the primary database.
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
  "backupConfig"?: model.AutonomousContainerDatabaseBackupConfig;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation.
   *
   */
  "kmsKeyVersionId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm#concepts).
   */
  "vaultId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the key store.
   */
  "keyStoreId"?: string;
}

export namespace CreateAutonomousContainerDatabaseDetails {
  export enum ServiceLevelAgreementType {
    Standard = "STANDARD",
    AutonomousDataguard = "AUTONOMOUS_DATAGUARD"
  }

  export enum ProtectionMode {
    MaximumAvailability = "MAXIMUM_AVAILABILITY",
    MaximumPerformance = "MAXIMUM_PERFORMANCE"
  }

  export enum PatchModel {
    ReleaseUpdates = "RELEASE_UPDATES",
    ReleaseUpdateRevisions = "RELEASE_UPDATE_REVISIONS"
  }

  export function getJsonObj(obj: CreateAutonomousContainerDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "peerAutonomousContainerDatabaseBackupConfig": obj.peerAutonomousContainerDatabaseBackupConfig
          ? model.PeerAutonomousContainerDatabaseBackupConfig.getJsonObj(
              obj.peerAutonomousContainerDatabaseBackupConfig
            )
          : undefined,

        "maintenanceWindowDetails": obj.maintenanceWindowDetails
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindowDetails)
          : undefined,

        "backupConfig": obj.backupConfig
          ? model.AutonomousContainerDatabaseBackupConfig.getJsonObj(obj.backupConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
