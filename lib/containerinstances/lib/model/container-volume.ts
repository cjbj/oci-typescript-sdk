/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * A volume represents a directory with data that is accessible across multiple containers in a
 * container instance.
 *
 */
export interface ContainerVolume {
  /**
   * The name of the volume. This must be unique within a single container instance.
   *
   */
  "name": string;

  "volumeType": string;
}

export namespace ContainerVolume {
  export function getJsonObj(obj: ContainerVolume): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "volumeType" in obj && obj.volumeType) {
      switch (obj.volumeType) {
        case "EMPTYDIR":
          return model.ContainerEmptyDirVolume.getJsonObj(
            <model.ContainerEmptyDirVolume>(<object>jsonObj),
            true
          );
        case "CONFIGFILE":
          return model.ContainerConfigFileVolume.getJsonObj(
            <model.ContainerConfigFileVolume>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.volumeType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerVolume): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "volumeType" in obj && obj.volumeType) {
      switch (obj.volumeType) {
        case "EMPTYDIR":
          return model.ContainerEmptyDirVolume.getDeserializedJsonObj(
            <model.ContainerEmptyDirVolume>(<object>jsonObj),
            true
          );
        case "CONFIGFILE":
          return model.ContainerConfigFileVolume.getDeserializedJsonObj(
            <model.ContainerConfigFileVolume>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.volumeType}`);
      }
    }
    return jsonObj;
  }
}
