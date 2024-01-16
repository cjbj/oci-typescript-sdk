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
 * Full term relationship definition. Business term relationship between two terms in a business glossary.
 *
 */
export interface TermRelationship {
  /**
   * Unique term relationship key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.This is the same as relationshipType for termRelationship
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the term relationship usually defined at the time of creation.
   */
  "description"?: string;
  /**
   * Unique id of the related term.
   */
  "relatedTermKey"?: string;
  /**
   * Name of the related term.
   */
  "relatedTermDisplayName"?: string;
  /**
   * Description of the related term.
   */
  "relatedTermDescription"?: string;
  /**
   * Full path of the related term.
   */
  "relatedTermPath"?: string;
  /**
   * Glossary key of the related term.
   */
  "relatedTermGlossaryKey"?: string;
  /**
   * URI to the term relationship instance in the API.
   */
  "uri"?: string;
  /**
   * This relationships parent term key.
   */
  "parentTermKey"?: string;
  /**
   * Name of the parent term.
   */
  "parentTermDisplayName"?: string;
  /**
   * Description of the parent term.
   */
  "parentTermDescription"?: string;
  /**
   * Full path of the parent term.
   */
  "parentTermPath"?: string;
  /**
   * Glossary key of the parent term.
   */
  "parentTermGlossaryKey"?: string;
  /**
   * The date and time the term relationship was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2019-03-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * State of the term relationship.
   */
  "lifecycleState"?: model.LifecycleState;
}

export namespace TermRelationship {
  export function getJsonObj(obj: TermRelationship): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TermRelationship): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
