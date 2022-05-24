/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of `Package` object.
 */
export interface Package {
  /**
   * Unique immutable identifier that was assigned when the Package was registered.
   */
  "id": string;
  /**
   * ID of the publisher providing the package.
   *
   */
  "publisherId": string;
  /**
   * Name of package.
   */
  "name": string;
  /**
   * Display name for the package (displayed in UI and user-facing applications).
   */
  "displayName": string;
  /**
   * Version of the package.
   */
  "version": string;
  /**
   * When the package was uploaded. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUploaded": Date;
  /**
   * When the package was last published. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timePublished": Date;
  /**
   * Description of the package.
   */
  "description": string;
  /**
   * A list of resource types describing the content of the package.
   */
  "resourceTypes": Array<string>;
  /**
   * A map of resource type to metadata key/value map that further describes the content for the resource types in this package.. Keys are resource type names, values are a map of name/value pairs per resource type.
   */
  "resourceTypesMetadata": Array<model.ResourceTypeMetadata>;
  /**
   * A map of metadata key/value pairs that further describes the publisher and the platform in which the package might be used.
   */
  "publisherMetadata": Array<model.MetadataProperty>;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "importContract": model.ImportContract;
  "defaultParameterValues": model.DefaultParameterValues;
}

export namespace Package {
  export function getJsonObj(obj: Package): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceTypesMetadata": obj.resourceTypesMetadata
          ? obj.resourceTypesMetadata.map(item => {
              return model.ResourceTypeMetadata.getJsonObj(item);
            })
          : undefined,
        "publisherMetadata": obj.publisherMetadata
          ? obj.publisherMetadata.map(item => {
              return model.MetadataProperty.getJsonObj(item);
            })
          : undefined,

        "importContract": obj.importContract
          ? model.ImportContract.getJsonObj(obj.importContract)
          : undefined,
        "defaultParameterValues": obj.defaultParameterValues
          ? model.DefaultParameterValues.getJsonObj(obj.defaultParameterValues)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Package): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceTypesMetadata": obj.resourceTypesMetadata
          ? obj.resourceTypesMetadata.map(item => {
              return model.ResourceTypeMetadata.getDeserializedJsonObj(item);
            })
          : undefined,
        "publisherMetadata": obj.publisherMetadata
          ? obj.publisherMetadata.map(item => {
              return model.MetadataProperty.getDeserializedJsonObj(item);
            })
          : undefined,

        "importContract": obj.importContract
          ? model.ImportContract.getDeserializedJsonObj(obj.importContract)
          : undefined,
        "defaultParameterValues": obj.defaultParameterValues
          ? model.DefaultParameterValues.getDeserializedJsonObj(obj.defaultParameterValues)
          : undefined
      }
    };

    return jsonObj;
  }
}
