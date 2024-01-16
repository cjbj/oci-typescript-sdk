/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

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
 * The details for creating a new compute capacity reservation.
 *
 */
export interface CreateComputeCapacityReservationDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the capacity reservation.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * The availability domain of this compute capacity reservation.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain": string;
  /**
   * Whether this capacity reservation is the default.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "isDefaultReservation"?: boolean;
  /**
    * The capacity configurations for the capacity reservation.
* <p>
To use the reservation for the desired shape, specify the shape, count, and
* optionally the fault domain where you want this configuration.
* 
    */
  "instanceReservationConfigs"?: Array<model.InstanceReservationConfigDetails>;
}

export namespace CreateComputeCapacityReservationDetails {
  export function getJsonObj(obj: CreateComputeCapacityReservationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceReservationConfigs": obj.instanceReservationConfigs
          ? obj.instanceReservationConfigs.map(item => {
              return model.InstanceReservationConfigDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateComputeCapacityReservationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceReservationConfigs": obj.instanceReservationConfigs
          ? obj.instanceReservationConfigs.map(item => {
              return model.InstanceReservationConfigDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
