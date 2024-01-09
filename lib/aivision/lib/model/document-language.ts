/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The language of the document, abbreviated according to ISO 639-2.
 **/
export enum DocumentLanguage {
  Eng = "ENG",
  Ces = "CES",
  Dan = "DAN",
  Nld = "NLD",
  Fin = "FIN",
  Fra = "FRA",
  Deu = "DEU",
  Ell = "ELL",
  Hun = "HUN",
  Ita = "ITA",
  Nor = "NOR",
  Pol = "POL",
  Por = "POR",
  Ron = "RON",
  Rus = "RUS",
  Slk = "SLK",
  Spa = "SPA",
  Swe = "SWE",
  Tur = "TUR",
  Ara = "ARA",
  ChiSim = "CHI_SIM",
  Hin = "HIN",
  Jpn = "JPN",
  Kor = "KOR",
  Others = "OTHERS",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DocumentLanguage {
  export function getJsonObj(obj: DocumentLanguage): DocumentLanguage {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DocumentLanguage): DocumentLanguage {
    return obj;
  }
}
