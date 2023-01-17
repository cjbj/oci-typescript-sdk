/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * Container Health Check HTTP type.
 */
export interface CreateContainerHttpHealthCheckDetails
  extends model.CreateContainerHealthCheckDetails {
  /**
   * Container health check Http's path.
   */
  "path": string;
  /**
   * Container health check Http's port. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * Container health check Http's headers.
   */
  "headers"?: Array<model.HealthCheckHttpHeader>;

  "healthCheckType": string;
}

export namespace CreateContainerHttpHealthCheckDetails {
  export function getJsonObj(
    obj: CreateContainerHttpHealthCheckDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerHealthCheckDetails.getJsonObj(
            obj
          ) as CreateContainerHttpHealthCheckDetails)),
      ...{
        "headers": obj.headers
          ? obj.headers.map(item => {
              return model.HealthCheckHttpHeader.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const healthCheckType = "HTTP";
  export function getDeserializedJsonObj(
    obj: CreateContainerHttpHealthCheckDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerHealthCheckDetails.getDeserializedJsonObj(
            obj
          ) as CreateContainerHttpHealthCheckDetails)),
      ...{
        "headers": obj.headers
          ? obj.headers.map(item => {
              return model.HealthCheckHttpHeader.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
