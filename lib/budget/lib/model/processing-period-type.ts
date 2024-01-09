/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts. For more information, see [Budgets Overview](/iaas/Content/Billing/Concepts/budgetsoverview.htm).
 * OpenAPI spec version: 20190111
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
 * The budget processing period type. Valid values are INVOICE, MONTH, and SINGLE_USE.
 **/
export enum ProcessingPeriodType {
  Invoice = "INVOICE",
  Month = "MONTH",
  SingleUse = "SINGLE_USE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ProcessingPeriodType {
  export function getJsonObj(obj: ProcessingPeriodType): ProcessingPeriodType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ProcessingPeriodType): ProcessingPeriodType {
    return obj;
  }
}
