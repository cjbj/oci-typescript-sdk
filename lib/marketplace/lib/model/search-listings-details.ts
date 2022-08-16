/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A base request type that contains common criteria for Marketplace Search Listings details.
 *
 */
export interface SearchListingsDetails {
  /**
   * The type of matching context returned in the response. If you specify HIGHLIGHTS, then the service will highlight fragments in its response. The default value is NONE.
   *
   */
  "matchingContextType"?: model.MatchingContextTypeEnum;

  "type": string;
}

export namespace SearchListingsDetails {
  export function getJsonObj(obj: SearchListingsDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "Structured":
          return model.StructuredSearchDetails.getJsonObj(
            <model.StructuredSearchDetails>(<object>jsonObj),
            true
          );
        case "FreeText":
          return model.FreeTextSearchDetails.getJsonObj(
            <model.FreeTextSearchDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SearchListingsDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "Structured":
          return model.StructuredSearchDetails.getDeserializedJsonObj(
            <model.StructuredSearchDetails>(<object>jsonObj),
            true
          );
        case "FreeText":
          return model.FreeTextSearchDetails.getDeserializedJsonObj(
            <model.FreeTextSearchDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
