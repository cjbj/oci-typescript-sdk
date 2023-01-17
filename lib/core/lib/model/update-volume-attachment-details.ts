/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * details for updating a volume attachment.
 */
export interface UpdateVolumeAttachmentDetails {
  /**
   * The iscsi login state of the volume attachment. For a multipath volume attachment,
   * all iscsi sessions need to be all logged-in or logged-out to be in logged-in or logged-out state.
   *
   */
  "iscsiLoginState"?: UpdateVolumeAttachmentDetails.IscsiLoginState;
}

export namespace UpdateVolumeAttachmentDetails {
  export enum IscsiLoginState {
    Unknown = "UNKNOWN",
    LoggingIn = "LOGGING_IN",
    LoginSucceeded = "LOGIN_SUCCEEDED",
    LoginFailed = "LOGIN_FAILED",
    LoggingOut = "LOGGING_OUT",
    LogoutSucceeded = "LOGOUT_SUCCEEDED",
    LogoutFailed = "LOGOUT_FAILED"
  }

  export function getJsonObj(obj: UpdateVolumeAttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVolumeAttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
