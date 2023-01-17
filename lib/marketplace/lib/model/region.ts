/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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

/**
 * The model for regions supported by a listing and package.
 */
export interface Region {
  /**
   * The name of the region.
   */
  "name"?: string;
  /**
   * The code of the region.
   */
  "code"?: string;
  /**
   * Countries in the region.
   */
  "countries"?: Array<model.Item>;
}

export namespace Region {
  export function getJsonObj(obj: Region): object {
    const jsonObj = {
      ...obj,
      ...{
        "countries": obj.countries
          ? obj.countries.map(item => {
              return model.Item.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Region): object {
    const jsonObj = {
      ...obj,
      ...{
        "countries": obj.countries
          ? obj.countries.map(item => {
              return model.Item.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
