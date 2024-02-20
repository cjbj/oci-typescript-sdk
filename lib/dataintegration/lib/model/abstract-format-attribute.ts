/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The abstract format attribute.
 */
export interface AbstractFormatAttribute {
  /**
   * Defines whether a file pattern is supported.
   */
  "isFilePattern"?: boolean;

  "modelType": string;
}

export namespace AbstractFormatAttribute {
  export function getJsonObj(obj: AbstractFormatAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "AVRO_FORMAT":
          return model.AvroFormatAttribute.getJsonObj(
            <model.AvroFormatAttribute>(<object>jsonObj),
            true
          );
        case "JSON_FORMAT":
          return model.JsonFormatAttribute.getJsonObj(
            <model.JsonFormatAttribute>(<object>jsonObj),
            true
          );
        case "CSV_FORMAT":
          return model.CsvFormatAttribute.getJsonObj(
            <model.CsvFormatAttribute>(<object>jsonObj),
            true
          );
        case "PARQUET_FORMAT":
          return model.ParquetFormatAttribute.getJsonObj(
            <model.ParquetFormatAttribute>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AbstractFormatAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "AVRO_FORMAT":
          return model.AvroFormatAttribute.getDeserializedJsonObj(
            <model.AvroFormatAttribute>(<object>jsonObj),
            true
          );
        case "JSON_FORMAT":
          return model.JsonFormatAttribute.getDeserializedJsonObj(
            <model.JsonFormatAttribute>(<object>jsonObj),
            true
          );
        case "CSV_FORMAT":
          return model.CsvFormatAttribute.getDeserializedJsonObj(
            <model.CsvFormatAttribute>(<object>jsonObj),
            true
          );
        case "PARQUET_FORMAT":
          return model.ParquetFormatAttribute.getDeserializedJsonObj(
            <model.ParquetFormatAttribute>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
