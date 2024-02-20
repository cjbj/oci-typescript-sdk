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
* The destination details for the image export.
* <p>
Set {@code destinationType} to {@code objectStorageTuple}
* and use {@link #exportImageViaObjectStorageTupleDetails(ExportImageViaObjectStorageTupleDetailsRequest) exportImageViaObjectStorageTupleDetails}
* when specifying the namespace, bucket name, and object name.
* <p>
Set {@code destinationType} to {@code objectStorageUri} and
* use {@link #exportImageViaObjectStorageUriDetails(ExportImageViaObjectStorageUriDetailsRequest) exportImageViaObjectStorageUriDetails}
* when specifying the Object Storage URL.
* 
*/
export interface ExportImageDetails {
  /**
    * The format to export the image to. The default value is {@code OCI}.
* <p>
The following image formats are available:
* <p>
- {@code OCI} - Oracle Cloud Infrastructure file with a QCOW2 image and Oracle Cloud Infrastructure metadata (.oci).
* Use this format to export a custom image that you want to import into other tenancies or regions.
* - {@code QCOW2} - QEMU Copy On Write (.qcow2)
* - {@code VDI} - Virtual Disk Image (.vdi) for Oracle VM VirtualBox
* - {@code VHD} - Virtual Hard Disk (.vhd) for Hyper-V
* - {@code VMDK} - Virtual Machine Disk (.vmdk)
* 
    */
  "exportFormat"?: ExportImageDetails.ExportFormat;

  "destinationType": string;
}

export namespace ExportImageDetails {
  export enum ExportFormat {
    Qcow2 = "QCOW2",
    Vmdk = "VMDK",
    Oci = "OCI",
    Vhd = "VHD",
    Vdi = "VDI"
  }

  export function getJsonObj(obj: ExportImageDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "destinationType" in obj && obj.destinationType) {
      switch (obj.destinationType) {
        case "objectStorageUri":
          return model.ExportImageViaObjectStorageUriDetails.getJsonObj(
            <model.ExportImageViaObjectStorageUriDetails>(<object>jsonObj),
            true
          );
        case "objectStorageTuple":
          return model.ExportImageViaObjectStorageTupleDetails.getJsonObj(
            <model.ExportImageViaObjectStorageTupleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.destinationType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportImageDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "destinationType" in obj && obj.destinationType) {
      switch (obj.destinationType) {
        case "objectStorageUri":
          return model.ExportImageViaObjectStorageUriDetails.getDeserializedJsonObj(
            <model.ExportImageViaObjectStorageUriDetails>(<object>jsonObj),
            true
          );
        case "objectStorageTuple":
          return model.ExportImageViaObjectStorageTupleDetails.getDeserializedJsonObj(
            <model.ExportImageViaObjectStorageTupleDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.destinationType}`);
      }
    }
    return jsonObj;
  }
}
