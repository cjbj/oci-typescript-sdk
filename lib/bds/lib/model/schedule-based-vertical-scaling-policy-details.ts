/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
* Details of a schedule based vertical autoscaling policy.
* <p>
In a schedule-based autoscaling policy, an autoscaling action is triggered at the scheduled execution time.
* 
*/
export interface ScheduleBasedVerticalScalingPolicyDetails extends model.AutoScalePolicyDetails {
  /**
   * The time zone of the execution schedule, in IANA time zone database name format
   */
  "timezone"?: string;
  "scheduleDetails"?: Array<model.VerticalScalingScheduleDetails>;

  "policyType": string;
}

export namespace ScheduleBasedVerticalScalingPolicyDetails {
  export function getJsonObj(
    obj: ScheduleBasedVerticalScalingPolicyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutoScalePolicyDetails.getJsonObj(
            obj
          ) as ScheduleBasedVerticalScalingPolicyDetails)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? obj.scheduleDetails.map(item => {
              return model.VerticalScalingScheduleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const policyType = "SCHEDULE_BASED_VERTICAL_SCALING_POLICY";
  export function getDeserializedJsonObj(
    obj: ScheduleBasedVerticalScalingPolicyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutoScalePolicyDetails.getDeserializedJsonObj(
            obj
          ) as ScheduleBasedVerticalScalingPolicyDetails)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? obj.scheduleDetails.map(item => {
              return model.VerticalScalingScheduleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
