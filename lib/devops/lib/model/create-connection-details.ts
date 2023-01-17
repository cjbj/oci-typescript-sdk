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
 * The details for creating a connection.
 *
 */
export interface CreateConnectionDetails {
  /**
   * Optional description about the connection.
   */
  "description"?: string;
  /**
   * Optional connection display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the DevOps project.
   */
  "projectId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "connectionType": string;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "VBS_ACCESS_TOKEN":
          return model.CreateVbsAccessTokenConnectionDetails.getJsonObj(
            <model.CreateVbsAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_SERVER_ACCESS_TOKEN":
          return model.CreateGitlabServerAccessTokenConnectionDetails.getJsonObj(
            <model.CreateGitlabServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.CreateBitbucketServerAccessTokenConnectionDetails.getJsonObj(
            <model.CreateBitbucketServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.CreateGithubAccessTokenConnectionDetails.getJsonObj(
            <model.CreateGithubAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_APP_PASSWORD":
          return model.CreateBitbucketCloudAppPasswordConnectionDetails.getJsonObj(
            <model.CreateBitbucketCloudAppPasswordConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.CreateGitlabAccessTokenConnectionDetails.getJsonObj(
            <model.CreateGitlabAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "VBS_ACCESS_TOKEN":
          return model.CreateVbsAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.CreateVbsAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_SERVER_ACCESS_TOKEN":
          return model.CreateGitlabServerAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.CreateGitlabServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.CreateBitbucketServerAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.CreateBitbucketServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.CreateGithubAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.CreateGithubAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_APP_PASSWORD":
          return model.CreateBitbucketCloudAppPasswordConnectionDetails.getDeserializedJsonObj(
            <model.CreateBitbucketCloudAppPasswordConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.CreateGitlabAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.CreateGitlabAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}
