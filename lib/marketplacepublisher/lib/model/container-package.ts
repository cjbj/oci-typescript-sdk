/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * A package for container image listings.
 */
export interface ContainerPackage extends model.ListingRevisionPackage {
  "packageType": string;
}

export namespace ContainerPackage {
  export function getJsonObj(obj: ContainerPackage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingRevisionPackage.getJsonObj(obj) as ContainerPackage)),
      ...{}
    };

    return jsonObj;
  }
  export const packageType = "CONTAINER_IMAGE";
  export function getDeserializedJsonObj(obj: ContainerPackage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingRevisionPackage.getDeserializedJsonObj(obj) as ContainerPackage)),
      ...{}
    };

    return jsonObj;
  }
}
