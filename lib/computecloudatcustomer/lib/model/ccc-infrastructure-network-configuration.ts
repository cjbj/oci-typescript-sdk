/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer infrastructures and upgrade schedules.
For more information see [Compute Cloud@Customer documentation](/iaas/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * Configuration information for the Compute Cloud@Customer infrastructure. This
 * network configuration information cannot be updated and is retrieved from the data center.
 * The information will only be available
 * after the connectionState is transitioned to CONNECTED.
 *
 */
export interface CccInfrastructureNetworkConfiguration {
  /**
   * Information about the management nodes that are provisioned in the Compute Cloud@Customer
   * infrastructure.
   *
   */
  "managementNodes"?: Array<model.CccInfrastructureManagementNode>;
  /**
   * Uplink port speed defined in gigabytes per second.
   * All uplink ports must have identical speed.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uplinkPortSpeedInGbps"?: number;
  /**
   * Number of uplink ports per spine switch. Connectivity is identical on both spine switches.
   * For example, if input is two 100 gigabyte ports; then port-1 and port-2 on both spines will be configured.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uplinkPortCount"?: number;
  /**
   * The virtual local area network (VLAN) maximum transmission unit (MTU) size
   * for the uplink ports.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uplinkVlanMtu"?: number;
  /**
   * Netmask of the subnet that the Compute Cloud@Customer infrastructure is
   * connected to.
   *
   */
  "uplinkNetmask"?: string;
  /**
   * The port forward error correction (FEC) setting for the uplink port on the
   * Compute Cloud@Customer infrastructure.
   *
   */
  "uplinkPortForwardErrorCorrection"?: CccInfrastructureNetworkConfiguration.UplinkPortForwardErrorCorrection;
  /**
   * Domain name to be used as the base domain for the internal network and by
   * public facing services.
   *
   */
  "uplinkDomain"?: string;
  /**
   * Uplink gateway in the datacenter network that the Compute Cloud@Customer
   * connects to.
   *
   */
  "uplinkGatewayIp"?: string;
  /**
   * Addresses of the network spine switches.
   */
  "spineIps"?: Array<string>;
  /**
   * The spine switch public virtual IP (VIP). Traffic routed to the
   * Compute Cloud@Customer infrastructure and
   * and virtual cloud networks (VCNs) should have this address as next hop.
   *
   */
  "spineVip"?: string;
  /**
   * The hostname corresponding to the virtual IP (VIP) address of the management nodes.
   *
   */
  "mgmtVipHostname"?: string;
  /**
   * The IP address used as the virtual IP (VIP) address of the management nodes.
   */
  "mgmtVipIp"?: string;
  /**
   * The domain name system (DNS) addresses that the Compute Cloud@Customer infrastructure
   * uses for the data center network.
   *
   */
  "dnsIps"?: Array<string>;
  "infrastructureRoutingStatic"?: model.CccInfrastructureRoutingStaticDetails;
  "infrastructureRoutingDynamic"?: model.CccInfrastructureRoutingDynamicDetails;
}

export namespace CccInfrastructureNetworkConfiguration {
  export enum UplinkPortForwardErrorCorrection {
    Auto = "AUTO",
    FireCodeFec = "FIRE_CODE_FEC",
    ReedSolomonConsortium16 = "REED_SOLOMON_CONSORTIUM_16",
    ReedSolomonFec = "REED_SOLOMON_FEC",
    ReedSolomonIeee = "REED_SOLOMON_IEEE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CccInfrastructureNetworkConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "managementNodes": obj.managementNodes
          ? obj.managementNodes.map(item => {
              return model.CccInfrastructureManagementNode.getJsonObj(item);
            })
          : undefined,

        "infrastructureRoutingStatic": obj.infrastructureRoutingStatic
          ? model.CccInfrastructureRoutingStaticDetails.getJsonObj(obj.infrastructureRoutingStatic)
          : undefined,
        "infrastructureRoutingDynamic": obj.infrastructureRoutingDynamic
          ? model.CccInfrastructureRoutingDynamicDetails.getJsonObj(
              obj.infrastructureRoutingDynamic
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CccInfrastructureNetworkConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "managementNodes": obj.managementNodes
          ? obj.managementNodes.map(item => {
              return model.CccInfrastructureManagementNode.getDeserializedJsonObj(item);
            })
          : undefined,

        "infrastructureRoutingStatic": obj.infrastructureRoutingStatic
          ? model.CccInfrastructureRoutingStaticDetails.getDeserializedJsonObj(
              obj.infrastructureRoutingStatic
            )
          : undefined,
        "infrastructureRoutingDynamic": obj.infrastructureRoutingDynamic
          ? model.CccInfrastructureRoutingDynamicDetails.getDeserializedJsonObj(
              obj.infrastructureRoutingDynamic
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
