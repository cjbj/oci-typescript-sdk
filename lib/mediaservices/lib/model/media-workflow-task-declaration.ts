/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * The declaration of a type of task that can be used in a MediaWorkflow.
 */
export interface MediaWorkflowTaskDeclaration {
  /**
   * MediaWorkflowTaskDeclaration identifier. The name and version should be unique among
   * MediaWorkflowTaskDeclarations.
   *
   */
  "name": string;
  /**
   * The version of MediaWorkflowTaskDeclaration, incremented whenever the team implementing the task processor
   * modifies the JSON schema of this declaration's definitions, parameters or list of required parameters.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version": number;
  /**
   * JSON schema specifying the parameters supported by this type of task. This is used to validate tasks'
   * parameters when jobs are created.
   *
   */
  "parametersSchema": { [key: string]: any };
  /**
   * JSON schema similar to the parameterSchema, but permits parameter values to refer to other parameters using the
   * ${/path/to/another/parmeter} syntax.  This is used to validate task parameters when workflows are created.
   *
   */
  "parametersSchemaAllowingReferences": { [key: string]: any };
}

export namespace MediaWorkflowTaskDeclaration {
  export function getJsonObj(obj: MediaWorkflowTaskDeclaration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MediaWorkflowTaskDeclaration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
