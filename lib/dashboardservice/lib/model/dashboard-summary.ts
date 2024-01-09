/**
 * Dashboards API
 * Use the Oracle Cloud Infrastructure Dashboards service API to manage dashboards in the Console. 
Dashboards provide an organized and customizable view of resources and their metrics in the Console.
For more information, see [Dashboards](/Content/Dashboards/home.htm).

**Important:** Resources for the Dashboards service are created in the tenacy's home region.
Although it is possible to create dashboard and dashboard group resources in regions other than the home region,
you won't be able to view those resources in the Console.
Therefore, creating resources outside of the home region is not recommended.

 * OpenAPI spec version: 20210731
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
 * Summary information about the dashboard.
 */
export interface DashboardSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the dashboard resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the dashboard group that the dashboard belongs to.
   */
  "dashboardGroupId": string;
  /**
   * A user-friendly name for the dashboard. Does not have to be unique, and it can be changed. Avoid entering confidential information.
   * Leading and trailing spaces and the following special characters are not allowed: <>()=/'\"&\\
   *
   */
  "displayName": string;
  /**
   * A short description of the dashboard. It can be changed. Avoid entering confidential information.
   * The following special characters are not allowed: <>()=/'\"&\\
   *
   */
  "description": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the dashboard. A dashboard is always in the same compartment as its dashboard group.
   */
  "compartmentId": string;
  /**
    * The date and time the dashboard was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the dashboard was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeUpdated"?: Date;
  /**
   * The current state of the Dashboard.
   */
  "lifecycleState": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DashboardSummary {
  export function getJsonObj(obj: DashboardSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DashboardSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
