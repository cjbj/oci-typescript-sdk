/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Important changes for software. This can include security advisories, bug fixes, or enhancements.
 */
export interface ErratumSummary {
  /**
   * Advisory name.
   */
  "name": string;
  /**
   * Summary description of the erratum.
   */
  "synopsis"?: string;
  /**
   * Date the erratum was issued, as described
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeIssued"?: Date;
  /**
   * Most recent date the erratum was updated, as described
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Type of the erratum.
   */
  "classificationType"?: model.ClassificationTypes;
  /**
   * List of CVEs applicable to this erratum.
   */
  "relatedCves"?: Array<string>;
  /**
   * List of affected OS families.
   */
  "osFamilies"?: Array<model.OsFamily>;
  /**
   * The severity advisory. Only valid for security type advisories.
   */
  "advisorySeverity"?: model.AdvisorySeverity;
}

export namespace ErratumSummary {
  export function getJsonObj(obj: ErratumSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "osFamilies": obj.osFamilies
          ? obj.osFamilies.map(item => {
              return model.OsFamily.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ErratumSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "osFamilies": obj.osFamilies
          ? obj.osFamilies.map(item => {
              return model.OsFamily.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
