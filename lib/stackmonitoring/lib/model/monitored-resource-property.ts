/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Property of monitored resource
 */
export interface MonitoredResourceProperty {
  /**
   * property name
   */
  "name"?: string;
  /**
   * property value
   */
  "value"?: string;
}

export namespace MonitoredResourceProperty {
  export function getJsonObj(obj: MonitoredResourceProperty): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceProperty): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
