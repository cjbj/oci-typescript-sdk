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
 * The information about new WebAppAccelerationPolicy.
 */
export interface CreateWebAppAccelerationPolicyDetails {
  /**
   * WebAppAccelerationPolicy display name, can be renamed.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  "responseCachingPolicy"?: model.ResponseCachingPolicy;
  "responseCompressionPolicy"?: model.ResponseCompressionPolicy;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateWebAppAccelerationPolicyDetails {
  export function getJsonObj(obj: CreateWebAppAccelerationPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "responseCachingPolicy": obj.responseCachingPolicy
          ? model.ResponseCachingPolicy.getJsonObj(obj.responseCachingPolicy)
          : undefined,
        "responseCompressionPolicy": obj.responseCompressionPolicy
          ? model.ResponseCompressionPolicy.getJsonObj(obj.responseCompressionPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateWebAppAccelerationPolicyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "responseCachingPolicy": obj.responseCachingPolicy
          ? model.ResponseCachingPolicy.getDeserializedJsonObj(obj.responseCachingPolicy)
          : undefined,
        "responseCompressionPolicy": obj.responseCompressionPolicy
          ? model.ResponseCompressionPolicy.getDeserializedJsonObj(obj.responseCompressionPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
