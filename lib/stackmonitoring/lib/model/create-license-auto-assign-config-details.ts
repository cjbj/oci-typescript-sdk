/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The details of a LICENSE_AUTO_ASSIGN configuration.
 *
 */
export interface CreateLicenseAutoAssignConfigDetails extends model.CreateConfigDetails {
  /**
   * License edition.
   */
  "license": model.LicenseType;

  "configType": string;
}

export namespace CreateLicenseAutoAssignConfigDetails {
  export function getJsonObj(
    obj: CreateLicenseAutoAssignConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigDetails.getJsonObj(obj) as CreateLicenseAutoAssignConfigDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configType = "LICENSE_AUTO_ASSIGN";
  export function getDeserializedJsonObj(
    obj: CreateLicenseAutoAssignConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigDetails.getDeserializedJsonObj(
            obj
          ) as CreateLicenseAutoAssignConfigDetails)),
      ...{}
    };

    return jsonObj;
  }
}
