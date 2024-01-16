/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details required to change SQL plan baseline attributes.
 *
 */
export interface ChangeSqlPlanBaselinesAttributesDetails {
  /**
   * The SQL statement handle. It identifies plans associated with a SQL statement
   * for attribute changes. If {@code null} then {@code planName} must be specified.
   *
   */
  "sqlHandle"?: string;
  /**
   * Then plan name. It identifies a specific plan. If {@code null' then all plans associated
   * with a SQL statement identified by }sqlHandle' are considered for attribute changes.
   *
   */
  "planName"?: string;
  /**
   * Indicates whether the plan is available for use by the optimizer.
   */
  "isEnabled"?: boolean;
  /**
   * Indicates whether the plan baseline is fixed. A fixed plan takes precedence over a non-fixed plan.
   */
  "isFixed"?: boolean;
  /**
   * Indicates whether the plan is purged if it is not used for a time period.
   */
  "isAutoPurged"?: boolean;
  "credentials": model.ManagedDatabasePasswordCredential | model.ManagedDatabaseSecretCredential;
}

export namespace ChangeSqlPlanBaselinesAttributesDetails {
  export function getJsonObj(obj: ChangeSqlPlanBaselinesAttributesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeSqlPlanBaselinesAttributesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getDeserializedJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
