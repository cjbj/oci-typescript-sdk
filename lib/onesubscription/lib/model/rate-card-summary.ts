/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * Rate Card Summary
 *
 */
export interface RateCardSummary {
  /**
   * SPM internal Subscribed Service ID
   *
   */
  "subscribedServiceId"?: string;
  "product": model.RateCardProduct;
  /**
   * Rate card start date
   *
   */
  "timeStart"?: Date;
  /**
   * Rate card end date
   *
   */
  "timeEnd"?: Date;
  /**
   * Rate card net unit price
   *
   */
  "netUnitPrice": string;
  /**
   * Rate card discretionary discount percentage
   *
   */
  "discretionaryDiscountPercentage"?: string;
  /**
   * Rate card overage price
   *
   */
  "overagePrice": string;
  /**
   * Rate card price tier flag
   *
   */
  "isTier"?: boolean;
  "currency"?: model.SubscriptionCurrency;
  /**
   * List of tiered rate card prices
   *
   */
  "rateCardTiers"?: Array<model.RateCardTier>;
}

export namespace RateCardSummary {
  export function getJsonObj(obj: RateCardSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product ? model.RateCardProduct.getJsonObj(obj.product) : undefined,

        "currency": obj.currency ? model.SubscriptionCurrency.getJsonObj(obj.currency) : undefined,
        "rateCardTiers": obj.rateCardTiers
          ? obj.rateCardTiers.map(item => {
              return model.RateCardTier.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RateCardSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product
          ? model.RateCardProduct.getDeserializedJsonObj(obj.product)
          : undefined,

        "currency": obj.currency
          ? model.SubscriptionCurrency.getDeserializedJsonObj(obj.currency)
          : undefined,
        "rateCardTiers": obj.rateCardTiers
          ? obj.rateCardTiers.map(item => {
              return model.RateCardTier.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
