/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The stage information for submitting for approval.
 */
export interface ApproveDeploymentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the stage which is marked for approval.
   */
  "deployStageId": string;
  /**
   * The reason for approving or rejecting the deployment.
   */
  "reason"?: string;
  /**
   * The action of Approve or Reject.
   */
  "action": ApproveDeploymentDetails.Action;
}

export namespace ApproveDeploymentDetails {
  export enum Action {
    Approve = "APPROVE",
    Reject = "REJECT"
  }

  export function getJsonObj(obj: ApproveDeploymentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApproveDeploymentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
