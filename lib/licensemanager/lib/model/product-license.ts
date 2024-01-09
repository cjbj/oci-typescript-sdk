/**
 * License Manager API
 * Use the License Manager API to manage product licenses and license records. For more information, see [License Manager Overview](/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm).
 * OpenAPI spec version: 20220430
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
 * The product license details.
 */
export interface ProductLicense {
  /**
   * The product license [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "id": string;
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) where the product license is created.
   */
  "compartmentId": string;
  /**
   * The current product license status.
   */
  "status": model.Status;
  /**
   * Status description for the current product license status.
   *
   */
  "statusDescription"?: string;
  /**
   * The total number of licenses available for the product license, calculated by adding up all the license counts for active license records associated with the product license. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalActiveLicenseUnitCount"?: number;
  /**
   * The current product license state.
   */
  "lifecycleState"?: model.LifeCycleState;
  /**
   * The number of license units consumed. Updated after each allocation run.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalLicenseUnitsConsumed"?: number;
  /**
   * The number of license records associated with the product license.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalLicenseRecordCount"?: number;
  /**
   * The number of active license records associated with the product license. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "activeLicenseRecordCount"?: number;
  /**
   * The product license unit.
   */
  "licenseUnit": model.LicenseUnit;
  /**
   * Specifies whether the vendor is Oracle or a third party.
   */
  "isVendorOracle": boolean;
  /**
   * Specifies whether or not the product license is oversubscribed.
   */
  "isOverSubscribed"?: boolean;
  /**
   * Specifies if the license unit count is unlimited.
   */
  "isUnlimited"?: boolean;
  /**
   * License record name
   *
   */
  "displayName": string;
  /**
   * The vendor of the ProductLicense
   *
   */
  "vendorName"?: string;
  /**
   * The time the product license was created. An [RFC 3339](https://tools.ietf.org/html/rfc3339)-formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the product license was updated. An [RFC 3339](https://tools.ietf.org/html/rfc3339)-formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The images associated with the product license.
   */
  "images"?: Array<model.ImageResponse>;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProductLicense {
  export function getJsonObj(obj: ProductLicense): object {
    const jsonObj = {
      ...obj,
      ...{
        "images": obj.images
          ? obj.images.map(item => {
              return model.ImageResponse.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProductLicense): object {
    const jsonObj = {
      ...obj,
      ...{
        "images": obj.images
          ? obj.images.map(item => {
              return model.ImageResponse.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
