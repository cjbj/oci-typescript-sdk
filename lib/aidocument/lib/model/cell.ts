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
 * A single cell in a table.
 */
export interface Cell {
  /**
   * The text recognized in the cell.
   */
  "text": string;
  /**
   * The index of the cell inside the row. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rowIndex": number;
  /**
   * The index of the cell inside the column. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "columnIndex": number;
  /**
   * The confidence score between 0 and 1. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence": number;
  "boundingPolygon": model.BoundingPolygon;
  /**
   * The words detected in the cell.
   */
  "wordIndexes": Array<number>;
}

export namespace Cell {
  export function getJsonObj(obj: Cell): object {
    const jsonObj = {
      ...obj,
      ...{
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Cell): object {
    const jsonObj = {
      ...obj,
      ...{
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getDeserializedJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
}
