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

export interface CreateDatabaseFromBackupDetails {
  /**
   * The backup [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "backupId": string;
  /**
   * The password to open the TDE wallet.
   */
  "backupTDEPassword"?: string;
  /**
   * A strong password for SYS, SYSTEM, PDB Admin and TDE Wallet. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numbers, and two special characters. The special characters must be _, \\#, or -.
   */
  "adminPassword": string;
  /**
   * The `DB_UNIQUE_NAME` of the Oracle Database being backed up.
   */
  "dbUniqueName"?: string;
  /**
   * The display name of the database to be created from the backup. It must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted.
   */
  "dbName"?: string;
  /**
   * Specifies a prefix for the `Oracle SID` of the database to be created.
   *
   */
  "sidPrefix"?: string;
  /**
   * The list of pluggable databases that needs to be restored into new database.
   */
  "pluggableDatabases"?: Array<string>;
}

export namespace CreateDatabaseFromBackupDetails {
  export function getJsonObj(obj: CreateDatabaseFromBackupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDatabaseFromBackupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
