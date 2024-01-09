/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Reference object with name and commit ID.
 */
export interface RepositoryRef {
  /**
   * Unique reference name inside a repository.
   */
  "refName": string;
  /**
   * Unique full reference name inside a repository.
   */
  "fullRefName": string;
  /**
   * The OCID of the repository containing the reference.
   */
  "repositoryId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "refType": string;
}

export namespace RepositoryRef {
  export function getJsonObj(obj: RepositoryRef): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "refType" in obj && obj.refType) {
      switch (obj.refType) {
        case "BRANCH":
          return model.RepositoryBranch.getJsonObj(<model.RepositoryBranch>(<object>jsonObj), true);
        case "TAG":
          return model.RepositoryTag.getJsonObj(<model.RepositoryTag>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.refType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RepositoryRef): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "refType" in obj && obj.refType) {
      switch (obj.refType) {
        case "BRANCH":
          return model.RepositoryBranch.getDeserializedJsonObj(
            <model.RepositoryBranch>(<object>jsonObj),
            true
          );
        case "TAG":
          return model.RepositoryTag.getDeserializedJsonObj(
            <model.RepositoryTag>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.refType}`);
      }
    }
    return jsonObj;
  }
}
