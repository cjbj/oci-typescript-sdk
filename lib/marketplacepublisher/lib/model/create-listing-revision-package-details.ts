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
 * The model for an Oracle Cloud Infrastructure Marketplace Publisher listing revision package.
 */
export interface CreateListingRevisionPackageDetails {
  /**
   * The OCID for the listing revision in Marketplace Publisher.
   */
  "listingRevisionId": string;
  /**
   * The version for the package.
   */
  "packageVersion": string;
  /**
   * The name for the listing revision package.
   */
  "displayName"?: string;
  /**
   * Description for this package.
   */
  "description"?: string;
  /**
   * The unique identifier for the artifact.
   */
  "artifactId": string;
  /**
   * The unique identifier for the term.
   */
  "termId": string;
  /**
   * Identifies that this will be default package for the listing revision.
   */
  "isDefault"?: boolean;
  /**
   * Identifies whether security upgrades will be provided for this package.
   */
  "areSecurityUpgradesProvided": boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateListingRevisionPackageDetails {
  export function getJsonObj(obj: CreateListingRevisionPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateListingRevisionPackageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
