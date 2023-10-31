/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A sensitive data model is a collection of sensitive columns and their referential relationships. It helps
 * understand the sensitive data landscape, track changes, and efficiently enable security controls such as data
 * masking. It can be managed either manually or by performing sensitive data discovery on a reference target
 * database. [Learn more](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/sensitive-data-models1.html#GUID-849CA7D2-1809-40DD-B6D7-44E46EFF7EB5).
 *
 */
export interface SensitiveDataModel {
  /**
   * The OCID of the sensitive data model.
   */
  "id": string;
  /**
   * The display name of the sensitive data model.
   */
  "displayName": string;
  /**
   * The OCID of the compartment that contains the sensitive data model.
   */
  "compartmentId": string;
  /**
   * The OCID of the reference target database associated with the sensitive data model. All operations such as
   * performing data discovery and adding columns manually are done in the context of the associated target database.
   *
   */
  "targetId": string;
  /**
   * The date and time the sensitive data model was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the sensitive data model was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The current state of the sensitive data model.
   */
  "lifecycleState": model.DiscoveryLifecycleState;
  /**
   * The application suite name identifying a collection of applications. The default value is GENERIC. It's useful
   * only if maintaining a sensitive data model for a suite of applications.
   *
   */
  "appSuiteName": string;
  /**
   * The description of the sensitive data model.
   */
  "description"?: string;
  /**
   * The schemas to be scanned by data discovery jobs.
   */
  "schemasForDiscovery"?: Array<string>;
  /**
   * The OCIDs of the sensitive types to be used by data discovery jobs.
   */
  "sensitiveTypeIdsForDiscovery"?: Array<string>;
  /**
   * Indicates if data discovery jobs should collect and store sample data values for the discovered columns.
   * Sample data helps review the discovered columns and ensure that they actually contain sensitive data.
   * As it collects original data from the target database, it's disabled by default and should be used only if
   * it's acceptable to store sample data in Data Safe's repository in Oracle Cloud. Note that sample data values
   * are not collected for columns with the following data types: LONG, LOB, RAW, XMLTYPE and BFILE.
   *
   */
  "isSampleDataCollectionEnabled": boolean;
  /**
   * Indicates if data discovery jobs should identify potential application-level (non-dictionary) referential
   * relationships between columns. Note that data discovery automatically identifies and adds database-level (dictionary-defined)
   * relationships. This option helps identify application-level relationships that are not defined in the database dictionary,
   * which in turn, helps identify additional sensitive columns and preserve referential integrity during data masking.
   * It's disabled by default and should be used only if there is a need to identify application-level relationships.
   *
   */
  "isAppDefinedRelationDiscoveryEnabled": boolean;
  /**
   * Indicates if all the schemas in the associated target database should be scanned by data discovery jobs.
   * If it is set to true, sensitive data is discovered in all schemas (except for schemas maintained by Oracle).
   *
   */
  "isIncludeAllSchemas": boolean;
  /**
   * Indicates if all the existing sensitive types should be used by data discovery jobs.If it's set to true, the
   * sensitiveTypeIdsForDiscovery attribute is ignored and all sensitive types are used for data discovery.
   *
   */
  "isIncludeAllSensitiveTypes": boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SensitiveDataModel {
  export function getJsonObj(obj: SensitiveDataModel): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveDataModel): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
