/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The summary of the Exadata system infrastructure discovery.
 */
export interface ExternalExadataInfrastructureDiscoverySummary extends model.EntityDiscovered {
  /**
   * The size of the Exadata infrastructure.
   */
  "rackSize"?: ExternalExadataInfrastructureDiscoverySummary.RackSize;

  "entityType": string;
}

export namespace ExternalExadataInfrastructureDiscoverySummary {
  export enum RackSize {
    Full = "FULL",
    Half = "HALF",
    Quarter = "QUARTER",
    Eighth = "EIGHTH"
  }

  export function getJsonObj(
    obj: ExternalExadataInfrastructureDiscoverySummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EntityDiscovered.getJsonObj(
            obj
          ) as ExternalExadataInfrastructureDiscoverySummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entityType = "INFRASTRUCTURE_DISCOVER_SUMMARY";
  export function getDeserializedJsonObj(
    obj: ExternalExadataInfrastructureDiscoverySummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EntityDiscovered.getDeserializedJsonObj(
            obj
          ) as ExternalExadataInfrastructureDiscoverySummary)),
      ...{}
    };

    return jsonObj;
  }
}
