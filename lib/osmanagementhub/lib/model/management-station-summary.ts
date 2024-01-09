/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Summary of the Management Station.
 */
export interface ManagementStationSummary {
  /**
   * OCID for the Management Station
   */
  "id": string;
  /**
   * OCID for the Instance associated with the Management Station
   */
  "managedInstanceId"?: string;
  /**
   * The OCID of the tenancy containing the Management Station.
   */
  "compartmentId": string;
  /**
   * OCID of the Registration Profile associated with the Management Station
   */
  "profileId"?: string;
  /**
   * OCID of the Scheduled Job for mirror sync
   */
  "scheduledJobId"?: string;
  /**
   * the time/date of the next scheduled execution of the Scheduled Job
   */
  "timeNextExecution"?: Date;
  /**
   * ManagementStation name
   */
  "displayName": string;
  /**
   * Details describing the Management Station config.
   */
  "description"?: string;
  /**
   * Name of the host
   */
  "hostname": string;
  /**
   * Current state of the mirroring
   */
  "overallState"?: model.OverallState;
  /**
   * A decimal number representing the completeness percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "overallPercentage"?: number;
  /**
   * A decimal number representing the mirror capacity Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mirrorCapacity"?: number;
  /**
   * The current state of the Management Station config.
   */
  "lifecycleState"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagementStationSummary {
  export function getJsonObj(obj: ManagementStationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementStationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
