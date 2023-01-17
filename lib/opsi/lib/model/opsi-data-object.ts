/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * OPSI data object.
 */
export interface OpsiDataObject {
  /**
   * Unique identifier of OPSI data object.
   */
  "identifier": string;
  /**
   * User-friendly name of OPSI data object.
   */
  "displayName": string;
  /**
   * Description of OPSI data object.
   */
  "description"?: string;
  /**
   * Metadata of columns in a data object.
   */
  "columnsMetadata": Array<model.DataObjectColumnMetadata>;

  "dataObjectType": string;
}

export namespace OpsiDataObject {
  export function getJsonObj(obj: OpsiDataObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnsMetadata": obj.columnsMetadata
          ? obj.columnsMetadata.map(item => {
              return model.DataObjectColumnMetadata.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "dataObjectType" in obj && obj.dataObjectType) {
      switch (obj.dataObjectType) {
        case "HOST_INSIGHTS_DATA_OBJECT":
          return model.HostInsightsDataObject.getJsonObj(
            <model.HostInsightsDataObject>(<object>jsonObj),
            true
          );
        case "EXADATA_INSIGHTS_DATA_OBJECT":
          return model.ExadataInsightsDataObject.getJsonObj(
            <model.ExadataInsightsDataObject>(<object>jsonObj),
            true
          );
        case "DATABASE_INSIGHTS_DATA_OBJECT":
          return model.DatabaseInsightsDataObject.getJsonObj(
            <model.DatabaseInsightsDataObject>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dataObjectType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpsiDataObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "columnsMetadata": obj.columnsMetadata
          ? obj.columnsMetadata.map(item => {
              return model.DataObjectColumnMetadata.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "dataObjectType" in obj && obj.dataObjectType) {
      switch (obj.dataObjectType) {
        case "HOST_INSIGHTS_DATA_OBJECT":
          return model.HostInsightsDataObject.getDeserializedJsonObj(
            <model.HostInsightsDataObject>(<object>jsonObj),
            true
          );
        case "EXADATA_INSIGHTS_DATA_OBJECT":
          return model.ExadataInsightsDataObject.getDeserializedJsonObj(
            <model.ExadataInsightsDataObject>(<object>jsonObj),
            true
          );
        case "DATABASE_INSIGHTS_DATA_OBJECT":
          return model.DatabaseInsightsDataObject.getDeserializedJsonObj(
            <model.DatabaseInsightsDataObject>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dataObjectType}`);
      }
    }
    return jsonObj;
  }
}
