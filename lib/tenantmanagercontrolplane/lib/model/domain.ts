/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * The domain model that is associated with a tenancy.
 */
export interface Domain {
  /**
   * The OCID of the domain.
   */
  "id": string;
  /**
   * The domain name.
   */
  "domainName": string;
  /**
   * The OCID of the tenancy that has started the registration process for this domain.
   */
  "ownerId": string;
  /**
   * Lifecycle state of the domain.
   */
  "lifecycleState": Domain.LifecycleState;
  /**
   * Status of the domain.
   */
  "status": Domain.Status;
  /**
   * The code that the owner of the domain will need to add as a TXT record to their domain.
   */
  "txtRecord": string;
  /**
   * Date-time when this domain was created. An RFC 3339-formatted date and time string.
   */
  "timeCreated"?: Date;
  /**
   * Date-time when this domain was last updated. An RFC 3339-formatted date and time string.
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

export namespace Domain {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Pending = "PENDING",
    Releasing = "RELEASING",
    Released = "RELEASED",
    Expiring = "EXPIRING",
    Revoking = "REVOKING",
    Revoked = "REVOKED",
    Active = "ACTIVE",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Domain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Domain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
