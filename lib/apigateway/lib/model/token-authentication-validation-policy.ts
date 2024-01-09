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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Authentication Policies for the Token Authentication types.
 */
export interface TokenAuthenticationValidationPolicy {
  "additionalValidationPolicy"?: model.AdditionalValidationPolicy;

  "type": string;
}

export namespace TokenAuthenticationValidationPolicy {
  export function getJsonObj(obj: TokenAuthenticationValidationPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalValidationPolicy": obj.additionalValidationPolicy
          ? model.AdditionalValidationPolicy.getJsonObj(obj.additionalValidationPolicy)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "REMOTE_JWKS":
          return model.TokenAuthenticationRemoteJWKSValidationPolicy.getJsonObj(
            <model.TokenAuthenticationRemoteJWKSValidationPolicy>(<object>jsonObj),
            true
          );
        case "REMOTE_DISCOVERY":
          return model.TokenAuthenticationRemoteDiscoveryValidationPolicy.getJsonObj(
            <model.TokenAuthenticationRemoteDiscoveryValidationPolicy>(<object>jsonObj),
            true
          );
        case "STATIC_KEYS":
          return model.TokenAuthenticationStaticKeysValidationPolicy.getJsonObj(
            <model.TokenAuthenticationStaticKeysValidationPolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TokenAuthenticationValidationPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "additionalValidationPolicy": obj.additionalValidationPolicy
          ? model.AdditionalValidationPolicy.getDeserializedJsonObj(obj.additionalValidationPolicy)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "REMOTE_JWKS":
          return model.TokenAuthenticationRemoteJWKSValidationPolicy.getDeserializedJsonObj(
            <model.TokenAuthenticationRemoteJWKSValidationPolicy>(<object>jsonObj),
            true
          );
        case "REMOTE_DISCOVERY":
          return model.TokenAuthenticationRemoteDiscoveryValidationPolicy.getDeserializedJsonObj(
            <model.TokenAuthenticationRemoteDiscoveryValidationPolicy>(<object>jsonObj),
            true
          );
        case "STATIC_KEYS":
          return model.TokenAuthenticationStaticKeysValidationPolicy.getDeserializedJsonObj(
            <model.TokenAuthenticationStaticKeysValidationPolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
