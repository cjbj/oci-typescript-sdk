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
 * Details of day based horizontal scaling schedule.
 */
export interface DayBasedHorizontalScalingScheduleDetails
  extends model.HorizontalScalingScheduleDetails {
  "timeAndHorizontalScalingConfig"?: Array<model.TimeAndHorizontalScalingConfig>;

  "scheduleType": string;
}

export namespace DayBasedHorizontalScalingScheduleDetails {
  export function getJsonObj(
    obj: DayBasedHorizontalScalingScheduleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HorizontalScalingScheduleDetails.getJsonObj(
            obj
          ) as DayBasedHorizontalScalingScheduleDetails)),
      ...{
        "timeAndHorizontalScalingConfig": obj.timeAndHorizontalScalingConfig
          ? obj.timeAndHorizontalScalingConfig.map(item => {
              return model.TimeAndHorizontalScalingConfig.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const scheduleType = "DAY_BASED";
  export function getDeserializedJsonObj(
    obj: DayBasedHorizontalScalingScheduleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HorizontalScalingScheduleDetails.getDeserializedJsonObj(
            obj
          ) as DayBasedHorizontalScalingScheduleDetails)),
      ...{
        "timeAndHorizontalScalingConfig": obj.timeAndHorizontalScalingConfig
          ? obj.timeAndHorizontalScalingConfig.map(item => {
              return model.TimeAndHorizontalScalingConfig.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
