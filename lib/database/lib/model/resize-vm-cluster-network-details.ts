/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of Db server network nodes to extend or shrink the VM cluster network. Applies to Exadata Cloud@Customer
 * instances only.
 *
 */
export interface ResizeVmClusterNetworkDetails {
  /**
   * Actions that can be performed on the VM cluster network.
   * ADD_DBSERVER_NETWORK - Provide Db server network details of network nodes to be added to the VM cluster network.
   * REMOVE_DBSERVER_NETWORK - Provide Db server network details of network nodes to be removed from the VM cluster network.
   *
   */
  "action": ResizeVmClusterNetworkDetails.Action;
  /**
   * Details of the client and backup networks.
   */
  "vmNetworks": Array<model.VmNetworkDetails>;
}

export namespace ResizeVmClusterNetworkDetails {
  export enum Action {
    AddDbserverNetwork = "ADD_DBSERVER_NETWORK",
    RemoveDbserverNetwork = "REMOVE_DBSERVER_NETWORK"
  }

  export function getJsonObj(obj: ResizeVmClusterNetworkDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vmNetworks": obj.vmNetworks
          ? obj.vmNetworks.map(item => {
              return model.VmNetworkDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResizeVmClusterNetworkDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vmNetworks": obj.vmNetworks
          ? obj.vmNetworks.map(item => {
              return model.VmNetworkDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
