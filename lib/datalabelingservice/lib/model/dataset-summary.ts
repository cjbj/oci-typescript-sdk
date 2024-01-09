/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * A dataset summary is the representation returned in list views.  It is usually a subset of the full dataset entity and should not contain any potentially sensitive information.
 */
export interface DatasetSummary {
  /**
   * The OCID of the Dataset
   */
  "id": string;
  /**
   * A user-friendly display name for the resource.
   */
  "displayName"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * The time the the Dataset was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was last updated, in the timestamp format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
   * The state of a Dataset.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The annotation format name required for labeling records.
   */
  "annotationFormat": string;
  "datasetFormatDetails":
    | model.ImageDatasetFormatDetails
    | model.DocumentDatasetFormatDetails
    | model.TextDatasetFormatDetails;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The usage of system tag keys. These predefined keys are scoped to namespaces.
   * For example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DatasetSummary {
  export function getJsonObj(obj: DatasetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetFormatDetails": obj.datasetFormatDetails
          ? model.DatasetFormatDetails.getJsonObj(obj.datasetFormatDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatasetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetFormatDetails": obj.datasetFormatDetails
          ? model.DatasetFormatDetails.getDeserializedJsonObj(obj.datasetFormatDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
