/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Properties used in connection create operations.
 */
export interface CreateConnectionDetails {
  /**
   * Generated key that can be used in API calls to identify connection. On scenarios where reference to the connection is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name": string;
  /**
   * User-defined description for the connection.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier": string;
  /**
   * The properties for the connection.
   */
  "connectionProperties"?: Array<model.ConnectionProperty>;
  "registryMetadata"?: model.RegistryMetadata;

  "modelType": string;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getJsonObj(item);
            })
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_SIEBEL_CONNECTION":
          return model.CreateConnectionFromOracleSiebel.getJsonObj(
            <model.CreateConnectionFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.CreateConnectionFromAmazonS3.getJsonObj(
            <model.CreateConnectionFromAmazonS3>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.CreateConnectionFromBICC.getJsonObj(
            <model.CreateConnectionFromBICC>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.CreateConnectionFromAtp.getJsonObj(
            <model.CreateConnectionFromAtp>(<object>jsonObj),
            true
          );
        case "HDFS_CONNECTION":
          return model.CreateConnectionFromHdfs.getJsonObj(
            <model.CreateConnectionFromHdfs>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_CONNECTION":
          return model.CreateConnectionFromMySqlHeatWave.getJsonObj(
            <model.CreateConnectionFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "REST_BASIC_AUTH_CONNECTION":
          return model.CreateConnectionFromRestBasicAuth.getJsonObj(
            <model.CreateConnectionFromRestBasicAuth>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.CreateConnectionFromOracle.getJsonObj(
            <model.CreateConnectionFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_CONNECTION":
          return model.CreateConnectionFromOraclePeopleSoft.getJsonObj(
            <model.CreateConnectionFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_CONNECTION":
          return model.CreateConnectionFromOracleEbs.getJsonObj(
            <model.CreateConnectionFromOracleEbs>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.CreateConnectionFromMySQL.getJsonObj(
            <model.CreateConnectionFromMySQL>(<object>jsonObj),
            true
          );
        case "GENERIC_JDBC_CONNECTION":
          return model.CreateConnectionFromJdbc.getJsonObj(
            <model.CreateConnectionFromJdbc>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.CreateConnectionFromBIP.getJsonObj(
            <model.CreateConnectionFromBIP>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.CreateConnectionFromAdwc.getJsonObj(
            <model.CreateConnectionFromAdwc>(<object>jsonObj),
            true
          );
        case "REST_NO_AUTH_CONNECTION":
          return model.CreateConnectionFromRestNoAuth.getJsonObj(
            <model.CreateConnectionFromRestNoAuth>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.CreateConnectionFromObjectStorage.getJsonObj(
            <model.CreateConnectionFromObjectStorage>(<object>jsonObj),
            true
          );
        case "LAKE_CONNECTION":
          return model.CreateConnectionFromLake.getJsonObj(
            <model.CreateConnectionFromLake>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getDeserializedJsonObj(item);
            })
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_SIEBEL_CONNECTION":
          return model.CreateConnectionFromOracleSiebel.getDeserializedJsonObj(
            <model.CreateConnectionFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.CreateConnectionFromAmazonS3.getDeserializedJsonObj(
            <model.CreateConnectionFromAmazonS3>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.CreateConnectionFromBICC.getDeserializedJsonObj(
            <model.CreateConnectionFromBICC>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.CreateConnectionFromAtp.getDeserializedJsonObj(
            <model.CreateConnectionFromAtp>(<object>jsonObj),
            true
          );
        case "HDFS_CONNECTION":
          return model.CreateConnectionFromHdfs.getDeserializedJsonObj(
            <model.CreateConnectionFromHdfs>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_CONNECTION":
          return model.CreateConnectionFromMySqlHeatWave.getDeserializedJsonObj(
            <model.CreateConnectionFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "REST_BASIC_AUTH_CONNECTION":
          return model.CreateConnectionFromRestBasicAuth.getDeserializedJsonObj(
            <model.CreateConnectionFromRestBasicAuth>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.CreateConnectionFromOracle.getDeserializedJsonObj(
            <model.CreateConnectionFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_CONNECTION":
          return model.CreateConnectionFromOraclePeopleSoft.getDeserializedJsonObj(
            <model.CreateConnectionFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_CONNECTION":
          return model.CreateConnectionFromOracleEbs.getDeserializedJsonObj(
            <model.CreateConnectionFromOracleEbs>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.CreateConnectionFromMySQL.getDeserializedJsonObj(
            <model.CreateConnectionFromMySQL>(<object>jsonObj),
            true
          );
        case "GENERIC_JDBC_CONNECTION":
          return model.CreateConnectionFromJdbc.getDeserializedJsonObj(
            <model.CreateConnectionFromJdbc>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.CreateConnectionFromBIP.getDeserializedJsonObj(
            <model.CreateConnectionFromBIP>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.CreateConnectionFromAdwc.getDeserializedJsonObj(
            <model.CreateConnectionFromAdwc>(<object>jsonObj),
            true
          );
        case "REST_NO_AUTH_CONNECTION":
          return model.CreateConnectionFromRestNoAuth.getDeserializedJsonObj(
            <model.CreateConnectionFromRestNoAuth>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.CreateConnectionFromObjectStorage.getDeserializedJsonObj(
            <model.CreateConnectionFromObjectStorage>(<object>jsonObj),
            true
          );
        case "LAKE_CONNECTION":
          return model.CreateConnectionFromLake.getDeserializedJsonObj(
            <model.CreateConnectionFromLake>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
