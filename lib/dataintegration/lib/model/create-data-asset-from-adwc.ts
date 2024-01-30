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
 * Details for the Autonomous Data Warehouse data asset type.
 */
export interface CreateDataAssetFromAdwc extends model.CreateDataAssetDetails {
  /**
   * The Autonomous Data Warehouse instance service name.
   */
  "serviceName"?: string;
  /**
   * The Autonomous Data Warehouse driver class.
   */
  "driverClass"?: string;
  /**
   * The credential file content from a Autonomous Data Warehouse wallet.
   */
  "credentialFileContent"?: string;
  "walletSecret"?: model.SensitiveAttribute;
  "walletPasswordSecret"?: model.SensitiveAttribute;
  /**
   * The Autonomous Data Warehouse instance region Id.
   */
  "regionId"?: string;
  /**
   * The Autonomous Data Warehouse instance tenancy Id.
   */
  "tenancyId"?: string;
  /**
   * The Autonomous Data Warehouse instance compartment Id.
   */
  "compartmentId"?: string;
  /**
   * Tha Autonomous Database Id
   */
  "autonomousDbId"?: string;
  "defaultConnection"?: model.CreateConnectionFromAdwc;
  "stagingDataAsset"?:
    | model.DataAssetFromJdbc
    | model.DataAssetFromOracleDetails
    | model.DataAssetFromAmazonS3
    | model.DataAssetFromMySqlHeatWave
    | model.DataAssetFromMySQL
    | model.DataAssetFromOraclePeopleSoftDetails
    | model.DataAssetFromOracleEbsDetails
    | model.DataAssetFromRestDetails
    | model.DataAssetFromAdwcDetails
    | model.DataAssetFromHdfsDetails
    | model.DataAssetFromOracleSiebelDetails
    | model.DataAssetFromObjectStorageDetails
    | model.DataAssetFromFusionApp
    | model.DataAssetFromLakeDetails
    | model.DataAssetFromAtpDetails;
  "stagingConnection"?:
    | model.ConnectionFromAmazonS3
    | model.ConnectionFromBIP
    | model.ConnectionFromMySQL
    | model.ConnectionFromOAuth2
    | model.ConnectionFromJdbc
    | model.ConnectionFromBICC
    | model.ConnectionFromMySqlHeatWave
    | model.ConnectionFromRestBasicAuth
    | model.ConnectionFromObjectStorage
    | model.ConnectionFromAdwc
    | model.ConnectionFromAtp
    | model.ConnectionFromOracle
    | model.ConnectionFromOraclePeopleSoft
    | model.ConnectionFromHdfs
    | model.ConnectionFromOracleEbs
    | model.ConnectionFromOracleSiebel
    | model.ConnectionFromRestNoAuth
    | model.ConnectionFromLake;
  "bucketSchema"?: model.Schema;

  "modelType": string;
}

export namespace CreateDataAssetFromAdwc {
  export function getJsonObj(obj: CreateDataAssetFromAdwc, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getJsonObj(obj) as CreateDataAssetFromAdwc)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.walletPasswordSecret)
          : undefined,

        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromAdwc.getJsonObj(obj.defaultConnection)
          : undefined,
        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getJsonObj(obj.stagingConnection)
          : undefined,
        "bucketSchema": obj.bucketSchema ? model.Schema.getJsonObj(obj.bucketSchema) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ADWC_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: CreateDataAssetFromAdwc,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getDeserializedJsonObj(obj) as CreateDataAssetFromAdwc)),
      ...{
        "walletSecret": obj.walletSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletSecret)
          : undefined,
        "walletPasswordSecret": obj.walletPasswordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.walletPasswordSecret)
          : undefined,

        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromAdwc.getDeserializedJsonObj(obj.defaultConnection)
          : undefined,
        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getDeserializedJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getDeserializedJsonObj(obj.stagingConnection)
          : undefined,
        "bucketSchema": obj.bucketSchema
          ? model.Schema.getDeserializedJsonObj(obj.bucketSchema)
          : undefined
      }
    };

    return jsonObj;
  }
}
