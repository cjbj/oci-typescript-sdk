/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * OCI Object Storage bucket will be used to store Data Pump dump files for the migration.
 *
 */
export interface NfsDataTransferMediumDetails extends model.DataTransferMediumDetailsV2 {
  "type": string;
}

export namespace NfsDataTransferMediumDetails {
  export function getJsonObj(obj: NfsDataTransferMediumDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataTransferMediumDetailsV2.getJsonObj(obj) as NfsDataTransferMediumDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "NFS";
  export function getDeserializedJsonObj(
    obj: NfsDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataTransferMediumDetailsV2.getDeserializedJsonObj(
            obj
          ) as NfsDataTransferMediumDetails)),
      ...{}
    };

    return jsonObj;
  }
}
