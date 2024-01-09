/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * A software package available for install on a managed instance
 */
export interface InstallablePackageSummary {
  /**
   * Package name
   */
  "displayName": string;
  /**
   * Unique identifier for the package. NOTE - This is not an OCID
   */
  "name": string;
  /**
   * Type of the package
   */
  "type": string;
  /**
   * Version of the package
   */
  "version": string;
  /**
   * The architecture for which this package was built
   */
  "architecture"?: string;
  /**
   * list of software sources that provide the software package
   */
  "softwareSources"?: Array<model.SoftwareSourceId>;
}

export namespace InstallablePackageSummary {
  export function getJsonObj(obj: InstallablePackageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceId.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstallablePackageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceId.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
