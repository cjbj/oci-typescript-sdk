/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details to enable Database Management on an external non-container database.
 *
 */
export interface EnableExternalNonContainerDatabaseDatabaseManagementDetails {
  /**
   * The Oracle license model that applies to the external database.
   *
   */
  "licenseModel": EnableExternalNonContainerDatabaseDatabaseManagementDetails.LicenseModel;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the
   * {@link #createExternalDatabaseConnectorDetails(CreateExternalDatabaseConnectorDetailsRequest) createExternalDatabaseConnectorDetails}.
   *
   */
  "externalDatabaseConnectorId": string;
}

export namespace EnableExternalNonContainerDatabaseDatabaseManagementDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(
    obj: EnableExternalNonContainerDatabaseDatabaseManagementDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: EnableExternalNonContainerDatabaseDatabaseManagementDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
