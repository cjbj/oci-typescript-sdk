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
 * Monitored Resource Alias Reference Source Credential
 */
export interface MonitoredResourceAliasSourceCredential {
  /**
   * The source type and source name combination,delimited with (.) separator. This refers to the pre-existing source which alias cred should point to. Ex. {source type}.{source name} and source type max char limit is 63.
   */
  "source": string;
  /**
   * The name of the pre-existing source credential which alias cred should point to. This should refer to the pre-existing source attribute binded credential name.
   */
  "name": string;
  /**
   * The name of the service owning the credential. Ex stack-monitoring or dbmgmt
   */
  "service": string;
}

export namespace MonitoredResourceAliasSourceCredential {
  export function getJsonObj(obj: MonitoredResourceAliasSourceCredential): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceAliasSourceCredential): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
