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
* The configuration details for implementing session persistence based on a user-specified cookie name (application
* cookie stickiness).
* <p>
Session persistence enables the Load Balancing service to direct any number of requests that originate from a single
* logical client to a single backend web server. For more information, see
* [Session Persistence](https://docs.cloud.oracle.com/Content/Balance/Reference/sessionpersistence.htm).
* <p>
With application cookie stickiness, the load balancer enables session persistence only when the response from a backend
* application server includes a `Set-cookie` header with the user-specified cookie name.
* <p>
To disable application cookie stickiness on a running load balancer, use the
* {@link #updateBackendSet(UpdateBackendSetRequest) updateBackendSet} operation and specify `null` for the
* `SessionPersistenceConfigurationDetails` object.
* <p>
Example: `SessionPersistenceConfigurationDetails: null`
* <p>
**Note:** `SessionPersistenceConfigurationDetails` (application cookie stickiness) and `LBCookieSessionPersistenceConfigurationDetails`
* (LB cookie stickiness) are mutually exclusive. An error results if you try to enable both types of session persistence.
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface SessionPersistenceConfigurationDetails {
  /**
    * The name of the cookie used to detect a session initiated by the backend server. Use '*' to specify
* that any cookie set by the backend causes the session to persist.
* <p>
Example: `example_cookie`
* 
    */
  "cookieName": string;
  /**
    * Whether the load balancer is prevented from directing traffic from a persistent session client to
* a different backend server if the original server is unavailable. Defaults to false.
* <p>
Example: `false`
* 
    */
  "disableFallback"?: boolean;
}

export namespace SessionPersistenceConfigurationDetails {
  export function getJsonObj(obj: SessionPersistenceConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SessionPersistenceConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
