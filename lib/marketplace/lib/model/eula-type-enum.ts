/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible values for end user license agreement (EULA) formats.
 **/
export enum EulaTypeEnum {
  Text = "TEXT"
}

export namespace EulaTypeEnum {
  export function getJsonObj(obj: EulaTypeEnum): EulaTypeEnum {
    return obj;
  }
  export function getDeserializedJsonObj(obj: EulaTypeEnum): EulaTypeEnum {
    return obj;
  }
}
