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
 * Instance launch details.
 * Use the `sourceDetails` parameter to specify whether a boot volume or an image should be used to launch a new instance.
 *
 */
export interface LaunchInstanceDetails {
  /**
    * The availability domain of the instance.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compute capacity reservation this instance is launched under.
   * You can opt out of all default reservations by specifying an empty string as input for this field.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "capacityReservationId"?: string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  "createVnicDetails"?: model.CreateVnicDetails;
  /**
   * The OCID of the dedicated virtual machine host to place the instance on.
   *
   */
  "dedicatedVmHostId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
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
    * Additional metadata key/value pairs that you provide. They serve the same purpose and
* functionality as fields in the `metadata` object.
* <p>
They are distinguished from `metadata` fields in that these can be nested JSON objects
* (whereas `metadata` fields are string/string maps only).
* <p>
The combined size of the `metadata` and `extendedMetadata` objects can be a maximum of
* 32,000 bytes.
* 
    */
  "extendedMetadata"?: { [key: string]: any };
  /**
    * A fault domain is a grouping of hardware and infrastructure within an availability domain.
* Each availability domain contains three fault domains. Fault domains let you distribute your
* instances so that they are not on the same physical hardware within a single availability domain.
* A hardware failure or Compute hardware maintenance that affects one fault domain does not affect
* instances in other fault domains.
* <p>
If you do not specify the fault domain, the system selects one for you.
* <p>

* To get a list of fault domains, use the
* {@link #listFaultDomains(ListFaultDomainsRequest) listFaultDomains} operation in the
* Identity and Access Management Service API.
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the
   * [compute cluster](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/compute-clusters.htm) that the instance will be created in.
   *
   */
  "computeClusterId"?: string;
  /**
   * Deprecated. Instead use `hostnameLabel` in
   * {@link CreateVnicDetails}.
   * If you provide both, the values must match.
   *
   */
  "hostnameLabel"?: string;
  /**
   * Deprecated. Use `sourceDetails` with {@link #instanceSourceViaImageDetails(InstanceSourceViaImageDetailsRequest) instanceSourceViaImageDetails}
   * source type instead. If you specify values for both, the values must match.
   *
   */
  "imageId"?: string;
  /**
    * This is an advanced option.
* <p>
When a bare metal or virtual machine
* instance boots, the iPXE firmware that runs on the instance is
* configured to run an iPXE script to continue the boot process.
* <p>
If you want more control over the boot process, you can provide
* your own custom iPXE script that will run when the instance boots.
* Be aware that the same iPXE script will run
* every time an instance boots, not only after the initial
* LaunchInstance call.
* <p>
The default iPXE script connects to the instance's local boot
* volume over iSCSI and performs a network boot. If you use a custom iPXE
* script and want to network-boot from the instance's local boot volume
* over iSCSI the same way as the default iPXE script, use the
* following iSCSI IP address: 169.254.0.2, and boot volume IQN:
* iqn.2015-02.oracle.boot.
* <p>
If your instance boot volume attachment type is paravirtualized,
* the boot volume is attached to the instance through virtio-scsi and no iPXE script is used.
* If your instance boot volume attachment type is paravirtualized
* and you use custom iPXE to network boot into your instance,
* the primary boot volume is attached as a data volume through virtio-scsi drive.
* <p>
For more information about the Bring Your Own Image feature of
* Oracle Cloud Infrastructure, see
* [Bring Your Own Image](https://docs.cloud.oracle.com/iaas/Content/Compute/References/bringyourownimage.htm).
* <p>
For more information about iPXE, see http://ipxe.org.
* 
    */
  "ipxeScript"?: string;
  "launchOptions"?: model.LaunchOptions;
  "instanceOptions"?: model.InstanceOptions;
  "availabilityConfig"?: model.LaunchInstanceAvailabilityConfigDetails;
  "preemptibleInstanceConfig"?: model.PreemptibleInstanceConfigDetails;
  /**
    * Custom metadata key/value pairs that you provide, such as the SSH public key
* required to connect to the instance.
* <p>
A metadata service runs on every launched instance. The service is an HTTP
* endpoint listening on 169.254.169.254. You can use the service to:
* <p>
* Provide information to [Cloud-Init](https://cloudinit.readthedocs.org/en/latest/)
*   to be used for various system initialization tasks.
* <p>
* Get information about the instance, including the custom metadata that you
*   provide when you launch the instance.
* <p>
 **Providing Cloud-Init Metadata**
* <p>
 You can use the following metadata key names to provide information to
*  Cloud-Init:
* <p>
 **\"ssh_authorized_keys\"** - Provide one or more public SSH keys to be
*  included in the `~/.ssh/authorized_keys` file for the default user on the
*  instance. Use a newline character to separate multiple keys. The SSH
*  keys must be in the format necessary for the `authorized_keys` file, as shown
*  in the example below.
* <p>
 **\"user_data\"** - Provide your own base64-encoded data to be used by
*  Cloud-Init to run custom scripts or provide custom Cloud-Init configuration. For
*  information about how to take advantage of user data, see the
*  [Cloud-Init Documentation](http://cloudinit.readthedocs.org/en/latest/topics/format.html).
* <p>
 **Metadata Example**
* <p>
      \"metadata\" : {
*          \"quake_bot_level\" : \"Severe\",
*          \"ssh_authorized_keys\" : \"ssh-rsa <your_public_SSH_key>== rsa-key-20160227\",
*          \"user_data\" : \"<your_public_SSH_key>==\"
*       }
*  **Getting Metadata on the Instance**
* <p>
 To get information about your instance, connect to the instance using SSH and issue any of the
*  following GET requests:
* <p>
     curl -H \"Authorization: Bearer Oracle\" http://169.254.169.254/opc/v2/instance/
*      curl -H \"Authorization: Bearer Oracle\" http://169.254.169.254/opc/v2/instance/metadata/
*      curl -H \"Authorization: Bearer Oracle\" http://169.254.169.254/opc/v2/instance/metadata/<any-key-name>
* <p>
 You'll get back a response that includes all the instance information; only the metadata information; or
*  the metadata information for the specified key name, respectively.
* <p>
 The combined size of the `metadata` and `extendedMetadata` objects can be a maximum of 32,000 bytes.
* 
    */
  "metadata"?: { [key: string]: string };
  "agentConfig"?: model.LaunchInstanceAgentConfigDetails;
  /**
    * The shape of an instance. The shape determines the number of CPUs, amount of memory,
* and other resources allocated to the instance.
* <p>
You can enumerate all available shapes by calling {@link #listShapes(ListShapesRequest) listShapes}.
* 
    */
  "shape"?: string;
  "shapeConfig"?: model.LaunchInstanceShapeConfigDetails;
  "sourceDetails"?: model.InstanceSourceViaImageDetails | model.InstanceSourceViaBootVolumeDetails;
  /**
   * Deprecated. Instead use `subnetId` in
   * {@link CreateVnicDetails}.
   * At least one of them is required; if you provide both, the values must match.
   *
   */
  "subnetId"?: string;
  /**
   * Whether to enable in-transit encryption for the data volume's paravirtualized attachment. This field applies to both block volumes and boot volumes. The default value is false.
   */
  "isPvEncryptionInTransitEnabled"?: boolean;
  "platformConfig"?:
    | model.AmdRomeBmGpuLaunchInstancePlatformConfig
    | model.AmdRomeBmLaunchInstancePlatformConfig
    | model.IntelIcelakeBmLaunchInstancePlatformConfig
    | model.AmdVmLaunchInstancePlatformConfig
    | model.IntelVmLaunchInstancePlatformConfig
    | model.IntelSkylakeBmLaunchInstancePlatformConfig
    | model.AmdMilanBmLaunchInstancePlatformConfig
    | model.GenericBmLaunchInstancePlatformConfig
    | model.AmdMilanBmGpuLaunchInstancePlatformConfig;
  /**
   * The OCID of the Instance Configuration containing instance launch details. Any other fields supplied in this instance launch request will override the details stored in the Instance Configuration for this instance launch.
   */
  "instanceConfigurationId"?: string;
}

export namespace LaunchInstanceDetails {
  export function getJsonObj(obj: LaunchInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "createVnicDetails": obj.createVnicDetails
          ? model.CreateVnicDetails.getJsonObj(obj.createVnicDetails)
          : undefined,

        "launchOptions": obj.launchOptions
          ? model.LaunchOptions.getJsonObj(obj.launchOptions)
          : undefined,
        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getJsonObj(obj.instanceOptions)
          : undefined,
        "availabilityConfig": obj.availabilityConfig
          ? model.LaunchInstanceAvailabilityConfigDetails.getJsonObj(obj.availabilityConfig)
          : undefined,
        "preemptibleInstanceConfig": obj.preemptibleInstanceConfig
          ? model.PreemptibleInstanceConfigDetails.getJsonObj(obj.preemptibleInstanceConfig)
          : undefined,

        "agentConfig": obj.agentConfig
          ? model.LaunchInstanceAgentConfigDetails.getJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.LaunchInstanceShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "platformConfig": obj.platformConfig
          ? model.LaunchInstancePlatformConfig.getJsonObj(obj.platformConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LaunchInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "createVnicDetails": obj.createVnicDetails
          ? model.CreateVnicDetails.getDeserializedJsonObj(obj.createVnicDetails)
          : undefined,

        "launchOptions": obj.launchOptions
          ? model.LaunchOptions.getDeserializedJsonObj(obj.launchOptions)
          : undefined,
        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getDeserializedJsonObj(obj.instanceOptions)
          : undefined,
        "availabilityConfig": obj.availabilityConfig
          ? model.LaunchInstanceAvailabilityConfigDetails.getDeserializedJsonObj(
              obj.availabilityConfig
            )
          : undefined,
        "preemptibleInstanceConfig": obj.preemptibleInstanceConfig
          ? model.PreemptibleInstanceConfigDetails.getDeserializedJsonObj(
              obj.preemptibleInstanceConfig
            )
          : undefined,

        "agentConfig": obj.agentConfig
          ? model.LaunchInstanceAgentConfigDetails.getDeserializedJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.LaunchInstanceShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "platformConfig": obj.platformConfig
          ? model.LaunchInstancePlatformConfig.getDeserializedJsonObj(obj.platformConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
