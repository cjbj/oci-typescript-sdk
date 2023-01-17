/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Information about the new repository.
 */
export interface CreateRepositoryDetails {
  /**
   * Unique name of a repository.
   */
  "name": string;
  /**
   * The OCID of the DevOps project containing the repository.
   */
  "projectId": string;
  /**
   * The default branch of the repository.
   */
  "defaultBranch"?: string;
  /**
   * Type of repository. Allowed values:
   * `MIRRORED`
   * `HOSTED`
   *
   */
  "repositoryType": string;
  "mirrorRepositoryConfig"?: model.MirrorRepositoryConfig;
  /**
   * Details of the repository. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateRepositoryDetails {
  export function getJsonObj(obj: CreateRepositoryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "mirrorRepositoryConfig": obj.mirrorRepositoryConfig
          ? model.MirrorRepositoryConfig.getJsonObj(obj.mirrorRepositoryConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateRepositoryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "mirrorRepositoryConfig": obj.mirrorRepositoryConfig
          ? model.MirrorRepositoryConfig.getDeserializedJsonObj(obj.mirrorRepositoryConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
