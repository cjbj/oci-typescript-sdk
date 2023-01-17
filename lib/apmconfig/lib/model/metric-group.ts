/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
 * 
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
 * A metric group defines a set of metrics to collect from a span. It uses a span filter to specify which spans to
 * process. The set is then published to a namespace, which is a product level subdivision of metrics.
 *
 */
export interface MetricGroup extends model.Config {
  /**
   * The name by which a configuration entity is displayed to the end user.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a Span Filter. The filterId is mandatory for the creation
   * of MetricGroups. A filterId is generated when a Span Filter is created.
   *
   */
  "filterId"?: string;
  /**
   * The namespace to which the metrics are published. It must be one of several predefined namespaces.
   *
   */
  "namespace"?: string;
  /**
   * A list of dimensions for the metric. This variable should not be used.
   */
  "dimensions"?: Array<model.Dimension>;
  /**
   * The list of metrics in this group.
   *
   */
  "metrics"?: Array<model.Metric>;

  "configType": string;
}

export namespace MetricGroup {
  export function getJsonObj(obj: MetricGroup, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Config.getJsonObj(obj) as MetricGroup)),
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
  export function getDeserializedJsonObj(obj: MetricGroup, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Config.getDeserializedJsonObj(obj) as MetricGroup)),
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
