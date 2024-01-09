/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * An error encountered while executing an operation that is tracked by a work request.
 */
export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occurred. Error codes are listed at [API Errors](https://docs.cloud.oracle.com/Content/API/References/apierrors.htm).
   *
   */
  "code": string;
  /**
   * A human readable description of the issue encountered.
   */
  "message": string;
  /**
   * The date and time the error occured (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
