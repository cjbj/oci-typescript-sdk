/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The current state of the on-premises connector.
 **/
export enum OnPremConnectorLifecycleState {
  Creating = "CREATING",
  Updating = "UPDATING",
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Failed = "FAILED",
  NeedsAttention = "NEEDS_ATTENTION"
}

export namespace OnPremConnectorLifecycleState {
  export function getJsonObj(obj: OnPremConnectorLifecycleState): OnPremConnectorLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: OnPremConnectorLifecycleState
  ): OnPremConnectorLifecycleState {
    return obj;
  }
}
