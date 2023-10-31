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
 * Summary information about metric extension resources
 */
export interface MetricExtensionSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of metric extension.
   */
  "id": string;
  /**
   * Metric Extension Resource name.
   */
  "name": string;
  /**
   * Metric Extension resource display name.
   */
  "displayName"?: string;
  /**
   * Description of the metric extension.
   */
  "description"?: string;
  /**
   * Resource type to which Metric Extension applies
   */
  "resourceType": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * The current state of the metric extension.
   */
  "status": model.MetricExtensionLifeCycleDetails;
  /**
   * The current lifecycle state of the metric extension
   */
  "lifecycleState"?: model.MetricExtensionLifeCycleStates;
  /**
   * Metric Extension creation time. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * Metric Extension updation time. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Type of possible collection methods.
   */
  "collectionMethod"?: model.MetricExtensionCollectionMethods;
  /**
   * Count of resources on which this metric extension is enabled. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "enabledOnResourcesCount"?: number;
  /**
   * The URI path that the user can do a GET on to access the metric extension metadata
   */
  "resourceUri"?: string;
}

export namespace MetricExtensionSummary {
  export function getJsonObj(obj: MetricExtensionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MetricExtensionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
