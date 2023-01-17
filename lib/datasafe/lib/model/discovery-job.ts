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
 * A data discovery job. It helps track job's metadata as well as result statistics.
 */
export interface DiscoveryJob {
  /**
   * The OCID of the discovery job.
   */
  "id": string;
  /**
   * The type of the discovery job. It defines the job's scope.
   * NEW identifies new sensitive columns in the target database that are not in the sensitive data model.
   * DELETED identifies columns that are present in the sensitive data model but have been deleted from the target database.
   * MODIFIED identifies columns that are present in the target database as well as the sensitive data model but some of their attributes have been modified.
   * ALL covers all the above three scenarios and reports new, deleted and modified columns.
   *
   */
  "discoveryType": DiscoveryJob.DiscoveryType;
  /**
   * The display name of the discovery job.
   */
  "displayName": string;
  /**
   * The OCID of the compartment that contains the discovery job.
   */
  "compartmentId": string;
  /**
   * The date and time the discovery job started, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeStarted": Date;
  /**
   * The date and time the discovery job finished, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339)..
   */
  "timeFinished": Date;
  /**
   * The current state of the discovery job.
   */
  "lifecycleState": model.DiscoveryLifecycleState;
  /**
   * The OCID of the sensitive data model associated with the discovery job.
   */
  "sensitiveDataModelId": string;
  /**
   * The OCID of the target database associated with the discovery job.
   */
  "targetId": string;
  /**
   * The schemas used for data discovery.
   */
  "schemasForDiscovery"?: Array<string>;
  /**
   * The OCIDs of the sensitive types used for data discovery.
   */
  "sensitiveTypeIdsForDiscovery"?: Array<string>;
  /**
   * Indicates if the discovery job should collect and store sample data values for the discovered columns.
   * Sample data helps review the discovered columns and ensure that they actually contain sensitive data.
   * As it collects original data from the target database, it's disabled by default and should be used only
   * if it's acceptable to store sample data in Data Safe's repository in Oracle Cloud. Note that sample data
   * values are not collected for columns with the following data types: LONG, LOB, RAW, XMLTYPE and BFILE.
   *
   */
  "isSampleDataCollectionEnabled": boolean;
  /**
   * Indicates if the discovery job should identify potential application-level (non-dictionary) referential
   * relationships between columns. Note that data discovery automatically identifies and adds database-level (dictionary-defined)
   * relationships. This option helps identify application-level relationships that are not defined in the database dictionary,
   * which in turn, helps identify additional sensitive columns and preserve referential integrity during data masking.
   * It's disabled by default and should be used only if there is a need to identify application-level relationships.
   *
   */
  "isAppDefinedRelationDiscoveryEnabled": boolean;
  /**
   * Indicates if all the schemas in the associated target database are used for data discovery.
   * If it's set to true, the schemasForDiscovery attribute is ignored and all schemas are used.
   *
   */
  "isIncludeAllSchemas": boolean;
  /**
   * Indicates if all the existing sensitive types are used for data discovery. If it's set to true, the
   * sensitiveTypeIdsForDiscovery attribute is ignored and all sensitive types are used.
   *
   */
  "isIncludeAllSensitiveTypes": boolean;
  /**
   * The total number of schemas scanned by the discovery job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSchemasScanned": number;
  /**
   * The total number of objects (tables and editioning views) scanned by the discovery job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalObjectsScanned": number;
  /**
   * The total number of columns scanned by the discovery job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalColumnsScanned": number;
  /**
   * The total number of new sensitive columns identified by the discovery job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalNewSensitiveColumns": number;
  /**
   * The total number of modified sensitive columns identified by the discovery job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalModifiedSensitiveColumns": number;
  /**
   * The total number of deleted sensitive columns identified by the discovery job. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalDeletedSensitiveColumns": number;
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

export namespace DiscoveryJob {
  export enum DiscoveryType {
    All = "ALL",
    New = "NEW",
    Modified = "MODIFIED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DiscoveryJob): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryJob): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
