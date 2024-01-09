/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Description of the hydration server volume.
 */
export interface HydratedVolume {
  /**
   * ID of the vCenter disk obtained from Inventory.
   */
  "uuid": string;
  /**
   * ID of the hydration server volume
   */
  "volumeId": string;
  /**
   * The hydration server volume type
   */
  "volumeType": HydratedVolume.VolumeType;
  /**
   * ID of the unmodified volume
   */
  "unmodifiedVolumeId": string;
}

export namespace HydratedVolume {
  export enum VolumeType {
    Boot = "BOOT",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HydratedVolume): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HydratedVolume): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
