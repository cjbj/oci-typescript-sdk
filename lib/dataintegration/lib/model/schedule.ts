/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The schedule object
 */
export interface Schedule {
  /**
   * Generated key that can be used in API calls to identify schedule. On scenarios where reference to the schedule is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * This is a version number that is used by the service to upgrade objects if needed through releases of the service.
   */
  "modelVersion"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * This is used by the service for optimistic locking of the object, to prevent multiple users from simultaneously updating the object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "frequencyDetails"?:
    | model.MonthlyFrequencyDetails
    | model.CustomFrequencyDetails
    | model.DailyFrequencyDetails
    | model.WeeklyFrequencyDetails
    | model.MonthlyRuleFrequencyDetails
    | model.HourlyFrequencyDetails;
  /**
   * The timezone for the schedule.
   */
  "timezone"?: string;
  /**
   * A flag to indicate daylight saving.
   */
  "isDaylightAdjustmentEnabled"?: boolean;
  "metadata"?: model.ObjectMetadata;
}

export namespace Schedule {
  export function getJsonObj(obj: Schedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "frequencyDetails": obj.frequencyDetails
          ? model.AbstractFrequencyDetails.getJsonObj(obj.frequencyDetails)
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Schedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "frequencyDetails": obj.frequencyDetails
          ? model.AbstractFrequencyDetails.getDeserializedJsonObj(obj.frequencyDetails)
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
