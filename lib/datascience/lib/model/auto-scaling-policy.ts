/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The scaling policy to enable autoscaling on the model deployment.
 *
 */
export interface AutoScalingPolicy extends model.ScalingPolicy {
  /**
   * For threshold-based autoscaling policies, this value is the minimum period of time to wait between scaling actions.
   * The cooldown period gives the system time to stabilize before rescaling. The minimum value is 600 seconds, which
   * is also the default. The cooldown period starts when the model deployment becomes ACTIVE after the scaling operation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "coolDownInSeconds"?: number;
  /**
   * Whether the autoscaling policy is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The list of autoscaling policy details.
   *
   */
  "autoScalingPolicies": Array<model.AutoScalingPolicyDetails>;

  "policyType": string;
}

export namespace AutoScalingPolicy {
  export function getJsonObj(obj: AutoScalingPolicy, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ScalingPolicy.getJsonObj(obj) as AutoScalingPolicy)),
      ...{
        "autoScalingPolicies": obj.autoScalingPolicies
          ? obj.autoScalingPolicies.map(item => {
              return model.AutoScalingPolicyDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const policyType = "AUTOSCALING";
  export function getDeserializedJsonObj(
    obj: AutoScalingPolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ScalingPolicy.getDeserializedJsonObj(obj) as AutoScalingPolicy)),
      ...{
        "autoScalingPolicies": obj.autoScalingPolicies
          ? obj.autoScalingPolicies.map(item => {
              return model.AutoScalingPolicyDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
