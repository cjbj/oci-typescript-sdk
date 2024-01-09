/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details used to generate a new security assessment report.
 */
export interface GenerateSecurityAssessmentReportDetails {
  /**
   * Format of the report.
   */
  "format": GenerateSecurityAssessmentReportDetails.Format;
}

export namespace GenerateSecurityAssessmentReportDetails {
  export enum Format {
    Pdf = "PDF",
    Xls = "XLS"
  }

  export function getJsonObj(obj: GenerateSecurityAssessmentReportDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateSecurityAssessmentReportDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
