/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
* The health status details for a backend set.
* <p>
This object does not explicitly enumerate backend servers with a status of `OK`. However, the backend sets are included in the
* `totalBackendCount` sum.
* 
*/
export interface BackendSetHealth {
  /**
   * Overall health status of the backend set.
   * <p>
   *  **OK:** All backend servers in the backend set return a status of `OK`.
   * <p>
   *  **WARNING:** Half or more of the backend servers in a backend set return a status of `OK` and at least one backend
   * server returns a status of `WARNING`, `CRITICAL`, or `UNKNOWN`.
   * <p>
   *  **CRITICAL:** Fewer than half of the backend servers in a backend set return a status of `OK`.
   * <p>
   *  **UNKNOWN:** If no probes have yet been sent to the backends, or the system is
   * unable to retrieve metrics from the backends.
   *
   */
  "status": BackendSetHealth.Status;
  /**
    * A list of backend servers that are currently in the `WARNING` health state. The list identifies each backend server by
* IP address or OCID and port.
* <p>
Example: `10.0.0.3:8080` or `ocid1.privateip..oc1.<var>&lt;unique_ID&gt;</var>:8080`
* 
    */
  "warningStateBackendNames": Array<string>;
  /**
    * A list of backend servers that are currently in the `CRITICAL` health state. The list identifies each backend server by
* IP address and port.
* <p>
Example: `10.0.0.4:8080`
* 
    */
  "criticalStateBackendNames": Array<string>;
  /**
    * A list of backend servers that are currently in the `UNKNOWN` health state. The list identifies each backend server by
* IP address and port.
* <p>
Example: `10.0.0.5:8080`
* 
    */
  "unknownStateBackendNames": Array<string>;
  /**
    * The total number of backend servers in this backend set.
* <p>
Example: `7`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "totalBackendCount": number;
}

export namespace BackendSetHealth {
  export enum Status {
    Ok = "OK",
    Warning = "WARNING",
    Critical = "CRITICAL",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BackendSetHealth): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackendSetHealth): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
