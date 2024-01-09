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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The function used for the Functions target.
 * For configuration instructions, see
 * [To create a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/managingconnectors.htm#create).
 *
 */
export interface FunctionsTargetDetails extends model.TargetDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the function.
   *
   */
  "functionId": string;

  "kind": string;
}

export namespace FunctionsTargetDetails {
  export function getJsonObj(obj: FunctionsTargetDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TargetDetails.getJsonObj(obj) as FunctionsTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "functions";
  export function getDeserializedJsonObj(
    obj: FunctionsTargetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetDetails.getDeserializedJsonObj(obj) as FunctionsTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
}
