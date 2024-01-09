/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * The shape of the DB System. The shape determines resources to allocate
 * to the DB System - CPU cores and memory for VM shapes; CPU cores, memory
 * and storage for non-VM (or bare metal) shapes.  For a description of
 * shapes, see [DB System Shape Options](https://docs.cloud.oracle.com/mysql-database/doc/shapes.htm).
 *
 */
export interface ShapeSummary {
  /**
   * The name of the shape used for the DB System.
   */
  "name": string;
  /**
   * The number of CPU Cores the Instance provides. These are \"OCPU\"s. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount": number;
  /**
   * The amount of RAM the Instance provides. This is an IEC base-2 number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs": number;
  /**
   * What service features the shape is supported for.
   *
   */
  "isSupportedFor"?: Array<ShapeSummary.IsSupportedFor>;
}

export namespace ShapeSummary {
  export enum IsSupportedFor {
    Dbsystem = "DBSYSTEM",
    Heatwavecluster = "HEATWAVECLUSTER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
