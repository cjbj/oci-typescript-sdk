/**
 * Redis Service API
 * Use the Redis Service API to create and manage Redis clusters. A Redis cluster is a memory-based storage solution. For more information, see [OCI Caching Service with Redis](/iaas/Content/redis/home.htm).
 * OpenAPI spec version: 20220315
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
 * Summary of information about a Redis cluster. A Redis cluster is a memory-based storage solution. For more information, see [OCI Caching Service with Redis](https://docs.cloud.oracle.com/iaas/Content/redis/home.htm).
 *
 */
export interface RedisClusterSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm#Oracle) of the Redis cluster.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm#Oracle) of the compartment that contains the Redis cluster.
   */
  "compartmentId": string;
  /**
   * The current state of the Redis cluster.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, the message might provide actionable information for a resource in `FAILED` state.
   */
  "lifecycleDetails"?: string;
  /**
   * The number of nodes in the Redis cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount": number;
  /**
   * The amount of memory allocated to the Redis cluster's nodes, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeMemoryInGBs": number;
  /**
   * The fully qualified domain name (FQDN) of the API endpoint for the Redis cluster's primary node.
   */
  "primaryFqdn": string;
  /**
   * The private IP address of the API endpoint for the Redis cluster's primary node.
   */
  "primaryEndpointIpAddress": string;
  /**
   * The fully qualified domain name (FQDN) of the API endpoint for the Redis cluster's replica nodes.
   */
  "replicasFqdn": string;
  /**
   * The private IP address of the API endpoint for the Redis cluster's replica nodes.
   */
  "replicasEndpointIpAddress": string;
  /**
   * The Redis version that the cluster is running.
   */
  "softwareVersion": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm#Oracle) of the Redis cluster's subnet.
   */
  "subnetId": string;
  /**
   * The date and time the Redis cluster was created. An [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the Redis cluster was updated. An [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
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
}

export namespace RedisClusterSummary {
  export function getJsonObj(obj: RedisClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RedisClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
