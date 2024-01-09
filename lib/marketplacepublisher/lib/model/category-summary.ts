/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * The model for the category summary.
 */
export interface CategorySummary {
  /**
   * The name of the category.
   */
  "name": string;
  /**
   * The code of the category.
   */
  "code": string;
  /**
   * The product that the category belongs.
   */
  "productCode": string;
  /**
   * The current state of the category.
   */
  "lifecycleState": string;
  /**
    * The date and time the category was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2022-09-15T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the category was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2022-09-15T21:10:29.600Z`
* 
    */
  "timeUpdated": Date;
}

export namespace CategorySummary {
  export function getJsonObj(obj: CategorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CategorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
