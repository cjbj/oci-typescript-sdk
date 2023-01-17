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
 * A sensitive type defines a particular type or class of sensitive data. It can be a basic sensitive type with regular
 * expressions or a sensitive category. While sensitive types are used for data discovery, sensitive categories are used
 * for logically grouping the related or similar sensitive types. [Learn more](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/sensitive-types.html#GUID-45A5A3CB-5B67-4C75-9ACC-DD511D14E7C4).
 *
 */
export interface SensitiveType {
  /**
   * The OCID of the sensitive type.
   */
  "id": string;
  /**
   * The display name of the sensitive type.
   */
  "displayName": string;
  /**
   * The OCID of the compartment that contains the sensitive type.
   */
  "compartmentId": string;
  /**
   * The current state of the sensitive type.
   */
  "lifecycleState": model.DiscoveryLifecycleState;
  /**
   * The short name of the sensitive type.
   */
  "shortName"?: string;
  /**
   * Specifies whether the sensitive type is user-defined or predefined.
   */
  "source": model.SensitiveTypeSource;
  /**
   * The date and time the sensitive type was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the sensitive type was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The description of the sensitive type.
   */
  "description"?: string;
  /**
   * The OCID of the parent sensitive category.
   */
  "parentCategoryId"?: string;
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

  "entityType": string;
}

export namespace SensitiveType {
  export function getJsonObj(obj: SensitiveType): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityType" in obj && obj.entityType) {
      switch (obj.entityType) {
        case "SENSITIVE_TYPE":
          return model.SensitiveTypePattern.getJsonObj(
            <model.SensitiveTypePattern>(<object>jsonObj),
            true
          );
        case "SENSITIVE_CATEGORY":
          return model.SensitiveCategory.getJsonObj(
            <model.SensitiveCategory>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entityType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveType): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entityType" in obj && obj.entityType) {
      switch (obj.entityType) {
        case "SENSITIVE_TYPE":
          return model.SensitiveTypePattern.getDeserializedJsonObj(
            <model.SensitiveTypePattern>(<object>jsonObj),
            true
          );
        case "SENSITIVE_CATEGORY":
          return model.SensitiveCategory.getDeserializedJsonObj(
            <model.SensitiveCategory>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entityType}`);
      }
    }
    return jsonObj;
  }
}
