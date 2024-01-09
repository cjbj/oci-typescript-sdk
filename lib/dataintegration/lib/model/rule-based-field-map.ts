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
 * A map of rule patterns.
 */
export interface RuleBasedFieldMap extends model.FieldMap {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "configValues"?: model.ConfigValues;
  /**
   * mapType
   */
  "mapType"?: RuleBasedFieldMap.MapType;
  /**
   * The pattern to map from.
   */
  "fromPattern"?: string;
  /**
   * The pattern to map to.
   */
  "toPattern"?: string;
  /**
   * Specifies whether the rule uses a java regex syntax.
   */
  "isJavaRegexSyntax"?: boolean;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  "fromRuleConfig"?: model.RuleTypeConfig;
  "toRuleConfig"?: model.RuleTypeConfig;

  "modelType": string;
}

export namespace RuleBasedFieldMap {
  export enum MapType {
    Mapbyname = "MAPBYNAME",
    Mapbyposition = "MAPBYPOSITION",
    Mapbypattern = "MAPBYPATTERN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RuleBasedFieldMap, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldMap.getJsonObj(obj) as RuleBasedFieldMap)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined,

        "fromRuleConfig": obj.fromRuleConfig
          ? model.RuleTypeConfig.getJsonObj(obj.fromRuleConfig)
          : undefined,
        "toRuleConfig": obj.toRuleConfig
          ? model.RuleTypeConfig.getJsonObj(obj.toRuleConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "RULE_BASED_FIELD_MAP";
  export function getDeserializedJsonObj(
    obj: RuleBasedFieldMap,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FieldMap.getDeserializedJsonObj(obj) as RuleBasedFieldMap)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined,

        "fromRuleConfig": obj.fromRuleConfig
          ? model.RuleTypeConfig.getDeserializedJsonObj(obj.fromRuleConfig)
          : undefined,
        "toRuleConfig": obj.toRuleConfig
          ? model.RuleTypeConfig.getDeserializedJsonObj(obj.toRuleConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
