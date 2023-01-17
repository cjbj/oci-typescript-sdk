/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * Schedule summary for the list schedule.
 */
export interface ScheduleSummary {
  /**
   * The schedule OCID.
   */
  "id": string;
  /**
   * The unique name of the user-created schedule.
   */
  "name": string;
  /**
   * The description of the schedule.
   */
  "description"?: string;
  /**
   * The date and time of the next job execution.
   */
  "timeNextRun"?: Date;
  /**
   * Specifies the frequency according to when the schedule will be run,
   * in the x-obmcs-recurring-time format described in [RFC 5545 section 3.3.10](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
   * Supported values are : ONE_TIME, DAILY, WEEKLY and MONTHLY.
   *
   */
  "scheduleRecurrences": string;
  /**
   * The date and time of the first time job execution.
   */
  "timeScheduled": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The schedule summary lifecycle state.
   */
  "lifecycleState": string;
}

export namespace ScheduleSummary {
  export function getJsonObj(obj: ScheduleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
