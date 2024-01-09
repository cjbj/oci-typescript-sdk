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
 * Backup details to restore the database system.
 */
export interface RestoreDbSystemDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database system backup.
   */
  "backupId": string;
  /**
   * The desired AD for regions with three ADs. This parameter is optional.
   * If not set, the AD is chosen based on the database system's current AD.
   *
   */
  "ad"?: string;
}

export namespace RestoreDbSystemDetails {
  export function getJsonObj(obj: RestoreDbSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RestoreDbSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
