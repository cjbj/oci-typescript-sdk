/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The data used to create a new SSL certificate.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 */
export interface CreateCertificateDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to create the SSL certificate.
   */
  "compartmentId": string;
  /**
   * A user-friendly name for the SSL certificate. The name can be changed and does not need to be unique.
   */
  "displayName"?: string;
  /**
    * The data of the SSL certificate.
* <p>

* **Note:** Many SSL certificate providers require an intermediate certificate chain to ensure a trusted status.
* If your SSL certificate requires an intermediate certificate chain, please append the intermediate certificate
* key in the `certificateData` field after the leaf certificate issued by the SSL certificate provider. If you
* are unsure if your certificate requires an intermediate certificate chain, see your certificate
* provider's documentation.
* <p>

* The example below shows an intermediate certificate appended to a leaf certificate.
* 
    */
  "certificateData": string;
  /**
   * The private key of the SSL certificate.
   */
  "privateKeyData": string;
  /**
   * Set to `true` if the SSL certificate is self-signed.
   */
  "isTrustVerificationDisabled"?: boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateCertificateDetails {
  export function getJsonObj(obj: CreateCertificateDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCertificateDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
