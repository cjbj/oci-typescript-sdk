/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
 * The asynchronous API request does not take effect immediately. This request spawns an asynchronous
 * workflow to fulfill the request. WorkRequest objects provide visibility for in-progress workflows.
 *
 */
export interface WorkRequest {
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * An enum-like description of the type of work the work request is doing.
   */
  "operationType": WorkRequest.OperationType;
  /**
   * The OCID of the compartment that contains the work request.
   */
  "compartmentId"?: string;
  /**
   * The current status of the work request.
   */
  "status": WorkRequest.Status;
  /**
   * The resources this work request affects.
   *
   */
  "resources"?: Array<model.WorkRequestResource>;
  /**
   * The errors for work request.
   *
   */
  "errors"?: Array<model.WorkRequestError>;
  /**
   * The logs for work request.
   *
   */
  "logs"?: Array<model.WorkRequestLogEntry>;
  /**
   * Date and time the work was accepted, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeAccepted"?: Date;
  /**
   * Date and time the work started, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeStarted"?: Date;
  /**
   * Date and time the work completed, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeFinished"?: Date;
  /**
   * How much progress the operation has made.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
}

export namespace WorkRequest {
  export enum OperationType {
    DeleteCompartment = "DELETE_COMPARTMENT",
    DeleteTagDefinition = "DELETE_TAG_DEFINITION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined,
        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.WorkRequestError.getJsonObj(item);
            })
          : undefined,
        "logs": obj.logs
          ? obj.logs.map(item => {
              return model.WorkRequestLogEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined,
        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.WorkRequestError.getDeserializedJsonObj(item);
            })
          : undefined,
        "logs": obj.logs
          ? obj.logs.map(item => {
              return model.WorkRequestLogEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
