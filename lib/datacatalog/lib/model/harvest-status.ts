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
 * Harvest state of the object indicates the completeness of the metadata definition of the object in the catalog.
 * COMPLETE   - The object's metadata is harvested successfully including properties, relationships, and its children.
 * ERROR      - There is an error during the harvest process. This could be due to failure in the harvest process, or
 *              invalid or currupted data.
 * IN-PROGRESS - The harvest is currently in progress. This might imply a successful shallow harvest and a deep harvest
 *              is currently in progress.
 * DEFERRED   - The dependencies are incomplete and the resolution of the metadata is deferred until all information
 *              is available for the object.
 *
 **/
export enum HarvestStatus {
  Complete = "COMPLETE",
  Error = "ERROR",
  InProgress = "IN_PROGRESS",
  Deferred = "DEFERRED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace HarvestStatus {
  export function getJsonObj(obj: HarvestStatus): HarvestStatus {
    return obj;
  }
  export function getDeserializedJsonObj(obj: HarvestStatus): HarvestStatus {
    return obj;
  }
}
