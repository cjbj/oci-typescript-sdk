/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * IDM admin credentials
 */
export interface ResetFusionEnvironmentPasswordDetails {
  /**
   * Admin password
   */
  "password": string;
}

export namespace ResetFusionEnvironmentPasswordDetails {
  export function getJsonObj(obj: ResetFusionEnvironmentPasswordDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResetFusionEnvironmentPasswordDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
