/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/iaas/Content/managed-access/home.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
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
 * The level for each persona (approver, customer admin, operator)
 **/
export enum PersonaLevel {
  Level1 = "LEVEL1",
  Level2 = "LEVEL2",
  Level3 = "LEVEL3",
  Admin = "ADMIN",
  Operator = "OPERATOR",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace PersonaLevel {
  export function getJsonObj(obj: PersonaLevel): PersonaLevel {
    return obj;
  }
  export function getDeserializedJsonObj(obj: PersonaLevel): PersonaLevel {
    return obj;
  }
}
