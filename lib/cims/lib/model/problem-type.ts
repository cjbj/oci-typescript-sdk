/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm).

**Note**: Before you can create service requests with this API, 
you need to have an Oracle Single Sign On (SSO) account, 
and you need to register your Customer Support Identifier (CSI) with My Oracle Support.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * The kind of support ticket, such as a technical support request or a limit increase request.
 **/
export enum ProblemType {
  Limit = "LIMIT",
  LegacyLimit = "LEGACY_LIMIT",
  Tech = "TECH",
  Account = "ACCOUNT",
  Taxonomy = "TAXONOMY",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ProblemType {
  export function getJsonObj(obj: ProblemType): ProblemType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ProblemType): ProblemType {
    return obj;
  }
}
