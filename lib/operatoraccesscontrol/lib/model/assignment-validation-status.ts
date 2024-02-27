/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
 * Summary of assignment Validation status.
 */
export interface AssignmentValidationStatus {
  /**
   * Id of the unique execution.
   */
  "executionId": string;
  /**
   * Id of the user who triggered the Assignment Validation.
   */
  "userId"?: string;
  /**
   * Id of the accessRequest which got created as part of Assignment Validation.
   */
  "accessRequestId"?: string;
  /**
   * any errorMessage during validation.
   */
  "errorMessage"?: string;
  /**
   * Status of the execution Success or Failure.
   */
  "executionStatus": model.AssignmentValidationLifecycleStates;
  /**
   * List of execution detail for the validate assignment.
   */
  "statusDetail"?: Array<model.StatusDetail>;
  /**
   * Time when the respective action happened in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format. Example: '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeOfValidationStart"?: Date;
  /**
   * Time when the respective action happened in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format. Example: '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeOfValidationFinish"?: Date;
}

export namespace AssignmentValidationStatus {
  export function getJsonObj(obj: AssignmentValidationStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "statusDetail": obj.statusDetail
          ? obj.statusDetail.map(item => {
              return model.StatusDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssignmentValidationStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "statusDetail": obj.statusDetail
          ? obj.statusDetail.map(item => {
              return model.StatusDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
