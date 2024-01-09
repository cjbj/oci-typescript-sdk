/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Identifying information for the specified software source.
 */
export interface SoftwareSourceDetails {
  /**
   * The OCID of the software source.
   */
  "id": string;
  /**
   * Software source name.
   */
  "displayName"?: string;
  /**
   * Software source description.
   */
  "description"?: string;
  /**
   * Type of the software source.
   */
  "softwareSourceType"?: model.SoftwareSourceType;
}

export namespace SoftwareSourceDetails {
  export function getJsonObj(obj: SoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
