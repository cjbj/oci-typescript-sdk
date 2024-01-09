/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details of the sensitive data model to be associated as the column source with a masking policy.
 */
export interface CreateColumnSourceFromSdmDetails extends model.CreateColumnSourceDetails {
  /**
   * The OCID of the sensitive data model to be associated as the column source with the masking policy.
   */
  "sensitiveDataModelId": string;

  "columnSource": string;
}

export namespace CreateColumnSourceFromSdmDetails {
  export function getJsonObj(
    obj: CreateColumnSourceFromSdmDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateColumnSourceDetails.getJsonObj(obj) as CreateColumnSourceFromSdmDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const columnSource = "SENSITIVE_DATA_MODEL";
  export function getDeserializedJsonObj(
    obj: CreateColumnSourceFromSdmDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateColumnSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateColumnSourceFromSdmDetails)),
      ...{}
    };

    return jsonObj;
  }
}
