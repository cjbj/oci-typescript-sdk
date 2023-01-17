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
 * An Oracle Cloud Infrastructure resource used to connect to an external Oracle Database.
 * This resource stores the database connection string, user credentials, and related details that allow you to
 * manage your external database using the Oracle Cloud Infrastructure Console and API interfaces.
 *
 */
export interface ExternalDatabaseConnector {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The user-friendly name for the
   * {@link #createExternalDatabaseConnectorDetails(CreateExternalDatabaseConnectorDetailsRequest) createExternalDatabaseConnectorDetails}.
   * The name does not have to be unique.
   *
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the
   * {@link #createExternalDatabaseConnectorDetails(CreateExternalDatabaseConnectorDetailsRequest) createExternalDatabaseConnectorDetails}.
   *
   */
  "id": string;
  /**
   * The current lifecycle state of the external database connector resource.
   */
  "lifecycleState": ExternalDatabaseConnector.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the external connector was created.
   */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the external database resource.
   */
  "externalDatabaseId": string;
  /**
   * The status of connectivity to the external database.
   */
  "connectionStatus": string;
  /**
   * The date and time the connectionStatus of this external connector was last updated.
   */
  "timeConnectionStatusLastUpdated": Date;

  "connectorType": string;
}

export namespace ExternalDatabaseConnector {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExternalDatabaseConnector): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "MACS":
          return model.ExternalMacsConnector.getJsonObj(
            <model.ExternalMacsConnector>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExternalDatabaseConnector): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectorType" in obj && obj.connectorType) {
      switch (obj.connectorType) {
        case "MACS":
          return model.ExternalMacsConnector.getDeserializedJsonObj(
            <model.ExternalMacsConnector>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectorType}`);
      }
    }
    return jsonObj;
  }
}
