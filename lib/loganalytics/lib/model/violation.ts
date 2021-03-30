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
 * Violation
 */
export interface Violation {
  /**
   * The indices associated with regular expression violations.
   */
  "indexes"?: Array<model.Indexes>;
  /**
   * The rule description.
   */
  "ruleDescription"?: string;
  /**
   * The rule name.
   */
  "ruleName"?: string;
  /**
   * The rule remediation.
   */
  "ruleRemediation"?: string;
  /**
   * The rule type.  Either WARN or ERROR.
   */
  "ruleType"?: Violation.RuleType;
}

export namespace Violation {
  export enum RuleType {
    Warn = "WARN",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Violation): object {
    const jsonObj = {
      ...obj,
      ...{
        "indexes": obj.indexes
          ? obj.indexes.map(item => {
              return model.Indexes.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
