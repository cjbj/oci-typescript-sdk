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

/**
 * Details for updating the cloud Autonomous VM cluster.
 */
export interface UpdateCloudAutonomousVmClusterDetails {
  /**
   * User defined description of the cloud Autonomous VM cluster.
   */
  "description"?: string;
  /**
   * The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.
   *
   */
  "displayName"?: string;
  "maintenanceWindowDetails"?: model.MaintenanceWindow;
  /**
   * The new value of autonomous data storage (in TBs) for the Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStorageSizeInTBs"?: number;
  /**
   * The new value of cpus per Autonomous VM cluster per node for the Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCountPerNode"?: number;
  /**
   * The new value of maximum number of ACDs for the Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalContainerDatabases"?: number;
  /**
    * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud.
* License Included allows you to subscribe to new Oracle Database software licenses and the Oracle Database service.
* Note that when provisioning an [Autonomous Database on dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the
* Autonomous Exadata Infrastructure level. When provisioning an [Autonomous Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to {@code BRING_YOUR_OWN_LICENSE}. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "licenseModel"?: UpdateCloudAutonomousVmClusterDetails.LicenseModel;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
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
}

export namespace UpdateCloudAutonomousVmClusterDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: UpdateCloudAutonomousVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindowDetails": obj.maintenanceWindowDetails
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindowDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCloudAutonomousVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindowDetails": obj.maintenanceWindowDetails
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindowDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
