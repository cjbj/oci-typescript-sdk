/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the input to update storage configuration of a tenancy in Logan Analytics application
 */
export interface UpdateStorageDetails {
  "archivingConfiguration": model.ArchivingConfiguration;
}

export namespace UpdateStorageDetails {
  export function getJsonObj(obj: UpdateStorageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "archivingConfiguration": obj.archivingConfiguration
          ? model.ArchivingConfiguration.getJsonObj(obj.archivingConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateStorageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "archivingConfiguration": obj.archivingConfiguration
          ? model.ArchivingConfiguration.getDeserializedJsonObj(obj.archivingConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
