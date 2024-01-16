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
 * Describes the input parameters to launch a new Autonomous Exadata Infrastructure.
 *
 */
export interface LaunchAutonomousExadataInfrastructureDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment the Autonomous Exadata Infrastructure belongs in.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the Autonomous Exadata Infrastructure. It does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The availability domain where the Autonomous Exadata Infrastructure is located.
   */
  "availabilityDomain": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the Autonomous Exadata Infrastructure is associated with.
* <p>
**Subnet Restrictions:**
* - For Autonomous Exadata Infrastructures, do not use a subnet that overlaps with 192.168.128.0/20
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId": string;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The shape of the Autonomous Exadata Infrastructure. The shape determines resources allocated to the Autonomous Exadata Infrastructure (CPU cores, memory and storage). To get a list of shapes, use the ListDbSystemShapes operation.
   */
  "shape": string;
  /**
   * A domain name used for the Autonomous Exadata Infrastructure. If the Oracle-provided Internet and VCN
   * Resolver is enabled for the specified subnet, the domain name for the subnet is used
   * (don't provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
   *
   */
  "domain"?: string;
  /**
   * The Oracle license model that applies to all the databases in the Autonomous Exadata Infrastructure. The default is BRING_YOUR_OWN_LICENSE.
   *
   */
  "licenseModel"?: LaunchAutonomousExadataInfrastructureDetails.LicenseModel;
  "maintenanceWindowDetails"?: model.MaintenanceWindow;
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

export namespace LaunchAutonomousExadataInfrastructureDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: LaunchAutonomousExadataInfrastructureDetails): object {
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
  export function getDeserializedJsonObj(
    obj: LaunchAutonomousExadataInfrastructureDetails
  ): object {
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
