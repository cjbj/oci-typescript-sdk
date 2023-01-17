/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * A particular functional endpoint for access to a DB System, and the properties that apply to it.
 *
 */
export interface DbSystemEndpoint {
  /**
   * The network address of the DB System.
   */
  "hostname"?: string;
  /**
   * The IP address the DB System is configured to listen on.
   */
  "ipAddress": string;
  /**
   * The port the MySQL instance listens on. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * The network port where to connect to use this endpoint using the X protocol. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "portX": number;
  /**
   * The access modes from the client that this endpoint supports.
   */
  "modes"?: Array<DbSystemEndpoint.Modes>;
  /**
   * The state of the endpoints, as far as it can seen from the DB System.
   * There may be some inconsistency with the actual state of the MySQL service.
   *
   */
  "status"?: DbSystemEndpoint.Status;
  /**
   * Additional information about the current endpoint status.
   */
  "statusDetails"?: string;
  /**
   * The type of endpoint that clients and connectors can connect to.
   */
  "resourceType"?: DbSystemEndpoint.ResourceType;
  /**
   * The OCID of the resource that this endpoint is attached to.
   */
  "resourceId"?: string;
}

export namespace DbSystemEndpoint {
  export enum Modes {
    Read = "READ",
    Write = "WRITE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ResourceType {
    Dbsystem = "DBSYSTEM",
    ReadReplica = "READ_REPLICA",
    LoadBalancer = "LOAD_BALANCER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbSystemEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
