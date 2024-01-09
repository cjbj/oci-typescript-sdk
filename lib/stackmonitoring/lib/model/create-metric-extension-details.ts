/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about new metric extension resource. The combination of metric extension name and resource type should be unique in a compartment.
 */
export interface CreateMetricExtensionDetails {
  /**
   * Metric Extension Resource name.
   */
  "name": string;
  /**
   * Metric Extension display name.
   */
  "displayName": string;
  /**
   * Resource type to which Metric Extension applies
   */
  "resourceType": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * Description of the metric extension.
   */
  "description"?: string;
  /**
   * Schedule of metric extension should use RFC 5545 format i.e. recur-rule-part = \"FREQ\";INTERVAL where FREQ rule part identifies the type of recurrence rule. Valid values are \"MINUTELY\",\"HOURLY\",\"DAILY\" to specify repeating events based on an interval of a minute, an hour and a day or more. Example- FREQ=DAILY;INTERVAL=1
   */
  "collectionRecurrences": string;
  /**
   * List of metrics which are part of this metric extension
   */
  "metricList": Array<model.Metric>;
  "queryProperties":
    | model.OsCommandQueryProperties
    | model.SqlQueryProperties
    | model.JmxQueryProperties;
}

export namespace CreateMetricExtensionDetails {
  export function getJsonObj(obj: CreateMetricExtensionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metricList": obj.metricList
          ? obj.metricList.map(item => {
              return model.Metric.getJsonObj(item);
            })
          : undefined,
        "queryProperties": obj.queryProperties
          ? model.MetricExtensionQueryProperties.getJsonObj(obj.queryProperties)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMetricExtensionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metricList": obj.metricList
          ? obj.metricList.map(item => {
              return model.Metric.getDeserializedJsonObj(item);
            })
          : undefined,
        "queryProperties": obj.queryProperties
          ? model.MetricExtensionQueryProperties.getDeserializedJsonObj(obj.queryProperties)
          : undefined
      }
    };

    return jsonObj;
  }
}
