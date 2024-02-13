/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * Trained Model Metrics.
 */
export interface ModelMetrics {
  "datasetSummary"?: model.DatasetSummary;

  "modelType": string;
}

export namespace ModelMetrics {
  export function getJsonObj(obj: ModelMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetSummary": obj.datasetSummary
          ? model.DatasetSummary.getJsonObj(obj.datasetSummary)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "DOCUMENT_CLASSIFICATION":
          return model.DocumentClassificationModelMetrics.getJsonObj(
            <model.DocumentClassificationModelMetrics>(<object>jsonObj),
            true
          );
        case "KEY_VALUE_EXTRACTION":
          return model.KeyValueDetectionModelMetrics.getJsonObj(
            <model.KeyValueDetectionModelMetrics>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetSummary": obj.datasetSummary
          ? model.DatasetSummary.getDeserializedJsonObj(obj.datasetSummary)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "DOCUMENT_CLASSIFICATION":
          return model.DocumentClassificationModelMetrics.getDeserializedJsonObj(
            <model.DocumentClassificationModelMetrics>(<object>jsonObj),
            true
          );
        case "KEY_VALUE_EXTRACTION":
          return model.KeyValueDetectionModelMetrics.getDeserializedJsonObj(
            <model.KeyValueDetectionModelMetrics>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
