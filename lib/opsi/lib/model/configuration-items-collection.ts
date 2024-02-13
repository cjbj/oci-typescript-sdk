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
 * Collection of configuration item summary objects.
 */
export interface ConfigurationItemsCollection {
  /**
   * Array of configuration item summary objects.
   */
  "configItems"?: Array<model.ConfigurationItemSummary>;

  "opsiConfigType": string;
}

export namespace ConfigurationItemsCollection {
  export function getJsonObj(obj: ConfigurationItemsCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "configItems": obj.configItems
          ? obj.configItems.map(item => {
              return model.ConfigurationItemSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "opsiConfigType" in obj && obj.opsiConfigType) {
      switch (obj.opsiConfigType) {
        case "UX_CONFIGURATION":
          return model.UxConfigurationItemsCollection.getJsonObj(
            <model.UxConfigurationItemsCollection>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.opsiConfigType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigurationItemsCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "configItems": obj.configItems
          ? obj.configItems.map(item => {
              return model.ConfigurationItemSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "opsiConfigType" in obj && obj.opsiConfigType) {
      switch (obj.opsiConfigType) {
        case "UX_CONFIGURATION":
          return model.UxConfigurationItemsCollection.getDeserializedJsonObj(
            <model.UxConfigurationItemsCollection>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.opsiConfigType}`);
      }
    }
    return jsonObj;
  }
}
