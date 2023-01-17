/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * The details required to create a new Configuration.
 *
 */
export interface CreateConfigurationDetails {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * User-provided data about the Configuration.
   */
  "description"?: string;
  /**
   * The display name of the Configuration.
   */
  "displayName"?: string;
  /**
   * The name of the associated Shape.
   */
  "shapeName": string;
  "initVariables"?: model.InitializationVariables;
  "variables"?: model.ConfigurationVariables;
  /**
   * The OCID of the Configuration from which the new Configuration is derived. The values in CreateConfigurationDetails.variables supersede the variables of the parent Configuration.
   *
   */
  "parentConfigurationId"?: string;
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
}

export namespace CreateConfigurationDetails {
  export function getJsonObj(obj: CreateConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "initVariables": obj.initVariables
          ? model.InitializationVariables.getJsonObj(obj.initVariables)
          : undefined,
        "variables": obj.variables
          ? model.ConfigurationVariables.getJsonObj(obj.variables)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "initVariables": obj.initVariables
          ? model.InitializationVariables.getDeserializedJsonObj(obj.initVariables)
          : undefined,
        "variables": obj.variables
          ? model.ConfigurationVariables.getDeserializedJsonObj(obj.variables)
          : undefined
      }
    };

    return jsonObj;
  }
}
