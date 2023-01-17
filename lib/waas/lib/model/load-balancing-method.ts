/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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

export interface LoadBalancingMethod {
  "method": string;
}

export namespace LoadBalancingMethod {
  export function getJsonObj(obj: LoadBalancingMethod): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "method" in obj && obj.method) {
      switch (obj.method) {
        case "ROUND_ROBIN":
          return model.RoundRobinLoadBalancingMethod.getJsonObj(
            <model.RoundRobinLoadBalancingMethod>(<object>jsonObj),
            true
          );
        case "STICKY_COOKIE":
          return model.StickyCookieLoadBalancingMethod.getJsonObj(
            <model.StickyCookieLoadBalancingMethod>(<object>jsonObj),
            true
          );
        case "IP_HASH":
          return model.IPHashLoadBalancingMethod.getJsonObj(
            <model.IPHashLoadBalancingMethod>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.method}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LoadBalancingMethod): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "method" in obj && obj.method) {
      switch (obj.method) {
        case "ROUND_ROBIN":
          return model.RoundRobinLoadBalancingMethod.getDeserializedJsonObj(
            <model.RoundRobinLoadBalancingMethod>(<object>jsonObj),
            true
          );
        case "STICKY_COOKIE":
          return model.StickyCookieLoadBalancingMethod.getDeserializedJsonObj(
            <model.StickyCookieLoadBalancingMethod>(<object>jsonObj),
            true
          );
        case "IP_HASH":
          return model.IPHashLoadBalancingMethod.getDeserializedJsonObj(
            <model.IPHashLoadBalancingMethod>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.method}`);
      }
    }
    return jsonObj;
  }
}
