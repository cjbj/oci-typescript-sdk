/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for a summary of an end user license agreement.
 */
export interface AgreementSummary {
  /**
   * The unique identifier for the agreement.
   */
  "id"?: string;
  /**
   * The content URL of the agreement.
   */
  "contentUrl"?: string;
  /**
   * Who authored the agreement.
   */
  "author"?: AgreementSummary.Author;
  /**
   * Textual prompt to read and accept the agreement.
   */
  "prompt"?: string;
}

export namespace AgreementSummary {
  export enum Author {
    Oracle = "ORACLE",
    Partner = "PARTNER",
    Pii = "PII",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AgreementSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AgreementSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
