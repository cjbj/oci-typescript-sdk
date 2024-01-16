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
 * Summary of the registration profile.
 */
export interface ProfileSummary {
  /**
   * The OCID of the profile that is immutable on creation.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The description of the registration profile.
   */
  "description"?: string;
  /**
   * The OCID of the tenancy containing the registration profile.
   */
  "compartmentId": string;
  /**
   * The OCID of the management station.
   */
  "managementStationId"?: string;
  /**
   * The type of registration profile. Either SOFTWARESOURCE, GROUP or LIFECYCLE.
   */
  "profileType"?: model.ProfileType;
  /**
   * The software source vendor name.
   */
  "vendorName"?: model.VendorName;
  /**
   * The operating system family.
   */
  "osFamily"?: model.OsFamily;
  /**
   * The architecture type.
   */
  "archType"?: model.ArchType;
  /**
   * The time the the Onboarding was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The current state of the registration profile.
   */
  "lifecycleState"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProfileSummary {
  export function getJsonObj(obj: ProfileSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProfileSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
