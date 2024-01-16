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
 * Summary of a glossary. A glossary of business terms, such as 'Customer', 'Account', 'Contact', 'Address',
 * or 'Product', with definitions, used to provide common meaning across disparate data assets. Business glossaries
 * may be hierarchical where some terms may contain child terms to allow them to be used as 'taxonomies'.
 * By linking data assets, data entities, and attributes to glossaries and glossary terms, the glossary can act as a
 * way of organizing data catalog objects in a hierarchy to make a large number of objects more navigable and easier to
 * consume. Objects in the data catalog, such as data assets or data entities, may be linked to any level in the
 * glossary, so that the glossary can be used to browse the available data according to the business model of the
 * organization.
 *
 */
export interface GlossarySummary {
  /**
   * Unique glossary key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * The date and time the glossary was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2019-03-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * Detailed description of the glossary.
   */
  "description"?: string;
  /**
   * URI to the glossary instance in the API.
   */
  "uri"?: string;
  /**
   * Status of the approval process workflow for this business glossary.
   */
  "workflowStatus"?: model.TermWorkflowStatus;
  /**
   * State of the Glossary.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The unique key of the job definition resource that was used in the Glossary import.
   */
  "importJobDefinitionKey"?: string;
  /**
   * The unique key of the job policy for Glossary import.
   */
  "importJobKey"?: string;
  /**
   * The unique key of the parent job execution for which the log resource was created.
   */
  "latestImportJobExecutionKey"?: string;
  /**
   * Status of the latest glossary import job execution, such as running, paused, or completed.
   * This may include additional information like time import started , import file size and % of completion
   *
   */
  "latestImportJobExecutionStatus"?: string;
}

export namespace GlossarySummary {
  export function getJsonObj(obj: GlossarySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GlossarySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
