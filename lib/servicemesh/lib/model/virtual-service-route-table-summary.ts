/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Summary of the VirtualServiceRouteTable.
 */
export interface VirtualServiceRouteTableSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The OCID of the virtual service in which this virtual service route table is created.
   */
  "virtualServiceId": string;
  /**
    * A user-friendly name. The name must be unique within the same virtual service and cannot be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `My unique resource name`
* 
    */
  "name": string;
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `This is my new resource`
* 
    */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * The priority of the route table. Lower value means higher priority. The routes are declared based on the priority. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority"?: number;
  /**
   * The time when this resource was created in an RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when this resource was updated in an RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the virtual service.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed state.
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
}

export namespace VirtualServiceRouteTableSummary {
  export function getJsonObj(obj: VirtualServiceRouteTableSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VirtualServiceRouteTableSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
