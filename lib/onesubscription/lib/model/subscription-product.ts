/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * Product description
 *
 */
export interface SubscriptionProduct {
  /**
   * Product part numner
   *
   */
  "partNumber": string;
  /**
   * Product name
   *
   */
  "name": string;
  /**
   * Unit of measure
   *
   */
  "unitOfMeasure": string;
  /**
   * Product provisioning group
   *
   */
  "provisioningGroup"?: string;
}

export namespace SubscriptionProduct {
  export function getJsonObj(obj: SubscriptionProduct): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionProduct): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
