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
 * Data entity details. A representation of data with a set of attributes, normally representing a single
 * business entity. Synonymous with 'table' or 'view' in a database, or a single logical file structure
 * that one or many files may match.
 *
 */
export interface Entity {
  /**
   * Unique data entity key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Optional user friendly business name of the data entity. If set, this supplements the harvested display name of the object.
   */
  "businessName"?: string;
  /**
   * Detailed description of a data entity.
   */
  "description"?: string;
  /**
   * The date and time the data entity was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the data entity. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created this object in the data catalog.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated this object in the data catalog.
   */
  "updatedById"?: string;
  /**
   * The current state of the data entity.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. An object not in ACTIVE state may have functional limitations,
   * see service documentation for details.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * Unique external key of this object in the source system.
   */
  "externalKey"?: string;
  /**
   * Key of the associated pattern if this is a logical entity.
   */
  "patternKey"?: string;
  /**
   * The expression realized after resolving qualifiers . Used in deriving this logical entity
   */
  "realizedExpression"?: string;
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal"?: Date;
  /**
   * The date and time the entity was harvested, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeHarvested"?: Date;
  /**
   * List of objects and their relationships to this entity.
   */
  "objectRelationships"?: Array<model.ObjectRelationship>;
  /**
   * Time that the data entities status was last updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeStatusUpdated"?: Date;
  /**
   * Property that identifies if the object is a physical object (materialized) or virtual/logical object
   * defined on other objects.
   *
   */
  "isLogical"?: boolean;
  /**
   * Property that identifies if an object is a sub object of a physical or materialized parent object.
   */
  "isPartition"?: boolean;
  /**
   * Unique key of the parent data asset.
   */
  "dataAssetKey"?: string;
  /**
   * Key of the associated folder.
   */
  "folderKey"?: string;
  /**
   * Name of the associated folder. This name is harvested from the source data asset when the parent folder for the entiy is harvested.
   */
  "folderName"?: string;
  /**
   * Full path of the data entity.
   */
  "path"?: string;
  /**
   * Status of the object as updated by the harvest process.
   */
  "harvestStatus"?: model.HarvestStatus;
  /**
   * Key of the last harvest process to update this object.
   */
  "lastJobKey"?: string;
  /**
   * The type of data entity object. Type key's can be found via the '/types' endpoint.
   */
  "typeKey"?: string;
  /**
   * URI to the data entity instance in the API.
   */
  "uri"?: string;
  /**
   * URL of the data entity in the object store.
   */
  "objectStorageUrl"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertyGetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the entity type. Each entity type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * data entities have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"key1\": \"value1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace Entity {
  export function getJsonObj(obj: Entity): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectRelationships": obj.objectRelationships
          ? obj.objectRelationships.map(item => {
              return model.ObjectRelationship.getJsonObj(item);
            })
          : undefined,

        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Entity): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectRelationships": obj.objectRelationships
          ? obj.objectRelationships.map(item => {
              return model.ObjectRelationship.getDeserializedJsonObj(item);
            })
          : undefined,

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
