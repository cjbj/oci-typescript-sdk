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
 * The information about new Transcription Job.
 */
export interface CreateTranscriptionJobDetails {
  /**
   * A user-friendly display name for the job.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the job.
   */
  "compartmentId": string;
  /**
   * A short description of the job.
   */
  "description"?: string;
  /**
   * Transcription Format. By default, the JSON format is used.
   */
  "additionalTranscriptionFormats"?: Array<
    CreateTranscriptionJobDetails.AdditionalTranscriptionFormats
  >;
  "modelDetails"?: model.TranscriptionModelDetails;
  "normalization"?: model.TranscriptionNormalization;
  "inputLocation": model.ObjectListFileInputLocation | model.ObjectListInlineInputLocation;
  "outputLocation": model.OutputLocation;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateTranscriptionJobDetails {
  export enum AdditionalTranscriptionFormats {
    Srt = "SRT"
  }

  export function getJsonObj(obj: CreateTranscriptionJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.TranscriptionModelDetails.getJsonObj(obj.modelDetails)
          : undefined,
        "normalization": obj.normalization
          ? model.TranscriptionNormalization.getJsonObj(obj.normalization)
          : undefined,
        "inputLocation": obj.inputLocation
          ? model.InputLocation.getJsonObj(obj.inputLocation)
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTranscriptionJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "modelDetails": obj.modelDetails
          ? model.TranscriptionModelDetails.getDeserializedJsonObj(obj.modelDetails)
          : undefined,
        "normalization": obj.normalization
          ? model.TranscriptionNormalization.getDeserializedJsonObj(obj.normalization)
          : undefined,
        "inputLocation": obj.inputLocation
          ? model.InputLocation.getDeserializedJsonObj(obj.inputLocation)
          : undefined,
        "outputLocation": obj.outputLocation
          ? model.OutputLocation.getDeserializedJsonObj(obj.outputLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
