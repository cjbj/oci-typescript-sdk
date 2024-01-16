/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * The configuration details for creating a dimension-specific alarm suppression.
 *
 */
export interface CreateAlarmSuppressionDetails {
  "alarmSuppressionTarget": model.AlarmSuppressionAlarmTarget;
  /**
   * A user-friendly name for the alarm suppression. It does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
    * Human-readable reason for this alarm suppression.
* It does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Oracle recommends including tracking information for the event or associated work,
* such as a ticket number.
* <p>
Example: {@code Planned outage due to change IT-1234.}
* 
    */
  "description"?: string;
  /**
    * A filter to suppress only alarm state entries that include the set of specified dimension key-value pairs.
* If you specify {\"availabilityDomain\": \"phx-ad-1\"}
* and the alarm state entry corresponds to the set {\"availabilityDomain\": \"phx-ad-1\" and \"resourceId\": \"ocid1.instance.region1.phx.exampleuniqueID\"},
* then this alarm will be included for suppression.
* <p>
The value cannot be an empty object.
* Only a single value is allowed per key. No grouping of multiple values is allowed under the same key.
* Maximum characters (after serialization): 4000. This maximum satisfies typical use cases.
* The response for an exceeded maximum is {@code HTTP 400} with an \"dimensions values are too long\" message.
* 
    */
  "dimensions": { [key: string]: string };
  /**
    * The start date and time for the suppression to take place, inclusive. Format defined by RFC3339.
* <p>
Example: {@code 2023-02-01T01:02:29.600Z}
* 
    */
  "timeSuppressFrom": Date;
  /**
    * The end date and time for the suppression to take place, inclusive. Format defined by RFC3339.
* <p>
Example: {@code 2023-02-01T02:02:29.600Z}
* 
    */
  "timeSuppressUntil": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateAlarmSuppressionDetails {
  export function getJsonObj(obj: CreateAlarmSuppressionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "alarmSuppressionTarget": obj.alarmSuppressionTarget
          ? model.AlarmSuppressionTarget.getJsonObj(obj.alarmSuppressionTarget)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAlarmSuppressionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "alarmSuppressionTarget": obj.alarmSuppressionTarget
          ? model.AlarmSuppressionTarget.getDeserializedJsonObj(obj.alarmSuppressionTarget)
          : undefined
      }
    };

    return jsonObj;
  }
}
