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
 * Autonomous VM usage statistics.
 */
export interface AutonomousVmResourceUsage {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous VM Cluster.
   */
  "id"?: string;
  /**
   * The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The number of CPU cores alloted to the Autonomous Container Databases in an Cloud Autonomous VM cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedCpus"?: number;
  /**
   * The number of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * CPU cores that continue to be included in the count of OCPUs available to the
   * Autonomous Container Database even after one of its Autonomous Database is
   * terminated or scaled down. You can release them to the available OCPUs at its
   * parent AVMC level by restarting the Autonomous Container Database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * The number of CPUs provisioned in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedCpus"?: number;
  /**
   * The number of CPUs reserved in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCpus"?: number;
  /**
   * Associated Autonomous Container Database Usages.
   */
  "autonomousContainerDatabaseUsage"?: Array<model.AvmAcdResourceStats>;
}

export namespace AutonomousVmResourceUsage {
  export function getJsonObj(obj: AutonomousVmResourceUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "autonomousContainerDatabaseUsage": obj.autonomousContainerDatabaseUsage
          ? obj.autonomousContainerDatabaseUsage.map(item => {
              return model.AvmAcdResourceStats.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousVmResourceUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "autonomousContainerDatabaseUsage": obj.autonomousContainerDatabaseUsage
          ? obj.autonomousContainerDatabaseUsage.map(item => {
              return model.AvmAcdResourceStats.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
