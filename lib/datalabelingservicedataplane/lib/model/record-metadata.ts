/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
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
 * Collection of record's metadata.  This can be, for example, the height, width or depth of image for an image record.
 *
 */
export interface RecordMetadata {
  "recordType": string;
}

export namespace RecordMetadata {
  export function getJsonObj(obj: RecordMetadata): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "recordType" in obj && obj.recordType) {
      switch (obj.recordType) {
        case "DOCUMENT_METADATA":
          return model.DocumentMetadata.getJsonObj(<model.DocumentMetadata>(<object>jsonObj), true);
        case "IMAGE_METADATA":
          return model.ImageMetadata.getJsonObj(<model.ImageMetadata>(<object>jsonObj), true);
        case "TEXT_METADATA":
          return model.TextMetadata.getJsonObj(<model.TextMetadata>(<object>jsonObj), true);
        default:
          common.logger.info(`Unknown value for: ${obj.recordType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecordMetadata): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "recordType" in obj && obj.recordType) {
      switch (obj.recordType) {
        case "DOCUMENT_METADATA":
          return model.DocumentMetadata.getDeserializedJsonObj(
            <model.DocumentMetadata>(<object>jsonObj),
            true
          );
        case "IMAGE_METADATA":
          return model.ImageMetadata.getDeserializedJsonObj(
            <model.ImageMetadata>(<object>jsonObj),
            true
          );
        case "TEXT_METADATA":
          return model.TextMetadata.getDeserializedJsonObj(
            <model.TextMetadata>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.recordType}`);
      }
    }
    return jsonObj;
  }
}
