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
 * The details of the Exadata storage server.
 */
export interface ExternalExadataStorageServer extends model.DbmResource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata storage server grid.
   */
  "storageGridId"?: string;
  /**
   * The make model of the Exadata storage server.
   */
  "makeModel"?: string;
  /**
   * The IP address of the Exadata storage server.
   */
  "ipAddress"?: string;
  /**
   * The CPU count of the Exadata storage server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCount"?: number;
  /**
   * The Exadata storage server memory size in GB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryGB"?: number;
  /**
   * The maximum hard disk IO operations per second of the Exadata storage server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxHardDiskIOPS"?: number;
  /**
   * The maximum hard disk IO throughput in MB/s of the Exadata storage server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxHardDiskThroughput"?: number;
  /**
   * The maximum flash disk IO operations per second of the Exadata storage server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxFlashDiskIOPS"?: number;
  /**
   * The maximum flash disk IO throughput in MB/s of the Exadata storage server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxFlashDiskThroughput"?: number;
  "connector"?: model.ExternalExadataStorageConnectorSummary;

  "resourceType": string;
}

export namespace ExternalExadataStorageServer {
  export function getJsonObj(obj: ExternalExadataStorageServer, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getJsonObj(obj) as ExternalExadataStorageServer)),
      ...{
        "connector": obj.connector
          ? model.ExternalExadataStorageConnectorSummary.getJsonObj(obj.connector)
          : undefined
      }
    };

    return jsonObj;
  }
  export const resourceType = "STORAGE_SERVER";
  export function getDeserializedJsonObj(
    obj: ExternalExadataStorageServer,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getDeserializedJsonObj(obj) as ExternalExadataStorageServer)),
      ...{
        "connector": obj.connector
          ? model.ExternalExadataStorageConnectorSummary.getDeserializedJsonObj(obj.connector)
          : undefined
      }
    };

    return jsonObj;
  }
}
