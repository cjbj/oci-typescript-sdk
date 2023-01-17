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
 * Backup destination details
 */
export interface BackupDestinationDetails {
  /**
   * Type of the database backup destination.
   */
  "type": BackupDestinationDetails.Type;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup destination.
   */
  "id"?: string;
  /**
   * For a RECOVERY_APPLIANCE backup destination, the Virtual Private Catalog (VPC) user that is used to access the Recovery Appliance.
   */
  "vpcUser"?: string;
  /**
   * For a RECOVERY_APPLIANCE backup destination, the password for the VPC user that is used to access the Recovery Appliance.
   */
  "vpcPassword"?: string;
  /**
   * Proxy URL to connect to object store.
   */
  "internetProxy"?: string;
}

export namespace BackupDestinationDetails {
  export enum Type {
    Nfs = "NFS",
    RecoveryAppliance = "RECOVERY_APPLIANCE",
    ObjectStore = "OBJECT_STORE",
    Local = "LOCAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BackupDestinationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackupDestinationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
