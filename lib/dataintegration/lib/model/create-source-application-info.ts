/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the application.
 */
export interface CreateSourceApplicationInfo {
  /**
   * The OCID of the workspace containing the application. This allows cross workspace deployment to publish an application from a different workspace into the current workspace specified in this operation.
   */
  "workspaceId"?: string;
  /**
   * The source application key to use when creating the application.
   */
  "applicationKey"?: string;
  /**
   * Parameter to specify the link between SOURCE and TARGET application after copying. CONNECTED    - Indicate that TARGET application is conneced to SOURCE and can be synced after copy. DISCONNECTED - Indicate that TARGET application is not conneced to SOURCE and can evolve independently.
   */
  "copyType"?: CreateSourceApplicationInfo.CopyType;
}

export namespace CreateSourceApplicationInfo {
  export enum CopyType {
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
  }

  export function getJsonObj(obj: CreateSourceApplicationInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSourceApplicationInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
