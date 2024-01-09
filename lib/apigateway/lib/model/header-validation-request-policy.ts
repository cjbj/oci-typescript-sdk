/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Validate the HTTP headers on the incoming API requests on a specific route.
 */
export interface HeaderValidationRequestPolicy {
  "headers"?: Array<model.HeaderValidationItem>;
  /**
    * Validation behavior mode.
* <p>
In `ENFORCING` mode, upon a validation failure, the request will be rejected with a 4xx response
* and not sent to the backend.
* <p>
In `PERMISSIVE` mode, the result of the validation will be exposed as metrics while the request
* will follow the normal path.
* <p>
`DISABLED` type turns the validation off.
* 
    */
  "validationMode"?: HeaderValidationRequestPolicy.ValidationMode;
}

export namespace HeaderValidationRequestPolicy {
  export enum ValidationMode {
    Enforcing = "ENFORCING",
    Permissive = "PERMISSIVE",
    Disabled = "DISABLED"
  }

  export function getJsonObj(obj: HeaderValidationRequestPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "headers": obj.headers
          ? obj.headers.map(item => {
              return model.HeaderValidationItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HeaderValidationRequestPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "headers": obj.headers
          ? obj.headers.map(item => {
              return model.HeaderValidationItem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
