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
 * Replication targets are associated with a primary resource called a {@link Replication}
 * located in another availability domain in the same or different region.
 * The replication retrieves the delta of data between two snapshots of a source file system
 * and sends it to the associated `ReplicationTarget`,  which applies it to the target
 * file system.
 * All operations (except `DELETE`) must be done using the associated replication resource.
 * Deleting a `ReplicationTarget` allows the target file system to be exported.
 * Deleting a `ReplicationTarget` does not delete the associated `Replication` resource, but places it in a `FAILED` state.
 * For more information, see [File System Replication](https://docs.cloud.oracle.com/iaas/Content/File/Tasks/FSreplication.htm).
 *
 */
export interface ReplicationTarget {
  /**
    * The availability domain the replication resource is in. May be unset
* as a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the replication.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the replication.
   */
  "id": string;
  /**
   * The current state of this replication.
   */
  "lifecycleState": ReplicationTarget.LifecycleState;
  /**
   * A user-friendly name. This name is same as the replication display name for the associated resource.
   * Example: `My Replication`
   *
   */
  "displayName": string;
  /**
   * The date and time the replication target was created in target region.
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   * Example: `2021-01-04T20:01:29.100Z`
   *
   */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of source filesystem.
   */
  "sourceId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of target filesystem.
   */
  "targetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of replication.
   */
  "replicationId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last snapshot snapshot which was completely applied to the target file system.
   * Empty while the initial snapshot is being applied.
   *
   */
  "lastSnapshotId"?: string;
  /**
   * The snapshotTime of the most recent recoverable replication snapshot
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   * Example: `2021-04-04T20:01:29.100Z`
   *
   */
  "recoveryPointTime"?: Date;
  /**
   * The current state of the snapshot during replication operations.
   */
  "deltaStatus"?: ReplicationTarget.DeltaStatus;
  /**
   * Percentage progress of the current replication cycle.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaProgress"?: number;
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
}

export namespace ReplicationTarget {
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

  export enum DeltaStatus {
    Idle = "IDLE",
    Capturing = "CAPTURING",
    Applying = "APPLYING",
    ServiceError = "SERVICE_ERROR",
    UserError = "USER_ERROR",
    Failed = "FAILED",
    Transferring = "TRANSFERRING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ReplicationTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicationTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
