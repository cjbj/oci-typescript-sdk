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
 * The metadata about the model.
 */
export interface ModelSummary {
  /**
   * A unique identifier that is immutable after creation.
   */
  "id": string;
  /**
   * A human-friendly name for the model, which can be changed.
   */
  "displayName"?: string;
  /**
   * An optional description of the model.
   */
  "description"?: string;
  /**
   * The compartment identifier.
   */
  "compartmentId": string;
  /**
   * The type of the Document model.
   */
  "modelType": string;
  /**
   * The version of the model.
   */
  "modelVersion": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project that contains the model.
   */
  "projectId": string;
  /**
   * When the model was created, as an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * When the model was modified, as an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the model.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail, that can provide actionable information if training failed.
   */
  "lifecycleDetails"?: string;
  /**
   * The precision of the trained model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "precision"?: number;
  /**
   * The tenancy id of the model.
   */
  "tenancyId"?: string;
  /**
   * the alias name of the model.
   */
  "aliasName"?: string;
  "trainingDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "testingDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "validationDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) list of active custom Key Value models that need to be composed.
   */
  "componentModels"?: Array<model.ComponentModel>;
  /**
   * Set to true when the model is created by using multiple key value extraction models.
   */
  "isComposedModel"?: boolean;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * For example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ModelSummary {
  export function getJsonObj(obj: ModelSummary): object {
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
          : undefined,
        "componentModels": obj.componentModels
          ? obj.componentModels.map(item => {
              return model.ComponentModel.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelSummary): object {
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
          : undefined,
        "componentModels": obj.componentModels
          ? obj.componentModels.map(item => {
              return model.ComponentModel.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
