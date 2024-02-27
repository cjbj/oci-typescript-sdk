/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Metadata for an entity.
 */
export interface Entity {
  /**
   * Unique immutable identifier that was assigned when the resource was created.
   */
  "id": string;
  /**
   * The entity name. This must be unique within the parent resource.
   */
  "name": string;

  "type": string;
}

export namespace Entity {
  export function getJsonObj(obj: Entity): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "COMPOSITE":
          return model.CompositeEntity.getJsonObj(<model.CompositeEntity>(<object>jsonObj), true);
        case "ENUM_VALUES":
          return model.ValueListEntity.getJsonObj(<model.ValueListEntity>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Entity): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "COMPOSITE":
          return model.CompositeEntity.getDeserializedJsonObj(
            <model.CompositeEntity>(<object>jsonObj),
            true
          );
        case "ENUM_VALUES":
          return model.ValueListEntity.getDeserializedJsonObj(
            <model.ValueListEntity>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
