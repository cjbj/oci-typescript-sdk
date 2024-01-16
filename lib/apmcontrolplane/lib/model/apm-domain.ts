/**
 * Application Performance Monitoring Control Plane API
 * Use the Application Performance Monitoring Control Plane API to perform operations such as creating, updating,
deleting and listing APM domains and monitoring the progress of these operations using the work request APIs. For more information, see [Application Performance Monitoring](/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Details of an APM domain.
 */
export interface ApmDomain {
  /**
   * The endpoint where the APM agents upload their observations and metrics.
   */
  "dataUploadEndpoint"?: string;
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Display name of the APM domain, which can be updated.
   */
  "displayName": string;
  /**
   * Description of the APM domain.
   */
  "description"?: string;
  /**
   * The OCID of the compartment corresponding to the APM domain.
   */
  "compartmentId": string;
  /**
   * The current lifecycle state of the APM domain.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * Indicates if this is an Always Free resource.
   */
  "isFreeTier"?: boolean;
  /**
   * The time the APM domain was created, expressed in RFC 3339 timestamp format.
   */
  "timeCreated"?: Date;
  /**
   * The time the APM domain was updated, expressed in RFC 3339 timestamp format.
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ApmDomain {
  export function getJsonObj(obj: ApmDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApmDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
