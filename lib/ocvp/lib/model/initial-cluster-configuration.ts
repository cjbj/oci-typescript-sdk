/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20230701
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
 * Details of the initial Cluster of SDDC.
 */
export interface InitialClusterConfiguration {
  /**
   * vSphere Cluster types.
   *
   */
  "vsphereType": model.VsphereTypes;
  /**
   * The availability domain to create the Cluster's ESXi hosts in. For multi-AD Cluster deployment, set to {@code multi-AD}.
   *
   */
  "computeAvailabilityDomain": string;
  /**
   * A descriptive name for the Cluster.
   * Cluster name requirements are 1-16 character length limit, Must start with a letter, Must be English letters, numbers, - only, No repeating hyphens, Must be unique within the region.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * A prefix used in the name of each ESXi host and Compute instance in the Cluster.
* If this isn't set, the Cluster's {@code displayName} is used as the prefix.
* <p>
For example, if the value is {@code myCluster}, the ESXi hosts are named {@code myCluster-1},
* {@code myCluster-2}, and so on.
* 
    */
  "instanceDisplayNamePrefix"?: string;
  /**
   * The number of ESXi hosts to create in the Cluster. You can add more hosts later
   * (see {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}). Creating
   * a Cluster with a ESXi host count of 1 will be considered a single ESXi host Cluster.
   * <p>
   **Note:** If you later delete EXSi hosts from a production Cluster to total less
   * than 3, you are still billed for the 3 minimum recommended ESXi hosts. Also,
   * you cannot add more VMware workloads to the Cluster until it again has at least
   * 3 ESXi hosts.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "esxiHostsCount": number;
  "networkConfiguration": model.NetworkConfiguration;
  /**
   * The billing option selected during Cluster creation.
   * {@link #listSupportedCommitments(ListSupportedCommitmentsRequest) listSupportedCommitments}.
   *
   */
  "initialCommitment"?: model.Commitment;
  /**
   * The CIDR block for the IP addresses that VMware VMs in the Cluster use to run application
   * workloads.
   *
   */
  "workloadNetworkCidr"?: string;
  /**
   * The initial compute shape of the Cluster's ESXi hosts.
   * {@link #listSupportedHostShapes(ListSupportedHostShapesRequest) listSupportedHostShapes}.
   *
   */
  "initialHostShapeName"?: string;
  /**
   * The initial OCPU count of the Cluster's ESXi hosts.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "initialHostOcpuCount"?: number;
  /**
   * Indicates whether shielded instance is enabled for this Cluster.
   *
   */
  "isShieldedInstanceEnabled"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Capacity Reservation.
   *
   */
  "capacityReservationId"?: string;
  /**
   * A list of datastore info for the Cluster.
   * This value is required only when {@code initialHostShapeName} is a standard shape.
   *
   */
  "datastores"?: Array<model.DatastoreInfo>;
}

export namespace InitialClusterConfiguration {
  export function getJsonObj(obj: InitialClusterConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined,

        "datastores": obj.datastores
          ? obj.datastores.map(item => {
              return model.DatastoreInfo.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InitialClusterConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined,

        "datastores": obj.datastores
          ? obj.datastores.map(item => {
              return model.DatastoreInfo.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
