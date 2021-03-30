/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LogAnalyticsMetric
 */
export interface LogAnalyticsMetric {
  /**
   * The aggregation field.
   */
  "aggregationField"?: string;
  /**
   * The bucket metadata.
   */
  "bucketMetadata"?: string;
  /**
   * The clock period.
   */
  "clockPeriod"?: string;
  /**
   * The metric description.
   */
  "description"?: string;
  /**
   * The metric edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "editVersion"?: number;
  /**
   * The field name.
   */
  "fieldName"?: string;
  /**
   * The field values.
   */
  "fieldValues"?: Array<string>;
  /**
   * The grouping fields.
   */
  "groupingField"?: string;
  /**
   * A flag inidcating whether or not the metric is enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The metric display name.
   */
  "displayName"?: string;
  /**
   * The metric unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "metricReference"?: number;
  /**
   * The metric name.
   */
  "name"?: string;
  /**
   * The metric type, specifying the type of aggreation to perform.  Default value
   * is COUNT.
   *
   */
  "metricType"?: LogAnalyticsMetric.MetricType;
  /**
   * A flag specifying whether or not the metric source is enabled.
   *
   */
  "isMetricSourceEnabled"?: boolean;
  /**
   * The metric operator.
   */
  "operator"?: LogAnalyticsMetric.Operator;
  /**
   * The metric sources.
   */
  "sources"?: Array<model.LogAnalyticsSource>;
  /**
   * The entity type.
   */
  "entityType"?: string;
  /**
   * The last updated date.
   */
  "timeUpdated"?: Date;
  /**
   * The unit type.
   */
  "unitType"?: string;
  /**
   * A flag specifying whether or not this is a custom (user defined) metric.
   *
   */
  "isUserCustomized"?: boolean;
}

export namespace LogAnalyticsMetric {
  export enum MetricType {
    Count = "COUNT",
    Sum = "SUM",
    Average = "AVERAGE",
    CountDistribution = "COUNT_DISTRIBUTION",
    SumDistribution = "SUM_DISTRIBUTION",
    AverageDistribution = "AVERAGE_DISTRIBUTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Operator {
    ContainsIgnoreCase = "CONTAINS_IGNORE_CASE",
    InIgnoreCase = "IN_IGNORE_CASE",
    EqualIgnoreCase = "EQUAL_IGNORE_CASE",
    NotNull = "NOT_NULL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsMetric): object {
    const jsonObj = {
      ...obj,
      ...{
        "sources": obj.sources
          ? obj.sources.map(item => {
              return model.LogAnalyticsSource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
