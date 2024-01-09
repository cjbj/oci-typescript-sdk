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
 * The license record summary collection.
 */
export interface LicenseRecordCollection {
  /**
   * The license record summary collection.
   */
  "items": Array<model.LicenseRecordSummary>;
}

export namespace LicenseRecordCollection {
  export function getJsonObj(obj: LicenseRecordCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.LicenseRecordSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LicenseRecordCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.LicenseRecordSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
