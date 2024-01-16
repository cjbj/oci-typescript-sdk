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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * You can update the authorization details to access the source environment from which you want to migrate applications to
 * Oracle Cloud Infrastructure. You can also update the description and tags of a source.
 *
 */
export interface UpdateSourceDetails {
  /**
   * Name of the source. This helps you to identify the appropriate source environment when you have multiple sources defined.
   */
  "displayName"?: string;
  /**
   * Description of the source. This helps you to identify the appropriate source environment when you have multiple sources defined.
   */
  "description"?: string;
  "sourceDetails"?:
    | model.ImportSourceDetails
    | model.OccSourceDetails
    | model.InternalSourceDetails
    | model.OcicSourceDetails;
  "authorizationDetails"?:
    | model.OccAuthorizationDetails
    | model.InternalAuthorizationDetails
    | model.OcicAuthorizationTokenDetails
    | model.OcicAuthorizationDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateSourceDetails {
  export function getJsonObj(obj: UpdateSourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,
        "authorizationDetails": obj.authorizationDetails
          ? model.AuthorizationDetails.getJsonObj(obj.authorizationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,
        "authorizationDetails": obj.authorizationDetails
          ? model.AuthorizationDetails.getDeserializedJsonObj(obj.authorizationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
