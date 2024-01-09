/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Potential fields to include into response model to summarize applications endpoints.
 **/
export enum SummarizeApplicationUsageFields {
  ApproximateJreCount = "approximateJreCount",
  ApproximateInstallationCount = "approximateInstallationCount",
  ApproximateManagedInstanceCount = "approximateManagedInstanceCount"
}

export namespace SummarizeApplicationUsageFields {
  export function getJsonObj(
    obj: SummarizeApplicationUsageFields
  ): SummarizeApplicationUsageFields {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeApplicationUsageFields
  ): SummarizeApplicationUsageFields {
    return obj;
  }
}
