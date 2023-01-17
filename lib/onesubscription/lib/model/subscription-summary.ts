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
 * Subscription summary
 *
 */
export interface SubscriptionSummary {
  /**
   * Status of the plan
   *
   */
  "status"?: string;
  /**
   * Represents the date when the first service of the subscription was activated
   *
   */
  "timeStart"?: Date;
  /**
   * Represents the date when the last service of the subscription ends
   *
   */
  "timeEnd"?: Date;
  "currency"?: model.SubscriptionCurrency;
  /**
   * Customer friendly service name provided by PRG
   *
   */
  "serviceName"?: string;
  /**
   * Hold reason of the plan
   *
   */
  "holdReason"?: string;
  /**
   * Represents the date of the hold release
   *
   */
  "timeHoldReleaseEta"?: Date;
  /**
   * List of Subscribed Services of the plan
   *
   */
  "subscribedServices"?: Array<model.SubscriptionSubscribedService>;
}

export namespace SubscriptionSummary {
  export function getJsonObj(obj: SubscriptionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.SubscriptionCurrency.getJsonObj(obj.currency) : undefined,

        "subscribedServices": obj.subscribedServices
          ? obj.subscribedServices.map(item => {
              return model.SubscriptionSubscribedService.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency
          ? model.SubscriptionCurrency.getDeserializedJsonObj(obj.currency)
          : undefined,

        "subscribedServices": obj.subscribedServices
          ? obj.subscribedServices.map(item => {
              return model.SubscriptionSubscribedService.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
