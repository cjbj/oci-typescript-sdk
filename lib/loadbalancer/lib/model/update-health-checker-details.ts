/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The health checker's configuration details.
 */
export interface UpdateHealthCheckerDetails {
  /**
    * The protocol the health check must use; either HTTP or TCP.
* <p>
Example: {@code HTTP}
* 
    */
  "protocol": string;
  /**
    * The path against which to run the health check.
* <p>
Example: {@code /healthcheck}
* 
    */
  "urlPath"?: string;
  /**
    * The backend server port against which to run the health check.
* <p>
Example: {@code 8080}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "port": number;
  /**
    * The status code a healthy backend server should return.
* <p>
Example: {@code 200}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "returnCode": number;
  /**
    * The number of retries to attempt before a backend server is considered \"unhealthy\". This number also applies
* when recovering a server to the \"healthy\" state.
* <p>
Example: {@code 3}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "retries": number;
  /**
    * The maximum time, in milliseconds, to wait for a reply to a health check. A health check is successful only if a reply
* returns within this timeout period.
* <p>
Example: {@code 3000}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "timeoutInMillis": number;
  /**
    * The interval between health checks, in milliseconds.
* <p>
Example: {@code 10000}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "intervalInMillis": number;
  /**
    * A regular expression for parsing the response body from the backend server.
* <p>
Example: {@code ^((?!false).|\\s)*$}
* 
    */
  "responseBodyRegex": string;
  /**
    * Specifies if health checks should always be done using plain text instead of depending on
* whether or not the associated backend set is using SSL.
* <p>
If \"true\", health checks will be done using plain text even if the associated backend set is configured
* to use SSL.
* <p>
If \"false\", health checks will be done using SSL encryption if the associated backend set is configured
* to use SSL. If the backend set is not so configured the health checks will be done using plain text.
* <p>
Example: {@code true}
* 
    */
  "isForcePlainText"?: boolean;
}

export namespace UpdateHealthCheckerDetails {
  export function getJsonObj(obj: UpdateHealthCheckerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateHealthCheckerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
