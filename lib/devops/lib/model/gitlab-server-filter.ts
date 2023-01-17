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
 * The filter for GitLab self-hosted events.
 */
export interface GitlabServerFilter extends model.Filter {
  /**
   * The events, for example, PUSH, PULL_REQUEST_MERGE.
   */
  "events"?: Array<GitlabServerFilter.Events>;
  "include"?: model.GitlabServerFilterAttributes;
  "exclude"?: model.GitlabServerFilterExclusionAttributes;

  "triggerSource": string;
}

export namespace GitlabServerFilter {
  export enum Events {
    Push = "PUSH",
    PullRequestCreated = "PULL_REQUEST_CREATED",
    PullRequestUpdated = "PULL_REQUEST_UPDATED",
    PullRequestReopened = "PULL_REQUEST_REOPENED",
    PullRequestMerged = "PULL_REQUEST_MERGED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: GitlabServerFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Filter.getJsonObj(obj) as GitlabServerFilter)),
      ...{
        "include": obj.include
          ? model.GitlabServerFilterAttributes.getJsonObj(obj.include)
          : undefined,
        "exclude": obj.exclude
          ? model.GitlabServerFilterExclusionAttributes.getJsonObj(obj.exclude)
          : undefined
      }
    };

    return jsonObj;
  }
  export const triggerSource = "GITLAB_SERVER";
  export function getDeserializedJsonObj(
    obj: GitlabServerFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Filter.getDeserializedJsonObj(obj) as GitlabServerFilter)),
      ...{
        "include": obj.include
          ? model.GitlabServerFilterAttributes.getDeserializedJsonObj(obj.include)
          : undefined,
        "exclude": obj.exclude
          ? model.GitlabServerFilterExclusionAttributes.getDeserializedJsonObj(obj.exclude)
          : undefined
      }
    };

    return jsonObj;
  }
}
