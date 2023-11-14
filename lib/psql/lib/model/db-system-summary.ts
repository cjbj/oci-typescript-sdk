/**
 * PGSQL Control Plane API
 * A description of the PGSQL Control Plane API
 * OpenAPI spec version: 20220915
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
 * Summary of the DbSystem.
 */
export interface DbSystemSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * DbSystem display name
   */
  "displayName": string;
  /**
   * Compartment identifier
   */
  "compartmentId": string;
  /**
   * The time the the DbSystem was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the DbSystem was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the DbSystem.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Type of the DbSystem.
   */
  "systemType": string;
  /**
   * Count of DbInstances in the DbSystem. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceCount": number;
  /**
   * Shape of dbInstance.
   */
  "shape"?: string;
  /**
   * The total number of OCPUs available to each DbInstance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceOcpuCount": number;
  /**
   * The total amount of memory available to each DbInstance, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceMemorySizeInGBs": number;
  /**
   * Version of DbSystem software.
   */
  "dbVersion": string;
  /**
   * Configuration identifier
   */
  "configId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DbSystemSummary {
  export function getJsonObj(obj: DbSystemSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
