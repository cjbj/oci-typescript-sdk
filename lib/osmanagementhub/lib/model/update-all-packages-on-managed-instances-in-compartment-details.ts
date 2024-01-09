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
 * The details about the package types to be updated.
 */
export interface UpdateAllPackagesOnManagedInstancesInCompartmentDetails {
  /**
   * The compartment being targeted by this operation.
   */
  "compartmentId": string;
  /**
   * The type of updates to be applied.
   */
  "updateTypes"?: Array<UpdateAllPackagesOnManagedInstancesInCompartmentDetails.UpdateTypes>;
  "workRequestDetails"?: model.WorkRequestDetails;
}

export namespace UpdateAllPackagesOnManagedInstancesInCompartmentDetails {
  export enum UpdateTypes {
    Security = "SECURITY",
    Bugfix = "BUGFIX",
    Enhancement = "ENHANCEMENT",
    Other = "OTHER",
    KspliceKernel = "KSPLICE_KERNEL",
    KspliceUserspace = "KSPLICE_USERSPACE",
    All = "ALL"
  }

  export function getJsonObj(obj: UpdateAllPackagesOnManagedInstancesInCompartmentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: UpdateAllPackagesOnManagedInstancesInCompartmentDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getDeserializedJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
