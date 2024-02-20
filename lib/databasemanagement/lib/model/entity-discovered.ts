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
 * The details of the base entity discovery.
 */
export interface EntityDiscovered {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the entity discovered.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the agent used for monitoring.
   */
  "agentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the associated connector.
   */
  "connectorId"?: string;
  /**
   * The name of the entity.
   */
  "displayName": string;
  /**
   * The version of the entity.
   */
  "version"?: string;
  /**
   * The internal identifier of the entity.
   */
  "internalId"?: string;
  /**
   * The status of the entity.
   */
  "status"?: string;
  /**
   * The status of the entity discovery.
   */
  "discoverStatus"?: EntityDiscovered.DiscoverStatus;
  /**
   * The error code of the discovery.
   */
  "discoverErrorCode"?: string;
  /**
   * The error message of the discovery.
   */
  "discoverErrorMsg"?: string;

  "entityType": string;
}

export namespace EntityDiscovered {
  export enum DiscoverStatus {
    PrevDiscovered = "PREV_DISCOVERED",
    NewDiscovered = "NEW_DISCOVERED",
    NotFound = "NOT_FOUND",
    Discovering = "DISCOVERING"
  }

  export function getJsonObj(obj: EntityDiscovered): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityType" in obj && obj.entityType) {
      switch (obj.entityType) {
        case "STORAGE_GRID_DISCOVER_SUMMARY":
          return model.ExternalStorageGridDiscoverySummary.getJsonObj(
            <model.ExternalStorageGridDiscoverySummary>(<object>jsonObj),
            true
          );
        case "INFRASTRUCTURE_DISCOVER":
          return model.ExternalExadataInfrastructureDiscovery.getJsonObj(
            <model.ExternalExadataInfrastructureDiscovery>(<object>jsonObj),
            true
          );
        case "DATABASE_SYSTEM_DISCOVER_SUMMARY":
          return model.ExternalDatabaseSystemDiscoverySummary.getJsonObj(
            <model.ExternalDatabaseSystemDiscoverySummary>(<object>jsonObj),
            true
          );
        case "INFRASTRUCTURE_DISCOVER_SUMMARY":
          return model.ExternalExadataInfrastructureDiscoverySummary.getJsonObj(
            <model.ExternalExadataInfrastructureDiscoverySummary>(<object>jsonObj),
            true
          );
        case "STORAGE_SERVER_DISCOVER_SUMMARY":
          return model.ExternalStorageServerDiscoverySummary.getJsonObj(
            <model.ExternalStorageServerDiscoverySummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entityType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityDiscovered): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityType" in obj && obj.entityType) {
      switch (obj.entityType) {
        case "STORAGE_GRID_DISCOVER_SUMMARY":
          return model.ExternalStorageGridDiscoverySummary.getDeserializedJsonObj(
            <model.ExternalStorageGridDiscoverySummary>(<object>jsonObj),
            true
          );
        case "INFRASTRUCTURE_DISCOVER":
          return model.ExternalExadataInfrastructureDiscovery.getDeserializedJsonObj(
            <model.ExternalExadataInfrastructureDiscovery>(<object>jsonObj),
            true
          );
        case "DATABASE_SYSTEM_DISCOVER_SUMMARY":
          return model.ExternalDatabaseSystemDiscoverySummary.getDeserializedJsonObj(
            <model.ExternalDatabaseSystemDiscoverySummary>(<object>jsonObj),
            true
          );
        case "INFRASTRUCTURE_DISCOVER_SUMMARY":
          return model.ExternalExadataInfrastructureDiscoverySummary.getDeserializedJsonObj(
            <model.ExternalExadataInfrastructureDiscoverySummary>(<object>jsonObj),
            true
          );
        case "STORAGE_SERVER_DISCOVER_SUMMARY":
          return model.ExternalStorageServerDiscoverySummary.getDeserializedJsonObj(
            <model.ExternalStorageServerDiscoverySummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entityType}`);
      }
    }
    return jsonObj;
  }
}
