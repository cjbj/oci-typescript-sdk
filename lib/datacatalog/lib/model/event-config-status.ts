/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Enum representing whether or not to emit an event when a relevant action (e.g. modifying a custom property value) is performed by the user on this type.
 * ENABLED - Event is emitted.
 * DISABLED - Event is not emitted.
 *
 **/
export enum EventConfigStatus {
  Enabled = "ENABLED",
  Disabled = "DISABLED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace EventConfigStatus {
  export function getJsonObj(obj: EventConfigStatus): EventConfigStatus {
    return obj;
  }
  export function getDeserializedJsonObj(obj: EventConfigStatus): EventConfigStatus {
    return obj;
  }
}
