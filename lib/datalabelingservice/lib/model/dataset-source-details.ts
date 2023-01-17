/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * This allows the customer to specify the source of the dataset.
 */
export interface DatasetSourceDetails {
  "sourceType": string;
}

export namespace DatasetSourceDetails {
  export function getJsonObj(obj: DatasetSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageSourceDetails.getJsonObj(
            <model.ObjectStorageSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatasetSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "OBJECT_STORAGE":
          return model.ObjectStorageSourceDetails.getDeserializedJsonObj(
            <model.ObjectStorageSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
}
