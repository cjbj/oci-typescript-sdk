/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * An OCI DNS view.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface View {
  /**
   * The OCID of the owning compartment.
   */
  "compartmentId": string;
  /**
   * The display name of the view.
   *
   */
  "displayName": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * The OCID of the view.
   */
  "id": string;
  /**
   * The canonical absolute URL of the resource.
   */
  "self": string;
  /**
   * The date and time the resource was created in \"YYYY-MM-ddThh:mm:ssZ\" format
   * with a Z offset, as defined by RFC 3339.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was last updated in \"YYYY-MM-ddThh:mm:ssZ\"
   * format with a Z offset, as defined by RFC 3339.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the resource.
   */
  "lifecycleState": View.LifecycleState;
  /**
   * A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed.
   *
   */
  "isProtected": boolean;
}

export namespace View {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: View): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: View): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
