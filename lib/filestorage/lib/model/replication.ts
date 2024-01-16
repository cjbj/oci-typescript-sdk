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
 * Replications are the primary resource that governs the policy of cross-region replication between source
 * and target file systems. Replications are associated with a secondary resource called a {@link ReplicationTarget}
 * located in another availability domain in the same or different region.
 * The replication retrieves the delta of data between two snapshots of a source file system
 * and sends it to the associated {@code ReplicationTarget}, which applies it to the target
 * file system. For more information, see [File System Replication](https://docs.cloud.oracle.com/iaas/Content/File/Tasks/FSreplication.htm).
 *
 */
export interface Replication {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the replication.
   */
  "compartmentId": string;
  /**
   * The availability domain that contains the replication. May be unset as a blank or {@code NULL} value.
   * Example: {@code Uocm:PHX-AD-2}
   *
   */
  "availabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the replication.
   */
  "id": string;
  /**
   * The current lifecycle state of the replication.
   */
  "lifecycleState": Replication.LifecycleState;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My replication}
* 
    */
  "displayName": string;
  /**
    * The date and time the replication was created
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2021-01-04T20:01:29.100Z}
* 
    */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source file system.
   *
   */
  "sourceId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the target file system.
   *
   */
  "targetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the {@link ReplicationTarget}.
   *
   */
  "replicationTargetId": string;
  /**
   * Duration in minutes between replication snapshots. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "replicationInterval"?: number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last snapshot that has been replicated completely.
   * Empty if the copy of the initial snapshot is not complete.
   *
   */
  "lastSnapshotId"?: string;
  /**
   * The {@link #snapshotTime(SnapshotTimeRequest) snapshotTime} of the most recent recoverable replication snapshot
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   * Example: {@code 2021-04-04T20:01:29.100Z}
   *
   */
  "recoveryPointTime"?: Date;
  /**
   * The current state of the snapshot during replication operations.
   */
  "deltaStatus"?: Replication.DeltaStatus;
  /**
   * Additional information about the current 'lifecycleState'.
   */
  "lifecycleDetails"?: string;
  /**
   * Percentage progress of the current replication cycle.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "deltaProgress"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Replication {
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

  export function getJsonObj(obj: Replication): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Replication): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
