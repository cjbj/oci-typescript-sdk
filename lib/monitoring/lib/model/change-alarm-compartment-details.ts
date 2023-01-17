/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
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
 * The configuration details for moving an alarm.
 *
 */
export interface ChangeAlarmCompartmentDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to move the alarm to.
   *
   */
  "compartmentId": string;
}

export namespace ChangeAlarmCompartmentDetails {
  export function getJsonObj(obj: ChangeAlarmCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeAlarmCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
