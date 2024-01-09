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
 * The external DB system component type.
 **/
export enum ExternalDbSystemComponentType {
  Asm = "ASM",
  AsmInstance = "ASM_INSTANCE",
  Cluster = "CLUSTER",
  ClusterInstance = "CLUSTER_INSTANCE",
  Database = "DATABASE",
  DatabaseInstance = "DATABASE_INSTANCE",
  DatabaseHome = "DATABASE_HOME",
  DatabaseNode = "DATABASE_NODE",
  Dbsystem = "DBSYSTEM",
  Listener = "LISTENER",
  PluggableDatabase = "PLUGGABLE_DATABASE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ExternalDbSystemComponentType {
  export function getJsonObj(obj: ExternalDbSystemComponentType): ExternalDbSystemComponentType {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: ExternalDbSystemComponentType
  ): ExternalDbSystemComponentType {
    return obj;
  }
}
