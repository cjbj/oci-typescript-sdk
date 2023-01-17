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
 * Policy on how to authenticate requests when multiple authentication options are configured for a deployment. For an incoming request, the value of selector specified under selectionSource will be matched against the keys specified for each authentication server. The authentication server whose key matches the value of selector will be used for authentication.
 */
export interface DynamicAuthenticationPolicy {
  "selectionSource": model.SingleSelectionSourcePolicy;
  /**
   * List of authentication servers to choose from during dynamic authentication.
   */
  "authenticationServers": Array<model.AuthenticationServerPolicy>;
}

export namespace DynamicAuthenticationPolicy {
  export function getJsonObj(obj: DynamicAuthenticationPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "selectionSource": obj.selectionSource
          ? model.SelectionSourcePolicy.getJsonObj(obj.selectionSource)
          : undefined,
        "authenticationServers": obj.authenticationServers
          ? obj.authenticationServers.map(item => {
              return model.AuthenticationServerPolicy.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DynamicAuthenticationPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "selectionSource": obj.selectionSource
          ? model.SelectionSourcePolicy.getDeserializedJsonObj(obj.selectionSource)
          : undefined,
        "authenticationServers": obj.authenticationServers
          ? obj.authenticationServers.map(item => {
              return model.AuthenticationServerPolicy.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
