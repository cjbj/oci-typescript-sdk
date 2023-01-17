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
* A patch for an Autonomous Exadata Infrastructure or Autonomous Container Database.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface AutonomousPatchSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the patch.
   */
  "id": string;
  /**
   * The text describing this patch package.
   */
  "description": string;
  /**
   * The type of patch. BUNDLE is one example.
   */
  "type": string;
  /**
   * A descriptive text associated with the lifecycleState.
   * Typically can contain additional displayable text.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the patch as a result of lastAction.
   */
  "lifecycleState"?: AutonomousPatchSummary.LifecycleState;
  /**
   * The date and time that the patch was released.
   */
  "timeReleased": Date;
  /**
   * The version of this patch package.
   */
  "version": string;
  /**
   * Database patching model preference. See [My Oracle Support note 2285040.1](https://support.oracle.com/rs?type=doc&id=2285040.1) for information on the Release Update (RU) and Release Update Revision (RUR) patching models.
   */
  "patchModel"?: AutonomousPatchSummary.PatchModel;
  /**
   * First month of the quarter in which the patch was released.
   */
  "quarter"?: string;
  /**
   * Year in which the patch was released.
   */
  "year"?: string;
}

export namespace AutonomousPatchSummary {
  export enum LifecycleState {
    Available = "AVAILABLE",
    Success = "SUCCESS",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PatchModel {
    ReleaseUpdates = "RELEASE_UPDATES",
    ReleaseUpdateRevisions = "RELEASE_UPDATE_REVISIONS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousPatchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousPatchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
