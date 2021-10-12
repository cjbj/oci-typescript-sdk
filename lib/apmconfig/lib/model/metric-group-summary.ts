/**
 * Apm Configuration API
 * An API for the APM Configuration service. Use this API to query and set APM configuration.
 * OpenAPI spec version: 20210201
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
 * A Metric Group.
 *
 */
export interface MetricGroupSummary extends model.ConfigSummary {
  /**
   * The name of this metric group
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a Span Filter. The filterId is mandatory for the creation
   * of MetricGroups. A filterId will be generated when a Span Filter is created.
   *
   */
  "filterId"?: string;
  /**
   * The namespace to write the metrics to
   */
  "namespace"?: string;
  /**
   * A list of dimensions for this metric
   */
  "dimensions"?: Array<model.Dimension>;
  "metrics"?: Array<model.Metric>;

  "configType": string;
}

export namespace MetricGroupSummary {
  export function getJsonObj(obj: MetricGroupSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ConfigSummary.getJsonObj(obj) as MetricGroupSummary)),
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.Dimension.getJsonObj(item);
            })
          : undefined,
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.Metric.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "METRIC_GROUP";
  export function getDeserializedJsonObj(
    obj: MetricGroupSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSummary.getDeserializedJsonObj(obj) as MetricGroupSummary)),
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.Dimension.getDeserializedJsonObj(item);
            })
          : undefined,
        "metrics": obj.metrics
          ? obj.metrics.map(item => {
              return model.Metric.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
