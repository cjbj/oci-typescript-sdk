/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Shipping address for rover devices.
 */
export interface ShippingAddress {
  /**
   * Addressee in shipping address.
   */
  "addressee": string;
  /**
   * CareOf for shipping address.
   */
  "careOf"?: string;
  /**
   * Address line 1.
   */
  "address1": string;
  /**
   * Address line 2.
   */
  "address2"?: string;
  /**
   * Address line 3.
   */
  "address3"?: string;
  /**
   * Address line 4.
   */
  "address4"?: string;
  /**
   * city or locality for shipping address.
   */
  "cityOrLocality": string;
  /**
   * state or region for shipping address.
   */
  "stateOrRegion": string;
  /**
   * zipcode for shipping address.
   */
  "zipcode": string;
  /**
   * country for shipping address.
   */
  "country": string;
  /**
   * recipient phone number.
   */
  "phoneNumber": string;
  /**
   * recipient email address.
   */
  "email"?: string;
}

export namespace ShippingAddress {
  export function getJsonObj(obj: ShippingAddress): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShippingAddress): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
