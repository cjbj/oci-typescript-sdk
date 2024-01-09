/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Description of a log analytics entity.
 *
 */
export interface LogAnalyticsEntity {
  /**
   * The log analytics entity OCID. This ID is a reference used by log analytics features and it represents
   * a resource that is provisioned and managed by the customer on their premises or on the cloud.
   *
   */
  "id": string;
  /**
   * Log analytics entity name.
   *
   */
  "name": string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Log analytics entity type name.
   *
   */
  "entityTypeName": string;
  /**
   * Internal name for the log analytics entity type.
   *
   */
  "entityTypeInternalName": string;
  /**
   * The current state of the log analytics entity.
   *
   */
  "lifecycleState": model.EntityLifecycleStates;
  /**
   * lifecycleDetails has additional information regarding substeps such as management agent plugin deployment.
   *
   */
  "lifecycleDetails": string;
  /**
   * The OCID of the Management Agent.
   *
   */
  "managementAgentId"?: string;
  /**
   * Management agent (management-agents resource kind) display name
   *
   */
  "managementAgentDisplayName"?: string;
  /**
   * Management agent (management-agents resource kind) compartment OCID
   *
   */
  "managementAgentCompartmentId"?: string;
  /**
   * The timezone region of the log analytics entity.
   *
   */
  "timezoneRegion"?: string;
  /**
   * The name/value pairs for parameter values to be used in file patterns specified in log sources.
   *
   */
  "properties"?: { [key: string]: string };
  "creationSource"?: model.CreationSource;
  /**
   * The date and time the resource was created, in the format defined by RFC3339.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was last updated, in the format defined by RFC3339.
   *
   */
  "timeUpdated": Date;
  /**
   * The Boolean flag to indicate if logs are collected for an entity for log analytics usage.
   *
   */
  "areLogsCollected"?: boolean;
  /**
   * The OCID of the Cloud resource which this entity is a representation of. This may be blank when the entity
   * represents a non-cloud resource that the customer may have on their premises.
   *
   */
  "cloudResourceId"?: string;
  /**
   * The hostname where the entity represented here is actually present. This would be the output one would get if
   * they run `echo $HOSTNAME` on Linux or an equivalent OS command. This may be different from
   * management agents host since logs may be collected remotely.
   *
   */
  "hostname"?: string;
  /**
   * This indicates the type of source. It is primarily for Enterprise Manager Repository ID.
   *
   */
  "sourceId"?: string;
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

export namespace LogAnalyticsEntity {
  export function getJsonObj(obj: LogAnalyticsEntity): object {
    const jsonObj = {
      ...obj,
      ...{
        "creationSource": obj.creationSource
          ? model.CreationSource.getJsonObj(obj.creationSource)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsEntity): object {
    const jsonObj = {
      ...obj,
      ...{
        "creationSource": obj.creationSource
          ? model.CreationSource.getDeserializedJsonObj(obj.creationSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
