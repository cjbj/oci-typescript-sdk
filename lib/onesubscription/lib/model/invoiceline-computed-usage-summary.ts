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
 * Computed Usage Summary object
 *
 */
export interface InvoicelineComputedUsageSummary {
  "parentProduct": model.InvoicingProduct;
  "product"?: model.InvoicingProduct;
  /**
   * Total Quantity that was used for computation
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantity": number;
  /**
   * Net Unit Price for the product in consideration, price actual.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "netUnitPrice": number;
  /**
   * Metered Service date.
   *
   */
  "timeMeteredOn": Date;
  /**
   * Usage compute type in SPM.
   *
   */
  "type": InvoicelineComputedUsageSummary.Type;
  /**
   * Sum of Usage/Service Billing Line net Amount
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cost"?: number;
  /**
   * Computed Line Amount rounded.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "costRounded": number;
}

export namespace InvoicelineComputedUsageSummary {
  export enum Type {
    Promotion = "PROMOTION",
    DoNotBill = "DO_NOT_BILL",
    Usage = "USAGE",
    Commit = "COMMIT",
    Overage = "OVERAGE",
    PayAsYouGo = "PAY_AS_YOU_GO",
    MonthlyMinimum = "MONTHLY_MINIMUM",
    DelayedUsageInvoiceTiming = "DELAYED_USAGE_INVOICE_TIMING",
    DelayedUsageCommitmentExp = "DELAYED_USAGE_COMMITMENT_EXP",
    OnAccountCredit = "ON_ACCOUNT_CREDIT",
    ServiceCredit = "SERVICE_CREDIT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InvoicelineComputedUsageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentProduct": obj.parentProduct
          ? model.InvoicingProduct.getJsonObj(obj.parentProduct)
          : undefined,
        "product": obj.product ? model.InvoicingProduct.getJsonObj(obj.product) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InvoicelineComputedUsageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentProduct": obj.parentProduct
          ? model.InvoicingProduct.getDeserializedJsonObj(obj.parentProduct)
          : undefined,
        "product": obj.product
          ? model.InvoicingProduct.getDeserializedJsonObj(obj.product)
          : undefined
      }
    };

    return jsonObj;
  }
}
