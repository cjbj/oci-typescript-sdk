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
 * Options for tuning the compatibility and performance of VM shapes.
 *
 */
export interface UpdateLaunchOptions {
  /**
    * Emulation type for the boot volume.
* * `ISCSI` - ISCSI attached block storage device.
* * `PARAVIRTUALIZED` - Paravirtualized disk. This is the default for boot volumes and remote block
* storage volumes on platform images.
* <p>
Before you change the boot volume attachment type, detach all block volumes and VNICs except for
* the boot volume and the primary VNIC.
* <p>
If the instance is running when you change the boot volume attachment type, it will be rebooted.
* <p>
**Note:** Some instances might not function properly if you change the boot volume attachment type. After
* the instance reboots and is running, connect to it. If the connection fails or the OS doesn't behave
* as expected, the changes are not supported. Revert the instance to the original boot volume attachment type.
* 
    */
  "bootVolumeType"?: UpdateLaunchOptions.BootVolumeType;
  /**
    * Emulation type for the physical network interface card (NIC).
* * `VFIO` - Direct attached Virtual Function network controller. This is the networking type
* when you launch an instance using hardware-assisted (SR-IOV) networking.
* * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers.
* <p>
Before you change the networking type, detach all VNICs and block volumes except for the primary
* VNIC and the boot volume.
* <p>
The image must have paravirtualized drivers installed. For more information, see
* [Editing an Instance](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/resizinginstances.htm).
* <p>
If the instance is running when you change the network type, it will be rebooted.
* <p>
**Note:** Some instances might not function properly if you change the networking type. After
* the instance reboots and is running, connect to it. If the connection fails or the OS doesn't behave
* as expected, the changes are not supported. Revert the instance to the original networking type.
* 
    */
  "networkType"?: UpdateLaunchOptions.NetworkType;
  /**
    * Whether to enable in-transit encryption for the volume's paravirtualized attachment.
* To enable in-transit encryption for block volumes and boot volumes, this field must be set to `true`.
* <p>
Data in transit is transferred over an internal and highly secure network. If you have specific
* compliance requirements related to the encryption of the data while it is moving between the
* instance and the boot volume or the block volume, you can enable in-transit encryption.
* In-transit encryption is not enabled by default.
* <p>
All boot volumes and block volumes are encrypted at rest.
* <p>
For more information, see [Block Volume Encryption](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/overview.htm#Encrypti).
* 
    */
  "isPvEncryptionInTransitEnabled"?: boolean;
}

export namespace UpdateLaunchOptions {
  export enum BootVolumeType {
    Iscsi = "ISCSI",
    Paravirtualized = "PARAVIRTUALIZED"
  }

  export enum NetworkType {
    Vfio = "VFIO",
    Paravirtualized = "PARAVIRTUALIZED"
  }

  export function getJsonObj(obj: UpdateLaunchOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateLaunchOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
