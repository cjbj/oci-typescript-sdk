/**
 * Connector Hub API
 * Use the Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Connector Hub, see
[the Connector Hub documentation](/iaas/Content/connector-hub/home.htm).
Connector Hub is formerly known as Service Connector Hub.

 * OpenAPI spec version: 20200909
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
 * A connector plugin for fetching data from a source service.
 * For configuration instructions, see
 * [Creating a Connector](https://docs.cloud.oracle.com/iaas/Content/connector-hub/create-service-connector.htm).
 *
 */
export interface SourceConnectorPlugin extends model.ConnectorPlugin {
  /**
   * The estimated maximum period of time the data will be kept at the source.
   * The duration is specified as a string in ISO 8601 format (P1D for one day or P30D for thrity days).
   *
   */
  "maxRetention"?: string;

  "kind": string;
}

export namespace SourceConnectorPlugin {
  export function getJsonObj(obj: SourceConnectorPlugin, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ConnectorPlugin.getJsonObj(obj) as SourceConnectorPlugin)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "SOURCE";
  export function getDeserializedJsonObj(
    obj: SourceConnectorPlugin,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectorPlugin.getDeserializedJsonObj(obj) as SourceConnectorPlugin)),
      ...{}
    };

    return jsonObj;
  }
}
