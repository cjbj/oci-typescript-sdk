/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
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
 * A JavaDownloadToken is a primary resource for the script friendly URLs. The value of this token serves as the authorization token for the download.
 */
export interface JavaDownloadToken {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the JavaDownloadToken.
   *
   */
  "id": string;
  /**
   * User provided display name of the JavaDownloadToken.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the tenancy scoped to the JavaDownloadToken.
   *
   */
  "compartmentId": string;
  "createdBy": model.Principal;
  "lastUpdatedBy"?: model.Principal;
  /**
   * User provided description of the JavaDownloadToken.
   */
  "description": string;
  /**
   * Uniquely generated value for the JavaDownloadToken.
   */
  "value": string;
  /**
   * The time the JavaDownloadToken was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the JavaDownloadToken was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The time the JavaDownloadToken was last used for download. An RFC3339 formatted datetime string.
   */
  "timeLastUsed"?: Date;
  /**
   * The expiry time of the JavaDownloadToken. An RFC3339 formatted datetime string.
   */
  "timeExpires": Date;
  /**
   * The associated Java version of the JavaDownloadToken.
   */
  "javaVersion": string;
  /**
   * The license type(s) associated with the JavaDownloadToken.
   */
  "licenseType"?: Array<model.LicenseType>;
  /**
   * A flag to indicate if the token is default.
   */
  "isDefault"?: boolean;
  /**
   * The current state of the JavaDownloadToken.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Possible lifecycle substates.
   */
  "lifecycleDetails"?: model.TokenLifecycleDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`. (See [Managing Tags and Tag Namespaces](https://docs.cloud.oracle.com/Content/Tagging/Concepts/understandingfreeformtags.htm).)
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. (See [Understanding Free-form Tags](https://docs.cloud.oracle.com/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm)).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace JavaDownloadToken {
  export function getJsonObj(obj: JavaDownloadToken): object {
    const jsonObj = {
      ...obj,
      ...{
        "createdBy": obj.createdBy ? model.Principal.getJsonObj(obj.createdBy) : undefined,
        "lastUpdatedBy": obj.lastUpdatedBy
          ? model.Principal.getJsonObj(obj.lastUpdatedBy)
          : undefined,

        "licenseType": obj.licenseType
          ? obj.licenseType.map(item => {
              return model.LicenseType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaDownloadToken): object {
    const jsonObj = {
      ...obj,
      ...{
        "createdBy": obj.createdBy
          ? model.Principal.getDeserializedJsonObj(obj.createdBy)
          : undefined,
        "lastUpdatedBy": obj.lastUpdatedBy
          ? model.Principal.getDeserializedJsonObj(obj.lastUpdatedBy)
          : undefined,

        "licenseType": obj.licenseType
          ? obj.licenseType.map(item => {
              return model.LicenseType.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
