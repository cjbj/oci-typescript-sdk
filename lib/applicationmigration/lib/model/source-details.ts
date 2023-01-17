/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
* Specify one of the following values depending for the 'type' attribute based on the application that you want to migrate.
* <p>
Specify `OCIC` if you want to migrate Oracle Java Cloud Service, Oracle Analytics Cloud - Classic, Oracle Integration, and Oracle
* SOA Cloud Service applications from Oracle Cloud Infrastructure - Classic.
* <p>
Specify `INTERNAL_COMPUTE` if you have a traditional Oracle Cloud Infrastructure - Classic account and you want to migrate Oracle
* Process Cloud Service or Oracle Integration Cloud Service applications.
* <p>
Specify `OCC` if you want to migrate applications from Oracle Cloud@Customer.
* 
*/
export interface SourceDetails {
  "type": string;
}

export namespace SourceDetails {
  export function getJsonObj(obj: SourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "IMPORT":
          return model.ImportSourceDetails.getJsonObj(
            <model.ImportSourceDetails>(<object>jsonObj),
            true
          );
        case "OCC":
          return model.OccSourceDetails.getJsonObj(<model.OccSourceDetails>(<object>jsonObj), true);
        case "INTERNAL_COMPUTE":
          return model.InternalSourceDetails.getJsonObj(
            <model.InternalSourceDetails>(<object>jsonObj),
            true
          );
        case "OCIC":
          return model.OcicSourceDetails.getJsonObj(
            <model.OcicSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "IMPORT":
          return model.ImportSourceDetails.getDeserializedJsonObj(
            <model.ImportSourceDetails>(<object>jsonObj),
            true
          );
        case "OCC":
          return model.OccSourceDetails.getDeserializedJsonObj(
            <model.OccSourceDetails>(<object>jsonObj),
            true
          );
        case "INTERNAL_COMPUTE":
          return model.InternalSourceDetails.getDeserializedJsonObj(
            <model.InternalSourceDetails>(<object>jsonObj),
            true
          );
        case "OCIC":
          return model.OcicSourceDetails.getDeserializedJsonObj(
            <model.OcicSourceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
