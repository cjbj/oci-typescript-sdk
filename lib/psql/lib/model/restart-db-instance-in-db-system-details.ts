/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * Database instance node restart parameters.
 */
export interface RestartDbInstanceInDbSystemDetails {
  /**
   * A unique identifier for the database instance, or node.
   */
  "dbInstanceId": string;
  /**
   * The restart type for the database instance.
   */
  "restartType": RestartDbInstanceInDbSystemDetails.RestartType;
}

export namespace RestartDbInstanceInDbSystemDetails {
  export enum RestartType {
    Normal = "NORMAL",
    NodeReboot = "NODE_REBOOT"
  }

  export function getJsonObj(obj: RestartDbInstanceInDbSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RestartDbInstanceInDbSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
