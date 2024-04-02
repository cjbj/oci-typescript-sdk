/**
 * Email Delivery API
 * Use the Email Delivery API to do the necessary set up to send high-volume and application-generated emails through the OCI Email Delivery service.
For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).

 **Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
 If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
 * The configuration details for creating a new email domain.
 *
 */
export interface CreateEmailDomainDetails {
  /**
   * The name of the email domain in the Internet Domain Name System (DNS).
   * The email domain name must be unique in the region for this tenancy.
   * Domain names limited to ASCII characters use alphanumeric, dash (\"-\"), and dot (\".\") characters.
   * The dash and dot are only allowed between alphanumeric characters.
   * For details, see [RFC 5321, section 4.1.2](https://tools.ietf.org/html/rfc5321#section-4.1.2)
   * Non-ASCII domain names should adopt IDNA2008 normalization (RFC 5891-5892).
   *
   */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment for this email domain.
   *
   */
  "compartmentId": string;
  /**
   * A string that describes the details about the domain. It does not have to be unique,
   * and you can change it. Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateEmailDomainDetails {
  export function getJsonObj(obj: CreateEmailDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateEmailDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
