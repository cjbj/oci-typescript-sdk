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
* For a flexible shape, the number of VNIC attachments that are available for instances that use this shape.
* <p>
If this field is null, then this shape has a fixed maximum number of VNIC attachments equal to `maxVnicAttachments`.
* 
*/
export interface ShapeMaxVnicAttachmentOptions {
  /**
   * The lowest maximum value of VNIC attachments.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "min"?: number;
  /**
   * The highest maximum value of VNIC attachments.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "max"?: number;
  /**
   * The default number of VNIC attachments allowed per OCPU.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "defaultPerOcpu"?: number;
}

export namespace ShapeMaxVnicAttachmentOptions {
  export function getJsonObj(obj: ShapeMaxVnicAttachmentOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeMaxVnicAttachmentOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
