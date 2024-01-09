/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * A Summary of the work request.
 */
export interface WorkRequestSummary {
  /**
   * The type of work request.
   */
  "operationType": model.WorkRequestOperationType;
  /**
   * The status of the current work request.
   */
  "status": model.WorkRequestStatus;
  /**
   * The ID of the work request.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the work request. Work requests should be scoped to the same compartment as the resource the work request affects.
   * If the work request affects multiple resources that are not in the same compartment then the system picks the primary resource whose compartment should be used.
   *
   */
  "compartmentId": string;
  /**
   * The completed percentage of the operation tracked by the work request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was accepted, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   * The precision for this time object is in milliseconds.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from ACCEPTED to IN_PROGRESS, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339). The precision for this time object is in milliseconds.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either FAILED or SUCCEEDED, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   * The precision for this time object is in milliseconds.
   *
   */
  "timeFinished"?: Date;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
}

export namespace WorkRequestSummary {
  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
