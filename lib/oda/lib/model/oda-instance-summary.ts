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
 * Summary of the Digital Assistant instance.
 */
export interface OdaInstanceSummary {
  /**
   * Unique identifier of the Digital Assistant instance.
   */
  "id": string;
  /**
   * User-defined name for the Digital Assistant instance. You can change this value.
   */
  "displayName"?: string;
  /**
   * Description of the Digital Assistant instance.
   */
  "description"?: string;
  /**
   * Identifier of the compartment that the instance belongs to.
   */
  "compartmentId": string;
  /**
   * Shape or size of the instance.
   */
  "shapeName"?: OdaInstanceSummary.ShapeName;
  /**
   * When the Digital Assistant instance was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated"?: Date;
  /**
   * When the Digital Assistant instance was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the instance.
   */
  "lifecycleState": OdaInstanceSummary.LifecycleState;
  /**
   * The current sub-state of the Digital Assistant instance.
   */
  "lifecycleSubState"?: OdaInstanceSummary.LifecycleSubState;
  /**
   * A message describing the current state in more detail. For example, actionable
   * information about an instance that's in the `FAILED` state.
   *
   */
  "stateMessage"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Should this Digital Assistant instance use role-based authorization via an identity domain (true) or use the default policy-based authorization via IAM policies (false)
   */
  "isRoleBasedAccess"?: boolean;
  /**
   * If isRoleBasedAccess is set to true, this property specifies the identity domain that is to be used to implement this type of authorzation. Digital Assistant will create an Identity Application instance and Application Roles within this identity domain. The caller may then perform and user roll mappings they like to grant access to users within the identity domain.
   */
  "identityDomain"?: string;
  /**
   * A list of package names imported into this instance (if any).
   */
  "importedPackageNames"?: Array<string>;
  /**
   * A list of attachment types for this instance (if any).
   */
  "attachmentTypes"?: Array<string>;
}

export namespace OdaInstanceSummary {
  export enum ShapeName {
    Development = "DEVELOPMENT",
    Production = "PRODUCTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleSubState {
    Creating = "CREATING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    ChangingCompartment = "CHANGING_COMPARTMENT",
    ActivatingCustomerEncryptionKey = "ACTIVATING_CUSTOMER_ENCRYPTION_KEY",
    UpdatingCustomerEncryptionKey = "UPDATING_CUSTOMER_ENCRYPTION_KEY",
    DeactivatingCustomerEncryptionKey = "DEACTIVATING_CUSTOMER_ENCRYPTION_KEY",
    Deleting = "DELETING",
    DeletePending = "DELETE_PENDING",
    Recovering = "RECOVERING",
    Updating = "UPDATING",
    Purging = "PURGING",
    Queued = "QUEUED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OdaInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OdaInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
