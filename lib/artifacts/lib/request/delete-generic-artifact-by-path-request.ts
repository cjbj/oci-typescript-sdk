/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/artifacts/DeleteGenericArtifactByPath.ts.html |here} to see how to use DeleteGenericArtifactByPathRequest.
 */
export interface DeleteGenericArtifactByPathRequest extends common.BaseRequest {
  /**
 * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the repository.
* <p>
Example: {@code ocid1.artifactrepository.oc1..exampleuniqueID}
* 
 */
  "repositoryId": string;
  /**
 * A user-defined path to describe the location of an artifact. You can use slashes to organize the repository, but slashes do not create a directory structure. An artifact path does not include an artifact version.
* <p>
Example: {@code project01/my-web-app/artifact-abc}
* 
 */
  "artifactPath": string;
  /**
 * A user-defined string to describe the artifact version.
* <p>
Example: {@code 1.1.2} or {@code 1.2-beta-2}
* 
 */
  "version": string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the {@code if-match}
   * parameter to the value of the etag from a previous GET or POST response for that resource. The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}
