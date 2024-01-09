/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Customer contact information that will be used by Oracle to provide notifications needed by database and infrastructure administrators.
 *
 */
export interface CustomerContact {
  /**
   * The email address used by Oracle to send notifications regarding databases and infrastructure.
   */
  "email"?: string;
}

export namespace CustomerContact {
  export function getJsonObj(obj: CustomerContact): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomerContact): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
