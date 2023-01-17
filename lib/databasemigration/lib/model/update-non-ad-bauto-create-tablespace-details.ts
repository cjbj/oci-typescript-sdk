/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Migration tablespace settings valid for NON-ADB target type using auto create feature.
 *
 */
export interface UpdateNonADBAutoCreateTablespaceDetails
  extends model.UpdateTargetTypeTablespaceDetails {
  /**
   * True to auto-create tablespace in the target Database.
   *
   */
  "isAutoCreate"?: boolean;
  /**
   * True set tablespace to big file.
   *
   */
  "isBigFile"?: boolean;
  /**
   * Size of extend in MB. Can only be specified if 'isBigFile' property is set to true.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extendSizeInMBs"?: number;

  "targetType": string;
}

export namespace UpdateNonADBAutoCreateTablespaceDetails {
  export function getJsonObj(
    obj: UpdateNonADBAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as UpdateNonADBAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "NON_ADB_AUTOCREATE";
  export function getDeserializedJsonObj(
    obj: UpdateNonADBAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateTargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateNonADBAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
