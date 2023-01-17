/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Unit details of a data object column of POWER unit category.
 */
export interface DataObjectPowerColumnUnit extends model.DataObjectColumnUnit {
  /**
   * Power unit.
   */
  "unit"?: DataObjectPowerColumnUnit.Unit;

  "unitCategory": string;
}

export namespace DataObjectPowerColumnUnit {
  export enum Unit {
    Amp = "AMP",
    Watt = "WATT",
    KiloWatt = "KILO_WATT",
    MegaWatt = "MEGA_WATT",
    GigaWatt = "GIGA_WATT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataObjectPowerColumnUnit, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectColumnUnit.getJsonObj(obj) as DataObjectPowerColumnUnit)),
      ...{}
    };

    return jsonObj;
  }
  export const unitCategory = "POWER";
  export function getDeserializedJsonObj(
    obj: DataObjectPowerColumnUnit,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectColumnUnit.getDeserializedJsonObj(obj) as DataObjectPowerColumnUnit)),
      ...{}
    };

    return jsonObj;
  }
}
