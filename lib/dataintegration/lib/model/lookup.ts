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
 * The information about the lookup operator. The lookup operator has two input links, a primary input, and a lookup source input. It has an output link, fields of the lookup input are appended to the primary input and projected as the output fields.
 */
export interface Lookup extends model.Operator {
  "lookupCondition"?: model.Expression;
  /**
   * For the rows for which lookup condition does not satisfy, if set to true - do not return those rows of primary Input source and if set to false - create a row with primary input fields values and lookup field values as NULL.
   */
  "isSkipNoMatch"?: boolean;
  /**
   * if there are multiple records found in the lookup input what action should be performed. The default value for this field is RETURN_ANY.
   */
  "multiMatchStrategy"?: Lookup.MultiMatchStrategy;
  /**
   * this map is used for replacing NULL values in the record. Key is the column name and value is the NULL replacement.
   */
  "nullFillValues"?: { [key: string]: any };

  "modelType": string;
}

export namespace Lookup {
  export enum MultiMatchStrategy {
    ReturnAny = "RETURN_ANY",
    ReturnFirst = "RETURN_FIRST",
    ReturnLast = "RETURN_LAST",
    ReturnAll = "RETURN_ALL",
    ReturnError = "RETURN_ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Lookup, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as Lookup)),
      ...{
        "lookupCondition": obj.lookupCondition
          ? model.Expression.getJsonObj(obj.lookupCondition)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "LOOKUP_OPERATOR";
  export function getDeserializedJsonObj(obj: Lookup, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getDeserializedJsonObj(obj) as Lookup)),
      ...{
        "lookupCondition": obj.lookupCondition
          ? model.Expression.getDeserializedJsonObj(obj.lookupCondition)
          : undefined
      }
    };

    return jsonObj;
  }
}
