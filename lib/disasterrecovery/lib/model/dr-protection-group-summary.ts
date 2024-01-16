/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * The summary of a DR protection group.
 */
export interface DrProtectionGroupSummary {
  /**
    * The OCID of the DR protection group.
* <p>
Example: {@code ocid1.drprotectiongroup.oc1..uniqueID}
* 
    */
  "id": string;
  /**
    * The OCID of the compartment containing the DR protection group.
* <p>
Example: {@code ocid1.compartment.oc1..uniqueID}
* 
    */
  "compartmentId": string;
  /**
    * The display name of the DR protection group.
* <p>
Example: {@code EBS PHX Group}
* 
    */
  "displayName": string;
  /**
   * The role of the DR protection group.
   *
   */
  "role": model.DrProtectionGroupRole;
  /**
    * The OCID of the peer DR protection group.
* <p>
Example: {@code ocid1.drprotectiongroup.oc1..uniqueID}
* 
    */
  "peerId"?: string;
  /**
    * The region of the peer DR protection group.
* <p>
Example: {@code us-ashburn-1}
* 
    */
  "peerRegion"?: string;
  /**
    * The date and time the DR protection group was created. An RFC3339 formatted datetime string.
* <p>
Example: {@code 2019-03-29T09:36:42Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the DR protection group was updated. An RFC3339 formatted datetime string.
* <p>
Example: {@code 2019-03-29T09:36:42Z}
* 
    */
  "timeUpdated": Date;
  /**
   * The current state of the DR protection group.
   *
   */
  "lifecycleState": model.DrProtectionGroupLifecycleState;
  /**
   * A message describing the DR protection group's current state in more detail.
   *
   */
  "lifeCycleDetails"?: string;
  /**
   * The current sub-state of the DR protection group.
   *
   */
  "lifecycleSubState"?: model.DrProtectionGroupLifecycleSubState;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Usage of system tag keys. These predefined keys are scoped to namespaces.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DrProtectionGroupSummary {
  export function getJsonObj(obj: DrProtectionGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrProtectionGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
