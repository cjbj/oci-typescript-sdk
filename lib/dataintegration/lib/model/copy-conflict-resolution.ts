/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Copy Object Conflict resolution.
 */
export interface CopyConflictResolution {
  /**
   * In case of DUPLICATE mode, this prefix will be used to disambiguate the object.
   */
  "duplicatePrefix"?: string;
  /**
   * In case of DUPLICATE mode, this suffix will be used to disambiguate the object.
   */
  "duplicateSuffix"?: string;
  /**
   * Copy Object Conflict Resolution Type (RETAIN/DUPLICATE/REPLACE).
   */
  "requestType": CopyConflictResolution.RequestType;
}

export namespace CopyConflictResolution {
  export enum RequestType {
    Retain = "RETAIN",
    Duplicate = "DUPLICATE",
    Replace = "REPLACE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CopyConflictResolution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CopyConflictResolution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
