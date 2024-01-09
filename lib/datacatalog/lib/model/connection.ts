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
 * Detailed representation of a connection to a data asset, minus any sensitive properties.
 */
export interface Connection {
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
   * The date and time the connection was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the connection. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the connection.
   */
  "createdById"?: string;
  /**
   * OCID of the user who modified the connection.
   */
  "updatedById"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertyGetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the connection type. Each connection type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * connections have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"username\": \"user1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
  /**
   * Unique external key of this object from the source system.
   */
  "externalKey"?: string;
  /**
   * Time that the connections status was last updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeStatusUpdated"?: Date;
  /**
   * The current state of the connection.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Indicates whether this connection is the default connection.
   */
  "isDefault"?: boolean;
  /**
   * Unique key of the parent data asset.
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
}

export namespace Connection {
  export function getJsonObj(obj: Connection): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Connection): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
