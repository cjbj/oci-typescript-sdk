/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer infrastructures and upgrade schedules.
For more information see [Compute Cloud@Customer documentation](/iaas/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * Defines a schedule for preferred upgrade times.
 */
export interface CccUpgradeSchedule {
  /**
   * Upgrade schedule [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   * This cannot be changed once created.
   *
   */
  "id": string;
  /**
   * Compute Cloud@Customer upgrade schedule display name.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * An optional description of the Compute Cloud@Customer upgrade schedule.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * Compartment [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the
   * Compute Cloud@Customer upgrade schedule.
   *
   */
  "compartmentId": string;
  /**
   * The time the upgrade schedule was created, using an RFC3339 formatted datetime string.
   *
   */
  "timeCreated": Date;
  /**
   * The time the upgrade schedule was updated, using an RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Lifecycle state of the resource.
   */
  "lifecycleState": CccUpgradeSchedule.LifecycleState;
  /**
   * A message describing the current state in more detail.
   * For example, the message can be used to provide actionable information for a resource in
   * a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * List of preferred times for Compute Cloud@Customer infrastructures associated with this
   * schedule to be upgraded.
   *
   */
  "events"?: Array<model.CccScheduleEvent>;
  /**
   * List of Compute Cloud@Customer infrastructure
   * [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) that are using this upgrade
   * schedule.
   *
   */
  "infrastructureIds"?: Array<string>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CccUpgradeSchedule {
  export enum LifecycleState {
    Active = "ACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CccUpgradeSchedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "events": obj.events
          ? obj.events.map(item => {
              return model.CccScheduleEvent.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CccUpgradeSchedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "events": obj.events
          ? obj.events.map(item => {
              return model.CccScheduleEvent.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
