/**
 * Oracle Content Management API
 * Oracle Content Management is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * The workflow monitor for this work request.
 */
export interface WorkflowMonitor {
  /**
   * workflow name for this work request
   */
  "workflowName"?: string;
  /**
   * resource name for this work request
   */
  "resourceName"?: string;
  /**
   * Workflow step of workflow monitor.
   */
  "workflowSteps"?: Array<model.WorkflowStep>;
}

export namespace WorkflowMonitor {
  export function getJsonObj(obj: WorkflowMonitor): object {
    const jsonObj = {
      ...obj,
      ...{
        "workflowSteps": obj.workflowSteps
          ? obj.workflowSteps.map(item => {
              return model.WorkflowStep.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkflowMonitor): object {
    const jsonObj = {
      ...obj,
      ...{
        "workflowSteps": obj.workflowSteps
          ? obj.workflowSteps.map(item => {
              return model.WorkflowStep.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
