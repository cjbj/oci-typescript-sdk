/**
 * Web Application Acceleration (WAA) API
 * API for the Web Application Acceleration service.
Use this API to manage regional Web App Acceleration policies such as Caching and Compression
for accelerating HTTP services.

 * OpenAPI spec version: 20211230
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
 * Specifies options for a cache purge.
 */
export interface PurgeWebAppAccelerationCacheDetails {
  "purgeType": string;
}

export namespace PurgeWebAppAccelerationCacheDetails {
  export function getJsonObj(obj: PurgeWebAppAccelerationCacheDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "purgeType" in obj && obj.purgeType) {
      switch (obj.purgeType) {
        case "ENTIRE_CACHE":
          return model.PurgeEntireWebAppAccelerationCacheDetails.getJsonObj(
            <model.PurgeEntireWebAppAccelerationCacheDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.purgeType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PurgeWebAppAccelerationCacheDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "purgeType" in obj && obj.purgeType) {
      switch (obj.purgeType) {
        case "ENTIRE_CACHE":
          return model.PurgeEntireWebAppAccelerationCacheDetails.getDeserializedJsonObj(
            <model.PurgeEntireWebAppAccelerationCacheDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.purgeType}`);
      }
    }
    return jsonObj;
  }
}
