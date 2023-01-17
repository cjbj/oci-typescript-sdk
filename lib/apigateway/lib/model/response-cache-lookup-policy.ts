/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Base policy for Response Cache lookup.
 *
 */
export interface ResponseCacheLookupPolicy {
  /**
   * Whether this policy is currently enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
    * Set true to allow caching responses where the request has an Authorization header. Ensure you have configured your 
* cache key additions to get the level of isolation across authenticated requests that you require.
* <p>
When false, any request with an Authorization header will not be stored in the Response Cache.
* <p>
If using the CustomAuthenticationPolicy then the tokenHeader/tokenQueryParam are also subject to this check.
* 
    */
  "isPrivateCachingEnabled"?: boolean;

  "type": string;
}

export namespace ResponseCacheLookupPolicy {
  export function getJsonObj(obj: ResponseCacheLookupPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "SIMPLE_LOOKUP_POLICY":
          return model.SimpleLookupPolicy.getJsonObj(
            <model.SimpleLookupPolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponseCacheLookupPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "SIMPLE_LOOKUP_POLICY":
          return model.SimpleLookupPolicy.getDeserializedJsonObj(
            <model.SimpleLookupPolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
