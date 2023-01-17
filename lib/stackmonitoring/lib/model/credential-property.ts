/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Monitored resource credential property.
 */
export interface CredentialProperty {
  /**
   * The name of the credential property, should confirm with names of properties of this credential's type. Ex. For JMXCreds type , credential property name for weblogic user is 'Username'.
   */
  "name": string;
  /**
   * The value of the credential property name. Ex. For JMXCreds type, credential property value for 'Username' property is 'weblogic'.
   */
  "value": string;
}

export namespace CredentialProperty {
  export function getJsonObj(obj: CredentialProperty): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CredentialProperty): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
