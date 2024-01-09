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
 * Details of data masking activity.
 */
export interface DataMaskingActivity {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Fusion Environment Identifier.
   */
  "fusionEnvironmentId": string;
  /**
   * The current state of the DataMaskingActivity.
   */
  "lifecycleState": DataMaskingActivity.LifecycleState;
  /**
   * The time the data masking activity started. An RFC3339 formatted datetime string.
   */
  "timeMaskingStart": Date;
  /**
   * The time the data masking activity ended. An RFC3339 formatted datetime string.
   */
  "timeMaskingFinish": Date;
}

export namespace DataMaskingActivity {
  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataMaskingActivity): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataMaskingActivity): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
