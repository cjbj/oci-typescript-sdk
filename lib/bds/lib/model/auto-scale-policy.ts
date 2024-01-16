/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * This model for autoscaling policy is deprecated and not supported for ODH clusters. Use the {@code AutoScalePolicyDetails} model to manage autoscale policy details for ODH clusters.
 *
 */
export interface AutoScalePolicy {
  /**
   * Types of autoscale policies. Options are SCHEDULE-BASED or THRESHOLD-BASED. (Only THRESHOLD-BASED is supported in this release.)
   */
  "policyType": AutoScalePolicy.PolicyType;
  /**
   * The list of rules for autoscaling. If an action has multiple rules, the last rule in the array will be applied.
   */
  "rules": Array<model.AutoScalePolicyRule>;
}

export namespace AutoScalePolicy {
  export enum PolicyType {
    ThresholdBased = "THRESHOLD_BASED",
    ScheduleBased = "SCHEDULE_BASED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutoScalePolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.AutoScalePolicyRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutoScalePolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.AutoScalePolicyRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
