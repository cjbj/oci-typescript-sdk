/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/iaas/Content/managed-access/home.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
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
 * An access request to a customer's resource.
 * An access request is a subsidiary resource of the Lockbox entity.
 *
 */
export interface AccessRequest {
  /**
   * The unique identifier (OCID) of the access request, which can't be changed after creation.
   */
  "id": string;
  /**
   * The unique identifier (OCID) of the lockbox box that the access request is associated with, which can't be changed after creation.
   */
  "lockboxId": string;
  /**
   * The name of the access request.
   */
  "displayName": string;
  /**
   * The rationale for requesting the access request and any other related details..
   */
  "description": string;
  /**
   * The unique identifier of the requestor.
   */
  "requestorId": string;
  /**
   * Possible access request lifecycle states.
   */
  "lifecycleState": AccessRequest.LifecycleState;
  /**
   * Details of access request lifecycle state.
   */
  "lifecycleStateDetails": AccessRequest.LifecycleStateDetails;
  /**
   * The maximum amount of time operator has access to associated resources.
   */
  "accessDuration": string;
  /**
   * The context object containing the access request specific details.
   */
  "context"?: { [key: string]: string };
  /**
   * The actions taken by different persona on the access request, e.g. approve/deny/revoke
   */
  "activityLogs": Array<model.ActivityLog>;
  /**
   * The time the access request was created. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The time the access request was last updated. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeUpdated": Date;
  /**
   * The time the access request expired. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeExpired": Date;
  /**
   * The time the access request was last reminded. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeReminded": Date;
  /**
   * The count of times the access request was reminded.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reminderCount": number;
  /**
   * The location of the requestor. Format with be two letters indicatiog operator's country code defined by https://jira-sd.mc1.oracleiaas.com/browse/SSD-17880
   * Example: `US`
   *
   */
  "requestorLocation": string;
}

export namespace AccessRequest {
  export enum LifecycleState {
    InProgress = "IN_PROGRESS",
    Waiting = "WAITING",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleStateDetails {
    Processing = "PROCESSING",
    WaitingForApprovals = "WAITING_FOR_APPROVALS",
    Approved = "APPROVED",
    AutoApproved = "AUTO_APPROVED",
    CancellingAccess = "CANCELLING_ACCESS",
    Expired = "EXPIRED",
    Revoked = "REVOKED",
    Denied = "DENIED",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AccessRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "activityLogs": obj.activityLogs
          ? obj.activityLogs.map(item => {
              return model.ActivityLog.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccessRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "activityLogs": obj.activityLogs
          ? obj.activityLogs.map(item => {
              return model.ActivityLog.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
