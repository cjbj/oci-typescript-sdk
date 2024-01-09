/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Summary representation of a connection to a data asset.
 */
export interface ConnectionSummary {
  /**
   * Unique connection key that is immutable.
   */
  "key": string;
  /**
   * A description of the connection.
   */
  "description"?: string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The unique key of the parent data asset.
   */
  "dataAssetKey"?: string;
  /**
   * The key of the object type. Type key's can be found via the '/types' endpoint.
   */
  "typeKey"?: string;
  /**
   * URI to the connection instance in the API.
   */
  "uri"?: string;
  /**
   * Unique external key for this object as defined in the source systems.
   */
  "externalKey"?: string;
  /**
   * The current state of the connection.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Indicates whether this connection is the default connection.
   */
  "isDefault"?: boolean;
  /**
   * The date and time the connection was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
}

export namespace ConnectionSummary {
  export function getJsonObj(obj: ConnectionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
