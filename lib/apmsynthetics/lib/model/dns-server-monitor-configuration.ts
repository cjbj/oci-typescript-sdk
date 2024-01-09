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
 * Request configuration details for the DNS Server monitor type.
 */
export interface DnsServerMonitorConfiguration extends model.MonitorConfiguration {
  /**
   * DNS record type.
   */
  "recordType"?: model.DnsRecordType;
  /**
   * Name of the server that will be used to perform DNS lookup.
   */
  "nameServer"?: string;
  "networkConfiguration"?: model.NetworkConfiguration;
  /**
   * Type of protocol.
   */
  "protocol"?: model.DnsTransportProtocol;
  /**
   * Verify response content against regular expression based string.
   * If response content does not match the verifyResponseContent value, then it will be considered a failure.
   *
   */
  "verifyResponseContent"?: string;
  /**
   * If isQueryRecursive is enabled, then queries will be sent recursively to the target server.
   */
  "isQueryRecursive"?: boolean;

  "configType": string;
}

export namespace DnsServerMonitorConfiguration {
  export function getJsonObj(
    obj: DnsServerMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getJsonObj(obj) as DnsServerMonitorConfiguration)),
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "DNS_SERVER_CONFIG";
  export function getDeserializedJsonObj(
    obj: DnsServerMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getDeserializedJsonObj(
            obj
          ) as DnsServerMonitorConfiguration)),
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
