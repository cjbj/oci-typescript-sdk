/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * The API key summary.
 */
export interface BdsApiKeySummary {
  /**
   * Identifier of the user's API key.
   */
  "id": string;
  /**
   * User friendly identifier used to uniquely differentiate between different API keys.
   * Only ASCII alphanumeric characters with no spaces allowed.
   *
   */
  "keyAlias": string;
  /**
   * The current status of the API key.
   */
  "lifecycleState": string;
  /**
   * The name of the region to establish the Object Storage endpoint which was set as part of key creation operation.
   * If no region was provided this will be set to be the same region where the cluster lives. Example us-phoenix-1 .
   *
   */
  "defaultRegion": string;
  /**
   * The time the API key was created, shown as an RFC 3339 formatted datetime string.
   */
  "timeCreated": Date;
}

export namespace BdsApiKeySummary {
  export function getJsonObj(obj: BdsApiKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BdsApiKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
