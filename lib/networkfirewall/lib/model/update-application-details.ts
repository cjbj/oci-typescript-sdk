/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * Request for updating an existing application in context to the network firewall policy.
 *
 */
export interface UpdateApplicationDetails {
  "type": string;
}

export namespace UpdateApplicationDetails {
  export function getJsonObj(obj: UpdateApplicationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ICMP_V6":
          return model.UpdateIcmp6ApplicationDetails.getJsonObj(
            <model.UpdateIcmp6ApplicationDetails>(<object>jsonObj),
            true
          );
        case "ICMP":
          return model.UpdateIcmpApplicationDetails.getJsonObj(
            <model.UpdateIcmpApplicationDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateApplicationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ICMP_V6":
          return model.UpdateIcmp6ApplicationDetails.getDeserializedJsonObj(
            <model.UpdateIcmp6ApplicationDetails>(<object>jsonObj),
            true
          );
        case "ICMP":
          return model.UpdateIcmpApplicationDetails.getDeserializedJsonObj(
            <model.UpdateIcmpApplicationDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
