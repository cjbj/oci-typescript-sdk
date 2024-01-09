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
 * Data to update one or more attributes of the Database Management configuration for the database.
 *
 */
export interface ModifyDatabaseManagementDetails {
  "credentialDetails"?: model.DatabaseCredentialDetails;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the private endpoint.
   *
   */
  "privateEndPointId"?: string;
  /**
   * The Database Management type.
   */
  "managementType"?: ModifyDatabaseManagementDetails.ManagementType;
  /**
   * The name of the Oracle Database service that will be used to connect to the database.
   */
  "serviceName"?: string;
  /**
   * Protocol used by the database connection.
   */
  "protocol"?: ModifyDatabaseManagementDetails.Protocol;
  /**
   * The port used to connect to the database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [secret](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm#concepts).
   */
  "sslSecretId"?: string;
  /**
   * The role of the user that will be connecting to the database.
   */
  "role"?: ModifyDatabaseManagementDetails.Role;
}

export namespace ModifyDatabaseManagementDetails {
  export enum ManagementType {
    Basic = "BASIC",
    Advanced = "ADVANCED"
  }

  export enum Protocol {
    Tcp = "TCP",
    Tcps = "TCPS"
  }

  export enum Role {
    Sysdba = "SYSDBA",
    Normal = "NORMAL"
  }

  export function getJsonObj(obj: ModifyDatabaseManagementDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.DatabaseCredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModifyDatabaseManagementDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.DatabaseCredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
