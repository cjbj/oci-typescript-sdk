/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.017
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface UpdateTransferPackageDetails {
  "originalPackageDeliveryTrackingNumber"?: string;
  "returnPackageDeliveryTrackingNumber"?: string;
  "packageDeliveryVendor"?: string;
  "lifecycleState"?: UpdateTransferPackageDetails.LifecycleState;
}

export namespace UpdateTransferPackageDetails {
  export enum LifecycleState {
    Shipping = "SHIPPING",
    Cancelled = "CANCELLED"
  }

  export function getJsonObj(obj: UpdateTransferPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateTransferPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
