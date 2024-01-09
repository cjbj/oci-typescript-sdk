/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * Container Health Check with TCP type.
 */
export interface ContainerTcpHealthCheck extends model.ContainerHealthCheck {
  /**
   * Container health check port. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;

  "healthCheckType": string;
}

export namespace ContainerTcpHealthCheck {
  export function getJsonObj(obj: ContainerTcpHealthCheck, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ContainerHealthCheck.getJsonObj(obj) as ContainerTcpHealthCheck)),
      ...{}
    };

    return jsonObj;
  }
  export const healthCheckType = "TCP";
  export function getDeserializedJsonObj(
    obj: ContainerTcpHealthCheck,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ContainerHealthCheck.getDeserializedJsonObj(obj) as ContainerTcpHealthCheck)),
      ...{}
    };

    return jsonObj;
  }
}
