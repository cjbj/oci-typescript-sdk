/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Attributes of fleet's export status.
 */
export interface ExportStatus {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the fleet.
   *
   */
  "fleetId": string;
  /**
   * The date and time of the last export run.
   */
  "timeLastRun": Date;
  /**
   * The date and time of the next export run.
   */
  "timeNextRun": Date;
  /**
   * The status of the latest export run.
   *
   */
  "latestRunStatus": model.ExportRunStatus;
}

export namespace ExportStatus {
  export function getJsonObj(obj: ExportStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
