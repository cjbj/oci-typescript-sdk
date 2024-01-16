/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * CA bundle metadata. This summary object does not contain the CA bundle certificates.
 */
export interface CaBundleSummary {
  /**
   * The OCID of the CA bundle.
   */
  "id": string;
  /**
   * A user-friendly name for the CA bundle. Names are unique within a compartment. Avoid entering confidential information. Valid characters include uppercase or lowercase letters, numbers, hyphens, underscores, and periods.
   */
  "name": string;
  /**
   * A brief description of the CA bundle.
   */
  "description"?: string;
  /**
   * A property indicating when the CA bundle was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: {@code 2019-04-03T21:10:29.600Z}
   *
   */
  "timeCreated": Date;
  /**
   * The current lifecycle state of the CA bundle.
   */
  "lifecycleState": model.CaBundleLifecycleState;
  /**
   * Additional information about the current lifecycle state of the CA bundle.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the compartment for the CA bundle.
   */
  "compartmentId": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CaBundleSummary {
  export function getJsonObj(obj: CaBundleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CaBundleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
