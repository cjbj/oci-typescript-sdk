/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * Detailed information like statistics, metrics and status for a signal
 */
export interface PerSignalDetails {
  /**
   * The name of a signal.
   */
  "signalName": string;
  /**
   * The ratio of missing values in a signal filled/imputed by the IDP algorithm. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mviRatio"?: number;
  /**
   * A boolean value to indicate if a signal is quantized or not.
   */
  "isQuantized"?: boolean;
  /**
   * Accuracy metric for a signal. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fap"?: number;
  /**
   * Min value within a signal. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "min": number;
  /**
   * Max value within a signal. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "max": number;
  /**
   * Standard deviation of values within a signal. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "std": number;
  /**
   * Status of the signal:
   *  * ACCEPTED - the signal is used for training the model
   *  * DROPPED - the signal does not meet requirement, and is dropped before training the model.
   *  * OTHER - placeholder for other status
   *
   */
  "status": PerSignalDetails.Status;
  /**
   * detailed information for a signal.
   */
  "details"?: string;
}

export namespace PerSignalDetails {
  export enum Status {
    Accepted = "ACCEPTED",
    Dropped = "DROPPED",
    Other = "OTHER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PerSignalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PerSignalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
