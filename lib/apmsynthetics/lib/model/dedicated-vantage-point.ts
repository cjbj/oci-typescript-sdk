/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * The information about a dedicated vantage point.
 */
export interface DedicatedVantagePoint {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the dedicated vantage point.
   */
  "id": string;
  /**
   * Unique dedicated vantage point name that cannot be edited. The name should not contain any confidential information.
   */
  "displayName": string;
  /**
   * Unique permanent name of the dedicated vantage point. This is the same as the displayName.
   */
  "name": string;
  /**
   * Status of the dedicated vantage point.
   */
  "status": model.DedicatedVantagePointStatus;
  "dvpStackDetails": model.OracleRMStack;
  /**
   * Name of the region.
   */
  "region": string;
  "monitorStatusCountMap": model.MonitorStatusCountMap;
  /**
   * The time the resource was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: {@code 2020-02-12T22:47:12.613Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: {@code 2020-02-13T22:47:12.613Z}
   *
   */
  "timeUpdated"?: Date;
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
}

export namespace DedicatedVantagePoint {
  export function getJsonObj(obj: DedicatedVantagePoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "dvpStackDetails": obj.dvpStackDetails
          ? model.DvpStackDetails.getJsonObj(obj.dvpStackDetails)
          : undefined,

        "monitorStatusCountMap": obj.monitorStatusCountMap
          ? model.MonitorStatusCountMap.getJsonObj(obj.monitorStatusCountMap)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DedicatedVantagePoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "dvpStackDetails": obj.dvpStackDetails
          ? model.DvpStackDetails.getDeserializedJsonObj(obj.dvpStackDetails)
          : undefined,

        "monitorStatusCountMap": obj.monitorStatusCountMap
          ? model.MonitorStatusCountMap.getDeserializedJsonObj(obj.monitorStatusCountMap)
          : undefined
      }
    };

    return jsonObj;
  }
}
