/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * The namespaces for the compartment-specific list.
 *
 */
export interface MonitoringSourceSelectedNamespaceDetails
  extends model.MonitoringSourceNamespaceDetails {
  /**
   * The namespaces for the compartment-specific list.
   *
   */
  "namespaces": Array<model.MonitoringSourceSelectedNamespace>;

  "kind": string;
}

export namespace MonitoringSourceSelectedNamespaceDetails {
  export function getJsonObj(
    obj: MonitoringSourceSelectedNamespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitoringSourceNamespaceDetails.getJsonObj(
            obj
          ) as MonitoringSourceSelectedNamespaceDetails)),
      ...{
        "namespaces": obj.namespaces
          ? obj.namespaces.map(item => {
              return model.MonitoringSourceSelectedNamespace.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const kind = "selected";
  export function getDeserializedJsonObj(
    obj: MonitoringSourceSelectedNamespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitoringSourceNamespaceDetails.getDeserializedJsonObj(
            obj
          ) as MonitoringSourceSelectedNamespaceDetails)),
      ...{
        "namespaces": obj.namespaces
          ? obj.namespaces.map(item => {
              return model.MonitoringSourceSelectedNamespace.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
