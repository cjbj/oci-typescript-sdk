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
 * Used for creating a new database system by cloning an existing DB system.
 *
 */
export interface LaunchDbSystemFromDbSystemDetails extends model.LaunchDbSystemBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "sourceDbSystemId": string;
  "dbHome": model.CreateDbHomeFromDbSystemDetails;
  /**
   * The Oracle license model that applies to all the databases on the DB system. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: LaunchDbSystemFromDbSystemDetails.LicenseModel;

  "source": string;
}

export namespace LaunchDbSystemFromDbSystemDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(
    obj: LaunchDbSystemFromDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchDbSystemBase.getJsonObj(obj) as LaunchDbSystemFromDbSystemDetails)),
      ...{
        "dbHome": obj.dbHome
          ? model.CreateDbHomeFromDbSystemDetails.getJsonObj(obj.dbHome)
          : undefined
      }
    };

    return jsonObj;
  }
  export const source = "DB_SYSTEM";
  export function getDeserializedJsonObj(
    obj: LaunchDbSystemFromDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchDbSystemBase.getDeserializedJsonObj(
            obj
          ) as LaunchDbSystemFromDbSystemDetails)),
      ...{
        "dbHome": obj.dbHome
          ? model.CreateDbHomeFromDbSystemDetails.getDeserializedJsonObj(obj.dbHome)
          : undefined
      }
    };

    return jsonObj;
  }
}
