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
 * The request body used to validate a Span Filter pattern.
 */
export interface ValidateSpanFilterPatternDetails {
  /**
   * The string that defines the Span Filter expression.
   *
   */
  "filterText": string;
}

export namespace ValidateSpanFilterPatternDetails {
  export function getJsonObj(obj: ValidateSpanFilterPatternDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ValidateSpanFilterPatternDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
