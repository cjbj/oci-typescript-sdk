/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Patch history of this cluster.
 */
export interface PatchHistorySummary {
  /**
   * The version of the patch.
   */
  "version": string;
  /**
   * The status of this patch.
   */
  "lifecycleState": PatchHistorySummary.LifecycleState;
  /**
   * The time when the patch history was last updated.
   */
  "timeUpdated": Date;
  /**
   * The type of current patch history.
   * DP - Data Plane patch(This history type is internal available only)
   * ODH - Oracle Distribution of Hadoop patch
   * OS - Operating System patch
   *
   */
  "patchType": PatchHistorySummary.PatchType;
}

export namespace PatchHistorySummary {
  export enum LifecycleState {
    Installing = "INSTALLING",
    Installed = "INSTALLED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PatchType {
    Odh = "ODH",
    Os = "OS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PatchHistorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchHistorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
