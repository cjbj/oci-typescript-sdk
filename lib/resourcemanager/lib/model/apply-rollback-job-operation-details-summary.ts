/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Job details that are specific to an apply rollback job. For more information about apply rollback jobs, see
 * [Creating an Apply Rollback Job](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Tasks/create-job-apply-rollback.htm).
 *
 */
export interface ApplyRollbackJobOperationDetailsSummary extends model.JobOperationDetailsSummary {
  /**
   * Specifies the source of the execution plan for rollback to apply.
   * Use {@code AUTO_APPROVED} to run the job without an execution plan for rollback.
   *
   */
  "executionPlanRollbackStrategy": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of a plan rollback job, for use when specifying {@code \"FROM_PLAN_ROLLBACK_JOB_ID\"} as the {@code executionPlanRollbackStrategy}.
   *
   */
  "executionPlanRollbackJobId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of a successful apply job, for use when specifying {@code \"AUTO_APPROVED\"} as the {@code executionPlanRollbackStrategy}.
   *
   */
  "targetRollbackJobId"?: string;

  "operation": string;
}

export namespace ApplyRollbackJobOperationDetailsSummary {
  export function getJsonObj(
    obj: ApplyRollbackJobOperationDetailsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobOperationDetailsSummary.getJsonObj(
            obj
          ) as ApplyRollbackJobOperationDetailsSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "APPLY_ROLLBACK";
  export function getDeserializedJsonObj(
    obj: ApplyRollbackJobOperationDetailsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobOperationDetailsSummary.getDeserializedJsonObj(
            obj
          ) as ApplyRollbackJobOperationDetailsSummary)),
      ...{}
    };

    return jsonObj;
  }
}
