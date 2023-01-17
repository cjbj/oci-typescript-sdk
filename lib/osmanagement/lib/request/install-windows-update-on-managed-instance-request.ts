/**
 *
 *
 * OpenAPI spec version: 20190801
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagement/InstallWindowsUpdateOnManagedInstance.ts.html |here} to see how to use InstallWindowsUpdateOnManagedInstanceRequest.
 */
export interface InstallWindowsUpdateOnManagedInstanceRequest extends common.BaseRequest {
  /**
   * OCID for the managed instance
   */
  "managedInstanceId": string;
  /**
   * Unique identifier for the Windows update. NOTE - This is not an OCID,
   * but is a unique identifier assigned by Microsoft.
   * Example: `6981d463-cd91-4a26-b7c4-ea4ded9183ed`
   *
   */
  "windowsUpdateName": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
}
