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
 * A set of Public Keys that will be used to verify the JWT signature.
 */
export interface PublicKeySet {
  "type": string;
}

export namespace PublicKeySet {
  export function getJsonObj(obj: PublicKeySet): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "STATIC_KEYS":
          return model.StaticPublicKeySet.getJsonObj(
            <model.StaticPublicKeySet>(<object>jsonObj),
            true
          );
        case "REMOTE_JWKS":
          return model.RemoteJsonWebKeySet.getJsonObj(
            <model.RemoteJsonWebKeySet>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PublicKeySet): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "STATIC_KEYS":
          return model.StaticPublicKeySet.getDeserializedJsonObj(
            <model.StaticPublicKeySet>(<object>jsonObj),
            true
          );
        case "REMOTE_JWKS":
          return model.RemoteJsonWebKeySet.getDeserializedJsonObj(
            <model.RemoteJsonWebKeySet>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
