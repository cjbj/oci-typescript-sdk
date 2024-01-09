/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * Summary of the line item in an assigned subscription.
 */
export interface AssignedSubscriptionLineItemSummary {
  /**
   * Subscription line item identifier.
   */
  "id": string;
  /**
   * Product code.
   */
  "productCode": string;
  /**
   * Product number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantity": number;
  /**
   * Billing model supported by the associated line item.
   */
  "billingModel": model.BillingModel;
  /**
   * The time the subscription item and associated products should start. An RFC 3339 formatted date and time string.
   */
  "timeStarted": Date;
  /**
   * The time the subscription item and associated products should end. An RFC 3339 formatted date and time string.
   */
  "timeEnded": Date;
}

export namespace AssignedSubscriptionLineItemSummary {
  export function getJsonObj(obj: AssignedSubscriptionLineItemSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssignedSubscriptionLineItemSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
