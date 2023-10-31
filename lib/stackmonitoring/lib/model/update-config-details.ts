/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Change the configuration.
 */
export interface UpdateConfigDetails {
  /**
   * The display name of the configuration.
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "configType": string;
}

export namespace UpdateConfigDetails {
  export function getJsonObj(obj: UpdateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "LICENSE_ENTERPRISE_EXTENSIBILITY":
          return model.UpdateLicenseEnterpriseExtensibilityConfigDetails.getJsonObj(
            <model.UpdateLicenseEnterpriseExtensibilityConfigDetails>(<object>jsonObj),
            true
          );
        case "AUTO_PROMOTE":
          return model.UpdateAutoPromoteConfigDetails.getJsonObj(
            <model.UpdateAutoPromoteConfigDetails>(<object>jsonObj),
            true
          );
        case "LICENSE_AUTO_ASSIGN":
          return model.UpdateLicenseAutoAssignConfigDetails.getJsonObj(
            <model.UpdateLicenseAutoAssignConfigDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "LICENSE_ENTERPRISE_EXTENSIBILITY":
          return model.UpdateLicenseEnterpriseExtensibilityConfigDetails.getDeserializedJsonObj(
            <model.UpdateLicenseEnterpriseExtensibilityConfigDetails>(<object>jsonObj),
            true
          );
        case "AUTO_PROMOTE":
          return model.UpdateAutoPromoteConfigDetails.getDeserializedJsonObj(
            <model.UpdateAutoPromoteConfigDetails>(<object>jsonObj),
            true
          );
        case "LICENSE_AUTO_ASSIGN":
          return model.UpdateLicenseAutoAssignConfigDetails.getDeserializedJsonObj(
            <model.UpdateLicenseAutoAssignConfigDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
}
