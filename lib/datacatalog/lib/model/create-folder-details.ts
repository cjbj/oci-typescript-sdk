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
 * Properties used in folder create operations.
 */
export interface CreateFolderDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Optional user friendly business name of the folder. If set, this supplements the harvested display name of the object.
   */
  "businessName"?: string;
  /**
   * Detailed description of a folder.
   */
  "description"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertySetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the folder type. Each folder type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * folders have required properties within the \"default\" category. To determine the set of optional and
   * required properties for a folder type, a query can be done on '/types?type=folder' that returns a
   * collection of all folder types. The appropriate folder type, which includes definitions of all of
   * it's properties, can be identified from this collection.
   * Example: `{\"properties\": { \"default\": { \"key1\": \"value1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
  /**
   * The key of the containing folder or null if there isn't a parent folder.
   */
  "parentFolderKey"?: string;
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal": Date;
  /**
   * The job key of the harvest process that updated the folder definition from the source system.
   */
  "lastJobKey"?: string;
  /**
   * Folder harvesting status.
   */
  "harvestStatus"?: model.HarvestStatus;
  /**
   * Type key of the object. Type keys can be found via the '/types' endpoint.
   */
  "typeKey"?: string;
}

export namespace CreateFolderDetails {
  export function getJsonObj(obj: CreateFolderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateFolderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
