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
 * details of Approver Detail.
 */
export interface ApproverDetail {
  /**
   * The userId of the approver.
   */
  "approverId"?: string;
  /**
   * The action done by the approver.
   */
  "approvalAction"?: string;
  /**
   * Comment specified by the approver of the request.
   */
  "approvalComment"?: string;
  /**
   * Additional message specified by the approver of the request.
   */
  "approvalAdditionalMessage"?: string;
  /**
   * Time when the access request was authorized by the customer in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfAuthorization"?: Date;
  /**
   * Time for when the access request should start that is authorized by the customer in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeApprovedForAccess"?: Date;
}

export namespace ApproverDetail {
  export function getJsonObj(obj: ApproverDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApproverDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
