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
* An object representing an asynchronous work flow.
* <p>
Many of the API requests you use to create and configure
* service connectors do not take effect immediately. In these
* cases, the request spawns an asynchronous work flow to fulfill
* the request. WorkRequest objects provide visibility for
* in-progress work flows. For more information about work
* requests, see
* [Viewing the State of a Work Request](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/workrequests.htm).
* 
*/
export interface WorkRequest {
  /**
   * The type of action the work request represents.
   *
   */
  "operationType": model.OperationType;
  /**
   * Status of current work request.
   *
   */
  "status": model.OperationStatus;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment
   * containing the work request.
   *
   */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   *
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the request completed.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time when the request was created.
   * Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time when the request was started.
   * Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time when the object finished.
   * Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
