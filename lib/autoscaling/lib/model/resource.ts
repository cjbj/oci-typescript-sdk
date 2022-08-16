/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* A resource that is managed by an autoscaling configuration. The only supported type is `instancePool`.
* <p>
Each instance pool can have one autoscaling configuration.
* 
*/
export interface Resource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the resource that is managed by the autoscaling configuration.
   *
   */
  "id": string;

  "type": string;
}

export namespace Resource {
  export function getJsonObj(obj: Resource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "instancePool":
          return model.InstancePoolResource.getJsonObj(
            <model.InstancePoolResource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Resource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "instancePool":
          return model.InstancePoolResource.getDeserializedJsonObj(
            <model.InstancePoolResource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
