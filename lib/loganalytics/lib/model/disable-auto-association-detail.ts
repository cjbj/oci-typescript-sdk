/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The information required to disable log source auto-association.
 */
export interface DisableAutoAssociationDetail {
  /**
   * A flag indicating whether or not to delete all the existing associations of the log source.
   *
   */
  "deleteExistingAssociations"?: boolean;
}

export namespace DisableAutoAssociationDetail {
  export function getJsonObj(obj: DisableAutoAssociationDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DisableAutoAssociationDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
