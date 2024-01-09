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
 * This is used to create new database system or update without restoring from backup.
 *
 */
export interface NoneSourceDetails extends model.SourceDetails {
  "sourceType": string;
}

export namespace NoneSourceDetails {
  export function getJsonObj(obj: NoneSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SourceDetails.getJsonObj(obj) as NoneSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "NONE";
  export function getDeserializedJsonObj(
    obj: NoneSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getDeserializedJsonObj(obj) as NoneSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
