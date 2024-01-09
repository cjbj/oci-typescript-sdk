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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A description of a configuration item. It specifies all the properties that define the configuration item.
 *
 */
export interface ConfigSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the configuration item. An OCID is generated
   * when the item is created.
   *
   */
  "id"?: string;
  /**
   * The time the resource was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2020-02-12T22:47:12.613Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2020-02-13T22:47:12.613Z`
   *
   */
  "timeUpdated"?: Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a user.
   *
   */
  "createdBy"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a user.
   *
   */
  "updatedBy"?: string;
  /**
   * For optimistic concurrency control. See `if-match`.
   *
   */
  "etag"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "configType": string;
}

export namespace ConfigSummary {
  export function getJsonObj(obj: ConfigSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "METRIC_GROUP":
          return model.MetricGroupSummary.getJsonObj(
            <model.MetricGroupSummary>(<object>jsonObj),
            true
          );
        case "APDEX":
          return model.ApdexRulesSummary.getJsonObj(
            <model.ApdexRulesSummary>(<object>jsonObj),
            true
          );
        case "SPAN_FILTER":
          return model.SpanFilterSummary.getJsonObj(
            <model.SpanFilterSummary>(<object>jsonObj),
            true
          );
        case "OPTIONS":
          return model.OptionsSummary.getJsonObj(<model.OptionsSummary>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "METRIC_GROUP":
          return model.MetricGroupSummary.getDeserializedJsonObj(
            <model.MetricGroupSummary>(<object>jsonObj),
            true
          );
        case "APDEX":
          return model.ApdexRulesSummary.getDeserializedJsonObj(
            <model.ApdexRulesSummary>(<object>jsonObj),
            true
          );
        case "SPAN_FILTER":
          return model.SpanFilterSummary.getDeserializedJsonObj(
            <model.SpanFilterSummary>(<object>jsonObj),
            true
          );
        case "OPTIONS":
          return model.OptionsSummary.getDeserializedJsonObj(
            <model.OptionsSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
}
