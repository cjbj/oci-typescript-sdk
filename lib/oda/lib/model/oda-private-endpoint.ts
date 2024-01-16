/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * A private endpoint allows Digital Assistant Instance to access resources in a customer's virtual cloud network (VCN).
 *
 */
export interface OdaPrivateEndpoint {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) that was assigned when the ODA private endpoint was created.
   */
  "id": string;
  /**
   * User-defined name for the ODA private endpoint. Avoid entering confidential information.
   * You can change this value.
   *
   */
  "displayName": string;
  /**
   * Description of the ODA private endpoint.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that the ODA private endpoint belongs to.
   */
  "compartmentId": string;
  /**
   * When the resource was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated"?: Date;
  /**
   * When the resource was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the ODA private endpoint.
   */
  "lifecycleState"?: OdaPrivateEndpoint.LifecycleState;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet that the private endpoint belongs to.
   */
  "subnetId": string;
  /**
   * List of [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of [network security groups](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/networksecuritygroups.htm)
   */
  "nsgIds"?: Array<string>;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OdaPrivateEndpoint {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OdaPrivateEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OdaPrivateEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
