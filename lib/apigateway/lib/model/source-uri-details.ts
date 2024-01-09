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
 * Auth endpoint details.
 */
export interface SourceUriDetails {
  "type": string;
}

export namespace SourceUriDetails {
  export function getJsonObj(obj: SourceUriDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DISCOVERY_URI":
          return model.DiscoveryUriSourceUriDetails.getJsonObj(
            <model.DiscoveryUriSourceUriDetails>(<object>jsonObj),
            true
          );
        case "VALIDATION_BLOCK":
          return model.ValidationBlockSourceUriDetails.getJsonObj(
            <model.ValidationBlockSourceUriDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceUriDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "DISCOVERY_URI":
          return model.DiscoveryUriSourceUriDetails.getDeserializedJsonObj(
            <model.DiscoveryUriSourceUriDetails>(<object>jsonObj),
            true
          );
        case "VALIDATION_BLOCK":
          return model.ValidationBlockSourceUriDetails.getDeserializedJsonObj(
            <model.ValidationBlockSourceUriDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
