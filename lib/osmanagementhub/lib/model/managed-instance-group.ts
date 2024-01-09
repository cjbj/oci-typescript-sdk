/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Description of managed instance group.
 */
export interface ManagedInstanceGroup {
  /**
   * The managed instance group OCID that is immutable on creation.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the managed instance group.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Details describing the managed instance group.
   */
  "description"?: string;
  /**
   * The time the managed instance group was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the managed instance group was last modified. An RFC3339 formatted datetime string.
   */
  "timeModified"?: Date;
  /**
   * The current state of the managed instance group.
   */
  "lifecycleState": ManagedInstanceGroup.LifecycleState;
  /**
   * The operating system type of the instances in the managed instance group.
   */
  "osFamily"?: model.OsFamily;
  /**
   * The CPU architecture of the instances in the managed instance group.
   */
  "archType"?: model.ArchType;
  /**
   * The software source vendor name.
   */
  "vendorName"?: model.VendorName;
  /**
   * The list of software sources that the managed instance group will use.
   */
  "softwareSourceIds"?: Array<model.SoftwareSourceDetails>;
  /**
   * The list of software sources that the managed instance group will use.
   */
  "softwareSources"?: Array<model.SoftwareSourceDetails>;
  /**
   * The list of managed instances OCIDs attached to the managed instance group.
   */
  "managedInstanceIds"?: Array<string>;
  /**
   * The number of Managed Instances in the managed instance group. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "managedInstanceCount"?: number;
  /**
   * The number of scheduled jobs pending against the managed instance group. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pendingJobCount"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagedInstanceGroup {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ManagedInstanceGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSourceIds": obj.softwareSourceIds
          ? obj.softwareSourceIds.map(item => {
              return model.SoftwareSourceDetails.getJsonObj(item);
            })
          : undefined,
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedInstanceGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSourceIds": obj.softwareSourceIds
          ? obj.softwareSourceIds.map(item => {
              return model.SoftwareSourceDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
