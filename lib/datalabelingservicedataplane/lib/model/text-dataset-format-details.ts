/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
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
 * It indicates the dataset is comprised of TXT files.
 */
export interface TextDatasetFormatDetails extends model.DatasetFormatDetails {
  "textFileTypeMetadata"?: model.DelimitedFileTypeMetadata;

  "formatType": string;
}

export namespace TextDatasetFormatDetails {
  export function getJsonObj(obj: TextDatasetFormatDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatasetFormatDetails.getJsonObj(obj) as TextDatasetFormatDetails)),
      ...{
        "textFileTypeMetadata": obj.textFileTypeMetadata
          ? model.TextFileTypeMetadata.getJsonObj(obj.textFileTypeMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export const formatType = "TEXT";
  export function getDeserializedJsonObj(
    obj: TextDatasetFormatDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatasetFormatDetails.getDeserializedJsonObj(obj) as TextDatasetFormatDetails)),
      ...{
        "textFileTypeMetadata": obj.textFileTypeMetadata
          ? model.TextFileTypeMetadata.getDeserializedJsonObj(obj.textFileTypeMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
