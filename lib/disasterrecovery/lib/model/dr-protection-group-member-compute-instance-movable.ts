/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Properties for a movable compute instance member of a DR protection group.
 */
export interface DrProtectionGroupMemberComputeInstanceMovable
  extends model.DrProtectionGroupMember {
  /**
    * A flag indicating if the compute instance should be moved to the same fault domain in the destination region. 
* The compute instance launch will fail if this flag is set to true and capacity is not available in the 
* specified fault domain in the destination region.
* <p>
Example: {@code false}
* 
    */
  "isRetainFaultDomain"?: boolean;
  /**
    * The OCID of a capacity reservation in the destination region which will be used to launch
* the compute instance.
* <p>
Example: {@code ocid1.capacityreservation.oc1..uniqueID}
* 
    */
  "destinationCapacityReservationId"?: string;
  /**
   * A list of compute instance VNIC mappings.
   *
   */
  "vnicMappings"?: Array<model.ComputeInstanceMovableVnicMapping>;
  /**
    * The OCID of a compartment in the destination region in which the compute instance
* should be launched.
* <p>
Example: {@code ocid1.compartment.oc1..uniqueID}
* 
    */
  "destinationCompartmentId"?: string;
  /**
    * The OCID of a dedicated VM host in the destination region where the compute instance
* should be launched.
* <p>
Example: {@code ocid1.dedicatedvmhost.oc1..uniqueID}
* 
    */
  "destinationDedicatedVmHostId"?: string;
  /**
   * A list of details of operations performed on file systems.
   *
   */
  "fileSystemOperations"?: Array<model.ComputeInstanceMovableFileSystemOperation>;

  "memberType": string;
}

export namespace DrProtectionGroupMemberComputeInstanceMovable {
  export function getJsonObj(
    obj: DrProtectionGroupMemberComputeInstanceMovable,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrProtectionGroupMember.getJsonObj(
            obj
          ) as DrProtectionGroupMemberComputeInstanceMovable)),
      ...{
        "vnicMappings": obj.vnicMappings
          ? obj.vnicMappings.map(item => {
              return model.ComputeInstanceMovableVnicMapping.getJsonObj(item);
            })
          : undefined,

        "fileSystemOperations": obj.fileSystemOperations
          ? obj.fileSystemOperations.map(item => {
              return model.ComputeInstanceMovableFileSystemOperation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const memberType = "COMPUTE_INSTANCE_MOVABLE";
  export function getDeserializedJsonObj(
    obj: DrProtectionGroupMemberComputeInstanceMovable,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrProtectionGroupMember.getDeserializedJsonObj(
            obj
          ) as DrProtectionGroupMemberComputeInstanceMovable)),
      ...{
        "vnicMappings": obj.vnicMappings
          ? obj.vnicMappings.map(item => {
              return model.ComputeInstanceMovableVnicMapping.getDeserializedJsonObj(item);
            })
          : undefined,

        "fileSystemOperations": obj.fileSystemOperations
          ? obj.fileSystemOperations.map(item => {
              return model.ComputeInstanceMovableFileSystemOperation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
