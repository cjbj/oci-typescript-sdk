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
 * Properties used in custom atrribute update operations.
 */
export interface UpdateCustomPropertyDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the data asset.
   */
  "description"?: string;
  /**
   * If this field allows to sort from UI
   */
  "isSortable"?: boolean;
  /**
   * If this field allows to filter or create facets from UI
   */
  "isFilterable"?: boolean;
  /**
   * If this field allows multiple values to be set
   */
  "isMultiValued"?: boolean;
  /**
   * If this field is a hidden field
   */
  "isHidden"?: boolean;
  /**
   * If this field is a editable field
   */
  "isEditable"?: boolean;
  /**
   * If this field is displayed in a list view of applicable objects.
   */
  "isShownInList"?: boolean;
  /**
   * If this field is allowed to pop in search results
   */
  "isHiddenInSearch"?: boolean;
  /**
   * If an OCI Event will be emitted when the custom property is modified.
   */
  "isEventEnabled"?: boolean;
  /**
   * Allowed values for the custom property if any
   */
  "allowedValues"?: Array<string>;
  /**
   * A map of maps that contains the properties which are specific to the asset type. Each data asset type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * data assets have required properties within the \"default\" category.
   * Example: {@code {\"properties\": { \"default\": { \"host\": \"host1\", \"port\": \"1521\", \"database\": \"orcl\"}}}}
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace UpdateCustomPropertyDetails {
  export function getJsonObj(obj: UpdateCustomPropertyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCustomPropertyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
