/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Connection strings to connect to an Oracle Pluggable Database.
 *
 */
export interface PluggableDatabaseConnectionStrings {
  /**
   * A host name-based PDB connection string.
   */
  "pdbDefault"?: string;
  /**
   * An IP-based PDB connection string.
   */
  "pdbIpDefault"?: string;
  /**
   * All connection strings to use to connect to the pluggable database.
   */
  "allConnectionStrings"?: { [key: string]: string };
}

export namespace PluggableDatabaseConnectionStrings {
  export function getJsonObj(obj: PluggableDatabaseConnectionStrings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PluggableDatabaseConnectionStrings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
