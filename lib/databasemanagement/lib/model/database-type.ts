/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The type of Oracle Database installation:
 * - EXTERNAL_SIDB: Single instance external database.
 * - EXTERNAL_RAC: Oracle Real Application Clusters (Oracle RAC) external database.
 * - CLOUD_SIDB: Single instance database in Oracle Cloud.
 * - CLOUD_RAC: Oracle RAC database in Oracle Cloud.
 * - SHARED: Autonomous shared database in Oracle Cloud.
 * - DEDICATED: Autonomous dedicated database in Oracle Cloud.
 *
 **/
export enum DatabaseType {
  ExternalSidb = "EXTERNAL_SIDB",
  ExternalRac = "EXTERNAL_RAC",
  CloudSidb = "CLOUD_SIDB",
  CloudRac = "CLOUD_RAC",
  Shared = "SHARED",
  Dedicated = "DEDICATED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DatabaseType {
  export function getJsonObj(obj: DatabaseType): DatabaseType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DatabaseType): DatabaseType {
    return obj;
  }
}
