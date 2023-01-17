/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * Summary of the table.
 */
export interface TableSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Human-friendly table name, also immutable.
   */
  "name"?: string;
  /**
   * The time the the table was created. An RFC3339 formatted
   * datetime string.
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the the table's metadata was last updated. An
   * RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  "tableLimits"?: model.TableLimits;
  /**
   * The state of a table.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * True if this table can be reclaimed after an idle period.
   */
  "isAutoReclaimable"?: boolean;
  /**
   * If lifecycleState is INACTIVE, indicates when
   * this table will be automatically removed.
   * An RFC3339 formatted datetime string.
   *
   */
  "timeOfExpiration"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined
   * name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and
   * scoped to a namespace.  Example: `{\"foo-namespace\":
   * {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Read-only system tag. These predefined keys are scoped to
   * namespaces.  At present the only supported namespace is
   * `\"orcl-cloud\"`; and the only key in that namespace is
   * `\"free-tier-retained\"`.
   * Example: `{\"orcl-cloud\"\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace TableSummary {
  export function getJsonObj(obj: TableSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableLimits": obj.tableLimits ? model.TableLimits.getJsonObj(obj.tableLimits) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TableSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableLimits": obj.tableLimits
          ? model.TableLimits.getDeserializedJsonObj(obj.tableLimits)
          : undefined
      }
    };

    return jsonObj;
  }
}
