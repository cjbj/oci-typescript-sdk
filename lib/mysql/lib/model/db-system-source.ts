/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Parameters detailing how to provision the initial data of the DB System.
 *
 */
export interface DbSystemSource {
  "sourceType": string;
}

export namespace DbSystemSource {
  export function getJsonObj(obj: DbSystemSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "BACKUP":
          return model.DbSystemSourceFromBackup.getJsonObj(
            <model.DbSystemSourceFromBackup>(<object>jsonObj),
            true
          );
        case "PITR":
          return model.DbSystemSourceFromPitr.getJsonObj(
            <model.DbSystemSourceFromPitr>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.DbSystemSourceFromNone.getJsonObj(
            <model.DbSystemSourceFromNone>(<object>jsonObj),
            true
          );
        case "IMPORTURL":
          return model.DbSystemSourceImportFromUrl.getJsonObj(
            <model.DbSystemSourceImportFromUrl>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "BACKUP":
          return model.DbSystemSourceFromBackup.getDeserializedJsonObj(
            <model.DbSystemSourceFromBackup>(<object>jsonObj),
            true
          );
        case "PITR":
          return model.DbSystemSourceFromPitr.getDeserializedJsonObj(
            <model.DbSystemSourceFromPitr>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.DbSystemSourceFromNone.getDeserializedJsonObj(
            <model.DbSystemSourceFromNone>(<object>jsonObj),
            true
          );
        case "IMPORTURL":
          return model.DbSystemSourceImportFromUrl.getDeserializedJsonObj(
            <model.DbSystemSourceImportFromUrl>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
}
