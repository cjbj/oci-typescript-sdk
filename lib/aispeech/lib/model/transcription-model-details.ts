/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Model details.
 */
export interface TranscriptionModelDetails {
  /**
   * Domain for input files.
   */
  "domain"?: TranscriptionModelDetails.Domain;
  /**
   * Locale value as per given in [https://datatracker.ietf.org/doc/html/rfc5646].
   * - en-US: English - United States
   * - es-ES: Spanish - Spain
   * - pt-BR: Portuguese - Brazil
   * - en-GB: English - Great Britain
   * - en-AU: English - Australia
   * - en-IN: English - India
   * - hi-IN: Hindi - India
   * - fr-FR: French - France
   * - de-DE: German - Germany
   * - it-IT: Italian - Italy
   *
   */
  "languageCode"?: TranscriptionModelDetails.LanguageCode;
  "transcriptionSettings"?: model.TranscriptionSettings;
}

export namespace TranscriptionModelDetails {
  export enum Domain {
    Generic = "GENERIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LanguageCode {
    EnUs = "en-US",
    EsEs = "es-ES",
    PtBr = "pt-BR",
    EnGb = "en-GB",
    EnAu = "en-AU",
    EnIn = "en-IN",
    HiIn = "hi-IN",
    FrFr = "fr-FR",
    DeDe = "de-DE",
    ItIt = "it-IT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TranscriptionModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "transcriptionSettings": obj.transcriptionSettings
          ? model.TranscriptionSettings.getJsonObj(obj.transcriptionSettings)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TranscriptionModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "transcriptionSettings": obj.transcriptionSettings
          ? model.TranscriptionSettings.getDeserializedJsonObj(obj.transcriptionSettings)
          : undefined
      }
    };

    return jsonObj;
  }
}
