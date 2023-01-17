/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Installation usage during a specified time period.
 * An installation is a collection of deployed instances of a specific Java Runtime that share the same install path.
 *
 */
export interface InstallationUsage {
  /**
   * The unique identifier for the installation of a Java Runtime at a specific path on a specific operating system.
   */
  "installationKey"?: string;
  /**
   * The vendor of the Java Runtime that is deployed with the installation.
   */
  "jreVendor": string;
  /**
   * The distribution of the Java Runtime that is deployed with the installation.
   */
  "jreDistribution": string;
  /**
   * The version of the Java Runtime that is deployed with the installation.
   */
  "jreVersion": string;
  /**
   * The file system path of the Java installation.
   */
  "path": string;
  /**
   * The Operating System for the installation. Deprecated, use `operatingSystem` instead.
   */
  "os": string;
  /**
   * The architecture of the operating system for the installation. Deprecated, use `operatingSystem` instead.
   */
  "architecture": string;
  "operatingSystem"?: model.OperatingSystem;
  /**
   * The approximate count of applications running on this installation Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateApplicationCount"?: number;
  /**
   * The approximate count of managed instances reporting this installation Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateManagedInstanceCount"?: number;
  /**
   * Lower bound of the specified time period filter. JMS provides a view of the data that is _per day_. The query uses only the date element of the parameter.
   */
  "timeStart"?: Date;
  /**
   * Upper bound of the specified time period filter. JMS provides a view of the data that is _per day_. The query uses only the date element of the parameter.
   */
  "timeEnd"?: Date;
  /**
   * The date and time the resource was _first_ reported to JMS.
   * This is potentially _before_ the specified time period provided by the filters.
   * For example, a resource can be first reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeFirstSeen"?: Date;
  /**
   * The date and time the resource was _last_ reported to JMS.
   * This is potentially _after_ the specified time period provided by the filters.
   * For example, a resource can be last reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeLastSeen"?: Date;
}

export namespace InstallationUsage {
  export function getJsonObj(obj: InstallationUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getJsonObj(obj.operatingSystem)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstallationUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getDeserializedJsonObj(obj.operatingSystem)
          : undefined
      }
    };

    return jsonObj;
  }
}
