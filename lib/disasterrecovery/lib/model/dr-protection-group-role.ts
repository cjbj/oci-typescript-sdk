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
 * Enumeration of different roles of a DR Protection Group.
 * - PRIMARY - The DR Protection Group has a primary role in a DR confguration.
 * - STANDBY - The DR Protection Group has a standby role in a DR confguration.
 * - UNCONFIGURED - The DR Protection Group is not part of a DR confguration
 *
 **/
export enum DrProtectionGroupRole {
  Primary = "PRIMARY",
  Standby = "STANDBY",
  Unconfigured = "UNCONFIGURED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrProtectionGroupRole {
  export function getJsonObj(obj: DrProtectionGroupRole): DrProtectionGroupRole {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DrProtectionGroupRole): DrProtectionGroupRole {
    return obj;
  }
}
