/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
 * 
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
 * Enumeration of different type of members in a DR Protection Group.
 * - COMPUTE_INSTANCE - An Oracle Cloud compute instance.
 * - VOLUME_GROUP - An Oracle Cloud volume group.
 * - DATABASE - An Oracle Database Cloud Service database.
 * - AUTONOMOUS_DATABASE - An Oracle Autonomous Database.
 *
 **/
export enum DrProtectionGroupMemberType {
  ComputeInstance = "COMPUTE_INSTANCE",
  VolumeGroup = "VOLUME_GROUP",
  Database = "DATABASE",
  AutonomousDatabase = "AUTONOMOUS_DATABASE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrProtectionGroupMemberType {
  export function getJsonObj(obj: DrProtectionGroupMemberType): DrProtectionGroupMemberType {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: DrProtectionGroupMemberType
  ): DrProtectionGroupMemberType {
    return obj;
  }
}
