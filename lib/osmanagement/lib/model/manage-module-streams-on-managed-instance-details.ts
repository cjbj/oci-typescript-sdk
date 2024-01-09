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
 * The set of changes to make to the state of the modules, streams, and profiles on a managed instance
 */
export interface ManageModuleStreamsOnManagedInstanceDetails {
  /**
   * Indicates if this operation is a dry run or if the operation
   * should be commited.  If set to true, the result of the operation
   * will be evaluated but not committed.  If set to false, the
   * operation is committed to the managed instance.  The default is
   * false.
   *
   */
  "isDryRun"?: boolean;
  /**
   * The set of module streams to enable.
   */
  "enable"?: Array<model.ModuleStreamDetails>;
  /**
   * The set of module streams to disable.
   */
  "disable"?: Array<model.ModuleStreamDetails>;
  /**
   * The set of module stream profiles to install.
   */
  "install"?: Array<model.ModuleStreamProfileDetails>;
  /**
   * The set of module stream profiles to remove.
   */
  "remove"?: Array<model.ModuleStreamProfileDetails>;
}

export namespace ManageModuleStreamsOnManagedInstanceDetails {
  export function getJsonObj(obj: ManageModuleStreamsOnManagedInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "enable": obj.enable
          ? obj.enable.map(item => {
              return model.ModuleStreamDetails.getJsonObj(item);
            })
          : undefined,
        "disable": obj.disable
          ? obj.disable.map(item => {
              return model.ModuleStreamDetails.getJsonObj(item);
            })
          : undefined,
        "install": obj.install
          ? obj.install.map(item => {
              return model.ModuleStreamProfileDetails.getJsonObj(item);
            })
          : undefined,
        "remove": obj.remove
          ? obj.remove.map(item => {
              return model.ModuleStreamProfileDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManageModuleStreamsOnManagedInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "enable": obj.enable
          ? obj.enable.map(item => {
              return model.ModuleStreamDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "disable": obj.disable
          ? obj.disable.map(item => {
              return model.ModuleStreamDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "install": obj.install
          ? obj.install.map(item => {
              return model.ModuleStreamProfileDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "remove": obj.remove
          ? obj.remove.map(item => {
              return model.ModuleStreamProfileDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
