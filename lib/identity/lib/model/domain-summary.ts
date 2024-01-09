/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
 * (For tenancies that support identity domains) As the name suggests, a `DomainSummary` object contains information about a `Domain`.
 *
 */
export interface DomainSummary {
  /**
   * The OCID of the identity domain.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the identity domain.
   */
  "compartmentId": string;
  /**
   * The mutable display name of the identity domain.
   */
  "displayName": string;
  /**
   * The identity domain description. You can have an empty description.
   */
  "description": string;
  /**
   * Region-agnostic identity domain URL.
   */
  "url": string;
  /**
   * Region-specific identity domain URL.
   */
  "homeRegionUrl": string;
  /**
   * The home region for the identity domain.
   */
  "homeRegion": string;
  /**
   * The regions where replicas of the identity domain exist.
   */
  "replicaRegions": Array<model.ReplicatedRegionDetails>;
  /**
   * The type of the identity domain.
   *
   */
  "type": DomainSummary.Type;
  /**
   * The license type of the identity domain.
   */
  "licenseType": string;
  /**
   * Indicates whether the identity domain is hidden on the sign-in screen or not.
   *
   */
  "isHiddenOnLogin": boolean;
  /**
    * Date and time the identity domain was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The current state.
   *
   */
  "lifecycleState": DomainSummary.LifecycleState;
  /**
   * Any additional details about the current state of the identity domain.
   *
   */
  "lifecycleDetails"?: DomainSummary.LifecycleDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DomainSummary {
  export enum Type {
    Default = "DEFAULT",
    Secondary = "SECONDARY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleDetails {
    Deactivating = "DEACTIVATING",
    Activating = "ACTIVATING",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DomainSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicaRegions": obj.replicaRegions
          ? obj.replicaRegions.map(item => {
              return model.ReplicatedRegionDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DomainSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicaRegions": obj.replicaRegions
          ? obj.replicaRegions.map(item => {
              return model.ReplicatedRegionDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
