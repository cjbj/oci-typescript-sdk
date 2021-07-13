/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An OCI DNS resolver endpoint.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface ResolverEndpointSummary {
  /**
   * The name of the resolver endpoint. Must be unique, case-insensitive, within the resolver.
   *
   */
  "name": string;
  /**
   * An IP address from which forwarded queries may be sent. For VNIC endpoints, this IP address must be part
   * of the subnet and will be assigned by the system if unspecified when isForwarding is true.
   *
   */
  "forwardingAddress"?: string;
  /**
   * A Boolean flag indicating whether or not the resolver endpoint is for forwarding.
   *
   */
  "isForwarding": boolean;
  /**
   * A Boolean flag indicating whether or not the resolver endpoint is for listening.
   *
   */
  "isListening": boolean;
  /**
   * An IP address to listen to queries on. For VNIC endpoints this IP address must be part of the
   * subnet and will be assigned by the system if unspecified when isListening is true.
   *
   */
  "listeningAddress"?: string;
  /**
   * The OCID of the owning compartment. This will match the resolver that the resolver endpoint is under
   * and will be updated if the resolver's compartment is changed.
   *
   */
  "compartmentId": string;
  /**
   * The date and time the resource was created in \"YYYY-MM-ddThh:mm:ssZ\" format
   * with a Z offset, as defined by RFC 3339.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was last updated in \"YYYY-MM-ddThh:mm:ssZ\"
   * format with a Z offset, as defined by RFC 3339.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the resource.
   */
  "lifecycleState": ResolverEndpointSummary.LifecycleState;
  /**
   * The canonical absolute URL of the resource.
   */
  "self": string;

  "endpointType": string;
}

export namespace ResolverEndpointSummary {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResolverEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("endpointType" in obj && obj.endpointType) {
      switch (obj.endpointType) {
        case "VNIC":
          return model.ResolverVnicEndpointSummary.getJsonObj(
            <model.ResolverVnicEndpointSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.endpointType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResolverEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("endpointType" in obj && obj.endpointType) {
      switch (obj.endpointType) {
        case "VNIC":
          return model.ResolverVnicEndpointSummary.getDeserializedJsonObj(
            <model.ResolverVnicEndpointSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.endpointType);
      }
    }
    return jsonObj;
  }
}
