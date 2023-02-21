/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * Data Source details for influx.
 */
export interface DataSourceDetailsInflux extends model.DataSourceDetails {
  "versionSpecificDetails": model.InfluxDetailsV1v8 | model.InfluxDetailsV2v0;
  /**
   * Username for connection to Influx
   */
  "userName": string;
  /**
   * Password Secret Id for the influx connection
   */
  "passwordSecretId": string;
  /**
   * Measurement name for influx
   */
  "measurementName": string;
  /**
   * public IP address and port to influx DB
   */
  "url": string;

  "dataSourceType": string;
}

export namespace DataSourceDetailsInflux {
  export function getJsonObj(obj: DataSourceDetailsInflux, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSourceDetails.getJsonObj(obj) as DataSourceDetailsInflux)),
      ...{
        "versionSpecificDetails": obj.versionSpecificDetails
          ? model.InfluxDetails.getJsonObj(obj.versionSpecificDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const dataSourceType = "INFLUX";
  export function getDeserializedJsonObj(
    obj: DataSourceDetailsInflux,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSourceDetails.getDeserializedJsonObj(obj) as DataSourceDetailsInflux)),
      ...{
        "versionSpecificDetails": obj.versionSpecificDetails
          ? model.InfluxDetails.getDeserializedJsonObj(obj.versionSpecificDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
