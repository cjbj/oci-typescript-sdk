/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Summary information for a replication.
 *
 */
export interface ReplicationSummary {
  /**
   * The availability domain the replication is in. The replication must be in the same availability domain as the source file system.
   * Example: `Uocm:PHX-AD-1`
   *
   */
  "availabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the replication.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the replication.
   */
  "id": string;
  /**
   * The current state of this replication.
   * This resource can be in a `FAILED` state if replication target is deleted instead of the replication resource.
   *
   */
  "lifecycleState": ReplicationSummary.LifecycleState;
  /**
   * A user-friendly name. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   * Example: `My replication`
   *
   */
  "displayName": string;
  /**
   * The date and time the replication was created
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   * Example: `2020-02-04T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * Duration in minutes between replication snapshots. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "replicationInterval"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Additional information about the current `lifecycleState`.
   */
  "lifecycleDetails"?: string;
  /**
   * The `snapshotTime` of the most recent recoverable replication snapshot
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   * Example: `2021-04-04T20:01:29.100Z`
   *
   */
  "recoveryPointTime"?: Date;
}

export namespace ReplicationSummary {
  export enum LifecycleState {
    Creating = "CREATING",
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

  export function getJsonObj(obj: ReplicationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
