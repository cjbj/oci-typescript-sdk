/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The information needed to create a new model.
 */
export interface CreateModelDetails {
  /**
   * A human-friendly name for the model, which can be changed.
   */
  "displayName"?: string;
  /**
   * An optional description of the model.
   */
  "description"?: string;
  /**
   * The model version
   */
  "modelVersion"?: string;
  /**
   * Which type of Vision model this is.
   */
  "modelType": string;
  /**
   * The compartment identifier.
   */
  "compartmentId": string;
  /**
   * Set to true when experimenting with a new model type or dataset, so the model training is quick, with a predefined low number of passes through the training data.
   */
  "isQuickMode"?: boolean;
  /**
   * The maximum model training duration in hours, expressed as a decimal fraction. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTrainingDurationInHours"?: number;
  "trainingDataset": model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "testingDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "validationDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project that contains the model.
   */
  "projectId": string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateModelDetails {
  export function getJsonObj(obj: CreateModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "trainingDataset": obj.trainingDataset
          ? model.Dataset.getJsonObj(obj.trainingDataset)
          : undefined,
        "testingDataset": obj.testingDataset
          ? model.Dataset.getJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.Dataset.getJsonObj(obj.validationDataset)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "trainingDataset": obj.trainingDataset
          ? model.Dataset.getDeserializedJsonObj(obj.trainingDataset)
          : undefined,
        "testingDataset": obj.testingDataset
          ? model.Dataset.getDeserializedJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.Dataset.getDeserializedJsonObj(obj.validationDataset)
          : undefined
      }
    };

    return jsonObj;
  }
}
