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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new WebAppAcceleration.
 */
export interface CreateWebAppAccelerationDetails {
  /**
   * WebAppAcceleration display name, can be renamed.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of WebAppAccelerationPolicy, which is attached to the resource.
   */
  "webAppAccelerationPolicyId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "backendType": string;
}

export namespace CreateWebAppAccelerationDetails {
  export function getJsonObj(obj: CreateWebAppAccelerationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "backendType" in obj && obj.backendType) {
      switch (obj.backendType) {
        case "LOAD_BALANCER":
          return model.CreateWebAppAccelerationLoadBalancerDetails.getJsonObj(
            <model.CreateWebAppAccelerationLoadBalancerDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.backendType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateWebAppAccelerationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "backendType" in obj && obj.backendType) {
      switch (obj.backendType) {
        case "LOAD_BALANCER":
          return model.CreateWebAppAccelerationLoadBalancerDetails.getDeserializedJsonObj(
            <model.CreateWebAppAccelerationLoadBalancerDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.backendType}`);
      }
    }
    return jsonObj;
  }
}
