/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * The detailed model for service catalog association.
 */
export interface ServiceCatalogAssociation {
  /**
   * Identifier of the association.
   */
  "id": string;
  /**
   * Identifier of the service catalog.
   */
  "serviceCatalogId": string;
  /**
   * Identifier of the entity being associated with service catalog.
   */
  "entityId": string;
  /**
   * The type of the entity that is associated with the service catalog.
   */
  "entityType"?: string;
  /**
   * Timestamp of when the resource was associated with service catalog.
   */
  "timeCreated": Date;
}

export namespace ServiceCatalogAssociation {
  export function getJsonObj(obj: ServiceCatalogAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceCatalogAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
