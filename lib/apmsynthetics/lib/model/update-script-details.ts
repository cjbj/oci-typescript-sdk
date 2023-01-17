/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Details of the request body used to update a script.
 * Only Side or JavaScript content types are supported and content should be in Side or JavaScript formats only.
 *
 */
export interface UpdateScriptDetails {
  /**
   * Unique name that can be edited. The name should not contain any confidential information.
   */
  "displayName"?: string;
  /**
   * Content type of script.
   */
  "contentType"?: model.ContentTypes;
  /**
   * The content of the script. It may contain custom-defined tags that can be used for setting dynamic parameters.
   * The format to set dynamic parameters is: `<ORAP><ON>param name</ON><OV>param value</OV><OS>isParamValueSecret(true/false)</OS></ORAP>`.
   * Param value and isParamValueSecret are optional, the default value for isParamValueSecret is false.
   * Examples:
   * With mandatory param name : `<ORAP><ON>param name</ON></ORAP>`
   * With parameter name and value : `<ORAP><ON>param name</ON><OV>param value</OV></ORAP>`
   * Note that the content is valid if it matches the given content type. For example, if the content type is SIDE, then the content should be in Side script format. If the content type is JS, then the content should be in JavaScript format.
   *
   */
  "content"?: string;
  /**
   * File name of uploaded script content.
   */
  "contentFileName"?: string;
  /**
   * List of script parameters. Example: `[{\"paramName\": \"userid\", \"paramValue\":\"testuser\", \"isSecret\": false}]`
   *
   */
  "parameters"?: Array<model.ScriptParameter>;
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

export namespace UpdateScriptDetails {
  export function getJsonObj(obj: UpdateScriptDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.ScriptParameter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateScriptDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.ScriptParameter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
