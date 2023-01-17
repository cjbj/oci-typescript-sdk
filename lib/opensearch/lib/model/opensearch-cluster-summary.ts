/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * The summary of information about an OpenSearch cluster.
 */
export interface OpensearchClusterSummary {
  /**
   * The OCID of the cluster.
   */
  "id": string;
  /**
   * The name of the cluster. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID for the compartment where the cluster is located.
   */
  "compartmentId": string;
  /**
   * The date and time the cluster was created. Format defined
   * by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the cluster was updated. Format defined
   * by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated"?: Date;
  /**
   * Additional information about the current lifecycle state of the cluster.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The software version the cluster is running.
   */
  "softwareVersion": string;
  /**
   * The total amount of storage in GB, for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalStorageGB": number;
  /**
   * The current state of the cluster.
   */
  "lifecycleState"?: string;
  /**
   * The availability domains to distribute the cluser nodes across.
   */
  "availabilityDomains"?: Array<string>;
}

export namespace OpensearchClusterSummary {
  export function getJsonObj(obj: OpensearchClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpensearchClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
