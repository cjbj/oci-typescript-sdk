/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for international market pricing.
 */
export interface InternationalMarketPrice {
  /**
   * The currency of the pricing model.
   */
  "currencyCode": model.PricingCurrencyEnum;
  /**
   * The symbol of the currency
   */
  "currencySymbol"?: string;
  /**
   * The pricing rate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rate": number;
}

export namespace InternationalMarketPrice {
  export function getJsonObj(obj: InternationalMarketPrice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InternationalMarketPrice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
