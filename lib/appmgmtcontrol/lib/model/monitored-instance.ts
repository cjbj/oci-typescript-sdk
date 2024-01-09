/**
 * Resource Discovery and Monitoring Control API
 * Use the Resource Discovery and Monitoring Control API to get details about monitored instances and perform actions. For more information, see [Resource Discovery and Monitoring](https://docs.oracle.com/iaas/os-management/osms/osms-resource-discovery-monitoring.htm).

 * OpenAPI spec version: 20210330
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
 * Description of Monitored Instance.
 */
export interface MonitoredInstance {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of monitored instance.
   */
  "instanceId": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * A user-friendly name of the monitored instance. It is binded to [Compute Instance](https://docs.cloud.oracle.com/Content/Compute/Concepts/computeoverview.htm).
   * DisplayName is fetched from [Core Service API](https://docs.cloud.oracle.com/api/#/en/iaas/20160918/Instance/).
   *
   */
  "displayName"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * Used to invoke manage operations on Management Agent Cloud Service.
   *
   */
  "managementAgentId"?: string;
  /**
   * The time the MonitoredInstance was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the MonitoredInstance was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Monitoring status. Can be either enabled or disabled.
   */
  "monitoringState"?: MonitoredInstance.MonitoringState;
  /**
   * The current state of the monitored instance.
   */
  "lifecycleState"?: MonitoredInstance.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace MonitoredInstance {
  export enum MonitoringState {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MonitoredInstance): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredInstance): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
