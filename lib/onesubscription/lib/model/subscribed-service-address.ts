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
 * Address.
 *
 */
export interface SubscribedServiceAddress {
  "location"?: model.SubscribedServiceLocation;
  /**
   * Address name identifier.
   *
   */
  "name"?: string;
  /**
   * Phone.
   *
   */
  "phone"?: string;
  /**
   * Identify as the customer shipping address.
   *
   */
  "isBillTo"?: boolean;
  /**
   * Identify as the customer invoicing address.
   *
   */
  "isShipTo"?: boolean;
  /**
   * Bill to site use Id.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "billSiteUseId"?: number;
  /**
   * Service to site use Id.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "service2SiteUseId"?: number;
  /**
   * TCA customer account site Id.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "tcaCustAcctSiteId"?: number;
  /**
   * Party site number.
   *
   */
  "tcaPartySiteNumber"?: string;
}

export namespace SubscribedServiceAddress {
  export function getJsonObj(obj: SubscribedServiceAddress): object {
    const jsonObj = {
      ...obj,
      ...{
        "location": obj.location
          ? model.SubscribedServiceLocation.getJsonObj(obj.location)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscribedServiceAddress): object {
    const jsonObj = {
      ...obj,
      ...{
        "location": obj.location
          ? model.SubscribedServiceLocation.getDeserializedJsonObj(obj.location)
          : undefined
      }
    };

    return jsonObj;
  }
}
