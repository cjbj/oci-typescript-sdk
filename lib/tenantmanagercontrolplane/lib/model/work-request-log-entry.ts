/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * A log message from the execution of a work request.
 */
export interface WorkRequestLogEntry {
  /**
   * Human-readable log message.
   */
  "message": string;
  /**
   * The time the log message was written. An RFC 3339-formatted date and time string.
   */
  "timestamp": Date;
}

export namespace WorkRequestLogEntry {
  export function getJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
