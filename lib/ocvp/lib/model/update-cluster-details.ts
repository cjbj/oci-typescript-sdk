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
 * The Cluster information to be updated.
 * <p>
 **Important:** Only the `displayName`, `freeFormTags`, and `definedTags` attributes
 * affect the existing Cluster. Changing the other attributes affects the `Cluster` object, but not
 * the VMware environment currently running on that Cluster. Those other attributes are used
 * by the Oracle Cloud VMware Solution *only* for new ESXi hosts that you add to this
 * Cluster in the future with {@link #createEsxiHost(CreateEsxiHostRequest) createEsxiHost}.
 *
 */
export interface UpdateClusterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Cluster.
   * Cluster name requirements are 1-16 character length limit, Must start with a letter, Must be English letters, numbers, - only, No repeating hyphens, Must be unique within the region.
   *
   */
  "displayName"?: string;
  "networkConfiguration"?: model.NetworkConfiguration;
  /**
   * The version of bundled VMware software that the Oracle Cloud VMware Solution will
   * install on any new ESXi hosts that you add to this Cluster in the future. To get a list of the available versions, use
   * {@link #listSupportedVmwareSoftwareVersions(ListSupportedVmwareSoftwareVersionsRequest) listSupportedVmwareSoftwareVersions}.
   *
   */
  "vmwareSoftwareVersion"?: string;
  /**
   * The version of bundled ESXi software that the Oracle Cloud VMware Solution will
   * install on any new ESXi hosts that you add to this Cluster in the future unless a specific version is configured on the ESXi level.
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

export namespace UpdateClusterDetails {
  export function getJsonObj(obj: UpdateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConfiguration": obj.networkConfiguration
          ? model.NetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
