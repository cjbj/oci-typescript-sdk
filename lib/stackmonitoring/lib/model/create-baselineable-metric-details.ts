/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Summary for the baseline-able metric
 */
export interface CreateBaselineableMetricDetails {
  /**
   * OCID of the compartment
   */
  "compartmentId": string;
  /**
   * name of the metric
   */
  "name": string;
  /**
   * metric column name
   */
  "column": string;
  /**
   * namespace of the metric
   */
  "namespace": string;
  /**
   * Resource group of the metric
   */
  "resourceGroup": string;
}

export namespace CreateBaselineableMetricDetails {
  export function getJsonObj(obj: CreateBaselineableMetricDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateBaselineableMetricDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
