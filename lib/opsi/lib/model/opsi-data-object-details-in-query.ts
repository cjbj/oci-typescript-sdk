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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for OPSI data object used in a data object query.
 */
export interface OpsiDataObjectDetailsInQuery {
  /**
   * An array of query parameters to be applied, for the OPSI data objects targetted by dataObjectDetailsTarget, before executing the query.
   * Refer to supportedQueryParams of OpsiDataObject for the supported query parameters.
   *
   */
  "queryParams"?: Array<model.OpsiDataObjectQueryParam>;

  "dataObjectDetailsTarget": string;
}

export namespace OpsiDataObjectDetailsInQuery {
  export function getJsonObj(obj: OpsiDataObjectDetailsInQuery): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryParams": obj.queryParams
          ? obj.queryParams.map(item => {
              return model.OpsiDataObjectQueryParam.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "dataObjectDetailsTarget" in obj && obj.dataObjectDetailsTarget) {
      switch (obj.dataObjectDetailsTarget) {
        case "INDIVIDUAL_OPSIDATAOBJECT":
          return model.IndividualOpsiDataObjectDetailsInQuery.getJsonObj(
            <model.IndividualOpsiDataObjectDetailsInQuery>(<object>jsonObj),
            true
          );
        case "OPSIDATAOBJECTTYPE_OPSIDATAOBJECTS":
          return model.OpsiDataObjectTypeOpsiDataObjectDetailsInQuery.getJsonObj(
            <model.OpsiDataObjectTypeOpsiDataObjectDetailsInQuery>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.dataObjectDetailsTarget}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpsiDataObjectDetailsInQuery): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryParams": obj.queryParams
          ? obj.queryParams.map(item => {
              return model.OpsiDataObjectQueryParam.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "dataObjectDetailsTarget" in obj && obj.dataObjectDetailsTarget) {
      switch (obj.dataObjectDetailsTarget) {
        case "INDIVIDUAL_OPSIDATAOBJECT":
          return model.IndividualOpsiDataObjectDetailsInQuery.getDeserializedJsonObj(
            <model.IndividualOpsiDataObjectDetailsInQuery>(<object>jsonObj),
            true
          );
        case "OPSIDATAOBJECTTYPE_OPSIDATAOBJECTS":
          return model.OpsiDataObjectTypeOpsiDataObjectDetailsInQuery.getDeserializedJsonObj(
            <model.OpsiDataObjectTypeOpsiDataObjectDetailsInQuery>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.dataObjectDetailsTarget}`);
      }
    }
    return jsonObj;
  }
}
