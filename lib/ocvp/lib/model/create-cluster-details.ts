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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the Cluster.
 */
export interface CreateClusterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SDDC that the
   * Cluster belongs to.
   *
   */
  "sddcId": string;
  /**
   * The availability domain to create the Cluster's ESXi hosts in. For multi-AD Cluster deployment, set to `multi-AD`.
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
* If this isn't set, the Cluster's `displayName` is used as the prefix.
* <p>
For example, if the value is `myCluster`, the ESXi hosts are named `myCluster-1`,
* `myCluster-2`, and so on.
* 
    */
  "instanceDisplayNamePrefix"?: string;
  /**
   * The number of ESXi hosts to create in the Cluster. You can add more hosts later
   * (see {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}).
   * <p>
   **Note:** If you later delete EXSi hosts from a production Cluster to make SDDC
   * total host count less than 3, you are still billed for the 3 minimum recommended
   * ESXi hosts. Also, you cannot add more VMware workloads to the Cluster until the
   * SDDC again has at least 3 ESXi hosts.
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
   * This value is required only when `initialHostShapeName` is a standard shape.
   *
   */
  "datastores"?: Array<model.DatastoreInfo>;
  /**
   * The VMware software bundle to install on the ESXi hosts in the Cluster. To get a list of the available versions, use
   * {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}.
   *
   */
  "vmwareSoftwareVersion"?: string;
  /**
   * The ESXi software bundle to install on the ESXi hosts in the Cluster.
   * Only versions under the same vmwareSoftwareVersion and have been validate by Oracle Cloud VMware Solution will be accepted.
   * To get a list of the available versions, use
   * {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}.
   *
   */
  "esxiSoftwareVersion"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateClusterDetails {
  export function getJsonObj(obj: CreateClusterDetails): object {
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
  export function getDeserializedJsonObj(obj: CreateClusterDetails): object {
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
