/**
 * Object Storage Service API
 * Use Object Storage and Archive Storage APIs to manage buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
* Gets summary information about multipart uploads.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
* talk to an administrator. If you are an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface MultipartUploadPartSummary {
  /**
   * The current entity tag (ETag) for the part.
   */
  "etag": string;
  /**
   * The MD5 hash of the bytes of the part.
   */
  "md5": string;
  /**
   * The size of the part in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size": number;
  /**
   * The part number for this part. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partNumber": number;
}

export namespace MultipartUploadPartSummary {
  export function getJsonObj(obj: MultipartUploadPartSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MultipartUploadPartSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
