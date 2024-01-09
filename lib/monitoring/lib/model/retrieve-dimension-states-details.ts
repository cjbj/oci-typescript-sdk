/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * The configuration details for retrieving the alarm state entries.
 * Filter retrieved alarm state entries by status value and dimension key-value pairs.
 *
 */
export interface RetrieveDimensionStatesDetails {
  /**
   * A filter to return only alarm state entries that match the exact set of specified dimension key-value pairs.
   * If you specify `\"availabilityDomain\": \"phx-ad-1\"` but the alarm state entry corresponds to the set `\"availabilityDomain\": \"phx-ad-1\"`
   * and `\"resourceId\": \"ocid1.instance.region1.phx.exampleuniqueID\"`, then no results are returned.
   *
   */
  "dimensionFilters"?: { [key: string]: string };
  /**
   * A filter to return only alarm state entries that match the status value.
   * Example: `FIRING`
   *
   */
  "status"?: string;
}

export namespace RetrieveDimensionStatesDetails {
  export function getJsonObj(obj: RetrieveDimensionStatesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RetrieveDimensionStatesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
