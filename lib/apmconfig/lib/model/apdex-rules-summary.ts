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
 * The set of Apdex rules used in Apdex computation.
 *
 */
export interface ApdexRulesSummary extends model.ConfigSummary {
  "rules"?: Array<model.Apdex>;
  /**
   * The name by which a configuration entity is displayed to the end user.
   */
  "displayName"?: string;

  "configType": string;
}

export namespace ApdexRulesSummary {
  export function getJsonObj(obj: ApdexRulesSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ConfigSummary.getJsonObj(obj) as ApdexRulesSummary)),
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.Apdex.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "APDEX";
  export function getDeserializedJsonObj(
    obj: ApdexRulesSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSummary.getDeserializedJsonObj(obj) as ApdexRulesSummary)),
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.Apdex.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
