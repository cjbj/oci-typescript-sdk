/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * Default database configuration.
 */
export interface DefaultConfigParams {
  /**
   * The configuration variable name.
   */
  "configKey": string;
  /**
   * Default value for the variable.
   */
  "defaultConfigValue": string;
  /**
   * Range or list of allowed values.
   */
  "allowedValues": string;
  /**
   * If true, modifying this configuration value will require a restart.
   */
  "isRestartRequired": boolean;
  /**
   * Data type of the variable.
   */
  "dataType": string;
  /**
   * Whether the value can be overridden or not.
   */
  "isOverridable": boolean;
  /**
   * Details about the PostgreSQL variable.
   */
  "description": string;
}

export namespace DefaultConfigParams {
  export function getJsonObj(obj: DefaultConfigParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DefaultConfigParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
